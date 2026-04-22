import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/utils";
import { ApplyForm } from "./ApplyForm";
import { ArrowRight, Check, Lightbulb, Zap, Target, Shield } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "In 4 Wochen zur eigenen digitalen Umsetzungsfabrik",
  description:
    "Ideen, Anforderungen, Inhalte, Prozesse und digitale Lösungen in Rekordzeit umsetzen – ohne Agentur-Schleifen und Wartezeiten.",
  path: "/ki-umsetzung",
});

export default function KiUmsetzungPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Unternehmen", href: "/unternehmen" },
          { name: "KI-Umsetzung", href: "/ki-umsetzung" },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "In 4 Wochen zur eigenen digitalen Umsetzungsfabrik",
          description:
            "Digitales Kleingruppenformat zur Aufbau einer eigenen digitalen Umsetzungsfabrik in 4 Wochen.",
          provider: {
            "@type": "Organization",
            name: "WissensReich Academy",
            url: SITE_URL,
          },
          duration: "P4W",
          courseMode: "Online",
          learningResourceType: "Live Training",
          numberOfCredits: 8,
          offers: {
            "@type": "Offer",
            price: "1990",
            priceCurrency: "EUR",
            url: SITE_URL + "/ki-umsetzung",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Für wen ist dieses Programm gedacht?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Das Programm ist ideal für Unternehmen, Selbstständige, Fachkräfte und Angestellte, die ihre Fachkompetenz mit einem digitalen Zweitsystem vervielfachen wollen.",
              },
            },
            {
              "@type": "Question",
              name: "Was passiert in den 4 Wochen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sie bauen ein arbeitsfähiges digitales Zweitsystem auf. Mit 8 Live-Terminen (2 pro Woche) lernen Sie, Ideen schneller in Struktur, Entwurf und testbare Ergebnisse zu übersetzen.",
              },
            },
            {
              "@type": "Question",
              name: "Muss ich technische Vorkenntnisse haben?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein. Sie verstehen jeden Baustein über seinen Nutzen, nicht über technische Sprache. Wichtig ist Ihre Fachkompetenz und der Wille, schneller umzusetzen.",
              },
            },
            {
              "@type": "Question",
              name: "Kann ich das Programm auch einzeln machen?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Das Programm ist bewusst als Kleingruppe gestaltet. Sie profitieren von gemeinsamem Lernen, konkreten Beispielen anderer Teilnehmer und gegenseitiger Motivation.",
              },
            },
            {
              "@type": "Question",
              name: "Was kostet das Programm?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Das Programm kostet 1.990 € (Einführungspreis). Zusätzlich gibt es optionale Einstiegswege: Beratungsanamnese (3.500 € für Unternehmen) oder Einstiegsanalyse (490 €).",
              },
            },
          ],
        }}
      />

      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium tracking-wide text-white/60 uppercase mb-12">
            4-Wochen-Programm · digitales Kleingruppenformat
          </p>

          <h1 className="text-[clamp(3rem,12vw,7rem)] font-serif font-bold leading-[1] tracking-tight text-white mb-8">
            In 4 Wochen zur eigenen digitalen Umsetzungsfabrik.
          </h1>

          <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-serif font-bold leading-[1.2] tracking-tight text-white mb-12 text-white/80 font-light">
            Ideen, Anforderungen, Inhalte, Prozesse und digitale Lösungen in Rekordzeit umsetzen – ohne
            Agentur-Schleifen, Abstimmungsmarathons und Wartezeiten.
          </h2>

          <p className="text-base text-white/60 mb-16">
            Für Unternehmen, Selbstständige, Fachkräfte und Angestellte, die ihre Fachkompetenz nicht ersetzen,
            sondern mit einem starken digitalen Zweitsystem vervielfachen wollen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#bewerbung"
              className="px-8 h-12 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition flex items-center gap-2"
            >
              Jetzt bewerben
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#bewerbung"
              className="px-8 h-12 rounded-lg border border-white/30 text-white text-sm font-semibold hover:border-white transition"
            >
              Quickcheck starten
            </a>
          </div>

          <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
            <span className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-400" />
              8 Live-Termine · 2 pro Woche · Kleingruppe
            </span>
          </p>
        </div>
      </section>

      {/* ───────────── THE PROBLEM ───────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-8">
            Sie haben nicht zu wenig Ideen.
          </h2>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-brand-600 leading-tight mb-16">
            Sie verlieren nur zu viel Zeit zwischen Idee und Ergebnis.
          </p>

          <div className="space-y-6 mb-16">
            {[
              "Gedanken sind da, aber unscharf",
              "Anforderungen werden zu spät konkret",
              "Externe Dienstleister müssen erst verstehen, was gemeint ist",
              "Interne Teams brauchen Rückfragen, Meetings und Korrekturrunden",
              "Aus einfachen Vorhaben werden lange Abstimmungsschleifen",
              "Gute Ideen verlieren Energie, bevor überhaupt etwas Sichtbares entsteht",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-3 flex-shrink-0" />
                <p className="text-lg text-black/70 font-light">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-black/10 pt-12">
            <p className="text-lg text-black/70 font-light mb-4">
              <strong className="text-black">Genau das ist der eigentliche Schaden.</strong>
            </p>
            <p className="text-lg text-black/70 font-light mb-6">
              Nicht fehlende Kreativität. Nicht fehlende Kompetenz.
            </p>
            <p className="text-2xl font-serif font-bold text-black">
              Sondern verlorene Zeit, verlorene Geschwindigkeit und verlorene Wirkung.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── THE CORE MESSAGE ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20">
            <p className="text-sm text-white/50 uppercase tracking-widest font-semibold mb-4">
              Die Lösung
            </p>
            <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight mb-8">
              Ihre Fachkompetenz ist der Rohstoff.
            </h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-brand-400 leading-tight">
              Das System ist der Verstärker.
            </p>
          </div>

          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-16 font-light">
            Menschen mit echter Erfahrung, echtem Marktverständnis, fachlicher Tiefe und Urteilsvermögen werden
            durch dieses Programm nicht ersetzt. Sie werden wirksamer. Deutlich wirksamer.
          </p>

          <p className="text-base text-white/60 font-light mb-12">
            Denn plötzlich wird aus Wissen nicht nur ein Gedanke oder ein Konzept, sondern in sehr kurzer Zeit
            zum Beispiel:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Eine überzeugende Angebotsseite",
              "Eine durchdachte Customer Journey",
              "Eine funktionierende Buchungslogik",
              "Ein digitaler Prototyp",
              "Eine interne Prozessstruktur",
              "Ein Newsletter- oder Follow-up-System",
              "Eine erste App oder nutzbare Anwendungsoberfläche",
              "Eine klarere und stärkere digitale Präsenz",
            ].map((item, i) => (
              <div key={i} className="border border-white/20 rounded-lg p-5">
                <p className="text-sm font-light text-white leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-brand-400 font-light mt-16">
            Nicht nach Monaten. Nicht nach endlosen Briefings.<br />
            Sondern in einer Geschwindigkeit, die vorher oft undenkbar war.
          </p>
        </div>
      </section>

      {/* ───────────── WHAT YOU GAIN ───────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-16">
            Was Sie damit gewinnen.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Sie können selbst umsetzen</h3>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Was früher an Agenturen, Entwickler, Designer oder große Teams gebunden war, wird für Sie deutlich
                zugänglicher.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Sie können schneller umsetzen</h3>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Zwischen Idee, Struktur, Entwurf und Verbesserung liegt viel weniger Reibung.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Sie bekommen bessere Ergebnisse</h3>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Mehr Varianten, mehr Tiefe, mehr Funktionen und mehr Verbesserungen in derselben Zeit.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Sie verlieren weniger Zeit</h3>
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Statt Zeit zwischen Beteiligten zu verlieren, verdichten Sie Zeit zu Ergebnissen.
              </p>
            </div>
          </div>

          <div className="border-t border-black/10 mt-16 pt-16">
            <p className="text-center text-2xl font-serif font-bold text-black leading-tight">
              Nicht mehr Zeit verlieren.<br />
              <span className="text-brand-600">Sondern Zeit einsacken.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── THE NEW REALITY ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight mb-16">
            So sieht der Unterschied aus.
          </h2>

          <div className="space-y-16">
            {[
              {
                title: "Szene 1: Die Sprachnachricht",
                desc: "Sie sprechen morgens zwei Sprachnachrichten ein. Daraus entsteht innerhalb kurzer Zeit: eine saubere Struktur für eine neue Homepage, eine schlüssige Customer Journey, eine Buchungsfunktion, eine Newsletter-Logik, eine erste mobile Optimierung, ein Teststand.",
              },
              {
                title: "Szene 2: Der Termin",
                desc: "Sie sitzen in einem Gespräch oder Workshop – und statt nur über eine App-Idee zu reden, liegt noch während oder kurz nach dem Termin bereits ein erster nutzbarer Stand vor, den man ansehen, prüfen und weiterentwickeln kann.",
              },
              {
                title: "Szene 3: Die Vermarktung",
                desc: "Sie wollen ein Angebot besser vermarkten – und statt Wochen auf Grafiken, Seitenentwürfe und Freigaben zu warten, entstehen zügig erste überzeugende Ergebnisse, die getestet und geschärft werden können.",
              },
              {
                title: "Szene 4: Der Prototyp",
                desc: "Sie möchten Menschen überzeugen, obwohl eine Lösung noch nicht komplett gebaut ist – und haben trotzdem bereits überzeugende Vorstufen, Vorschauen oder Prototypen, mit denen Sie sichtbar machen können, was später real wird.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/20 pb-12 last:border-0">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white/5 rounded-lg border border-white/10">
            <p className="text-center text-xl font-light text-white leading-relaxed">
              <strong>Genau das ist der Punkt dieses Programms:</strong> Sie bauen eine eigene digitale
              Umsetzungsfabrik auf, mit der Ideen sehr viel schneller in wirksame Realität überführt werden.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── TARGET AUDIENCE ───────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            Für wen dieses Programm gemacht ist.
          </h2>

          <div className="bg-black text-white rounded-lg p-8 mb-16">
            <p className="text-center text-xl font-light leading-relaxed">
              <strong>Fachkompetenz + digitales Zweitsystem = deutlich mehr Wirkung</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Unternehmen, die schneller verkaufen, kommunizieren und digital umsetzen wollen",
              "Selbstständige, die mit kleinem Team deutlich mehr schaffen wollen",
              "Angestellte und Fachkräfte, die in ihrem Job wirksamer, schneller und wertvoller werden wollen",
              "Teams, die von besseren Briefings, klareren Strukturen und schnellerer Umsetzung profitieren wollen",
              "Menschen, die nicht auf den nächsten externen Dienstleister warten wollen",
              "Alle, die echte Umsetzungsfähigkeit aufbauen möchten – statt nur Wissen zu erwerben",
            ].map((item, i) => (
              <div key={i} className="border border-black/10 rounded-lg p-6">
                <p className="text-base text-black/70 font-light leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── APPLICATION FIELDS ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight mb-12">
            Was Sie damit umsetzen können.
          </h2>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-light mb-16">
            Dieses Programm ist nicht auf "Webseite bauen" reduziert. Es betrifft nahezu alle Bereiche, in denen
            Ideen digital sichtbar, prüfbar oder nutzbar gemacht werden müssen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Digitale Präsenz und Angebotswirkung",
                items: ["Homepages", "Landingpages", "Angebotsseiten", "Positionierungsseiten"],
              },
              {
                title: "Kundengewinnung und Kundenbindung",
                items: ["Follow-up-Strecken", "Newsletter-Logiken", "Nurturing-Prozesse", "Kundenreisen"],
              },
              {
                title: "Produkt- und Serviceentwicklung",
                items: ["Schnelle Prototypen", "Digitale Anwendungen", "App-nahe Lösungen", "Helfersysteme"],
              },
              {
                title: "Interne Prozesse und Strukturen",
                items: ["Dokumentation", "Standardabläufe", "Wissensaufbereitung", "Prozessbeschleunigung"],
              },
            ].map((cat, i) => (
              <div key={i} className="border-l border-brand-400 pl-6">
                <h3 className="text-xl font-serif font-bold text-white mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-white/70 font-light flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── THE 4 WEEKS ───────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-4">
            Was in 4 Wochen entsteht.
          </h2>
          <p className="text-sm text-black/50 uppercase tracking-wide mb-16 font-medium">
            8 Live-Termine · 2 pro Woche · Aufbaulogik
          </p>

          <div className="space-y-12">
            {[
              {
                week: "Woche 1",
                title: "Verstehen, einordnen, aufsetzen",
                desc: "Sie verstehen die Gesamtlogik und richten Ihr Grundsystem so ein, dass es arbeitsfähig wird.",
                meaning: "Sie verlieren nicht mehr Zeit, weil alles unverbunden, chaotisch oder unklar ist. Sie schaffen eine Grundlage, mit der Ihre Ideen überhaupt erst sauber Fahrt aufnehmen können.",
              },
              {
                week: "Woche 2",
                title: "Anforderungen verdichten und in Strukturen übersetzen",
                desc: "Sie lernen, wie aus Gedanken, Sprachnachrichten und Fachwissen belastbare Anforderungen und digitale Entwürfe werden.",
                meaning: "Sie müssen nicht länger hoffen, dass andere schon verstehen, was Sie meinen. Sie bringen Ihre Ideen selbst in eine Form, die direkt weiterverarbeitet werden kann.",
              },
              {
                week: "Woche 3",
                title: "Ergebnisse sichtbar machen und verbessern",
                desc: "Sie erleben, wie aus Struktur reale Vorstufen, Prototypen und erste testbare Ergebnisse entstehen.",
                meaning: "Sie reden nicht länger nur über Möglichkeiten. Sie kommen in einen Zustand, in dem man Dinge wirklich sehen, prüfen und schärfen kann.",
              },
              {
                week: "Woche 4",
                title: "System festigen und produktiv nutzbar machen",
                desc: "Sie finalisieren Ihr persönliches Grundsystem und definieren, wie Sie damit im Alltag arbeiten.",
                meaning: "Sie gehen nicht mit ein paar Notizen heraus, sondern mit einer arbeitsfähigen Struktur, die Sie sofort weiter nutzen können.",
              },
            ].map((w, i) => (
              <div key={i} className="border-b border-black/10 pb-12 last:border-0">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-xs text-brand-600 font-bold uppercase tracking-widest">{w.week}</span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">{w.title}</h3>
                </div>
                <p className="text-lg text-black/70 font-light mb-6">{w.desc}</p>
                <div className="bg-black/5 rounded p-4">
                  <p className="text-base text-black/70 font-light italic">
                    <strong>Das bedeutet für Sie:</strong> {w.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── OLD vs NEW ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight mb-16">
            Von der alten zur neuen Logik.
          </h2>

          <div className="space-y-8">
            {[
              { old: "Warten", new: "Idee erfassen" },
              { old: "Erklären", new: "Richtung vorgeben" },
              { old: "Neu erklären", new: "Entwurf erhalten" },
              { old: "Korrigieren", new: "Testen" },
              { old: "Abstimmen", new: "Verbessern" },
              { old: "Erneut warten", new: "Weiter ausbauen" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/20 last:border-0">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-2">Alt</p>
                  <p className="text-2xl font-serif font-bold text-white/60">{item.old}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-2">Neu</p>
                  <p className="text-2xl font-serif font-bold text-brand-400">{item.new}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── RESULTS ───────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            Das Ergebnis nach 4 Wochen.
          </h2>

          <div className="space-y-4 mb-16">
            {[
              "Eine eigene digitale Umsetzungsfabrik als Grundsystem",
              "Deutlich mehr Sicherheit im Umgang mit moderner digitaler Umsetzung",
              "Schnellere Wege von der Idee zum sichtbaren Ergebnis",
              "Mehr Eigenständigkeit statt externer Abhängigkeit",
              "Bessere Resultate in kürzerer Zeit",
              "Neue Form von kreativer und operativer Freiheit",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-black/5 rounded">
                <Check className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-black/70 font-light">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-black/10 pt-12">
            <p className="text-xl font-light text-black/70 mb-6">Sie sind danach in der Lage,</p>
            <ul className="space-y-3">
              {[
                "Ideen erstmalig selbst deutlich weiterzutreiben",
                "Vorhaben schneller sicht- und testbar zu machen",
                "Digitale Lösungen früher und besser zu denken",
                "Ihre Fachkompetenz in deutlich kürzerer Zeit in reale Ergebnisse zu übersetzen",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70 font-light">
                  <ArrowRight className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── WHY STRONG ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight mb-16">
            Warum dieses Programm so stark wirkt.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Es schafft Eigenständigkeit",
                desc: "Sie bauen Fähigkeiten auf, mit denen Sie Vorhaben künftig deutlich selbstständiger anschieben können.",
              },
              {
                title: "Es schafft Beschleunigung",
                desc: "Sie verkürzen die Strecke zwischen Idee, Anforderung, Entwurf, Test und Verbesserung erheblich.",
              },
              {
                title: "Es schafft Ergebnisqualität",
                desc: "Mehr Varianten, mehr Tiefe, mehr Funktionen und bessere Vorstufen in derselben Zeit.",
              },
              {
                title: "Es schafft Sicherheit und Klarheit",
                desc: "Das System wird bewusst auf Ihren Anwendungsfall ausgerichtet – mit sauberer Struktur und klarer Handhabung.",
              },
              {
                title: "Es schafft Zukunftsfähigkeit",
                desc: "Sie bauen eine neue Form von Umsetzungsfähigkeit auf, die weit über den Kurs hinaus nutzbar bleibt.",
              },
            ].map((item, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <h3 className="text-xl font-serif font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-12">
            <p className="text-center text-xl font-light text-white/80 leading-relaxed">
              <strong>Dieses Programm ist stark,</strong> weil es nicht nur erklärt, was möglich ist, sondern weil es
              den Teilnehmern die Fähigkeit gibt, Dinge künftig schneller und besser real werden zu lassen.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── FORMAT & FACTS ───────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            Format & Eckdaten.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-black/10 rounded-lg p-8">
              <h3 className="text-sm text-brand-600 font-bold uppercase tracking-widest mb-6">Dauer & Rhythmus</h3>
              <ul className="space-y-4 text-black/70 font-light">
                <li className="flex justify-between"><span>Laufzeit</span><strong className="text-black">4 Wochen</strong></li>
                <li className="flex justify-between"><span>Gruppengröße</span><strong className="text-black">Kleingruppe</strong></li>
                <li className="flex justify-between"><span>Rhythmus</span><strong className="text-black">2 Termine/Woche</strong></li>
                <li className="flex justify-between"><span>Termine insgesamt</span><strong className="text-black">8 Live-Sessions</strong></li>
              </ul>
            </div>

            <div className="border border-black/10 rounded-lg p-8">
              <h3 className="text-sm text-brand-600 font-bold uppercase tracking-widest mb-6">Terminstruktur</h3>
              <ul className="space-y-4 text-black/70 font-light">
                <li className="flex justify-between"><span>Call 1</span><strong className="text-black">Impuls-Call 60 min</strong></li>
                <li className="flex justify-between"><span>Call 2</span><strong className="text-black">Umsetzungs-Call 90 min</strong></li>
                <li className="flex justify-between"><span>Format</span><strong className="text-black">Digitales Live-Format</strong></li>
                <li className="flex justify-between"><span>Fokus</span><strong className="text-black">Praxisbezug & Live-Arbeit</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-black/5 rounded-lg p-8 border border-black/10">
            <p className="text-black/70 font-light leading-relaxed">
              <strong>Warum dieses Format:</strong> Die Kleingruppe sorgt dafür, dass der Kurs nicht in allgemeiner
              Theorie stecken bleibt. Sie profitieren von direkter Relevanz, echtem Lernen, Praxisnähe, konkreten
              Beispielen und gegenseitiger Motivation – ohne dabei in Anonymität zu verschwinden.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── INVESTMENT PATHS ───────────── */}
      <section className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight mb-12">
            Zwei Einstiegswege.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="border border-white/20 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold text-white mb-2">Für Unternehmen</h3>
              <p className="text-sm text-white/60 mb-6">Geförderte Beratungsanamnese</p>
              <p className="text-4xl font-serif font-bold text-brand-400 mb-2">3.500 €</p>
              <p className="text-xs text-white/50 mb-6">netto • 50–80% gefördert</p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  Status quo Analyse
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  Hebel & Potenziale
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  Priorisierung
                </li>
              </ul>
              <a href="#bewerbung" className="text-sm text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1">
                Informieren <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-white/20 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold text-white mb-2">Für Nicht-Unternehmen</h3>
              <p className="text-sm text-white/60 mb-6">Kompakte Einstiegsanalyse</p>
              <p className="text-4xl font-serif font-bold text-brand-400 mb-2">490 €</p>
              <p className="text-xs text-white/50 mb-6">netto</p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  Ausgangslage klären
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  Anwendungsfelder
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  Klarheit & Startpunkt
                </li>
              </ul>
              <a href="#bewerbung" className="text-sm text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1">
                Informieren <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="border border-brand-400 rounded-lg p-8 bg-brand-400/5">
              <h3 className="text-xl font-serif font-bold text-white mb-2">Das Programm selbst</h3>
              <p className="text-sm text-white/60 mb-6">Digitale Umsetzungsfabrik</p>
              <p className="text-4xl font-serif font-bold text-brand-400 mb-2">1.990 €</p>
              <p className="text-xs text-white/50 mb-6">netto • Einführungspreis</p>
              <ul className="space-y-3 text-sm text-white/70 font-light mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  8 Live-Termine
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  Arbeitsfähiges System
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  Nutzbar danach
                </li>
              </ul>
              <a href="#bewerbung" className="text-sm text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1">
                Jetzt bewerben <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 pt-16">
            <h3 className="text-2xl font-serif font-bold text-white mb-8">Nach dem Programm: Umsetzungswerkstatt</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Für Teilnehmer, die ihr aufgebautes Grundsystem nicht liegen lassen, sondern an konkreten Vorhaben
                weiter schärfen und mit Expertenbegleitung ausbauen möchten.
              </p>
              <div>
                <p className="text-4xl font-serif font-bold text-brand-400 mb-2">999 €</p>
                <p className="text-white/60 text-sm">pro Monat · 1 Umsetzungs-Call (bis 2h)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            Häufige Fragen.
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Muss ich technische Vorkenntnisse haben?",
                a: "Nein. Sie verstehen jeden Baustein über seinen Nutzen, nicht über technische Sprache. Wichtig ist Ihre Fachkompetenz und der Wille, schneller umzusetzen.",
              },
              {
                q: "Kann ich das Programm einzeln machen?",
                a: "Das Programm ist bewusst als Kleingruppe gestaltet. Sie profitieren von gemeinsamen Lerneffekten, konkreten Beispielen anderer Teilnehmer und gegenseitiger Motivation.",
              },
              {
                q: "Wie viel Zeit muss ich pro Woche einplanen?",
                a: "Die beiden Live-Termine pro Woche dauern insgesamt 150 Minuten (60 + 90 min). Plus individuelle Zeit zum Arbeiten an eigenen Themen zwischen den Sessions.",
              },
              {
                q: "Was bekomme ich nach dem Programm?",
                a: "Sie gehen mit einem arbeitsfähigen digitalen Zweitsystem aus dem Kurs – nicht mit Notizen, sondern mit einer Struktur, die Sie sofort produktiv nutzen können.",
              },
              {
                q: "Kann ich das Programm zeitlich verschieben?",
                a: "Sprechen Sie mit uns im persönlichen Gespräch – wir finden für Ihre Situation eine passende Lösung.",
              },
            ].map((faq, i) => (
              <details key={i} className="group border-t border-black/10 py-6 cursor-pointer">
                <summary className="flex items-start justify-between gap-4 text-black font-semibold text-lg">
                  <span>{faq.q}</span>
                  <span className="text-brand-600 transition group-open:rotate-180 flex-shrink-0">▼</span>
                </summary>
                <p className="mt-6 text-black/70 leading-relaxed font-light">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── APPLY FORM ───────────── */}
      <section id="bewerbung" className="relative bg-black px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight mb-12 text-center">
            Jetzt bewerben.
          </h2>

          <ApplyForm />

          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm font-light">
              Fragen? Schreiben Sie eine kurze E-Mail an{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-brand-400 underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── FINAL MESSAGE ───────────── */}
      <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-black leading-tight mb-12">
            Ihre Kompetenz ist nicht das Problem.
          </h2>

          <p className="text-2xl font-serif font-bold text-brand-600 leading-tight mb-12">
            Das Problem ist, wie viel davon heute zwischen Idee und Ergebnis verloren geht.
          </p>

          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Dieses Programm baut Ihnen ein digitales Zweitsystem, das genau dort ansetzt. Damit Sie nicht länger
            warten, erklären und nachfassen müssen. Sondern schneller sichtbar machen, schneller prüfen, schneller
            verbessern und schneller wirksam werden.
          </p>

          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed font-light mb-16">
            Und wenn Sie nach dem Aufbau des Grundsystems weitergehen wollen, haben Sie dafür bereits den passenden
            nächsten Schritt.
          </p>

          <div className="border-t border-black/10 pt-12">
            <p className="text-2xl font-serif font-bold text-black leading-tight">
              Sie bauen sich in 4 Wochen eine eigene digitale Umsetzungsfabrik auf –<br />
              <span className="text-brand-600">und können daraus bei Bedarf eine dauerhafte Umsetzungsstärke entwickeln.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
