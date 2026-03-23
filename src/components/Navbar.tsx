import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

const Logo = () => (
  <svg width="180" height="32" viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="navLogoGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0B5FFF" />
        <stop offset="100%" stopColor="#00D4AA" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="30" r="22" fill="url(#navLogoGrad)" />
    <path d="M14 36 L24 18 L34 36" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="58" y="40" fontFamily="DM Sans" fontWeight="800" fontSize="28" letterSpacing="-0.03em">
      <tspan fill="currentColor">VARATRAZA</tspan>
      <tspan fill="#0B5FFF">TECH</tspan>
    </text>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 lg:h-20">
        <a href="#accueil" className={scrolled ? "text-foreground" : "text-primary-foreground"}>
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 bg-secondary/80 backdrop-blur-sm rounded-[50px] px-2 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-[50px] text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden lg:block btn-pill bg-primary text-primary-foreground hover:opacity-90"
        >
          Consultation gratuite
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container-max py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-pill bg-primary text-primary-foreground text-center mt-2"
              >
                Consultation gratuite
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
