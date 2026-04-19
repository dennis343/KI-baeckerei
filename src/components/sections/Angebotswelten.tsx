import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { ANGEBOTE } from "@/lib/constants";

export function Angebotswelten() {
  return (
    <Section id="angebote" aria-labelledby="angebote-title">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Angebotswelten"
          titleId="angebote-title"
          title="Vier Wege, sauber zertifiziert und klar beschrieben"
          intro="Jedes Angebot trägt seine Rechtsgrundlage, seinen Umfang und seinen Nutzen offen sichtbar. So entsteht Vertrauen vor dem ersten Gespräch."
        />
      </ScrollReveal>

      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.1}>
        {ANGEBOTE.map((a) => (
          <StaggerItem key={a.id}>
            <Card variant="outline" className="flex h-full flex-col">
              <span className="inline-flex self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                {a.tag}
              </span>
              <h3 className="mt-4 font-display text-display-sm text-ink-900">
                {a.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                {a.lead}
              </p>

              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
                {a.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-[14px] font-medium text-ink-900">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto pt-6">
                <Link
                  href={a.href}
                  className="inline-flex items-center gap-1.5 font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                >
                  Angebot ansehen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal delay={0.3}>
        <p className="mt-6 max-w-prose text-sm text-ink-500">
          * Antragsquote bezieht sich auf mit unserem Concierge-Service
          begleitete KOMPASS-Anträge.
        </p>
      </ScrollReveal>
    </Section>
  );
}
