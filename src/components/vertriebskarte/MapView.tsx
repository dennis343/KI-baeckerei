"use client";

import "leaflet/dist/leaflet.css";

import { useMemo } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import type { SalesCase } from "@/lib/sales-cases";
import { STATUS_COLORS, STATUS_LABELS, markerRadius, formatEuro } from "@/lib/sales-map-utils";

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

function locationId(caseNum: number, locIndex: number, totalLocs: number): string {
  if (totalLocs === 1) return `${caseNum}`;
  return `${caseNum}${LETTERS[locIndex]}`;
}

// Micro-jitter for markers that share exactly the same coordinates so they
// don't visually overlap. Offsets are deterministic and tiny (~60 m radius).
const JITTER_RADIUS_DEG = 0.0008;

function computeAdjustedPositions(
  cases: SalesCase[],
): Map<string, [number, number]> {
  const groups = new Map<
    string,
    Array<{ caseIndex: number; locIndex: number; lat: number; lng: number }>
  >();

  cases.forEach((c, caseIndex) => {
    c.locations.forEach((loc, locIndex) => {
      const key = `${loc.lat.toFixed(5)},${loc.lng.toFixed(5)}`;
      const bucket = groups.get(key) ?? [];
      bucket.push({ caseIndex, locIndex, lat: loc.lat, lng: loc.lng });
      groups.set(key, bucket);
    });
  });

  const adjusted = new Map<string, [number, number]>();
  groups.forEach((entries) => {
    if (entries.length < 2) return;
    const n = entries.length;
    entries.forEach((entry, i) => {
      const angle = (i / n) * 2 * Math.PI;
      const lat = entry.lat + JITTER_RADIUS_DEG * Math.sin(angle);
      const lng = entry.lng + JITTER_RADIUS_DEG * Math.cos(angle);
      adjusted.set(`${entry.caseIndex}-${entry.locIndex}`, [lat, lng]);
    });
  });

  return adjusted;
}

function googleMapsRouteUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

function createIcon(
  color: string,
  radius: number,
  markerLabel: string,
  labelText?: string,
): L.DivIcon {
  const size = radius * 2;
  const fontSize = markerLabel.length > 2 ? 9 : markerLabel.length > 1 ? 10 : 12;

  const labelHtml = labelText
    ? `<span style="
        position:absolute;
        left:50%;
        bottom:${size + 3}px;
        transform:translateX(-50%);
        text-align:center;
        line-height:1.25;
        font-size:10px;
        font-weight:700;
        color:#1a1a1a;
        background:rgba(255,255,255,0.88);
        padding:1px 5px;
        border-radius:4px;
        border:1px solid ${color};
        pointer-events:none;
        white-space:nowrap;
      ">${labelText}</span>`
    : "";

  return L.divIcon({
    className: "",
    iconSize: [size, size],
    iconAnchor: [radius, radius],
    popupAnchor: [0, -radius],
    html: `
      <div style="position:relative;width:${size}px;height:${size}px;">
        <div style="
          width:${size}px;
          height:${size}px;
          border-radius:50%;
          background:${color};
          opacity:0.9;
          border:2px solid white;
          box-shadow:0 2px 6px rgba(0,0,0,0.35);
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size:${fontSize}px;
          font-weight:700;
          line-height:1;
          text-shadow:0 1px 2px rgba(0,0,0,0.4);
        ">${markerLabel}</div>
        ${labelHtml}
      </div>
    `,
  });
}

function CasePopup({
  c,
  address,
  caseNum,
  locIndex,
}: {
  c: SalesCase;
  address: string;
  caseNum: number;
  locIndex: number;
}) {
  const id = locationId(caseNum, locIndex, c.locations.length);

  return (
    <div style={{ minWidth: 220, padding: 4, fontFamily: "Inter, system-ui, sans-serif" }}>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111" }}>
        <span style={{
          display: "inline-block",
          background: STATUS_COLORS[c.status],
          color: "#fff",
          borderRadius: "50%",
          width: 22,
          height: 22,
          textAlign: "center",
          lineHeight: "22px",
          fontSize: 11,
          fontWeight: 700,
          marginRight: 6,
          verticalAlign: "middle",
        }}>
          {id}
        </span>
        {c.kuerzel}
      </p>

      {c.summe > 0 && (
        <p style={{ margin: "4px 0 0", fontSize: 14, fontWeight: 600, color: "#333" }}>
          {formatEuro(c.summe)}
        </p>
      )}

      <p style={{ margin: "6px 0 0" }}>
        <span style={{
          display: "inline-block",
          borderRadius: 9999,
          padding: "2px 10px",
          fontSize: 11,
          fontWeight: 600,
          color: "#fff",
          background: STATUS_COLORS[c.status],
        }}>
          {STATUS_LABELS[c.status]}
        </span>
      </p>

      <p style={{ margin: "6px 0 0", fontSize: 12, color: "#555" }}>{address}</p>

      {c.bemerkung && c.bemerkung !== c.status && (
        <p style={{ margin: "4px 0 0", fontSize: 12, fontStyle: "italic", color: "#888" }}>
          {c.bemerkung}
        </p>
      )}

      {/* Google Maps button - inline styles to prevent Leaflet CSS override */}
      <a
        href={googleMapsRouteUrl(address)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          background: "#1d4ed8",
          color: "#ffffff",
          fontWeight: 600,
          fontSize: 13,
          padding: "8px 12px",
          borderRadius: 8,
          textDecoration: "none",
          marginTop: 8,
          width: "100%",
          textAlign: "center",
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        In Google Maps navigieren
      </a>

      {c.locations.length > 1 && (
        <div style={{ marginTop: 8, borderTop: "1px solid #e5e7eb", paddingTop: 6 }}>
          <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: "#888" }}>
            Alle Standorte dieses Falls:
          </p>
          <ul style={{ margin: "4px 0 0", padding: 0, listStyle: "none" }}>
            {c.locations.map((loc, li) => {
              const subId = locationId(caseNum, li, c.locations.length);
              const isCurrent = loc.address === address;
              return (
                <li key={loc.address} style={{ marginTop: 3, fontSize: 11, color: "#555" }}>
                  <strong style={{ color: STATUS_COLORS[c.status], marginRight: 3 }}>{subId}</strong>
                  {isCurrent ? (
                    <strong>{loc.address}</strong>
                  ) : (
                    <a
                      href={googleMapsRouteUrl(loc.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1d4ed8", textDecoration: "underline", fontWeight: 500 }}
                    >
                      {loc.address}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export function MapView({
  cases,
  showLabels,
}: {
  cases: SalesCase[];
  showLabels: boolean;
}) {
  const adjustedPositions = useMemo(() => computeAdjustedPositions(cases), [cases]);

  const positionFor = (
    caseIndex: number,
    locIndex: number,
    loc: { lat: number; lng: number },
  ): [number, number] =>
    adjustedPositions.get(`${caseIndex}-${locIndex}`) ?? [loc.lat, loc.lng];

  return (
    <>
      {/* Grayscale tile layer for better marker contrast */}
      <style>{`.leaflet-tile-pane { filter: grayscale(100%) contrast(1.1); }`}</style>

      <MapContainer
        center={[51.1, 10.4]}
        zoom={6}
        minZoom={5}
        maxZoom={18}
        className="h-full w-full rounded-xl"
        style={{ background: "#f0f0f0" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende'
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
        />

        {cases.map((c, caseIndex) => {
          const caseNum = caseIndex + 1;
          const color = STATUS_COLORS[c.status];
          const radius = markerRadius(c.summe);
          const tk = c.summe > 0 ? `${Math.round(c.summe / 1000)}t€` : "";

          return (
            <span key={c.kuerzel}>
              {c.locations.length > 1 && (
                <Polyline
                  positions={c.locations.map((l, li) => positionFor(caseIndex, li, l))}
                  pathOptions={{
                    color,
                    weight: 2,
                    dashArray: "8 6",
                    opacity: 0.6,
                  }}
                />
              )}

              {c.locations.map((loc, locIndex) => {
                const id = locationId(caseNum, locIndex, c.locations.length);
                const labelText = showLabels
                  ? tk
                    ? `${c.kuerzel}<br/>${tk}`
                    : c.kuerzel
                  : undefined;

                return (
                  <Marker
                    key={`${c.kuerzel}-${loc.address}`}
                    position={positionFor(caseIndex, locIndex, loc)}
                    icon={createIcon(color, radius, id, labelText)}
                  >
                    <Popup autoPanPadding={[50, 50] as L.PointExpression} maxWidth={320}>
                      <CasePopup c={c} address={loc.address} caseNum={caseNum} locIndex={locIndex} />
                    </Popup>
                  </Marker>
                );
              })}
            </span>
          );
        })}
      </MapContainer>
    </>
  );
}
