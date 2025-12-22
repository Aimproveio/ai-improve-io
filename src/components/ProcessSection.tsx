import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analyse",
    description: "Wir analysieren Ihren Shop, Ihre Zielgruppe und identifizieren Optimierungspotenziale mit unserer KI.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategie",
    description: "Basierend auf den Daten entwickeln wir eine maßgeschneiderte Optimierungsstrategie für Ihren Shop.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implementierung",
    description: "Wir setzen die Optimierungen um und integrieren unsere KI-Tools nahtlos in Ihren Shop.",
  },
  {
    icon: BarChart,
    number: "04",
    title: "Optimierung",
    description: "Kontinuierliche Verbesserung durch Echtzeit-Datenanalyse und automatische Anpassungen.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Unser Prozess
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            So arbeiten wir zusammen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ein bewährter 4-Schritte-Prozess, der nachweislich Ergebnisse liefert.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center relative z-10">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
