"use client";

import * as React from "react";
import { QuickCheckModal } from "@/components/ui/QuickCheckModal";
import { trackEvent } from "@/lib/tracking";

const QuickCheckContext = React.createContext<{
  openQuickCheck: (source?: string) => void;
}>({ openQuickCheck: () => {} });

export function useQuickCheckContext() {
  return React.useContext(QuickCheckContext);
}

export function QuickCheckProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({
      openQuickCheck: (source?: string) => {
        trackEvent("quickcheck_opened", source ? { source } : undefined);
        setOpen(true);
      },
    }),
    [],
  );

  return (
    <QuickCheckContext.Provider value={value}>
      {children}
      <QuickCheckModal open={open} onClose={() => setOpen(false)} />
    </QuickCheckContext.Provider>
  );
}
