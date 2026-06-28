import { Link } from "@tanstack/react-router";
import { Heart, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useProductImage } from "@/hooks/use-product-image";

export function ProductCard({ product }: { product: Product }) {
  const { add, toggleWish, isWished } = useCart();
  const wished = isWished(product.slug);
  const { image, onImageError } = useProductImage(product);
  return (
    <div className="group parchment-card rounded-lg overflow-hidden flex flex-col">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden bg-parchment-dark/30"
      >
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          onError={onImageError}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-sm border border-gold/60 bg-parchment/95 px-2 py-0.5 text-[10px] uppercase tracking-widest text-forest">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleWish(product.slug);
          }}
          aria-label="Save to satchel"
          className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-parchment/90 border border-gold/40 hover:bg-parchment"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-ember text-ember" : "text-forest"}`} />
        </button>
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="font-display text-lg text-forest leading-tight hover:text-ember"
        >
          {product.name}
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2 flex-1">{product.short}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-lg text-forest">${product.price}</span>
          <button
            onClick={() => add(product.slug)}
            className="inline-flex items-center gap-1 rounded-md bg-forest px-2.5 py-1.5 text-xs font-semibold text-parchment hover:bg-forest/90"
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
