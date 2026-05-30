import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/bbc/Nav";
import { Hero } from "@/components/bbc/Hero";
import { About } from "@/components/bbc/About";
import { Services } from "@/components/bbc/Services";
import { Values } from "@/components/bbc/Values";
import { Gallery } from "@/components/bbc/Gallery";
import { Contact } from "@/components/bbc/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beauty by Camille — Institut beauté & bien-être sur mesure" },
      { name: "description", content: "Institut de beauté et bien-être : extensions de cils, sourcils, soins du visage, massages et manucure. Une approche personnalisée pour révéler votre beauté naturelle." },
      { property: "og:title", content: "Beauty by Camille — Institut beauté & bien-être" },
      { property: "og:description", content: "La beauté sur mesure, au service de votre bien-être." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Values />
      <Gallery />
      <Contact />
    </main>
  );
}
