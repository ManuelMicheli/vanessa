"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Users, Shield, Clock, Target, Handshake } from "lucide-react";

const timeline = [
  {
    year: "1997",
    title: "L'Inizio",
    description: "Vanessa Varsallona inizia la sua carriera nel settore dei risarcimenti, con la passione per la tutela dei diritti.",
  },
  {
    year: "2005",
    title: "La Specializzazione",
    description: "Focus esclusivo sui risarcimenti assicurativi: incidenti stradali, malasanità, infortuni sul lavoro.",
  },
  {
    year: "2015",
    title: "Zero Anticipo",
    description: "Introduzione del modello 'Zero Anticipo': il cliente non paga nulla fino al risultato ottenuto.",
  },
  {
    year: "Oggi",
    title: "Oltre 500 Casi",
    description: "Una rete consolidata di professionisti e oltre 500 casi risolti con successo.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Empatia",
    description: "Ci mettiamo nei panni del danneggiato. Ogni caso non è solo una pratica, ma una persona con una storia.",
  },
  {
    icon: Shield,
    title: "Trasparenza",
    description: "Zero sorprese, massima chiarezza. Ti spieghiamo ogni passaggio e costo prima di iniziare.",
  },
  {
    icon: Award,
    title: "Eccellenza",
    description: "20+ anni di esperienza nel settore. Aggiornamento continuo e collaborazione con i migliori specialisti.",
  },
  {
    icon: Target,
    title: "Dedizione",
    description: "Ogni caso merita il massimo impegno. Non ci arrendiamo fino a ottenere il giusto risultato.",
  },
];

const team = [
  {
    role: "Avvocati",
    description: "Specializzati in diritto dei risarcimenti",
    icon: Users,
  },
  {
    role: "Medici Legali",
    description: "Per perizie accurate e professionali",
    icon: Heart,
  },
  {
    role: "Periti Tecnici",
    description: "Ricostruzioni dinamiche e valutazioni",
    icon: Target,
  },
  {
    role: "Consulenti",
    description: "Supporto in ogni fase della pratica",
    icon: Handshake,
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1a2332] via-[#1e3a5f] to-[#1a2332] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#2563eb]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#10b981]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-6">
              Chi Siamo
            </span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative"
              style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
            >
              {["Esperienza,", "Empatia,", "Risultati"].map((word, wordIndex) => (
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
                        color: wordIndex === 2 ? "#10b981" : "#FFFFFF"
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
                  {wordIndex < 2 && <span className="inline-block w-2" />}
                </span>
              ))}
            </motion.h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Da oltre 20 anni al fianco di chi ha subito un torto. La nostra missione 
              è garantirti il giusto risarcimento, senza stress e senza anticipi.
            </p>
          </div>
        </div>
      </section>

      {/* About Vanessa */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#2563eb]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-6xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                        VV
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      Vanessa Varsallona
                    </h3>
                    <p className="text-white/70">Fondatrice e Titolare</p>
                  </div>
                </div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#10b981]/10 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-[#10b981]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1a2332]">500+</div>
                    <div className="text-sm text-[#374151]/70">Casi Risolti</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-4">
                La Nostra Storia
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Una Missione Nata dalla Passione
              </h2>
              <div className="space-y-4 text-[#374151] text-lg leading-relaxed">
                <p>
                  Cresciuta tra fascicoli di sinistri e trattative assicurative grazie alla professione di mio padre, 
                  oggi guido lo Studio Varsallona, specializzato in incidenti stradali, infortuni sul lavoro ed errori medici. 
                  Con il mio team di avvocati, medici legali e periti, offro un&apos;assistenza completa e profondamente umana, 
                  occupandomi di ogni aspetto burocratico, assicurativo e legale al posto dei miei assistiti.
                </p>
                <p>
                  Abbiamo scelto un modello senza anticipi: le persone che si affidano allo Studio non sostengono costi iniziali, 
                  ma ci riconoscono un compenso solo a risarcimento ottenuto, perché 
                  <strong className="text-[#1a2332]"> il diritto alla difesa non deve dipendere dalle possibilità economiche</strong>. 
                  La missione è una sola: proteggere le vittime, farle sentire in una &quot;zona protetta&quot; e ottenere per loro 
                  il massimo risarcimento possibile, sia in termini economici che di giustizia.
                </p>
                <p>
                  Ho iniziato la mia carriera nel 1997 con un obiettivo chiaro: tutelare i diritti di chi ha subito un torto. 
                  Nel corso degli anni ho visto troppe persone rinunciare al proprio risarcimento per paura della burocrazia 
                  o per mancanza di risorse economiche. Per questo ho creato il modello &quot;Zero Anticipo&quot;: 
                  nessuno deve rinunciare ai propri diritti per motivi economici.
                </p>
                <p className="text-[#10b981] font-semibold">
                  &quot;Mi metto sempre nei panni del danneggiato. È questo che fa la differenza.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#d97706]/10 text-[#d97706] rounded-full text-sm font-medium mb-4">
              Il Nostro Percorso
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              20+ Anni di Esperienza
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-[#2563eb]/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8 bg-white rounded-xl p-6 shadow-sm">
                  <h3
                    className="text-xl font-bold text-[#1a2332] mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#374151]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm font-medium mb-4">
              I Nostri Valori
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cosa Ci Guida Ogni Giorno
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl hover:bg-[#f3f4f6] transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#2563eb]" />
                </div>
                <h3
                  className="text-xl font-bold text-[#1a2332] mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value.title}
                </h3>
                <p className="text-[#374151] text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-4">
              Il Nostro Network
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Una Rete di Professionisti
            </h2>
            <p className="text-lg text-[#374151]">
              Collaboriamo con i migliori specialisti del settore per offrirti 
              un&apos;assistenza completa e qualificata.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#1a2332] to-[#2563eb] flex items-center justify-center">
                  <member.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#1a2332] mb-1">{member.role}</h3>
                <p className="text-sm text-[#374151]/70">{member.description}</p>
              </div>
            ))}
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
              Conosci il Nostro Approccio
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Scopri come possiamo aiutarti. La prima consulenza è sempre gratuita 
              e senza impegno.
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

