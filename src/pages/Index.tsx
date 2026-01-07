import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
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
        <title>AImprove - KI-Agentur für Amazon Seller | Automatisierung & Optimierung</title>
        <meta
          name="description"
          content="Steigern Sie Ihre Amazon Performance mit KI-gestützter Automatisierung. Creative Production, Listing-Optimierung, PPC Intelligence und mehr für Amazon Seller."
        />
        <meta name="keywords" content="KI Agentur, Amazon Seller, Amazon FBA, Listing Optimierung, PPC Automation, A+ Content, Amazon Advertising" />
        <link rel="canonical" href="https://aimprove.de" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <ProblemSection />
          <ServicesSection />
          <StatsSection />
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
