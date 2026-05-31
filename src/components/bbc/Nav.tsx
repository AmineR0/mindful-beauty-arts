import { Instagram } from "lucide-react";
import logo from "@/assets/bbc/beauty-by-camille-logo.png";
import { WhatsAppIcon } from "@/components/bbc/WhatsAppIcon";
import { instagramUrl, whatsappUrl } from "@/lib/contact";

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-12 md:py-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3"
          aria-label="Beauty by Camille accueil"
        >
          <span className="flex h-24 w-36 items-center justify-center sm:h-28 sm:w-44 md:h-32 md:w-52">
            <img
              src={logo}
              alt="Beauty by Camille"
              className="max-h-full max-w-full object-contain"
              style={{
                filter: "brightness(0) invert(1) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.35))",
              }}
            />
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ["Prestations", "#prestations"],
            ["L'institut", "#about"],
            ["Valeurs", "#values"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="tracking-luxe text-[11px] uppercase text-background/90 hover:text-background transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Beauty by Camille"
            className="inline-flex h-10 w-10 items-center justify-center border border-background/40 text-background transition-all hover:bg-background hover:text-foreground sm:h-11 sm:w-11"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center gap-2 bg-background text-foreground transition-colors hover:bg-rose-soft sm:h-11 sm:w-auto sm:px-4 md:px-5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden tracking-luxe text-[11px] uppercase sm:inline">Réserver</span>
          </a>
        </div>
      </div>
    </header>
  );
}
