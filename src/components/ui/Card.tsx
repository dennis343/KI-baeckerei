import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "elevated" | "outline" | "cream" | "ink";

const variants: Record<CardVariant, string> = {
  elevated: "bg-white border border-line shadow-card",
  outline: "bg-white border border-line",
  cream: "bg-cream-100 border border-cream-200",
  ink: "bg-ink-900 text-white border border-ink-800",
};

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
  as?: "article" | "div" | "section" | "li";
};

/**
 * Card primitive: ruhige Flächen, sanfte Shadows, 8pt-Grid Padding.
 * Kein Hover-Pflicht — Layout bleibt stabil ohne Cursor.
 */
export function Card({
  variant = "elevated",
  className,
  children,
  as: Tag = "article",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl p-6 sm:p-7 transition-colors duration-200 ease-brand",
        variants[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
