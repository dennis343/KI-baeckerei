import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Award,
  Banknote,
  BookOpenCheck,
  Check,
  ChevronRight,
  Clock,
  GraduationCap,
  HelpCircle,
  LineChart,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { buildMetadata, courseJsonLd } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { SiegelBar } from "@/components/ui/SiegelBar";
import {
  BRAND,
  DOZENTEN_ERWEITERT,
  KURSE,
  type Kurs,
  type DozentErweitert,
} from "@/lib/constants";

function isKompassKurs(kurs: Kurs): boolean {
  return kurs.foerderung.toLowerCase().includes("kompass");
}

const BAFA_KURSE = KURSE.filter(isKompassKurs);

function getKurs(slug: string): Kurs | undefined {
  return BAFA_KURSE.find((k) => k.id === slug);
}

function getDozentenForKurs(kurs: Kurs): DozentErweitert[] {
  return DOZENTEN_ERWEITERT.filter((d) => d.kurse.includes(kurs.id));
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export async function generateStaticParams() {
  return BAFA_KURSE.map((k) => ({ slug: k.id }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const kurs = getKurs(slug);
  if (!kurs) {
    return buildMetadata({
      title: "Kurs nicht gefunden",
      description: "Der gesuchte Kurs wurde nicht gefunden.",
      path: `/kursuebersicht/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `${kurs.title} — KOMPASS-gefördert bis 90 %`,
    description: `${kurs.kurzbeschreibung} AZAV-zertifiziert, KOMPASS-förderfähig bis 90 %. Dozent: ${kurs.dozent}. ${kurs.dauer}.`,
    path: `/kursuebersicht/${slug}`,
  });
}

const FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Wie funktioniert die KOMPASS-Förderung?",
    a: "KOMPASS ist ein Bundesprogramm des BMAS, administriert über BAFA-nahe Anlaufstellen. Als Solopreneur:in mit max. einer Vollzeitkraft können bis zu 90 % der Weiterbildungskosten bezuschusst werden. Wir übernehmen die komplette Koordination mit der zuständigen Anlaufstelle — Sie konzentrieren sich auf die Weiterbildung.",
  },
  {
    q: "Wer kann die Förderung beantragen?",
    a: "Solopreneur:innen und Kleinstunternehmen mit bis zu einer angestellten Vollzeitkraft. Eine positive Einzelfallprüfung durch die zuständige Anlaufstelle ist Voraussetzung. In unserem kostenlosen Quick-Check klären wir Ihre Förderfähigkeit in unter 60 Sekunden.",
  },
  {
    q: "Was kostet mich der Kurs effektiv?",
    a: "Bei voller KOMPASS-Förderung tragen Sie nur 10 % Eigenanteil — der Rest wird über das Programm bezuschusst. Wir legen die Kalkulation für Ihre Situation transparent offen, bevor Sie sich entscheiden.",
  },
  {
    q: "Wie ist der zeitliche Ablauf von Antrag bis Kursstart?",
    a: "Nach der Quick-Check-Förderzusage bereiten wir den Antrag in 2–3 Werktagen vor. Die Bewilligung durch die Anlaufstelle erfolgt i. d. R. innerhalb von 2–4 Wochen. Anschließend können Sie zum nächsten Kurstermin starten.",
  },
  {
    q: "Ist der Kurs AZAV-zertifiziert?",
    a: "Ja. Die WissensReich Academy ist durch CERTQUA nach AZAV und DIN EN ISO 9001 zertifiziert. Dadurch sind unsere Maßnahmen grundsätzlich förderfähig über alle relevanten Arbeitsmarktprogramme.",
  },
  {
    q: "Was passiert, wenn der Antrag abgelehnt wird?",
    a: "Unser Concierge-Service bereitet jeden Antrag sorgfältig vor — unsere Bewilligungsquote liegt bei bis zu 90–95 %. Im unwahrscheinlichen Ablehnungsfall entstehen Ihnen keine Kosten: Sie gehen keinerlei Verpflichtung ein, solange die Förderung nicht zugesagt ist.",
  },
];

export default async function KursLandingPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const kurs = getKurs(slug);
  if (!kurs) notFound();

  const dozenten = getDozentenForKurs(kurs);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Kursübersicht", href: "/kursuebersicht" },
          { name: kurs.title, href: `/kursuebersicht/${kurs.id}` },
        ]}
      />
      <JsonLd
        data={courseJsonLd({
          name: kurs.title,
          description: kurs.kurzbeschreibung,
          provider: BRAND.fullName,
          duration: kurs.dauer,
          mode: kurs.format,
          audience: kurs.zielgruppe,
        })}
      />

      {/* ════════════════════════════════════════════════
          HERO — Vollbild mit Förderungs-Highlight
          ════════════════════════════════════════════════ */}
      <section
        aria-labelledby="kurs-hero-title"
        className="relative overflow-hidden bg-white"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-cream-100 via-white to-white" />
          <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-brand-50 blur-3xl opacity-80" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl opacity-70" />
        </div>

        <Container className="relative py-16 sm:py-20 lg:py-24">
          {/* Breadcrumb */}
          <nav
            aria-label="Brotkrumennavigation"
            className="mb-8 flex items-center gap-1.5 text-[13px] text-ink-500"
          >
            <Link href="/" className="hover:text-brand-700">
              Startseite
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link href="/kursuebersicht" className="hover:text-brand-700">
              Kursübersicht
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-ink-700">{kurs.title}</span>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr]">
            <div>
              {/* Kategorie-Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  KOMPASS · bis 90 % Förderung
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-700">
                  <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                  AZAV-zertifiziert
                </span>
              </div>

              {/* Headline */}
              <h1
                id="kurs-hero-title"
                className="mt-5 font-display text-[clamp(1.875rem,3vw+0.75rem,3.25rem)] leading-[1.1] tracking-tight text-ink-900"
              >
                {kurs.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-500 sm:text-[18px]">
                {kurs.kurzbeschreibung}
              </p>

              {/* Dozent-Chip */}
              <p className="mt-5 inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2 text-[14px] font-medium text-ink-800">
                <GraduationCap className="h-4 w-4 text-brand-600" aria-hidden="true" />
                <span className="text-ink-500">Dozent:</span>
                <span>{kurs.dozent}</span>
              </p>

              {/* CTA-Leiste */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#kontakt"
                  className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-6 text-[15px] font-semibold text-white shadow-soft hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                >
                  Förderfähigkeit prüfen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/concierge-service"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-line bg-white px-6 text-[15px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                >
                  Concierge-Service kennenlernen
                </Link>
              </div>

              {/* Mini-Trust-Leiste */}
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-600">
                <li className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
                  AZAV & ISO 9001
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
                  Concierge-Antragsservice inklusive
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
                  90–95 % Bewilligungsquote
                </li>
              </ul>
            </div>

            {/* Förderungs-Box */}
            <aside
              aria-label="Förderung im Überblick"
              className="lg:sticky lg:top-24"
            >
              <Card variant="elevated" className="border-brand-200 bg-brand-50/40">
                <div className="flex items-center gap-2">
                  <Banknote className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                    Ihre Förderung
                  </p>
                </div>
                <p className="mt-3 font-display text-display-md text-ink-900">
                  bis 90 %
                </p>
                <p className="mt-1 text-[14px] text-ink-600">
                  Zuschuss über das KOMPASS-Programm (BMAS). Eigenanteil ab
                  10 %.
                </p>

                <dl className="mt-6 space-y-3 border-t border-brand-100 pt-5 text-[14px]">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-ink-500">Listenpreis</dt>
                    <dd className="font-semibold text-ink-900">{kurs.preis}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-ink-500">Dauer</dt>
                    <dd className="font-medium text-ink-800">{kurs.dauer}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-ink-500">Format</dt>
                    <dd className="font-medium text-ink-800 text-right">
                      {kurs.format}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-ink-500">Zielgruppe</dt>
                    <dd className="font-medium text-ink-800 text-right">
                      {kurs.zielgruppe}
                    </dd>
                  </div>
                </dl>

                <Link
                  href="/#kontakt"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-5 text-[15px] font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                >
                  Unverbindlich anfragen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <p className="mt-3 text-center text-[12px] text-ink-500">
                  Keine Kosten, keine Verpflichtung — bis Förderung zugesagt
                  ist.
                </p>
              </Card>
            </aside>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════
          KENNZAHLEN
          ════════════════════════════════════════════════ */}
      <Section tone="cream" aria-label="Kennzahlen">
        <ul className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Banknote, value: "bis 90 %", label: "KOMPASS-Förderung" },
            { icon: ShieldCheck, value: "AZAV & ISO", label: "Träger- und Qualitätszertifizierung" },
            { icon: LineChart, value: "90–95 %", label: "Bewilligungsquote im Concierge" },
          ].map(({ icon: Icon, value, label }) => (
            <li
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
              >
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl text-ink-900">{value}</p>
                <p className="text-[13px] text-ink-500">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ════════════════════════════════════════════════
          LERNINHALTE & ZIELGRUPPE
          ════════════════════════════════════════════════ */}
      <Section aria-labelledby="kurs-inhalte">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Was Sie lernen
            </p>
            <h2
              id="kurs-inhalte"
              className="mt-2 font-display text-display-md text-ink-900"
            >
              Inhalte & Ergebnisse
            </h2>
            <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-500">
              Jedes Modul ist praxisnah aufgebaut. Sie arbeiten während der
              Weiterbildung an Ihrem eigenen Projekt — der Transfer ist kein
              Add-on, sondern Teil des Kurses.
            </p>

            <ul className="mt-8 space-y-4">
              {kurs.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-700"
                  >
                    <BookOpenCheck className="h-4 w-4" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink-800">
                    {h}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <Card variant="outline">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-brand-700" aria-hidden="true" />
                <h3 className="font-sans text-base font-semibold text-ink-900">
                  Für wen ist der Kurs?
                </h3>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
                {kurs.zielgruppe}
              </p>
            </Card>

            <Card variant="outline">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-700" aria-hidden="true" />
                <h3 className="font-sans text-base font-semibold text-ink-900">
                  Format & Ablauf
                </h3>
              </div>
              <dl className="mt-3 space-y-3 text-[14px]">
                <div>
                  <dt className="text-ink-500">Dauer</dt>
                  <dd className="font-medium text-ink-900">{kurs.dauer}</dd>
                </div>
                <div>
                  <dt className="text-ink-500">Format</dt>
                  <dd className="font-medium text-ink-900">{kurs.format}</dd>
                </div>
                <div>
                  <dt className="text-ink-500">Abschluss</dt>
                  <dd className="font-medium text-ink-900">
                    {kurs.zertifizierung} — Teilnahmezertifikat mit Kompetenzbeschreibung
                  </dd>
                </div>
              </dl>
            </Card>

            <Card variant="outline">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-700" aria-hidden="true" />
                <h3 className="font-sans text-base font-semibold text-ink-900">
                  Gruppengröße
                </h3>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
                Kleine Kohorten für echten Austausch. Begleitet durch
                persönliches Concierge-Onboarding.
              </p>
            </Card>
          </aside>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════
          DOZENT:INNEN
          ════════════════════════════════════════════════ */}
      {dozenten.length > 0 && (
        <Section tone="cream" aria-labelledby="kurs-dozenten">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Wer Sie begleitet
          </p>
          <h2
            id="kurs-dozenten"
            className="mt-2 font-display text-display-md text-ink-900"
          >
            {dozenten.length === 1 ? "Ihr:e Dozent:in" : "Ihre Dozent:innen"}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {dozenten.map((d) => (
              <Card key={d.id} variant="elevated" className="flex flex-col">
                <div className="flex items-start gap-4">
                  {d.image ? (
                    <Image
                      src={d.image}
                      alt={d.name}
                      width={96}
                      height={96}
                      className="h-24 w-24 flex-none rounded-2xl object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-24 w-24 flex-none items-center justify-center rounded-2xl bg-brand-50 font-display text-2xl font-semibold text-brand-700"
                    >
                      {initials(d.name)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-ink-900">
                      {d.name}
                    </h3>
                    <p className="mt-1 text-[14px] font-medium text-brand-700">
                      {d.role}
                    </p>
                    <p className="mt-1 text-[13px] text-ink-500">
                      {d.expertise}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                  {d.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.schwerpunkte.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg bg-cream-100 px-2.5 py-1 text-[12px] font-medium text-ink-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* ════════════════════════════════════════════════
          CONCIERGE-PROMISE — 3 Schritte
          ════════════════════════════════════════════════ */}
      <Section aria-labelledby="kurs-concierge">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            So läuft es bei uns ab
          </p>
          <h2
            id="kurs-concierge"
            className="mt-2 font-display text-display-md text-ink-900"
          >
            Vom Förder-Check bis zum Kursstart — wir übernehmen alles
          </h2>
          <p className="mt-5 text-lead text-ink-500">
            Der Concierge-Service ist im Kurspreis enthalten — Sie müssen keinen
            Antrag selbst ausfüllen und keine Formulare recherchieren.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Förder-Check in 60 Sekunden",
              body:
                "Sie beantworten vier kurze Fragen. Wir zeigen Ihnen sofort, ob und über welches Programm Sie gefördert sind.",
            },
            {
              num: "02",
              title: "Wir bereiten den Antrag vor",
              body:
                "Alle Unterlagen werden sorgfältig aufbereitet und fristgerecht bei der zuständigen Stelle eingereicht — Bewilligungsquote bis zu 90–95 %.",
            },
            {
              num: "03",
              title: "Sie starten — wir begleiten",
              body:
                "Nach Bewilligung starten Sie zum nächsten Kurstermin. Wir bleiben Ihre persönliche Ansprechpartnerinnen während der gesamten Weiterbildung.",
            },
          ].map((s) => (
            <li key={s.num}>
              <Card variant="elevated" className="h-full">
                <p className="font-display text-display-sm text-brand-300">
                  {s.num}
                </p>
                <h3 className="mt-2 font-sans text-base font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                  {s.body}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* ════════════════════════════════════════════════
          SIEGEL
          ════════════════════════════════════════════════ */}
      <Section tone="cream" aria-label="Zertifizierungen">
        <SiegelBar
          title="Qualität und Förderfähigkeit sind kein Marketing-Versprechen"
          withLabels
          withNotes
        />
      </Section>

      {/* ════════════════════════════════════════════════
          STIMME / TESTIMONIAL-PLATZHALTER
          ════════════════════════════════════════════════ */}
      <Section aria-labelledby="kurs-stimme">
        <div className="mx-auto max-w-3xl">
          <Card variant="elevated" className="relative">
            <Quote
              aria-hidden="true"
              className="absolute right-6 top-6 h-10 w-10 text-brand-100"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Stimme aus der Praxis
            </p>
            <blockquote
              id="kurs-stimme"
              className="mt-4 font-display text-[20px] leading-relaxed text-ink-900 sm:text-[22px]"
            >
              „Ich hätte nie gedacht, dass eine geförderte Weiterbildung so
              persönlich und strukturiert sein kann. Der Concierge hat den
              Antrag für mich übernommen — ich musste mich nur um das Lernen
              kümmern."
            </blockquote>
            <p className="mt-5 text-[14px] font-medium text-ink-700">
              Teilnehmerin aus dem KOMPASS-Programm
            </p>
            <p className="text-[13px] text-ink-500">
              Weitere Stimmen auf Anfrage — wir veröffentlichen Testimonials
              nur mit ausdrücklicher Zustimmung.
            </p>
          </Card>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════════ */}
      <Section tone="cream" aria-labelledby="kurs-faq">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Häufige Fragen
          </p>
          <h2
            id="kurs-faq"
            className="mt-2 font-display text-display-md text-ink-900"
          >
            Das wollten Interessierte zuletzt wissen
          </h2>

          <dl className="mt-10 space-y-3">
            {FAQ.map((item, idx) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-white p-5 open:shadow-card"
                open={idx === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <dt className="font-sans text-[15px] font-semibold text-ink-900">
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item.q}
                  </dt>
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line text-ink-500 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <dd className="mt-3 border-t border-line pt-3 text-[14px] leading-relaxed text-ink-600">
                  {item.a}
                </dd>
              </details>
            ))}
          </dl>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════
          FINALER CTA
          ════════════════════════════════════════════════ */}
      <Section tone="ink" aria-labelledby="kurs-cta">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            <Award className="h-3 w-3" aria-hidden="true" />
            KOMPASS · bis 90 % gefördert
          </span>
          <h2
            id="kurs-cta"
            className="mt-5 font-display text-display-md text-white"
          >
            Starten Sie jetzt Ihren {(kurs.title.split("—")[0] ?? kurs.title).trim()}
          </h2>
          <p className="mt-5 text-lead text-white/80">
            In 60 Sekunden prüfen wir Ihre Förderfähigkeit — kostenlos und
            unverbindlich. Kein Kauf, solange die Zusage nicht steht.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 text-[15px] font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              Förderfähigkeit jetzt prüfen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/kursuebersicht"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Andere Kurse ansehen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
