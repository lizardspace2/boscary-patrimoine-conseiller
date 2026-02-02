import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
    return (
        <div className="min-h-screen bg-navy text-primary-foreground font-sans selection:bg-gold selection:text-navy">
            <Header />
            <main className="container mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-heading text-gold mb-12 text-center">Politique de Confidentialité</h1>

                <div className="space-y-12 max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">1. Collecte des données</h2>
                        <p>
                            Nous collectons les informations que vous nous fournissez directement, notamment lorsque vous utilisez notre formulaire de contact. Les données collectées peuvent inclure :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Nom et Prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone</li>
                            <li>Toute autre information que vous choisissez de nous communiquer dans votre message.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">2. Utilisation des données</h2>
                        <p>
                            Les données collectées sont utilisées pour :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Répondre à vos demandes d'information ou de contact.</li>
                            <li>Vous fournir nos services de conseil en gestion de patrimoine.</li>
                            <li>Respecter nos obligations légales et réglementaires (notamment en matière de lutte contre le blanchiment de capitaux et le financement du terrorisme).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">3. Conservation des données</h2>
                        <p>
                            Vos données personnelles sont conservées le temps nécessaire à la réalisation de la finalité pour laquelle elles ont été collectées, ou pour satisfaire aux obligations légales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">4. Partage des données</h2>
                        <p>
                            Vos données ne sont ni vendues, ni louées à des tiers. Elles peuvent être transmises à nos partenaires (assureurs, banques, sociétés de gestion) uniquement dans le cadre strict de l'exécution de nos missions de conseil et de courtage, avec votre accord.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">5. Cookies</h2>
                        <p>
                            Ce site peut utiliser des cookies pour améliorer votre expérience de navigation et réaliser des statistiques de visites anonymes. Vous pouvez configurer votre navigateur pour refuser les cookies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">6. Vos droits</h2>
                        <p>
                            Conformément à la réglementation applicable (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.
                        </p>
                        <p className="mt-2">
                            Pour exercer ces droits, vous pouvez nous contacter à I'adresse email suivante : <strong>[Adresse email de contact]</strong> ou par courrier postal à notre siège social.
                        </p>
                        <p className="mt-2 text-sm italic">
                            Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PolitiqueConfidentialite;
