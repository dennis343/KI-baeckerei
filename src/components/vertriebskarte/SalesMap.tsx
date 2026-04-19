"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { PasswordGate } from "./PasswordGate";
import { StatsPanel } from "./StatsPanel";
import { PdfExportButton } from "./PdfExportButton";
import { MAP_VERSION } from "@/lib/sales-map-utils";
import type { SalesCasesPayload } from "@/lib/sales-cases";

const DATA_API = "/api/vertriebskarte-data";

const MapView = dynamic(() => import("./MapView").then((m) => m.MapView), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center rounded-xl bg-cream-100">
      <p className="text-ink-500">Karte wird geladen…</p>
    </div>
  ),
});

function MapSurface() {
  const [showLabels, setShowLabels] = useState(true);
  const [data, setData] = useState<SalesCasesPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(DATA_API, { credentials: "same-origin", cache: "no-store" })
      .then(async (r) => {
        if (!r.ok) throw new Error(`status ${r.status}`);
        return (await r.json()) as SalesCasesPayload;
      })
      .then((payload) => {
        if (!cancelled) setData(payload);
      })
      .catch(() => {
        if (!cancelled) setError("Daten konnten nicht geladen werden.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative flex h-[calc(100vh-80px)] flex-col gap-3 p-3 md:p-4">
      {/* Controls top bar */}
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="mr-auto font-display text-display-sm text-ink-900">
          Vertriebskarte
        </h1>
        <button
          type="button"
          onClick={() => setShowLabels((v) => !v)}
          className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-medium text-ink-700 shadow-soft transition-colors hover:bg-cream-50"
        >
          Labels {showLabels ? "ausblenden" : "einblenden"}
        </button>
        <PdfExportButton mapRef={mapRef} />
      </div>

      {/* Map area */}
      <div
        ref={mapRef}
        className="relative flex-1 overflow-hidden rounded-xl border border-line shadow-card"
      >
        {data ? (
          <>
            <MapView cases={data.cases} showLabels={showLabels} />

            {/* Stats overlay */}
            <div className="absolute bottom-3 right-3 z-[1000] max-w-[220px] max-md:left-3 max-md:right-3 max-md:max-w-none">
              <StatsPanel
                cases={data.cases}
                totalSumme={data.totalSumme}
                totalCases={data.totalCases}
              />
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center rounded-xl bg-cream-100">
            <p className="text-sm text-ink-500">
              {error ?? "Daten werden geladen…"}
            </p>
          </div>
        )}
      </div>

      {/* Versionszähler */}
      <p className="text-right text-[11px] font-mono text-ink-400">
        Revision {MAP_VERSION}
      </p>
    </div>
  );
}

export function SalesMap() {
  return (
    <PasswordGate>
      <MapSurface />
    </PasswordGate>
  );
}
