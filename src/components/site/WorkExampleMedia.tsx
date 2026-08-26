import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WORK_SLIDESHOW_INTERVAL_MS } from "@/lib/work-examples-data";
import { prefersReducedMotion } from "@/lib/prefers-reduced-motion";
import { cn } from "@/lib/utils";

const FRAME_CLASS =
  "group relative aspect-square overflow-hidden rounded-md border border-border bg-surface shadow-[0_10px_24px_-20px_oklch(0.2_0.02_30_/_0.4)]";

export function WorkExampleVideo({ src, alt }: { src: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  return (
    <div className={FRAME_CLASS} aria-label={alt}>
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

export function WorkExampleSlideshow({ images, alt }: { images: readonly string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length < 2 || paused || prefersReducedMotion()) return;

    const timerId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, WORK_SLIDESHOW_INTERVAL_MS);

    return () => window.clearInterval(timerId);
  }, [images.length, paused]);

  return (
    <div
      className={FRAME_CLASS}
      aria-label={alt}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={alt}
          draggable={false}
          loading={index === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-300 ease-out",
            index === activeIndex ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-black/30 text-white/70 opacity-100 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-black/45 hover:text-white lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronLeft className="size-3.5" />
          </button>
          <button
            type="button"
            aria-label="Следующее фото"
            onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
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
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  index === activeIndex ? "w-3 bg-white/70" : "w-1 bg-white/30 hover:bg-white/50",
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export function WorkExampleCard({ example }: { example: { video?: string; images?: readonly string[]; alt: string } }) {
  if (example.video) {
    return <WorkExampleVideo src={example.video} alt={example.alt} />;
  }

  if (example.images?.length) {
    return <WorkExampleSlideshow images={example.images} alt={example.alt} />;
  }

  return null;
}
