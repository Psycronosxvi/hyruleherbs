import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Search } from "../_libs/lucide-react.mjs";
import { t as categories } from "./ssr.mjs";
import { r as useLiveProducts } from "./cart-B4zVWcXf.mjs";
import { t as ProductCard } from "./product-card-1z--9-bK.mjs";
import { t as Route } from "./shop-To91PZs9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-soDlckee.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Shop() {
	const { category, q } = Route.useSearch();
	const navigate = Route.useNavigate();
	const [query, setQuery] = (0, import_react.useState)(q ?? "");
	const { products, loading } = useLiveProducts();
	const filtered = products.filter((p) => {
		if (category && p.category !== category) return false;
		if (q && !`${p.name} ${p.short} ${p.description}`.toLowerCase().includes(q.toLowerCase())) return false;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark-page mx-auto max-w-7xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-gold mb-2",
						children: "The Apothecary Shelves"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl text-gold",
						children: "Shop all goods"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-parchment/90 max-w-2xl",
						children: "Every item hand-blended in small batches. Filter by craft below, or search for a specific herb."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: {},
						className: `px-3 py-1.5 rounded-full text-sm border ${!category ? "bg-gold text-forest border-gold" : "border-gold/40 text-[#e8dcc8] hover:bg-forest/60"}`,
						children: "All"
					}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: { category: c.slug },
						className: `px-3 py-1.5 rounded-full text-sm border ${category === c.slug ? "bg-gold text-forest border-gold" : "border-gold/40 text-[#e8dcc8] hover:bg-forest/60"}`,
						children: c.name
					}, c.slug))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						navigate({ search: (s) => ({
							...s,
							q: query || void 0
						}) });
					},
					className: "relative w-full md:w-72",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search herbs, remedies…",
						className: "w-full rounded-md border border-gold/40 bg-parchment py-2 pl-9 pr-3 text-sm text-forest placeholder:text-forest/70 outline-none focus:border-gold"
					})]
				})]
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parchment-card rounded-lg p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-forest",
					children: "Stocking the shelves..."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-[#4a3728]",
					children: "Fetching the latest products from Supabase."
				})]
			}) : products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parchment-card rounded-lg p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-forest",
					children: "No goods are in stock right now."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-[#4a3728]",
					children: "Check back once the next batch is added."
				})]
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parchment-card rounded-lg p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-forest",
					children: "Nothing on this shelf yet."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-[#4a3728]",
					children: "Try a different craft or search term."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
				children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})
		]
	});
}
//#endregion
export { Shop as component };
