const etapes = [
  {
    numero: 1,
    titre: "Engagement de la direction",
    description:
      "La direction doit s'engager formellement dans la démarche, définir la politique de sécurité alimentaire, allouer les ressources nécessaires et nommer le responsable de l'équipe SMSDA.",
  },
  {
    numero: 2,
    titre: "Diagnostic initial",
    description:
      "Réaliser un état des lieux complet de vos pratiques actuelles par rapport aux exigences de l'ISO 22000. Identifier les écarts et définir un plan d'action pour les combler.",
  },
  {
    numero: 3,
    titre: "Formation de l'équipe",
    description:
      "Former une équipe pluridisciplinaire chargée de la sécurité des denrées alimentaires. Assurer la formation aux principes HACCP, PRP et aux exigences de la norme.",
  },
  {
    numero: 4,
    titre: "Mise en place des PRP",
    description:
      "Établir et documenter les programmes préalables : hygiène des locaux, gestion de l'eau, lutte contre les nuisibles, nettoyage-désinfection, gestion des déchets, hygiène du personnel.",
  },
  {
    numero: 5,
    titre: "Analyse des dangers et plan HACCP",
    description:
      "Identifier tous les dangers potentiels (biologiques, chimiques, physiques), évaluer leur gravité et probabilité, déterminer les CCP et PRPO, et établir les limites critiques.",
  },
  {
    numero: 6,
    titre: "Documentation du système",
    description:
      "Rédiger les procédures, instructions de travail, enregistrements et la documentation requise. S'assurer de la traçabilité complète et de la maîtrise des documents.",
  },
  {
    numero: 7,
    titre: "Mise en œuvre et vérification",
    description:
      "Déployer le système, effectuer des audits internes, vérifier l'efficacité des mesures de maîtrise, réaliser la revue de direction et corriger les non-conformités.",
  },
  {
    numero: 8,
    titre: "Audit de certification",
    description:
      "Faire appel à un organisme de certification accrédité. L'audit se déroule en deux phases : revue documentaire (phase 1) puis audit sur site (phase 2). Le certificat est valable 3 ans avec des audits de surveillance annuels.",
  },
];

const EtapesSection = () => {
  return (
    <section id="etapes" className="py-20 px-4 section-alt">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Guide pratique
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comment Obtenir la Certification ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Suivez ces 8 étapes pour mettre en place votre SMSDA et obtenir la certification ISO 22000.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-8">
            {etapes.map((etape, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } md:gap-10`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background -translate-x-1/2 mt-6 z-10" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card rounded-xl border border-border p-6 card-elevated">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm">
                          {etape.numero}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {etape.titre}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{etape.description}</p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtapesSection;
