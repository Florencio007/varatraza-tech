import { motion } from "framer-motion";
import { Zap, DollarSign, Brain, MessageCircle, Bot, Cog } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Vitesse varatraza", desc: "Votre site livré en 7 à 14 jours. Pas des mois d'attente, juste des résultats concrets." },
  { icon: DollarSign, title: "Standard mondial, ADN local", desc: "Le meilleur de la tech internationale, calibré pour la réalité et les budgets de Madagascar." },
  { icon: Brain, title: "Architectes d'IA", desc: "On ne code pas juste des sites, on conçoit des cerveaux digitaux qui automatisent vos ventes." },
  { icon: MessageCircle, title: "Zéro friction, zéro distance", desc: "Support WhatsApp humain et ultra-réactif. Votre succès est notre seule priorité." },
];

const GrowthEngineVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto flex items-center justify-center p-8">
      {/* Background glow representing the "Engine Core" */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-teal/10 blur-[80px] rounded-full mix-blend-multiply" />

      {/* Central Hub representing ROI */}
      <div className="relative z-20 w-36 h-36 rounded-full bg-white shadow-[0_0_50px_rgba(11,95,255,0.15)] border-[6px] border-slate-50 flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-default">
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="text-4xl font-black text-primary mb-1 tracking-tighter">ROI</div>
        <div className="text-[9px] uppercase font-bold text-slate-400 tracking-[0.2em] px-2 text-center leading-tight">Moteur de<br />Croissance</div>
      </div>

      {/* Orbiting Ring 1 (Inner AI Tools) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-primary/20 flex items-center justify-center z-10"
      >
        <div className="absolute -top-7 w-14 h-14 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-primary group pointer-events-auto">
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <Bot size={22} className="group-hover:scale-110 transition-transform" />
          </motion.div>
          {/* Label with counter-rotation */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-16 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Chatbot IA
          </motion.div>
        </div>
        <div className="absolute -bottom-7 w-14 h-14 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-teal group pointer-events-auto">
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <Cog size={22} className="group-hover:scale-110 transition-transform" />
          </motion.div>
          {/* Label with counter-rotation */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-16 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            n8n Automation
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting Ring 2 (Outer Business Outcomes) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[420px] h-[420px] rounded-full border border-slate-200/50 flex items-center justify-center pointer-events-none"
      >
        {/* Ventes & Conversions */}
        <div className="absolute -left-7 w-14 h-14 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-[#ff5f56] group pointer-events-auto">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
            <DollarSign size={22} className="group-hover:scale-110 transition-transform" />
          </motion.div>
          {/* Label with counter-rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute left-16 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-white/10"
          >
            Ventes & Conversions
          </motion.div>
        </div>

        {/* Rapidité d'exécution */}
        <div className="absolute -right-7 w-14 h-14 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center text-[#ffbd2e] group pointer-events-auto">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
            <Zap size={22} className="group-hover:scale-110 transition-transform" />
          </motion.div>
          {/* Label with counter-rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute right-16 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-white/10"
          >
            Vitesse d'exécution
          </motion.div>
        </div>
      </motion.div>

      {/* Energy Particles flowing to the center */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.circle cx="50%" cy="10%" r="2.5" fill="#0B5FFF" animate={{ cy: ["10%", "50%"], opacity: [0, 0.8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }} />
        <motion.circle cx="50%" cy="90%" r="2.5" fill="#00D4AA" animate={{ cy: ["90%", "50%"], opacity: [0, 0.8, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.5, ease: "easeIn" }} />
        <motion.circle cx="10%" cy="50%" r="2.5" fill="#ff5f56" animate={{ cx: ["10%", "50%"], opacity: [0, 0.8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeIn" }} />
        <motion.circle cx="90%" cy="50%" r="2.5" fill="#ffbd2e" animate={{ cx: ["90%", "50%"], opacity: [0, 0.8, 0] }} transition={{ duration: 1.6, repeat: Infinity, delay: 0.2, ease: "easeIn" }} />
      </svg>
    </div>
  );
};

const WhyUs = () => (
  <section id="pourquoi" className="section-padding bg-white relative overflow-hidden">
    <div className="container-max grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <GrowthEngineVisual />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="eyebrow mb-4 block">L'avantage Varatraza</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-heading text-foreground mb-10 leading-[1.1]">
          Plus qu'une agence, votre <span className="gradient-text">moteur de croissance</span>
        </h2>

        <div className="grid gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <r.icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{r.title}</h3>
                <p className="text-gray-text text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyUs;
