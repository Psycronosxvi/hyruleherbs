import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Leaf, FlaskConical, Shield } from "lucide-react";
import heroImg from "@/assets/hero-apothecary.jpg";
import { categories } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { useLiveProducts } from "@/hooks/use-product-overrides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hyrule Apothecary — Herbs, Flowers & Natural Remedies" },
      {
        name: "description",
        content:
          "A Zelda-inspired apothecary stocked with small-batch herbs, dried flowers, tinctures, teas, and essential oils.",
      },
      { property: "og:title", content: "Hyrule Apothecary — Herbs & Natural Remedies" },
      {
        property: "og:description",
        content: "Small-batch remedies brewed with care from every corner of the realm.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { products } = useLiveProducts();
  const featured = products.filter((p) => p.badge === "Bestseller").slice(0, 4);
  return (
    <div className="dark-page">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 px-4 py-12 lg:py-20 items-center">
          <div>
            <div className="ornament-divider mb-6 max-w-xs">
              <span className="text-xs uppercase tracking-[0.3em]">Est. First Age</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold leading-tight">
              Potions, herbs &amp; remedies{" "}
              <span className="italic text-[#e8dcc8]">from every corner of the realm</span>
            </h1>
            <p className="mt-5 text-lg text-[#e8dcc8] max-w-xl">
              A small-batch apothecary stocked with hundreds of dried herbs, wildflowers,
              hand-steeped tinctures, and ritual teas. Every batch hand-tied, every label
              hand-stamped.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-md bg-forest px-5 py-3 font-semibold text-parchment hover:bg-forest/90 rune-glow"
              >
                Enter the shop <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-gold/60 px-5 py-3 font-semibold text-[#e8dcc8] hover:bg-forest/60"
              >
                Read our lore
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Leaf, label: "Wildcrafted" },
                { icon: FlaskConical, label: "Small batch" },
                { icon: Shield, label: "Lab tested" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-parchment/80">
                  <b.icon className="h-5 w-5 text-forest" />
                </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-[#e8dcc8]">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-6 bg-gradient-to-br from-gold/30 to-transparent blur-3xl rounded-full"
              aria-hidden
            />
            <div className="relative parchment-card rounded-lg overflow-hidden rune-glow">
              <img
                src={heroImg}
                alt="An alchemy table covered with potions, herbs, and a glowing rune scroll"
                width={1536}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">The Shelves</p>
            <h2 className="font-display text-3xl md:text-4xl text-gold">Browse by craft</h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#e8dcc8] hover:text-gold"
          >
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug }}
              className="group parchment-card rounded-lg overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-parchment-dark/40">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-forest">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">From the cauldron</p>
          <h2 className="font-display text-3xl md:text-4xl text-gold">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Lore strip */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="parchment-card rounded-lg p-8 md:p-12 text-center">
          <Sparkles className="mx-auto h-7 w-7 text-gold mb-4" />
          <h2 className="font-display text-2xl md:text-3xl text-forest max-w-2xl mx-auto">
            "A good remedy is half plant, half patience, and a little courage."
          </h2>
            <p className="mt-4 text-sm text-[#4a3728]">— from the Apothecary's First Scroll</p>
        </div>
      </section>
    </div>
  );
}
