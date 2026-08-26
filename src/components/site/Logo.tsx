import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex min-w-0 max-w-full items-center", className)}>
      <span className="block truncate font-display text-sm font-bold uppercase leading-none tracking-[0.1em] sm:text-lg sm:tracking-[0.14em] md:text-2xl md:tracking-[0.18em]">
        Olympic&nbsp;Detailing
      </span>
    </Link>
  );
}
