import type { Metadata } from "next";
import KarrierePageClient from "./karriere-client";

export const metadata: Metadata = {
  title: "Karriere | Die Rescue Trainer",
  description:
    "Werde Heldenmacher! Erste-Hilfe Ausbilder (m/w/d) auf Honorarbasis. 18–35€/h, 100% digital & modern, maximale Freiheit.",
};

export default function KarrierePage() {
  return <KarrierePageClient />;
}
