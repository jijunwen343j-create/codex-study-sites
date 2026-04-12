import type {
  CheckResult,
  DictationItem,
  DictationSettings,
  NearMissFeedback,
} from "./types";

const PREPOSITION_LIKE = new Set(["-", "'", "."]);

export function normalizeInput(
  text: string,
  options: Pick<DictationSettings, "ignoreCase" | "ignoreSpaces">,
) {
  let next = text.trim().replace(/\s+/g, " ");

  if (options.ignoreCase) {
    next = next.toLowerCase();
  }

  if (options.ignoreSpaces) {
    next = next.replace(/\s+/g, "");
  }

  return next;
}

export function levenshteinDistance(left: string, right: string) {
  if (left === right) {
    return 0;
  }

  const rows = left.length + 1;
  const cols = right.length + 1;
  const matrix = Array.from({ length: rows }, () => Array<number>(cols).fill(0));

  for (let row = 0; row < rows; row += 1) {
    matrix[row][0] = row;
  }

  for (let col = 0; col < cols; col += 1) {
    matrix[0][col] = col;
  }

  for (let row = 1; row < rows; row += 1) {
    for (let col = 1; col < cols; col += 1) {
      const cost = left[row - 1] === right[col - 1] ? 0 : 1;

      matrix[row][col] = Math.min(
        matrix[row - 1][col] + 1,
        matrix[row][col - 1] + 1,
        matrix[row - 1][col - 1] + cost,
      );
    }
  }

  return matrix[rows - 1][cols - 1];
}

function getMismatchIndex(input: string, answer: string) {
  const limit = Math.min(input.length, answer.length);
  for (let index = 0; index < limit; index += 1) {
    if (input[index] !== answer[index]) {
      return index;
    }
  }

  return limit;
}

function buildNearMissMessage(input: string, answer: string): NearMissFeedback {
  const mismatchIndex = getMismatchIndex(input, answer);
  const lengthDelta = answer.length - input.length;
  const distance = levenshteinDistance(input, answer);

  if (lengthDelta === 1) {
    return {
      reason: "missing",
      message: "少了一个字母，再看一下中段。",
      bestAnswer: answer,
      distance,
    };
  }

  if (lengthDelta === -1) {
    return {
      reason: "extra",
      message: "多打了一个字母，删掉再试一次。",
      bestAnswer: answer,
      distance,
    };
  }

  const ratio = answer.length === 0 ? 0 : mismatchIndex / answer.length;

  if (ratio <= 0.33) {
    return {
      reason: "front",
      message: "前半段有误，再听一下开头。",
      bestAnswer: answer,
      distance,
    };
  }

  if (ratio >= 0.66) {
    return {
      reason: "tail",
      message: "后半段有误，尾部拼写不对。",
      bestAnswer: answer,
      distance,
    };
  }

  return {
    reason: "middle",
    message: "中间部分有误，改一下中段。",
    bestAnswer: answer,
    distance,
  };
}

export function isNearMiss(input: string, answer: string) {
  if (!input || !answer) {
    return null;
  }

  const distance = levenshteinDistance(input, answer);
  const maxDistance = answer.length <= 5 ? 1 : 2;

  if (Math.abs(input.length - answer.length) > 2) {
    return null;
  }

  if (distance > maxDistance) {
    return null;
  }

  if (input[0] !== answer[0]) {
    return null;
  }

  return buildNearMissMessage(input, answer);
}

function getNormalizedAcceptedAnswers(
  item: DictationItem,
  options: Pick<DictationSettings, "ignoreCase" | "ignoreSpaces">,
) {
  const rawAnswers = [item.word, ...(item.acceptedAnswers ?? [])];
  return Array.from(
    new Set(
      rawAnswers
        .map((answer) => normalizeInput(answer, options))
        .filter(Boolean),
    ),
  );
}

function getCanonicalAnswer(item: DictationItem) {
  return item.word.trim();
}

export function evaluateAttempt(
  input: string,
  item: DictationItem,
  options: Pick<DictationSettings, "ignoreCase" | "ignoreSpaces">,
): CheckResult {
  const normalizedInput = normalizeInput(input, options);
  const acceptedAnswers = getNormalizedAcceptedAnswers(item, options);

  if (acceptedAnswers.includes(normalizedInput)) {
    return {
      kind: "correct",
      matchedAnswer: getCanonicalAnswer(item),
      normalizedInput,
    };
  }

  let bestAnswer = acceptedAnswers[0] ?? normalizeInput(getCanonicalAnswer(item), options);
  let bestDistance = Number.POSITIVE_INFINITY;

  acceptedAnswers.forEach((answer) => {
    const distance = levenshteinDistance(normalizedInput, answer);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestAnswer = answer;
    }
  });

  const nearMiss = isNearMiss(normalizedInput, bestAnswer);
  if (nearMiss) {
    return {
      kind: "nearMiss",
      matchedAnswer: getCanonicalAnswer(item),
      normalizedInput,
      feedback: nearMiss,
    };
  }

  return {
    kind: "wrong",
    matchedAnswer: getCanonicalAnswer(item),
    normalizedInput,
  };
}

function interleaveDeck(
  newItems: DictationItem[],
  reviewItems: DictationItem[],
  reviewRatio: number,
) {
  const result: DictationItem[] = [];
  const newQueue = [...newItems];
  const reviewQueue = [...reviewItems];

  while (newQueue.length || reviewQueue.length) {
    const currentReviewShare = result.length === 0
      ? 0
      : result.filter((item) => item.isReview).length / result.length;

    if (reviewQueue.length && (currentReviewShare < reviewRatio || !newQueue.length)) {
      result.push(reviewQueue.shift() as DictationItem);
      continue;
    }

    if (newQueue.length) {
      result.push(newQueue.shift() as DictationItem);
      continue;
    }

    if (reviewQueue.length) {
      result.push(reviewQueue.shift() as DictationItem);
    }
  }

  return result;
}

export function buildStudyDeck(items: DictationItem[], settings: DictationSettings) {
  const desiredReviewCount = Math.round(settings.dailyCount * settings.reviewRatio);
  const desiredNewCount = Math.max(0, settings.dailyCount - desiredReviewCount);

  const orderedReviewItems = items.filter((item) => item.isReview);
  const orderedNewItems = items.filter((item) => !item.isReview);

  const pickedReviewItems = orderedReviewItems.slice(0, desiredReviewCount);
  const pickedNewItems = orderedNewItems.slice(0, desiredNewCount);
  const missingCount = settings.dailyCount - pickedReviewItems.length - pickedNewItems.length;

  const topUpItems = items
    .filter((item) => !pickedReviewItems.includes(item) && !pickedNewItems.includes(item))
    .slice(0, Math.max(0, missingCount));

  return interleaveDeck(
    [...pickedNewItems, ...topUpItems.filter((item) => !item.isReview)],
    [...pickedReviewItems, ...topUpItems.filter((item) => item.isReview)],
    settings.reviewRatio,
  ).slice(0, settings.dailyCount);
}

export function resolveAudioUrl(
  item: DictationItem,
  accent: DictationSettings["accent"],
) {
  return item.audioByAccent?.[accent] ?? item.audioUrl ?? null;
}

export function formatDuration(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function isPlainCharacterKey(key: string) {
  return key.length === 1 && !PREPOSITION_LIKE.has(key);
}

function normalizeRemoteAudioUrl(audioUrl: string) {
  if (!audioUrl) {
    return null;
  }

  if (audioUrl.startsWith("//")) {
    return `https:${audioUrl}`;
  }

  return audioUrl;
}

function scoreDictionaryAudioUrl(audioUrl: string, accent: DictationSettings["accent"]) {
  const normalized = audioUrl.toLowerCase();
  if (accent === "uk" && (normalized.includes("_gb") || normalized.includes("-gb"))) {
    return 3;
  }

  if (accent === "us" && (normalized.includes("_us") || normalized.includes("-us"))) {
    return 3;
  }

  if (accent === "uk" && normalized.includes("uk")) {
    return 2;
  }

  if (accent === "us" && normalized.includes("us")) {
    return 2;
  }

  return 1;
}

const dictionaryAudioCache = new Map<string, string | null>();

export async function fetchDictionaryAudioUrl(
  word: string,
  accent: DictationSettings["accent"],
) {
  const cacheKey = `${accent}:${word.trim().toLowerCase()}`;
  if (dictionaryAudioCache.has(cacheKey)) {
    return dictionaryAudioCache.get(cacheKey) ?? null;
  }

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`,
    );

    if (!response.ok) {
      dictionaryAudioCache.set(cacheKey, null);
      return null;
    }

    const payload = (await response.json()) as Array<{
      phonetics?: Array<{
        audio?: string;
      }>;
    }>;

    const allAudioUrls = payload
      .flatMap((entry) => entry.phonetics ?? [])
      .map((phonetic) => normalizeRemoteAudioUrl(phonetic.audio ?? ""))
      .filter((audioUrl): audioUrl is string => Boolean(audioUrl));

    if (allAudioUrls.length === 0) {
      dictionaryAudioCache.set(cacheKey, null);
      return null;
    }

    const sortedCandidates = [...allAudioUrls].sort((left, right) => {
      return scoreDictionaryAudioUrl(right, accent) - scoreDictionaryAudioUrl(left, accent);
    });

    const matchedAudio = sortedCandidates[0] ?? null;
    dictionaryAudioCache.set(cacheKey, matchedAudio);
    return matchedAudio;
  } catch (error) {
    dictionaryAudioCache.set(cacheKey, null);
    return null;
  }
}
