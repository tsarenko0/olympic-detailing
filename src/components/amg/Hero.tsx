import { ArrowDown, ArrowRight, Shield, Sparkles, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import { useLeadModal } from "./LeadModalProvider";
import { KineticHeadline } from "./KineticHeadline";
import heroImage from "@/assets/hero-amg-s63.jpg";

const HERO_PARALLAX_PX = 90;
const STAT_POP_BASE_DELAY_MS = 2100;
const STAT_POP_STEP_MS = 140;
const SUBCOPY_DELAY_MS = 1750;
const CTA_DELAY_MS = 1900;

const HEADLINE_LINES = [
  { text: "Премиальный детейлинг авто", accent: false },
  { text: "в Краснодаре", accent: true },
] as const;

const STATS = [
  { icon: Shield, label: "Гарантия до 24 месяцев" },
  { icon: Sparkles, label: "Плёнки и керамика премиум" },
  { icon: Volume2, label: "Тишина в салоне −8 дБ" },
];

export function Hero() {
  const { open } = useLeadModal();
  const parallaxY = useParallax(HERO_PARALLAX_PX);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-32 md:pt-40">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0) scale(${1 + parallaxY * 0.0004})` }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Чёрный Mercedes-AMG S63 в детейлинг-студии AMG"
            width={880}
            height={780}
            className="hero-enter size-full object-cover object-center"
          />
        </div>
        <div
          className="hero-orb pointer-events-none absolute -left-[8%] top-[18%] size-[min(42vmax,28rem)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.57 0.235 27.5 / 0.22) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div
          className="hero-orb pointer-events-none absolute -right-[12%] bottom-[10%] size-[min(28vmax,18rem)] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, oklch(0.57 0.235 27.5 / 0.12) 0%, transparent 70%)",
            animationDelay: "-4s",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--background) 0%, color-mix(in oklch, var(--background) 92%, transparent) 26%, color-mix(in oklch, var(--background) 68%, transparent) 55%, color-mix(in oklch, var(--background) 32%, transparent) 78%, transparent 94%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[42%]"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, color-mix(in oklch, var(--background) 75%, transparent) 35%, color-mix(in oklch, var(--background) 25%, transparent) 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full min-w-0 max-w-7xl flex-col justify-center px-5 pb-24 md:px-8 md:pb-28">
        <span
          className="hero-text-enter pulse-glow inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur"
          style={{ animationDelay: "300ms" }}
        >
          Детейлинг-студия AMG · Краснодар
        </span>

        <KineticHeadline lines={HEADLINE_LINES} />

        <p
          className="hero-text-enter mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: `${SUBCOPY_DELAY_MS}ms` }}
        >
          Защита кузова, оклейка пленками и профессиональная шумоизоляция для вашего автомобиля
        </p>

        <div
          className="hero-text-enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: `${CTA_DELAY_MS}ms` }}
        >
          <Button
            size="lg"
            onClick={() => open()}
            className="hero-gleam group h-14 px-8 text-xs font-bold uppercase tracking-[0.2em] shadow-crimson"
          >
            Узнать подробности
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <a
            href="#services"
            className="inline-flex h-14 items-center justify-center rounded-md border border-border px-8 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            Наши услуги
          </a>
        </div>

        <ul className="mt-14 grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <li
              key={stat.label}
              className="hero-stat-pop flex items-center gap-3"
              style={{
                animationDelay: `${STAT_POP_BASE_DELAY_MS + index * STAT_POP_STEP_MS}ms`,
              }}
            >
              <stat.icon
                className="icon-bob size-5 shrink-0 text-primary"
                style={{ animationDelay: `${index * 0.35}s` }}
              />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#services"
        aria-label="Листать вниз"
        className="scroll-hint absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Листать</span>
        <ArrowDown className="size-4 text-primary" />
      </a>
    </section>
  );
}
