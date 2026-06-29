import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Shield } from "lucide-react";

const navLinks = [
  { href: "/kurse", label: "Kurse" },
  { href: "/service", label: "Service" },
  { href: "/philosophie", label: "Über uns" },
  { href: "/karriere", label: "Karriere" },
  { href: "/partner", label: "Partner" },
  { href: "/impressum", label: "Impressum" },
];

const courses = [
  { href: "/kurse#betrieblich", label: "Betriebliche Ersthelfer" },
  { href: "/kurse#arztpraxen", label: "Arztpraxen & Kliniken" },
  { href: "/kurse#kind", label: "Erste Hilfe am Kind" },
  { href: "/kurse#fuehrerschein", label: "Führerscheinbewerber" },
];

export default function Footer() {
  return (
    <footer className="text-slate-300" style={{backgroundColor:"#2A3142"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/images/drt_logo.webp"
                width={40}
                height={40}
                alt="Die Rescue Trainer"
                className="brightness-0 invert"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm text-white uppercase tracking-widest">
                  DIE RESCUE TRAINER
                </span>
                <span className="text-xs text-[#5B8CFF] tracking-wide">
                  Next Level Erste Hilfe
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Moderne Notfallausbildung für eine sicherere Welt.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#5B8CFF] shrink-0" />
              <span className="text-xs text-slate-400">
                DGUV &amp; BG/Unfallkasse zertifiziert
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#5B8CFF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Unsere Kurse
            </h3>
            <ul className="flex flex-col gap-2">
              {courses.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-slate-400 hover:text-[#5B8CFF] transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:info@dierescuetrainer.de"
                  className="flex items-start gap-2 text-sm text-slate-400 hover:text-[#5B8CFF] transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>info@dierescuetrainer.de</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4961712777284"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#5B8CFF] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+49 6171 2777284</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Taunusstraße 20, 61440 Oberursel</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 Die Rescue Trainer. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
