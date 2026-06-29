import { c as lazyRouteComponent, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signin-Ep_95Ryr.js
var $$splitComponentImporter = () => import("./signin-Dwhwtxec.mjs");
var search = objectType({
	auth: stringType().optional(),
	redirectTo: stringType().optional()
});
var Route = createFileRoute("/signin")({
	validateSearch: search,
	head: () => ({ meta: [{ title: "Sign in — Hyrule Apothecary" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
