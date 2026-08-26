import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex min-w-0 items-center", className)}>
      <span className="font-display text-base font-bold uppercase leading-none tracking-[0.14em] sm:text-lg md:text-2xl md:tracking-[0.18em]">
        Olympic&nbsp;Detailing
      </span>
    </Link>
  );
}
