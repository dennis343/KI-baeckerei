"use client";
import * as React from "react";
import { ConsentBanner } from "@/components/ui/ConsentBanner";

export type ConsentState = "granted" | "denied" | null;

const STORAGE_KEY = "wr_consent_v1";

type ConsentContextValue = {
  consent: ConsentState;
  grantConsent: () => void;
  denyConsent: () => void;
  revokeConsent: () => void;
  openBanner: () => void;
};

const ConsentContext = React.createContext<ConsentContextValue>({
  consent: null,
  grantConsent: () => {},
  denyConsent: () => {},
  revokeConsent: () => {},
  openBanner: () => {},
});

export function useConsent() {
  return React.useContext(ConsentContext);
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = React.useState<ConsentState>(null);
  const [hydrated, setHydrated] = React.useState(false);
  const [forceOpen, setForceOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "granted" || stored === "denied") {
        setConsent(stored);
      }
    } catch {
      // localStorage blocked — treat as not yet decided
    }
    setHydrated(true);
  }, []);

  const grantConsent = React.useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "granted");
    } catch {}
    setConsent("granted");
    setForceOpen(false);
  }, []);

  const denyConsent = React.useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "denied");
    } catch {}
    setConsent("denied");
    setForceOpen(false);
  }, []);

  const revokeConsent = React.useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setConsent(null);
    setForceOpen(true);
  }, []);

  const openBanner = React.useCallback(() => {
    setForceOpen(true);
  }, []);

  const value = React.useMemo(
    () => ({ consent, grantConsent, denyConsent, revokeConsent, openBanner }),
    [consent, grantConsent, denyConsent, revokeConsent, openBanner],
  );

  const showBanner = hydrated && (consent === null || forceOpen);

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {showBanner && <ConsentBanner />}
    </ConsentContext.Provider>
  );
}
