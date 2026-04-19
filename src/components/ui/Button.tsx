import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium " +
  "transition-all duration-200 ease-brand " +
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 " +
  "disabled:opacity-50 disabled:pointer-events-none " +
  "select-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:bg-brand-700 active:bg-brand-800",
  secondary:
    "bg-white text-ink-900 border border-ink-900/15 hover:border-ink-900/30 hover:bg-cream-100",
  ghost: "text-brand-700 hover:text-brand-800 underline-offset-4 hover:underline",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 -mr-0.5" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    // External / anchor
    if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
