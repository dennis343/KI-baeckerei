import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der KI Bäckerei — Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  path: "/datenschutz",
  noIndex: true,
});

const linkClass =
  "rounded font-medium text-brand-300 underline-offset-4 hover:text-brand-200 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45";

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Datenschutzerklärung", href: "/datenschutz" }]}
      />

      <section className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-4">
              Rechtliches
            </p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Datenschutzerklärung
            </h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der
              geltenden Gesetze, insbesondere der DSGVO und des BDSG.
            </p>
            <p className="mt-2 text-sm text-white/90">
              {BRAND.fullName} ist ein Angebot der {BRAND.legal.company}.
            </p>
          </div>

          <div className="mt-14 max-w-3xl space-y-10 text-[15px] leading-relaxed text-white/90">
            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                1. Verantwortlicher
              </h2>
              <address className="not-italic">
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
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                2. Kontakt in Datenschutzfragen
              </h2>
              <p>
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
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                3. Hosting und technische Bereitstellung
              </h2>
              <p>
                Diese Website wird über einen externen Hosting-Anbieter
                bereitgestellt. Beim Aufruf unserer Website werden durch den
                Hosting-Anbieter automatisch technische Zugriffsdaten erfasst
                (sog. Server-Logfiles):
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
                Sofern eine Datenübermittlung in Drittländer — insbesondere
                die USA — stattfindet, erfolgt diese auf Grundlage des EU-US
                Data Privacy Framework oder vergleichbarer Schutzmechanismen
                gemäß Art.&nbsp;44 ff. DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                4. SSL/TLS-Verschlüsselung
              </h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie am Schloss-Symbol in der Adresszeile Ihres Browsers und an
                der Adresse „https://".
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                5. Datenverarbeitung bei Kontaktaufnahme
              </h2>
              <p>
                Wenn Sie uns über das Anfrageformular, per E-Mail oder
                telefonisch kontaktieren, werden Ihre Angaben (Name, E-Mail,
                Telefonnummer, Thema, Nachricht) zur Bearbeitung Ihrer Anfrage
                gespeichert und verarbeitet. Bei Bewerbungen für das
                4-Wochen-Programm zusätzlich: Ausgangslage, Bremser-Kategorie,
                priorisiertes Vorhaben.
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
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                6. Cookies und Tracking
              </h2>
              <p>
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
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                7. Ihre Rechte nach DSGVO
              </h2>
              <p>
                Sie haben gegenüber dem Verantwortlichen folgende Rechte
                bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white">Auskunftsrecht</strong>{" "}
                  (Art.&nbsp;15 DSGVO) — Sie können Auskunft über Ihre bei uns
                  gespeicherten Daten verlangen.
                </li>
                <li>
                  <strong className="text-white">Recht auf Berichtigung</strong>{" "}
                  (Art.&nbsp;16 DSGVO) — Sie können die Berichtigung
                  unrichtiger Daten verlangen.
                </li>
                <li>
                  <strong className="text-white">Recht auf Löschung</strong>{" "}
                  (Art.&nbsp;17 DSGVO) — Sie können die Löschung Ihrer Daten
                  verlangen, sofern keine gesetzlichen Aufbewahrungspflichten
                  entgegenstehen.
                </li>
                <li>
                  <strong className="text-white">Recht auf Einschränkung</strong>{" "}
                  (Art.&nbsp;18 DSGVO) — Sie können die Einschränkung der
                  Verarbeitung verlangen.
                </li>
                <li>
                  <strong className="text-white">
                    Recht auf Datenübertragbarkeit
                  </strong>{" "}
                  (Art.&nbsp;20 DSGVO) — Sie können die Herausgabe Ihrer Daten
                  in einem strukturierten, gängigen Format verlangen.
                </li>
                <li>
                  <strong className="text-white">Widerspruchsrecht</strong>{" "}
                  (Art.&nbsp;21 DSGVO) — Sie können der Verarbeitung Ihrer
                  Daten widersprechen, sofern die Verarbeitung auf Art.&nbsp;6
                  Abs.&nbsp;1 lit.&nbsp;f DSGVO beruht.
                </li>
                <li>
                  <strong className="text-white">Recht auf Widerruf</strong>{" "}
                  (Art.&nbsp;7 Abs.&nbsp;3 DSGVO) — Eine erteilte Einwilligung
                  können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                </li>
                <li>
                  <strong className="text-white">Beschwerderecht</strong>{" "}
                  (Art.&nbsp;77 DSGVO) — Sie haben das Recht auf Beschwerde
                  bei einer Datenschutz-Aufsichtsbehörde, insbesondere in dem
                  Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-white mb-3">
                8. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p>
                Diese Datenschutzerklärung hat den Stand April 2026. Wir
                behalten uns vor, die Datenschutzerklärung anzupassen, um sie
                an geänderte Rechtslagen oder bei Änderungen unserer
                Leistungen anzupassen. Die jeweils aktuelle Fassung finden
                Sie stets auf dieser Seite.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
