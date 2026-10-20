import { useEffect, useRef, useState } from "react";

// A single shared live-time hook. Every watch dial that calls this reads from
// the same time source (the visitor's device clock), keeping all visible watch
// faces synchronized.
//
// Uses requestAnimationFrame for smooth sweeping second hand movement.
// Falls back to a 1-second interval when prefers-reduced-motion is set,
// so the second hand ticks rather than sweeps.
export function useLiveTime(): Date {
  const [now, setNow] = useState<Date>(() => new Date());
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mq.matches) {
      // Reduced motion: tick every second, no smooth sweep
      const id = setInterval(() => setNow(new Date()), 1000);
      return () => clearInterval(id);
    }

    // Smooth motion: rAF loop, but only update state when the second changes
    // to avoid excessive re-renders. Millisecond precision is preserved in the
    // returned Date so handAngles can compute a sweeping second hand.
    const tick = () => {
      setNow(new Date());
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return now;
}

// Returns the analogue hand angles (degrees) for a given date.
// hour: 0-360 (12-hour), minute: 0-360, second: 0-360.
export function handAngles(date: Date) {
  const h = date.getHours() % 12;
  const m = date.getMinutes();
  const s = date.getSeconds();
  const ms = date.getMilliseconds();
  // Smooth seconds for a sweeping feel.
  const smoothSec = s + ms / 1000;
  return {
    hour: (h + m / 60) * 30,
    minute: (m + s / 60) * 6,
    second: smoothSec * 6,
  };
}
