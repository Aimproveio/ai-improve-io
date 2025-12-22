import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const tiers = [
  {
    name: "Core",
    subtitle: "AI Growth Essentials",
    price: "ab €500",
    period: "/ Monat",
    description: "Perfekt für Einsteiger – bessere Listings, sauberer Content, mehr Sichtbarkeit.",
    features: [
      "Amazon Listing Automation",
      "A+ Content Automation",
      "Keyword Research & Clustering",
      "Product Data Cleanup & SEO",
      "Creative Starter Pack (5 Images + 1 Video)",
      "Review Response Automation",
      "Auto-Post Engine (Basic)",
    ],
    cta: "Jetzt starten",
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "AI Performance Engine",
    price: "ab €1.500",
    period: "/ Monat",
    description: "Für wachsende Seller – kontinuierliche Creative-Power und PPC-Effizienz.",
    features: [
      "Alles aus Core +",
      "Product Image Suite (10-20 Creatives)",
      "AI Video Ads (2-4 Videos / Monat)",
      "UGC Simulation Pipeline",
      "Creative Refresh Automation",
      "Amazon PPC Intelligence Reports",
      "Cross-Channel Performance Dashboard",
      "Customer Support Automation",
      "Return/Warranty Auto-Handling",
      "Monthly AI Growth Report",
    ],
    cta: "Jetzt skalieren",
    popular: true,
  },
  {
    name: "Elite",
    subtitle: "AI Scale Operating System",
    price: "ab €4.000",
    period: "/ Monat",
    description: "Für Skalierer – vollautomatisierte KI-Engine für maximales Wachstum.",
    features: [
      "Alles aus Growth +",
      "Creative Operating System (Endlos-Creatives)",
      "Full Amazon Intelligence Suite",
      "Product Launch Forecast",
      "Offer & Funnel Optimization",
      "Influencer/UGC Briefing Automation",
      "Multi-Channel Growth Strategy",
      "Custom GPT / Agent-System",
      "Orchestrator-, Creative- & Support-Agent",
    ],
    cta: "Kontakt aufnehmen",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Pakete & Preise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Wählen Sie Ihr{" "}
            <span className="gradient-text">Wachstumspaket</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vom Einsteiger bis zum Skalierer – für jede Wachstumsphase das passende Paket.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                tier.popular 
                  ? "bg-gradient-to-b from-primary/10 to-card border-primary/50" 
                  : "bg-card border-border"
              } hover:border-primary/50 transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    Beliebteste Wahl
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-8">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "hero" : "heroOutline"} 
                className="w-full group"
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Alle Preise zzgl. MwSt. • Individuelle Pakete auf Anfrage möglich
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
