import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/prefers-reduced-motion";

const IN_VIEW_FALLBACK_MS = 1200;

function isInViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewHeight * 0.85 && rect.bottom > viewHeight * 0.08;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (prefersReducedMotion()) {
      setArmed(true);
      setVisible(true);
      return;
    }

    if (!node || typeof IntersectionObserver === "undefined") {
      setArmed(true);
      setVisible(true);
      return;
    }

    let cancelled = false;
    let fallbackTimer = 0;

    const show = () => {
      if (cancelled) return;
      setVisible(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          observer.disconnect();
          window.clearTimeout(fallbackTimer);
        }
      },
      {
        threshold: 0.18,
        // Запускаем анимацию, когда блок реально заходит в кадр при скролле
        rootMargin: "0px 0px -12% 0px",
      },
    );

    // Сначала включаем pending, на следующем кадре проверяем видимость
    const armFrame = window.requestAnimationFrame(() => {
      if (cancelled) return;
      setArmed(true);
      observer.observe(node);

      // Fallback только для блоков, которые УЖЕ на экране (hero-соседние)
      // Блоки ниже по странице ждут только IntersectionObserver — без автопоказа
      fallbackTimer = window.setTimeout(() => {
        if (!cancelled && isInViewport(node)) show();
      }, IN_VIEW_FALLBACK_MS);
    });

    return () => {
      cancelled = true;
      observer.disconnect();
      window.cancelAnimationFrame(armFrame);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return { ref, armed, visible };
}
