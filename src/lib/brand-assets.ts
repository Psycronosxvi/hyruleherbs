export const BRAND_LOGO_KEY = "ha_brand_logo_url_v1";
export const PRODUCT_IMAGE_OVERRIDES_KEY = "ha_product_image_overrides_v1";

export type ProductImageOverrides = Record<string, string>;

export const brandImageSlots = [
  {
    id: "nightbloom-label",
    label: "Nightbloom label",
    note: "Use this for a dramatic brand story panel or seasonal collection image.",
  },
  {
    id: "apothecary-shelf",
    label: "Round apothecary shelf",
    note: "Use this for shop/category artwork or a warm welcome graphic.",
  },
  {
    id: "global-logo",
    label: "Global logo",
    note: "Use the third image here so it can become the site-wide mark.",
  },
  {
    id: "minimal-wordmark",
    label: "Minimal wordmark",
    note: "Use this as a clean secondary mark for receipts, books, and footer placements.",
  },
] as const;

export function readProductImageOverrides(): ProductImageOverrides {
  if (typeof window === "undefined") return {};

  try {
    const raw = localStorage.getItem(PRODUCT_IMAGE_OVERRIDES_KEY);
    return raw ? (JSON.parse(raw) as ProductImageOverrides) : {};
  } catch {
    return {};
  }
}

export function writeProductImageOverride(slug: string, image: string) {
  const overrides = readProductImageOverrides();
  if (image.trim()) overrides[slug] = image.trim();
  else delete overrides[slug];

  localStorage.setItem(PRODUCT_IMAGE_OVERRIDES_KEY, JSON.stringify(overrides));
  window.dispatchEvent(new Event("ha-brand-assets-updated"));
}

export function readBrandLogo() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(BRAND_LOGO_KEY) ?? "";
}

export function writeBrandLogo(image: string) {
  if (image.trim()) localStorage.setItem(BRAND_LOGO_KEY, image.trim());
  else localStorage.removeItem(BRAND_LOGO_KEY);

  window.dispatchEvent(new Event("ha-brand-assets-updated"));
}
