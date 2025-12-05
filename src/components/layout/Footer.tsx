"use client";

/**
 * ============================================
 * FOOTER - PIÈ DI PAGINA
 * ============================================
 * 
 * ⚠️ MODIFICHE RAPIDE - Modifica solo questa sezione:
 * 
 * Link, contatti, social e testi modificabili sono qui sotto.
 * NON modificare la logica del componente (motion, funzioni, ecc.)
 */

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

// ============================================
// 📝 CONTENUTI MODIFICABILI - Modifica qui
// ============================================

// Link del footer
const footerLinks = {
  servizi: [
    { name: "Incidenti Stradali", href: "/servizi/incidenti-stradali" },
    { name: "Malasanità", href: "/servizi/malasanita" },
    { name: "Infortuni sul Lavoro", href: "/servizi/infortuni-lavoro" },
  ],
  studio: [
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Come Funziona", href: "/come-funziona" },
    { name: "Testimonianze", href: "/testimonianze" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookie" },
    { name: "Termini e Condizioni", href: "/termini" },
  ],
};

// Link social media
const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" }, // ← Modifica link Facebook
  { name: "Instagram", icon: Instagram, href: "#" }, // ← Modifica link Instagram
  { name: "LinkedIn", icon: Linkedin, href: "#" }, // ← Modifica link LinkedIn
];

// Informazioni contatto
const CONTACT_INFO = {
  phone: "+393459726530", // ← Modifica numero (senza spazi per link tel:)
  displayPhone: "+39 345 972 65 30", // ← Modifica numero visualizzato
  email: "v.varsallona@giustorisarcimento.info", // ← Modifica email
  hours: "Lun - Ven: 9:00 - 18:00", // ← Modifica orari
  location: "Italia", // ← Modifica località
};

// Informazioni brand
const BRAND_INFO = {
  logoText: "GR", // ← Modifica testo logo
  brandName: "Giusto Risarcimento", // ← Modifica nome brand
  description: "Studio legale specializzato in risarcimenti assicurativi. 20+ anni di esperienza al tuo fianco.", // ← Modifica descrizione
  tagline: "Zero Anticipo. Massimo Risultato.", // ← Modifica tagline
};

// Copyright
const COPYRIGHT = {
  year: new Date().getFullYear(), // ← Anno automatico
  text: "Giusto Risarcimento - Studio Varsallona. Tutti i diritti riservati.", // ← Modifica testo copyright
};

// ============================================
// 🔧 LOGICA COMPONENTE - NON MODIFICARE
// ============================================

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#001F3F] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white text-[#001F3F] flex items-center justify-center font-bold text-xl">
                {BRAND_INFO.logoText}
              </div>
              <div>
                <span
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {BRAND_INFO.brandName}
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              {BRAND_INFO.description}
            </p>
            <p className="text-[#D4AF37] font-semibold text-lg">
              {BRAND_INFO.tagline}
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              className="text-lg font-semibold mb-6 text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Servizi
            </h4>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Studio Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="text-lg font-semibold mb-6 text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lo Studio
            </h4>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4
              className="text-lg font-semibold mb-6 text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contatti
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{CONTACT_INFO.displayPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4AF37] hover:text-[#001F3F] transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {COPYRIGHT.year} {COPYRIGHT.text}
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white/80 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 bg-[#001F3F] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#001F3F] transition-colors z-40 border border-white/20"
        aria-label="Torna in alto"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
