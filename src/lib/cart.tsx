import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./products";
import { useLiveProducts } from "@/hooks/use-product-overrides";

type CartItem = { slug: string; qty: number };
type CartCtx = {
  items: CartItem[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  detailed: { product: Product; qty: number }[];
  count: number;
  subtotal: number;
  wishlist: string[];
  toggleWish: (slug: string) => void;
  isWished: (slug: string) => boolean;
};

const Ctx = createContext<CartCtx | null>(null);
const CART_KEY = "ha_cart_v1";
const WISH_KEY = "ha_wish_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const { products } = useLiveProducts();

  useEffect(() => {
    try {
      const c = localStorage.getItem(CART_KEY);
      if (c) setItems(JSON.parse(c));
      const w = localStorage.getItem(WISH_KEY);
      if (w) setWishlist(JSON.parse(w));
    } catch {
      setItems([]);
      setWishlist([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, ready]);
  useEffect(() => {
    if (ready) localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, ready]);

  const add = (slug: string, qty = 1) =>
    setItems((cur) => {
      const ex = cur.find((i) => i.slug === slug);
      if (ex) return cur.map((i) => (i.slug === slug ? { ...i, qty: i.qty + qty } : i));
      return [...cur, { slug, qty }];
    });
  const remove = (slug: string) => setItems((cur) => cur.filter((i) => i.slug !== slug));
  const setQty = (slug: string, qty: number) =>
    setItems((cur) =>
      qty <= 0
        ? cur.filter((i) => i.slug !== slug)
        : cur.map((i) => (i.slug === slug ? { ...i, qty } : i)),
    );
  const clear = () => setItems([]);

  const detailed = items
    .map((i) => {
      const p = products.find((p) => p.slug === i.slug);
      return p ? { product: p, qty: i.qty } : null;
    })
    .filter(Boolean) as { product: Product; qty: number }[];
  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = detailed.reduce((s, d) => s + d.product.price * d.qty, 0);

  const toggleWish = (slug: string) =>
    setWishlist((cur) => (cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]));
  const isWished = (slug: string) => wishlist.includes(slug);

  return (
    <Ctx.Provider
      value={{
        items,
        add,
        remove,
        setQty,
        clear,
        detailed,
        count,
        subtotal,
        wishlist,
        toggleWish,
        isWished,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart outside provider");
  return v;
};
