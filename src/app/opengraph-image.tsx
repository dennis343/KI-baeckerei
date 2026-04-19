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
            "linear-gradient(135deg, #FBF7F2 0%, #FFFFFF 55%, #F1EDE7 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#3B2B1F",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#3B2B1F",
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            W
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.1,
            }}
          >
            <span style={{ fontSize: 24, fontWeight: 600 }}>
              {BRAND.name}
            </span>
            <span style={{ fontSize: 16, color: "#6B5C4F" }}>
              Academy · AZAV-zertifiziert
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#1C1410",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#8B5A2B",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Weiterbildung · Förderung · Begleitung
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 960,
            }}
          >
            {BRAND.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#6B5C4F",
            fontSize: 20,
          }}
        >
          <span>wissensreich.academy</span>
          <span>KOMPASS · AVGS · Qualifizierungschancengesetz · INQA</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
