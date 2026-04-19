import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "brand" | "ink" | "outline" | "cream";

const tones: Record<BadgeTone, string> = {
  brand: "bg-brand-50 text-brand-700 border border-brand-100",
  ink: "bg-ink-900 text-white",
  outline: "bg-white text-ink-900 border border-line",
  cream: "bg-cream-100 text-ink-900 border border-cream-200",
};

type BadgeProps = {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
};

export function Badge({ tone = "brand", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
