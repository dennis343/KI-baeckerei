import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Solopreneure — Bis zu 90 % geförderte Weiterbildung (KOMPASS/ESF)",
  description:
    "KOMPASS-förderfähige Kurse in Marketing, KI, Rhetorik & Unternehmertum bei einem AZAV-zertifizierten Träger — mit einem Service, der den Aufwand minimiert und Anträge strukturiert begleitet.",
  path: "/solopreneure",
});

const heroFacts = [
  { label: "Förderquote", value: "bis 90 %" },
  { label: "Bewilligungsquote", value: "bis 90–95 %" },
  { label: "Eigenanteil", value: "ab 10 %" },
  { label: "Kurse verfügbar", value: "11+" },
];

const erfolge = [
  {
    zitat: "Der Antrag war in zwei Wochen durch. Ich hätte das allein nie so schnell hinbekommen.",
    kontext: "Solopreneur · Social Media Marketing-Masterclass",
  },
  {
    zitat: "90 % Förderung — und der Kurs hat mir direkt drei neue Kunden gebracht.",
    kontext: "Freiberuflerin · Personal Branding Camp",
  },
  {
    zitat: "Endlich verstehe ich KI-Tools so gut, dass sie mir tatsächlich Arbeit abnehmen.",
    kontext: "Selbstständiger Berater · Effizient arbeiten mit KI",
  },
];

const voraussetzungen = [
  "Sie sind selbstständig (Freiberufler, Gewerbetreibende, Solopreneure)",
  "Sie beschäftigen maximal eine Person in Vollzeit",
  "Ihr Unternehmenssitz liegt in Deutschland",
  "Die Weiterbildung hat einen klaren beruflichen Bezug",
];

const kurskategorien = [
  {
    titel: "Marketing & Sales",
    kurse: "Social Media Masterclass, Faszination Verkauf, Personal Branding, Kundenbindung, YouTube Ads, Guerilla-Marketing",
    anzahl: "6 Kurse",
  },
  {
    titel: "KI & Automatisierung",
    kurse: "Effizient arbeiten mit KI, Automatisierungs- & KI-Kompass",
    anzahl: "2 Kurse",
  },
  {
    titel: "Kommunikation & Rhetorik",
    kurse: "Erfolgreich REDEN — Körpersprache, Stimme, Bühnenpräsenz",
    anzahl: "1 Kurs",
  },
  {
    titel: "Unternehmertum & Leadership",
    kurse: "Finanzielle Klarheit & Steuerstrategie, Solopreneur-Freiheits-Kompass",
    anzahl: "2 Kurse",
  },
];

const schritte = [
  {
    nr: "01",
    title: "Erstgespräch",
    body: "Wir klären Ihre Ausgangslage, prüfen die Förderfähigkeit und identifizieren den passenden Kurs.",
  },
  {
    nr: "02",
    title: "Persönliches 1:1-Gespräch",
    body: "Im persönlichen Gespräch klären wir gemeinsam, welches Angebot zu Ihrem Vorhaben passt, ob ein Antrag sinnvoll und förderfähig ist — und wie der konkrete Weg aussieht.",
  },
  {
    nr: "03",
    title: "Bewilligung",
    body: "Die zuständige Anlaufstelle prüft und bewilligt den Antrag.",
  },
  {
    nr: "04",
    title: "Kursstart",
    body: "Sie starten Ihren Kurs mit klarer Struktur, erfahrenen Dozenten und persönlicher Begleitung.",
  },
];

export default function SolopreneurePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Solopreneure", href: "/solopreneure" },
        ]}
      />

      {/* Hero */}
      <Section aria-labelledby="solo-title">
        <SectionHeader
          as="h1"
          eyebrow="Für Solopreneure"
          titleId="solo-title"
          title="Bis zu 90 % Förderung für Ihre Weiterbildung — und ein Service, der den Aufwand minimiert und Anträge strukturiert begleitet"
          intro="Sie tragen Verantwortung für Ihr Business. Ihre Zeit ist knapp. Genau dafür gibt es KOMPASS: staatliche Förderung, die Ihnen hochwertige Weiterbildung fast kostenfrei ermöglicht. Wir kümmern uns um den Rest."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {heroFacts.map((f) => (
            <div key={f.label} className="rounded-xl border border-line bg-white p-4 text-center">
              <p className="font-display text-xl font-semibold text-brand-600">{f.value}</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">{f.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Warum jetzt */}
      <Section tone="cream" aria-labelledby="solo-warum">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Fördermittel als Wachstumshebel</p>
            <h2 id="solo-warum" className="mt-2 font-display text-display-md text-ink-900">
              Warum Solopreneure gerade jetzt Fördermittel nutzen sollten
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Das KOMPASS-Programm läuft bis 2027/2028 und wird aus dem Europäischen
              Sozialfonds (ESF Plus) finanziert. Es ist explizit für Solo-Selbstständige
              geschaffen — Menschen, die ihr Business allein oder mit maximal einer
              Vollzeitkraft führen.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Fördermittel sind kein Almosen. Sie sind ein gezieltes staatliches
              Instrument, das unternehmerische Entwicklung beschleunigt. Wer sie
              nicht nutzt, verschenkt einen Vorteil, den der Staat Ihnen ausdrücklich anbietet.
            </p>
          </div>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">Voraussetzungen für KOMPASS</h3>
            <ul className="mt-4 space-y-2.5">
              {voraussetzungen.map((v) => (
                <li key={v} className="flex items-start gap-2 text-[14px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Erfolge */}
      <Section aria-labelledby="solo-erfolge">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Ergebnisse statt Versprechen</p>
        <h2 id="solo-erfolge" className="mt-2 font-display text-display-md text-ink-900">
          Was Solopreneure mit WissensReich erreicht haben
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {erfolge.map((e) => (
            <Card key={e.kontext} variant="elevated">
              <blockquote className="text-[15px] leading-relaxed text-ink-700">
                &bdquo;{e.zitat}&ldquo;
              </blockquote>
              <p className="mt-4 text-[13px] font-medium text-ink-500">{e.kontext}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Kursangebot */}
      <Section tone="cream" aria-labelledby="solo-kurse">
        <h2 id="solo-kurse" className="font-display text-display-md text-ink-900">
          Kurse in 4 Themenbereichen
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Durchgeführt von einem AZAV-zertifizierten Träger. KOMPASS-förderfähig
          bei Erfüllung der Förderkriterien.<sup>*</sup> Geleitet von erfahrenen
          Dozenten mit eigener Praxishandschrift.
        </p>
        <p className="mt-3 text-[13px] text-ink-500">
          <sup>*</sup>Einzelfallprüfung durch die zuständige Anlaufstelle erforderlich.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {kurskategorien.map((k) => (
            <div key={k.titel} className="rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-base font-semibold text-ink-900">{k.titel}</h3>
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-700">
                  {k.anzahl}
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{k.kurse}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/kursuebersicht"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
          >
            Alle Kurse im Detail ansehen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Ablauf */}
      <Section aria-labelledby="solo-ablauf">
        <h2 id="solo-ablauf" className="font-display text-display-md text-ink-900">
          Von der Idee zum Kursstart — in vier Schritten
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {schritte.map((s) => (
            <div key={s.nr} className="rounded-2xl border border-line bg-white p-6">
              <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white">
                {s.nr}
              </span>
              <h3 className="mt-4 font-sans text-base font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Rechtsgrundlagen */}
      <Section tone="cream" aria-labelledby="solo-recht">
        <h2 id="solo-recht" className="font-display text-display-md text-ink-900">
          Rechtsgrundlagen — transparent und nachvollziehbar
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Ihre Förderung steht auf einer soliden gesetzlichen Basis. Hier die
          wichtigsten Grundlagen — verständlich erklärt und mit Quellenlink.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">KOMPASS — Kompakte Hilfe für Solo-Selbstständige</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              Förderprogramm des BMAS, finanziert aus dem Europäischen Sozialfonds
              (ESF Plus). Übernimmt bis zu 90 % der Weiterbildungskosten für
              Solo-Selbstständige mit max. einer Vollzeitkraft. Laufzeit bis 2027/2028.
            </p>
            <a href="https://www.esf.de/portal/DE/ESF-Plus-2021-2027/Foerderprogramme/bmas/kompass.html" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 underline-offset-4 hover:underline">
              ESF-Programmseite KOMPASS <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </Card>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">AZAV — Akkreditierungs- und Zulassungsverordnung</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              WissensReich ist als Träger nach AZAV zugelassen. Das ist die Voraussetzung,
              damit Kurse über öffentliche Fördermittel abgerechnet werden können.
              Zertifiziert durch CERTQUA nach DIN EN ISO 9001.
            </p>
            <a href="https://www.gesetze-im-internet.de/azav/" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 underline-offset-4 hover:underline">
              AZAV im Volltext (gesetze-im-internet.de) <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </Card>
        </div>
      </Section>

      {/* Concierge */}
      <Section aria-labelledby="solo-concierge">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Ihr persönlicher Lotse</p>
            <h2 id="solo-concierge" className="mt-2 font-display text-display-md text-ink-900">
              Der Concierge-Service begleitet Sie Schritt für Schritt — strukturiert, persönlich, zeitsparend
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Als Solopreneur haben Sie keine HR-Abteilung und keinen
              Fördermittel-Experten im Team. Genau das ist unser Job: Wir
              strukturieren Ihre Unterlagen, bereiten den Antrag vor, halten
              Fristen nach und koordinieren Rückfragen.
            </p>
            <Link href="/concierge-service"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded">
              Mehr zum Concierge-Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-line bg-cream-50 p-6">
            <Image src="/dozenten/florian-domin.png" alt="Porträt von Florian Domin, CEO der WissensReich Academy" width={64} height={64}
              className="h-16 w-16 flex-none rounded-full object-cover" />
            <div>
              <p className="font-sans text-base font-semibold text-ink-900">Florian Domin</p>
              <p className="mt-0.5 text-[14px] font-medium text-brand-700">CEO · Leitung Concierge-Service</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                &bdquo;Ich begleite Sie persönlich. Vom ersten Gespräch bis zur Bewilligung — und darüber hinaus.&ldquo;
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink" aria-labelledby="solo-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="solo-cta" className="font-display text-display-md text-white">
            Bereit, den ersten Schritt zu machen?
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Schauen Sie sich unsere Kurse an oder lassen Sie sich unverbindlich beraten.
            Kein Druck, nur Klarheit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/kursuebersicht"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60">
              Alle Kurse & Leistungen
            </Link>
            <Link href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60">
              Beratung anfragen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
