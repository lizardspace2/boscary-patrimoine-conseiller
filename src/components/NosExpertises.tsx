const expertises = [
  {
    number: "1",
    title: "Gestion de patrimoine",
    description:
      "Après analyse de votre situation, nous formulons des recommandations adaptées pour atteindre vos objectifs. Nous vous accompagnons ensuite dans la durée pour mettre en œuvre les stratégies retenues.",
  },
  {
    number: "2",
    title: "Épargne retraite",
    description:
      "Le cabinet Boscary vous accompagne dans la gestion de votre patrimoine et de vos revenus pour conserver votre niveau de vie à la retraite.",
  },
  {
    number: "3",
    title: "Prévoyance",
    description:
      "Le cabinet Boscary identifie pour vous le meilleur rapport cotisations/remboursements pour les chefs d'entreprise, leurs collaborateurs et les seniors.",
  },
];

const NosExpertises = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-primary-foreground">Nos expertises</h2>
        <div className="section-title-underline" />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {expertises.map((expertise) => (
            <div key={expertise.number} className="text-center">
              <h3 className="font-heading text-lg text-primary-foreground mb-4">
                <span className="text-accent">{expertise.number}.</span>{" "}
                {expertise.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {expertise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosExpertises;
