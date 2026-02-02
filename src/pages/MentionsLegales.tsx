import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
    return (
        <div className="min-h-screen bg-navy text-primary-foreground font-sans selection:bg-gold selection:text-navy">
            <Header />
            <main className="container mx-auto px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-heading text-gold mb-12 text-center">Mentions Légales</h1>

                <div className="space-y-12 max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">1. Éditeur du site</h2>
                        <p>
                            Le site <strong>Boscary Patrimoine Conseiller</strong> est édité par :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Raison sociale :</strong> Boscary Patrimoine Conseiller</li>
                            <li><strong>Forme juridique :</strong> [Forme Juridique, ex: SAS, SARL]</li>
                            <li><strong>Siège social :</strong> [Adresse complète]</li>
                            <li><strong>E-mail :</strong> [Adresse email de contact]</li>
                            <li><strong>Téléphone :</strong> [Numéro de téléphone]</li>
                            <li><strong>SIRET :</strong> [Numéro SIRET]</li>
                            <li><strong>RCS :</strong> [Ville d'immatriculation]</li>
                            <li><strong>Numéro de TVA intracommunautaire :</strong> [Numéro TVA]</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">2. Statut réglementé</h2>
                        <p>
                            Boscary Patrimoine Conseiller est immatriculé à l’ORIAS sous le numéro [Numéro ORIAS] (consultable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-white transition-colors">www.orias.fr</a>) en qualité de :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Conseiller en Investissements Financiers (CIF), membre de l'association agréée par l'AMF : [Nom de l'association, ex: ANACOFI-CIF].</li>
                            <li>Courtier en Assurance (COA).</li>
                            <li>Courtier en Opérations de Banque et en Services de Paiement (COBSP).</li>
                            <li>Titulaire de la carte professionnelle "Transactions sur immeubles et fonds de commerce" n° [Numéro carte T] délivrée par la CCI de [Ville CCI].</li>
                        </ul>
                        <p className="mt-2 text-sm italic">
                            Assurance Responsabilité Civile Professionnelle et Garantie Financière souscrites auprès de : [Nom de l'assureur] – [Numéro de police].
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">3. Hébergement</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Hébergeur :</strong> [Nom de l'hébergeur]</li>
                            <li><strong>Adresse :</strong> [Adresse de l'hébergeur]</li>
                            <li><strong>Site web :</strong> [Site web de l'hébergeur]</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">4. Propriété intellectuelle</h2>
                        <p>
                            L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu’il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">5. Responsabilité</h2>
                        <p>
                            Les informations communiquées sur le site sont fournies à titre indicatif, elles sont non contractuelles et ne sauraient engager la responsabilité de Boscary Patrimoine Conseiller. Elles peuvent être modifiées ou mises à jour sans préavis. Boscary Patrimoine Conseiller décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations diffusées sur son site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading text-gold mb-4">6. Médiation</h2>
                        <p>
                            En cas de litige, vous pouvez contacter le médiateur de l'AMF pour les activités de CIF ou le médiateur de l'assurance pour les activités d'assurance :
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Médiateur de l'AMF :</strong> Autorité des marchés financiers, 17 place de la Bourse, 75082 Paris Cedex 02. Site internet : <a href="https://www.amf-france.org/fr/le-mediateur" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-white transition-colors">www.amf-france.org</a>.</li>
                            <li><strong>Médiateur de l'Assurance :</strong> La Médiation de l'Assurance, TSA 50110, 75441 Paris Cedex 09. Site internet : <a href="https://www.mediation-assurance.org" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-white transition-colors">www.mediation-assurance.org</a>.</li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MentionsLegales;
