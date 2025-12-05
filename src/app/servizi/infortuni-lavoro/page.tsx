import { Metadata } from "next";
import Link from "next/link";
import { HardHat, ArrowRight, CheckCircle, Shield, Phone, FileText, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Risarcimento Infortuni sul Lavoro | Giusto Risarcimento",
  description:
    "Assistenza legale per infortuni sul lavoro: ricorsi INAIL/INPS, risarcimento danni, malattie professionali. Consulenza gratuita e zero anticipo.",
};

const situations = [
  "Hai subito un infortunio sul luogo di lavoro",
  "Soffri di una malattia professionale (es. amianto, rumore)",
  "L'INAIL ha respinto o sottovalutato il tuo infortunio",
  "Il tuo datore di lavoro non ha rispettato le norme di sicurezza",
  "Hai ricevuto un indennizzo INAIL che ritieni inadeguato",
  "Vuoi fare ricorso contro una decisione INAIL/INPS",
  "Sei stato vittima di un incidente in itinere",
];

const services = [
  {
    icon: FileText,
    title: "Ricorsi INAIL/INPS",
    description: "Ti assistiamo nei ricorsi amministrativi e giudiziari contro le decisioni degli enti previdenziali.",
  },
  {
    icon: Scale,
    title: "Risarcimento dal Datore",
    description: "Oltre all'indennizzo INAIL, puoi avere diritto a un risarcimento aggiuntivo dal datore di lavoro.",
  },
  {
    icon: Shield,
    title: "Tutela Completa",
    description: "Ti proteggiamo in ogni fase: dalla denuncia di infortunio fino all'ottenimento del risarcimento.",
  },
];

const rights = [
  {
    title: "Indennizzo INAIL",
    description: "Copertura delle spese mediche e indennità per inabilità temporanea o permanente.",
  },
  {
    title: "Risarcimento Differenziale",
    description: "Se il datore ha violato norme di sicurezza, puoi ottenere un risarcimento aggiuntivo.",
  },
  {
    title: "Rendita Vitalizia",
    description: "In caso di invalidità permanente superiore al 16%, hai diritto a una rendita INAIL.",
  },
  {
    title: "Danno Biologico",
    description: "Risarcimento per il danno alla salute, indipendente dalla capacità lavorativa.",
  },
];

export default function InfortuniLavoroPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1a2332] via-[#1e3a5f] to-[#1a2332] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#d97706]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#d97706] flex items-center justify-center">
                <HardHat className="w-7 h-7 text-white" />
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
              <span className="text-[#d97706]">Infortuni sul Lavoro</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Difendiamo i diritti dei lavoratori infortunati. Ti assistiamo nei ricorsi 
              INAIL/INPS e nella richiesta di <strong className="text-white">risarcimento danni</strong> al 
              datore di lavoro.
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

      {/* Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#d97706]/10 text-[#d97706] rounded-full text-sm font-medium mb-4">
              I Nostri Servizi
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Come Proteggiamo i Tuoi Diritti
            </h2>
            <p className="text-lg text-[#374151]">
              Assistenza completa per ogni aspetto legato agli infortuni sul lavoro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#f3f4f6] rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#d97706]/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-[#d97706]" />
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

      {/* When to Contact + Rights */}
      <section className="py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* When to Contact */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#d97706]/10 text-[#d97706] rounded-full text-sm font-medium mb-4">
                Quando Contattarci
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Possiamo Aiutarti Se...
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

            {/* Your Rights */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-4">
                I Tuoi Diritti
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A Cosa Hai Diritto
              </h2>
              <div className="space-y-4">
                {rights.map((right) => (
                  <div key={right.title} className="bg-white rounded-xl p-6">
                    <h3 className="font-bold text-[#1a2332] mb-2">{right.title}</h3>
                    <p className="text-[#374151] text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a2332] to-[#2563eb] rounded-2xl p-8 lg:p-12 text-white">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Lo Sapevi?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-[#10b981] mb-2">
                    L&apos;INAIL Non Risarcisce Tutto
                  </h3>
                  <p className="text-white/80 text-sm">
                    L&apos;indennizzo INAIL copre solo una parte del danno. Se il datore di lavoro 
                    ha violato norme di sicurezza, hai diritto a un risarcimento aggiuntivo 
                    (danno differenziale) che può essere molto significativo.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#10b981] mb-2">
                    Hai Tempo per Agire
                  </h3>
                  <p className="text-white/80 text-sm">
                    I termini per i ricorsi INAIL/INPS sono stretti. Non aspettare: una 
                    consulenza tempestiva può fare la differenza tra ottenere il giusto 
                    risarcimento o perderlo.
                  </p>
                </div>
              </div>
            </div>
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
              Hai Subito un Infortunio sul Lavoro?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Non affrontare da solo la burocrazia. Contattaci per una consulenza gratuita 
              e scopri tutti i tuoi diritti.
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

