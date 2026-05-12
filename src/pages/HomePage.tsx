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

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://otclogistics.co.za"
        />

        <meta
          property="og:image"
          content="https://otclogistics.co.za/src/assets/logo-main.png"
        />

        <meta
          property="og:image:width"
          content="1200"
        />

        <meta
          property="og:image:height"
          content="630"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="OTC Logistics & Cleaning Services"
        />

        <meta
          name="twitter:description"
          content="Reliable logistics, cleaning and moving services across Johannesburg and beyond."
        />

        <meta
          name="twitter:image"
          content="https://otclogistics.co.za/src/assets/logo-main.png"
        />

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