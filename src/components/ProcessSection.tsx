import { motion, useInView } from "framer-motion";
import { Search, Settings, Rocket, TrendingUp } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analyse",
    description: "Wir analysieren Ihre Amazon-Präsenz, Konkurrenz und identifizieren Optimierungspotenziale mit unserer KI.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Setup",
    description: "Wir richten alle KI-Tools ein und integrieren sie nahtlos in Ihre bestehenden Workflows.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch",
    description: "Automatisierte Creative-Produktion, Listing-Optimierung und PPC-Intelligence starten.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Skalierung",
    description: "Kontinuierliche Optimierung durch KI-gesteuerte Datenanalyse und automatische Anpassungen.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

        <div ref={sectionRef} className="relative">
          {/* Desktop: Horizontal Layout */}
          <div className="hidden lg:block">
            {/* Animated Connection Line - Desktop */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5">
              <div className="relative w-full h-full bg-border/30 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary to-primary/50"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.4 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Number Badge */}
                    <div className="relative mb-6">
                      <motion.div 
                        className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center relative z-10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.4 }}
                      >
                        <step.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <motion.span 
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.4, type: "spring" }}
                      >
                        {step.number}
                      </motion.span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tablet/Mobile: Vertical Layout */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="relative w-full max-w-md">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.4 }}
                    className="flex items-center gap-6 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
                  >
                    {/* Icon & Number */}
                    <div className="relative flex-shrink-0">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.4 }}
                      >
                        <step.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <motion.span 
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.4, type: "spring" }}
                      >
                        {step.number}
                      </motion.span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </motion.div>

                  {/* Vertical Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="relative w-0.5 h-8 bg-border/30 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-x-0 top-0 bg-primary"
                          initial={{ height: "0%" }}
                          animate={isInView ? { height: "100%" } : { height: "0%" }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.4 }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
