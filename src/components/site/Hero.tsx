import { ArrowDown, ArrowRight, Paintbrush, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import { useLeadModal } from "./LeadModalProvider";
import { KineticHeadline } from "./KineticHeadline";
import heroImage from "@/assets/hero-car.png";

const HERO_PARALLAX_PX = 90;
const HERO_IMAGE_WIDTH = "110%";
const HERO_IMAGE_SHIFT_X = "-8%";
const HERO_OVERLAY_OPACITY = 0.28;
const STAT_POP_BASE_DELAY_MS = 2100;
const STAT_POP_STEP_MS = 140;
const SUBCOPY_DELAY_MS = 1750;
const CTA_DELAY_MS = 1900;

const HEADLINE_LINES = [
  { text: "Центр оклейки и", accent: false },
  { text: "полимерной реставрации", accent: false },
  { text: "в Минске", accent: true },
] as const;

const STATS = [
  { icon: Shield, label: "Бессрочная гарантия на оклейку" },
  { icon: Sparkles, label: "Не пользуемся китайским сырьём" },
  { icon: Paintbrush, label: "Полимерная реставрация лакокрасочного покрытия" },
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
        <div className="hero-enter absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Автомобиль в студии Olympic Detailing"
            width={880}
            height={780}
            className="absolute top-0 left-0 h-full max-w-none object-cover"
            style={{
              width: HERO_IMAGE_WIDTH,
              transform: `translateX(${HERO_IMAGE_SHIFT_X})`,
            }}
          />
        </div>
        <div
          className="hero-orb pointer-events-none absolute -left-[8%] top-[18%] size-[min(42vmax,28rem)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--crimson) 28%, transparent) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div
          className="hero-orb pointer-events-none absolute -right-[12%] bottom-[10%] size-[min(28vmax,18rem)] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--crimson) 16%, transparent) 0%, transparent 70%)",
            animationDelay: "-4s",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background: `oklch(0.12 0.01 30 / ${HERO_OVERLAY_OPACITY})`,
          }}
          aria-hidden
        />
        {/* Soft top blend under frosted navbar */}
        <div
          className="absolute inset-x-0 top-0 h-[18%]"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.08 0.01 30 / 0.45) 0%, transparent 100%)",
          }}
          aria-hidden
        />
        {/* Left scrim for headline / crimson accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.12 0.01 30 / 0.55) 0%, oklch(0.12 0.01 30 / 0.28) 22%, oklch(0.12 0.01 30 / 0.1) 42%, transparent 62%)",
          }}
          aria-hidden
        />
        {/* Soft handoff into light page */}
        <div
          className="absolute inset-x-0 bottom-0 h-[18%]"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, color-mix(in oklch, var(--background) 40%, transparent) 55%, transparent 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex w-full min-w-0 max-w-7xl flex-col justify-center px-5 pb-24 md:px-8 md:pb-28">
        <KineticHeadline
          lines={HEADLINE_LINES}
          className="text-white text-[clamp(1.75rem,6.5vw,4rem)] leading-[1.08]"
        />

        <p
          className="hero-text-enter mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
          style={{ animationDelay: `${SUBCOPY_DELAY_MS}ms` }}
        >
          Защита кузова, оклейка пленками и профессиональная шумоизоляция для вашей машины
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
            className="inline-flex h-14 items-center justify-center rounded-md border border-white/45 bg-white/10 px-8 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/18"
          >
            Наши услуги
          </a>
        </div>

        <ul className="mt-8 grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <li
              key={stat.label}
              className="hero-stat-pop flex items-center gap-3"
              style={{
                animationDelay: `${STAT_POP_BASE_DELAY_MS + index * STAT_POP_STEP_MS}ms`,
              }}
            >
              <stat.icon
                className="icon-bob size-5 shrink-0 text-crimson-glow"
                style={{ animationDelay: `${index * 0.35}s` }}
              />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/88">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#services"
        aria-label="Листать вниз"
        className="scroll-hint absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/55"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Листать</span>
        <ArrowDown className="size-4 text-crimson-glow" />
      </a>
    </section>
  );
}
