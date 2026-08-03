import { useEffect, useState } from "react";

const PARALLAX_RANGE_PX = 90;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function useParallax(strength = PARALLAX_RANGE_PX) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const viewport = window.innerHeight || 1;
        const progress = Math.min(Math.max(y / viewport, 0), 1);
        setOffset(progress * strength);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [strength]);

  return offset;
}
