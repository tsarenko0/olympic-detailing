import { CircleCheck, ImageIcon } from "lucide-react";
import whyUsPhoto1 from "@/assets/why-us-1.png";
import whyUsPhoto2 from "@/assets/why-us-2.png";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const WHY_ITEMS = [
  {
    title: "Качество",
    text: "Мы используем профессиональное оборудование, инструменты и расходные материалы ведущих европейских и американских производителей. Отсутствие экономии — отсутствие производственного брака.",
  },
  {
    title: "Скорость",
    text: "Мы ценим ваше время и выполняем работы точно в оговоренный срок.",
  },
  {
    title: "Гарантия",
    text: "Работаем со строгим соблюдением всех технологий и несём гарантийные обязательства практически по каждой детейлинг-услуге, выполненной нашим центром.",
  },
  {
    title: "Оплата",
    text: "Принимаем любой удобный способ оплаты — наличные, карта или перевод. Выбирайте тот формат, который комфортен именно вам.",
  },
  {
    title: "Специалисты",
    text: "Работы выполняют квалифицированные мастера из постоянного штата — проверенные специалисты, а не разовые подрядчики.",
  },
] as const;

function PhotoSlot({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (src) {
    return (
      <img src={src} alt={alt} loading="lazy" className={cn("size-full object-cover", className)} />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-surface",
        className,
      )}
      role="img"
      aria-label={`${alt} — фото скоро`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="flex size-12 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground">
          <ImageIcon className="size-5" />
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Фото скоро
        </span>
      </div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden border-y border-border py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 80% 40%, color-mix(in oklch, var(--crimson) 14%, transparent), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="left" className="motion-underline">
          <h2 className="flex items-center gap-3 text-3xl font-bold italic leading-none md:text-5xl">
            <span className="inline-block h-8 w-1.5 -skew-x-12 bg-primary md:h-11" aria-hidden />
            Почему выбирают нас
          </h2>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
            {WHY_ITEMS.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                variant={index % 2 === 0 ? "left" : "up"}
                {...(index === WHY_ITEMS.length - 1 && WHY_ITEMS.length % 2 === 1
                  ? { className: "sm:col-span-2 sm:max-w-md" }
                  : {})}
              >
                <article className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CircleCheck className="size-5 shrink-0 text-foreground" strokeWidth={1.5} />
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} variant="right" className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:ml-auto lg:mr-0">
              <div className="absolute right-0 top-0 h-[72%] w-[78%] overflow-hidden border border-border shadow-[0_16px_40px_-28px_oklch(0.2_0.02_30_/_0.55)]">
                <PhotoSlot src={whyUsPhoto2} alt="Hyundai Santa Fe у студии Olympic Detailing" />
              </div>
              <div className="absolute bottom-0 left-0 h-[48%] w-[72%]">
                <div
                  className="absolute -inset-x-1 -bottom-1 -top-1 translate-x-1 translate-y-1 bg-primary"
                  aria-hidden
                />
                <div className="relative size-full overflow-hidden border border-border shadow-[0_12px_32px_-24px_oklch(0.2_0.02_30_/_0.5)]">
                  <PhotoSlot
                    src={whyUsPhoto1}
                    alt="Mini Cooper в студии Olympic Detailing"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
