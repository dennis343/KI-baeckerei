import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Shield,
  AlertTriangle,
  Clock,
  Network,
  FileCheck,
  Users,
  TrendingUp,
  Lock,
  X,
  ChevronRight,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Fördermittel-Concierge für Unternehmen — Bürokratie beherrschbar machen",
  description:
    "Ihr strukturierter Concierge-Service für Fördermittel, Anträge und administrative Prozesse. Sicher, transparent und ohne unnötigen Aufwand — für KMU und Berater.",
  path: "/concierge-unternehmen",
});

/* ─── DATA ─────────────────────────────────────────────── */

const fears = [
  { icon: AlertTriangle, text: "Ich mache etwas falsch und merke es zu spät." },
  { icon: Lock, text: "Am Ende muss ich alles zurückzahlen." },
  { icon: Clock, text: "Der Aufwand übersteigt den Nutzen bei Weitem." },
  { icon: FileCheck, text: "Ich verliere mich im Papierkram und den Fristen." },
  { icon: Shield, text: "Ich weiß nicht, wem ich bei diesem Thema vertrauen kann." },
];

const fearResolve = [
  {
    wrong: "Fördermittel sind das Risiko",
    right: "Unstrukturierte Prozesse sind das Risiko",
    body: "Fehler entstehen nicht, weil Förderung komplex ist — sondern weil Zuständigkeiten, Fristen und Unterlagen nicht sauber koordiniert werden. Genau das beheben wir.",
  },
];

const systemPillars = [
  {
    icon: FileCheck,
    title: "Struktur",
    body: "Jeder Vorgang erhält eine klare Struktur: Welche Unterlagen, welche Fristen, welche Entscheidungen — bevor es losgeht.",
  },
  {
    icon: Network,
    title: "Koordination",
    body: "Wir koordinieren alle Beteiligten — intern und extern — damit nichts zwischen den Stühlen fällt.",
  },
  {
    icon: Clock,
    title: "Transparenter Ablauf",
    body: "Sie sehen jederzeit, wo Ihr Vorgang steht. Keine offenen Fragen, keine unerwarteten Rückfragen.",
  },
  {
    icon: Shield,
    title: "Qualitätskontrolle",
    body: "Jedes Dokument wird geprüft, bevor es einereicht wird. Rückfragen und Ablehnungen werden systematisch minimiert.",
  },
];

const expertise = [
  {
    icon: Shield,
    title: "Tiefes Systemverständnis",
    body: "Wir erkennen kritische Fehlerquellen frühzeitig — bevor sie zu Rückforderungen werden.",
  },
  {
    icon: TrendingUp,
    title: "Fördermittelwissen",
    body: "Breites Wissen über Programme, Voraussetzungen und Ausschlusskriterien reduziert Unsicherheit auf ein Minimum.",
  },
  {
    icon: Network,
    title: "Starkes Netzwerk",
    body: "Bei Spezialfällen greifen wir auf ein erprobtes Netz aus Fachleuten zurück — für schnelle, verlässliche Lösungen.",
  },
  {
    icon: FileCheck,
    title: "Digitale Prozesskompetenz",
    body: "Digitalisierte Abläufe beschleunigen die Bearbeitung und schaffen lückenlose Nachvollziehbarkeit.",
  },
];

const steps = [
  {
    nr: "01",
    title: "Struktur schaffen",
    body: "Gemeinsam legen wir fest: Was ist förderfähig? Was wird benötigt? Welche Fristen gelten? Sie bekommen sofort Klarheit.",
  },
  {
    nr: "02",
    title: "Unterlagen koordinieren",
    body: "Wir erstellen eine vollständige Checkliste, koordinieren alle erforderlichen Dokumente und begleiten die Zusammenstellung.",
  },
  {
    nr: "03",
    title: "Kommunikation führen",
    body: "Rückfragen von Behörden, Abstimmungen mit Partnern, Fristenmanagement — wir übernehmen die gesamte Kommunikation.",
  },
  {
    nr: "04",
    title: "Abschluss sichern",
    body: "Vollständige Prüfung aller Unterlagen vor Einreichung. Saubere Dokumentation. Kein Stein bleibt ungewendet.",
  },
];

const b2bBenefits = [
  "Ihre Kunden erhalten eine strukturierte Prozessführung — ohne eigenen Aufwand",
  "Sie positionieren sich als Anbieter mit Premium-Infrastruktur",
  "Weniger operative Belastung für Ihr Team bei komplexen Vorgängen",
  "Skalierbar: Nutzen Sie den Service für jeden Ihrer Kunden",
];

const trustStats = [
  { value: "90–95 %", label: "Bewilligungsquote" },
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "5+", label: "Zertifizierungen" },
  { value: "AZAV", label: "Trägerzulassung" },
];

/* ─── PAGE ──────────────────────────────────────────────── */

export default function ConciergeUnternehmenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Unternehmen", href: "/unternehmen" },
          { name: "Fördermittel-Concierge", href: "/concierge-unternehmen" },
        ]}
      />

      {/* ── HERO ── */}
      <Section aria-labelledby="cu-title">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            <Shield className="h-3.5 w-3.5" aria-hidden="true" />
            Fördermittel-Concierge · Für Unternehmen &amp; Berater
          </p>
          <h1
            id="cu-title"
            className="mt-5 font-display text-display-lg text-ink-900"
          >
            Bürokratie kostet Sie Zeit, Geld und Nerven.
            <span className="block text-brand-600">Wir machen sie für Sie beherrschbar.</span>
          </h1>
          <p className="mt-5 text-lead text-ink-500">
            Ihr persönlicher Concierge für Fördermittel, Anträge und
            administrative Prozesse — ohne Unsicherheit, ohne Chaos,
            ohne unnötigen Aufwand.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://tidycal.com/team/concierge-team-wissensreich/personliches-gesprach-kurs-und-fordermittelberatung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              Prozess prüfen lassen <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-6 text-[15px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      </Section>

      {/* ── TRUST LOGOS / STATS ── */}
      <Section tone="cream" aria-label="Vertrauen und Kennzahlen">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {trustStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-white p-5 text-center"
            >
              <p className="font-display text-2xl font-semibold text-brand-600">
                {s.value}
              </p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[13px] text-ink-500">
          AZAV-zertifiziert · ISO 9001 · CERTQUA · Regelmäßig kontrolliert
        </p>
      </Section>

      {/* ── PROBLEM ── */}
      <Section aria-labelledby="cu-problem">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Die eigentliche Hürde
          </p>
          <h2
            id="cu-problem"
            className="mt-2 font-display text-display-md text-ink-900"
          >
            Warum viele Unternehmen Fördermittel nicht nutzen
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Es liegt selten an fehlendem Interesse — es liegt an den Gedanken,
            die entstehen, sobald man sich mit dem Thema beschäftigt:
          </p>
          <ul className="mt-8 space-y-4">
            {fears.map((f) => {
              const Icon = f.icon;
              return (
                <li
                  key={f.text}
                  className="flex items-start gap-4 rounded-xl border border-line bg-white p-5"
                >
                  <Icon className="mt-0.5 h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                  <p className="text-[15px] leading-relaxed text-ink-900">{f.text}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-base font-medium text-ink-900">
            Diese Gedanken sind nachvollziehbar. Und sie sind lösbar —
            mit dem richtigen System.
          </p>
        </div>
      </Section>

      {/* ── FEAR RESOLUTION ── */}
      <Section tone="cream" aria-labelledby="cu-fear">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Die Wahrheit
          </p>
          <h2
            id="cu-fear"
            className="mt-2 font-display text-display-md text-ink-900"
          >
            Genau diese Unsicherheit ist das eigentliche Problem
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Card variant="outline" className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <X className="h-4 w-4 text-ink-400" aria-hidden="true" />
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                  Häufige Fehlannahme
                </p>
              </div>
              <p className="text-[15px] font-medium text-ink-900">
                Fördermittel sind das Risiko.
              </p>
              <p className="text-[14px] leading-relaxed text-ink-500">
                Viele Unternehmen vermeiden Förderprogramme, weil sie das Thema
                selbst als riskant betrachten.
              </p>
            </Card>
            <Card variant="elevated" className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-700">
                  Die eigentliche Ursache
                </p>
              </div>
              <p className="text-[15px] font-medium text-ink-900">
                Unstrukturierte Prozesse sind das Risiko.
              </p>
              <p className="text-[14px] leading-relaxed text-ink-500">
                Fehler entstehen durch fehlende Koordination, unklare
                Zuständigkeiten und lückenhafte Dokumentation — nicht durch
                Förderprogramme selbst.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
            <p className="text-base font-semibold text-ink-900">
              Mit klaren Prozessen passiert Folgendes:
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Sie wissen jederzeit, was zu tun ist — kein Raten, kein Suchen",
                "Fehler werden erkannt, bevor sie einreicht werden",
                "Sie behalten die volle Kontrolle, ohne den Aufwand selbst tragen zu müssen",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-[15px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── SOLUTION ── */}
      <Section aria-labelledby="cu-solution">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Das Kernprinzip
          </p>
          <h2
            id="cu-solution"
            className="mt-2 font-display text-display-md text-ink-900"
          >
            Ein System, das Bürokratie steuerbar macht
          </h2>
          <p className="mt-5 text-lead text-ink-500">
            Wir helfen nicht — wir strukturieren. Ihr gesamter Prozess wird
            so aufgebaut, dass Sie Kontrolle haben, Fehler vermieden werden
            und Ergebnisse planbar sind.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {systemPillars.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} variant="elevated">
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <p className="mt-8 rounded-2xl border border-line bg-white p-5 text-center text-[15px] font-medium text-ink-900">
          Hinweis: Der Concierge-Service umfasst Koordination, Strukturierung
          und Prozessführung — keine Rechtsberatung, keine Steuerberatung,
          keine verbindlichen Entscheidungen.
        </p>
      </Section>

      {/* ── EXPERTISE ── */}
      <Section tone="cream" aria-labelledby="cu-expertise">
        <SectionHeader
          eyebrow="Warum es funktioniert"
          titleId="cu-expertise"
          title="Kompetenz, die Sie vor Fehlern schützt"
          intro="Hinter dem Concierge-Service steht kein generisches Assistenzsystem — sondern tiefes Fach- und Prozesswissen, das gezielt eingesetzt wird."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {expertise.map((e) => {
            const Icon = e.icon;
            return (
              <Card key={e.title} variant="outline">
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink-900">
                      {e.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                      {e.body}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ── PROCESS ── */}
      <Section aria-labelledby="cu-process">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          Der Ablauf
        </p>
        <h2
          id="cu-process"
          className="mt-2 font-display text-display-md text-ink-900"
        >
          Vier Schritte. Volle Kontrolle.
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Jeder Vorgang folgt demselben strukturierten Ablauf — transparent,
          nachvollziehbar und ohne Überraschungen.
        </p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.nr} className="rounded-2xl border border-line bg-white p-7">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white"
              >
                {s.nr}
              </span>
              <h3 className="mt-4 font-sans text-base font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── B2B SECTION ── */}
      <Section tone="brand-soft" aria-labelledby="cu-b2b">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Für Berater &amp; Agenturen
            </p>
            <h2
              id="cu-b2b"
              className="mt-2 font-display text-display-md text-ink-900"
            >
              Auch für Ihre Kunden einsetzbar
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              Gönnen Sie Ihren Kunden eine Premiumbetreuung.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
              Der Concierge-Service ist white-label-fähig und lässt sich nahtlos
              in Ihre eigene Dienstleistung integrieren. Sie bieten Ihren Kunden
              eine strukturierte Prozessführung — ohne den operativen Aufwand
              selbst stemmen zu müssen.
            </p>
            <ul className="mt-6 space-y-3">
              {b2bBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[15px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/#kontakt"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
              >
                Partnerschaft anfragen <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <Card variant="elevated" className="flex flex-col justify-between">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-700">
                Das B2B2B-Modell
              </p>
              <p className="mt-3 font-display text-display-sm text-ink-900">
                Sie betreuen Ihre Kunden. Wir strukturieren den Prozess.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-500">
                Ihre Kunden erleben eine Premium-Erfahrung. Ihr Team wird
                entlastet. Ihre Dienstleistung gewinnt an Tiefe — ohne
                dass Sie eigene Kapazitäten aufbauen müssen.
              </p>
            </div>
            <div className="mt-8 rounded-xl bg-brand-50/70 p-4">
              <p className="text-[14px] font-medium text-ink-900">
                Dieses Modell wird bereits von Beratern, Steuerberatern
                und Agenturen eingesetzt, die ihren Kunden mehr bieten
                wollen — ohne mehr intern leisten zu müssen.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* ── TRUST ── */}
      <Section aria-labelledby="cu-trust">
        <SectionHeader
          eyebrow="Verlässlichkeit"
          titleId="cu-trust"
          title="Klar geregelt. Sauber zertifiziert. Regelmäßig kontrolliert."
          intro="Unser Concierge-Service ist Teil eines AZAV-zertifizierten, nach DIN EN ISO 9001 geprüften Bildungsträgers — mit nachweisbaren Ergebnissen."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "AZAV-Trägerzulassung", sub: "Voraussetzung für öffentliche Fördermittel" },
            { label: "ISO 9001 / CERTQUA", sub: "Qualitätsmanagement nach internationalem Standard" },
            { label: "90–95 % Bewilligungsquote", sub: "Messbare Erfolge über 10+ Jahre" },
            { label: "§ 82 SGB III · BAFA · ESF", sub: "Alle gängigen Förderprogramme abgedeckt" },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-2xl border border-line bg-white p-5"
            >
              <p className="font-sans text-sm font-semibold text-ink-900">
                {t.label}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
                {t.sub}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
          <blockquote className="text-[15px] leading-relaxed text-ink-900">
            &bdquo;Die Förderabwicklung lief vollständig strukturiert — wir mussten
            uns um fast nichts kümmern. Das hat uns intern erheblich entlastet.&ldquo;
          </blockquote>
          <p className="mt-3 text-[13px] font-medium text-ink-500">
            Geschäftsführer · Mittelständisches Dienstleistungsunternehmen
          </p>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <Section tone="ink" aria-labelledby="cu-cta">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
            Jetzt handeln
          </p>
          <h2
            id="cu-cta"
            className="mt-3 font-display text-display-md text-white"
          >
            Bringen Sie Struktur in Ihre Bürokratie
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Und gewinnen Sie Zeit, Sicherheit und Kontrolle für Ihr
            Unternehmen zurück — ohne den Aufwand selbst tragen zu müssen.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://tidycal.com/team/concierge-team-wissensreich/personliches-gesprach-kurs-und-fordermittelberatung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              Erstgespräch buchen <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              Prozessanalyse anfragen
            </Link>
          </div>
          <p className="mt-6 text-[13px] text-white/50">
            Keine Rechtsberatung · Keine Steuerberatung · Koordination &amp; Prozessführung
          </p>
        </div>
      </Section>
    </>
  );
}
