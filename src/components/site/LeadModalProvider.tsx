import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { LeadModal } from "./LeadModal";

type LeadModalContextValue = {
  open: () => void;
};

const LeadModalContext = createContext<LeadModalContextValue>({ open: () => {} });

export function useLeadModal() {
  return useContext(LeadModalContext);
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      <LeadModal open={isOpen} onOpenChange={setIsOpen} />
    </LeadModalContext.Provider>
  );
}
