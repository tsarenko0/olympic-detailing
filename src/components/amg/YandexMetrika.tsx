import { useEffect } from "react";

const YANDEX_METRIKA_ID = 111493941;

const YANDEX_METRIKA_SCRIPT = `
(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');

ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
`.trim();

/** Loads Yandex.Metrika only after cookie consent. */
export function YandexMetrika() {
  useEffect(() => {
    const marker = `ym-counter-${YANDEX_METRIKA_ID}`;
    if (document.getElementById(marker)) return;

    const script = document.createElement("script");
    script.id = marker;
    script.type = "text/javascript";
    script.text = YANDEX_METRIKA_SCRIPT;
    document.head.appendChild(script);
  }, []);

  return (
    <noscript>
      <div>
        <img
          src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </div>
    </noscript>
  );
}
