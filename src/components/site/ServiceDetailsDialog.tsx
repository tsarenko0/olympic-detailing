import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ServiceItem } from "@/lib/services-data";
import { ServiceMedia } from "./ServiceMedia";

const BEFORE_LABEL = "ДО";
const AFTER_LABEL = "ПОСЛЕ";

export function ServiceDetailsDialog({
  service,
  open,
  onOpenChange,
  onOrder,
}: {
  service: ServiceItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOrder: () => void;
}) {
  if (!service) return null;

  const beforeAfter = service.beforeAfter;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[90vh] max-w-2xl flex-col gap-0 overflow-hidden border-border bg-surface p-0 shadow-[0_24px_60px_-28px_oklch(0.2_0.02_30_/_0.45)] sm:rounded-md [&>button]:hidden">
        {beforeAfter ? (
          <div className="relative shrink-0 border-b border-border p-3 md:p-4">
            <div className="grid grid-cols-2 gap-2.5 md:gap-3">
              <figure className="space-y-2">
                <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border bg-muted">
                  <ServiceMedia
                    src={beforeAfter.before}
                    alt={beforeAfter.beforeAlt}
                    className="size-full"
                  />
                </div>
                <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                  {BEFORE_LABEL}
                </figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border bg-muted">
                  <ServiceMedia
                    src={beforeAfter.after}
                    alt={beforeAfter.afterAlt}
                    className="size-full"
                  />
                </div>
                <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                  {AFTER_LABEL}
                </figcaption>
              </figure>
            </div>
            <DialogClose className="absolute right-2.5 top-2.5 z-10 flex size-8 items-center justify-center rounded-md border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary">
              <X className="size-3.5" />
              <span className="sr-only">Закрыть</span>
            </DialogClose>
          </div>
        ) : (
          <div className="relative mx-auto aspect-square w-[min(100%,min(42vh,22rem))] shrink-0 overflow-hidden border-b border-border">
            <ServiceMedia
              src={service.image}
              alt={service.imageAlt}
              className="absolute inset-0 size-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            <DialogClose className="absolute right-2.5 top-2.5 z-10 flex size-8 items-center justify-center rounded-md border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary">
              <X className="size-3.5" />
              <span className="sr-only">Закрыть</span>
            </DialogClose>
          </div>
        )}

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-5 md:p-6">
          <DialogHeader className="space-y-2 text-left">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary">
              {service.tag}
            </p>
            <DialogTitle className="text-xl font-bold uppercase leading-tight text-foreground md:text-2xl">
              {service.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Подробное описание услуги {service.title}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            {service.details.map((paragraph, index) => (
              <p key={`${service.id}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <Button
            size="sm"
            className="h-9 w-full text-[10px] font-bold uppercase tracking-[0.18em] shadow-crimson sm:w-auto sm:px-5"
            onClick={() => {
              onOpenChange(false);
              onOrder();
            }}
          >
            Заказать услугу
            <ArrowUpRight className="size-3.5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
