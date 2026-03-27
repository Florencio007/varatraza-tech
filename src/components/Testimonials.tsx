import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "HC",
    name: "Directeur",
    company: "Hôtel Colbert · Antananarivo",
    quote: "Notre site attire maintenant des clients directs depuis l'Europe. Le chatbot répond à minuit pendant que nous dormons.",
    stars: 5,
  },
  {
    initials: "MT",
    name: "Fondateur",
    company: "Madagascar Travel Agency",
    quote: "En 10 jours nous avions un site multilingue professionnel. Le ROI a été immédiat sur les réservations directes.",
    stars: 5,
  },
  {
    initials: "VF",
    name: "Gérant",
    company: "Lodge Vakona Forest",
    quote: "L'automatisation des emails a transformé notre relation client. Nous économisons 8 heures par semaine.",
    stars: 5,
  },
];

const Testimonials = () => (
  <section className="section-padding bg-card">
    <div className="container-max">
      <div className="text-center mb-16">
        <span className="eyebrow mb-3 block">Témoignages</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-heading text-foreground">
          Ce que disent nos clients
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-base card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-gray-text">{t.company}</div>
              </div>
            </div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={14} className="fill-teal text-teal" />
              ))}
            </div>
            <p className="text-sm text-gray-text leading-relaxed">"{t.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
