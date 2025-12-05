"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  variant?: "primary" | "secondary";
  headline?: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
  showPhone?: boolean;
}

export default function CTASection({
  variant = "primary",
  headline = "Hai Già un Professionista ma Non Sei Soddisfatto?",
  body = "Richiedici un'analisi gratuita della tua pratica. Verifichiamo insieme se stai ottenendo il giusto risarcimento.",
  ctaText = "Richiedi Analisi Gratuita",
  ctaHref = "/contatti",
  showPhone = true,
}: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden bg-[#001F3F]"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed px-4">
            {body}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link
              href={ctaHref}
              className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D4AF37] text-[#001F3F] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all hover:-translate-y-1 hover:bg-[#B8962E] active:bg-[#B8962E] text-sm sm:text-base w-full sm:w-auto touch-manipulation"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {showPhone && (
              <a
                href="tel:+393459726530"
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white hover:text-[#001F3F] active:bg-white active:text-[#001F3F] transition-all text-sm sm:text-base w-full sm:w-auto touch-manipulation"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>+39 345 972 65 30</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
