import { TrendingUp, Users, ShieldCheck, Award, Globe2, RefreshCw } from "lucide-react";

const avantages = [
  {
    icon: ShieldCheck,
    titre: "Sécurité renforcée",
    description: "Réduction des risques de contamination alimentaire et protection de la santé des consommateurs.",
  },
  {
    icon: Globe2,
    titre: "Reconnaissance internationale",
    description: "Certification reconnue mondialement facilitant l'accès aux marchés internationaux et les échanges commerciaux.",
  },
  {
    icon: TrendingUp,
    titre: "Compétitivité accrue",
    description: "Avantage concurrentiel significatif, confiance renforcée des clients et meilleure image de marque.",
  },
  {
    icon: Users,
    titre: "Confiance des parties prenantes",
    description: "Démonstration de votre engagement envers la sécurité alimentaire auprès des clients, fournisseurs et autorités.",
  },
  {
    icon: Award,
    titre: "Conformité réglementaire",
    description: "Facilite le respect des exigences légales et réglementaires en matière de sécurité alimentaire.",
  },
  {
    icon: RefreshCw,
    titre: "Amélioration continue",
    description: "Optimisation des processus, réduction des coûts liés aux non-conformités et meilleure gestion des ressources.",
  },
];

const AvantagesSection = () => {
  return (
    <section id="avantages" className="py-20 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Pourquoi se certifier ?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Les Avantages de l'ISO 22000
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            La certification ISO 22000 offre de nombreux bénéfices pour votre organisme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avantages.map((item, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl border border-border p-6 card-elevated text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.titre}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvantagesSection;
