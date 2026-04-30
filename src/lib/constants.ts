/**
 * KI Bäckerei — zentrale Brand- und Navigations-Konstanten.
 *
 * Anbieterin der Leistungen ist die ESKALATOR AG (Schweiz). Pflichtangaben
 * für Impressum/Datenschutz stehen unter `BRAND.legal`.
 */

export const BRAND = {
  name: "KI Bäckerei",
  fullName: "KI Bäckerei",
  tagline:
    "Digitale Umsetzungsmaschine — Steuern Sie Ihr Business aus der Hosentasche.",
  description:
    "KI Bäckerei: Wir bauen mit Ihnen Ihre digitale Umsetzungsmaschine — damit aus Ideen, Sprachnachrichten und Anforderungen sichtbare Ergebnisse werden, schneller, eigenständiger und mit deutlich weniger Abhängigkeit von Agenturen und Dienstleistern.",
  legal: {
    operator: "KI Bäckerei ist ein Angebot der",
    company: "Eskalator AG",
    legalName: "ESKALATOR AG",
    legalForm: "Aktiengesellschaft",
    foundedSince: "2015",
    address: "Churerstrasse 135",
    postalCode: "CH-8808",
    city: "CH-8808 Pfäffikon SZ",
    locality: "Pfäffikon SZ",
    country: "Schweiz",
    countryCode: "CH",
    phone: "+49 208 780 125 78",
    phoneCh: "+41 55 560 20 72",
    email: "office@eskalator.ag",
    register: "Handelsregister des Kantons Schwyz",
    uid: "CHE-399.487.701",
    /** taxId bleibt für Backwards-Compatibility — entspricht der UID. */
    taxId: "CHE-399.487.701",
    managingDirectors: ["Antonia Brücker"],
    managingDirector: "Antonia Brücker (Verwaltungsrätin)",
    /** Korrespondenz- und Service-Adresse Deutschland (kein Zustellungssitz der AG). */
    serviceAddress: {
      label: "Fördermittel Concierge-Service",
      careOf: "c/o WissensReich Academy GmbH",
      street: "Nachbarsweg 25",
      city: "45481 Mülheim an der Ruhr",
      country: "Deutschland",
      note: "Nicht Zustellungssitz der AG.",
    },
  },
} as const;

/* ------------------------------------------------------------------
 * NAVIGATION — minimal, 4 Punkte
 * ------------------------------------------------------------------ */

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
  { label: "Startseite", href: "/" },
  { label: "Anfrage stellen", href: "/#bewerbung" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
