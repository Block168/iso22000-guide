import { Shield } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="hero-gradient py-12 px-4">
      <div className="container max-w-5xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-secondary" />
          <span className="font-display font-bold text-lg text-primary-foreground">
            Guide ISO 22000
          </span>
        </div>
        <p className="text-primary-foreground/70 text-sm max-w-lg mx-auto mb-6">
          Ce guide est fourni à titre informatif. Pour obtenir le texte officiel de la norme,
          veuillez vous référer à l'Organisation internationale de normalisation (ISO).
        </p>
        <p className="text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} — Guide ISO 22000. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
