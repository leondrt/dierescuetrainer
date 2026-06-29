"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen an."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  kurstyp: z.string().min(1, "Bitte wählen Sie einen Kurstyp."),
  nachricht: z.string().min(10, "Bitte geben Sie eine kurze Nachricht ein."),
});

type FormData = z.infer<typeof schema>;

export default function ContactCTA() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    console.log("Form data:", data);
    toast.success("Nachricht gesendet!", {
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    reset();
  }

  return (
    <section id="kontakt-cta" className="py-20 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit für{" "}
              <span className="font-[family-name:var(--font-playfair)] italic text-red-400">
                Ihren Kurs?
              </span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Schreiben Sie uns — wir beraten Sie kostenlos und finden den
              richtigen Kurs für Sie oder Ihr Team. Wir antworten innerhalb von
              24 Stunden.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@dierescuetrainer.de"
                className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-red-500/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">E-Mail</p>
                  <p className="font-medium">info@dierescuetrainer.de</p>
                </div>
              </a>
              <a
                href="tel:+4961712777284"
                className="flex items-center gap-3 text-slate-300 hover:text-red-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-red-500/50 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Telefon</p>
                  <p className="font-medium">+49 6171 2777284</p>
                </div>
              </a>
            </div>

            <div className="mt-10 p-5 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <p className="text-slate-400 text-sm">
                <span className="text-white font-medium">
                  Kostenlose Beratung:
                </span>{" "}
                Nicht sicher, welcher Kurs der richtige ist? Rufen Sie uns an
                oder schreiben Sie uns — wir helfen Ihnen gerne weiter.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-white font-semibold text-lg mb-6">
                Kursanfrage senden
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-slate-300 text-sm mb-1.5 block"
                  >
                    Ihr Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    {...register("name")}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-red-500/20 rounded-xl"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-slate-300 text-sm mb-1.5 block"
                  >
                    E-Mail-Adresse
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    {...register("email")}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-red-500/20 rounded-xl"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="kurstyp"
                    className="text-slate-300 text-sm mb-1.5 block"
                  >
                    Kurstyp
                  </Label>
                  <select
                    id="kurstyp"
                    {...register("kurstyp")}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-red-500 text-sm"
                  >
                    <option value="">Bitte auswählen...</option>
                    <option value="erste-hilfe">Erste Hilfe Ausbildung</option>
                    <option value="notfalltraining">Notfalltraining</option>
                    <option value="kind">Erste Hilfe am Kind</option>
                    <option value="inhouse">Inhouse Schulung</option>
                  </select>
                  {errors.kurstyp && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.kurstyp.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="nachricht"
                    className="text-slate-300 text-sm mb-1.5 block"
                  >
                    Ihre Nachricht
                  </Label>
                  <Textarea
                    id="nachricht"
                    rows={4}
                    placeholder="Erzählen Sie uns von Ihren Anforderungen..."
                    {...register("nachricht")}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-red-500 focus:ring-red-500/20 rounded-xl resize-none"
                  />
                  {errors.nachricht && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.nachricht.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-semibold shadow-lg hover:shadow-red-900/30 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {sending ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Anfrage senden
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
