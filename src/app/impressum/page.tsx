import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description:
    "Impressum der WissensReich Academy UG (haftungsbeschränkt) — Angaben gemäß § 5 TMG.",
  path: "/impressum",
  noIndex: true,
});

const linkClass =
  "rounded font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45";

export default function ImpressumPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Impressum", href: "/impressum" }]} />

      <Section aria-labelledby="imp-title">
        <SectionHeader
          as="h1"
          eyebrow="Rechtliches"
          titleId="imp-title"
          title="Impressum"
          intro="Angaben gemäß § 5 TMG."
        />

        <div className="mt-12 max-w-prose space-y-8 text-[15px] leading-relaxed text-ink-700">
          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Anbieter
            </h2>
            <address className="mt-3 not-italic">
              {BRAND.legal.company}
              <br />
              {BRAND.legal.address}
              <br />
              {BRAND.legal.city}
            </address>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Handelsregister
            </h2>
            <p className="mt-3">{BRAND.legal.register}</p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-3">{BRAND.legal.taxId}</p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Vertreten durch
            </h2>
            <ul className="mt-3 space-y-1">
              <li>Hermann Fürstenau (Geschäftsführer)</li>
              <li>Florian Domin (Geschäftsführer)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Kontakt
            </h2>
            <ul className="mt-3 space-y-1">
              <li>
                Telefon (Zentrale):{" "}
                <a href={`tel:${BRAND.legal.phone}`} className={linkClass}>
                  {BRAND.legal.phone}
                </a>
              </li>
              <li>
                Telefon (Concierge-Service):{" "}
                <a
                  href={`tel:${BRAND.legal.phoneConcierge}`}
                  className={linkClass}
                >
                  {BRAND.legal.phoneConcierge}
                </a>
              </li>
              <li>
                E-Mail:{" "}
                <a href={`mailto:${BRAND.legal.email}`} className={linkClass}>
                  {BRAND.legal.email}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Service- und Korrespondenzadresse
            </h2>
            <address className="mt-3 not-italic">
              {BRAND.legal.serviceAddress.street}
              <br />
              {BRAND.legal.serviceAddress.city}
              <br />
              {BRAND.legal.serviceAddress.country}
            </address>
            <p className="mt-3 text-sm text-ink-500">
              Die zuvor genannte Service- und Korrespondenzadresse dient der
              Postannahme sowie der organisatorischen und administrativen
              Abwicklung. Der Vertragsschluss sowie die Leistungserbringung
              erfolgen — sofern nicht ausdrücklich abweichend vereinbart — durch
              die beauftragenden Kunden.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Verbraucherstreitbeilegung (§ 36 VSBG)
            </h2>
            <p className="mt-3">
              Wir sind weder verpflichtet noch bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              EU-Streitschlichtung
            </h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Haftungshinweis
            </h2>
            <p className="mt-3">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
