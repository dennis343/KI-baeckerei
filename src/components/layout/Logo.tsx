import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "default" | "light";
};

export function Logo({ className, tone = "default" }: LogoProps) {
  const primary = tone === "light" ? "text-white" : "text-ink-900";
  const accent = tone === "light" ? "text-brand-200" : "text-brand-600";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 font-display text-xl leading-none tracking-tight",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded-md",
        className,
      )}
      aria-label="WissensReich Academy — Startseite"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={36}
        height={42}
        className="h-9 w-auto"
        priority
      />
      <span className="flex items-baseline gap-1">
        <span className={primary}>WissensReich</span>
        <span className={cn("font-sans text-[0.72em] font-semibold uppercase tracking-[0.16em]", accent)}>
          Academy
        </span>
      </span>
      <span
        className={cn(
          "ml-2 hidden rounded-full border px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] sm:inline-flex",
          tone === "light"
            ? "border-white/25 text-white/80"
            : "border-ink-900/10 bg-cream-100 text-ink-700",
        )}
        aria-hidden="true"
      >
        Start
      </span>
    </Link>
  );
}
