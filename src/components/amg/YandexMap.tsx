import { useEffect, useRef } from "react";

const YANDEX_MAP_CONTAINER_ID = "amg-yandex-map";
const YANDEX_MAP_CONSTRUCTOR_ID =
  "3ee8ca76d58737ca662dec5c707692c09362d6ea377feefb091bae6a7042cd1b";

const YANDEX_MAP_SCRIPT_SRC =
  `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A${YANDEX_MAP_CONSTRUCTOR_ID}&width=100%25&height=100%25&lang=ru_RU&scroll=true&id=${YANDEX_MAP_CONTAINER_ID}`;

export function YandexMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const existing = document.getElementById(`${YANDEX_MAP_CONTAINER_ID}-script`);
    existing?.remove();
    container.replaceChildren();

    const script = document.createElement("script");
    script.id = `${YANDEX_MAP_CONTAINER_ID}-script`;
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    script.src = YANDEX_MAP_SCRIPT_SRC;
    document.body.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={YANDEX_MAP_CONTAINER_ID}
      className="size-full min-h-[380px]"
      aria-label="Карта проезда к AMG Detailing"
    />
  );
}
