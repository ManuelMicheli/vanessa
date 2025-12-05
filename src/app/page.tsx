import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import AboutPreview from "@/components/sections/AboutPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CTASection
        variant="primary"
        headline="Hai Già un Professionista ma Non Sei Soddisfatto?"
        body="Richiedici un'analisi gratuita della tua pratica. Verifichiamo insieme se stai ottenendo il giusto risarcimento."
        ctaText="Richiedi Analisi Gratuita"
        ctaHref="/contatti"
      />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
