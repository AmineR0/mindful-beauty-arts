import hero from "@/assets/bbc/salon.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img src={hero} alt="Institut Beauty by Camille" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/30 to-foreground/70" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-12 md:pb-28">
        <div className="max-w-3xl">
          <p className="tracking-luxe text-[11px] uppercase text-background/80 mb-6">— Institut Beauté & Bien-être</p>
          <h1 className="font-display text-5xl leading-[0.95] text-background md:text-7xl lg:text-8xl text-balance">
            Révélez votre <span className="font-script">beauté</span><br />
            naturelle.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg font-light text-background/90 leading-relaxed">
            Chez Beauty by Camille, chaque prestation est pensée sur mesure pour sublimer votre beauté extérieure tout en nourrissant votre bien-être intérieur.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="tracking-luxe text-[11px] uppercase bg-background text-foreground px-8 py-4 hover:bg-rose-soft transition-colors">
              Prendre rendez-vous
            </a>
            <a href="#prestations" className="tracking-luxe text-[11px] uppercase text-background border-b border-background/60 pb-1 hover:border-background transition-colors">
              Découvrir nos soins
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10 hidden md:flex flex-col items-end gap-3 text-background/80">
        <span className="tracking-luxe text-[10px] uppercase">Scroll</span>
        <span className="vline h-16" />
      </div>
    </section>
  );
}
