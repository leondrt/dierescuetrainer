import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Die Rescue Trainer | Erste Hilfe Ausbildung",
  description:
    "Professionelle Erste-Hilfe-Kurse in Ihrer Region. DGUV-zertifiziert, praxisnah und modern. Retten ist kein Zufall — Next Level Erste Hilfe.",
  keywords:
    "Erste Hilfe, Kurs, Ausbildung, DGUV, BG, Erste Hilfe am Kind, Notfalltraining, Inhouse Schulung",
  openGraph: {
    title: "Die Rescue Trainer | Retten ist kein Zufall",
    description:
      "Professionelle Erste-Hilfe-Kurse. DGUV-zertifiziert, 2000+ Teilnehmer, 4.9/5 Sterne.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${dmSans.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body className="font-[family-name:var(--font-dm-sans)] antialiased min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
