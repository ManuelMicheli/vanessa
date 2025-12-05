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
      className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden"
    >
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/[0.03] rounded-full blur-[150px]" />
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

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 relative px-2"
            style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
          >
            {headline.split(" ").map((word, wordIndex) => (
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
                    animate={isInView ? { 
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
                    } : {}}
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
                {wordIndex < headline.split(" ").length - 1 && <span className="inline-block w-2" />}
              </span>
            ))}
          </motion.h2>
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
