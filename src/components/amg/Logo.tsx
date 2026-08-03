import logo from "@/assets/amg-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("flex min-w-0 items-center gap-2.5 md:gap-3", className)}>
      <img
        src={logo}
        alt="AMG — детейлинг-студия в Краснодаре"
        width={56}
        height={56}
        className="size-9 shrink-0 rounded-full ring-1 ring-border sm:size-10 md:size-14"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-lg font-bold uppercase tracking-[0.18em] md:text-2xl md:tracking-[0.2em]">
          AMG
        </span>
        <span className="mt-1 hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:block md:mt-1.5">
          detailing studio
        </span>
      </span>
    </a>
  );
}
