import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { useState } from "react";
import { Search } from "lucide-react";
import { categories } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { useLiveProducts } from "@/hooks/use-product-overrides";

const search = z.object({
  category: z.string().optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Shop — Hyrule Apothecary" },
      {
        name: "description",
        content: "Browse our full apothecary: herbs, flowers, tinctures, teas, oils, and kits.",
      },
      { property: "og:title", content: "Shop — Hyrule Apothecary" },
      {
        property: "og:description",
        content: "Browse our full apothecary: herbs, flowers, tinctures, teas, oils, and kits.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { category, q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q ?? "");
  const { products, loading } = useLiveProducts();

  const filtered = products.filter((p) => {
    if (category && p.category !== category) return false;
    if (q && !`${p.name} ${p.short} ${p.description}`.toLowerCase().includes(q.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="dark-page mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">The Apothecary Shelves</p>
        <h1 className="font-display text-4xl md:text-5xl text-gold">Shop all goods</h1>
        <p className="mt-3 text-parchment/90 max-w-2xl">
          Every item hand-blended in small batches. Filter by craft below, or search for a specific
          herb.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <Link
            to="/shop"
            search={{}}
            className={`px-3 py-1.5 rounded-full text-sm border ${!category ? "bg-gold text-forest border-gold" : "border-gold/40 text-[#e8dcc8] hover:bg-forest/60"}`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug }}
              className={`px-3 py-1.5 rounded-full text-sm border ${category === c.slug ? "bg-gold text-forest border-gold" : "border-gold/40 text-[#e8dcc8] hover:bg-forest/60"}`}
            >
              {c.name}
            </Link>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({
              search: (s: { category?: string; q?: string }) => ({ ...s, q: query || undefined }),
            });
          }}
          className="relative w-full md:w-72"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search herbs, remedies…"
            className="w-full rounded-md border border-gold/40 bg-parchment py-2 pl-9 pr-3 text-sm text-forest placeholder:text-forest/70 outline-none focus:border-gold"
          />
        </form>
      </div>

      {loading ? (
        <div className="parchment-card rounded-lg p-12 text-center">
          <p className="font-display text-xl text-forest">Stocking the shelves...</p>
          <p className="mt-2 text-sm text-[#4a3728]">Fetching the latest products from Supabase.</p>
        </div>
      ) : products.length === 0 ? (
        <div className="parchment-card rounded-lg p-12 text-center">
          <p className="font-display text-xl text-forest">No goods are in stock right now.</p>
          <p className="mt-2 text-sm text-[#4a3728]">Check back once the next batch is added.</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="parchment-card rounded-lg p-12 text-center">
          <p className="font-display text-xl text-forest">Nothing on this shelf yet.</p>
          <p className="mt-2 text-sm text-[#4a3728]">Try a different craft or search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
