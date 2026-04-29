import type { Metadata } from "next";
import { buildMetadata, SCHEMA_IDS } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_URL } from "@/lib/utils";
import { ApplyForm } from "@/components/apply/ApplyForm";
import { TidyCalEmbed } from "@/components/apply/TidyCalEmbed";
import {
  ENTRY_OFFERS,
  IMPLEMENTATION_OFFERS,
  SUBSCRIPTION_OFFER,
  COST_BENCHMARKS,
} from "@/lib/offers";
import { ArrowRight, Check, X, Sparkles, CalendarClock } from "lucide-react";
import { FreeSnapSlider } from "@/components/ui/FreeSnapSlider";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title:
    "Digitale Umsetzungsmaschine — Steuern Sie Ihr Business aus der Hosentasche",
  description:
    "Bauen Sie eine digitale Umsetzungsmaschine, mit der aus Ideen, Sprachnachrichten und Anforderungen sichtbare Ergebnisse werden — schneller, eigenständiger und mit deutlich weniger Abhängigkeit von Agenturen, IT-Dienstleistern und internen Engpässen.",
  path: "/",
});

// ────────────────────────────────────────────────────────────────
// Reusable micro-primitives (local to this page)
// ────────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300">
      {children}
    </p>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display italic font-semibold ${className}`}>
      Das Zweitsystem
    </span>
  );
}

/** Dekorativer Top-Divider zwischen Sektionen — Gradient mit Brand-Punkt. */
function SectionDivider({ tone = "brand" }: { tone?: "brand" | "rose" | "emerald" }) {
  const via =
    tone === "rose"
      ? "via-rose-400/60"
      : tone === "emerald"
        ? "via-emerald-400/60"
        : "via-brand-400/60";
  const dot =
    tone === "rose"
      ? "bg-rose-500"
      : tone === "emerald"
        ? "bg-emerald-500"
        : "bg-brand-500";
  const glow =
    tone === "rose"
      ? "shadow-[0_0_18px_4px_rgba(244,63,94,0.55)]"
      : tone === "emerald"
        ? "shadow-[0_0_18px_4px_rgba(16,185,129,0.55)]"
        : "shadow-[0_0_18px_4px_rgba(155,111,198,0.55)]";
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 z-10 flex items-center justify-center"
    >
      <div className={`h-px w-full bg-gradient-to-r from-transparent ${via} to-transparent`} />
      <div className={`absolute h-1.5 w-1.5 rounded-full ${dot} ${glow}`} />
    </div>
  );
}

/** Pain-X — runder roter Cross-Marker für Anti-Listen. */
function PainX({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/15 ring-1 ring-rose-500/40 text-rose-300 flex-shrink-0 ${className}`}
    >
      <X className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

/** Gain-Check — runder grüner Check-Marker für Vorteils-Listen. */
function GainCheck({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/40 text-emerald-300 flex-shrink-0 ${className}`}
    >
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

// ────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────

export default function KiUmsetzungPage() {
  return (
    <div className="relative bg-[#07070C] text-white overflow-hidden">

      <BreadcrumbJsonLd
        items={[{ name: "Digitale Umsetzungsmaschine", href: "/" }]}
      />

      {/* WebPage + Service + HowTo + Course + AggregateOffer als @graph,
          mit @id-Verlinkung auf Organization (in layout.tsx) und WebSite. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": SCHEMA_IDS.webpage,
              url: SITE_URL,
              name: "Digitale Umsetzungsmaschine — Steuern Sie Ihr Business aus der Hosentasche",
              description:
                "Bauen Sie eine digitale Umsetzungsmaschine, mit der aus Ideen, Sprachnachrichten und Anforderungen sichtbare Ergebnisse werden — schneller, eigenständiger und mit deutlich weniger Abhängigkeit von Agenturen, IT-Dienstleistern und internen Engpässen.",
              inLanguage: "de-DE",
              isPartOf: { "@id": SCHEMA_IDS.website },
              about: { "@id": SCHEMA_IDS.service },
              primaryImageOfPage: `${SITE_URL}/opengraph-image`,
              datePublished: "2025-09-01",
              dateModified: new Date().toISOString().split("T")[0],
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", "h2", "[data-speakable]"],
              },
              mainEntity: { "@id": SCHEMA_IDS.service },
            },
            {
              "@type": "Service",
              "@id": SCHEMA_IDS.service,
              name: "Digitale Umsetzungsmaschine",
              alternateName: [
                "Digitale Umsetzungsfabrik",
                "Inhouse-Umsetzungsmaschine",
                "Idee-zu-Realität-System",
              ],
              serviceType: "Digitale Transformation, KI-gestützte Umsetzung",
              category: "Business Consulting",
              description:
                "Programm- und Beratungsleistungen zum Aufbau einer digitalen Umsetzungsmaschine: aus Ideen, Sprachnachrichten und Anforderungen werden sichtbare Ergebnisse — schneller, eigenständiger und mit weniger Dienstleisterabhängigkeit.",
              url: SITE_URL,
              provider: { "@id": SCHEMA_IDS.organization },
              areaServed: [
                { "@type": "Country", name: "Deutschland" },
                { "@type": "Country", name: "Österreich" },
                { "@type": "Country", name: "Schweiz" },
              ],
              audience: [
                { "@type": "BusinessAudience", audienceType: "Unternehmen" },
                { "@type": "Audience", audienceType: "Selbstständige" },
                { "@type": "Audience", audienceType: "Fachkräfte" },
                { "@type": "Audience", audienceType: "Angestellte" },
                { "@type": "Audience", audienceType: "Teams" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Angebotsleiter Digitale Umsetzungsmaschine",
                itemListElement: [
                  ...ENTRY_OFFERS.map((o) => ({
                    "@type": "Offer",
                    name: o.name,
                    description: o.tagline,
                    price: String(o.priceNumeric),
                    priceCurrency: "EUR",
                    category: o.badge,
                    url: `${SITE_URL}#pakete-detail`,
                    eligibleRegion: { "@type": "Country", name: "Deutschland" },
                  })),
                  ...IMPLEMENTATION_OFFERS.map((o) => ({
                    "@type": "Offer",
                    name: o.name,
                    description: o.tagline,
                    price: String(o.priceNumeric),
                    priceCurrency: "EUR",
                    category: o.badge,
                    url: `${SITE_URL}#pakete-detail`,
                    eligibleRegion: { "@type": "Country", name: "Deutschland" },
                  })),
                  {
                    "@type": "Offer",
                    name: SUBSCRIPTION_OFFER.name,
                    description: SUBSCRIPTION_OFFER.tagline,
                    price: String(SUBSCRIPTION_OFFER.priceNumeric),
                    priceCurrency: "EUR",
                    category: SUBSCRIPTION_OFFER.badge,
                    url: `${SITE_URL}#pakete-detail`,
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: String(SUBSCRIPTION_OFFER.priceNumeric),
                      priceCurrency: "EUR",
                      unitCode: "MON",
                      billingDuration: "P1M",
                    },
                  },
                ],
              },
            },
            // HowTo — extrem gut für AI Search Extraction
            {
              "@type": "HowTo",
              name: "Aus Idee wird testbare Realität — der Umsetzungsprozess",
              description:
                "Sechsstufiger Prozess, mit dem aus einer Sprachnachricht oder Idee am Vormittag noch am selben Tag ein testbarer Stand wird.",
              totalTime: "PT1D",
              tool: [
                { "@type": "HowToTool", name: "Sprachnachricht oder Notiz" },
                { "@type": "HowToTool", name: "Digitale Umsetzungsmaschine" },
              ],
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Sprachnachricht oder Idee",
                  text: "Eine Idee in 5 Minuten am Vormittag erfassen — als Sprachnachricht oder Notiz.",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Struktur",
                  text: "Aus der Eingabe entsteht in Minuten eine klare Struktur — keine Briefingschleife.",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Entwurf",
                  text: "Auf Basis der Struktur entsteht ein erster sichtbarer Entwurf — sofort prüfbar.",
                },
                {
                  "@type": "HowToStep",
                  position: 4,
                  name: "Testbarer Stand",
                  text: "Am selben Tag liegt ein testbarer Stand vor — kein Mockup, sondern eine echte Vorstufe.",
                },
                {
                  "@type": "HowToStep",
                  position: 5,
                  name: "Verbesserung in Echtzeit",
                  text: "Anpassungen erfolgen in Echtzeit — ohne Korrekturrunde, ohne Termin in zwei Wochen.",
                },
                {
                  "@type": "HowToStep",
                  position: 6,
                  name: "Produktiver Stand",
                  text: "Noch in derselben Woche steht ein produktiv nutzbarer Stand bereit.",
                },
              ],
            },
            // Course-Schemas pro Umsetzungspaket — ranken besser für „Programm/Kurs"-Suchen
            ...IMPLEMENTATION_OFFERS.map((o) => ({
              "@type": "Course",
              name: o.name,
              description: o.tagline,
              provider: { "@id": SCHEMA_IDS.organization },
              educationalLevel: "Professional",
              inLanguage: "de-DE",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: o.id === "kompakt" ? "PT12H" : "PT24H",
                location: {
                  "@type": "VirtualLocation",
                  url: SITE_URL,
                },
              },
              offers: {
                "@type": "Offer",
                price: String(o.priceNumeric),
                priceCurrency: "EUR",
                category: o.badge,
                availability: "https://schema.org/InStock",
                url: `${SITE_URL}#pakete-detail`,
              },
            })),
            // ItemList für Cost-Benchmarks — ein- und ausklappbar gut für AI-Snippets
            {
              "@type": "ItemList",
              name: "Was Unternehmen heute für digitale Umsetzung bezahlen — Orientierungswerte",
              description:
                "Realistische Marktorientierung für externe Digitalprojekte. Werte sind Orientierungsspannen, keine Garantien.",
              itemListOrder: "https://schema.org/ItemListOrderAscending",
              numberOfItems: COST_BENCHMARKS.length,
              itemListElement: COST_BENCHMARKS.map((b, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: b.title,
                description: `${b.range}${b.recurring ? ` · ${b.recurring}` : ""}`,
              })),
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${SITE_URL}/#faq`,
          isPartOf: { "@id": SCHEMA_IDS.webpage },
          inLanguage: "de-DE",
          about: { "@id": SCHEMA_IDS.service },
          mainEntity: [
            {
              "@type": "Question",
              name: "Muss ich technisch sein?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein. Sie müssen weder Entwickler noch IT-Spezialist sein. Wichtig sind Branchen- und Kundenkenntnis, ein konkretes Vorhaben und die Bereitschaft, an realen Use Cases mitzuarbeiten. Den technischen Teil bauen wir gemeinsam.",
              },
            },
            {
              "@type": "Question",
              name: "Ist die fundierte Unternehmensanamnese verpflichtend für ein Umsetzungspaket?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein. Die Anamnese ist eine eigenständige Beratungsleistung. Sie schafft Klarheit über Engpässe, Prioritäten und Handlungsfelder. Eine anschließende Umsetzung mit uns ist möglich, aber nicht verpflichtend.",
              },
            },
            {
              "@type": "Question",
              name: "Was ist der Unterschied zwischen Kompakt, With You und Done for You Lite?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kompakt (1.990 €) gibt den Bauplan für Selbststeuerer. With You (8.500 €) baut die Maschine gemeinsam mit Mit-Umsetzern auf. Done for You Lite (24.900 €) richtet sie für Sie ein, schult Ihr Team und begleitet die ersten Einsätze — für maximale Entlastung.",
              },
            },
            {
              "@type": "Question",
              name: "Was bekomme ich bei Done for You Lite konkret eingerichtet?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Voller Umfang aus With You plus: Einrichtung der Zugänge, Verbindung relevanter Accounts, Erstjustierung der Arbeitslogik, Anlage erster Projektdaten und Prompt-Strukturen, Übergabe eines benutzbaren Startsystems. Zusätzlich: 2 Monate Premium-Umsetzungsbegleitung und 2 exklusive 1:1-Team-Schulungswochen am echten System.",
              },
            },
            {
              "@type": "Question",
              name: "Was passiert nach dem Programm?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sie haben ein benutzbares Grundsystem, das Sie eigenständig nutzen. Optional: Premium-Umsetzungsbegleitung 999 €/Monat (1 × 90 min 1:1, monatlich kündbar) mit Community-Zugang, Messenger-Gruppe und monatlichem Gruppen-Call.",
              },
            },
            {
              "@type": "Question",
              name: "Ersetzt das Agenturen und Dienstleister?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein. Wir reduzieren blinde Abhängigkeit und erhöhen interne Umsetzungsfähigkeit. Sie können Dienstleister präziser briefen, Vorstufen selbst erzeugen und Varianten schneller testen.",
              },
            },
            {
              "@type": "Question",
              name: "Ist das auch für Angestellte und Fachkräfte geeignet?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Die Programmlogik funktioniert für jeden Erwerbskontext. Die Förderlogik der Anamnese richtet sich an Unternehmen — die Umsetzungspakete sind für Unternehmen, Selbstständige, Fachkräfte, Angestellte und Teams gleichermaßen wirksam.",
              },
            },
            {
              "@type": "Question",
              name: "Wie vertraulich sind sensible Daten?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Schutz-, Zugriffs- und Schlüssellogik werden bewusst Teil des Aufbaus. Bei Done for You Lite arbeiten wir in den Team-Schulungswochen 1:1 mit dem Unternehmen, nicht in der Gruppe — sodass auch reale Daten, Prozesse, Geschäftsgeheimnisse und Marktvorteile vertraulich behandelt werden.",
              },
            },
          ],
        }}
      />

      {/* ═══════════════════════ S1 · HERO ═══════════════════════ */}
      <section className="relative z-10 min-h-[100svh] flex flex-col bg-[#07070C] overflow-hidden" aria-labelledby="section-hero">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 700px at 15% -10%, rgba(110,63,163,0.32), transparent 60%), radial-gradient(900px 600px at 90% 10%, rgba(110,63,163,0.18), transparent 60%)",
          }}
        />

        {/* Top meta bar */}
        <div className="relative z-10 border-b border-white/5">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between gap-6 text-[11px] uppercase tracking-[0.18em] text-white/90">
            <span className="font-semibold">
              KI Bäckerei · Digitale Umsetzungsmaschine
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Anamnese · Programm · Begleitung
            </span>
          </div>
        </div>

        <div className="relative z-10 flex-1 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 pt-16 lg:pt-24 pb-20">
          <div className="inline-flex items-start sm:items-center gap-2 rounded-2xl sm:rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 sm:py-1.5 backdrop-blur-sm mb-10 max-w-full">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 sm:mt-0 flex-shrink-0" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 leading-snug">
              <span className="sm:hidden">
                Für Unternehmen, Selbstständige, Fachkräfte, Angestellte &amp; Teams
              </span>
              <span className="hidden sm:inline">
                Für Unternehmen · Selbstständige · Fachkräfte · Angestellte · Teams
              </span>
            </span>
          </div>

          {/* Hero headline */}
          <h1 className="font-display leading-[0.95] tracking-[-0.02em] text-white" id="section-hero">
            <span className="block text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.3em] text-brand-300 mb-6">
              Digitale Umsetzungsmaschine
            </span>
            <span
              className="block text-[clamp(2.75rem,8.5vw,6.75rem)] font-semibold text-white"
              style={{
                textShadow:
                  "0 0 60px rgba(155,111,198,0.18), 0 0 120px rgba(110,63,163,0.14)",
              }}
            >
              Steuern Sie Ihr Business
              <br />
              <span className="italic text-brand-200">aus der Hosentasche.</span>
            </span>
          </h1>

          {/* Subhead */}
          <p className="mt-10 max-w-3xl font-display text-[clamp(1.25rem,2.4vw,1.875rem)] leading-[1.25] text-white/90">
            Bauen Sie eine digitale Umsetzungsmaschine, mit der aus Ideen,
            Sprachnachrichten und Anforderungen{" "}
            <span className="text-brand-300">sichtbare Ergebnisse</span> werden —
            schneller, eigenständiger und mit deutlich weniger Abhängigkeit von
            Agenturen, IT-Dienstleistern und internen Engpässen.
          </p>

          {/* Lead paragraph */}
          <p className="mt-8 max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/85">
            Ihre Fachkompetenz bleibt der Rohstoff. Die Umsetzungsmaschine macht
            daraus, was sonst Wochen durch Briefings und Freigaben gewandert
            wäre. Anamnese zuerst — danach der passende Umsetzungsweg.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#bewerbung"
              className="group inline-flex items-center gap-3 px-7 h-14 rounded-full bg-white text-black text-[14px] font-semibold tracking-wide transition hover:bg-brand-200 hover:text-ink-900"
            >
              Strategietermin sichern
              <ArrowRight aria-hidden="true" className="w-4 h-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pakete"
              className="inline-flex items-center gap-3 px-7 h-14 rounded-full border border-white/20 text-white text-[14px] font-semibold tracking-wide transition hover:border-white/70 hover:bg-white/5"
            >
              Pakete ansehen
            </a>
          </div>

          {/* Proof / Orientation bar */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {[
              { label: "Einstieg", value: "Anamnese · ggf. förderfähig" },
              { label: "Format", value: "Live · digitale Kleingruppe" },
              { label: "Umsetzung", value: "Kompakt · With You · Done for You" },
              { label: "Ergebnis", value: "Eigene Umsetzungsfähigkeit" },
            ].map((item) => (
              <div key={item.label} className="bg-[#0A0A12] p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 mb-2">
                  {item.label}
                </p>
                <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 border-t border-white/5">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/85">
            <span>Scrollen — was zwischen Idee und Ergebnis verloren geht</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ S2 · PROBLEM ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 bg-cream-100 overflow-hidden" aria-labelledby="section-problem">
        <SectionDivider tone="rose" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 500px at 100% 0%, rgba(244,63,94,0.16), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>01 · Das eigentliche Problem</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-ink-900" id="section-problem">
              Sie haben nicht zu wenig Ideen.
              <br />
              <span className="text-brand-700">
                Sie verlieren zu viel Zeit zwischen Idee und Ergebnis.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-800">
              Der Engpass ist nicht Fachwissen, nicht Strategie, nicht
              Kreativität. Der Engpass ist die Strecke dazwischen — und die
              bezahlen Sie jeden Monat, auch wenn niemand sie auf die Rechnung
              schreibt.
            </p>
          </div>

          {/* Pain grid — kürzer, härter, präziser */}
          <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
            {[
              {
                head: "Briefings, die zu vier Briefings werden.",
                sub: "Ein Gedanke wird dreimal erklärt, bevor jemand weitermacht.",
              },
              {
                head: "Rückfragen, die zu Meetings werden.",
                sub: "Aus 15 Minuten Klarheit wird ein Termin in zwei Wochen.",
              },
              {
                head: "Dienstleister-Wartezeit, in der nichts entsteht.",
                sub: "Kapazität, Slot, Ressourcen — Ihre Idee steht in der Schlange.",
              },
              {
                head: "Freigabe-Pingpong, das Energie frisst.",
                sub: "Man korrigiert Artefakte, statt Wirkung zu erzeugen.",
              },
              {
                head: "Ideen verlieren Momentum.",
                sub: "Eine gute Idee am Montag ist am Freitag schon kalt.",
              },
              {
                head: "Fachwissen verdampft in Übergaben.",
                sub: "Was bei Ihnen klar war, kommt bei anderen verwaschen an.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-5 border-t border-rose-300/60 pt-6 group hover:border-rose-500/35 transition"
              >
                <PainX className="mt-1.5 h-7 w-7" />
                <div>
                  <p className="font-display text-xl font-semibold text-ink-900 leading-snug">
                    {item.head}
                  </p>
                  <p className="mt-2 text-sm text-ink-800 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Closer */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center border-t border-ink-900/10 pt-12">
            <div className="lg:col-span-3">
              <p className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] text-ink-900">
                Verlorene Zeit. Verlorene Geschwindigkeit.
                <br />
                Verlorene Marktwirkung. Verlorene Energie.
              </p>
            </div>
            <div className="lg:col-span-2 lg:border-l lg:border-ink-900/10 lg:pl-10">
              <p className="text-[15px] leading-relaxed text-ink-800">
                Genau dort setzt die{" "}
                <span className="font-display italic font-semibold text-ink-900">
                  digitale Umsetzungsmaschine
                </span>{" "}
                an — sie schließt die Lücke{" "}
                <span className="text-brand-700">
                  zwischen Idee und sichtbarem Ergebnis
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ S3 · NEUE REALITÄT ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 bg-[#0A0A14] overflow-hidden" aria-labelledby="section-neue-realitaet">
        <SectionDivider tone="brand" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 600px at 50% 0%, rgba(110,63,163,0.18), transparent 70%), radial-gradient(700px 500px at 100% 80%, rgba(16,185,129,0.10), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>02 · Die neue Realität</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white" id="section-neue-realitaet">
              Aus Idee wird Struktur.
              <br />
              Aus Struktur wird Entwurf.
              <br />
              <span className="text-brand-300">
                Aus Entwurf wird testbare Realität.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85">
              Ihre Fachkompetenz bleibt der Rohstoff. Was sich ändert, ist die
              Strecke dahinter — von Sprachnachricht zu sichtbarem Stand, ohne
              Briefing-Kaskade dazwischen.
            </p>
          </div>

          {/* Vorher / Nachher — Tracks */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vorher */}
            <div className="rounded-3xl border border-rose-400/30 bg-gradient-to-b from-rose-500/[0.05] to-transparent p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-between mb-8">
                <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-rose-300">
                  <PainX />
                  Vorher
                </p>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-300/80">
                  Wochen · Monate
                </span>
              </div>
              <ol className="space-y-0.5">
                {[
                  { step: "Idee", note: "entsteht im Kopf" },
                  { step: "Briefing", note: "wird geschrieben" },
                  { step: "Rückfragen", note: "kommen zurück" },
                  { step: "Warten", note: "auf Kapazität" },
                  { step: "Korrekturrunden", note: "Artefakt statt Wirkung" },
                  { step: "Ergebnis", note: "falls noch relevant" },
                ].map((n, i, arr) => (
                  <li key={i} className="relative flex items-center gap-4 py-3">
                    <span className="w-7 text-right font-mono text-xs text-rose-300/80 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        i === arr.length - 1
                          ? "bg-rose-300 ring-4 ring-rose-300/20"
                          : "bg-rose-400/70"
                      }`}
                    />
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-3 border-b border-rose-400/15 pb-3">
                      <span className="font-display text-base sm:text-lg text-white/85 line-through decoration-rose-400/70 decoration-1">
                        {n.step}
                      </span>
                      <span className="text-xs text-rose-300/80">
                        {n.note}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-white/80 leading-relaxed">
                Zwischen Idee und Ergebnis liegt der teuerste Teil des Monats —{" "}
                <span className="text-rose-300">
                  Zeit, in der nichts Sichtbares entsteht.
                </span>
              </p>
            </div>

            {/* Nachher */}
            <div className="relative rounded-3xl border border-emerald-400/35 bg-gradient-to-b from-emerald-500/[0.06] to-transparent p-6 sm:p-10 overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(400px 300px at 80% 0%, rgba(16,185,129,0.18), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-between mb-8">
                  <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    <GainCheck />
                    Mit Umsetzungsmaschine
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Heute · diese Woche
                  </span>
                </div>
                <ol className="space-y-0.5">
                  {[
                    {
                      step: "Sprachnachricht oder Idee",
                      note: "5 Minuten am Vormittag",
                    },
                    { step: "Struktur", note: "in Minuten" },
                    { step: "Entwurf", note: "sofort sichtbar" },
                    { step: "Testbarer Stand", note: "am selben Tag" },
                    { step: "Verbesserung", note: "in Echtzeit" },
                    { step: "Produktiver Stand", note: "noch diese Woche" },
                  ].map((n, i, arr) => (
                    <li
                      key={i}
                      className="relative flex items-center gap-4 py-3"
                    >
                      <span className="w-7 text-right font-mono text-xs text-emerald-300 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          i === arr.length - 1
                            ? "bg-emerald-300 ring-4 ring-emerald-300/20"
                            : "bg-emerald-400"
                        }`}
                      />
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-3 border-b border-emerald-400/15 pb-3">
                        <span className="font-display text-base sm:text-lg text-white">
                          {n.step}
                        </span>
                        <span className="text-xs text-emerald-300">
                          {n.note}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 text-sm text-white/80 leading-relaxed">
                  Eine Idee am Vormittag ist am selben Tag sichtbar, testbar und
                  verbesserbar —{" "}
                  <span className="text-emerald-300">
                    ohne Briefing-Kette dazwischen.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Tempo-Vergleich */}
          <div className="mt-10 grid grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
            <div className="p-6 sm:p-8 bg-rose-500/[0.06] text-center">
              <p className="inline-flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-rose-300 mb-2">
                <PainX />
                Vorher
              </p>
              <p className="font-display text-3xl sm:text-4xl text-white/85 line-through decoration-rose-400">
                3–12 Wochen
              </p>
              <p className="mt-1 text-xs text-rose-300/85">
                bis etwas Sichtbares existiert
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-emerald-500/[0.06] text-center border-l border-emerald-400/30">
              <p className="inline-flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300 mb-2">
                <GainCheck />
                Nachher
              </p>
              <p className="font-display text-3xl sm:text-4xl text-white">
                Stunden
              </p>
              <p className="mt-1 text-xs text-emerald-300">
                bis der erste Stand auf dem Tisch liegt
              </p>
            </div>
          </div>

          {/* Closer-Kicker */}
          <p className="mt-20 font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.25] text-white/85 max-w-4xl">
            Fachkompetenz wird nicht ersetzt.
            <br />
            <span className="text-white">
              Sie wird verstärkt, beschleunigt und vervielfacht
            </span>{" "}
            <span className="text-brand-300">
              — durch eine Maschine, die im Hintergrund mitarbeitet.
            </span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════ S4 · PRICING-OVERVIEW (kompakt) ═══════════════════════ */}
      <section
        id="pakete"
        className="relative z-10 py-24 sm:py-32 bg-[#07070C] overflow-hidden scroll-mt-24"
       aria-labelledby="section-pakete-uebersicht">
        <SectionDivider tone="brand" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 0%, rgba(110,63,163,0.16), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>03 · Erste Orientierung</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-white" id="section-pakete-uebersicht">
              Erst Klarheit.
              <br />
              <span className="text-brand-300">Dann der passende Umsetzungsweg.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/85">
              Es gibt nicht „den einen Kurs“. Es gibt zwei Einstiege und drei
              Umsetzungsgrade — Sie wählen je nach Förderzugang, Tempo und
              gewünschter Entlastung. Die ausführliche Paketansicht folgt weiter
              unten.
            </p>
          </div>

          {/* Einstiege */}
          <div className="mt-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 mb-5">
              Einstieg · zuerst Klarheit schaffen
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ENTRY_OFFERS.map((o) => (
                <article
                  key={o.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-brand-400/40 hover:bg-brand-400/[0.04] transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                      {o.badge}
                    </span>
                    <span className="font-display text-lg text-white tabular-nums">
                      {o.priceLabel}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-white leading-snug">
                    {o.shortName}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    {o.tagline}
                  </p>
                  {o.funding && (
                    <p className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-emerald-300">
                      <Sparkles aria-hidden="true" className="w-3.5 h-3.5" />
                      {o.funding}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* BAFA-konformer Hinweis */}
          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.04] p-5 sm:p-6">
            <p className="text-sm sm:text-[15px] leading-relaxed text-white/85">
              <span className="font-semibold text-emerald-300">Wichtig:</span>{" "}
              Die fundierte Unternehmensanamnese ist eine eigenständige
              Beratungsleistung. Sie schafft Klarheit über Engpässe,
              Prioritäten und mögliche Handlungsfelder.{" "}
              <span className="text-white">
                Eine anschließende Umsetzung mit uns ist möglich, aber nicht
                verpflichtend.
              </span>
            </p>
          </div>

          {/* Umsetzungspakete — kompakte Vergleichskarten */}
          <div className="mt-14">
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Umsetzungswege · drei Tiefen
              </p>
              <p className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-white/55">
                Kompakt → With You → Done for You Lite
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {IMPLEMENTATION_OFFERS.map((o) => (
                <article
                  key={o.id}
                  className={`group relative flex flex-col rounded-2xl border p-6 sm:p-7 transition ${
                    o.highlight
                      ? "border-brand-400/50 bg-gradient-to-b from-brand-500/[0.10] to-brand-500/[0.02]"
                      : "border-white/10 bg-white/[0.02] hover:border-brand-400/40 hover:bg-brand-400/[0.04]"
                  }`}
                >
                  {o.highlight && (
                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      Empfohlen
                    </span>
                  )}
                  {/* Row 1: category badge */}
                  <div className="flex items-center min-h-[1.75rem]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                      {o.badge}
                    </span>
                  </div>

                  {/* Row 2: name */}
                  <h3 className="mt-3 font-display text-xl text-white leading-snug md:min-h-[3.5rem]">
                    {o.shortName}
                  </h3>

                  {/* Row 3: short tagline */}
                  <p className="mt-2 text-sm text-white/80 leading-relaxed md:min-h-[5.5rem]">
                    {o.shortTagline ?? o.tagline}
                  </p>

                  {/* Row 4: price */}
                  <p className="mt-5 font-display text-2xl text-white tabular-nums">
                    {o.priceLabel}
                  </p>

                  {/* Row 5: price text (forWho) */}
                  <p className="mt-1 text-xs text-white/70 leading-relaxed md:min-h-[2.75rem]">
                    {o.forWho}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA-Bar */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="font-display text-xl text-white leading-snug">
                Welcher Weg passt?
              </p>
              <p className="mt-1 text-sm text-white/80 leading-relaxed">
                Im Strategietermin klären wir Förderpfad, passendes Paket und
                ersten Use Case.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#bewerbung"
                className="group inline-flex items-center justify-center gap-3 px-6 h-12 rounded-full bg-white text-black text-[13px] font-semibold tracking-wide transition hover:bg-brand-200 hover:text-ink-900"
              >
                Strategietermin sichern
                <ArrowRight aria-hidden="true" className="w-4 h-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#pakete-detail"
                className="inline-flex items-center justify-center gap-3 px-6 h-12 rounded-full border border-white/20 text-white text-[13px] font-semibold tracking-wide transition hover:border-white/70 hover:bg-white/5"
              >
                Pakete im Detail
              </a>
            </div>
          </div>

          {/* Anschluss-Hinweis */}
          <p className="mt-6 text-xs text-white/65 leading-relaxed max-w-3xl">
            Anschluss nach dem Programm:{" "}
            <span className="text-white/85">
              {SUBSCRIPTION_OFFER.shortName}
            </span>{" "}
            · {SUBSCRIPTION_OFFER.priceLabel}
            {SUBSCRIPTION_OFFER.priceSuffix} · monatlich kündbar.
          </p>
        </div>
      </section>

      {/* ═══════════════════════ S5 · FÜR WEN ═══════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32 bg-[#0B0B16] overflow-hidden" aria-labelledby="section-fuer-wen">
        <SectionDivider tone="brand" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 500px at 100% 50%, rgba(110,63,163,0.12), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>04 · Für wen das ist</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-white" id="section-fuer-wen">
              Sie müssen kein Technik-Nerd sein.
              <br />
              <span className="text-brand-300">
                Sie müssen Ihre Branche, Ihre Kunden und Ihre Aufgaben kennen.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/85">
              Den Bauplan entwickeln wir gemeinsam. Funktioniert für Unternehmen,
              Selbstständige, Fachkräfte, Angestellte und Teams — die Tiefe
              wählen Sie über das Paket.
            </p>
          </div>

          {/* 5 Zielgruppen */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                tag: "Unternehmen",
                line: "Schneller kommunizieren, verkaufen und umsetzen — ohne Tage in Abstimmungen zu verlieren.",
              },
              {
                tag: "Selbstständige",
                line: "Mit kleinem Team wirken wie ein großes — Wirkung skalieren, nicht Fixkosten.",
              },
              {
                tag: "Fachkräfte",
                line: "Ihre Expertise sichtbar machen — Angebote, Entwürfe, Vorstufen am gleichen Tag.",
              },
              {
                tag: "Angestellte",
                line: "Im Job schneller, wirksamer, wertvoller werden — eine reale Fähigkeit auf dem Tisch.",
              },
              {
                tag: "Teams",
                line: "Bessere Briefings, klarere Strukturen, schnellere Übergaben — gleiche Größe, mehr Output.",
              },
              {
                tag: "Projektverantwortliche",
                line: "Reibung zwischen Idee, Briefing und Umsetzung rausnehmen — reproduzierbar planbar.",
              },
            ].map((p) => (
              <article
                key={p.tag}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-brand-400/40 hover:bg-brand-400/[0.04] transition"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                  {p.tag}
                </span>
                <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-white/85">
                  {p.line}
                </p>
              </article>
            ))}
          </div>

          {/* Anti-audience */}
          <div className="mt-12 rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] p-6 sm:p-7 max-w-3xl">
            <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-rose-300 mb-4">
              <PainX />
              Nicht für Sie, wenn …
            </p>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-white/85 leading-relaxed">
              {[
                "Sie einen Knopfdruck erwarten, bei dem Ergebnisse herausfallen, ohne mitzudenken.",
                "Sie glauben, Tools ersetzen Urteilsvermögen — die Maschine verstärkt Kompetenz, sie erschafft keine.",
                "Sie nicht bereit sind, an realen Use Cases mitzuarbeiten.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <PainX className="mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ S6 · WAS DAMIT MÖGLICH WIRD ═══════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32 bg-cream-100 overflow-hidden" aria-labelledby="section-moeglich">
        <SectionDivider tone="brand" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 400px at 0% 30%, rgba(110,63,163,0.12), transparent 65%), radial-gradient(700px 400px at 100% 70%, rgba(110,63,163,0.10), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>05 · Was damit möglich wird</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-ink-900" id="section-moeglich">
              Aus Ideen werden Dinge,
              <br />
              <span className="text-brand-700">
                die Ihr Markt sehen, klicken und buchen kann.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-ink-800">
              Kein Tool-Zoo. Keine Buzzword-Liste. Sondern konkrete Bausteine,
              die heute mit Wartezeit, Briefings und Dienstleisterabhängigkeit
              entstehen — und morgen aus der Hosentasche.
            </p>
          </div>

          {/* Outcome showcase — keen-slider Free-Snap */}
          <div className="mt-14 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10">
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
                Acht Bausteine · ziehen oder klicken
              </span>
              <span className="hidden sm:inline-flex text-[10px] font-mono uppercase tracking-[0.2em] text-ink-700">
                01 — 08
              </span>
            </div>

            <FreeSnapSlider
              ariaLabel="Bausteine, die mit der Umsetzungsmaschine entstehen"
              slidesPerView={1.15}
              spacing={16}
              origin="auto"
              showArrows
              showDots
              navTone="dark"
              breakpoints={{
                "(min-width: 640px)": { slidesPerView: 2.1, spacing: 18 },
                "(min-width: 1024px)": { slidesPerView: 3, spacing: 22 },
                "(min-width: 1280px)": { slidesPerView: 3.4, spacing: 24 },
              }}
            >
              {[
                {
                  num: "01",
                  head: "Angebotsseiten, die Anfragen erzeugen",
                  sub: "Klar, konvertierend, mit Buchungslogik.",
                },
                {
                  num: "02",
                  head: "Landingpages mit Termin- und Kauf-Mechanik",
                  sub: "Sichtbar testen, schneller iterieren.",
                },
                {
                  num: "03",
                  head: "Digitale Vertriebsstrecken",
                  sub: "Aufmerksamkeit → Lead → Kunde, ohne tägliches Hinterherlaufen.",
                },
                {
                  num: "04",
                  head: "Follow-up- und Newsletter-Systeme",
                  sub: "Vertrauen bauen, ohne dass Kontakte versanden.",
                },
                {
                  num: "05",
                  head: "App-/Tool-Prototypen",
                  sub: "Anklickbare Vorstufen, bevor 25.000 € extern fließen.",
                },
                {
                  num: "06",
                  head: "Interne Steuerungsboards",
                  sub: "Aufträge, Prozesse, Daten — sauber an einem Ort.",
                },
                {
                  num: "07",
                  head: "Prozess- und Briefingstrukturen",
                  sub: "Reibung raus, Übergaben reproduzierbar.",
                },
                {
                  num: "08",
                  head: "Sichtbare Vorstufen für Leistungen",
                  sub: "Was möglich wird, sehen — bevor andere noch Anforderungsdokumente schreiben.",
                },
              ].map((f) => (
                <article
                  key={f.num}
                  className="group relative h-full rounded-3xl border border-ink-900/10 bg-white p-7 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-600/40 hover:shadow-[0_22px_60px_-30px_rgba(110,63,163,0.45)]"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(420px 220px at 0% 0%, rgba(110,63,163,0.08), transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 font-mono text-xs font-semibold text-brand-700 tabular-nums ring-1 ring-brand-600/15">
                        {f.num}
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 text-brand-700/0 transition duration-300 group-hover:text-brand-700 group-hover:translate-x-1"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-lg leading-[1.2] text-ink-900">
                      {f.head}
                    </h3>
                    <p className="mt-3 text-sm text-ink-800 leading-relaxed">
                      {f.sub}
                    </p>
                  </div>
                </article>
              ))}
            </FreeSnapSlider>
          </div>

          {/* Closer */}
          <p className="mt-14 font-display text-[clamp(1.4rem,2.4vw,1.875rem)] leading-[1.25] text-ink-900 max-w-4xl">
            Nicht in der Reihenfolge „erst alles klären, dann alles bauen“ —{" "}
            <span className="text-brand-700">
              parallel, sichtbar, iterativ.
            </span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════ S7 · WAS GEMEINSAM ENTSTEHT ═══════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32 bg-[#0A0A14] overflow-hidden" aria-labelledby="section-was-entsteht">
        <SectionDivider tone="brand" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 0%, rgba(110,63,163,0.16), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>06 · Was gemeinsam entsteht</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-white" id="section-was-entsteht">
              Keine Blackbox. Kein Tool-Chaos.
              <br />
              <span className="text-brand-300">
                Eine Maschine, die Sie verstehen.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/85">
              Sie bauen Ihre Umsetzungsmaschine bewusst mit auf — mit klarer
              Arbeitslogik, sauberer Schutz- und Zugriffslogik und präziser
              Ausrichtung auf Ihre echten Use Cases. Danach können Sie
              eigenständig weiterbauen.
            </p>
          </div>

          {/* Building blocks */}
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                head: "Klare Arbeitslogik",
                sub: "Wie kommen Idee, Daten, Sprache und Output zusammen — verständlich für Sie und Ihr Team.",
              },
              {
                head: "Abgestimmtes Zusammenspiel",
                sub: "Digitale Bausteine, die ineinander greifen, statt ein Tool-Zoo, der nebeneinander her läuft.",
              },
              {
                head: "Sichere Nutzung",
                sub: "Schutz-, Zugriffs- und Schlüssellogik werden bewusst Teil des Aufbaus — keine Schatten-IT.",
              },
              {
                head: "Präzise Use-Case-Ausrichtung",
                sub: "Auf Ihre Branche, Ihre Sprache, Ihre Kunden zugeschnitten — Ergebnisse klingen nach Ihnen.",
              },
              {
                head: "Daten- und Wissensgrundlage",
                sub: "Ihre Inhalte, Ihre Beispiele, Ihre Marktrealität — die Maschine arbeitet mit dem, was wirklich relevant ist.",
              },
              {
                head: "Sauberer Übergang in den Alltag",
                sub: "Nicht „nach dem Programm sehen wir weiter“, sondern: ab Tag 29 produktiv einsetzbar.",
              },
            ].map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-brand-400/40 hover:bg-brand-400/[0.04] transition"
              >
                <GainCheck className="mt-1" />
                <div>
                  <p className="font-display text-lg text-white leading-snug">
                    {b.head}
                  </p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    {b.sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Eskalations-Hinweis With You / Done for You Lite */}
          <div className="mt-10 rounded-2xl border border-brand-400/30 bg-gradient-to-r from-brand-500/[0.10] via-transparent to-transparent p-6 sm:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-200 whitespace-nowrap h-fit">
                Tiefe wählen
              </span>
              <div>
                <p className="font-display text-lg sm:text-xl leading-[1.3] text-white">
                  <span className="text-white/80">Kompakt</span> gibt Ihnen den
                  Bauplan.{" "}
                  <span className="text-brand-300">With You</span> baut mit
                  Ihnen die Maschine.{" "}
                  <span className="text-white">Done for You Lite</span> richtet
                  sie für Sie ein, schult Ihr Team und begleitet die ersten
                  echten Einsätze.
                </p>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Wertschätzend abgegrenzt: Kompakt ist für Selbststeuerer.
                  With You für Mit-Umsetzer. Done for You Lite für Unternehmen,
                  die maximale Entlastung wollen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ S8 · WIRTSCHAFTLICHE RELATIVIERUNG ═══════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32 bg-cream-100 overflow-hidden" aria-labelledby="section-wirtschaftlich">
        <SectionDivider tone="brand" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 500px at 0% 20%, rgba(110,63,163,0.10), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>07 · Wirtschaftliche Einordnung</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-ink-900" id="section-wirtschaftlich">
              Was Unternehmen heute
              <br />
              <span className="text-brand-700">
                für digitale Umsetzung bezahlen.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-ink-800">
              Ein einziges externes Projekt kostet oft mehr als der Aufbau
              Ihrer eigenen digitalen Umsetzungsfähigkeit. Der Unterschied:{" "}
              <span className="text-ink-900 font-semibold">
                Nach dem Projekt ist das Geld weg. Nach unserem Programm bleibt
                die Fähigkeit im Unternehmen.
              </span>
            </p>
            <p className="mt-3 text-xs text-ink-700">
              Folgende Werte sind realistische Orientierungswerte aus dem
              Markt — keine harten Garantien.
            </p>
          </div>

          {/* 9 Cost benchmarks */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COST_BENCHMARKS.map((b, i) => (
              <article
                key={b.title}
                className="rounded-2xl border border-ink-900/10 bg-white p-6 hover:border-brand-600/40 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-brand-700 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg leading-[1.25] text-ink-900 mb-3">
                  {b.title}
                </h3>
                <p className="font-display text-xl sm:text-2xl text-brand-700 tabular-nums leading-tight">
                  {b.range}
                </p>
                {b.recurring && (
                  <p className="mt-3 text-xs text-ink-700 leading-relaxed border-t border-ink-900/10 pt-3">
                    {b.recurring}
                  </p>
                )}
              </article>
            ))}
          </div>

          {/* Value-Shift */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-rose-400/40 bg-gradient-to-b from-rose-50 to-transparent p-7 sm:p-9">
              <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-rose-700 mb-5">
                <PainX />
                Klassisch
              </p>
              <h3 className="font-display text-xl sm:text-2xl text-ink-900 leading-snug">
                Sie kaufen ein einzelnes Projekt.
              </h3>
              <p className="mt-4 text-sm text-ink-800 leading-relaxed">
                Danach brauchen Sie für die nächste Änderung, Variante oder Idee
                oft wieder externe Hilfe. Ergebnis: Wieder briefen. Wieder
                warten. Wieder zahlen.
              </p>
            </div>
            <div className="relative rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-50 to-transparent p-7 sm:p-9">
              <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700 mb-5">
                <GainCheck />
                Mit der Umsetzungsmaschine
              </p>
              <h3 className="font-display text-xl sm:text-2xl text-ink-900 leading-snug">
                Sie bauen eine Fähigkeit auf.
              </h3>
              <p className="mt-4 text-sm text-ink-800 leading-relaxed">
                Ideen schneller strukturieren, digitale Vorstufen selbst
                erzeugen, Dienstleister besser steuern, Ergebnisse schneller
                prüfen, Varianten schneller testen — immer wieder, ohne erneut
                bei null zu starten.
              </p>
            </div>
          </div>

          {/* Kernsatz */}
          <p className="mt-10 font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.25] text-ink-900 max-w-4xl">
            <span className="text-ink-900">
              Eine Agentur baut Ihnen ein Ergebnis.
            </span>
            <br />
            <span className="text-brand-700">
              Wir bauen mit Ihnen die Fähigkeit, immer wieder Ergebnisse
              entstehen zu lassen.
            </span>
          </p>

          {/* Amortisation */}
          <div className="mt-12 rounded-3xl border border-ink-900/10 bg-white p-7 sm:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-700 mb-5">
              Wann sich das amortisiert
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-[14px] sm:text-[15px] text-ink-800 leading-relaxed">
              {[
                "Wenn eine Agenturschleife vermieden wird",
                "Wenn ein App-Projekt erst prototypisiert wird, bevor 25.000 € – 150.000 € fließen",
                "Wenn eine Landingpage nicht komplett extern beauftragt werden muss",
                "Wenn Anforderungen so klar werden, dass Dienstleister weniger Schleifen brauchen",
                "Wenn monatliche Retainer und Abstimmungen reduziert werden",
                "Wenn Entscheidungen schneller fallen und Marktchancen früher getestet werden",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GainCheck className="mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-ink-900/10 text-sm text-ink-700 leading-relaxed">
              Wir reduzieren keine Dienstleister komplett. Wir reduzieren{" "}
              <span className="text-ink-900 font-semibold">
                blinde Abhängigkeit
              </span>{" "}
              und erhöhen{" "}
              <span className="text-ink-900 font-semibold">
                interne Umsetzungsfähigkeit
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ S9 · DETAIL-PRICING ═══════════════════════ */}
      <section
        id="pakete-detail"
        className="relative z-10 py-28 sm:py-36 bg-[#0A0A14] overflow-hidden scroll-mt-24"
       aria-labelledby="section-pakete-detail">
        <SectionDivider tone="brand" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 600px at 50% 0%, rgba(110,63,163,0.18), transparent 70%), radial-gradient(700px 500px at 100% 80%, rgba(110,63,163,0.10), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>08 · Pakete im Detail</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-white" id="section-pakete-detail">
              Zwei Einstiege.
              <br />
              <span className="text-brand-300">
                Drei Umsetzungsgrade. Ein Anschluss.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/85">
              Je nach Förderzugang, Tempo und gewünschter Entlastung wählen Sie
              den passenden Weg. Im Strategietermin klären wir
              gemeinsam, welcher zu Ihnen passt.
            </p>
          </div>

          {/* EINSTIEGE */}
          <div className="mt-16">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-mono text-xs text-brand-300 tabular-nums">01</span>
              <h3 className="font-display text-2xl text-white">
                Einstieg — zuerst Klarheit schaffen
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {ENTRY_OFFERS.map((o) => (
                <article
                  key={o.id}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-9 hover:border-brand-400/40 hover:bg-brand-400/[0.04] transition flex flex-col"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 justify-between mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                      {o.badge}
                    </span>
                    {o.funding && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                        <Sparkles aria-hidden="true" className="w-3 h-3" />
                        {o.funding}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-2xl sm:text-[1.7rem] text-white leading-[1.15]">
                    {o.name}
                  </h4>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    {o.tagline}
                  </p>
                  <p className="mt-6 font-display text-3xl sm:text-4xl text-white tabular-nums">
                    {o.priceLabel}
                  </p>
                  <p className="mt-1 text-xs text-white/65 leading-relaxed">
                    {o.forWho}
                  </p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {o.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                        <GainCheck className="mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`?paket=${o.id}#bewerbung`}
                    className="group mt-7 inline-flex items-center justify-center gap-3 px-6 h-12 rounded-full border border-white/20 text-white text-[13px] font-semibold tracking-wide transition hover:bg-white hover:text-black w-full sm:w-auto"
                  >
                    {o.cta}
                    <ArrowRight aria-hidden="true" className="w-4 h-4 transition group-hover:translate-x-0.5" />
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-5 text-xs text-white/65 leading-relaxed max-w-3xl">
              Die fundierte Unternehmensanamnese ist eine eigenständige
              Beratungsleistung.{" "}
              <span className="text-white/85">
                Ob und wie Sie danach mit uns weiterarbeiten, entscheiden Sie
                frei.
              </span>
            </p>
          </div>

          {/* UMSETZUNGSPAKETE */}
          <div className="mt-20">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-mono text-xs text-brand-300 tabular-nums">02</span>
              <h3 className="font-display text-2xl text-white">
                Umsetzung — drei Tiefen, ein gemeinsames Ergebnis
              </h3>
            </div>

            {/* Value-Ladder Vergleichssatz oberhalb der Karten */}
            <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                Plus-Logik · Was sich von Stufe zu Stufe ändert
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 text-[14px] sm:text-[15px] leading-relaxed">
                <p className="text-white/85">
                  <span className="font-semibold text-white">Kompakt</span> gibt
                  Ihnen den Bauplan.
                </p>
                <p className="text-white/85">
                  <span className="font-semibold text-white">With You</span> baut
                  mit Ihnen die Maschine.
                </p>
                <p className="text-white/85">
                  <span className="font-semibold text-white">
                    Done for You Lite
                  </span>{" "}
                  richtet sie für Sie ein und schult Ihr Team daran.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
              {IMPLEMENTATION_OFFERS.map((o) => {
                const isConcierge = o.id === "donefor-you-lite";
                const isHighlight = o.highlight;
                const features = o.features ?? [];
                const bonusFeatures = o.bonusFeatures ?? [];
                return (
                  <article
                    key={o.id}
                    className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-9 transition ${
                      isConcierge
                        ? "border border-amber-300/40 bg-gradient-to-b from-amber-500/[0.10] via-amber-500/[0.03] to-transparent shadow-[0_0_0_1px_rgba(252,211,77,0.18),0_30px_80px_-40px_rgba(252,211,77,0.35)]"
                        : isHighlight
                          ? "border-2 border-brand-400/70 bg-gradient-to-b from-brand-500/[0.14] to-brand-500/[0.03] shadow-[0_0_0_1px_rgba(155,111,198,0.35),0_30px_80px_-40px_rgba(155,111,198,0.55)]"
                          : "border border-white/10 bg-white/[0.02] hover:border-brand-400/40 hover:bg-brand-400/[0.04]"
                    }`}
                  >
                    {isHighlight && !isConcierge && (
                      <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        Empfohlen
                      </span>
                    )}
                    {isConcierge && (
                      <span className="absolute -top-3 left-5 sm:left-7 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-950">
                        <Sparkles aria-hidden="true" className="w-3 h-3" />
                        <span className="sm:hidden">Concierge</span>
                        <span className="hidden sm:inline">
                          Concierge · maximale Entlastung
                        </span>
                      </span>
                    )}

                    {/* Row 1: category badge */}
                    <div className="flex items-center min-h-[1.875rem]">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                        {o.badge}
                      </span>
                    </div>

                    {/* Row 2: name (Playfair @ 24px wraps "Digitale Umsetzungsmaschine With You" auf 3 Zeilen) */}
                    <h4 className="mt-5 font-display text-xl sm:text-2xl text-white leading-[1.15] break-words hyphens-auto lg:min-h-[5.5rem]">
                      {o.name}
                    </h4>

                    {/* Row 3: tagline (bis 4 Zeilen am unteren lg-Breakpoint) */}
                    <p className="mt-3 text-sm text-white/80 leading-relaxed lg:min-h-[6.5rem]">
                      {o.tagline}
                    </p>

                    {/* Row 4: price + forWho */}
                    <div className="mt-6 lg:min-h-[6.5rem]">
                      <p className="font-display text-3xl sm:text-4xl text-white tabular-nums">
                        {o.priceLabel}
                      </p>
                      <p className="mt-1 text-xs text-white/65 leading-relaxed">
                        {o.forWho}
                      </p>
                    </div>

                    {/* Row 5: plus-logic hint — drei Karten, drei Tonalitäten, identische Höhe */}
                    <div
                      className={`mt-5 flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[12px] font-medium leading-snug lg:min-h-[3.25rem] ${
                        isConcierge
                          ? "border-amber-300/40 bg-amber-500/[0.08] text-amber-100"
                          : isHighlight
                            ? "border-brand-400/40 bg-brand-500/[0.08] text-brand-100"
                            : "border-white/10 bg-white/[0.03] text-white/65"
                      }`}
                    >
                      <span
                        className={`inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                          isConcierge
                            ? "bg-amber-400/30 text-amber-100"
                            : isHighlight
                              ? "bg-brand-400/30 text-brand-100"
                              : "bg-white/10 text-white/65"
                        }`}
                        aria-hidden="true"
                      >
                        {isConcierge || isHighlight ? "+" : "·"}
                      </span>
                      <span>{o.plusLogic}</span>
                    </div>

                    {/* Row 6: features — natürliche Höhe, Listenstart über alle Karten ausgerichtet */}
                    <ul className="mt-7 space-y-4">
                      {features.map((f) => (
                        <li key={f.label} className="grid grid-cols-1 gap-1.5">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300/85">
                            {f.label}
                          </span>
                          <span className="flex items-start gap-2.5 text-sm text-white/90 leading-snug">
                            <GainCheck className="mt-0.5" />
                            <span>{f.value}</span>
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Row 7+8: Bonus + CTA als Block am Karten-Boden geankert (mt-auto) */}
                    <div className="mt-auto pt-8">
                      {bonusFeatures.length > 0 && (
                        <div
                          className={`mb-6 rounded-2xl border p-4 ${
                            isConcierge
                              ? "border-amber-300/30 bg-amber-500/[0.06]"
                              : "border-brand-400/25 bg-brand-500/[0.05]"
                          }`}
                        >
                          <p
                            className={`text-[10px] font-semibold uppercase tracking-[0.18em] mb-3 ${
                              isConcierge ? "text-amber-200" : "text-brand-300"
                            }`}
                          >
                            + Premium-Plus
                          </p>
                          <ul className="space-y-2.5">
                            {bonusFeatures.map((f) => (
                              <li
                                key={f.label}
                                className="grid grid-cols-1 gap-1"
                              >
                                <span
                                  className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
                                    isConcierge
                                      ? "text-amber-200/80"
                                      : "text-brand-200/80"
                                  }`}
                                >
                                  {f.label}
                                </span>
                                <span className="flex items-start gap-2.5 text-[13px] text-white/90 leading-snug">
                                  <GainCheck className="mt-0.5" />
                                  <span>{f.value}</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <a
                        href={`?paket=${o.id}#bewerbung`}
                        className={`group inline-flex items-center justify-center gap-3 px-6 h-12 rounded-full text-[13px] font-semibold tracking-wide transition w-full ${
                          isConcierge
                            ? "bg-amber-400 text-amber-950 hover:bg-amber-300"
                            : isHighlight
                              ? "bg-white text-black hover:bg-brand-200"
                              : "border border-white/20 text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        {o.cta}
                        <ArrowRight aria-hidden="true" className="w-4 h-4 transition group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Klartext-Strip unter den Karten */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-4">
                Im Klartext
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[14px] sm:text-[15px] text-white/85 leading-relaxed">
                <p>
                  <span className="font-semibold text-white">Kompakt</span> ist
                  für Selbststeuerer.
                </p>
                <p>
                  <span className="font-semibold text-white">With You</span> ist
                  für Mit-Umsetzer.
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Done for You Lite
                  </span>{" "}
                  ist für Unternehmen, die maximale Entlastung wollen.
                </p>
              </div>
            </div>
          </div>

          {/* ANSCHLUSS — Premium-Umsetzungsbegleitung */}
          <div className="mt-16">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-mono text-xs text-brand-300 tabular-nums">03</span>
              <h3 className="font-display text-2xl text-white">
                Anschluss — damit die Maschine im Alltag scharf bleibt
              </h3>
            </div>

            <article className="rounded-3xl border border-white/10 bg-gradient-to-r from-brand-500/[0.08] via-white/[0.02] to-transparent p-7 sm:p-9">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                      {SUBSCRIPTION_OFFER.badge}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/65">
                      monatlich kündbar
                    </span>
                  </div>
                  <h4 className="font-display text-2xl sm:text-[1.7rem] text-white leading-[1.15]">
                    {SUBSCRIPTION_OFFER.name}
                  </h4>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    {SUBSCRIPTION_OFFER.tagline}
                  </p>
                  <p className="mt-5 font-display text-3xl sm:text-4xl text-white tabular-nums">
                    {SUBSCRIPTION_OFFER.priceLabel}
                    <span className="text-base sm:text-lg text-white/65 font-sans font-normal ml-1">
                      {SUBSCRIPTION_OFFER.priceSuffix}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-white/65 leading-relaxed">
                    {SUBSCRIPTION_OFFER.forWho}
                  </p>
                </div>
                <ul className="space-y-3">
                  {SUBSCRIPTION_OFFER.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/85 leading-relaxed"
                    >
                      <GainCheck className="mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`?paket=${SUBSCRIPTION_OFFER.id}#bewerbung`}
                className="group mt-7 inline-flex items-center justify-center gap-3 px-6 h-12 rounded-full border border-white/20 text-white text-[13px] font-semibold tracking-wide transition hover:bg-white hover:text-black"
              >
                {SUBSCRIPTION_OFFER.cta}
                <ArrowRight aria-hidden="true" className="w-4 h-4 transition group-hover:translate-x-0.5" />
              </a>
            </article>
          </div>

          {/* CTA-Anker zum Bewerbungsformular */}
          <div className="mt-16 text-center">
            <p className="font-display text-[clamp(1.4rem,2.4vw,1.875rem)] leading-[1.25] text-white max-w-3xl mx-auto">
              Welcher Weg passt zu Ihnen?
              <br />
              <span className="text-brand-300">
                Klären wir im Strategietermin.
              </span>
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#bewerbung"
                className="group inline-flex items-center gap-3 px-7 h-14 rounded-full bg-white text-black text-[14px] font-semibold tracking-wide transition hover:bg-brand-200 hover:text-ink-900"
              >
                Strategietermin sichern
                <ArrowRight aria-hidden="true" className="w-4 h-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ S10 · FAQ ═══════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32 bg-cream-100 overflow-hidden" aria-labelledby="section-faq">
        <SectionDivider tone="brand" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>09 · Häufige Fragen</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-ink-900" id="section-faq">
              Was Sie sich gerade
              <br />
              <span className="text-brand-700">fragen.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-ink-800">
              Direkte Antworten auf die häufigsten Punkte — damit Sie eine
              Entscheidung treffen können, die zu Ihnen passt.
            </p>
          </div>

          <div className="mt-12 max-w-4xl">
            {[
              {
                q: "Muss ich technisch sein?",
                a: "Nein. Sie müssen weder Entwickler noch IT-Spezialist sein. Wichtig sind Branchen- und Kundenkenntnis, ein konkretes Vorhaben und die Bereitschaft, an realen Use Cases mitzuarbeiten. Den technischen Teil bauen wir gemeinsam.",
              },
              {
                q: "Ist die fundierte Unternehmensanamnese verpflichtend für ein Umsetzungspaket?",
                a: "Nein. Die Anamnese ist eine eigenständige Beratungsleistung. Sie schafft Klarheit über Engpässe, Prioritäten und mögliche Handlungsfelder. Eine anschließende Umsetzung mit uns ist möglich, aber nicht verpflichtend — Sie entscheiden frei, ob und wie Sie weiterarbeiten.",
              },
              {
                q: "Was ist der Unterschied zwischen Kompakt, With You und Done for You Lite?",
                a: "Kompakt (1.990 €) gibt Ihnen den Bauplan — für Selbststeuerer, die anschließend selbst weiterbauen. With You (8.500 €) baut die Maschine gemeinsam mit Ihnen auf — für Mit-Umsetzer, die wirklich tief einsteigen wollen. Done for You Lite (24.900 €) richtet die Maschine für Sie ein, schult Ihr Team und begleitet die ersten echten Einsätze — für Unternehmen, die maximale Entlastung wollen.",
              },
              {
                q: "Was bekomme ich bei Done for You Lite konkret eingerichtet?",
                a: "Voller Umfang aus With You plus: Einrichtung notwendiger Zugänge, Verbindung relevanter Accounts, Erstjustierung der Arbeitslogik, Anlage erster Projektdaten und Prompt-Strukturen, Ausrichtung auf Ihren konkreten Use Case und Übergabe eines benutzbaren Startsystems. Zusätzlich enthalten: 2 Monate Premium-Umsetzungsbegleitung (1 × 90 min 1:1 pro Monat) und 2 exklusive 1:1-Team-Schulungswochen am echten System.",
              },
              {
                q: "Was passiert nach dem Programm?",
                a: "Sie haben ein benutzbares Grundsystem, das Sie eigenständig nutzen können. Optional: die Premium-Umsetzungsbegleitung für 999 €/Monat (90 min 1:1, monatlich kündbar) mit Community-Zugang, Messenger-Gruppe und monatlichem Gruppen-Call — für alle, die nach dem Programm dranbleiben wollen.",
              },
              {
                q: "Ersetzt das Agenturen und Dienstleister?",
                a: "Nein, und das ist auch nicht das Ziel. Wir reduzieren blinde Abhängigkeit und erhöhen Ihre interne Umsetzungsfähigkeit. Sie können Dienstleister präziser briefen, Vorstufen selbst erzeugen und Varianten schneller testen — Agenturen werden für die richtigen Dinge eingesetzt, nicht für Schleifen.",
              },
              {
                q: "Ist das auch für Angestellte und Fachkräfte geeignet?",
                a: "Ja. Das Programm funktioniert für jeden Erwerbskontext, in dem Ideen schneller in sichtbare Ergebnisse fließen sollen. Die Förderlogik der Anamnese richtet sich an Unternehmen — die Umsetzungspakete selbst sind für Unternehmen, Selbstständige, Fachkräfte, Angestellte und Teams gleichermaßen wirksam.",
              },
              {
                q: "Wie vertraulich sind sensible Daten?",
                a: "Schutz-, Zugriffs- und Schlüssellogik werden bewusst Teil des Aufbaus — nicht nachgereicht. Bei Done for You Lite arbeiten wir in den Team-Schulungswochen 1:1 mit Ihrem Unternehmen, nicht in der Gruppe, sodass auch reale Daten, Prozesse, Geschäftsgeheimnisse und Marktvorteile vertraulich behandelt werden können.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group border-t border-ink-900/10 last:border-b py-6 cursor-pointer"
              >
                <summary className="flex items-start justify-between gap-6 list-none">
                  <span className="font-display text-lg text-ink-900 leading-snug pr-4">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-7 h-7 rounded-full border border-ink-900/20 flex items-center justify-center text-ink-800 transition group-open:bg-brand-500 group-open:border-brand-600 group-open:text-ink-900 group-open:rotate-45 mt-0.5"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[15px] text-ink-800 leading-relaxed max-w-3xl">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ S11 · FINAL CTA ═══════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32 bg-white overflow-hidden" aria-labelledby="section-final-cta">
        <SectionDivider tone="brand" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 700px at 50% 50%, rgba(110,63,163,0.28), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 text-center">
          <Eyebrow>Letzter Schritt</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-ink-900 max-w-5xl mx-auto" id="section-final-cta">
            Wenn Sie Ihr Business
            <br />
            nicht länger über Warteschleifen steuern wollen,
          </h2>
          <p className="mt-6 font-display italic text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.15] text-brand-700 max-w-4xl mx-auto">
            starten Sie mit Klarheit.
          </p>

          <p className="mt-8 max-w-2xl mx-auto text-[15px] sm:text-base text-ink-800 leading-relaxed">
            Strategietermin sichern, gemeinsam den passenden Weg klären — und
            danach Ihre eigene Umsetzungsmaschine aufbauen.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#bewerbung"
              className="group inline-flex items-center gap-3 px-8 h-14 rounded-full bg-ink-900 text-white text-[14px] font-semibold tracking-wide transition hover:bg-brand-700"
            >
              Strategietermin sichern
              <ArrowRight aria-hidden="true" className="w-4 h-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pakete-detail"
              className="inline-flex items-center gap-3 px-7 h-14 rounded-full border border-ink-900/20 text-ink-900 text-[14px] font-semibold tracking-wide transition hover:bg-ink-900/5"
            >
              Pakete vergleichen
            </a>
          </div>

          <p className="mt-6 text-xs text-ink-800">
            Anamnese · Kompakt · With You · Done for You Lite · Premium-Begleitung
          </p>
        </div>
      </section>

      {/* ═══════════════════════ APPLY FORM ═══════════════════════ */}
      <section
        id="bewerbung"
        className="relative z-10 py-24 sm:py-32 bg-[#050508] overflow-hidden scroll-mt-24"
       aria-labelledby="section-bewerbung">
        <SectionDivider tone="brand" />

        {/* Spotlight glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 700px at 50% 0%, rgba(110,63,163,0.30), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          {/* Hero header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-200">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse" />
              Strategietermin sichern
            </span>
            <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white" id="section-bewerbung">
              Klärungsgespräch.
              <br />
              <span className="text-brand-300">Zwei Wege — Sie wählen.</span>
            </h2>
            <p className="mt-6 text-[15px] sm:text-base text-white/85 leading-relaxed">
              Quickcheck mit Paket-Auswahl und Antwort innerhalb 24 Stunden — oder
              direkt einen Strategietermin im Kalender greifen.
            </p>
          </div>

          {/* Step-Indicator */}
          <div className="mt-14 max-w-3xl mx-auto">
            <ol className="flex items-stretch justify-between gap-2 sm:gap-4">
              {[
                { n: "01", t: "Quickcheck oder Termin" },
                { n: "02", t: "Strategiegespräch (15–30 min)" },
                { n: "03", t: "Passender Weg & Start" },
              ].map((s, i, arr) => (
                <li
                  key={s.n}
                  className="flex-1 flex items-center gap-2 sm:gap-4"
                >
                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 sm:px-5 py-3 sm:py-4">
                    <p className="font-mono text-[10px] text-brand-300 tabular-nums tracking-[0.2em]">
                      {s.n}
                    </p>
                    <p className="mt-1 text-[12px] sm:text-sm font-semibold text-white leading-tight">
                      {s.t}
                    </p>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden sm:block h-px w-6 bg-gradient-to-r from-brand-400/60 to-transparent"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Two lanes — Pfad A (Quickcheck, primary) clearly above Pfad B (Termin, alternative) */}
          <div className="mt-16 space-y-10 sm:space-y-12">
            {/* PFAD A — QUICKCHECK · HERO (stacked: header on top, form full-width below) */}
            <Reveal as="article" className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-6 -inset-y-10 hidden lg:block"
                style={{
                  background:
                    "radial-gradient(900px 500px at 50% 50%, rgba(110,63,163,0.18), transparent 70%)",
                }}
              />
              {/* Floating recommendation tag */}
              <div className="relative flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/50 bg-brand-500/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-200 shadow-[0_8px_24px_-12px_rgba(110,63,163,0.6)]">
                  <Sparkles aria-hidden="true" className="h-3 w-3" />
                  Empfohlen · So starten 9 von 10
                </span>
              </div>

              <div className="ring-glow-brand relative mt-5 rounded-[2.25rem] p-[1.5px]">
                <div className="relative rounded-[2.18rem] bg-[#0A0A14]/95 backdrop-blur-sm overflow-hidden">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(900px 460px at 50% 0%, rgba(110,63,163,0.22), transparent 70%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60"
                  />

                  <div className="relative p-6 sm:p-9 lg:p-12">
                    {/* HEADER STRIP — full width on top */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_auto] gap-7 lg:gap-12 items-end">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                            Pfad A · Quickcheck
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] tabular-nums text-brand-200">
                            ~90 Sek.
                          </span>
                        </div>

                        <h3 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-white">
                          Quickcheck.{" "}
                          <span className="text-brand-300">
                            Antwort innerhalb 24&nbsp;h.
                          </span>
                        </h3>

                        <p className="mt-4 max-w-2xl text-[15px] sm:text-base text-white/85 leading-relaxed">
                          Vier kurze Fragen — Paket-Tendenz, Ausgangslage,
                          Bremser, erstes Vorhaben — plus Kontaktdaten. Wir
                          melden uns werktags innerhalb von 24&nbsp;Stunden für ein
                          15–30-minütiges Strategiegespräch.
                        </p>
                      </div>

                      {/* Trust pills column on lg+, inline below paragraph on smaller */}
                      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-2.5 lg:min-w-[260px]">
                        {[
                          "Vorab abgestimmt",
                          "Kein Verkaufsdruck",
                          "Antwort werktags < 24 h",
                        ].map((line) => (
                          <li
                            key={line}
                            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[12.5px] text-white/85"
                          >
                            <GainCheck />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DIVIDER */}
                    <div
                      aria-hidden
                      className="my-8 lg:my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    />

                    {/* FORM — full width below header */}
                    <div className="relative">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-1 rounded-[1.85rem] bg-gradient-to-br from-brand-400/15 via-transparent to-transparent blur-2xl"
                      />
                      <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-7 lg:p-9 backdrop-blur-sm">
                        <ApplyForm layout="wide" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* DIVIDER — "oder" */}
            <div
              aria-hidden
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#050508] px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.32em] text-white/60">
                <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
                oder
                <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
              </span>
            </div>

            {/* PFAD B — TIDYCAL · SECONDARY (zentriert, kompakt — TidyCal rendert kompakter in moderater Breite) */}
            <Reveal as="article" delay={80} className="relative mx-auto w-full max-w-3xl">
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.025] backdrop-blur-sm overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(540px 300px at 100% 0%, rgba(16,185,129,0.10), transparent 70%)",
                  }}
                />
                <div className="relative p-6 sm:p-8">
                  {/* HEADER STRIP — kompakt */}
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
                      <CalendarClock aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                        Pfad B · Direkt buchen
                      </span>
                      <h3 className="mt-3 font-display text-xl sm:text-2xl leading-[1.2] text-white">
                        Schon entschieden?{" "}
                        <span className="text-emerald-300">
                          Slot direkt greifen.
                        </span>
                      </h3>
                      <p className="mt-2 text-sm text-white/75 leading-relaxed">
                        Live-Kalender · Termin direkt in Ihrem Kalender bestätigt
                        · Buchung über{" "}
                        <span className="text-emerald-300 font-semibold">eskalator.ag</span>.
                      </p>
                    </div>
                  </div>

                  {/* CALENDAR — fixed-height embed, scrollt intern */}
                  <div className="mt-7 rounded-2xl border border-white/10 bg-white p-3 sm:p-4">
                    <TidyCalEmbed />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Trust strip below */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/85">
            <span className="inline-flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-brand-300" />
              Unverbindlich
            </span>
            <span className="text-white/85">·</span>
            <span className="inline-flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-brand-300" />
              Kein Verkaufsdruck
            </span>
            <span className="text-white/85">·</span>
            <span className="inline-flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-brand-300" />
              Antwort werktags &lt; 24 h
            </span>
            <span className="text-white/85">·</span>
            <span className="inline-flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-brand-300" />
              Begrenzte Plätze pro Durchgang
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
