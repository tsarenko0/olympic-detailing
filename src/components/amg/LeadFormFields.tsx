import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES_OPTIONS } from "@/lib/amg-data";

export type LeadFormValues = {
  name: string;
  phone: string;
  carBrand: string;
  service: string;
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

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-car`}>Марка авто</Label>
        <Input
          id={`${idPrefix}-car`}
          required
          value={values.carBrand}
          onChange={(event) => onChange({ carBrand: event.target.value })}
          placeholder="Mercedes-AMG GT 63"
          className="h-11 bg-background/60"
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-service`}>Услуга</Label>
        <Select
          {...(values.service ? { value: values.service } : {})}
          onValueChange={(service) => onChange({ service })}
        >
          <SelectTrigger id={`${idPrefix}-service`} className="h-11 bg-background/60">
            <SelectValue placeholder="Выберите услугу" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
