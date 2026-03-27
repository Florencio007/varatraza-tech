import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const team = [
  {
    initials: "FR",
    image: "/Equipe/Florencio.png",
    name: "Randrianjafitahina Florencio",
    role: "CEO & Développeur Full-Stack JavaScript",
    bio: "Il transforme vos idées en produits web qui fonctionnent vraiment. Architecte de l'écosystème JavaScript de Varatraza.",
    color: "bg-primary",
    linkedin: "https://www.linkedin.com/in/florencio-randrianjafitahina/"
  },
  {
    initials: "FB",
    image: "/Equipe/Fabrice_Bosco.jpeg",
    name: "Fabrice Bosco",
    role: "Responsable croissance & relation client",
    bio: "Le lien entre vos ambitions et notre équipe. Il pilote votre croissance digitale et veille à chaque étape de votre satisfaction.",
    color: "bg-primary/80",
  },
  {
    initials: "JR",
    image: "/Equipe/Ricardo.png",
    imagePosition: "object-top",
    name: "Jaomanoro Rycardo",
    role: "Développeur no-code & IA",
    bio: "Il automatise ce qui vous fait perdre du temps. Spécialiste no-code et IA générative, il rend vos systèmes intelligents.",
    color: "bg-accent",
  },
  {
    initials: "CS",
    image: "/Equipe/Raherinantenaina Christiano Stannis.png",
    name: "Raherinantenaina Christiano Stannis",
    role: "QA testeur & data analyst",
    bio: "Rien ne lui échappe. Il teste, mesure et analyse pour garantir un produit final sans faille.",
    color: "bg-accent/80",
    linkedin: "https://www.linkedin.com/in/christiano-raherinantenaina-3342431a0/"
  },
  {
    initials: "GM",
    image: "/Equipe/Gilberto.png",
    imagePosition: "object-top",
    name: "Rabarivelo Gilberto Millan",
    role: "Développeur Full-Stack",
    bio: "Rigoureux et méthodique. Il bâtit les fondations techniques solides qui font tenir vos projets dans la durée.",
    color: "bg-accent/80",
  },
  {
    initials: "GB",
    image: "/Equipe/Gaby.png",
    name: "Bina Gaby Arson",
    role: "Consultant ERP / CRM (Odoo)",
    bio: "Il structure vos processus internes pour que votre équipe gagne en efficacité. Spécialiste Odoo & gestion unifiée.",
    color: "bg-primary/80",
    linkedin: "https://www.linkedin.com/in/gaby-arson-bina-6121a622a/"
  },
];



const Team = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="equipe" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="eyebrow mb-3 block">Notre Équipe</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-heading text-foreground">
            Les talents derrière Varatraza Tech
          </h2>
          <p className="mt-4 text-gray-text max-w-2xl mx-auto">
            Derrière chaque projet livré, il y a des esprits qui pensent, construisent et s'engagent. Ce sont eux, le vent qui pousse Varatraza tech.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 pb-8">
            {team.map((member, i) => (
              <CarouselItem key={member.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-base card-hover text-center"
                >
                  <div
                    className={`w-20 h-20 rounded-full ${member.color} text-white flex items-center justify-center font-bold text-2xl mx-auto mb-5 overflow-hidden ring-4 ring-background/10 shadow-lg`}
                  >
                    {member.image ? (
                      <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${(member as any).imagePosition || "object-center"}`} />
                    ) : (
                      member.initials
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-1 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-text leading-relaxed mb-1">{member.bio}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Team;
