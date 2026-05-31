const categories = [
  {
    n: "01",
    title: "Beauté du regard",
    intro: "Extensions, rehaussement et teinture pour un regard sublimé.",
    items: [
      ["Extensions de cils", "Naturel, sophistiqué ou glamour, adapté à votre morphologie."],
      [
        "Rehaussement de cils",
        "Des cils naturellement recourbés pour un regard ouvert et lumineux.",
      ],
      ["Teinture des cils", "Intensifiez votre regard sans maquillage."],
    ],
  },
  {
    n: "02",
    title: "Beauté des sourcils",
    intro: "L'art de structurer la ligne du regard.",
    items: [
      ["Restructuration", "Analyse morphologique pour une ligne harmonieuse."],
      ["Épilation", "Des sourcils nets et équilibrés."],
      ["Henna Brows", "Coloration naturelle, plus de densité visuelle."],
      ["Shading", "Pigmentation effet poudré, parfaitement défini."],
      ["Brow Lift", "Discipline et restructure pour un effet plus fourni."],
    ],
  },
  {
    n: "03",
    title: "Soins du visage",
    intro: "Des protocoles personnalisés pour révéler l'éclat naturel.",
    items: [
      ["Soin éclat", "Redonne luminosité aux peaux ternes."],
      ["Soin hydratant", "Confort, souplesse et hydratation profonde."],
      ["Soin purifiant", "Idéal pour les peaux mixtes à grasses."],
      ["Soin anti-âge", "Fermeté, élasticité et éclat retrouvés."],
      ["Diagnostic de peau", "Une analyse approfondie et personnalisée."],
    ],
  },
  {
    n: "04",
    title: "Massages & Bien-être",
    intro: "Une parenthèse de douceur pour le corps et l'esprit.",
    items: [
      ["Massage relaxant", "Relâchez les tensions du quotidien."],
      ["Massage sur mesure", "Adapté à vos besoins spécifiques."],
      ["Massage drainant", "Favorise la circulation, sensation de légèreté."],
      ["Rituel bien-être", "Harmonisez le corps et l'esprit."],
    ],
  },
  {
    n: "05",
    title: "Beauté des mains",
    intro: "Mains soignées, ongles raffinés.",
    items: [
      ["Manucure", "Des mains élégantes au quotidien."],
      ["Soin complet", "Hydratation, nutrition et embellissement."],
      ["Mise en beauté des ongles", "Pour des ongles impeccables."],
    ],
  },
];

export function Services() {
  return (
    <section id="prestations" className="relative bg-primary py-20 text-background md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <p className="tracking-luxe text-[11px] uppercase text-rose mb-6">— Nos prestations</p>
            <h2 className="font-display text-4xl md:text-6xl text-background leading-[1.05] text-balance">
              Une carte de soins <span className="font-script">pensée sur mesure</span>.
            </h2>
          </div>
          <p className="md:max-w-sm text-background/72 font-light leading-relaxed">
            Chaque prestation est réalisée avec attention, expertise et douceur afin de répondre aux
            besoins uniques de chacune.
          </p>
        </div>

        <div className="space-y-px border-y border-background/20 bg-background/20">
          {categories.map((cat) => (
            <article key={cat.n} className="group bg-primary transition-colors hover:bg-accent">
              <div className="grid grid-cols-12 gap-6 px-2 md:px-8 py-10 md:py-14">
                <div className="col-span-12 md:col-span-1 font-display text-2xl text-rose">
                  {cat.n}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-3xl md:text-4xl text-background leading-tight">
                    {cat.title}
                  </h3>
                  <p className="mt-4 text-sm text-background/70 font-light max-w-xs">{cat.intro}</p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <ul className="divide-y divide-background/18">
                    {cat.items.map(([name, desc]) => (
                      <li
                        key={name}
                        className="py-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2"
                      >
                        <div className="md:max-w-[60%]">
                          <p className="font-display text-xl text-background">{name}</p>
                          <p className="text-sm text-background/68 font-light mt-1">{desc}</p>
                        </div>
                        <span className="tracking-luxe text-[10px] uppercase text-rose">
                          Sur rendez-vous
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
