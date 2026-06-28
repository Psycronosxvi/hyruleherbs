import herbsImg from "@/assets/cat-herbs.jpg";
import flowersImg from "@/assets/cat-flowers.jpg";
import oilsImg from "@/assets/cat-oils.jpg";
import tincturesImg from "@/assets/cat-tinctures.jpg";
import teasImg from "@/assets/cat-teas.jpg";
import kitsImg from "@/assets/cat-kits.jpg";
import type { Product } from "@/lib/products";

/**
 * Ingredient images:
 *   /images/ingredients/<ingredient-name-kebab>.jpg
 *
 * If the image 404s, UI should fall back to a category-based image via <img onError>.
 */
export function ingredientImageUrlFromName(name: string) {
  const slug = kebabCase(name);
  return `/images/ingredients/${slug}.jpg`;
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

export function fallbackImageForProductCategory(category: string) {
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
    case "books":
      return kitsImg;
    default:
      return herbsImg;
  }
}

/**
 * Best-effort fallback for Book of Writz entries where we don't have a product category.
 * Uses heuristics over `formUsed`.
 */
export function fallbackImageForWritzEntryForm(formUsed: string) {
  const f = formUsed.toLowerCase();
  if (f.includes("flower") || f.includes("petal")) return flowersImg;
  if (f.includes("oil") || f.includes("essential")) return oilsImg;
  if (f.includes("resin") || f.includes("tincture") || f.includes("elixir")) return oilsImg; // best-effort
  if (f.includes("tea")) return teasImg;
  if (f.includes("kit") || f.includes("book")) return kitsImg;
  return herbsImg;
}

export function productIngredientFallbackImage(product: Product) {
  return fallbackImageForProductCategory(product.category);
}
