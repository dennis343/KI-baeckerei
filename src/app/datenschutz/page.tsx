import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der WissensReich Academy UG (haftungsbeschränkt) — Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  path: "/datenschutz",
  noIndex: true,
});

const linkClass =
  "rounded font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45";

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Datenschutzerklärung", href: "/datenschutz" }]}
      />

      <Section aria-labelledby="ds-title">
        <SectionHeader
          as="h1"
          eyebrow="Rechtliches"
          titleId="ds-title"
          title="Datenschutzerklärung"
          intro="Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden Gesetze, insbesondere der DSGVO und des BDSG."
        />

        <div className="mt-12 max-w-prose space-y-8 text-[15px] leading-relaxed text-ink-700">
          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              1. Verantwortlicher
            </h2>
            <address className="mt-3 not-italic">
              {BRAND.legal.company}
              <br />
              {BRAND.legal.address}
              <br />
              {BRAND.legal.city}
              <br />
              Telefon:{" "}
              <a href={`tel:${BRAND.legal.phone}`} className={linkClass}>
                {BRAND.legal.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${BRAND.legal.email}`}
                className={linkClass}
              >
                {BRAND.legal.email}
              </a>
            </address>
            <p className="mt-3">
              Vertreten durch: {BRAND.legal.managingDirector}
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              2. Kontakt in Datenschutzfragen
            </h2>
            <p className="mt-3">
              Für datenschutzrechtliche Anliegen erreichen Sie uns unter{" "}
              <a
                href={`mailto:${BRAND.legal.email}`}
                className={linkClass}
              >
                {BRAND.legal.email}
              </a>
              . Wir bearbeiten Ihre Anfrage umgehend und vertraulich.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              3. Hosting und technische Bereitstellung
            </h2>
            <p className="mt-3">
              Diese Website wird auf der Infrastruktur von Vercel Inc.
              (340 S Lemon Ave #4133, Walnut, CA 91789, USA) bereitgestellt.
              Beim Aufruf unserer Website werden durch den Hosting-Anbieter
              automatisch technische Zugriffsdaten erfasst (sog.
              Server-Logfiles):
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>IP-Adresse des anfragenden Endgeräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Seite</li>
              <li>Übertragene Datenmenge</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3">
              Die Verarbeitung erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
              lit.&nbsp;f DSGVO (berechtigtes Interesse an der sicheren und
              effizienten Bereitstellung der Website). Eine Zusammenführung
              dieser Daten mit anderen Datenquellen findet nicht statt.
            </p>
            <p className="mt-3">
              Die Datenübermittlung in die USA erfolgt auf Grundlage des
              EU-US Data Privacy Framework. Weitere Informationen finden Sie
              unter{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              4. SSL/TLS-Verschlüsselung
            </h2>
            <p className="mt-3">
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie am Schloss-Symbol in der Adresszeile Ihres Browsers und an
              der Adresse „https://".
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              5. Datenverarbeitung bei Kontaktaufnahme
            </h2>
            <p className="mt-3">
              Wenn Sie uns über das Anfrageformular, per E-Mail oder
              telefonisch kontaktieren, werden Ihre Angaben (Name, E-Mail,
              Telefonnummer, Thema, Nachricht) zur Bearbeitung Ihrer Anfrage
              gespeichert und verarbeitet.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO
              (Vertragsanbahnung oder -erfüllung) und Art.&nbsp;6 Abs.&nbsp;1
              lit.&nbsp;f DSGVO (berechtigtes Interesse an der Beantwortung
              von Anfragen).
            </p>
            <p className="mt-3">
              Ihre Daten werden nach abschließender Bearbeitung Ihrer
              Anfrage gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen. Eine Weitergabe an
              Dritte erfolgt nur, soweit dies zur Vertragserfüllung oder
              aufgrund gesetzlicher Verpflichtungen erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              6. Datenverarbeitung im Rahmen geförderter Maßnahmen
            </h2>
            <p className="mt-3">
              Bei der Durchführung öffentlich geförderter Maßnahmen (AVGS,
              KOMPASS/ESF, Bildungsgutschein) verarbeiten wir
              personenbezogene Daten der Teilnehmenden, soweit dies für die
              Durchführung und Abrechnung der Maßnahme erforderlich ist.
              Hierzu gehören insbesondere Name, Kontaktdaten,
              Maßnahmenummer, Teilnahmezeiten und Anwesenheitsnachweise.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO
              (Vertragserfüllung) in Verbindung mit den jeweiligen
              förderrechtlichen Bestimmungen.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              7. Cookies und Tracking
            </h2>
            <p className="mt-3">
              Wir setzen keine Cookies zu Marketing- oder Analysezwecken
              ohne Ihre ausdrückliche Einwilligung ein. Technisch notwendige
              Cookies können eingesetzt werden, um die Funktionsfähigkeit
              der Website sicherzustellen.
            </p>
            <p className="mt-3">
              Sollte eine Einbindung von Analyse- oder Marketing-Tools zu
              einem späteren Zeitpunkt erfolgen, werden wir Sie vorher
              transparent informieren und Ihre Einwilligung über ein
              geeignetes Consent-Management einholen.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              8. Ihre Rechte nach DSGVO
            </h2>
            <p className="mt-3">
              Sie haben gegenüber dem Verantwortlichen folgende Rechte
              bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Auskunftsrecht</strong> (Art.&nbsp;15 DSGVO) — Sie
                können Auskunft über Ihre bei uns gespeicherten Daten
                verlangen.
              </li>
              <li>
                <strong>Recht auf Berichtigung</strong> (Art.&nbsp;16 DSGVO)
                — Sie können die Berichtigung unrichtiger Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung</strong> (Art.&nbsp;17 DSGVO) —
                Sie können die Löschung Ihrer Daten verlangen, sofern keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                <strong>Recht auf Einschränkung</strong> (Art.&nbsp;18
                DSGVO) — Sie können die Einschränkung der Verarbeitung
                verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit</strong>{" "}
                (Art.&nbsp;20 DSGVO) — Sie können die Herausgabe Ihrer
                Daten in einem strukturierten, gängigen Format verlangen.
              </li>
              <li>
                <strong>Widerspruchsrecht</strong> (Art.&nbsp;21 DSGVO) —
                Sie können der Verarbeitung Ihrer Daten widersprechen,
                sofern die Verarbeitung auf Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO beruht.
              </li>
              <li>
                <strong>Recht auf Widerruf</strong> (Art.&nbsp;7 Abs.&nbsp;3
                DSGVO) — Eine erteilte Einwilligung können Sie jederzeit
                mit Wirkung für die Zukunft widerrufen.
              </li>
              <li>
                <strong>Beschwerderecht</strong> (Art.&nbsp;77 DSGVO) — Sie
                haben das Recht auf Beschwerde bei einer
                Datenschutz-Aufsichtsbehörde, insbesondere in dem
                Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              9. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="mt-3">
              Diese Datenschutzerklärung hat den Stand April 2026. Wir
              behalten uns vor, die Datenschutzerklärung anzupassen, um sie
              an geänderte Rechtslagen oder bei Änderungen unserer
              Leistungen anzupassen. Die jeweils aktuelle Fassung finden
              Sie stets auf dieser Seite.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
