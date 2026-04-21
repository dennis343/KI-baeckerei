"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Globe } from "lucide-react";
import { translations, type Lang } from "./translations";

export function KiUmsetzungContent() {
  const [lang, setLang] = React.useState<Lang>("de");
  const t = translations[lang];
  const isRtl = lang === "he";
  const dir = isRtl ? "rtl" : "ltr";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div dir={dir} lang={lang}>
      {/* Language Switcher — Sticky top-right (top-left in RTL) */}
      <div
        className={`fixed top-20 z-50 ${isRtl ? "left-4 sm:left-6" : "right-4 sm:right-6"}`}
      >
        <div
          className="flex items-center gap-1 rounded-full border border-white/20 bg-black/80 p-1 backdrop-blur-md shadow-lg"
          role="group"
          aria-label={t.langSwitchLabel}
        >
          <Globe className="h-4 w-4 text-white/60 mx-2" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setLang("de")}
            className={`px-3 h-7 rounded-full text-xs font-semibold transition ${
              lang === "de"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
            aria-pressed={lang === "de"}
          >
            DE
          </button>
          <button
            type="button"
            onClick={() => setLang("he")}
            className={`px-3 h-7 rounded-full text-xs font-semibold transition ${
              lang === "he"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
            aria-pressed={lang === "he"}
          >
            HE
          </button>
        </div>
      </div>

      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium tracking-wide text-white/60 uppercase mb-12">
            {t.heroEyebrow}
          </p>

          <h1 className="text-[clamp(3.5rem,14vw,8rem)] font-serif font-bold leading-[1] tracking-tight text-white mb-8">
            {t.heroLine1}
          </h1>

          <h2 className="text-[clamp(2.5rem,10vw,5.5rem)] font-serif font-bold leading-[1.1] tracking-tight text-white">
            {t.heroLine2}{" "}
            <span className="text-brand-400">{t.heroLine3Accent}</span>
          </h2>

          <p className="mt-12 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            {t.heroSub}
          </p>

          <p className="mt-8 text-sm text-white/50">
            <span className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-400" aria-hidden="true" />
              {t.heroTrust}
            </span>
          </p>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/#kontakt"
              className="px-8 h-12 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition flex items-center gap-2"
            >
              {t.ctaPrimary}
              <Arrow className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#kontakt"
              className="px-8 h-12 rounded-lg border border-white/30 text-white text-sm font-semibold hover:border-white transition"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── THE SHIFT ───────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            {t.shiftOldTitle}
          </h2>
          <p className="text-lg text-black/70 max-w-2xl leading-relaxed mb-6 font-light">
            {t.shiftOldText}
          </p>

          <div className="h-px bg-black/10 my-20" />

          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            {t.shiftNewTitle}
          </h2>
          <p className="text-lg text-brand-600 max-w-2xl leading-relaxed font-light">
            {t.shiftNewText}
          </p>
        </div>
      </section>

      {/* ───────────── OUTCOMES ───────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-6xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            {t.outcomesTitle}
          </h2>
          <p className="text-sm text-white/50 uppercase tracking-wide mb-20 font-medium">
            {t.outcomesSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.outcomes.map((item, i) => (
              <div key={i} className="border-t border-white/20 pt-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-white/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── STAGES ───────────── */}
      <section id="stufen" className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-4">
            {t.stagesTitle}
          </h2>
          <p className="text-sm text-black/50 uppercase tracking-wide mb-20 font-medium">
            {t.stagesSubtitle}
          </p>

          <div className="space-y-24">
            {t.stages.map((stufe, idx) => (
              <div
                key={idx}
                className="border-b border-black/10 pb-20 last:border-0 last:pb-0"
              >
                <div className="flex items-start gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-black flex items-center justify-center">
                      <span className="text-4xl font-serif font-bold text-white">
                        {stufe.nr}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-serif font-bold text-black mb-2">
                      {stufe.name}
                    </h3>
                    <p className="text-sm text-brand-600 font-semibold uppercase tracking-wide mb-6">
                      {stufe.sub}
                    </p>
                    <p className="text-lg text-black font-light mb-8">
                      {stufe.nutzen}
                    </p>
                    <ul className="space-y-3 mb-10">
                      {stufe.inhalte.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-black/70 font-light"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#kontakt"
                      className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-2"
                    >
                      {t.stageMore}
                      <Arrow className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FEATURES ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-6xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            {t.featuresTitle}
          </h2>
          <p className="text-sm text-white/50 uppercase tracking-wide mb-20 font-medium">
            {t.featuresSubtitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {t.features.map((feld, i) => (
              <div
                key={i}
                className="border border-white/20 rounded-lg p-6 text-center"
              >
                <p className="text-base font-light text-white">{feld}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── COMPARISON ───────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-4">
            {t.comparisonTitle}
          </h2>
          <p className="text-sm text-black/50 uppercase tracking-wide mb-20 font-medium">
            {t.comparisonSubtitle}
          </p>

          <div className="space-y-10">
            {t.comparison.map((row, i) => (
              <div key={i} className="border-b border-black/10 pb-10 last:border-0">
                <p className="text-xs text-black/40 uppercase tracking-widest font-semibold mb-4">
                  {row.label}
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-base text-black/60 font-light">{row.alt}</p>
                  </div>
                  <div>
                    <p className="text-base text-brand-600 font-semibold">{row.neu}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-4xl w-full">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            {t.faqTitle}
          </h2>
          <p className="text-sm text-white/50 uppercase tracking-wide mb-20 font-medium">
            {t.faqSubtitle}
          </p>

          <div className="space-y-6">
            {t.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border-t border-white/20 py-6 cursor-pointer"
              >
                <summary className="flex items-start justify-between gap-4 text-white font-semibold text-lg">
                  <span className={isRtl ? "text-right" : "text-left"}>{faq.q}</span>
                  <span className="text-brand-400 transition group-open:rotate-180 flex-shrink-0">
                    ▼
                  </span>
                </summary>
                <p className="mt-6 text-white/80 leading-relaxed font-light">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FINAL CTA ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-6xl sm:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            {t.finalTitle}
          </h2>
          <p className="text-lg text-white/70 mb-16 max-w-xl mx-auto font-light">
            {t.finalSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/#kontakt"
              className="px-8 h-12 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition flex items-center gap-2"
            >
              {t.finalCta1}
              <Arrow className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#kontakt"
              className="px-8 h-12 rounded-lg border border-white/30 text-white text-sm font-semibold hover:border-white transition"
            >
              {t.finalCta2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
