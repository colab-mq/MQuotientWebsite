import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ClientsSection from "@/components/home/ClientsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";

const Home = () => {
  // Update page title for SEO
  useEffect(() => {
    document.title = "mquotient - AI Powered Digital Transformation & Automation Solutions";
  }, []);
  
  return (
    <article>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <ClientsSection />
      <ContactSection />
    </article>
  );
};

export default Home;
