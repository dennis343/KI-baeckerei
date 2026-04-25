import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "default" | "light";
};

/**
 * KI Bäckerei — reine Wortmarke. Bewusst kein Bildlogo.
 * Editorial: Display-Serif für „KI", Sans-Caps für „Bäckerei".
 */
export function Logo({ className, tone = "light" }: LogoProps) {
  const ink = tone === "light" ? "text-white" : "text-ink-900";
  const accent = tone === "light" ? "text-brand-300" : "text-brand-600";

  return (
    <Link
      href="/"
      aria-label="KI Bäckerei — Startseite"
      className={cn(
        "group inline-flex items-baseline gap-2 leading-none rounded-md",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45",
        className,
      )}
    >
      <span
        className={cn(
          "font-display italic font-semibold text-[1.45rem] tracking-tight",
          accent,
        )}
      >
        KI
      </span>
      <span
        className={cn(
          "font-sans font-semibold text-[0.78rem] uppercase tracking-[0.22em]",
          ink,
        )}
      >
        Bäckerei
      </span>
    </Link>
  );
}
