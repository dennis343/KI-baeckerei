import * as React from "react";
import { Award } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXPERTISE } from "@/lib/constants";

export function Expertise() {
  return (
    <Section tone="brand-soft" aria-labelledby="expertise-title">
      <ScrollReveal>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              {EXPERTISE.eyebrow}
            </p>
            <h2
              id="expertise-title"
              className="mt-4 font-display text-display-md text-ink-900"
            >
              {EXPERTISE.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              {EXPERTISE.body}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {EXPERTISE.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-white p-5 text-center"
              >
                <p className="font-display text-3xl font-semibold text-brand-600">
                  {s.value}
                </p>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-ink-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
