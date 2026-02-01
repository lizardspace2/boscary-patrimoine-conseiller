import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";

const NousContacter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-secondary">
          <div className="container-narrow">
            <h1 className="section-title text-foreground">Nous contacter</h1>
            <div className="section-title-underline" />

            <div className="mt-12 text-center">
              <p className="font-heading text-2xl text-foreground mb-8">
                Boscary Patrimoine
              </p>

              <div className="space-y-6">
                <a
                  href="tel:0683039438"
                  className="flex items-center justify-center gap-3 text-muted-foreground hover:text-accent transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>06 83 03 94 38</span>
                </a>
                <a
                  href="mailto:boscarypatrimoine@outlook.fr"
                  className="flex items-center justify-center gap-3 text-muted-foreground hover:text-accent transition-colors text-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>boscarypatrimoine@outlook.fr</span>
                </a>
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
