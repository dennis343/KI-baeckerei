import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, Users, Zap, FileText, Target, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "KI-Umsetzung für den Mittelstand – Ihre Ideen, heute live",
  description:
    "Adé Agentur, willkommen alle Möglichkeiten. Marketing, Vertrieb, Produkt und Prozesse – in Tagen, nicht Monaten. Gratisreport, geförderter Einstieg, individuelle Begleitung.",
  path: "/ki-umsetzung",
});

const nutzenAchsen = [
  {
    icon: Clock,
    title: "Ihr Tempo",
    desc: "Ideen entstehen Freitag – Montag sind sie live",
  },
  {
    icon: Zap,
    title: "Mehr produktive Zeit",
    desc: "Weniger Abstimmungen, mehr Arbeit, die wirkt",
  },
  {
    icon: Target,
    title: "Volle Kontrolle",
    desc: "Alles bleibt im Haus. Kein Agentur-Pingpong mehr",
  },
  {
    icon: Users,
    title: "Kleines Team, großer Wurf",
    desc: "Fünf Menschen, hundert Möglichkeiten",
  },
  {
    icon: Sparkles,
    title: "Sicherer treffen",
    desc: "Jede Idee wird geprüft, bevor sie teuer wird",
  },
  {
    icon: FileText,
    title: "Alles greift ineinander",
    desc: "Kundenreise, Seiten, Prozesse – kein Flickwerk mehr",
  },
];

const stufen = [
  {
    nr: "0",
    name: "Der KI-Wegweiser",
    subtitle: "Gratisreport · kostenlos",
    nutzen: "Erkennen Sie, wo KI in Ihrem Haus tatsächlich wirkt",
    inhalte: [
      "Welche KI-Hebel im eigenen Unternehmen real greifen",
      "Vier konkrete Einsatzfelder mit echtem Nutzen",
      "10 Anwendungsbeispiele aus dem Mittelstand",
      "Was wirklich hilft – und was nicht",
      "Ihr persönlicher Selbstcheck",
    ],
    cta: "Report holen",
    color: "cream",
  },
  {
    nr: "1",
    name: "Ihr KI-Fahrplan",
    subtitle: "Persönliche Beratung · förderfähig",
    nutzen: "Der strategische Weg, der genau zu Ihrem Unternehmen passt",
    inhalte: [
      "Wo KI heute schon Ihre Zeit spart und Umsätze hebt",
      "Die Top-3 bis Top-5 Hebel für Ihr Haus",
      "Klare Priorität: Was bringt was",
      "90-Tage-Fahrplan mit konkreten Meilensteinen",
      "Fördermöglichkeiten vollständig geklärt",
    ],
    ergebnis: "Ein schriftlicher Plan. Ihre Klarheit. Ihre Sicherheit.",
    investition: "Gespräch kostenlos",
    cta: "Termin vereinbaren",
    color: "elevated",
  },
  {
    nr: "2",
    name: "Die Praxiswerkstatt",
    subtitle: "Offene Runden · wöchentlich",
    nutzen: "Von anderen Unternehmen lernen – und sofort anwenden",
    inhalte: [
      "Dienstag: Marketing – Zielseiten, Verkaufstexte, Kundenpflege",
      "Freitag: Produkt & Digitales – Seiten, Apps, Helfer",
      "Live an echten Fällen arbeiten",
      "Muster mitnehmen, die Sie morgen nutzen",
      "Mit anderen Unternehmern im gleichen Boot",
    ],
    ergebnis: "Sicherheit. Routine. Sichtbarer Output aus jeder Sitzung.",
    cta: "Werkstätten entdecken",
    color: "elevated",
  },
  {
    nr: "3",
    name: "Ihr Partner im Alltag",
    subtitle: "Monatliche Begleitung",
    nutzen: "Jede Idee wird schneller real – ohne Agentur, ohne Umschweife",
    inhalte: [
      "Zielseiten, Verkaufstexte, Kundenreisen",
      "Kundenpflege-Prozesse, die tatsächlich funktionieren",
      "Digitale Abläufe, interne Vorlagen",
      "Offene Fragen ohne Umwege klären",
      "Ihr eigener Umsetzungspartner",
    ],
    ergebnis: "Idee → Ergebnis in Tagen. Alle Fragen geklärt. Volle Kontrolle.",
    cta: "Partnerschaft beginnen",
    color: "elevated",
  },
  {
    nr: "4",
    name: "KI im ganzen Haus",
    subtitle: "Wöchentliche Begleitung · im Unternehmen",
    nutzen: "Ihr ganzes Team arbeitet sicher mit KI – jeden Tag, überall",
    inhalte: [
      "Fester Wochentermin nur für Sie – zwei Stunden, real impact",
      "Direkt an Ihren echten Aufgaben arbeiten",
      "Ihre Playbooks. Ihre Abläufe. Ihre Routine.",
      "Methodisch sauber. Kein Trial and Error.",
      "Wissen, das bleibt",
    ],
    ergebnis: "Teams, die eigenständig mit KI arbeiten. Messbar mehr Ergebnis. Beständig.",
    cta: "Modell kennenlernen",
    color: "elevated",
  },
];

const anwendungsfelder = [
  "Zielseiten & Landingpages",
  "Verkaufstexte & Angebote",
  "Kundenreisen",
  "Kundenpflege & Abläufe",
  "Kampagnen & Marketing",
  "Vertriebsprozesse",
  "Produkt & Leistungsseiten",
  "Digitale Helfer & Apps",
  "Interne Prozesse",
  "Anforderungen klären",
  "Vorlagen & Systeme",
  "Und alles dazwischen",
];

const abgrenzung = [
  {
    aspekt: "Das Problem",
    alt: "Tool-Schulung (Claude, Figma, …)",
    neu: "Umsetzung echter Geschäftsziele",
  },
  {
    aspekt: "Wer macht es",
    alt: "Externe Agentur",
    neu: "Ihr Team mit unserer Begleitung",
  },
  {
    aspekt: "Das Ergebnis",
    alt: "Abhängigkeit von außen",
    neu: "Wissen, das im Haus bleibt",
  },
  {
    aspekt: "Der Weg",
    alt: "Auftrag → Agentur → viele Schleifen",
    neu: "Idee → klären → testen → live",
  },
  {
    aspekt: "Die Zeit",
    alt: "Wochen bis Monate",
    neu: "Tage bis Wochen",
  },
];

const faqs = [
  {
    frage: "Passt das auch für unsere Größe?",
    antwort:
      "Ja. Ob 10 oder 500 Menschen – relevant ist, dass Sie schneller und eigenständiger werden wollen. Die Größe ist nebensächlich.",
  },
  {
    frage: "Ist das ein Kurs?",
    antwort:
      "Nein. Keine Module, keine Videos, keine Übungen. Nur Arbeit an Ihren echten Projekten. Das Lernen passiert dabei ganz von selbst.",
  },
  {
    frage: "Macht ihr die Arbeit für uns?",
    antwort:
      "Nein. Wir machen Sie schneller und besser. Die Arbeit machen Sie selbst – nur eben viel flüssiger.",
  },
  {
    frage: "Unterschied zu Tool-Schulung?",
    antwort:
      "Schulungen zeigen, wie Claude funktioniert. Wir zeigen, wie Sie mit Claude Ihre Zielseiten in zwei Tagen live bringen. Der Unterschied: Ergebnis statt Werkzeugwissen.",
  },
  {
    frage: "Ist die Beratung wirklich förderfähig?",
    antwort:
      "Ja – sofern Sie in Deutschland sind und die Grundkriterien erfüllen. Im kostenfreien Erstgespräch klären wir das sofort.",
  },
  {
    frage: "Womit fange ich an?",
    antwort:
      "Mit dem Gratisreport. Der kostet nichts und zeigt, wo es bei Ihnen konkret sinnvoll ist. Dann entscheiden Sie, wie tief Sie einsteigen.",
  },
];

const targetAudiences = [
  {
    wer: "Marketing-Leiter",
    herausforderung: "Zu viel Handarbeit, zu lange Durchlaufzeiten, zu viele Schnittstellen",
  },
  {
    wer: "Geschäftsführer",
    herausforderung: "Agenturkosten zu hoch, Kontrolle zu gering, Abhängigkeit zu groß",
  },
  {
    wer: "Produktmanager",
    herausforderung: "Anforderungen sind unklar, Entwicklung dauert, zu viele Missverständnisse",
  },
  {
    wer: "Vertriebsleiter",
    herausforderung: "Vorbereitung dauert, Skalierung stagniert, wenig Automatisierung",
  },
  {
    wer: "Kleine Teams",
    herausforderung: "Zu viel zu tun, zu wenig Zeit, zu viel Reibung, zu wenig Ergebnis",
  },
  {
    wer: "Unternehmer",
    herausforderung: "Breite Aufgaben, begrenzte Ressourcen, schnelles Handeln nötig",
  },
];

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

      {/* ──────────────────────────────────────
         * HERO — Apple-style: massive, clear, compelling
         * ────────────────────────────────────── */}
      <section
        aria-labelledby="ki-title"
        className="relative flex min-h-[90dvh] flex-col items-center justify-center overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-8"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-cream-100 via-white to-white" />
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-50/40 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Gefördert. Individuell. Sofort einsetzbar.
          </p>

          {/* Main Headline — Apple-style massive */}
          <h1
            id="ki-title"
            className="font-display text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.1] tracking-tight text-ink-900"
          >
            Adé Agentur.{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              Willkommen, alle Möglichkeiten.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-2xl text-[clamp(1rem,2vw,1.375rem)] leading-relaxed text-ink-600">
            Marketing, Vertrieb, Produkt, Prozesse – in Tagen, nicht Monaten. Mit Ihrem Team. Im eigenen Haus. Volle Kontrolle.
          </p>

          {/* Trust bullets */}
          <ul className="mx-auto mt-10 space-y-3 text-left">
            {[
              "Montag besprochen – Freitag live",
              "Ihre Ideen greifen sofort, ohne Agentur-Umschweife",
              "Alles bleibt im Haus. Wissen, Kontrolle, Unabhängigkeit",
              "Kleine Teams werden plötzlich schlagkräftig",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                <span className="text-[clamp(0.9375rem,1vw,1.0625rem)] font-medium text-ink-900">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          {/* Hero CTA */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-3">
            <Button href="/#kontakt" variant="primary" size="lg" showArrow>
              Jetzt Gratisreport holen
            </Button>
            <Button href="/#kontakt" variant="secondary" size="lg">
              Kostenloses Erstgespräch
            </Button>
          </div>

          {/* Subtext */}
          <p className="mt-8 text-[13px] text-ink-400">
            5 Minuten ausfüllen · 24 Stunden Antwort · Kein Spam, Versprochen
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────
         * THE SHIFT — Problem/Solution
         * ────────────────────────────────────── */}
      <Section tone="cream" className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-[clamp(1.875rem,5vw,3rem)] text-ink-900">
            So war es bisher
          </h2>
          <div className="mt-8 space-y-4 text-ink-600">
            <p className="text-[clamp(0.9375rem,1vw,1.0625rem)] leading-relaxed">
              <strong>Idee entsteht.</strong> Team bespricht, was nötig ist. Auftrag wird geschrieben. Agentur startet. Rückfragen. Konzept-Vorlage. Kunden-Feedback. Überarbeitung. Nächste Runde. Nächste Runde. Schließlich live – drei Monate später. Budget weg. Know-how weg. Abhängigkeit bleibt.
            </p>
          </div>

          <div className="mt-12 h-px bg-line" />

          <h3 className="mt-12 font-display text-[clamp(1.875rem,5vw,3rem)] text-ink-900">
            Und so geht es jetzt
          </h3>
          <div className="mt-8 space-y-4 text-ink-600">
            <p className="text-[clamp(0.9375rem,1vw,1.0625rem)] leading-relaxed">
              <strong>Idee entsteht.</strong> Anforderung wird klar. Erste Version entsteht – heute noch. Test am echten Fall. Feedback, Anpassung. Morgen schon besser. Freitag: live. Know-how sitzt im Team. Agentur kommt nur, wenn sie wirklich gebraucht wird.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="text-sm font-semibold text-brand-600">Das ist der Unterschied</span>
            <ArrowRight className="h-5 w-5 text-brand-600" aria-hidden="true" />
          </div>
        </div>
      </Section>

      {/* ──────────────────────────────────────
         * 6 BENEFITS — Grid of outcomes
         * ────────────────────────────────────── */}
      <Section className="py-16 lg:py-20" aria-labelledby="nutzen-title">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="nutzen-title" className="font-display text-[clamp(1.875rem,5vw,3rem)] text-ink-900">
            Was sich konkret ändert
          </h2>
          <p className="mt-4 text-ink-500">
            Sechs Bereiche, in denen Sie sofort Unterschied spüren
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nutzenAchsen.map((achse) => {
            const Icon = achse.icon;
            return (
              <div key={achse.title} className="rounded-2xl border border-line bg-white p-8">
                <Icon className="h-8 w-8 text-brand-600" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-ink-900">{achse.title}</h3>
                <p className="mt-2 text-[15px] text-ink-500">{achse.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ──────────────────────────────────────
         * 5 STAGES — Product showcase
         * ────────────────────────────────────── */}
      <Section tone="white" className="py-16 lg:py-20" aria-labelledby="stufen-title">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="stufen-title" className="font-display text-[clamp(1.875rem,5vw,3rem)] text-ink-900">
            Fünf Wege zu Ihrem Ziel
          </h2>
          <p className="mt-4 text-ink-500">
            Jeder Weg ist eigenständig. Zusammen bilden sie ein System.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {stufen.map((stufe, idx) => (
            <div
              key={stufe.nr}
              className={`rounded-2xl border border-line bg-white p-8 sm:p-10 ${
                idx === 1 ? "ring-2 ring-brand-600 ring-offset-4" : ""
              }`}
            >
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
                {/* Number badge */}
                <div className="flex-shrink-0">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50">
                    <span className="font-display text-4xl font-bold text-brand-700">
                      {stufe.nr}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] text-ink-900">
                    {stufe.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-brand-600">{stufe.subtitle}</p>
                  <p className="mt-4 text-[clamp(0.9375rem,1vw,1.0625rem)] font-medium text-ink-900">
                    {stufe.nutzen}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {stufe.inhalte.map((inhalt) => (
                      <li key={inhalt} className="flex gap-3 text-[15px] text-ink-600">
                        <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand-400" aria-hidden="true" />
                        {inhalt}
                      </li>
                    ))}
                  </ul>

                  {stufe.ergebnis && (
                    <p className="mt-6 text-[15px] font-semibold text-ink-900">
                      {stufe.ergebnis}
                    </p>
                  )}

                  {stufe.investition && (
                    <p className="mt-2 text-sm text-ink-500">{stufe.investition}</p>
                  )}

                  <div className="mt-8">
                    <Button href="/#kontakt" variant="ghost" showArrow>
                      {stufe.cta}
                    </Button>
                  </div>
                </div>
              </div>

              {idx === 1 && (
                <div className="mt-6 rounded-lg bg-brand-50 px-4 py-3 text-center text-sm font-medium text-brand-700">
                  Die beliebteste Einstiegsstation
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ──────────────────────────────────────
         * WHERE IT WORKS — Applications
         * ────────────────────────────────────── */}
      <Section tone="brand-soft" className="py-16 lg:py-20" aria-labelledby="felder-title">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="felder-title" className="font-display text-[clamp(1.875rem,5vw,3rem)] text-ink-900">
            Überall, wo Sie es brauchen
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {anwendungsfelder.map((feld) => (
            <div key={feld} className="rounded-xl border border-brand-100 bg-white px-4 py-4 text-center">
              <p className="text-[14px] font-medium text-ink-900">{feld}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ──────────────────────────────────────
         * COMPARISON — Agency vs. This
         * ────────────────────────────────────── */}
      <Section className="py-16 lg:py-20" aria-labelledby="abgrenzung-title">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="abgrenzung-title" className="font-display text-[clamp(1.875rem,5vw,3rem)] text-ink-900">
            Der Unterschied, der zählt
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b-2 border-brand-600">
                <th className="py-4 pr-4 font-semibold text-ink-900">Was passiert</th>
                <th className="py-4 px-4 font-semibold text-ink-600">Klassisch (Agentur)</th>
                <th className="py-4 pl-4 font-semibold text-brand-700">Neu (Umsetzung mit uns)</th>
              </tr>
            </thead>
            <tbody>
              {abgrenzung.map((row) => (
                <tr key={row.aspekt} className="border-b border-line hover:bg-cream-100 transition-colors">
                  <td className="py-4 pr-4 font-medium text-ink-900">{row.aspekt}</td>
                  <td className="py-4 px-4 text-ink-600">{row.alt}</td>
                  <td className="py-4 pl-4 text-brand-700 font-medium">{row.neu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ──────────────────────────────────────
         * FOR WHOM
         * ────────────────────────────────────── */}
      <Section tone="cream" className="py-16 lg:py-20" aria-labelledby="fuer-wen-title">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="fuer-wen-title" className="font-display text-[clamp(1.875rem,5vw,3rem)] text-ink-900">
            Für wen ist das gedacht
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {targetAudiences.map((aud) => (
            <div key={aud.wer} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-semibold text-ink-900">{aud.wer}</h3>
              <p className="mt-3 text-[15px] text-ink-600">{aud.herausforderung}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ──────────────────────────────────────
         * FAQ
         * ────────────────────────────────────── */}
      <Section className="py-16 lg:py-20" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="faq-title" className="font-display text-[clamp(1.875rem,5vw,3rem)] text-ink-900">
            Offene Fragen
          </h2>
        </div>

        <div className="mt-12 mx-auto max-w-2xl space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-line bg-white p-6 hover:border-brand-200 transition-colors cursor-pointer"
            >
              <summary className="flex items-start justify-between gap-4 font-semibold text-ink-900">
                <span>{faq.frage}</span>
                <span className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600 transition-transform group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 text-[15px] text-ink-600 leading-relaxed">{faq.antwort}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ──────────────────────────────────────
         * FINAL CTA — Bold
         * ────────────────────────────────────── */}
      <Section tone="ink" className="py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-tight text-white">
            Bereit?
          </h2>
          <p className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] text-white/80">
            Holen Sie sich kostenlos den Gratisreport – oder buchen Sie sofort ein Erstgespräch.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-3">
            <Button href="/#kontakt" variant="primary" size="lg" showArrow className="bg-white text-ink-900 hover:bg-cream-100">
              Gratisreport jetzt
            </Button>
            <Button href="/#kontakt" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
              Unverbindliches Gespräch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
