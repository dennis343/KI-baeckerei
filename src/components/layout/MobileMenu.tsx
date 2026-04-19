"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_ITEMS, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/constants";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lock body scroll when the menu is open (autism-friendly: no surprise scroll)
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape to close
  React.useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Hauptnavigation"
        className={cn(
          "absolute inset-y-0 right-0 flex h-full w-full max-w-sm flex-col bg-white shadow-card",
          "transition-transform duration-250 ease-brand",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            aria-label="Menü schließen"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Hauptnavigation mobil">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex flex-col rounded-xl px-3 py-3 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                >
                  <span className="font-medium text-ink-900">{item.label}</span>
                  {item.description && (
                    <span className="mt-0.5 text-sm text-ink-500">
                      {item.description}
                    </span>
                  )}
                </Link>
                {item.children && item.children.length > 0 && (
                  <ul className="ml-6 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="flex flex-col rounded-xl px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-cream-100 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                        >
                          <span>{child.label}</span>
                          {child.description && (
                            <span className="mt-0.5 text-xs font-normal text-ink-500">
                              {child.description}
                            </span>
                          )}
                        </Link>
                        {child.children && child.children.length > 0 && (
                          <ul className="ml-4 mt-1 space-y-0.5 border-l border-line pl-3">
                            {child.children.map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  onClick={onClose}
                                  className="flex rounded-lg px-2.5 py-2 text-[13px] font-medium text-ink-500 hover:bg-cream-100 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-line bg-cream-50 px-5 py-5">
          <Link
            href={PRIMARY_CTA.href}
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-xl bg-brand-600 font-medium text-white shadow-soft hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
          >
            {PRIMARY_CTA.label}
          </Link>
          <Link
            href={SECONDARY_CTA.href}
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-xl border border-ink-900/15 bg-white font-medium text-ink-900 hover:border-ink-900/30 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
          >
            {SECONDARY_CTA.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
