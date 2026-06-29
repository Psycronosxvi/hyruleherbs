import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ArrowRight, C as Leaf, H as Sparkles, k as FlaskConical, l as Shield } from "../_libs/lucide-react.mjs";
import { t as categories } from "./ssr.mjs";
import { r as useLiveProducts } from "./cart-B4zVWcXf.mjs";
import { t as ProductCard } from "./product-card-1z--9-bK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CVCaunZ0.js
var import_jsx_runtime = require_jsx_runtime();
var hero_apothecary_default = "/assets/hero-apothecary-BOUIDkAR.jpg";
function Home() {
	const { products } = useLiveProducts();
	const featured = products.filter((p) => p.badge === "Bestseller").slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 px-4 py-12 lg:py-20 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ornament-divider mb-6 max-w-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.3em]",
								children: "Est. First Age"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-4xl md:text-5xl lg:text-6xl text-gold leading-tight",
							children: [
								"Potions, herbs & remedies",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-[#e8dcc8]",
									children: "from every corner of the realm"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg text-[#e8dcc8] max-w-xl",
							children: "A small-batch apothecary stocked with hundreds of dried herbs, wildflowers, hand-steeped tinctures, and ritual teas. Every batch hand-tied, every label hand-stamped."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								className: "inline-flex items-center gap-2 rounded-md bg-forest px-5 py-3 font-semibold text-parchment hover:bg-forest/90 rune-glow",
								children: ["Enter the shop ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "inline-flex items-center gap-2 rounded-md border border-gold/60 px-5 py-3 font-semibold text-[#e8dcc8] hover:bg-forest/60",
								children: "Read our lore"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid grid-cols-3 gap-4 max-w-md",
							children: [
								{
									icon: Leaf,
									label: "Wildcrafted"
								},
								{
									icon: FlaskConical,
									label: "Small batch"
								},
								{
									icon: Shield,
									label: "Lab tested"
								}
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-parchment/80",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-5 w-5 text-forest" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-xs uppercase tracking-widest text-[#e8dcc8]",
									children: b.label
								})]
							}, b.label))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-6 bg-gradient-to-br from-gold/30 to-transparent blur-3xl rounded-full",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative parchment-card rounded-lg overflow-hidden rune-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_apothecary_default,
								alt: "An alchemy table covered with potions, herbs, and a glowing rune scroll",
								width: 1536,
								height: 1024,
								className: "w-full h-auto"
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-gold mb-2",
						children: "The Shelves"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl text-gold",
						children: "Browse by craft"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						className: "hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#e8dcc8] hover:text-gold",
						children: ["See all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						search: { category: c.slug },
						className: "group parchment-card rounded-lg overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden bg-parchment-dark/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.image,
								alt: c.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-forest",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1 line-clamp-2",
								children: c.blurb
							})]
						})]
					}, c.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-gold mb-2",
						children: "From the cauldron"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl text-gold",
						children: "Bestsellers"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
					children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card rounded-lg p-8 md:p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto h-7 w-7 text-gold mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl md:text-3xl text-forest max-w-2xl mx-auto",
							children: "\"A good remedy is half plant, half patience, and a little courage.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-[#4a3728]",
							children: "— from the Apothecary's First Scroll"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
