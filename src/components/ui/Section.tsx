import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "white" | "cream" | "ink" | "brand-soft";

type SectionProps = {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

const toneMap: Record<Tone, string> = {
  white: "bg-white text-ink-900",
  cream: "bg-cream-100 text-ink-900",
  ink: "bg-ink-900 text-white",
  "brand-soft": "bg-brand-50 text-ink-900",
};

/**
 * Section wrapper with consistent vertical rhythm (8pt grid via `spacing.section`).
 * Tone-driven background; semantic `<section>` by default.
 */
export function Section({
  id,
  tone = "white",
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-section",
        toneMap[tone],
        className,
      )}
      {...rest}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  titleId?: string;
  className?: string;
  /** Heading level for the title. Defaults to h2. Use "h1" for page-top headers. */
  as?: "h1" | "h2";
};

/**
 * Consistent eyebrow + title + intro block used by every section.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  titleId,
  className,
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;
  return (
    <header
      className={cn(
        "max-w-[48rem]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
          {eyebrow}
        </p>
      )}
      <Heading
        id={titleId}
        className="font-display text-display-lg text-ink-900"
      >
        {title}
      </Heading>
      {intro && (
        <p className="mt-5 text-lead text-ink-500">
          {intro}
        </p>
      )}
    </header>
  );
}
