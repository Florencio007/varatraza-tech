import { motion } from "framer-motion";
import { Check, Zap, RefreshCw } from "lucide-react";

const plans = [
  {
    name: "ESSENTIEL",
    subName: "Pack visibilité",
    price: "500k – 900k Ar",
    delivery: "7–10 jours",
    featured: false,
    features: [
      "Site vitrine multilingue (3–5 pages)",
      "Formulaire réservation par email",
      "Google Maps + Google Business activé",
      "Responsive mobile-first",
      "Hébergement 1 an inclus",
      "Formation 2h sur site",
    ],
    option: "+300k Ar/mois — Maintenance + contenu IA (4 posts/sem)"
  },
  {
    name: "PRO",
    subName: "Pack digital complet",
    price: "1,5M – 2,5M Ar",
    delivery: "14–21 jours",
    featured: true,
    badge: "Recommandé / Meilleur ROI",
    features: [
      "Tout le pack visibilité inclus",
      "Réservation en ligne intégrée",
      "SEO technique + blog automatisé",
      "Chatbot IA 24h/24 (Multilingue)",
      "Automatisation emails (accueil, relances)",
      "Tableau de bord rapports mensuels",
    ],
    option: "+400k Ar/mois — Full Service IA + contenu + maintenance"
  },
  {
    name: "PREMIUM",
    subName: "Pack IA sur mesure",
    price: "4M – 8M Ar",
    delivery: "4–6 semaines",
    featured: false,
    features: [
      "Tout le pack pro inclus",
      "CRM custom IA (scoring leads)",
      "Simulateur de prix dynamiques",
      "Sync OTA Booking/Airbnb (iCal/API)",
      "Intégration MVola / Orange Money",
      "App PWA mobile-first",
    ],
    option: "500k Ar/mois — Maintenance + IA + rapports + réunion"
  },
];

const griffeOptions = [
  {
    name: "Greffe Chatbot IA",
    installation: "400k – 700k Ar",
    maintenance: "+50k Ar/mois (optionnel)",
    description: "Widget IA multilingue intégré à votre site. Capture des leads et prise de RDV automatisée.",
    roi: "Disponibilité immédiate 24/7 et qualification automatique des visiteurs qualifiés."
  },
  {
    name: "Automation marketing",
    installation: "200k – 400k Ar",
    maintenance: "+150k Ar/mois (optionnel)",
    description: "Séquences email automatisées (bienvenue, relance, avis) avec CRM Brevo intégré.",
    roi: "Économise 6–8h/semaine de tâches manuelles"
  },
  {
    name: "Contenu IA (lancement)",
    installation: "150k – 250k Ar",
    description: "Création initiale de 4 posts Facebook/Instagram + 1 article blog/semaine.",
    roi: "Une présence en ligne active dès la première semaine"
  },
  {
    name: "Pack greffe complet",
    installation: "800k – 1,2M Ar",
    maintenance: "+300k Ar/mois (optionnel)",
    description: "Chatbot + automation + contenu — tout installé directement sur votre site existant.",
    roi: "L'équivalent d'un employé digital à temps plein"
  },
];

const subscriptions = [
  { name: "Maintenance", price: "75–100k Ar/mois", desc: "Mises à jour, backup, support WhatsApp" },
  { name: "Contenu IA récurrent", price: "150–250k Ar/mois", desc: "4 posts/sem + 1 article blog, rapport mensuel" },
  { name: "Chatbot hébergé", price: "50–100k Ar/mois", desc: "Hébergement continu, MAJ base de données, monitoring 24/7" },
  { name: "Full Service IA", price: "400k – 600k Ar/mois", desc: "Maintenance + Contenu + Chatbot + Email + Rapport" },
];

const Pricing = () => (
  <section id="tarifs" className="section-padding bg-slate-50 relative overflow-hidden">
    <div className="container-max relative z-10">
      <div className="text-center mb-16">
        <span className="eyebrow mb-3 block">Nos Offres</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-heading text-foreground">
          Investissez dans votre <span className="gradient-text">succès futur</span>
        </h2>
      </div>

      {/* ═══════════ SECTION 1 : Packs Création ═══════════ */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex flex-col rounded-3xl p-8 lg:p-10 transition-all duration-500 bg-white border ${plan.featured
              ? "border-primary shadow-2xl scale-105 z-10 relative"
              : "border-slate-100 hover:border-primary/30 hover:shadow-xl"
              }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black tracking-widest uppercase px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                {plan.badge}
              </div>
            )}

            <div className="mb-8">
              <div className="flex flex-col mb-1">
                <h3 className="font-bold text-primary text-xs uppercase tracking-[0.2em]">{plan.name}</h3>
                <span className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">{plan.subName}</span>
              </div>
              <div className="text-2xl lg:text-3xl font-black text-foreground mb-1">{plan.price}</div>
              <div className="text-[10px] text-slate-500 font-semibold mb-2">Livraison : {plan.delivery}</div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5 group">
                    <Check size={12} className="text-teal" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-50 mb-8">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Option disponible</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{plan.option}</p>
            </div>

            <a
              href="#contact"
              className={`btn-pill block text-center ${plan.featured
                ? "gradient-bg text-white shadow-primary/30"
                : "bg-slate-50 text-foreground hover:bg-slate-100"
                }`}
            >
              Commander maintenant
            </a>
          </motion.div>
        ))}
      </div>

      {/* ═══════════ SECTION 2 : Greffe IA ═══════════ */}
      <div className="max-w-6xl mx-auto mb-20 p-8 lg:p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Vous avez déjà un site ?</span>
            <h3 className="text-3xl font-black mb-4">Greffe IA — Ajoutez l'intelligence sans tout refaire</h3>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">Installation unique sur votre site existant. Pas besoin de recréer quoi que ce soit — on greffe nos modules IA directement.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {griffeOptions.map((opt) => (
              <div key={opt.name} className="flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                {/* Badge */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Zap size={12} className="text-primary" />
                  <span className="text-[9px] font-black text-primary uppercase tracking-widest">Installation unique</span>
                </div>

                <h4 className="font-bold text-sm mb-3">{opt.name}</h4>

                {/* Prix clarifié */}
                <div className="mb-1">
                  <div className="text-lg font-black text-primary">{opt.installation}</div>
                  <span className="text-[10px] text-slate-500 font-semibold">(coût unique)</span>
                </div>
                {opt.maintenance && (
                  <div className="text-[11px] text-slate-400 font-medium mb-3">
                    Maintenance : {opt.maintenance}
                  </div>
                )}
                {!opt.maintenance && <div className="mb-3" />}

                <p className="text-xs text-slate-300 mb-4 flex-grow">{opt.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] block text-primary font-bold uppercase tracking-widest mb-1">Valeur ajoutée</span>
                  <p className="text-[10px] text-slate-400 italic leading-snug">{opt.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ SECTION 3 : Abonnements mensuels ═══════════ */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-foreground">Abonnements mensuels</h3>
          <p className="text-sm text-gray-text mt-2">Gardez votre présence digitale à jour, 24h/24, 7j/7.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subscriptions.map((s) => (
            <div key={s.name} className="bg-white rounded-3xl border border-slate-100 p-6 text-center shadow-sm hover:shadow-md transition-all">
              {/* Badge */}
              <div className="flex items-center justify-center gap-1.5 mb-3">
                <RefreshCw size={10} className="text-teal" />
                <span className="text-[9px] font-black text-teal uppercase tracking-widest">Mensuel récurrent</span>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{s.name}</div>
              <div className="text-xl font-black text-primary mb-2">{s.price}</div>
              <p className="text-[10px] text-slate-500 leading-normal">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
