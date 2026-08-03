import logo from "@/assets/amg-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("flex items-center gap-3", className)}>
      <img
        src={logo}
        alt="AMG — детейлинг-студия в Краснодаре"
        width={56}
        height={56}
        className="size-12 rounded-full ring-1 ring-border md:size-14"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold uppercase tracking-[0.2em] md:text-2xl">
          AMG
        </span>
        <span className="mt-1.5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          detailing studio
        </span>
      </span>
    </a>
  );
}
