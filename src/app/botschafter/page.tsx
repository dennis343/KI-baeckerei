import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Handshake,
  Megaphone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Botschafter:innen-Programm — Empfehlen & mitgestalten",
  description:
    "Werden Sie WissensReich-Botschafter:in: Qualifizierte Weiterbildung weiterempfehlen, Menschen in geförderte Bildung bringen und davon profitieren — transparent und fair.",
  path: "/botschafter",
});

const kennzahlen = [
  { zahl: "90–95 %", label: "Bewilligungsquote", text: "Weil unser Concierge jeden Antrag sauber vorbereitet." },
  { zahl: "bis 90 %", label: "Förderung möglich", text: "Über KOMPASS, AVGS oder Qualifizierungschancengesetz." },
  { zahl: "AZAV", label: "Zertifiziert", text: "Trägerzulassung, ISO 9001 und CERTQUA-Audit — laufend kontrolliert." },
];

const warumJetzt = [
  {
    icon: TrendingUp,
    title: "Der Markt ist bereit — der Bedarf wächst",
    body: "Fachkräftelücke, Digitalisierung, KI: Weiterbildung steht in jedem zweiten Strategie­papier deutscher Unternehmen. Wer jetzt empfiehlt, trifft auf offene Türen statt verschlossene Budgets.",
  },
  {
    icon: Sparkles,
    title: "Förderlandschaft so gut wie nie",
    body: "KOMPASS, AVGS, Qualifizierungschancengesetz, INQA-Coaching — die Töpfe sind gefüllt, die Antragswege sortiert. Sie empfehlen kein Produkt, sondern einen geförderten Weg.",
  },
  {
    icon: ShieldCheck,
    title: "Sie empfehlen mit reinem Gewissen",
    body: "Kein Drücker-Modell, keine Provisions-Optimierung. Sie empfehlen eine AZAV-zertifizierte Akademie mit dokumentierter Qualität und nachvollziehbaren Prozessen.",
  },
];

const vorteile = [
  {
    icon: Handshake,
    title: "Faire Partnerschaft",
    body: "Transparente Konditionen, klare Absprachen, langfristige Zusammenarbeit. Kein Drückermodell, keine windigen Versprechen.",
  },
  {
    icon: TrendingUp,
    title: "Leistungsgerechte Vergütung",
    body: "Für jede erfolgreich vermittelte Teilnahme erhalten Sie eine attraktive, leistungsgerechte Provision — sauber abgerechnet.",
  },
  {
    icon: Users,
    title: "Starke Community",
    body: "Regelmäßige Netzwerktreffen, gemeinsame Weiterentwicklung und der direkte Draht zum Concierge-Service.",
  },
  {
    icon: Megaphone,
    title: "Marketing-Unterstützung",
    body: "Wir stellen Ihnen professionelle Materialien, Landingpages und persönliche Ansprechpartner:innen zur Seite.",
  },
];

const zielgruppe = [
  "Coaches, Berater:innen und Trainer:innen mit eigenem Netzwerk",
  "HR-Dienstleister:innen und Personalvermittler:innen",
  "Steuerberater:innen und Unternehmensberater:innen",
  "Selbstständige im Bildungs- und Weiterbildungsbereich",
  "Unternehmer:innen, die Weiterbildung als Thema platzieren wollen",
];

const ablauf = [
  {
    step: 1,
    title: "Bewerbung",
    body: "Sie füllen ein kurzes Formular aus und schildern uns Ihren Hintergrund und Ihr Netzwerk.",
  },
  {
    step: 2,
    title: "Kennenlernen",
    body: "Wir führen ein unverbindliches Erstgespräch und klären gegenseitige Erwartungen.",
  },
  {
    step: 3,
    title: "Onboarding",
    body: "Sie erhalten Zugang zu Materialien, Landingpages und Ihrer persönlichen Ansprechperson.",
  },
  {
    step: 4,
    title: "Empfehlen & verdienen",
    body: "Sie empfehlen WissensReich aktiv — wir kümmern uns um Beratung, Abwicklung und Rechnung.",
  },
];

export default function BotschafterPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Botschafter:innen-Programm", href: "/botschafter" }]}
      />

      {/* Hero */}
      <Section aria-labelledby="bot-title">
        <SectionHeader
          as="h1"
          eyebrow="Botschafter:innen-Programm"
          titleId="bot-title"
          title="Empfehlen Sie geförderte Weiterbildung — und profitieren Sie mit"
          intro="Sie haben ein starkes Netzwerk und glauben an die Kraft qualifizierter Weiterbildung? Werden Sie Teil unseres Botschafter:innen-Programms — mit fairer Vergütung, persönlicher Betreuung und echter Gestaltungskraft."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#kontakt"
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
          >
            Jetzt Botschafter:in werden <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/#kontakt"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-6 text-[15px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
          >
            Erstgespräch anfragen
          </Link>
        </div>

        {/* Kennzahlen */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {kennzahlen.map((k) => (
            <div
              key={k.label}
              className="rounded-2xl border border-line bg-white p-6 text-center"
            >
              <p className="font-display text-display-md text-brand-600">
                {k.zahl}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-ink-900">
                {k.label}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
                {k.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Warum jetzt */}
      <Section tone="brand-soft" aria-labelledby="bot-jetzt">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          Der Zeitpunkt ist jetzt
        </p>
        <h2
          id="bot-jetzt"
          className="mt-2 font-display text-display-md text-ink-900"
        >
          Warum gerade jetzt der richtige Moment ist
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {warumJetzt.map((w) => {
            const Icon = w.icon;
            return (
              <div
                key={w.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-sans text-base font-semibold text-ink-900">
                  {w.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  {w.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Vorteile */}
      <Section tone="cream" aria-labelledby="bot-vorteile">
        <h2 id="bot-vorteile" className="font-display text-display-md text-ink-900">
          Was Sie als Botschafter:in erwartet
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {vorteile.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.title} variant="elevated">
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink-900">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Zielgruppe */}
      <Section aria-labelledby="bot-ziel">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Für wen das Programm passt
          </p>
          <h2 id="bot-ziel" className="mt-2 font-display text-display-md text-ink-900">
            Wenn Sie andere Menschen auf ihrem Weg begleiten — begleiten wir Sie.
          </h2>
          <ul className="mt-8 space-y-3">
            {zielgruppe.map((z) => (
              <li key={z} className="flex items-start gap-3 text-[15px] text-ink-700">
                <Check className="mt-0.5 h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                <span>{z}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Ablauf */}
      <Section tone="cream" aria-labelledby="bot-ablauf">
        <h2 id="bot-ablauf" className="font-display text-display-md text-ink-900">
          So werden Sie Teil des Programms
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
              <h3 className="mt-4 font-sans text-base font-semibold text-ink-900">
                {a.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {a.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section aria-labelledby="bot-faq">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            Häufige Fragen
          </p>
          <h2
            id="bot-faq"
            className="mt-2 font-display text-display-md text-ink-900"
          >
            Was Sie sicher noch fragen
          </h2>

          <dl className="mt-10 space-y-4">
            {[
              {
                q: "Muss ich selbst Bildungs- oder Förderexperte sein?",
                a: "Nein. Sie bringen Ihr Netzwerk, wir bringen die Expertise. Empfehlen heißt: weiterleiten — beraten und durchführen übernehmen wir mit unserem Concierge-Service.",
              },
              {
                q: "Wie wird die Provision berechnet und ausgezahlt?",
                a: "Pro erfolgreich vermittelter und durchgeführter Maßnahme erhalten Sie eine attraktive, leistungsgerechte Provision. Konditionen besprechen wir transparent im Erstgespräch und halten sie schriftlich fest. Auszahlung monatlich auf Rechnungsbasis.",
              },
              {
                q: "Werden Fördermittel oder Teilnehmergelder dafür verwendet?",
                a: "Nein. Provisionen tragen wir ausschließlich aus eigenen Erträgen. Fördergelder und Teilnehmerbeiträge bleiben vollständig dem jeweiligen Bildungsprozess vorbehalten — das ist gesetzlich klar geregelt und für uns nicht verhandelbar.",
              },
              {
                q: "Wie viele Empfehlungen muss ich pro Monat liefern?",
                a: "Es gibt keine Mindestquote. Wir setzen auf Qualität statt Druck. Manche Botschafter:innen empfehlen punktuell, andere kontinuierlich — beides passt.",
              },
              {
                q: "Bin ich exklusiv an WissensReich gebunden?",
                a: "Nein. Sie sind frei in Ihren weiteren Tätigkeiten. Wir wünschen uns lediglich, dass Sie nur empfehlen, wovon Sie überzeugt sind — und dass Empfehlungen sauber namentlich laufen.",
              },
              {
                q: "Was passiert, wenn ein Antrag abgelehnt wird?",
                a: "Sie tragen kein Risiko. Wir kümmern uns um den Antragsprozess. Falls eine Bewilligung scheitert, entstehen Ihnen keine Nachteile — die Provision fließt erst mit erfolgter Maßnahmen-Durchführung.",
              },
            ].map((item) => (
              <Card key={item.q} variant="outline">
                <dt className="font-sans text-base font-semibold text-ink-900">
                  {item.q}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink-500">
                  {item.a}
                </dd>
              </Card>
            ))}
          </dl>
        </div>
      </Section>

      {/* Transparenz-Hinweis */}
      <Section aria-labelledby="bot-fair">
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-8">
          <h2
            id="bot-fair"
            className="font-sans text-lg font-semibold text-ink-900"
          >
            Transparenz vor allem
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
            Wir schreiben klar, was wir meinen: Das Botschafter:innen-Programm
            ist kein anonymes Affiliate-Konstrukt. Jede Empfehlung läuft
            namentlich, nachvollziehbar und sauber dokumentiert. Fördermittel
            und Teilnehmergelder bleiben dabei jederzeit unangetastet — die
            Provision trägt allein WissensReich aus eigenen Erträgen.
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-ink-500">
            Details zu Konditionen, Provisionsmodell und rechtlichen
            Rahmenbedingungen besprechen wir im persönlichen Erstgespräch.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink" aria-labelledby="bot-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="bot-cta" className="font-display text-display-md text-white">
            Interesse? Dann sprechen wir.
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Lernen Sie uns unverbindlich kennen und prüfen Sie, ob das
            Botschafter:innen-Programm zu Ihrem Weg passt.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              Erstgespräch anfragen
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
