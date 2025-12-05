"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Telefono",
    description: "Chiamaci per una consulenza immediata",
    value: "+39 345 972 65 30",
    href: "tel:+393459726530",
    color: "#10b981",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Scrivici per una risposta rapida",
    value: "Chatta con noi",
    href: "https://wa.me/393459726530?text=Ciao,%20vorrei%20richiedere%20una%20consulenza%20gratuita.",
    color: "#25d366",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Per comunicazioni dettagliate",
    value: "v.varsallona@giustorisarcimento.info",
    href: "mailto:v.varsallona@giustorisarcimento.info",
    color: "#2563eb",
  },
];

const caseTypes = [
  { value: "", label: "Seleziona il tipo di caso" },
  { value: "incidente-stradale", label: "Incidente Stradale" },
  { value: "malasanita", label: "Malasanità / Errore Medico" },
  { value: "infortunio-lavoro", label: "Infortunio sul Lavoro" },
  { value: "altro", label: "Altro" },
];

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        {/* Base gradient - deep navy to almost black */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192A] via-[#0D1F35] to-[#050A10]" />
        
        {/* Animated grid network pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Diagonal lines texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(255,255,255,0.03) 100px,
              rgba(255,255,255,0.03) 101px
            )`,
          }}
        />
        
        {/* Soft fog/mist layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top-right subtle glow */}
          <div className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-[#1a365d]/20 rounded-full blur-[120px]" />
          {/* Bottom-left ambient glow */}
          <div className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-[#0f172a]/40 rounded-full blur-[100px]" />
          {/* Center accent glow - very subtle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#10b981]/[0.03] rounded-full blur-[150px]" />
        </div>
        
        {/* Noise texture overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Dark overlay for contrast guarantee */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192A]/60 via-transparent to-[#050A10]/70" />
        
        {/* Vignette effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5,10,16,0.4) 100%)',
          }}
        />
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/[0.08] backdrop-blur-sm text-white/90 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/[0.08]"
            >
              Contatti
            </motion.span>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative px-2"
              style={{ fontFamily: "var(--font-playfair)", color: "#FFFFFF" }}
            >
              {["Parliamo", "del", "Tuo", "Caso"].map((word, wordIndex) => (
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
              La prima consulenza è sempre gratuita e senza impegno. 
              Contattaci nel modo che preferisci.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 sm:py-12 bg-white border-b border-gray-100">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-[#f3f4f6] rounded-xl hover:bg-white hover:shadow-xl transition-all group touch-manipulation"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0"
                  style={{ backgroundColor: `${method.color}15` }}
                >
                  <method.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: method.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm sm:text-base text-[#1a2332]">{method.title}</h3>
                  <p className="text-xs sm:text-sm text-[#374151]/70 mb-1">{method.description}</p>
                  <p className="text-xs sm:text-sm font-medium" style={{ color: method.color }}>
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#f3f4f6]">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Info Side */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm font-medium mb-4">
                Consulenza Gratuita
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Compila il Form e Ti Ricontatteremo
              </h2>
              <p className="text-lg text-[#374151] mb-8">
                Raccontaci brevemente il tuo caso. Ti risponderemo entro 24 ore 
                con una prima valutazione gratuita.
              </p>

              {/* Additional Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2332]">Orari di Ufficio</h3>
                    <p className="text-[#374151]">
                      Lunedì - Venerdì: 9:00 - 18:00<br />
                      Sabato e Domenica: Chiuso
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2332]">Operiamo in Tutta Italia</h3>
                    <p className="text-[#374151]">
                      Grazie alla tecnologia, possiamo seguirti ovunque ti trovi. 
                      Videochiamate, email, WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-10 p-6 bg-white rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-[#10b981]" />
                  <span className="font-semibold text-[#1a2332]">
                    Garanzia Zero Anticipo
                  </span>
                </div>
                <p className="text-sm text-[#374151]">
                  Ricorda: non ti chiediamo mai un euro in anticipo. 
                  Paghi solo a risultato ottenuto.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#374151] mb-2"
                    >
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#374151] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                        placeholder="mario@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#374151] mb-2"
                      >
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all"
                        placeholder="+39 333 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="caseType"
                      className="block text-sm font-medium text-[#374151] mb-2"
                    >
                      Tipo di Caso *
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      required
                      value={formData.caseType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all bg-white"
                    >
                      {caseTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#374151] mb-2"
                    >
                      Descrivi brevemente il tuo caso
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all resize-none"
                      placeholder="Raccontaci cosa ti è successo..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#2563eb] focus:ring-[#2563eb]"
                    />
                    <label htmlFor="privacy" className="text-sm text-[#374151]">
                      Accetto la{" "}
                      <Link href="/privacy" className="text-[#2563eb] hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      e acconsento al trattamento dei miei dati personali. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#10b981] text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <>
                        <span>Invia Richiesta</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-[#374151]/70">
                    Ti risponderemo entro 24 ore lavorative
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#1a2332] mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Richiesta Inviata!
                  </h3>
                  <p className="text-[#374151] mb-8">
                    Grazie per averci contattato. Ti risponderemo entro 24 ore 
                    con una prima valutazione del tuo caso.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-4 transition-all"
                  >
                    <span>Torna alla Home</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

