"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("drt-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("drt-cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("drt-cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 260, damping: 24 },
          }}
          exit={{
            y: 80,
            opacity: 0,
            transition: { duration: 0.2, ease: "easeIn" },
          }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="flex-1">
                <p className="font-bold mb-1" style={{ color: "#2A3142" }}>
                  Diese Website verwendet Cookies
                </p>
                <p className="text-sm text-gray-600">
                  Wir verwenden technisch notwendige Cookies, um den Betrieb der Website zu
                  gewährleisten. Optionale Cookies für Analyse und Marketing setzen wir nur mit
                  Ihrer Zustimmung ein. Mehr Informationen in unserer{" "}
                  <a href="/datenschutz" className="underline" style={{ color: "#3068F5" }}>
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <motion.button
                  onClick={reject}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Nur notwendige
                </motion.button>
                <motion.button
                  onClick={accept}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
                  style={{ backgroundColor: "#3068F5" }}
                >
                  Alle akzeptieren
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
