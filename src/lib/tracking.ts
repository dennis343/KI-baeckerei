"use client";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Push an event to the dataLayer (GTM) and Meta Pixel, if both are loaded
 * AND the user has granted consent. Safe to call from any component —
 * no-ops on the server and when tracking is disabled.
 */
export function trackEvent(
  name: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;

  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...(params ?? {}) });
    }
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", name, params ?? {});
    }
  } catch {
    // swallow — tracking must never break the app
  }
}
