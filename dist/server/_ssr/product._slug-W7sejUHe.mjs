import { c as lazyRouteComponent, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-W7sejUHe.js
var $$splitComponentImporter = () => import("./product._slug-DxOoM6mm.mjs");
var $$splitErrorComponentImporter = () => import("./product._slug-DZf_6Vgv.mjs");
var $$splitNotFoundComponentImporter = () => import("./product._slug-B7tEwtUI.mjs");
var Route = createFileRoute("/product/$slug")({
	head: () => ({ meta: [{ title: "Product — Hyrule Apothecary" }, {
		name: "description",
		content: "Shop live apothecary inventory from Hyrule Herb."
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
