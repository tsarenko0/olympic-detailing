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
        "flex size-full flex-col items-center justify-center gap-3 bg-[linear-gradient(145deg,oklch(0.28_0.02_25),oklch(0.18_0.01_20)_55%,oklch(0.14_0_0))]",
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
