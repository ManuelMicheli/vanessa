"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, FileSearch, Scale, Trophy, Shield, CreditCard, Phone, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contattaci",
    description: "Chiamaci, scrivici su WhatsApp o compila il form. Ti rispondiamo entro 24 ore.",
    details: [
      "Prima consulenza sempre gratuita",
      "Ascoltiamo la tua storia con attenzione",
      "Raccogliamo le informazioni iniziali",
    ],
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Analizziamo il Caso",
    description: "Studiamo la documentazione e valutiamo le possibilità di risarcimento.",
    details: [
      "Analisi della documentazione disponibile",
      "Valutazione preliminare del caso",
      "Ti spieghiamo i tuoi diritti",
    ],
  },
  {
    number: "03",
    icon: Scale,
    title: "Gestiamo Tutto Noi",
    description: "Ci occupiamo di burocrazia, perizie e negoziazione. Tu non devi fare nulla.",
    details: [
      "Perizie medico-legali e tecniche",
      "Gestione dei rapporti con assicurazioni",
      "Preparazione di tutta la documentazione",
    ],
  },
  {
    number: "04",
    icon: Trophy,
    title: "Ottieni il Risultato",
    description: "Ti accompagniamo fino all'ottenimento del risarcimento che meriti.",
    details: [
      "Negoziazione per il massimo risarcimento",
      "Eventuale azione legale se necessaria",
      "Pagamento solo a successo ottenuto",
    ],
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Zero Anticipo",
    description: "Non ti chiediamo un euro fino al risultato. Tutte le spese (mediche, peritali, legali) sono a nostro carico.",
  },
  {
    icon: CreditCard,
    title: "Paghi Solo a Successo",
    description: "Il nostro compenso è una percentuale concordata sul risarcimento ottenuto. Se non otteniamo nulla, non ci devi nulla.",
  },
  {
    icon: CheckCircle,
    title: "Trasparenza Totale",
    description: "Ti informiamo su ogni passaggio. Nessuna sorpresa, nessun costo nascosto.",
  },
];

const faqs = [
  {
    question: "Cosa succede se non ottengo il risarcimento?",
    answer: "Se non otteniamo il risarcimento, non ci devi nulla. Il rischio è tutto nostro: per questo selezioniamo con cura i casi e lavoriamo con il massimo impegno su ognuno.",
  },
  {
    question: "Quali spese sono coperte dal 'Zero Anticipo'?",
    answer: "Tutte le spese necessarie alla pratica: visite medico-legali, perizie tecniche, spese legali, consulenze specialistiche. Non anticipi nemmeno un euro.",
  },
  {
    question: "Quanto tempo ci vuole per ottenere il risarcimento?",
    answer: "Dipende dalla complessità del caso. Alcune pratiche si risolvono in pochi mesi, altre richiedono più tempo se è necessaria un'azione giudiziaria. Ti terremo sempre aggiornato sui tempi previsti.",
  },
  {
    question: "Devo venire in ufficio?",
    answer: "Non necessariamente. Possiamo gestire tutto a distanza: videochiamate, email, WhatsApp. Se preferisci un incontro di persona, siamo disponibili.",
  },
];

export default function ComeFunzionaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1a2332] via-[#1e3a5f] to-[#1a2332] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#10b981]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 text-white/90 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Come Funziona
            </span>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative px-2"
              style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
            >
              {["Zero", "Anticipo.", "Massimo", "Risultato."].map((word, wordIndex) => (
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
                        color: wordIndex >= 2 ? "#10b981" : "#FFFFFF"
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
                  {wordIndex < 3 && <span className="inline-block w-2" />}
                </span>
              ))}
            </motion.h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Un processo semplice e trasparente. Ti spieghiamo come funziona 
              il nostro servizio, passo dopo passo.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2332] mb-1">{benefit.title}</h3>
                  <p className="text-sm text-[#374151]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-4">
              Il Processo
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              4 Semplici Passi
            </h2>
            <p className="text-lg text-[#374151]">
              Dalla prima telefonata al risarcimento ottenuto, ecco cosa succede.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#2563eb] text-white flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb]" />
                  </div>
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1a2332] mb-2 sm:mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#374151] mb-3 sm:mb-4">{step.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-[#374151]">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10b981] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Anticipo Explained */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm font-medium mb-4">
                Zero Anticipo
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Come Funziona il Nostro Modello
              </h2>
              <div className="space-y-4 text-[#374151] text-lg">
                <p>
                  Il nostro modello &quot;Zero Anticipo&quot; significa che 
                  <strong className="text-[#1a2332]"> non ti chiediamo un euro </strong> 
                  fino a quando non otteniamo il risarcimento per te.
                </p>
                <p>
                  Tutte le spese necessarie alla pratica – visite mediche, perizie, 
                  consulenze specialistiche – sono anticipate da noi. Se non otteniamo 
                  risultato, non ci devi nulla.
                </p>
                <p>
                  Il nostro compenso è una <strong className="text-[#1a2332]">percentuale 
                  concordata</strong> sul risarcimento ottenuto. Niente sorprese, 
                  niente costi nascosti.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a2332] to-[#2563eb] rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Cosa È Incluso
              </h3>
              <ul className="space-y-4">
                {[
                  "Consulenza iniziale gratuita",
                  "Visite medico-legali",
                  "Perizie tecniche (cinematiche, ecc.)",
                  "Spese legali e processuali",
                  "Consulenze specialistiche",
                  "Gestione completa della pratica",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  * Il compenso finale è una percentuale del risarcimento ottenuto, 
                  concordata prima di iniziare la pratica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#d97706]/10 text-[#d97706] rounded-full text-sm font-medium mb-4">
              Domande Frequenti
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hai Ancora Dubbi?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-[#1a2332] mb-2">{faq.question}</h3>
                <p className="text-[#374151]">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-4 transition-all"
            >
              <span>Vedi tutte le FAQ</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#10b981]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pronto a Iniziare?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              La prima consulenza è sempre gratuita. Contattaci e scopri se hai 
              diritto a un risarcimento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#10b981] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span>Richiedi Consulenza Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+393459726530"
                className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-[#10b981] transition-all"
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

