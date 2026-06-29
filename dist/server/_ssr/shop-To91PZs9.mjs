import { c as lazyRouteComponent, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-To91PZs9.js
var $$splitComponentImporter = () => import("./shop-soDlckee.mjs");
var search = objectType({
	category: stringType().optional(),
	q: stringType().optional()
});
var Route = createFileRoute("/shop")({
	validateSearch: search,
	head: () => ({ meta: [
		{ title: "Shop — Hyrule Apothecary" },
		{
			name: "description",
			content: "Browse our full apothecary: herbs, flowers, tinctures, teas, oils, and kits."
		},
		{
			property: "og:title",
			content: "Shop — Hyrule Apothecary"
		},
		{
			property: "og:description",
			content: "Browse our full apothecary: herbs, flowers, tinctures, teas, oils, and kits."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
