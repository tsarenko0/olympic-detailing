import { Instagram, MessageCircle, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/amg-data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-14">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Премиальный детейлинг в Краснодаре: плёнка, керамика, полировка и шумоизоляция.
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
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
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
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="size-3.5 shrink-0 text-primary" aria-hidden />
              WhatsApp
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} AMG Detailing</p>
          <p>Краснодар</p>
        </div>
      </div>
    </footer>
  );
}
