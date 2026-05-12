import { useState } from "react";
import logistics from "@/assets/hero-logistics.png";
import cleaning from "@/assets/service-cleaning.png";
import moving from "@/assets/service-moving.png";
import office from "@/assets/otc-office.png";
import heroBg from "@/assets/hero-bg.jpg";
import { Reveal } from "./Reveal";
import { X } from "lucide-react";

const images = [
  { src: logistics, alt: "OTC logistics truck and air freight", span: "md:col-span-2 md:row-span-2" },
  { src: cleaning, alt: "OTC apartment cleaning service" },
  { src: moving, alt: "OTC home moving services team" },
  { src: office, alt: "OTC office reception" },
  { src: heroBg, alt: "Fleet of OTC delivery trucks" , span: "md:col-span-2"},
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="bg-gradient-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Gallery</span>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Our work, <span className="text-gradient-brand">in the wild</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 80} className={`${img.span ?? ""} h-full`}>
              <button
                onClick={() => setOpen(img.src)}
                className="group relative h-full w-full overflow-hidden rounded-2xl shadow-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button className="absolute right-6 top-6 text-white" aria-label="Close">
            <X size={32} />
          </button>
          <img src={open} alt="Gallery preview" className="max-h-[90vh] max-w-full rounded-2xl shadow-elegant" />
        </div>
      )}
    </section>
  );
}
