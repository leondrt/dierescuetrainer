"use client";

import { motion } from "motion/react";
import { Zap, Package, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "100% Praxisnah",
    description:
      "Kein trockenes Theoriepauken. Bei uns arbeiten Sie von der ersten Minute an mit echten Szenarien, Puppen und medizinischem Equipment — so wie es im Ernstfall auch ist.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Package,
    title: "Moderne Ausrüstung",
    description:
      "Wir setzen auf aktuelles Trainings-Equipment: AED-Trainer, professionelle Reanimationspuppen und moderne Verbandsmittel — damit Sie das Beste aus Ihrem Training mitnehmen.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: GraduationCap,
    title: "Experten-Trainer",
    description:
      "Unsere Trainerinnen und Trainer kommen aus dem Rettungsdienst, der Feuerwehr und dem medizinischen Bereich. Sie bringen echte Erfahrung mit — und geben sie an Sie weiter.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

export default function WhyUsSection() {
  return (
    <section id="ueber-uns" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">
            Warum wir?
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Was uns{" "}
            <span className="font-[family-name:var(--font-playfair)] italic text-red-600">
              unterscheidet
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Nicht alle Erste-Hilfe-Kurse sind gleich. Das macht unsere Kurse
            besonders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`${f.bg} border ${f.border} rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300`}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm mb-5`}
              >
                <f.icon className={`w-7 h-7 ${f.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {f.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-10 text-center"
        >
          <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">
            Zertifizierungen &amp; Anerkennungen
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              "DGUV Grundsatz 304-001",
              "BG/Unfallkasse",
              "§ 26 DGUV V2",
              "Bundesweit anerkannt",
            ].map((cert) => (
              <div key={cert} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-white font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
