import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link, f as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as Gift } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join-hIMhXwPY.js
var import_jsx_runtime = require_jsx_runtime();
function JoinPage() {
	const search = useSearch({ from: "/join" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid min-h-[60vh] max-w-2xl place-items-center px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "parchment-card rounded-lg p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "mx-auto h-10 w-10 text-gold" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-3xl text-forest",
					children: "Join the apothecary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: [
						"Your referral code",
						search.ref ? ` ${search.ref}` : "",
						" has been saved for this browser. Sign in with Google to create your account."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signin",
					search: { redirectTo: "/account" },
					className: "mt-6 inline-flex rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-parchment hover:bg-forest/90",
					children: "Continue with Google"
				})
			]
		})
	});
}
//#endregion
export { JoinPage as component };
