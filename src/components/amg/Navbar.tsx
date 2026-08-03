import { useEffect, useState } from "react";
import { Clock, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/amg-data";
import { useLeadModal } from "./LeadModalProvider";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { open } = useLeadModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav-enter fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "hidden border-b transition-all duration-500 md:block",
          scrolled
            ? "border-border/70 bg-background/90 backdrop-blur"
            : "border-transparent bg-background/70 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="size-3.5 text-primary" />
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
              className="flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-3.5 text-primary" />
              {CONTACT.phone}
            </a>
          </span>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled || menuOpen
            ? "border-border/80 bg-background/95 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-5 md:h-auto md:gap-4 md:px-8 md:py-4">
          <Logo className="shrink min-w-0" />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-bold uppercase tracking-[0.25em] text-primary transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-crimson-glow hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button
              onClick={() => open()}
              className="h-9 px-3 text-[10px] font-bold uppercase tracking-[0.14em] shadow-crimson sm:h-10 sm:px-5 sm:text-xs sm:tracking-[0.2em]"
            >
              Получить консультацию
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary/50 sm:size-10 lg:hidden"
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
