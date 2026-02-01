import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const NousContacter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-5xl">
            <h1 className="section-title text-foreground mb-12">Nous contacter</h1>
            <div className="section-title-underline" />

            <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl text-foreground mb-6">
                    Boscary Patrimoine
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Nous sommes à votre écoute pour vous accompagner dans vos projets patrimoniaux. N'hésitez pas à nous contacter pour une étude personnalisée.
                  </p>
                </div>

                <div className="space-y-6">
                  <a
                    href="tel:0683039438"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors text-lg p-4 rounded-lg bg-background shadow-sm border border-border/50"
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <span>06 83 03 94 38</span>
                  </a>
                  <a
                    href="mailto:boscarypatrimoine@outlook.fr"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors text-lg p-4 rounded-lg bg-background shadow-sm border border-border/50"
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <span className="break-all">boscarypatrimoine@outlook.fr</span>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-background p-8 rounded-xl shadow-sm border border-border/50">
                <h3 className="font-heading text-xl text-foreground mb-6">
                  Envoyez-nous un message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NousContacter;
