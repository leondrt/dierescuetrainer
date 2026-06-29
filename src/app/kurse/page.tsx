import type { Metadata } from "next";
import KursePageClient from "./kurse-client";

export const metadata: Metadata = {
  title: "Unsere Kurse | Die Rescue Trainer",
  description:
    "Alle Erste-Hilfe-Kurse im Überblick: Betriebliche Ersthelfer, Arztpraxen & Kliniken, Erste Hilfe am Kind und Führerscheinbewerber. DGUV-zertifiziert.",
};

export default function KursePage() {
  return <KursePageClient />;
}
