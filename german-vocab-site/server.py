import asyncio
import hashlib
import json
import mimetypes
import os
import re
import sys
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib import error as urllib_error
from urllib import parse as urllib_parse
from urllib import request as urllib_request

sys.path.insert(0, str((Path(__file__).parent / ".vendor").resolve()))
import edge_tts


ROOT = Path(__file__).parent.resolve()
CACHE_DIR = ROOT / ".cache" / "tts"
ENV_FILE = ROOT / ".env"
CACHE_VERSION = "edge-v4"
DEFAULT_VOICE = "de-DE-KatjaNeural"
DEFAULT_FORMAT = "mp3"
DEFAULT_RATE = "0%"
WORD_LOOKUP_ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/de/"
TRANSLATE_ENDPOINT = "https://api.mymemory.translated.net/get"
SCRIPT_PATH = ROOT / "script.js"
BOOK_NOTES_PATH = ROOT / "de_notes.json"
VOICE_MAP = {
    "de-DE": "de-DE-KatjaNeural",
    "de-AT": "de-AT-IngridNeural",
    "de-CH": "de-CH-LeniNeural",
    "edge-de": "de-DE-KatjaNeural",
    "edge-de-conrad": "de-DE-ConradNeural",
    "edge-at": "de-AT-IngridNeural",
    "edge-ch": "de-CH-LeniNeural",
}
SCRIPT_WORD_PATTERN = re.compile(
    r'createWord\(\s*"(?P<id>[^"]+)",\s*"(?P<lemma>[^"]+)",\s*"(?P<definition_en>[^"]+)",\s*"(?P<definition_zh>[^"]+)"(?:,\s*"(?P<note_zh>[^"]*)")?\s*\)',
    re.DOTALL,
)
SCRIPT_LEXICON_CACHE = None
BOOK_NOTES_CACHE = None

GLOSSARY_REPLACEMENTS = [
    (r"\bjemand\b", "某人"),
    (r"\betwas\b", "某事/某物"),
    (r"\bperson\b", "人"),
    (r"\bleute\b", "人们"),
    (r"\bort\b", "地方"),
    (r"\bart\b", "方式"),
    (r"\bzustand\b", "状态"),
    (r"\beigenschaft\b", "特质"),
    (r"\bfähigkeit\b", "能力"),
    (r"\bfaehigkeit\b", "能力"),
    (r"\bgruppe\b", "群体"),
    (r"\bsystem\b", "体系"),
    (r"\bprozess\b", "过程"),
    (r"\blernen\b", "学习"),
    (r"\barbeiten\b", "工作"),
    (r"\bschreiben\b", "写"),
    (r"\blesen\b", "读"),
    (r"\bsprechen\b", "说"),
    (r"\bsagen\b", "说"),
    (r"\bwissen\b", "知道"),
    (r"\bverstehen\b", "理解"),
    (r"\bzeigen\b", "表现"),
    (r"\bmachen\b", "使"),
    (r"\bwerden\b", "变得"),
    (r"\bbenutzen\b", "使用"),
    (r"\bverwenden\b", "使用"),
    (r"\bweiter\b", "继续"),
    (r"\bgehen\b", "去"),
    (r"\bkommen\b", "来"),
    (r"\bgeben\b", "给"),
    (r"\bnehmen\b", "采取"),
    (r"\bhelfen\b", "帮助"),
    (r"\bbrauchen\b", "需要"),
    (r"\bfühlen\b", "感觉"),
    (r"\bfuehlen\b", "感觉"),
    (r"\bidee\b", "想法"),
    (r"\bproblem\b", "问题"),
    (r"\bergebnis\b", "结果"),
    (r"\bmenge\b", "数量"),
    (r"\bzeit\b", "时间"),
    (r"\bänderung\b", "改变"),
    (r"\baenderung\b", "改变"),
    (r"\bchance\b", "机会"),
    (r"\bregel\b", "规则"),
    (r"\bplan\b", "计划"),
    (r"\bsehr\b", "非常"),
    (r"\bnicht\b", "不"),
    (r"\bohne\b", "没有"),
    (r"\bmit\b", "带有"),
    (r"\bvor\b", "在…之前"),
    (r"\bnach\b", "在…之后"),
    (r"\bfür\b", "用于"),
    (r"\bfuer\b", "用于"),
    (r"\bvon\b", "来自"),
    (r"\bzwischen\b", "在…之间"),
    (r"\bdurch\b", "通过"),
    (r"\bweil\b", "因为"),
]


def speed_to_edge_rate(speed):
    try:
        numeric_speed = float(speed)
    except (TypeError, ValueError):
        numeric_speed = 1.0

    percent = round((numeric_speed - 1.0) * 100)
    sign = "+" if percent >= 0 else ""
    return f"{sign}{percent}%"


def load_dotenv():
    if not ENV_FILE.exists():
        return

    for line in ENV_FILE.read_text(encoding="utf-8").splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#") or "=" not in stripped:
            continue

        key, value = stripped.split("=", 1)
        key = key.strip()
        value = value.strip().strip("'").strip('"')

        if key and key not in os.environ:
            os.environ[key] = value


def save_env_value(key, value):
    existing = []

    if ENV_FILE.exists():
        existing = ENV_FILE.read_text(encoding="utf-8").splitlines()

    updated = []
    replaced = False

    for line in existing:
        stripped = line.strip()
        if stripped.startswith(f"{key}="):
            updated.append(f"{key}={value}")
            replaced = True
        else:
            updated.append(line)

    if not replaced:
        updated.append(f"{key}={value}")

    ENV_FILE.write_text("\n".join(updated).strip() + "\n", encoding="utf-8")


def normalize_space(value):
    return re.sub(r"\s+", " ", str(value or "")).strip()


def normalize_latin_lookup_text(value):
    return (
        str(value or "")
        .strip()
        .lower()
        .replace("ä", "ae")
        .replace("ö", "oe")
        .replace("ü", "ue")
        .replace("ß", "ss")
    )


def normalize_lookup_key(value):
    normalized = normalize_latin_lookup_text(value)
    return re.sub(r"[^a-z0-9]+", " ", normalized).strip()


def dedupe_join(parts, separator="；"):
    seen = set()
    result = []

    for part in parts:
        cleaned = normalize_space(part)
        if not cleaned or cleaned in seen:
            continue
        seen.add(cleaned)
        result.append(cleaned)

    return separator.join(result)


def build_word_aliases(word):
    raw = normalize_space(word)
    candidates = {raw, re.sub(r"\([^)]*\)", "", raw)}

    for piece in re.split(r"/|,|;|\bor\b|\boder\b", raw, flags=re.IGNORECASE):
        cleaned = re.sub(r"\([^)]*\)", "", piece).strip()
        if cleaned:
            candidates.add(cleaned)
            candidates.add(re.sub(r"^(der|die|das|ein|eine|einen|einem|einer|eines)\s+", "", cleaned, flags=re.IGNORECASE).strip())

    aliases = set()

    for candidate in candidates:
        normalized = normalize_lookup_key(candidate)
        if not normalized:
            continue

        aliases.add(normalized)

        if " " in normalized:
            aliases.add(normalized.split(" ", 1)[0])

    return aliases


def parse_script_word_index():
    if not SCRIPT_PATH.exists():
        return {}

    index = {}
    source = SCRIPT_PATH.read_text(encoding="utf-8")

    for match in SCRIPT_WORD_PATTERN.finditer(source):
        entry = {
            "id": match.group("id"),
            "word": normalize_space(match.group("lemma")),
            "definitionEn": normalize_space(match.group("definition_en")),
            "definitionZh": normalize_space(match.group("definition_zh")),
            "noteZh": normalize_space(match.group("note_zh")),
            "source": "当前词库",
        }

        for alias in build_word_aliases(entry["word"]):
            index.setdefault(alias, entry)

    return index


def get_script_word_index():
    global SCRIPT_LEXICON_CACHE

    if SCRIPT_LEXICON_CACHE is None:
        SCRIPT_LEXICON_CACHE = parse_script_word_index()

    return SCRIPT_LEXICON_CACHE


def load_book_notes():
    if not BOOK_NOTES_PATH.exists():
        return {}

    try:
        return json.loads(BOOK_NOTES_PATH.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {}


def get_book_notes():
    global BOOK_NOTES_CACHE

    if BOOK_NOTES_CACHE is None:
        BOOK_NOTES_CACHE = load_book_notes()

    return BOOK_NOTES_CACHE


def rough_translate_definition(text):
    translated = normalize_space(text).lower()

    for pattern, replacement in GLOSSARY_REPLACEMENTS:
        translated = re.sub(pattern, replacement, translated)

    translated = translated.replace(" / ", "/").replace(" ,", ",")
    translated = translated.replace(";", "；").replace(",", "，")
    translated = translated.strip(" .")
    translated = re.sub(r"\b(der|die|das|ein|eine|einen|einem|einer|eines)\b", "", translated)
    translated = normalize_space(translated)
    return translated


def translate_text(text, langpair):
    query = urllib_parse.urlencode(
        {
            "q": normalize_space(text),
            "langpair": langpair,
        }
    )
    payload = fetch_json(f"{TRANSLATE_ENDPOINT}?{query}")
    return normalize_space((payload.get("responseData") or {}).get("translatedText", ""))


def translate_text_to_chinese(text):
    return translate_text(text, "de|zh-CN")


def translate_text_to_english(text):
    return translate_text(text, "de|en")


def build_chinese_gloss(definition, part_of_speech, translated_text=""):
    rough = normalize_space(translated_text) or rough_translate_definition(definition)

    if not rough:
        return ""

    if part_of_speech == "verb":
        return f"表示“{rough}”"

    if part_of_speech == "adjective":
        return f"表示“{rough}”的"

    if part_of_speech == "adverb":
        return f"表示“{rough}”地"

    return rough


def fetch_json(url, method="GET", payload=None, headers=None, timeout=8):
    request_headers = {
        "Accept": "application/json",
        "User-Agent": "CodexWordLookup/1.0",
        **(headers or {}),
    }
    request_data = None

    if payload is not None:
        request_data = json.dumps(payload).encode("utf-8")
        request_headers = {"Content-Type": "application/json", **request_headers}

    request = urllib_request.Request(url, data=request_data, headers=request_headers, method=method)

    with urllib_request.urlopen(request, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8"))


def lookup_local_word_entry(word):
    key = normalize_lookup_key(word)
    entry = get_script_word_index().get(key)

    if not entry:
        return None

    return {
        "word": entry["word"],
        "definitionEn": entry["definitionEn"],
        "definitionZh": entry["definitionZh"],
        "noteZh": entry["noteZh"],
        "exampleEn": "",
        "phonetic": "",
        "partOfSpeech": "",
        "source": entry["source"],
    }


def score_book_line(text, lookup_key):
    normalized = normalize_lookup_key(text)

    if not normalized:
        return 0

    padded = f" {normalized} "
    target = f" {lookup_key} "

    if target in padded:
        return 3

    if lookup_key in normalized:
        return 1

    return 0


def lookup_book_resource(word):
    lookup_key = normalize_lookup_key(word)

    if not lookup_key:
        return None

    book = get_book_notes()
    sections = book.get("sections") or []
    best_match = None
    best_score = 0

    for section in sections:
        for entry in section.get("entries") or []:
            score = 0
            title = normalize_lookup_key(entry.get("title", ""))

            if title == lookup_key:
                score += 8
            elif lookup_key and lookup_key in title:
                score += 4

            matched_lines = []
            lines = (entry.get("content") or []) + (entry.get("quick_review") or [])

            for line in lines:
                line_score = score_book_line(line, lookup_key)
                if not line_score:
                    continue

                score += line_score

                if len(matched_lines) < 3:
                    matched_lines.append(normalize_space(line))

            if score > best_score:
                best_score = score
                best_match = {
                    "section": section,
                    "entry": entry,
                    "matched_lines": matched_lines,
                }

    if not best_match:
        return None

    entry = best_match["entry"]
    section = best_match["section"]
    lines = best_match["matched_lines"] or (entry.get("quick_review") or [])[:2] or (entry.get("content") or [])[:2]
    line_preview = dedupe_join(lines[:3])
    note = dedupe_join(
        [
            f"词书线索：{entry.get('title', '')}",
            section.get("title", ""),
            line_preview,
        ]
    )

    return {
        "word": normalize_space(word),
        "definitionEn": "",
        "definitionZh": "",
        "noteZh": note,
        "exampleEn": "",
        "phonetic": "",
        "partOfSpeech": "",
        "source": "本地词书",
    }


def lookup_dictionary_entry(word):
    url = WORD_LOOKUP_ENDPOINT + urllib_parse.quote(word.strip())

    try:
        payload = fetch_json(url)
    except urllib_error.HTTPError as exc:
        if exc.code == HTTPStatus.NOT_FOUND:
            raise ValueError("没有查到这个德语词的在线词典释义") from exc
        raise

    if not isinstance(payload, list) or not payload:
        raise ValueError("Word lookup returned no entries")

    entry = payload[0]
    meanings = entry.get("meanings") or []
    best_meaning = next((meaning for meaning in meanings if meaning.get("definitions")), {})
    definitions = best_meaning.get("definitions") or []
    best_definition = definitions[0] if definitions else {}
    example = best_definition.get("example") or next(
        (definition.get("example") for definition in definitions if definition.get("example")),
        "",
    )
    phonetics = entry.get("phonetics") or []
    phonetic = entry.get("phonetic") or next((item.get("text") for item in phonetics if item.get("text")), "")
    part_of_speech = best_meaning.get("partOfSpeech", "")
    definition_text = best_definition.get("definition", "")
    translated_definition = ""
    short_note = []

    try:
        translated_definition = translate_text_to_chinese(definition_text)
    except (urllib_error.URLError, ValueError, json.JSONDecodeError):
        translated_definition = ""

    if phonetic:
        short_note.append(f"音标：{phonetic}")

    if part_of_speech:
        short_note.append(f"词性：{part_of_speech}")

    if example:
        short_note.append(f"例句：{example}")

    return {
        "word": entry.get("word") or word,
        "definitionEn": normalize_space(definition_text),
        "definitionZh": build_chinese_gloss(definition_text, part_of_speech, translated_definition),
        "noteZh": "；".join(filter(None, short_note)),
        "exampleEn": normalize_space(example),
        "phonetic": phonetic,
        "partOfSpeech": part_of_speech,
        "source": "dictionaryapi.dev",
    }


def lookup_translation_fallback(word):
    translated_zh = translate_text_to_chinese(word)
    translated_en = translate_text_to_english(word)

    if not translated_zh and not translated_en:
        raise ValueError("没有查到这个德语词的在线词典释义")

    fallback_definition = normalize_space(
        f"bedeutet ungefähr {translated_en}" if translated_en else f"deutsches Wort oder Ausdruck: {normalize_space(word)}"
    )
    note_parts = ["机器翻译兜底"]

    if translated_en:
        note_parts.append(f"英文近义：{translated_en}")

    return {
        "word": normalize_space(word),
        "definitionEn": fallback_definition,
        "definitionZh": translated_zh or translated_en,
        "noteZh": "；".join(note_parts),
        "exampleEn": "",
        "phonetic": "",
        "partOfSpeech": "",
        "source": "MyMemory",
    }


def merge_lookup_payloads(word, *payloads):
    merged = {
        "word": normalize_space(word),
        "definitionEn": "",
        "definitionZh": "",
        "noteZh": "",
        "exampleEn": "",
        "phonetic": "",
        "partOfSpeech": "",
        "source": "",
    }
    notes = []
    sources = []

    for payload in payloads:
        if not payload:
            continue

        for field in ("word", "definitionEn", "definitionZh", "exampleEn", "phonetic", "partOfSpeech"):
            if not merged[field] and payload.get(field):
                merged[field] = payload[field]

        if payload.get("noteZh"):
            notes.append(payload["noteZh"])

        if payload.get("source"):
            sources.append(payload["source"])

    merged["noteZh"] = dedupe_join(notes)
    merged["source"] = " + ".join(dict.fromkeys(sources))
    return merged


def enrich_word_entry(word):
    local_payload = lookup_local_word_entry(word)
    book_payload = lookup_book_resource(word)

    if local_payload:
        return merge_lookup_payloads(word, local_payload, book_payload)

    try:
        dictionary_payload = lookup_dictionary_entry(word)
    except ValueError:
        dictionary_payload = lookup_translation_fallback(word)
    return merge_lookup_payloads(word, dictionary_payload, book_payload)


class AppHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = path.split("?", 1)[0].split("#", 1)[0]
        if path in {"", "/"}:
            path = "/index.html"
        return str((ROOT / path.lstrip("/")).resolve())

    def end_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path == "/api/config":
            self.handle_config_post()
            return

        if self.path == "/api/word-enrich":
            self.handle_word_enrich_post()
            return

        if self.path != "/api/tts":
            self.end_json(HTTPStatus.NOT_FOUND, {"error": "Not found"})
            return

        content_length = int(self.headers.get("Content-Length", 0))
        raw_body = self.rfile.read(content_length)

        try:
            payload = json.loads(raw_body or b"{}")
        except json.JSONDecodeError:
            self.end_json(HTTPStatus.BAD_REQUEST, {"error": "Invalid JSON body"})
            return

        text = str(payload.get("input", "")).strip()
        voice = str(payload.get("voice", DEFAULT_VOICE)).strip() or DEFAULT_VOICE
        audio_format = str(payload.get("format", DEFAULT_FORMAT)).strip().lower() or DEFAULT_FORMAT
        speed = payload.get("speed", 1)

        if not text:
            self.end_json(HTTPStatus.BAD_REQUEST, {"error": "Missing input text"})
            return

        CACHE_DIR.mkdir(parents=True, exist_ok=True)
        resolved_voice = VOICE_MAP.get(voice, voice) or DEFAULT_VOICE
        cache_key = hashlib.sha256(
            json.dumps(
                {
                    "version": CACHE_VERSION,
                    "text": text,
                    "voice": resolved_voice,
                    "format": audio_format,
                    "rate": speed_to_edge_rate(speed),
                },
                ensure_ascii=False,
                sort_keys=True,
            ).encode("utf-8")
        ).hexdigest()
        cache_file = CACHE_DIR / f"{cache_key}.{audio_format}"

        if not cache_file.exists():
            try:
                asyncio.run(generate_edge_tts(text, resolved_voice, cache_file, speed))
            except Exception as exc:
                self.end_json(HTTPStatus.BAD_GATEWAY, {"error": f"edge-tts failed: {exc}"})
                return

        audio_bytes = cache_file.read_bytes()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", mimetypes.guess_type(cache_file.name)[0] or "audio/wav")
        self.send_header("Content-Length", str(len(audio_bytes)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(audio_bytes)

    def handle_config_post(self):
        self.end_json(HTTPStatus.OK, {"ok": True})

    def handle_word_enrich_post(self):
        content_length = int(self.headers.get("Content-Length", 0))
        raw_body = self.rfile.read(content_length)

        try:
            payload = json.loads(raw_body or b"{}")
        except json.JSONDecodeError:
            self.end_json(HTTPStatus.BAD_REQUEST, {"error": "Invalid JSON body"})
            return

        word = normalize_space(payload.get("word", ""))

        if not word:
            self.end_json(HTTPStatus.BAD_REQUEST, {"error": "Missing word"})
            return

        try:
            result = enrich_word_entry(word)
        except ValueError as exc:
            self.end_json(HTTPStatus.NOT_FOUND, {"error": str(exc)})
            return
        except urllib_error.URLError as exc:
            self.end_json(HTTPStatus.BAD_GATEWAY, {"error": f"自动查词失败: {exc.reason}"})
            return
        except Exception as exc:
            self.end_json(HTTPStatus.BAD_GATEWAY, {"error": f"自动查词失败: {exc}"})
            return

        self.end_json(HTTPStatus.OK, result)


async def generate_edge_tts(text, voice, cache_file, speed):
    communicate = edge_tts.Communicate(text, voice, rate=speed_to_edge_rate(speed))
    await communicate.save(str(cache_file))


def main():
    load_dotenv()
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", "8000"))
    server = ThreadingHTTPServer((host, port), AppHandler)
    print(f"Serving on http://{host}:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
