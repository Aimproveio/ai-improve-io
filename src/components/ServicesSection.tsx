import { motion } from "framer-motion";
import { Brain, BarChart3, ShoppingCart, Target, Zap, LineChart } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "KI-Analyse",
    description: "Unsere KI analysiert das Verhalten Ihrer Besucher in Echtzeit und identifiziert Optimierungspotenziale.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Vorhersage-Modelle zeigen Ihnen, welche Produkte wann gekauft werden und wie Sie reagieren sollten.",
  },
  {
    icon: ShoppingCart,
    title: "Checkout-Optimierung",
    description: "Reduzieren Sie Warenkorbabbrüche durch personalisierte Checkout-Erlebnisse.",
  },
  {
    icon: Target,
    title: "Personalisierung",
    description: "Zeigen Sie jedem Besucher genau die Produkte und Inhalte, die für ihn relevant sind.",
  },
  {
    icon: Zap,
    title: "Automatisierte Tests",
    description: "KI-gesteuerte A/B-Tests, die automatisch die beste Variante identifizieren.",
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description: "Echtzeit-Dashboards mit allen relevanten KPIs und automatischen Handlungsempfehlungen.",
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
            KI-Power für Ihren{" "}
            <span className="gradient-text">E-Commerce Erfolg</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unsere spezialisierten KI-Lösungen wurden entwickelt, um jede Phase 
            der Customer Journey zu optimieren.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
