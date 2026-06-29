"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import Reveal from "@/components/ui/reveal";

const testimonials = [
  {
    name: "Sandra M.",
    role: "Mutter, Frankfurt",
    rating: 5,
    text: "Der Kurs 'Erste Hilfe am Kind' hat mir das Gefühl gegeben, wirklich vorbereitet zu sein. Die Trainerin war super einfühlsam und hat alles verständlich erklärt. Ich kann den Kurs jeder Mutter empfehlen!",
    course: "Erste Hilfe am Kind",
  },
  {
    name: "Thomas K.",
    role: "Praxismanager, Bad Homburg",
    rating: 5,
    text: "Wir haben das Notfalltraining für unser gesamtes Praxis-Team gebucht. Die Szenarien waren realistisch und lehrreich. Endlich ein Kurs, der nicht langweilt, sondern wirklich etwas vermittelt.",
    course: "Arztpraxen & Kliniken",
  },
  {
    name: "Julia R.",
    role: "HR-Managerin, Oberursel",
    rating: 5,
    text: "Die Inhouse-Schulung war perfekt auf unsere Branche abgestimmt. Flexibel terminiert, professionell durchgeführt und alle Mitarbeiter waren begeistert. Klare Weiterempfehlung!",
    course: "Betriebliche Ersthelfer",
  },
];

function AnimatedStarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: i * 0.05,
          }}
          style={{ display: "inline-flex" }}
        >
          <Star className="w-4 h-4" style={{ color: "#3068F5", fill: "#3068F5" }} />
        </motion.span>
      ))}
    </div>
  );
}

function StaticStarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4" style={{ color: "#3068F5", fill: "#3068F5" }} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#EEF2F7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "#3068F5" }}
          >
            Stimmen unserer Teilnehmer
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase mb-4"
            style={{ color: "#2A3142" }}
          >
            WAS UNSERE{" "}
            <span style={{ color: "#5B8CFF" }}>TEILNEHMER</span>{" "}
            SAGEN
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StaticStarRating count={5} />
            <span className="text-slate-600 font-semibold">4,9/5</span>
            <span className="text-slate-400 text-sm">— 50+ Bewertungen</span>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 48px rgba(48,104,245,0.10)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 flex flex-col"
              >
                <Quote
                  className="w-8 h-8 mb-4 shrink-0"
                  style={{ color: "#5B8CFF", opacity: 0.4 }}
                />
                <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                  <div className="text-right">
                    <AnimatedStarRating count={t.rating} />
                    <p className="text-xs mt-1" style={{ color: "#3068F5" }}>
                      {t.course}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
