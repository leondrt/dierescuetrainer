"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import Reveal from "@/components/ui/reveal";

const comparisons = [
  {
    standard: "Frontalunterricht ohne Interaktion",
    drt: "Interaktive Szenarien & Übungen",
  },
  {
    standard: "Dozenten ohne Rettungsdienst-Erfahrung",
    drt: "Aktive Notfallsanitäter als Trainer",
  },
  {
    standard: "Veraltetes Material & Folien",
    drt: "Digitale Simulatoren & Tablets",
  },
  {
    standard: "Einheitslösung für alle",
    drt: "Individuell auf Ihre Branche zugeschnitten",
  },
];

export default function WhyUsSection() {
  return (
    <section id="ueber-uns" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "#3068F5" }}
          >
            Warum wir?
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase mb-4"
            style={{ color: "#2A3142" }}
          >
            WARUM WIR{" "}
            <span style={{ color: "#5B8CFF" }}>ANDERS SIND</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Nicht alle Erste-Hilfe-Kurse sind gleich. Hier ist der Unterschied.
          </p>
        </Reveal>

        {/* Comparison table — left/right directional reveals */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-2">
            <Reveal direction="left" delay={0.1} className="bg-slate-100 px-6 py-4 border-r border-slate-200">
              <p className="font-semibold text-slate-500 text-sm uppercase tracking-wide">
                Standard Ausbildung
              </p>
            </Reveal>
            <div style={{ backgroundColor: "#3068F5" }}>
              <Reveal direction="right" delay={0.2} className="px-6 py-4">
                <p className="font-semibold text-white text-sm uppercase tracking-wide">
                  Die Rescue Trainer
                </p>
              </Reveal>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50"
              } border-t border-slate-100`}
            >
              <Reveal
                direction="left"
                delay={0.05 * i}
                className="px-6 py-5 border-r border-slate-100 flex items-start gap-3"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-slate-400" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{row.standard}</p>
              </Reveal>
              <Reveal
                direction="right"
                delay={0.05 * i}
                className="px-6 py-5 flex items-start gap-3"
              >
                <div
                  className="flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5"
                  style={{ backgroundColor: "#EEF2F7" }}
                >
                  <Check className="w-3 h-3" style={{ color: "#3068F5" }} />
                </div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">{row.drt}</p>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl p-8 md:p-10 text-center"
          style={{ backgroundColor: "#2A3142" }}
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
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#5B8CFF" }} />
                <span className="text-white font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
