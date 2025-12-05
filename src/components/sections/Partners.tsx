"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Stethoscope, Car, FileText, Scale, Users } from "lucide-react";

const partners = [
  {
    icon: Building2,
    title: "Studi Notarili",
    description: "Per tutte le pratiche legali",
  },
  {
    icon: Stethoscope,
    title: "Centri Medici",
    description: "Visite e accertamenti",
  },
  {
    icon: Car,
    title: "Carrozzerie",
    description: "Riparazioni convenzionate",
  },
  {
    icon: FileText,
    title: "Medici Legali",
    description: "Perizie medico-legali",
  },
  {
    icon: Scale,
    title: "Periti Cinematici",
    description: "Ricostruzioni dinamiche",
  },
  {
    icon: Users,
    title: "Consulenti",
    description: "Specialisti di settore",
  },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Convenzioni
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-4 sm:mb-6 px-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Una Rete di Professionisti{" "}
            <span className="text-[#D4AF37]">al Tuo Servizio</span>
          </h2>
          <p className="text-base sm:text-lg text-[#666666] px-4">
            Grazie alle nostre convenzioni, non anticipi mai i costi di perizie, 
            visite mediche o riparazioni. A tutto pensiamo noi.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#F7F3F1] rounded-2xl p-4 sm:p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-[#E5E7EB]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-white group-hover:bg-[#001F3F]/10 flex items-center justify-center transition-colors">
                  <partner.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#666666] group-hover:text-[#001F3F] transition-colors" />
                </div>
                <h3 className="font-semibold text-[#001F3F] mb-1 text-xs sm:text-sm">
                  {partner.title}
                </h3>
                <p className="text-xs text-[#666666]">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm sm:text-base text-[#666666] mt-8 sm:mt-12 max-w-2xl mx-auto px-4"
        >
          <span className="text-[#D4AF37] font-semibold">100% Zero Anticipo:</span>{" "}
          tutte le spese mediche, peritali e legali sono a nostro carico fino al risultato.
        </motion.p>
      </div>
    </section>
  );
}
