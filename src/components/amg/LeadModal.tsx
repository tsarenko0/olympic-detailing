import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SERVICES_OPTIONS } from "@/lib/amg-data";
import { submitContactLead } from "@/lib/submit-contact-lead";
import { LeadFormFields, type LeadFormValues } from "./LeadFormFields";

const EMPTY_VALUES: LeadFormValues = {
  name: "",
  phone: "",
  carBrand: "",
  service: "",
};

function isServiceOption(value: string): value is (typeof SERVICES_OPTIONS)[number] {
  return (SERVICES_OPTIONS as readonly string[]).includes(value);
}

export function LeadModal({
  open,
  onOpenChange,
  presetService,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presetService?: string | undefined;
}) {
  const [values, setValues] = useState<LeadFormValues>(EMPTY_VALUES);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!open) return;
    setValues({
      ...EMPTY_VALUES,
      service: presetService && isServiceOption(presetService) ? presetService : "",
    });
  }, [open, presetService]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (pending) return;

    if (!values.carBrand.trim() || !isServiceOption(values.service)) {
      toast.error("Заполните все поля", {
        description: "Укажите марку авто и выберите услугу.",
      });
      return;
    }

    setPending(true);
    try {
      await submitContactLead({
        data: {
          name: values.name,
          phone: values.phone,
          carBrand: values.carBrand.trim(),
          service: values.service,
        },
      });
      onOpenChange(false);
      toast.success("Спасибо! Мы перезвоним вам", {
        description: "Наш мастер свяжется с вами в рабочее время: 9:30 — 19:00.",
      });
      setValues(EMPTY_VALUES);
    } catch {
      toast.error("Не удалось отправить заявку", {
        description: "Проверьте данные или позвоните нам напрямую.",
      });
    } finally {
      setPending(false);
    }
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
          <LeadFormFields
            idPrefix="lead-modal"
            values={values}
            onChange={(patch) => setValues((prev) => ({ ...prev, ...patch }))}
          />

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
