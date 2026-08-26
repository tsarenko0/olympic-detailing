import { useEffect, useState } from "react";
import { Clock, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";
import { useLeadModal } from "./LeadModalProvider";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const SCROLL_SOLID_OFFSET_PX = 48;

export function Navbar() {
  const { open } = useLeadModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_SOLID_OFFSET_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header className="nav-enter fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "hidden border-b transition-all duration-500 md:block",
          solid
            ? "border-border/70 bg-background/95 backdrop-blur-xl"
            : "border-white/10 bg-black/25 backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs uppercase tracking-[0.2em] transition-colors duration-500",
            solid ? "text-muted-foreground" : "text-white/70",
          )}
        >
          <span className="flex items-center gap-2">
            <Clock className={cn("size-3.5", solid ? "text-primary" : "text-crimson-glow")} />
            {CONTACT.hoursShort}
          </span>
          <span className="flex items-center gap-6">
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-[0.2em] transition-colors hover:text-primary"
            >
              {CONTACT.address}
            </a>
            <a
              href={CONTACT.phoneHref}
              className={cn(
                "flex items-center gap-2 font-semibold transition-colors hover:text-primary",
                solid ? "text-foreground" : "text-white",
              )}
            >
              <Phone className={cn("size-3.5", solid ? "text-primary" : "text-crimson-glow")} />
              {CONTACT.phone}
            </a>
          </span>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-500",
          solid
            ? "border-border/80 bg-background/95 backdrop-blur-xl shadow-[0_8px_24px_-18px_oklch(0.2_0.02_30_/_0.35)]"
            : "border-white/10 bg-black/30 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-5 md:h-auto md:px-8 md:py-4">
          <Logo
            className={cn(
              "min-w-0 flex-1 transition-colors duration-500 lg:flex-none",
              solid ? "text-foreground" : "text-white",
            )}
          />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-xs font-bold uppercase tracking-[0.25em] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  solid
                    ? "text-primary hover:text-crimson-glow"
                    : "text-white/90 hover:text-crimson-glow",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button
              onClick={() => open()}
              className="h-9 px-2.5 text-[10px] font-bold uppercase tracking-[0.12em] shadow-crimson sm:h-10 sm:px-5 sm:text-xs sm:tracking-[0.2em]"
            >
              <span className="sm:hidden">Записаться</span>
              <span className="hidden sm:inline">Получить консультацию</span>
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={cn(
                "flex size-9 items-center justify-center rounded-md border transition-colors sm:size-10 lg:hidden",
                solid
                  ? "border-border text-foreground hover:border-primary/50"
                  : "border-white/40 text-white hover:border-white/70",
              )}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "grid overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl transition-all duration-300 ease-out lg:hidden",
            menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0",
          )}
        >
          <div className="min-h-0">
            <div className="px-4 py-4 sm:px-5">
              <nav className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-border/60 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-crimson-glow"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <a href={CONTACT.phoneHref} className="font-semibold text-foreground">
                  {CONTACT.phone}
                </a>
                <span>{CONTACT.hoursShort}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
