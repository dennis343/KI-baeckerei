import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Impressum & Rechtliche Angaben",
  description:
    "Impressum der Eskalator AG (Schweiz) — Pflichtangaben, Haftung, Event- und Workshop-Vereinbarungen sowie Teilnahmebedingungen.",
  path: "/impressum",
});

const linkClass =
  "rounded font-medium text-brand-300 underline-offset-4 hover:text-brand-200 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45";

const sectionClass =
  "scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-10";

export default function ImpressumPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Impressum", href: "/impressum" }]} />

      <section
        className="relative z-10 py-24 sm:py-32"
        aria-labelledby="impressum-heading"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-4">
              Rechtliche Angaben · Legal Notice
            </p>
            <h1
              id="impressum-heading"
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.015em] text-white"
            >
              Wir stehen
              <br />
              <span className="text-brand-300">zu dem, was wir tun.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed">
              Unsere Pflichtangaben — vollständig, klar, ohne kompliziertes
              Versteckspiel.
            </p>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              Weil wir das einfach so halten. Immer.
            </p>
          </div>

          <div className="mt-14 max-w-4xl space-y-6 text-[15px] leading-relaxed text-white/90">
            {/* I — Unternehmen & Sitz */}
            <article id="abschnitt-i" className={sectionClass}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                Abschnitt I
              </p>
              <h2 className="font-display text-2xl text-white mb-6">
                Unternehmen &amp; Sitz
              </h2>

              <dl className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-8 gap-y-5">
                <dt className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold pt-1">
                  Unternehmen
                </dt>
                <dd>
                  <p className="font-display text-lg text-white">
                    {BRAND.legal.legalName}
                  </p>
                  <p className="text-sm text-white/75 mt-0.5">
                    {BRAND.legal.legalForm}
                  </p>
                </dd>

                <dt className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold pt-1">
                  UID &amp; Handelsregister
                </dt>
                <dd>
                  <p>{BRAND.legal.uid}</p>
                  <p className="text-sm text-white/75">
                    {BRAND.legal.register}
                  </p>
                  <p className="text-sm text-white/75">
                    Qualität seit {BRAND.legal.foundedSince}
                  </p>
                </dd>

                <dt className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold pt-1">
                  Anschrift
                </dt>
                <dd>
                  <address className="not-italic">
                    {BRAND.legal.address}
                    <br />
                    {BRAND.legal.city}
                    <br />
                    {BRAND.legal.country}
                  </address>
                </dd>

                <dt className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold pt-1">
                  Verwaltungsrätin
                </dt>
                <dd>
                  {BRAND.legal.managingDirectors.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </dd>
              </dl>
            </article>

            {/* II — Korrespondenz Deutschland */}
            <article id="abschnitt-ii" className={sectionClass}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                Abschnitt II
              </p>
              <h2 className="font-display text-2xl text-white mb-6">
                Korrespondenz- &amp; Serviceadresse Deutschland
              </h2>
              <p className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold mb-3">
                {BRAND.legal.serviceAddress.label}
              </p>
              <address className="not-italic text-white/90">
                {BRAND.legal.serviceAddress.careOf}
                <br />
                {BRAND.legal.serviceAddress.street}
                <br />
                {BRAND.legal.serviceAddress.city}
                <br />
                {BRAND.legal.serviceAddress.country}
              </address>
              <p className="mt-5 text-sm text-rose-300/85">
                {BRAND.legal.serviceAddress.note}
              </p>
            </article>

            {/* III — Kontakt */}
            <article id="abschnitt-iii" className={sectionClass}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                Abschnitt III
              </p>
              <h2 className="font-display text-2xl text-white mb-6">Kontakt</h2>

              <dl className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-8 gap-y-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold pt-1">
                  Telefon Deutschland
                </dt>
                <dd>
                  <a href={`tel:${BRAND.legal.phone.replace(/\s/g, "")}`} className={linkClass}>
                    {BRAND.legal.phone}
                  </a>
                </dd>

                <dt className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold pt-1">
                  Telefon Schweiz
                </dt>
                <dd>
                  <a href={`tel:${BRAND.legal.phoneCh.replace(/\s/g, "")}`} className={linkClass}>
                    {BRAND.legal.phoneCh}
                  </a>
                </dd>

                <dt className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold pt-1">
                  E-Mail
                </dt>
                <dd>
                  <a href={`mailto:${BRAND.legal.email}`} className={linkClass}>
                    {BRAND.legal.email}
                  </a>
                </dd>
              </dl>
            </article>

            {/* IV — Haftung & anwendbares Recht */}
            <article id="abschnitt-iv" className={sectionClass}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                Abschnitt IV
              </p>
              <h2 className="font-display text-2xl text-white mb-6">
                Haftung &amp; anwendbares Recht
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg text-white mb-2">
                    Haftungsausschluss
                  </h3>
                  <p>
                    Die Inhalte dieser Website werden mit größtmöglicher
                    Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und
                    Aktualität übernimmt die {BRAND.legal.legalName} keine
                    Gewähr. Für externe Links tragen ausschließlich deren
                    Betreiber die Verantwortung.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-2">
                    Anwendbares Recht
                  </h3>
                  <p>
                    Soweit nicht ausdrücklich anders vereinbart, unterliegt die
                    Nutzung dieser Website sowie darüber geschlossener Verträge
                    dem materiellen Recht der Schweiz unter Ausschluss des
                    UN-Kaufrechts.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-2">
                    Verbraucherstreitbeilegung
                  </h3>
                  <p>
                    Wir sind weder bereit noch verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-white mb-2">
                    EU-Streitschlichtung
                  </h3>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noreferrer"
                      className={linkClass}
                    >
                      ec.europa.eu/consumers/odr
                    </a>
                    .
                  </p>
                </div>
              </div>
            </article>

            {/* V — Darstellungen & Einschränkungen */}
            <article id="abschnitt-v" className={sectionClass}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                Abschnitt V
              </p>
              <h2 className="font-display text-2xl text-white mb-6">
                Darstellungen &amp; Einschränkungen
              </h2>
              <p>
                Alle genannten Referenzen, Fallbeispiele und Berechnungen
                dienen der Veranschaulichung von Wirkprinzipien. Sie basieren
                auf individuellen Projekten mit überdurchschnittlichem
                persönlichem Einsatz der Beteiligten und stellen{" "}
                <span className="text-white">keine Ergebnisgarantie</span> dar.
              </p>
              <p className="mt-4">
                Persönliche Erfolge und Fördermöglichkeiten variieren erheblich
                je nach Branche, Businessstadium, Marktentwicklung und
                Mitarbeit. Eine Haftung für das Ausbleiben vergleichbarer
                Ergebnisse ist ausgeschlossen.
              </p>
            </article>

            {/* VI — Event- & Workshop-Vereinbarungen */}
            <article id="abschnitt-vi" className={sectionClass}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                Abschnitt VI
              </p>
              <h2 className="font-display text-2xl text-white mb-6">
                Event- &amp; Workshop-Vereinbarungen
              </h2>
              <p className="mb-7">
                Klare Ziele, klare Absprachen. Wir sagen DU. Wir nennen Dinge
                schlecht, wenn sie es sind. Das hier ist das Kleingedruckte —
                das wir groß schreiben.
              </p>

              <ol className="space-y-5">
                {[
                  {
                    n: "01",
                    head: "Transparenz & Offenheit",
                    body: "Direkte Kommunikation ist keine Unhöflichkeit. Wir nennen Dinge beim Namen — und erwarten das auch von dir.",
                  },
                  {
                    n: "02",
                    head: "Safe Space & Wachstum",
                    body: "Was in der Gruppe besprochen wird, bleibt in der Gruppe. Wir schaffen Raum für ehrliches Wachstum.",
                  },
                  {
                    n: "03",
                    head: "Unterstützung & Fairness",
                    body: "Wir investieren alle. Wer anderen hilft, wenn sie stocken, bekommt dasselbe Privileg zurück.",
                  },
                ].map((p) => (
                  <li
                    key={p.n}
                    className="flex gap-5 border-l-2 border-brand-400/40 pl-5 py-1"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-brand-300 tabular-nums pt-1.5"
                    >
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-white leading-snug">
                        {p.head}
                      </h3>
                      <p className="mt-1 text-sm text-white/85 leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            {/* VII — Teilnahmebedingungen */}
            <article id="abschnitt-vii" className={sectionClass}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                Abschnitt VII
              </p>
              <h2 className="font-display text-2xl text-white mb-6">
                Teilnahmebedingungen
              </h2>

              <ol className="space-y-6">
                {[
                  {
                    n: 1,
                    head: "Geltungsbereich",
                    body: `Gilt für alle Workshops und Events der ${BRAND.legal.legalName} (Schweiz), unabhängig ob in der Schweiz, in einem anderen Land oder online. Nur für gewerblich oder freiberuflich tätige Unternehmer (vgl. bspw. § 14 BGB / Art. 934 OR). Verbraucher sind von unseren Angeboten ausgeschlossen.`,
                  },
                  {
                    n: 2,
                    head: "Anmeldung & Teilnahme",
                    body: "Verbindliche Anmeldung und vollständige Zahlung mindestens 10 Werktage vor dem Event. Vergabe nach Zahlungseingang. Der Platz ist persönlich und nicht übertragbar. Anreise, Übernachtung und Verpflegung sind selbst zu tragen.",
                  },
                  {
                    n: 3,
                    head: "Verhalten & Ausschluss",
                    body: `Respektvoller, professioneller Umgang ist Pflicht. Bei groben Verstößen (Störung, unlautere Werbung, unbefugte Aufnahmen) kann die ${BRAND.legal.legalName} ohne Erstattung ausschließen.`,
                  },
                  {
                    n: 4,
                    head: "Stornierung & Umbuchung",
                    body: "Stornierung nach Anmeldung ist ausgeschlossen. Eine einmalige Umbuchung auf einen Folgetermin (innerhalb von 6 Monaten) ist bis 30 Tage vor dem Event möglich — Umbuchungsgebühr: 100 CHF / 110 EUR. Bei Nichterscheinen verfällt die Gebühr.",
                  },
                  {
                    n: 5,
                    head: "Änderungen durch Veranstalter",
                    body: "Inhalte, Referenten und Ablauf können angepasst werden. Bei Absage erfolgt eine Übertragung auf einen Folgetermin. Reise- oder Hotelkosten werden nicht erstattet.",
                  },
                  {
                    n: 6,
                    head: "Urheberrecht & Vertraulichkeit",
                    body: "Alle Unterlagen, Präsentationen und Inhalte sind urheberrechtlich geschützt. Mitschnitte, Weitergabe oder Vervielfältigung ohne schriftliche Zustimmung sind untersagt.",
                  },
                  {
                    n: 7,
                    head: "Haftungsausschluss",
                    body: `Die Teilnahme erfolgt auf eigenes Risiko. Die Haftung der ${BRAND.legal.legalName} ist — soweit gesetzlich zulässig — auf Vorsatz und grobe Fahrlässigkeit beschränkt. Es bestehen keine Umsatz- oder Gewinnzusagen.`,
                  },
                  {
                    n: 8,
                    head: "Datenschutz & Aufnahmen",
                    body: "Mit der Teilnahme wird zugestimmt, dass Foto-, Audio- und Videoaufnahmen zu Marketingzwecken genutzt werden dürfen. Datenschutzbestimmungen sind stets online abrufbar.",
                  },
                  {
                    n: 9,
                    head: "Gerichtsstand & Recht",
                    body: "Es wird ausschließlich Schweizer Recht vereinbart, ohne UN-Kaufrecht. Erfüllungsort bleibt die Schweiz — auch für Events im Ausland.",
                  },
                ].map((c) => (
                  <li
                    key={c.n}
                    className="grid grid-cols-[36px_1fr] sm:grid-cols-[48px_1fr] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-brand-400/40 bg-brand-500/10 font-mono text-xs text-brand-300 tabular-nums"
                    >
                      {c.n}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-white leading-snug">
                        {c.head}
                      </h3>
                      <p className="mt-2 text-sm text-white/85 leading-relaxed">
                        {c.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <p className="text-xs text-white/65 leading-relaxed pt-4">
              Stand: {new Date().toLocaleDateString("de-CH", { year: "numeric", month: "long" })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
