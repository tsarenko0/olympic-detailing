import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { LeadModal } from "./LeadModal";

type LeadModalContextValue = {
  open: (service?: string) => void;
};

const LeadModalContext = createContext<LeadModalContextValue>({ open: () => {} });

export function useLeadModal() {
  return useContext(LeadModalContext);
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState<string | undefined>(undefined);

  const open = useCallback((preset?: string) => {
    setService(preset);
    setIsOpen(true);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      <LeadModal open={isOpen} onOpenChange={setIsOpen} presetService={service} />
    </LeadModalContext.Provider>
  );
}
