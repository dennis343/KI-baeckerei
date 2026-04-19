import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SiegelVariant = "light" | "dark";
type SiegelDensity = "compact" | "comfortable";

type SiegelItem = {
  src: string;
  alt: string;
  label: string;
  note?: string;
  width: number;
  height: number;
};

export const SIEGEL: ReadonlyArray<SiegelItem> = [
  {
    src: "/siegel/certqua-azav-iso9001.webp",
    alt: "CERTQUA — AZAV & ISO 9001 zertifiziert",
    label: "CERTQUA · AZAV & ISO 9001",
    note: "Trägerzulassung nach AZAV, Qualitätsmanagement nach ISO 9001",
    width: 240,
    height: 120,
  },
  {
    src: "/siegel/iso-56002-2019.webp",
    alt: "ISO 56002:2019 — Innovation Management",
    label: "ISO 56002:2019",
    note: "Innovation Management System",
    width: 240,
    height: 120,
  },
  {
    src: "/siegel/bvmw-mitglied.png",
    alt: "BVMW — Der Mittelstand. Mitgliedschaft",
    label: "BVMW-Mitglied",
    note: "Bundesverband mittelständische Wirtschaft",
    width: 240,
    height: 120,
  },
];

type SiegelBarProps = {
  variant?: SiegelVariant;
  density?: SiegelDensity;
  withLabels?: boolean;
  withNotes?: boolean;
  title?: string;
  className?: string;
};

export function SiegelBar({
  variant = "light",
  density = "comfortable",
  withLabels = true,
  withNotes = false,
  title,
  className,
}: SiegelBarProps) {
  const surface =
    variant === "dark"
      ? "border-white/15 bg-white/[0.04]"
      : "border-line bg-white";
  const labelColor = variant === "dark" ? "text-white" : "text-ink-900";
  const noteColor = variant === "dark" ? "text-white/70" : "text-ink-500";
  const titleColor = variant === "dark" ? "text-white/70" : "text-ink-500";

  return (
    <div className={cn("w-full", className)}>
      {title && (
        <h3
          className={cn(
            "text-center font-sans text-sm font-semibold uppercase tracking-[0.14em]",
            titleColor,
          )}
        >
          {title}
        </h3>
      )}
      <ul
        className={cn(
          "grid gap-4 sm:grid-cols-3",
          title && "mt-6",
          density === "compact" ? "" : "sm:gap-6",
        )}
      >
        {SIEGEL.map((s) => (
          <li
            key={s.src}
            className={cn(
              "flex flex-col items-center gap-3 rounded-2xl border p-5 text-center",
              surface,
            )}
          >
            <div className="flex h-20 items-center justify-center">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                className="h-20 w-auto object-contain"
              />
            </div>
            {withLabels && (
              <p className={cn("text-[13px] font-semibold", labelColor)}>
                {s.label}
              </p>
            )}
            {withNotes && s.note && (
              <p className={cn("text-[12px] leading-relaxed", noteColor)}>
                {s.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
