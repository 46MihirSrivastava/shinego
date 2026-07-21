import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Pricing from "@/components/ui/Pricing";
import WhyChoose from "@/components/ui/WhyChoose";
import CTA from "@/components/ui/CTA";
import Footer from "@/components/ui/Footer";
import Stats from "@/components/ui/Stats";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MouseGlow from "@/components/ui/MouseGlow";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Loader from "@/components/ui/Loader";
import Testimonials from "@/components/ui/Testimonials";
import Gallery from "@/components/ui/Gallery";
import BeforeAfter from "@/components/ui/BeforeAfter";

export default function Home() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <MouseGlow />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <BeforeAfter />
      <Pricing />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}