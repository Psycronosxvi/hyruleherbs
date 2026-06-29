import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as Heart, h as Plus } from "../_libs/lucide-react.mjs";
import { i as useProductImage, n as useCart } from "./cart-B4zVWcXf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-1z--9-bK.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { add, toggleWish, isWished } = useCart();
	const wished = isWished(product.slug);
	const { image, onImageError } = useProductImage(product);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group parchment-card rounded-lg overflow-hidden flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$slug",
			params: { slug: product.slug },
			className: "relative block aspect-square overflow-hidden bg-parchment-dark/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: product.name,
					loading: "lazy",
					onError: onImageError,
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				}),
				product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 rounded-sm border border-gold/60 bg-parchment/95 px-2 py-0.5 text-[10px] uppercase tracking-widest text-forest",
					children: product.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (e) => {
						e.preventDefault();
						toggleWish(product.slug);
					},
					"aria-label": "Save to satchel",
					className: "absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-parchment/90 border border-gold/40 hover:bg-parchment",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${wished ? "fill-ember text-ember" : "text-forest"}` })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 flex-1 flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					className: "font-display text-lg text-forest leading-tight hover:text-ember",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1 line-clamp-2 flex-1",
					children: product.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg text-forest",
						children: ["$", product.price]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => add(product.slug),
						className: "inline-flex items-center gap-1 rounded-md bg-forest px-2.5 py-1.5 text-xs font-semibold text-parchment hover:bg-forest/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Add"]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
