export type Lang = "de" | "he";

export const translations = {
  de: {
    // Hero
    heroEyebrow: "Die Alternative zur Agentur",
    heroLine1: "Adé Agentur.",
    heroLine2: "Willkommen, alle",
    heroLine3Accent: "Möglichkeiten.",
    heroSub:
      "Marketing, Vertrieb, Produkt, Prozesse – in Tagen, nicht Monaten. Mit Ihrem Team. Im eigenen Haus. Volle Kontrolle.",
    heroTrust: "Montag besprochen – Freitag live",
    ctaPrimary: "Gratisreport holen",
    ctaSecondary: "Erstgespräch buchen",

    // Shift
    shiftOldTitle: "So war es.",
    shiftOldText:
      "Idee. Briefing. Agentur-Auswahl. Kick-off. Rückfragen. Konzept. Revision. Revision. Revision. Abnahme. Go-Live drei Monate später. Budget weg. Know-how weg. Abhängigkeit bleibt.",
    shiftNewTitle: "So geht es jetzt.",
    shiftNewText:
      "Idee. Anforderung klären. Erste Version heute noch. Test. Feedback. Morgen besser. Freitag: live. Know-how sitzt im Team. Agentur kommt nur, wenn gebraucht.",

    // Outcomes
    outcomesTitle: "Sechs Felder.",
    outcomesSubtitle: "Was sich konkret ändert",
    outcomes: [
      { title: "Ihr Tempo", desc: "Ideen entstehen Freitag – Montag sind sie live. Keine Warteschlange, keine Agentur-Termine." },
      { title: "Volle Kontrolle", desc: "Alles bleibt im Haus. Kein Agentur-Pingpong. Sie sehen jeden Schritt." },
      { title: "Mehr Zeit", desc: "Weniger Abstimmungen. Weniger Schleifen. Weniger Meetings. Mehr echte Arbeit." },
      { title: "Kleines Team, großer Wurf", desc: "Fünf Menschen, hundert Möglichkeiten. Keine Zusatzpersonal nötig." },
      { title: "Sicherer treffen", desc: "Jede Idee wird geprüft, bevor sie teuer wird. Weniger Fehlentwicklungen." },
      { title: "Alles greift ineinander", desc: "Kundenreise, Seiten, Prozesse – kein Flickwerk mehr. Ein durchdachtes System." },
    ],

    // Stages
    stagesTitle: "Ihr Weg zu schnellerer Umsetzung.",
    stagesSubtitle: "Fünf Wege",
    stages: [
      {
        nr: "0",
        name: "Der Wegweiser",
        sub: "Gratisreport · kostenlos",
        nutzen: "Erkennen Sie, wo KI in Ihrem Haus wirkt",
        inhalte: ["KI-Hebel, die real greifen", "4 Einsatzfelder mit Nutzen", "10 Beispiele aus dem Mittelstand", "Ihr Selbstcheck"],
      },
      {
        nr: "1",
        name: "Ihr Fahrplan",
        sub: "Beratung · förderfähig",
        nutzen: "Der strategische Weg, der zu Ihnen passt",
        inhalte: ["Wo KI Ihre Zeit spart", "Top-3 bis Top-5 Hebel", "90-Tage-Fahrplan", "Förderung geklärt"],
      },
      {
        nr: "2",
        name: "Die Werkstatt",
        sub: "Offene Runden · wöchentlich",
        nutzen: "Von anderen lernen – und sofort anwenden",
        inhalte: ["Dienstag: Marketing-Zielseiten", "Freitag: Produkt & Digitales", "Live an echten Fällen", "Muster mitnehmen"],
      },
      {
        nr: "3",
        name: "Ihr Partner",
        sub: "Monatliche Begleitung",
        nutzen: "Jede Idee wird schneller real",
        inhalte: ["Zielseiten & Verkaufstexte", "Kundenpflege-Prozesse", "Digitale Abläufe", "Ihr Umsetzungspartner"],
      },
      {
        nr: "4",
        name: "Für das ganze Haus",
        sub: "Wöchentliche Begleitung · im Unternehmen",
        nutzen: "Das ganze Team arbeitet sicher mit KI",
        inhalte: ["Fester Wochentermin", "An echten Aufgaben arbeiten", "Ihre Playbooks", "Wissen, das bleibt"],
      },
    ],
    stageMore: "Mehr erfahren",

    // Features
    featuresTitle: "Zwölf Einsatzfelder.",
    featuresSubtitle: "Überall einsetzbar",
    features: [
      "Zielseiten", "Verkaufstexte", "Kundenreisen", "Kundenpflege",
      "Kampagnen", "Vertriebsprozesse", "Produktseiten", "Digitale Apps",
      "Interne Prozesse", "Anforderungsklärung", "Vorlagen", "Und mehr",
    ],

    // Comparison
    comparisonTitle: "Klassisch vs. Neu.",
    comparisonSubtitle: "Der Unterschied",
    comparison: [
      { label: "Das Problem", alt: "Tool-Schulung", neu: "Umsetzung echter Ziele" },
      { label: "Wer macht", alt: "Externe Agentur", neu: "Ihr Team + Begleitung" },
      { label: "Das Ergebnis", alt: "Abhängigkeit", neu: "Wissen im Haus" },
      { label: "Der Weg", alt: "Auftrag → Agentur → Schleifen", neu: "Idee → Klären → Testen → Live" },
      { label: "Die Zeit", alt: "Wochen bis Monate", neu: "Tage bis Wochen" },
    ],

    // FAQ
    faqTitle: "Häufig gefragt.",
    faqSubtitle: "Fragen",
    faqs: [
      { q: "Passt das auch zu unserer Größe?", a: "Ja. Relevant ist, dass Sie schneller und eigenständiger werden wollen. Größe ist nebensächlich." },
      { q: "Ist das ein Kurs?", a: "Nein. Nur echte Arbeit an Ihren Projekten. Lernen passiert dabei ganz von selbst." },
      { q: "Macht ihr die Arbeit?", a: "Nein. Wir machen Sie schneller und besser. Die Arbeit machen Sie selbst." },
      { q: "Unterschied zu Tool-Schulung?", a: "Schulungen zeigen Tools. Wir zeigen, wie Sie damit Zielseiten in zwei Tagen live bringen." },
      { q: "Ist die Beratung förderfähig?", a: "Ja – sofern Sie in Deutschland sind. Im kostenlosen Gespräch klären wir das sofort." },
    ],

    // Final CTA
    finalTitle: "Bereit?",
    finalSub: "Holen Sie sich kostenlos den Gratisreport – oder buchen Sie sofort ein unverbindliches Erstgespräch.",
    finalCta1: "Gratisreport jetzt",
    finalCta2: "Erstgespräch buchen",

    // Language switcher
    langSwitchLabel: "Sprache",
    langDe: "Deutsch",
    langHe: "עברית",
  },

  he: {
    // Hero
    heroEyebrow: "החלופה לסוכנות",
    heroLine1: "להתראות, סוכנות.",
    heroLine2: "ברוכים הבאים,",
    heroLine3Accent: "כל האפשרויות.",
    heroSub:
      "שיווק, מכירות, מוצר, תהליכים – בימים, לא בחודשים. עם הצוות שלכם. בבית שלכם. שליטה מלאה.",
    heroTrust: "נדון ביום שני – עולה לאוויר ביום שישי",
    ctaPrimary: "קבלו דוח חינם",
    ctaSecondary: "הזמינו שיחת ייעוץ",

    // Shift
    shiftOldTitle: "כך זה היה.",
    shiftOldText:
      "רעיון. תדריך. בחירת סוכנות. פגישת התנעה. שאלות. קונספט. תיקונים. תיקונים. תיקונים. אישור. עלייה לאוויר שלושה חודשים מאוחר יותר. התקציב נגמר. הידע נעלם. התלות נשארת.",
    shiftNewTitle: "כך זה עובד עכשיו.",
    shiftNewText:
      "רעיון. הבהרת דרישות. גרסה ראשונה עוד היום. בדיקה. משוב. מחר טוב יותר. יום שישי: באוויר. הידע נשאר בצוות. הסוכנות מגיעה רק כשצריך.",

    // Outcomes
    outcomesTitle: "שישה תחומים.",
    outcomesSubtitle: "מה משתנה בפועל",
    outcomes: [
      { title: "הקצב שלכם", desc: "רעיונות נולדים ביום שישי – ביום שני הם באוויר. בלי תור, בלי פגישות סוכנות." },
      { title: "שליטה מלאה", desc: "הכול נשאר בבית. בלי פינג-פונג עם הסוכנות. אתם רואים כל שלב." },
      { title: "יותר זמן", desc: "פחות תיאומים. פחות סבבי תיקונים. פחות ישיבות. יותר עבודה אמיתית." },
      { title: "צוות קטן, השפעה גדולה", desc: "חמישה אנשים, מאה אפשרויות. בלי צורך בכוח אדם נוסף." },
      { title: "לפגוע במטרה", desc: "כל רעיון נבדק לפני שהוא נהיה יקר. פחות כישלונות בפיתוח." },
      { title: "הכול מתחבר", desc: "מסע הלקוח, דפים, תהליכים – סוף לטלאים. מערכת מחושבת היטב." },
    ],

    // Stages
    stagesTitle: "הדרך שלכם ליישום מהיר יותר.",
    stagesSubtitle: "חמש דרכים",
    stages: [
      {
        nr: "0",
        name: "המדריך",
        sub: "דוח חינם · ללא עלות",
        nutzen: "גלו היכן AI באמת משפיע אצלכם",
        inhalte: ["מנופי AI שמניבים תוצאות", "4 תחומי שימוש עם ערך", "10 דוגמאות מעולם העסקים הבינוני", "מבדק עצמי"],
      },
      {
        nr: "1",
        name: "מפת הדרכים שלכם",
        sub: "ייעוץ · זכאי למימון",
        nutzen: "המסלול האסטרטגי שמתאים לכם",
        inhalte: ["היכן AI חוסך לכם זמן", "3 עד 5 מנופים מרכזיים", "תוכנית ל-90 יום", "מימון מוסדר"],
      },
      {
        nr: "2",
        name: "הסדנה",
        sub: "מפגשים פתוחים · שבועי",
        nutzen: "ללמוד מאחרים – וליישם מיד",
        inhalte: ["שלישי: דפי נחיתה לשיווק", "שישי: מוצר ודיגיטל", "עבודה חיה על מקרים אמיתיים", "דפוסים להטמעה"],
      },
      {
        nr: "3",
        name: "השותף שלכם",
        sub: "ליווי חודשי",
        nutzen: "כל רעיון מתממש מהר יותר",
        inhalte: ["דפי נחיתה וטקסטי מכירה", "תהליכי שירות לקוחות", "תהליכים דיגיטליים", "שותף היישום שלכם"],
      },
      {
        nr: "4",
        name: "לכל החברה",
        sub: "ליווי שבועי · בתוך הארגון",
        nutzen: "כל הצוות עובד בבטחה עם AI",
        inhalte: ["מפגש קבוע בכל שבוע", "עבודה על משימות אמיתיות", "הפלייבוקים שלכם", "ידע שנשאר"],
      },
    ],
    stageMore: "מידע נוסף",

    // Features
    featuresTitle: "שנים עשר תחומי שימוש.",
    featuresSubtitle: "ישים בכל מקום",
    features: [
      "דפי נחיתה", "טקסטי מכירה", "מסעות לקוח", "ניהול לקוחות",
      "קמפיינים", "תהליכי מכירה", "דפי מוצר", "אפליקציות דיגיטליות",
      "תהליכים פנימיים", "הבהרת דרישות", "תבניות", "ועוד",
    ],

    // Comparison
    comparisonTitle: "קלאסי מול חדש.",
    comparisonSubtitle: "ההבדל",
    comparison: [
      { label: "הבעיה", alt: "הדרכה על כלים", neu: "יישום יעדים אמיתיים" },
      { label: "מי מבצע", alt: "סוכנות חיצונית", neu: "הצוות שלכם + ליווי" },
      { label: "התוצאה", alt: "תלות", neu: "ידע בבית" },
      { label: "הדרך", alt: "הזמנה ← סוכנות ← סבבים", neu: "רעיון ← הבהרה ← בדיקה ← אוויר" },
      { label: "הזמן", alt: "שבועות עד חודשים", neu: "ימים עד שבועות" },
    ],

    // FAQ
    faqTitle: "שאלות נפוצות.",
    faqSubtitle: "שאלות",
    faqs: [
      { q: "מתאים גם לגודל שלנו?", a: "כן. מה שחשוב הוא שאתם רוצים להיות מהירים ועצמאיים יותר. הגודל משני." },
      { q: "האם זה קורס?", a: "לא. רק עבודה אמיתית על הפרויקטים שלכם. הלמידה קורית מעצמה." },
      { q: "אתם עושים את העבודה?", a: "לא. אנחנו הופכים אתכם למהירים וטובים יותר. את העבודה אתם עושים בעצמכם." },
      { q: "מה ההבדל מהדרכה על כלים?", a: "הדרכות מלמדות כלים. אנחנו מראים איך לבנות דפי נחיתה בשני ימים." },
      { q: "האם הייעוץ זכאי למימון?", a: "כן – אם אתם בגרמניה. בשיחה החינמית נבהיר זאת מיד." },
    ],

    // Final CTA
    finalTitle: "מוכנים?",
    finalSub: "קבלו בחינם את הדוח – או הזמינו מיד שיחת ייעוץ ראשונה ללא התחייבות.",
    finalCta1: "קבלו דוח חינם",
    finalCta2: "הזמינו שיחה",

    // Language switcher
    langSwitchLabel: "שפה",
    langDe: "Deutsch",
    langHe: "עברית",
  },
} as const;
