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
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-xl p-4 w-64 border border-[#E5E7EB]"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-[#666666] hover:text-[#333333]"
                  aria-label="Chiudi"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-sm text-[#666666] pr-4">
                  <strong className="text-[#001F3F]">Hai bisogno di aiuto?</strong>
                  <br />
                  Scrivici su WhatsApp per una consulenza gratuita!
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-[#E5E7EB]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-16 h-16 bg-[#25d366] rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
            aria-label="Contattaci su WhatsApp"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
            
            {/* Icon */}
            <span className="relative flex items-center justify-center w-full h-full">
              <MessageCircle className="w-8 h-8 text-white" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
