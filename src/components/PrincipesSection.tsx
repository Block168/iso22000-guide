import { CheckCircle2 } from "lucide-react";

const principes = [
  {
    numero: "01",
    titre: "Communication interactive",
    description:
      "La communication le long de la chaîne alimentaire est essentielle. Elle doit être interactive entre toutes les parties prenantes : fournisseurs, clients, autorités réglementaires et autres organismes.",
  },
  {
    numero: "02",
    titre: "Management du système",
    description:
      "L'organisme doit établir, mettre en œuvre, maintenir et améliorer un système de management de la sécurité des denrées alimentaires documenté, incluant les politiques, objectifs et procédures.",
  },
  {
    numero: "03",
    titre: "Programmes préalables (PRP)",
    description:
      "Les PRP sont les conditions et activités de base nécessaires pour maintenir un environnement hygiénique. Ils comprennent le nettoyage, la lutte contre les nuisibles, la maintenance et l'hygiène du personnel.",
  },
  {
    numero: "04",
    titre: "Principes HACCP",
    description:
      "L'analyse des dangers et la maîtrise des points critiques (HACCP) permettent d'identifier, évaluer et maîtriser les dangers significatifs pour la sécurité des denrées alimentaires à chaque étape.",
  },
  {
    numero: "05",
    titre: "Approche par les risques",
    description:
      "L'ISO 22000:2018 exige une réflexion fondée sur les risques pour planifier et mettre en œuvre le SMSDA, en identifiant les risques et opportunités qui peuvent influencer les résultats attendus.",
  },
  {
    numero: "06",
    titre: "Amélioration continue",
    description:
      "L'organisme doit continuellement améliorer la pertinence, l'adéquation et l'efficacité du SMSDA par le biais de la communication, de la revue de direction et de l'audit interne.",
  },
];

const PrincipesSection = () => {
  return (
    <section id="principes" className="py-20 px-4 section-alt">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Les fondamentaux
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Les Principes Clés
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            L'ISO 22000 repose sur plusieurs éléments clés reconnus internationalement
            pour assurer la sécurité alimentaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {principes.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border card-elevated flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center">
                  <span className="font-display font-bold text-secondary text-lg">{p.numero}</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  {p.titre}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipesSection;
