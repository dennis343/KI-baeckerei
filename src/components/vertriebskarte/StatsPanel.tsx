"use client";

import type { CaseStatus, SalesCase } from "@/lib/sales-cases";
import { formatEuro, STATUS_COLORS, STATUS_LABELS } from "@/lib/sales-map-utils";

export function StatsPanel({
  cases,
  totalSumme,
  totalCases,
}: {
  cases: SalesCase[];
  totalSumme: number;
  totalCases: number;
}) {
  const statusCounts = cases.reduce(
    (acc, c) => {
      acc[c.status] = (acc[c.status] || 0) + 1;
      return acc;
    },
    {} as Record<CaseStatus, number>,
  );

  return (
    <div className="rounded-xl border border-line bg-white/90 p-3 shadow-card backdrop-blur-sm">
      <p className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
        Übersicht
      </p>
      <p className="mt-1 text-lg font-semibold text-ink-900">
        {formatEuro(totalSumme)}
      </p>
      <p className="text-xs text-ink-500">{totalCases} Fälle</p>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
        {(Object.entries(statusCounts) as [CaseStatus, number][]).map(
          ([status, count]) => (
            <span key={status} className="flex items-center gap-1 text-[11px] text-ink-600">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: STATUS_COLORS[status] }}
              />
              {STATUS_LABELS[status]} ({count})
            </span>
          ),
        )}
      </div>
    </div>
  );
}
