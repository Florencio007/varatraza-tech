import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AnimatedTitleText = () => {
  const [index, setIndex] = useState(0); 
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let direction = 1;
    let i = 0;
    let timeout: NodeJS.Timeout;
    
    const tick = () => {
      if (i < 13) {
        i++;
        setIndex(i);
        timeout = setTimeout(tick, Math.random() * 50 + 100); 
      }
    };
    
    timeout = setTimeout(tick, 500);
    const blink = setInterval(() => setShowCursor(v => !v), 530);
    return () => {
      clearTimeout(timeout);
      clearInterval(blink);
    };
  }, []);

  const line1 = "VARATRAZA".slice(0, Math.min(index, 9));
  const line2 = index > 9 ? "TECH".slice(0, index - 9) : "";

  return (
    <span className="flex flex-col items-center justify-center font-sans leading-none select-none mb-2 min-h-[140px]">
      <span className="font-bold tracking-tight text-white uppercase text-[clamp(48px,8vw,86px)] relative">
        {line1}
        {index <= 9 && <span className={`absolute right-[-14px] top-0 bottom-[10%] w-[4px] bg-white transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />}
      </span>
      <span className="font-light tracking-[0.4em] text-[#0B5FFF] uppercase text-[clamp(24px,4.5vw,46px)] mt-2 relative min-h-[1.1em]">
        {line2}
        {index > 9 && <span className={`absolute right-[-6px] top-0 bottom-[10%] w-[3px] bg-[#0B5FFF] transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />}
      </span>
    </span>
  );
};

/* ──────────────────────────────────────────────
   CANVAS — Réseau de nœuds IA (60 FPS)
────────────────────────────────────────────── */
const BLUE = "#0B5FFF";
const TEAL = "#00D4AA";
const NODE_COUNT = 55;
const MAX_DIST = 140;
const PARTICLE_SPD = 1.2;

interface NodeObj {
  x: number; y: number;
  vx: number; vy: number;
  r: number; baseR: number;
  color: string;
  phase: number; freq: number;
}
interface ParticleObj {
  a: NodeObj; b: NodeObj;
  t: number; color: string;
}

function makeNode(W: number, H: number, init: boolean): NodeObj {
  return {
    x: Math.random() * W,
    y: init ? Math.random() * H : (Math.random() > 0.5 ? -20 : H + 20),
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: 2.5 + Math.random() * 2.5,
    baseR: 2.5 + Math.random() * 2.5,
    color: Math.random() > 0.5 ? BLUE : TEAL,
    phase: Math.random() * Math.PI * 2,
    freq: 0.015 + Math.random() * 0.02,
  };
}

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let nodes: NodeObj[] = [];
    let particles: ParticleObj[] = [];
    let frame = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodes = Array.from({ length: NODE_COUNT }, () =>
        makeNode(canvas.width, canvas.height, true)
      );
      particles = [];
    };

    const drawGrid = () => {
      const { width: W, height: H } = canvas;
      const gap = 60;
      ctx.strokeStyle = "rgba(0,212,170,0.04)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += gap) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gap) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
    };

    const updateNode = (n: NodeObj) => {
      const { x: mx, y: my } = mouseRef.current;
      const dx = n.x - mx, dy = n.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 90 && dist > 0) {
        const force = ((90 - dist) / 90) * 1.4;
        n.x += (dx / dist) * force;
        n.y += (dy / dist) * force;
      }
      n.x += n.vx;
      n.y += n.vy;
      n.r = n.baseR + Math.sin(frame * n.freq + n.phase) * 1.2;
      const W = canvas.width, H = canvas.height;
      if (n.x < -20) n.x = W + 20;
      if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20;
      if (n.y > H + 20) n.y = -20;
    };

    const drawNode = (n: NodeObj) => {
      const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3.5);
      g.addColorStop(0, n.color + "cc");
      g.addColorStop(1, n.color + "00");
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.fill();
    };

    const loop = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      nodes.forEach(updateNode);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.45;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(11,95,255,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            if (frame % 90 === 0 && Math.random() < 0.08) {
              particles.push({
                a, b, t: 0,
                color: Math.random() > 0.5 ? TEAL : BLUE,
              });
            }
          }
        }
      }

      particles = particles.filter((p) => {
        p.t += PARTICLE_SPD / Math.sqrt((p.b.x - p.a.x) ** 2 + (p.b.y - p.a.y) ** 2);
        const px = p.a.x + (p.b.x - p.a.x) * p.t;
        const py = p.a.y + (p.b.y - p.a.y) * p.t;
        const pg = ctx.createRadialGradient(px, py, 0, px, py, 5);
        pg.addColorStop(0, p.color + "ff");
        pg.addColorStop(1, p.color + "00");
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
        return p.t < 1;
      });

      nodes.forEach(drawNode);
      rafRef.current = requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -999, y: -999 }; };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}

/* ──────────────────────────────────────────────
   STAT CARD
────────────────────────────────────────────── */
const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center px-6 sm:px-8"
  >
    <span className="text-[32px] font-extrabold text-teal leading-none mb-1">{value}</span>
    <span className="font-mono text-[9px] uppercase tracking-[.16em] text-white/35">{label}</span>
  </motion.div>
);

/* ──────────────────────────────────────────────
   HERO
────────────────────────────────────────────── */
const Hero = () => (
  <section
    id="accueil"
    className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A1628]"
    style={{ padding: "100px 24px 80px" }}
  >
    {/* Canvas network */}
    <NetworkCanvas />

    {/* Floating orbs */}
    <div className="absolute top-[-160px] left-[-120px] w-[520px] h-[520px] rounded-full pointer-events-none z-[1]"
      style={{ background: "radial-gradient(circle at 40% 40%, rgba(11,95,255,.18), transparent 70%)", animation: "orbFloat 9s ease-in-out infinite alternate" }} />
    <div className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none z-[1]"
      style={{ background: "radial-gradient(circle at 60% 60%, rgba(0,212,170,.13), transparent 70%)", animation: "orbFloat 12s ease-in-out infinite alternate" }} />

    {/* Content */}
    <div className="relative z-10 text-center max-w-[860px] w-full mx-auto flex flex-col items-center">



      {/* H1 */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="text-[clamp(32px,5.5vw,68px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white mb-6"
      >
        <AnimatedTitleText />
        <br />
        <span className="text-[clamp(24px,3.5vw,44px)] block mt-4 font-bold text-white/95">
          Comme le vent du nord, nous portons<br />votre entreprise vers de nouveaux horizons digitaux
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-[clamp(15px,2vw,20px)] text-white/55 leading-[1.65] max-w-[560px] mx-auto mb-12"
      >
        Stratégie digitale, création &amp; performance — propulsées par l'IA pour transformer votre présence en ligne.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex flex-wrap gap-4 justify-center mb-20"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-[50px] font-bold text-sm text-white transition-all duration-300"
          style={{
            background: "#0B5FFF",
            boxShadow: "0 4px 24px rgba(11,95,255,.35)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(11,95,255,.55)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(11,95,255,.35)";
          }}
        >
          Découvrir nos solutions
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-[50px] font-bold text-sm text-white/75 transition-all duration-300"
          style={{
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.12)",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.1)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.06)";
            (e.currentTarget as HTMLElement).style.color = "";
          }}
        >
          Voir nos réalisations &nbsp;→
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="w-full max-w-[620px] mx-auto border-t border-white/[0.06] pt-10 grid grid-cols-3"
      >
        <StatCard value="50+" label="Projets livrés" delay={0.8} />
        <div className="border-l border-white/[0.07]">
          <StatCard value="7j" label="Délai moyen" delay={0.95} />
        </div>
        <div className="border-l border-white/[0.07]">
          <StatCard value="#1" label="Tech Agency · Mada" delay={1.1} />
        </div>
      </motion.div>
    </div>

  </section>
);

export default Hero;
