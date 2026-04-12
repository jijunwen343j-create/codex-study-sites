import { useCallback, useEffect, useRef } from "react";

export function useTimerRegistry() {
  const timersRef = useRef<Set<number>>(new Set());

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((timerId) => {
      window.clearTimeout(timerId);
    });
    timersRef.current.clear();
  }, []);

  const registerTimer = useCallback((callback: () => void, delay: number) => {
    const timerId = window.setTimeout(() => {
      timersRef.current.delete(timerId);
      callback();
    }, delay);

    timersRef.current.add(timerId);
    return timerId;
  }, []);

  const wait = useCallback((delay: number) => {
    return new Promise<void>((resolve) => {
      registerTimer(resolve, delay);
    });
  }, [registerTimer]);

  useEffect(() => clearAllTimers, [clearAllTimers]);

  return {
    timersRef,
    registerTimer,
    wait,
    clearAllTimers,
  };
}
