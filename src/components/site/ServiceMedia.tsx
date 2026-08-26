import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceMedia({
  src,
  alt,
  className,
}: {
  src?: string | undefined;
  alt: string;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={960}
        height={720}
        className={cn("size-full object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center gap-3 bg-[linear-gradient(145deg,var(--surface-2),var(--muted)_55%,var(--background))]",
        className,
      )}
      role="img"
      aria-label={`${alt} — фото скоро`}
    >
      <span className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-background/40 text-primary shadow-crimson">
        <ImageIcon className="size-6" />
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        Фото скоро
      </span>
    </div>
  );
}
