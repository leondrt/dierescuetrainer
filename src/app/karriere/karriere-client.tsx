"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Clock,
  Euro,
  Smartphone,
  Stethoscope,
  GraduationCap,
  Users,
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Pflichtfeld"),
  telefon: z.string().min(5, "Pflichtfeld"),
  email: z.string().email("Gültige E-Mail erforderlich"),
  status: z.string().min(1, "Bitte wählen"),
  nachricht: z.string().optional(),
  lehrschein: z.boolean().optional(),
  medVorkenntnisse: z.boolean().optional(),
  quereinsteiger: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const benefits = [
  {
    icon: Clock,
    title: "Maximale Freiheit",
    description: "Sie bestimmen Ihre Arbeitszeiten und die Anzahl Ihrer Einsätze selbst.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Euro,
    title: "Honorarbasis 18–35€/h",
    description: "Faire Vergütung je nach Qualifikation und Einsatzart — transparent und pünktlich.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: Smartphone,
    title: "100% Digital & Modern",
    description: "Moderne Lernmaterialien, digitale Simulatoren und ein kollegiales Team.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

const targets = [
  { icon: Stethoscope, label: "Medizinisches Personal", detail: "Notfallsanitäter, Rettungsassistenten, Krankenpfleger" },
  { icon: GraduationCap, label: "Quereinsteiger", detail: "Mit Motivation und Lernbereitschaft" },
  { icon: Users, label: "Studierende & Rentner", detail: "Ideal als Neben- oder Zuverdienst" },
];

const steps = [
  { step: "01", title: "Bewerbung", description: "Füllen Sie das Formular unten aus oder schreiben Sie uns per WhatsApp." },
  { step: "02", title: "Qualifikation", description: "Wir prüfen Ihre Unterlagen und führen ein kurzes Kennenlerngespräch." },
  { step: "03", title: "Starten", description: "Nach kurzer Einarbeitung sind Sie startklar — flexibel und selbstbestimmt." },
];

export default function KarrierePageClient() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    console.log(data);
    toast.success("Bewerbung eingegangen!", {
      description: "Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
    });
    reset();
  }

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "#2A3142" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, #5B8CFF 0%, transparent 50%), radial-gradient(circle at 70% 30%, #3068F5 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white/10 text-blue-200 border-white/20 mb-4">
              Wir suchen dich
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white mb-4">
              WERDE{" "}
              <span style={{color:"#5B8CFF"}}>HELDENMACHER</span>
            </h1>
            <p className="text-blue-100 text-xl mb-6">
              Erste-Hilfe Ausbilder (m/w/d) — Honorarbasis, flexibel, sinnvoll
            </p>
            <a
              href="#bewerbung"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-slate-900 font-semibold text-base hover:scale-105 transition-transform bg-white"
            >
              Jetzt bewerben
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Deine Vorteile</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Was wir bieten</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${b.bg} border ${b.border} rounded-2xl p-8 text-center hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm mx-auto mb-5">
                  <b.icon className={`w-7 h-7 ${b.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we search */}
      <section className="py-20" style={{backgroundColor:"#EEF2F7"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Zielgruppen</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Wen suchen wir?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targets.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 shrink-0">
                  <t.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t.label}</h3>
                  <p className="text-slate-500 text-sm">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Ablauf</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">In 3 Schritten zum Start</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div
                  className="text-5xl font-bold mb-4 block"
                  style={{ color: "#3068F5" }}
                >
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="bewerbung" className="py-20" style={{backgroundColor:"#EEF2F7"}}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Jetzt bewerben</h2>
            <p className="text-slate-500">Einfach Formular ausfüllen — wir melden uns innerhalb von 48 Stunden.</p>
          </motion.div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Name *</Label>
                  <Input placeholder="Max Mustermann" {...register("name")}
                    className="border-slate-200 rounded-xl focus:border-blue-400" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Telefon *</Label>
                  <Input type="tel" placeholder="+49 ..." {...register("telefon")}
                    className="border-slate-200 rounded-xl focus:border-blue-400" />
                  {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon.message}</p>}
                </div>
              </div>

              <div>
                <Label className="text-slate-700 text-sm mb-1.5 block font-medium">E-Mail *</Label>
                <Input type="email" placeholder="max@beispiel.de" {...register("email")}
                  className="border-slate-200 rounded-xl focus:border-blue-400" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Aktueller Status *</Label>
                <select {...register("status")}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-400 text-sm">
                  <option value="">Bitte wählen...</option>
                  <option value="rettungsdienst">Aktiv im Rettungsdienst</option>
                  <option value="medizin">Sonstiges med. Personal</option>
                  <option value="quereinsteiger">Quereinsteiger</option>
                  <option value="student">Student/in</option>
                  <option value="rentner">Rentner/in</option>
                </select>
                {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>}
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <p className="text-slate-700 text-sm font-medium">Ich bringe mit (optional):</p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" {...register("lehrschein")}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600" />
                  <span className="text-slate-600 text-sm">Lehrschein / Ausbilderqualifikation</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" {...register("medVorkenntnisse")}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600" />
                  <span className="text-slate-600 text-sm">Medizinische Vorkenntnisse</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" {...register("quereinsteiger")}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600" />
                  <span className="text-slate-600 text-sm">Quereinsteiger mit Motivation</span>
                </label>
              </div>

              <div>
                <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Nachricht (optional)</Label>
                <Textarea rows={4} placeholder="Erzählen Sie uns von sich..."
                  {...register("nachricht")}
                  className="border-slate-200 rounded-xl focus:border-blue-400 resize-none" />
              </div>

              <Button type="submit" disabled={sending} size="lg"
                className="w-full text-white rounded-xl font-semibold"
                style={{ backgroundColor: "#3068F5" }}>
                {sending ? (
                  <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Wird gesendet...</>
                ) : (
                  <><Send className="mr-2 w-4 h-4" />Bewerbung abschicken</>
                )}
              </Button>
            </form>
          </div>

          {/* Trust */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            {["Schnelle Rückmeldung", "Kein Bewerbungsaufwand", "Faire Konditionen"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
