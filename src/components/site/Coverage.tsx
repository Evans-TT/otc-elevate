import { Reveal } from "./Reveal";
import { MapPin } from "lucide-react";

const areas = ["Johannesburg", "Pretoria", "Midrand", "Sandton", "Centurion", "Soweto", "East Rand", "West Rand"];

export function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden bg-brand-navy py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-0 opacity-20 [background-image:radial-gradient(oklch(0.75_0.18_142/0.6)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">Coverage</span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Servicing <span className="text-gradient-brand">Gauteng</span> & beyond
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              We operate within a 200km radius of Johannesburg and accommodate long-distance requests including
              Limpopo, Bloemfontein and surrounding areas — subject to quotation.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((a, i) => (
              <Reveal key={a} delay={i * 60}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-md transition-colors hover:border-brand-green hover:bg-brand-green/10">
                  <MapPin size={14} className="text-brand-green" />
                  {a}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150}>
          <div className="relative aspect-square w-full max-w-lg justify-self-center">
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-3xl animate-pulse" />
            <div className="relative h-full w-full rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
              <div className="relative h-full w-full">
                {/* Animated map dots */}
                {[
                  { x: "48%", y: "55%", l: "Johannesburg", big: true },
                  { x: "52%", y: "38%", l: "Pretoria" },
                  { x: "50%", y: "47%", l: "Midrand" },
                  { x: "55%", y: "50%", l: "Sandton" },
                  { x: "53%", y: "44%", l: "Centurion" },
                  { x: "42%", y: "62%", l: "Soweto" },
                  { x: "62%", y: "58%", l: "East Rand" },
                  { x: "35%", y: "55%", l: "West Rand" },
                  { x: "30%", y: "78%", l: "Bloemfontein" },
                  { x: "70%", y: "20%", l: "Limpopo" },
                ].map((p) => (
                  <div key={p.l} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: p.x, top: p.y }}>
                    <div className={`relative ${p.big ? "h-4 w-4" : "h-3 w-3"} rounded-full bg-brand-green animate-pulse-ring`} />
                    <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-white/80">
                      {p.l}
                    </div>
                  </div>
                ))}
                {/* Connecting lines (decorative) */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="48" y1="55" x2="52" y2="38" stroke="oklch(0.75 0.18 142 / 0.5)" strokeDasharray="2 2" />
                  <line x1="48" y1="55" x2="35" y2="55" stroke="oklch(0.75 0.18 142 / 0.5)" strokeDasharray="2 2" />
                  <line x1="48" y1="55" x2="62" y2="58" stroke="oklch(0.75 0.18 142 / 0.5)" strokeDasharray="2 2" />
                  <line x1="48" y1="55" x2="30" y2="78" stroke="oklch(0.72 0.19 50 / 0.4)" strokeDasharray="3 3" />
                  <line x1="48" y1="55" x2="70" y2="20" stroke="oklch(0.72 0.19 50 / 0.4)" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
