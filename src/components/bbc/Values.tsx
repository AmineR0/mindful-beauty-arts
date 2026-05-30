import img1 from "@/assets/bbc/img5.jpg";
import img2 from "@/assets/bbc/img7.jpg";

const values = [
  ["Expertise personnalisée", "Une analyse fine de vos besoins pour des résultats à votre image."],
  ["Écoute & bienveillance", "Un accueil chaleureux où chaque cliente est unique."],
  ["Beauté naturelle", "Sublimer sans transformer — révéler ce qui existe déjà."],
  ["Bien-être global", "Le soin du corps au service de l'équilibre intérieur."],
  ["Prestations sur mesure", "Chaque protocole est ajusté à votre peau, votre rythme, vos envies."],
  ["Résultats harmonieux", "Une beauté élégante, discrète, durable."],
];

export function Values() {
  return (
    <section id="values" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5 md:sticky md:top-24 self-start">
            <p className="tracking-luxe text-[11px] uppercase text-accent mb-6">— Nos valeurs</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground leading-[1.05] text-balance">
              Une philosophie <span className="font-script">du soin</span>.
            </h2>
            <div className="hairline my-10 max-w-xs" />
            <p className="text-muted-foreground font-light leading-relaxed max-w-md">
              Nous croyons en une beauté qui prend son temps. Une beauté qui écoute, qui répare, qui célèbre. Chez nous, le luxe n'est pas dans l'ostentation — il est dans l'attention.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <img src={img1} alt="" className="aspect-[3/4] object-cover w-full" />
              <img src={img2} alt="" className="aspect-[3/4] object-cover w-full mt-10" />
            </div>
          </div>

          <ul className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border self-start">
            {values.map(([t, d], i) => (
              <li key={t} className="bg-background p-8 md:p-10 min-h-[220px] flex flex-col justify-between">
                <span className="tracking-luxe text-[10px] uppercase text-accent">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">{t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
