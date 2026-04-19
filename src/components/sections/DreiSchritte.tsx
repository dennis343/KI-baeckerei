import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { DREI_SCHRITTE } from "@/lib/constants";

export function DreiSchritte() {
  return (
    <Section aria-labelledby="schritte-title">
      <ScrollReveal>
        <SectionHeader
          eyebrow={DREI_SCHRITTE.eyebrow}
          titleId="schritte-title"
          title={DREI_SCHRITTE.title}
        />
      </ScrollReveal>

      <StaggerContainer as="ol" className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.12}>
        {DREI_SCHRITTE.steps.map((s) => (
          <StaggerItem key={s.step} as="li" className="rounded-2xl border border-line bg-white p-7">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white"
              >
                {s.step}
              </span>
              <h3 className="font-sans text-base font-semibold text-ink-900">
                {s.title}
              </h3>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              {s.body}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
