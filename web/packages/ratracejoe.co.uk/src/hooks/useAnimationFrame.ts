import { useEffect, useRef } from "react";

export function useAnimationFrame(callback: (delta: number) => void) {
  const callbackRef = useRef(callback);
  const lastTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  // Keep callback stable without re-subscribing
  callbackRef.current = callback;

  useEffect(() => {
    function tick(time: number) {
      if (lastTimeRef.current != null) {
        const delta = time - lastTimeRef.current;
        callbackRef.current(delta);
      }
      lastTimeRef.current = time;
      frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);
}
