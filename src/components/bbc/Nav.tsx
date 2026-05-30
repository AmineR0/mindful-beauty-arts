export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-script text-2xl md:text-3xl text-background">Beauty</span>
          <span className="tracking-luxe text-[10px] md:text-xs uppercase text-background/80 -mt-1">by Camille</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ["Prestations", "#prestations"],
            ["L'institut", "#about"],
            ["Valeurs", "#values"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="tracking-luxe text-[11px] uppercase text-background/90 hover:text-background transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex tracking-luxe text-[11px] uppercase border border-background/40 text-background px-5 py-3 hover:bg-background hover:text-foreground transition-all">
          Réserver
        </a>
      </div>
    </header>
  );
}
