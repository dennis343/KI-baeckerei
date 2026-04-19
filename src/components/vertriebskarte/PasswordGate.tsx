"use client";

import { useState, useEffect, type FormEvent } from "react";

const AUTH_API = "/api/vertriebskarte-auth";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(AUTH_API)
      .then((r) => r.json())
      .then((data) => {
        if (data.authenticated) setAuthed(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-ink-500">Laden…</p>
      </div>
    );
  }

  if (authed) return <>{children}</>;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(AUTH_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: input }),
      });
      if (res.ok) {
        setAuthed(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-line bg-white p-8 shadow-card"
      >
        <h1 className="mb-2 font-display text-display-sm text-ink-900">
          Vertriebskarte
        </h1>
        <p className="mb-6 text-sm text-ink-500">
          Bitte geben Sie das Passwort ein, um die Karte anzuzeigen.
        </p>
        <label htmlFor="pw" className="mb-1 block text-sm font-medium text-ink-700">
          Passwort
        </label>
        <input
          id="pw"
          type="password"
          autoFocus
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          className={`mb-4 block w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 ${
            error ? "border-red-400 bg-red-50" : "border-line bg-cream-50"
          }`}
        />
        {error && (
          <p className="mb-3 text-xs text-red-600">
            Falsches Passwort. Bitte versuchen Sie es erneut.
          </p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50"
        >
          {submitting ? "Prüfe…" : "Zugang"}
        </button>
      </form>
    </div>
  );
}
