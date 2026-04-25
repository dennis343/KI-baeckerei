"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 4);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 ease-brand",
          scrolled
            ? "bg-[#07070C]/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 flex h-16 lg:h-20 items-center justify-between">
          <Logo tone="light" />

          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex lg:items-center lg:gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-[14px] font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#bewerbung"
              className="hidden sm:inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-[13px] font-semibold text-black transition hover:bg-brand-200 hover:text-ink-900"
            >
              Platz sichern
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-30 lg:hidden transition-opacity duration-200",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-[#07070C]" aria-hidden />
        <div className="relative h-full pt-24 pb-12 px-6 flex flex-col">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-white py-3 border-b border-white/10 hover:text-brand-300 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#bewerbung"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex items-center justify-center gap-2 h-14 rounded-full bg-white text-black text-[14px] font-semibold transition hover:bg-brand-200"
          >
            Platz sichern
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
