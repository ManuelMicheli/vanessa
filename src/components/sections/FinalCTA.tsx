"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Clock } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#001F3F] via-[#002B57] to-[#001F3F] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Richiedi la Tua{" "}
              <span className="text-[#D4AF37]">Consulenza Gratuita</span> Oggi
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
              Chiamaci, scrivici su WhatsApp o compila il form. 
              Ti rispondiamo entro 24 ore con una prima valutazione del tuo caso.
            </p>

            {/* Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+393459726530"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 active:bg-white/10 transition-colors group touch-manipulation"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#001F3F]" />
                </div>
                <div>
                  <div className="text-white font-semibold">Telefono</div>
                  <div className="text-white/70">+39 345 972 65 30</div>
                </div>
              </a>

              <a
                href="https://wa.me/393459726530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 active:bg-white/10 transition-colors group touch-manipulation"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#25d366] flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">WhatsApp</div>
                  <div className="text-white/70 text-xs sm:text-sm">Scrivici ora</div>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">Orari</div>
                  <div className="text-white/70 text-xs sm:text-sm">Lun - Ven: 9:00 - 18:00</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-[#001F3F] mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Compila il Form
            </h3>

            <form className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-[#333333] mb-1">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#E5E7EB] focus:border-[#001F3F] focus:ring-2 focus:ring-[#001F3F]/10 outline-none transition-all text-sm sm:text-base"
                  placeholder="Mario Rossi"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#333333] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#E5E7EB] focus:border-[#001F3F] focus:ring-2 focus:ring-[#001F3F]/10 outline-none transition-all text-sm sm:text-base"
                    placeholder="mario@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-[#333333] mb-1">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#E5E7EB] focus:border-[#001F3F] focus:ring-2 focus:ring-[#001F3F]/10 outline-none transition-all text-sm sm:text-base"
                    placeholder="+39 333 123 4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-[#333333] mb-1">
                  Descrivi brevemente il tuo caso
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#E5E7EB] focus:border-[#001F3F] focus:ring-2 focus:ring-[#001F3F]/10 outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Raccontaci cosa ti è successo..."
                />
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 w-4 h-4 rounded border-[#E5E7EB] text-[#001F3F] focus:ring-[#001F3F] flex-shrink-0"
                />
                <label htmlFor="privacy" className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  Accetto la{" "}
                  <Link href="/privacy" className="text-[#D4AF37] hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  e acconsento al trattamento dei miei dati. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-[#D4AF37] text-[#001F3F] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all hover:-translate-y-1 hover:bg-[#B8962E] active:bg-[#B8962E] text-sm sm:text-base touch-manipulation"
              >
                <span>Invia Richiesta</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>

            <p className="text-center text-xs sm:text-sm text-[#666666] mt-3 sm:mt-4">
              Risposta garantita entro 24 ore lavorative
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
