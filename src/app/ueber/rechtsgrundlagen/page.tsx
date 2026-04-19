import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  ExternalLink,
  Gavel,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { SiegelBar } from "@/components/ui/SiegelBar";

export const metadata: Metadata = buildMetadata({
  title: "Rechtsgrundlagen — Gesetze & Richtlinien unserer Arbeit",
  description:
    "Alle relevanten Gesetze, Verordnungen und Richtlinien, auf denen die geförderte Weiterbildung der WissensReich Academy basiert: SGB III, AZAV, RDG/RDV, ESF/KOMPASS, AEVO, DSGVO und weitere — verständlich erklärt und verlinkt.",
  path: "/ueber/rechtsgrundlagen",
});

type Rechtsquelle = {
  kuerzel: string;
  titel: string;
  beschreibung: string;
  bezug: string;
  url: string;
  quelle: string;
};

const gruppen: ReadonlyArray<{
  id: string;
  icon: typeof Gavel;
  kicker: string;
  title: string;
  intro: string;
  items: ReadonlyArray<Rechtsquelle>;
}> = [
  {
    id: "foerderrecht",
    icon: Gavel,
    kicker: "Förderrecht & Arbeitsmarktpolitik",
    title: "Sozialgesetzbuch — Grundlagen geförderter Maßnahmen",
    intro:
      "Diese Paragraphen bilden das Fundament für AVGS, Bildungsgutschein, Qualifizierungschancengesetz und weitere arbeitsmarktpolitische Instrumente, mit denen wir tagtäglich arbeiten.",
    items: [
      {
        kuerzel: "§ 45 SGB III",
        titel: "Maßnahmen zur Aktivierung und beruflichen Eingliederung",
        beschreibung:
          "Rechtsgrundlage für den Aktivierungs- und Vermittlungsgutschein (AVGS). Sie ermöglicht arbeitssuchenden Menschen den vollständig finanzierten Zugang zu zugelassenen Maßnahmen — Grundlage unserer AVGS-Angebote.",
        bezug:
          "Unsere AVGS-Maßnahmen (z. B. Inkasso-Sachkunde, Businessplan-Werkstatt) werden auf dieser Basis durchgeführt.",
        url: "https://www.gesetze-im-internet.de/sgb_3/__45.html",
        quelle: "gesetze-im-internet.de",
      },
      {
        kuerzel: "AVGS / VGS",
        titel: "Aktivierungs- und Vermittlungsgutschein (§ 45 SGB III)",
        beschreibung:
          "Der AVGS — teils auch VGS (Vermittlungsgutschein) genannt — ist das konkrete Instrument, mit dem § 45 SGB III umgesetzt wird. Ausgegeben von der Agentur für Arbeit oder dem Jobcenter, berechtigt er zur Teilnahme an einer zugelassenen Maßnahme bei einem zertifizierten Träger.",
        bezug:
          "Unsere Inkasso-Sachkunde und Businessplan-Werkstatt werden ausschließlich über AVGS/VGS abgerechnet — vollständig finanziert, kein Eigenanteil.",
        url: "https://www.arbeitsagentur.de/arbeitslos-arbeit-finden/aktivierungs-vermittlungsgutschein",
        quelle: "arbeitsagentur.de",
      },
      {
        kuerzel: "§ 81 SGB III",
        titel: "Förderung der beruflichen Weiterbildung",
        beschreibung:
          "Rechtsgrundlage für den Bildungsgutschein. Regelt, unter welchen Bedingungen Arbeitsuchende und Beschäftigte einen Bildungsgutschein erhalten können.",
        bezug:
          "Wird ergänzend zum AVGS eingesetzt — wir beraten zu allen Förderwegen.",
        url: "https://www.gesetze-im-internet.de/sgb_3/__81.html",
        quelle: "gesetze-im-internet.de",
      },
      {
        kuerzel: "§ 82 SGB III",
        titel: "Förderung beschäftigter Arbeitnehmerinnen und Arbeitnehmer",
        beschreibung:
          "Kern des Qualifizierungschancengesetzes (QCG). Ermöglicht Unternehmen — unabhängig von Alter, Qualifikation und Betriebsgröße — Zuschüsse zu den Weiterbildungskosten und Lohnkosten ihrer Beschäftigten.",
        bezug:
          "Grundlage unserer Unternehmens-Angebote: bis zu 100 % Förderung je nach Betriebsgröße.",
        url: "https://www.gesetze-im-internet.de/sgb_3/__82.html",
        quelle: "gesetze-im-internet.de",
      },
      {
        kuerzel: "§ 83 SGB III",
        titel: "Leistungen zur beruflichen Weiterbildung",
        beschreibung:
          "Konkretisiert Lehrgangskosten, Fahrtkosten, Kinderbetreuungskosten und Unterhaltsleistungen, die im Rahmen geförderter Weiterbildung übernommen werden.",
        bezug:
          "Relevant für die saubere Kostenkalkulation und Abrechnung unserer Maßnahmen.",
        url: "https://www.gesetze-im-internet.de/sgb_3/__83.html",
        quelle: "gesetze-im-internet.de",
      },
    ],
  },
  {
    id: "traegerzulassung",
    icon: ShieldCheck,
    kicker: "Trägerzulassung & Qualitätssicherung",
    title: "AZAV, AVO & ISO — wie unsere Qualität nachweisbar wird",
    intro:
      "Wer staatlich geförderte Weiterbildung anbieten will, muss seine Eignung dauerhaft nachweisen. Diese Verordnungen und Normen regeln das — und werden bei uns regelmäßig durch unabhängige Stellen geprüft.",
    items: [
      {
        kuerzel: "AZAV",
        titel: "Akkreditierungs- und Zulassungsverordnung Arbeitsförderung",
        beschreibung:
          "Verbindliche Anforderungen für die Zulassung von Bildungsträgern und Maßnahmen nach § 176 ff. SGB III. Regelt Qualitätsmanagement, Personalqualifikation, Lernerfolgskontrollen und Nachhaltigkeit.",
        bezug:
          "WissensReich Academy ist AZAV-zertifiziert und wird laufend kontrolliert — keine einmalige Prüfung, sondern fortlaufende Qualitätssicherung.",
        url: "https://www.gesetze-im-internet.de/azav/",
        quelle: "gesetze-im-internet.de",
      },
      {
        kuerzel: "§ 176 ff. SGB III",
        titel: "Zulassung von Trägern und Maßnahmen",
        beschreibung:
          "Bestimmt, wer Maßnahmen der Arbeitsförderung erbringen darf. Verlangt eine fachkundige Stelle (z. B. CERTQUA), ein Qualitätssicherungssystem und kontinuierliche Verbesserung.",
        bezug:
          "Unsere Trägerzulassung wird durch CERTQUA — eine der führenden Zertifizierungsstellen — bestätigt.",
        url: "https://www.gesetze-im-internet.de/sgb_3/__176.html",
        quelle: "gesetze-im-internet.de",
      },
      {
        kuerzel: "DIN EN ISO 9001",
        titel: "Qualitätsmanagementsysteme — Anforderungen",
        beschreibung:
          "International anerkannte Norm für ein dokumentiertes, prozessorientiertes Qualitätsmanagement. Ergänzt die AZAV-Zulassung um eine breitere, branchenübergreifende Qualitätsbasis.",
        bezug:
          "Unsere Prozesse sind nach DIN EN ISO 9001 zertifiziert — Strukturen, Rollen und Verbesserungsschleifen sind dokumentiert.",
        url: "https://www.iso.org/iso-9001-quality-management.html",
        quelle: "iso.org",
      },
    ],
  },
  {
    id: "berufsrecht",
    icon: BookOpenCheck,
    kicker: "Berufs- & Sachkunderecht",
    title: "Rechtsdienstleistungsgesetz, Verordnung & Ausbildereignung",
    intro:
      "Manche unserer Inhalte qualifizieren für regulierte Tätigkeiten oder werden von prüfenden Stellen anerkannt. Diese Vorgaben definieren den Rahmen.",
    items: [
      {
        kuerzel: "RDG",
        titel: "Rechtsdienstleistungsgesetz",
        beschreibung:
          "Regelt, unter welchen Voraussetzungen außergerichtliche Rechtsdienstleistungen — z. B. Inkasso — erbracht werden dürfen. Legt die Notwendigkeit eines Sachkundenachweises fest.",
        bezug:
          "Grundlage unseres Sachkunde-Lehrgangs Inkasso (§ 11 RDG i. V. m. RDV § 4).",
        url: "https://www.gesetze-im-internet.de/rdg/",
        quelle: "gesetze-im-internet.de",
      },
      {
        kuerzel: "RDV § 4",
        titel: "Rechtsdienstleistungsverordnung — Sachkundelehrgang",
        beschreibung:
          "Definiert Mindestumfang (zeitlich und inhaltlich) eines Sachkundelehrgangs für Inkassodienstleistungen, einschließlich Bürgerliches Recht, Handels-, Wertpapier-, Gesellschafts-, Zivilprozess-, Zwangsvollstreckungs-, Insolvenz- und Kostenrecht.",
        bezug:
          "Unser Inkasso-Sachkunde-Lehrgang erfüllt den vorgeschriebenen Mindestumfang nachweislich.",
        url: "https://www.gesetze-im-internet.de/rdv/__4.html",
        quelle: "gesetze-im-internet.de",
      },
      {
        kuerzel: "AEVO",
        titel: "Ausbilder-Eignungsverordnung",
        beschreibung:
          "Regelt die berufs- und arbeitspädagogische Eignung von Ausbilderinnen und Ausbildern in anerkannten Ausbildungsberufen. Prüfung erfolgt durch die zuständige IHK.",
        bezug:
          "WissensReich Academy ist anerkannter Ausbildungsbetrieb (Bürokaufleute, Anwendungsentwickler) — unsere Ausbildereignung nach AEVO ist geprüft.",
        url: "https://www.gesetze-im-internet.de/ausbeignv_2009/",
        quelle: "gesetze-im-internet.de",
      },
    ],
  },
  {
    id: "foerderprogramme",
    icon: Sparkles,
    kicker: "Förderprogramme & Richtlinien",
    title: "ESF Plus, KOMPASS und INQA — Programme im Detail",
    intro:
      "Programme stehen oder fallen mit ihren Förderrichtlinien. Wir lesen sie, damit Sie es nicht müssen — und bereiten Anträge passgenau vor.",
    items: [
      {
        kuerzel: "ESF Plus",
        titel: "Europäischer Sozialfonds Plus (Förderperiode 2021–2027)",
        beschreibung:
          "Finanziert europaweit Investitionen in Beschäftigung, Bildung und soziale Inklusion. In Deutschland werden daraus u. a. KOMPASS und zahlreiche weitere Programme gespeist.",
        bezug:
          "Übergeordneter Rahmen für die KOMPASS-Förderung, die wir für Solopreneure begleiten.",
        url: "https://www.esf.de/portal/DE/Foerderperiode-2021-2027/inhalt.html",
        quelle: "esf.de",
      },
      {
        kuerzel: "KOMPASS",
        titel: "Förderrichtlinie KOMPASS — Kompetenzentwicklung Solo-Selbstständiger",
        beschreibung:
          "Bietet Solo-Selbstständigen mit max. einem Vollzeit­äquivalent bis zu 90 % Zuschuss auf Weiterbildungskosten. Antragsstellung über regionale Anlaufstellen mit verpflichtender Bildungsbedarfsanalyse.",
        bezug:
          "Kernförderweg für unsere Solopreneure-Angebote.",
        url: "https://www.bmas.de/DE/Soziales/Sozialversicherung/Sozialversicherungswahlen/foerderprogramm-kompass.html",
        quelle: "bmas.de",
      },
      {
        kuerzel: "INQA-Coaching",
        titel: "Initiative Neue Qualität der Arbeit — Coaching für KMU",
        beschreibung:
          "Bis zu 80 % geförderte Beratung für kleine und mittlere Unternehmen zur Gestaltung der digitalen Transformation und einer mitarbeiterorientierten Arbeitswelt. Gefördert vom Bundesministerium für Arbeit und Soziales (BMAS).",
        bezug:
          "Wir begleiten KMU als autorisierter Partner durch das INQA-Coaching-Verfahren.",
        url: "https://www.inqa.de/DE/beratung-zertifizierung/inqa-coaching/uebersicht.html",
        quelle: "inqa.de",
      },
      {
        kuerzel: "BAFA-Unternehmensberatung",
        titel: "Förderung unternehmerischen Know-hows (BAFA)",
        beschreibung:
          "Bundesprogramm des Bundesamts für Wirtschaft und Ausfuhrkontrolle (BAFA) zur bezuschussten Inanspruchnahme qualifizierter Unternehmensberatung. Richtet sich an KMU, Jungunternehmen und Unternehmen in Schwierigkeiten.",
        bezug:
          "Wir sind gelistetes Beratungsunternehmen beim BAFA und begleiten KMU bei Vor-Ort-Beratung zu Wirtschaftlichkeit, Organisation und Strategie.",
        url: "https://www.bafa.de/DE/Wirtschaft/Beratung/Unternehmensberatung/unternehmensberatung_node.html",
        quelle: "bafa.de",
      },
    ],
  },
  {
    id: "datenschutz",
    icon: ShieldCheck,
    kicker: "Datenschutz & Verbraucherrecht",
    title: "DSGVO, BDSG und Fernunterrichtsschutzgesetz",
    intro:
      "Wer mit personenbezogenen Daten und Bildungsverträgen arbeitet, trägt Verantwortung. Diese Regelwerke setzen den Rahmen für unseren Umgang mit Teilnehmerdaten und Vertragsbedingungen.",
    items: [
      {
        kuerzel: "DSGVO",
        titel: "EU-Datenschutz-Grundverordnung",
        beschreibung:
          "Verbindlicher europäischer Rahmen für die Verarbeitung personenbezogener Daten. Verlangt Rechtsgrundlage, Zweckbindung, Datenminimierung, Auskunfts- und Löschrechte.",
        bezug:
          "Maßgeblich für unsere Datenschutzerklärung, Auftragsverarbeitungsverträge und alle Lernplattform-Prozesse.",
        url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679",
        quelle: "eur-lex.europa.eu",
      },
      {
        kuerzel: "BDSG",
        titel: "Bundesdatenschutzgesetz",
        beschreibung:
          "Ergänzt die DSGVO um nationale Regelungen, etwa zur Bestellung von Datenschutzbeauftragten und zum Beschäftigtendatenschutz.",
        bezug:
          "Anwendbar auf unsere internen Prozesse und unser Mitarbeiterverhältnis.",
        url: "https://www.gesetze-im-internet.de/bdsg_2018/",
        quelle: "gesetze-im-internet.de",
      },
      {
        kuerzel: "FernUSG",
        titel: "Fernunterrichtsschutzgesetz",
        beschreibung:
          "Schützt Verbraucher:innen bei Fernlehrgängen — verlangt Zulassung der Lehrgänge, klare Vertragsbedingungen und definiert Widerrufs- und Kündigungsrechte.",
        bezug:
          "Maßgeblich für jene unserer Formate, die als Fernunterricht im Sinne des Gesetzes einzuordnen sind.",
        url: "https://www.gesetze-im-internet.de/fernusg/",
        quelle: "gesetze-im-internet.de",
      },
    ],
  },
];

export default function RechtsgrundlagenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Über WissensReich", href: "/ueber" },
          { name: "Rechtsgrundlagen", href: "/ueber/rechtsgrundlagen" },
        ]}
      />

      {/* Hero */}
      <Section aria-labelledby="rg-title">
        <SectionHeader
          as="h1"
          eyebrow="Rechtsgrundlagen unserer Arbeit"
          titleId="rg-title"
          title="Transparenz beginnt bei den Quellen"
          intro="Geförderte Weiterbildung ist kein Versprechen — sie ist ein gesetzlich definiertes Verfahren. Hier finden Sie alle Gesetze, Verordnungen und Richtlinien, auf denen unsere Arbeit basiert. Verlinkt zu den Originalquellen, knapp erklärt und mit unserem konkreten Bezug versehen."
        />
      </Section>

      {/* Zertifizierungs-Siegel */}
      <Section aria-label="Zertifizierungen & Trägerzulassung">
        <SiegelBar
          title="Unsere formalen Grundlagen auf einen Blick"
          withLabels
          withNotes
        />
      </Section>

      {/* Inhaltsverzeichnis */}
      <Section tone="cream" aria-labelledby="rg-toc">
        <h2 id="rg-toc" className="font-display text-display-md text-ink-900">
          Übersicht
        </h2>
        <p className="mt-4 max-w-prose text-[15px] text-ink-500">
          Wir gliedern die Rechtsgrundlagen in fünf thematische Bereiche.
          Klicken Sie sich direkt zur jeweiligen Sektion.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gruppen.map((g) => {
            const Icon = g.icon;
            return (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                      {g.kicker}
                    </span>
                    <span className="mt-1 block font-sans text-[15px] font-semibold text-ink-900">
                      {g.title}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Gruppen */}
      {gruppen.map((g, idx) => {
        const Icon = g.icon;
        return (
          <Section
            key={g.id}
            id={g.id}
            tone={idx % 2 === 0 ? "white" : "cream"}
            aria-labelledby={`${g.id}-title`}
          >
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
              >
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                  {g.kicker}
                </p>
                <h2
                  id={`${g.id}-title`}
                  className="mt-1 font-display text-display-md text-ink-900"
                >
                  {g.title}
                </h2>
              </div>
            </div>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-500">
              {g.intro}
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {g.items.map((item) => (
                <Card
                  key={item.kuerzel}
                  variant="elevated"
                  className="flex flex-col"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                    {item.kuerzel}
                  </p>
                  <h3 className="mt-2 font-sans text-base font-semibold text-ink-900">
                    {item.titel}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                    {item.beschreibung}
                  </p>
                  <p className="mt-3 rounded-lg bg-cream-100 px-3 py-2 text-[13px] leading-relaxed text-ink-700">
                    <span className="font-semibold text-ink-900">
                      Unser Bezug:
                    </span>{" "}
                    {item.bezug}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 self-start rounded text-sm font-medium text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                    aria-label={`${item.kuerzel} bei ${item.quelle} öffnen (externer Link)`}
                  >
                    Originalquelle ({item.quelle})
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </Card>
              ))}
            </div>
          </Section>
        );
      })}

      {/* Hinweis */}
      <Section aria-labelledby="rg-hinweis">
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-8">
          <h2
            id="rg-hinweis"
            className="font-sans text-lg font-semibold text-ink-900"
          >
            Hinweis zur Aktualität
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
            Gesetze, Verordnungen und Förderrichtlinien werden regelmäßig
            angepasst. Wir prüfen diese Übersicht laufend — die jeweils
            verbindliche Fassung finden Sie immer in der verlinkten
            Originalquelle. Bei konkreten Fragen zu Ihrem Förderfall sprechen
            Sie uns gerne an: Unser Concierge-Service kennt die aktuelle
            Praxis.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
            Diese Seite ersetzt keine Rechtsberatung. Sie dokumentiert die
            Rechtsgrundlagen, auf denen die WissensReich Academy ihre
            Maßnahmen konzipiert, durchführt und abrechnet.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink" aria-labelledby="rg-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="rg-cta" className="font-display text-display-md text-white">
            Fragen zur Anwendung im konkreten Fall?
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Unser Concierge-Service übersetzt die Paragraphen in einen klaren
            Weg für Ihre Situation — ohne Jurastudium nötig.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              Beratung anfragen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/concierge-service"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              Mehr zum Concierge-Service
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
