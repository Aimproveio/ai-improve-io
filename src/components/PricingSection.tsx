import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const tiers = [
  {
    name: "Core",
    subtitle: "Einsteiger / Pflichtprodukt",
    price: "€999",
    period: "/ Monat",
    skuInfo: "bis 20 SKUs",
    description: "Perfekt für Einsteiger – alle Basics für Ihren Amazon-Erfolg.",
    features: [
      "Amazon Listing Automation",
      "Amazon Store Aufbau",
      "Alle 3 Monate gratis Produktrecherche",
      "Alle 6 Monate gratis Marktrecherche",
      "Tracking & Reporting",
      "Kundensupport",
      "Logistik & Beschaffung",
      "Compliance-Management",
    ],
    cta: "Jetzt starten",
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Most Wanted / Standard",
    price: "€2.499",
    period: "/ Monat",
    skuInfo: "bis 50 SKUs",
    description: "Für wachsende Seller – erweiterte Features und PPC-Power.",
    features: [
      "Alles aus Core +",
      "PPC Management (bis 5 Setups)",
      "1 Produktrecherche inklusive",
      "1 Compliance-Anfrage inklusive",
      "Alle 3 Monate gratis Produktrecherche",
      "Alle 6 Monate gratis Marktrecherche",
      "4h Custom AI für Ihr Unternehmen",
    ],
    cta: "Jetzt skalieren",
    popular: true,
  },
  {
    name: "Elite",
    subtitle: "Premium / Skalierer",
    price: "€6.999",
    period: "/ Monat",
    skuInfo: "Unbegrenzte SKUs",
    description: "Für Skalierer – maximale Power und Premium-Support.",
    features: [
      "Alles aus Core + Growth +",
      "PPC Management (bis 20 Setups)",
      "3 Produktrecherchen inklusive",
      "5 Compliance-Anfragen inklusive",
      "Alle 3 Monate gratis Listing",
      "Alle 6 Monate gratis Marktrecherche",
      "8h Custom AI für Ihr Unternehmen",
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 ${
                tier.popular 
                  ? "bg-gradient-to-b from-primary/10 to-card border-primary/50 lg:scale-105 lg:z-10 hover:border-white/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]" 
                  : "bg-card border-border hover:border-primary/50 hover:bg-gradient-to-b hover:from-primary/10 hover:to-card"
              }`}
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

              <div className="mb-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <p className="text-xs text-primary font-medium mb-6">{tier.skuInfo}</p>

              <p className="text-muted-foreground text-sm mb-8">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://calendly.com/info-41147/30min" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                <Button 
                  variant={tier.popular ? "hero" : "heroOutline"} 
                  className="w-full group"
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Alle Preise zzgl. MwSt. • Mindestlaufzeit 2 Monate • Individuelle Pakete auf Anfrage
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
