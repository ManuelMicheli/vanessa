"use client";

/**
 * ============================================
 * HERO SECTION - HOMEPAGE
 * ============================================
 * 
 * ⚠️ MODIFICHE RAPIDE - Modifica solo questa sezione:
 * 
 * Tutti i testi, link e contenuti modificabili sono qui sotto.
 * NON modificare la logica del componente (useEffect, funzioni, ecc.)
 */

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Phone, ArrowRight, ChevronDown, Shield, Award, Clock } from "lucide-react";

// ============================================
// 📝 CONTENUTI MODIFICABILI - Modifica qui
// ============================================
const HERO_CONTENT = {
  // Immagine di sfondo
  backgroundImage: "/images/Hero-background.jpg", // ← Cambia percorso immagine
  
  // Badge superiore
  badge: {
    icon: Award, // ← Cambia icona (importa da lucide-react)
    text: "20+ anni di esperienza nel settore", // ← Modifica testo
  },
  
  // Titolo principale
  title: {
    main: "Il Giusto Risarcimento", // ← Modifica titolo
    accent: "Che Meriti", // ← Modifica parte accentata (oro)
  },
  
  // Sottotitolo
  subtitle: {
    strong: "Senza Anticipo. Senza Rischi.", // ← Modifica testo in grassetto
    text: "Ci occupiamo di tutto: dalla pratica al risultato.", // ← Modifica testo normale
    accent: "Paghi solo se vinciamo.", // ← Modifica parte accentata (oro)
  },
  
  // Pulsanti CTA
  cta: {
    primary: {
      text: "Richiedi Consulenza Gratuita", // ← Modifica testo
      href: "/contatti", // ← Modifica link
    },
    secondary: {
      text: "Chiama Ora", // ← Modifica testo
      phone: "+393459726530", // ← Modifica numero (senza spazi)
      displayPhone: "+39 345 972 6530", // ← Modifica numero visualizzato
    },
  },
  
  // Indicatori di fiducia
  trust: [
    {
      icon: Shield,
      text: "100% Zero Anticipo", // ← Modifica testo
    },
    {
      icon: Award,
      text: "500+ Casi Risolti", // ← Modifica testo
    },
    {
      icon: Clock,
      text: "Risposta in 24h", // ← Modifica testo
    },
  ],
};

// ============================================
// 🔧 LOGICA COMPONENTE - NON MODIFICARE
// ============================================

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.6, stagger: 0.1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-trust",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.9, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("servizi");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_CONTENT.backgroundImage}
          alt=""
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ objectPosition: "center" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm mb-6 sm:mb-8 border border-white/30 shadow-lg">
            <HERO_CONTENT.badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
            <span>{HERO_CONTENT.badge.text}</span>
          </motion.div>

          {/* Main Heading */}
          <h1
            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-2xl px-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {HERO_CONTENT.title.main}
            <br />
            <span className="text-[#D4AF37] drop-shadow-lg">{HERO_CONTENT.title.accent}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed drop-shadow-lg px-4">
            <strong className="text-white">{HERO_CONTENT.subtitle.strong}</strong>
            <br />
            {HERO_CONTENT.subtitle.text}{" "}
            <span className="text-[#D4AF37]">{HERO_CONTENT.subtitle.accent}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4">
            <Link
              href={HERO_CONTENT.cta.primary.href}
              className="hero-cta group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D4AF37] text-[#001F3F] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all hover:-translate-y-1 hover:bg-[#B8962E] active:bg-[#B8962E] text-sm sm:text-base w-full sm:w-auto touch-manipulation"
            >
              <span>{HERO_CONTENT.cta.primary.text}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${HERO_CONTENT.cta.secondary.phone}`}
              className="hero-cta flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/40 hover:bg-white/30 hover:border-white/60 active:bg-white/30 transition-all shadow-lg text-sm sm:text-base w-full sm:w-auto touch-manipulation"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{HERO_CONTENT.cta.secondary.text}</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto px-4">
            {HERO_CONTENT.trust.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-white text-xs sm:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer z-10 drop-shadow-lg"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scorri verso il basso"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
