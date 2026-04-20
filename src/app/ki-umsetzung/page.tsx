import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Download, Users, Clock, TrendingUp, Target, Zap, FileText } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "KI-Umsetzungsbefähigung für Mittelstand – schneller, strukturierter, unabhängig",
  description:
    "5-stufige Angebotsarchitektur: KI-gestützte Umsetzung für Marketing, Vertrieb, Produkt und Prozesse. BAFA-förderfähig, 1:1-Beratung, Praxiswerkstätten, Umsetzungsbegleitung. Weniger Agenturabhängigkeit, mehr interne Schlagkraft.",
  path: "/ki-umsetzung",
});

const nutzenAchsen = [
  { icon: Clock, title: "Umsetzungsgeschwindigkeit", desc: "Idee → Ergebnis in Tagen, nicht Monaten" },
  { icon: TrendingUp, title: "Weniger Reibung", desc: "Weniger Meetings, weniger Revisionsschleifen, weniger Abstraktion" },
  { icon: Target, title: "Weniger Abhängigkeit", desc: "Weniger Agenturen, weniger Dienstleisterketten, mehr Kontrolle" },
  { icon: Zap, title: "Schnellere Iteration", desc: "Klarere Anforderungen, weniger Fehlentwicklungen" },
  { icon: Users, title: "Mehr interne Schlagkraft", desc: "Kleineres Team, größerer Output" },
  { icon: FileText, title: "Mehr Struktur", desc: "Customer Journeys, Seiten und Prozesse systematisch vorbereitet" },
];

const stufen = [
  {
    nr: "0",
    name: "KI-Umsetzungsreport",
    subtitle: "Leadmagnet – kostenfrei",
    nutzen: "Erste Orientierung: Welche KI-Hebel wirken im eigenen Haus?",
    inhalte: [
      "Warum KI jetzt Chefsache ist",
      "Die vier Hebel für Marketing, Vertrieb, Produkt, Prozesse",
      "10 konkrete Anwendungsfälle mit Aufwands-/Nutzenverhältnis",
      "Typische Stolpersteine erkennen",
      "Voraussetzungen für belastbaren Einstieg",
      "Selbstcheck: 12 Fragen zur KI-Umsetzungsreife",
    ],
    cta: "Report herunterladen",
    color: "cream",
  },
  {
    nr: "1",
    name: "Geförderte KI-Umsetzungsberatung",
    subtitle: "1:1 Beratung – BAFA-förderfähig",
    nutzen: "Individueller, priorisierter KI-Umsetzungsplan für Ihr Unternehmen",
    inhalte: [
      "Bestandsaufnahme über Marketing, Vertrieb, Kunden, Produkt, Prozesse",
      "Identifikation der größten Hebel",
      "Priorisierung wirtschaftlich sinnvoller Anwendungsfälle",
      "Skizzierung 90-Tage-Umsetzungsplan",
      "Entscheidungsgrundlage für Budget, Team, Reihenfolge",
    ],
    ergebnis: "Schriftlicher, priorisierter KI-Umsetzungsplan mit konkreten nächsten Schritten",
    investition: "3.500 € (förderfähig)",
    cta: "Beratung anfragen",
    color: "elevated",
  },
  {
    nr: "2",
    name: "KI-Praxiswerkstätten",
    subtitle: "Offene Gruppenformate – thematisch",
    nutzen: "Anwendungsroutine mit anderen Unternehmen aufbauen",
    inhalte: [
      "Dienstag: Marketing (Landingpages, Angebotsseiten, CRM)",
      "Freitag: Produkt & Design (digitale Lösungen, Web-Apps)",
      "Live-Arbeit an echten Anwendungsfällen",
      "Dokumentierte Arbeitsmuster für eigene Projekta",
      "Kleine, arbeitsfähige Runden",
    ],
    ergebnis: "Wiederkehrende Anwendungsroutine, sichtbarer Output aus jeder Sitzung",
    investition: "Einzelticket, Monatspass oder Jahresabo",
    cta: "Werkstattkalender ansehen",
    color: "elevated",
  },
  {
    nr: "3",
    name: "KI-Umsetzungsbegleitung im Abo",
    subtitle: "1:1 kontinuierliche Begleitung",
    nutzen: "Ihr individueller Sparringspartner für reale Umsetzungsfälle",
    inhalte: [
      "CRM-Prozesse, Kundenbindung, Nachfassstrecken",
      "Landingpages, Angebotsseiten, Produktseiten",
      "Kundenreise, Onboarding, digitale Strukturen",
      "Interne Abläufe, Vorlagensysteme",
      "Anforderungsklärung ohne Agentur",
    ],
    ergebnis: "Spürbar kürzere Durchlaufzeiten, weniger Revisionschleifen, dokumentierte Muster",
    investition: "Monatliches Abo (monatlich kündbar)",
    cta: "Begleitung starten",
    color: "elevated",
  },
  {
    nr: "4",
    name: "Firmeninterne KI-Praxisbegleitung",
    subtitle: "Wöchentliche interne Befähigung",
    nutzen: "KI-Kompetenz nachhaltig in Ihren Teams verankern",
    inhalte: [
      "Fester Wochentermin pro Unternehmen (≈ 2 Std.)",
      "Bereichsspezifische Use Cases",
      "Arbeit an echten Vorgängen statt Trainingsbeispielen",
      "Dokumentierte Muster und interne Playbooks",
      "Methodischer Rahmen: Inka KI in QA",
    ],
    ergebnis: "Teams, die eigenständig mit KI arbeiten. Messbar mehr Output. Weniger Agenturabhängigkeit.",
    investition: "Firmenvertrag (wöchentlich)",
    cta: "Modell besprechen",
    color: "elevated",
  },
];

const anwendungsfelder = [
  "Homepage & Landingpages",
  "Angebotsseiten & Sales Copy",
  "Customer Journey Mapping",
  "CRM-Prozesse & Automation",
  "Kundenbindung & Kampagnen",
  "Marketing & Content",
  "Vertriebsprozesse",
  "Produktdesign & -seiten",
  "Digitale Leistungen & Apps",
  "Interne Prozesse",
  "Anforderungsklärung",
  "Und mehr…",
];

const abgrenzung = [
  {
    aspekt: "Worum geht es",
    alt: "Tool-Schulung (Claude, Figma, Notion, etc.)",
    neu: "Umsetzung geschäftlicher Anforderungen",
  },
  {
    aspekt: "Wer setzt um",
    alt: "Externe Agentur",
    neu: "Ihre Teams mit externer Begleitung",
  },
  {
    aspekt: "Ergebnis",
    alt: "Einzelleistung, Abhängigkeit",
    neu: "Know-how im Haus, Unabhängigkeit",
  },
  {
    aspekt: "Ablauf",
    alt: "Briefing → Agentur → viele Revisionschleifen",
    neu: "Anforderung klären → schnell testen → iterieren",
  },
  {
    aspekt: "Dauer",
    alt: "Wochen bis Monate",
    neu: "Tage bis Wochen",
  },
];

const faqs = [
  {
    frage: "Passt das auch zu unserem Unternehmen?",
    antwort:
      "Ja — sofern Ihre Herausforderung ist: Ideen schneller umzusetzen, weniger Agenturketten zu nutzen, oder interne Kompetenz aufzubauen. Die Größe spielt keine große Rolle; wichtig ist die Bereitschaft, anders zu arbeiten.",
  },
  {
    frage: "Ist das ein Kurs oder eine Schulung?",
    antwort:
      "Nein. Es ist Umsetzungsbegleitung an Ihren realen Geschäftsfällen. Theoretische Module gibt es nicht — nur praxisnahe Arbeit.",
  },
  {
    frage: "Können Sie die Umsetzung auch für uns übernehmen?",
    antwort:
      "Nein — das ist nicht unser Modell. Wir befähigen Sie, selbst schneller und strukturierter zu werden. Für spezialisierte Agenturleistungen arbeiten wir mit Partnern zusammen.",
  },
  {
    frage: "Was unterscheidet Sie von Tool-Trainings?",
    antwort:
      "Tool-Trainings zeigen, wie Claude, Figma oder GitHub funktioniert. Wir zeigen, wie Sie mit diesen Tools geschäftliche Ergebnisse schneller erreichen — strukturiert, methodisch, ohne Einzelkämpfer-KI.",
  },
  {
    frage: "Ist Stufe 1 wirklich BAFA-förderfähig?",
    antwort:
      "Ja — wenn Sie die grundlegenden Voraussetzungen erfüllen (Unternehmen mit Sitz in Deutschland, bestimmte Mitarbeiterzahl). Wir klären das in einem kostenlosen Erstgespräch.",
  },
  {
    frage: "Welche Stufe sollen wir wählen?",
    antwort:
      "Das hängt von Ihrem Reifegrad ab: Stufe 0 kostet nichts und gibt Orientierung. Stufe 1 ist für strategische Klarheit. Stufe 2–4 für kontinuierliche Umsetzung.",
  },
];

const targetAudiences = [
  {
    wer: "Marketing-Leiter",
    herausforderung: "Zu viele Manuelle Prozesse, zu lange Durchlaufzeiten",
  },
  {
    wer: "Geschäftsführung",
    herausforderung: "Agenturkosten, wenig Kontrolle über Umsetzung",
  },
  {
    wer: "Produktmanager",
    herausforderung: "Anforderungen sind unklar, Entwicklung dauert zu lange",
  },
  {
    wer: "Vertriebsleitung",
    herausforderung: "Manuelle Vorbereitungen, wenig Skalierung",
  },
  {
    wer: "CRM-Manager",
    herausforderung: "Prozesse sind Flickwerk, keine Struktur",
  },
  {
    wer: "Kleine Teams",
    herausforderung: "Zu viel zu tun, zu wenig Ressourcen, zu viel Reibung",
  },
];

export default function KiUmsetzungPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Unternehmen", href: "/unternehmen" },
          { name: "KI-Umsetzungsbefähigung", href: "/ki-umsetzung" },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "KI-Umsetzungsbefähigung",
          description:
            "5-stufige Angebotsarchitektur für schnellere, strukturiertere KI-gestützte Umsetzung in Marketing, Vertrieb, Produkt und Prozessen.",
          provider: {
            "@type": "EducationalOrganization",
            name: "WissensReich Academy",
            url: SITE_URL,
          },
          areaServed: { "@type": "Country", name: "Deutschland" },
          serviceType: "Business Transformation & Training",
        }}
      />

      <Section aria-labelledby="ki-title" className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="brand" className="mb-4">
            Umsetzung statt Tool-Training
          </Badge>
          <h1
            id="ki-title"
            className="font-display text-display-lg text-ink-900"
          >
            Aus Idee wird Ergebnis – in Tagen, nicht Monaten
          </h1>
          <p className="mt-6 text-lead text-ink-500">
            5-stufige Befähigung für schnellere, strukturiertere KI-gestützte Umsetzung. Weniger Agenturabhängigkeit. Mehr interne Schlagkraft. Förderfähiger Einstieg.
          </p>

          <ul className="mx-auto mt-8 max-w-2xl space-y-3 text-left">
            {[
              "Ideen werden sauber strukturiert statt zu Chaos zu führen",
              "Marketing, Vertrieb, CRM und Prozesse schneller umgesetzt",
              "Kleine Teams werden schlagkräftiger ohne Zusatzpersonal",
              "Interne Kompetenz bleibt – nicht bei der Agentur",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                <span className="text-[15px] font-medium text-ink-900">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/#kontakt" variant="primary" size="lg" showArrow>
              Kostenlosen Report anfordern
            </Button>
            <Button href="/#kontakt" variant="secondary" size="lg">
              Förderfähigkeit prüfen
            </Button>
          </div>
        </div>
      </Section>

      <Section
        id="nutzen"
        tone="cream"
        aria-labelledby="nutzen-title"
      >
        <SectionHeader
          titleId="nutzen-title"
          title="Sechs Nutzenachsen – was sich konkret ändert"
          intro="Das Versprechen ist konsistent: Weniger Reibung, schnellere Umsetzung, weniger Abhängigkeit, echte interne Schlagkraft."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nutzenAchsen.map((achse) => {
            const Icon = achse.icon;
            return (
              <Card key={achse.title} variant="outline" className="p-6">
                <Icon className="h-8 w-8 text-brand-600" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-ink-900">{achse.title}</h3>
                <p className="mt-2 text-[15px] text-ink-500">{achse.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section id="stufen" aria-labelledby="stufen-title">
        <SectionHeader
          titleId="stufen-title"
          title="Die 5-stufige Angebotsarchitektur"
          intro="Jede Stufe ist eigenständig, aber zusammen bilden sie ein System. Wählen Sie Ihren Einstiegspunkt."
          align="center"
        />
        <div className="mt-12 space-y-6">
          {stufen.map((stufe) => (
            <Card
              key={stufe.nr}
              variant="elevated"
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-brand-50 text-center">
                    <span className="font-display text-2xl font-bold text-brand-700">
                      {stufe.nr}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-display-sm text-ink-900">
                    {stufe.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-600">
                    {stufe.subtitle}
                  </p>
                  <p className="mt-3 text-[15px] font-medium text-ink-900">
                    {stufe.nutzen}
                  </p>

                  <ul className="mt-4 space-y-2 text-[14px] text-ink-600">
                    {stufe.inhalte.map((inhalt) => (
                      <li key={inhalt} className="flex items-start gap-2">
                        <span className="mt-1 h-1 w-1 flex-none rounded-full bg-brand-400" aria-hidden="true" />
                        {inhalt}
                      </li>
                    ))}
                  </ul>

                  {stufe.ergebnis && (
                    <p className="mt-4 text-[15px] font-medium text-ink-900">
                      <strong>Ergebnis:</strong> {stufe.ergebnis}
                    </p>
                  )}

                  {stufe.investition && (
                    <p className="mt-2 text-sm text-ink-500">
                      <strong>Investition:</strong> {stufe.investition}
                    </p>
                  )}

                  <div className="mt-6">
                    <Button
                      href="/#kontakt"
                      variant="ghost"
                      showArrow
                    >
                      {stufe.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="brand-soft" id="felder" aria-labelledby="felder-title">
        <SectionHeader
          titleId="felder-title"
          title="Wo KI wirkt – die Anwendungsfelder"
          intro="Diese Disziplinen durchziehen alle Stufen — vom Leadmagnet bis zur internen Befähigung."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {anwendungsfelder.map((feld) => (
            <div
              key={feld}
              className="rounded-xl border border-brand-100 bg-white px-4 py-3 text-center"
            >
              <p className="text-[14px] font-medium text-ink-900">{feld}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="abgrenzung" aria-labelledby="abgrenzung-title">
        <SectionHeader
          titleId="abgrenzung-title"
          title="Kein klassisches Agenturmodell"
          intro="Das Unterschied liegt nicht in den Tools, sondern in der Arbeitsweise."
          align="center"
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px] sm:text-[15px]">
            <thead>
              <tr className="border-b border-line">
                <th className="py-4 pr-4 font-semibold text-ink-900">Aspekt</th>
                <th className="py-4 px-4 font-semibold text-ink-900">
                  Klassisches Agentur-Modell (Alt)
                </th>
                <th className="py-4 pl-4 font-semibold text-brand-700">
                  KI-Befähigung (Neu)
                </th>
              </tr>
            </thead>
            <tbody>
              {abgrenzung.map((row) => (
                <tr key={row.aspekt} className="border-b border-line last:border-b-0">
                  <td className="py-4 pr-4 font-medium text-ink-900">
                    {row.aspekt}
                  </td>
                  <td className="py-4 px-4 text-ink-600">{row.alt}</td>
                  <td className="py-4 pl-4 text-brand-700 font-medium">
                    {row.neu}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="cream" id="fuer-wen" aria-labelledby="fuer-wen-title">
        <SectionHeader
          titleId="fuer-wen-title"
          title="Für wen ist das relevant?"
          intro="Diese Rollen und Herausforderungen kennen wir besonders gut."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {targetAudiences.map((aud) => (
            <Card key={aud.wer} variant="elevated">
              <h3 className="font-semibold text-ink-900">{aud.wer}</h3>
              <p className="mt-3 text-[15px] text-ink-600">
                <strong>Herausforderung:</strong> {aud.herausforderung}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="faq" aria-labelledby="faq-title">
        <SectionHeader
          titleId="faq-title"
          title="Häufig gestellte Fragen"
          align="center"
        />
        <div className="mt-12 mx-auto max-w-3xl space-y-6">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-line bg-white p-6 hover:border-brand-200 transition-colors"
            >
              <summary className="cursor-pointer font-semibold text-ink-900 flex items-start gap-3">
                <span className="flex-1">{faq.frage}</span>
                <span
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </summary>
              <p className="mt-4 text-[15px] text-ink-600 leading-relaxed">
                {faq.antwort}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="ink" aria-labelledby="abschluss-title">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2
            id="abschluss-title"
            className="font-display text-display-md text-white"
          >
            Bereit für schnellere Umsetzung?
          </h2>
          <p className="mt-4 text-lead text-white/80">
            Starten Sie mit dem kostenlosen KI-Umsetzungsreport – oder prüfen Sie direkt Ihre Förderfähigkeit für Stufe 1.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/#kontakt" variant="primary" size="lg" showArrow>
              Termin vereinbaren
            </Button>
            <Button href="/#kontakt" variant="secondary" size="lg">
              Fragen stellen
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
