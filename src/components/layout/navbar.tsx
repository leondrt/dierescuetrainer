"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/kurse", label: "Kurse" },
  { href: "/service", label: "Service" },
  { href: "/philosophie", label: "Über uns" },
];

const moreLinks = [
  { href: "/karriere", label: "Karriere" },
  { href: "/partner", label: "Partner" },
  { href: "/impressum", label: "Impressum" },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allMobileLinks = [...navLinks, ...moreLinks];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/drt_logo.webp"
              width={40}
              height={40}
              alt="Die Rescue Trainer"
              className={`transition-all ${scrolled ? "" : "brightness-0 invert"}`}
            />
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-sm tracking-widest uppercase transition-colors"
                style={{ color: scrolled ? "#2A3142" : "#ffffff" }}
              >
                DIE RESCUE TRAINER
              </span>
              <span
                className="text-xs tracking-wide transition-colors"
                style={{ color: scrolled ? "#5B8CFF" : "#93c5fd" }}
              >
                Next Level Erste Hilfe
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: scrolled ? "#2A3142" : "rgba(255,255,255,0.9)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3068F5")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = scrolled
                      ? "#2A3142"
                      : "rgba(255,255,255,0.9)")
                  }
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                <button
                  onClick={() => setMoreOpen((v) => !v)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors"
                  style={{ color: scrolled ? "#2A3142" : "rgba(255,255,255,0.9)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3068F5")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = scrolled
                      ? "#2A3142"
                      : "rgba(255,255,255,0.9)")
                  }
                >
                  Mehr
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </motion.div>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2.5 text-sm transition-colors"
                      style={{ color: "#2A3142" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#3068F5";
                        e.currentTarget.style.backgroundColor = "#EEF2F7";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#2A3142";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA — WhatsApp button with spring interaction */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://wa.me/4961712777284"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current shrink-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </motion.a>
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
                    <Image
                      src="/images/drt_logo.webp"
                      width={36}
                      height={36}
                      alt="Die Rescue Trainer"
                    />
                    <span className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                      DIE RESCUE TRAINER
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
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.07,
                        duration: 0.3,
                        ease: EASE,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center px-3 py-3 rounded-lg font-medium transition-colors hover:bg-[#EEF2F7]"
                        style={{ color: "#2A3142" }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="border-t border-slate-100 my-2 pt-2">
                    <p className="px-3 py-1 text-xs text-slate-400 uppercase tracking-wider font-medium">
                      Mehr
                    </p>
                    {moreLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: (navLinks.length + index) * 0.07,
                          duration: 0.3,
                          ease: EASE,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center px-3 py-3 rounded-lg font-medium transition-colors hover:bg-[#EEF2F7]"
                          style={{ color: "#2A3142" }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
                <div className="mt-auto p-6 border-t border-slate-100 flex flex-col gap-3">
                  <motion.a
                    href="https://wa.me/4961712777284"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold text-sm"
                    style={{ backgroundColor: "#25D366" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp schreiben
                  </motion.a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
