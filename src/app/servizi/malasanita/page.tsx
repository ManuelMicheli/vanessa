import { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, ArrowRight, CheckCircle, AlertTriangle, Phone, FileText, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Risarcimento Malasanità ed Errori Medici | Giusto Risarcimento",
  description:
    "Assistenza legale per vittime di malasanità e errori medici. Malpractice, diagnosi errate, lesioni colpose. Consulenza gratuita e zero anticipo.",
};

const situations = [
  "Hai subito un errore medico durante un intervento chirurgico",
  "Una diagnosi errata ha peggiorato la tua condizione",
  "Hai subito danni da un trattamento sanitario inadeguato",
  "Un tuo familiare è deceduto per negligenza medica",
  "Hai contratto un'infezione ospedaliera",
  "Hai subito danni durante il parto (tu o il nascituro)",
  "Ritieni che le cure ricevute siano state inadeguate",
];

const services = [
  {
    icon: FileText,
    title: "Analisi Documentazione",
    description: "Esaminiamo tutta la documentazione clinica per individuare eventuali responsabilità.",
  },
  {
    icon: Stethoscope,
    title: "Consulenza Medico-Legale",
    description: "Collaboriamo con medici legali specializzati per periziare il tuo caso.",
  },
  {
    icon: Users,
    title: "Supporto Completo",
    description: "Ti affianchiamo durante tutto il percorso, anche dal punto di vista emotivo.",
  },
];

const cases = [
  {
    title: "Errori Chirurgici",
    examples: ["Interventi mal eseguiti", "Dimenticanza di strumenti", "Lesioni di organi adiacenti"],
  },
  {
    title: "Errori Diagnostici",
    examples: ["Diagnosi tardive", "Diagnosi errate", "Mancata diagnosi di patologie gravi"],
  },
  {
    title: "Errori Terapeutici",
    examples: ["Somministrazione farmaci errata", "Terapie inadeguate", "Omissione di cure"],
  },
  {
    title: "Danni da Parto",
    examples: ["Lesioni neonatali", "Danni alla madre", "Cesarei tardivi o mancati"],
  },
];

export default function MalasanitaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1a2332] via-[#1e3a5f] to-[#1a2332] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#10b981]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#10b981] flex items-center justify-center">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <span className="px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm font-medium">
                Servizi
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Risarcimento{" "}
              <span className="text-[#10b981]">Malasanità</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Tutela legale specializzata per le vittime di errori medici e negligenza sanitaria. 
              Ti aiutiamo a ottenere <strong className="text-white">giustizia e risarcimento</strong> per 
              i danni subiti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#10b981] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span>Consulenza Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+393459726530"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-[#1a2332] transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Chiama Ora</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="bg-[#d97706]/10 border-y border-[#d97706]/20">
        <div className="container-custom py-6">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-[#d97706] flex-shrink-0" />
            <p className="text-[#374151]">
              <strong className="text-[#1a2332]">Importante:</strong> In caso di sospetta 
              malasanità, è fondamentale conservare tutta la documentazione clinica e agire 
              tempestivamente per tutelare i propri diritti.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm font-medium mb-4">
              Come Ti Aiutiamo
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Il Nostro Approccio ai Casi di Malasanità
            </h2>
            <p className="text-lg text-[#374151]">
              Affrontiamo ogni caso con la massima serietà e competenza, 
              avvalendoci di specialisti del settore medico-legale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#f3f4f6] rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-[#10b981]" />
                </div>
                <h3
                  className="text-xl font-bold text-[#1a2332] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#374151]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Contact */}
      <section className="py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm font-medium mb-4">
                Quando Contattarci
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Potresti Avere Diritto a un Risarcimento Se...
              </h2>
              <ul className="space-y-4">
                {situations.map((situation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#374151]">{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-4">
                Tipologie di Casi
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Casi che Trattiamo
              </h2>
              <div className="space-y-6">
                {cases.map((caseType) => (
                  <div key={caseType.title} className="bg-white rounded-xl p-6">
                    <h3 className="font-bold text-[#1a2332] mb-3">{caseType.title}</h3>
                    <ul className="space-y-2">
                      {caseType.examples.map((example, index) => (
                        <li key={index} className="flex items-center gap-2 text-[#374151] text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
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
              Hai Subito un Errore Medico?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Non sei solo. Contattaci per una consulenza gratuita e riservata. 
              Analizzeremo il tuo caso con la massima discrezione.
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

