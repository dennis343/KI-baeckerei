import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_URL } from "@/lib/utils";
import { ApplyForm } from "./ApplyForm";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Das Zweitsystem — die zweite digitale Arbeitskraft",
  description:
    "Das Zweitsystem: In 4 Wochen bauen Sie gemeinsam eine zweite digitale Arbeitskraft auf — die aus Ihrer Fachkompetenz in Stunden Ergebnisse macht. Nicht in Wochen.",
  path: "/ki-umsetzung",
});

// ────────────────────────────────────────────────────────────────
// Reusable micro-primitives (local to this page)
// ────────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300/90">
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

// ────────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────────

export default function KiUmsetzungPage() {
  return (
    <div className="relative bg-[#07070C] text-white overflow-hidden">
      {/* Global atmospheric glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          background:
            "radial-gradient(1200px 700px at 15% -10%, rgba(110,63,163,0.22), transparent 60%), radial-gradient(900px 600px at 90% 10%, rgba(110,63,163,0.10), transparent 60%)",
        }}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Unternehmen", href: "/unternehmen" },
          { name: "Das Zweitsystem", href: "/ki-umsetzung" },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Das Zweitsystem — 4-Wochen-Aufbau",
          description:
            "Das Zweitsystem: 4-Wochen-Kleingruppenprogramm zum gemeinsamen Aufbau einer zweiten digitalen Arbeitskraft.",
          provider: {
            "@type": "Organization",
            name: "WissensReich Academy",
            url: SITE_URL,
          },
          duration: "P4W",
          courseMode: "Online",
          learningResourceType: "Live Training",
          numberOfCredits: 8,
          offers: {
            "@type": "Offer",
            price: "1990",
            priceCurrency: "EUR",
            url: SITE_URL + "/ki-umsetzung",
          },
        }}
      />

      {/* ═══════════════════════ A1 · HERO ═══════════════════════ */}
      <section className="relative z-10 min-h-[100svh] flex flex-col">
        {/* Top meta bar */}
        <div className="relative z-10 border-b border-white/5">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between gap-6 text-[11px] uppercase tracking-[0.18em] text-white/55">
            <span className="font-semibold">
              Kooperation · WissensReich Academy × Eskalator AG
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Einführungspreis aktiv
            </span>
          </div>
        </div>

        <div className="relative z-10 flex-1 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 pt-20 lg:pt-28 pb-24">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-10">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
              4-Wochen-Programm · Digitale Kleingruppe · Live
            </span>
          </div>

          {/* Wordmark headline */}
          <h1 className="font-display leading-[0.92] tracking-[-0.02em]">
            <span className="block text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.3em] text-white/45 mb-6">
              Eine neue Kategorie
            </span>
            <span className="block text-[clamp(3.5rem,11vw,9rem)] font-semibold italic">
              Das Zweitsystem.
            </span>
          </h1>

          {/* Subhead */}
          <p className="mt-10 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] text-white/90">
            Die zweite digitale Arbeitskraft, die aus Ihrer Fachkompetenz in{" "}
            <span className="text-brand-300">Stunden</span> Ergebnisse macht.{" "}
            <span className="text-white/55">Nicht in Wochen.</span>
          </p>

          {/* Lead paragraph */}
          <p className="mt-8 max-w-2xl text-[15px] sm:text-base leading-relaxed text-white/65 font-light">
            Für Unternehmen, Selbstständige, Fachkräfte, Angestellte und Teams,
            die zwischen Idee und Ergebnis keine Wochen mehr verlieren wollen.
            Keine Agentur-Schleifen. Keine endlosen Briefings. Keine
            Freigabe-Pingpongs. Sondern eine eigene Umsetzungsinfrastruktur —
            gemeinsam aufgebaut, danach Ihnen gehörend.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#bewerbung"
              className="group inline-flex items-center gap-3 px-7 h-14 rounded-full bg-white text-black text-[14px] font-semibold tracking-wide transition hover:bg-brand-200 hover:text-ink-900"
            >
              Platz sichern
              <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#bewerbung"
              className="inline-flex items-center gap-3 px-7 h-14 rounded-full border border-white/20 text-white text-[14px] font-semibold tracking-wide transition hover:border-white/70 hover:bg-white/5"
            >
              60-Sekunden-Quickcheck
            </a>
          </div>

          {/* Proof bar */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {[
              { label: "Format", value: "Digitale Kleingruppe" },
              { label: "Dauer", value: "4 Wochen · 8 Live-Termine" },
              { label: "Rhythmus", value: "2 Sessions pro Woche" },
              { label: "Investment", value: "1.990 € · statt 2.490 €" },
            ].map((item) => (
              <div key={item.label} className="bg-[#0A0A12] p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">
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
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/40">
            <span>Scrollen für den Preis des Wartens</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ A2 · DER PREIS DES WARTENS ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>01 · Der eigentliche Schaden</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Sie haben nicht zu wenig Ideen.
              <br />
              <span className="text-brand-300">
                Sie verlieren zu viel Zeit zwischen Idee und Ergebnis.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 font-light">
              Der Engpass ist nicht Kreativität. Nicht Strategie. Nicht
              Fachwissen. Der Engpass ist die Strecke dazwischen — und die
              bezahlen Sie jeden Monat, auch wenn niemand sie auf die Rechnung
              schreibt.
            </p>
          </div>

          {/* Cost grid */}
          <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
            {[
              {
                head: "Briefings, die zu vier Briefings werden.",
                sub: "Ein Gedanke wird dreimal erklärt, bevor überhaupt jemand weitermacht.",
              },
              {
                head: "Rückfragen, die zu Meetings werden.",
                sub: "Aus 15 Minuten Klarheit wird ein Termin in zwei Wochen.",
              },
              {
                head: "Freigaben, die zu Korrekturrunden werden.",
                sub: "Man korrigiert Artefakte, statt Wirkung zu schaffen.",
              },
              {
                head: "Dienstleister, die Wochen brauchen, um zu verstehen.",
                sub: "Ihr Fachwissen wird in Briefings übersetzt — und dabei verdünnt.",
              },
              {
                head: "Übergaben, in denen die Hälfte der Idee verdampft.",
                sub: "Was bei Ihnen klar war, kommt bei anderen verwaschen an.",
              },
              {
                head: "Momentum, das stirbt, bevor etwas Sichtbares entsteht.",
                sub: "Eine gute Idee am Montag ist am Freitag schon kalt.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-5 border-t border-white/10 pt-6">
                <span className="font-display text-2xl font-semibold text-brand-400/80 tabular-nums">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-display text-xl font-semibold text-white leading-snug">
                    {item.head}
                  </p>
                  <p className="mt-2 text-sm text-white/55 font-light leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Closer */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center border-t border-white/10 pt-14">
            <div className="lg:col-span-3">
              <p className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] text-white">
                Verlorene Zeit. Verlorene Geschwindigkeit.
                <br />
                Verlorene Marktwirkung. Verlorene Energie.
              </p>
            </div>
            <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-10">
              <p className="text-[15px] leading-relaxed text-white/70 font-light">
                <Wordmark className="text-white not-italic font-display font-semibold" />{" "}
                setzt genau dort an — und schließt die Lücke{" "}
                <span className="text-brand-300">in 4 Wochen</span>, nicht in
                4 Quartalen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ A3 · DIE GLEICHUNG ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 border-t border-white/5">
        {/* Accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 400px at 50% 0%, rgba(110,63,163,0.12), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>02 · Die Kernlogik</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Ihre Fachkompetenz ist der Rohstoff.
              <br />
              <span className="text-brand-300">
                Das Zweitsystem ist der Verstärker.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 font-light">
              Das Zweitsystem ersetzt nicht, was Sie können. Es vervielfacht es.
              Ihr Wissen, Ihr Urteil, Ihr Marktverständnis bleiben der Kern.
              Was sich ändert: die Strecke dahinter.
            </p>
          </div>

          {/* The equation */}
          <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1.2fr] gap-6 md:gap-4 items-center">
              {/* Term 1 */}
              <div className="text-center md:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-3">
                  Rohstoff
                </p>
                <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] text-white font-semibold">
                  Fachkompetenz
                </p>
                <p className="mt-2 text-xs text-white/50 font-light">
                  Erfahrung, Urteil, Marktverständnis.
                </p>
              </div>

              {/* Operator × */}
              <div className="text-center">
                <span className="font-display text-5xl sm:text-6xl text-brand-400 font-light">
                  ×
                </span>
              </div>

              {/* Term 2 */}
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                  Verstärker
                </p>
                <p className="font-display italic text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] text-white font-semibold">
                  Das Zweitsystem
                </p>
                <p className="mt-2 text-xs text-white/50 font-light">
                  Ihre zweite digitale Arbeitskraft.
                </p>
              </div>

              {/* Operator = */}
              <div className="text-center">
                <span className="font-display text-5xl sm:text-6xl text-white/50 font-light">
                  =
                </span>
              </div>

              {/* Result */}
              <div className="text-center md:text-right">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-3">
                  Ergebnis
                </p>
                <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] text-white font-semibold">
                  Reale Umsetzungskraft
                </p>
                <p className="mt-2 text-xs text-white/50 font-light">
                  Sichtbar. Testbar. Am selben Tag.
                </p>
              </div>
            </div>
          </div>

          {/* What comes out */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-display text-2xl sm:text-3xl leading-[1.2] text-white">
                Aus einer Sprachnachricht am Vormittag wird noch am{" "}
                <span className="text-brand-300">selben Tag</span>:
              </p>
              <p className="mt-6 text-sm text-white/55 font-light leading-relaxed max-w-sm">
                Kein Dummy. Kein Moodboard. Sondern ein Stand, den Sie sehen,
                prüfen und schärfen können.
              </p>
            </div>
            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Eine überzeugende Angebots- oder Landingpage",
                "Eine saubere Customer-Journey-Struktur",
                "Ein erster nutzbarer App- oder Tool-Prototyp",
                "Ein funktionierender Newsletter- und Follow-up-Entwurf",
                "Eine präzise Prozess- oder Briefing-Struktur",
                "Eine buchbare Mechanik für Termine oder Käufe",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-brand-400/40 hover:bg-brand-400/[0.04] transition"
                >
                  <Check className="w-4 h-4 mt-0.5 text-brand-400 flex-shrink-0" />
                  <span className="text-sm text-white/85 font-light leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kicker */}
          <p className="mt-20 font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.25] text-white/80 max-w-4xl">
            Nicht nach Monaten. Nicht nach endlosen Briefings.
            <br />
            <span className="text-white">
              Sondern in einer Geschwindigkeit, die vorher undenkbar war —
            </span>{" "}
            <span className="text-brand-300">
              weil die Strecke dazwischen einfach nicht mehr existiert.
            </span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════ A4 · DIE NEUE REALITÄT — BEFORE / AFTER ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>03 · Die neue Realität</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Von der Strecke dazwischen —
              <br />
              <span className="text-brand-300">zur direkten Linie.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 font-light">
              Früher floss jede Idee durch Briefings, Rückfragen und
              Freigaben — Wochen lang, bevor überhaupt etwas Sichtbares
              entstand. Mit Ihrem Zweitsystem verschwindet diese Strecke.
            </p>
          </div>

          {/* Two-track flow diagram */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* OLD TRACK */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-8 sm:p-10">
              <div className="flex items-center justify-between mb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  Alte Welt
                </p>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  Wochen · Monate
                </span>
              </div>
              <ol className="space-y-0.5">
                {[
                  { step: "Idee", note: "entsteht im Kopf" },
                  { step: "Briefing", note: "wird geschrieben" },
                  { step: "Rückfragen", note: "kommen zurück" },
                  { step: "Warten", note: "auf Kapazität" },
                  { step: "Abstimmung", note: "Termin in 2 Wochen" },
                  { step: "Korrekturrunden", note: "Artefakt statt Wirkung" },
                  { step: "Ergebnis", note: "falls noch relevant" },
                ].map((n, i, arr) => (
                  <li key={i} className="relative flex items-center gap-4 py-3">
                    <span className="w-8 text-right font-mono text-xs text-white/30 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        i === arr.length - 1
                          ? "bg-white/30 ring-4 ring-white/5"
                          : "bg-white/20"
                      }`}
                    />
                    <div className="flex-1 flex items-baseline justify-between gap-3 border-b border-white/5 pb-3">
                      <span className="font-display text-lg text-white/60 line-through decoration-white/20 decoration-1">
                        {n.step}
                      </span>
                      <span className="text-xs text-white/35 font-light">
                        {n.note}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-white/45 font-light leading-relaxed">
                Zwischen „Idee“ und „Ergebnis“ liegt der teuerste Teil des
                Monats: Zeit, in der nichts Sichtbares entsteht.
              </p>
            </div>

            {/* NEW TRACK */}
            <div className="relative rounded-3xl border border-brand-400/30 bg-gradient-to-b from-brand-500/[0.08] to-transparent p-8 sm:p-10 overflow-hidden">
              {/* Accent glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(400px 300px at 80% 0%, rgba(110,63,163,0.18), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300">
                    Mit Zweitsystem
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-200">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-300 animate-pulse" />
                    Heute · noch diese Woche
                  </span>
                </div>
                <ol className="space-y-0.5">
                  {[
                    {
                      step: "Idee oder Sprachnachricht",
                      note: "5 Minuten am Vormittag",
                    },
                    { step: "Struktur", note: "in Minuten" },
                    { step: "Entwurf", note: "sofort sichtbar" },
                    {
                      step: "Testbarer Stand",
                      note: "am selben Tag",
                    },
                    { step: "Verbesserung", note: "in Echtzeit" },
                    {
                      step: "Produktiver Stand",
                      note: "noch diese Woche",
                    },
                  ].map((n, i, arr) => (
                    <li
                      key={i}
                      className="relative flex items-center gap-4 py-3"
                    >
                      <span className="w-8 text-right font-mono text-xs text-brand-300 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          i === arr.length - 1
                            ? "bg-brand-300 ring-4 ring-brand-400/20"
                            : "bg-brand-400"
                        }`}
                      />
                      <div className="flex-1 flex items-baseline justify-between gap-3 border-b border-brand-400/10 pb-3">
                        <span className="font-display text-lg text-white">
                          {n.step}
                        </span>
                        <span className="text-xs text-brand-200/80 font-light">
                          {n.note}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 text-sm text-white/75 font-light leading-relaxed">
                  Eine Idee am Vormittag ist am selben Tag sichtbar, testbar
                  und verbesserbar — <span className="text-brand-300">ohne</span>{" "}
                  Briefing-Kette dazwischen.
                </p>
              </div>
            </div>
          </div>

          {/* Tempo comparison row */}
          <div className="mt-10 grid grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
            <div className="p-6 sm:p-8 bg-white/[0.02] text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-2">
                Alte Welt
              </p>
              <p className="font-display text-3xl sm:text-4xl text-white/50">
                3–12 Wochen
              </p>
              <p className="mt-1 text-xs text-white/40 font-light">
                bis etwas Sichtbares existiert
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-brand-500/[0.06] text-center border-l border-brand-400/20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-2">
                Mit Zweitsystem
              </p>
              <p className="font-display text-3xl sm:text-4xl text-white">
                Stunden
              </p>
              <p className="mt-1 text-xs text-brand-200/70 font-light">
                bis der erste Stand auf dem Tisch liegt
              </p>
            </div>
          </div>

          <p className="mt-20 font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.25] text-white max-w-4xl">
            Das ist nicht „schneller arbeiten“.
            <br />
            <span className="text-brand-300">
              Das ist eine andere Geometrie des Arbeitstages.
            </span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════ A5 · FÜR WEN ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>04 · Für wen gemacht</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Nicht für Technik-Nerds.
              <br />
              <span className="text-brand-300">
                Für Menschen mit Fachwissen.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 font-light">
              Sie müssen kein Entwickler sein. Kein IT-Spezialist. Kein
              MIT-Student. Sie müssen Ihre Branche kennen, Ihre Kunden kennen,
              Ihre Aufgaben kennen. <span className="text-white">Den Rest bauen wir gemeinsam.</span>
            </p>
          </div>

          {/* Audience segments */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: "Unternehmen",
                head: "Sie wollen schneller kommunizieren, verkaufen und umsetzen.",
                body: "Ihr Team verliert heute Tage in Abstimmungen und externer Dienstleistung. Mit dem Zweitsystem wird aus einem Meeting direkt ein Entwurf — nicht ein Ticket für die nächste Woche.",
                line: "Geschwindigkeit wird zum Wettbewerbsvorteil, nicht zur Zufallsvariable.",
              },
              {
                tag: "Selbstständige",
                head: "Sie wollen mit kleinem Team wirken wie ein großes.",
                body: "Sie haben die Kompetenz. Was fehlt, ist die Umsetzungsbreite. Das Zweitsystem gibt Ihnen die zweite Arbeitskraft, ohne dass jemand eingestellt wird.",
                line: "Sie skalieren Ihre Wirkung — nicht Ihre Fixkosten.",
              },
              {
                tag: "Angestellte & Fachkräfte",
                head: "Sie wollen in Ihrem Job schneller, wirksamer, wertvoller werden.",
                body: "Während andere noch auf Zuarbeit warten, liefern Sie. Angebote, Präsentationen, Entwürfe, Prototypen — sauber, schnell, eigenständig. Sie werden nicht austauschbar. Sie werden unverzichtbar.",
                line: "Kein Buzzword im Lebenslauf. Eine reale Fähigkeit auf dem Tisch.",
              },
              {
                tag: "Teams & Projektverantwortliche",
                head: "Sie wollen bessere Briefings, klarere Strukturen, schnellere Ergebnisse.",
                body: "Das Zweitsystem nimmt die Reibung zwischen Idee, Briefing und Umsetzung raus — für alle im Team. Übergaben werden reproduzierbar, Projekte planbarer, Qualität steigt.",
                line: "Weniger Chaos. Mehr Output. Gleiche Teamgröße.",
              },
            ].map((p, i) => (
              <article
                key={i}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 hover:border-brand-400/40 hover:bg-brand-400/[0.03] transition"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    {p.tag}
                  </span>
                  <span className="font-mono text-xs text-white/30 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-[1.7rem] leading-[1.15] text-white">
                  {p.head}
                </h3>
                <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-white/65 font-light">
                  {p.body}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[15px] italic text-brand-200 font-light leading-snug">
                    {p.line}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Relief card */}
          <div className="mt-10 rounded-3xl border border-brand-400/25 bg-gradient-to-r from-brand-500/[0.08] via-transparent to-transparent p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-200 whitespace-nowrap">
                Wichtig zu wissen
              </span>
              <p className="font-display text-xl sm:text-2xl leading-[1.3] text-white">
                Sie bekommen{" "}
                <span className="text-brand-300">keine Blackbox</span> übergeben.
                Sie bauen Ihr Zweitsystem gemeinsam mit auf — und verstehen
                danach den Bauplan. Das macht Sie{" "}
                <span className="text-white">dauerhaft eigenständig</span>, nicht
                abhängig.
              </p>
            </div>
          </div>

          {/* Anti-audience */}
          <div className="mt-14 border-t border-white/10 pt-10 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-3">
              Nicht für Sie, wenn …
            </p>
            <ul className="space-y-2 text-[15px] text-white/55 font-light leading-relaxed">
              <li>
                … Sie einen fertigen Button erwarten, bei dem etwas herausfällt,
                ohne selbst mitzudenken.
              </li>
              <li>
                … Sie glauben, Tools ersetzen Urteilsvermögen. Das Zweitsystem
                verstärkt Kompetenz — es erschafft keine.
              </li>
              <li>
                … Sie nicht bereit sind, 4 Wochen lang echte Live-Arbeit
                einzubringen.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ A6 · ANWENDUNGSFELDER ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>05 · Anwendungsfelder</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Was Sie mit Ihrem Zweitsystem
              <br />
              <span className="text-brand-300">konkret bewegen.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 font-light">
              Kein Tool-Zoo. Keine Buzzword-Liste. Sondern sechs Felder, in
              denen heute die meiste Zeit verloren geht — und die morgen anders
              funktionieren.
            </p>
          </div>

          {/* Fields */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                head: "Homepages & Social-Media-Präsenz",
                nutzen:
                  "Ihre Seite zeigt in Sekunden, warum jemand bei Ihnen richtig ist — statt Besucher zu verwirren, die dann abspringen.",
              },
              {
                num: "02",
                head: "Landingpages & Angebotsseiten",
                nutzen:
                  "Aus Interesse werden Anfragen, Termine, Käufe. Mit klarem Aufbau, Buchungslogik und einer Mechanik, die nicht nur „schön“ ist, sondern konvertiert.",
              },
              {
                num: "03",
                head: "Digitale Vertriebsstrecken",
                nutzen:
                  "Lose Aufmerksamkeit wird zu konkreter Nachfrage. Leser werden zu Leads, Leads werden zu Kunden — ohne dass Sie täglich hinterherlaufen.",
              },
              {
                num: "04",
                head: "Follow-up & Newsletter-Systeme",
                nutzen:
                  "Kontakte versanden nicht mehr. Vertrauen baut sich auf. Menschen, die heute „vielleicht“ sagen, kommen in drei Monaten als „ja“ zurück.",
              },
              {
                num: "05",
                head: "Prototypen für Apps, Tools, Services",
                nutzen:
                  "Sie zeigen eine Idee — nicht als Mockup, sondern als anklickbare Vorstufe. Überzeugen Entscheider, testen mit echten Nutzern, schärfen in Tagen statt Monaten.",
              },
              {
                num: "06",
                head: "Interne Prozesse & Briefings",
                nutzen:
                  "Reibung raus, Übergaben sauber, Wissen reproduzierbar. Arbeit, die heute an Einzelpersonen hängt, wird skalierbar — ohne dass jemand sich nackt fühlt.",
              },
            ].map((f, i) => (
              <article
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-brand-400/40 hover:bg-brand-400/[0.04] transition"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-xs text-brand-300 tabular-nums">
                    {f.num}
                  </span>
                  <span className="w-8 h-px bg-white/20 mt-2 group-hover:bg-brand-400 transition" />
                </div>
                <h3 className="font-display text-xl sm:text-[1.4rem] leading-[1.2] text-white mb-4">
                  {f.head}
                </h3>
                <p className="text-sm text-white/65 font-light leading-relaxed">
                  {f.nutzen}
                </p>
              </article>
            ))}
          </div>

          {/* Signature scenes */}
          <div className="mt-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-6">
              Was vorher undenkbar war, wird Routine
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
              {[
                {
                  head: "Angebotsseite + Buchung + Newsletter — in kurzer Zeit.",
                  body: "Nicht in der Reihenfolge „erst alles klären, dann alles bauen“. Sondern parallel, sichtbar, iterativ.",
                },
                {
                  head: "Nach dem Meeting liegt der Prototyp auf dem Tisch.",
                  body: "Während oder kurz nach einem Termin steht ein erster testbarer Stand. Nicht in zwei Wochen. Jetzt.",
                },
                {
                  head: "Leistungen sichtbar, bevor der klassische Prozess fertig ist.",
                  body: "Sie zeigen, was möglich wird — während andere noch Anforderungsdokumente schreiben.",
                },
                {
                  head: "Mehr Funktionen und Bausteine schon früh mitdenken.",
                  body: "Statt „erst Mindestversion, später Rest“ entsteht eine Lösung, die von Anfang an Tiefe hat — ohne Mehrkosten.",
                },
              ].map((s, i) => (
                <div key={i} className="bg-[#0A0A12] p-8 sm:p-10">
                  <p className="font-display text-xl sm:text-2xl leading-[1.2] text-white">
                    {s.head}
                  </p>
                  <p className="mt-4 text-sm text-white/55 font-light leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ A7 · WAS GEMEINSAM AUFGEBAUT WIRD ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>06 · Was gemeinsam entsteht</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Sie bauen kein Programm.
              <br />
              <span className="text-brand-300">Sie bauen Ihr System.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 font-light">
              In diesen 4 Wochen entsteht keine Theorie und keine Notiz-Sammlung.
              Sondern eine arbeitsfähige Grundlage — gemeinsam aufgebaut,
              transparent erklärt, mit vollem Bauplan in Ihrer Hand.
            </p>
          </div>

          {/* Build pillars */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {[
              {
                num: "01",
                head: "Eine klare Arbeitslogik",
                nutzen:
                  "Damit Ideen nicht im Nebel hängen, sondern Bahn aufnehmen. Sie wissen jederzeit, wohin ein Gedanke fließt — und was als nächstes passiert.",
                bad: "Kein Tool-Chaos.",
              },
              {
                num: "02",
                head: "Ein abgestimmtes Zusammenspiel",
                nutzen:
                  "Die digitalen Bausteine greifen ineinander, statt nebeneinander zu existieren. Ein Stand entsteht aus einem Eingang — nicht aus fünf parallelen Werkzeugen.",
                bad: "Kein Frankenstein-Stack.",
              },
              {
                num: "03",
                head: "Saubere Grundlagen für sichere Nutzung",
                nutzen:
                  "Damit Daten, Inhalte und Logik kontrolliert bleiben. Sie wissen, was wo liegt — und wer zugreifen kann. Ruhe statt nervöses Drüber-Schauen.",
                bad: "Kein offenes Scheunentor.",
              },
              {
                num: "04",
                head: "Fokus auf echte Anwendungsfälle",
                nutzen:
                  "Statt Demos und Halbgares entsteht jeder Baustein an Ihrem realen Problem. Das System trägt von Tag eins, weil es gegen Ihre Wirklichkeit gebaut wurde.",
                bad: "Keine Spielerei.",
              },
              {
                num: "05",
                head: "Schutz- und Zugriffslogik",
                nutzen:
                  "Schlüsselstrukturen, Rechte, Sichtbarkeiten — bewusst gesetzt. So bleibt Wirkung hoch und Risiko niedrig, auch wenn das Team wächst oder Externe zuarbeiten.",
                bad: "Keine Datenleckage.",
              },
              {
                num: "06",
                head: "Präzise Use-Case-Ausrichtung",
                nutzen:
                  "Ihr Zweitsystem ist nicht generisch. Es ist auf Ihre Branche, Ihre Sprache, Ihre Kunden zugeschnitten. Ergebnisse klingen nach Ihnen — nicht nach Standard-KI.",
                bad: "Keine Allzweckwaffe.",
              },
            ].map((p, i) => (
              <article
                key={i}
                className="lg:col-span-6 xl:col-span-4 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-8 hover:border-brand-400/40 hover:bg-brand-400/[0.04] transition flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-brand-300 tabular-nums">
                    {p.num}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    {p.bad}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-[1.4rem] leading-[1.2] text-white mb-4">
                  {p.head}
                </h3>
                <p className="text-sm text-white/65 font-light leading-relaxed">
                  {p.nutzen}
                </p>
              </article>
            ))}
          </div>

          {/* No-blackbox manifesto */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <div className="rounded-3xl border border-brand-400/30 bg-gradient-to-br from-brand-500/[0.1] to-transparent p-10 sm:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-5">
                Das Versprechen
              </p>
              <p className="font-display text-2xl sm:text-3xl leading-[1.2] text-white">
                Kein Blackbox-Produkt.
                <br />
                <span className="text-brand-200">
                  Sie verstehen den Bauplan.
                </span>
              </p>
              <p className="mt-6 text-[15px] text-white/75 font-light leading-relaxed">
                Sie bekommen nicht ein fertiges Etwas übergeben, das Sie hoffen
                weiter bedienen zu können. Sie bauen Ihr System mit auf — Stück
                für Stück, sichtbar, erklärt. Danach gehört es Ihnen.
                Inklusive der Logik dahinter.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 sm:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 mb-5">
                Was das praktisch heißt
              </p>
              <ul className="space-y-4">
                {[
                  "Sie können nach 4 Wochen ohne uns weiterarbeiten.",
                  "Sie können das System eigenständig auf neue Themen ausrichten.",
                  "Sie sind nicht an einen Anbieter, eine Agentur oder eine Lizenz gefesselt.",
                  "Sie können andere im Team befähigen — weil Sie selbst verstehen, was läuft.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-white/80 font-light leading-relaxed"
                  >
                    <Check className="w-4 h-4 mt-1 text-brand-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ A8 · MUSTERREISE 4 WOCHEN ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>07 · Die Musterreise</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Vier Wochen.
              <br />
              <span className="text-brand-300">
                Acht Live-Termine. Eine arbeitsfähige Grundlage.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 font-light">
              Pro Woche zwei Calls: ein Impuls- und Feedback-Call mit 60
              Minuten, ein Umsetzungs-Call mit 90 Minuten. Dazwischen arbeiten
              Sie an Ihrem Stand — mit klarem Was und klarem Wie.
            </p>
          </div>

          {/* Weeks timeline */}
          <ol className="mt-20 space-y-6">
            {[
              {
                week: "Woche 01",
                title: "Verstehen, einordnen, aufsetzen.",
                desc: "Digitales Mindset, Positionierung, Prioritäten, Grundsetup. Sie bauen ein System, das zu Ihrem Business, Ihrer Rolle und Ihren echten Anforderungen passt.",
                outcome:
                  "Sie verlieren keine Zeit mehr durch unklare Strukturen. Was Sie aufsetzen, trägt — und Ihre Ideen können überhaupt erst sauber Fahrt aufnehmen.",
              },
              {
                week: "Woche 02",
                title: "Anforderungen in brauchbare Systeme übersetzen.",
                desc: "Aus Gedanken, Sprachnachrichten und Fachwissen werden belastbare Anforderungen, Seitenstrukturen, Prozesslogiken und digitale Entwürfe.",
                outcome:
                  "Sie hoffen nicht mehr, dass andere verstehen, was Sie meinen. Sie bringen Ihre Ideen selbst in eine Form, die direkt weiterverarbeitet werden kann.",
              },
              {
                week: "Woche 03",
                title: "Ergebnisse sichtbar und nutzbar machen.",
                desc: "Reale Vorstufen, Prototypen und erste testbare Ergebnisse entstehen. Sie reden nicht mehr über Möglichkeiten — Sie zeigen sie.",
                outcome:
                  "Sie kommen in einen Zustand, in dem man Dinge wirklich sehen, prüfen und schärfen kann. Statt Annahmen zu diskutieren, schärfen Sie an realen Ständen.",
              },
              {
                week: "Woche 04",
                title: "System festigen und produktiv nutzen.",
                desc: "Persönliches Grundsystem finalisieren. Schutz- und Nutzungslogik schärfen. Definieren, wie damit im Alltag oder im Unternehmen gearbeitet wird.",
                outcome:
                  "Sie gehen nicht mit Notizen heraus, sondern mit einer arbeitsfähigen Struktur, die Sie ab Tag 29 produktiv nutzen können.",
              },
            ].map((w, i) => (
              <li
                key={i}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] hover:border-brand-400/30 hover:bg-brand-400/[0.03] transition p-8 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left rail */}
                  <div className="lg:col-span-3">
                    <p className="font-mono text-xs text-brand-300 tracking-[0.2em] mb-3">
                      {w.week}
                    </p>
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                        <span className="w-6 h-px bg-white/30" />
                        Impuls · 60 min
                      </span>
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                        <span className="w-6 h-px bg-white/30" />
                        Umsetzung · 90 min
                      </span>
                    </div>
                  </div>

                  {/* Title + desc */}
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-2xl sm:text-[1.7rem] leading-[1.15] text-white">
                      {w.title}
                    </h3>
                    <p className="mt-5 text-sm sm:text-[15px] text-white/65 font-light leading-relaxed">
                      {w.desc}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-3">
                      Das bedeutet für Sie
                    </p>
                    <p className="text-[15px] text-white font-light leading-relaxed">
                      {w.outcome}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Bonus follow-up */}
          <div className="mt-10 rounded-3xl border border-brand-400/25 bg-gradient-to-r from-brand-500/[0.08] via-transparent to-transparent p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-200 whitespace-nowrap">
                Bonus
              </span>
              <p className="font-display text-xl sm:text-2xl leading-[1.3] text-white">
                Ca. 4 Wochen nach Ende: gemeinsame{" "}
                <span className="text-brand-300">Follow-up-Session</span> — wir
                schauen, was im Alltag wirklich läuft, was hakt und was als
                nächstes hebelt.
              </p>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 whitespace-nowrap">
                Ohne Aufpreis
              </span>
            </div>
          </div>

          {/* Format strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {[
              { k: "Format", v: "Digitale Kleingruppe" },
              { k: "Live-Termine", v: "8 + 1 Bonus" },
              { k: "Pro Woche", v: "60 min + 90 min" },
              { k: "Aufwand zwischen Calls", v: "Sie bestimmen" },
            ].map((c) => (
              <div key={c.k} className="bg-[#0A0A12] p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">
                  {c.k}
                </p>
                <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                  {c.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ A9 · ERGEBNIS NACH 4 WOCHEN ═══════════════════════ */}
      <section className="relative z-10 py-28 sm:py-36 border-t border-white/5">
        {/* Accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 400px at 50% 100%, rgba(110,63,163,0.12), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            <Eyebrow>08 · Das Ergebnis</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white">
              Nach 4 Wochen ist nicht Wissen entstanden.
              <br />
              <span className="text-brand-300">Sondern Umsetzungskraft.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 font-light">
              Sie haben kein Notizbuch voller Konzepte. Sie haben eine
              arbeitsfähige Grundlage — und einen anderen Arbeitstag.
            </p>
          </div>

          {/* Transformation panel */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {/* Vorher */}
            <div className="bg-[#0A0A12] p-10 sm:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-6">
                Vor dem Programm
              </p>
              <ul className="space-y-5">
                {[
                  "Ideen versanden zwischen Briefing und Umsetzung.",
                  "Externe Dienstleister sind Engpass und Kostenfaktor.",
                  "Sie reden über Lösungen — sehen können Sie sie selten.",
                  "Tempo hängt am Kalender anderer Leute.",
                  "Wirkung ist Zufall, nicht Methode.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-white/55 font-light leading-relaxed"
                  >
                    <span className="mt-2 w-3 h-px bg-white/30 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nachher */}
            <div className="bg-gradient-to-br from-brand-500/[0.08] to-transparent p-10 sm:p-12 border-l border-brand-400/20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-6">
                Nach 4 Wochen
              </p>
              <ul className="space-y-5">
                {[
                  "Aus Sprachnachricht oder Idee wird in Stunden ein Stand.",
                  "Sie sind unabhängiger von Agenturen und Wartezimmer-Logik.",
                  "Sie zeigen Lösungen, statt sie zu erklären.",
                  "Tempo bestimmen Sie selbst.",
                  "Wirkung wird wiederholbar — weil Sie das System dahinter besitzen.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] text-white font-light leading-relaxed"
                  >
                    <Check className="w-4 h-4 mt-1 text-brand-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What it means in everyday */}
          <div className="mt-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 mb-6">
              So sieht ein Arbeitstag mit Zweitsystem aus
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  time: "08:42",
                  head: "Sprachnachricht im Auto: neue Angebotsidee.",
                  body: "Stichpunkte, kein Skript. 90 Sekunden.",
                },
                {
                  time: "10:15",
                  head: "Erste Struktur und Entwurf liegen vor.",
                  body: "Sektionen, Texte, Aufbau, Buchungslogik — testbar.",
                },
                {
                  time: "14:30",
                  head: "Sie schärfen anhand des realen Stands.",
                  body: "Statt zu beschreiben, was anders sein sollte: anpassen.",
                },
                {
                  time: "17:00",
                  head: "Stand geht an Kollegen oder Kunden raus.",
                  body: "Nicht als Mockup. Als ein Ding, das funktioniert.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
                >
                  <p className="font-mono text-xs text-brand-300 tracking-[0.2em] mb-3">
                    {s.time}
                  </p>
                  <p className="font-display text-lg sm:text-xl leading-[1.25] text-white">
                    {s.head}
                  </p>
                  <p className="mt-2 text-sm text-white/55 font-light leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Closer */}
          <p className="mt-20 font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.25] text-white max-w-4xl">
            Was vor 4 Wochen ein Briefing gewesen wäre,
            <br />
            <span className="text-brand-300">
              ist heute ein erledigter Punkt.
            </span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════ TEMPORARY APPLY ANCHOR ═══════════════════════
           Der restliche Flow (A10–A14) folgt in den nächsten Schritten.
           Anchor bleibt kompilierbar, damit CTAs funktionieren. */}
      <section
        id="bewerbung"
        className="relative z-10 py-28 border-t border-white/10 bg-[#050508]"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <Eyebrow>Bewerbung</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.015em] text-white mb-12">
            Platz im nächsten Durchgang sichern.
          </h2>
          <ApplyForm />
        </div>
      </section>
    </div>
  );
}
