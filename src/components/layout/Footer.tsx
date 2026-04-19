import * as React from "react";
import Link from "next/link";
import { BRAND, NAV_ITEMS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const year = new Date().getFullYear();

const legalLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Veröffentlichungen", href: "/ueber/veroeffentlichungen" },
  { label: "Rechtsgrundlagen", href: "/ueber/rechtsgrundlagen" },
  { label: "Botschafter:innen", href: "/botschafter" },
  { label: "AGB", href: "/agb" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900 text-white/90">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/75">
              {BRAND.description}
            </p>
            <p className="mt-6 text-sm text-white/60">
              AZAV-zertifiziert · RDG §11 konform · Förderwege nach §45 SGB III &amp;
              KOMPASS (ESF)
            </p>
          </div>

          <nav aria-label="Footer-Navigation" className="text-[15px]">
            <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
              Angebot
            </h2>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-[15px]">
            <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
              Kontakt
            </h2>
            <ul className="space-y-3 text-white/90">
              <li>{BRAND.legal.company}</li>
              <li>{BRAND.legal.address}</li>
              <li>{BRAND.legal.city}</li>
              <li>
                <a
                  href={`mailto:${BRAND.legal.email}`}
                  className="rounded underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
                >
                  {BRAND.legal.email}
                </a>
              </li>
              <li className="text-white/60">
                Geschäftsführer: {BRAND.legal.managingDirector}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BRAND.fullName}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded hover:text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
