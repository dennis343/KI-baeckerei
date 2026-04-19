/**
 * WissensReich Academy — Central Content & Data File
 *
 * Single source of truth for Navigation, Pillars, AVGS, Dozenten,
 * Trust-Signals, FAQ, and all Copy Strings.
 *
 * Change content here, not in components.
 */

export const BRAND = {
  name: "WissensReich",
  fullName: "WissensReich Academy",
  tagline:
    "Die Akademie, die Weiterbildung, Förderung und Begleitung zusammenführt.",
  description:
    "WissensReich Academy verbindet hochwertige Weiterbildung mit klaren Förderwegen und einem Concierge-Service, der Bürokratie spürbar leichter macht.",
  legal: {
    company: "WissensReich Academy UG (haftungsbeschränkt)",
    address: "Weinsbergstraße 190",
    city: "50825 Köln",
    phone: "+49 221 800 06195",
    phoneConcierge: "+49 208 377 695 71",
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
 * NAVIGATION
 * Flache 6-Punkt-Navigation + Header-CTA
 * ------------------------------------------------------------------ */

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  children?: ReadonlyArray<NavChild>;
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: ReadonlyArray<NavChild>;
};

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
  { label: "Leistungen", href: "/kursuebersicht", description: "Alle Kurse & Dozenten" },
  {
    label: "Für Wen?",
    href: "/fuer-wen",
    description: "Finden Sie Ihren Weg",
    children: [
      {
        label: "Solopreneure",
        href: "/solopreneure",
        description: "Bis zu 90 % über KOMPASS",
      },
      {
        label: "Unternehmen",
        href: "/unternehmen",
        description: "Qualifizierungschancengesetz & mehr",
        children: [
          {
            label: "Concierge für Unternehmen",
            href: "/concierge-unternehmen",
            description: "Strukturiert & entlastend",
          },
          {
            label: "Prophylaxe-Institut",
            href: "/prophylaxe-institut",
            description: "Branchenspezifische Qualifizierung",
          },
          {
            label: "INQA-Coaching",
            href: "/inqa-coaching",
            description: "Bis zu 80 % geförderte Beratung",
          },
        ],
      },
      {
        label: "Gründer & Wechsler",
        href: "/avgs",
        description: "AVGS · § 45 SGB III",
      },
    ],
  },
  { label: "Concierge-Service", href: "/concierge-service", description: "Unser Herzstück" },
  {
    label: "Über WissensReich",
    href: "/ueber",
    description: "Anspruch, Zulassung, Team",
    children: [
      {
        label: "Unsere Dozenten",
        href: "/kursuebersicht#dozenten",
        description: "Erfahrene Praxis-Köpfe",
      },
      {
        label: "Veröffentlichungen",
        href: "/ueber/veroeffentlichungen",
        description: "Blog, Fach- & Presseartikel",
      },
      {
        label: "Rechtsgrundlagen",
        href: "/ueber/rechtsgrundlagen",
        description: "Gesetze & Richtlinien",
      },
      {
        label: "Botschafter:innen-Programm",
        href: "/botschafter",
        description: "Empfehlen & mitgestalten",
      },
    ],
  },
];

export const PRIMARY_CTA = {
  label: "Passenden Weg finden",
  href: "/#einstiege",
} as const;

export const SECONDARY_CTA = {
  label: "Beratung anfragen",
  href: "/#kontakt",
} as const;

/* ------------------------------------------------------------------
 * HERO
 * ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: "AZAV-zertifiziert · Staatliche Förderung möglich",
  headline: "Die Akademie, die Weiterbildung, Förderung und Begleitung zusammenführt.",
  sub: "Hochwertige Bildung. Staatlich gefördert. Persönlich begleitet. Von der ersten Frage bis zum Abschluss.",
  benefits: [
    "Bis zu 90 % Förderung über KOMPASS & AVGS",
    "AZAV-zertifiziert & RDV §4 konform",
    "Persönlicher Concierge-Service von Tag 1",
    "Erfahrene Dozenten direkt aus der Praxis",
  ],
  trust: [
    "AZAV-zertifiziert & regelmäßig kontrolliert",
    "ISO 9001",
    "CERTQUA",
    "§45 SGB III · RDV §4",
    "ESF / KOMPASS",
    "IHK-Ausbilder-Eignung",
  ],
} as const;

/* ------------------------------------------------------------------
 * 3 EINSTIEGE + CONCIERGE-LAYER
 * ------------------------------------------------------------------ */

export type EinstiegKarte = {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  points: ReadonlyArray<string>;
  cta: { label: string; href: string };
};

export const EINSTIEGE: ReadonlyArray<EinstiegKarte> = [
  {
    id: "solopreneure",
    kicker: "Für Solopreneure",
    title: "Geförderte Weiterbildung mit spürbarem Effekt",
    lead: "Entwicklung, die Zeit respektiert. Förderung, die ankommt. Inhalte, die tragen.",
    points: [
      "Bis zu 90 % Zuschuss über KOMPASS",
      "Kuratierte Dozenten & kompakte Formate",
      "Begleitung durch den gesamten Förderprozess",
    ],
    cta: { label: "Förderung prüfen", href: "/solopreneure" },
  },
  {
    id: "unternehmen",
    kicker: "Für Unternehmen",
    title: "Qualifizierung mit wirtschaftlicher Relevanz",
    lead: "Weiterbildung mit klarem Nutzen, sauberer Prozessführung und weniger Reibung im Ablauf.",
    points: [
      "Maßgeschneiderte Qualifizierungspfade",
      "Entlastung der internen Koordination",
      "Transparente Kosten und klare Wirkung",
    ],
    cta: { label: "Gespräch anfragen", href: "/unternehmen" },
  },
  {
    id: "avgs",
    kicker: "AVGS §45 SGB III",
    title: "Maßnahmen für Beschäftigung und tragfähige Selbstständigkeit",
    lead: "Praxisnahe Qualifizierung mit harter Rechtsgrundlage — Inkasso-Sachkunde oder Businessplan-Werkstatt.",
    points: [
      "AZAV-zertifizierter Träger",
      "2 Coaches parallel im Gruppenteil",
      "1:1 Praxisbegleitung & Prüfungssicherung",
    ],
    cta: { label: "AVGS-Angebote ansehen", href: "/avgs" },
  },
] as const;

export const CONCIERGE_LAYER = {
  text: "In allen drei Wegen begleitet Sie unser Concierge-Service. Struktur, Klarheit, Entlastung — vom ersten Gespräch bis zum sauberen Abschluss.",
  link: { label: "So funktioniert der Concierge", href: "/concierge-service" },
} as const;

/* ------------------------------------------------------------------
 * WARUM ANDERS
 * (ohne Concierge — dieser kommt in eigener Sektion)
 * ------------------------------------------------------------------ */

export const WARUM_ANDERS = {
  eyebrow: "Drei Prinzipien",
  title: "Warum WissensReich anders funktioniert",
  intro:
    "Viele Anbieter verkaufen Kurse. WissensReich baut den Weg dorthin gleich mit. Inhalt, Menschen und System greifen ineinander.",
  blocks: [
    {
      title: "Relevante Themen statt Beschäftigungstherapie",
      body: "Wir setzen auf Inhalte, die im echten Berufs- und Unternehmensalltag Wirkung entfalten und Menschen wirklich voranbringen.",
    },
    {
      title: "Hochwertige Dozenten mit eigener Handschrift",
      body: "Unsere Angebote dürfen eigene DNA haben, weil Menschen nicht alle dasselbe brauchen und gute Bildung nicht beliebig sein darf.",
    },
    {
      title: "Klare Systeme statt Bauchladen",
      body: "Prozesse, Rollen und Zuständigkeiten sind definiert. Wer bei uns startet, weiß in jedem Moment, was als Nächstes passiert.",
    },
  ],
} as const;

/* ------------------------------------------------------------------
 * CONCIERGE DEEP
 * ------------------------------------------------------------------ */

export const CONCIERGE_DEEP = {
  eyebrow: "Unser Herzstück",
  title: "Der Concierge-Service macht den Unterschied",
  body:
    "WissensReich ist nicht nur eine Akademie mit guten Inhalten. Der Concierge-Service ist der Teil, der dafür sorgt, dass gute Vorhaben nicht an Unklarheit, Abstimmung oder Verwaltungsaufwand scheitern. Wir begleiten, strukturieren und entlasten dort, wo Prozesse sonst unnötig schwer werden.",
  benefits: [
    "Weniger Unsicherheit",
    "Weniger Reibung im Ablauf",
    "Klarere Zuständigkeiten",
    "Bessere Vorbereitung",
    "Spürbar weniger Verwaltungsaufwand",
  ],
  ablauf: [
    {
      step: "01",
      title: "Ausgangslage klären",
      body: "Wir erfassen Ziel, Beteiligte, Rahmen­bedingungen und den konkreten Unterstützungs­bedarf.",
    },
    {
      step: "02",
      title: "Unterlagen & Zuständigkeiten ordnen",
      body: "Wir definieren, was benötigt wird, wer wofür zuständig ist und welche Schritte zuerst kommen.",
    },
    {
      step: "03",
      title: "Antrag sauber vorbereiten",
      body: "Wir strukturieren Unterlagen, bereiten die Einreichung vor und sorgen für nachvollziehbare Kommunikation.",
    },
    {
      step: "04",
      title: "Begleiten & koordinieren",
      body: "Wir behalten Fristen im Blick, steuern offene Punkte und führen Rückfragen geordnet weiter.",
    },
    {
      step: "05",
      title: "Umsetzen & abschließen",
      body: "Wir begleiten den Prozess bis zum nachvollziehbaren Abschluss und sichern den sauberen Übergang.",
    },
  ],
  rolesTitle: "Wir übernehmen — im Unternehmen bleibt",
  roles: {
    wir: [
      "Administrative Vorbereitung",
      "Strukturierung der Unterlagen",
      "Prozesssteuerung",
      "Kommunikationsbegleitung",
      "Nachhalten offener Punkte",
    ],
    imUnternehmen: [
      "Fachliche Entscheidung",
      "Auswahl der Maßnahme",
      "Alle Freigaben",
      "Verbindliche Angaben",
      "Unterschriften & finale Einreichung",
    ],
  },
  verantwortungsHinweis:
    "Jede verbindliche Einreichung, Unterschrift und finale Bestätigung liegt beim Auftraggeber — wir bereiten vor, Sie entscheiden und zeichnen.",
  pflichtbox: {
    title: "Strukturierung ja. Vorentscheidung nein.",
    body:
      "Der Concierge-Service ist keine Entscheidungsinstanz, umgeht keine öffentlichen Stellen und greift nicht in die neutrale Einzelfallprüfung ein. Zuständigkeit, Prüfung und Entscheidung bleiben vollständig bei der zuständigen Stelle.",
  },
} as const;

/* ------------------------------------------------------------------
 * ANGEBOTSWELTEN
 * ------------------------------------------------------------------ */

export type Angebot = {
  id: string;
  tag: string;
  title: string;
  lead: string;
  facts: ReadonlyArray<{ label: string; value: string }>;
  href: string;
};

export const ANGEBOTE: ReadonlyArray<Angebot> = [
  {
    id: "solo-kompass",
    tag: "Solopreneure",
    title: "KOMPASS-geförderte Weiterbildung",
    lead: "Bis 90 % Zuschuss für Solo-Selbstständige. Kuratierte Dozenten, klare Formate.",
    facts: [
      { label: "Förderquote", value: "bis 90 %" },
      { label: "Antragsquote", value: "90–95 %*" },
      { label: "Finanzierung", value: "ESF / KOMPASS" },
    ],
    href: "/solopreneure",
  },
  {
    id: "unternehmen-qualifizierung",
    tag: "Unternehmen",
    title: "Qualifizierung mit Wirkung",
    lead: "Strukturierte Weiterbildung mit Concierge-Begleitung — intern entlastend, extern sichtbar.",
    facts: [
      { label: "Format", value: "Hybrid" },
      { label: "Begleitung", value: "Concierge" },
      { label: "Zielrichtung", value: "Umsetzung" },
    ],
    href: "/unternehmen",
  },
  {
    id: "avgs-inkasso",
    tag: "AVGS",
    title: "Inkasso-Sachkunde (RDV §4)",
    lead: "RDV-konforme Qualifizierung für Beschäftigung oder Selbstständigkeit im Inkasso.",
    facts: [
      { label: "Dauer", value: "6 Wochen · 150 h" },
      { label: "Gruppe", value: "12 TN · 2 Coaches" },
      { label: "Recht", value: "RDG §11 · RDV §4" },
    ],
    href: "/avgs#inkasso",
  },
  {
    id: "avgs-businessplan",
    tag: "AVGS",
    title: "Businessplan-Werkstatt",
    lead: "Belastbaren Businessplan entwickeln — strukturiert und output-getrieben.",
    facts: [
      { label: "Dauer", value: "4 Wochen · 120 h" },
      { label: "Format", value: "Vollzeit-Gruppe" },
      { label: "Ergebnis", value: "Businessplan + 90-Tage-Plan" },
    ],
    href: "/avgs#businessplan",
  },
  {
    id: "inqa-coaching",
    tag: "KMU",
    title: "INQA-Coaching für KMU",
    lead: "Akkreditierte Prozessberatung zur Arbeitsgestaltung in KMU — bis 80 % gefördert vom BMAS.",
    facts: [
      { label: "Förderquote", value: "bis 80 %" },
      { label: "Finanzierung", value: "BMAS (ESF Plus)" },
      { label: "Zielgruppe", value: "KMU bis 249 MA" },
    ],
    href: "/inqa-coaching",
  },
  {
    id: "bafa-beratung",
    tag: "KMU",
    title: "BAFA-Unternehmensberatung",
    lead: "Gelistete Vor-Ort-Beratung für KMU — bezuschusste Unternehmensberatung nach BAFA-Richtlinie.",
    facts: [
      { label: "Förderung", value: "Bundesprogramm" },
      { label: "Format", value: "Vor-Ort-Beratung" },
      { label: "Zielgruppe", value: "KMU & Gründer" },
    ],
    href: "/#kontakt",
  },
] as const;

/* ------------------------------------------------------------------
 * DOZENTEN
 * Placeholder bis Einwilligungen & Fotos vorliegen.
 * ------------------------------------------------------------------ */

export type Dozent = {
  id: string;
  name: string;
  role: string;
  expertise: string;
  image?: string;
  placeholder: boolean;
};

export const DOZENTEN: ReadonlyArray<Dozent> = [
  {
    id: "felix-beilharz",
    name: "Felix Beilharz",
    role: "Digital- & Social-Media-Marketing",
    expertise: "Social Media, Content-Strategie, Performance Ads",
    image: "/dozenten/felix-beilharz.jpeg",
    placeholder: false,
  },
  {
    id: "joerg-loehr",
    name: "Jörg Löhr",
    role: "Persönlichkeits- & Verkaufstrainer",
    expertise: "Verkauf, Rhetorik, Persönlichkeitsentwicklung",
    image: "/dozenten/joerg-loehr.png",
    placeholder: false,
  },
  {
    id: "bernd-rudmann",
    name: "Bernd Rudmann",
    role: "KI- & Automatisierungsexperte",
    expertise: "ChatGPT, Prompting, KI-Workflows",
    image: "/dozenten/bernd-rudmann.jpeg",
    placeholder: false,
  },
  {
    id: "dennis-bakir",
    name: "Dr.-Ing. Dennis Bakir",
    role: "Solopreneurship & Geschäftsmodelle",
    expertise: "Positionierung, Skalierung, Automatisierung",
    image: "/dozenten/dennis-bakir.jpeg",
    placeholder: false,
  },
] as const;

/* ------------------------------------------------------------------
 * DREI SCHRITTE
 * ------------------------------------------------------------------ */

export const DREI_SCHRITTE = {
  eyebrow: "So einfach funktioniert der Weg",
  title: "In drei klaren Schritten zum passenden Angebot",
  steps: [
    {
      step: "01",
      title: "Passenden Weg finden",
      body: "Sie wählen, ob Sie als Solopreneur, Unternehmen oder im AVGS-Kontext starten.",
    },
    {
      step: "02",
      title: "Rahmen & Möglichkeiten klären",
      body: "Im persönlichen Gespräch prüfen wir gemeinsam, welcher Weg zu Ihrem Vorhaben passt, ob und wie Förderung möglich ist — klar, direkt, ohne Umwege.",
    },
    {
      step: "03",
      title: "Begleitet umsetzen",
      body: "Sie starten — mit Klarheit, persönlicher Begleitung und einem Team, das Ihnen die zeitliche Belastung deutlich abnimmt. Und mit guter Laune.",
    },
  ],
} as const;

/* ------------------------------------------------------------------
 * TRUST-ZONE
 * ------------------------------------------------------------------ */

export const TRUST = {
  eyebrow: "Vertrauen entsteht durch Qualität",
  title: "Klar geregelt. Sauber zertifiziert. Regelmäßig kontrolliert.",
  items: [
    {
      label: "AZAV-zertifiziert & regelmäßig kontrolliert",
      body: "Trägerzulassung nach AZAV mit wiederkehrenden Maßnahmen-Kontrollen durch die Zertifizierungsstelle — keine einmalige Prüfung, sondern laufende Qualitätssicherung.",
    },
    {
      label: "ISO 9001 · Qualitätsmanagement",
      body: "Unsere Prozesse sind nach DIN EN ISO 9001 zertifiziert — strukturierte Abläufe, dokumentierte Qualität, nachvollziehbare Ergebnisse.",
    },
    {
      label: "CERTQUA · Zertifizierungsstelle",
      body: "Zertifiziert durch CERTQUA — eine der führenden Zertifizierungsstellen für Bildungsträger in Deutschland.",
    },
    {
      label: "§45 SGB III · RDG §11 · RDV §4",
      body: "AVGS-Maßnahmen zur Aktivierung und beruflichen Eingliederung — unser Sachkunde-Lehrgang erfüllt den gesetzlichen Mindestumfang.",
    },
    {
      label: "ESF / KOMPASS",
      body: "Förderwege aus dem Europäischen Sozialfonds für Solopreneure — Laufzeit bis 2027/2028, bis zu 90 % Förderung.",
    },
    {
      label: "IHK-Ausbilder-Eignung",
      body: "Geprüfte Ausbilder-Eignung nach AEVO — ein Qualitätsmerkmal, das weit über reine Wissensvermittlung hinausgeht.",
    },
    {
      label: "Anerkannter Ausbildungsbetrieb",
      body: "Anerkannt als Ausbildungsbetrieb für Bürokaufleute und Anwendungsentwickler — wir bilden selbst aus und wissen, was echte Qualifizierung bedeutet.",
    },
    {
      label: "INQA-Coach akkreditiert & BAFA-Beratung zugelassen",
      body: "Als akkreditierter INQA-Coaching-Partner (BMAS) und BAFA-gelistetes Beratungsunternehmen begleiten wir KMU auch im Förderbereich jenseits von KOMPASS.",
    },
    {
      label: "Bis 90–95 % Antragsquote",
      body: "Mit unserem Concierge-Service liegt die Bewilligungsquote deutlich über dem Durchschnitt — weil wir jeden Antrag sauber vorbereiten.",
    },
  ],
} as const;

/* ------------------------------------------------------------------
 * TESTIMONIALS (Placeholder)
 * ------------------------------------------------------------------ */

export type TestimonialVideo = {
  youtubeId: string;
  title: string;
  name: string;
  role: string;
};

export type GoogleReview = {
  name: string;
  rating: number;
  date: string;
  text: string;
};

/**
 * Video-Testimonials — YouTube-Embeds.
 * Sobald der User YouTube-IDs (z. B. "dQw4w9WgXcQ") nachliefert, einfach
 * in dieses Array eintragen und die Sektion zeigt sie automatisch an.
 */
export const TESTIMONIAL_VIDEOS: ReadonlyArray<TestimonialVideo> = [];

/**
 * Echte Google-Bewertungen mit Klarnamen — hier eintragen, sobald vorhanden.
 */
export const GOOGLE_REVIEWS: ReadonlyArray<GoogleReview> = [];

export const TESTIMONIALS = {
  eyebrow: "Was echte Teilnehmer:innen sagen",
  title: "Stimmen aus Ihrer Branche",
  note: "Praxisnahe Rückmeldungen von Teilnehmer:innen aus unseren Kursen und Beratungen.",
  items: [
    {
      quote:
        "Der Prozess war klar, die Unterlagen sauber vorbereitet — wir konnten uns auf die Inhalte konzentrieren statt auf Formulare.",
      name: "Teilnehmerin",
      role: "Solopreneurin",
      branche: "Coaching & Beratung",
    },
    {
      quote:
        "Die Begleitung war spürbar. Fristen, Rückfragen, offene Punkte — alles wurde nachvollziehbar geführt.",
      name: "Personalleitung",
      role: "HR · Mittelstand",
      branche: "Dienstleistung & B2B",
    },
    {
      quote:
        "Präzise Kommunikation, sauber dokumentierte Akte — genau so sollten Maßnahmen bei uns eingereicht werden.",
      name: "Sachbearbeitung",
      role: "Behörden-Kontext",
      branche: "Öffentliche Verwaltung",
    },
    {
      quote:
        "Nach Jahren im Handwerk habe ich mich neu orientiert. Der Antrag lief reibungslos, die Kurse waren direkt umsetzbar.",
      name: "Teilnehmer",
      role: "Gründer & Wechsler",
      branche: "Handwerk → Selbstständigkeit",
    },
  ],
} as const;

/* ------------------------------------------------------------------
 * EXPERTISE — 10+ Jahre Fördermittel-Kompetenz
 * ------------------------------------------------------------------ */

export const EXPERTISE = {
  eyebrow: "10+ Jahre Fördermittel-Expertise",
  title: "Wir übersetzen Behördensprache in klares Deutsch",
  body:
    "Seit über einem Jahrzehnt begleiten wir Teilnehmer:innen aus allen Branchen erfolgreich durch den Förderprozess — von der ersten Prüfung bis zur Bewilligung. Wir kennen die Stolpersteine, die Fristen und die richtigen Formulierungen. Für Sie heißt das: weniger Papierkram, mehr Klarheit, messbar höhere Bewilligungsquoten.",
  stats: [
    { label: "Jahre Erfahrung", value: "10+" },
    { label: "Bewilligungsquote", value: "bis 90–95 %" },
    { label: "Zertifizierungen", value: "5+" },
    { label: "Branchenunabhängig nutzbar", value: "✓" },
  ],
} as const;

/* ------------------------------------------------------------------
 * PARTNER-AUSZEICHNUNGEN & MEDIEN
 * ------------------------------------------------------------------ */

export const PARTNER_AWARDS = {
  eyebrow: "Ausgezeichnet & bekannt",
  title: "Unsere Referenzen und Partner-Auszeichnungen",
  zertifikate: [
    "Top 100 Speakers Excellence Member 2026",
    "CERTQUA — Zugelassener Träger nach AZAV, zertifiziert nach DIN EN ISO 9001",
    "ISO 56002:2019 Certified Company",
    "Akkreditierter INQA-Coach (BMAS)",
    "BAFA-gelistetes Beratungsunternehmen",
  ],
  medien: {
    title: "Unsere Referenten sind bekannt aus",
    items: [
      "VOX",
      "WAZ",
      "WELT",
      "FUNKE Mediengruppe",
      "Hamburg 1",
      "IFU-Institut",
      "Der Mittelstand (BVMW)",
      "Senat der Wirtschaft",
    ],
  },
  partnerAwards: {
    title: "Übersicht der Auszeichnungen unserer Partner",
    items: [
      "German Brand Award Winner",
      "Handelsblatt",
      "DER SPIEGEL",
      "FUNKE Mediengruppe",
      "BVMW — Der Mittelstand",
      "WAZ",
      "Hamburg 1",
    ],
  },
} as const;

/* ------------------------------------------------------------------
 * ABSCHLUSS-CTA
 * ------------------------------------------------------------------ */

export const ABSCHLUSS = {
  eyebrow: "Nächster Schritt",
  title: "Finden Sie jetzt den Weg, der zu Ihnen passt",
  body:
    "Ob Solopreneur, Unternehmen oder AVGS-Kontext: WissensReich hilft Ihnen, hochwertige Bildung nicht nur zu finden, sondern sinnvoll und begleitet umzusetzen.",
} as const;

/* ------------------------------------------------------------------
 * AVGS-KURSDETAILS (für /avgs Unterseite)
 * ------------------------------------------------------------------ */

export const AVGS_COURSES = {
  inkasso: {
    id: "inkasso",
    title: "Inkasso-Sachkunde (RDV §4)",
    subtitle: "Qualifizierung für Beschäftigung oder Selbstständigkeit im Inkasso",
    carrier: "WissensReich Academy · AZAV-zugelassen",
    duration: "6 Wochen · 150 h",
    group: "12 TN · Hybrid · 2 Coaches parallel",
    format: "120 h Gruppe + 30 h Einzelcoaching",
    price: "4.087,80 € (B-DKS 2024)",
    legal: "RDG §11 · RDV §4 · §45 SGB III",
    goals: [
      "Einsatzfähig im qualifizierten Forderungsmanagement",
      "Rechtssichere Fallbearbeitung & dokumentierte Kommunikation",
      "Entscheidungsgrundlage: Anstellung vs. Selbstständigkeit",
    ],
    content: [
      "BGB — Forderung, Verzug, Abtretung",
      "HGB — Kaufmann, Vertretung, Haftung",
      "ZPO, Zwangsvollstreckung, InsO",
      "Kostenrecht, Zinsen, Verrechnung",
      "RDG-Compliance & Dokumentation",
    ],
  },
  businessplan: {
    id: "businessplan",
    title: "Businessplan-Werkstatt",
    subtitle: "Belastbare Gründungsvorhaben strukturiert entwickeln",
    carrier: "WissensReich Academy · AZAV-zugelassen",
    duration: "4 Wochen · 120 h",
    group: "Vollzeit · Mo–Fr · 09–17 Uhr",
    format: "Gruppenformat · output-getrieben",
    price: "1.756,80 € (B-DKS 2024)",
    legal: "§45 SGB III",
    goals: [
      "Extern vertretbares Businessplan-Paket",
      "Finanzplan mit Rentabilität & Szenarien",
      "90-Tage-Umsetzungsplan mit Kennzahlen",
    ],
    content: [
      "Woche 1: Fundament, Zielkunden, Angebot",
      "Woche 2: Preis, Umsatzlogik, Finanzplan",
      "Woche 3: Recht, Haftung, Organisation",
      "Woche 4: Finalisierung & Stress-Test",
    ],
  },
} as const;

/* ------------------------------------------------------------------
 * QUICKCHECK — Mehrstufiges Förderfähigkeits-Modal
 * Micro-Commitments: Jede Antwort bringt den User näher zum Ergebnis.
 * ------------------------------------------------------------------ */

export type QuickCheckOption = {
  label: string;
  value: string;
};

export type QuickCheckStep = {
  id: number;
  question: string;
  subtext: string;
  microCommitment: string;
  options: ReadonlyArray<QuickCheckOption>;
};

export type QuickCheckResult = {
  key: string;
  title: string;
  foerderung: string;
  foerderquote: string;
  beschreibung: string;
  empfehlung: string;
  cta: { label: string; href: string };
};

export const QUICKCHECK_INTRO = {
  title: "Förderfähigkeit prüfen",
  sub: "In 60 Sekunden erfahren Sie, welcher Förderweg zu Ihnen passt — kostenlos und unverbindlich.",
  badge: "Quick-Check",
} as const;

export const QUICKCHECK_STEPS: ReadonlyArray<QuickCheckStep> = [
  {
    id: 1,
    question: "Wie sind Sie beruflich aufgestellt?",
    subtext: "Damit finden wir den passenden Förderrahmen für Sie.",
    microCommitment: "Schritt 1 von 4 — Gleich haben Sie Klarheit.",
    options: [
      { label: "Selbstständig / Solopreneur", value: "solo" },
      { label: "Angestellt in einem Unternehmen", value: "angestellt" },
      { label: "Arbeitssuchend / In Umschulung", value: "arbeitssuchend" },
    ],
  },
  {
    id: 2,
    question: "Welches Thema interessiert Sie am meisten?",
    subtext: "Wir gleichen Ihr Interesse mit unseren zertifizierten Angeboten ab.",
    microCommitment: "Schritt 2 von 4 — Sie sind auf dem richtigen Weg.",
    options: [
      { label: "Marketing & Sales", value: "marketing" },
      { label: "KI & Automatisierung", value: "ki" },
      { label: "Kommunikation & Rhetorik", value: "kommunikation" },
      { label: "Unternehmertum & Leadership", value: "unternehmertum" },
      { label: "AVGS (Inkasso / Businessplan)", value: "avgs" },
      { label: "Noch unsicher — beraten Sie mich", value: "unsicher" },
    ],
  },
  {
    id: 3,
    question: "Wie schnell möchten Sie starten?",
    subtext: "Je nach Zeitrahmen passen unterschiedliche Formate.",
    microCommitment: "Schritt 3 von 4 — Fast geschafft!",
    options: [
      { label: "So bald wie möglich", value: "sofort" },
      { label: "In den nächsten 4 Wochen", value: "4wochen" },
      { label: "Innerhalb von 3 Monaten", value: "3monate" },
      { label: "Erst mal nur informieren", value: "informieren" },
    ],
  },
  {
    id: 4,
    question: "Haben Sie bereits Kontakt zu einer Förderstelle?",
    subtext: "Das hilft uns, den Prozess optimal für Sie vorzubereiten.",
    microCommitment: "Letzte Frage — Ihr Ergebnis ist gleich da.",
    options: [
      { label: "Ja, Jobcenter / Agentur für Arbeit", value: "jobcenter" },
      { label: "Ja, andere Förderstelle (z.B. BAFA, ESF)", value: "andere" },
      { label: "Nein, noch keinen Kontakt", value: "kein-kontakt" },
      { label: "Weiß ich nicht genau", value: "unsicher" },
    ],
  },
] as const;

export const QUICKCHECK_RESULTS: ReadonlyArray<QuickCheckResult> = [
  {
    key: "solo-kompass",
    title: "KOMPASS-Förderung für Solopreneure",
    foerderung: "ESF / KOMPASS",
    foerderquote: "Bis zu 90 %",
    beschreibung:
      "Als Selbstständige:r mit max. einer Vollzeitkraft können Sie über das KOMPASS-Programm bis zu 90 % Ihrer Weiterbildungskosten gefördert bekommen.",
    empfehlung: "Wir begleiten Sie durch den gesamten Antrag — mit unserem Concierge-Service liegt die Bewilligungsquote bei bis zu 90–95 %.",
    cta: { label: "Förderung jetzt anfragen", href: "/#kontakt" },
  },
  {
    key: "avgs",
    title: "AVGS-Maßnahme nach §45 SGB III",
    foerderung: "Aktivierungs- & Vermittlungsgutschein",
    foerderquote: "100 % Kostenübernahme",
    beschreibung:
      "Mit einem AVGS übernimmt die Agentur für Arbeit oder das Jobcenter 100 % der Maßnahmekosten. Unsere Kurse sind AZAV-zertifiziert und sofort buchbar.",
    empfehlung: "Sprechen Sie uns an — wir unterstützen auch bei der Beantragung des Gutscheins.",
    cta: { label: "AVGS-Angebote ansehen", href: "/avgs" },
  },
  {
    key: "unternehmen",
    title: "Qualifizierung für Unternehmen",
    foerderung: "Qualifizierungschancengesetz / Unternehmensmittel",
    foerderquote: "Bis zu 100 % (je nach Betriebsgröße)",
    beschreibung:
      "Unternehmen können über das Qualifizierungschancengesetz oder eigene Budgets hochwertige Weiterbildung für Mitarbeitende finanzieren.",
    empfehlung: "Unser Concierge-Service übernimmt Koordination und Dokumentation — Ihre HR-Abteilung wird entlastet.",
    cta: { label: "Gespräch vereinbaren", href: "/#kontakt" },
  },
  {
    key: "beratung",
    title: "Persönliche Beratung empfohlen",
    foerderung: "Individuell zu klären",
    foerderquote: "Abhängig von Ihrer Situation",
    beschreibung:
      "Basierend auf Ihren Angaben empfehlen wir ein kurzes Beratungsgespräch, um den optimalen Förderweg für Sie zu identifizieren.",
    empfehlung: "Kostenlos, unverbindlich und innerhalb eines Werktags. Wir melden uns mit einem klaren nächsten Schritt.",
    cta: { label: "Beratung anfragen", href: "/#kontakt" },
  },
] as const;

/* ------------------------------------------------------------------
 * KURSÜBERSICHT — Erweiterte Kursdaten für /kursuebersicht
 * ------------------------------------------------------------------ */

export type KursKategorie =
  | "alle"
  | "marketing-sales"
  | "ki-automatisierung"
  | "kommunikation-rhetorik"
  | "unternehmertum-leadership"
  | "unternehmen-kompakt"
  | "avgs";

export type Kurs = {
  id: string;
  kategorie: KursKategorie[];
  title: string;
  kurzbeschreibung: string;
  dozent: string;
  dauer: string;
  format: string;
  foerderung: string;
  zertifizierung: string;
  zielgruppe: string;
  preis: string;
  highlights: ReadonlyArray<string>;
  href: string;
};

export const KURSE: ReadonlyArray<Kurs> = [
  /* ── Marketing & Sales ───────────────────────────────────── */
  {
    id: "social-media-masterclass",
    kategorie: ["marketing-sales"],
    title: "Social Media Marketing-Masterclass",
    kurzbeschreibung:
      "Alle relevanten Plattformen, Content-Strategien, Ads und KI-Tools — vom Grundverständnis bis zur kampagnenfähigen Umsetzung.",
    dozent: "Felix Beilharz",
    dauer: "6 Wochen · 43 h",
    format: "Online-Live + Selbstlernphasen",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Solopreneure & Marketing-Verantwortliche",
    preis: "4.950 € (vor Förderung)",
    highlights: [
      "Instagram, LinkedIn, TikTok, YouTube & Meta Ads",
      "KI-gestützte Content-Erstellung & Community-Aufbau",
      "Individuelle Social-Media-Strategie als Abschlussprojekt",
    ],
    href: "/kursuebersicht#social-media-masterclass",
  },
  {
    id: "faszination-verkauf",
    kategorie: ["marketing-sales"],
    title: "Faszination Verkauf",
    kurzbeschreibung:
      "Verkaufspsychologie, Akquise, Einwandbehandlung und Empfehlungsmarketing — mit 21 Nachhaltigkeits-Modulen für den Transfererfolg.",
    dozent: "Jörg Löhr, Martin Barth & Klaus J. Fink",
    dauer: "39 h (26 h Live + 13 h Selbstlern)",
    format: "3-Tage-Präsenz + Online-Module",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Vertriebsprofis & Selbstständige",
    preis: "4.950 € (vor Förderung)",
    highlights: [
      "Praxis-Intensiv: Verkaufsgespräche, Abschluss & Empfehlungsmarketing",
      "21 Nachhaltigkeits-Module für langfristigen Transfer",
      "Direkte Umsetzung durch Rollensimulationen & Live-Coaching",
    ],
    href: "/kursuebersicht#faszination-verkauf",
  },
  {
    id: "personal-branding-camp",
    kategorie: ["marketing-sales"],
    title: "Personal Branding Camp",
    kurzbeschreibung:
      "Positionierung, Brand Story und Touchpoint-Konzeption — bis zum fertigen 30-Tage-Content-Plan.",
    dozent: "Thomas Tornatzky",
    dauer: "6 Wochen · 40 h",
    format: "Online-Live + Selbstlernphasen",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Selbstständige & Personal Brands",
    preis: "4.950 € (vor Förderung)",
    highlights: [
      "Individuelle Markenpositionierung & Brand Story",
      "Touchpoint-Strategie für Social Media & Website",
      "30-Tage-Content-Plan als Abschlussprojekt",
    ],
    href: "/kursuebersicht#personal-branding-camp",
  },
  {
    id: "kundenbindung-masterclass",
    kategorie: ["marketing-sales"],
    title: "Kundenbindungs-Masterclass",
    kurzbeschreibung:
      "Beziehungsmarketing, Segmentierung, Kundenbindungspläne und Empfehlungsmarketing — systematisch statt zufällig.",
    dozent: "Gerhard Honsbein",
    dauer: "12 Wochen · 42,5 h",
    format: "Online-Live + Selbstlernphasen",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Unternehmer & Vertriebsverantwortliche",
    preis: "4.950 € (vor Förderung)",
    highlights: [
      "Kundensegmentierung & individuelle Bindungsstrategien",
      "Empfehlungsmarketing-System aufbauen",
      "Praxisprojekt: Eigener Kundenbindungsplan",
    ],
    href: "/kursuebersicht#kundenbindung-masterclass",
  },
  {
    id: "youtube-anzeigen-durchstarter",
    kategorie: ["marketing-sales"],
    title: "YouTube-Anzeigen-Durchstarter",
    kurzbeschreibung:
      "YouTube-Kampagnen, Storytelling, Google Ads und Videomarketing — von der Idee bis zur performanten Anzeige.",
    dozent: "Miriam Betancourt",
    dauer: "12 Wochen · 33 h (24 h Live + 9 h Selbstlern)",
    format: "Online-Live + Selbstlernphasen",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Selbstständige & Marketing-Verantwortliche",
    preis: "4.950 € (vor Förderung)",
    highlights: [
      "YouTube-Ad-Formate, Targeting & Gebotsstrategien",
      "Storytelling-Frameworks für Video-Ads",
      "Google Ads Kampagnen-Setup & Optimierung",
    ],
    href: "/kursuebersicht#youtube-anzeigen-durchstarter",
  },
  {
    id: "guerilla-marketing",
    kategorie: ["marketing-sales"],
    title: "Guerilla-Marketing",
    kurzbeschreibung:
      "Performance-Marketing, Funnel-Aufbau, Lean Marketing und Skalierung — mit individuellem 90-Tage-Plan.",
    dozent: "Patrick O'Mahony",
    dauer: "10 Wochen · 45 h (30 h Live + 15 h Selbstlern)",
    format: "Online-Live + Selbstlernphasen",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Gründer & Solopreneure mit kleinem Budget",
    preis: "4.950 € (vor Förderung)",
    highlights: [
      "Lean Funnel-Aufbau & Performance-Marketing",
      "Growth Hacking mit begrenztem Budget",
      "Individueller 90-Tage-Marketing-Plan",
    ],
    href: "/kursuebersicht#guerilla-marketing",
  },

  /* ── Kommunikation & Rhetorik ────────────────────────────── */
  {
    id: "erfolgreich-reden",
    kategorie: ["kommunikation-rhetorik"],
    title: "Erfolgreich REDEN",
    kurzbeschreibung:
      "Körpersprache, Stimme und Redestruktur — mit Videoanalysen, Praxisübungen und 13 Nachhaltigkeits-Modulen.",
    dozent: "Jörg Löhr & Klaus Ohnesorge",
    dauer: "37 h (22 h Live + 15 h Selbstlern)",
    format: "2-Tage-Präsenz + Online-Module",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Selbstständige & Führungskräfte",
    preis: "4.950 € (vor Förderung)",
    highlights: [
      "Körpersprache, Stimme & Bühnenpräsenz trainieren",
      "Videoanalysen mit individuellem Feedback",
      "13 Nachhaltigkeits-Module für den Praxistransfer",
    ],
    href: "/kursuebersicht#erfolgreich-reden",
  },

  /* ── KI & Automatisierung ────────────────────────────────── */
  {
    id: "effizient-arbeiten-ki",
    kategorie: ["ki-automatisierung"],
    title: "Effizient arbeiten mit KI",
    kurzbeschreibung:
      "ChatGPT, Prompting, DSGVO-konformer KI-Einsatz und Content-Erstellung (Text, Bild, Video, Audio) — mit Custom GPTs.",
    dozent: "Bernd Rudmann",
    dauer: "8 Wochen · 39 h",
    format: "Online-Live + Selbstlernphasen",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Solopreneure & Fachkräfte",
    preis: "4.995 € (vor Förderung)",
    highlights: [
      "ChatGPT & Prompting für den Berufsalltag",
      "KI-gestützte Content-Erstellung (Text, Bild, Video)",
      "DSGVO-konforme Nutzung & Custom GPTs aufbauen",
    ],
    href: "/kursuebersicht#effizient-arbeiten-ki",
  },
  {
    id: "automatisierung-ki-kompass",
    kategorie: ["ki-automatisierung"],
    title: "Automatisierungs- & KI-Kompass",
    kurzbeschreibung:
      "No-/Low-Code, Prozessdigitalisierung, Datensouveränität und KI-Assistenten — Automatisierung ohne Programmierkenntnisse.",
    dozent: "Gerrick Kammholz & Robin Bakir",
    dauer: "12 Wochen · 48 h (30 h Live + 18 h Selbstlern)",
    format: "Online-Live + Selbstlernphasen",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Solopreneure & Prozessverantwortliche",
    preis: "4.997 € (vor Förderung)",
    highlights: [
      "No-/Low-Code-Tools für Geschäftsprozesse",
      "Eigene KI-Assistenten & Automatisierungen bauen",
      "Datensouveränität & DSGVO-konforme Workflows",
    ],
    href: "/kursuebersicht#automatisierung-ki-kompass",
  },

  /* ── Unternehmertum & Leadership ─────────────────────────── */
  {
    id: "steuerstrategie",
    kategorie: ["unternehmertum-leadership"],
    title: "Finanzielle Klarheit & Steuerstrategie",
    kurzbeschreibung:
      "Steuern, BWA, Liquidität und Vermögensaufbau — praxisnah für Selbstständige und Gründer.",
    dozent: "Leo Gärtner, Marc Ogiermann & Sven Bendig",
    dauer: "8 Wochen · 52 h (32 h Live + 10 h Selbstlern + Praxistag)",
    format: "Online-Live + 1 Präsenztag Hamburg",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Selbstständige & Gründer",
    preis: "4.950 € (vor Förderung)",
    highlights: [
      "Steueroptimierung, Rechtsformwahl & BWA verstehen",
      "Liquiditätsplanung & Vermögensaufbau",
      "Praxistag mit individueller Steuer-Analyse",
    ],
    href: "/kursuebersicht#steuerstrategie",
  },
  {
    id: "solopreneur-freiheits-kompass",
    kategorie: ["unternehmertum-leadership"],
    title: "Solopreneur-Freiheits-Kompass",
    kurzbeschreibung:
      "Positionierung, Preisstrategie, KI/Automatisierung und Kundenbindung — der Fahrplan für nachhaltige Solopreneurschaft.",
    dozent: "Dr.-Ing. Dennis Bakir & Patrick Starkmann",
    dauer: "12 Wochen · 44 h (29 h Live + 15 h Selbstlern)",
    format: "Online-Live + Selbstlernphasen",
    foerderung: "KOMPASS bis 90 %",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Solopreneure & Freiberufler",
    preis: "4.997 € (vor Förderung)",
    highlights: [
      "Positionierung, Angebotsstrategie & Preismodelle",
      "KI & Automatisierung für den Solopreneur-Alltag",
      "Kundenbindung & skalierbares Geschäftsmodell",
    ],
    href: "/kursuebersicht#solopreneur-freiheits-kompass",
  },

  /* ── AVGS ────────────────────────────────────────────────── */
  {
    id: "inkasso-sachkunde",
    kategorie: ["avgs"],
    title: "Inkasso-Sachkunde (RDV §4)",
    kurzbeschreibung:
      "RDV-konforme Qualifizierung für das Forderungsmanagement — prüfungsorientiert, praxisnah.",
    dozent: "Fachdozententeam Inkasso",
    dauer: "6 Wochen · 150 h",
    format: "Hybrid · 12 TN · 2 Coaches",
    foerderung: "AVGS §45 SGB III — 100 % gefördert",
    zertifizierung: "AZAV · RDG §11 · RDV §4",
    zielgruppe: "Arbeitssuchende im Forderungsmanagement",
    preis: "4.087,80 € — 100 % über AVGS",
    highlights: [
      "Fallbearbeitung nach BGB, HGB, ZPO",
      "30 h Einzelcoaching + Gruppenformat",
      "Entscheidungsmatrix: Anstellung vs. Selbstständigkeit",
    ],
    href: "/avgs#inkasso",
  },
  {
    id: "businessplan-werkstatt",
    kategorie: ["avgs"],
    title: "Businessplan-Werkstatt",
    kurzbeschreibung:
      "Belastbaren Businessplan entwickeln — strukturiert, output-getrieben, mit 90-Tage-Umsetzungsplan.",
    dozent: "Fachdozententeam Gründung",
    dauer: "4 Wochen · 120 h",
    format: "Vollzeit · Mo–Fr · 09–17 Uhr",
    foerderung: "AVGS §45 SGB III — 100 % gefördert",
    zertifizierung: "AZAV-zertifiziert",
    zielgruppe: "Gründungsinteressierte mit AVGS",
    preis: "1.756,80 € — 100 % über AVGS",
    highlights: [
      "Extern vertretbarer Businessplan",
      "Finanzplan mit Szenarien & Rentabilität",
      "90-Tage-Plan mit Zielkennzahlen",
    ],
    href: "/avgs#businessplan",
  },
  /* ── Unternehmen kompakt: Live done with you · unter 3.000 € ──────── */
  {
    id: "resilienztraining",
    kategorie: ["unternehmen-kompakt"],
    title: "Resilienztraining für Teams",
    kurzbeschreibung:
      "Praxisnahes Live-Coaching zum Aufbau mentaler Widerstandskraft — direkt am eigenen Teamalltag angewendet.",
    dozent: "WissensReich-Coaches",
    dauer: "Kompakt · 3 Tage",
    format: "100 % Live · Done with you",
    foerderung: "Qualifizierungschancengesetz möglich",
    zertifizierung: "AZAV-zertifiziert & regelmäßig kontrolliert",
    zielgruppe: "KMU-Teams, Führungskräfte, HR",
    preis: "unter 3.000 € (vor Förderung)",
    highlights: [
      "Dozent nimmt das Team an die Hand — wir setzen gemeinsam um",
      "Konkrete Resilienz-Routinen für Alltag und Belastungsspitzen",
      "Eigene Team-Charta als Abschlussergebnis",
    ],
    href: "/unternehmen#kompakt-resilienz",
  },
  {
    id: "change-management",
    kategorie: ["unternehmen-kompakt"],
    title: "Change Management live",
    kurzbeschreibung:
      "Veränderungen strukturiert planen, kommunizieren und umsetzen — mit einem echten Change-Projekt aus Ihrem Unternehmen.",
    dozent: "WissensReich-Coaches",
    dauer: "Kompakt · 3 Tage",
    format: "100 % Live · Done with you",
    foerderung: "Qualifizierungschancengesetz möglich",
    zertifizierung: "AZAV-zertifiziert & regelmäßig kontrolliert",
    zielgruppe: "Geschäftsführer, Führungskräfte, Projektleitung",
    preis: "unter 3.000 € (vor Förderung)",
    highlights: [
      "Arbeit direkt an einem echten Veränderungsvorhaben",
      "Kommunikationsplan, Stakeholder-Matrix, Meilensteine",
      "Dozent begleitet die ersten Umsetzungsschritte live",
    ],
    href: "/unternehmen#kompakt-change",
  },
  {
    id: "bueroorganisation",
    kategorie: ["unternehmen-kompakt"],
    title: "Büroorganisation — Struktur statt Chaos",
    kurzbeschreibung:
      "Schluss mit dem Papier- und Mail-Dschungel: Wir räumen gemeinsam auf und bauen ein tragfähiges Ordnungssystem.",
    dozent: "WissensReich-Coaches",
    dauer: "Kompakt · 2 Tage",
    format: "100 % Live · Done with you",
    foerderung: "Qualifizierungschancengesetz möglich",
    zertifizierung: "AZAV-zertifiziert & regelmäßig kontrolliert",
    zielgruppe: "Unternehmerinnen, Office-Teams, Assistenzen",
    preis: "unter 3.000 € (vor Förderung)",
    highlights: [
      "Physische und digitale Ablage sauber strukturiert",
      "Workflow-Vorlagen für wiederkehrende Prozesse",
      "Dokumentiertes Ordnungssystem als Ergebnis",
    ],
    href: "/unternehmen#kompakt-buero",
  },
  {
    id: "lexoffice-live",
    kategorie: ["unternehmen-kompakt"],
    title: "Lexoffice live einrichten & nutzen",
    kurzbeschreibung:
      "Von der ersten Rechnung bis zur sauberen Buchführung — wir richten Lexoffice gemeinsam ein und üben an echten Belegen.",
    dozent: "WissensReich-Coaches",
    dauer: "Kompakt · 2 Tage",
    format: "100 % Live · Done with you",
    foerderung: "Qualifizierungschancengesetz möglich",
    zertifizierung: "AZAV-zertifiziert & regelmäßig kontrolliert",
    zielgruppe: "Gründer, Kleinunternehmer, Solopreneure",
    preis: "unter 3.000 € (vor Förderung)",
    highlights: [
      "Einrichtung, Rechnungen, Belege, Banking — alles live gemacht",
      "Automatisierungen für wiederkehrende Buchungen",
      "Klare Routine für Monatsabschluss und DATEV-Export",
    ],
    href: "/unternehmen#kompakt-lexoffice",
  },
  {
    id: "webseite-ki",
    kategorie: ["unternehmen-kompakt"],
    title: "Webseitenerstellung mit KI",
    kurzbeschreibung:
      "Eine verkaufsstarke Unternehmenswebsite — in zwei Tagen mit KI und begleitetem Coaching gemeinsam aufgebaut.",
    dozent: "WissensReich-Coaches",
    dauer: "Kompakt · 2 Tage",
    format: "100 % Live · Done with you",
    foerderung: "Qualifizierungschancengesetz möglich",
    zertifizierung: "AZAV-zertifiziert & regelmäßig kontrolliert",
    zielgruppe: "Gründer, Solopreneure, Unternehmen ohne IT",
    preis: "unter 3.000 € (vor Förderung)",
    highlights: [
      "Live-Aufbau einer funktionierenden Website mit KI-Tools",
      "Texte, Bilder, Struktur — alles praktisch am eigenen Projekt",
      "Selbst pflegbar — keine Agentur-Abhängigkeit",
    ],
    href: "/unternehmen#kompakt-webseite",
  },
  {
    id: "rechnung-anspruch-inkasso",
    kategorie: ["unternehmen-kompakt"],
    title: "Rechnung · Anspruch · Inkasso",
    kurzbeschreibung:
      "Praxisnaher Workshop zu sauberer Rechnungsstellung, berechtigten Ansprüchen und professionellem Forderungsmanagement im Unternehmen.",
    dozent: "WissensReich-Coaches",
    dauer: "Kompakt · 2 Tage",
    format: "100 % Live · Done with you",
    foerderung: "Qualifizierungschancengesetz möglich",
    zertifizierung: "AZAV-zertifiziert & regelmäßig kontrolliert",
    zielgruppe: "Unternehmer, Buchhaltung, Office-Teams",
    preis: "unter 3.000 € (vor Förderung)",
    highlights: [
      "Rechtssichere Rechnungen und Mahnprozesse live aufgesetzt",
      "Interne Eskalationslogik und Übergabepunkte definiert",
      "Kein Rechtsrat — aber klare, interne Prozesse",
    ],
    href: "/unternehmen#kompakt-inkasso",
  },
  {
    id: "buero-next-level",
    kategorie: ["unternehmen-kompakt"],
    title: "Büro Next Level — digitales Arbeiten starten",
    kurzbeschreibung:
      "Kalender, Terminbuchung und E-Mail automatisieren. Der Einstieg in echtes digitales Arbeiten — gemeinsam live eingerichtet.",
    dozent: "WissensReich-Coaches",
    dauer: "Kompakt · 3 Tage",
    format: "100 % Live · Done with you",
    foerderung: "Qualifizierungschancengesetz möglich",
    zertifizierung: "AZAV-zertifiziert & regelmäßig kontrolliert",
    zielgruppe: "Unternehmer, Office-Teams, digitale Umsteiger",
    preis: "unter 3.000 € (vor Förderung)",
    highlights: [
      "Automatisierte Terminbuchung mit Calendly/Cal.com & Co.",
      "E-Mail-Regeln, Vorlagen und Routinen einrichten",
      "Solide Basis für weitere Digitalisierungsschritte",
    ],
    href: "/unternehmen#kompakt-nextlevel",
  },
] as const;

/* ------------------------------------------------------------------
 * ERWEITERTE DOZENTEN für /kursuebersicht
 * ------------------------------------------------------------------ */

export type DozentErweitert = {
  id: string;
  name: string;
  role: string;
  expertise: string;
  bio: string;
  schwerpunkte: ReadonlyArray<string>;
  kurse: ReadonlyArray<string>;
  image?: string;
  placeholder: boolean;
};

export const DOZENTEN_ERWEITERT: ReadonlyArray<DozentErweitert> = [
  {
    id: "felix-beilharz",
    name: "Felix Beilharz",
    role: "Digital- & Social-Media-Marketing",
    expertise: "Social Media, Content-Strategie, Performance Ads",
    bio: "Einer der renommiertesten Online-Marketing-Experten Deutschlands. Über 15 Jahre Erfahrung, Bestseller-Autor und gefragter Keynote-Speaker für digitale Sichtbarkeit.",
    schwerpunkte: ["Social Media", "Content-Marketing", "Meta & LinkedIn Ads", "KI-Tools"],
    kurse: ["social-media-masterclass"],
    image: "/dozenten/felix-beilharz.jpeg",
    placeholder: false,
  },
  {
    id: "joerg-loehr",
    name: "Jörg Löhr",
    role: "Persönlichkeits- & Verkaufstrainer",
    expertise: "Verkauf, Rhetorik, Persönlichkeitsentwicklung",
    bio: "Einer der führenden Persönlichkeitstrainer im DACH-Raum. Verbindet wissenschaftliche Fundierung mit sofortiger Praxisumsetzung — bekannt aus TV und Bestsellerlisten.",
    schwerpunkte: ["Verkaufspsychologie", "Rhetorik", "Persönlichkeit", "Motivation"],
    kurse: ["faszination-verkauf", "erfolgreich-reden"],
    image: "/dozenten/joerg-loehr.png",
    placeholder: false,
  },
  {
    id: "klaus-fink",
    name: "Klaus J. Fink",
    role: "Akquise- & Empfehlungsexperte",
    expertise: "Empfehlungsmarketing, Kaltakquise, Vertriebsstrategien",
    bio: "Deutschlands führender Empfehlungsmarketing-Experte. Mehrfacher Bestseller-Autor und Trainer für nachhaltige Vertriebsprozesse.",
    schwerpunkte: ["Empfehlungsmarketing", "Kaltakquise", "Vertriebsaufbau", "Abschlusstechnik"],
    kurse: ["faszination-verkauf"],
    placeholder: false,
  },
  {
    id: "klaus-ohnesorge",
    name: "Klaus Ohnesorge",
    role: "Rhetorik- & Präsentationstrainer",
    expertise: "Körpersprache, Stimme, Bühnenpräsenz",
    bio: "Erfahrener Rhetorik-Coach mit Fokus auf Körpersprache und Stimme. Begleitet Führungskräfte und Selbstständige zu souveränem Auftritt.",
    schwerpunkte: ["Körpersprache", "Stimmtraining", "Bühnenpräsenz", "Videoanalyse"],
    kurse: ["erfolgreich-reden"],
    placeholder: false,
  },
  {
    id: "bernd-rudmann",
    name: "Bernd Rudmann",
    role: "KI- & Automatisierungsexperte",
    expertise: "ChatGPT, Prompting, KI-Workflows, DSGVO",
    bio: "Praxisorientierter KI-Experte mit Fokus auf DSGVO-konforme Anwendung. Macht Künstliche Intelligenz für den Berufsalltag nutzbar — ohne Vorkenntnisse.",
    schwerpunkte: ["ChatGPT & Prompting", "KI-Content", "DSGVO", "Custom GPTs"],
    kurse: ["effizient-arbeiten-ki"],
    image: "/dozenten/bernd-rudmann.jpeg",
    placeholder: false,
  },
  {
    id: "gerrick-kammholz",
    name: "Gerrick Kammholz",
    role: "No-/Low-Code & Prozessautomatisierung",
    expertise: "Automatisierung, Datensouveränität, KI-Assistenten",
    bio: "Spezialist für No-/Low-Code-Automatisierung und Prozessdigitalisierung. Macht komplexe Automatisierung ohne Programmierkenntnisse zugänglich.",
    schwerpunkte: ["No-/Low-Code", "Prozessdigitalisierung", "KI-Assistenten", "Datensouveränität"],
    kurse: ["automatisierung-ki-kompass"],
    image: "/dozenten/gerrick-kammholz.png",
    placeholder: false,
  },
  {
    id: "leo-gaertner",
    name: "Leo Gärtner",
    role: "Steuer- & Finanzstratege",
    expertise: "Steuern, BWA, Liquiditätsplanung, Vermögensaufbau",
    bio: "Erfahrener Finanzstratege mit Fokus auf Steueroptimierung für Selbstständige. Macht komplexe Finanzthemen verständlich und umsetzbar.",
    schwerpunkte: ["Steueroptimierung", "BWA-Analyse", "Liquiditätsplanung", "Rechtsformwahl"],
    kurse: ["steuerstrategie"],
    image: "/dozenten/leo-gaertner.jpeg",
    placeholder: false,
  },
  {
    id: "dennis-bakir",
    name: "Dr.-Ing. Dennis Bakir",
    role: "Solopreneurship & Geschäftsmodelle",
    expertise: "Positionierung, Skalierung, Automatisierung",
    bio: "Promovierter Ingenieur und Unternehmer. Begleitet Solopreneure von der Positionierung bis zum skalierbaren Geschäftsmodell — systematisch und datengetrieben.",
    schwerpunkte: ["Positionierung", "Preisstrategien", "KI & Automatisierung", "Skalierung"],
    kurse: ["solopreneur-freiheits-kompass"],
    image: "/dozenten/dennis-bakir.jpeg",
    placeholder: false,
  },
  {
    id: "thomas-tornatzky",
    name: "Thomas Tornatzky",
    role: "Personal Branding & Markenaufbau",
    expertise: "Positionierung, Brand Story, Content-Strategie",
    bio: "Markenexperte mit Fokus auf Personal Branding für Selbstständige. Begleitet von der Positionierung bis zum fertigen Content-Plan.",
    schwerpunkte: ["Personal Branding", "Brand Story", "Touchpoint-Strategie", "Content-Planung"],
    kurse: ["personal-branding-camp"],
    image: "/dozenten/thomas-tornatzky.jpeg",
    placeholder: false,
  },
  {
    id: "gerhard-honsbein",
    name: "Gerhard Honsbein",
    role: "Kundenbindung & Beziehungsmarketing",
    expertise: "CRM, Kundensegmentierung, Empfehlungsmarketing",
    bio: "Experte für Kundenbindung und Beziehungsmarketing. Entwickelt systematische Strategien, die aus Einmalkäufern loyale Stammkunden machen.",
    schwerpunkte: ["Kundenbindung", "Segmentierung", "Empfehlungsmarketing", "CRM-Systeme"],
    kurse: ["kundenbindung-masterclass"],
    image: "/dozenten/gerhard-honsbein.jpeg",
    placeholder: false,
  },
  {
    id: "miriam-betancourt",
    name: "Miriam Betancourt",
    role: "YouTube & Video-Marketing",
    expertise: "YouTube Ads, Storytelling, Google Ads",
    bio: "Spezialistin für YouTube-Werbung und Videomarketing. Verbindet kreatives Storytelling mit datengetriebener Kampagnenoptimierung.",
    schwerpunkte: ["YouTube Ads", "Video-Storytelling", "Google Ads", "Kampagnen-Optimierung"],
    kurse: ["youtube-anzeigen-durchstarter"],
    image: "/dozenten/miriam-betancourt.jpeg",
    placeholder: false,
  },
  {
    id: "patrick-omahony",
    name: "Patrick O'Mahony",
    role: "Guerilla- & Performance-Marketing",
    expertise: "Growth Hacking, Funnel-Aufbau, Lean Marketing",
    bio: "Performance-Marketing-Experte mit Fokus auf Guerilla-Strategien. Zeigt, wie man mit begrenztem Budget maximale Reichweite und Wirkung erzielt.",
    schwerpunkte: ["Guerilla-Marketing", "Funnel-Aufbau", "Growth Hacking", "Performance Ads"],
    kurse: ["guerilla-marketing"],
    image: "/dozenten/patrick-omahony.jpeg",
    placeholder: false,
  },
  {
    id: "marc-ogiermann",
    name: "Marc Ogiermann",
    role: "Steuer- & Finanzexperte",
    expertise: "Steueroptimierung, Rechtsformwahl, Finanzplanung",
    bio: "Erfahrener Steuerberater mit Fokus auf Selbstständige und Gründer. Macht komplexe Steuerthemen praxisnah und umsetzbar.",
    schwerpunkte: ["Steuerberatung", "Rechtsformwahl", "Finanzplanung", "Buchhaltung"],
    kurse: ["steuerstrategie"],
    image: "/dozenten/marc-ogiermann.jpeg",
    placeholder: false,
  },
  {
    id: "sven-bendig",
    name: "Sven Bendig",
    role: "Vermögensaufbau & Finanzstrategie",
    expertise: "Vermögensaufbau, Liquiditätsplanung, Investmentstrategien",
    bio: "Finanzstratege mit Schwerpunkt Vermögensaufbau für Selbstständige. Begleitet von der Liquiditätsplanung bis zur langfristigen Vermögensstrategie.",
    schwerpunkte: ["Vermögensaufbau", "Liquidität", "Investmentstrategien", "Altersvorsorge"],
    kurse: ["steuerstrategie"],
    image: "/dozenten/sven-bendig.jpeg",
    placeholder: false,
  },
  {
    id: "patrick-starkmann",
    name: "Patrick Starkmann",
    role: "Solopreneurship & Business-Strategie",
    expertise: "Geschäftsmodelle, Positionierung, Skalierung",
    bio: "Unternehmer und Stratege mit Fokus auf Solopreneure. Entwickelt praxiserprobte Frameworks für nachhaltige Selbstständigkeit.",
    schwerpunkte: ["Business-Strategie", "Positionierung", "Skalierung", "Kundengewinnung"],
    kurse: ["solopreneur-freiheits-kompass"],
    image: "/dozenten/patrick-starkmann.jpeg",
    placeholder: false,
  },
  {
    id: "robin-bakir",
    name: "Robin Bakir",
    role: "KI-Automatisierung & Prozessdesign",
    expertise: "No-Code, KI-Assistenten, Workflow-Automatisierung",
    bio: "Automatisierungsexperte mit Fokus auf No-/Low-Code-Lösungen und KI-gestützte Workflows. Macht Digitalisierung für Nicht-Techniker greifbar.",
    schwerpunkte: ["No-/Low-Code", "KI-Assistenten", "Workflow-Automation", "Prozessdesign"],
    kurse: ["automatisierung-ki-kompass"],
    image: "/dozenten/robin-bakir.jpeg",
    placeholder: false,
  },
] as const;
