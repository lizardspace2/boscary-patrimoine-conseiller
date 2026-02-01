import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NotreMétier from "@/components/NotreMétier";
import NosExpertises from "@/components/NosExpertises";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NotreMétier />
        <NosExpertises />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
