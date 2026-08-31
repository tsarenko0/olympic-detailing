import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, PRIVACY_PATH } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-14">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Премиальный детейлинг в Минске: плёнка, керамика, полировка и шумоизоляция.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Разделы
          </p>
          <nav className="mt-4 flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm font-semibold text-primary transition-colors hover:text-crimson-glow"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={PRIVACY_PATH}
              className="w-fit text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Политика конфиденциальности
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Связь
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-3.5 shrink-0 text-primary" aria-hidden />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="size-3.5 shrink-0 text-primary" aria-hidden />
              Telegram
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="size-3.5 shrink-0 text-primary" aria-hidden />
              Instagram
            </a>
            <p className="text-muted-foreground">{CONTACT.hoursShort}</p>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground transition-colors hover:text-primary"
            >
              {CONTACT.address}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[11px] uppercase tracking-[0.2em] md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Olympic Detailing</p>
          <Link
            to={PRIVACY_PATH}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
