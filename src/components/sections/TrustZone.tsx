import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { SiegelBar } from "@/components/ui/SiegelBar";
import { TRUST } from "@/lib/constants";

export function TrustZone() {
  return (
    <Section tone="ink" aria-labelledby="trust-title">
      <ScrollReveal>
        <SectionHeader
          eyebrow={TRUST.eyebrow}
          titleId="trust-title"
          title={<span className="text-white">{TRUST.title}</span>}
          className="text-white"
        />
      </ScrollReveal>

      <StaggerContainer as="ul" className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {TRUST.items.map((t) => (
          <StaggerItem key={t.label} as="li" className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <CheckCircle2
              className="mt-1 h-5 w-5 flex-none text-brand-300"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-sans text-base font-semibold text-white">
                {t.label}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                {t.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal className="mt-12">
        <SiegelBar variant="dark" withLabels />
      </ScrollReveal>
    </Section>
  );
}
