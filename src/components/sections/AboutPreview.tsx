"use client";

/**
 * ============================================
 * ABOUT PREVIEW - PREVIEW CHI SIAMO
 * ============================================
 * 
 * ⚠️ MODIFICHE RAPIDE - Modifica solo questa sezione:
 * 
 * Testi, valori e contenuti modificabili sono qui sotto.
 * NON modificare la logica del componente (useRef, motion, ecc.)
 */

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Heart, Users, Shield } from "lucide-react";

// ============================================
// 📝 CONTENUTI MODIFICABILI - Modifica qui
// ============================================

// Valori dello studio
const values = [
  {
    icon: Heart,
    title: "Empatia", // ← Modifica titolo
    description: "Ci mettiamo nei panni del danneggiato", // ← Modifica descrizione
  },
  {
    icon: Shield,
    title: "Trasparenza",
    description: "Zero sorprese, massima chiarezza",
  },
  {
    icon: Award,
    title: "Eccellenza",
    description: "20+ anni di esperienza comprovata",
  },
  {
    icon: Users,
    title: "Dedizione",
    description: "Ogni caso merita il massimo impegno",
  },
];

// Contenuti della sezione
const SECTION_CONTENT = {
  badge: "Chi Siamo", // ← Modifica badge
  title: {
    main: "Vanessa Varsallona:", // ← Modifica nome/titolo
    accent: "Esperienza, Empatia, Risultati", // ← Modifica parte accentata
  },
  description: {
    paragraph1: "Cresciuta tra fascicoli di sinistri e trattative assicurative grazie alla professione di mio padre, oggi guido lo Studio Varsallona, specializzato in incidenti stradali, infortuni sul lavoro ed errori medici. Con il mio team di avvocati, medici legali e periti, offro un'assistenza completa e profondamente umana, occupandomi di ogni aspetto burocratico, assicurativo e legale al posto dei miei assistiti.", // ← Modifica primo paragrafo
    paragraph2Start: "Abbiamo scelto un modello senza anticipi: le persone che si affidano allo Studio non sostengono costi iniziali, ma ci riconoscono un compenso solo a risarcimento ottenuto, perché", // ← Modifica inizio secondo paragrafo
    paragraph2Strong: "il diritto alla difesa non deve dipendere dalle possibilità economiche", // ← Modifica testo in grassetto
    paragraph2End: "La missione è una sola: proteggere le vittime, farle sentire in una \"zona protetta\" e ottenere per loro il massimo risarcimento possibile, sia in termini economici che di giustizia.", // ← Modifica fine secondo paragrafo
  },
  cta: {
    text: "Scopri la Nostra Storia", // ← Modifica testo CTA
    href: "/chi-siamo", // ← Modifica link CTA
  },
  badgeInfo: {
    years: "20+ Anni", // ← Modifica anni esperienza
    label: "di Esperienza", // ← Modifica etichetta
  },
  imagePlaceholder: {
    initials: "VV", // ← Modifica iniziali (o sostituisci con immagine)
    text: "Foto Professionale", // ← Modifica testo placeholder
  },
};

// ============================================
// 🔧 LOGICA COMPONENTE - NON MODIFICARE
// ============================================

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#001F3F] to-[#002B57]">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                      {SECTION_CONTENT.imagePlaceholder.initials}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">
                    {SECTION_CONTENT.imagePlaceholder.text}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4AF37]/20 rounded-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D4AF37]/10 rounded-2xl" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-[-2rem] bg-white rounded-xl p-4 shadow-xl border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-bold text-[#001F3F]">{SECTION_CONTENT.badgeInfo.years}</div>
                  <div className="text-sm text-[#666666]">{SECTION_CONTENT.badgeInfo.label}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#001F3F]/10 text-[#001F3F] rounded-full text-sm font-medium mb-4">
              {SECTION_CONTENT.badge}
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {SECTION_CONTENT.title.main}{" "}
              <span className="text-[#D4AF37]">{SECTION_CONTENT.title.accent}</span>
            </h2>
            <p className="text-lg text-[#666666] mb-8 leading-relaxed">
              {SECTION_CONTENT.description.paragraph1}
            </p>
            <p className="text-lg text-[#666666] mb-8 leading-relaxed">
              {SECTION_CONTENT.description.paragraph2Start}{" "}
              <strong className="text-[#001F3F]">{SECTION_CONTENT.description.paragraph2Strong}</strong>.{" "}
              {SECTION_CONTENT.description.paragraph2End}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F7F3F1] flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-[#001F3F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#001F3F] text-sm">
                      {value.title}
                    </div>
                    <div className="text-xs text-[#666666]">
                      {value.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href={SECTION_CONTENT.cta.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#00152A] transition-colors group"
            >
              <span>{SECTION_CONTENT.cta.text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
