"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles, Check, ArrowRight } from "lucide-react";
import {
  QUICKCHECK_INTRO,
  QUICKCHECK_STEPS,
  QUICKCHECK_RESULTS,
  type QuickCheckResult,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

/* ----------------------------------------------------------------
 * Result-Matching Logic
 * Maps user answers to the best-fit funding result.
 * ---------------------------------------------------------------- */

function matchResult(answers: Record<number, string>): QuickCheckResult {
  const status = answers[1];
  const thema = answers[2];

  // Arbeitssuchend → AVGS
  if (status === "arbeitssuchend") {
    return QUICKCHECK_RESULTS.find((r) => r.key === "avgs")!;
  }

  // Solo → KOMPASS
  if (status === "solo") {
    return QUICKCHECK_RESULTS.find((r) => r.key === "solo-kompass")!;
  }

  // Angestellt → Unternehmen
  if (status === "angestellt") {
    return QUICKCHECK_RESULTS.find((r) => r.key === "unternehmen")!;
  }

  // Fallback: unsicher/thema → Beratung
  if (thema === "unsicher") {
    return QUICKCHECK_RESULTS.find((r) => r.key === "beratung")!;
  }

  // Default
  return QUICKCHECK_RESULTS.find((r) => r.key === "beratung")!;
}

/* ----------------------------------------------------------------
 * Overlay + Backdrop
 * ---------------------------------------------------------------- */

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

const stepVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

/* ----------------------------------------------------------------
 * QuickCheckModal Component
 * ---------------------------------------------------------------- */

type QuickCheckModalProps = {
  open: boolean;
  onClose: () => void;
};

export function QuickCheckModal({ open, onClose }: QuickCheckModalProps) {
  const prefersReduced = useReducedMotion();
  const [currentStep, setCurrentStep] = React.useState(0); // 0 = intro
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [direction, setDirection] = React.useState(1);
  const [showResult, setShowResult] = React.useState(false);

  const totalSteps = QUICKCHECK_STEPS.length;
  const progress = showResult ? 100 : (currentStep / totalSteps) * 100;

  // Lock body scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // Close on Escape
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [open, onClose]);

  function reset() {
    setCurrentStep(0);
    setAnswers({});
    setDirection(1);
    setShowResult(false);
  }

  function handleClose() {
    reset();
    onClose();
  }

  function handleSelect(stepId: number, value: string) {
    const nextAnswers = { ...answers, [stepId]: value };
    setAnswers(nextAnswers);
    trackEvent("quickcheck_step_answered", { step: stepId, value });

    // Advance to next step after a brief delay for feedback
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setDirection(1);
        setCurrentStep((prev) => prev + 1);
      }

      // If this was the last step, show result
      if (currentStep === totalSteps) {
        const finalResult = matchResult(nextAnswers);
        trackEvent("quickcheck_completed", {
          result_key: finalResult.key,
          foerderweg: finalResult.foerderung,
        });
        setShowResult(true);
      }
    }, 200);
  }

  function handleBack() {
    if (showResult) {
      setShowResult(false);
      setDirection(-1);
      return;
    }
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  }

  function handleStart() {
    trackEvent("quickcheck_started");
    setDirection(1);
    setCurrentStep(1);
  }

  const animTransition = prefersReduced
    ? { duration: 0 }
    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] };

  const result = showResult ? matchResult(answers) : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          transition={animTransition}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={QUICKCHECK_INTRO.title}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-line bg-white shadow-card"
            variants={modalVariants}
            transition={animTransition}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Schließen"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 hover:bg-cream-100 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Progress bar */}
            {currentStep > 0 && (
              <div className="mx-6 mt-6 h-1.5 overflow-hidden rounded-full bg-cream-200">
                <motion.div
                  className="h-full rounded-full bg-brand-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            )}

            <div className="p-6 pt-4">
              <AnimatePresence mode="wait" custom={direction}>
                {/* INTRO SCREEN */}
                {currentStep === 0 && !showResult && (
                  <motion.div
                    key="intro"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={animTransition}
                    className="text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                      <Sparkles className="h-7 w-7 text-brand-600" />
                    </div>
                    <span className="mt-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                      {QUICKCHECK_INTRO.badge}
                    </span>
                    <h2 className="mt-3 font-display text-display-sm text-ink-900">
                      {QUICKCHECK_INTRO.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                      {QUICKCHECK_INTRO.sub}
                    </p>
                    <button
                      type="button"
                      onClick={handleStart}
                      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 text-[15px] font-semibold text-white shadow-soft transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                    >
                      Jetzt starten
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-xs text-ink-400">
                      4 kurze Fragen · Keine Anmeldung nötig
                    </p>
                  </motion.div>
                )}

                {/* QUESTION STEPS */}
                {currentStep >= 1 && currentStep <= totalSteps && !showResult && (
                  <motion.div
                    key={`step-${currentStep}`}
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={animTransition}
                  >
                    {(() => {
                      const step = QUICKCHECK_STEPS[currentStep - 1]!;
                      return (
                        <>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                            {step.microCommitment}
                          </p>
                          <h3 className="mt-3 font-display text-xl text-ink-900">
                            {step.question}
                          </h3>
                          <p className="mt-2 text-[14px] text-ink-500">
                            {step.subtext}
                          </p>

                          <div className="mt-5 space-y-2.5">
                            {step.options.map((opt) => {
                              const selected = answers[step.id] === opt.value;
                              return (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => handleSelect(step.id, opt.value)}
                                  className={cn(
                                    "flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-150",
                                    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45",
                                    selected
                                      ? "border-brand-600 bg-brand-50 text-brand-700"
                                      : "border-line bg-white text-ink-900 hover:border-brand-200 hover:bg-cream-50",
                                  )}
                                >
                                  <span
                                    className={cn(
                                      "flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 transition-colors",
                                      selected
                                        ? "border-brand-600 bg-brand-600"
                                        : "border-ink-400/40",
                                    )}
                                  >
                                    {selected && (
                                      <Check className="h-3 w-3 text-white" />
                                    )}
                                  </span>
                                  {opt.label}
                                </button>
                              );
                            })}
                          </div>

                          {/* Back button */}
                          <button
                            type="button"
                            onClick={handleBack}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                          >
                            <ChevronLeft className="h-4 w-4" />
                            Zurück
                          </button>
                        </>
                      );
                    })()}
                  </motion.div>
                )}

                {/* RESULT SCREEN */}
                {showResult && result && (
                  <motion.div
                    key="result"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={animTransition}
                  >
                    <div className="text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50">
                        <Check className="h-7 w-7 text-green-600" />
                      </div>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-green-700">
                        Ihr Ergebnis
                      </p>
                    </div>

                    <h3 className="mt-4 font-display text-xl text-ink-900">
                      {result.title}
                    </h3>

                    <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg bg-cream-100 p-3">
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                          Förderweg
                        </dt>
                        <dd className="mt-1 text-[14px] font-semibold text-ink-900">
                          {result.foerderung}
                        </dd>
                      </div>
                      <div className="rounded-lg bg-brand-50 p-3">
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-700">
                          Förderquote
                        </dt>
                        <dd className="mt-1 text-[14px] font-semibold text-brand-700">
                          {result.foerderquote}
                        </dd>
                      </div>
                    </dl>

                    <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                      {result.beschreibung}
                    </p>
                    <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink-700">
                      {result.empfehlung}
                    </p>

                    <Link
                      href={result.cta.href}
                      onClick={() => {
                        trackEvent("cta_clicked", {
                          source: "quickcheck_result",
                          result_key: result.key,
                          target: result.cta.href,
                        });
                        handleClose();
                      }}
                      className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 text-[15px] font-semibold text-white shadow-soft transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                    >
                      {result.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <div className="mt-3 flex items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          reset();
                          handleStart();
                        }}
                        className="text-sm font-medium text-ink-500 underline-offset-4 hover:text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                      >
                        Erneut starten
                      </button>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="text-sm font-medium text-ink-400 hover:text-ink-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                      >
                        Schließen
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----------------------------------------------------------------
 * QuickCheckTrigger — The CTA button that opens the modal
 * ---------------------------------------------------------------- */

export function useQuickCheck() {
  const [open, setOpen] = React.useState(false);
  return {
    open,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
  };
}
