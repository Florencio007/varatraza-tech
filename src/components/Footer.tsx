const FooterLogo = () => (
  <svg width="160" height="28" viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0B5FFF" />
        <stop offset="100%" stopColor="#00D4AA" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="30" r="22" fill="url(#footerLogoGrad)" />
    <path d="M14 36 L24 18 L34 36" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="58" y="40" fontFamily="DM Sans" fontWeight="800" fontSize="28" letterSpacing="-0.03em" fill="white">
      <tspan>VARATRAZA</tspan>
      <tspan fill="#0B5FFF">TECH</tspan>
    </text>
  </svg>
);

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
    links: ["Accueil", "Services", "Tarifs", "Contact", "Blog"],
  },
];

const Footer = () => (
  <footer className="bg-navy section-padding pb-8">
    <div className="container-max">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div className="lg:col-span-2">
          <FooterLogo />
          <p className="text-primary-foreground/50 text-sm mt-4 max-w-xs">
            Le vent digital de Madagascar. Agence spécialisée en sites web, IA et automatisation.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="text-primary-foreground font-bold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/50 text-sm hover:text-teal transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
        <span>© 2024 Varatraza Tech. Tous droits réservés.</span>
        <span>Fait avec ❤️ à Antananarivo</span>
      </div>
    </div>
  </footer>
);

export default Footer;
