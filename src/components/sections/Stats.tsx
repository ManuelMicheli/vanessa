"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Anni di Esperienza",
    description: "Nel settore dei risarcimenti assicurativi",
  },
  {
    value: 500,
    suffix: "+",
    label: "Casi Risolti",
    description: "Con successo per i nostri clienti",
  },
  {
    value: 100,
    suffix: "%",
    label: "Zero Anticipo",
    description: "Non paghi nulla in anticipo",
  },
  {
    value: 95,
    suffix: "%",
    label: "Clienti Soddisfatti",
    description: "Che ci raccomanderebbero",
  },
];

function CountUp({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3F1]/50 to-white" />
      
      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#001F3F] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-base sm:text-lg font-semibold text-[#D4AF37] mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-[#666666]">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
