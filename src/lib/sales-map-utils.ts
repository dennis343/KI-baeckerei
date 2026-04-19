import type { CaseStatus } from "./sales-cases";

/**
 * Vertriebskarten-Revisionszähler. Bei jeder veröffentlichten Änderung an
 * Karte, Daten oder Layout um 0.001 erhöhen. Format: x.xxx
 */
export const MAP_VERSION = "0.601";

export const STATUS_COLORS: Record<CaseStatus, string> = {
  ROT: "#EF4444",
  PIRAT: "#8B5CF6",
  "Verfahren aktiv": "#F59E0B",
  Standard: "#3B82F6",
};

export const STATUS_LABELS: Record<CaseStatus, string> = {
  ROT: "Rot",
  PIRAT: "Pirat",
  "Verfahren aktiv": "Verfahren aktiv",
  Standard: "Standard",
};

/**
 * Marker radius scaled by case value using sqrt compression.
 * Range: 8px (3k) to 28px (340k).
 */
export function markerRadius(summe: number): number {
  const MIN_R = 8;
  const MAX_R = 28;
  const MIN_VAL = 0;
  const MAX_VAL = 340000;
  if (summe <= MIN_VAL) return MIN_R;
  const normalized = Math.sqrt(
    Math.min(summe, MAX_VAL) / MAX_VAL,
  );
  return MIN_R + normalized * (MAX_R - MIN_R);
}

export function formatEuro(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
