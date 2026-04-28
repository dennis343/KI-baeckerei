"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/utils";
import { ALL_OFFERS } from "@/lib/offers";

type OptionValue = string;

type QuickcheckStep = {
  key: "paket" | "situation" | "bremser" | "ziel";
  question: string;
  hint: string;
  options: { value: OptionValue; label: string }[];
};

const PAKET_OPTIONS: { value: string; label: string }[] = [
  ...ALL_OFFERS.map((o) => ({ value: o.id, label: o.shortName })),
  { value: "unsicher", label: "Noch unsicher · bitte beraten" },
];

const STEPS: QuickcheckStep[] = [
  {
    key: "paket",
    question: "Welches Angebot interessiert Sie?",
    hint: "Wählen Sie Ihre erste Tendenz — wir klären im Gespräch, ob es passt.",
    options: PAKET_OPTIONS,
  },
  {
    key: "situation",
    question: "Wo stehen Sie gerade?",
    hint: "Damit wir den Strategietermin zielgerichtet vorbereiten können.",
    options: [
      { value: "unternehmen", label: "Unternehmen mit Team" },
      { value: "selbststaendig", label: "Selbstständig / Solo" },
      { value: "angestellt", label: "Angestellt / Fachkraft" },
      { value: "team-lead", label: "Team-Lead / Projektverantwortlich" },
      { value: "gruender", label: "Gründer · Idee in Arbeit" },
    ],
  },
  {
    key: "bremser",
    question: "Was kostet Sie aktuell die meiste Zeit?",
    hint: "Eine Antwort reicht — die, die Sie am meisten ärgert.",
    options: [
      { value: "agentur-schleifen", label: "Agentur- und Abstimmungsschleifen" },
      { value: "unklare-anforderungen", label: "Unklare Anforderungen & Briefings" },
      { value: "keine-zeit", label: "Zu wenig Zeit für eigene Umsetzung" },
      { value: "abhaengigkeit", label: "Abhängigkeit von Externen" },
      { value: "umsetzungsluecke", label: "Idee da · Umsetzung fehlt" },
    ],
  },
  {
    key: "ziel",
    question: "Welches Vorhaben soll zuerst real werden?",
    hint: "Etwas Konkretes hilft uns, den Erstcall zielgerichtet zu führen.",
    options: [
      { value: "angebotsseite", label: "Angebots- oder Landingpage" },
      { value: "customer-journey", label: "Customer Journey · Vertriebsstrecke" },
      { value: "prototyp", label: "Digitaler Prototyp · App" },
      { value: "prozesse", label: "Interne Prozesse & Strukturen" },
      { value: "newsletter", label: "Newsletter · Follow-up-Logik" },
      { value: "offen", label: "Noch offen · möchte einordnen" },
    ],
  },
];

const inputBase =
  "w-full h-12 bg-white/[0.02] border border-white/15 rounded-xl px-4 text-white placeholder-white/45 " +
  "focus:border-brand-400 focus:bg-white/[0.04] focus:outline-none focus:ring-4 focus:ring-brand-400/15 transition";

const textareaBase =
  "w-full bg-white/[0.02] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/45 " +
  "focus:border-brand-400 focus:bg-white/[0.04] focus:outline-none focus:ring-4 focus:ring-brand-400/15 transition resize-none";

/**
 * Liest die paket-id aus URL-Search-Params (`?paket=kompakt#bewerbung`) oder
 * Hash (`#bewerbung?paket=kompakt`). Zuerst Search-Params, weil das die
 * primäre Verlinkung der Pricing-Cards ist; Hash als Fallback.
 */
function readPaketFromUrl(): string | null {
  if (typeof window === "undefined") return null;
  const search = window.location.search;
  const searchMatch = search.match(/[?&]paket=([^&]+)/);
  const hash = window.location.hash;
  const hashMatch = hash.match(/[?&]paket=([^&]+)/);
  const raw = searchMatch?.[1] ?? hashMatch?.[1];
  if (!raw) return null;
  const candidate = decodeURIComponent(raw);
  return PAKET_OPTIONS.some((o) => o.value === candidate) ? candidate : null;
}

type ApplyFormProps = {
  layout?: "default" | "wide";
};

export function ApplyForm({ layout = "default" }: ApplyFormProps = {}) {
  const isWide = layout === "wide";
  const [answers, setAnswers] = React.useState<Record<string, OptionValue>>({});
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [note, setNote] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  // Paket aus URL übernehmen, wenn der Nutzer von einer Pricing-Card kommt.
  React.useEffect(() => {
    const initial = readPaketFromUrl();
    if (initial) {
      setAnswers((prev) => ({ ...prev, paket: initial }));
    }
    function onHashChange() {
      const next = readPaketFromUrl();
      if (next) setAnswers((prev) => ({ ...prev, paket: next }));
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const completedSteps = STEPS.filter((s) => answers[s.key]).length;
  const progress = Math.round((completedSteps / STEPS.length) * 100);

  function selectOption(stepKey: string, value: OptionValue) {
    setAnswers((prev) => ({ ...prev, [stepKey]: value }));
  }

  function labelFor(stepKey: QuickcheckStep["key"]): string {
    const step = STEPS.find((s) => s.key === stepKey);
    const value = answers[stepKey];
    return step?.options.find((o) => o.value === value)?.label ?? "–";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    const paket = labelFor("paket");
    const situation = labelFor("situation");
    const bremser = labelFor("bremser");
    const ziel = labelFor("ziel");

    const lines = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone && `Telefon: ${phone}`,
      company && `Unternehmen: ${company}`,
      "",
      "— Quickcheck —",
      `Interesse: ${paket}`,
      `Ausgangslage: ${situation}`,
      `Größter Bremser: ${bremser}`,
      `Zuerst umsetzen: ${ziel}`,
      "",
      note && `Nachricht: ${note}`,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `Strategietermin: Digitale Umsetzungsmaschine (${paket})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 400);
  }

  if (sent) {
    return (
      <div
        className="mx-auto max-w-2xl text-center py-12"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/15 ring-4 ring-brand-400/10 mb-10">
          <Check aria-hidden="true" className="w-7 h-7 text-brand-300" />
        </div>
        <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-white">
          Ihre Anfrage ist auf dem Weg.
        </h3>
        <p className="mt-6 text-[15px] sm:text-base text-white/85 leading-relaxed max-w-xl mx-auto">
          Sobald Ihr E-Mail-Programm die Nachricht abgeschickt hat, melden wir
          uns persönlich — werktags meist innerhalb von 24 Stunden.
        </p>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-5">
            Was als nächstes passiert
          </p>
          <ol className="space-y-4">
            {[
              {
                num: "01",
                head: "Wir lesen Ihre Anfrage.",
                sub: "Quickcheck plus Notiz, falls Sie eine geschickt haben.",
              },
              {
                num: "02",
                head: "Wir melden uns für ein 15–30-min-Strategiegespräch.",
                sub: "Per Telefon oder Video — Sie wählen.",
              },
              {
                num: "03",
                head: "Sie entscheiden in Ruhe.",
                sub: "Kein Verkaufsdruck. Kein Closing-Skript.",
              },
            ].map((s) => (
              <li key={s.num} className="flex gap-4">
                <span className="font-mono text-xs text-brand-300 tabular-nums pt-1">
                  {s.num}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-white leading-snug">
                    {s.head}
                  </p>
                  <p className="mt-1 text-sm text-white/90 leading-relaxed">
                    {s.sub}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  const allQuickcheckDone = completedSteps === STEPS.length;
  const canSubmit = name.trim() && email.trim() && allQuickcheckDone;

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto ${isWide ? "max-w-none" : "max-w-3xl"}`}
      noValidate
      aria-label="Strategietermin anfragen"
    >
      <div className={isWide ? "mb-8" : "mb-12"}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
            Quickcheck · {completedSteps} von {STEPS.length}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300 tabular-nums">
            {progress}%
          </p>
        </div>
        <div
          className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label={`Quickcheck-Fortschritt: ${completedSteps} von ${STEPS.length} Antworten gegeben`}
        >
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-brand-300 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        className={
          isWide
            ? "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mb-12"
            : "space-y-12 mb-14"
        }
      >
        {STEPS.map((step, idx) => {
          const done = Boolean(answers[step.key]);
          const groupLabelId = `quickcheck-q-${step.key}`;
          const hintId = `quickcheck-hint-${step.key}`;
          return (
            <fieldset
              key={step.key}
              className="border-0 p-0 m-0"
              aria-labelledby={groupLabelId}
              aria-describedby={hintId}
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="font-mono text-xs text-brand-300 tabular-nums"
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>
                <legend
                  id={groupLabelId}
                  className="font-display text-xl sm:text-2xl text-white leading-snug"
                >
                  {step.question}
                </legend>
                {done && (
                  <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300">
                    <Check aria-hidden="true" className="w-3.5 h-3.5" />
                    <span className="sr-only">Frage beantwortet:</span>erledigt
                  </span>
                )}
              </div>
              <p id={hintId} className="text-sm text-white/85 mb-5 ml-9">
                {step.hint}
              </p>
              <div
                className="flex flex-wrap gap-2.5 ml-9"
                role="radiogroup"
                aria-labelledby={groupLabelId}
              >
                {step.options.map((opt) => {
                  const selected = answers[step.key] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => selectOption(step.key, opt.value)}
                      className={`group inline-flex items-center gap-2 px-5 py-3 rounded-full text-[13px] sm:text-sm font-medium border transition ${
                        selected
                          ? "bg-brand-500 text-white border-brand-400 shadow-[0_0_0_4px_rgba(110,63,163,0.18)]"
                          : "border-white/15 text-white/85 hover:border-white/35 hover:bg-white/[0.04]"
                      }`}
                      role="radio"
                      aria-checked={selected}
                    >
                      {selected && (
                        <Check aria-hidden="true" className="w-3.5 h-3.5" />
                      )}
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </div>

      <div className="border-t border-white/10 pt-10 mb-10">
        <div className="flex items-baseline gap-4 mb-7">
          <span className="font-mono text-xs text-brand-300 tabular-nums">
            05
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-white">
            Wie erreichen wir Sie?
          </h3>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            isWide ? "lg:grid-cols-4" : ""
          } gap-5 ml-0 sm:ml-9`}
        >
          <label className="block">
            <span className="text-[10px] text-white/90 uppercase tracking-[0.18em] font-semibold mb-2 block">
              Name *
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
              autoComplete="name"
              className={inputBase}
              placeholder="Ihr Name"
            />
          </label>
          <label className="block">
            <span className="text-[10px] text-white/90 uppercase tracking-[0.18em] font-semibold mb-2 block">
              E-Mail *
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              autoComplete="email"
              inputMode="email"
              className={inputBase}
              placeholder="ihre@email.de"
            />
          </label>
          <label className="block">
            <span className="text-[10px] text-white/90 uppercase tracking-[0.18em] font-semibold mb-2 block">
              Telefon{" "}
              <span className="text-white/90 normal-case tracking-normal">
                — optional
              </span>
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className={inputBase}
              placeholder="+49 …"
            />
          </label>
          <label className="block">
            <span className="text-[10px] text-white/90 uppercase tracking-[0.18em] font-semibold mb-2 block">
              Unternehmen{" "}
              <span className="text-white/90 normal-case tracking-normal">
                — optional
              </span>
            </span>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoComplete="organization"
              className={inputBase}
              placeholder="Firma · Verein · Praxis"
            />
          </label>
        </div>

        <label className="block mt-5 ml-0 sm:ml-9">
          <span className="text-[10px] text-white/90 uppercase tracking-[0.18em] font-semibold mb-2 block">
            Kurzbeschreibung{" "}
            <span className="text-white/90 normal-case tracking-normal">
              — optional
            </span>
          </span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className={textareaBase}
            placeholder="Worum geht es konkret? Welcher Use Case soll zuerst real werden?"
          />
        </label>
      </div>

      {allQuickcheckDone && (
        <div className="mb-10 rounded-2xl border border-brand-400/25 bg-gradient-to-br from-brand-500/[0.06] to-transparent p-6 sm:p-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 mb-5">
            Zusammenfassung Ihres Quickchecks
          </p>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
            {[
              { k: "Interesse", v: labelFor("paket") },
              { k: "Ausgangslage", v: labelFor("situation") },
              { k: "Bremser", v: labelFor("bremser") },
              { k: "Zuerst umsetzen", v: labelFor("ziel") },
            ].map((row) => (
              <div key={row.k}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-white/85 font-semibold mb-1">
                  {row.k}
                </dt>
                <dd className="text-sm text-white leading-snug">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="flex flex-col gap-5">
        <button
          type="submit"
          disabled={!canSubmit || sending}
          aria-busy={sending}
          className="group inline-flex items-center justify-center gap-3 px-8 h-14 rounded-full bg-white text-black text-[14px] font-semibold tracking-wide transition hover:bg-brand-200 hover:text-ink-900 disabled:bg-white/15 disabled:text-white/85 disabled:cursor-not-allowed disabled:hover:bg-white/15 w-full sm:w-auto"
        >
          {sending ? (
            <>
              <Loader2 aria-hidden="true" className="w-4 h-4 animate-spin" />
              Wird gesendet …
            </>
          ) : (
            <>
              Strategietermin anfragen
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 transition group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>

        <p
          aria-live="polite"
          className="text-xs text-white/85 leading-relaxed min-h-[1rem]"
        >
          {!canSubmit && !sending
            ? !allQuickcheckDone
              ? `Noch ${STEPS.length - completedSteps} Quickcheck-Antwort${
                  STEPS.length - completedSteps === 1 ? "" : "en"
                } offen.`
              : "Bitte Name und E-Mail eintragen."
            : ""}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/85">
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3 h-3 text-brand-400" />
            Unverbindlich
          </span>
          <span className="text-white/20">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3 h-3 text-brand-400" />
            Antwort werktags innerhalb 24 h
          </span>
          <span className="text-white/20">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3 h-3 text-brand-400" />
            Kein Verkaufsdruck
          </span>
          <span className="text-white/20">·</span>
          <a
            href="/datenschutz"
            className="underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </form>
  );
}
