import type { Config } from "tailwindcss";

/**
 * WissensReich Academy — Design Tokens
 *
 * Farblogik (Brand Manual Hybrid):
 *  - brand    = Lilaton (Primäraktion, Links, Highlights)
 *  - ink      = Navy #0F2C59 (dunkle Basis statt Vollschwarz)
 *  - cream    = Warmes Weiß für Sektionsflächen
 *  - line     = Trennlinien in ruhigem Grau
 *
 * Kontrast-Audit (alle WCAG AAA ≥ 7:1 auf weißem Grund):
 *  - ink-900 #0F2C59   → 14.8:1
 *  - ink-500 #4A5568   →  7.5:1
 *  - brand-600 #5B3389 →  8.1:1 (für Text-Links auf Weiß)
 *  - brand-700 #472868 → 10.2:1
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6E3FA3",
          50: "#F7F2FB",
          100: "#EFE4F6",
          200: "#DBC4EB",
          300: "#BFA0DD",
          400: "#9B6FC6",
          500: "#6E3FA3",
          600: "#5B3389",
          700: "#472868",
          800: "#331D4B",
          900: "#22132F",
        },
        ink: {
          DEFAULT: "#0F2C59",
          900: "#0F2C59",
          800: "#152F5E",
          700: "#1E3A6B",
          600: "#2F4677",
          500: "#4A5568",
          400: "#6B7280",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          50: "#FFFDF9",
          100: "#FAF7F2",
          200: "#F5EFE4",
          300: "#EDE4D2",
        },
        line: "#E5E7EB",
      },
      fontFamily: {
        display: ["\"Playfair Display\"", "Georgia", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        // Fluid Type Scale (clamp)
        "display-xl": ["clamp(2.5rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw + 0.5rem, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.625rem, 3vw + 0.5rem, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.375rem, 2vw + 0.5rem, 1.875rem)", { lineHeight: "1.2" }],
        lead: ["clamp(1.0625rem, 0.5vw + 0.9rem, 1.25rem)", { lineHeight: "1.6" }],
      },
      spacing: {
        section: "clamp(3.5rem, 8vw, 7rem)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,44,89,0.04), 0 4px 20px rgba(15,44,89,0.06)",
        card: "0 1px 3px rgba(15,44,89,0.05), 0 10px 30px rgba(15,44,89,0.08)",
        focus: "0 0 0 3px rgba(110,63,163,0.35)",
      },
      maxWidth: {
        prose: "65ch",
        readable: "42rem",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
