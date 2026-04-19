"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/schemas/lead-schema";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

type FormState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const topicOptions: ReadonlyArray<{ value: LeadInput["topic"]; label: string }> = [
  { value: "solopreneur", label: "Solopreneur — KOMPASS-Förderung" },
  { value: "unternehmen", label: "Unternehmen — Qualifizierung" },
  { value: "avgs", label: "Umschulung zum Forderungsmanager/Inkasso" },
  { value: "prophylaxe-warteliste", label: "Warteliste: Prophylaxe Mentoring" },
  { value: "concierge", label: "Concierge-Service" },
  { value: "sonstiges", label: "Etwas anderes" },
];

export function ConsultationForm() {
  const [state, setState] = React.useState<FormState>({ kind: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "solopreneur",
      message: "",
      website: "",
      // consent is intentionally undefined so the checkbox starts unchecked
    } as Partial<LeadInput> as LeadInput,
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        trackEvent("lead_failed", { topic: values.topic });
        setState({
          kind: "error",
          message:
            "Wir konnten Ihre Anfrage gerade nicht entgegennehmen. Bitte versuchen Sie es in einem Moment erneut.",
        });
        return;
      }
      trackEvent("lead_submitted", { topic: values.topic });
      reset();
      setState({ kind: "success" });
    } catch {
      trackEvent("lead_failed", { topic: values.topic, reason: "network" });
      setState({
        kind: "error",
        message:
          "Es gab ein Verbindungsproblem. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      });
    }
  });

  if (state.kind === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-brand-100 bg-brand-50 p-6 text-ink-900"
      >
        <h3 className="font-display text-display-sm text-ink-900">
          Vielen Dank — wir melden uns.
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
          Ihre Anfrage ist bei uns eingegangen. Wir prüfen sie sorgfältig und
          melden uns in der Regel innerhalb eines Werktags mit einem klaren
          nächsten Schritt.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 " +
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 focus-visible:border-brand-500 " +
    "transition-colors duration-150";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-describedby="form-note"
    >
      <p id="form-note" className="text-sm text-ink-500">
        Wir antworten in der Regel innerhalb eines Werktags. Ihre Angaben
        verwenden wir ausschließlich zur Beantwortung Ihrer Anfrage.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-ink-900"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClass, errors.name && "border-brand-600")}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-brand-700">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink-900"
          >
            E-Mail <span className="text-brand-700" aria-hidden="true">*</span>
            <span className="sr-only">(Pflichtfeld)</span>
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-required="true"
            className={cn(fieldClass, errors.email && "border-brand-600")}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-brand-700">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="topic"
          className="mb-1.5 block text-sm font-medium text-ink-900"
        >
          Thema
        </label>
        <select
          id="topic"
          aria-invalid={errors.topic ? "true" : "false"}
          className={cn(fieldClass, errors.topic && "border-brand-600")}
          {...register("topic")}
        >
          {topicOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink-900"
        >
          Nachricht{" "}
          <span className="font-normal text-ink-500">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "resize-y", errors.message && "border-brand-600")}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-brand-700">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot — visually hidden, not read by screen readers */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          aria-invalid={errors.consent ? "true" : "false"}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 h-5 w-5 flex-none rounded border-line text-brand-600 focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-ink-700">
          Ich willige ein, dass WissensReich Academy meine Angaben zur
          Bearbeitung meiner Anfrage verwendet. Details in der{" "}
          <a
            href="/datenschutz"
            className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
          >
            Datenschutzerklärung
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="text-sm text-brand-700">
          {errors.consent.message}
        </p>
      )}

      {state.kind === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-brand-100 bg-brand-50 p-4 text-sm text-ink-900"
        >
          {state.message}
        </div>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button
          variant="primary"
          size="lg"
          showArrow
          disabled={state.kind === "submitting"}
          type="submit"
        >
          {state.kind === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
        </Button>
      </div>
    </form>
  );
}
