import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EMPTY_LEAD_VALUES, useLeadFormState } from "@/hooks/use-lead-form";
import { LeadFormFields } from "./LeadFormFields";
import { PrivacyNote } from "./PrivacyNote";

export function LeadModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { values, pending, patchValues, setValues, submit } = useLeadFormState();

  useEffect(() => {
    if (!open) return;
    setValues(EMPTY_LEAD_VALUES);
  }, [open, setValues]);

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
            Записаться в <span className="text-gradient-crimson">Olympic</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Оставьте имя и телефон — перезвоним и проконсультируем.
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
          <PrivacyNote />
        </form>
      </DialogContent>
    </Dialog>
  );
}
