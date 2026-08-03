import { Button } from "@/components/ui/button";
import { LeadFormFields } from "./LeadFormFields";
import { PrivacyNote } from "./PrivacyNote";
import { EMPTY_LEAD_VALUES, useLeadFormState } from "@/hooks/use-lead-form";

export function ContactLeadForm() {
  const { values, pending, patchValues, setValues, submit } = useLeadFormState();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const ok = await submit({
      successTitle: "Заявка отправлена",
      successDescription: "Мы свяжемся с вами в рабочее время: 9:30 — 19:00.",
    });
    if (ok) setValues(EMPTY_LEAD_VALUES);
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col gap-5">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Заявка</p>
        <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide">
          Запишитесь на детейлинг
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Укажите имя и телефон — перезвоним и проконсультируем.
        </p>
      </div>

      <LeadFormFields idPrefix="contact-lead" values={values} onChange={patchValues} />

      <div className="mt-auto space-y-3">
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-12 w-full text-xs font-bold uppercase tracking-[0.2em] shadow-crimson"
        >
          {pending ? "Отправляем..." : "Отправить заявку"}
        </Button>
        <PrivacyNote />
      </div>
    </form>
  );
}
