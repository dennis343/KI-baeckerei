import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BRAND, PRIMARY_CTA, SECONDARY_CTA, TRUST } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { SiegelBar } from "@/components/ui/SiegelBar";

export const metadata: Metadata = buildMetadata({
  title: "Über WissensReich Academy",
  description:
    "AZAV-zertifizierte Akademie für Weiterbildung mit Concierge-Service. ESF/KOMPASS-anerkannt, RDV §4 konform. Geschäftsführer: Florian Domin.",
  path: "/ueber",
});

const prinzipien = [
  {
    title: "Inhalt vor Selbstdarstellung",
    body: "Wir verkaufen keine Lifestyle-Rhetorik und keine generischen Kurssammlungen. Unsere Angebote entstehen aus realen Anforderungen und werden mit Fachleuten entwickelt, die wissen, wovon sie sprechen.",
  },
  {
    title: "Struktur statt Bauchgefühl",
    body: "Wir arbeiten mit klaren Rollen, sauberer Dokumentation und nachvollziehbaren Prozessen — das ist unser Beitrag zur Qualität, nicht die Ausnahme.",
  },
  {
    title: "Respekt für Zeit und Aufmerksamkeit",
    body: "Kein aggressives Marketing. Keine erzwungene Dringlichkeit. Wir nennen Fakten, lassen Zeit zum Nachdenken und treffen uns auf Augenhöhe.",
  },
];

export default function UeberPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Über WissensReich", href: "/ueber" }]} />
      <Section aria-labelledby="ueber-title">
        <SectionHeader
          as="h1"
          eyebrow="Über WissensReich Academy"
          titleId="ueber-title"
          title="Eine Akademie, die Bildung als Verantwortung versteht"
          intro={BRAND.description}
        />
      </Section>

      <Section tone="cream" aria-labelledby="ueber-prinzipien">
        <h2
          id="ueber-prinzipien"
          className="font-display text-display-md text-ink-900"
        >
          Unser Anspruch
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {prinzipien.map((p) => (
            <Card key={p.title} variant="elevated">
              <h3 className="font-sans text-base font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                {p.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Geschäftsführung */}
      <Section aria-labelledby="ueber-leitung">
        <h2
          id="ueber-leitung"
          className="font-display text-display-md text-ink-900"
        >
          Geschäftsführung
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Zwei Geschäftsführer, klare Zuständigkeiten — gemeinsam verantwortlich
          für Qualität, Struktur und persönliche Begleitung.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card variant="elevated" className="flex flex-col">
            <div className="flex items-start gap-4">
              <Image
                src="/dozenten/florian-domin.png"
                alt="Florian Domin"
                width={80}
                height={80}
                className="h-20 w-20 flex-none rounded-full object-cover"
              />
              <div>
                <h3 className="font-sans text-base font-semibold text-ink-900">
                  Florian Domin
                </h3>
                <p className="mt-0.5 text-[14px] font-medium text-brand-700">
                  CEO · Leitung Concierge-Service
                </p>
              </div>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Verantwortet die operative Leitung der Akademie und den
              Concierge-Service. Sorgt dafür, dass Prozesse klar strukturiert,
              Förderanträge sauber vorbereitet und Teilnehmende persönlich
              begleitet werden.
            </p>
          </Card>
          <Card variant="elevated" className="flex flex-col">
            <div className="flex items-start gap-4">
              <Image
                src="/dozenten/hermann-fuerstenau.webp"
                alt="Hermann Fürstenau"
                width={80}
                height={80}
                className="h-20 w-20 flex-none rounded-full object-cover"
              />
              <div>
                <h3 className="font-sans text-base font-semibold text-ink-900">
                  Hermann Fürstenau
                </h3>
                <p className="mt-0.5 text-[14px] font-medium text-brand-700">
                  Geschäftsführer
                </p>
              </div>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Verantwortet strategische Ausrichtung, Partnerschaften und die
              wirtschaftliche Entwicklung der WissensReich Academy.
            </p>
          </Card>
        </div>
      </Section>

      <Section aria-labelledby="ueber-zulassung">
        <h2
          id="ueber-zulassung"
          className="font-display text-display-md text-ink-900"
        >
          Zulassung, Zertifizierung & Rechtsgrundlagen
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Wir legen Wert darauf, dass jede Grundlage unserer Arbeit offen
          sichtbar ist — für Teilnehmende, Unternehmen und öffentliche Stellen.
        </p>
        <div className="mt-10">
          <SiegelBar withLabels withNotes />
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {TRUST.items.map((t) => (
            <li
              key={t.label}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <h3 className="font-sans text-base font-semibold text-ink-900">
                {t.label}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {t.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link
            href="/ueber/rechtsgrundlagen"
            className="inline-flex items-center gap-1.5 rounded text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
          >
            Alle Rechtsgrundlagen im Detail ansehen
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M7.05 3.05 6 4.1l4.9 4.9L6 13.9l1.05 1.05 5.95-5.95z" />
            </svg>
          </Link>
        </div>
      </Section>

      <Section tone="ink" aria-labelledby="ueber-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="ueber-cta"
            className="font-display text-display-md text-white"
          >
            Sprechen wir
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Ob Sie als Solopreneur, Unternehmen oder im öffentlichen Kontext
            unterwegs sind — wir zeigen Ihnen den Weg, der zu Ihnen passt.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={PRIMARY_CTA.href}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              {PRIMARY_CTA.label}
            </Link>
            <Link
              href={SECONDARY_CTA.href}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              {SECONDARY_CTA.label}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
