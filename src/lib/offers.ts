/**
 * Angebotsarchitektur — Digitale Umsetzungsmaschine.
 *
 * Strukturierte Daten für die Pricing-Sections und das Bewerbungsformular.
 * Single source of truth, damit sich Pakete einmalig ändern lassen.
 */

export type OfferTier = "entry" | "implementation" | "subscription";

export type OfferFeature = {
  label: string;
  value: string;
};

export type Offer = {
  id: string;
  tier: OfferTier;
  badge?: string;
  name: string;
  shortName: string;
  tagline: string;
  shortTagline?: string;
  plusLogic?: string;
  priceLabel: string;
  priceNumeric: number;
  priceSuffix?: string;
  funding?: string;
  forWho: string;
  bullets: string[];
  features?: OfferFeature[];
  bonusFeatures?: OfferFeature[];
  highlight?: boolean;
  cta: string;
};

export const ENTRY_OFFERS: Offer[] = [
  {
    id: "anamnese",
    tier: "entry",
    badge: "Einstieg · Premium",
    name: "Fundierte Unternehmensanamnese",
    shortName: "Unternehmensanamnese",
    tagline: "Klarheit über Engpässe, Prioritäten und Handlungsfelder.",
    priceLabel: "3.500 € netto",
    priceNumeric: 3500,
    funding: "ggf. 50–80 % förderfähig",
    forWho: "Für Unternehmen mit Förderzugang oder Anspruch auf Tiefenanalyse.",
    bullets: [
      "Eigenständige Beratungsleistung — keine Verpflichtung zur Umsetzung",
      "Tiefenanalyse Ihrer aktuellen Engpässe und Umsetzungslücken",
      "Klare Priorisierung digitaler Handlungsfelder",
      "Schriftliche Auswertung mit konkreten nächsten Schritten",
      "Anschließende Umsetzung mit uns möglich, aber freiwillig",
    ],
    cta: "Anamnese anfragen",
  },
  {
    id: "einstiegsanalyse",
    tier: "entry",
    badge: "Einstieg · Schlank",
    name: "Kompakte Einstiegsanalyse",
    shortName: "Einstiegsanalyse",
    tagline: "Schlanker Einstieg in die Programmwelt — ohne Förderpfad.",
    priceLabel: "990 € netto",
    priceNumeric: 990,
    forWho: "Für Selbstständige, Fachkräfte und Unternehmen ohne Förderzugang.",
    bullets: [
      "Reduzierter Umfang gegenüber der fundierten Anamnese",
      "Mehr Eigenleistung beim Vorbereiten der Antworten",
      "Klare Standortbestimmung und Empfehlung für den Umsetzungsweg",
      "Direkter, kommerzieller Einstieg in die Programmwelt",
    ],
    cta: "Einstieg anfragen",
  },
];

export const IMPLEMENTATION_OFFERS: Offer[] = [
  {
    id: "kompakt",
    tier: "implementation",
    badge: "Für Selbststeuerer",
    name: "Umsetzungsfabrik Kompakt",
    shortName: "Kompakt",
    tagline:
      "Sie profitieren von Bauplan, Grundjustierung und erster praktischer Umsetzung.",
    shortTagline:
      "Sie profitieren von Bauplan, Grundjustierung und erster Einrichtung.",
    priceLabel: "1.990 € netto",
    priceNumeric: 1990,
    forWho: "Für alle, die selbst weiterbauen wollen — schlank und fokussiert.",
    features: [
      { label: "Dauer & Modus", value: "3 Wochen · 4 Live-Termine · digitale Kleingruppe" },
      { label: "Impuls & Feedback", value: "3 × 60 Minuten Impuls- und Feedbackcalls" },
      { label: "Umsetzung", value: "1 × 90 Minuten Umsetzungscall" },
      { label: "Systemtiefe", value: "Grundjustierung Ihrer digitalen Arbeitslogik" },
      { label: "Praxisbezug", value: "Erste praktische Umsetzung an einem konkreten Vorhaben" },
      { label: "Ergebnis", value: "Fahrplan für eigenständiges Weiterarbeiten" },
      { label: "Begleitgrad", value: "Sie setzen danach überwiegend selbstständig weiter um" },
    ],
    bullets: [
      "3 Wochen · 4 Live-Termine · digitale Kleingruppe",
      "3 × 60 min Impuls- und Feedbackcalls",
      "1 × 90 min Umsetzungscall",
      "Grundjustierung Ihrer digitalen Arbeitslogik",
      "Erste praktische Umsetzung an einem konkreten Vorhaben",
      "Fahrplan für eigenständiges Weiterarbeiten",
    ],
    cta: "Kompakt wählen",
  },
  {
    id: "withyou",
    tier: "implementation",
    badge: "Empfohlen · Mit-Umsetzer",
    name: "Digitale Umsetzungsmaschine With You",
    shortName: "With You",
    tagline:
      "Wir bauen gemeinsam Ihre Maschine und starten diese an echten Anwendungsfällen.",
    shortTagline:
      "Wir bauen gemeinsam Ihre Maschine und starten sie an echten Anwendungsfällen.",
    plusLogic: "Alles aus Kompakt — plus volle Umsetzungsbegleitung.",
    priceLabel: "8.500 € netto",
    priceNumeric: 8500,
    forWho: "Für aktive Mit-Umsetzer, die wirklich tief einsteigen wollen.",
    highlight: true,
    features: [
      { label: "Dauer & Modus", value: "4 Wochen · 8 Live-Termine · digitale Kleingruppe" },
      { label: "Impuls & Feedback", value: "4 × 60 Minuten Impuls- und Feedbackcalls" },
      { label: "Umsetzung", value: "4 × 90 Minuten Umsetzungscalls" },
      {
        label: "Systemtiefe",
        value:
          "Alles aus Kompakt plus volle Musterreise vom Use Case bis zum Grundsystem",
      },
      {
        label: "Praxisbezug",
        value: "Intensive Arbeit an echten Anforderungen aus Ihrem Alltag",
      },
      { label: "Ergebnis", value: "Benutzbares Grundsystem am Ende des Programms" },
      {
        label: "Begleitgrad",
        value:
          "Gemeinsame Umsetzung mit deutlich mehr Führung, Feedback und Transfer",
      },
    ],
    bonusFeatures: [
      {
        label: "Plus",
        value: "Stärkere Justierung Ihrer digitalen Umsetzungsmaschine",
      },
    ],
    bullets: [
      "4 Wochen · 8 Live-Termine · digitale Kleingruppe",
      "4 × 60 min Impuls- und Feedbackcalls",
      "4 × 90 min Umsetzungscalls",
      "Volle Musterreise vom Use Case bis zum Grundsystem",
      "Intensive Arbeit an echten Anforderungen aus Ihrem Alltag",
      "Gemeinsamer Aufbau Ihrer digitalen Umsetzungsmaschine",
      "Benutzbares Grundsystem am Ende des Programms",
    ],
    cta: "With You wählen",
  },
  {
    id: "donefor-you-lite",
    tier: "implementation",
    badge: "Premium · Concierge",
    name: "Done for You Lite",
    shortName: "Done for You Lite",
    tagline:
      "Sie erhalten eine benutzbare Maschine, die wir für Sie einrichten und auf Ihr Unternehmen individualisieren.",
    shortTagline:
      "Sie erhalten eine benutzbare Maschine, die wir einrichten und auf Ihr Unternehmen individualisieren.",
    plusLogic:
      "Alles aus With You — plus Einrichtung, Team-Schulung und 2 Monate Begleitung.",
    priceLabel: "24.900 € netto",
    priceNumeric: 24900,
    forWho:
      "Für Unternehmen, die maximale Entlastung und ein benutzbares Startsystem wollen.",
    features: [
      {
        label: "Dauer & Modus",
        value: "Alles aus With You plus 2 exklusive Team-Schulungswochen",
      },
      { label: "Impuls & Feedback", value: "Voller Umfang aus With You enthalten" },
      {
        label: "Umsetzung",
        value:
          "Alle Umsetzungscalls aus With You plus zusätzliche 1:1-Feinschliff-Phase",
      },
      {
        label: "Systemtiefe",
        value: "Einrichtung notwendiger Zugänge und Verbindung relevanter Accounts",
      },
      {
        label: "Praxisbezug",
        value: "Anlage erster Projektdaten und Prompt-Strukturen",
      },
      { label: "Ergebnis", value: "Übergabe eines benutzbaren Startsystems" },
      {
        label: "Begleitgrad",
        value: "2 Monate Premium-Umsetzungsbegleitung inklusive",
      },
    ],
    bonusFeatures: [
      {
        label: "Team-Fokus",
        value: "Exklusive 1:1-Team-Schulung am echten System",
      },
      {
        label: "Vertraulichkeit",
        value:
          "Arbeit an realen Daten, Prozessen und Marktvorteilen ohne Gruppensetting",
      },
    ],
    bullets: [
      "Voller Umfang aus „With You“",
      "Einrichtung notwendiger Zugänge & Verbindung relevanter Accounts",
      "Erstjustierung der digitalen Arbeitslogik",
      "Anlage erster Projektdaten und Prompt-Strukturen",
      "Ausrichtung auf Ihren konkreten Use Case",
      "Übergabe eines benutzbaren Startsystems",
      "2 Monate Premium-Umsetzungsbegleitung inklusive (1 × 90 min 1:1 pro Monat)",
      "2 exklusive 1:1-Team-Schulungswochen am echten System",
      "Vertrauliche Arbeit an realen Daten, Prozessen und Marktvorteilen",
    ],
    cta: "Done for You Lite anfragen",
  },
];

export const SUBSCRIPTION_OFFER: Offer = {
  id: "begleitung",
  tier: "subscription",
  badge: "Anschluss",
  name: "Premium-Umsetzungsbegleitung",
  shortName: "Premium-Umsetzungsbegleitung",
  tagline: "Damit die Maschine im Alltag scharf bleibt.",
  priceLabel: "999 € netto",
  priceNumeric: 999,
  priceSuffix: "/ Monat",
  forWho:
    "Für alle Absolventen, die nach dem Programm dranbleiben wollen — monatlich kündbar.",
  bullets: [
    "1 × 90 min 1:1 Live-Umsetzungs-Call pro Monat",
    "Arbeit an konkreten Problemen, Prioritäten, Technik und Marktvorteilen",
    "Review realer Ergebnisse aus Ihrem Alltag",
    "Community-Zugang & Messenger-Gruppe",
    "Monatlicher Gruppen-Call zu digitalem Mindset und Neuigkeiten",
  ],
  cta: "Begleitung anfragen",
};

export const ALL_OFFERS: Offer[] = [
  ...ENTRY_OFFERS,
  ...IMPLEMENTATION_OFFERS,
  SUBSCRIPTION_OFFER,
];

export type CostBenchmark = {
  title: string;
  range: string;
  recurring?: string;
};

export const COST_BENCHMARKS: CostBenchmark[] = [
  {
    title: "Professionelle Homepage / Relaunch",
    range: "ca. 12.500 € – 50.000 €+",
    recurring: "300 € – 1.500 € / Monat für Pflege & Wartung",
  },
  {
    title: "Conversion-Landingpage / Angebotsseite",
    range: "ca. 3.500 € – 15.000 €",
    recurring: "Laufende Optimierung & Testing oft zusätzlich",
  },
  {
    title: "Corporate Identity / Corporate Design",
    range: "ca. 5.000 € – 60.000 €",
    recurring: "Weitere Assets & Templates zusätzlich",
  },
  {
    title: "Texte, Übersetzungen, Angebotskommunikation",
    range: "ca. 1.500 € – 10.000 €+ pro Paket",
    recurring: "Laufende Content-Kosten möglich",
  },
  {
    title: "Kleine Web-App / internes Software-Tool",
    range: "ca. 25.000 € – 80.000 €",
    recurring: "Wartung, Hosting, Beratung zusätzlich",
  },
  {
    title: "Automatisierungen auf Fremdplattformen",
    range: "ca. 10.000 € – 40.000 €",
    recurring: "200 € – 1.500 € / Monat für Pflege & Anpassung",
  },
  {
    title: "CRM-Setup / Vertriebsprozess-Digitalisierung",
    range: "ca. 8.000 € – 50.000 €",
    recurring: "Laufende Betreuung & Schulung zusätzlich",
  },
  {
    title: "Steuerungsboards / Auftrags- & Prozesssysteme",
    range: "ca. 20.000 € – 150.000 €+",
    recurring: "500 € – 2.500 € / Monat",
  },
  {
    title: "Umfassende Applikation / Plattform / Kundenportal",
    range: "ca. 80.000 € – 250.000 €+",
    recurring: "Laufende technische Betreuung & Weiterentwicklung",
  },
];
