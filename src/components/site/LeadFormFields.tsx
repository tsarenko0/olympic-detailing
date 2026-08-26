import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type LeadFormValues = {
  name: string;
  phone: string;
};

export function LeadFormFields({
  idPrefix,
  values,
  onChange,
}: {
  idPrefix: string;
  values: LeadFormValues;
  onChange: (patch: Partial<LeadFormValues>) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-name`}>Имя</Label>
        <Input
          id={`${idPrefix}-name`}
          required
          value={values.name}
          onChange={(event) => onChange({ name: event.target.value })}
          placeholder="Александр"
          className="h-11 bg-background/60"
          autoComplete="name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-phone`}>Телефон</Label>
        <Input
          id={`${idPrefix}-phone`}
          type="tel"
          required
          value={values.phone}
          onChange={(event) => onChange({ phone: event.target.value })}
          placeholder="+7 (___) ___-__-__"
          className="h-11 bg-background/60"
          autoComplete="tel"
        />
      </div>
    </div>
  );
}
