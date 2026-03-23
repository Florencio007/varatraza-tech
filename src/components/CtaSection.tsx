import { motion } from "framer-motion";
import { Phone, Mail, Globe } from "lucide-react";

const CtaSection = () => (
  <section id="contact" className="section-padding bg-navy relative overflow-hidden">
    {/* Radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(220_100%_52%_/_0.25),_transparent_70%)]" />

    <div className="container-max relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-heading text-primary-foreground mb-4">
          Prêt à porter votre business plus loin ?
        </h2>
        <p className="text-primary-foreground/60 text-lg mb-8 max-w-xl mx-auto">
          Contactez-nous pour une consultation gratuite. Réponse garantie en moins de 24h.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#contact" className="btn-pill bg-primary text-primary-foreground font-bold hover:opacity-90">
            Démarrer mon projet
          </a>
          <a href="#services" className="btn-pill border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Voir nos services
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-teal" />
            <span>+261 XX XXX XXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-teal" />
            <span>contact@varatraza.mg</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-teal" />
            <span>www.varatraza.mg</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
