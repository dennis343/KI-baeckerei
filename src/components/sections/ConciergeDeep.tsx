import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldAlert } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CONCIERGE_DEEP } from "@/lib/constants";

export function ConciergeDeep() {
  return (
    <Section tone="cream" aria-labelledby="concierge-title">
      <ScrollReveal>
        <SectionHeader
          eyebrow={CONCIERGE_DEEP.eyebrow}
          titleId="concierge-title"
          title={CONCIERGE_DEEP.title}
          intro={CONCIERGE_DEEP.body}
        />
      </ScrollReveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* Linke Spalte: 5-Schritte-Ablauf */}
        <ScrollReveal direction="left">
          <div>
            <h3 className="font-display text-display-sm text-ink-900">
              So arbeitet der Concierge-Service
            </h3>
            <ol className="mt-8 space-y-6 border-l border-brand-100 pl-6">
              {CONCIERGE_DEEP.ablauf.map((a) => (
                <li key={a.step} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[33px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white shadow-soft"
                  >
                    {a.step}
                  </span>
                  <h4 className="font-sans text-base font-semibold text-ink-900">
                    {a.title}
                  </h4>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-500">
                    {a.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>

        {/* Rechte Spalte: Benefits + Rollenmatrix */}
        <ScrollReveal direction="right" delay={0.15}>
          <div className="space-y-8">
            <div className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-sans text-base font-semibold text-ink-900">
                Was Sie davon haben
              </h3>
              <ul className="mt-4 space-y-2.5 text-[15px] text-ink-700">
                {CONCIERGE_DEEP.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-none text-brand-600"
                      aria-hidden="true"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-sans text-base font-semibold text-ink-900">
                {CONCIERGE_DEEP.rolesTitle}
              </h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                    Wir übernehmen
                  </p>
                  <ul className="mt-3 space-y-2 text-[14px] text-ink-700">
                    {CONCIERGE_DEEP.roles.wir.map((r) => (
                      <li key={r}>· {r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                    Bei Ihnen bleibt
                  </p>
                  <ul className="mt-3 space-y-2 text-[14px] text-ink-700">
                    {CONCIERGE_DEEP.roles.imUnternehmen.map((r) => (
                      <li key={r}>· {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 border-t border-line pt-4 text-[13px] leading-relaxed text-ink-500">
                {CONCIERGE_DEEP.verantwortungsHinweis}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Pflichtbox: Strukturierung ja. Vorentscheidung nein. */}
      <ScrollReveal delay={0.2}>
        <div className="mt-12 rounded-2xl border border-ink-900/15 bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div
              aria-hidden="true"
              className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-ink-900 text-white"
            >
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <p className="font-sans text-base font-semibold text-ink-900">
                {CONCIERGE_DEEP.pflichtbox.title}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                {CONCIERGE_DEEP.pflichtbox.body}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-10">
          <Link
            href="/concierge-service"
            className="inline-flex items-center gap-2 font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
          >
            Mehr zum Concierge-Service
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  );
}
