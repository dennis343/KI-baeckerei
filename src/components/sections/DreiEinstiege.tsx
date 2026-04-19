import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { EINSTIEGE, CONCIERGE_LAYER } from "@/lib/constants";

export function DreiEinstiege() {
  return (
    <Section
      id="einstiege"
      tone="cream"
      aria-labelledby="einstiege-title"
    >
      <ScrollReveal>
        <SectionHeader
          eyebrow="Drei Einstiege"
          titleId="einstiege-title"
          title="Finden Sie Ihren Weg in die Akademie"
          intro="Jeder Einstieg ist eigenständig aufgebaut und führt zu passgenauen Angeboten. Sie entscheiden, welcher Rahmen zu Ihnen passt — wir stellen den Weg dahin klar bereit."
        />
      </ScrollReveal>

      <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3" stagger={0.12}>
        {EINSTIEGE.map((k) => (
          <StaggerItem key={k.id}>
            <Card
              variant="elevated"
              className="flex h-full flex-col"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
                {k.kicker}
              </p>
              <h3 className="mt-3 font-display text-display-sm text-ink-900">
                {k.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                {k.lead}
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] text-ink-700">
                {k.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-none text-brand-600"
                      aria-hidden="true"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  href={k.cta.href}
                  className="inline-flex items-center gap-1.5 font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                >
                  {k.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Concierge-Layer unter den drei Karten */}
      <ScrollReveal delay={0.3}>
        <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink-700">
              <span className="font-semibold text-ink-900">
                Concierge-Service.{" "}
              </span>
              {CONCIERGE_LAYER.text}
            </p>
            <Link
              href={CONCIERGE_LAYER.link.href}
              className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
            >
              {CONCIERGE_LAYER.link.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
