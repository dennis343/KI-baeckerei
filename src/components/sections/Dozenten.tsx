import * as React from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { DOZENTEN } from "@/lib/constants";

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Dozenten() {
  return (
    <Section tone="cream" aria-labelledby="dozenten-title">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Dozentinnen & Dozenten"
          titleId="dozenten-title"
          title="Menschen, die wissen wovon sie sprechen"
          intro="Wir arbeiten mit Fachleuten zusammen, die ihre Inhalte im Alltag geprüft haben. Kein Allgemeinplatz, keine austauschbaren Kurs­maschinen."
        />
      </ScrollReveal>

      <StaggerContainer as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {DOZENTEN.map((d) => (
          <StaggerItem key={d.id} as="li" className="rounded-2xl border border-line bg-white p-6">
            {d.image ? (
              <Image
                src={d.image}
                alt={d.name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 font-display text-2xl font-semibold text-brand-700"
              >
                {initials(d.name)}
              </div>
            )}
            <h3 className="mt-5 font-sans text-base font-semibold text-ink-900">
              {d.name}
            </h3>
            <p className="mt-1 text-[14px] font-medium text-brand-700">
              {d.role}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              {d.expertise}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
