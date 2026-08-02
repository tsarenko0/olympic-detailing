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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-border/70 bg-background/90 backdrop-blur md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="size-3.5 text-primary" />
            {CONTACT.hoursShort}
          </span>
          <span className="flex items-center gap-6">
            <span className="tracking-[0.2em]">{CONTACT.address}</span>
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
          scrolled
            ? "border-border/80 bg-background/95 backdrop-blur-xl"
            : "border-transparent bg-background/40 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-4">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => open()}
              className="h-10 px-5 text-xs font-bold uppercase tracking-[0.2em] shadow-crimson"
            >
              Записаться
            </Button>
            <button
              aria-label="Меню"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            >
              {menuOpen ? <Menu className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background/98 px-5 py-4 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
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
        )}
      </div>
    </header>
  );
}
