import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PRIMARY_CTA } from "@/lib/constants";

export default function NotFound() {
  return (
    <Section aria-labelledby="nf-title">
      <SectionHeader
        as="h1"
        eyebrow="404"
        titleId="nf-title"
        title="Diese Seite gibt es nicht mehr oder noch nicht"
        intro="Vielleicht wurde sie verschoben oder der Link war unvollständig. Kein Problem — hier sind die nächsten Schritte."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
        >
          Zur Startseite
        </Link>
        <Link
          href={PRIMARY_CTA.href}
          className="inline-flex h-12 items-center justify-center rounded-xl border border-ink-900/15 bg-white px-6 text-[15px] font-medium text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
        >
          {PRIMARY_CTA.label}
        </Link>
      </div>
    </Section>
  );
}
