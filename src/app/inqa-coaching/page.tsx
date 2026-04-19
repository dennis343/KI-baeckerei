import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  GitBranch,
  Layers,
  Network,
  ScanEye,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "INQA-Coaching — Entscheidungssystem für Ihr Unternehmen",
  description:
    "Bauen Sie mit uns ein funktionierendes Entscheidungssystem: klare Prozesse, sichere Entscheidungen, befähigte Mitarbeiter. Bis zu 80 % INQA-Förderung, bis zu 12 Beratungstage.",
  path: "/inqa-coaching",
});

/* ──────────────────────────────────────────────────────────
 * HERO FAKTEN
 * ────────────────────────────────────────────────────────── */
const heroFacts = [
  { label: "Förderung", value: "bis 80 %" },
  { label: "Beratungstage", value: "bis 12" },
  { label: "Für", value: "KMU" },
  { label: "Begleitung", value: "Concierge" },
];

/* ──────────────────────────────────────────────────────────
 * 5 SYSTEM-MODULE (Problem → Lösung → Ergebnis)
 * ────────────────────────────────────────────────────────── */
const module_: {
  nr: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  problem: string;
  loesung: string;
  ergebnis: string;
}[] = [
  {
    nr: "01",
    icon: ScanEye,
    title: "Transparenz-System",
    problem: "Niemand hat einen echten Überblick — Entscheidungen beruhen auf Bauchgefühl.",
    loesung: "Wir machen Prozesse, Kennzahlen und Engpässe sichtbar — in einer Struktur, die jeder im Unternehmen liest.",
    ergebnis: "Klare Ausgangslage. Fundierte Entscheidungen statt Annahmen.",
  },
  {
    nr: "02",
    icon: Workflow,
    title: "Prozess-System",
    problem: "Abläufe sind informell, Forderungen bleiben liegen, Liquidität wird unplanbar.",
    loesung: "Wir etablieren verbindliche Prozesse — inklusive sauberem Forderungsmanagement als Prozess (nicht als Inkasso).",
    ergebnis: "Strukturierte Abläufe. Planbare Liquidität. Weniger Reibung.",
  },
  {
    nr: "03",
    icon: GitBranch,
    title: "Entscheidungs-System",
    problem: "Jede Entscheidung landet beim Chef — Geschwindigkeit und Qualität leiden.",
    loesung: "Wir bauen eine Entscheidungslogik mit klaren Kriterien, Eskalationsstufen und Verantwortlichkeiten.",
    ergebnis: "Schnellere, sicherere Entscheidungen — auf der richtigen Ebene.",
  },
  {
    nr: "04",
    icon: Network,
    title: "Struktur- & Schnittstellen-System",
    problem: "Teams arbeiten nebeneinander. Übergaben brechen. Externe Partner werden zum Stressfaktor.",
    loesung: "Wir definieren Rollen, Schnittstellen und Übergabepunkte — intern wie zu externen Spezialisten.",
    ergebnis: "Saubere Zusammenarbeit. Verzahnte interne und externe Prozesse.",
  },
  {
    nr: "05",
    icon: Users,
    title: "Mitarbeiter-System",
    problem: "Wissen hängt an Einzelpersonen. Fällt jemand aus, steht das Unternehmen.",
    loesung: "Wir befähigen Ihr Team direkt im System — mit klaren Rollen, Schulung und aktiver Einbindung.",
    ergebnis: "Mitarbeiter arbeiten eigenständig im System. Wissen bleibt im Unternehmen.",
  },
];

/* ──────────────────────────────────────────────────────────
 * EXPERTEN-NETZWERK (Systemisch – keine Leistung verkaufen)
 * ────────────────────────────────────────────────────────── */
const expertenFelder = [
  "Offene Forderungen",
  "Rechtliche Fragestellungen",
  "Steuerliche Unsicherheiten",
  "Wirtschaftlicher Druck",
];

const expertenSystemLeistungen = [
  "Klare Eskalationsstufen definieren",
  "Festlegen, wann externe Spezialisten sinnvoll eingebunden werden",
  "Übergaben strukturiert vorbereiten",
  "Interne Prozesse mit externem Know-how verzahnen",
];

/* ──────────────────────────────────────────────────────────
 * ABGRENZUNG
 * ────────────────────────────────────────────────────────── */
const abgrenzung = [
  "Keine Rechtsberatung",
  "Keine Steuerberatung",
  "Keine Einzelfalllösung",
];

/* ──────────────────────────────────────────────────────────
 * ABLAUF
 * ────────────────────────────────────────────────────────── */
const ablauf = [
  {
    step: 1,
    title: "Förderfähigkeit prüfen",
    body: "Wir klären in einem Erstgespräch, ob Ihr Unternehmen die INQA-Voraussetzungen erfüllt.",
  },
  {
    step: 2,
    title: "Antrag stellen",
    body: "Der Concierge-Service begleitet Sie vollständig durch den INQA-Antragsprozess bei der zuständigen Förderstelle.",
  },
  {
    step: 3,
    title: "Coaching starten",
    body: "Aufbau Ihres Entscheidungssystems in aufeinander aufbauenden Modulen — direkt in Ihrem Alltag.",
  },
  {
    step: 4,
    title: "System implementieren",
    body: "Ihre Mitarbeiter arbeiten ab sofort im neuen System. Nachhaltige Umsetzung statt PowerPoint-Projekt.",
  },
];

/* ──────────────────────────────────────────────────────────
 * FAQ
 * ────────────────────────────────────────────────────────── */
const faqs = [
  {
    frage: "Muss ich schon wissen, was ich brauche?",
    antwort:
      "Nein — genau dafür ist das Coaching da. Im ersten Modul schaffen wir gemeinsam Transparenz über Ihre aktuelle Ausgangslage.",
  },
  {
    frage: "Wie hoch ist mein Eigenanteil?",
    antwort:
      "Je nach Förderquote liegt Ihr Eigenanteil zwischen 20 % und 50 %. Die genaue Höhe klären wir im Erstgespräch.",
  },
  {
    frage: "Wie lange dauert das Coaching?",
    antwort:
      "In der Regel mehrere Wochen bis wenige Monate — je nach Umfang der Module und Tiefe der Umsetzung in Ihrem Unternehmen.",
  },
  {
    frage: "Wer führt das Coaching durch?",
    antwort:
      "Ausschließlich autorisierte, zertifizierte INQA-Coaches aus unserem Team. Die Zulassung erfolgt nach strengen Kriterien des BMAS und wird regelmäßig überprüft.",
  },
  {
    frage: "Was, wenn wir externe Spezialisten (Anwalt, Steuerberater) brauchen?",
    antwort:
      "Das INQA-Coaching ersetzt keine Fachberatung. Stattdessen etablieren wir ein System, das klar definiert, wann und wie externe Spezialisten eingebunden werden — damit Ihr Unternehmen strukturiert damit arbeiten kann.",
  },
];

export default function InqaCoachingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Unternehmen", href: "/unternehmen" },
          { name: "INQA-Coaching", href: "/inqa-coaching" },
        ]}
      />

      {/* ─────────────────────────────────────
       * HERO
       * ───────────────────────────────────── */}
      <Section aria-labelledby="inqa-title">
        <SectionHeader
          as="h1"
          eyebrow="INQA-Coaching · Bis zu 80 % gefördert"
          titleId="inqa-title"
          title="Bauen Sie ein funktionierendes Entscheidungssystem für Ihr Unternehmen"
          intro="Schaffen Sie klare Prozesse, sichere Entscheidungsstrukturen und ein System, das Ihr Unternehmen stabil steuert — mit bis zu 80 % staatlicher Förderung."
        />
        <ul className="mt-8 space-y-2.5">
          {[
            "Klare Prozesse statt täglichem Chaos",
            "Schnellere und sichere Entscheidungen",
            "Mitarbeiter arbeiten im gleichen System",
            "Weniger Abhängigkeit von Einzelpersonen",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-[15px] text-ink-700">
              <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {heroFacts.map((f) => (
            <div key={f.label} className="rounded-xl border border-line bg-white p-4 text-center">
              <p className="font-display text-xl font-semibold text-brand-600">{f.value}</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">{f.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/#kontakt"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45">
            Förderfähigkeit prüfen
          </Link>
          <Link href="/#kontakt"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-6 text-[15px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45">
            Erstgespräch sichern
          </Link>
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * PROBLEM
       * ───────────────────────────────────── */}
      <Section tone="cream" aria-labelledby="inqa-problem">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Die eigentliche Ursache
          </p>
          <h2 id="inqa-problem" className="mt-2 font-display text-display-md text-ink-900">
            Die meisten Unternehmen haben kein Leistungsproblem — sondern ein Strukturproblem
          </h2>
          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink-500">
            <p>In fast jedem KMU tauchen dieselben Muster auf:</p>
            <ul className="space-y-2.5">
              {[
                "Entscheidungen dauern zu lange",
                "Prozesse sind nicht sauber definiert",
                "Mitarbeiter arbeiten nebeneinander statt im System",
                "Probleme werden immer wieder neu gelöst",
                "Digitalisierung bleibt Stückwerk",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-600" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-base font-medium text-ink-900">
              Es liegt selten am Einsatz des Teams — es liegt an fehlender Struktur.
              INQA-Coaching setzt genau hier an.
            </p>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * SYSTEM-MECHANISMUS: 5 MODULE
       * ───────────────────────────────────── */}
      <Section aria-labelledby="inqa-module">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          Der Mechanismus
        </p>
        <h2 id="inqa-module" className="mt-2 font-display text-display-md text-ink-900">
          Was im INQA-Coaching entsteht
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Fünf aufeinander aufbauende System-Bausteine. Jedes Modul folgt derselben
          Logik: Problem erkennen → System bauen → Ergebnis im Alltag.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {module_.map((m) => {
            const Icon = m.icon;
            return (
              <Card key={m.nr} variant="elevated" className="flex flex-col">
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Modul {m.nr}
                    </span>
                    <h3 className="mt-0.5 font-sans text-base font-semibold text-ink-900">
                      {m.title}
                    </h3>
                  </div>
                </div>
                <dl className="mt-5 space-y-3 text-[14px] leading-relaxed">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                      Problem
                    </dt>
                    <dd className="mt-1 text-ink-700">{m.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                      Lösung
                    </dt>
                    <dd className="mt-1 text-ink-700">{m.loesung}</dd>
                  </div>
                  <div className="rounded-xl bg-brand-50/60 px-3 py-2.5">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-700">
                      Ergebnis
                    </dt>
                    <dd className="mt-0.5 text-[14px] font-medium text-ink-900">
                      {m.ergebnis}
                    </dd>
                  </div>
                </dl>
              </Card>
            );
          })}

          {/* Ergebnis-Karte */}
          <Card variant="ink" className="flex flex-col justify-center md:col-span-2">
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-500 text-white"
              >
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
                  Zusammenspiel der Module
                </p>
                <p className="mt-2 font-display text-display-sm text-white">
                  Ein Entscheidungssystem, das im Alltag funktioniert — nicht nur auf dem Papier.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * EXPERTEN-NETZWERK (SYSTEMISCH)
       * ───────────────────────────────────── */}
      <Section tone="cream" aria-labelledby="inqa-experten">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              System für komplexe Situationen
            </p>
            <h2 id="inqa-experten" className="mt-2 font-display text-display-md text-ink-900">
              Ein System, das auch in komplexen Situationen funktioniert
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Viele Unternehmen haben keinen klaren Umgang mit kritischen Themen:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {expertenFelder.map((e) => (
                <li key={e} className="flex items-start gap-2 text-[14px] text-ink-700">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-600" aria-hidden="true" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-700">
              <span className="font-semibold text-ink-900">Das eigentliche Problem:</span>{" "}
              Nicht der Mangel an Experten — sondern der fehlende strukturierte Umgang damit.
            </p>
          </div>

          <Card variant="elevated">
            <h3 className="font-sans text-base font-semibold text-ink-900">
              Im Coaching entsteht ein System, das …
            </h3>
            <ul className="mt-4 space-y-3">
              {expertenSystemLeistungen.map((l) => (
                <li key={l} className="flex items-start gap-3 text-[14px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-brand-50/70 p-4">
              <p className="text-[14px] font-medium leading-relaxed text-ink-900">
                Ihr Unternehmen wird so aufgestellt, dass es mit externen Spezialisten
                effektiv arbeiten kann — strukturiert, planbar, entscheidungssicher.
              </p>
            </div>
            <p className="mt-4 text-[12px] leading-relaxed text-ink-500">
              Hinweis: Die Leistungen externer Spezialisten sind nicht Bestandteil
              des INQA-Coachings. Das Coaching baut das System, über das Ihr Unternehmen
              diese Spezialisten bei Bedarf sinnvoll einbindet.
            </p>
          </Card>
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * FÖRDERUNG
       * ───────────────────────────────────── */}
      <Section aria-labelledby="inqa-foerder">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Staatliche Förderung
            </p>
            <h2 id="inqa-foerder" className="mt-2 font-display text-display-md text-ink-900">
              Bis zu 80 % Förderung über INQA-Coaching
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Das INQA-Coaching wird staatlich gefördert, weil es die Zukunftsfähigkeit
              von kleinen und mittleren Unternehmen (KMU) gezielt stärkt. Die Förderung
              läuft über das Bundesministerium für Arbeit und Soziales (BMAS).
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Wir begleiten Sie durch den gesamten Förderprozess — von der
              Förderfähigkeitsprüfung bis zur Abrechnung.
            </p>
          </div>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">Förderrahmen auf einen Blick</h3>
            <dl className="mt-4 space-y-3 text-[14px]">
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-700">Förderquote</dt>
                <dd className="font-semibold text-brand-700">bis zu 80 %</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-700">Beratungstage</dt>
                <dd className="font-semibold text-brand-700">bis zu 12 Tage</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-700">Zielgruppe</dt>
                <dd className="font-semibold text-ink-900">KMU</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-700">Fördergeber</dt>
                <dd className="font-semibold text-ink-900">BMAS</dd>
              </div>
            </dl>
            <div className="mt-5">
              <Link href="/#kontakt"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-brand-600 px-5 text-[14px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45">
                Förderfähigkeit prüfen
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * ABGRENZUNG
       * ───────────────────────────────────── */}
      <Section tone="cream" aria-labelledby="inqa-abgrenzung">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Klare Abgrenzung
          </p>
          <h2 id="inqa-abgrenzung" className="mt-2 font-display text-display-md text-ink-900">
            Was dieses Coaching bewusst nicht ist
          </h2>
          <ul className="mt-8 space-y-3">
            {abgrenzung.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-[15px] text-ink-700">
                <X className="mt-0.5 h-5 w-5 flex-none text-ink-400" aria-hidden="true" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/60 p-5 text-[15px] font-medium leading-relaxed text-ink-900">
            Stattdessen bauen wir die Struktur, mit der Ihr Unternehmen solche
            Themen systematisch steuern kann.
          </p>
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * ABLAUF
       * ───────────────────────────────────── */}
      <Section aria-labelledby="inqa-ablauf">
        <h2 id="inqa-ablauf" className="font-display text-display-md text-ink-900">
          So läuft das INQA-Coaching ab
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ablauf.map((a) => (
            <li key={a.step} className="rounded-2xl border border-line bg-white p-7">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white"
              >
                {a.step}
              </span>
              <h3 className="mt-4 font-sans text-base font-semibold text-ink-900">{a.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{a.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ─────────────────────────────────────
       * USP
       * ───────────────────────────────────── */}
      <Section tone="brand-soft" aria-labelledby="inqa-usp">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Der Unterschied
          </p>
          <h2 id="inqa-usp" className="mt-2 font-display text-display-md text-ink-900">
            Kein Einzelansatz — sondern ein funktionierendes System
          </h2>
          <p className="mt-5 text-lead text-ink-700">
            Wir schaffen die Struktur, die entscheidet, wann welche Maßnahme
            wirklich sinnvoll ist.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Prozesse greifen ineinander",
            "Entscheidungen folgen klaren Regeln",
            "Mitarbeiter arbeiten im gleichen System",
            "Externe Spezialisten werden gezielt eingebunden",
          ].map((u) => (
            <div key={u} className="rounded-xl border border-line bg-white p-5 text-center">
              <Check className="mx-auto h-5 w-5 text-brand-600" aria-hidden="true" />
              <p className="mt-3 text-[14px] font-medium text-ink-900">{u}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * FAQ
       * ───────────────────────────────────── */}
      <Section aria-labelledby="inqa-faq">
        <h2 id="inqa-faq" className="font-display text-display-md text-ink-900">
          Häufige Fragen zum INQA-Coaching
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <Card key={f.frage} variant="outline">
              <h3 className="font-sans text-base font-semibold text-ink-900">{f.frage}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{f.antwort}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * CONCIERGE + COACH-NACHWEIS
       * ───────────────────────────────────── */}
      <Section tone="cream" aria-labelledby="inqa-concierge">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Ihr Begleiter im Prozess
            </p>
            <h2 id="inqa-concierge" className="mt-2 font-display text-display-md text-ink-900">
              Der Concierge-Service — vom Antrag bis zur Umsetzung
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Förderantrag, Behördenkommunikation, Dokumentation — wir übernehmen die
              gesamte Koordination, damit Sie sich auf das Wesentliche konzentrieren
              können: Ihr Unternehmen.
            </p>
            <Link href="/concierge-service"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded">
              Mehr zum Concierge-Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-6">
            <Image src="/dozenten/florian-domin.png" alt="Porträt von Florian Domin, CEO der WissensReich Academy" width={64} height={64}
              className="h-16 w-16 flex-none rounded-full object-cover" />
            <div>
              <p className="font-sans text-base font-semibold text-ink-900">Florian Domin</p>
              <p className="mt-0.5 text-[14px] font-medium text-brand-700">CEO · Leitung Concierge-Service</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                &bdquo;Das INQA-Coaching führen ausschließlich <strong>autorisierte, zertifizierte INQA-Coaches</strong> aus unserem Team durch — mit Erfahrung in KMU-Organisationen, Personalführung und Change-Prozessen.&ldquo;
              </p>
              <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-brand-700">
                Zertifizierte INQA-Coaches · Autorisiert nach INQA-Programmrichtlinie des BMAS
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────
       * CTA FINAL
       * ───────────────────────────────────── */}
      <Section tone="ink" aria-labelledby="inqa-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="inqa-cta" className="font-display text-display-md text-white">
            Starten Sie jetzt — bevor fehlende Struktur zum Risiko wird
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Je früher Sie ein funktionierendes Entscheidungssystem aufbauen,
            desto mehr Zeit, Geld und Energie sparen Sie langfristig.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60">
              Förderfähigkeit prüfen
            </Link>
            <Link href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60">
              Gespräch buchen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
