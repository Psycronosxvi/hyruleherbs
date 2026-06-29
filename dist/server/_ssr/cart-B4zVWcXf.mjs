import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as cat_teas_default, c as cat_herbs_default, i as cat_oils_default, n as products, o as cat_tinctures_default, r as cat_kits_default, s as cat_flowers_default } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-B4zVWcXf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useProductImage(product) {
	const [image, setImage] = (0, import_react.useState)(product.image || productFallbackImage(product));
	(0, import_react.useEffect)(() => {
		setImage(product.image || productFallbackImage(product));
	}, [product.image, product.slug]);
	return {
		image,
		onImageError: () => setImage(productFallbackImage(product))
	};
}
function productFallbackImage(product) {
	if (product.category === "flowers") return cat_flowers_default;
	if (product.category === "tinctures") return cat_tinctures_default;
	if (product.category === "teas") return cat_teas_default;
	if (product.category === "oils") return cat_oils_default;
	if (product.category === "kits" || product.category === "books" || product.type === "book") return cat_kits_default;
	return cat_herbs_default;
}
var cachedRows;
var inflight;
async function loadRows() {
	if (cachedRows) return cachedRows;
	if (inflight) return inflight;
	inflight = fetch("/api/products").then((response) => response.ok ? response.json() : { products: [] }).then((data) => {
		cachedRows = Array.isArray(data.products) ? data.products : [];
		return cachedRows;
	}).catch(() => []);
	return inflight;
}
function mergeProductOverride(product, row) {
	if (!row) return product;
	return {
		...product,
		name: row.name || product.name,
		category: row.category || product.category,
		type: row.type || product.type,
		price: typeof row.price_cents === "number" ? row.price_cents / 100 : product.price,
		short: row.short || product.short,
		description: row.description || product.description,
		image: row.image_url || product.image,
		uses: row.uses?.length ? row.uses : product.uses,
		ingredients: row.ingredients?.length ? row.ingredients : product.ingredients,
		badge: row.badge ?? product.badge,
		format: row.format ?? product.format
	};
}
function productFromRow(row) {
	if (!row.slug || !row.name || !row.category || !row.type) return void 0;
	const product = {
		slug: row.slug,
		name: row.name,
		category: row.category,
		type: row.type,
		price: typeof row.price_cents === "number" ? row.price_cents / 100 : 0,
		short: row.short || "",
		description: row.description || "",
		uses: row.uses ?? [],
		ingredients: row.ingredients ?? [],
		image: row.image_url || "",
		badge: row.badge ?? void 0,
		format: row.format ?? void 0
	};
	return {
		...product,
		image: product.image || productFallbackImage(product)
	};
}
function useLiveProducts() {
	const [rows, setRows] = (0, import_react.useState)(cachedRows ?? []);
	const [loading, setLoading] = (0, import_react.useState)(!cachedRows);
	(0, import_react.useEffect)(() => {
		let active = true;
		setLoading(true);
		loadRows().then((next) => {
			if (!active) return;
			setRows(next);
			setLoading(false);
		});
		return () => {
			active = false;
		};
	}, []);
	const visibleRows = rows.filter((row) => row.status !== "archived" && row.status !== "draft");
	const hiddenSlugs = new Set(rows.filter((row) => row.status === "archived" || row.status === "draft").map((row) => row.slug));
	const rowBySlug = new Map(visibleRows.map((row) => [row.slug, row]));
	const staticSlugs = new Set(products.map((product) => product.slug));
	const merged = products.filter((product) => !hiddenSlugs.has(product.slug)).map((product) => mergeProductOverride(product, rowBySlug.get(product.slug)));
	const liveOnly = visibleRows.filter((row) => !staticSlugs.has(row.slug)).map(productFromRow).filter((product) => Boolean(product));
	return {
		products: [...merged, ...liveOnly],
		loading
	};
}
var Ctx = (0, import_react.createContext)(null);
var CART_KEY = "ha_cart_v1";
var WISH_KEY = "ha_wish_v1";
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const { products } = useLiveProducts();
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		if (ready) localStorage.setItem(CART_KEY, JSON.stringify(items));
	}, [items, ready]);
	(0, import_react.useEffect)(() => {
		if (ready) localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
	}, [wishlist, ready]);
	const add = (slug, qty = 1) => setItems((cur) => {
		if (cur.find((i) => i.slug === slug)) return cur.map((i) => i.slug === slug ? {
			...i,
			qty: i.qty + qty
		} : i);
		return [...cur, {
			slug,
			qty
		}];
	});
	const remove = (slug) => setItems((cur) => cur.filter((i) => i.slug !== slug));
	const setQty = (slug, qty) => setItems((cur) => qty <= 0 ? cur.filter((i) => i.slug !== slug) : cur.map((i) => i.slug === slug ? {
		...i,
		qty
	} : i));
	const clear = () => setItems([]);
	const detailed = items.map((i) => {
		const p = products.find((p) => p.slug === i.slug);
		return p ? {
			product: p,
			qty: i.qty
		} : null;
	}).filter(Boolean);
	const count = items.reduce((s, i) => s + i.qty, 0);
	const subtotal = detailed.reduce((s, d) => s + d.product.price * d.qty, 0);
	const toggleWish = (slug) => setWishlist((cur) => cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]);
	const isWished = (slug) => wishlist.includes(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
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
			isWished
		},
		children
	});
}
var useCart = () => {
	const v = (0, import_react.useContext)(Ctx);
	if (!v) throw new Error("useCart outside provider");
	return v;
};
//#endregion
export { useProductImage as i, useCart as n, useLiveProducts as r, CartProvider as t };
