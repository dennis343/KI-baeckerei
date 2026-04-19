"use client";
import * as React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { useConsent } from "@/components/providers/ConsentProvider";

export function ConsentBanner() {
  const { grantConsent, denyConsent } = useConsent();

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-body"
      className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 pt-2 sm:px-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-white p-6 shadow-lg sm:p-7">
        <div className="flex items-start gap-3">
          <div
            aria-hidden="true"
            className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600"
          >
            <Shield className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p
              id="consent-title"
              className="font-display text-[18px] font-semibold text-ink-900"
            >
              Wir respektieren Ihre Privatsphäre
            </p>
            <p
              id="consent-body"
              className="mt-2 text-[14px] leading-relaxed text-ink-500"
            >
              Wir nutzen technisch notwendige Cookies, damit diese Seite
              funktioniert. Mit Ihrer Zustimmung verwenden wir zusätzlich
              Analyse- und Marketing-Cookies (u. a. Google Tag Manager und
              Meta Pixel), um unser Angebot zu verbessern und Inhalte
              relevanter auszuspielen. Ihre Einwilligung ist freiwillig und
              kann jederzeit in der{" "}
              <Link
                href="/datenschutz"
                className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                Datenschutzerklärung
              </Link>{" "}
              widerrufen werden.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={grantConsent}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-600 px-5 text-[14px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={denyConsent}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-5 text-[14px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
              >
                Nur notwendige
              </button>
              <Link
                href="/datenschutz"
                className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-[14px] font-medium text-ink-700 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
              >
                Details & Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
