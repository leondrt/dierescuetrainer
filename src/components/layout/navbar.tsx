"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Cross, Menu, X, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/kurse", label: "Kurse" },
  { href: "/#service", label: "Service" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-600 group-hover:bg-red-700 transition-colors">
              <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-bold text-base tracking-tight transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Die Rescue
              </span>
              <span
                className={`font-bold text-base tracking-tight transition-colors ${
                  scrolled ? "text-red-600" : "text-red-300"
                }`}
              >
                Trainer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+4961712777284"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-red-600 ${
                scrolled ? "text-slate-600" : "text-white/80"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+49 6171 2777284</span>
            </a>
            <ButtonLink
              href="/kontakt"
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              Kurs anfragen
            </ButtonLink>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <button
                  className={`md:hidden p-2 rounded-lg transition-colors ${
                    scrolled
                      ? "text-slate-700 hover:bg-slate-100"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Menü öffnen"
                />
              }
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-600">
                      <Cross className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-slate-900">
                      Die Rescue Trainer
                    </span>
                  </Link>
                  <SheetClose
                    render={
                      <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors" />
                    }
                  >
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-6 gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-3 py-3 rounded-lg text-slate-700 font-medium hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-6 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href="tel:+4961712777284"
                    className="flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+49 6171 2777284</span>
                  </a>
                  <ButtonLink
                    href="/kontakt"
                    className="bg-red-600 hover:bg-red-700 text-white w-full rounded-lg justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Kurs anfragen
                  </ButtonLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
