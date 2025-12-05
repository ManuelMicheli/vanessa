"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MessageCircle, FileCheck, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consulenza Gratuita",
    description:
      "Analizziamo il tuo caso senza impegno. Ti spieghiamo i tuoi diritti e le possibilità di risarcimento.",
    color: "#001F3F",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Gestiamo Tutto Noi",
    description:
      "Burocrazia, perizie, negoziazione con l'assicurazione. Tu non anticipi nulla, a tutto pensiamo noi.",
    color: "#001F3F",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Ottieni il Massimo",
    description:
      "Ti accompagniamo fino al risultato. Paghi solo a successo ottenuto, con percentuale concordata.",
    color: "#D4AF37",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#001F3F]/10 text-[#001F3F] rounded-full text-sm font-medium mb-4">
            Come Funziona
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tre Passi Verso il Tuo{" "}
            <span className="text-[#D4AF37]">Giusto Risarcimento</span>
          </h2>
          <p className="text-lg text-[#666666]">
            Un processo semplice e trasparente. Zero stress, zero anticipo, massimo risultato.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#001F3F] via-[#666666] to-[#D4AF37] -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-[#F7F3F1] rounded-2xl p-6 sm:p-8 h-full relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#E5E7EB]">
                  {/* Step Number */}
                  <div
                    className="absolute -top-3 sm:-top-4 left-6 sm:left-8 px-3 sm:px-4 py-1 rounded-full text-white font-bold text-xs sm:text-sm"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mt-3 sm:mt-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${step.color}10` }}
                  >
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-lg sm:text-xl font-bold text-[#001F3F] mb-2 sm:mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/come-funziona"
            className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-4 transition-all"
          >
            <span>Scopri tutti i dettagli</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
