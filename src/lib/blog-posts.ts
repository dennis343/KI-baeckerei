/**
 * WissensReich Academy — Blog Content
 *
 * Statische Blog-Artikel als zentrale Datenquelle.
 * Später ersetzbar durch CMS/Supabase — Schnittstelle bleibt gleich.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  tags: ReadonlyArray<string>;
  readingTime: string;
};

export const BLOG_POSTS: ReadonlyArray<BlogPost> = [
  {
    slug: "kompass-foerderung-solopreneure",
    title: "KOMPASS-Förderung 2025: Was Solopreneure wissen müssen",
    excerpt:
      "Bis zu 90 % Zuschuss für Ihre Weiterbildung — wir erklären, wer KOMPASS nutzen kann, wie der Antrag funktioniert und welche Fristen gelten.",
    content: `Die KOMPASS-Förderung ist eines der attraktivsten Programme für Solopreneure und Selbstständige in Deutschland. Mit bis zu 90 % Zuschuss auf die Kursgebühren ermöglicht das ESF-geförderte Programm hochwertige Weiterbildung, die sonst oft am Budget scheitert.

## Wer kann KOMPASS nutzen?

KOMPASS richtet sich an Solo-Selbstständige, Freiberufler und Kleinstunternehmer mit maximal einem Angestellten. Die wichtigsten Voraussetzungen:

- Hauptwohnsitz in Deutschland
- Selbstständige Tätigkeit als Haupterwerb
- Jahreseinkommen unter der jeweils geltenden Grenze
- Keine laufende Insolvenz

## So funktioniert der Antrag

Der Antragsprozess gliedert sich in drei Schritte:

1. **Bildungsbedarfsanalyse** — Gemeinsam klären wir, welche Weiterbildung Ihren unternehmerischen Zielen dient.
2. **Antragsstellung** — Unser Concierge-Service unterstützt Sie bei der vollständigen Dokumentation.
3. **Bewilligung & Start** — Nach positiver Prüfung durch die zuständige Stelle beginnen Sie Ihre Weiterbildung.

## Warum WissensReich Academy?

Als AZAV-zertifizierter Bildungsträger sind unsere Kurse für KOMPASS zugelassen. Unser Concierge-Service begleitet Sie durch den gesamten Förderprozess — von der ersten Frage bis zur Abrechnung.`,
    publishedAt: "2025-03-15",
    author: "WissensReich Academy",
    tags: ["KOMPASS", "Förderung", "Solopreneure"],
    readingTime: "4 Min.",
  },
  {
    slug: "avgs-massnahmen-erklaert",
    title: "AVGS-Maßnahmen erklärt: Ihr Weg zur geförderten Weiterbildung",
    excerpt:
      "Was ist ein Aktivierungs- und Vermittlungsgutschein, wer bekommt ihn und welche Maßnahmen bietet WissensReich Academy an? Ein klarer Überblick.",
    content: `Der Aktivierungs- und Vermittlungsgutschein (AVGS) nach §45 SGB III ist eines der wichtigsten Instrumente zur beruflichen Eingliederung. Er ermöglicht Arbeitssuchenden den Zugang zu hochwertiger Weiterbildung — vollständig finanziert durch die Agentur für Arbeit oder das Jobcenter.

## Was ist ein AVGS?

Ein AVGS ist ein Gutschein, den Ihr Jobcenter oder Ihre Agentur für Arbeit ausstellt. Er deckt die vollständigen Kosten einer zugelassenen Maßnahme ab. Sie zahlen nichts.

## Unsere AVGS-Maßnahmen

WissensReich Academy bietet zwei zertifizierte AVGS-Maßnahmen:

### Inkasso-Sachkunde nach RDV §4
- **Dauer:** 6 Wochen, 150 Zeitstunden
- **Format:** Hybrid (Präsenz + Online)
- **Teilnehmende:** max. 12 Personen
- **Abschluss:** Sachkundenachweis nach RDV §4

### Businessplan-Werkstatt
- **Dauer:** 4 Wochen, 120 Zeitstunden
- **Format:** Vollzeit-Gruppe
- **Rechtsgrundlage:** §45 SGB III

## So erhalten Sie Ihren AVGS

1. Sprechen Sie mit Ihrer Arbeitsvermittlung über Ihren Weiterbildungswunsch.
2. Beantragen Sie einen AVGS für eine unserer Maßnahmen.
3. Kontaktieren Sie uns — unser Concierge-Service übernimmt den Rest.`,
    publishedAt: "2025-02-20",
    author: "WissensReich Academy",
    tags: ["AVGS", "SGB III", "Weiterbildung"],
    readingTime: "5 Min.",
  },
  {
    slug: "concierge-service-vs-bildungsberatung",
    title: "Concierge-Service vs. Bildungsberatung: Der Unterschied",
    excerpt:
      "Bildungsberatung gibt Orientierung. Unser Concierge-Service geht weiter — er begleitet den gesamten Prozess. Hier erklären wir, was das konkret bedeutet.",
    content: `Viele Bildungsanbieter bieten Beratung an. Das ist gut und wichtig. Aber Beratung allein löst nicht die Probleme, die zwischen „Ich möchte eine Weiterbildung machen" und „Ich habe meinen Abschluss" liegen.

## Was klassische Bildungsberatung leistet

- Orientierung über verfügbare Angebote
- Einschätzung von Fördermöglichkeiten
- Empfehlung passender Kurse

Das ist wertvoll — und in der Regel dort endet es.

## Was unser Concierge-Service zusätzlich bietet

Der Concierge-Service von WissensReich Academy geht bewusst weiter:

1. **Förderantrag** — Wir unterstützen bei der vollständigen Antragsstellung (KOMPASS, AVGS, Bildungsgutschein).
2. **Dokumentation** — Alle erforderlichen Nachweise werden strukturiert zusammengestellt.
3. **Koordination** — Wir halten Kontakt zu Behörden, Kostenträgern und Dozenten.
4. **Begleitung** — Vom ersten Gespräch bis zum Abschluss haben Sie einen festen Ansprechpartner.
5. **Transparenz** — Kein Schritt passiert ohne Ihr Wissen und Ihre Zustimmung.

## Wichtig: Was der Concierge-Service nicht ist

Strukturierung ja. Vorentscheidung nein. Der Concierge-Service ist keine Entscheidungsinstanz, umgeht keine öffentlichen Stellen und greift nicht in die neutrale Einzelfallprüfung ein.`,
    publishedAt: "2025-01-10",
    author: "WissensReich Academy",
    tags: ["Concierge-Service", "Bildungsberatung", "Prozess"],
    readingTime: "4 Min.",
  },
  {
    slug: "haeufige-fragen-weiterbildung",
    title:
      "Häufige Fragen zur geförderten Weiterbildung — Ihre Bedenken, unsere Antworten",
    excerpt:
      "Ist die Förderung wirklich kostenlos? Wie lange dauert die Bewilligung? Wir beantworten die häufigsten Fragen und räumen typische Bedenken aus.",
    content: `Sie interessieren sich für eine geförderte Weiterbildung, haben aber noch offene Fragen? Das ist völlig normal. Hier beantworten wir die häufigsten Bedenken, die uns im Beratungsgespräch begegnen.

## Ist die Förderung wirklich kostenlos für mich?

Ja — bei vielen Förderprogrammen (AVGS, Bildungsgutschein) übernimmt der Kostenträger 100 % der Maßnahmekosten. Bei KOMPASS (ESF) werden bis zu 90 % gefördert, der verbleibende Eigenanteil liegt je nach Einkommen bei 10 %. In beiden Fällen: Sie investieren Ihre Zeit, nicht Ihr Erspartes.

## Was passiert, wenn mein Förderantrag abgelehnt wird?

Eine Ablehnung ist keine Sackgasse. Häufige Gründe sind formale Fehler oder fehlende Unterlagen. Unser Concierge-Service prüft Ihren Antrag vor Einreichung auf Vollständigkeit, was die Bewilligungsquote deutlich erhöht. Sollte es dennoch zu einer Ablehnung kommen, besprechen wir gemeinsam die nächsten Schritte — etwa einen Widerspruch oder alternative Förderwege.

## Wie lange dauert die Bewilligung?

Die Bearbeitungszeit variiert je nach Kostenträger und Programm:

- **AVGS:** In der Regel 1–4 Wochen nach Antragstellung
- **KOMPASS (ESF):** Durchschnittlich 2–6 Wochen
- **Bildungsgutschein:** Häufig innerhalb von 2–3 Wochen

Unser Concierge-Service hilft, den Prozess durch vollständige und korrekte Unterlagen zu beschleunigen.

## Kann ich die Weiterbildung neben dem Job machen?

Das hängt vom konkreten Kursformat ab. Einige unserer Maßnahmen sind als Vollzeit-Kurse konzipiert (z. B. AVGS-Maßnahmen), andere bieten flexible Zeiteinteilung. Im Erstgespräch klären wir, welches Format zu Ihrer Lebenssituation passt.

## Was unterscheidet WissensReich von anderen Anbietern?

Drei Dinge machen uns anders:

1. **Concierge-Service:** Wir begleiten Sie nicht nur inhaltlich, sondern auch durch den gesamten Förderprozess — von der Antragstellung bis zur Abrechnung.
2. **Praxisnähe:** Unsere Dozenten kommen direkt aus der Praxis, nicht aus dem Elfenbeinturm.
3. **Persönliche Begleitung:** Kleine Gruppen, feste Ansprechpartner, keine Massenabfertigung.

## Bin ich für eine Förderung überhaupt berechtigt?

Die Berechtigung hängt von Ihrer individuellen Situation ab. Als Faustregel:

- **Arbeitssuchend?** → AVGS oder Bildungsgutschein über Jobcenter/Agentur für Arbeit
- **Solo-Selbstständig?** → KOMPASS (ESF) mit bis zu 90 % Zuschuss
- **Angestellt?** → Bildungsgutschein oder Qualifizierungschancengesetz (QCG)

Nutzen Sie unser kostenloses Erstgespräch, um Ihre Optionen zu besprechen. Es verpflichtet Sie zu nichts.`,
    publishedAt: "2025-04-05",
    author: "WissensReich Academy",
    tags: ["FAQ", "Förderung", "Weiterbildung", "AVGS", "KOMPASS"],
    readingTime: "6 Min.",
  },
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
