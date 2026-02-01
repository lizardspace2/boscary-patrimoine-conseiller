import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title text-primary-foreground">Nous contacter</h2>
        <div className="section-title-underline" />

        <div className="mt-12 space-y-4">
          <a
            href="tel:0683039438"
            className="flex items-center justify-center gap-3 text-primary-foreground hover:text-accent transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>06 83 03 94 38</span>
          </a>
          <a
            href="mailto:boscarypatrimoine@outlook.fr"
            className="flex items-center justify-center gap-3 text-primary-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>boscarypatrimoine@outlook.fr</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
