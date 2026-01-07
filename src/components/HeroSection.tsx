import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Brain, Zap, TrendingUp, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

const TypeWriter = ({ words, className }: { words: string[]; className?: string }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(word.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

const FloatingIcon = ({ 
  icon: Icon, 
  delay, 
  x, 
  y 
}: { 
  icon: React.ElementType; 
  delay: number; 
  x: string; 
  y: string; 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className="absolute hidden md:flex items-center justify-center"
    style={{ left: x, top: y }}
  >
    <motion.div
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 4 + delay,
        ease: "easeInOut"
      }}
      className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg"
    >
      <Icon className="w-6 h-6 text-primary" />
    </motion.div>
  </motion.div>
);

const Particle = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100;
  const randomDuration = 15 + Math.random() * 10;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh", x: `${randomX}vw` }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: "-20vh",
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute w-1 h-1 bg-primary/30 rounded-full"
    />
  );
};

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const words = ["Amazon Business", "E-Commerce", "Marketplace", "Seller-Erfolg"];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Particle key={i} delay={i * 1.5} />
        ))}
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[hsl(210,100%,60%)]/15 rounded-full blur-[100px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Animated Grid Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating AI Icons */}
      <FloatingIcon icon={Brain} delay={0.5} x="10%" y="25%" />
      <FloatingIcon icon={Zap} delay={0.7} x="85%" y="20%" />
      <FloatingIcon icon={TrendingUp} delay={0.9} x="8%" y="65%" />
      <FloatingIcon icon={BarChart3} delay={1.1} x="88%" y="60%" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          style={{ 
            perspective: 1000,
            rotateX,
            rotateY
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground">
              KI-Automatisierung für Amazon Seller
            </span>
          </motion.div>

          {/* Headline with TypeWriter */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Skalieren Sie Ihr{" "}
            <span className="gradient-text">
              <TypeWriter words={words} />
            </span>{" "}
            <br className="hidden sm:block" />
            mit KI-Power
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Von Creative Production über Listing-Optimierung bis PPC Intelligence – 
            wir automatisieren Ihr Amazon-Geschäft und maximieren Ihre Profitabilität.
          </motion.p>

          {/* CTA Buttons with enhanced hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" className="group relative overflow-hidden">
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", skewX: -15 }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                Kostenlose Potenzialanalyse
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Video ansehen
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <span className="text-sm">100+ Amazon Seller</span>
            </motion.div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <motion.div 
              className="text-sm"
              whileHover={{ scale: 1.05 }}
            >
              ⭐️ 4.9/5 Bewertung
            </motion.div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <motion.div 
              className="text-sm"
              whileHover={{ scale: 1.05 }}
            >
              🚀 Ø 35% mehr Umsatz
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
