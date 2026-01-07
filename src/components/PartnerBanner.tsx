import { motion } from "framer-motion";

const partners = [
  "Massagewerk",
  "Echo Impact",
  "Digital Roar",
  "SA Ventures GmbH",
  "NordBrand",
  "Elevate Commerce",
  "Prime Sellers Co.",
  "Apex Trade",
];

const PartnerBanner = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-medium">
          Vertraut von führenden Marken
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: [0, -50 * partners.length * 2],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8"
            >
              <span className="text-xl font-semibold text-foreground/70 hover:text-foreground transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBanner;
