import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Check, Headphones, ShieldAlert, Users } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CONCIERGE_DEEP, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { serviceJsonLd } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Concierge-Service — Unser Herzstück",
  description:
    "Persönliche Prozessbegleitung von der Förderanfrage bis zum Abschluss. Struktur, Klarheit, Entlastung — AZAV-zertifiziert.",
  path: "/concierge-service",
});

export default function ConciergeServicePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd()} />
      <BreadcrumbJsonLd items={[{ name: "Concierge-Service", href: "/concierge-service" }]} />
      <Section aria-labelledby="c-title">
        <SectionHeader
          as="h1"
          eyebrow={CONCIERGE_DEEP.eyebrow}
          titleId="c-title"
          title={CONCIERGE_DEEP.title}
          intro={CONCIERGE_DEEP.body}
        />
      </Section>

      <Section tone="cream" aria-labelledby="c-ablauf">
        <h2 id="c-ablauf" className="font-display text-display-md text-ink-900">
          Der Ablauf in fünf klaren Schritten
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CONCIERGE_DEEP.ablauf.map((a) => (
            <li
              key={a.step}
              className="rounded-2xl border border-line bg-white p-7"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white"
              >
                {a.step}
              </span>
              <h3 className="mt-4 font-sans text-base font-semibold text-ink-900">
                {a.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                {a.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section aria-labelledby="c-rollen">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card variant="outline">
            <h2
              id="c-rollen"
              className="font-display text-display-sm text-ink-900"
            >
              {CONCIERGE_DEEP.rolesTitle}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                  Wir übernehmen
                </p>
                <ul className="mt-3 space-y-2 text-[14px] text-ink-700">
                  {CONCIERGE_DEEP.roles.wir.map((r) => (
                    <li key={r} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  Bei Ihnen bleibt
                </p>
                <ul className="mt-3 space-y-2 text-[14px] text-ink-700">
                  {CONCIERGE_DEEP.roles.imUnternehmen.map((r) => (
                    <li key={r} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-ink-500" aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 border-t border-line pt-4 text-[13px] leading-relaxed text-ink-500">
              {CONCIERGE_DEEP.verantwortungsHinweis}
            </p>
          </Card>

          <Card variant="ink">
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-500 text-white"
              >
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-xl text-white">
                  {CONCIERGE_DEEP.pflichtbox.title}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  {CONCIERGE_DEEP.pflichtbox.body}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Live erreichbar + digitale Buchung */}
      <Section tone="cream" aria-labelledby="c-live">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card variant="elevated">
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
              >
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3
                  id="c-live"
                  className="font-sans text-base font-semibold text-ink-900"
                >
                  Immer live erreichbar — mit großem Team
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  Sie sprechen nicht mit einem Bot und nicht mit einer anonymen
                  Hotline. Unser Concierge-Team ist werktags durchgehend
                  persönlich erreichbar — mit festen Fachansprechpartner:innen
                  für Förderung, Kursorganisation und Antragsstellung.
                </p>
                <ul className="mt-3 space-y-1.5 text-[14px] text-ink-700">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                    <span>Feste Fachansprechpartner:innen je Thema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                    <span>Antwort innerhalb eines Werktags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                    <span>Telefon, E-Mail oder Video — Sie entscheiden</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card variant="elevated">
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
              >
                <Calendar className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-sans text-base font-semibold text-ink-900">
                  Termin digital buchen
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  Sie bevorzugen den direkten Weg? Buchen Sie Ihr
                  kostenfreies Erstgespräch digital — ohne Warteschleife,
                  ohne Formular-Marathon. Verfügbare Slots sehen Sie sofort.
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a
                    href="https://tidycal.com/team/concierge-team-wissensreich/personliches-gesprach-kurs-und-fordermittelberatung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-5 text-[14px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                  >
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    Termin online buchen
                  </a>
                  <a
                    href="tel:+4920837769571"
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-ink-900/15 bg-white px-5 text-[14px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                  >
                    <Headphones className="h-4 w-4" aria-hidden="true" />
                    +49 208 377 695 71
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Ihr Ansprechpartner */}
      <Section aria-labelledby="c-ansprechpartner">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Image
              src="/dozenten/florian-domin.png"
              alt="Florian Domin"
              width={120}
              height={120}
              className="h-28 w-28 flex-none rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                Ihr Ansprechpartner
              </p>
              <h2
                id="c-ansprechpartner"
                className="mt-1 font-display text-display-sm text-ink-900"
              >
                Florian Domin
              </h2>
              <p className="mt-1 text-[14px] font-medium text-brand-700">
                CEO WissensReich Academy · Leitung Concierge-Service
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Der Concierge-Service ist unser Herzstück — und er hat ein Gesicht.
                Florian Domin leitet die WissensReich Academy und verantwortet
                persönlich, dass Förderanträge sauber vorbereitet, Prozesse klar
                strukturiert und Teilnehmende vom ersten Gespräch bis zum Abschluss
                begleitet werden.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream" aria-labelledby="c-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="c-cta"
            className="font-display text-display-md text-ink-900"
          >
            Klarheit schaffen — ohne Verpflichtung
          </h2>
          <p className="mt-5 text-lead text-ink-500">
            Schildern Sie uns Ihr Vorhaben. Wir prüfen, wo der Concierge-Service
            sinnvoll unterstützt, und nennen Ihnen einen klaren nächsten Schritt.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={PRIMARY_CTA.href}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              {PRIMARY_CTA.label}
            </Link>
            <Link
              href={SECONDARY_CTA.href}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-6 text-[15px] font-medium text-ink-900 hover:bg-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              {SECONDARY_CTA.label}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
