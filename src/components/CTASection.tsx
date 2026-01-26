import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Kostenlose Potenzialanalyse",
  "Unverbindliches Strategiegespräch",
  "Konkrete Handlungsempfehlungen",
  "ROI-Garantie",
];

const CTASection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 pb-12 md:pb-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-secondary/50 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[hsl(210,100%,60%)]/20 rounded-full blur-[60px]" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Bereit, Ihr Amazon Business zu{" "}
                <span className="gradient-text">skalieren?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Vereinbaren Sie jetzt Ihre kostenlose Potenzialanalyse und erfahren Sie, 
                wie viel Wachstumspotenzial in Ihrem Amazon-Geschäft steckt.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>

              <a href="https://calendly.com/ai-improve/strategy-call" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto text-sm sm:text-base px-4 sm:px-8">
                  Jetzt kostenlose Analyse starten
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </a>

              <p className="mt-6 text-xs text-muted-foreground">
                Keine Verpflichtungen • Antwort innerhalb von 24 Stunden
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
