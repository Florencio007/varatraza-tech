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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(220_100%_52%_/_0.25),_transparent_70%)]" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-heading text-primary-foreground mb-4">
            Prêt à porter votre business plus loin ?
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
            Contactez-nous pour une consultation gratuite. Réponse garantie en moins de 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-primary-foreground/80 text-sm font-medium">Nom complet *</label>
                <Input
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-primary-foreground/80 text-sm font-medium">Email *</label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-primary-foreground/80 text-sm font-medium">Téléphone</label>
              <Input
                placeholder="+261 XX XXX XXXX"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
              />
            </div>
            <div className="space-y-2">
              <label className="text-primary-foreground/80 text-sm font-medium">Message *</label>
              <Textarea
                placeholder="Décrivez votre projet..."
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full btn-pill bg-primary text-primary-foreground font-bold text-base py-6 hover:opacity-90"
            >
              {loading ? "Envoi en cours..." : (
                <>
                  <Send size={18} />
                  Envoyer le message
                </>
              )}
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:pt-4"
          >
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Téléphone / WhatsApp", value: "+261 XX XXX XXXX" },
                { icon: Mail, label: "Email", value: "contact@varatraza.mg" },
                { icon: Globe, label: "Site web", value: "www.varatraza.mg" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/15 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-sm">{label}</p>
                    <p className="text-primary-foreground font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6">
              <p className="text-teal font-mono text-xs uppercase tracking-wider mb-2">Horaires</p>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Lundi – Vendredi : 8h00 – 18h00<br />
                Samedi : 9h00 – 13h00<br />
                Réponse WhatsApp 7j/7
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
