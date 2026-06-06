import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ProcessSection from "@/components/ProcessSection";
import Packages from "@/components/Packages";
import Retainers from "@/components/Retainers";
import Compare from "@/components/Compare";
import FaqAccordion from "@/components/FaqAccordion";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "InnerSCE",
  description:
    "Agencia digital AI-first. Construimos el sistema completo: copy, SEO, estrategia, email y activos digitales. Entregado en 7–10 días hábiles. Sin retainer, sin dependencia.",
  url: "https://innersce.co",
  logo: "https://innersce.co/assets/logo-dark.svg",
  email: "hola@innersce.co",
  serviceType: [
    "Estrategia de marca",
    "SEO",
    "Marketing de contenidos",
    "Redes sociales",
    "Email marketing",
    "Optimización para buscadores de IA",
  ],
  areaServed: [
    { "@type": "Country", name: "Argentina" },
    { "@type": "Country", name: "España" },
    { "@type": "Place", name: "América Latina" },
  ],
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hola@innersce.co",
    contactType: "sales",
    availableLanguage: "Spanish",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Foundation Package",
      price: "800",
      priceCurrency: "USD",
      description:
        "Sistema base: brand brief, copy web, Google Business Profile, keywords, Instagram strategy, AI search optimization.",
    },
    {
      "@type": "Offer",
      name: "Growth Package",
      price: "2500",
      priceCurrency: "USD",
      description:
        "Foundation + auditoría SEO, landing page, email sequence, analytics, estrategia multi-plataforma.",
    },
    {
      "@type": "Offer",
      name: "AI Performance Package",
      price: "4500",
      priceCurrency: "USD",
      description:
        "Growth + citado por ChatGPT y Google AI, Brand Book completo, email sequence segmentado, dashboard de métricas, workshop IA, competitor analysis.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Nav />
      <RevealSection>
        <main>
          <Hero />
          <Problem />
          <ProcessSection />
          <Packages />
          <Retainers />
          <Compare />
          <FaqAccordion />
          <CtaFinal />
        </main>
        <Footer />
      </RevealSection>
    </>
  );
}