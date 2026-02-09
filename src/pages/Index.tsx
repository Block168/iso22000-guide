import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import PrincipesSection from "@/components/PrincipesSection";
import ExigencesSection from "@/components/ExigencesSection";
import EtapesSection from "@/components/EtapesSection";
import AvantagesSection from "@/components/AvantagesSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <PrincipesSection />
      <ExigencesSection />
      <EtapesSection />
      <AvantagesSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
