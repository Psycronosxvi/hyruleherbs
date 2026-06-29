import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Minus, m as Plus, o as Trash2, s as ShoppingBasket } from "../_libs/lucide-react.mjs";
import { i as useProductImage, n as useCart } from "./cart-B4zVWcXf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DQKk3ThE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { detailed, items, setQty, remove, subtotal, clear } = useCart();
	const [checkoutState, setCheckoutState] = (0, import_react.useState)("idle");
	const [checkoutMessage, setCheckoutMessage] = (0, import_react.useState)("");
	const shipping = subtotal > 50 || subtotal === 0 ? 0 : 6;
	const total = subtotal + shipping;
	async function checkout() {
		setCheckoutState("loading");
		setCheckoutMessage("");
		try {
			const response = await fetch("/api/checkout", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ items })
			});
			const data = await response.json().catch(() => ({}));
			if (!response.ok || !data.url) throw new Error(data.message || "Stripe checkout could not start.");
			window.location.href = data.url;
		} catch (error) {
			setCheckoutState("error");
			setCheckoutMessage(error instanceof Error ? error.message : "Stripe checkout could not start.");
		}
	}
	if (detailed.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark-page mx-auto max-w-2xl px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBasket, { className: "mx-auto h-10 w-10 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-3xl text-forest",
				children: "Your satchel is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Wander the shelves to find your next remedy."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-6 inline-block rounded-md bg-forest px-5 py-2.5 font-semibold text-parchment hover:bg-forest/90",
				children: "Enter the shop"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark-page mx-auto max-w-6xl px-4 py-10 grid lg:grid-cols-3 gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-4xl text-forest mb-6",
					children: "Your satchel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "parchment-card rounded-lg divide-y divide-gold/20",
					children: detailed.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartLine, {
						product,
						qty,
						setQty,
						remove
					}, product.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: clear,
					className: "mt-4 text-sm text-muted-foreground hover:text-ember",
					children: "Clear satchel"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "parchment-card rounded-lg p-6 h-fit",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-forest mb-4",
					children: "Summary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", subtotal.toFixed(2)] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` })]
						}),
						subtotal < 50 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Free shipping on orders over $50."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-gold/30 pt-3 flex justify-between font-display text-lg text-forest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", total.toFixed(2)] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "mt-6 w-full rounded-md bg-forest px-5 py-3 font-semibold text-parchment hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-70 rune-glow",
					onClick: checkout,
					disabled: checkoutState === "loading",
					children: checkoutState === "loading" ? "Opening Stripe..." : "Proceed to checkout"
				}),
				checkoutMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-xs text-ember",
					role: "status",
					children: checkoutMessage
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signin",
					search: { redirectTo: "/cart" },
					className: "mt-3 block text-center text-sm text-forest hover:text-ember",
					children: "Sign in to save your satchel"
				})
			]
		})]
	});
}
function CartLine({ product, qty, setQty, remove }) {
	const { image, onImageError } = useProductImage(product);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: "h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: product.name,
					onError: onImageError,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "font-display text-lg text-forest hover:text-ember leading-tight",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-muted-foreground",
						children: [
							"$",
							product.price,
							" each"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center border border-gold/40 rounded-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty(product.slug, qty - 1),
									className: "p-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-8 text-center text-sm",
									children: qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty(product.slug, qty + 1),
									className: "p-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => remove(product.slug),
							className: "text-sm text-ember/80 hover:text-ember inline-flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Remove"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-display text-lg text-forest",
				children: ["$", (product.price * qty).toFixed(2)]
			})
		]
	});
}
//#endregion
export { CartPage as component };
