"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  Clock,
  Shield,
  Send,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen an."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  telefon: z.string().optional(),
  kurstyp: z.string().min(1, "Bitte wählen Sie einen Kurstyp."),
  teilnehmer: z.string().optional(),
  nachricht: z.string().min(10, "Bitte geben Sie eine kurze Nachricht ein."),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@dierescuetrainer.de",
    href: "mailto:info@dierescuetrainer.de",
    description: "Wir antworten innerhalb von 24h",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 6171 2777284",
    href: "tel:+4961712777284",
    description: "Mo–Fr 9:00–17:00 Uhr",
  },
  {
    icon: Clock,
    label: "Antwortzeit",
    value: "Innerhalb von 24h",
    href: null,
    description: "Auch an Wochenenden",
  },
  {
    icon: Shield,
    label: "Zertifizierung",
    value: "DGUV & BG/Unfallkasse",
    href: null,
    description: "Bundesweit anerkannt",
  },
];

export default function KontaktPageClient() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    console.log("Kontakt form data:", data);
    toast.success("Ihre Anfrage wurde gesendet!", {
      description:
        "Wir melden uns innerhalb von 24 Stunden bei Ihnen. Vielen Dank!",
    });
    reset();
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{backgroundColor:"#2A3142"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 mb-4">
              Kontakt aufnehmen
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase text-white mb-4">
              WIR SIND FÜR SIE{" "}
              <span style={{color:"#5B8CFF"}}>DA</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Haben Sie Fragen zu unseren Kursen? Möchten Sie ein Inhouse-Training
              buchen? Schreiben Sie uns — wir beraten Sie kostenlos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  So erreichen Sie uns
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Wir freuen uns auf Ihre Anfrage und melden uns schnellstmöglich
                  bei Ihnen.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-semibold text-sm">
                          {info.value}
                        </p>
                      )}
                      <p className="text-slate-400 text-xs mt-0.5">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info box */}
              <div className="p-5 rounded-xl bg-blue-50 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-900 text-sm">
                    Kostenlose Beratung
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sie wissen nicht, welcher Kurs der richtige ist? Kein Problem!
                  Wir beraten Sie unverbindlich und kostenlos — telefonisch oder
                  per E-Mail.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Kursanfrage senden
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-slate-700 text-sm mb-1.5 block font-medium"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Max Mustermann"
                        {...register("name")}
                        className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 rounded-xl"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-slate-700 text-sm mb-1.5 block font-medium"
                      >
                        E-Mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="max@beispiel.de"
                        {...register("email")}
                        className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 rounded-xl"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor="telefon"
                        className="text-slate-700 text-sm mb-1.5 block font-medium"
                      >
                        Telefon (optional)
                      </Label>
                      <Input
                        id="telefon"
                        type="tel"
                        placeholder="+49 ..."
                        {...register("telefon")}
                        className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="teilnehmer"
                        className="text-slate-700 text-sm mb-1.5 block font-medium"
                      >
                        Teilnehmerzahl (optional)
                      </Label>
                      <Input
                        id="teilnehmer"
                        type="number"
                        min="1"
                        placeholder="z. B. 12"
                        {...register("teilnehmer")}
                        className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="kurstyp"
                      className="text-slate-700 text-sm mb-1.5 block font-medium"
                    >
                      Gewünschter Kurstyp *
                    </Label>
                    <select
                      id="kurstyp"
                      {...register("kurstyp")}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-400 text-sm"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="erste-hilfe">
                        Erste Hilfe Ausbildung
                      </option>
                      <option value="notfalltraining">
                        Notfalltraining (Arztpraxis / Pflege)
                      </option>
                      <option value="kind">Erste Hilfe am Kind</option>
                      <option value="inhouse">
                        Inhouse Schulung (Unternehmen)
                      </option>
                      <option value="sonstiges">Sonstiges / Unsicher</option>
                    </select>
                    {errors.kurstyp && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.kurstyp.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="nachricht"
                      className="text-slate-700 text-sm mb-1.5 block font-medium"
                    >
                      Ihre Nachricht *
                    </Label>
                    <Textarea
                      id="nachricht"
                      rows={5}
                      placeholder="Beschreiben Sie kurz Ihre Situation oder Ihre Anforderungen..."
                      {...register("nachricht")}
                      className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 rounded-xl resize-none"
                    />
                    {errors.nachricht && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.nachricht.message}
                      </p>
                    )}
                  </div>

                  <p className="text-slate-400 text-xs">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und
                    nicht an Dritte weitergegeben.
                  </p>

                  <Button
                    type="submit"
                    disabled={sending}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-md shadow-blue-100 hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
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
    </>
  );
}
