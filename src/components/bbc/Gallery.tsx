import { Instagram, MapPin, Sparkles } from "lucide-react";
import a from "@/assets/bbc/img1.jpg";
import b from "@/assets/bbc/img2.jpg";
import c from "@/assets/bbc/img4.jpg";
import d from "@/assets/bbc/img6.jpg";
import e from "@/assets/bbc/img8.jpg";
import f from "@/assets/bbc/spa.jpg";
import logo from "@/assets/bbc/beauty-by-camille-logo.png";
import { instagramUrl } from "@/lib/contact";

const posts = [
  {
    type: "statement",
    title: "L'expertise globale de la beauté, réunie en un seul lieu.",
    kicker: "Casablanca",
    image: f,
  },
  {
    type: "portrait",
    title: "Beauty by Camille",
    kicker: "Institut beauté & bien-être",
    image: b,
  },
  {
    type: "list",
    title: "Nos prestations",
    items: ["Beauté du regard", "Soin visage", "Massages", "Hammam", "Head spa"],
  },
  {
    type: "welcome",
    title: "Bienvenue dans un espace dédié au bien-être, à la beauté et à la détente.",
    image: c,
  },
  {
    type: "promo",
    title: "Sur rendez-vous",
    kicker: "Votre moment beauté sur mesure",
    image: d,
  },
  {
    type: "detail",
    title: "Une beauté élégante, naturelle, lumineuse.",
    image: e,
  },
];

export function Gallery() {
  return (
    <section className="relative bg-secondary py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-16">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            <span className="font-script">L'institut</span> en images
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs">
            Un cocon pensé pour la détente, l'élégance et la confidentialité.
          </p>
        </div>
      </div>

      <div className="mx-auto mb-20 max-w-6xl px-3 md:px-12">
        <div className="grid grid-cols-3 gap-px bg-primary/55">
          {posts.map((post, index) => (
            <article
              key={`${post.type}-${index}`}
              className="relative aspect-square overflow-hidden bg-primary text-background"
            >
              {"image" in post ? (
                <img
                  src={post.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : null}
              <div
                className={
                  post.type === "portrait" || post.type === "detail"
                    ? "absolute inset-0 bg-gradient-to-b from-primary/18 via-primary/18 to-primary/70"
                    : "absolute inset-0 bg-primary/82"
                }
              />

              {post.type === "portrait" ? (
                <div className="absolute inset-x-0 bottom-0 bg-background px-2 py-1.5 text-center text-primary md:px-4">
                  <p className="truncate text-[8px] font-semibold uppercase tracking-[0.08em] md:text-[11px]">
                    {post.title}
                  </p>
                </div>
              ) : null}

              <div className="relative z-10 flex h-full flex-col justify-between p-3 md:p-7">
                <div className="flex items-center justify-between gap-2">
                  {post.type === "statement" ? <MapPin className="h-4 w-4 md:h-5 md:w-5" /> : null}
                  {post.type === "list" ? <Sparkles className="h-4 w-4 md:h-5 md:w-5" /> : null}
                  {post.type === "welcome" ? <Instagram className="h-4 w-4 md:h-5 md:w-5" /> : null}
                  {post.type === "promo" ? (
                    <span className="tracking-luxe text-[7px] uppercase md:text-[10px]">Rdv</span>
                  ) : null}
                </div>

                <div>
                  {post.type === "portrait" ? (
                    <img
                      src={logo}
                      alt="Beauty by Camille"
                      className="mx-auto mb-3 h-16 w-24 object-contain opacity-95 md:h-28 md:w-40"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  ) : null}

                  {post.type === "list" && "items" in post ? (
                    <>
                      <h3 className="font-display text-[13px] uppercase leading-none md:text-4xl">
                        {post.title}
                      </h3>
                      <ul className="mt-2 space-y-0.5 md:mt-5 md:space-y-2">
                        {post.items.map((item) => (
                          <li
                            key={item}
                            className="text-[8px] font-semibold uppercase leading-tight md:text-sm"
                          >
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <h3
                      className={
                        post.type === "welcome"
                          ? "font-script text-[15px] leading-[0.98] md:text-4xl"
                          : "font-display text-[14px] leading-[0.98] md:text-4xl"
                      }
                    >
                      {post.title}
                    </h3>
                  )}

                  {"kicker" in post ? (
                    <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.08em] text-background/85 md:mt-4 md:text-[11px]">
                      {post.kicker}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-5 flex h-11 w-fit items-center gap-2 border border-primary/35 px-4 text-primary transition-colors hover:bg-primary hover:text-background"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          <span className="tracking-luxe text-[10px] uppercase">Voir Instagram</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-primary/30 px-px md:mx-6">
        <img src={a} alt="" className="col-span-2 md:col-span-2 aspect-[4/5] object-cover w-full" />
        <img
          src={b}
          alt=""
          className="col-span-1 md:col-span-2 aspect-square object-cover w-full md:mt-12"
        />
        <img src={c} alt="" className="col-span-1 md:col-span-2 aspect-[4/5] object-cover w-full" />
        <img
          src={d}
          alt=""
          className="col-span-2 md:col-span-2 aspect-[3/2] object-cover w-full md:mt-6"
        />
        <img
          src={e}
          alt=""
          className="col-span-1 md:col-span-2 aspect-square object-cover w-full"
        />
        <img
          src={f}
          alt=""
          className="col-span-1 md:col-span-2 aspect-[4/5] object-cover w-full md:-mt-8"
        />
      </div>
    </section>
  );
}
