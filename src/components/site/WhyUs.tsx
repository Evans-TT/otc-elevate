import { Reveal } from "./Reveal";
import { CalendarCheck, HandCoins, Hand, ShieldCheck, Sparkles, ThumbsUp, Timer, Truck } from "lucide-react";

const features = [
  { icon: HandCoins, t: "Affordable Pricing", d: "Honest, competitive rates." },
  { icon: Sparkles, t: "Professional Team", d: "Trained, uniformed and friendly." },
  { icon: Timer, t: "Fast Turnaround", d: "Quick quotes, quick action." },
  { icon: Hand, t: "Safe Handling", d: "Care for every box and surface." },
  { icon: ShieldCheck, t: "Reliable Service", d: "On-time, every time." },
  { icon: CalendarCheck, t: "Flexible Scheduling", d: "Weekends and after-hours." },
  { icon: ThumbsUp, t: "Trusted by Clients", d: "Hundreds of repeat customers." },
  { icon: Truck, t: "Long Distance Support", d: "Cross-province on quote." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Why OTC</span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Built on <span className="text-gradient-brand">trust & care</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-brand-green hover:shadow-elegant">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white transition-transform group-hover:scale-110">
                  <f.icon size={24} />
                </div>
                <h3 className="mt-4 text-base font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
