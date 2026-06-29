import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Sparkles, y as Mail } from "../_libs/lucide-react.mjs";
import { t as Route } from "./signin-Ep_95Ryr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signin-Dwhwtxec.js
var import_jsx_runtime = require_jsx_runtime();
function SignIn() {
	const { auth, redirectTo = "/" } = Route.useSearch();
	const notice = auth === "google-not-configured" ? "Google sign-in is temporarily unavailable. Please try again soon." : auth === "google-signed-in" ? "Google sign-in worked. Your session is active on this device." : auth === "google-callback-ready" ? "Google returned successfully. Please continue to your account." : auth === "google-state-mismatch" ? "Google sign-in could not be verified. Please try again." : auth === "google-token-failed" || auth === "google-profile-failed" ? "Google sign-in could not be completed. Please try again." : auth === "google-cancelled" ? "Google sign-in was cancelled." : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-md px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "parchment-card rounded-lg p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto h-7 w-7 text-gold" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-3xl text-forest",
					children: "Open your pouch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Save items, track orders, access first-batch releases, and unlock digital field guides."
				}),
				notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 rounded-md border border-gold/40 bg-parchment-dark/30 px-3 py-2 text-xs text-forest",
					children: notice
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `/api/auth/google?redirectTo=${encodeURIComponent(redirectTo)}`,
					className: "mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-gold/50 bg-parchment px-4 py-2.5 text-sm font-semibold text-forest hover:bg-parchment-dark/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "Continue with Google"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gold/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email backup" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gold/30" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						alert("Email and password accounts are not open yet. Please continue with Google.");
					},
					className: "space-y-3 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "Email",
							className: "w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							placeholder: "Password",
							className: "w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-full rounded-md bg-forest px-4 py-2.5 font-semibold text-parchment hover:bg-forest/90",
							children: "Create account"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: [
						"Already have an account?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/signin",
							className: "text-forest underline",
							children: "Sign in"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { SignIn as component };
