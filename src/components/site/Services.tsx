import { Reveal } from "./Reveal";
import { Boxes, Building2, Home, MapPinned, Package, PackageOpen, Sofa, Truck } from "lucide-react";

const services = [
  { icon: Truck, t: "Logistics & Delivery", d: "Same-day and scheduled delivery across Gauteng with full tracking." },
  { icon: Home, t: "Apartment Cleaning", d: "Move-in, move-out, and routine deep cleans for residential spaces." },
  { icon: Building2, t: "Commercial Cleaning", d: "Offices, retail and corporate spaces kept spotless on schedule." },
  { icon: Boxes, t: "Home Moving", d: "Stress-free home relocations with careful packing and setup." },
  { icon: Sofa, t: "Furniture Transport", d: "Safe transport of single items or full furniture sets, anywhere." },
  { icon: PackageOpen, t: "Office Relocations", d: "Minimal downtime moves for businesses of every size." },
  { icon: Package, t: "Packing Assistance", d: "Pro packing, boxes and materials supplied — handled with care." },
  { icon: MapPinned, t: "Long Distance Delivery", d: "Quoted long-haul jobs to Limpopo, Bloemfontein and beyond." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">What we do</span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Services built around <span className="text-gradient-brand">your move</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From a single delivery to a full office relocation — one trusted team, one number to call.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 4) * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant">
                <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-orange"
                >
                  Request Quote →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
