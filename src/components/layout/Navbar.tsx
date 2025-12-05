"use client";

/**
 * ============================================
 * NAVBAR - MENU DI NAVIGAZIONE
 * ============================================
 * 
 * ⚠️ MODIFICHE RAPIDE - Modifica solo questa sezione:
 * 
 * Menu, link e informazioni contatto modificabili sono qui sotto.
 * NON modificare la logica del componente (useState, useEffect, ecc.)
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

// ============================================
// 📝 CONTENUTI MODIFICABILI - Modifica qui
// ============================================

// Menu di navigazione
const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Servizi",
    href: "/servizi",
    children: [
      { name: "Incidenti Stradali", href: "/servizi/incidenti-stradali" },
      { name: "Malasanità ed Errori Medici", href: "/servizi/malasanita" },
      { name: "Infortuni sul Lavoro", href: "/servizi/infortuni-lavoro" },
    ],
  },
  { name: "Come Funziona", href: "/come-funziona" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Testimonianze", href: "/testimonianze" },
  { name: "FAQ", href: "/faq" },
  { name: "Contatti", href: "/contatti" },
];

// Informazioni contatto per CTA
const CONTACT_INFO = {
  phone: "+393459726530", // ← Modifica numero (senza spazi per link tel:)
  displayPhone: "+39 345 972 65 30", // ← Modifica numero visualizzato
  ctaText: "Chiama Ora", // ← Modifica testo CTA
  mobileCtaText: "Consulenza Gratuita", // ← Modifica testo CTA mobile
  mobileCtaLink: "/contatti", // ← Modifica link CTA mobile
};

// Logo e brand
const BRAND_INFO = {
  logoText: "GR", // ← Modifica testo logo
  brandName: "Giusto Risarcimento", // ← Modifica nome brand
};

// ============================================
// 🔧 LOGICA COMPONENTE - NON MODIFICARE
// ============================================

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-colors ${
                  isScrolled
                    ? "bg-[#001F3F] text-white"
                    : "bg-white text-[#001F3F]"
                }`}
              >
                {BRAND_INFO.logoText}
              </div>
              <div className="hidden sm:block">
                <span
                  className={`font-semibold text-lg transition-colors ${
                    isScrolled ? "text-[#001F3F]" : "text-white"
                  }`}
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {BRAND_INFO.brandName}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                      isScrolled
                        ? "text-[#333333] hover:text-[#D4AF37] hover:bg-[#F7F3F1]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-4 h-4 transition-transform" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#E5E7EB] overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-[#333333] hover:bg-[#F7F3F1] hover:text-[#D4AF37] transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  isScrolled
                    ? "bg-[#D4AF37] text-[#001F3F] hover:bg-[#B8962E] shadow-md hover:shadow-lg"
                    : "bg-white text-[#001F3F] hover:bg-[#F7F3F1]"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>{CONTACT_INFO.ctaText}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-[#001F3F] hover:bg-[#F7F3F1]"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#001F3F] lg:hidden"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full pt-24 pb-8 px-6 overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-xl font-medium text-white hover:text-[#D4AF37] transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-white/20">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-white/70 hover:text-[#D4AF37] transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-white/20"
              >
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#D4AF37] text-[#001F3F] rounded-xl font-semibold text-lg hover:bg-[#B8962E] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{CONTACT_INFO.displayPhone}</span>
                </a>
                <Link
                  href={CONTACT_INFO.mobileCtaLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-4 mt-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#001F3F] transition-colors"
                >
                  {CONTACT_INFO.mobileCtaText}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
