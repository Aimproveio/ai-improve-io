import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Weber",
    role: "CEO, FashionStore24",
    content: "Innerhalb von 3 Monaten haben wir unsere Conversion Rate um 47% gesteigert. Die KI-Analysen haben uns gezeigt, wo wir Geld auf dem Tisch liegen lassen.",
    rating: 5,
  },
  {
    name: "Sarah Müller",
    role: "Head of E-Commerce, TechGadgets",
    content: "Die automatisierten A/B-Tests sparen uns unglaublich viel Zeit. Und das Beste: Die Ergebnisse sind messbar besser als bei unseren manuellen Tests.",
    rating: 5,
  },
  {
    name: "Thomas Schneider",
    role: "Gründer, NaturKosmetik.de",
    content: "Endlich ein Partner, der E-Commerce wirklich versteht. Die personalisierten Produktempfehlungen haben unseren Durchschnittswarenkorb verdoppelt.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
