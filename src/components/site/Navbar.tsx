import { useEffect, useState } from "react";
import logo from "@/assets/logo-secondary.png";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#coverage", label: "Coverage" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="OTC Logistics & Cleaning Services" className="h-10 w-auto md:h-12" />
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              } hover:text-brand-orange ${active === l.href.slice(1) ? "text-brand-orange" : ""}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-105"
          >
            Get a Quote
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-md p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md animate-fade-in">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-elegant"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
