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

      {/* ═══════════════════════ TEMPORARY APPLY ANCHOR ═══════════════════════
           Der restliche Flow (A4–A14) folgt in den nächsten Schritten.
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
