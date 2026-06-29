import type { Metadata } from "next";
import KursePageClient from "./kurse-client";

export const metadata: Metadata = {
  title: "Unsere Kurse | Die Rescue Trainer",
  description:
    "Alle Erste-Hilfe-Kurse im Überblick: Grundausbildung, Notfalltraining, Erste Hilfe am Kind und Inhouse-Schulungen. DGUV-zertifiziert.",
};

export default function KursePage() {
  return <KursePageClient />;
}
