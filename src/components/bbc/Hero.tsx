import { Instagram } from "lucide-react";
import hero from "@/assets/bbc/hero.jpg";
import { WhatsAppIcon } from "@/components/bbc/WhatsAppIcon";
import { instagramUrl, whatsappUrl } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Institut Beauty by Camille"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/52 to-primary/90" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,oklch(0.25_0.065_26/.92)_0%,oklch(0.25_0.065_26/.68)_38%,transparent_78%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-10 pt-28 sm:px-6 md:justify-end md:px-12 md:pb-24 md:pt-40">
        <div className="max-w-[21rem] -translate-y-6 sm:max-w-3xl md:translate-y-0">
          <p className="tracking-luxe text-[10px] uppercase text-background/80 mb-4 sm:text-[11px] md:mb-6">
            — Institut Beauté & Bien-être
          </p>
          <h1 className="font-display text-[2.75rem] leading-[0.94] text-background drop-shadow-sm sm:text-5xl md:text-7xl lg:text-8xl text-balance">
            Révélez votre
            <br />
            <span className="font-script">beauté</span> naturelle.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] md:mt-8 md:text-lg font-light text-background/90 leading-relaxed">
            Chez Beauty by Camille, chaque prestation est pensée sur mesure pour sublimer votre
            beauté extérieure tout en nourrissant votre bien-être intérieur.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full max-w-full items-center justify-center gap-2 border border-background bg-background px-6 py-4 text-center tracking-luxe text-[10px] font-semibold uppercase text-primary transition-colors hover:bg-rose-soft sm:w-auto sm:text-[11px]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Réserver WhatsApp
            </a>
            <a
              href="#prestations"
              className="tracking-luxe text-[10px] uppercase text-background border-b border-background/60 pb-1 transition-colors hover:border-background sm:text-[11px]"
            >
              Découvrir nos soins
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 tracking-luxe text-[10px] uppercase text-background border-b border-background/60 pb-1 transition-colors hover:border-background sm:text-[11px]"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Instagram
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
