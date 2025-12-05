"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Ciao, vorrei richiedere una consulenza gratuita per il mio caso."
  );
  const whatsappUrl = `https://wa.me/393459726530?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {(isVisible || true) && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-2 sm:mb-3 bg-white rounded-xl shadow-xl p-3 sm:p-4 w-56 sm:w-64 border border-[#E5E7EB]"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 text-[#666666] hover:text-[#333333] active:text-[#333333] touch-manipulation"
                  aria-label="Chiudi"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <p className="text-xs sm:text-sm text-[#666666] pr-3 sm:pr-4">
                  <strong className="text-[#001F3F]">Hai bisogno di aiuto?</strong>
                  <br />
                  Scrivici su WhatsApp per una consulenza gratuita!
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-4 sm:right-6 w-3 h-3 sm:w-4 sm:h-4 bg-white transform rotate-45 border-r border-b border-[#E5E7EB]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-14 h-14 sm:w-16 sm:h-16 bg-[#25d366] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-105 group touch-manipulation"
            aria-label="Contattaci su WhatsApp"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
            
            {/* Icon */}
            <span className="relative flex items-center justify-center w-full h-full">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
