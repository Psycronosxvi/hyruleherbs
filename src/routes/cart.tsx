import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useProductImage } from "@/hooks/use-product-image";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Satchel — Hyrule Apothecary" },
      { name: "description", content: "Review the items in your satchel." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { detailed, items, setQty, remove, subtotal, clear } = useCart();
  const [checkoutState, setCheckoutState] = useState<"idle" | "loading" | "error">("idle");
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 6;
  const total = subtotal + shipping;

  async function checkout() {
    setCheckoutState("loading");
    setCheckoutMessage("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.url) {
        throw new Error(data.message || "Stripe checkout could not start.");
      }

      window.location.href = data.url;
    } catch (error) {
      setCheckoutState("error");
      setCheckoutMessage(
        error instanceof Error ? error.message : "Stripe checkout could not start.",
      );
    }
  }

  if (detailed.length === 0) {
    return (
      <div className="dark-page mx-auto max-w-2xl px-4 py-20 text-center">
        <ShoppingBasket className="mx-auto h-10 w-10 text-gold" />
        <h1 className="mt-4 font-display text-3xl text-forest">Your satchel is empty</h1>
        <p className="mt-2 text-muted-foreground">Wander the shelves to find your next remedy.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-md bg-forest px-5 py-2.5 font-semibold text-parchment hover:bg-forest/90"
        >
          Enter the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="dark-page mx-auto max-w-6xl px-4 py-10 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="font-display text-3xl md:text-4xl text-forest mb-6">Your satchel</h1>
        <div className="parchment-card rounded-lg divide-y divide-gold/20">
          {detailed.map(({ product, qty }) => (
            <CartLine
              key={product.slug}
              product={product}
              qty={qty}
              setQty={setQty}
              remove={remove}
            />
          ))}
        </div>
        <button onClick={clear} className="mt-4 text-sm text-muted-foreground hover:text-ember">
          Clear satchel
        </button>
      </div>
      <aside className="parchment-card rounded-lg p-6 h-fit">
        <h2 className="font-display text-xl text-forest mb-4">Summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          {subtotal < 50 && (
            <div className="text-xs text-muted-foreground">Free shipping on orders over $50.</div>
          )}
          <div className="border-t border-gold/30 pt-3 flex justify-between font-display text-lg text-forest">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          className="mt-6 w-full rounded-md bg-forest px-5 py-3 font-semibold text-parchment hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-70 rune-glow"
          onClick={checkout}
          disabled={checkoutState === "loading"}
        >
          {checkoutState === "loading" ? "Opening Stripe..." : "Proceed to checkout"}
        </button>
        {checkoutMessage && (
          <p className="mt-3 text-center text-xs text-ember" role="status">
            {checkoutMessage}
          </p>
        )}
        <Link
          to="/signin"
          search={{ redirectTo: "/cart" }}
          className="mt-3 block text-center text-sm text-forest hover:text-ember"
        >
          Sign in to save your satchel
        </Link>
      </aside>
    </div>
  );
}

function CartLine({
  product,
  qty,
  setQty,
  remove,
}: {
  product: ReturnType<typeof useCart>["detailed"][number]["product"];
  qty: number;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
}) {
  const { image, onImageError } = useProductImage(product);

  return (
    <div className="flex gap-4 p-4">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-md"
      >
        <img src={image} alt={product.name} onError={onImageError} className="h-full w-full object-cover" />
      </Link>
      <div className="flex-1 min-w-0">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="font-display text-lg text-forest hover:text-ember leading-tight"
        >
          {product.name}
        </Link>
        <div className="text-sm text-muted-foreground">${product.price} each</div>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex items-center border border-gold/40 rounded-md">
            <button onClick={() => setQty(product.slug, qty - 1)} className="p-1.5">
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-8 text-center text-sm">{qty}</span>
            <button onClick={() => setQty(product.slug, qty + 1)} className="p-1.5">
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            onClick={() => remove(product.slug)}
            className="text-sm text-ember/80 hover:text-ember inline-flex items-center gap-1"
          >
            <Trash2 className="h-3.5 w-3.5" /> Remove
          </button>
        </div>
      </div>
      <div className="font-display text-lg text-forest">${(product.price * qty).toFixed(2)}</div>
    </div>
  );
}
