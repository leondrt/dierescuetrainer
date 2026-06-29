import type { Metadata } from "next";
import PhilosophiePageClient from "./philosophie-client";

export const metadata: Metadata = {
  title: "Über uns & Philosophie | Die Rescue Trainer",
  description:
    "Lernen Sie die Gründer Robert Knecht und Leon Gärtner kennen. Aktive Notfallsanitäter, DGUV Ausbilder und Überzeugungstäter für echte Erste-Hilfe-Ausbildung.",
};

export default function PhilosophiePage() {
  return <PhilosophiePageClient />;
}
