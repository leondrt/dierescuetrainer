"use client";

import { motion } from "framer-motion";
import { Heart, Stethoscope, Baby, Car, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import Reveal from "@/components/ui/reveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

const courses = [
  {
    id: "betrieblich",
    icon: Heart,
    badge: "Beliebt",
    title: "Betriebliche Ersthelfer",
    description:
      "DGUV-konforme Ausbildung für Betriebe jeder Größe. Neun Unterrichtseinheiten an einem Tag — BG-Abrechnung möglich.",
    highlights: ["9 UE / 1 Tag", "BG-Abrechnung möglich", "DGUV-konform"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: "arztpraxen",
    icon: Stethoscope,
    badge: "Professionell",
    title: "Arztpraxen & Kliniken",
    description:
      "Individuelles Notfalltraining mit CRM-Ansatz für medizinische Einrichtungen. CME-Punkte möglich, Dauer 2–8 Stunden.",
    highlights: ["Individuell 2–8h", "CRM-Methodik", "CME-Punkte möglich"],
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
  {
    id: "kind",
    icon: Baby,
    badge: "Für Eltern",
    title: "Erste Hilfe am Kind",
    description:
      "Säuglinge & Kleinkinder brauchen eine eigene Herangehensweise. Neun UE für Eltern und Erzieher — praxisnah und einfühlsam.",
    highlights: ["9 UE / 1 Tag", "Für Eltern/Erzieher", "Säuglinge & Kleinkinder"],
    color: "bg-sky-50",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
  },
  {
    id: "fuehrerschein",
    icon: Car,
    badge: "Pflicht",
    title: "Führerscheinbewerber (§19 FeV)",
    description:
      "Amtlich anerkannter Pflichtskurs nach §19 FeV mit sofortiger Bescheinigung. Bundesweit gültig, ideal auch für Fahrschulen.",
    highlights: ["Pflichtskurs §19 FeV", "Amtlich anerkannt", "Sofortige Bescheinigung"],
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
  },
];

export default function CoursesSection() {
  return (
    <section id="kurse" className="py-20 lg:py-28" style={{ backgroundColor: "#EEF2F7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#3068F5" }}>
            Unser Angebot
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase mb-4"
            style={{ color: "#2A3142" }}
          >
            UNSERE{" "}
            <span style={{ color: "#5B8CFF" }}>KURSE</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Von der Grundausbildung bis zum Profi-Training — wir haben den
            richtigen Kurs für Ihre Situation.
          </p>
        </Reveal>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {courses.map((course) => (
            <StaggerItem key={course.id}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 48px rgba(48,104,245,0.12)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`${course.color} rounded-2xl p-6 lg:p-8 flex flex-col border border-slate-200/60`}
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
                  className="w-full border-slate-300 text-slate-700 hover:bg-white hover:text-blue-600 hover:border-blue-200 rounded-xl group transition-all justify-center"
                >
                  Mehr erfahren
                  <motion.span
                    className="ml-2 inline-flex"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </ButtonLink>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

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
            className="text-white rounded-xl px-10 hover:scale-105 transition-transform shadow-md justify-center"
            style={{
              backgroundColor: "#3068F5",
            } as React.CSSProperties}
          >
            Alle Kurse ansehen
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
