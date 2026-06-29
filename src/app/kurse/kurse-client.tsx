"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Stethoscope,
  Baby,
  Car,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

const courses = [
  {
    id: "betrieblich",
    icon: Heart,
    badge: "Beliebt",
    title: "Betriebliche Ersthelfer",
    subtitle: "DGUV-konforme Ausbildung für Betriebe jeder Größe",
    description:
      "Unsere Ausbildung zum betrieblichen Ersthelfer entspricht dem aktuellen DGUV-Grundsatz 304-001 und ist bundesweit anerkannt. In 9 Unterrichtseinheiten an einem Tag lernen Ihre Mitarbeiter alles Wesentliche — von der Lagerung bis zur Reanimation. BG-Abrechnung direkt möglich.",
    highlights: [
      "9 Unterrichtseinheiten (1 Tag)",
      "DGUV-konform & bundesweit anerkannt",
      "BG-Abrechnung möglich",
      "Kleine Gruppen (max. 12 Personen)",
      "AED-Training inklusive",
      "Zertifikat sofort nach dem Kurs",
    ],
    details: [
      { icon: Clock, label: "Dauer", value: "1 Tag (9 UE)" },
      { icon: Users, label: "Gruppengröße", value: "Bis zu 12 Personen" },
      { icon: Shield, label: "Abrechnung", value: "BG-Abrechnung möglich" },
    ],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    accentColor: "border-blue-200",
  },
  {
    id: "arztpraxen",
    icon: Stethoscope,
    badge: "Professionell",
    title: "Arztpraxen & Kliniken",
    subtitle: "Individuelles Notfalltraining für medizinische Einrichtungen",
    description:
      "Unser Notfalltraining für Arztpraxen und Kliniken verbindet CRM-Methodik (Crisis Resource Management) mit praxisnahen Szenarien. Individuell planbar zwischen 2 und 8 Stunden — CME-Punkte auf Anfrage möglich. Wir trainieren Ihr Team so, wie es der Ernstfall fordert.",
    highlights: [
      "Individuell 2–8 Stunden",
      "CRM-Methodik (Crisis Resource Management)",
      "CME-Punkte möglich",
      "Realistische Notfallszenarien",
      "Teambasiertes Training",
      "Dokumentation & Nachbesprechung",
    ],
    details: [
      { icon: Clock, label: "Dauer", value: "2–8 Stunden (individuell)" },
      { icon: Users, label: "Team", value: "Ab 4 Personen" },
      { icon: Shield, label: "Extras", value: "CME-Punkte möglich" },
    ],
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    accentColor: "border-indigo-200",
  },
  {
    id: "kind",
    icon: Baby,
    badge: "Für Eltern",
    title: "Erste Hilfe am Kind",
    subtitle: "Für Eltern, Erzieherinnen & Betreuungspersonen",
    description:
      "Notfälle bei Kindern unterscheiden sich grundlegend von denen bei Erwachsenen. In 9 Unterrichtseinheiten lernen Eltern, Erzieher und Betreuungspersonen gezielt, wie sie bei Säuglingen und Kleinkindern richtig helfen — von Erstickungsnotfällen über Fieberkrämpfe bis zur Wiederbelebung.",
    highlights: [
      "9 Unterrichtseinheiten / 1 Tag",
      "Speziell für Säuglinge & Kleinkinder",
      "Richtige Reanimation beim Kind",
      "Umgang mit Erstickungsnotfällen",
      "Fieberkrampf & Bewusstlosigkeit",
      "Praxis mit Übungspuppen",
    ],
    details: [
      { icon: Clock, label: "Dauer", value: "1 Tag (9 UE)" },
      { icon: Users, label: "Zielgruppe", value: "Eltern, Erzieher" },
      { icon: Shield, label: "Fokus", value: "Säuglinge & Kleinkinder" },
    ],
    color: "bg-sky-50",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    accentColor: "border-sky-200",
  },
  {
    id: "fuehrerschein",
    icon: Car,
    badge: "Pflicht",
    title: "Führerscheinbewerber (§19 FeV)",
    subtitle: "Amtlich anerkannter Pflichtskurs nach §19 FeV",
    description:
      "Der gesetzlich vorgeschriebene Erste-Hilfe-Kurs für Führerscheinbewerber nach §19 FeV. Amtlich anerkannt, bundesweit gültig — mit sofortiger Bescheinigung nach dem Kurs. Ideal auch für Fahrschulen als Kooperationspartner.",
    highlights: [
      "Pflichtskurs nach §19 FeV",
      "Amtlich anerkannt",
      "Sofortige Bescheinigung",
      "Bundesweit gültig",
      "Ideal für Fahrschulen",
      "Kleine Gruppen, praxisnah",
    ],
    details: [
      { icon: Clock, label: "Dauer", value: "9 UE / 1 Tag" },
      { icon: Users, label: "Zielgruppe", value: "Führerscheinbewerber" },
      { icon: Shield, label: "Anerkennung", value: "Bundesweit amtlich" },
    ],
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    accentColor: "border-violet-200",
  },
];

export default function KursePageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{backgroundColor:"#2A3142"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 mb-4">
              Alle Kurse
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white mb-4">
              UNSERE{" "}
              <span style={{color:"#5B8CFF"}}>KURSANGEBOTE</span>
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
                      href="https://wa.me/4961712777284"
                      className="text-white rounded-xl group hover:scale-105 transition-all shadow-sm"
                      style={{
                        backgroundColor: "#3068F5",
                      } as React.CSSProperties}
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
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
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

      {/* Zertifizierung section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider" style={{color:"#3068F5"}}>Zertifizierung</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-6" style={{color:"#2A3142"}}>
              DGUV-ZERTIFIZIERTE QUALITÄT
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Image src="/images/dguv_card.png" width={200} height={100} alt="DGUV zertifiziert" className="object-contain" />
              <p className="text-slate-600 text-base max-w-md text-left">
                Alle unsere Kurse sind DGUV-zertifiziert und durch die Berufsgenossenschaft anerkannt. Das garantiert Ihnen höchste Qualitätsstandards und bundesweite Gültigkeit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-slate-100" style={{backgroundColor:"#EEF2F7"}}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-4" style={{color:"#2A3142"}}>
              Nicht sicher, welcher Kurs der richtige ist?
            </h2>
            <p className="text-slate-500 mb-8">
              Kontaktieren Sie uns — wir beraten Sie kostenlos und finden die
              perfekte Lösung für Sie oder Ihr Team.
            </p>
            <a
              href="https://wa.me/4961712777284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base hover:scale-105 transition-transform shadow-md"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current shrink-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Jetzt kostenlos beraten lassen
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
