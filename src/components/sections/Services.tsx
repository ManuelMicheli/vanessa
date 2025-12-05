"use client";

/**
 * ============================================
 * SEZIONE SERVIZI - HOMEPAGE
 * ============================================
 * 
 * ⚠️ MODIFICHE RAPIDE - Modifica solo questa sezione:
 * 
 * Tutti i servizi, professionisti e testi modificabili sono qui sotto.
 * NON modificare la logica del componente (useRef, motion, ecc.)
 */

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Car, Stethoscope, HardHat, ArrowRight, Building2, FileText, Scale, Users } from "lucide-react";

// ============================================
// 📝 CONTENUTI MODIFICABILI - Modifica qui
// ============================================

// Servizi principali offerti
const services = [
  {
    icon: Car,
    title: "Incidenti Stradali",
    description:
      "Danni ai mezzi, lesioni personali, decessi. Ti assistiamo nella richiesta di risarcimento completo.",
    href: "/servizi/incidenti-stradali",
  },
  {
    icon: Stethoscope,
    title: "Malasanità ed Errori Medici",
    description:
      "Malpractice, diagnosi errate, lesioni colpose. Ottieni il giusto risarcimento per gli errori subiti.",
    href: "/servizi/malasanita",
  },
  {
    icon: HardHat,
    title: "Infortuni sul Lavoro",
    description:
      "Ricorsi INAIL/INPS, infortuni, malattie professionali. Proteggiamo i tuoi diritti di lavoratore.",
    href: "/servizi/infortuni-lavoro",
  },
];

// Rete di professionisti collaboratori
const professionals = [
  {
    icon: Users,
    title: "Avvocati",
    description: "Specializzati in diritto dei risarcimenti",
  },
  {
    icon: Stethoscope,
    title: "Medici Legali",
    description: "Per perizie accurate e professionali",
  },
  {
    icon: Scale,
    title: "Periti Tecnici",
    description: "Ricostruzioni dinamiche e valutazioni",
  },
  {
    icon: Building2,
    title: "Studi Notarili",
    description: "Per tutte le pratiche legali",
  },
  {
    icon: FileText,
    title: "Centri Medici",
    description: "Visite e accertamenti specialistici",
  },
  {
    icon: Car,
    title: "Carrozzerie",
    description: "Riparazioni convenzionate",
  },
];

// Testi della sezione
const SECTION_CONTENT = {
  badge: "I Nostri Servizi", // ← Modifica badge
  title: {
    main: "Siamo Specialisti in", // ← Modifica titolo principale
    accent: "Risarcimenti Complessi", // ← Modifica parte accentata (oro)
  },
  description: "Da oltre 20 anni aiutiamo le vittime di sinistri a ottenere il giusto risarcimento. Ogni caso è unico e merita la massima attenzione.", // ← Modifica descrizione
  professionals: {
    title: {
      main: "Una Rete di Professionisti", // ← Modifica titolo professionisti
      accent: "al Tuo Servizio", // ← Modifica parte accentata
    },
    description: "Collaboriamo con i migliori specialisti del settore per offrirti un'assistenza completa e qualificata.", // ← Modifica descrizione
    note: {
      strong: "100% Zero Anticipo:", // ← Modifica testo in grassetto
      text: "tutte le spese mediche, peritali e legali sono a nostro carico fino al risultato.", // ← Modifica testo normale
    },
  },
};

// ============================================
// 🔧 LOGICA COMPONENTE - NON MODIFICARE
// ============================================

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="servizi" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[var(--color-bg-alt)]">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--color-accent-light)] text-[var(--color-accent)] rounded-full text-sm font-medium mb-4">
            {SECTION_CONTENT.badge}
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {SECTION_CONTENT.title.main}{" "}
            <span className="text-[var(--color-accent)]">{SECTION_CONTENT.title.accent}</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            {SECTION_CONTENT.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 border border-[var(--color-border)] hover:border-[var(--color-accent)]/20">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 bg-[var(--color-accent-light)] group-hover:bg-[var(--color-accent-medium)]">
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-3 sm:mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Scopri di più</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Professional Network Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-16 border-t border-[var(--color-border)]"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3
              className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {SECTION_CONTENT.professionals.title.main}{" "}
              <span className="text-[var(--color-accent)]">{SECTION_CONTENT.professionals.title.accent}</span>
            </h3>
            <p className="text-lg text-[var(--color-text-muted)] mb-2">
              {SECTION_CONTENT.professionals.description}
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)] font-semibold">{SECTION_CONTENT.professionals.note.strong}</span>{" "}
              {SECTION_CONTENT.professionals.note.text}
            </p>
          </div>

          {/* Professionals Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {professionals.map((professional, index) => (
              <motion.div
                key={professional.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-5 md:p-6 text-center hover:shadow-[var(--shadow-lg)] transition-all duration-300 h-full border border-[var(--color-border)] hover:border-[var(--color-accent)]/30">
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-lg bg-[var(--color-bg-alt)] group-hover:bg-[var(--color-accent-light)] flex items-center justify-center transition-colors duration-300">
                    <professional.icon className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-[var(--color-primary)] mb-1 text-sm md:text-base">
                    {professional.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--color-text-muted)]">
                    {professional.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
