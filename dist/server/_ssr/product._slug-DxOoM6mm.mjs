import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Leaf, E as Heart, g as Minus, m as Plus, s as ShoppingBasket } from "../_libs/lucide-react.mjs";
import { a as cat_teas_default, c as cat_herbs_default, i as cat_oils_default, o as cat_tinctures_default, r as cat_kits_default, s as cat_flowers_default } from "./ssr.mjs";
import { i as useProductImage, n as useCart, r as useLiveProducts } from "./cart-B4zVWcXf.mjs";
import { t as Route } from "./product._slug-W7sejUHe.mjs";
import { t as ProductCard } from "./product-card-1z--9-bK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-DxOoM6mm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const { products, loading } = useLiveProducts();
	const product = products.find((item) => item.slug === slug);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dark-page mx-auto max-w-2xl px-4 py-20 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl text-gold",
			children: "Loading remedy..."
		})
	});
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark-page mx-auto max-w-2xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl text-gold",
			children: "Remedy not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "mt-4 inline-block text-[#c8bfa8] underline hover:text-gold",
			children: "Back to the shop"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetail, {
		product,
		products
	});
}
function ProductDetail({ product, products }) {
	const { add, toggleWish, isWished } = useCart();
	const [qty, setQty] = (0, import_react.useState)(1);
	const wished = isWished(product.slug);
	const { image, onImageError } = useProductImage(product);
	const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark-page mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "text-sm text-[#c8bfa8] hover:text-gold",
				children: "← Back to shop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid md:grid-cols-2 gap-8 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "parchment-card rounded-lg overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: product.name,
						onError: onImageError,
						className: "w-full h-auto aspect-square object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-wrap gap-2",
						children: [product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-sm border border-gold/60 bg-parchment/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-forest",
							children: product.badge
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-sm border border-gold/40 bg-parchment/70 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground",
							children: product.format ?? product.type
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl md:text-4xl text-gold leading-tight",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[#e8dcc8]",
						children: product.short
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 font-display text-3xl text-[#e8dcc8]",
						children: ["$", product.price]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center border border-gold/40 rounded-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										className: "p-2 hover:bg-parchment-dark/40",
										"aria-label": "Decrease",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-10 text-center text-sm font-medium text-[#e8dcc8]",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setQty((q) => q + 1),
										className: "p-2 hover:bg-parchment-dark/40",
										"aria-label": "Increase",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => add(product.slug, qty),
								className: "inline-flex items-center gap-2 rounded-md bg-forest px-5 py-2.5 font-semibold text-parchment hover:bg-forest/90 rune-glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBasket, { className: "h-4 w-4" }), " Add to satchel"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleWish(product.slug),
								"aria-label": "Save",
								className: "grid h-11 w-11 place-items-center rounded-md border border-gold/40 hover:bg-parchment-dark/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-5 w-5 ${wished ? "fill-ember text-ember" : "text-[#e8dcc8]"}` })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-lg text-gold mb-2 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 text-gold" }), " Description"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#e8dcc8] leading-relaxed",
								children: product.description
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs uppercase tracking-widest text-gold mb-2",
									children: "Common uses"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1 text-sm text-[#e8dcc8]",
									children: product.uses.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold",
											children: "◆"
										}), u]
									}, u))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs uppercase tracking-widest text-gold mb-2",
									children: "Ingredients"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-3 text-[#e8dcc8]",
									children: product.ingredients.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: ingredientImageUrlFromName(i),
											alt: i,
											className: "h-10 w-10 flex-none rounded-md border border-gold/30 bg-parchment/60 object-cover",
											onError: (e) => {
												e.currentTarget.src = productIngredientFallbackImage(product.category);
											}
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "min-w-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-gold",
													children: "◆"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-[#e8dcc8]",
													children: i
												})]
											})
										})]
									}, i))
								})] })]
							}),
							product.proofNotes && product.proofNotes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs uppercase tracking-widest text-gold mb-2",
								children: "Proof notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1 text-sm text-[#e8dcc8]",
								children: product.proofNotes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "◆"
									}), note]
								}, note))
							})] })
						]
					})
				] })]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-gold mb-6",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			})
		]
	});
}
function kebabCase(input) {
	return input.trim().toLowerCase().replace(/['"]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/(^-|-$)/g, "");
}
function ingredientImageUrlFromName(name) {
	return `/images/ingredients/${kebabCase(name)}.jpg`;
}
function productIngredientFallbackImage(category) {
	switch (category) {
		case "herbs": return cat_herbs_default;
		case "flowers": return cat_flowers_default;
		case "tinctures": return cat_tinctures_default;
		case "teas": return cat_teas_default;
		case "oils": return cat_oils_default;
		case "kits": return cat_kits_default;
		case "books": return cat_kits_default;
		default: return cat_herbs_default;
	}
}
//#endregion
export { ProductPage as component };
