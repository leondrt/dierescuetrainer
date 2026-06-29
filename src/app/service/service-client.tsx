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
  Shield,
  FileText,
  CreditCard,
  HelpCircle,
  Send,
  Loader2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen an."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  betreff: z.string().min(1, "Bitte wählen Sie einen Betreff."),
  nachricht: z.string().min(10, "Bitte geben Sie eine Nachricht ein."),
});

const ersatzSchema = z.object({
  vorname: z.string().min(2, "Pflichtfeld"),
  nachname: z.string().min(2, "Pflichtfeld"),
  geburtsdatum: z.string().min(1, "Pflichtfeld"),
  email: z.string().email("Gültige E-Mail erforderlich"),
  kursdatum: z.string().min(1, "Pflichtfeld"),
  kursort: z.string().min(2, "Pflichtfeld"),
});

type ContactData = z.infer<typeof contactSchema>;
type ErsatzData = z.infer<typeof ersatzSchema>;

const tabs = [
  { id: "kontakt", label: "Kontakt", icon: Mail },
  { id: "zertifikat", label: "Zertifikat prüfen", icon: Shield },
  { id: "ersatz", label: "Ersatzbescheinigung", icon: FileText },
  { id: "bg", label: "BG & UK Abrechnung", icon: CreditCard },
];

const faqs = [
  {
    q: "Wie lange ist mein Erste-Hilfe-Kurs gültig?",
    a: "Für betriebliche Ersthelfer gilt eine Gültigkeitsdauer von 2 Jahren (DGUV V2). Für den Führerschein ist der Kurs unbefristet gültig.",
  },
  {
    q: "Kann mein Betrieb die BG für den Kurs abrechnen?",
    a: "Ja! Bei betrieblichen Ersthelfern übernimmt in der Regel die zuständige Berufsgenossenschaft oder Unfallkasse die Kosten. Wir unterstützen Sie bei der Abrechnung.",
  },
  {
    q: "Wie erhalte ich eine Ersatzbescheinigung?",
    a: "Füllen Sie das Formular im Tab 'Ersatzbescheinigung' aus. Eine Bearbeitungsgebühr von 10€ fällt an. Wir senden die Bescheinigung per E-Mail.",
  },
  {
    q: "Bieten Sie auch Kurse vor Ort im Unternehmen an?",
    a: "Ja, alle unsere Kurse können als Inhouse-Schulung bei Ihnen durchgeführt werden. Kontaktieren Sie uns für ein individuelles Angebot.",
  },
];

function ContactForm() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactData) {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    console.log(data);
    toast.success("Nachricht gesendet!", {
      description: "Wir melden uns innerhalb von 24 Stunden.",
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="c-name" className="text-slate-700 text-sm mb-1.5 block font-medium">
            Name *
          </Label>
          <Input id="c-name" placeholder="Max Mustermann" {...register("name")}
            className="border-slate-200 rounded-xl focus:border-blue-400" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="c-email" className="text-slate-700 text-sm mb-1.5 block font-medium">
            E-Mail *
          </Label>
          <Input id="c-email" type="email" placeholder="max@beispiel.de" {...register("email")}
            className="border-slate-200 rounded-xl focus:border-blue-400" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="c-betreff" className="text-slate-700 text-sm mb-1.5 block font-medium">
          Betreff *
        </Label>
        <select id="c-betreff" {...register("betreff")}
          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-400 text-sm">
          <option value="">Bitte wählen...</option>
          <option value="kurs">Kurs buchen</option>
          <option value="firma">Firmenanfrage</option>
          <option value="rechnung">Rechnung / Abrechnung</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
        {errors.betreff && <p className="text-red-500 text-xs mt-1">{errors.betreff.message}</p>}
      </div>
      <div>
        <Label htmlFor="c-nachricht" className="text-slate-700 text-sm mb-1.5 block font-medium">
          Nachricht *
        </Label>
        <Textarea id="c-nachricht" rows={5} placeholder="Wie können wir Ihnen helfen?"
          {...register("nachricht")}
          className="border-slate-200 rounded-xl focus:border-blue-400 resize-none" />
        {errors.nachricht && <p className="text-red-500 text-xs mt-1">{errors.nachricht.message}</p>}
      </div>
      <Button type="submit" disabled={sending} size="lg"
        className="w-full text-white rounded-xl font-semibold"
        style={{ backgroundColor: "#3068F5" }}>
        {sending ? (
          <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Wird gesendet...</>
        ) : (
          <><Send className="mr-2 w-4 h-4" />Nachricht senden</>
        )}
      </Button>
    </form>
  );
}

function ErsatzForm() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ErsatzData>({ resolver: zodResolver(ersatzSchema) });

  async function onSubmit(data: ErsatzData) {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    console.log(data);
    toast.success("Anfrage eingegangen!", {
      description: "Wir bearbeiten Ihre Ersatzbescheinigung innerhalb von 2 Werktagen.",
    });
    reset();
  }

  return (
    <div>
      <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
        <p className="text-amber-800 text-sm font-medium">Bearbeitungsgebühr: 10€</p>
        <p className="text-amber-700 text-xs mt-1">
          Die Gebühr wird nach Eingang Ihrer Anfrage per Rechnung in Rechnung gestellt.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Vorname *</Label>
            <Input placeholder="Max" {...register("vorname")}
              className="border-slate-200 rounded-xl focus:border-blue-400" />
            {errors.vorname && <p className="text-red-500 text-xs mt-1">{errors.vorname.message}</p>}
          </div>
          <div>
            <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Nachname *</Label>
            <Input placeholder="Mustermann" {...register("nachname")}
              className="border-slate-200 rounded-xl focus:border-blue-400" />
            {errors.nachname && <p className="text-red-500 text-xs mt-1">{errors.nachname.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Geburtsdatum *</Label>
            <Input type="date" {...register("geburtsdatum")}
              className="border-slate-200 rounded-xl focus:border-blue-400" />
            {errors.geburtsdatum && <p className="text-red-500 text-xs mt-1">{errors.geburtsdatum.message}</p>}
          </div>
          <div>
            <Label className="text-slate-700 text-sm mb-1.5 block font-medium">E-Mail *</Label>
            <Input type="email" placeholder="max@beispiel.de" {...register("email")}
              className="border-slate-200 rounded-xl focus:border-blue-400" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Kursdatum *</Label>
            <Input type="date" {...register("kursdatum")}
              className="border-slate-200 rounded-xl focus:border-blue-400" />
            {errors.kursdatum && <p className="text-red-500 text-xs mt-1">{errors.kursdatum.message}</p>}
          </div>
          <div>
            <Label className="text-slate-700 text-sm mb-1.5 block font-medium">Kursort *</Label>
            <Input placeholder="z. B. Oberursel" {...register("kursort")}
              className="border-slate-200 rounded-xl focus:border-blue-400" />
            {errors.kursort && <p className="text-red-500 text-xs mt-1">{errors.kursort.message}</p>}
          </div>
        </div>
        <Button type="submit" disabled={sending} size="lg"
          className="w-full text-white rounded-xl font-semibold"
          style={{ backgroundColor: "#3068F5" }}>
          {sending ? (
            <><Loader2 className="mr-2 w-4 h-4 animate-spin" />Wird gesendet...</>
          ) : (
            <><Send className="mr-2 w-4 h-4" />Ersatzbescheinigung anfordern</>
          )}
        </Button>
      </form>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-medium text-slate-900 text-sm pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1 border-t border-slate-100">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ServicePageClient() {
  const [activeTab, setActiveTab] = useState("kontakt");

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
              Support Center
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase text-white mb-4">
              WIE KÖNNEN WIR{" "}
              <span style={{color:"#5B8CFF"}}>HELFEN?</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Kontaktformular, Zertifikat prüfen, Ersatzbescheinigung, BG-Abrechnung — alles hier.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 text-sm">
                Mo–Sa:{" "}
                <a href="tel:+4961712777284" className="text-blue-400 hover:underline">
                  +49 6171 2777284
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                style={
                  activeTab === tab.id
                    ? { backgroundColor: "#3068F5" }
                    : {}
                }
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "kontakt" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Kontaktformular</h2>
                <p className="text-slate-500 text-sm mb-8">
                  Schreiben Sie uns — wir antworten innerhalb von 24 Stunden.
                </p>
                <ContactForm />
              </div>
            )}

            {activeTab === "zertifikat" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Zertifikat validieren</h2>
                <p className="text-slate-500 text-sm mb-8">
                  Prüfen Sie die Echtheit eines ausgestellten Kurszertifikats.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
                  <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <p className="text-slate-700 mb-6">
                    Zur Zertifikat-Validierung gelangen Sie über unsere dedizierte Seite.
                  </p>
                  <Link
                    href="/zertifikat-validierung"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm hover:scale-105 transition-transform"
                    style={{ backgroundColor: "#3068F5" }}
                  >
                    Zur Zertifikat-Prüfung
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "ersatz" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Ersatzbescheinigung</h2>
                <p className="text-slate-500 text-sm mb-8">
                  Sie haben Ihre Bescheinigung verloren? Wir stellen Ihnen eine Ersatzbescheinigung aus.
                </p>
                <ErsatzForm />
              </div>
            )}

            {activeTab === "bg" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">BG & UK Abrechnung</h2>
                <p className="text-slate-500 text-sm mb-8">
                  Informationen zur Abrechnung über Berufsgenossenschaft oder Unfallkasse.
                </p>
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-slate-900 mb-3">Wer kann abrechnen?</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Betriebe, die gesetzlich zur Ausbildung von Ersthelfern verpflichtet sind, können die
                      Kurskosten direkt über ihre Berufsgenossenschaft (BG) oder Unfallkasse (UK) abrechnen.
                      Wir unterstützen Sie bei diesem Prozess.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-slate-900 mb-3">Wie funktioniert die Abrechnung?</h3>
                    <ol className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2"><span className="font-bold text-blue-600">1.</span> Buchen Sie Ihren Kurs bei uns</li>
                      <li className="flex gap-2"><span className="font-bold text-blue-600">2.</span> Wir stellen eine BG-konforme Rechnung aus</li>
                      <li className="flex gap-2"><span className="font-bold text-blue-600">3.</span> Sie reichen die Rechnung bei Ihrer BG/UK ein</li>
                      <li className="flex gap-2"><span className="font-bold text-blue-600">4.</span> Die BG/UK erstattet die Kosten direkt</li>
                    </ol>
                  </div>
                  <div className="text-center">
                    <a
                      href="https://wa.me/4961712777284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm hover:scale-105 transition-transform"
                      style={{ backgroundColor: "#25D366" }}
                    >
                      Beratung per WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* FAQ */}
          <div className="mt-20">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">Häufige Fragen</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
