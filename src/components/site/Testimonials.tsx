import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const items = [
  { n: "Thandiwe M.", r: "Homeowner, Sandton", q: "OTC moved our entire house in one day — careful, fast and friendly. Best move we've ever had." },
  { n: "Sipho N.", r: "Office Manager, Midrand", q: "We use OTC for weekly office cleaning. Always on time and our space looks brand new every Monday." },
  { n: "Lerato K.", r: "Apartment Tenant, JHB CBD", q: "Booked a deep clean before move-in — flawless results. The team was professional and easy to communicate with." },
  { n: "Pieter v.d. M.", r: "Business Owner, Pretoria", q: "Reliable logistics partner. Long-distance delivery to Limpopo handled without a hitch." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = items[i];
  return (
    <section id="testimonials" className="bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Loved by <span className="text-gradient-brand">clients</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mt-12 rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-12">
            <Quote size={48} className="mx-auto text-brand-blue/20" />
            <div className="mx-auto mt-2 flex justify-center gap-1">
              {[...Array(5)].map((_, k) => (
                <Star key={k} size={18} className="fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <p key={i} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground animate-fade-in md:text-xl">
              "{t.q}"
            </p>
            <div className="mt-6">
              <div className="font-semibold">{t.n}</div>
              <div className="text-sm text-muted-foreground">{t.r}</div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => setI((x) => (x - 1 + items.length) % items.length)}
                className="rounded-full border border-border bg-background p-2 transition-colors hover:bg-secondary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {items.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-brand" : "w-2 bg-border"}`}
                    aria-label={`Go to testimonial ${k + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setI((x) => (x + 1) % items.length)}
                className="rounded-full border border-border bg-background p-2 transition-colors hover:bg-secondary"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
