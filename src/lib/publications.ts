/**
 * WissensReich Academy — Wissenschaftliche & Presse-Veröffentlichungen
 *
 * Strukturierte Datenquelle für Fachveröffentlichungen (Konferenzen,
 * Journals, Bücher) und Presseartikel.
 */

export type Fachveroeffentlichung = {
  slug: string;
  title: string;
  authors: ReadonlyArray<string>;
  conference: string;
  conferenceShort?: string;
  year: number;
  publisher: string;
  isbn?: string;
  doi?: string;
  url: string;
  abstract: string;
  context: string;
  tags: ReadonlyArray<string>;
};

export type Presseartikel = {
  slug: string;
  title: string;
  outlet: string;
  publishedAt: string;
  excerpt: string;
  url: string;
  type: "Print" | "Online" | "Podcast" | "Radio" | "TV";
};

export const FACHVEROEFFENTLICHUNGEN: ReadonlyArray<Fachveroeffentlichung> = [
  {
    slug: "ahfe-2025-bildung-foerderung-concierge",
    title:
      "Concierge-Service als Brücke zwischen Bildung, Förderung und Mensch — eine fallbasierte Betrachtung aus der deutschen Weiterbildungspraxis",
    authors: ["Hermann Fürstenau", "Florian Domin"],
    conference:
      "AHFE International — 16th International Conference on Applied Human Factors and Ergonomics",
    conferenceShort: "AHFE 2025",
    year: 2025,
    publisher: "AHFE Open Access · AHFE International",
    isbn: "978-1-964867-77-9",
    url: "https://openaccess.cms-conferences.org/publications/book/978-1-964867-77-9/article/978-1-964867-77-9_59",
    abstract:
      "Der Beitrag untersucht, wie ein dedizierter Concierge-Service die Lücke zwischen formalen Förderverfahren (AZAV/AVGS, KOMPASS, Qualifizierungschancengesetz) und der individuellen Bildungsbiografie schließen kann. Auf Basis von Praxisfällen aus der WissensReich Academy werden Strukturen, Rollen und Prozesse beschrieben, die Bewilligungsquoten messbar erhöhen und Teilnehmende spürbar entlasten.",
    context:
      "Die AHFE International ist eine der weltweit führenden interdisziplinären Konferenzen zu angewandten Human Factors, Ergonomie und arbeitsbezogener Bildung. Die Tagungsreihe vereint jährlich über 4.000 Wissenschaftler:innen und Praktiker:innen aus mehr als 80 Ländern. Die Open-Access-Reihe wird in englischer Sprache publiziert und ist u. a. in Scopus indexiert.",
    tags: ["Concierge-Service", "Förderung", "Weiterbildung", "Human Factors"],
  },
];

export const PRESSEARTIKEL: ReadonlyArray<Presseartikel> = [
  // Platzhalter — befüllen, sobald Belegexemplare/Permalinks vorliegen.
];

export function getFachveroeffentlichung(
  slug: string,
): Fachveroeffentlichung | undefined {
  return FACHVEROEFFENTLICHUNGEN.find((p) => p.slug === slug);
}
