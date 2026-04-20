import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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

      {/* ──────────────────────────────────────────────────
          HERO — Black, Massive White Typography
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <p className="text-sm font-medium tracking-wide text-white/60 uppercase mb-12">
            Die Alternative zur Agentur
          </p>

          {/* Main Headline — Pure white, massive, serif */}
          <h1 className="text-[clamp(3.5rem,14vw,8rem)] font-serif font-bold leading-[1] tracking-tight text-white mb-8">
            Adé Agentur.
          </h1>

          <h2 className="text-[clamp(2.5rem,10vw,5.5rem)] font-serif font-bold leading-[1.1] tracking-tight text-white">
            Willkommen, alle{" "}
            <span className="text-brand-400">Möglichkeiten.</span>
          </h2>

          {/* Subheadline */}
          <p className="mt-12 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            Marketing, Vertrieb, Produkt, Prozesse – in Tagen, nicht Monaten. Mit Ihrem Team. Im eigenen Haus. Volle Kontrolle.
          </p>

          {/* Trust line */}
          <p className="mt-8 text-sm text-white/50">
            <span className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-400" aria-hidden="true" />
              Montag besprochen – Freitag live
            </span>
          </p>

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/#kontakt"
              className="px-8 h-12 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition flex items-center gap-2"
            >
              Gratisreport holen
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#kontakt"
              className="px-8 h-12 rounded-lg border border-white/30 text-white text-sm font-semibold hover:border-white transition"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          THE SHIFT — White background, Black/Blue Typography
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            So war es.
          </h2>
          <p className="text-lg text-black/70 max-w-2xl leading-relaxed mb-6 font-light">
            Idee. Briefing. Agentur-Auswahl. Kick-off. Rückfragen. Konzept. Revision. Revision. Revision. Abnahme. Go-Live drei Monate später. Budget weg. Know-how weg. Abhängigkeit bleibt.
          </p>

          <div className="h-px bg-black/10 my-20" />

          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            So geht es jetzt.
          </h2>
          <p className="text-lg text-brand-600 max-w-2xl leading-relaxed font-light">
            Idee. Anforderung klären. Erste Version heute noch. Test. Feedback. Morgen besser. Freitag: live. Know-how sitzt im Team. Agentur kommt nur, wenn gebraucht.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          6 OUTCOMES — Black, White Headings, Blue Body
          ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-6xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Sechs Felder.
          </h2>
          <p className="text-sm text-white/50 uppercase tracking-wide mb-20 font-medium">
            Was sich konkret ändert
          </p>

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
              <div key={i} className="border-t border-white/20 pt-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-base text-brand-300 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          5 STAGES — White background
          ─────────────────────────────────────────────── */}
      <section id="stufen" className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-4">
            Ihr Weg zu schnellerer Umsetzung.
          </h2>
          <p className="text-sm text-black/50 uppercase tracking-wide mb-20 font-medium">
            Fünf Wege
          </p>

          <div className="space-y-24">
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
              <div key={idx} className="border-b border-black/10 pb-20 last:border-0 last:pb-0">
                <div className="flex items-start gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-black flex items-center justify-center">
                      <span className="text-4xl font-serif font-bold text-white">{stufe.nr}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-serif font-bold text-black mb-2">{stufe.name}</h3>
                    <p className="text-sm text-brand-600 font-semibold uppercase tracking-wide mb-6">{stufe.sub}</p>
                    <p className="text-lg text-black font-light mb-8">{stufe.nutzen}</p>
                    <ul className="space-y-3 mb-10">
                      {stufe.inhalte.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-black/70 font-light">
                          <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/#kontakt" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-2">
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
          FEATURES — Black background
          ─────────────────────────────────────────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-6xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Zwölf Einsatzfelder.
          </h2>
          <p className="text-sm text-white/50 uppercase tracking-wide mb-20 font-medium">
            Überall einsetzbar
          </p>

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
              <div key={i} className="border border-white/20 rounded-lg p-6 text-center">
                <p className="text-base font-light text-white">{feld}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          COMPARISON — White background
          ─────────────────────────────────────────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-4">
            Klassisch vs. Neu.
          </h2>
          <p className="text-sm text-black/50 uppercase tracking-wide mb-20 font-medium">
            Der Unterschied
          </p>

          <div className="space-y-10">
            {[
              { label: "Das Problem", alt: "Tool-Schulung", neu: "Umsetzung echter Ziele" },
              { label: "Wer macht", alt: "Externe Agentur", neu: "Ihr Team + Begleitung" },
              { label: "Das Ergebnis", alt: "Abhängigkeit", neu: "Wissen im Haus" },
              { label: "Der Weg", alt: "Auftrag → Agentur → Schleifen", neu: "Idee → Klären → Testen → Live" },
              { label: "Die Zeit", alt: "Wochen bis Monate", neu: "Tage bis Wochen" },
            ].map((row, i) => (
              <div key={i} className="border-b border-black/10 pb-10 last:border-0">
                <p className="text-xs text-black/40 uppercase tracking-widest font-semibold mb-4">{row.label}</p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-base text-black/60 font-light">{row.alt}</p>
                  </div>
                  <div>
                    <p className="text-base text-brand-600 font-semibold">{row.neu}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          FAQ — Black background
          ─────────────────────────────────────────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-4xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Häufig gefragt.
          </h2>
          <p className="text-sm text-white/50 uppercase tracking-wide mb-20 font-medium">
            Fragen
          </p>

          <div className="space-y-6">
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
                className="group border-t border-white/20 py-6 cursor-pointer"
              >
                <summary className="flex items-start justify-between gap-4 text-white font-semibold text-lg">
                  <span className="text-left">{faq.q}</span>
                  <span className="text-brand-400 transition group-open:rotate-180 flex-shrink-0">▼</span>
                </summary>
                <p className="mt-6 text-brand-300 leading-relaxed font-light">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          FINAL CTA — Black
          ─────────────────────────────────────────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-6xl sm:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Bereit?
          </h2>
          <p className="text-lg text-white/70 mb-16 max-w-xl mx-auto font-light">
            Holen Sie sich kostenlos den Gratisreport – oder buchen Sie sofort ein unverbindliches Erstgespräch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/#kontakt"
              className="px-8 h-12 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition flex items-center gap-2"
            >
              Gratisreport jetzt
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#kontakt"
              className="px-8 h-12 rounded-lg border border-white/30 text-white text-sm font-semibold hover:border-white transition"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
