import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "KI-Umsetzung für den Mittelstand – Ihre Ideen, heute live",
  description:
    "Adé Agentur, willkommen alle Möglichkeiten. Marketing, Vertrieb, Produkt und Prozesse – in Tagen, nicht Monaten.",
  path: "/ki-umsetzung",
});

export default function KiUmsetzungPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Unternehmen", href: "/unternehmen" },
          { name: "KI-Umsetzung", href: "/ki-umsetzung" },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "KI-Umsetzung",
          description: "Schnelle, strukturierte KI-gestützte Umsetzung für Marketing, Vertrieb, Produkt und Prozesse.",
          provider: {
            "@type": "EducationalOrganization",
            name: "WissensReich Academy",
            url: SITE_URL,
          },
          areaServed: { "@type": "Country", name: "Deutschland" },
          serviceType: "Unternehmensberatung & Umsetzungsbegleitung",
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-ink-900/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="text-sm font-semibold text-ink-900">KI-Umsetzung</div>
            <div className="flex items-center gap-6">
              <Link href="#stufen" className="text-sm text-ink-600 hover:text-ink-900 transition">
                Die 5 Wege
              </Link>
              <Link href="/#kontakt" className="px-4 h-9 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition flex items-center">
                Buchen
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ──────────────────────────────────────────────────
          HERO — Apple Black, Massive Typography
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow — small, uppercase */}
          <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">
            Die Antwort auf Agentur
          </p>

          {/* Main Headline — Massive, with Cyan Gradient */}
          <h1 className="text-[clamp(3.5rem,12vw,7rem)] font-bold leading-[0.95] tracking-tight">
            <span className="text-white">Adé Agentur.</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Willkommen, alle
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Möglichkeiten.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-10 text-lg sm:text-xl text-ink-300 max-w-2xl mx-auto leading-relaxed">
            Marketing, Vertrieb, Produkt, Prozesse – in Tagen, nicht Monaten. Mit Ihrem Team. Im eigenen Haus. Volle Kontrolle.
          </p>

          {/* Trust line */}
          <p className="mt-8 text-sm text-ink-400">
            <span className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              Montag besprochen – Freitag live
            </span>
          </p>

          {/* CTA — Apple minimal style */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#kontakt"
              className="px-6 h-11 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition flex items-center gap-2"
            >
              Gratisreport holen
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#kontakt"
              className="px-6 h-11 rounded-lg border border-ink-400 text-white text-sm font-medium hover:border-white transition"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          THE SHIFT — White background
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl">
          {/* Left side — Alt */}
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">Klassisch</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-ink-900 leading-tight mb-8">
              So war es.
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed max-w-xl">
              Idee. Briefing. Agentur-Auswahl. Kick-off. Rückfragen. Konzept. Revision. Revision. Revision. Abnahme. Go-Live drei Monate später. Budget weg. Know-how weg. Abhängigkeit bleibt.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-line my-20" />

          {/* Right side — Neu */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-8">Neu</p>
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-brand-600 to-cyan-500 bg-clip-text text-transparent leading-tight mb-8">
              So geht es jetzt.
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed max-w-xl">
              Idee. Anforderung klären. Erste Version heute noch. Test. Feedback. Morgen besser. Freitag: live. Know-how sitzt im Team. Agentur kommt nur, wenn gebraucht.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          6 OUTCOMES — Black, Grid
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-6xl w-full">
          <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">Was sich ändert</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-16 leading-tight">
            Sechs Felder.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Ihr Tempo",
                desc: "Ideen entstehen Freitag – Montag sind sie live. Keine Warteschlange, keine Agentur-Termine.",
              },
              {
                title: "Volle Kontrolle",
                desc: "Alles bleibt im Haus. Kein Agentur-Pingpong. Sie sehen jeden Schritt.",
              },
              {
                title: "Mehr Zeit",
                desc: "Weniger Abstimmungen. Weniger Schleifen. Weniger Meetings. Mehr echte Arbeit.",
              },
              {
                title: "Kleines Team, großer Wurf",
                desc: "Fünf Menschen, hundert Möglichkeiten. Keine Zusatzpersonal nötig.",
              },
              {
                title: "Sicherer treffen",
                desc: "Jede Idee wird geprüft, bevor sie teuer wird. Weniger Fehlentwicklungen.",
              },
              {
                title: "Alles greift ineinander",
                desc: "Kundenreise, Seiten, Prozesse – kein Flickwerk mehr. Ein durchdachtes System.",
              },
            ].map((item, i) => (
              <div key={i} className="border-t border-ink-800 pt-8">
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-ink-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          5 STAGES — White, Vertical
          ─────────────────────────────────────────────── */}
      <section id="stufen" className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl w-full">
          <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">Die 5 Wege</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-ink-900 mb-16 leading-tight">
            Ihr Weg zu schnellerer Umsetzung.
          </h2>

          <div className="space-y-16">
            {[
              {
                nr: "0",
                name: "Der Wegweiser",
                sub: "Gratisreport · kostenlos",
                nutzen: "Erkennen Sie, wo KI in Ihrem Haus wirkt",
                inhalte: [
                  "KI-Hebel, die real greifen",
                  "4 Einsatzfelder mit Nutzen",
                  "10 Beispiele aus dem Mittelstand",
                  "Ihr Selbstcheck",
                ],
              },
              {
                nr: "1",
                name: "Ihr Fahrplan",
                sub: "Beratung · förderfähig",
                nutzen: "Der strategische Weg, der zu Ihnen passt",
                inhalte: [
                  "Wo KI Ihre Zeit spart",
                  "Top-3 bis Top-5 Hebel",
                  "90-Tage-Fahrplan",
                  "Förderung geklärt",
                ],
              },
              {
                nr: "2",
                name: "Die Werkstatt",
                sub: "Offene Runden · wöchentlich",
                nutzen: "Von anderen lernen – und sofort anwenden",
                inhalte: [
                  "Dienstag: Marketing-Zielseiten",
                  "Freitag: Produkt & Digitales",
                  "Live an echten Fällen",
                  "Muster mitnehmen",
                ],
              },
              {
                nr: "3",
                name: "Ihr Partner",
                sub: "Monatliche Begleitung",
                nutzen: "Jede Idee wird schneller real",
                inhalte: [
                  "Zielseiten & Verkaufstexte",
                  "Kundenpflege-Prozesse",
                  "Digitale Abläufe",
                  "Ihr Umsetzungspartner",
                ],
              },
              {
                nr: "4",
                name: "Für das ganze Haus",
                sub: "Wöchentliche Begleitung · im Unternehmen",
                nutzen: "Das ganze Team arbeitet sicher mit KI",
                inhalte: [
                  "Fester Wochentermin",
                  "An echten Aufgaben arbeiten",
                  "Ihre Playbooks",
                  "Wissen, das bleibt",
                ],
              },
            ].map((stufe, idx) => (
              <div key={idx} className="border-t border-line pt-12">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-black flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{stufe.nr}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-ink-900 mb-2">{stufe.name}</h3>
                    <p className="text-sm text-brand-600 font-semibold mb-4">{stufe.sub}</p>
                    <p className="text-lg text-ink-700 mb-6 font-medium">{stufe.nutzen}</p>
                    <ul className="space-y-2 mb-8">
                      {stufe.inhalte.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-ink-600">
                          <span className="w-1 h-1 bg-brand-600 rounded-full mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/#kontakt" className="text-sm font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          FEATURES — Black, Simple
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl w-full">
          <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">Überall einsetzbar</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-16 leading-tight">
            Zwölf Einsatzfelder.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Zielseiten",
              "Verkaufstexte",
              "Kundenreisen",
              "Kundenpflege",
              "Kampagnen",
              "Vertriebsprozesse",
              "Produktseiten",
              "Digitale Apps",
              "Interne Prozesse",
              "Anforderungsklarung",
              "Vorlagen",
              "Und mehr",
            ].map((feld, i) => (
              <div key={i} className="border border-ink-800 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-ink-300">{feld}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          COMPARISON — White
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl w-full">
          <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">Der Unterschied</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-ink-900 mb-16 leading-tight">
            Klassisch vs. Neu.
          </h2>

          <div className="space-y-6">
            {[
              { label: "Das Problem", alt: "Tool-Schulung", neu: "Umsetzung echter Ziele" },
              { label: "Wer macht", alt: "Externe Agentur", neu: "Ihr Team + Begleitung" },
              { label: "Das Ergebnis", alt: "Abhängigkeit", neu: "Wissen im Haus" },
              { label: "Der Weg", alt: "Auftrag → Agentur → Schleifen", neu: "Idee → Klären → Testen → Live" },
              { label: "Die Zeit", alt: "Wochen bis Monate", neu: "Tage bis Wochen" },
            ].map((row, i) => (
              <div key={i} className="border-b border-line pb-6 last:border-0">
                <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-3">{row.label}</p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-ink-600">{row.alt}</p>
                  </div>
                  <div>
                    <p className="text-brand-600 font-medium">{row.neu}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          FAQ — Black
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-3xl w-full">
          <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">Fragen</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-16 leading-tight">
            Häufig gefragt.
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Passt das auch zu unserer Größe?",
                a: "Ja. Relevant ist, dass Sie schneller und eigenständiger werden wollen. Größe ist nebensächlich.",
              },
              {
                q: "Ist das ein Kurs?",
                a: "Nein. Nur echte Arbeit an Ihren Projekten. Lernen passiert dabei ganz von selbst.",
              },
              {
                q: "Macht ihr die Arbeit?",
                a: "Nein. Wir machen Sie schneller und besser. Die Arbeit machen Sie selbst.",
              },
              {
                q: "Unterschied zu Tool-Schulung?",
                a: "Schulungen zeigen Tools. Wir zeigen, wie Sie damit Zielseiten in zwei Tagen live bringen.",
              },
              {
                q: "Ist die Beratung förderfähig?",
                a: "Ja – sofern Sie in Deutschland sind. Im kostenlosen Gespräch klären wir das sofort.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group border-b border-ink-800 pb-6 last:border-0 cursor-pointer"
              >
                <summary className="flex items-start justify-between gap-4 text-white font-medium">
                  <span>{faq.q}</span>
                  <span className="text-cyan-400 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-ink-300 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          FINAL CTA — Black
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">Nächster Schritt</p>
          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-8 leading-tight">
            Bereit?
          </h2>
          <p className="text-lg text-ink-300 mb-12 max-w-xl mx-auto">
            Holen Sie sich kostenlos den Gratisreport – oder buchen Sie sofort ein unverbindliches Erstgespräch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#kontakt"
              className="px-6 h-11 rounded-lg bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition flex items-center gap-2"
            >
              Gratisreport jetzt
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#kontakt"
              className="px-6 h-11 rounded-lg border border-cyan-500 text-white text-sm font-medium hover:border-cyan-400 transition"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
