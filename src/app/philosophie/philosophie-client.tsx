"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Lightbulb, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Radikale Praxisnähe",
    description:
      "Wir glauben, dass Erste Hilfe nur durch echtes Üben erlernt werden kann. Keine Folien, keine Passivität — bei uns lernen Sie durch Handeln.",
    color: "text-[#3068F5]",
    bg: "bg-[#EEF2F7]",
    border: "border-[#5B8CFF]/20",
  },
  {
    icon: Users,
    title: "Echte Profis",
    description:
      "Unsere Trainer sind aktive Notfallsanitäter und kommen direkt aus dem Rettungsdienst. Sie bringen Erfahrungen mit, die kein Lehrbuch beschreiben kann.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: Lightbulb,
    title: "Zeitgemäße Didaktik",
    description:
      "Digitale Simulatoren, Tablets und interaktive Lernmethoden — wir nutzen moderne Technologie, um Lerninhalte nachhaltig zu verankern.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

const founders = [
  {
    name: "Robert Knecht",
    role: "Gründer & Ausbilder",
    image: "/images/robert-knecht.webp",
    experience: "5+ Jahre",
    quote: "Das wenige, das du tun kannst, ist viel.",
    quoteAuthor: "Albert Schweitzer",
    qualifications: [
      "Notfallsanitäter",
      "Praxisanleiter",
      "DGUV Ausbilder",
      "Gruppenführer Feuerwehr",
    ],
    description:
      "Als aktiver Notfallsanitäter weiß Robert aus eigener Erfahrung, wie entscheidend die ersten Minuten in einem Notfall sind. Dieses Wissen gibt er mit Leidenschaft und Pragmatismus weiter.",
  },
  {
    name: "Leon Gärtner",
    role: "Gründer & Ausbilder",
    image: "/images/leon-gaertner.webp",
    experience: "10 Jahre",
    quote: "Nicht alle von uns können große Dinge tun. Aber wir können kleine Dinge mit großer Liebe tun.",
    quoteAuthor: "Mutter Theresa",
    qualifications: [
      "Notfallsanitäter",
      "Praxisanleiter",
      "DGUV Ausbilder",
    ],
    description:
      "Mit 10 Jahren Erfahrung im Rettungsdienst bringt Leon eine tiefe Expertise in der Notfallmedizin mit. Sein Ziel: Erste Hilfe so zu vermitteln, dass sie wirklich im Ernstfall funktioniert.",
  },
];

export default function PhilosophiePageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{backgroundColor:"#2A3142"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 mb-4">
              Über uns
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white mb-6">
              UNSERE{" "}
              <span style={{color:"#5B8CFF"}}>PHILOSOPHIE.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Erste Hilfe ist Charakterfrage. Wer im Ernstfall helfen kann, der muss das nicht dem Zufall überlassen. Wir sorgen dafür, dass Sie vorbereitet sind — wirklich vorbereitet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-wider" style={{color:"#3068F5"}}>
              Unsere Werte
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight uppercase" style={{color:"#2A3142"}}>
              WAS UNS ANTREIBT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`${p.bg} border ${p.border} rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm mb-5">
                  <p.icon className={`w-7 h-7 ${p.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 lg:py-28" style={{backgroundColor:"#EEF2F7"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-wider" style={{color:"#3068F5"}}>
              Das Team
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight uppercase mb-4" style={{color:"#2A3142"}}>
              GEGRÜNDET AUS{" "}
              <span style={{color:"#5B8CFF"}}>ÜBERZEUGUNG</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Zwei aktive Notfallsanitäter, die erkannt haben, dass Erste Hilfe besser sein kann.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Photo */}
                  <div className="relative w-full sm:w-48 h-56 sm:h-auto shrink-0">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-[#3068F5] text-xs font-semibold uppercase tracking-wider mb-1">
                        {f.experience} Erfahrung
                      </p>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{f.name}</h3>
                      <p className="text-slate-500 text-sm mb-3">{f.role}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{f.description}</p>

                      {/* Quote */}
                      <blockquote className="border-l-4 border-[#5B8CFF]/30 pl-4 mb-4">
                        <p className="text-slate-600 text-sm italic">&ldquo;{f.quote}&rdquo;</p>
                        <cite className="text-xs text-slate-400 mt-1 block">— {f.quoteAuthor}</cite>
                      </blockquote>
                    </div>

                    {/* Qualifications */}
                    <div className="flex flex-wrap gap-2">
                      {f.qualifications.map((q) => (
                        <span
                          key={q}
                          className="px-2.5 py-1 rounded-lg bg-[#EEF2F7] border border-[#5B8CFF]/20 text-[#3068F5] text-xs font-medium"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{backgroundColor:"#2A3142"}}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Bereit für echte Erste Hilfe?
            </h2>
            <p className="text-slate-400 mb-8">
              Finden Sie Ihren nächsten Kurs oder fragen Sie direkt ein Firmenangebot an.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kurse"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base hover:scale-105 transition-transform"
                style={{ backgroundColor: "#3068F5" }}
              >
                Nächsten Kurs finden
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/4961712777284"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base hover:scale-105 transition-transform border border-slate-700 hover:border-slate-500"
              >
                Firmenangebot anfragen
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
