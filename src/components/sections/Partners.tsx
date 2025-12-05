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
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium mb-4">
            Convenzioni
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Una Rete di Professionisti{" "}
            <span className="text-[#D4AF37]">al Tuo Servizio</span>
          </h2>
          <p className="text-lg text-[#666666]">
            Grazie alle nostre convenzioni, non anticipi mai i costi di perizie, 
            visite mediche o riparazioni. A tutto pensiamo noi.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#F7F3F1] rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-[#E5E7EB]">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white group-hover:bg-[#001F3F]/10 flex items-center justify-center transition-colors">
                  <partner.icon className="w-7 h-7 text-[#666666] group-hover:text-[#001F3F] transition-colors" />
                </div>
                <h3 className="font-semibold text-[#001F3F] mb-1 text-sm">
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
          className="text-center text-[#666666] mt-12 max-w-2xl mx-auto"
        >
          <span className="text-[#D4AF37] font-semibold">100% Zero Anticipo:</span>{" "}
          tutte le spese mediche, peritali e legali sono a nostro carico fino al risultato.
        </motion.p>
      </div>
    </section>
  );
}
