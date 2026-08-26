import { useState } from "react";
import { ArrowUpRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES_CATALOG, type ServiceItem } from "@/lib/services-data";
import { WORK_EXAMPLES } from "@/lib/work-examples-data";
import { cn } from "@/lib/utils";
import { useLeadModal } from "./LeadModalProvider";
import { Reveal } from "./Reveal";
import { ServiceDetailsDialog } from "./ServiceDetailsDialog";
import { ServiceMedia } from "./ServiceMedia";
import { WorkExampleCard } from "./WorkExampleMedia";

const CARD_REVEAL_STEP_MS = 90;

export function Services() {
  const { open } = useLeadModal();
  const [detailsService, setDetailsService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="section-grid relative overflow-hidden py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="scale" className="motion-underline max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">Услуги</p>
          <h2 className="mt-2 text-2xl font-bold leading-[0.95] md:text-4xl">
            Полный спектр <span className="text-gradient-crimson">детейлинга</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Выберите направление — откроем детали или сразу примем заявку с нужной услугой.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-3">
            {SERVICES_CATALOG.map((service, index) => (
              <Reveal
                key={service.id}
                delay={index * CARD_REVEAL_STEP_MS}
                variant={index % 2 === 0 ? "left" : "right"}
              >
                <article
                  className={cn(
                    "group grid overflow-hidden rounded-md border bg-surface transition-all duration-400 sm:grid-cols-[148px_minmax(0,1fr)] md:grid-cols-[180px_minmax(0,1fr)]",
                    service.featured
                      ? "border-primary/70 shadow-[0_0_0_1px_color-mix(in_oklch,var(--crimson)_45%,transparent),0_0_28px_-2px_color-mix(in_oklch,var(--crimson)_55%,transparent),0_10px_28px_-22px_oklch(0.2_0.02_30_/_0.45)] hover:border-primary hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--crimson)_60%,transparent),0_0_36px_-2px_color-mix(in_oklch,var(--crimson)_65%,transparent)]"
                      : "border-border shadow-[0_10px_28px_-22px_oklch(0.2_0.02_30_/_0.45)] hover:border-primary/45 hover:shadow-crimson",
                  )}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <ServiceMedia
                      src={service.image}
                      alt={service.imageAlt}
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-surface/70" />
                    <span
                      className={cn(
                        "absolute left-2.5 top-2.5 flex size-8 items-center justify-center rounded border bg-background/70 font-display text-xs font-bold text-primary backdrop-blur",
                        service.featured ? "border-primary shadow-crimson" : "border-primary/55",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center gap-3 p-4 md:px-5 md:py-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary">
                        {service.tag}
                      </p>
                      <h3 className="mt-1.5 text-lg font-bold uppercase leading-tight text-foreground md:text-xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-snug text-muted-foreground">
                        {service.teaser}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        onClick={() => open()}
                        className="h-9 px-4 text-[10px] font-bold uppercase tracking-[0.16em] shadow-crimson"
                      >
                        Заказать
                        <ArrowUpRight className="size-3.5" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setDetailsService(service)}
                        className="h-9 border-border bg-background/60 px-4 text-[10px] font-bold uppercase tracking-[0.16em] hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                      >
                        <Info className="size-3.5" />
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180} variant="right" className="lg:sticky lg:top-24">
            <aside className="space-y-3">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary">
                    Портфолио
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Примеры работ</p>
                </div>
                <a
                  href="#gallery"
                  className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
                >
                  Все
                </a>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {WORK_EXAMPLES.map((example) => (
                  <WorkExampleCard key={example.id} example={example} />
                ))}
              </div>

              <Button
                size="sm"
                variant="outline"
                asChild
                className="h-9 w-full border-border bg-background/60 text-[10px] font-bold uppercase tracking-[0.16em] hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <a href="#gallery">
                  Смотреть галерею
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
            </aside>
          </Reveal>
        </div>
      </div>

      <ServiceDetailsDialog
        service={detailsService}
        open={detailsService !== null}
        onOpenChange={(open) => {
          if (!open) setDetailsService(null);
        }}
        onOrder={() => open()}
      />
    </section>
  );
}
