import { Instagram } from "lucide-react";
import { CONTACT } from "@/lib/amg-data";
import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const ITEMS = [
  { src: g1, alt: "Колесо AMG с красным суппортом после детейлинга", video: false },
  { src: g6, alt: "Автомобиль в детейлинг-студии с красной подсветкой", video: true },
  { src: g3, alt: "Капот после керамического покрытия с каплями воды", video: false },
  { src: g5, alt: "Салон автомобиля с красной подсветкой", video: false },
  { src: g2, alt: "Задний фонарь автомобиля после полировки", video: true },
  { src: g4, alt: "Карбоновая деталь кузова крупным планом", video: false },
];

export function InstagramGrid() {
  return (
    <section id="gallery" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Портфолио
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-[0.95] md:text-5xl">Наш Instagram</h2>
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="size-4" />
            Смотреть все работы
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.alt} delay={i * 70}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-md border border-border"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-12 scale-75 items-center justify-center rounded-full bg-gradient-crimson opacity-0 shadow-crimson transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Instagram className="size-5 text-primary-foreground" />
                  </span>
                </span>
                {item.video && (
                  <span className="absolute right-3 top-3 rounded-sm bg-background/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
                    Video
                  </span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
