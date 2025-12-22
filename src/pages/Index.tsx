import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ConvertAI - KI-Agentur für E-Commerce Conversion Optimierung</title>
        <meta
          name="description"
          content="Steigern Sie Ihre E-Commerce Conversion Rate um bis zu 40% mit KI-gestützter Optimierung. Kostenlose Shop-Analyse für Ihren Online-Shop."
        />
        <meta name="keywords" content="KI Agentur, E-Commerce, Conversion Optimierung, Online Shop, A/B Testing, Personalisierung" />
        <link rel="canonical" href="https://convertai.de" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <ProblemSection />
          <ServicesSection />
          <StatsSection />
          <ProcessSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
