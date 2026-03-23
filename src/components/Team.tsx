import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    initials: "RN",
    name: "Rado Nirina",
    role: "Fondateur & Développeur Full-Stack",
    bio: "Expert en React, Node.js et automatisation IA. Plus de 8 ans d'expérience dans le développement web.",
    color: "bg-primary",
  },
  {
    initials: "TH",
    name: "Tahiry Haja",
    role: "Spécialiste IA & Automatisation",
    bio: "Maîtrise de n8n, Claude API et GPT-4o. Conçoit des chatbots et workflows intelligents sur mesure.",
    color: "bg-teal",
  },
  {
    initials: "SF",
    name: "Sandra Fara",
    role: "Designer UI/UX & Marketing",
    bio: "Créatrice de designs modernes et de stratégies marketing qui convertissent. Spécialiste Figma & Brevo.",
    color: "bg-accent",
  },
];

const Team = () => (
  <section id="equipe" className="section-padding bg-card">
    <div className="container-max">
      <div className="text-center mb-16">
        <span className="eyebrow mb-3 block">Notre Équipe</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-heading text-foreground">
          Les talents derrière Varatraza Tech
        </h2>
        <p className="mt-4 text-gray-text max-w-2xl mx-auto">
          Une équipe passionnée basée à Antananarivo, combinant expertise technique et créativité.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-base card-hover text-center"
          >
            <div
              className={`w-20 h-20 rounded-full ${member.color} text-primary-foreground flex items-center justify-center font-bold text-2xl mx-auto mb-5`}
            >
              {member.initials}
            </div>
            <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
            <p className="text-sm text-primary font-semibold mt-1 mb-3">{member.role}</p>
            <p className="text-sm text-gray-text leading-relaxed mb-5">{member.bio}</p>
            <div className="flex justify-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-gray-text hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-gray-text hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
