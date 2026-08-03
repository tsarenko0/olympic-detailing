import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ImageIcon, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import workExample1a from "@/assets/work-example-1a.png";
import workExample1b from "@/assets/work-example-1b.png";
import workExample3a from "@/assets/work-example-3a.png";
import workExample3b from "@/assets/work-example-3b.png";
import workExample3c from "@/assets/work-example-3c.png";
import workExample3d from "@/assets/work-example-3d.png";
import workExample4a from "@/assets/work-example-4a.png";
import workExample4b from "@/assets/work-example-4b.png";
import { SERVICES_CATALOG, type ServiceItem } from "@/lib/services-data";
import { useLeadModal } from "./LeadModalProvider";
import { Reveal } from "./Reveal";
import { ServiceDetailsDialog } from "./ServiceDetailsDialog";
import { ServiceMedia } from "./ServiceMedia";

const CARD_REVEAL_STEP_MS = 90;
const WORK_SLIDESHOW_INTERVAL_MS = 2000;
const WORK_POLISHING_VIDEO = "/video-polishing.mp4";

type WorkExample = {
  id: string;
  images?: readonly string[];
  video?: string;
  alt?: string;
};

const WORK_EXAMPLES: readonly WorkExample[] = [
  {
    id: "work-1",
    images: [workExample1a, workExample1b],
    alt: "Porsche после детейлинга AMG",
  },
  {
    id: "work-2",
    video: WORK_POLISHING_VIDEO,
    alt: "Полировка кузова AMG Detailing",
  },
  {
    id: "work-3",
    images: [workExample3a, workExample3b, workExample3c, workExample3d],
    alt: "Mercedes G-Class после детейлинга AMG",
  },
  {
    id: "work-4",
    images: [workExample4a, workExample4b],
    alt: "Мотоциклы после детейлинга AMG",
  },
];

function WorkExampleVideo({ src, alt }: { src: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  return (
    <div
      className="group relative aspect-[16/10] overflow-hidden rounded-md border border-white/12 bg-[oklch(0.16_0_0)]"
      aria-label={alt}
    >
      <video
        ref={videoRef}
        className="size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          if (!video.duration) return;
          setProgress(video.currentTime / video.duration);
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-2.5 pb-2 pt-6 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
        <input
          type="range"
          min={0}
          max={1000}
          value={Math.round(progress * 1000)}
          aria-label="Перемотка видео"
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-primary/80 [&::-webkit-slider-thumb]:size-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary/80"
          onChange={(event) => {
            const video = videoRef.current;
            if (!video || !video.duration) return;
            const nextProgress = Number(event.target.value) / 1000;
            video.currentTime = nextProgress * video.duration;
            setProgress(nextProgress);
          }}
        />
      </div>
    </div>
  );
}

function WorkExampleSlideshow({ images, alt }: { images: readonly string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (images.length < 2 || isHovering) return;

    const timerId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, WORK_SLIDESHOW_INTERVAL_MS);

    return () => window.clearInterval(timerId);
  }, [images.length, isHovering]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="group relative aspect-[16/10] overflow-hidden rounded-md border border-white/12 bg-[oklch(0.16_0_0)]"
      aria-label={alt}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={alt}
          draggable={false}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ease-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={goPrev}
            className="absolute left-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/30 text-white/70 opacity-100 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-black/45 hover:text-white lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronLeft className="size-3.5" />
          </button>
          <button
            type="button"
            aria-label="Следующее фото"
            onClick={goNext}
            className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/30 text-white/70 opacity-100 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-black/45 hover:text-white lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronRight className="size-3.5" />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 opacity-80">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                aria-label={`Слайд ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-3 bg-white/70" : "w-1 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function WorkExamplePlaceholder({ index }: { index: number }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-md border border-white/12 bg-[linear-gradient(145deg,oklch(0.3_0_0),oklch(0.2_0_0)_55%,oklch(0.16_0_0))]"
      role="img"
      aria-label={`Пример работы ${index + 1}`}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-18deg, transparent, transparent 10px, oklch(1 0 0) 10px, oklch(1 0 0) 11px)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
        <span className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/25 text-[oklch(0.72_0_0)]">
          <ImageIcon className="size-5" />
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[oklch(0.7_0_0)]">
          Фото скоро
        </span>
      </div>
    </div>
  );
}

export function Services() {
  const { open } = useLeadModal();
  const [detailsService, setDetailsService] = useState<ServiceItem | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const openDetails = (service: ServiceItem) => {
    setDetailsService(service);
    setDetailsOpen(true);
  };

  return (
    <section id="services" className="section-grid relative overflow-hidden py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal variant="scale" className="motion-underline max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">Услуги</p>
          <h2 className="mt-2 text-2xl font-bold leading-[0.95] md:text-4xl">
            Полный спектр <span className="text-gradient-crimson">детейлинга</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[oklch(0.86_0.01_20)] md:text-base">
            Выберите направление — откроем детали или сразу примем заявку с нужной услугой.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-8">
          <div className="space-y-3">
            {SERVICES_CATALOG.map((service, index) => (
              <Reveal
                key={service.id}
                delay={index * CARD_REVEAL_STEP_MS}
                variant={index % 2 === 0 ? "left" : "right"}
              >
                <article className="group grid overflow-hidden rounded-md border border-white/14 bg-[linear-gradient(135deg,oklch(0.28_0.012_25),oklch(0.22_0.01_20)_55%,oklch(0.2_0.008_20))] transition-all duration-400 hover:border-primary/45 hover:shadow-crimson sm:grid-cols-[148px_minmax(0,1fr)] md:grid-cols-[180px_minmax(0,1fr)]">
                  <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto sm:min-h-full">
                    <ServiceMedia
                      src={service.image}
                      alt={service.imageAlt}
                      className="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.01_20)]/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[oklch(0.22_0.01_20)]/70" />
                    <span className="absolute left-2.5 top-2.5 flex size-8 items-center justify-center rounded border border-primary/55 bg-[oklch(0.16_0.01_20_/_0.72)] font-display text-xs font-bold text-primary backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center gap-3 p-4 md:gap-3.5 md:px-5 md:py-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary">
                        {service.tag}
                      </p>
                      <h3 className="mt-1.5 text-lg font-bold uppercase leading-tight text-[oklch(0.97_0.005_20)] md:text-xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-snug text-[oklch(0.88_0.01_20)]">
                        {service.teaser}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        onClick={() => open(service.title)}
                        className="h-9 px-4 text-[10px] font-bold uppercase tracking-[0.16em] shadow-crimson"
                      >
                        Заказать
                        <ArrowUpRight className="size-3.5" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openDetails(service)}
                        className="h-9 border-white/20 bg-white/[0.04] px-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[oklch(0.94_0.005_20)] hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
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
                  <p className="mt-1 text-sm font-semibold text-[oklch(0.94_0_0)]">Примеры работ</p>
                </div>
                <a
                  href="#gallery"
                  className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[oklch(0.72_0_0)] transition-colors hover:text-primary"
                >
                  Все
                </a>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {WORK_EXAMPLES.map((example, index) => {
                  const label = example.alt ?? `Пример работы ${index + 1}`;

                  if (example.video) {
                    return <WorkExampleVideo key={example.id} src={example.video} alt={label} />;
                  }

                  if (example.images?.length) {
                    return (
                      <WorkExampleSlideshow key={example.id} images={example.images} alt={label} />
                    );
                  }

                  return <WorkExamplePlaceholder key={example.id} index={index} />;
                })}
              </div>

              <Button
                size="sm"
                variant="outline"
                asChild
                className="h-9 w-full border-white/20 bg-white/[0.04] text-[10px] font-bold uppercase tracking-[0.16em] text-[oklch(0.94_0.005_20)] hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
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
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        onOrder={(title) => open(title)}
      />
    </section>
  );
}
