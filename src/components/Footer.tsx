const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground pt-12 pb-6 border-t border-navy-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-medium mb-4 text-gold">Boscary Patrimoine</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Vous offrir un conseil sur-mesure, au service de la performance de votre patrimoine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/" className="hover:text-gold transition-colors">Accueil</a></li>
              <li><a href="/le-cabinet" className="hover:text-gold transition-colors">Le cabinet</a></li>
              <li><a href="/nous-contacter" className="hover:text-gold transition-colors">Nous contacter</a></li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Informations</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/mentions-legales" className="hover:text-gold transition-colors">Mentions légales</a></li>
              <li><a href="/politique-confidentialite" className="hover:text-gold transition-colors">Politique de confidentialité</a></li>
              <li>ORIAS: 12345678 (Exemple)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Boscary Patrimoine. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
