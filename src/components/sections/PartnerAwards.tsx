"use client";

import * as React from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { SiegelBar } from "@/components/ui/SiegelBar";
import { PresseBar } from "@/components/ui/PresseBar";
import { PARTNER_AWARDS } from "@/lib/constants";

const AWARDS = [
  {
    src: "/awards/top100-speakers-2026.webp",
    alt: "Top 100 Speakers Excellence Member 2026",
    title: "Top 100 Speakers 2026",
    subtitle: "Excellence Member",
  },
  {
    src: "/awards/german-brand-award.png",
    alt: "German Brand Award Winner",
    title: "German Brand Award",
    subtitle: "Winner · Partner-Auszeichnung",
  },
];

export function PartnerAwards() {
  return (
    <Section aria-labelledby="partner-title">
      <ScrollReveal>
        <SectionHeader
          eyebrow={PARTNER_AWARDS.eyebrow}
          titleId="partner-title"
          title={PARTNER_AWARDS.title}
        />
      </ScrollReveal>

      {/* Zertifikate als Siegel */}
      <ScrollReveal className="mt-12">
        <SiegelBar
          title="Unsere Trägerzulassung & Zertifizierungen"
          withLabels
          withNotes
        />
      </ScrollReveal>

      {/* Awards */}
      <ScrollReveal className="mt-14">
        <h3 className="text-center font-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
          Auszeichnungen unserer Akademie & Partner
        </h3>
        <StaggerContainer
          as="ul"
          className="mt-6 grid gap-5 sm:grid-cols-2"
          stagger={0.1}
        >
          {AWARDS.map((a) => (
            <StaggerItem
              key={a.src}
              as="li"
              className="flex items-center gap-5 rounded-2xl border border-amber-200 bg-amber-50/60 p-5"
            >
              <div className="flex h-20 w-20 flex-none items-center justify-center rounded-xl bg-white">
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={160}
                  height={160}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div>
                <p className="font-sans text-[15px] font-semibold text-ink-900">
                  {a.title}
                </p>
                <p className="mt-0.5 text-[13px] text-ink-600">{a.subtitle}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </ScrollReveal>

      {/* Medien-Referenzen — mit Logos */}
      <ScrollReveal className="mt-14">
        <PresseBar title={PARTNER_AWARDS.medien.title} />
      </ScrollReveal>
    </Section>
  );
}
