import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qui peut se certifier ISO 22000 ?",
    answer:
      "Tout organisme impliqué dans la chaîne alimentaire peut se certifier, quelle que soit sa taille ou son secteur : producteurs agricoles, fabricants d'aliments, transporteurs, distributeurs, restaurateurs, fournisseurs d'emballages, de produits de nettoyage, d'équipements, etc.",
  },
  {
    question: "Combien de temps faut-il pour obtenir la certification ?",
    answer:
      "Le délai varie selon la taille et la complexité de l'organisme, ainsi que son niveau de maturité existant. En moyenne, il faut compter entre 6 mois et 18 mois pour mettre en place le système et obtenir la certification.",
  },
  {
    question: "Quel est le coût de la certification ?",
    answer:
      "Le coût dépend de plusieurs facteurs : taille de l'organisme, nombre de sites, complexité des activités, et organisme certificateur choisi. Il faut prévoir les coûts de mise en conformité (formation, conseil, documentation) et les frais d'audit de certification.",
  },
  {
    question: "Quelle est la durée de validité du certificat ?",
    answer:
      "Le certificat ISO 22000 est valable 3 ans. Des audits de surveillance sont réalisés chaque année pour vérifier le maintien de la conformité. À l'issue des 3 ans, un audit de renouvellement complet est nécessaire.",
  },
  {
    question: "Quelle est la différence entre ISO 22000 et HACCP ?",
    answer:
      "L'HACCP est une méthode d'analyse des dangers qui se concentre sur les points critiques de maîtrise. L'ISO 22000 est un système de management complet qui intègre les principes HACCP, les programmes préalables (PRP), la communication interactive et le management du système. L'ISO 22000 va donc plus loin que l'HACCP seul.",
  },
  {
    question: "L'ISO 22000 est-elle compatible avec d'autres normes ?",
    answer:
      "Oui, l'ISO 22000:2018 utilise la structure de haut niveau (HLS) commune aux normes ISO. Elle est facilement intégrable avec l'ISO 9001 (qualité), l'ISO 14001 (environnement) et l'ISO 45001 (santé et sécurité au travail) dans un système de management intégré (SMI).",
  },
  {
    question: "Quels sont les organismes de certification accrédités ?",
    answer:
      "Les organismes de certification doivent être accrédités selon l'ISO/IEC 17021 et l'ISO/TS 22003. En France, le COFRAC (Comité français d'accréditation) accrédite les organismes certificateurs. Parmi les plus connus : Bureau Veritas, SGS, TÜV, AFNOR Certification, DNV.",
  },
  {
    question: "Que se passe-t-il en cas de non-conformité lors de l'audit ?",
    answer:
      "Les non-conformités sont classées en mineures et majeures. Pour les non-conformités mineures, l'organisme dispose d'un délai pour mettre en place des actions correctives. Pour les non-conformités majeures, la certification peut être suspendue jusqu'à leur résolution. Un audit de suivi peut être requis.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 section-alt">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Questions fréquentes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            FAQ
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Les réponses aux questions les plus courantes sur l'ISO 22000.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="font-display text-base font-semibold text-foreground hover:no-underline py-5 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
