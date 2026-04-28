import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
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
import { ArrowRight, Check, X, Sparkles } from "lucide-react";

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

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digitale Umsetzungsmaschine",
          description:
            "Programm- und Beratungsleistungen der KI Bäckerei zum Aufbau einer digitalen Umsetzungsmaschine: aus Ideen, Sprachnachrichten und Anforderungen entstehen sichtbare Ergebnisse — schneller, eigenständiger und mit weniger Dienstleisterabhängigkeit.",
          provider: {
            "@type": "Organization",
            name: "KI Bäckerei",
            url: SITE_URL,
          },
          areaServed: "DE",
          offers: [
            {
              "@type": "Offer",
              name: "Fundierte Unternehmensanamnese",
              price: "3500",
              priceCurrency: "EUR",
              url: SITE_URL,
              category: "Einstieg · Beratung",
            },
            {
              "@type": "Offer",
              name: "Kompakte Einstiegsanalyse",
              price: "990",
              priceCurrency: "EUR",
              url: SITE_URL,
              category: "Einstieg · Schlank",
            },
            {
              "@type": "Offer",
              name: "Umsetzungsfabrik Kompakt",
              price: "1990",
              priceCurrency: "EUR",
              url: SITE_URL,
              category: "Umsetzung · Selbststeuerer",
            },
            {
              "@type": "Offer",
              name: "Digitale Umsetzungsmaschine With You",
              price: "8500",
              priceCurrency: "EUR",
              url: SITE_URL,
              category: "Umsetzung · Mit-Umsetzer",
            },
            {
              "@type": "Offer",
              name: "Done for You Lite",
              price: "24900",
              priceCurrency: "EUR",
              url: SITE_URL,
              category: "Umsetzung · Concierge",
            },
            {
              "@type": "Offer",
              name: "Premium-Umsetzungsbegleitung",
              price: "999",
              priceCurrency: "EUR",
              url: SITE_URL,
              category: "Anschluss · monatlich",
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Ist das auch etwas für mich, wenn ich nicht technisch bin?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Sie müssen weder Entwickler noch IT-Spezialist sein. Wichtig sind Branchen- und Kundenkenntnis, ein konkretes Vorhaben und die Bereitschaft, 4 Wochen mitzubauen. Den technischen Teil nehmen wir gemeinsam.",
              },
            },
            {
              "@type": "Question",
              name: "Funktioniert das auch für Angestellte oder nur für Unternehmer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Beides. Das Programm ist genauso auf Angestellte und Fachkräfte zugeschnitten. Die Förderlogik gilt für Unternehmen, die Programmlogik selbst funktioniert für jeden Erwerbskontext.",
              },
            },
            {
              "@type": "Question",
              name: "Muss ich schon eine konkrete Idee haben?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Eine grobe Richtung reicht. Eine Seite, ein Funnel, ein Prototyp, ein Prozess oder ein neues Angebot — die Schärfung passiert in den ersten Tagen, nicht vor dem Programm.",
              },
            },
            {
              "@type": "Question",
              name: "Wie viel Zeit muss ich pro Woche einplanen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pflicht sind die 8 Live-Termine: 4 × 60 min Impuls + 4 × 90 min Umsetzung, also rund 3 Stunden pro Woche live. Zwischen den Calls empfohlen: 2–4 Stunden pro Woche.",
              },
            },
            {
              "@type": "Question",
              name: "Bekomme ich ein System übergeben oder baue ich es selbst mit auf?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sie bauen es mit auf — bewusst. Keine Blackbox, kein Anbieter-Lock-in. Sie verstehen jeden Baustein und können danach eigenständig weiterbauen.",
              },
            },
            {
              "@type": "Question",
              name: "Ist das nur für Marketing oder auch für Prozesse, Angebote, Prototypen und digitale Leistungen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Alles davon. Angebotsseiten, Vertriebsstrecken, Newsletter, Prototypen, App-Vorstufen, interne Prozesse, Briefings und Wissensstrukturen — überall dort, wo Ideen digital sichtbar oder nutzbar werden müssen.",
              },
            },
            {
              "@type": "Question",
              name: "Wie sicher ist das Ganze?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Schutz-, Zugriffs- und Schlüssellogik werden bewusst Teil des Aufbaus. Ihr System ist auf Ihre realen Anwendungsfälle ausgerichtet, mit klaren Zugriffsrechten und sauberen Datenflüssen.",
              },
            },
            {
              "@type": "Question",
              name: "Was passiert nach den 4 Wochen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sie haben ein arbeitsfähiges Grundsystem und können es eigenständig nutzen. Optional: Umsetzungswerkstatt 999 €/Monat (monatlich kündbar) mit 1:1-Slot, Community und Gruppen-Call. Plus Bonus-Follow-up ca. 4 Wochen nach Programmende ohne Aufpreis.",
              },
            },
            {
              "@type": "Question",
              name: "Warum nicht einfach Agentur, Freelancer oder internes Team?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Agentur und Freelancer enden pro Auftrag — Sie zahlen, bekommen ein Artefakt, fangen beim nächsten Vorhaben wieder bei null an. Das Zweitsystem ist Infrastruktur, nicht Auftrag. Es bleibt bei Ihnen, skaliert mit Ihrem Tempo.",
              },
            },
            {
              "@type": "Question",
              name: "Warum ist das mehr als ein normaler KI-Kurs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ein Kurs gibt Ihnen Wissen. Sie bauen hier ein arbeitsfähiges System. Am Ende der 4 Wochen haben Sie nicht Notizen, sondern eine Grundlage, die Sie ab Tag 29 produktiv einsetzen.",
              },
            },
          ],
        }}
      />

      {/* ═══════════════════════ S1 · HERO ═══════════════════════ */}
      <section className="relative z-10 min-h-[100svh] flex flex-col bg-[#07070C] overflow-hidden">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-10">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              Für Unternehmen · Selbstständige · Fachkräfte · Angestellte · Teams
            </span>
          </div>

          {/* Hero headline */}
          <h1 className="font-display leading-[0.95] tracking-[-0.02em] text-white">
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
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
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
      <section className="relative z-10 py-28 sm:py-36 bg-cream-100 overflow-hidden">
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
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-ink-900">
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
      <section className="relative z-10 py-28 sm:py-36 bg-[#0A0A14] overflow-hidden">
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
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
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
            <div className="rounded-3xl border border-rose-400/30 bg-gradient-to-b from-rose-500/[0.05] to-transparent p-8 sm:p-10">
              <div className="flex items-center justify-between mb-8">
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
                    <div className="flex-1 flex items-baseline justify-between gap-3 border-b border-rose-400/15 pb-3">
                      <span className="font-display text-lg text-white/85 line-through decoration-rose-400/70 decoration-1">
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
            <div className="relative rounded-3xl border border-emerald-400/35 bg-gradient-to-b from-emerald-500/[0.06] to-transparent p-8 sm:p-10 overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(400px 300px at 80% 0%, rgba(16,185,129,0.18), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
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
                      <div className="flex-1 flex items-baseline justify-between gap-3 border-b border-emerald-400/15 pb-3">
                        <span className="font-display text-lg text-white">
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
      >
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
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Erst Klarheit.
              <br />
              <span className="text-brand-300">Dann der passende Umsetzungsweg.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/85">
              Es gibt nicht „den einen Kurs". Es gibt zwei Einstiege und drei
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
                      <Sparkles className="w-3.5 h-3.5" />
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

          {/* Umsetzungspakete */}
          <div className="mt-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 mb-5">
              Umsetzungswege · drei Tiefen
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {IMPLEMENTATION_OFFERS.map((o) => (
                <article
                  key={o.id}
                  className={`relative rounded-2xl border p-6 sm:p-7 transition ${
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                      {o.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-white leading-snug">
                    {o.shortName}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    {o.tagline}
                  </p>
                  <p className="mt-5 font-display text-2xl text-white tabular-nums">
                    {o.priceLabel}
                  </p>
                  <p className="mt-1 text-xs text-white/70 leading-relaxed">
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
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
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
      <section className="relative z-10 py-24 sm:py-32 bg-[#0B0B16] overflow-hidden">
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
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-white">
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
      <section className="relative z-10 py-24 sm:py-32 bg-cream-100 overflow-hidden">
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
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-ink-900">
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

          {/* Outcome grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                className="rounded-2xl border border-ink-900/10 bg-white p-6 hover:border-brand-600/40 hover:bg-brand-50 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-brand-700 tabular-nums">
                    {f.num}
                  </span>
                </div>
                <h3 className="font-display text-lg leading-[1.2] text-ink-900 mb-3">
                  {f.head}
                </h3>
                <p className="text-sm text-ink-800 leading-relaxed">
                  {f.sub}
                </p>
              </article>
            ))}
          </div>

          {/* Closer */}
          <p className="mt-14 font-display text-[clamp(1.4rem,2.4vw,1.875rem)] leading-[1.25] text-ink-900 max-w-4xl">
            Nicht in der Reihenfolge „erst alles klären, dann alles bauen" —{" "}
            <span className="text-brand-700">
              parallel, sichtbar, iterativ.
            </span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════ S7 · WAS GEMEINSAM ENTSTEHT ═══════════════════════ */}
      <section className="relative z-10 py-24 sm:py-32 bg-[#0A0A14] overflow-hidden">
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
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-white">
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
                sub: "Nicht „nach dem Programm sehen wir weiter", sondern: ab Tag 29 produktiv einsetzbar.",
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
      <section className="relative z-10 py-24 sm:py-32 bg-cream-100 overflow-hidden">
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
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-ink-900">
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

      {/* ═══════════════════════ A11 · PREISARCHITEKTUR ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 bg-[#0A0A14] overflow-hidden">
        <SectionDivider tone="brand" />
        {/* Spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 500px at 50% 20%, rgba(110,63,163,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>10 · Investment</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Eine Investition.
              <br />
              <span className="text-brand-300">Eine Infrastruktur danach.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85">
              Sie zahlen einmal — und besitzen anschließend eine Grundlage, die
              Sie jeden Monat einsetzen. Plus zwei optionale Einstiegswege
              davor, je nachdem, wo Sie heute stehen.
            </p>
          </div>

          {/* MAIN ANCHOR — Hauptprogramm */}
          <div className="mt-20 relative rounded-[2rem] border border-brand-400/40 bg-gradient-to-br from-brand-500/[0.12] via-brand-500/[0.04] to-transparent p-1">
            <div className="rounded-[1.85rem] bg-[#0A0A12]/80 backdrop-blur-sm p-8 sm:p-12 lg:p-14">
              {/* Top ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Hauptprogramm · Einführungspreis
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/85 font-semibold">
                  Begrenzte Plätze · Kleingruppe
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Title + stack */}
                <div className="lg:col-span-7">
                  <h3 className="font-display italic text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-white">
                    Das Zweitsystem.
                  </h3>
                  <p className="mt-3 font-display text-xl sm:text-2xl text-white/85">
                    4 Wochen · 8 Live-Termine · gemeinsamer Aufbau
                  </p>

                  <ul className="mt-10 space-y-4">
                    {[
                      "4 Wochen Live-Begleitung in der Kleingruppe",
                      "8 Live-Termine: 4 × Impuls (60 min) + 4 × Umsetzung (90 min)",
                      "Co-Build Ihres persönlichen Zweitsystems — mit Bauplan",
                      "Schutz-, Zugriffs- und Use-Case-Architektur",
                      "Echte Live-Arbeit an Ihren realen Vorhaben",
                      "Bonus: Follow-up-Session ca. 4 Wochen nach Programmende",
                      "Sie behalten das System nach den 4 Wochen — komplett",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[15px] sm:text-base text-white/85 leading-relaxed"
                      >
                        <Check className="w-4 h-4 mt-1.5 text-brand-300 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Price + CTA */}
                <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10 flex flex-col">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 mb-3">
                    Ihr Investment
                  </p>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-display text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none text-white">
                      1.990&nbsp;€
                    </span>
                    <span className="text-sm text-white/85">
                      netto
                    </span>
                  </div>
                  <p className="text-sm text-white/90">
                    statt{" "}
                    <span className="line-through decoration-white/30">
                      2.490&nbsp;€
                    </span>{" "}
                    · Einführungspreis aktiv
                  </p>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300 mb-3">
                      Was passiert nach Klick
                    </p>
                    <ol className="space-y-2 text-sm text-white/85">
                      <li className="flex gap-2">
                        <span className="text-brand-300">01</span> 60-Sekunden-Quickcheck
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-300">02</span> Persönliches Erstgespräch (15–30 min)
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-300">03</span> Platz im nächsten Durchgang
                      </li>
                    </ol>
                  </div>

                  <a
                    href="#bewerbung"
                    className="group mt-8 inline-flex items-center justify-center gap-3 px-7 h-14 rounded-full bg-white text-black text-[14px] font-semibold tracking-wide transition hover:bg-brand-200 hover:text-ink-900 w-full"
                  >
                    Platz sichern
                    <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <p className="mt-4 text-xs text-white/85 text-center">
                    Unverbindlich · keine Vorauszahlung im Quickcheck
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional pre-paths */}
          <div className="mt-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 mb-6">
              Optional davor — zwei Einstiegswege
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Beratungsanamnese */}
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 hover:border-brand-400/40 transition flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    Für Unternehmen
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300">
                    Bis zu 80 % förderbar
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-[1.7rem] leading-[1.15] text-white mb-3">
                  Beratungsanamnese
                </h3>
                <p className="text-sm text-white/80 mb-6">
                  Geförderte Unternehmensberatung als fundierte Anamnese vor dem
                  Hauptprogramm.
                </p>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-[2.75rem] font-semibold text-white leading-none">
                    3.500&nbsp;€
                  </span>
                  <span className="text-sm text-white/85">netto</span>
                </div>
                <p className="text-xs text-white/85 mb-8">
                  Bis zu 80 % der Kosten können nach Umsetzung erstattet werden
                  (förderprogrammabhängig).
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Aufnahme von Status quo und bisherigen Bemühungen",
                    "Erstanalyse der konkreten Möglichkeiten",
                    "Bewertung der wichtigsten Bereiche und Prioritäten",
                    "Fundierte Grundlage für die anschließende Umsetzung",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/90 leading-relaxed"
                    >
                      <Check className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#bewerbung"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200 font-semibold"
                >
                  Beratungsanamnese anfragen{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>

              {/* Einstiegsanalyse */}
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 hover:border-brand-400/40 transition flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                    Für Selbstständige & Privat
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300">
                    Stipendium bis 500 €
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-[1.7rem] leading-[1.15] text-white mb-3">
                  Einstiegsanalyse
                </h3>
                <p className="text-sm text-white/80 mb-6">
                  Schlanke, kompakte Standortbestimmung. Verlangt mehr eigenen
                  Einsatz, schafft schnellen Klarstartpunkt.
                </p>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-[2.75rem] font-semibold text-white leading-none">
                    990&nbsp;€
                  </span>
                  <span className="text-sm text-white/85">netto</span>
                </div>
                <p className="text-xs text-white/85 mb-8">
                  Stipendium von bis zu 500 € möglich · effektiv ab 490 €
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Klärung Ihrer Ausgangslage",
                    "Identifikation Ihrer realen Anwendungsfelder",
                    "Konkreter Startpunkt und Priorisierung",
                    "Klare Empfehlung zum Einstieg ins Hauptprogramm",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/90 leading-relaxed"
                    >
                      <Check className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#bewerbung"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200 font-semibold"
                >
                  Einstiegsanalyse anfragen{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            </div>
          </div>

          {/* Anti-cost framing */}
          <div className="mt-16 max-w-3xl">
            <p className="font-display text-xl sm:text-2xl leading-[1.3] text-white/85">
              Zum Vergleich: ein einzelner Agentur-Auftrag für eine
              Angebotsseite, einen Funnel oder einen Prototyp liegt regelmäßig
              jenseits dieser Investition —{" "}
              <span className="text-brand-300">und endet, wenn er endet.</span>{" "}
              Das Zweitsystem endet nicht. Es bleibt.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ A12 · UMSETZUNGSWERKSTATT (CONTINUATION) ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 bg-cream-100 overflow-hidden">
        <SectionDivider tone="brand" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>11 · Nach dem Programm — wenn Sie wollen</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-ink-900">
              Die Umsetzungswerkstatt.
              <br />
              <span className="text-brand-700">
                Damit Sie nicht in alte Muster zurückfallen.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-800">
              Optional, kein Muss. Für alle, die nach den 4 Wochen weiterbauen
              wollen — an echten Themen, mit Sparrings-Partner, ohne wieder
              alleine im Wartezimmer zu sitzen.
            </p>
          </div>

          {/* Continuation card */}
          <div className="mt-20 rounded-[2rem] border border-ink-900/10 bg-gradient-to-br from-white/[0.04] to-transparent p-1">
            <div className="rounded-[1.85rem] bg-white p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: name + features */}
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-ink-900/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-800 mb-6">
                    Continuation · Monatlich kündbar
                  </span>
                  <h3 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] text-ink-900">
                    Umsetzungswerkstatt &amp; Community
                  </h3>
                  <p className="mt-4 text-[15px] text-ink-800 leading-relaxed max-w-xl">
                    Ein Live-1:1-Slot pro Monat, eine ruhige Community im
                    Hintergrund — und ein monatlicher Gruppen-Call, der den
                    Kopf an den Markt anschließt.
                  </p>

                  <ul className="mt-10 space-y-4">
                    {[
                      {
                        head: "1:1 Live-Umsetzungs-Call (bis 2 Stunden) pro Monat",
                        sub: "Arbeit am konkreten Problem, Prioritäten, Technik und Marktvorteil. Review echter Ergebnisse, direkte Optimierung.",
                      },
                      {
                        head: "Community-Zugang mit gemeinsamer Messenger-Gruppe",
                        sub: "Updates, kurze Impulse, schnelle Sparring-Fragen — ohne Lärm, ohne Zwang.",
                      },
                      {
                        head: "Bonus: monatlicher Gruppen-Call",
                        sub: "Digitales Mindset, Trends und Neuerungen — eingeordnet, nicht hinterhergehetzt.",
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 border-t border-ink-900/10 pt-4 first:border-0 first:pt-0"
                      >
                        <Check className="w-4 h-4 mt-1 text-brand-700 flex-shrink-0" />
                        <div>
                          <p className="text-[15px] font-semibold text-ink-900 leading-snug">
                            {item.head}
                          </p>
                          <p className="mt-1 text-sm text-ink-800 leading-relaxed">
                            {item.sub}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: price + framing */}
                <div className="lg:col-span-5 lg:border-l lg:border-ink-900/10 lg:pl-10 flex flex-col">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-800 mb-3">
                    Optional — nur wenn Sie weiterbauen wollen
                  </p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-none text-ink-900">
                      999&nbsp;€
                    </span>
                    <span className="text-sm text-ink-800">
                      / Monat netto
                    </span>
                  </div>
                  <p className="text-sm text-ink-800 mb-8">
                    Monatlich kündbar · ab Programm-Ende möglich
                  </p>

                  <div className="rounded-2xl border border-brand-600/25 bg-brand-500/[0.06] p-6">
                    <p className="font-display text-lg sm:text-xl leading-[1.25] text-ink-900">
                      Sie bleiben nach dem Grundprogramm{" "}
                      <span className="text-brand-700">nicht allein.</span>
                    </p>
                    <p className="mt-3 text-sm text-ink-800 leading-relaxed">
                      Sie entwickeln Ihre Struktur an echten Themen weiter — und
                      vermeiden den stillen Rückfall in alte Muster aus Warten,
                      Rätseln und Reibung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Soft note */}
          <p className="mt-12 text-sm text-ink-800 text-center max-w-2xl mx-auto">
            Kein Druck, kein Cross-Sell. Wer nach 4 Wochen genug hat, hat genug.
            Wer weiter will, hat einen Ort dafür.
          </p>
        </div>
      </section>

      {/* ═══════════════════════ A13 · WAS UNS ANDERS MACHT ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 bg-[#0B0B16] overflow-hidden">
        <SectionDivider tone="emerald" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 500px at 100% 100%, rgba(16,185,129,0.14), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>12 · Was uns anders macht</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Kein Tool-Verkauf.
              <br />
              <span className="text-brand-300">Kein Theorie-Kurs.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85">
              Die KI Bäckerei baut mit Ihnen ein arbeitsfähiges Zweitsystem auf —
              live, gemeinsam, mit vollem Bauplan. Was Sie bekommen, ist keine
              Schulung und keine Demo. Es ist eine Infrastruktur, die nach den
              4 Wochen weiterläuft.
            </p>
          </div>

          {/* Substanz-Pillars */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {[
              {
                eyebrow: "Live · Klein",
                head: "Sie sitzen nicht in einer Aufzeichnung.",
                body: "Maximal kleine Gruppe. Live-Arbeit an Ihrem realen Vorhaben. Direktes Sparring statt Selbstlern-Modul.",
              },
              {
                eyebrow: "Co-Build",
                head: "Sie bauen mit — nicht zugucken.",
                body: "Jeder Baustein entsteht sichtbar mit Ihnen. Kein Blackbox-Produkt. Sie verstehen, was Sie nutzen.",
              },
              {
                eyebrow: "Bleibend",
                head: "Sie behalten das System.",
                body: "Nach den 4 Wochen gehört Ihnen die Infrastruktur. Inklusive Bauplan. Ohne Anbieter-Lock-in.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-[#0A0A12] p-10 sm:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-4">
                  {p.eyebrow}
                </p>
                <h3 className="font-display text-xl sm:text-[1.5rem] leading-[1.2] text-white mb-5">
                  {p.head}
                </h3>
                <p className="text-[15px] text-white/85 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* What we promise vs. what we don't claim */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* What we promise */}
            <div className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/[0.08] to-transparent p-8 sm:p-10">
              <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300 mb-6">
                <GainCheck />
                Was wir versprechen
              </p>
              <ul className="space-y-4">
                {[
                  "Sie bauen Ihr Zweitsystem mit auf — nicht hinter verschlossenen Türen.",
                  "Sie verstehen den Bauplan und können danach selbst weiterbauen.",
                  "Sicherheits-, Schutz- und Zugriffslogik sind Teil des Aufbaus, nicht Zugabe.",
                  "Live-Begleitung in der Kleingruppe, kein Selbstlernkurs.",
                  "4 Wochen lang volle Aufmerksamkeit — keine Massenabfertigung.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-white leading-relaxed"
                  >
                    <GainCheck className="mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we don't claim */}
            <div className="rounded-3xl border border-rose-500/25 bg-gradient-to-br from-rose-500/[0.06] to-transparent p-8 sm:p-10">
              <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-rose-300 mb-6">
                <PainX />
                Was wir nicht behaupten
              </p>
              <ul className="space-y-4">
                {[
                  "Keine erfundenen Testimonials oder geschönten Cases.",
                  "Keine versprochenen Umsatzsprünge oder Garantie-Zahlen.",
                  "Kein „in 7 Tagen alles automatisiert“-Märchen.",
                  "Kein „KI ersetzt Ihr Urteilsvermögen“-Pitch.",
                  "Kein „Sie müssen nichts mehr selbst tun“ — Sie bleiben der Fachkopf.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-white/90 leading-relaxed"
                  >
                    <PainX className="mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Closing line */}
          <p className="mt-20 font-display text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.3] text-white/80 max-w-4xl">
            Vertrauen entsteht nicht durch Schaufenster-Logos.
            <br />
            <span className="text-brand-300">
              Sondern durch Klarheit darüber, was Sie bekommen — und was nicht.
            </span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════ A14 · FAQ ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 bg-cream-100 overflow-hidden">
        <SectionDivider tone="brand" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>13 · Häufige Fragen</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-ink-900">
              Was Sie sich gerade
              <br />
              <span className="text-brand-700">fragen.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-800">
              Ohne Marketing-Antworten. Wir gehen die häufigsten Punkte direkt
              an — damit Sie eine Entscheidung treffen können, die zu Ihnen
              passt.
            </p>
          </div>

          <div className="mt-16 max-w-4xl">
            {[
              {
                q: "Ist das auch etwas für mich, wenn ich nicht technisch bin?",
                a: "Ja, ausdrücklich. Sie müssen weder Entwickler noch IT-Spezialist sein. Wichtig sind Branchen- und Kundenkenntnis, ein konkretes Vorhaben und die Bereitschaft, 4 Wochen mitzubauen. Den technischen Teil nehmen wir gemeinsam.",
              },
              {
                q: "Funktioniert das auch für Angestellte oder nur für Unternehmer?",
                a: "Beides. Das Programm ist genauso auf Angestellte und Fachkräfte zugeschnitten, die in ihrer Rolle schneller, wirksamer und sichtbarer werden wollen. Die Förderlogik (Beratungsanamnese mit bis zu 80 % Förderung) gilt für Unternehmen — die Programmlogik selbst funktioniert für jeden Erwerbskontext.",
              },
              {
                q: "Muss ich schon eine konkrete Idee haben?",
                a: "Eine grobe Richtung reicht. Eine Seite, ein Funnel, ein Prototyp, eine Prozesskette, ein neues Angebot — irgendetwas Reales, an dem wir gemeinsam arbeiten können. Die Schärfung passiert in den ersten Tagen, nicht vor dem Programm.",
              },
              {
                q: "Was ist, wenn ich wenig Zeit habe?",
                a: "Pflicht sind die 8 Live-Termine: 4 × 60 min Impuls + 4 × 90 min Umsetzung. Das sind ca. 3 Stunden pro Woche live. Zwischen den Calls bestimmen Sie selbst — empfohlen sind 2–4 Stunden pro Woche. Mehr macht das System spürbar tragfähiger; weniger ist möglich, kostet aber Tiefe.",
              },
              {
                q: "Bekomme ich ein System übergeben oder baue ich es selbst mit auf?",
                a: "Sie bauen es mit auf — bewusst. Keine Blackbox, kein Geheimnis, kein Anbieter-Lock-in. Sie verstehen jeden Baustein, der bei Ihnen liegt, und können danach eigenständig weiterbauen. Das ist der Unterschied zwischen einem Auftrag und einer Fähigkeit.",
              },
              {
                q: "Ist das nur für Marketing oder auch für Prozesse, Angebote, Prototypen und digitale Leistungen?",
                a: "Alles davon. Das Zweitsystem ist nicht „Marketing-Tool“. Es greift überall dort, wo Ideen digital sichtbar, prüfbar oder nutzbar werden müssen: Angebotsseiten, Vertriebsstrecken, Newsletter, Prototypen, App-Vorstufen, interne Prozesse, Briefings, Wissensstrukturen.",
              },
              {
                q: "Wie sicher ist das Ganze?",
                a: "Schutz-, Zugriffs- und Schlüssellogik werden bewusst Teil des Aufbaus — nicht nachgereicht. Ihr System ist auf Ihre realen Anwendungsfälle ausgerichtet, mit klaren Zugriffsrechten und sauberen Datenflüssen. Wir verkaufen keine „nutzen Sie einfach mal“. Wir bauen mit Ihnen eine kontrollierte Umgebung.",
              },
              {
                q: "Was passiert nach den 4 Wochen?",
                a: "Sie haben ein arbeitsfähiges Grundsystem und können es eigenständig nutzen — Punkt. Optional gibt es die Umsetzungswerkstatt (999 €/Monat, monatlich kündbar) mit 1:1-Live-Slot, Community und monatlichem Gruppen-Call, falls Sie weiterbauen wollen. Plus eine Bonus-Follow-up-Session ca. 4 Wochen nach Programmende — ohne Aufpreis.",
              },
              {
                q: "Warum nicht einfach Agentur, Freelancer oder internes Team?",
                a: "Weil Agentur und Freelancer pro Auftrag enden — Sie zahlen, bekommen ein Artefakt, fangen beim nächsten Vorhaben wieder bei null an. Internes Team braucht Zeit, Onboarding, Briefings. Das Zweitsystem ist Infrastruktur, nicht Auftrag. Es bleibt bei Ihnen, skaliert mit Ihrem Tempo und macht Sie unabhängiger — nicht abhängiger.",
              },
              {
                q: "Warum ist das mehr als ein normaler KI-Kurs?",
                a: "Ein Kurs gibt Ihnen Wissen. Sie bauen hier ein arbeitsfähiges System. Am Ende der 4 Wochen haben Sie nicht Notizen, sondern eine Grundlage, die Sie ab Tag 29 produktiv einsetzen. Außerdem ist kein Kurs, kein Selbstlerner-Format und keine Tool-Demo: Sie arbeiten live, in der Kleingruppe, an Ihrem realen Vorhaben.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group border-t border-ink-900/10 last:border-b py-7 cursor-pointer"
              >
                <summary className="flex items-start justify-between gap-6 list-none">
                  <span className="font-display text-lg sm:text-xl text-ink-900 leading-snug pr-4">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-7 h-7 rounded-full border border-ink-900/20 flex items-center justify-center text-ink-800 transition group-open:bg-brand-500 group-open:border-brand-600 group-open:text-ink-900 group-open:rotate-45 mt-0.5"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-5 text-[15px] sm:text-base text-ink-800 leading-relaxed max-w-3xl">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 bg-white overflow-hidden">
        <SectionDivider tone="brand" />
        {/* Big atmospheric glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 700px at 50% 50%, rgba(110,63,163,0.30), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 text-center">
          <Eyebrow>Letzter Schritt</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-[-0.02em] text-ink-900 max-w-5xl mx-auto">
            Ihre Kompetenz ist nicht das Problem.
          </h2>
          <p className="mt-6 font-display italic text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] text-brand-700 max-w-4xl mx-auto">
            Das Problem ist, wie viel davon heute zwischen Idee und Ergebnis
            verloren geht.
          </p>

          <p className="mt-10 max-w-2xl mx-auto text-[15px] sm:text-base text-ink-800 leading-relaxed">
            Bauen Sie sich in 4 Wochen das Zweitsystem, das diese Lücke
            schließt. Live, in der Kleingruppe, mit vollem Bauplan. Danach
            gehört es Ihnen — und Ihr Arbeitstag sieht anders aus.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#bewerbung"
              className="group inline-flex items-center gap-3 px-8 h-14 rounded-full bg-white text-black text-[14px] font-semibold tracking-wide transition hover:bg-brand-200 hover:text-ink-900"
            >
              Platz im nächsten Durchgang sichern
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#bewerbung"
              className="inline-flex items-center gap-3 px-7 h-14 rounded-full border border-ink-900/20 text-ink-900 text-[14px] font-semibold tracking-wide transition hover:border-white/70 hover:bg-ink-900/5"
            >
              60-Sekunden-Quickcheck
            </a>
          </div>

          <p className="mt-6 text-xs text-ink-800">
            Kleingruppe · begrenzte Plätze · Einführungspreis aktiv
          </p>
        </div>
      </section>

      {/* ═══════════════════════ APPLY FORM ═══════════════════════ */}
      <section
        id="bewerbung"
        className="relative z-10 py-24 sm:py-32 bg-[#050508] overflow-hidden"
      >
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
              Bewerbung · nächster Durchgang
            </span>
            <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
              Sichern Sie Ihren Platz.
              <br />
              <span className="text-brand-300">Zwei Wege — Sie wählen.</span>
            </h2>
            <p className="mt-6 text-[15px] sm:text-base text-white/85 leading-relaxed">
              Quickcheck mit Antwort innerhalb 24 Stunden — oder direkt einen
              Strategietermin im Kalender greifen, wenn es schnell gehen soll.
            </p>
          </div>

          {/* Step-Indicator */}
          <div className="mt-14 max-w-3xl mx-auto">
            <ol className="flex items-stretch justify-between gap-2 sm:gap-4">
              {[
                { n: "01", t: "Quickcheck oder Termin" },
                { n: "02", t: "Erstgespräch (15–30 min)" },
                { n: "03", t: "Platz im Durchgang" },
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

          {/* Two lanes: Quickcheck (left) + TidyCal (right) */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* PFAD A — QUICKCHECK */}
            <article className="relative rounded-[2rem] border border-brand-400/30 bg-gradient-to-br from-brand-500/[0.10] via-brand-500/[0.03] to-transparent p-1 overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(500px 400px at 0% 0%, rgba(110,63,163,0.16), transparent 70%)",
                }}
              />
              <div className="relative rounded-[1.85rem] bg-[#0A0A14]/85 backdrop-blur-sm p-7 sm:p-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                    Pfad A · Empfohlen
                  </span>
                  <span className="font-mono text-xs text-brand-300 tabular-nums">
                    60s
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-[1.85rem] leading-[1.1] text-white">
                  Quickcheck.
                </h3>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  Drei kurze Fragen plus Kontaktdaten. Wir melden uns werktags
                  innerhalb von 24 Stunden für ein 15–30-minütiges
                  Erstgespräch. Kein Verkaufsdruck.
                </p>

                <div className="mt-10">
                  <ApplyForm />
                </div>
              </div>
            </article>

            {/* PFAD B — TIDYCAL */}
            <article className="relative rounded-[2rem] border border-emerald-400/35 bg-gradient-to-br from-emerald-500/[0.10] via-emerald-500/[0.03] to-transparent p-1 overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(500px 400px at 100% 0%, rgba(16,185,129,0.18), transparent 70%)",
                }}
              />
              <div className="relative rounded-[1.85rem] bg-[#0A0A14]/85 backdrop-blur-sm p-7 sm:p-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Pfad B · Direkt
                  </span>
                  <span className="font-mono text-xs text-emerald-300 tabular-nums">
                    Live-Kalender
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-[1.85rem] leading-[1.1] text-white">
                  Ungeduldig?
                  <br />
                  <span className="text-emerald-300">
                    Strategietermin direkt sichern.
                  </span>
                </h3>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  Sie wissen schon, dass Sie reden wollen? Greifen Sie sich
                  einen freien Slot im Kalender. Wir treffen uns dort und
                  klären in 15–30 Minuten, ob das Programm zu Ihnen passt.
                </p>

                {/* Kalender-Container */}
                <div className="mt-10 rounded-2xl border border-white/10 bg-white p-3 sm:p-4">
                  <TidyCalEmbed />
                </div>

                <p className="mt-4 text-xs text-white/85 text-center">
                  Buchung erfolgt über{" "}
                  <span className="text-emerald-300 font-semibold">
                    eskalator.ag
                  </span>{" "}
                  · Termin direkt in Ihrem Kalender bestätigt
                </p>
              </div>
            </article>
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
