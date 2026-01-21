import { motion, useInView } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef } from "react";

const problems = [
  {
    icon: TrendingDown,
    title: "Sinkende Sichtbarkeit",
    description: "Ihre Listings verschwinden in den Suchergebnissen während die Konkurrenz wächst.",
  },
  {
    icon: Clock,
    title: "Zeitfressende manuelle Arbeit",
    description: "Listings pflegen, Creatives erstellen, PPC optimieren – alles frisst Ihre Zeit.",
  },
  {
    icon: DollarSign,
    title: "Hohe Werbekosten (ACoS)",
    description: "Ihr PPC-Budget verbrennt ohne messbare Ergebnisse und klare Strategie.",
  },
  {
    icon: AlertTriangle,
    title: "Verpasste Chancen",
    description: "Ohne datengetriebene Entscheidungen verschenken Sie täglich Umsatzpotenzial.",
  },
];

const ProblemSection = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Das Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Kennen Sie diese Herausforderungen?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Die meisten Amazon Seller kämpfen täglich mit denselben Problemen – 
            während KI-gestützte Automatisierung längst die Lösung bietet.
          </p>
        </motion.div>

        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
              animate={isMobile && isInView ? { opacity: 1, y: 0 } : undefined}
              whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
              viewport={!isMobile ? { once: true } : undefined}
              transition={{ 
                duration: isMobile ? 0.6 : 0.5, 
                delay: index * (isMobile ? 0.15 : 0.1),
                ease: "easeOut"
              }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-destructive/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
