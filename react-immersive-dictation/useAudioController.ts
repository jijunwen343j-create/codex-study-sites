import { useCallback, useEffect, useRef } from "react";

export function useAudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const settleRef = useRef<(() => void) | null>(null);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
    }

    if (settleRef.current) {
      const settle = settleRef.current;
      settleRef.current = null;
      settle();
    }
  }, []);

  const play = useCallback((url: string, playbackRate: number) => {
    stop();

    return new Promise<void>((resolve, reject) => {
      const audio = audioRef.current ?? new Audio();
      audioRef.current = audio;
      audio.src = url;
      audio.preload = "auto";
      audio.playbackRate = playbackRate;

      const cleanup = () => {
        audio.onended = null;
        audio.onerror = null;
        settleRef.current = null;
      };

      settleRef.current = () => {
        cleanup();
        resolve();
      };

      audio.onended = () => {
        cleanup();
        resolve();
      };

      audio.onerror = () => {
        cleanup();
        reject(new Error("audio-playback-failed"));
      };

      audio.play().catch((error) => {
        cleanup();
        reject(error);
      });
    });
  }, [stop]);

  useEffect(() => stop, [stop]);

  return {
    audioRef,
    play,
    stop,
  };
}
