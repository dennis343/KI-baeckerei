import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative z-10 py-24 sm:py-32 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 w-full">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-4">
          404
        </p>
        <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-white max-w-3xl">
          Diese Seite gibt es nicht mehr
          <br />
          <span className="text-brand-300">oder noch nicht.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
          Vielleicht wurde sie verschoben oder der Link war unvollständig. Kein
          Problem — hier sind die nächsten Schritte.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14px] font-semibold text-black transition hover:bg-brand-200 hover:text-ink-900"
          >
            Zur Startseite
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#bewerbung"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-[14px] font-semibold text-white transition hover:border-white/70 hover:bg-white/5"
          >
            Anfrage stellen
          </Link>
        </div>
      </div>
    </section>
  );
}
