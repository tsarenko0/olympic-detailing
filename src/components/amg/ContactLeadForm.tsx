import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
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

export function ContactLeadForm() {
  const [values, setValues] = useState<LeadFormValues>(EMPTY_VALUES);
  const [pending, setPending] = useState(false);

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
      toast.success("Заявка отправлена", {
        description: "Мы свяжемся с вами в рабочее время: 9:30 — 19:00.",
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
    <form onSubmit={handleSubmit} className="flex h-full flex-col gap-5">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Заявка</p>
        <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide">
          Запишитесь на детейлинг
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Укажите контакты, марку авто и услугу — перезвоним и проконсультируем.
        </p>
      </div>

      <LeadFormFields
        idPrefix="contact-lead"
        values={values}
        onChange={(patch) => setValues((prev) => ({ ...prev, ...patch }))}
      />

      <div className="mt-auto">
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-12 w-full text-xs font-bold uppercase tracking-[0.2em] shadow-crimson"
        >
          {pending ? "Отправляем..." : "Отправить заявку"}
        </Button>
      </div>
    </form>
  );
}
