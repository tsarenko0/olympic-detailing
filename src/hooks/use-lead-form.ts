import { useState } from "react";
import { toast } from "sonner";
import { submitContactLead } from "@/lib/submit-contact-lead";
import type { LeadFormValues } from "@/components/site/LeadFormFields";

export const EMPTY_LEAD_VALUES: LeadFormValues = {
  name: "",
  phone: "",
};

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
  try {
    await submitContactLead({
      data: {
        name: values.name,
        phone: values.phone,
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
