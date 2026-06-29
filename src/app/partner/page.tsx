import type { Metadata } from "next";
import PartnerPageClient from "./partner-client";

export const metadata: Metadata = {
  title: "Fahrschul-Kooperation & Partner | Die Rescue Trainer",
  description:
    "Werden Sie Partner der Die Rescue Trainer. Fahrschulen profitieren von Provision und Schülerrabatten. Registrieren Sie sich jetzt.",
};

export default function PartnerPage() {
  return <PartnerPageClient />;
}
