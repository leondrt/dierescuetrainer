"use client";

import { motion } from "motion/react";
import { Heart, Stethoscope, Baby, Building2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";

const courses = [
  {
    id: "erste-hilfe",
    icon: Heart,
    badge: "Beliebt",
    title: "Erste Hilfe Ausbildung",
    description:
      "Der klassische Erste-Hilfe-Kurs für Führerschein, Arbeitsplatz und Alltag. 9 Unterrichtseinheiten, DGUV-zertifiziert und bundesweit anerkannt.",
    highlights: ["9 UE / 1 Tag", "Zertifikat inklusive", "Führerschein-gültig"],
    color: "bg-red-50",
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
  },
  {
    id: "notfalltraining",
    icon: Stethoscope,
    badge: "Professionell",
    title: "Notfalltrainings",
    description:
      "Szenariobasiertes Training für Arztpraxen, Pflegedienste und medizinisches Fachpersonal. Realistische Fallsimulationen für den Ernstfall.",
    highlights: ["Praxisnah", "Szenario-Training", "Team-Schulung"],
    color: "bg-slate-50",
    iconColor: "text-slate-700",
    iconBg: "bg-slate-200",
  },
  {
    id: "kind",
    icon: Baby,
    badge: "Für Eltern",
    title: "Erste Hilfe am Kind",
    description:
      "Speziell für Eltern, Erzieherinnen und Betreuungspersonen. Umgang mit Notfällen bei Säuglingen und Kleinkindern — von Erstickung bis Fieberkrampf.",
    highlights: ["Eltern & Erzieher", "Säuglinge & Kinder", "Praxis-Übungen"],
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    id: "inhouse",
    icon: Building2,
    badge: "Unternehmen",
    title: "Inhouse Schulungen",
    description:
      "Maßgeschneiderte Firmenschulungen bei Ihnen vor Ort. Angepasst an Ihre spezifischen Arbeitsplatzrisiken — flexibel terminierbar.",
    highlights: ["Vor Ort", "Individuell", "Flexible Termine"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
];

export default function CoursesSection() {
  return (
    <section id="kurse" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">
            Unser Angebot
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Unsere{" "}
            <span className="font-[family-name:var(--font-playfair)] italic text-red-600">
              Kurse
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Von der Grundausbildung bis zum Profi-Training — wir haben den
            richtigen Kurs für Ihre Situation.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${course.color} rounded-2xl p-6 lg:p-8 flex flex-col border border-slate-200/60 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl ${course.iconBg}`}
                >
                  <course.icon className={`w-6 h-6 ${course.iconColor}`} />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white text-slate-700 text-xs border border-slate-200"
                >
                  {course.badge}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {course.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {course.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/70 border border-slate-200 text-slate-600 text-xs font-medium"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <ButtonLink
                href={`/kurse#${course.id}`}
                variant="outline"
                className="w-full border-slate-300 text-slate-700 hover:bg-white hover:text-red-600 hover:border-red-200 rounded-xl group transition-all justify-center"
              >
                Mehr erfahren
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </ButtonLink>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <ButtonLink
            href="/kurse"
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-10 hover:scale-105 transition-transform shadow-md shadow-red-200 justify-center"
          >
            Alle Kurse ansehen
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
