const NotreMétier = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container-narrow">
        <h2 className="section-title text-foreground">Notre métier</h2>
        <div className="section-title-underline" />

        <div className="mt-16 space-y-12">
          <div className="text-center">
            <h3 className="section-subtitle text-foreground mb-6">
              Conseiller et guider
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Le métier de conseil en gestion de patrimoine consiste à accompagner les particuliers et les entreprises qui souhaitent mieux organiser leur patrimoine ou investir.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Le cabinet Boscary intervient pour fournir un éclairage clair et personnalisé afin de vous aider à prendre des décisions alignées avec vos objectifs.
            </p>
          </div>

          <div className="text-center">
            <h3 className="section-subtitle text-foreground mb-6">
              Analyser et recommander
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nous commençons par une étude patrimoniale globale, en examinant les documents essentiels : état civil, contrat de mariage, donations, biens détenus, placements, prêts, revenus et charges.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Nous prenons le temps d'échanger avec vous pour comprendre vos attentes et vos motivations : préparer votre retraite, financer les études de vos enfants, protéger votre conjoint, réduire votre fiscalité, transmettre votre patrimoine…
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Après cette analyse, Boscary vous propose des recommandations indépendantes pour atteindre vos objectifs. Et si vous le souhaitez, nous pouvons vous accompagner dans la durée pour mettre en œuvre les stratégies adaptées.
            </p>
          </div>

          <div className="text-center">
            <h3 className="section-subtitle text-foreground mb-6">
              Être au service de nos clients
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              La relation avec nos clients se construit sur la confiance, la confidentialité et l'écoute.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Nous nous engageons à être disponibles et attentifs, et à entretenir une relation durable pour vous accompagner tout au long de vos projets patrimoniaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotreMétier;
