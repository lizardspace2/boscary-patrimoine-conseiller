import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LeCabinet = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary">
          <div className="container-narrow">
            <h1 className="section-title text-foreground">Le cabinet</h1>
            <div className="section-title-underline" />

            <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
              <p>
                Le cabinet Boscary est spécialisé dans la gestion de patrimoine, les placements financiers, les assurances de personnes, l'épargne salariale et retraite, ainsi que la prévoyance et la complémentaire santé.
              </p>

              <div>
                <p className="mb-4">Nous accompagnons :</p>
                <ul className="space-y-4 ml-4">
                  <li>
                    <span className="text-foreground font-medium">- Les particuliers</span> dans l'étude, la gestion, la conservation, l'optimisation et la transmission de leur patrimoine, grâce à des conseils personnalisés et un accompagnement sur le long terme.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">- Les dirigeants d'entreprise et professions libérales</span> dans la mise en place de leur PEE (Plan d'Épargne Entreprise), PERECO (Plan d'Épargne Retraite Collectif), ainsi que de leurs contrats de participation et d'intéressement pour eux-mêmes et leurs salariés.
                  </li>
                </ul>
              </div>

              <p>
                Nous conseillons tous nos clients, quel que soit leur statut, pour préserver leur niveau de vie à la retraite. Nous réalisons également bilans retraite, reconstitutions de carrière et liquidations de droits afin d'assurer une transition sereine vers la retraite.
              </p>

              <p>
                Pour nous, votre bien-être et votre sécurité financière sont des priorités. C'est pourquoi nous mettons notre expertise en prévoyance et complémentaire santé au service de votre protection et de votre sérénité.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeCabinet;
