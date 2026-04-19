import * as React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ABSCHLUSS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/constants";

export function AbschlussCta() {
  return (
    <Section tone="cream" aria-labelledby="abschluss-title">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
            {ABSCHLUSS.eyebrow}
          </p>
          <h2
            id="abschluss-title"
            className="font-display text-display-lg text-ink-900"
          >
            {ABSCHLUSS.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-ink-500">
            {ABSCHLUSS.body}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={PRIMARY_CTA.href}
              className="inline-flex h-14 items-center justify-center rounded-xl bg-brand-600 px-8 text-base font-medium text-white shadow-soft transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              {PRIMARY_CTA.label}
            </Link>
            <Link
              href={SECONDARY_CTA.href}
              className="inline-flex h-14 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-8 text-base font-medium text-ink-900 hover:border-ink-900/30 hover:bg-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              {SECONDARY_CTA.label}
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
