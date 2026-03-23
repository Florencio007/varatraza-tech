import { motion } from "framer-motion";
import { Globe, Bot, BarChart3, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "Hôtel Colbert — Site Bilingue",
    category: "Site Web · Tourisme",
    description:
      "Site vitrine bilingue FR/EN avec système de réservation intégré, galerie photo immersive et optimisation SEO. Livré en 10 jours.",
    tags: ["React", "SEO", "Bilingue", "Réservation"],
    gradient: "from-primary to-primary/70",
  },
  {
    icon: Bot,
    title: "Madagascar Travel — Chatbot IA",
    category: "Chatbot IA · Agence de Voyage",
    description:
      "Assistant IA disponible 24h/24 formé sur le catalogue de circuits. Répond en français et anglais, génère des devis automatiques.",
    tags: ["GPT-4o", "n8n", "WhatsApp", "Auto-devis"],
    gradient: "from-teal to-teal/70",
  },
  {
    icon: BarChart3,
    title: "Lodge Vakona — Automatisation CRM",
    category: "RPA · Hôtellerie",
    description:
      "Automatisation complète : emails de bienvenue, relances post-séjour, rapports d'occupation hebdomadaires. 8h/semaine économisées.",
    tags: ["Brevo", "n8n", "Analytics", "Email"],
    gradient: "from-navy to-navy/70",
  },
];

const Projects = () => (
  <section id="projets" className="section-padding bg-background">
    <div className="container-max">
      <div className="text-center mb-16">
        <span className="eyebrow mb-3 block">Nos Réalisations</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-heading text-foreground">
          À quoi ressemble notre travail
        </h2>
        <p className="mt-4 text-gray-text max-w-2xl mx-auto">
          Découvrez quelques projets livrés pour nos clients à Madagascar et à l'international.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="card-base card-hover flex flex-col"
          >
            {/* Header visual */}
            <div
              className={`bg-gradient-to-br ${project.gradient} rounded-xl h-40 flex items-center justify-center mb-6`}
            >
              <project.icon size={48} className="text-primary-foreground" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
              {project.category}
            </span>
            <h3 className="font-bold text-lg text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-gray-text leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-secondary text-foreground px-2.5 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Voir le détail <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
