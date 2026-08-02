import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./LeadModalProvider";
import { Reveal } from "./Reveal";
import film from "@/assets/service-film.jpg";
import sound from "@/assets/service-sound.jpg";
import ceramic from "@/assets/service-ceramic.jpg";
import interior from "@/assets/service-interior.jpg";

const SERVICES = [
  {
    title: "Оклейка плёнкой",
    text: "Защитные антигравийные и виниловые плёнки. Полная или локальная оклейка с закатом кромок, без следов на кузове.",
    img: film,
    tag: "Основное",
    wide: true,
  },
  {
    title: "Шумоизоляция",
    text: "Комплексная шумоизоляция салона, арок и багажника. Многослойные материалы, полная разборка и точная сборка.",
    img: sound,
    tag: "Основное",
    wide: true,
  },
  {
    title: "Детейлинг полировка и керамика",
    text: "Восстановительная полировка лака и керамическое покрытие с гидрофобным эффектом и глубоким глянцем.",
    img: ceramic,
    tag: "Уход",
    wide: false,
  },
  {
    title: "Химчистка и уход за салоном",
    text: "Бережная химчистка текстиля, кожи и пластика, устранение запахов и защитные составы для интерьера.",
    img: interior,
    tag: "Уход",
    wide: false,
  },
];

export function Services() {
  const { open } = useLeadModal();

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Услуги</p>
          <h2 className="mt-3 text-3xl font-bold leading-[0.95] md:text-5xl">
            Что мы делаем <span className="text-gradient-crimson">безупречно</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            Работаем только с премиальными материалами и закрытым боксом. Каждый автомобиль — один
            мастер и полный контроль качества на каждом этапе.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className="h-full">
              <article className="glow-ring group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-md border border-border">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/20" />

                <div className="relative p-6 md:p-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    {service.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                  <Button
                    onClick={() => open(service.title)}
                    variant="outline"
                    className="mt-6 h-11 border-primary/50 bg-transparent px-6 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:bg-primary hover:text-primary-foreground"
                  >
                    Заказать
                    <ArrowUpRight />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
