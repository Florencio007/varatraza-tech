import { motion } from "framer-motion";
import { Globe, Bot, Cog, Mail, PenTool, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de sites web",
    desc: "Sites vitrine multilingues, e-commerce, portfolios livrés en 7 jours.",
    color: "bg-primary/10 text-primary",
    question: "Je voudrais en savoir plus sur vos offres de création de sites web multilingues. Quel pack me conseilleriez-vous ?"
  },
  {
    icon: Bot,
    title: "Chatbot IA",
    desc: "Assistant intelligent 24h/24 formé sur vos données, multilingue.",
    color: "bg-teal/10 text-teal",
    question: "Comment fonctionne l'intégration d'un Chatbot IA sur mon site existant ? Est-ce compliqué à mettre en place ?"
  },
  {
    icon: Cog,
    title: "Automatisation RPA",
    desc: "Devis, factures, relances automatisées avec n8n. Économisez 10h/semaine.",
    color: "bg-primary/10 text-primary",
    question: "Pouvez-vous m'expliquer comment l'automatisation RPA peut concrètement m'aider à économiser 10h par semaine ?"
  },
  {
    icon: Mail,
    title: "Marketing automatisé",
    desc: "Séquences email, CRM, campagnes automatiques avec Brevo.",
    color: "bg-teal/10 text-teal",
    question: "Comment les séquences d'emails automatisées et le CRM peuvent-ils améliorer mon marketing et mes ventes ?"
  },
  {
    icon: PenTool,
    title: "Contenu IA",
    desc: "4 posts réseaux sociaux + 1 article de blog généré chaque semaine par IA.",
    color: "bg-primary/10 text-primary",
    question: "Quel type de contenu l'IA peut-elle générer pour mes réseaux sociaux et mon blog ? Est-ce que ça paraît naturel ?"
  },
  {
    icon: BarChart3,
    title: "Analytics & rapports",
    desc: "Tableaux de bord et rapports automatisés pour piloter votre activité.",
    color: "bg-teal/10 text-teal",
    question: "Quels types de rapports et tableaux de bord proposez-vous pour piloter mon activité au quotidien ?"
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
    {/* Subtle background decoration */}
    <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal/5 rounded-full blur-[120px]" />
    </div>

    <div className="container-max relative z-10">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3 block"
        >
          Nos Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-5xl font-extrabold tracking-heading text-foreground"
        >
          Tout ce qu'il faut pour <span className="gradient-text">dominer le digital</span>
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative"
          >
            <div className="card-base h-full flex flex-col items-start bg-white hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Hover background effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-[10]" />

              <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${s.color}`}>
                <s.icon size={28} />
              </div>
              <h3 className="relative z-10 text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="relative z-10 text-gray-text leading-relaxed text-sm mb-6 flex-grow">{s.desc}</p>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('varatraza:open-chat', {
                    detail: { message: s.question }
                  }));
                }}
                className="relative z-10 mt-auto flex items-center text-primary font-bold text-sm tracking-wide group-hover:gap-2 transition-all duration-300"
              >
                <span>En savoir plus</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
