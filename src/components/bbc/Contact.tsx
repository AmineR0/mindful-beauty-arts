import { Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/bbc/beauty-by-camille-logo.png";
import { WhatsAppIcon } from "@/components/bbc/WhatsAppIcon";
import { businessAddress, instagramUrl, whatsappUrl } from "@/lib/contact";

export function Contact() {
  return (
    <section id="contact" className="relative bg-foreground text-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="tracking-luxe text-[11px] uppercase text-rose mb-6">
              — Prendre rendez-vous
            </p>
            <h2 className="font-display text-4xl md:text-7xl leading-[1.02] text-balance">
              Offrez-vous une <span className="font-script text-rose">parenthèse</span> de douceur.
            </h2>
            <p className="mt-8 max-w-lg font-light text-background/70 leading-relaxed">
              Chaque détail est pensé pour révéler la meilleure version de vous-même. Réservez votre
              moment chez Beauty by Camille.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-background px-6 py-4 text-center tracking-luxe text-[10px] uppercase text-foreground transition-colors hover:bg-rose-soft sm:w-auto sm:text-[11px]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Réserver sur WhatsApp
              </a>
              <a
                href="tel:+212604577204"
                className="inline-flex w-full items-center justify-center gap-2 border border-background/30 px-6 py-4 text-center tracking-luxe text-[10px] uppercase transition-colors hover:bg-background/10 sm:w-auto sm:text-[11px]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Nous appeler
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-12 md:border-l border-background/15 space-y-8">
            {[
              ["Adresse", businessAddress],
              ["Horaires", "Sur rendez-vous uniquement"],
              ["Contact", "0604577204\nRéservation par WhatsApp"],
            ].map(([t, v]) => (
              <div key={t}>
                <p className="tracking-luxe text-[10px] uppercase text-rose mb-2">{t}</p>
                <p className="font-display text-xl whitespace-pre-line text-background/90">{v}</p>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 border border-background/30 px-4 text-background transition-colors hover:bg-background/10"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span className="tracking-luxe text-[10px] uppercase">Instagram</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress.replace(/\n/g, " "))}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 border border-background/30 px-4 text-background transition-colors hover:bg-background/10"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span className="tracking-luxe text-[10px] uppercase">Adresse</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-background/15 flex flex-col md:flex-row items-center justify-between gap-4 text-background/60 text-xs">
          <img
            src={logo}
            alt="Beauty by Camille"
            className="h-28 w-44 object-contain md:h-32 md:w-52"
          />
          <p className="tracking-luxe uppercase text-[10px]">
            La beauté sur mesure, au service de votre bien-être
          </p>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-background/80 transition-colors hover:text-background"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span className="tracking-luxe text-[10px] uppercase">Instagram</span>
            </a>
            <p>© {new Date().getFullYear()} — Tous droits réservés</p>
          </div>
        </div>
      </div>
    </section>
  );
}
