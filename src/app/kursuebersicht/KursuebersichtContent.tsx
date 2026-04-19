"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, Users, Award, Banknote } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { useQuickCheckContext } from "@/components/providers/QuickCheckProvider";
import {
  KURSE,
  DOZENTEN_ERWEITERT,
  type Kurs,
  type KursKategorie,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

function isKompassKurs(kurs: Kurs): boolean {
  return kurs.foerderung.toLowerCase().includes("kompass");
}

function detailHref(kurs: Kurs): string {
  return isKompassKurs(kurs) ? `/kursuebersicht/${kurs.id}` : kurs.href;
}

/* ----------------------------------------------------------------
 * Category Filter Tabs
 * ---------------------------------------------------------------- */

const FILTER_TABS: { label: string; value: KursKategorie }[] = [
  { label: "Alle Kurse", value: "alle" },
  { label: "Marketing & Sales", value: "marketing-sales" },
  { label: "KI & Automatisierung", value: "ki-automatisierung" },
  { label: "Kommunikation & Rhetorik", value: "kommunikation-rhetorik" },
  { label: "Unternehmertum & Leadership", value: "unternehmertum-leadership" },
  { label: "Unternehmen kompakt", value: "unternehmen-kompakt" },
  { label: "Gründer & Wechsler", value: "avgs" },
];

const KATEGORIE_LABELS: Record<KursKategorie, string> = {
  alle: "Alle",
  "marketing-sales": "Marketing & Sales",
  "ki-automatisierung": "KI & Automatisierung",
  "kommunikation-rhetorik": "Kommunikation & Rhetorik",
  "unternehmertum-leadership": "Unternehmertum & Leadership",
  "unternehmen-kompakt": "Unternehmen kompakt",
  avgs: "Gründer & Wechsler",
};

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* ----------------------------------------------------------------
 * Main Content Component
 * ---------------------------------------------------------------- */

export function KursuebersichtContent() {
  const [activeFilter, setActiveFilter] = React.useState<KursKategorie>("alle");
  const prefersReduced = useReducedMotion();
  const { openQuickCheck } = useQuickCheckContext();

  const filteredKurse = activeFilter === "alle"
    ? KURSE
    : KURSE.filter((k) => k.kategorie.includes(activeFilter));

  return (
    <>
      {/* Hero Section */}
      <Section aria-labelledby="kurse-title">
        <ScrollReveal>
          <SectionHeader
            as="h1"
            eyebrow="Kursübersicht"
            titleId="kurse-title"
            title="Alle Weiterbildungsangebote auf einen Blick"
            intro="AZAV-zertifiziert, staatlich gefördert und persönlich begleitet. Finden Sie den Kurs, der zu Ihrem Weg passt."
          />
        </ScrollReveal>

        {/* Branchenhinweis */}
        <ScrollReveal delay={0.1}>
          <div className="mt-6 rounded-2xl border border-line bg-cream-100 p-5 text-[14px] leading-relaxed text-ink-700 sm:text-[15px]">
            <p>
              <strong className="text-ink-900">Branchenunabhängig nutzbar:</strong>{" "}
              Unsere Kurse eignen sich für Fach- und Führungskräfte aus allen Branchen — vom Handwerk über den Handel bis zur IT.
            </p>
            <p className="mt-2 text-ink-500">
              <strong className="text-ink-700">Hinweis zu KOMPASS:</strong>{" "}
              KOMPASS-förderfähig bei positiver Einzelfallprüfung durch die zuständige Anlaufstelle.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45",
                  activeFilter === tab.value
                    ? "bg-brand-600 text-white shadow-soft"
                    : "bg-cream-100 text-ink-700 hover:bg-cream-200 hover:text-ink-900",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Course Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 md:grid-cols-2"
            >
              {filteredKurse.map((kurs) => (
                <Card
                  key={kurs.id}
                  variant="elevated"
                  className="flex flex-col"
                >
                  {/* Category badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {kurs.kategorie.map((kat) => (
                      <span
                        key={kat}
                        className="inline-flex rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700"
                      >
                        {KATEGORIE_LABELS[kat] ?? kat}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-3 font-display text-display-sm text-ink-900">
                    {kurs.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-brand-700">
                    {kurs.dozent}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                    {kurs.kurzbeschreibung}
                  </p>

                  {/* Facts Grid */}
                  <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4">
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">Dauer</dt>
                        <dd className="mt-0.5 text-[13px] font-medium text-ink-900">{kurs.dauer}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">Format</dt>
                        <dd className="mt-0.5 text-[13px] font-medium text-ink-900">{kurs.format}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Banknote className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">Förderung</dt>
                        <dd className="mt-0.5 text-[13px] font-medium text-ink-900">{kurs.foerderung}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">Zertifizierung</dt>
                        <dd className="mt-0.5 text-[13px] font-medium text-ink-900">{kurs.zertifizierung}</dd>
                      </div>
                    </div>
                  </dl>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {kurs.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[14px] text-ink-700">
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-brand-600" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="mt-auto border-t border-line pt-5">
                    <p className="text-[13px] font-semibold text-ink-900">{kurs.preis}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <Link
                        href={detailHref(kurs)}
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                      >
                        Details ansehen
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Dozenten Section */}
      <Section id="dozenten" tone="cream" aria-labelledby="dozenten-uebersicht-title">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Unsere Dozentinnen & Dozenten"
            titleId="dozenten-uebersicht-title"
            title="Erfahrene Fachleute mit eigener Handschrift"
            intro="Unsere Dozenten bringen Praxiserfahrung, Fachwissen und die Fähigkeit mit, komplexe Inhalte verständlich und umsetzbar zu vermitteln."
          />
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.1}>
          {DOZENTEN_ERWEITERT.map((d) => (
            <StaggerItem key={d.id}>
              <Card variant="outline" className="flex flex-col">
                <div className="flex items-start gap-4">
                  {d.image ? (
                    <Image
                      src={d.image}
                      alt={d.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 flex-none rounded-full object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-brand-50 font-display text-xl font-semibold text-brand-700"
                    >
                      {initials(d.name)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink-900">
                      {d.name}
                    </h3>
                    <p className="mt-0.5 text-[14px] font-medium text-brand-700">
                      {d.role}
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA Section */}
      <Section tone="ink" aria-labelledby="kurse-cta-title">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="kurse-cta-title"
              className="font-display text-display-md text-white"
            >
              Welcher Kurs passt zu Ihnen?
            </h2>
            <p className="mt-5 text-lead text-white/80">
              Prüfen Sie in 60 Sekunden Ihre Förderfähigkeit — kostenlos und unverbindlich.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openQuickCheck("kursuebersicht_cta")}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
              >
                Förderfähigkeit prüfen
              </button>
              <Link
                href="/#kontakt"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
              >
                Beratung anfragen
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
