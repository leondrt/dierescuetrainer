"use client";

import { motion } from "framer-motion";
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
import Reveal from "@/components/ui/reveal";

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
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    console.log("Form data:", data);
    toast.success("Nachricht gesendet!", {
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    reset();
  }

  return (
    <section id="kontakt-cta" className="py-20 lg:py-28" style={{ backgroundColor: "#2A3142" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <Reveal delay={0} direction="left">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#5B8CFF" }}
            >
              Kontakt
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase mb-6 text-white">
              BEREIT{" "}
              <span style={{ color: "#5B8CFF" }}>DURCHZUSTARTEN?</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Schreiben Sie uns — wir beraten Sie kostenlos und finden den
              richtigen Kurs für Sie oder Ihr Team. Wir antworten innerhalb von
              24 Stunden.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@dierescuetrainer.de"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">E-Mail</p>
                  <p className="font-medium">info@dierescuetrainer.de</p>
                </div>
              </a>
              <a
                href="tel:+4961712777284"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Telefon</p>
                  <p className="font-medium">+49 6171 2777284</p>
                </div>
              </a>
              <a
                href="https://wa.me/4961712777284"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors group"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-700 group-hover:border-green-500/50 transition-colors"
                  style={{ backgroundColor: "#25D36620" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">WhatsApp</p>
                  <p className="font-medium">+49 6171 2777284</p>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.15} direction="right">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-white font-semibold text-lg mb-6">
                Kursanfrage senden
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-slate-300 text-sm mb-1.5 block">
                    Ihr Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    {...register("name")}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300 text-sm mb-1.5 block">
                    E-Mail-Adresse
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    {...register("email")}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="kurstyp" className="text-slate-300 text-sm mb-1.5 block">
                    Kurstyp
                  </Label>
                  <select
                    id="kurstyp"
                    {...register("kurstyp")}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-blue-500 text-sm"
                  >
                    <option value="">Bitte auswählen...</option>
                    <option value="betrieblich">Betriebliche Ersthelfer</option>
                    <option value="arztpraxen">Arztpraxen &amp; Kliniken</option>
                    <option value="kind">Erste Hilfe am Kind</option>
                    <option value="fuehrerschein">Führerscheinbewerber</option>
                  </select>
                  {errors.kurstyp && (
                    <p className="text-red-400 text-xs mt-1">{errors.kurstyp.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="nachricht" className="text-slate-300 text-sm mb-1.5 block">
                    Ihre Nachricht
                  </Label>
                  <Textarea
                    id="nachricht"
                    rows={4}
                    placeholder="Erzählen Sie uns von Ihren Anforderungen..."
                    {...register("nachricht")}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl resize-none"
                  />
                  {errors.nachricht && (
                    <p className="text-red-400 text-xs mt-1">{errors.nachricht.message}</p>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full text-white rounded-xl py-3 font-semibold shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#3068F5" }}
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
                </motion.div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
