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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-white/12 bg-[linear-gradient(180deg,oklch(0.26_0.012_25),oklch(0.2_0.008_20))] p-0 sm:rounded-md [&>button]:hidden">
        <div className="relative aspect-[21/9] overflow-hidden border-b border-white/10">
          <ServiceMedia src={service.image} alt={service.imageAlt} />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.008_20)] via-transparent to-transparent" />
          <DialogClose className="absolute right-2.5 top-2.5 flex size-8 items-center justify-center rounded-md border border-white/20 bg-[oklch(0.16_0.01_20_/_0.75)] text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary">
            <X className="size-3.5" />
            <span className="sr-only">Закрыть</span>
          </DialogClose>
        </div>

        <div className="space-y-4 p-5 md:p-6">
          <DialogHeader className="space-y-2 text-left">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary">
              {service.tag}
            </p>
            <DialogTitle className="text-xl font-bold uppercase leading-tight text-[oklch(0.97_0.005_20)] md:text-2xl">
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
