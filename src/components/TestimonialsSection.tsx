import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Hofmann",
    role: "Amazon FBA Seller, 7-stellig",
    content: "Mit AImprove haben wir unsere Listing-Erstellung von 2 Tagen auf 2 Stunden reduziert. Die KI-generierten Creatives performen besser als alles, was wir vorher hatten.",
    rating: 5,
  },
  {
    name: "Jean Philipp Dietz",
    role: "Amazon FBA Seller, Multi 7-stellig",
    content: "Die PPC Intelligence Reports haben uns geholfen, unseren ACoS um 40% zu senken. Endlich verstehen wir, wo unser Budget wirklich hingeht.",
    rating: 5,
  },
  {
    name: "Aleksandar Duric",
    role: "Co-Founder von Naturruf",
    content: "Die UGC Simulation Pipeline ist ein Gamechanger. Wir haben jetzt unbegrenzt authentische Video-Testimonials ohne Influencer-Kosten.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-secondary/30">
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
            Was Amazon Seller sagen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
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
