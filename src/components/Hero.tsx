import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      <div className="relative z-10 text-center text-primary-foreground px-6">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-wide">
          Boscary Patrimoine
        </h1>
        <p className="font-heading text-sm md:text-base uppercase tracking-[0.3em] text-primary-foreground/90">
          Conseil en investissement et gestion de votre épargne
        </p>
      </div>
    </section>
  );
};

export default Hero;
