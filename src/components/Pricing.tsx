import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "300 000 – 500 000 Ar",
    featured: false,
    features: [
      "Site vitrine professionnel",
      "Design moderne & responsive",
      "Hébergement 1 an inclus",
      "Formulaire de contact",
      "Compatible mobile & tablette",
    ],
  },
  {
    name: "BUSINESS",
    price: "600 000 – 900 000 Ar",
    featured: true,
    badge: "Recommandé",
    features: [
      "Tout le pack Starter",
      "Optimisation SEO complète",
      "Intégration Google Maps",
      "Section blog intégrée",
      "Formation client incluse",
    ],
  },
  {
    name: "PREMIUM IA",
    price: "1 000 000 – 1 500 000 Ar",
    featured: false,
    features: [
      "Tout le pack Business",
      "Chatbot IA personnalisé",
      "Automatisation marketing",
      "Contenu IA hebdomadaire",
      "Rapports mensuels détaillés",
    ],
  },
];

const addons = [
  { name: "Maintenance", price: "75 000 Ar/mois" },
  { name: "Contenu IA", price: "200 000 Ar/mois" },
  { name: "Full Service", price: "400 000 Ar/mois" },
];

const Pricing = () => (
  <section id="tarifs" className="section-padding bg-card">
    <div className="container-max">
      <div className="text-center mb-16">
        <span className="eyebrow mb-3 block">Tarifs</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-heading text-foreground">
          Des offres claires, sans surprise
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`card-base relative ${
              plan.featured ? "border-primary shadow-xl ring-2 ring-primary/20" : "card-hover"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-[50px]">
                {plan.badge}
              </div>
            )}
            <h3 className="font-mono text-sm font-bold text-primary mb-2">{plan.name}</h3>
            <div className="text-2xl font-extrabold text-foreground mb-6">{plan.price}</div>
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-text">
                  <Check size={16} className="text-teal shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`btn-pill block text-center mt-8 ${
                plan.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              Choisir ce plan
            </a>
          </motion.div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-foreground">Options mensuelles</h3>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {addons.map((a) => (
          <div key={a.name} className="card-base text-center">
            <div className="font-bold text-foreground mb-1">{a.name}</div>
            <div className="text-sm text-primary font-semibold">{a.price}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
