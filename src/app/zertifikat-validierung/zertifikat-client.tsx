"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Lock, Zap, Search, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const trustSignals = [
  { icon: Shield, title: "DGUV Zertifiziert", description: "Alle Zertifikate entsprechen dem DGUV-Standard." },
  { icon: Lock, title: "Manipulationssicher", description: "Eindeutige 16-stellige Prüfcodes." },
  { icon: Zap, title: "Sofortige Prüfung", description: "Echtheit in Sekunden bestätigt." },
];

export default function ZertifikatPageClient() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "valid" | "invalid">("idle");

  async function handleCheck() {
    if (code.trim().length !== 16) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    // Demo: codes starting with "DRT" are "valid"
    setStatus(code.toUpperCase().startsWith("DRT") ? "valid" : "invalid");
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
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase text-white mb-4">
              ZERTIFIKAT{" "}
              <span style={{color:"#5B8CFF"}}>
                VALIDIEREN
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Prüfen Sie die Echtheit eines ausgestellten Kurszertifikats der Die Rescue Trainer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Validator */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Zertifikat prüfen</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-slate-700 text-sm mb-1.5 block font-medium">
                  Zertifikat-Code (16 Zeichen)
                </Label>
                <Input
                  value={code}
                  onChange={(e) => { setCode(e.target.value.toUpperCase()); setStatus("idle"); }}
                  placeholder="z. B. DRT1234ABCD5678"
                  maxLength={16}
                  className="border-slate-200 rounded-xl focus:border-blue-400 font-mono tracking-widest text-center text-lg"
                />
                <p className="text-slate-400 text-xs mt-1 text-right">{code.length}/16</p>
              </div>

              <Button
                onClick={handleCheck}
                disabled={status === "loading" || code.trim().length === 0}
                size="lg"
                className="w-full text-white rounded-xl font-semibold"
                style={{ backgroundColor: "#3068F5" }}
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Wird geprüft...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Zertifikat prüfen
                  </span>
                )}
              </Button>

              {/* Result */}
              {status === "valid" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800 text-sm">Zertifikat gültig</p>
                    <p className="text-green-700 text-xs mt-0.5">
                      Dieses Zertifikat wurde von Die Rescue Trainer ausgestellt und ist echt.
                    </p>
                  </div>
                </motion.div>
              )}

              {status === "invalid" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800 text-sm">Zertifikat nicht gefunden</p>
                    <p className="text-red-700 text-xs mt-0.5">
                      Dieser Code konnte nicht verifiziert werden. Bitte prüfen Sie den Code und versuchen Sie es erneut.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* QR mention */}
          <div className="mt-6 flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
            <QrCode className="w-8 h-8 text-blue-500 shrink-0" />
            <div>
              <p className="text-slate-900 text-sm font-medium">QR-Code auf dem Zertifikat</p>
              <p className="text-slate-500 text-xs">
                Alle ausgestellten Zertifikate enthalten einen QR-Code, der direkt zu dieser Prüfseite führt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 border-t border-slate-100" style={{backgroundColor:"#EEF2F7"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustSignals.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 shrink-0">
                  <t.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{t.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
