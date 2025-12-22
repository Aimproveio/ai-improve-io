import { motion } from "framer-motion";
import { 
  Image, 
  Video, 
  FileText, 
  Search, 
  BarChart3, 
  Headphones,
  Package,
  Shield
} from "lucide-react";

const services = [
  {
    icon: Image,
    title: "Creative Production",
    description: "AI Product Image Suite, Lifestyle-Bilder, Infografiken, A+ Content – alle visuellen Assets für maximale Klickrate.",
    features: ["Main Images", "EBC/A+ Content", "Produktbilder", "Infografiken"],
  },
  {
    icon: Video,
    title: "AI Video Production",
    description: "Von Hooks & Scripts über Runway/Luma Videos bis UGC Simulation – High-End Videocontent ohne Filmcrew.",
    features: ["Video Ads", "Motiongraphics", "3D Videos", "UGC Simulation"],
  },
  {
    icon: FileText,
    title: "Listing & Content",
    description: "KI-generierte Titles, Bullets, Descriptions mit Keyword-Integration. A+ Content Automation inklusive.",
    features: ["Listing Automation", "A+ Content", "Keyword Research", "SEO-Optimierung"],
  },
  {
    icon: Search,
    title: "Recherche & Intelligence",
    description: "Target-Recherche, Produktanalyse, Markttrends – alle Daten für fundierte Entscheidungen.",
    features: ["Keyword-Recherche", "ASIN-Analyse", "Markttrends", "USP-Identifikation"],
  },
  {
    icon: BarChart3,
    title: "Performance & PPC",
    description: "Amazon PPC Intelligence, Cross-Channel Dashboards, Forecasting – maximale Profitabilität.",
    features: ["PPC Reports", "Waste Reduction", "KPI Dashboards", "Forecasting"],
  },
  {
    icon: Headphones,
    title: "Support Automation",
    description: "Buyer Messages, Review-Antworten, Returns – 24/7 automatisierter Kundensupport.",
    features: ["Chat-Automation", "Review Responses", "Return Handling", "Auto-Post Engine"],
  },
  {
    icon: Package,
    title: "Logistik & Beschaffung",
    description: "Supply Chain Optimization, Lagermanagement, Multi-Channel Koordination – nie mehr Stockouts.",
    features: ["Bestellplanung", "FBA-Optimierung", "Lagerkosten", "Multi-Channel"],
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Zertifikate-Identifikation, Vorschriften-Mapping, rechtssichere Dokumentation automatisiert.",
    features: ["Zertifikate", "Regularien", "Dokumentation", "Amazon-konform"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Unsere Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Komplette KI-Automatisierung für{" "}
            <span className="gradient-text">Amazon Seller</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Von Creative Production über Listing-Optimierung bis Performance Tracking – 
            alles aus einer Hand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
