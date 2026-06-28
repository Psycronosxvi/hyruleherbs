import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Minus, Plus, ShoppingBasket, Leaf } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { useProductImage } from "@/hooks/use-product-image";
import { useLiveProducts } from "@/hooks/use-product-overrides";

import herbsImg from "@/assets/cat-herbs.jpg";
import flowersImg from "@/assets/cat-flowers.jpg";
import tincturesImg from "@/assets/cat-tinctures.jpg";
import teasImg from "@/assets/cat-teas.jpg";
import oilsImg from "@/assets/cat-oils.jpg";
import kitsImg from "@/assets/cat-kits.jpg";

export const Route = createFileRoute("/product/$slug")({
  head: () => ({
    meta: [
      { title: "Product — Hyrule Apothecary" },
      { name: "description", content: "Shop live apothecary inventory from Hyrule Herb." },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl text-gold">Remedy not found</h1>
      <Link to="/shop" className="mt-4 inline-block text-[#c8bfa8] underline hover:text-gold">
        Back to the shop
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl text-gold">A spell misfired</h1>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const { products, loading } = useLiveProducts();
  const product = products.find((item) => item.slug === slug);

  if (loading) {
    return (
      <div className="dark-page mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl text-gold">Loading remedy...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="dark-page mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl text-gold">Remedy not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-[#c8bfa8] underline hover:text-gold">
          Back to the shop
        </Link>
      </div>
    );
  }

  return <ProductDetail product={product} products={products} />;
}

function ProductDetail({ product, products }: { product: Product; products: Product[] }) {
  const { add, toggleWish, isWished } = useCart();
  const [qty, setQty] = useState(1);
  const wished = isWished(product.slug);
  const { image, onImageError } = useProductImage(product);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="dark-page mx-auto max-w-6xl px-4 py-10">
      <Link to="/shop" className="text-sm text-[#c8bfa8] hover:text-gold">
        ← Back to shop
      </Link>
      <div className="mt-6 grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="parchment-card rounded-lg overflow-hidden">
          <img
            src={image}
            alt={product.name}
            onError={onImageError}
            className="w-full h-auto aspect-square object-cover"
          />
        </div>
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {product.badge && (
              <span className="inline-block rounded-sm border border-gold/60 bg-parchment/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-forest">
                {product.badge}
              </span>
            )}
            <span className="inline-block rounded-sm border border-gold/40 bg-parchment/70 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
              {product.format ?? product.type}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-gold leading-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-[#e8dcc8]">{product.short}</p>
          <div className="mt-5 font-display text-3xl text-[#e8dcc8]">${product.price}</div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-gold/40 rounded-md">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-2 hover:bg-parchment-dark/40"
                aria-label="Decrease"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-medium text-[#e8dcc8]">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-2 hover:bg-parchment-dark/40"
                aria-label="Increase"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => add(product.slug, qty)}
              className="inline-flex items-center gap-2 rounded-md bg-forest px-5 py-2.5 font-semibold text-parchment hover:bg-forest/90 rune-glow"
            >
              <ShoppingBasket className="h-4 w-4" /> Add to satchel
            </button>
            <button
              onClick={() => toggleWish(product.slug)}
              aria-label="Save"
              className="grid h-11 w-11 place-items-center rounded-md border border-gold/40 hover:bg-parchment-dark/40"
            >
              <Heart className={`h-5 w-5 ${wished ? "fill-ember text-ember" : "text-[#e8dcc8]"}`} />
            </button>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="font-display text-lg text-gold mb-2 flex items-center gap-2">
                <Leaf className="h-4 w-4 text-gold" /> Description
              </h2>
              <p className="text-sm text-[#e8dcc8] leading-relaxed">{product.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-gold mb-2">Common uses</h3>
                <ul className="space-y-1 text-sm text-[#e8dcc8]">
                  {product.uses.map((u: string) => (
                    <li key={u} className="flex gap-2">
                      <span className="text-gold">◆</span>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-gold mb-2">Ingredients</h3>
                <ul className="space-y-3 text-[#e8dcc8]">
                  {product.ingredients.map((i: string) => (
                    <li key={i} className="flex items-start gap-3">
                      <img
                        src={ingredientImageUrlFromName(i)}
                        alt={i}
                        className="h-10 w-10 flex-none rounded-md border border-gold/30 bg-parchment/60 object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            productIngredientFallbackImage(product.category);
                        }}
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-gold">◆</span>
                          <span className="text-sm text-[#e8dcc8]">{i}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {product.proofNotes && product.proofNotes.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-gold mb-2">Proof notes</h3>
                <ul className="space-y-1 text-sm text-[#e8dcc8]">
                  {product.proofNotes.map((note: string) => (
                    <li key={note} className="flex gap-2">
                      <span className="text-gold">◆</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl text-gold mb-6">You may also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function kebabCase(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function ingredientImageUrlFromName(name: string) {
  const slug = kebabCase(name);
  return `/images/ingredients/${slug}.jpg`;
}

function productIngredientFallbackImage(category: string) {
  switch (category) {
    case "herbs":
      return herbsImg;
    case "flowers":
      return flowersImg;
    case "tinctures":
      return tincturesImg;
    case "teas":
      return teasImg;
    case "oils":
      return oilsImg;
    case "kits":
      return kitsImg;
    case "books":
      return kitsImg;
    default:
      return herbsImg;
  }
}
