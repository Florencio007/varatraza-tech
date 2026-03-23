import { motion } from "framer-motion";
import { MessageSquare, FileText, Code2, GraduationCap } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation gratuite", desc: "Discussion de vos besoins par WhatsApp ou en personne." },
  { icon: FileText, title: "Devis & validation", desc: "Offre claire, sans surprise, validée ensemble." },
  { icon: Code2, title: "Développement", desc: "Votre site et outils IA livrés en 7 à 14 jours." },
  { icon: GraduationCap, title: "Livraison & formation", desc: "Mise en ligne + formation de votre équipe." },
];

const Process = () => (
  <section className="section-padding bg-off-white">
    <div className="container-max">
      <div className="text-center mb-16">
        <span className="eyebrow mb-3 block">Notre Processus</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-heading text-foreground">
          4 étapes vers votre succès digital
        </h2>
      </div>
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-border" />

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
              <s.icon size={24} />
            </div>
            <div className="font-mono text-xs text-primary mb-2">0{i + 1}</div>
            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-gray-text">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
