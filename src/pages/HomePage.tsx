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
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>OTC Logistics & Cleaning Services | Johannesburg</title>

        <meta
          name="description"
          content="Reliable logistics, professional cleaning and stress-free moving services across Johannesburg, Pretoria and Gauteng. Long-distance on quote."
        />

        <meta
          property="og:title"
          content="OTC Logistics & Cleaning Services"
        />

        <meta
          property="og:description"
          content="Logistics, cleaning and moving — done right. Servicing Gauteng and beyond."
        />

        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.png" />
      </Helmet>

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
    </>
  );
}