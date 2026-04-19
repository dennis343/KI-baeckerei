import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PresseItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const PRESSE_LOGOS: ReadonlyArray<PresseItem> = [
  { src: "/presse/handelsblatt.png", alt: "Handelsblatt", width: 200, height: 60 },
  { src: "/presse/spiegel.png", alt: "DER SPIEGEL", width: 200, height: 60 },
  { src: "/presse/funke.png", alt: "FUNKE Mediengruppe", width: 200, height: 60 },
  { src: "/presse/waz.png", alt: "WAZ — Westdeutsche Allgemeine Zeitung", width: 200, height: 60 },
  { src: "/presse/hamburg1.png", alt: "Hamburg 1 Fernsehen", width: 200, height: 60 },
];

type PresseBarProps = {
  title?: string;
  className?: string;
};

export function PresseBar({ title, className }: PresseBarProps) {
  return (
    <div className={cn("w-full", className)}>
      {title && (
        <h3 className="text-center font-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
          {title}
        </h3>
      )}
      <ul
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-8 gap-y-6",
          title && "mt-6",
        )}
      >
        {PRESSE_LOGOS.map((logo) => (
          <li
            key={logo.src}
            className="flex h-12 items-center justify-center"
            title={logo.alt}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-12 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
