import type { Metadata } from "next";
import ServicePageClient from "./service-client";

export const metadata: Metadata = {
  title: "Service & Support | Die Rescue Trainer",
  description:
    "Kontaktformular, Zertifikat prüfen, Ersatzbescheinigung anfordern, BG & UK Abrechnung — alles an einem Ort.",
};

export default function ServicePage() {
  return <ServicePageClient />;
}
