import HeroSection from "@/components/home/HeroSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import ResultsSection from "@/components/home/ResultsSection";
import SecuritySection from "@/components/home/SecuritySection";
import ClientsSection from "@/components/home/ClientsSection";
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
      <ValuePropositionSection />
      <ResultsSection />
      <SecuritySection />
      <ClientsSection />
      <ContactSection />
    </article>
  );
};

export default Home;
