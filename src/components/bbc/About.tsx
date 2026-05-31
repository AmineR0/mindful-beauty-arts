import salon from "@/assets/bbc/salon.jpg";
import spa from "@/assets/bbc/spa.jpg";
import img1 from "@/assets/bbc/img1.jpg";
import img4 from "@/assets/bbc/img4.jpg";

const salonImages = [salon, spa, img1, img4];

export function About() {
  return (
    <section id="about" className="relative bg-background py-20 md:py-32 bg-grain">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-12">
        <div className="md:col-span-5">
          <div className="relative overflow-hidden h-[520px] md:h-[640px]">
            {salonImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Salon Beauty by Camille"
                className="salon-slide absolute inset-0 h-full w-full object-cover"
                style={{ animationDelay: `${index * 4}s` }}
              />
            ))}
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-primary p-8 max-w-[260px] text-background">
              <p className="font-script text-3xl text-rose leading-tight">
                « La beauté sur mesure »
              </p>
              <p className="mt-3 tracking-luxe text-[10px] uppercase text-background/70">
                Camille — Fondatrice
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:pl-12">
          <p className="tracking-luxe text-[11px] uppercase text-accent mb-6">— À propos</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-[1.05] text-balance">
            Bien plus qu'un institut, <span className="font-script">un espace</span> dédié à votre
            épanouissement.
          </h2>
          <div className="hairline my-10 max-w-xs" />
          <div className="space-y-6 text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-xl">
            <p>
              Beauty by Camille est un concept beauté et bien-être où chaque cliente bénéficie d'une
              approche personnalisée.
            </p>
            <p>
              Nous croyons que la beauté ne se résume pas à l'apparence. Elle naît de l'équilibre
              entre le soin de soi, la confiance en soi et le bien-être au quotidien.
            </p>
            <p className="text-foreground">
              Notre mission : vous aider à vous sentir belle, rayonnante et alignée avec vous-même.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            {[
              ["+10", "ans d'expertise"],
              ["100%", "sur mesure"],
              ["★ 4.9", "satisfaction"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl md:text-4xl text-foreground">{n}</p>
                <p className="mt-2 tracking-luxe text-[10px] uppercase text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
