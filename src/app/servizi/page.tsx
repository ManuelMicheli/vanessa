"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, Stethoscope, HardHat, ArrowRight, Shield, Clock, Award } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Incidenti Stradali",
    description:
      "Assistenza completa per vittime di incidenti stradali: danni ai mezzi, lesioni personali, decessi. Ti aiutiamo a ottenere il massimo risarcimento con gestione completa della pratica, perizie tecniche e medico-legali, negoziazione con l'assicurazione e assistenza legale in giudizio.",
    href: "/servizi/incidenti-stradali",
  },
  {
    icon: Stethoscope,
    title: "Malasanità ed Errori Medici",
    description:
      "Tutela per le vittime di errori medici, diagnosi errate, negligenza sanitaria. Ottieni giustizia per i danni subiti dalla malpractice attraverso analisi della documentazione clinica, consulenza medico-legale specializzata, supporto psicologico alla vittima e azione legale contro i responsabili.",
    href: "/servizi/malasanita",
  },
  {
    icon: HardHat,
    title: "Infortuni sul Lavoro",
    description:
      "Difesa dei diritti dei lavoratori infortunati: ricorsi INAIL/INPS, malattie professionali, responsabilità del datore di lavoro. Ti assistiamo con ricorsi avverso INAIL e INPS, risarcimento danni dal datore, malattie professionali e assistenza completa al lavoratore.",
    href: "/servizi/infortuni-lavoro",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Zero Anticipo",
    description: "Non paghi nulla fino al risultato ottenuto",
  },
  {
    icon: Clock,
    title: "Risposta in 24h",
    description: "Valutazione gratuita del tuo caso",
  },
  {
    icon: Award,
    title: "20+ Anni Esperienza",
    description: "Oltre 500 casi risolti con successo",
  },
];

export default function ServiziPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        {/* Base gradient - deep navy to almost black */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192A] via-[#0D1F35] to-[#050A10]" />
        
        {/* Animated grid network pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Diagonal lines texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(255,255,255,0.03) 100px,
              rgba(255,255,255,0.03) 101px
            )`,
          }}
        />
        
        {/* Soft fog/mist layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top-right subtle glow */}
          <div className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-[#1a365d]/20 rounded-full blur-[120px]" />
          {/* Bottom-left ambient glow */}
          <div className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-[#0f172a]/40 rounded-full blur-[100px]" />
          {/* Center accent glow - very subtle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#10b981]/[0.03] rounded-full blur-[150px]" />
        </div>
        
        {/* Noise texture overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Dark overlay for contrast guarantee */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192A]/60 via-transparent to-[#050A10]/70" />
        
        {/* Vignette effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5,10,16,0.4) 100%)',
          }}
        />
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-white/[0.08] backdrop-blur-sm text-white/90 rounded-full text-sm font-medium mb-6 border border-white/[0.08]"
            >
              I Nostri Servizi
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative"
              style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
            >
              {["Specialisti", "in", "Risarcimenti", "Complessi"].map((word, wordIndex) => (
                <span key={word} className="inline-block mr-2">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${word}-${charIndex}`}
                      initial={{ 
                        opacity: 0, 
                        y: 60,
                        scale: 0.5,
                        filter: "blur(15px)",
                        textShadow: "0 0 0px rgba(255,255,255,0)"
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        textShadow: [
                          "0 0 0px rgba(255,255,255,0)",
                          "0 0 20px rgba(255,255,255,0.3)",
                          "0 0 10px rgba(255,255,255,0.2)",
                          "0 0 5px rgba(255,255,255,0.1)"
                        ]
                      }}
                      transition={{ 
                        duration: 0.9,
                        delay: 0.2 + wordIndex * 0.2 + charIndex * 0.03,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        textShadow: {
                          duration: 1.2,
                          delay: 0.2 + wordIndex * 0.2 + charIndex * 0.03,
                          times: [0, 0.5, 0.8, 1]
                        },
                        filter: {
                          duration: 0.7,
                          delay: 0.2 + wordIndex * 0.2 + charIndex * 0.03,
                        }
                      }}
                      whileHover={{
                        scale: 1.15,
                        y: -5,
                        textShadow: "0 0 40px rgba(255,255,255,0.8), 0 0 80px rgba(255,255,255,0.4)",
                        transition: { duration: 0.3, type: "spring", stiffness: 400 }
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  {wordIndex < 3 && <span className="inline-block w-2" />}
                </span>
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Da oltre 20 anni aiutiamo le vittime di sinistri a ottenere il giusto
              risarcimento. Ogni caso è unico e merita la massima attenzione.
            </motion.p>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f3f4f6] flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a2332]">{benefit.title}</div>
                  <div className="text-sm text-[#374151]/70">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg-alt)]">
        <div className="container-custom">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="h-full bg-white rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 border border-[var(--color-border)] hover:border-[var(--color-accent)]/20">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 bg-[var(--color-accent-light)] group-hover:bg-[var(--color-accent-medium)]">
                      <service.icon className="w-10 h-10 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3
                      className="text-2xl font-bold text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-tight"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed text-base">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Scopri di più</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#1a2332]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Non Sai da Dove Iniziare?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Contattaci per una consulenza gratuita. Analizzeremo il tuo caso e ti
              spiegheremo le possibilità di risarcimento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="flex items-center gap-2 px-8 py-4 bg-[#10b981] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span>Richiedi Consulenza Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+393459726530"
                className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-[#1a2332] transition-all"
              >
                <span>Chiama +39 345 972 65 30</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

