import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PartnerBanner from "@/components/PartnerBanner";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Improve – KI Automatisierung für effizientes Wachstum</title>
        <meta
          name="description"
          content="Automatisieren, skalieren, Zeit sparen – KI-Lösungen, die Unternehmen messbar effizienter machen."
        />
        <meta name="keywords" content="KI Automatisierung, Künstliche Intelligenz, Effizienz, Skalierung, Unternehmenswachstum, AI Solutions" />
        <link rel="canonical" href="https://ai-improve.io" />
        
        {/* Open Graph */}
        <meta property="og:url" content="https://ai-improve.io" />
        <meta property="og:title" content="AI Improve – KI Automatisierung für effizientes Wachstum" />
        <meta property="og:description" content="Automatisieren, skalieren, Zeit sparen – KI-Lösungen, die Unternehmen messbar effizienter machen." />
        <meta property="og:image" content="https://ai-improve.io/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="AI Improve – KI Automatisierung für effizientes Wachstum" />
        <meta name="twitter:description" content="Automatisieren, skalieren, Zeit sparen – KI-Lösungen, die Unternehmen messbar effizienter machen." />
        <meta name="twitter:image" content="https://ai-improve.io/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <ProblemSection />
          <ServicesSection />
          <ProcessSection />
          <PartnerBanner />
          <PricingSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
