"use client";

import { motion } from "motion/react";
import { Heart, Activity, ArrowRight, ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/40" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            DGUV &amp; BG/Unfallkasse zertifiziert
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          >
            Retten ist{" "}
            <span className="text-red-500 font-[family-name:var(--font-playfair)] italic">
              kein Zufall
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl sm:text-2xl text-slate-300 font-light mb-3"
          >
            Next Level Erste Hilfe
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Professionelle Erste-Hilfe-Kurse für Privatpersonen, Unternehmen
            und medizinische Einrichtungen. Praxisnah, modern und mit über
            2.000 zufriedenen Teilnehmern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <ButtonLink
              href="/kurse"
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 h-14 text-base font-semibold shadow-lg shadow-red-900/30 hover:shadow-xl hover:shadow-red-900/40 transition-all hover:scale-105 justify-center"
            >
              Kurs finden
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonLink>
            <ButtonLink
              href="/kontakt"
              size="lg"
              variant="outline"
              className="border-white/20 text-white bg-white/10 hover:bg-white/20 rounded-xl px-8 h-14 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105 justify-center"
            >
              Kurs anfragen
            </ButtonLink>
          </motion.div>
        </div>

        {/* Right: Vital signs display */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-shrink-0 w-full max-w-sm lg:max-w-xs xl:max-w-sm"
        >
          <div className="relative bg-slate-800/80 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
            {/* Monitor header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-400" />
                <span className="text-slate-300 text-sm font-medium">
                  Vitaldaten
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-green-400 text-xs">Live</span>
              </div>
            </div>

            {/* ECG line */}
            <div className="mb-6 h-16 relative overflow-hidden">
              <svg
                viewBox="0 0 300 60"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,30 L40,30 L50,30 L55,5 L60,55 L65,30 L80,30 L90,30 L95,5 L100,55 L105,30 L120,30 L160,30 L165,5 L170,55 L175,30 L190,30 L200,30 L205,5 L210,55 L215,30 L230,30 L270,30 L275,5 L280,55 L285,30 L300,30"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                />
              </svg>
            </div>

            {/* Vitals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-slate-400 text-xs">Herzfrequenz</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-3xl font-bold text-white"
                  >
                    82
                  </motion.span>
                  <span className="text-slate-400 text-sm">bpm</span>
                </div>
                <div className="text-green-400 text-xs mt-1">Normal</div>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Activity className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400 text-xs">SpO₂</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-3xl font-bold text-white"
                  >
                    98
                  </motion.span>
                  <span className="text-slate-400 text-sm">%</span>
                </div>
                <div className="text-green-400 text-xs mt-1">Optimal</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-xs text-slate-500 text-center">
                Mit dem richtigen Wissen Leben retten
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Mehr erfahren</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
