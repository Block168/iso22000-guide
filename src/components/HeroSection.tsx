import { Shield, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container relative z-10 text-center px-4 py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 mb-8">
          <Shield className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-primary-foreground/90">
            Norme Internationale de Sécurité Alimentaire
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
          Guide Complet
          <br />
          <span className="text-gradient">ISO 22000</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tout ce que vous devez savoir sur le système de management de la sécurité
          des denrées alimentaires — de la compréhension à la certification.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 font-semibold"
            onClick={scrollToContent}
          >
            Commencer la lecture
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => document.getElementById("etapes")?.scrollIntoView({ behavior: "smooth" })}
          >
            Comment se certifier ?
          </Button>
        </div>
        <button
          onClick={scrollToContent}
          className="mt-16 inline-flex animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Défiler vers le bas"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
