import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const WindIllustration = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M ${50 + i * 30} ${450 - i * 40} Q ${200 + i * 20} ${300 - i * 50} ${450 - i * 10} ${80 + i * 30}`}
        stroke={i % 2 === 0 ? "white" : "#00D4AA"}
        strokeWidth={3 - i * 0.3}
        fill="none"
        strokeLinecap="round"
        opacity={1 - i * 0.12}
        className="animate-draw-line"
        style={{ animationDelay: `${i * 0.3}s` }}
      />
    ))}
  </svg>
);

const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card/10 backdrop-blur-md rounded-2xl border border-primary-foreground/20 px-5 py-3 text-primary-foreground"
  >
    <div className="text-lg font-bold text-teal">{value}</div>
    <div className="text-xs opacity-70">{label}</div>
  </motion.div>
);

const Hero = () => (
  <section id="accueil" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_hsl(164_100%_42%_/_0.15),_transparent_60%)]" />

    <div className="container-max relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow text-teal mb-4 block">
          Agence Digitale IA · Madagascar
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground tracking-heading leading-tight mb-6">
          Donnez à votre business une présence digitale qui porte loin
        </h1>
        <p className="text-lg text-primary-foreground/65 mb-8 max-w-lg">
          Sites web professionnels, chatbots IA, automatisation marketing — livrés en 7 jours depuis Antananarivo.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href="#contact" className="btn-pill bg-primary-foreground text-primary font-bold hover:opacity-90">
            Démarrer mon projet
          </a>
          <a href="#services" className="btn-pill border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Voir nos réalisations
          </a>
        </div>
        <div className="flex flex-wrap gap-3">
          <StatCard value="50+" label="Clients" delay={0.8} />
          <StatCard value="7 jours" label="Livraison" delay={1} />
          <StatCard value="#1" label="Madagascar" delay={1.2} />
        </div>
      </motion.div>

      {/* Right — Wind illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block animate-float"
      >
        <WindIllustration />
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
      <ChevronDown className="text-primary-foreground/60" size={28} />
    </div>
  </section>
);

export default Hero;
