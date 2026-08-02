import { ArrowRight, Shield, Sparkles, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./LeadModalProvider";
import heroImage from "@/assets/hero-amg-s63.jpg";

const STATS = [
  { icon: Shield, label: "Гарантия до 24 месяцев" },
  { icon: Sparkles, label: "Плёнки и керамика премиум" },
  { icon: Volume2, label: "Тишина в салоне −8 дБ" },
];

export function Hero() {
  const { open } = useLeadModal();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Чёрный Mercedes-AMG S63 в детейлинг-студии AMG"
          width={880}
          height={780}
          className="hero-enter size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pb-20 md:px-8 md:pb-28">
        <span
          className="hero-text-enter inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur"
          style={{ animationDelay: "300ms" }}
        >
          Детейлинг-студия AMG · Краснодар
        </span>

        <h1
          className="hero-text-enter mt-6 max-w-4xl text-4xl font-bold leading-[0.92] sm:text-5xl md:text-7xl"
          style={{ animationDelay: "450ms" }}
        >
          Премиальный детейлинг авто{" "}
          <span className="text-gradient-crimson">в Краснодаре</span>
        </h1>

        <p
          className="hero-text-enter mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: "600ms" }}
        >
          Защита кузова, оклейка пленками и профессиональная шумоизоляция для вашего автомобиля
        </p>

        <div
          className="hero-text-enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "750ms" }}
        >
          <Button
            size="lg"
            onClick={() => open()}
            className="group h-14 px-8 text-xs font-bold uppercase tracking-[0.2em] shadow-crimson"
          >
            Получить консультацию
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <a
            href="#services"
            className="inline-flex h-14 items-center justify-center rounded-md border border-border px-8 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            Наши услуги
          </a>
        </div>

        <ul
          className="hero-text-enter mt-14 grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-3"
          style={{ animationDelay: "900ms" }}
        >
          {STATS.map((stat) => (
            <li key={stat.label} className="flex items-center gap-3">
              <stat.icon className="size-5 shrink-0 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
