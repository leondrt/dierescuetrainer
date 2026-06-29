"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Activity, ArrowRight, ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

const WORDS = ["RETTEN", "IST", "KEIN", "ZUFALL."];
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "30%"]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hlw.jpg"
          alt="Erste-Hilfe Training"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <Image src="/images/dguv_card.png" width={60} height={30} alt="DGUV" className="object-contain opacity-90" />
            DGUV &amp; BG/Unfallkasse zertifiziert
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <Image
              src="/images/drt_logo.webp"
              width={48}
              height={48}
              alt="Die Rescue Trainer"
              className="brightness-0 invert"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm text-white uppercase tracking-widest">
                DIE RESCUE TRAINER
              </span>
              <span className="text-xs text-blue-300 tracking-wide">
                Next Level Erste Hilfe
              </span>
            </div>
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4 uppercase">
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE }}
                style={{
                  color: word === "ZUFALL." ? "#5B8CFF" : "white",
                  display: "inline-block",
                  marginRight: "0.25em",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
            className="text-xl sm:text-2xl text-slate-300 font-light mb-3"
          >
            Next Level Erste Hilfe
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65, ease: EASE }}
            className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Professionelle Erste-Hilfe-Kurse für Privatpersonen, Unternehmen
            und medizinische Einrichtungen. Praxisnah, modern und mit über
            2.000 zufriedenen Teilnehmern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.75, ease: EASE }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <ButtonLink
              href="/kurse"
              size="lg"
              className="text-white rounded-xl px-8 h-14 text-base font-semibold shadow-lg transition-all hover:scale-105 justify-center"
              style={{
                backgroundColor: "#3068F5",
              } as React.CSSProperties}
            >
              Kurs finden
              <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonLink>
            <a
              href="https://wa.me/4961712777284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 h-14 text-base font-semibold text-white transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current shrink-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right: Vital signs display */}
        <motion.div
          initial={{ opacity: 0, x: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
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

            {/* ECG line — looping path animation */}
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
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </svg>
            </div>

            {/* Vitals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Heart className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400 text-xs">Herzfrequenz</span>
                </div>
                <div className="flex items-baseline gap-1">
                  {/* Heartbeat pulse on the number */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      opacity: { delay: 1.2, duration: 0.3 },
                      scale: {
                        delay: 1.5,
                        duration: 0.25,
                        repeat: Infinity,
                        repeatDelay: 0.8,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ display: "inline-block" }}
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
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
