import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";
import { products as staticProducts } from "@/lib/products";
import { productFallbackImage } from "@/hooks/use-product-image";

type ProductRow = {
  slug: string;
  name?: string;
  category?: string;
  type?: Product["type"];
  price_cents?: number;
  short?: string;
  description?: string;
  image_url?: string | null;
  status?: string;
  stock?: number | null;
  uses?: string[] | null;
  ingredients?: string[] | null;
  badge?: string | null;
  format?: string | null;
};

let cachedRows: ProductRow[] | undefined;
let inflight: Promise<ProductRow[]> | undefined;

async function loadRows() {
  if (cachedRows) return cachedRows;
  if (inflight) return inflight;
  inflight = fetch("/api/products")
    .then((response) => (response.ok ? response.json() : { products: [] }))
    .then((data) => {
      cachedRows = Array.isArray(data.products) ? data.products : [];
      return cachedRows;
    })
    .catch(() => []);
  return inflight;
}

export function mergeProductOverride(product: Product, row?: ProductRow): Product {
  if (!row) return product;
  return {
    ...product,
    name: row.name || product.name,
    category: row.category || product.category,
    type: row.type || product.type,
    price: typeof row.price_cents === "number" ? row.price_cents / 100 : product.price,
    short: row.short || product.short,
    description: row.description || product.description,
    image: row.image_url || product.image,
    uses: row.uses?.length ? row.uses : product.uses,
    ingredients: row.ingredients?.length ? row.ingredients : product.ingredients,
    badge: row.badge ?? product.badge,
    format: row.format ?? product.format,
  };
}

export function productFromRow(row: ProductRow): Product | undefined {
  if (!row.slug || !row.name || !row.category || !row.type) return undefined;
  const product: Product = {
    slug: row.slug,
    name: row.name,
    category: row.category,
    type: row.type,
    price: typeof row.price_cents === "number" ? row.price_cents / 100 : 0,
    short: row.short || "",
    description: row.description || "",
    uses: row.uses ?? [],
    ingredients: row.ingredients ?? [],
    image: row.image_url || "",
    badge: row.badge ?? undefined,
    format: row.format ?? undefined,
  };
  return { ...product, image: product.image || productFallbackImage(product) };
}

export function useLiveProducts() {
  const [rows, setRows] = useState<ProductRow[]>(cachedRows ?? []);
  const [loading, setLoading] = useState(!cachedRows);

  useEffect(() => {
    let active = true;
    setLoading(true);
    void loadRows().then((next) => {
      if (!active) return;
      setRows(next);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  // Always show the built-in catalog. When Supabase rows are present they
  // override the matching static product, and any DB-only products are
  // appended. Archived/draft rows hide their matching static product.
  const visibleRows = rows.filter(
    (row) => row.status !== "archived" && row.status !== "draft",
  );
  const hiddenSlugs = new Set(
    rows
      .filter((row) => row.status === "archived" || row.status === "draft")
      .map((row) => row.slug),
  );
  const rowBySlug = new Map(visibleRows.map((row) => [row.slug, row]));
  const staticSlugs = new Set(staticProducts.map((product) => product.slug));

  const merged = staticProducts
    .filter((product) => !hiddenSlugs.has(product.slug))
    .map((product) => mergeProductOverride(product, rowBySlug.get(product.slug)));

  const liveOnly = visibleRows
    .filter((row) => !staticSlugs.has(row.slug))
    .map(productFromRow)
    .filter((product): product is Product => Boolean(product));

  return {
    products: [...merged, ...liveOnly],
    loading,
  };
}

export function useProductsWithOverrides(products: Product[]) {
  const [rows, setRows] = useState<ProductRow[]>(cachedRows ?? []);

  useEffect(() => {
    let active = true;
    void loadRows().then((next) => {
      if (active) setRows(next);
    });
    return () => {
      active = false;
    };
  }, []);

  const bySlug = new Map(rows.map((row) => [row.slug, row]));
  return products
    .map((product) => mergeProductOverride(product, bySlug.get(product.slug)))
    .filter((product) => bySlug.get(product.slug)?.status !== "archived");
}

export function useProductWithOverride(product: Product) {
  return useProductsWithOverrides([product])[0] ?? product;
}
