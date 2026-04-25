import * as React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { Logo } from "./Logo";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050508] text-white/70">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] items-start">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/55 font-light">
              {BRAND.description}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 mb-5">
              Navigation
            </p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link
                  href="/"
                  className="text-white/75 hover:text-white transition"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/#bewerbung"
                  className="text-white/75 hover:text-white transition"
                >
                  Anfrage stellen
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Rechtliches">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 mb-5">
              Rechtliches
            </p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link
                  href="/impressum"
                  className="text-white/75 hover:text-white transition"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-white/75 hover:text-white transition"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-xs text-white/40 font-light">
            © {year} {BRAND.fullName}. {BRAND.legal.operator} {BRAND.legal.company}.
          </p>
          <p className="text-xs text-white/40 font-light">
            {BRAND.legal.city} · Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}
