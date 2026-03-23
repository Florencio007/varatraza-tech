import { motion } from "framer-motion";
import { Zap, DollarSign, Brain, MessageCircle } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Livraison en 7–14 jours", desc: "Pas des mois d'attente." },
  { icon: DollarSign, title: "Prix adaptés au marché malgache", desc: "Qualité internationale, tarifs locaux." },
  { icon: Brain, title: "Expertise IA unique", desc: "Maîtrise de n8n + Claude API + GPT-4o." },
  { icon: MessageCircle, title: "Support WhatsApp inclus", desc: "Disponible en français et malgache." },
];

const LaptopMockup = () => (
  <div className="relative">
    <div className="bg-navy rounded-2xl p-3 shadow-2xl">
      <div className="flex gap-1.5 mb-3">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-teal/40" />
        <div className="w-3 h-3 rounded-full bg-primary/40" />
      </div>
      <div className="bg-off-white rounded-lg aspect-[16/10] flex items-center justify-center overflow-hidden">
        <div className="w-full h-full p-4 space-y-3">
          <div className="h-8 bg-primary/20 rounded-lg w-3/4" />
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-5/6" />
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="h-16 bg-primary/10 rounded-lg" />
            <div className="h-16 bg-teal/10 rounded-lg" />
            <div className="h-16 bg-primary/10 rounded-lg" />
          </div>
          <div className="h-3 bg-muted rounded w-2/3 mt-2" />
          <div className="h-3 bg-muted rounded w-1/2" />
        </div>
      </div>
    </div>
    {/* Floating badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-xl border border-border px-4 py-3"
    >
      <div className="text-sm font-bold text-foreground">⭐ 4.9/5</div>
      <div className="text-xs text-gray-text">50+ clients satisfaits</div>
    </motion.div>
  </div>
);

const WhyUs = () => (
  <section id="pourquoi" className="section-padding bg-off-white">
    <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <LaptopMockup />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow mb-3 block">Pourquoi Varatraza Tech</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-heading text-foreground mb-8">
          La seule agence malgache qui maîtrise l'IA et l'automatisation
        </h2>
        <div className="space-y-6">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
                <p className="text-gray-text text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyUs;
