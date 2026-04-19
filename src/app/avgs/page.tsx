import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { buildMetadata, courseJsonLd } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AVGS_COURSES, BRAND } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Gründer & Wechsler — 100 % geförderte Qualifizierung über AVGS",
  description:
    "AVGS-geförderte Maßnahmen: Inkasso-Sachkunde (RDV §4) und Businessplan-Werkstatt. 100 % Kostenübernahme, AZAV-zertifiziert, persönlicher Concierge-Service.",
  path: "/avgs",
});

const heroFacts = [
  { label: "Kostenübernahme", value: "100 %" },
  { label: "Rechtsgrundlage", value: "§ 45 SGB III" },
  { label: "Zertifizierung", value: "AZAV" },
  { label: "Begleitung", value: "Concierge" },
];

const vorteile = [
  {
    title: "Klare Berufsperspektive",
    body: "Ob Anstellung im Forderungsmanagement oder tragfähige Selbstständigkeit — unsere Maßnahmen sind auf konkrete berufliche Ergebnisse ausgerichtet.",
  },
  {
    title: "100 % Kostenübernahme",
    body: "Über den Aktivierungs- und Vermittlungsgutschein (AVGS) übernimmt die Agentur für Arbeit oder das Jobcenter die gesamten Kosten.",
  },
  {
    title: "Praxisnahe Formate",
    body: "Zwei Coaches parallel im Gruppenteil, 1:1-Einzelcoaching und output-getriebene Werkstätten — kein Frontalunterricht.",
  },
  {
    title: "Saubere Dokumentation",
    body: "Jede Maßnahme ist so strukturiert, dass Sachbearbeitung, Prüfung und Teilnehmende gleichermaßen nachvollziehen können, was passiert.",
  },
];

const erfolge = [
  {
    zitat: "Ich war skeptisch, ob ich mit Mitte 40 noch mal neu anfangen kann. Nach sechs Wochen hatte ich die Sachkunde — und drei Stellenangebote.",
    kontext: "Teilnehmer · Inkasso-Sachkunde",
  },
  {
    zitat: "Der Businessplan, den ich hier entwickelt habe, hat meine Gründungsfinanzierung beim ersten Anlauf durchgebracht.",
    kontext: "Teilnehmerin · Businessplan-Werkstatt",
  },
  {
    zitat: "Endlich jemand, der mir nicht nur Mut gemacht hat, sondern einen konkreten Plan. Die Struktur hat den Unterschied gemacht.",
    kontext: "Teilnehmer · Businessplan-Werkstatt",
  },
];

export default function AvgsPage() {
  return (
    <>
      <JsonLd
        data={courseJsonLd({
          name: AVGS_COURSES.inkasso.title,
          description: AVGS_COURSES.inkasso.subtitle,
          provider: BRAND.fullName,
          duration: "PT150H",
          mode: "Hybrid",
          audience: "Arbeitssuchende",
        })}
      />
      <JsonLd
        data={courseJsonLd({
          name: AVGS_COURSES.businessplan.title,
          description: AVGS_COURSES.businessplan.subtitle,
          provider: BRAND.fullName,
          duration: "PT120H",
          mode: "Vollzeit",
          audience: "Arbeitssuchende",
        })}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Gründer & Wechsler", href: "/avgs" },
        ]}
      />

      {/* Hero */}
      <Section aria-labelledby="gw-title">
        <SectionHeader
          as="h1"
          eyebrow="Für Gründer & Wechsler"
          titleId="gw-title"
          title="Neuanfang mit Plan, Struktur und 100 % Förderung"
          intro="Sie stehen vor einem beruflichen Umbruch — ob gewollt oder nicht. Unsere AVGS-Maßnahmen geben Ihnen die Qualifikation, die Struktur und die Begleitung, die aus einem Vorhaben ein tragfähiges Ergebnis machen."
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {heroFacts.map((f) => (
            <div key={f.label} className="rounded-xl border border-line bg-white p-4 text-center">
              <p className="font-display text-xl font-semibold text-brand-600">{f.value}</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">{f.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vorteile */}
      <Section tone="cream" aria-labelledby="gw-vorteile">
        <h2 id="gw-vorteile" className="font-display text-display-md text-ink-900">
          Was Sie bei WissensReich anders finden
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {vorteile.map((v) => (
            <Card key={v.title} variant="elevated">
              <h3 className="font-sans text-base font-semibold text-ink-900">{v.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Erfolge */}
      <Section aria-labelledby="gw-erfolge">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Ergebnisse statt Versprechen</p>
        <h2 id="gw-erfolge" className="mt-2 font-display text-display-md text-ink-900">
          Was Teilnehmende mit WissensReich erreicht haben
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {erfolge.map((e) => (
            <Card key={e.kontext} variant="elevated">
              <blockquote className="text-[15px] leading-relaxed text-ink-700">
                &bdquo;{e.zitat}&ldquo;
              </blockquote>
              <p className="mt-4 text-[13px] font-medium text-ink-500">{e.kontext}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Maßnahmen */}
      <Section tone="cream" aria-labelledby="gw-massnahmen">
        <h2 id="gw-massnahmen" className="font-display text-display-md text-ink-900">
          Zwei Maßnahmen — zwei klare Berufswege
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Beide Maßnahmen sind AZAV-zertifiziert, vollständig über AVGS finanzierbar
          und auf konkrete berufliche Ergebnisse ausgerichtet.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Inkasso-Sachkunde */}
          <Card variant="elevated" className="flex flex-col">
            <span className="inline-flex self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Gründer & Wechsler · § 45 SGB III
            </span>
            <h3 className="mt-4 font-display text-display-sm text-ink-900">
              {AVGS_COURSES.inkasso.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
              {AVGS_COURSES.inkasso.subtitle}
            </p>
            <dl className="mt-5 space-y-2 text-[14px]">
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-500">Dauer</dt>
                <dd className="font-medium text-ink-900">{AVGS_COURSES.inkasso.duration}</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-500">Format</dt>
                <dd className="font-medium text-ink-900">{AVGS_COURSES.inkasso.group}</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-500">Rechtsgrundlage</dt>
                <dd className="font-medium text-brand-700">{AVGS_COURSES.inkasso.legal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-500">Kosten für Sie</dt>
                <dd className="font-semibold text-brand-700">0 € (AVGS)</dd>
              </div>
            </dl>
            <ul className="mt-5 space-y-2">
              {AVGS_COURSES.inkasso.goals.map((g) => (
                <li key={g} className="flex items-start gap-2 text-[14px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Businessplan-Werkstatt */}
          <Card variant="elevated" className="flex flex-col">
            <span className="inline-flex self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Gründer & Wechsler · § 45 SGB III
            </span>
            <h3 className="mt-4 font-display text-display-sm text-ink-900">
              {AVGS_COURSES.businessplan.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
              {AVGS_COURSES.businessplan.subtitle}
            </p>
            <dl className="mt-5 space-y-2 text-[14px]">
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-500">Dauer</dt>
                <dd className="font-medium text-ink-900">{AVGS_COURSES.businessplan.duration}</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-500">Format</dt>
                <dd className="font-medium text-ink-900">{AVGS_COURSES.businessplan.group}</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink-500">Rechtsgrundlage</dt>
                <dd className="font-medium text-brand-700">{AVGS_COURSES.businessplan.legal}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-500">Kosten für Sie</dt>
                <dd className="font-semibold text-brand-700">0 € (AVGS)</dd>
              </div>
            </dl>
            <ul className="mt-5 space-y-2">
              {AVGS_COURSES.businessplan.goals.map((g) => (
                <li key={g} className="flex items-start gap-2 text-[14px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="mt-6">
          <Link href="/kursuebersicht"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded">
            Alle Kurse im Detail ansehen <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* Fördermittel */}
      <Section aria-labelledby="gw-foerder">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Fördermittel als Startrampe</p>
            <h2 id="gw-foerder" className="mt-2 font-display text-display-md text-ink-900">
              Der AVGS — Ihr Schlüssel zur kostenlosen Qualifizierung
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Der Aktivierungs- und Vermittlungsgutschein (AVGS) nach § 45 SGB III
              ermöglicht es arbeitssuchenden Menschen, an Maßnahmen zur beruflichen
              Eingliederung teilzunehmen — vollständig finanziert durch die Agentur
              für Arbeit oder das Jobcenter.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Die WissensReich Academy ist als AZAV-zertifizierter Bildungsträger
              berechtigt, AVGS-Maßnahmen durchzuführen und direkt mit dem Kostenträger
              abzurechnen. Für Sie entstehen keine Kosten.
            </p>
          </div>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">So kommen Sie zum AVGS</h3>
            <ol className="mt-4 space-y-3 text-[14px]">
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">1</span>
                <span className="text-ink-700">Sprechen Sie mit Ihrem Berater bei der Agentur für Arbeit oder dem Jobcenter über Ihren Qualifizierungswunsch.</span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">2</span>
                <span className="text-ink-700">Beantragen Sie einen AVGS (Aktivierungs- und Vermittlungsgutschein) für die gewünschte Maßnahme.</span>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">3</span>
                <span className="text-ink-700">Wir übernehmen den Rest: Unser Concierge-Service bereitet die Unterlagen vor und koordiniert mit dem Kostenträger.</span>
              </li>
            </ol>
          </Card>
        </div>
      </Section>

      {/* Rechtsgrundlagen */}
      <Section tone="cream" aria-labelledby="gw-recht">
        <h2 id="gw-recht" className="font-display text-display-md text-ink-900">
          Rechtsgrundlagen — transparent und nachvollziehbar
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">§ 45 SGB III — AVGS</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              Rechtsgrundlage für Maßnahmen zur Aktivierung und beruflichen
              Eingliederung. Ermöglicht 100 % Kostenübernahme durch die Agentur
              für Arbeit oder das Jobcenter.
            </p>
            <a href="https://www.gesetze-im-internet.de/sgb_3/__45.html" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 underline-offset-4 hover:underline">
              § 45 SGB III im Volltext <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </Card>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">RDG § 11 — Rechtsdienstleistungsgesetz</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              Regelt die Zulassung registrierter Inkassodienstleister. Unsere
              Inkasso-Sachkunde bereitet auf die Anforderungen nach diesem
              Gesetz vor.
            </p>
            <a href="https://www.gesetze-im-internet.de/rdg/__11.html" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 underline-offset-4 hover:underline">
              RDG § 11 im Volltext <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </Card>
          <Card variant="outline">
            <h3 className="font-sans text-base font-semibold text-ink-900">RDV § 4 — Sachkundenachweis</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              Definiert die Sachkundeanforderungen für Inkassodienstleister.
              Unsere Maßnahme deckt alle geforderten Rechtsgebiete ab und
              bereitet auf den Sachkundenachweis vor.
            </p>
            <a href="https://www.gesetze-im-internet.de/rdv/__4.html" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 underline-offset-4 hover:underline">
              RDV § 4 im Volltext <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </Card>
        </div>
        <Card variant="outline" className="mt-4">
          <h3 className="font-sans text-base font-semibold text-ink-900">AZAV — Trägerzulassung</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
            WissensReich ist als Bildungsträger nach AZAV zugelassen —
            Voraussetzung für die Durchführung von AVGS-Maßnahmen und die
            Abrechnung mit öffentlichen Kostenträgern.
            Zertifiziert durch CERTQUA nach DIN EN ISO 9001.
          </p>
          <a href="https://www.gesetze-im-internet.de/azav/" target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand-700 underline-offset-4 hover:underline">
            AZAV im Volltext <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </Card>
      </Section>

      {/* Concierge */}
      <Section aria-labelledby="gw-concierge">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Ihr Lotse im Prozess</p>
            <h2 id="gw-concierge" className="mt-2 font-display text-display-md text-ink-900">
              Der Concierge-Service — Ihre Begleitung vom Antrag bis zum Abschluss
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Gerade wenn Sie vor einem Neuanfang stehen, ist das Letzte, was
              Sie brauchen, ein unübersichtlicher Bürokratieprozess. Unser
              Concierge-Service übernimmt Koordination, Dokumentation und
              Kommunikation mit dem Kostenträger — damit Sie sich auf Ihre
              Qualifizierung konzentrieren können.
            </p>
            <Link href="/concierge-service"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded">
              Mehr zum Concierge-Service <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-line bg-cream-50 p-6">
            <Image src="/dozenten/florian-domin.png" alt="Porträt von Florian Domin, CEO der WissensReich Academy" width={64} height={64}
              className="h-16 w-16 flex-none rounded-full object-cover" />
            <div>
              <p className="font-sans text-base font-semibold text-ink-900">Florian Domin</p>
              <p className="mt-0.5 text-[14px] font-medium text-brand-700">CEO · Leitung Concierge-Service</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                &bdquo;Ein Neuanfang verdient solide Begleitung. Wir sorgen dafür, dass der Förderprozess klar, strukturiert und ohne Überraschungen läuft.&ldquo;
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink" aria-labelledby="gw-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="gw-cta" className="font-display text-display-md text-white">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Schauen Sie sich unsere Maßnahmen im Detail an oder lassen Sie sich
            unverbindlich beraten. Wir sagen Ihnen ehrlich, was möglich ist.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/kursuebersicht"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60">
              Alle Kurse & Leistungen
            </Link>
            <Link href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60">
              Beratung anfragen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
