import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-kyxXR9IK.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark-page mx-auto max-w-3xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto h-7 w-7 text-gold mb-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-gold mb-2",
						children: "The Apothecary's Tale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl text-forest",
						children: "A small house, a long road"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parchment-card rounded-lg p-8 md:p-12 space-y-5 text-foreground/85 leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hyrule Apothecary began the way most quiet things do — with a cluttered kitchen table, a wall of jars, and a stubborn belief that the old remedies still know things the new ones have forgotten." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are foragers, blenders, and stewards. We gather where we are welcome, buy from farms we know by first name, and tincture in batches small enough to remember every jar. Our shelves carry hundreds of herbs, flowers, oils, and elixirs — each tied to a season, a place, a hand that grew it." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Zelda theme is our love letter. Like any good adventurer, we believe in pockets full of useful things: a tonic for the long road, a leaf for the sleepless night, a small bottle of courage tucked away for when it's needed." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl text-forest text-center pt-4",
						children: "\"Half plant, half patience, a little courage.\""
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "inline-flex rounded-md bg-forest px-6 py-3 font-semibold text-parchment hover:bg-forest/90",
					children: "Visit the shop"
				})
			})
		]
	});
}
//#endregion
export { About as component };
