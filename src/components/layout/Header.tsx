"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { NAV_ITEMS, type NavChild } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";
import { useQuickCheckContext } from "@/components/providers/QuickCheckProvider";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { openQuickCheck } = useQuickCheckContext();

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 4);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-all duration-200 ease-brand",
          scrolled
            ? "border-line/80 bg-white/92 backdrop-blur"
            : "border-transparent bg-white",
        )}
      >
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <Logo />

          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex lg:items-center lg:gap-1"
          >
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-700 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              Startseite
            </Link>
            {NAV_ITEMS.map((item) =>
              item.children && item.children.length > 0 ? (
                <NavDropdown key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-700 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openQuickCheck("header")}
              className="hidden h-11 items-center justify-center rounded-xl bg-brand-600 px-5 text-[15px] font-medium text-white shadow-soft transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 lg:inline-flex"
            >
              Förderfähigkeit prüfen
            </button>
            <button
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink-900 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </>
  );
}

function NavDropdown({ item }: { item: (typeof NAV_ITEMS)[number] }) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  // Close on Escape
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium text-ink-700 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
        onFocus={handleEnter}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-150",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </Link>

      {open && item.children && (
        <div
          className="absolute left-0 top-full z-50 mt-1 min-w-[280px] max-w-[360px] rounded-xl border border-line bg-white p-2 shadow-card"
          role="menu"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {item.children.map((child) => (
            <NavMenuChild
              key={child.href}
              child={child}
              onFocus={handleEnter}
              onBlur={handleLeave}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NavMenuChild({
  child,
  onFocus,
  onBlur,
}: {
  child: NavChild;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const hasChildren = !!child.children && child.children.length > 0;
  return (
    <div className="group/sub">
      <Link
        href={child.href}
        role="menuitem"
        onFocus={onFocus}
        onBlur={onBlur}
        className="flex flex-col rounded-lg px-3 py-2 text-[14px] font-medium text-ink-700 hover:bg-cream-100 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
      >
        <span>{child.label}</span>
        {child.description && (
          <span className="mt-0.5 text-[12px] font-normal text-ink-500">
            {child.description}
          </span>
        )}
      </Link>
      {hasChildren && (
        <ul className="ml-3 mt-1 mb-1 border-l border-line pl-3 space-y-0.5">
          {child.children!.map((sub) => (
            <li key={sub.href}>
              <Link
                href={sub.href}
                role="menuitem"
                onFocus={onFocus}
                onBlur={onBlur}
                className="flex flex-col rounded-md px-2.5 py-1.5 text-[13px] font-medium text-ink-600 hover:bg-cream-100 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
              >
                <span>{sub.label}</span>
                {sub.description && (
                  <span className="mt-0.5 text-[11px] font-normal text-ink-500">
                    {sub.description}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
