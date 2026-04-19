import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { KURSE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Unternehmen — Geförderte Qualifizierung mit Concierge-Service",
  description:
    "Qualifizierungschancengesetz: bis 100 % Förderung für Unternehmens-Weiterbildung. AZAV-zertifiziert, maßgeschneiderte Kurse, Concierge-Service für HR-Entlastung.",
  path: "/unternehmen",
});

const heroFacts = [
  { label: "Förderung möglich", value: "bis 100 %" },
  { label: "Koordination", value: "Concierge" },
  { label: "Zertifizierung", value: "AZAV" },
  { label: "Formate", value: "Hybrid" },
];

const vorteile = [
  {
    title: "Entlastung für HR",
    body: "Der Concierge-Service übernimmt Koordination, Dokumentation und Fristenkontrolle — Ihre Personalabteilung wird spürbar entlastet.",
  },
  {
    title: "Maßgeschneiderte Qualifizierung",
    body: "Keine Standardkurse von der Stange. Wir passen Formate, Zeitpläne und Inhalte an Ihren Unternehmensalltag an.",
  },
  {
    title: "Transparente Kosten",
    body: "Klare Preisstrukturen, nachvollziehbare Förderberechnung und saubere Dokumentation für Ihre Buchhaltung.",
  },
  {
    title: "Dozenten mit Branchenwissen",
    body: "Keine generischen Trainer. Unsere Dozenten bringen eigene Praxiserfahrung mit und vermitteln Inhalte, die im Alltag Wirkung zeigen.",
  },
];

const erfolge = [
  {
    zitat: "Die Koordination lief reibungslos. Unser HR-Team musste sich um fast nichts kümmern.",
    kontext: "Personalleitung · Mittelständisches Unternehmen",
  },
  {
    zitat: "Endlich eine Weiterbildung, nach der mein Team tatsächlich anders arbeitet — nicht nur anders redet.",
    kontext: "Geschäftsführer · Dienstleistungsunternehmen",
  },
  {
    zitat: "Die Förderdokumentation war so sauber, dass die Bewilligung in Rekordzeit durch war.",
    kontext: "CFO · Technologieunternehmen",
  },
];

const themen = [
  "Social Media Marketing & Content-Strategie",
  "Verkauf, Akquise & Empfehlungsmarketing",
  "KI-Anwendung & Prozessautomatisierung",
  "Rhetorik, Präsentation & Führungskommunikation",
  "Kundenbindung & Beziehungsmarketing",
  "Finanzielle Klarheit & Steuerstrategie",
];

export default function UnternehmenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Unternehmen", href: "/unternehmen" },
        ]}
      />

      {/* Hero */}
      <Section aria-labelledby="b2b-title">
        <SectionHeader
          as="h1"
          eyebrow="Für Unternehmen"
          titleId="b2b-title"
          title="Qualifizierung, die in Ihrem Alltag Wirkung entfaltet — bis zu 100 % gefördert"
          intro="Weiterbildung scheitert oft nicht am Inhalt, sondern am Drumherum: Koordination, Dokumentation, Fristen. Genau dafür haben wir den Concierge-Service. Sie wählen das Thema — wir machen den Rest."
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

      {/* Vorteile */}
      <Section tone="cream" aria-labelledby="b2b-vorteile">
        <h2 id="b2b-vorteile" className="font-display text-display-md text-ink-900">
          Was Sie bei WissensReich anders finden
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {vorteile.map((v) => (
            <Card key={v.title} variant="elevated">
              <h3 className="font-sans text-base font-semibold text-ink-900">{v.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Erfolge */}
      <Section aria-labelledby="b2b-erfolge">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Ergebnisse statt Versprechen</p>
        <h2 id="b2b-erfolge" className="mt-2 font-display text-display-md text-ink-900">
          Was Unternehmen mit WissensReich erreicht haben
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

      {/* Themen */}
      <Section tone="cream" aria-labelledby="b2b-themen">
        <h2 id="b2b-themen" className="font-display text-display-md text-ink-900">
          Themen, die in Unternehmen Wirkung zeigen
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Durchgeführt von einem AZAV-zertifizierten Träger. Geleitet von erfahrenen
          Dozenten mit eigener Praxishandschrift. Formate und Zeitpläne können an
          Ihren Betrieb angepasst werden.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {themen.map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-xl border border-line bg-white p-5">
              <Check className="mt-0.5 h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
              <span className="text-[15px] text-ink-900">{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/kursuebersicht"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded">
            Alle Kurse im Detail ansehen <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Unternehmen kompakt — Live Done-with-you Kurse */}
      <Section aria-labelledby="b2b-kompakt">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          Unternehmen kompakt · 100 % Live · Done with you
        </p>
        <h2 id="b2b-kompakt" className="mt-2 font-display text-display-md text-ink-900">
          Niederschwellige Live-Kurse — direkt im Unternehmen umgesetzt
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Sieben kompakte Formate unter <strong>3.000 € (vor Förderung)</strong> —
          ideal für KMU, die schnell, praxisnah und mit messbarem Ergebnis
          weiterbilden wollen. Kein Selbststudium: Wir machen es zusammen mit
          Ihnen — live, begleitet, Schritt für Schritt.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {KURSE.filter((k) => k.kategorie.includes("unternehmen-kompakt")).map((k) => (
            <Card key={k.id} variant="elevated" className="flex flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700">
                {k.dauer}
              </p>
              <h3 className="mt-2 font-sans text-base font-semibold text-ink-900">
                {k.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {k.kurzbeschreibung}
              </p>
              <p className="mt-auto pt-4 text-[13px] font-medium text-ink-900">
                {k.preis}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/kursuebersicht?filter=unternehmen-kompakt"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-5 text-[14px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45">
            Alle Kompakt-Kurse ansehen <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/#kontakt"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-5 text-[14px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45">
            Beratung anfragen
          </Link>
        </div>
      </Section>

      {/* Fördermittel */}
      <Section tone="cream" aria-labelledby="b2b-foerder">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Fördermittel als Investitionshebel</p>
            <h2 id="b2b-foerder" className="mt-2 font-display text-display-md text-ink-900">
              Das Qualifizierungschancengesetz — Ihr Fördervorteil
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Das Qualifizierungschancengesetz (§ 82 SGB III) ermöglicht es
              Unternehmen, die Weiterbildungskosten ihrer Mitarbeitenden zu einem
              erheblichen Teil fördern zu lassen. Je nach Betriebsgröße werden
              bis zu 100 % der Lehrgangskosten und bis zu 75 % der
              Lohnfortzahlung übernommen.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Fördermittel sind kein bürokratischer Aufwand — sie sind ein
              Investitionshebel. Unser Concierge-Service übernimmt die
              Dokumentation, damit Sie sich auf die Ergebnisse konzentrieren können.
            </p>
          </div>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">Förderquoten nach Betriebsgröße</h3>
            <dl className="mt-4 space-y-3 text-[14px]">
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-700">Kleinstunternehmen (&lt; 10 MA)</dt>
                <dd className="font-semibold text-brand-700">bis 100 %</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-700">Kleine/mittlere (&lt; 250 MA)</dt>
                <dd className="font-semibold text-brand-700">bis 50 %</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-700">Größere Unternehmen (250+ MA)</dt>
                <dd className="font-semibold text-brand-700">bis 25 %</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-700">Lohnfortzahlung zusätzlich</dt>
                <dd className="font-semibold text-brand-700">bis 75 %</dd>
              </div>
            </dl>
          </Card>
        </div>
      </Section>

      {/* Rechtsgrundlagen */}
      <Section tone="cream" aria-labelledby="b2b-recht">
        <h2 id="b2b-recht" className="font-display text-display-md text-ink-900">
          Rechtsgrundlagen — transparent und nachvollziehbar
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">Qualifizierungschancengesetz (§ 82 SGB III)</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              Fördert die berufliche Weiterbildung von Beschäftigten, deren
              Kompetenzen durch den Strukturwandel oder Digitalisierung
              anpassungsbedürftig sind. Arbeitgeber beantragen die Förderung
              bei der Agentur für Arbeit.
            </p>
            <a href="https://www.gesetze-im-internet.de/sgb_3/__82.html" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 underline-offset-4 hover:underline">
              § 82 SGB III im Volltext <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </Card>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">AZAV — Trägerzulassung</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              WissensReich ist als Bildungsträger nach AZAV zugelassen —
              Voraussetzung für die Abrechnung über öffentliche Fördermittel.
              Zertifiziert durch CERTQUA nach DIN EN ISO 9001.
            </p>
            <a href="https://www.gesetze-im-internet.de/azav/" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 underline-offset-4 hover:underline">
              AZAV im Volltext <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </Card>
        </div>
      </Section>

      {/* Concierge */}
      <Section aria-labelledby="b2b-concierge">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Ihr Prozessvereinfacher</p>
            <h2 id="b2b-concierge" className="mt-2 font-display text-display-md text-ink-900">
              Der Concierge-Service — Ihr externer Weiterbildungs-Koordinator
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Wir übernehmen alles, was Ihre HR-Abteilung sonst selbst
              recherchieren, koordinieren und dokumentieren müsste: Förderfähigkeit
              prüfen, Unterlagen strukturieren, Anträge vorbereiten, Fristen
              nachhalten, Rückfragen koordinieren.
            </p>
            <Link href="/concierge-service"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded">
              Mehr zum Concierge-Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/concierge-unternehmen"
              className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-500 underline-offset-4 hover:text-ink-700 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded">
              Fördermittel-Concierge für Unternehmen &amp; Berater <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-line bg-cream-50 p-6">
            <Image src="/dozenten/florian-domin.png" alt="Porträt von Florian Domin, CEO der WissensReich Academy" width={64} height={64}
              className="h-16 w-16 flex-none rounded-full object-cover" />
            <div>
              <p className="font-sans text-base font-semibold text-ink-900">Florian Domin</p>
              <p className="mt-0.5 text-[14px] font-medium text-brand-700">CEO · Leitung Concierge-Service</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                &bdquo;Wir entlasten Ihre interne Koordination und sorgen dafür, dass der Förderprozess reibungslos läuft.&ldquo;
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* INQA-Coaching Teaser */}
      <Section tone="brand-soft" aria-labelledby="b2b-inqa">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Neu: Gefördertes Coaching</p>
            <h2 id="b2b-inqa" className="mt-2 font-display text-display-md text-ink-900">
              INQA-Coaching — Bis zu 80 % gefördertes Unternehmens-Coaching
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Bauen Sie ein funktionierendes Entscheidungssystem für Ihr Unternehmen:
              klare Prozesse, strukturierte Abläufe und befähigte Mitarbeiter.
              Bis zu 12 Beratungstage, bis zu 80 % staatlich gefördert über das BAFA.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Klare Prozesse statt Chaos im Tagesgeschäft",
                "Entscheidungen werden schneller und sicherer",
                "Mitarbeiter arbeiten eigenständig im System",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-[14px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/inqa-coaching"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45">
                INQA-Coaching entdecken <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-line bg-white p-5 text-center">
              <p className="font-display text-2xl font-semibold text-brand-600">80 %</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">Förderung</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 text-center">
              <p className="font-display text-2xl font-semibold text-brand-600">12</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">Beratungstage</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 text-center">
              <p className="font-display text-2xl font-semibold text-brand-600">KMU</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">Zielgruppe</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 text-center">
              <p className="font-display text-2xl font-semibold text-brand-600">BAFA</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">Fördergeber</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Prophylaxe Institut Teaser */}
      <Section tone="cream" aria-labelledby="b2b-prophylaxe">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Branchenspezifisch: Zahnmedizin</p>
            <h2 id="b2b-prophylaxe" className="mt-2 font-display text-display-md text-ink-900">
              Prophylaxe Institut by Minka — Praxismentoring für Zahnärzte
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Ein spezialisiertes Mentoring-Programm für Zahnarztpraxen: Prophylaxe
              als messbarer Renditetreiber, Team-Entwicklung mit System und
              zeitliche Entlastung für Praxisinhaber. Geleitet von Minka —
              erfahrene Dozentin mit über 20 Jahren Praxiserfahrung.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Prophylaxe als profitabelste Abteilung aufbauen",
                "Team arbeitet eigenständig mit klaren Abläufen",
                "Praxisinhaber gewinnt Zeit für Kernaufgaben",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-[14px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/prophylaxe-institut"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45">
                Prophylaxe Institut entdecken <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-line bg-white p-5 text-center">
              <p className="font-display text-2xl font-semibold text-brand-600">3</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">Mentoring-Stufen</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 text-center">
              <p className="font-display text-2xl font-semibold text-brand-600">20+</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">Jahre Erfahrung</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 text-center">
              <p className="font-display text-2xl font-semibold text-brand-600">100 %</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">Förderbar</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 text-center">
              <p className="font-display text-2xl font-semibold text-brand-600">1:1</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">Persönlich</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink" aria-labelledby="b2b-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="b2b-cta" className="font-display text-display-md text-white">
            Lassen Sie uns über Qualifizierung sprechen
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Schauen Sie sich unsere Kursangebote an oder vereinbaren Sie ein
            unverbindliches Erstgespräch. Wir nennen Ihnen konkret, was machbar ist.
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
