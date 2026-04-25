"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/utils";

type OptionValue = string;

type QuickcheckStep = {
  key: "situation" | "bremser" | "ziel";
  label: string;
  question: string;
  options: { value: OptionValue; label: string }[];
};

const STEPS: QuickcheckStep[] = [
  {
    key: "situation",
    label: "Wo stehen Sie?",
    question: "Wer sind Sie gerade?",
    options: [
      { value: "unternehmen", label: "Unternehmen mit Team" },
      { value: "selbststaendig", label: "Selbstständig / Solo" },
      { value: "angestellt", label: "Angestellt / Fachkraft" },
      { value: "team-lead", label: "Team-Lead / Projektverantwortlich" },
      { value: "gruender", label: "Gründer / Idee in Arbeit" },
    ],
  },
  {
    key: "bremser",
    label: "Was bremst am meisten?",
    question: "Was kostet Sie aktuell die meiste Zeit?",
    options: [
      { value: "agentur-schleifen", label: "Lange Agentur- und Abstimmungsschleifen" },
      { value: "unklare-anforderungen", label: "Unklare Anforderungen & Briefings" },
      { value: "keine-zeit", label: "Zu wenig Zeit für eigene Umsetzung" },
      { value: "abhaengigkeit", label: "Abhängigkeit von externen Dienstleistern" },
      { value: "umsetzungsluecke", label: "Idee ist da – Umsetzung fehlt" },
    ],
  },
  {
    key: "ziel",
    label: "Was zuerst umsetzen?",
    question: "Welches Vorhaben soll zuerst real werden?",
    options: [
      { value: "angebotsseite", label: "Angebots- oder Landingpage" },
      { value: "customer-journey", label: "Customer Journey & Vertriebsstrecke" },
      { value: "prototyp", label: "Digitaler Prototyp / App" },
      { value: "prozesse", label: "Interne Prozesse & Strukturen" },
      { value: "newsletter", label: "Newsletter- & Follow-up-Logik" },
      { value: "offen", label: "Noch offen – möchte einordnen" },
    ],
  },
];

export function ApplyForm() {
  const [answers, setAnswers] = React.useState<Record<string, OptionValue>>({});
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [note, setNote] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);

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
      `Ausgangslage: ${situation}`,
      `Größter Bremser: ${bremser}`,
      `Zuerst umsetzen: ${ziel}`,
      "",
      note && `Nachricht: ${note}`,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = "Bewerbung: Das Zweitsystem (4-Wochen-Programm)";
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 400);
  }

  if (sent) {
    return (
      <div className="mx-auto max-w-2xl text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-400/20 mb-8">
          <Check className="w-8 h-8 text-brand-400" />
        </div>
        <h3 className="text-4xl font-serif font-bold text-white mb-6">
          Danke – Ihre Bewerbung ist auf dem Weg.
        </h3>
        <p className="text-lg text-white/80 font-light leading-relaxed">
          Sobald Ihr E-Mail-Programm die Nachricht abgeschickt hat, melden wir uns persönlich bei
          Ihnen – meist innerhalb von 24 Stunden, werktags schneller.
        </p>
      </div>
    );
  }

  const canSubmit = name.trim() && email.trim() && completedSteps === STEPS.length;

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl" noValidate>
      {/* Progress */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">
            Quickcheck · {completedSteps} von {STEPS.length}
          </p>
          <p className="text-xs text-white/50 font-semibold">{progress} %</p>
        </div>
        <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-brand-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Quickcheck steps */}
      <div className="space-y-12 mb-16">
        {STEPS.map((step, idx) => (
          <div key={step.key}>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-xs text-brand-400 font-bold tabular-nums">
                0{idx + 1}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {step.question}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {step.options.map((opt) => {
                const selected = answers[step.key] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => selectOption(step.key, opt.value)}
                    className={`px-5 py-3 rounded-full text-sm font-medium border transition ${
                      selected
                        ? "bg-white text-black border-white"
                        : "border-white/30 text-white hover:border-white hover:bg-white/5"
                    }`}
                    aria-pressed={selected}
                  >
                    {selected && <Check className="inline w-4 h-4 mr-2 -mt-0.5" />}
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact fields */}
      <div className="border-t border-white/20 pt-12 mb-10">
        <h3 className="text-2xl font-serif font-bold text-white mb-8">
          Wie erreichen wir Sie?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="block">
            <span className="text-xs text-white/60 uppercase tracking-wide font-semibold mb-2 block">
              Name *
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full h-12 bg-transparent border border-white/30 rounded-lg px-4 text-white placeholder-white/30 focus:border-white focus:outline-none transition"
              placeholder="Ihr Name"
            />
          </label>
          <label className="block">
            <span className="text-xs text-white/60 uppercase tracking-wide font-semibold mb-2 block">
              E-Mail *
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 bg-transparent border border-white/30 rounded-lg px-4 text-white placeholder-white/30 focus:border-white focus:outline-none transition"
              placeholder="ihre@email.de"
            />
          </label>
          <label className="block">
            <span className="text-xs text-white/60 uppercase tracking-wide font-semibold mb-2 block">
              Telefon
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-12 bg-transparent border border-white/30 rounded-lg px-4 text-white placeholder-white/30 focus:border-white focus:outline-none transition"
              placeholder="+49 …"
            />
          </label>
          <label className="block">
            <span className="text-xs text-white/60 uppercase tracking-wide font-semibold mb-2 block">
              Unternehmen
            </span>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full h-12 bg-transparent border border-white/30 rounded-lg px-4 text-white placeholder-white/30 focus:border-white focus:outline-none transition"
              placeholder="Optional"
            />
          </label>
        </div>
        <label className="block mt-5">
          <span className="text-xs text-white/60 uppercase tracking-wide font-semibold mb-2 block">
            Kurzbeschreibung (optional)
          </span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-white focus:outline-none transition resize-none"
            placeholder="Was möchten Sie in den 4 Wochen konkret umsetzen?"
          />
        </label>
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <button
          type="submit"
          disabled={!canSubmit || sending}
          className="px-8 h-14 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {sending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Wird gesendet…
            </>
          ) : (
            <>
              Bewerbung absenden
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-xs text-white/50 leading-relaxed">
          Unverbindlich · Wir antworten werktags innerhalb von 24 h ·{" "}
          <a href="/datenschutz" className="underline hover:text-white">
            Datenschutz
          </a>
        </p>
      </div>
    </form>
  );
}
