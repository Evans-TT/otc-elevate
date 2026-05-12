import logo from "@/assets/logo-secondary.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#coverage", label: "Coverage" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="rounded-3xl bg-gradient-brand p-8 text-center shadow-glow md:p-12">
          <h3 className="text-3xl font-bold md:text-4xl">Let OTC handle the heavy lifting</h3>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            One call. One trusted team. Logistics, cleaning and moving — done right.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-navy shadow-elegant transition-transform hover:scale-105"
          >
            Get a Free Quote
          </a>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="OTC Logistics" className="h-12 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-md text-sm text-white/70">
              OTC Logistics & Cleaning Services — Johannesburg-based logistics, cleaning and moving experts
              servicing Gauteng and beyond.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-brand-green hover:text-brand-navy">
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-brand-green">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Service Areas</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Johannesburg · Pretoria</li>
              <li>Sandton · Midrand · Centurion</li>
              <li>Soweto · East & West Rand</li>
              <li>Long-distance on quote</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} OTC Logistics & Cleaning Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
