import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import aimprovelogo from "@/assets/aimprove-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Prozess", href: "#process" },
    { label: "Ergebnisse", href: "#testimonials" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={aimprovelogo} alt="AImprove Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
            <span className="text-xl font-bold text-foreground">AImprove</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="https://calendly.com/ai-improve/strategy-call" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="default">
                Kostenlose Analyse
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="https://calendly.com/ai-improve/strategy-call" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="default" className="mt-2 w-full">
                  Kostenlose Analyse
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
