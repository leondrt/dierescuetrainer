import type { Metadata } from "next";
import KontaktPageClient from "./kontakt-client";

export const metadata: Metadata = {
  title: "Kontakt | Die Rescue Trainer",
  description:
    "Nehmen Sie Kontakt auf — wir beraten Sie kostenlos zu unseren Erste-Hilfe-Kursen und finden die richtige Lösung für Sie.",
};

export default function KontaktPage() {
  return <KontaktPageClient />;
}
