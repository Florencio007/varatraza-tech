import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Clients" },
  { value: 7, suffix: "", label: "Jours livraison moyenne" },
  { value: 95, suffix: "%", label: "Taux de satisfaction" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => (
  <section className="section-padding bg-primary">
    <div className="container-max">
      <div className="grid sm:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-5xl lg:text-6xl font-extrabold text-teal mb-2">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-primary-foreground/70 font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
