import { useCallback, useRef, useState, type PointerEvent, type RefObject } from "react";

const TILT_MAX_DEG = 7;
const TILT_SCALE = 1.015;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type TiltState = {
  rotateX: number;
  rotateY: number;
  scale: number;
};

const IDLE_TILT: TiltState = { rotateX: 0, rotateY: 0, scale: 1 };

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function usePointerTilt<T extends HTMLElement = HTMLElement>(maxDeg = TILT_MAX_DEG) {
  const ref = useRef<T | null>(null);
  const [tilt, setTilt] = useState<TiltState>(IDLE_TILT);

  const onPointerMove = useCallback(
    (event: PointerEvent<T>) => {
      if (prefersReducedMotion()) return;
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      setTilt({
        rotateY: (x - 0.5) * 2 * maxDeg,
        rotateX: (0.5 - y) * 2 * maxDeg,
        scale: TILT_SCALE,
      });
    },
    [maxDeg],
  );

  const onPointerLeave = useCallback(() => {
    setTilt(IDLE_TILT);
  }, []);

  return {
    ref: ref as RefObject<T>,
    style: {
      transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
    } as const,
    onPointerMove,
    onPointerLeave,
  };
}
