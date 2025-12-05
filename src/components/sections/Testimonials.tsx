"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ArrowRight, CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marco Bianchi",
    role: "Incidente Stradale",
    content:
      "Dopo un grave incidente stradale, mi sentivo perso. Lo Studio Varsallona mi ha seguito passo dopo passo, ottenendo un risarcimento di gran lunga superiore a quello offerto inizialmente dall'assicurazione. Professionali e umani.",
    rating: 5,
    image: null,
  },
  {
    id: 2,
    name: "Laura Rossi",
    role: "Errore Medico",
    content:
      "Un errore medico aveva compromesso la mia salute. Grazie alla competenza e alla determinazione dell'avvocato Varsallona, ho ottenuto giustizia. Il fatto di non dover anticipare nulla mi ha permesso di affrontare il percorso senza stress economico.",
    rating: 5,
    image: null,
  },
  {
    id: 3,
    name: "Giuseppe Ferrara",
    role: "Infortunio sul Lavoro",
    content:
      "Un infortunio sul lavoro mi aveva lasciato senza certezze. Lo studio ha gestito tutto, dai ricorsi INAIL alla causa. Oggi ho ottenuto il riconoscimento che meritavo. Consiglio vivamente.",
    rating: 5,
    image: null,
  },
  {
    id: 4,
    name: "Anna Colombo",
    role: "Incidente Stradale",
    content:
      "Ero stata seguita da un altro legale che non otteneva risultati. Dopo aver cambiato e affidato il caso a Studio Varsallona, in pochi mesi ho ricevuto il risarcimento. La differenza è stata enorme.",
    rating: 5,
    image: null,
  },
  {
    id: 5,
    name: "Roberto Esposito",
    role: "Malasanità",
    content:
      "La perdita di mio padre per un errore medico è stata devastante. Vanessa Varsallona ci ha accompagnato con professionalità e sensibilità in un momento difficilissimo. Giustizia è stata fatta.",
    rating: 5,
    image: null,
  },
  {
    id: 6,
    name: "Francesca Moretti",
    role: "Incidente Stradale",
    content:
      "Tamponata mentre ero ferma al semaforo. L'assicurazione voleva liquidarmi con una miseria. Grazie allo Studio Varsallona ho ottenuto il triplo. Tutto gestito senza che dovessi anticipare un centesimo.",
    rating: 5,
    image: null,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Duplica le testimonianze per creare l'effetto seamless infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-32 bg-[#F7F3F1] overflow-hidden">
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
            Testimonianze
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            La Voce di Chi{" "}
            <span className="text-[#D4AF37]">Si è Affidato a Noi</span>
          </h2>
          <p className="text-lg text-[#666666]">
            Storie vere di persone che hanno ottenuto il giusto risarcimento grazie al nostro supporto.
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Quote Icon decorativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="absolute -top-8 -left-4 lg:-left-12 z-0 pointer-events-none"
          >
            <Quote className="w-24 h-24 text-[#001F3F]" />
          </motion.div>

          {/* Scroll Container con maschera per fade edges */}
          <div className="relative overflow-hidden">
            {/* Fade gradient a sinistra */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F7F3F1] to-transparent z-10 pointer-events-none" />
            
            {/* Fade gradient a destra */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F7F3F1] to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track - da destra a sinistra */}
            <div className="flex gap-6 animate-scroll-infinite">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[90vw] sm:w-[500px] lg:w-[600px]"
                >
                  <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-[#E5E7EB] h-full hover:shadow-xl transition-shadow">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg lg:text-xl text-[#333333] leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#001F3F] to-[#002B57] flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[#001F3F] truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-[#666666] truncate">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-[#166534]/10 text-[#166534] rounded-full text-xs font-medium flex-shrink-0">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verificato</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/testimonianze"
            className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-4 transition-all"
          >
            <span>Leggi tutte le testimonianze</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
