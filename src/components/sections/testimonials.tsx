"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

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
    course: "Notfalltraining",
  },
  {
    name: "Julia R.",
    role: "HR-Managerin, Oberursel",
    rating: 5,
    text: "Die Inhouse-Schulung war perfekt auf unsere Branche abgestimmt. Flexibel terminiert, professionell durchgeführt und alle Mitarbeiter waren begeistert. Klare Weiterempfehlung!",
    course: "Inhouse Schulung",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-amber-400 fill-amber-400"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">
            Stimmen unserer Teilnehmer
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Was unsere{" "}
            <span className="font-[family-name:var(--font-playfair)] italic text-red-600">
              Teilnehmer
            </span>{" "}
            sagen
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating count={5} />
            <span className="text-slate-600 font-semibold">4,9/5</span>
            <span className="text-slate-400 text-sm">— 50+ Bewertungen</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-red-200 mb-4 shrink-0" />
              <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
                <div className="text-right">
                  <StarRating count={t.rating} />
                  <p className="text-red-500 text-xs mt-1">{t.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
