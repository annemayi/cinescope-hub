import heroBanner from "@/assets/hero-banner.jpg";

export function HeroSection() {
  const scrollToGallery = () => {
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroBanner}
        alt="Cinematic theater with red curtains and golden light"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={800}
      />
      <div className="hero-gradient absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display text-6xl leading-tight tracking-wider text-foreground sm:text-8xl md:text-9xl">
          CINE<span className="text-gradient-red">VERSE</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Your gateway to the world of cinema. Discover, review, and celebrate the films that move us.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={scrollToGallery}
            className="glow-red rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Explore Movies
          </button>
          <button
            onClick={() => document.querySelector("#reviews")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-lg border border-gold bg-transparent px-8 py-3 font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-gold-foreground"
          >
            Top Rated Films
          </button>
        </div>
      </div>
    </header>
  );
}
