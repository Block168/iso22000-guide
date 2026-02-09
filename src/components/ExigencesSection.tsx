import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const clauses = [
  {
    id: "4",
    titre: "Clause 4 — Contexte de l'organisme",
    contenu: [
      "Comprendre l'organisme et son contexte (enjeux internes et externes)",
      "Comprendre les besoins et attentes des parties intéressées",
      "Déterminer le domaine d'application du SMSDA",
      "Établir, mettre en œuvre, maintenir et améliorer le SMSDA",
    ],
  },
  {
    id: "5",
    titre: "Clause 5 — Leadership",
    contenu: [
      "Engagement de la direction et leadership",
      "Établissement de la politique de sécurité des denrées alimentaires",
      "Attribution des rôles, responsabilités et autorités",
      "Nomination du responsable de l'équipe chargée de la sécurité des denrées alimentaires",
    ],
  },
  {
    id: "6",
    titre: "Clause 6 — Planification",
    contenu: [
      "Actions face aux risques et opportunités",
      "Objectifs du SMSDA et planification pour les atteindre",
      "Planification des modifications du système de management",
    ],
  },
  {
    id: "7",
    titre: "Clause 7 — Support",
    contenu: [
      "Ressources (humaines, infrastructures, environnement de travail)",
      "Compétences et formation du personnel",
      "Sensibilisation à la sécurité alimentaire",
      "Communication interne et externe",
      "Informations documentées (création, mise à jour, maîtrise)",
    ],
  },
  {
    id: "8",
    titre: "Clause 8 — Réalisation des activités opérationnelles",
    contenu: [
      "Planification et maîtrise opérationnelles",
      "Programmes préalables (PRP)",
      "Système de traçabilité",
      "Préparation et réponse aux situations d'urgence",
      "Analyse des dangers (identification, évaluation, mesures de maîtrise)",
      "Plan HACCP (CCP et PRPO)",
      "Mise à jour des informations PRP et plan de maîtrise des dangers",
      "Maîtrise de la surveillance et du mesurage",
      "Vérification des PRP et du plan de maîtrise des dangers",
      "Maîtrise des non-conformités (corrections, actions correctives, retrait/rappel)",
    ],
  },
  {
    id: "9",
    titre: "Clause 9 — Évaluation des performances",
    contenu: [
      "Surveillance, mesurage, analyse et évaluation",
      "Audit interne",
      "Revue de direction",
    ],
  },
  {
    id: "10",
    titre: "Clause 10 — Amélioration",
    contenu: [
      "Non-conformités et actions correctives",
      "Amélioration continue du SMSDA",
      "Mise à jour du système de management",
    ],
  },
];

const ExigencesSection = () => {
  return (
    <section id="exigences" className="py-20 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Structure de la norme
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Les Exigences (Clauses 4 à 10)
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            L'ISO 22000:2018 est structurée en 10 clauses. Les clauses 4 à 10 contiennent
            les exigences à satisfaire pour la certification.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {clauses.map((clause) => (
            <AccordionItem
              key={clause.id}
              value={clause.id}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:no-underline py-5">
                {clause.titre}
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <ul className="space-y-2">
                  {clause.contenu.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ExigencesSection;
