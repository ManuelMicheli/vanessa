import { Metadata } from "next";
import Link from "next/link";
import { Car, ArrowRight, CheckCircle, AlertCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Risarcimento Incidenti Stradali | Giusto Risarcimento",
  description:
    "Assistenza legale specializzata per vittime di incidenti stradali. Ottieni il massimo risarcimento per danni ai mezzi, lesioni personali e lutti. Zero anticipo.",
};

const situations = [
  "Hai subito un incidente stradale non per colpa tua",
  "La tua auto ha riportato danni",
  "Hai subito lesioni personali (anche lievi)",
  "Un tuo familiare è deceduto in un incidente",
  "L'assicurazione ti ha offerto un risarcimento che ritieni inadeguato",
  "La tua pratica è ferma da tempo senza risultati",
  "Non sai come procedere con la richiesta di risarcimento",
];

const process = [
  {
    step: "01",
    title: "Consulenza Gratuita",
    description: "Analizziamo il tuo caso: dinamica dell'incidente, danni subiti, documentazione disponibile.",
  },
  {
    step: "02",
    title: "Raccolta Documentazione",
    description: "Ti guidiamo nella raccolta di tutti i documenti necessari: verbali, referti medici, preventivi.",
  },
  {
    step: "03",
    title: "Perizie Tecniche",
    description: "Organizziamo perizie sui danni al veicolo e visite medico-legali per quantificare i danni fisici.",
  },
  {
    step: "04",
    title: "Negoziazione",
    description: "Trattiamo direttamente con l'assicurazione per ottenere il massimo risarcimento possibile.",
  },
  {
    step: "05",
    title: "Risultato",
    description: "Ti accompagniamo fino all'ottenimento del risarcimento. Solo a risultato ottenuto avrai un costo.",
  },
];

const testimonials = [
  {
    name: "Marco B.",
    text: "Dopo l'incidente l'assicurazione mi offriva 8.000€. Grazie allo Studio Varsallona ho ottenuto 28.000€.",
    type: "Tamponamento con lesioni",
  },
  {
    name: "Laura R.",
    text: "Pratica ferma da 2 anni. In 6 mesi hanno risolto tutto. Professionali e sempre disponibili.",
    type: "Sinistro complesso",
  },
];

export default function IncidentiStradaliPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#1a2332] via-[#1e3a5f] to-[#1a2332] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#2563eb]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#2563eb] flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
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
              <span className="text-[#2563eb]">Incidenti Stradali</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Assistenza legale completa per vittime di sinistri stradali. 
              Ti aiutiamo a ottenere il <strong className="text-white">massimo risarcimento</strong> per 
              danni ai mezzi, lesioni personali e lutti familiari.
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

      {/* When to Contact */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-4">
                Quando Contattarci
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Puoi Richiedere un Risarcimento Se...
              </h2>
              <p className="text-lg text-[#374151] mb-8">
                Ogni situazione è diversa, ma se ti riconosci in una di queste condizioni,
                potresti avere diritto a un risarcimento.
              </p>
              <ul className="space-y-4">
                {situations.map((situation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#374151]">{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f3f4f6] rounded-2xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-[#d97706] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2">
                    Non Accettare la Prima Offerta
                  </h3>
                  <p className="text-[#374151]">
                    Le assicurazioni spesso propongono risarcimenti molto inferiori a quanto 
                    effettivamente dovuto. Prima di firmare qualsiasi documento, contattaci 
                    per una valutazione gratuita.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm text-[#374151] mb-4">
                  <strong className="text-[#1a2332]">Esempio reale:</strong> Un nostro 
                  cliente aveva ricevuto un&apos;offerta di €8.000 dall&apos;assicurazione. 
                  Dopo la nostra analisi e negoziazione, ha ottenuto €28.000.
                </p>
                <p className="text-[#10b981] font-semibold text-lg">
                  +250% rispetto all&apos;offerta iniziale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-4">
              Il Nostro Processo
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Come Ti Aiutiamo
            </h2>
            <p className="text-lg text-[#374151]">
              Un percorso chiaro e trasparente, dalla consulenza iniziale al risarcimento ottenuto.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-[#2563eb]/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
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

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#d97706]/10 text-[#d97706] rounded-full text-sm font-medium mb-4">
              Casi di Successo
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Chi Si è Affidato a Noi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[#f3f4f6] rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#d97706] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#374151] text-lg mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1a2332]">{testimonial.name}</span>
                  <span className="text-sm text-[#374151]/70 bg-white px-3 py-1 rounded-full">
                    {testimonial.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#2563eb]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hai Subito un Incidente Stradale?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Contattaci subito per una consulenza gratuita. Ti aiuteremo a ottenere 
              il risarcimento che meriti.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#2563eb] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span>Richiedi Consulenza Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+393459726530"
                className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-[#2563eb] transition-all"
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

