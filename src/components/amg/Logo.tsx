import logo from "@/assets/amg-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("flex items-center gap-3", className)}>
      <img
        src={logo.url}
        alt="AMG — детейлинг-студия в Краснодаре"
        width={48}
        height={48}
        className="size-10 rounded-full ring-1 ring-border md:size-11"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold uppercase tracking-[0.2em] md:text-xl">
          AMG
        </span>
        <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
          detailing studio
        </span>
      </span>
    </a>
  );
}
