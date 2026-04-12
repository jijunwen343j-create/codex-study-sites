export type DictationState =
  | "idle"
  | "playingFirst"
  | "pauseBetween"
  | "playingSecond"
  | "typing"
  | "checking"
  | "nearMiss"
  | "correct"
  | "wrong"
  | "paused"
  | "finished";

export type PronunciationAccent = "uk" | "us";

export type DictationItem = {
  id: string;
  word: string;
  audioUrl?: string;
  audioByAccent?: Partial<Record<PronunciationAccent, string>>;
  acceptedAnswers?: string[];
  phonetic?: string;
  meaning?: string;
  isReview?: boolean;
};

export type DictationSettings = {
  autoPlayCount: 1 | 2 | 3;
  playbackRate: 0.8 | 1 | 1.2;
  accent: PronunciationAccent;
  autoReplayOnWrong: boolean;
  allowNearMissRetry: boolean;
  ignoreCase: boolean;
  ignoreSpaces: boolean;
  reviewRatio: number;
  dailyCount: number;
};

export type NearMissReason =
  | "missing"
  | "extra"
  | "wrongPosition"
  | "front"
  | "middle"
  | "tail";

export type NearMissFeedback = {
  reason: NearMissReason;
  message: string;
  bestAnswer: string;
  distance: number;
};

export type CheckResult =
  | {
      kind: "correct";
      matchedAnswer: string;
      normalizedInput: string;
    }
  | {
      kind: "nearMiss";
      matchedAnswer: string;
      normalizedInput: string;
      feedback: NearMissFeedback;
    }
  | {
      kind: "wrong";
      matchedAnswer: string;
      normalizedInput: string;
    };

export type ReviewQueueEntry = {
  itemId: string;
  wrongCount: number;
  nextAppearAfter: number;
  correctStreak: number;
};

export type PromptSource = "base" | "review" | "revisit";

export type ActivePrompt = {
  item: DictationItem;
  source: PromptSource;
};

export type RoundRecord = {
  itemId: string;
  source: PromptSource;
  result: "correct" | "wrong";
  timestamp: number;
};
