"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, Sparkles, UserCheck, GraduationCap, CircleCheck } from "lucide-react";
import { HERO, SECONDARY_CTA } from "@/lib/constants";
import { useQuickCheckContext } from "@/components/providers/QuickCheckProvider";

const trustIcons = [ShieldCheck, Sparkles, UserCheck, GraduationCap] as const;

/**
 * Hormozi-Style Hero — alles above-the-fold, kein Scrollen nötig.
 *
 * Layout: Headline -> Sub -> Benefits -> CTA (QuickCheck Modal) -> Trust-Leiste
 * Viewport-responsive: iPhone, Mobile, 16:9, 21:9
 * 80% Breitennutzung, kein horizontales Scrollen.
 */
export function Hero() {
  const { openQuickCheck } = useQuickCheckContext();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-white lg:min-h-[calc(100dvh-5rem)]"
    >
      {/* Ruhige Hintergrund-Komposition — KEINE Animationen (Autism-friendly) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-cream-100 via-white to-white" />
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-brand-50 blur-3xl opacity-70" />
        <div className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto w-[min(80%,1200px)] py-6 sm:py-8 lg:py-0">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
            {HERO.eyebrow}
          </p>

          {/* Headline — skaliert per clamp() */}
          <h1
            id="hero-title"
            className="font-display text-ink-900 text-[clamp(1.25rem,4vw+0.5rem,3.5rem)] leading-[1.1] tracking-tight"
          >
            {HERO.headline}
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-2 max-w-2xl text-ink-500 text-[clamp(0.8125rem,1vw+0.5rem,1.25rem)] leading-relaxed sm:mt-3">
            {HERO.sub}
          </p>

          {/* Benefits — Hormozi Bullet Points */}
          <ul className="mx-auto mt-4 grid max-w-xl gap-1.5 text-left sm:mt-5 sm:gap-2">
            {HERO.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 sm:gap-2.5"
              >
                <CircleCheck
                  className="mt-0.5 h-4 w-4 flex-none text-brand-600 sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
                <span className="text-[clamp(0.75rem,0.8vw+0.4rem,1rem)] font-medium leading-snug text-ink-900">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA — QuickCheck als Primary, Beratung als Secondary */}
          <div className="mt-4 flex flex-col items-center gap-2 sm:mt-6 sm:gap-3">
            <button
              type="button"
              onClick={() => openQuickCheck("hero")}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-brand-600 px-6 text-[clamp(0.8125rem,0.5vw+0.6rem,1rem)] font-semibold text-white shadow-soft transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 sm:h-14 sm:w-auto sm:px-10"
            >
              Förderfähigkeit prüfen
            </button>
            <Link
              href={SECONDARY_CTA.href}
              className="text-[clamp(0.75rem,0.5vw+0.5rem,0.9375rem)] font-medium text-ink-600 underline underline-offset-4 decoration-ink-300 hover:text-brand-700 hover:decoration-brand-400 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
            >
              {SECONDARY_CTA.label}
            </Link>
          </div>
        </div>

        {/* Trust-Leiste — flex-wrap für alle Viewports */}
        <div className="mx-auto mt-4 max-w-3xl sm:mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {HERO.trust.map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length] ?? ShieldCheck;
              return (
                <li
                  key={item}
                  className="flex items-center gap-1.5 rounded-lg border border-line bg-white/80 px-2.5 py-1.5 shadow-soft sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2.5"
                >
                  <Icon
                    className="h-3 w-3 flex-none text-brand-600 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                  <span className="text-[clamp(0.625rem,0.5vw+0.4rem,0.875rem)] font-medium text-ink-900 whitespace-nowrap">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
