import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/prefers-reduced-motion";

const PARALLAX_RANGE_PX = 90;

export function useParallax(strength = PARALLAX_RANGE_PX) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion()) return;

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
