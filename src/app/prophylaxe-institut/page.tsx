import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  Gift,
  Heart,
  MessageCircle,
  Play,
  Rocket,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Prophylaxe Institut by Minka — Praxismentoring für Zahnärzte",
  description:
    "Nachhaltiger Praxiserfolg mit System: Prophylaxe als Renditetreiber, Team-Entwicklung und zeitliche Entlastung. Mentoring für Zahnärzte und Praxisinhaber.",
  path: "/prophylaxe-institut",
});

const heroFacts = [
  { label: "Praxen begleitet", value: "150+" },
  { label: "Mentoring", value: "3–18 Mon." },
  { label: "Für", value: "Zahnärzte" },
  { label: "Förderung", value: "möglich" },
];

const problems = [
  { title: "Wirtschaftliche Unsicherheit", body: "Sie wissen nicht, wie Sie Ihre Praxis wirtschaftlich gesund weiterentwickeln können." },
  { title: "Mangelnde Prophylaxe-Nutzung", body: "Prophylaxe wird nicht strategisch als Umsatz- und Bindungsfaktor genutzt." },
  { title: "Komplizierte Abläufe", body: "Abläufe sind ineffizient und erzielen keine höheren Deckungsbeiträge." },
  { title: "Abhängigkeit von Behandlungszeit", body: "Sie können nur wachsen, wenn Sie selbst mehr Behandlungszeit aufbringen." },
  { title: "Team-Herausforderungen", body: "Es fehlt ein starkes, mitdenkendes Team, das Sie entlastet." },
  { title: "Fehlende Langzeitstrategie", body: "Sie suchen nach einer langfristigen Begleitung, die über kurzfristige Lösungen hinausgeht." },
];

const ansatz = [
  { icon: TrendingUp, title: "Prophylaxe als Renditetreiber", body: "Wir etablieren Prophylaxe und Dentalhygiene als dauerhaftes und lukratives Angebot in Ihrer Praxis." },
  { icon: Users, title: "Team-Entwicklung", body: "Ihr Team – insbesondere ZFA und DH-Personal – wird zu tragenden Leistungsträgern entwickelt." },
  { icon: Clock, title: "Zeitliche Entlastung", body: "Praxisinhaber werden zeitlich entlastet und können sich auf das Wesentliche konzentrieren." },
];

const kompetenzen = [
  { icon: Heart, title: "Patientenverständnis", sub: "Klare Kommunikation von Leistungen", body: "Patienten verstehen, warum Prophylaxe sinnvoll ist – nicht nur, was gemacht wird." },
  { icon: Shield, title: "Vertrauensaufbau", sub: "Wirkungsvolle Patientenkommunikation", body: "Die richtige Sprache schafft Vertrauen, Sicherheit und Bereitschaft zur Mitarbeit." },
  { icon: MessageCircle, title: "Kommunikation", sub: "Charmantes Anbieten sinnvoller Zusatzleistungen", body: "Zusatzleistungen werden beraten, nicht verkauft – ehrlich, wertschätzend und passend." },
  { icon: Star, title: "Individuelle Betreuung", sub: "Beratung statt Waschanlage", body: "Mundhygiene wird zum Coaching und persönlichen Dialog." },
];

const stufen = [
  { nr: "01", title: "Reinschnuppern", dauer: "3 Monate", body: "Für erste Potenziale und strukturierten Start. Sie lernen das System kennen und identifizieren die größten Hebel in Ihrer Praxis.", highlight: false },
  { nr: "02", title: "Umsetzer-Programm", dauer: "6 Monate", body: "Systematischer Aufbau von Prophylaxe, Team und Abläufen. Hier entsteht die Struktur, die Ihre Praxis nachhaltig verändert.", highlight: true },
  { nr: "03", title: "Elite-Training", dauer: "18 Monate", body: "Langfristige Etablierung als echte Renditequelle auf Autopilot und strategische Teamentwicklung. Ihr Praxiserfolg wird selbsttragend.", highlight: false },
];

const boni = [
  { icon: Clock, title: "Bevorzugte Starttermine", body: "Als Wartelisten-Teilnehmer erhalten Sie bevorzugten Zugang und können Ihren Starttermin flexibel abstimmen." },
  { icon: Zap, title: "Frühzeitige Informationen", body: "Exklusive Einblicke und detaillierte Informationen zu den Programminhalten, bevor diese öffentlich zugänglich sind." },
  { icon: Gift, title: "Exklusiver Pionierbonus", body: "Als Dankeschön für frühes Vertrauen erhalten Sie einen besonderen Pionierbonus, der nur für Wartelisten-Teilnehmer verfügbar ist." },
];

const testimonialVideos = [
  { url: "https://www.youtube.com/embed/L6KeIxMGDQ4", title: "Praxis-Erfolg mit System" },
  { url: "https://www.youtube.com/embed/KiMLABEpcSo", title: "Team-Transformation" },
];

export default function ProphylaxeInstitutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Unternehmen", href: "/unternehmen" },
          { name: "Prophylaxe Institut", href: "/prophylaxe-institut" },
        ]}
      />

      {/* HERO */}
      <Section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24" aria-labelledby="pi-title">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">
            <Shield className="h-3.5 w-3.5" aria-hidden="true" />
            Prophylaxe Institut by Minka
          </p>
          <h1 id="pi-title" className="mt-6 font-display text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Nachhaltiger Praxiserfolg mit System
          </h1>
          <p className="mt-4 text-2xl font-light text-amber-300">
            Kontinuität statt einmaliger Impulse
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-200">
            Entdecken Sie, wie Sie mit Deutschlands führendem Prophylaxe-System
            und persönlichem Mentoring von Minka wachsen – und echte Freiheit statt Chaos
            gewinnen.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {heroFacts.map((f) => (
              <div key={f.label} className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-5 text-center backdrop-blur">
                <p className="font-display text-2xl font-semibold text-amber-400">{f.value}</p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-300">{f.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/#kontakt"
              className="inline-flex h-13 items-center justify-center gap-1.5 rounded-lg bg-amber-600 px-8 text-[15px] font-semibold text-white hover:bg-amber-700 transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-amber-400/45 shadow-lg hover:shadow-amber-600/50">
              Auf die Warteliste <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/#kontakt"
              className="inline-flex h-13 items-center justify-center rounded-lg border-2 border-amber-500/40 bg-transparent px-8 text-[15px] font-semibold text-white hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-amber-400/45">
              Erstgespräch anfragen
            </Link>
          </div>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section className="bg-slate-50" aria-labelledby="pi-problem">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Die Realität in vielen Praxen</p>
          <h2 id="pi-problem" className="mt-3 font-display text-4xl lg:text-5xl font-semibold text-slate-900">
            Kämpfen Sie mit diesen Herausforderungen?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Viele Zahnärzte und Praxisinhaber fühlen sich allein gelassen.
            Einzelmaßnahmen oder einmalige Coachings reichen nicht aus, um
            nachhaltigen Erfolg zu sichern.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {problems.map((p) => (
              <div key={p.title} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-md transition-all">
                <X className="mt-0.5 h-5 w-5 flex-none text-red-400" aria-hidden="true" />
                <div>
                  <p className="font-sans text-sm font-semibold text-slate-900">{p.title}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg font-medium text-slate-800">
            Es ist Zeit für einen echten Wandel -- mit System statt Zufall.
          </p>
        </div>
      </Section>

      {/* ANSATZ */}
      <Section className="bg-white" aria-labelledby="pi-ansatz">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Unser einzigartiger Ansatz</p>
          <h2 id="pi-ansatz" className="mt-3 font-display text-4xl lg:text-5xl font-semibold text-slate-900">
            Persönliches Mentoring für nachhaltigen Praxiserfolg
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Kein Blabla. Vorhersehbarer Erfolg. System statt Chaos.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ansatz.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div aria-hidden="true" className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-slate-900">{a.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{a.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 rounded-lg border border-slate-300 bg-slate-900 p-8">
          <blockquote className="text-[16px] leading-relaxed text-white font-light">
            &bdquo;Genau so wie Prophylaxe nur wirkt, wenn sie regelmäßig
            durchgeführt wird, entfalten auch unternehmerische Erfolgsprinzipien
            nur dann ihre Wirkung, wenn man kontinuierlich dranbleibt.&ldquo;
          </blockquote>
          <p className="mt-4 text-[13px] font-medium text-amber-400">
            Minka -- Ihre Mentorin
          </p>
        </div>
      </Section>

      {/* VORHER / NACHHER */}
      <Section tone="cream" aria-labelledby="pi-transform">
        <h2 id="pi-transform" className="font-display text-display-md text-ink-900">
          Die Transformation
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card variant="outline">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-500">Vorher</p>
            <h3 className="mt-2 font-display text-display-sm text-ink-900">Es geht irgendwie</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
              Chaos in den Abläufen, ungenutzte Potenziale in der Prophylaxe,
              überlastete Praxisinhaber und ein Team, das nicht voll
              ausgeschöpft wird.
            </p>
            <ul className="mt-4 space-y-2">
              {["Moderate Deckungsbeiträge", "Hohe Mitarbeiterfluktuation", "Wenig Zeit für Patienten und Familie"].map((n) => (
                <li key={n} className="flex items-start gap-2 text-[14px] text-ink-700">
                  <X className="mt-0.5 h-4 w-4 flex-none text-ink-400" aria-hidden="true" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="elevated">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-700">Nachher</p>
            <h3 className="mt-2 font-display text-display-sm text-ink-900">Praxis auf Autopilot</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
              Strukturierte Prozesse, maximal genutzte Prophylaxe-Potenziale,
              entlastete Praxisinhaber und ein hochmotiviertes,
              eigenverantwortliches Team.
            </p>
            <ul className="mt-4 space-y-2">
              {["Deutlich höhere Umsätze und wiederkehrende Patienten", "Stabiles, engagiertes Team, das mitdenkt", "Mehr eigene Freiheit und Lebensqualität"].map((v) => (
                <li key={v} className="flex items-start gap-2 text-[14px] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* MINKA */}
      <Section className="bg-slate-50" aria-labelledby="pi-minka">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Ihre Mentorin</p>
            <h2 id="pi-minka" className="mt-3 font-display text-5xl font-semibold text-slate-900">
              Minka
            </h2>
            <p className="mt-3 text-lg font-light text-amber-700">
              Gründerin Prophylaxe Institut – Dozentin bei WissensReich Academy
            </p>
            <p className="mt-8 text-[15px] leading-relaxed text-slate-600">
              Ich habe bereits über 150 Praxen zu nachhaltigem Wachstum
              verholfen – und ich kann Ihnen nicht nur zeigen, wie es geht,
              sondern ich setze mit Ihnen gemeinsam um.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Ich weiß genau, wie es sich anfühlt, wenn die Praxis stagniert
              und man das Gefühl hat, alles selbst machen zu müssen. Aber ich
              habe auch gesehen, wie Praxen mit dem richtigen Mentoring und
              bewährten Prinzipien aufblühen.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                "Mehrfach erprobte Erfolgsprinzipien",
                "Umsetzung in über 150 unterschiedlichen Praxen",
                "Langfristige Begleitung statt einmaliger Impulse",
                "Prophylaxe mit System – Beratung, die begeistert",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-amber-600" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-300 shadow-2xl">
            <Image
              src="/dozenten/minka-professional.png"
              alt="Minka — Gründerin Prophylaxe Institut, Mentorin für Zahnärzte"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* KOMPETENZEN */}
      <Section className="bg-white" aria-labelledby="pi-kompetenz">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Für Zahnärztinnen, Zahnärzte, Praxisinhaber und motivierte Teams</p>
          <h2 id="pi-kompetenz" className="mt-3 font-display text-4xl lg:text-5xl font-semibold text-slate-900">
            Prophylaxe wird zum Kommunikations- und Serviceprozess
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ein Prozess, der Patienten begeistert und Praxiserfolg steigert.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {kompetenzen.map((k) => {
            const Icon = k.icon;
            return (
              <Card key={k.title} variant="outline">
                <div className="flex items-start gap-4">
                  <div aria-hidden="true" className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink-900">{k.title}</h3>
                    <p className="mt-0.5 text-[13px] font-medium text-brand-700">{k.sub}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{k.body}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* MENTORING-STUFEN */}
      <Section aria-labelledby="pi-stufen">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Ihr Weg zum Erfolg</p>
        <h2 id="pi-stufen" className="mt-2 font-display text-display-md text-ink-900">
          Unsere Mentoring-Stufen: Passend für jede Praxisphase
        </h2>
        <p className="mt-5 max-w-prose text-lead text-ink-500">
          Wir bieten ein Wachstumsmentoring für ausgewählte Dentalpraxen in
          drei aufeinander aufbauenden Stufen an.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stufen.map((s) => (
            <Card key={s.nr} variant={s.highlight ? "elevated" : "outline"} className={`flex flex-col ${s.highlight ? "ring-2 ring-brand-600/20" : ""}`}>
              <span className="font-display text-4xl font-semibold text-brand-100">{s.nr}</span>
              <h3 className="mt-2 font-sans text-base font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-1 text-[13px] font-medium text-brand-700">{s.dauer}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{s.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-[14px] font-medium text-ink-700">
          Individuelles Angebot -- Konditionsgestaltung gemäß Ihren Zielen.
        </p>
      </Section>

      {/* WARTELISTE + BONI */}
      <Section tone="brand-soft" aria-labelledby="pi-warteliste">
        <SectionHeader
          eyebrow="Jetzt vormerken"
          titleId="pi-warteliste"
          title="Sichern Sie sich Ihren Vorsprung: Die Warteliste"
          intro="Die Warteliste ist kostenlos und unverbindlich. Es gilt: First come, first served."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {boni.map((b, i) => {
            const Icon = b.icon;
            return (
              <Card key={b.title} variant="elevated">
                <div className="flex items-start gap-3">
                  <div aria-hidden="true" className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink-900">{b.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{b.body}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/#kontakt"
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-6 text-[15px] font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45">
            <Rocket className="h-4 w-4" aria-hidden="true" />
            Jetzt unverbindlich vormerken lassen
          </Link>
        </div>
      </Section>

      {/* FÖRDERUNG */}
      <Section aria-labelledby="pi-foerder">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Förderung möglich</p>
            <h2 id="pi-foerder" className="mt-2 font-display text-display-md text-ink-900">
              Wir kümmern uns um die gesamte Abwicklung
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              Für Praxisberatung und begleitete Umsetzung sind häufig
              öffentliche Zuschüsse möglich. Das Beste daran: Wir übernehmen
              die komplette organisatorische Abwicklung für interessierte Praxen
              durch unser Fördermittel-Concierge-Team.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Unterstützung bei der Beantragung von Zuschüssen",
                "Komplette organisatorische Abwicklung",
                "Wartelisten-Teilnehmer haben einen zusätzlichen Vorteil",
              ].map((v) => (
                <li key={v} className="flex items-start gap-2 text-[15px] text-ink-700">
                  <Zap className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden="true" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card variant="elevated">
            <blockquote className="text-[15px] leading-relaxed text-ink-900">
              &bdquo;Die Unterstützung bei den Förderanträgen war Gold wert.
              Ich hätte das alleine nie geschafft!&ldquo;
            </blockquote>
            <p className="mt-3 text-[13px] font-medium text-ink-500">
              Dr. Anna Schmidt -- Zahnärztin aus München
            </p>
            <div className="mt-5">
              <Link href="/concierge-unternehmen"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded">
                Mehr zum Fördermittel-Concierge <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* TESTIMONIALS VIDEO */}
      <Section tone="cream" aria-labelledby="pi-video">
        <SectionHeader
          eyebrow="Stimmen aus der Praxis"
          titleId="pi-video"
          title="Was unsere Mentees berichten"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonialVideos.map((v, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-2xl border border-line shadow-lg bg-black">
              <iframe
                src={v.url}
                title={v.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section tone="ink" aria-labelledby="pi-cta">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pi-cta" className="font-display text-display-md text-white">
            Investieren Sie in eine Zukunft, in der Ihre Praxis floriert
          </h2>
          <p className="mt-5 text-lead text-white/80">
            Wirtschaftlich gesund wachsen, Prophylaxe als strategischen
            Umsatztreiber nutzen, ein motiviertes Team aufbauen -- und dabei
            mehr Freiheit gewinnen.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#kontakt"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 text-[15px] font-medium text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Auf die Warteliste
            </Link>
            <Link href="/#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 text-[15px] font-medium text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-400/60">
              Erstgespraech anfragen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
