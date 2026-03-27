import Logo from "./Logo";

const footerCols = [
  {
    title: "Services",
    links: ["Création de Sites Web", "Chatbot IA", "Automatisation RPA", "Marketing Automatisé", "Contenu IA", "Analytics"],
  },
  {
    title: "Secteurs",
    links: ["Hôtels & Tourisme", "Restaurants", "Agences voyage", "Commerce", "Professions libérales"],
  },
  {
    title: "Liens utiles",
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "Services", href: "#services" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "Contact", href: "#contact" },
      { label: "Équipe", href: "#equipe" }
    ],
  },
];

const Footer = () => (
  <footer className="bg-[#020817] pt-24 pb-12 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_50%_100%,_hsl(221_83%_53%_/_0.1),_transparent_70%)] pointer-events-none" />

    <div className="container-max relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 mb-20">
        <div className="lg:col-span-5">
          <Logo width={124} height={28} />
          <p className="text-slate-400 text-lg mt-8 max-w-sm leading-relaxed">
            Propulser les entreprises malgaches dans l'ère de l'intelligence artificielle avec des solutions digitales d'exception.
          </p>
          <div className="mt-10 flex gap-4">
            {/* Social icons placeholder */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all cursor-pointer">
                <span className="text-xs font-bold font-mono">X</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={typeof link === 'string' ? link : link.label}>
                    <a 
                      href={typeof link === 'string' ? "#contact" : link.href} 
                      className="text-slate-500 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      {typeof link === 'string' ? link : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-xs font-medium">
          © 2024 Varatraza Tech — <span className="text-primary italic">Antananarivo, Madagascar</span>
        </div>
        <div className="flex gap-8 text-slate-500 text-xs font-medium">
          <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
