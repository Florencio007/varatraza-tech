import { motion } from "framer-motion";
import { Phone, Mail, Globe, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CtaSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Veuillez remplir tous les champs obligatoires", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les 24h." });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow mb-4 block text-teal">Contactez-nous</span>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-8">
               Prêt à insuffler du <span className="gradient-text">vent nouveau</span> à votre business ?
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
              Discutez de votre projet avec nos experts. Consultation gratuite, sans engagement, réponse sous 24h.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "WhatsApp / Appel", value: "+261 XX XXX XXXX", color: "text-teal" },
                { icon: Mail, label: "Email Direct", value: "contact@varatraza.mg", color: "text-primary" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Icon size={24} className={color} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{label}</div>
                    <div className="text-xl font-bold text-white">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Disponibilité immédiate</span>
               </div>
               <p className="text-slate-400 text-sm">Nous acceptons actuellement 2 nouveaux projets pour le mois prochain. Réservez votre créneau dès maintenant.</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-teal rounded-[32px] blur opacity-20" />
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-[#0A1120] border border-white/10 rounded-[30px] p-8 lg:p-12 space-y-6 shadow-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nom</label>
                  <Input
                    placeholder="Jean Dupont"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <Input
                    type="email"
                    placeholder="jean@exemple.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Téléphone</label>
                <Input
                  placeholder="+261 34 XX XXX XX"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:ring-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Projet</label>
                <Textarea
                  placeholder="Dites-nous en plus sur vos besoins..."
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="bg-white/5 border-white/10 text-white rounded-xl focus:ring-primary/50 resize-none pt-4"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full btn-pill gradient-bg text-white font-black text-sm uppercase tracking-widest py-8 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform"
              >
                {loading ? "Transmission..." : (
                  <>
                    <Send size={18} />
                    Envoyer ma demande
                  </>
                )}
              </Button>

              <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest">
                En envoyant ce formulaire, vous acceptez d'être recontacté sous 24h.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
