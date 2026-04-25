import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${BRAND.fullName} — ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(900px 600px at 15% 0%, rgba(110,63,163,0.45), transparent 60%), linear-gradient(135deg, #07070C 0%, #0A0A12 100%)",
          color: "#ffffff",
        }}
      >
        {/* Top brand */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: 32,
              fontWeight: 600,
              fontStyle: "italic",
              color: "#BFA0DD",
              letterSpacing: -1,
            }}
          >
            KI
          </span>
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 6,
              color: "#ffffff",
            }}
          >
            Bäckerei
          </span>
        </div>

        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#BFA0DD",
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Eine neue Kategorie · 4-Wochen-Programm
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 0.95,
              letterSpacing: -2,
            }}
          >
            Das Zweitsystem.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 960,
              marginTop: 24,
              lineHeight: 1.3,
            }}
          >
            Die zweite digitale Arbeitskraft, die aus Fachkompetenz in Stunden
            Ergebnisse macht.
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "rgba(255,255,255,0.5)",
            fontSize: 18,
          }}
        >
          <span>ki-baeckerei.de</span>
          <span>Live · Kleingruppe · Co-Build</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
