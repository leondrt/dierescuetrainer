import type { Metadata } from "next";
import ZertifikatPageClient from "./zertifikat-client";

export const metadata: Metadata = {
  title: "Zertifikat validieren | Die Rescue Trainer",
  description:
    "Prüfen Sie die Echtheit eines Kurszertifikats der Die Rescue Trainer. DGUV-zertifiziert, manipulationssicher, sofortige Prüfung.",
};

export default function ZertifikatPage() {
  return <ZertifikatPageClient />;
}
