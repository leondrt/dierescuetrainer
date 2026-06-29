"use client";

import { motion } from "motion/react";
import {
  Heart,
  Stethoscope,
  Baby,
  Building2,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";

const courses = [
  {
    id: "erste-hilfe",
    icon: Heart,
    badge: "Beliebt",
    title: "Erste Hilfe Ausbildung",
    subtitle: "Standard-Kurs für Führerschein, Arbeit & Alltag",
    description:
      "Unsere Erste-Hilfe-Ausbildung entspricht dem aktuellen DGUV-Standard und wird bundesweit für den Führerschein, betriebliche Ersthelfer und den privaten Alltag anerkannt. In 9 Unterrichtseinheiten lernen Sie alles Wesentliche — von der Lagerung bis zur Reanimation.",
    highlights: [
      "9 Unterrichtseinheiten (1 Tag)",
      "Bundesweit anerkanntes Zertifikat",
      "Gültig für Führerscheinerwerb",
      "BG/Unfallkasse & DGUV-konform",
      "Kleine Gruppen (max. 12 Personen)",
      "AED-Training inklusive",
    ],
    details: [
      { icon: Clock, label: "Dauer", value: "1 Tag (ca. 8 Stunden)" },
      { icon: Users, label: "Gruppengröße", value: "Bis zu 12 Personen" },
      { icon: Shield, label: "Zertifikat", value: "Bundesweit gültig" },
    ],
    color: "bg-red-50",
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
    accentColor: "border-red-200",
  },
  {
    id: "notfalltraining",
    icon: Stethoscope,
    badge: "Professionell",
    title: "Notfalltrainings",
    subtitle: "Für Arztpraxen, Pflegedienste & medizinisches Fachpersonal",
    description:
      "Unser Notfalltraining ist speziell auf die Anforderungen von Arztpraxen, Pflegediensten und medizinischen Einrichtungen zugeschnitten. Mit realistischen Fallsimulationen trainieren Sie gezielt das Handeln in Ausnahmesituationen — im Team.",
    highlights: [
      "Realistische Notfallszenarien",
      "Teambasiertes Training",
      "Auf Ihre Einrichtung angepasst",
      "Defibrillator-Training",
      "Dokumentation & Nachbesprechung",
      "Regelmäßige Auffrischungskurse möglich",
    ],
    details: [
      { icon: Clock, label: "Dauer", value: "4–8 Stunden (flexibel)" },
      { icon: Users, label: "Team", value: "Ab 4 Personen" },
      { icon: Shield, label: "Für", value: "Medizinische Einrichtungen" },
    ],
    color: "bg-slate-50",
    iconColor: "text-slate-700",
    iconBg: "bg-slate-200",
    accentColor: "border-slate-200",
  },
  {
    id: "kind",
    icon: Baby,
    badge: "Für Eltern",
    title: "Erste Hilfe am Kind",
    subtitle: "Für Eltern, Erzieherinnen & Betreuungspersonen",
    description:
      "Notfälle bei Kindern unterscheiden sich grundlegend von denen bei Erwachsenen. In diesem Kurs lernen Sie gezielt, wie Sie bei Säuglingen und Kleinkindern richtig helfen — von Erstickung über Fieberkrämpfe bis zur Wiederbelebung.",
    highlights: [
      "Speziell für Kinder & Säuglinge",
      "Richtige Reanimation beim Kind",
      "Umgang mit Erstickungsnotfällen",
      "Fieberkrampf & Bewusstlosigkeit",
      "Praxis mit Übungspuppen",
      "Ruhige, einfühlsame Atmosphäre",
    ],
    details: [
      { icon: Clock, label: "Dauer", value: "Ca. 6 Stunden" },
      { icon: Users, label: "Zielgruppe", value: "Eltern, Erzieher" },
      { icon: Shield, label: "Fokus", value: "Säuglinge & Kleinkinder" },
    ],
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    accentColor: "border-amber-200",
  },
  {
    id: "inhouse",
    icon: Building2,
    badge: "Unternehmen",
    title: "Inhouse Schulungen",
    subtitle: "Maßgeschneiderte Firmenschulungen bei Ihnen vor Ort",
    description:
      "Wir kommen zu Ihnen! Unsere Inhouse-Schulungen werden direkt an Ihrem Arbeitsplatz durchgeführt und sind auf Ihre branchenspezifischen Risiken abgestimmt. Von der Produktion bis zum Büro — wir passen das Training an Ihren Alltag an.",
    highlights: [
      "Training bei Ihnen vor Ort",
      "Angepasst an Ihre Branche",
      "Flexible Termingestaltung",
      "Ab 6 Personen",
      "Alle Branchen und Unternehmensgrößen",
      "Jahresplanung möglich",
    ],
    details: [
      { icon: Clock, label: "Dauer", value: "Individuell planbar" },
      { icon: Users, label: "Mindestgröße", value: "Ab 6 Personen" },
      { icon: Shield, label: "Standort", value: "Bei Ihnen vor Ort" },
    ],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    accentColor: "border-blue-200",
  },
];

export default function KursePageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-red-600/20 text-red-300 border-red-500/30 mb-4">
              Alle Kurse
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Unsere{" "}
              <span className="font-[family-name:var(--font-playfair)] italic text-red-400">
                Kursangebote
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Von der Grundausbildung bis zum Profi-Training — wir haben den
              richtigen Kurs für Ihre Situation. Alle Kurse sind DGUV-zertifiziert
              und bundesweit anerkannt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              id={course.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${course.color} border ${course.accentColor} rounded-2xl overflow-hidden`}
            >
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl ${course.iconBg}`}
                      >
                        <course.icon
                          className={`w-6 h-6 ${course.iconColor}`}
                        />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-white border border-slate-200 text-slate-600 text-xs"
                      >
                        {course.badge}
                      </Badge>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                      {course.title}
                    </h2>
                    <p className="text-slate-500 text-sm mb-4">
                      {course.subtitle}
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Quick stats */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {course.details.map((d) => (
                        <div
                          key={d.label}
                          className="flex items-center gap-2 bg-white/70 border border-slate-200/80 rounded-xl px-3 py-2"
                        >
                          <d.icon className="w-4 h-4 text-slate-500 shrink-0" />
                          <div>
                            <p className="text-xs text-slate-400">{d.label}</p>
                            <p className="text-sm font-medium text-slate-800">
                              {d.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <ButtonLink
                      href="/kontakt"
                      className="bg-red-600 hover:bg-red-700 text-white rounded-xl group hover:scale-105 transition-all shadow-sm"
                    >
                      Jetzt anfragen
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </ButtonLink>
                  </div>

                  {/* Right: Highlights */}
                  <div className="lg:w-64 xl:w-72 shrink-0">
                    <div className="bg-white/80 border border-slate-200/60 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-900 text-sm mb-4">
                        Was Sie lernen
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {course.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-slate-600 text-sm">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Nicht sicher, welcher Kurs der richtige ist?
            </h2>
            <p className="text-slate-500 mb-8">
              Kontaktieren Sie uns — wir beraten Sie kostenlos und finden die
              perfekte Lösung für Sie oder Ihr Team.
            </p>
            <ButtonLink
              href="/kontakt"
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-10 hover:scale-105 transition-transform shadow-md shadow-red-100 justify-center"
            >
              Jetzt kostenlos beraten lassen
            </ButtonLink>
          </motion.div>
        </div>
      </section>
    </>
  );
}
