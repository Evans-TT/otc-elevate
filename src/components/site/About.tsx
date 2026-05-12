import office from "@/assets/otc-office.png";
import { Reveal } from "./Reveal";
import { Award, Clock, HandCoins, HeartHandshake } from "lucide-react";

const values = [
  { icon: HeartHandshake, t: "Customer First", d: "Friendly service that puts your needs at the centre." },
  { icon: Clock, t: "Punctuality", d: "On time, every time — schedules we actually keep." },
  { icon: HandCoins, t: "Affordability", d: "Transparent pricing without compromise on quality." },
  { icon: Award, t: "Professionalism", d: "Trained, uniformed teams ready to deliver." },
];

export function About() {
  return (
    <section id="about" className="relative bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
            <img
              src={office}
              alt="OTC Logistics office reception"
              className="rounded-3xl shadow-elegant"
              loading="lazy"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">About OTC</span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              A trusted partner for <span className="text-gradient-brand">logistics, cleaning & moving</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              OTC Logistics & Cleaning Services is a Johannesburg-based company dedicated to providing reliable
              logistics, professional cleaning, and stress-free moving services for homes and businesses. We pride
              ourselves on professionalism, punctuality, affordability, and excellent customer service.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              We service Johannesburg, Pretoria, Gauteng, and accommodate long-distance requests across South Africa
              subject to quotation approval.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={120 * i}>
                <div className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <v.icon size={20} />
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{v.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
