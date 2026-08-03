import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EMPTY_LEAD_VALUES, isServiceOption, useLeadFormState } from "@/hooks/use-lead-form";
import { LeadFormFields } from "./LeadFormFields";

export function LeadModal({
  open,
  onOpenChange,
  presetService,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presetService?: string | undefined;
}) {
  const { values, pending, patchValues, setValues, submit } = useLeadFormState();

  useEffect(() => {
    if (!open) return;
    setValues({
      ...EMPTY_LEAD_VALUES,
      service: presetService && isServiceOption(presetService) ? presetService : "",
    });
  }, [open, presetService, setValues]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const ok = await submit({
      successTitle: "Спасибо! Мы перезвоним вам",
      successDescription: "Наш мастер свяжется с вами в рабочее время: 9:30 — 19:00.",
      onSuccess: () => onOpenChange(false),
    });
    if (ok) setValues(EMPTY_LEAD_VALUES);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="surface-panel max-w-md border-border/80 sm:rounded-md">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-crimson" />
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold uppercase tracking-wide">
            Записаться в <span className="text-gradient-crimson">AMG</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Оставьте контакты — рассчитаем стоимость и подберём материалы под ваш автомобиль.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <LeadFormFields idPrefix="lead-modal" values={values} onChange={patchValues} />

          <Button
            type="submit"
            size="lg"
            disabled={pending}
            className="h-12 w-full text-sm font-bold uppercase tracking-widest shadow-crimson"
          >
            {pending ? "Отправляем..." : "Отправить заявку"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
