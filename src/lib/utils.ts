import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` — merges Tailwind classes idempotently.
 * Prevents classname collisions like "px-2 px-4" → "px-4".
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wissensreich-academy.vercel.app";

export const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "";
export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP ?? "";
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "concierge@wissensreich.academy";

/**
 * Build a wa.me URL from raw digits and an optional message.
 * Safe against empty numbers (returns mailto fallback).
 */
export function getWhatsAppUrl(message?: string): string {
  const digits = WHATSAPP.replace(/\D/g, "");
  if (!digits) return `mailto:${CONTACT_EMAIL}`;
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}

/**
 * Typed feature-flag helpers — avoids `process.env` sprinkled everywhere.
 */
export const FEATURES = {
  leadWebhook: Boolean(process.env.LEAD_WEBHOOK_URL),
  gtm: Boolean(process.env.NEXT_PUBLIC_GTM_ID),
  metaPixel: Boolean(process.env.NEXT_PUBLIC_META_PIXEL_ID),
  whatsapp: Boolean(process.env.NEXT_PUBLIC_WHATSAPP),
  supabase: Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY,
  ),
} as const;
