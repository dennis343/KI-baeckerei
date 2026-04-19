import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "AGB der WissensReich Academy UG (haftungsbeschränkt) — Allgemeine Geschäftsbedingungen für Weiterbildungsleistungen.",
  path: "/agb",
  noIndex: true,
});

const linkClass =
  "rounded font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45";

export default function AgbPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "AGB", href: "/agb" }]} />

      <Section aria-labelledby="agb-title">
        <SectionHeader
          as="h1"
          eyebrow="Rechtliches"
          titleId="agb-title"
          title="Allgemeine Geschäftsbedingungen"
          intro={`Stand: April 2026 — ${BRAND.legal.company}`}
        />

        <div className="mt-12 max-w-prose space-y-8 text-[15px] leading-relaxed text-ink-700">
          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 1 Geltungsbereich
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
                Verträge über Weiterbildungsleistungen, Coachings,
                Beratungsleistungen und den Concierge-Service zwischen der{" "}
                {BRAND.legal.company}, {BRAND.legal.address},{" "}
                {BRAND.legal.city} (nachfolgend „Anbieter") und den
                Teilnehmenden bzw. Auftraggebern (nachfolgend „Kunde").
              </li>
              <li>
                Abweichende Bedingungen des Kunden werden nicht anerkannt, es
                sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich
                schriftlich zu.
              </li>
              <li>
                Für öffentlich geförderte Maßnahmen (z.&nbsp;B. AVGS nach §45
                SGB&nbsp;III, KOMPASS/ESF) gelten ergänzend die jeweiligen
                förderrechtlichen Bestimmungen.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 2 Vertragsschluss
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Die Darstellung der Leistungen auf der Website stellt kein
                bindendes Angebot dar, sondern eine Einladung zur Abgabe eines
                Angebots (invitatio ad offerendum).
              </li>
              <li>
                Der Vertrag kommt zustande, wenn der Anbieter die Anmeldung
                bzw. den Auftrag des Kunden schriftlich oder per E-Mail
                bestätigt.
              </li>
              <li>
                Bei öffentlich geförderten Maßnahmen gilt der Vertrag unter der
                aufschiebenden Bedingung, dass der zuständige Kostenträger die
                Maßnahme bewilligt.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 3 Leistungen und Kursdurchführung
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Art, Umfang und Dauer der Leistungen ergeben sich aus der
                jeweiligen Leistungsbeschreibung und der Auftragsbestätigung.
              </li>
              <li>
                Kurse finden in Präsenz, online oder im Hybrid-Format statt.
                Der Anbieter behält sich vor, das Format aus wichtigem Grund
                (z.&nbsp;B. behördliche Auflagen, höhere Gewalt) anzupassen.
              </li>
              <li>
                Der Anbieter ist berechtigt, Dozenten durch gleichwertig
                qualifizierte Personen zu ersetzen.
              </li>
              <li>
                Der Anbieter behält sich vor, Kurse bei Unterschreitung einer
                Mindestteilnehmerzahl abzusagen. Bereits gezahlte Entgelte
                werden in diesem Fall vollständig erstattet.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 4 Fördermittel und Teilnahmevoraussetzungen
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Der Concierge-Service unterstützt Kunden bei der
                Antragstellung für öffentliche Fördermittel (KOMPASS, AVGS,
                Bildungsgutschein). Ein Rechtsanspruch auf Bewilligung
                besteht nicht.
              </li>
              <li>
                Die Prüfung und Bewilligung von Fördermitteln obliegt
                ausschließlich dem zuständigen Kostenträger. Der Anbieter
                übernimmt keine Gewähr für die Bewilligung.
              </li>
              <li>
                Teilnehmende sind verpflichtet, die im Förderantrag
                gemachten Angaben wahrheitsgemäß und vollständig zu
                erbringen.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 5 Preise und Zahlung
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Es gelten die zum Zeitpunkt des Vertragsschlusses gültigen
                Preise gemäß der jeweiligen Leistungsbeschreibung. Alle
                Preise verstehen sich in Euro.
              </li>
              <li>
                Die Umsatzsteuer wird gemäß den gesetzlichen Bestimmungen
                ausgewiesen. Soweit Leistungen nach §4 Nr. 21 UStG
                umsatzsteuerbefreit sind, wird dies kenntlich gemacht.
              </li>
              <li>
                Bei Selbstzahlern ist die Vergütung, sofern nicht anders
                vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung
                ohne Abzug fällig.
              </li>
              <li>
                Bei öffentlich geförderten Maßnahmen erfolgt die Abrechnung
                direkt mit dem Kostenträger. Ein verbleibender Eigenanteil
                ist vom Kunden zu tragen.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 6 Widerrufsrecht für Verbraucher
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Verbraucher im Sinne des §13 BGB haben das Recht, binnen
                14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen.
              </li>
              <li>
                Die Widerrufsfrist beträgt 14 Tage ab dem Tag des
                Vertragsschlusses.
              </li>
              <li>
                Um das Widerrufsrecht auszuüben, muss der Kunde den Anbieter
                ({BRAND.legal.company}, {BRAND.legal.address},{" "}
                {BRAND.legal.city}, E-Mail:{" "}
                <a
                  href={`mailto:${BRAND.legal.email}`}
                  className={linkClass}
                >
                  {BRAND.legal.email}
                </a>
                ) mittels einer eindeutigen Erklärung (z.&nbsp;B. Brief oder
                E-Mail) über den Entschluss informieren.
              </li>
              <li>
                Das Widerrufsrecht erlischt bei Dienstleistungen vorzeitig,
                wenn der Anbieter die Leistung vollständig erbracht hat und
                mit der Ausführung erst begonnen hat, nachdem der Kunde seine
                ausdrückliche Zustimmung erteilt und gleichzeitig seine
                Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei
                vollständiger Vertragserfüllung verliert.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 7 Mitwirkungspflichten des Kunden
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Der Kunde ist zur aktiven Teilnahme und regelmäßigen
                Anwesenheit verpflichtet, insbesondere bei geförderten
                Maßnahmen.
              </li>
              <li>
                Für die Bereitstellung einer geeigneten technischen
                Ausstattung (internetfähiger Computer, stabile
                Internetverbindung, Kamera und Mikrofon) bei Online-Formaten
                ist der Kunde selbst verantwortlich.
              </li>
              <li>
                Unterlagen, Zugangsdaten und sonstige Materialien dürfen
                nicht an Dritte weitergegeben werden.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 8 Haftung
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Der Anbieter haftet unbeschränkt für Vorsatz und grobe
                Fahrlässigkeit sowie für Schäden aus der Verletzung von
                Leben, Körper oder Gesundheit.
              </li>
              <li>
                Bei leichter Fahrlässigkeit haftet der Anbieter nur bei
                Verletzung wesentlicher Vertragspflichten
                (Kardinalpflichten). Die Haftung ist in diesem Fall auf den
                vorhersehbaren, vertragstypischen Schaden begrenzt.
              </li>
              <li>
                Eine Haftung für den Erfolg der Weiterbildung oder für die
                Bewilligung von Fördermitteln ist ausgeschlossen.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 9 Urheberrecht
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Alle vom Anbieter bereitgestellten Unterlagen, Materialien
                und Inhalte sind urheberrechtlich geschützt.
              </li>
              <li>
                Eine Vervielfältigung, Weitergabe oder anderweitige Nutzung
                über den persönlichen Gebrauch hinaus bedarf der vorherigen
                schriftlichen Zustimmung des Anbieters.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 10 Datenschutz
            </h2>
            <p className="mt-3">
              Informationen zur Verarbeitung personenbezogener Daten finden
              Sie in unserer{" "}
              <a href="/datenschutz" className={linkClass}>
                Datenschutzerklärung
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              § 11 Schlussbestimmungen
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>
                Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts (CISG).
              </li>
              <li>
                Gerichtsstand für alle Streitigkeiten aus oder im
                Zusammenhang mit diesem Vertrag ist — soweit gesetzlich
                zulässig — der Sitz des Anbieters (Köln).
              </li>
              <li>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt.
              </li>
              <li>
                Änderungen und Ergänzungen dieser AGB bedürfen der
                Schriftform.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-sans text-base font-semibold text-ink-900">
              Kontakt
            </h2>
            <p className="mt-3">
              {BRAND.legal.company}
              <br />
              {BRAND.legal.address}, {BRAND.legal.city}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${BRAND.legal.email}`}
                className={linkClass}
              >
                {BRAND.legal.email}
              </a>
              <br />
              Telefon:{" "}
              <a
                href={`tel:${BRAND.legal.phone}`}
                className={linkClass}
              >
                {BRAND.legal.phone}
              </a>
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
