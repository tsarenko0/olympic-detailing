import { useState } from "react";
import { toast } from "sonner";
import { SERVICES_OPTIONS } from "@/lib/amg-data";
import { submitContactLead } from "@/lib/submit-contact-lead";
import type { LeadFormValues } from "@/components/amg/LeadFormFields";

export const EMPTY_LEAD_VALUES: LeadFormValues = {
  name: "",
  phone: "",
  carBrand: "",
  service: "",
};

export function isServiceOption(value: string): value is (typeof SERVICES_OPTIONS)[number] {
  return (SERVICES_OPTIONS as readonly string[]).includes(value);
}

type SubmitLeadOptions = {
  values: LeadFormValues;
  successTitle: string;
  successDescription: string;
  onSuccess?: () => void;
};

export async function submitLeadForm({
  values,
  successTitle,
  successDescription,
  onSuccess,
}: SubmitLeadOptions) {
  if (!values.carBrand.trim() || !isServiceOption(values.service)) {
    toast.error("Заполните все поля", {
      description: "Укажите марку авто и выберите услугу.",
    });
    return false;
  }

  try {
    await submitContactLead({
      data: {
        name: values.name,
        phone: values.phone,
        carBrand: values.carBrand.trim(),
        service: values.service,
      },
    });
    toast.success(successTitle, { description: successDescription });
    onSuccess?.();
    return true;
  } catch {
    toast.error("Не удалось отправить заявку", {
      description: "Проверьте данные или позвоните нам напрямую.",
    });
    return false;
  }
}

export function useLeadFormState(initial: LeadFormValues = EMPTY_LEAD_VALUES) {
  const [values, setValues] = useState<LeadFormValues>(initial);
  const [pending, setPending] = useState(false);

  const patchValues = (patch: Partial<LeadFormValues>) => {
    setValues((prev) => ({ ...prev, ...patch }));
  };

  const submit = async (options: Omit<SubmitLeadOptions, "values">) => {
    if (pending) return false;
    setPending(true);
    try {
      return await submitLeadForm({ ...options, values });
    } finally {
      setPending(false);
    }
  };

  return { values, pending, patchValues, setValues, submit };
}
