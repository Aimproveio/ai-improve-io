import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 35, suffix: "%", prefix: "", label: "Durchschnittliche Umsatzsteigerung" },
  { value: 100, suffix: "+", prefix: "", label: "Amazon Seller betreut" },
  { value: 40, suffix: "%", prefix: "-", label: "Reduzierter ACoS" },
  { value: 10, suffix: "x", prefix: "", label: "Schnellere Content-Produktion" },
];

const CountUp = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Ergebnisse
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Zahlen, die für sich sprechen
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <CountUp 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
