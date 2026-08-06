import { Instagram } from "lucide-react";
import { CONTACT, INSTAGRAM_REELS } from "@/lib/amg-data";
import { PrivacyNote } from "./PrivacyNote";
import { Reveal } from "./Reveal";
import poster2 from "@/assets/gallery-6.jpg";

const REEL_REVEAL_STEP_MS = 160;

export function InstagramGrid() {
  return (
    <section id="gallery" className="relative overflow-hidden border-y border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal variant="left" className="motion-underline">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Instagram
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-[0.95] md:text-5xl">
              Узнавайте о новостях{" "}
              <span className="text-gradient-crimson">первыми</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              В Instagram публикуем короткие видео с реальных проектов: оклейка, шумоизоляция,
              полировка и керамика. Именно там первыми появляются все новинки, свежие работы
              и закулисье студии.
            </p>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:gap-3 hover:text-primary"
            >
              <Instagram className="float-slow size-4 text-primary" />
              Перейти в Instagram
            </a>
            <PrivacyNote variant="link" className="mt-4 max-w-md" />
          </Reveal>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4" style={{ perspective: "1200px" }}>
            {INSTAGRAM_REELS.map((reel, i) => (
              <Reveal key={reel.video} delay={i * REEL_REVEAL_STEP_MS} variant="cascade">
                <a
                  href={reel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={reel.title}
                  className="group relative block aspect-[9/16] overflow-hidden rounded-md border border-border bg-surface transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:shadow-crimson"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <video
                    key={reel.video}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    {...(i === 1 ? { poster: poster2 } : {})}
                    src={reel.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                  <span className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-1.5 rounded-sm bg-background/70 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest text-foreground backdrop-blur transition-transform duration-500 group-hover:-translate-y-1 sm:text-[10px]">
                    <Instagram className="size-3 shrink-0 text-primary" />
                    Reels
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
