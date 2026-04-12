export { default as ImmersiveDictationPage } from "./ImmersiveDictationPage";
export { default as ImmersiveDictationDemoPage } from "./DemoPage";
export { mockDictationItems } from "./mockData";
export {
  buildStudyDeck,
  evaluateAttempt,
  fetchDictionaryAudioUrl,
  formatDuration,
  levenshteinDistance,
  normalizeInput,
  resolveAudioUrl,
} from "./dictationUtils";
export { useAudioController } from "./useAudioController";
export { useTimerRegistry } from "./useTimerRegistry";
export type {
  ActivePrompt,
  CheckResult,
  DictationItem,
  DictationSettings,
  DictationState,
  NearMissFeedback,
  ReviewQueueEntry,
  RoundRecord,
} from "./types";
