/**
 * KI Bäckerei — zentrale Brand- und Navigations-Konstanten.
 *
 * Die Marke „KI Bäckerei" ist ein Angebot der WissensReich Academy UG
 * (haftungsbeschränkt). Pflichtangaben für Impressum/Datenschutz liegen
 * unter `BRAND.legal` und gehören juristisch zur betreibenden Gesellschaft.
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
    company: "WissensReich Academy UG (haftungsbeschränkt)",
    address: "Weinsbergstraße 190",
    city: "50825 Köln",
    phone: "+49 221 800 06195",
    email: "info@wissensreich.academy",
    register: "HRB 123436 · Amtsgericht Köln (Nord)",
    taxId: "DE456244964",
    managingDirectors: ["Hermann Fürstenau", "Florian Domin"],
    managingDirector: "Hermann Fürstenau & Florian Domin",
    serviceAddress: {
      street: "Nachbarsweg 25",
      city: "45481 Mülheim an der Ruhr",
      country: "Deutschland",
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
