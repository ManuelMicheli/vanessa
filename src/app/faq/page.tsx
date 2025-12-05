"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, HelpCircle } from "lucide-react";

const faqCategories = [
  {
    name: "Generale",
    faqs: [
      {
        question: "Cosa fa esattamente il vostro studio?",
        answer:
          "Siamo specializzati in risarcimenti assicurativi. Assistiamo le vittime di incidenti stradali, errori medici e infortuni sul lavoro nell'ottenere il giusto risarcimento. Ci occupiamo di tutta la pratica: dalla consulenza iniziale alla negoziazione con le assicurazioni, fino all'eventuale azione legale.",
      },
      {
        question: "Come venite pagati?",
        answer:
          "Il nostro compenso è una percentuale concordata sul risarcimento ottenuto. Non chiediamo alcun anticipo: tutte le spese (perizie, visite mediche, consulenze) sono a nostro carico. Se non otteniamo risultato, non ci devi nulla.",
      },
      {
        question: "Quanto tempo ci vuole per ottenere il risarcimento?",
        answer:
          "Dipende dalla complessità del caso. Le pratiche più semplici si risolvono in 3-6 mesi. Casi più complessi, specialmente se richiedono un'azione giudiziaria, possono richiedere 1-3 anni. Ti terremo sempre aggiornato sui tempi previsti.",
      },
      {
        question: "Lavorate in tutta Italia?",
        answer:
          "Sì, operiamo su tutto il territorio nazionale. Grazie alla tecnologia, possiamo seguirti a distanza con videochiamate, email e WhatsApp. Se preferisci un incontro di persona, possiamo organizzarlo.",
      },
    ],
  },
  {
    name: "Zero Anticipo",
    faqs: [
      {
        question: "Cosa significa esattamente 'Zero Anticipo'?",
        answer:
          "Significa che non ti chiediamo un euro fino a quando non otteniamo il risarcimento. Tutte le spese necessarie alla pratica – visite mediche, perizie tecniche, consulenze specialistiche, spese legali – sono anticipate da noi.",
      },
      {
        question: "Quali spese coprite con il 'Zero Anticipo'?",
        answer:
          "Copriamo tutte le spese necessarie: visite medico-legali, perizie tecniche (es. ricostruzione cinematica), consulenze specialistiche, spese legali e processuali, bolli e marche da bollo. Non devi anticipare nulla.",
      },
      {
        question: "Cosa succede se non ottenete il risarcimento?",
        answer:
          "Se non otteniamo il risarcimento, non ci devi nulla. Il rischio è tutto nostro. Per questo selezioniamo con cura i casi e lavoriamo con il massimo impegno su ognuno.",
      },
      {
        question: "Qual è la percentuale del vostro compenso?",
        answer:
          "La percentuale varia in base alla complessità del caso e viene concordata prima di iniziare la pratica. È tutto scritto in un contratto chiaro, senza sorprese. Generalmente si attesta tra il 15% e il 25% del risarcimento ottenuto.",
      },
    ],
  },
  {
    name: "Il Processo",
    faqs: [
      {
        question: "Come iniziare?",
        answer:
          "È semplicissimo: chiamaci, scrivici su WhatsApp o compila il form sul sito. Ti risponderemo entro 24 ore con una prima valutazione gratuita del tuo caso. Non c'è nessun impegno.",
      },
      {
        question: "Devo venire in ufficio?",
        answer:
          "Non necessariamente. Possiamo gestire tutto a distanza tramite videochiamate, email e WhatsApp. Se preferisci un incontro di persona, siamo disponibili a organizzarlo.",
      },
      {
        question: "Che documenti servono?",
        answer:
          "Dipende dal tipo di caso. Per un incidente stradale: verbale delle autorità, documentazione medica, foto dei danni. Per malasanità: cartella clinica e documentazione sanitaria. Ti guideremo nella raccolta di tutto il necessario.",
      },
      {
        question: "Come mi terrete aggiornato?",
        answer:
          "Ti aggiorneremo regolarmente sullo stato della pratica. Puoi contattarci in qualsiasi momento via telefono, email o WhatsApp. Crediamo nella trasparenza e nella comunicazione costante.",
      },
    ],
  },
  {
    name: "Cambio Professionista",
    faqs: [
      {
        question: "Posso cambiare avvocato se ho già una pratica in corso?",
        answer:
          "Assolutamente sì. Se la tua pratica è ferma o non sei soddisfatto del tuo attuale professionista, puoi affidarla a noi. Analizzeremo la situazione e ti diremo come procedere.",
      },
      {
        question: "Ci sono penali per cambiare professionista?",
        answer:
          "Dipende dal contratto che hai firmato con il professionista attuale. In genere, se la pratica non è stata conclusa, puoi cambiare pagando solo le eventuali spese già sostenute. Analizzeremo il tuo caso specifico.",
      },
      {
        question: "Quanto tempo serve per trasferire una pratica?",
        answer:
          "Generalmente pochi giorni. Ti aiuteremo a gestire il passaggio in modo da non perdere tempo prezioso. L'importante è agire prima che scadano eventuali termini legali.",
      },
      {
        question: "Potete analizzare gratuitamente la mia pratica esistente?",
        answer:
          "Sì, offriamo un'analisi gratuita della tua pratica. Ti diremo se secondo noi il lavoro svolto finora è adeguato e se ci sono margini per ottenere un risarcimento migliore.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Generale");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  const currentFaqs =
    faqCategories.find((cat) => cat.name === activeCategory)?.faqs || [];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1a2332] via-[#1e3a5f] to-[#1a2332] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#2563eb]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 text-white/90 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              FAQ
            </span>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative px-2"
              style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
            >
              {["Domande", "Frequenti"].map((word, wordIndex) => (
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
                        color: wordIndex === 1 ? "#10b981" : "#FFFFFF"
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
                  {wordIndex < 1 && <span className="inline-block w-2" />}
                </span>
              ))}
            </motion.h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Trova le risposte alle domande più comuni sui nostri servizi. 
              Se non trovi quello che cerchi, contattaci.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
                <h3 className="font-semibold text-[#1a2332] mb-4 px-2">
                  Categorie
                </h3>
                <nav className="space-y-1">
                  {faqCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                        activeCategory === category.name
                          ? "bg-[#2563eb] text-white"
                          : "text-[#374151] hover:bg-[#f3f4f6]"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {currentFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleQuestion(faq.question)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#1a2332] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#374151] transition-transform flex-shrink-0 ${
                          openQuestions.includes(faq.question)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {openQuestions.includes(faq.question) && (
                      <div className="px-6 pb-6">
                        <p className="text-[#374151] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-[#2563eb]" />
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Non Hai Trovato la Risposta?
            </h2>
            <p className="text-[#374151] mb-8">
              Contattaci direttamente. Siamo qui per rispondere a tutte le tue domande.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="flex items-center gap-2 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors"
              >
                <span>Scrivici</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+393459726530"
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#1a2332] text-[#1a2332] font-semibold rounded-xl hover:bg-[#1a2332] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Chiamaci</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#1a2332]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pronto a Iniziare?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              La prima consulenza è sempre gratuita e senza impegno. 
              Scopri se hai diritto a un risarcimento.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#10b981] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <span>Richiedi Consulenza Gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

