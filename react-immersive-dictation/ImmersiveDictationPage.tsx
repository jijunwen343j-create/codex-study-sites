import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { mockDictationItems } from "./mockData";
import {
  buildStudyDeck,
  evaluateAttempt,
  fetchDictionaryAudioUrl,
  formatDuration,
  resolveAudioUrl,
} from "./dictationUtils";
import { useAudioController } from "./useAudioController";
import { useTimerRegistry } from "./useTimerRegistry";
import type {
  ActivePrompt,
  DictationItem,
  DictationSettings,
  DictationState,
  PronunciationAccent,
  ReviewQueueEntry,
  RoundRecord,
} from "./types";
import "./immersive-dictation.css";

type ImmersiveDictationPageProps = {
  title?: string;
  items?: DictationItem[];
  onBack?: () => void;
  onFinish?: (summary: {
    completedCount: number;
    wrongCount: number;
    elapsedMs: number;
  }) => void;
};

type FeedbackTone = "neutral" | "correct" | "warning" | "wrong";

type FeedbackState = {
  tone: FeedbackTone;
  message: string;
};

const STATE_LABEL: Record<DictationState, string> = {
  idle: "未开始",
  playingFirst: "第 1 遍播放",
  pauseBetween: "等待下一遍",
  playingSecond: "继续播放",
  typing: "输入中",
  checking: "判定中",
  nearMiss: "差一点",
  correct: "正确",
  wrong: "已揭晓",
  paused: "已暂停",
  finished: "本轮结束",
};

const DEFAULT_SETTINGS: DictationSettings = {
  autoPlayCount: 2,
  playbackRate: 1,
  accent: "uk",
  autoReplayOnWrong: true,
  allowNearMissRetry: true,
  ignoreCase: true,
  ignoreSpaces: true,
  reviewRatio: 0.4,
  dailyCount: 12,
};

const BETWEEN_PLAYS_MS = 1200;
const CORRECT_ADVANCE_MS = 600;
const WRONG_REVEAL_HOLD_MS = 700;
const WRONG_REAPPEAR_AFTER = 5;
const SECOND_WRONG_REAPPEAR_AFTER = 2;

export default function ImmersiveDictationPage({
  title = "高频答案词 · 沉浸式单词听写",
  items = mockDictationItems,
  onBack,
  onFinish,
}: ImmersiveDictationPageProps) {
  const [sessionSettings, setSessionSettings] = useState<DictationSettings>(DEFAULT_SETTINGS);
  const [draftSettings, setDraftSettings] = useState<DictationSettings>(DEFAULT_SETTINGS);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [dictationState, setDictationState] = useState<DictationState>("idle");
  const [currentPrompt, setCurrentPrompt] = useState<ActivePrompt | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState<FeedbackState>({
    tone: "neutral",
    message: "点击空白处开始，主流程只有听、输入、回车。",
  });
  const [revealedAnswer, setRevealedAnswer] = useState<string | null>(null);
  const [nearMissUsed, setNearMissUsed] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [reviewCompleted, setReviewCompleted] = useState(0);
  const [newCompleted, setNewCompleted] = useState(0);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const previousStateRef = useRef<DictationState>("idle");
  const isComposingRef = useRef(false);
  const sequenceIdRef = useRef(0);
  const baseCursorRef = useRef(0);
  const completedCountRef = useRef(0);
  const historyRef = useRef<RoundRecord[]>([]);
  const reviewQueueRef = useRef<Map<string, ReviewQueueEntry>>(new Map());
  const clockIntervalRef = useRef<number | null>(null);
  const clockStartedAtRef = useRef<number | null>(null);
  const elapsedAccumulatedRef = useRef(0);

  const { clearAllTimers, wait } = useTimerRegistry();
  const { play, stop: stopAudio } = useAudioController();

  const studyDeck = useMemo(
    () => buildStudyDeck(items, sessionSettings),
    [items, sessionSettings],
  );
  const itemById = useMemo(
    () => new Map(items.map((item) => [item.id, item])),
    [items],
  );

  const plannedReviewCount = useMemo(
    () => studyDeck.filter((item) => item.isReview).length,
    [studyDeck],
  );
  const plannedNewCount = studyDeck.length - plannedReviewCount;

  const getPlayableAudioUrl = useCallback(async (item: DictationItem) => {
    const directAudioUrl = resolveAudioUrl(item, sessionSettings.accent);
    if (directAudioUrl) {
      return directAudioUrl;
    }

    return fetchDictionaryAudioUrl(item.word, sessionSettings.accent);
  }, [sessionSettings.accent]);

  const resetClock = useCallback(() => {
    if (clockIntervalRef.current !== null) {
      window.clearInterval(clockIntervalRef.current);
      clockIntervalRef.current = null;
    }
    clockStartedAtRef.current = null;
    elapsedAccumulatedRef.current = 0;
    setElapsedMs(0);
  }, []);

  const syncClock = useCallback(() => {
    const liveDuration = clockStartedAtRef.current
      ? Date.now() - clockStartedAtRef.current
      : 0;
    setElapsedMs(elapsedAccumulatedRef.current + liveDuration);
  }, []);

  const startClock = useCallback(() => {
    if (clockStartedAtRef.current !== null) {
      return;
    }

    clockStartedAtRef.current = Date.now();
    syncClock();

    if (clockIntervalRef.current !== null) {
      window.clearInterval(clockIntervalRef.current);
    }

    clockIntervalRef.current = window.setInterval(syncClock, 1000);
  }, [syncClock]);

  const pauseClock = useCallback(() => {
    if (clockStartedAtRef.current !== null) {
      elapsedAccumulatedRef.current += Date.now() - clockStartedAtRef.current;
      clockStartedAtRef.current = null;
    }

    if (clockIntervalRef.current !== null) {
      window.clearInterval(clockIntervalRef.current);
      clockIntervalRef.current = null;
    }

    setElapsedMs(elapsedAccumulatedRef.current);
  }, []);

  const focusInput = useCallback((selectAll = false) => {
    window.requestAnimationFrame(() => {
      if (!inputRef.current) {
        return;
      }
      inputRef.current.focus();
      if (selectAll) {
        inputRef.current.select();
      }
    });
  }, []);

  const invalidateSequence = useCallback(() => {
    sequenceIdRef.current += 1;
    clearAllTimers();
    stopAudio();
  }, [clearAllTimers, stopAudio]);

  const isSequenceActive = useCallback((sequenceId: number) => {
    return sequenceIdRef.current === sequenceId;
  }, []);

  const getCurrentReviewQueueSize = useCallback(() => {
    return reviewQueueRef.current.size;
  }, []);

  const resetSession = useCallback((nextState: DictationState = "idle") => {
    invalidateSequence();
    resetClock();
    baseCursorRef.current = 0;
    completedCountRef.current = 0;
    historyRef.current = [];
    reviewQueueRef.current = new Map();
    setCurrentPrompt(null);
    setInputValue("");
    setFeedback({
      tone: "neutral",
      message: "点击空白处开始，主流程只有听、输入、回车。",
    });
    setRevealedAnswer(null);
    setNearMissUsed(false);
    setCompletedCount(0);
    setWrongCount(0);
    setReviewCompleted(0);
    setNewCompleted(0);
    setDictationState(nextState);
  }, [invalidateSequence, resetClock]);

  const bumpRoundStats = useCallback((prompt: ActivePrompt, result: "correct" | "wrong") => {
    const nextCompleted = completedCountRef.current + 1;
    completedCountRef.current = nextCompleted;
    setCompletedCount(nextCompleted);

    historyRef.current = [
      ...historyRef.current,
      {
        itemId: prompt.item.id,
        source: prompt.source,
        result,
        timestamp: Date.now(),
      },
    ];

    if (result === "wrong") {
      setWrongCount((count) => count + 1);
    }

    if (prompt.source === "base") {
      if (prompt.item.isReview) {
        setReviewCompleted((count) => count + 1);
      } else {
        setNewCompleted((count) => count + 1);
      }
    }

    return nextCompleted;
  }, []);

  const scheduleWrongReplay = useCallback((itemId: string, completedAfter: number) => {
    const existing = reviewQueueRef.current.get(itemId);
    const nextWrongCount = (existing?.wrongCount ?? 0) + 1;
    reviewQueueRef.current.set(itemId, {
      itemId,
      wrongCount: nextWrongCount,
      correctStreak: 0,
      nextAppearAfter:
        completedAfter + (nextWrongCount >= 2 ? SECOND_WRONG_REAPPEAR_AFTER : WRONG_REAPPEAR_AFTER),
    });
  }, []);

  const markSuccessfulReview = useCallback((itemId: string, completedAfter: number) => {
    const existing = reviewQueueRef.current.get(itemId);
    if (!existing) {
      return;
    }

    const correctStreak = existing.correctStreak + 1;
    if (correctStreak >= 2) {
      reviewQueueRef.current.delete(itemId);
      return;
    }

    reviewQueueRef.current.set(itemId, {
      ...existing,
      correctStreak,
      nextAppearAfter: completedAfter + WRONG_REAPPEAR_AFTER,
    });
  }, []);

  const pickNextPrompt = useCallback((excludeItemId?: string): ActivePrompt | null => {
    const queueEntries = Array.from(reviewQueueRef.current.values())
      .filter((entry) => entry.itemId !== excludeItemId)
      .sort((left, right) => {
        if (left.nextAppearAfter === right.nextAppearAfter) {
          return right.wrongCount - left.wrongCount;
        }
        return left.nextAppearAfter - right.nextAppearAfter;
      });

    const dueReviewEntry = queueEntries.find((entry) => {
      return entry.nextAppearAfter <= completedCountRef.current;
    });

    if (dueReviewEntry) {
      const dueReviewItem = itemById.get(dueReviewEntry.itemId);
      if (dueReviewItem) {
        return {
          item: { ...dueReviewItem, isReview: true },
          source: "review",
        };
      }
    }

    if (baseCursorRef.current < studyDeck.length) {
      const nextBaseItem = studyDeck[baseCursorRef.current];
      baseCursorRef.current += 1;
      return {
        item: nextBaseItem,
        source: "base",
      };
    }

    if (queueEntries.length > 0) {
      const fallbackReviewItem = itemById.get(queueEntries[0].itemId);
      if (fallbackReviewItem) {
        return {
          item: { ...fallbackReviewItem, isReview: true },
          source: "review",
        };
      }
    }

    return null;
  }, [itemById, studyDeck]);

  const finishSession = useCallback(() => {
    invalidateSequence();
    pauseClock();
    setDictationState("finished");
    setFeedback({
      tone: "correct",
      message: "这一轮已结束，可以按 Enter 再来一轮。",
    });

    onFinish?.({
      completedCount: completedCountRef.current,
      wrongCount: historyRef.current.filter((record) => record.result === "wrong").length,
      elapsedMs: elapsedAccumulatedRef.current,
    });
  }, [invalidateSequence, onFinish, pauseClock]);

  const runAutoPlay = useCallback(async (prompt: ActivePrompt, sequenceId: number) => {
    const playbackTotal = sessionSettings.autoPlayCount;
    if (playbackTotal <= 0) {
      setDictationState("typing");
      focusInput();
      return;
    }

    for (let pass = 0; pass < playbackTotal; pass += 1) {
      if (!isSequenceActive(sequenceId)) {
        return;
      }

      setDictationState(pass === 0 ? "playingFirst" : "playingSecond");

      try {
        const audioUrl = await getPlayableAudioUrl(prompt.item);
        if (!isSequenceActive(sequenceId)) {
          return;
        }
        if (!audioUrl) {
          throw new Error("audio-source-missing");
        }
        await play(audioUrl, sessionSettings.playbackRate);
      } catch (error) {
        // 音频失败时不中断主流程，仍然进入输入状态。
      }

      if (!isSequenceActive(sequenceId)) {
        return;
      }

      if (pass < playbackTotal - 1) {
        setDictationState("pauseBetween");
        await wait(BETWEEN_PLAYS_MS);
      }
    }

    if (!isSequenceActive(sequenceId)) {
      return;
    }

    setDictationState("typing");
    focusInput();
  }, [
    focusInput,
    getPlayableAudioUrl,
    isSequenceActive,
    play,
    sessionSettings.autoPlayCount,
    sessionSettings.playbackRate,
    wait,
  ]);

  const enterPrompt = useCallback((prompt: ActivePrompt) => {
    invalidateSequence();
    setCurrentPrompt(prompt);
    setInputValue("");
    setRevealedAnswer(null);
    setNearMissUsed(false);
    setFeedback({
      tone: "neutral",
      message: "回车提交，Space 或 R 重播，Esc 暂停。",
    });

    const sequenceId = sequenceIdRef.current + 1;
    sequenceIdRef.current = sequenceId;
    void runAutoPlay(prompt, sequenceId);
  }, [invalidateSequence, runAutoPlay]);

  const advanceToNextPrompt = useCallback((excludeItemId?: string) => {
    const nextPrompt = pickNextPrompt(excludeItemId);
    if (!nextPrompt) {
      finishSession();
      return;
    }

    enterPrompt(nextPrompt);
  }, [enterPrompt, finishSession, pickNextPrompt]);

  const startSession = useCallback(() => {
    if (dictationState === "paused") {
      startClock();
      if (previousStateRef.current === "typing" || previousStateRef.current === "nearMiss") {
        setDictationState("typing");
        focusInput();
        return;
      }

      if (currentPrompt) {
        enterPrompt(currentPrompt);
        return;
      }

      return;
    }

    if (dictationState !== "idle" && dictationState !== "finished") {
      focusInput();
      return;
    }

    resetSession("idle");
    startClock();

    const nextPrompt = pickNextPrompt();
    if (!nextPrompt) {
      finishSession();
      return;
    }

    enterPrompt(nextPrompt);
  }, [
    dictationState,
    currentPrompt,
    enterPrompt,
    finishSession,
    focusInput,
    pickNextPrompt,
    resetSession,
    startClock,
  ]);

  const replayCurrent = useCallback(async () => {
    if (!currentPrompt) {
      return;
    }

    invalidateSequence();
    const sequenceId = sequenceIdRef.current + 1;
    sequenceIdRef.current = sequenceId;
    setDictationState("playingSecond");

    try {
      const audioUrl = await getPlayableAudioUrl(currentPrompt.item);
      if (!isSequenceActive(sequenceId)) {
        return;
      }
      if (!audioUrl) {
        throw new Error("audio-source-missing");
      }
      await play(audioUrl, sessionSettings.playbackRate);
    } catch (error) {
      // 忽略单次重播失败，直接回到 typing。
    }

    if (!isSequenceActive(sequenceId)) {
      return;
    }

    setDictationState("typing");
    focusInput();
  }, [
    currentPrompt,
    focusInput,
    getPlayableAudioUrl,
    invalidateSequence,
    isSequenceActive,
    play,
    sessionSettings.playbackRate,
  ]);

  const handleCorrect = useCallback((prompt: ActivePrompt) => {
    setRevealedAnswer(null);
    setFeedback({
      tone: "correct",
      message: "正确",
    });
    setDictationState("correct");

    const completedAfter = bumpRoundStats(prompt, "correct");
    markSuccessfulReview(prompt.item.id, completedAfter);

    invalidateSequence();
    const sequenceId = sequenceIdRef.current + 1;
    sequenceIdRef.current = sequenceId;

    void wait(CORRECT_ADVANCE_MS).then(() => {
      if (!isSequenceActive(sequenceId)) {
        return;
      }
      advanceToNextPrompt(prompt.item.id);
    });
  }, [
    advanceToNextPrompt,
    bumpRoundStats,
    invalidateSequence,
    isSequenceActive,
    markSuccessfulReview,
    wait,
  ]);

  const handleWrong = useCallback((prompt: ActivePrompt, answer: string) => {
    setRevealedAnswer(answer);
    setFeedback({
      tone: "wrong",
      message: "这题先记住答案，马上再见一次。",
    });
    setDictationState("wrong");

    const completedAfter = bumpRoundStats(prompt, "wrong");
    scheduleWrongReplay(prompt.item.id, completedAfter);

    invalidateSequence();
    const sequenceId = sequenceIdRef.current + 1;
    sequenceIdRef.current = sequenceId;

    void (async () => {
      if (sessionSettings.autoReplayOnWrong) {
        try {
          const audioUrl = await getPlayableAudioUrl(prompt.item);
          if (!isSequenceActive(sequenceId)) {
            return;
          }
          if (!audioUrl) {
            throw new Error("audio-source-missing");
          }
          await play(audioUrl, sessionSettings.playbackRate);
        } catch (error) {
          // 音频失败时也不要打断自动切题。
        }
      }

      if (!isSequenceActive(sequenceId)) {
        return;
      }

      await wait(WRONG_REVEAL_HOLD_MS);
      if (!isSequenceActive(sequenceId)) {
        return;
      }

      advanceToNextPrompt(prompt.item.id);
    })();
  }, [
    advanceToNextPrompt,
    bumpRoundStats,
    getPlayableAudioUrl,
    invalidateSequence,
    isSequenceActive,
    play,
    scheduleWrongReplay,
    sessionSettings.autoReplayOnWrong,
    sessionSettings.playbackRate,
    wait,
  ]);

  const submitAttempt = useCallback(() => {
    if (!currentPrompt) {
      return;
    }

    if (dictationState !== "typing" && dictationState !== "nearMiss") {
      return;
    }

    const hasInput = inputValue.trim().length > 0;
    if (!hasInput) {
      setFeedback({
        tone: "warning",
        message: "先输入你听到的拼写，再回车。",
      });
      focusInput();
      return;
    }

    setDictationState("checking");

    const result = evaluateAttempt(inputValue, currentPrompt.item, sessionSettings);

    if (result.kind === "correct") {
      handleCorrect(currentPrompt);
      return;
    }

    if (
      result.kind === "nearMiss" &&
      sessionSettings.allowNearMissRetry &&
      !nearMissUsed
    ) {
      setNearMissUsed(true);
      setFeedback({
        tone: "warning",
        message: result.feedback.message,
      });
      setDictationState("nearMiss");
      focusInput(true);
      return;
    }

    handleWrong(currentPrompt, result.matchedAnswer);
  }, [
    currentPrompt,
    dictationState,
    focusInput,
    handleCorrect,
    handleWrong,
    inputValue,
    nearMissUsed,
    sessionSettings,
  ]);

  const skipCurrent = useCallback(() => {
    if (!currentPrompt) {
      return;
    }
    handleWrong(currentPrompt, currentPrompt.item.word);
  }, [currentPrompt, handleWrong]);

  const goToPrevious = useCallback(() => {
    const previous = historyRef.current[historyRef.current.length - 1];
    if (!previous) {
      return;
    }

    const item = itemById.get(previous.itemId);
    if (!item) {
      return;
    }

    enterPrompt({
      item,
      source: "revisit",
    });
  }, [enterPrompt, itemById]);

  const togglePause = useCallback(() => {
    if (dictationState === "idle" || dictationState === "finished") {
      return;
    }

    if (dictationState === "paused") {
      startClock();
      if (previousStateRef.current === "typing" || previousStateRef.current === "nearMiss") {
        setDictationState("typing");
        focusInput();
        return;
      }

      if (currentPrompt) {
        enterPrompt(currentPrompt);
      }
      return;
    }

    previousStateRef.current = dictationState;
    invalidateSequence();
    pauseClock();
    setDictationState("paused");
    setFeedback({
      tone: "warning",
      message: "已暂停，再按 Esc 继续。",
    });
  }, [
    currentPrompt,
    dictationState,
    enterPrompt,
    focusInput,
    invalidateSequence,
    pauseClock,
    startClock,
  ]);

  const toggleFullscreen = useCallback(async () => {
    if (!shellRef.current) {
      return;
    }

    if (!document.fullscreenElement) {
      await shellRef.current.requestFullscreen?.();
      setIsFullscreen(true);
      return;
    }

    await document.exitFullscreen?.();
    setIsFullscreen(false);
  }, []);

  const applySettings = useCallback(() => {
    setSessionSettings(draftSettings);
    setSettingsOpen(false);
  }, [draftSettings]);

  useEffect(() => {
    setDraftSettings(sessionSettings);
  }, [sessionSettings]);

  useEffect(() => {
    resetSession("idle");
  }, [resetSession, studyDeck]);

  useEffect(() => {
    return () => {
      invalidateSequence();
      pauseClock();
      resetClock();
    };
  }, [invalidateSequence, pauseClock, resetClock]);

  useEffect(() => {
    if (dictationState === "typing" || dictationState === "nearMiss") {
      focusInput(dictationState === "nearMiss");
    }
  }, [currentPrompt, dictationState, focusInput]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement as HTMLElement | null;
      const isTypingIntoControl = Boolean(
        activeElement &&
          activeElement !== inputRef.current &&
          (activeElement.tagName === "INPUT" ||
            activeElement.tagName === "TEXTAREA" ||
            activeElement.tagName === "SELECT" ||
            activeElement.isContentEditable),
      );

      if (isTypingIntoControl && event.key !== "Escape") {
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key === "ArrowUp") {
        event.preventDefault();
        goToPrevious();
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        skipCurrent();
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        togglePause();
        return;
      }

      if (event.key === "Tab" || event.key.toLowerCase() === "r") {
        event.preventDefault();
        void replayCurrent();
        return;
      }

      if (event.code === "Space") {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== "button") {
          event.preventDefault();
          void replayCurrent();
          return;
        }
      }

      if (event.key === "Enter" && !event.shiftKey) {
        if (isComposingRef.current) {
          return;
        }

        if (dictationState === "idle" || dictationState === "finished") {
          event.preventDefault();
          startSession();
          return;
        }

        if (dictationState === "typing" || dictationState === "nearMiss") {
          event.preventDefault();
          submitAttempt();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [
    dictationState,
    goToPrevious,
    replayCurrent,
    skipCurrent,
    startSession,
    submitAttempt,
    togglePause,
  ]);

  return (
    <div className="immersion-shell" ref={shellRef}>
      <header className="immersion-topbar">
        <div className="immersion-topbar__left">
          <button
            className="immersion-icon-btn"
            type="button"
            onClick={onBack}
            aria-label="返回"
          >
            ←
          </button>
          <div className="immersion-heading">
            <p className="immersion-kicker">沉浸式听写</p>
            <h1>{title}</h1>
          </div>
        </div>

        <div className="immersion-topbar__center">
          <span>{sessionSettings.autoPlayCount} 次</span>
          <span>{sessionSettings.playbackRate.toFixed(1)}x</span>
          <span>{sessionSettings.accent === "uk" ? "英音" : "美音"}</span>
          <span>{Math.round(sessionSettings.reviewRatio * 100)}% 复习</span>
          <span>{formatDuration(elapsedMs)}</span>
        </div>

        <div className="immersion-topbar__right">
          <button
            className="immersion-text-btn"
            type="button"
            onClick={() => void replayCurrent()}
          >
            重播
          </button>
          <button
            className="immersion-text-btn"
            type="button"
            onClick={togglePause}
          >
            {dictationState === "paused" ? "继续" : "暂停"}
          </button>
          <button
            className="immersion-text-btn"
            type="button"
            onClick={() => setSettingsOpen((open) => !open)}
          >
            设置
          </button>
          <button
            className="immersion-text-btn"
            type="button"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? "退出全屏" : "全屏"}
          </button>
          <button
            className="immersion-end-btn"
            type="button"
            onClick={finishSession}
          >
            结束学习
          </button>
        </div>
      </header>

      {settingsOpen ? (
        <aside className="immersion-drawer" aria-label="听写设置">
          <div className="immersion-drawer__head">
            <h2>练习设置</h2>
            <button
              className="immersion-icon-btn"
              type="button"
              onClick={() => setSettingsOpen(false)}
              aria-label="关闭设置"
            >
              ×
            </button>
          </div>

          <div className="immersion-drawer__grid">
            <label>
              <span>自动播放次数</span>
              <select
                value={draftSettings.autoPlayCount}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    autoPlayCount: Number(event.target.value) as 1 | 2 | 3,
                  }));
                }}
              >
                <option value={1}>1 次</option>
                <option value={2}>2 次</option>
                <option value={3}>3 次</option>
              </select>
            </label>

            <label>
              <span>倍速</span>
              <select
                value={draftSettings.playbackRate}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    playbackRate: Number(event.target.value) as 0.8 | 1 | 1.2,
                  }));
                }}
              >
                <option value={0.8}>0.8x</option>
                <option value={1}>1x</option>
                <option value={1.2}>1.2x</option>
              </select>
            </label>

            <label>
              <span>发音</span>
              <select
                value={draftSettings.accent}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    accent: event.target.value as PronunciationAccent,
                  }));
                }}
              >
                <option value="uk">英音</option>
                <option value="us">美音</option>
              </select>
            </label>

            <label>
              <span>每轮词数</span>
              <select
                value={draftSettings.dailyCount}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    dailyCount: Number(event.target.value),
                  }));
                }}
              >
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={16}>16</option>
                <option value={20}>20</option>
              </select>
            </label>

            <label>
              <span>复习词比例</span>
              <select
                value={draftSettings.reviewRatio}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    reviewRatio: Number(event.target.value),
                  }));
                }}
              >
                <option value={0.2}>20%</option>
                <option value={0.4}>40%</option>
                <option value={0.5}>50%</option>
                <option value={0.6}>60%</option>
              </select>
            </label>
          </div>

          <div className="immersion-switches">
            <label>
              <input
                type="checkbox"
                checked={draftSettings.autoReplayOnWrong}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    autoReplayOnWrong: event.target.checked,
                  }));
                }}
              />
              <span>错误后自动重播</span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={draftSettings.allowNearMissRetry}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    allowNearMissRetry: event.target.checked,
                  }));
                }}
              />
              <span>接近错误允许二次输入</span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={draftSettings.ignoreCase}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    ignoreCase: event.target.checked,
                  }));
                }}
              />
              <span>忽略大小写</span>
            </label>

            <label>
              <input
                type="checkbox"
                checked={draftSettings.ignoreSpaces}
                onChange={(event) => {
                  setDraftSettings((current) => ({
                    ...current,
                    ignoreSpaces: event.target.checked,
                  }));
                }}
              />
              <span>忽略空格</span>
            </label>
          </div>

          <button className="immersion-save-btn" type="button" onClick={applySettings}>
            应用设置
          </button>
        </aside>
      ) : null}

      <main
        className={`immersion-stage immersion-stage--${dictationState}`}
        onClick={startSession}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (
            event.target === event.currentTarget &&
            event.key === "Enter" &&
            (dictationState === "idle" || dictationState === "finished")
          ) {
            event.preventDefault();
            startSession();
          }
        }}
      >
        <div className="immersion-stage__inner">
          <div className="immersion-status">
            <span className={`immersion-status__badge immersion-status__badge--${feedback.tone}`}>
              {STATE_LABEL[dictationState]}
            </span>
            <p>{feedback.message}</p>
          </div>

          <section className="immersion-word-panel">
            {dictationState === "idle" ? (
              <div className="immersion-idle">
                <p className="immersion-idle__kicker">Click to begin</p>
                <h2>听一词，打一词，回车就走下一题</h2>
                <p>Space / R 重播，Esc 暂停，Ctrl/Cmd + ↑ 回看上一词。</p>
              </div>
            ) : (
              <>
                <div className="immersion-input-wrap">
                  <input
                    ref={inputRef}
                    className="immersion-input"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onCompositionStart={() => {
                      isComposingRef.current = true;
                    }}
                    onCompositionEnd={() => {
                      isComposingRef.current = false;
                    }}
                    placeholder={dictationState === "paused" ? "已暂停" : "Type what you hear"}
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    disabled={dictationState === "paused" || dictationState === "finished"}
                  />
                </div>

                {revealedAnswer ? (
                  <div className="immersion-reveal">
                    <span className="immersion-reveal__label">答案</span>
                    <strong>{revealedAnswer}</strong>
                    {currentPrompt?.item.phonetic ? <em>{currentPrompt.item.phonetic}</em> : null}
                    {currentPrompt?.item.meaning ? <p>{currentPrompt.item.meaning}</p> : null}
                  </div>
                ) : null}
              </>
            )}
          </section>
        </div>
      </main>

      <footer className="immersion-footer">
        <div className="immersion-footer__stats">
          <span>今日计划 {studyDeck.length}</span>
          <span>已学 {completedCount}</span>
          <span>错题 {wrongCount}</span>
          <span>应复习 {plannedReviewCount}</span>
          <span>复习进度 {reviewCompleted}/{plannedReviewCount}</span>
          <span>新词进度 {newCompleted}/{plannedNewCount}</span>
          <span>错题待复现 {getCurrentReviewQueueSize()}</span>
        </div>

        <div className="immersion-footer__meta">
          <span>{currentPrompt?.source === "review" ? "错题复现中" : "顺序练习中"}</span>
          <span>{formatDuration(elapsedMs)}</span>
        </div>
      </footer>
    </div>
  );
}
