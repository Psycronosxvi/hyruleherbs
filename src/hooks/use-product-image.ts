import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";
import herbsImg from "@/assets/cat-herbs.jpg";
import flowersImg from "@/assets/cat-flowers.jpg";
import tincturesImg from "@/assets/cat-tinctures.jpg";
import teasImg from "@/assets/cat-teas.jpg";
import oilsImg from "@/assets/cat-oils.jpg";
import kitsImg from "@/assets/cat-kits.jpg";

export function useProductImage(product: Product) {
  const [image, setImage] = useState(product.image || productFallbackImage(product));

  useEffect(() => {
    setImage(product.image || productFallbackImage(product));
  }, [product.image, product.slug]);

  return { image, onImageError: () => setImage(productFallbackImage(product)) };
}

export function productFallbackImage(product: Pick<Product, "category" | "type">) {
  if (product.category === "flowers") return flowersImg;
  if (product.category === "tinctures") return tincturesImg;
  if (product.category === "teas") return teasImg;
  if (product.category === "oils") return oilsImg;
  if (product.category === "kits" || product.category === "books" || product.type === "book") {
    return kitsImg;
  }
  return herbsImg;
}
