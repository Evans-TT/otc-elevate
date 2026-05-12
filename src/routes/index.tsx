import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Coverage } from "@/components/site/Coverage";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OTC Logistics & Cleaning Services | Johannesburg" },
      {
        name: "description",
        content:
          "Reliable logistics, professional cleaning and stress-free moving services across Johannesburg, Pretoria and Gauteng. Long-distance on quote.",
      },
      { property: "og:title", content: "OTC Logistics & Cleaning Services" },
      { property: "og:description", content: "Logistics, cleaning and moving — done right. Servicing Gauteng and beyond." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "icon", href: "/favicon.png" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Coverage />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
