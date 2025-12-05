"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Quote, CheckCircle, Phone } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marco Bianchi",
    location: "Milano",
    type: "Incidente Stradale",
    rating: 5,
    content:
      "Dopo un grave incidente stradale, mi sentivo perso. L'assicurazione mi offriva una cifra ridicola. Lo Studio Varsallona mi ha seguito passo dopo passo, ottenendo un risarcimento di gran lunga superiore. Professionali e umani, sanno davvero mettersi nei panni del cliente.",
    result: "Risarcimento ottenuto: 3.5 volte l'offerta iniziale",
    verified: true,
  },
  {
    id: 2,
    name: "Laura Rossi",
    location: "Roma",
    type: "Errore Medico",
    rating: 5,
    content:
      "Un errore medico aveva compromesso seriamente la mia salute. Grazie alla competenza e alla determinazione dell'avvocato Varsallona, ho ottenuto giustizia. Il fatto di non dover anticipare nulla mi ha permesso di affrontare il percorso senza stress economico.",
    result: "Caso vinto dopo 18 mesi",
    verified: true,
  },
  {
    id: 3,
    name: "Giuseppe Ferrara",
    location: "Napoli",
    type: "Infortunio sul Lavoro",
    rating: 5,
    content:
      "Un infortunio sul lavoro mi aveva lasciato senza certezze. L'INAIL aveva sottovalutato la mia situazione. Lo studio ha gestito tutto, dai ricorsi alla causa. Oggi ho ottenuto il riconoscimento che meritavo. Consiglio vivamente a chiunque.",
    result: "Rendita INAIL raddoppiata + risarcimento datore",
    verified: true,
  },
  {
    id: 4,
    name: "Anna Colombo",
    location: "Torino",
    type: "Cambio Professionista",
    rating: 5,
    content:
      "Ero stata seguita da un altro legale che non otteneva risultati. La pratica era ferma da quasi 3 anni. Dopo aver cambiato e affidato il caso a Studio Varsallona, in pochi mesi ho finalmente ricevuto il risarcimento. La differenza è stata enorme.",
    result: "Pratica risolta in 4 mesi",
    verified: true,
  },
  {
    id: 5,
    name: "Roberto Esposito",
    location: "Bologna",
    type: "Malasanità",
    rating: 5,
    content:
      "La perdita di mio padre per un errore medico è stata devastante. Vanessa Varsallona ci ha accompagnato con professionalità e sensibilità in un momento difficilissimo. Giustizia è stata fatta, anche se nulla potrà riportare indietro mio padre.",
    result: "Risarcimento significativo per la famiglia",
    verified: true,
  },
  {
    id: 6,
    name: "Francesca Moretti",
    location: "Firenze",
    type: "Incidente Stradale",
    rating: 5,
    content:
      "Tamponata mentre ero ferma al semaforo. L'assicurazione voleva liquidarmi con una miseria. Grazie allo Studio Varsallona ho ottenuto il triplo. Tutto gestito senza che dovessi anticipare un centesimo. Servizio impeccabile.",
    result: "Risarcimento 3x rispetto all'offerta iniziale",
    verified: true,
  },
  {
    id: 7,
    name: "Alessandro Conti",
    location: "Verona",
    type: "Infortunio sul Lavoro",
    rating: 5,
    content:
      "Caduto da un'impalcatura per mancanza di sicurezza. Il datore di lavoro negava responsabilità. Lo Studio Varsallona ha dimostrato le violazioni e ho ottenuto un risarcimento importante oltre all'indennizzo INAIL.",
    result: "Risarcimento completo dal datore + INAIL",
    verified: true,
  },
  {
    id: 8,
    name: "Maria Teresa Galli",
    location: "Genova",
    type: "Errore Medico",
    rating: 5,
    content:
      "Diagnosi tardiva che ha peggiorato la mia condizione. All'inizio ero scettica sulla possibilità di ottenere giustizia. Lo studio mi ha seguito con pazienza, spiegandomi ogni passaggio. Oggi ho ottenuto il risarcimento che meritavo.",
    result: "Caso complesso risolto con successo",
    verified: true,
  },
];

const stats = [
  { value: "500+", label: "Casi Risolti" },
  { value: "95%", label: "Clienti Soddisfatti" },
  { value: "5/5", label: "Valutazione Media" },
  { value: "100%", label: "Recensioni Positive" },
];

export default function TestimonianzePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1a2332] via-[#1e3a5f] to-[#1a2332] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#d97706]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 text-white/90 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Testimonianze
            </span>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative px-2"
              style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
            >
              {["La", "Voce", "di", "Chi", "Si", "è", "Affidato", "a", "Noi"].map((word, wordIndex) => (
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
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        textShadow: [
                          "0 0 0px rgba(255,255,255,0)",
                          "0 0 20px rgba(255,255,255,0.3)",
                          "0 0 10px rgba(255,255,255,0.2)",
                          "0 0 5px rgba(255,255,255,0.1)"
                        ],
                        color: wordIndex >= 4 ? "#d97706" : "#FFFFFF"
                      }}
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
                  {wordIndex < 8 && <span className="inline-block w-2" />}
                </span>
              ))}
            </motion.h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Storie vere di persone che hanno ottenuto il giusto risarcimento. 
              Tutte le testimonianze sono verificate e rilasciate da clienti reali.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#374151]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 text-[#2563eb]/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-[#d97706] text-[#d97706]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-[#374151] leading-relaxed mb-4 sm:mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Result Badge */}
                <div className="bg-[#10b981]/10 text-[#10b981] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  {testimonial.result}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#2563eb] to-[#10b981] flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-[#1a2332]">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-[#374151]/70">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-[#374151]/60 bg-[#f3f4f6] px-2 py-1 rounded">
                      {testimonial.type}
                    </span>
                    {testimonial.verified && (
                      <span className="flex items-center gap-1 text-xs text-[#10b981]">
                        <CheckCircle className="w-3 h-3" />
                        Verificato
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-[#10b981]" />
              <span className="font-semibold text-[#1a2332]">
                Tutte le Testimonianze sono Verificate
              </span>
            </div>
            <p className="text-[#374151]">
              Le recensioni presenti in questa pagina sono state rilasciate da 
              clienti reali che hanno usufruito dei nostri servizi. Rispettiamo 
              la privacy di ogni cliente e pubblichiamo solo le testimonianze 
              autorizzate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#d97706]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vuoi Raccontare la Tua Storia di Successo?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Se hai ottenuto il tuo risarcimento grazie a noi, contattaci. 
              La tua testimonianza può aiutare altri a fare il primo passo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#d97706] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span>Richiedi Consulenza Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+393459726530"
                className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-[#d97706] transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>+39 345 972 65 30</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

