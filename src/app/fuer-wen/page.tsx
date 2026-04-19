import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Shield, TrendingUp, Users } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Für wen ist WissensReich? — Solopreneure, Unternehmen, Gründer",
  description:
    "Finden Sie den Förderweg, der zu Ihrer Situation passt. AZAV-zertifizierte Weiterbildung mit Concierge-Service für Solopreneure, Unternehmen und Gründer.",
  path: "/fuer-wen",
});

const wege = [
  {
    icon: TrendingUp,
    kicker: "Solopreneure",
    title: "Sie sind selbstständig und wollen wachsen",
    lead: "Bis zu 90 % Förderung über KOMPASS (ESF). Kompakte Formate, die Ihren Alltag respektieren. Kurse aus Marketing, KI, Rhetorik und Unternehmertum.",
    facts: [
      "Förderquote: bis 90 % über ESF/KOMPASS",
      "Voraussetzung: max. 1 Vollzeitkraft",
      "Bewilligungsquote mit Concierge: bis 90–95 %",
    ],
    href: "/solopreneure",
    cta: "Solopreneure-Seite ansehen",
  },
  {
    icon: Users,
    kicker: "Unternehmen",
    title: "Sie qualifizieren Teams und brauchen Struktur",
    lead: "Geförderte Weiterbildung über das Qualifizierungschancengesetz. Wir übernehmen Koordination und Dokumentation — Ihre HR-Abteilung wird entlastet.",
    facts: [
      "Bis zu 100 % Förderung je nach Betriebsgröße",
      "Qualifizierungschancengesetz (§ 82 SGB III)",
      "Concierge-Service für die gesamte Abwicklung",
    ],
    href: "/unternehmen",
    cta: "Unternehmen-Seite ansehen",
  },
  {
    icon: Shield,
    kicker: "Gründer & Wechsler",
    title: "Sie starten neu und brauchen eine solide Basis",
    lead: "100 % Kostenübernahme über AVGS (§ 45 SGB III). AZAV-zertifizierte Maßnahmen für den Einstieg in Beschäftigung oder tragfähige Selbstständigkeit.",
    facts: [
      "100 % Kostenübernahme über AVGS",
      "AZAV-zertifizierter Träger",
      "Inkasso-Sachkunde & Businessplan-Werkstatt",
    ],
    href: "/avgs",
    cta: "Gründer & Wechsler ansehen",
  },
];

const vertrauen = [
  {
    zahl: "90–95 %",
    label: "Bewilligungsquote",
    text: "So hoch liegt die Erfolgsquote bei Förderanträgen, die unser Concierge-Service vorbereitet.",
  },
  {
    zahl: "15+",
    label: "AZAV-zertifizierte Kurse",
    text: "Jeder Kurs ist staatlich zugelassen. Jeder Dozent bringt eigene Praxiserfahrung mit.",
  },
  {
    zahl: "0 €",
    label: "Eigenanteil möglich",
    text: "Je nach Förderweg zahlen Sie nichts — oder nur einen kleinen Eigenanteil von 10 %.",
  },
];

export default function FuerWenPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Für wen?", href: "/fuer-wen" }]} />

      {/* Hero */}
      <Section aria-labelledby="fw-title">
        <SectionHeader
          as="h1"
          eyebrow="Den richtigen Weg finden"
          titleId="fw-title"
          title="Drei Situationen. Drei Förderwege. Ein Ziel: Sie kommen voran."
          intro="Weiterbildung ist kein Luxus — sie ist ein Hebel. Und mit dem richtigen Förderweg kostet sie Sie fast nichts. Finden Sie hier den Einstieg, der zu Ihrer Situation passt."
        />
      </Section>

      {/* Micro-Commitment: Vertrauen */}
      <Section tone="cream" aria-labelledby="fw-vertrauen">
        <h2 id="fw-vertrauen" className="sr-only">
          Warum WissensReich der richtige Partner ist
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {vertrauen.map((v) => (
            <div key={v.label} className="rounded-2xl border border-line bg-white p-6 text-center">
              <p className="font-display text-display-md text-brand-600">
                {v.zahl}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">
                {v.label}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Die drei Wege */}
      <Section aria-labelledby="fw-wege">
        <h2
          id="fw-wege"
          className="font-display text-display-md text-ink-900"
        >
          Welcher Weg passt zu Ihnen?
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Jeder Förderweg hat eigene Voraussetzungen, eigene Regeln und eigene
          Chancen. Wir haben sie für Sie sortiert — klar, ehrlich und ohne
          Kleingedrucktes.
        </p>

        <div className="mt-10 grid gap-6">
          {wege.map((w) => (
            <Card key={w.kicker} variant="elevated" className="flex flex-col">
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600"
                >
                  <w.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                    {w.kicker}
                  </p>
                  <h3 className="mt-1 font-display text-display-sm text-ink-900">
                    {w.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                {w.lead}
              </p>

              <ul className="mt-4 space-y-2">
                {w.facts.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[14px] text-ink-700">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={w.href}
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                >
                  {w.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Fördermittelkompetenz */}
      <Section tone="cream" aria-labelledby="fw-foerder">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Fördermittel als Beschleuniger
            </p>
            <h2
              id="fw-foerder"
              className="mt-2 font-display text-display-md text-ink-900"
            >
              Warum kluge Menschen Fördermittel nutzen
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Fördermittel sind kein Almosen. Sie sind ein staatliches Instrument,
              das gezielt dafür geschaffen wurde, unternehmerische Entwicklung zu
              beschleunigen. Wer sie nicht nutzt, verschenkt einen Vorteil, den
              der Staat ausdrücklich anbietet.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Ob KOMPASS, Qualifizierungschancengesetz oder AVGS — jedes Programm
              hat eine klare Rechtsgrundlage, definierte Voraussetzungen und einen
              nachvollziehbaren Prozess. Wir kennen alle drei und begleiten Sie
              durch jeden einzelnen.
            </p>
          </div>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">
              Was unser Concierge-Service für Sie tut
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] text-ink-700">
              {[
                "Förderfähigkeit prüfen und den richtigen Weg identifizieren",
                "Unterlagen strukturieren und Anträge vorbereiten",
                "Fristen überwachen und Rückfragen koordinieren",
                "Vom ersten Gespräch bis zum Abschluss an Ihrer Seite",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/concierge-service"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
              >
                Mehr zum Concierge-Service
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Unsicher? */}
      <Section aria-labelledby="fw-unsicher">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Noch unsicher?
          </p>
          <h2
            id="fw-unsicher"
            className="mt-2 font-display text-display-md text-ink-900"
          >
            Sie müssen sich nicht sofort entscheiden
          </h2>
          <p className="mt-5 text-lead text-ink-500">
            Schauen Sie sich in Ruhe unsere Leistungen an oder lassen Sie sich
            unverbindlich beraten. Kein Druck. Keine Verpflichtung. Nur Klarheit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/kursuebersicht"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              Alle Kurse & Leistungen
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-6 text-[15px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
