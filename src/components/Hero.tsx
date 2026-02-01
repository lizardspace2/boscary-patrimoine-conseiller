import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide drop-shadow-md">
          Boscary Patrimoine
        </h1>
        <p className="font-heading text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary-foreground/90 font-light drop-shadow-sm border-t border-b border-primary-foreground/30 py-4 inline-block">
          Conseil en investissement et gestion de votre épargne
        </p>
      </div>
    </section>
  );
};

export default Hero;
