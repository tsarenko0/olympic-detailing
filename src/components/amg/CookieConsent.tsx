import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PRIVACY_PATH } from "@/lib/amg-data";
import { acceptCookieConsent, hasCookieConsent } from "@/lib/cookie-consent";
import { YandexMetrika } from "./YandexMetrika";

const COOKIE_BANNER_TEXT =
  "Этот сайт использует файлы cookie и сервисы веб-аналитики для сбора технической статистики и улучшения работы сайта. Продолжая использовать сайт, вы выражаете своё согласие на их обработку.";

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(hasCookieConsent());
    setReady(true);
  }, []);

  const handleAccept = () => {
    acceptCookieConsent();
    setAccepted(true);
  };

  if (!ready) return null;

  return (
    <>
      {accepted ? <YandexMetrika /> : null}

      {!accepted ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Согласие на использование cookie"
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/95 p-4 shadow-[0_-12px_40px_-20px_oklch(0_0_0_/_0.65)] backdrop-blur-md md:p-5"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {COOKIE_BANNER_TEXT}{" "}
              <Link
                to={PRIVACY_PATH}
                className="underline underline-offset-2 transition-colors hover:text-primary"
              >
                Политика конфиденциальности
              </Link>
              .
            </p>
            <Button
              type="button"
              onClick={handleAccept}
              className="h-11 shrink-0 px-6 text-xs font-bold uppercase tracking-[0.2em] shadow-crimson"
            >
              Принять
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
