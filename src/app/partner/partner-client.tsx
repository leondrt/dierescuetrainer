"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  UserPlus,
  Package,
  Share2,
  TrendingUp,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  firma: z.string().min(2, "Pflichtfeld"),
  ansprechpartner: z.string().min(2, "Pflichtfeld"),
  telefon: z.string().min(5, "Pflichtfeld"),
  email: z.string().email("Gültige E-Mail erforderlich"),
  kooperationsart: z.string().min(1, "Bitte wählen"),
  nachricht: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const steps = [
  { icon: UserPlus, step: "01", title: "Registrieren", description: "Füllen Sie das Partnerformular aus — kostenfrei und unverbindlich." },
  { icon: Package, step: "02", title: "Material erhalten", description: "Wir stellen Ihnen digitale Materialien und Gutschein-Links bereit." },
  { icon: Share2, step: "03", title: "Verteilen", description: "Sie empfehlen unsere Kurse Ihren Fahrschülern — ganz einfach." },
  { icon: TrendingUp, step: "04", title: "Profitieren", description: "Sie erhalten Provision oder Ihre Schüler profitieren vom Rabatt." },
];

const variants = [
  {
    name: "Variante A",
    provision: "10€",
    rabatt: "5€",
    highlight: false,
    description: "Maximale Provision für Sie als Fahrschule",
  },
  {
    name: "Variante B",
    provision: "5€",
    rabatt: "10€",
    highlight: true,
    description: "Ausgeglichene Kombination — am beliebtesten",
  },
  {
    name: "Variante C",
    provision: "0€",
    rabatt: "15€",
    highlight: false,
    description: "Maximaler Schülerrabatt — ideale Kundenbindung",
  },
];

export default function PartnerPageClient() {
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
    toast.success("Partneranfrage eingegangen!", {
      description: "Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
    });
    reset();
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{backgroundColor:"#2A3142"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 mb-4">
              Kooperation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white mb-4">
              FAHRSCHUL-KOOPERATION &amp;{" "}
              <span style={{color:"#5B8CFF"}}>PARTNER WERDEN</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Empfehlen Sie unsere Erste-Hilfe-Kurse an Ihre Fahrschüler und profitieren Sie von attraktiven Provisionen oder Rabatten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
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
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">So funktioniert es</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-4 bg-blue-50">
                  <s.icon className="w-7 h-7 text-blue-600" />
                </div>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#3068F5" }}
                >
                  {s.step}
                </p>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing models */}
      <section className="py-20" style={{backgroundColor:"#EEF2F7"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Modelle</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Ihre Optionen</h2>
            <p className="text-slate-500 mt-2">Wählen Sie das Modell, das am besten zu Ihrer Fahrschule passt.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {variants.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-8 relative overflow-hidden ${
                  v.highlight
                    ? "border-blue-300 shadow-lg shadow-blue-100"
                    : "border-slate-200 bg-white"
                }`}
                style={v.highlight ? { background: "linear-gradient(135deg, #eff6ff, #eef2ff)" } : {}}
              >
                {v.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white text-xs">Beliebt</Badge>
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-6">{v.name}</h3>
                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Ihre Provision</p>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: "#3068F5" }}
                    >
                      {v.provision}
                    </p>
                    <p className="text-xs text-slate-400">pro Buchung</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Schülerrabatt</p>
                    <p className="text-3xl font-bold text-green-600">{v.rabatt}</p>
                    <p className="text-xs text-slate-400">Ersparnis</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Partner werden</h2>
            <p className="text-slate-500">Unverbindliche Anfrage — wir melden uns innerhalb von 48 Stunden.</p>
          </motion.div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Firma / Fahrschule *</Label>
                  <Input placeholder="Fahrschule Muster" {...register("firma")}
                    className="border-slate-200 rounded-xl focus:border-blue-400 bg-white" />
                  {errors.firma && <p className="text-red-500 text-xs mt-1">{errors.firma.message}</p>}
                </div>
                <div>
                  <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Ansprechpartner *</Label>
                  <Input placeholder="Max Mustermann" {...register("ansprechpartner")}
                    className="border-slate-200 rounded-xl focus:border-blue-400 bg-white" />
                  {errors.ansprechpartner && <p className="text-red-500 text-xs mt-1">{errors.ansprechpartner.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Telefon *</Label>
                  <Input type="tel" placeholder="+49 ..." {...register("telefon")}
                    className="border-slate-200 rounded-xl focus:border-blue-400 bg-white" />
                  {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon.message}</p>}
                </div>
                <div>
                  <Label className="text-slate-700 text-sm mb-1.5 block font-medium">E-Mail *</Label>
                  <Input type="email" placeholder="info@fahrschule.de" {...register("email")}
                    className="border-slate-200 rounded-xl focus:border-blue-400 bg-white" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Art der Kooperation *</Label>
                <select {...register("kooperationsart")}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-400 text-sm">
                  <option value="">Bitte wählen...</option>
                  <option value="varianteA">Variante A — 10€ Provision + 5€ Rabatt</option>
                  <option value="varianteB">Variante B — 5€ Provision + 10€ Rabatt</option>
                  <option value="varianteC">Variante C — 0€ Provision + 15€ Rabatt</option>
                  <option value="sonstiges">Sonstiges / Beratung gewünscht</option>
                </select>
                {errors.kooperationsart && <p className="text-red-500 text-xs mt-1">{errors.kooperationsart.message}</p>}
              </div>

              <div>
                <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Nachricht (optional)</Label>
                <Textarea rows={4} placeholder="Ihre Fragen oder Anmerkungen..."
                  {...register("nachricht")}
                  className="border-slate-200 rounded-xl focus:border-blue-400 bg-white resize-none" />
              </div>

              <Button type="submit" disabled={sending} size="lg"
                className="w-full text-white rounded-xl font-semibold"
                style={{ backgroundColor: "#3068F5" }}>
                {sending ? (
                  <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Wird gesendet...</>
                ) : (
                  <><Send className="mr-2 w-4 h-4" />Partneranfrage senden</>
                )}
              </Button>
            </form>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            {["Kostenlos & unverbindlich", "Schnelle Rückmeldung", "Flexible Konditionen"].map((t) => (
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
