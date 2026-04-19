import * as React from "react";
import { Compass, Users, LayoutGrid } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { WARUM_ANDERS } from "@/lib/constants";

const icons = [Compass, Users, LayoutGrid] as const;

export function WarumAnders() {
  return (
    <Section aria-labelledby="warum-title">
      <ScrollReveal>
        <SectionHeader
          eyebrow={WARUM_ANDERS.eyebrow}
          titleId="warum-title"
          title={WARUM_ANDERS.title}
          intro={WARUM_ANDERS.intro}
        />
      </ScrollReveal>

      <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3" stagger={0.12}>
        {WARUM_ANDERS.blocks.map((b, i) => {
          const Icon = icons[i] ?? Compass;
          return (
            <StaggerItem key={b.title}>
              <article className="flex flex-col">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  {b.body}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
