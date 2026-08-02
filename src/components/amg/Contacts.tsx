import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/amg-data";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import garage from "@/assets/gallery-6.jpg";

export function Contacts() {
  return (
    <section id="contacts" className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Контакты</p>
          <h2 className="mt-3 text-3xl font-bold leading-[0.95] md:text-5xl">
            Приезжайте <span className="text-gradient-crimson">в студию</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-md border border-border md:h-full md:min-h-[380px]">
              <img
                src={garage}
                alt="Детейлинг-студия AMG в Краснодаре"
                loading="lazy"
                width={900}
                height={900}
                className="size-full object-cover opacity-45 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-gradient-crimson shadow-crimson">
                  <MapPin className="size-6 text-primary-foreground" />
                </span>
                <p className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">
                  Краснодар, ул. Мачуги, 157
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Закрытый бокс · парковка у входа
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-panel flex h-full flex-col justify-between gap-8 rounded-md border border-border p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Телефон
                    </p>
                    <a
                      href={CONTACT.phoneHref}
                      className="font-display text-xl font-bold tracking-wide transition-colors hover:text-primary"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Режим работы
                    </p>
                    <p className="font-display text-xl font-bold tracking-wide">
                      {CONTACT.hoursShort}
                    </p>
                    <p className="text-xs text-muted-foreground">{CONTACT.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Адрес
                    </p>
                    <p className="text-sm">{CONTACT.address}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 flex-1 text-xs font-bold uppercase tracking-[0.2em] shadow-crimson"
                >
                  <a href={CONTACT.phoneHref}>
                    <Phone />
                    Позвонить
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 flex-1 border-border bg-transparent text-xs font-bold uppercase tracking-[0.2em] hover:border-primary/60 hover:bg-transparent hover:text-primary"
                >
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                    Написать в WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <Logo />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} AMG Detailing Studio
          </p>
        </div>
      </footer>
    </section>
  );
}
