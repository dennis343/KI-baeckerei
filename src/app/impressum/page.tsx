import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description:
    "Impressum der KI Bäckerei — Angaben gemäß § 5 TMG. Anbieter: WissensReich Academy UG (haftungsbeschränkt).",
  path: "/impressum",
  noIndex: true,
});

const linkClass =
  "rounded font-medium text-brand-300 underline-offset-4 hover:text-brand-200 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45";

export default function ImpressumPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Impressum", href: "/impressum" }]} />

      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300/90 mb-4">
              Rechtliches
            </p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Impressum
            </h1>
            <p className="mt-5 text-lg text-white/65 font-light leading-relaxed">
              Angaben gemäß § 5 TMG.
            </p>
            <p className="mt-2 text-sm text-white/55 font-light">
              {BRAND.fullName} ist ein Angebot der {BRAND.legal.company}.
            </p>
          </div>

          <div className="mt-14 max-w-3xl space-y-10 text-[15px] leading-relaxed text-white/75">
            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                Anbieter
              </h2>
              <address className="not-italic">
                {BRAND.legal.company}
                <br />
                {BRAND.legal.address}
                <br />
                {BRAND.legal.city}
              </address>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                Handelsregister
              </h2>
              <p>{BRAND.legal.register}</p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p>{BRAND.legal.taxId}</p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                Vertreten durch
              </h2>
              <ul className="space-y-1">
                {BRAND.legal.managingDirectors.map((d) => (
                  <li key={d}>{d} (Geschäftsführer)</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                Kontakt
              </h2>
              <ul className="space-y-1">
                <li>
                  Telefon:{" "}
                  <a href={`tel:${BRAND.legal.phone}`} className={linkClass}>
                    {BRAND.legal.phone}
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
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                Service- und Korrespondenzadresse
              </h2>
              <address className="not-italic">
                {BRAND.legal.serviceAddress.street}
                <br />
                {BRAND.legal.serviceAddress.city}
                <br />
                {BRAND.legal.serviceAddress.country}
              </address>
              <p className="mt-3 text-sm text-white/55">
                Diese Adresse dient der Postannahme sowie der organisatorischen
                und administrativen Abwicklung. Vertragsschluss und
                Leistungserbringung erfolgen — sofern nicht ausdrücklich
                abweichend vereinbart — zwischen Anbieter und Kunde digital.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                Verbraucherstreitbeilegung (§ 36 VSBG)
              </h2>
              <p>
                Wir sind weder verpflichtet noch bereit, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                EU-Streitschlichtung
              </h2>
              <p>
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
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                Haftungshinweis
              </h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
