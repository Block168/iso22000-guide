import { BookOpen, Globe, Utensils } from "lucide-react";

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-20 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Comprendre la norme
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Qu'est-ce que l'ISO 22000 ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            L'ISO 22000 est une norme internationale qui définit les exigences d'un système de management
            de la sécurité des denrées alimentaires (SMSDA).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: BookOpen,
              title: "Norme Reconnue",
              desc: "Publiée par l'Organisation internationale de normalisation (ISO), elle est reconnue et appliquée dans plus de 160 pays à travers le monde.",
            },
            {
              icon: Globe,
              title: "Chaîne Alimentaire Complète",
              desc: "Elle couvre tous les acteurs de la chaîne alimentaire : producteurs, transformateurs, transporteurs, distributeurs, restaurateurs et fournisseurs d'emballages.",
            },
            {
              icon: Utensils,
              title: "Sécurité Garantie",
              desc: "Elle garantit que les aliments sont sûrs pour la consommation humaine en intégrant les principes HACCP et les programmes préalables (PRP).",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 card-elevated border border-border"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl border border-border p-8 md:p-10">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Historique et Évolution
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              La première version de l'ISO 22000 a été publiée en <strong className="text-foreground">2005</strong>.
              Elle a été révisée en <strong className="text-foreground">2018</strong> pour s'aligner sur la
              structure de haut niveau (HLS) commune à toutes les normes de systèmes de management ISO
              (comme l'ISO 9001 et l'ISO 14001).
            </p>
            <p>
              La version actuelle, <strong className="text-foreground">ISO 22000:2018</strong>, met davantage
              l'accent sur le contexte de l'organisme, le leadership, l'approche par les risques et
              opportunités, et l'amélioration continue du SMSDA.
            </p>
            <p>
              Elle intègre le cycle <strong className="text-foreground">PDCA (Plan-Do-Check-Act)</strong> à deux
              niveaux : au niveau du système de management global et au niveau opérationnel (planification et
              maîtrise opérationnelles).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
