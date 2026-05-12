import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, ShieldCheck, Sparkles, Truck, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{val.toLocaleString()}{suffix}</span>;
}

const badges = [
  { icon: ShieldCheck, label: "Reliable" },
  { icon: Sparkles, label: "Professional" },
  { icon: Truck, label: "Affordable" },
  { icon: Zap, label: "Fast Response" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, transform: "scale(1.05)" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,transparent,oklch(0.18_0.04_260/0.6))]" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-4 pb-16 pt-32 md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
            Johannesburg · Pretoria · Gauteng
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Reliable Logistics, <span className="text-gradient-brand">Cleaning</span> & Moving Services
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Professional service across Johannesburg and beyond — trusted by homes and businesses for fast,
            affordable, and stress-free deliveries, moves, and spotless cleans.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-105"
            >
              Get a Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Our Services
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md"
              >
                <b.icon size={14} className="text-brand-green" />
                {b.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={520} className="w-full">
          <div className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:gap-8">
            {[
              { n: 1200, s: "+", l: "Jobs Completed" },
              { n: 850, s: "+", l: "Happy Clients" },
              { n: 25, s: "+", l: "Areas Covered" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-bold text-white md:text-4xl">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs text-white/70 md:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
