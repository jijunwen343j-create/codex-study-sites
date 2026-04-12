import json
import re
from pathlib import Path
from zipfile import ZipFile


SOURCE = Path("/Users/junwenji/Downloads/KWF_Cornell_Notes (1)_副本.docx")
OUTPUT = Path("/Users/junwenji/Documents/codex/kwf_notes.json")


def read_docx_paragraphs(path: Path) -> list[str]:
    with ZipFile(path) as archive:
        document_xml = archive.read("word/document.xml").decode("utf-8", errors="ignore")

    paragraphs = []

    for paragraph_xml in re.findall(r"<w:p[\s\S]*?</w:p>", document_xml):
        runs = re.findall(r"<w:t[^>]*>(.*?)</w:t>", paragraph_xml)
        if not runs:
            continue

        text = "".join(runs)
        text = (
            text.replace("&apos;", "'")
            .replace("&amp;", "&")
            .replace("⚠️", "Warning:")
            .strip()
        )

        if text:
            paragraphs.append(text)

    return paragraphs


def parse_notes(paragraphs: list[str]) -> dict:
    book = {
        "title": paragraphs[0],
        "subtitle": paragraphs[1],
        "summary": paragraphs[2],
        "focus": paragraphs[3],
        "sections": [],
    }

    current_section = None
    current_entry = None
    in_quick_review = False

    for line in paragraphs[4:]:
        if line.startswith("SECTION "):
            if current_entry and current_section:
                current_section["entries"].append(current_entry)
            if current_section:
                book["sections"].append(current_section)

            current_section = {
                "title": line,
                "entries": [],
            }
            current_entry = None
            in_quick_review = False
            continue

        entry_match = re.match(r"^(.*?)(?:\s+\[p\.([^\]]+)\])$", line)
        if current_section and entry_match and entry_match.group(1).upper() == entry_match.group(1):
            if current_entry:
                current_section["entries"].append(current_entry)

            current_entry = {
                "title": entry_match.group(1).strip(),
                "page": entry_match.group(2).strip(),
                "cues": [],
                "content": [],
                "quick_review": [],
            }
            in_quick_review = False
            continue

        if not current_entry:
            continue

        if line.startswith("▶"):
            current_entry["cues"].append(line.lstrip("▶").strip())
            continue

        if line == "⚡ QUICK REVIEW":
            in_quick_review = True
            continue

        if line.startswith("•"):
            target = current_entry["quick_review"] if in_quick_review else current_entry["content"]
            target.append(line.lstrip("•").strip())
            continue

        current_entry["content"].append(line)

    if current_entry and current_section:
        current_section["entries"].append(current_entry)
    if current_section:
        book["sections"].append(current_section)

    return book


def main() -> None:
    paragraphs = read_docx_paragraphs(SOURCE)
    book = parse_notes(paragraphs)
    OUTPUT.write_text(json.dumps(book, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUTPUT}")
    print(f"Sections: {len(book['sections'])}")
    print(f"Entries: {sum(len(section['entries']) for section in book['sections'])}")


if __name__ == "__main__":
    main()
