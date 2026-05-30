import a from "@/assets/bbc/img1.jpg";
import b from "@/assets/bbc/img2.jpg";
import c from "@/assets/bbc/img4.jpg";
import d from "@/assets/bbc/img6.jpg";
import e from "@/assets/bbc/img8.jpg";
import f from "@/assets/bbc/spa.jpg";

export function Gallery() {
  return (
    <section className="relative bg-muted/40 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-16">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            <span className="font-script">L'institut</span> en images
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs">Un cocon pensé pour la détente, l'élégance et la confidentialité.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3 px-2 md:px-6">
        <img src={a} alt="" className="col-span-2 md:col-span-2 aspect-[4/5] object-cover w-full" />
        <img src={b} alt="" className="col-span-1 md:col-span-2 aspect-square object-cover w-full md:mt-12" />
        <img src={c} alt="" className="col-span-1 md:col-span-2 aspect-[4/5] object-cover w-full" />
        <img src={d} alt="" className="col-span-2 md:col-span-2 aspect-[3/2] object-cover w-full md:mt-6" />
        <img src={e} alt="" className="col-span-1 md:col-span-2 aspect-square object-cover w-full" />
        <img src={f} alt="" className="col-span-1 md:col-span-2 aspect-[4/5] object-cover w-full md:-mt-8" />
      </div>
    </section>
  );
}
