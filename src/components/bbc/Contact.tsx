export function Contact() {
  return (
    <section id="contact" className="relative bg-foreground text-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="tracking-luxe text-[11px] uppercase text-rose mb-6">— Prendre rendez-vous</p>
            <h2 className="font-display text-4xl md:text-7xl leading-[1.02] text-balance">
              Offrez-vous une <span className="font-script text-rose">parenthèse</span> de douceur.
            </h2>
            <p className="mt-8 max-w-lg font-light text-background/70 leading-relaxed">
              Chaque détail est pensé pour révéler la meilleure version de vous-même. Réservez votre moment chez Beauty by Camille.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:contact@beautybycamille.fr" className="tracking-luxe text-[11px] uppercase bg-background text-foreground px-8 py-4 hover:bg-rose-soft transition-colors">
                Réserver une séance
              </a>
              <a href="tel:+33000000000" className="tracking-luxe text-[11px] uppercase border border-background/30 px-8 py-4 hover:bg-background/10 transition-colors">
                Nous appeler
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-12 md:border-l border-background/15 space-y-8">
            {[
              ["Adresse", "12 rue des Lilas\n75000 Paris"],
              ["Horaires", "Mardi — Samedi\n10h — 19h"],
              ["Contact", "contact@beautybycamille.fr\n+33 0 00 00 00 00"],
              ["Suivez-nous", "Instagram · Facebook · Pinterest"],
            ].map(([t, v]) => (
              <div key={t}>
                <p className="tracking-luxe text-[10px] uppercase text-rose mb-2">{t}</p>
                <p className="font-display text-xl whitespace-pre-line text-background/90">{v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-background/15 flex flex-col md:flex-row items-center justify-between gap-4 text-background/60 text-xs">
          <p className="font-script text-2xl text-rose">Beauty by Camille</p>
          <p className="tracking-luxe uppercase text-[10px]">La beauté sur mesure, au service de votre bien-être</p>
          <p>© {new Date().getFullYear()} — Tous droits réservés</p>
        </div>
      </div>
    </section>
  );
}
