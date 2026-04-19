import * as React from "react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ConsultationForm } from "@/components/ui/ConsultationForm";
import { BRAND } from "@/lib/constants";

export function KontaktSection() {
  return (
    <Section id="kontakt" tone="white" aria-labelledby="kontakt-title">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal direction="left">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
              Beratung anfragen
            </p>
            <h2
              id="kontakt-title"
              className="font-display text-display-lg text-ink-900"
            >
              Ein Gespräch, das Klarheit schafft
            </h2>
            <p className="mt-5 text-lead text-ink-500">
              Sie beschreiben Ihr Anliegen in wenigen Sätzen — wir melden uns mit
              einem klaren, realistischen nächsten Schritt. Kein Verkaufs­gespräch,
              keine Drucksituation.
            </p>
            <dl className="mt-8 space-y-4 text-[15px] text-ink-700">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  Termin direkt buchen
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://tidycal.com/team/concierge-team-wissensreich/personliches-gesprach-kurs-und-fordermittelberatung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                  >
                    Persönliches Gespräch online buchen →
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  Telefon Concierge-Service
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${BRAND.legal.phoneConcierge.replace(/\s/g, "")}`}
                    className="rounded font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                  >
                    {BRAND.legal.phoneConcierge}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  E-Mail
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${BRAND.legal.email}`}
                    className="rounded font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                  >
                    {BRAND.legal.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  Reaktionszeit
                </dt>
                <dd className="mt-1">in der Regel innerhalb eines Werktags</dd>
              </div>
            </dl>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.1}>
          <div className="rounded-2xl border border-line bg-cream-50 p-6 sm:p-8">
            <ConsultationForm />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
