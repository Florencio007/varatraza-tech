import { motion } from "framer-motion";
import { Globe, Bot, Cog, Mail, PenTool, BarChart3 } from "lucide-react";

const services = [
  { icon: Globe, title: "Création de Sites Web", desc: "Sites vitrine bilingues, e-commerce, portfolios livrés en 7 jours.", color: "bg-primary/10 text-primary" },
  { icon: Bot, title: "Chatbot IA", desc: "Assistant intelligent 24h/24 formé sur vos données, répond en FR et EN.", color: "bg-teal/10 text-teal" },
  { icon: Cog, title: "Automatisation RPA", desc: "Devis, factures, relances automatisées avec n8n. Économisez 10h/semaine.", color: "bg-primary/10 text-primary" },
  { icon: Mail, title: "Marketing Automatisé", desc: "Séquences email, CRM, campagnes automatiques avec Brevo.", color: "bg-teal/10 text-teal" },
  { icon: PenTool, title: "Contenu IA", desc: "4 posts réseaux sociaux + 1 article de blog généré chaque semaine par IA.", color: "bg-primary/10 text-primary" },
  { icon: BarChart3, title: "Analytics & Rapports", desc: "Tableaux de bord et rapports automatisés pour piloter votre activité.", color: "bg-teal/10 text-teal" },
];

const Services = () => (
  <section id="services" className="section-padding bg-card">
    <div className="container-max">
      <div className="text-center mb-16">
        <span className="eyebrow mb-3 block">Nos Services</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-heading text-foreground">
          Tout ce qu'il faut pour dominer le digital
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-base card-hover group cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
              <s.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-gray-text text-sm mb-4">{s.desc}</p>
            <span className="text-primary text-sm font-semibold group-hover:underline">En savoir plus →</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
