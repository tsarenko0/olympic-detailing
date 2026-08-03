import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/amg-data";
import { Reveal } from "./Reveal";
import { ContactLeadForm } from "./ContactLeadForm";
import { YandexMap } from "./YandexMap";

const BLOCK_REVEAL_STEP_MS = 140;

export function Contacts() {
  return (
    <section id="contacts" className="section-ember relative overflow-hidden border-t border-border">
      <div
        className="pointer-events-none absolute right-0 top-0 size-80 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, oklch(0.57 0.235 27.5 / 0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal variant="scale" className="motion-underline max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Контакты</p>
          <h2 className="mt-3 text-3xl font-bold leading-[0.95] md:text-5xl">
            Приезжайте в <span className="text-gradient-crimson">AMG Detailing</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch lg:gap-3">
          <Reveal delay={BLOCK_REVEAL_STEP_MS} variant="left" className="relative z-0">
            <div className="relative h-72 overflow-hidden rounded-md border border-border lg:h-full lg:min-h-[420px]">
              <YandexMap />
            </div>
          </Reveal>

          <Reveal delay={BLOCK_REVEAL_STEP_MS * 2} variant="scale" className="relative z-20 lg:-mx-1.5 lg:-my-1.5">
            <div className="surface-panel h-full rounded-md border border-primary/55 p-6 shadow-[0_0_0_1px_oklch(0.57_0.235_27.5_/_0.4),0_0_36px_-4px_oklch(0.57_0.235_27.5_/_0.55),0_0_18px_oklch(0.57_0.235_27.5_/_0.22),0_18px_40px_-28px_oklch(0_0_0_/_0.55)] md:p-8 lg:scale-[1.03]">
              <ContactLeadForm />
            </div>
          </Reveal>

          <Reveal delay={BLOCK_REVEAL_STEP_MS * 3} variant="right" className="relative z-0">
            <div className="surface-panel flex h-full flex-col justify-between gap-8 rounded-md border border-border p-6 md:p-8 lg:min-h-[420px]">
              <div className="contact-stagger space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="icon-bob mt-1 size-5 shrink-0 text-primary" />
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
                  <Clock
                    className="icon-bob mt-1 size-5 shrink-0 text-primary"
                    style={{ animationDelay: "0.4s" }}
                  />
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
                  <MapPin
                    className="icon-bob mt-1 size-5 shrink-0 text-primary"
                    style={{ animationDelay: "0.8s" }}
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Адрес
                    </p>
                    <a
                      href={CONTACT.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl font-bold tracking-wide transition-colors hover:text-primary"
                    >
                      {CONTACT.address}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex w-full min-w-0 flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full min-w-0 px-4 text-[11px] font-bold uppercase tracking-[0.14em] shadow-crimson transition-transform duration-300 hover:-translate-y-0.5"
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
                  className="h-12 w-full min-w-0 border-border bg-transparent px-4 text-[11px] font-bold uppercase tracking-[0.14em] transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-transparent hover:text-primary"
                >
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
