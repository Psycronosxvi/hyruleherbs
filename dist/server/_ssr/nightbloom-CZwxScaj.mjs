import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Sparkles, L as BookOpen, j as Download, x as Lock } from "../_libs/lucide-react.mjs";
import { n as useSession } from "./session-1jcq4G_V.mjs";
import { t as nightbloom_default } from "./nightbloom-Dz7VB34I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nightbloom-CZwxScaj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Nightbloom() {
	const isMember = useSession()?.authenticated ?? false;
	const [pdfs, setPdfs] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let active = true;
		fetch("/api/nightbloom").then((response) => response.json()).then((data) => {
			if (active) setPdfs(Array.isArray(data.pdfs) ? data.pdfs : []);
		}).catch(() => {
			if (active) setPdfs([]);
		});
		return () => {
			active = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-gradient-to-b from-[oklch(0.16_0.03_155)] to-[oklch(0.10_0.02_155)] text-parchment",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-35",
					style: {
						backgroundImage: `url(${nightbloom_default})`,
						backgroundSize: "cover",
						backgroundPosition: "center"
					},
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-black/65",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-20 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 inline-flex items-center gap-2 rounded-sm border border-gold/50 bg-parchment/10 px-2 py-1 text-[11px] uppercase tracking-[0.22em] text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Owner-created library"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-5xl leading-tight text-gold md:text-6xl",
								children: "Night Bloom Library"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg text-parchment",
								children: "A private shelf for original guides, PDFs, recipes, research notes, and member releases created by the owner."
							}),
							!isMember && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/signin",
								className: "mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-[oklch(0.18_0.03_150)] hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }), " Sign in to unlock"]
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-6 w-6 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-gold",
					children: "Member PDFs"
				})]
			}), pdfs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-gold/30 bg-black/35 p-8 text-parchment",
				children: "No PDFs have been published yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: pdfs.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-lg border border-gold/30 bg-black/40 backdrop-blur-sm",
					children: [book.cover_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: book.cover_image_url,
						alt: "",
						className: "aspect-[16/9] w-full object-cover",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-gold",
								children: book.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-parchment",
								children: book.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-gold",
									children: book.price_cents ? `$${(book.price_cents / 100).toFixed(2)}` : "Member"
								}), isMember ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: book.pdf_url,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-md border border-gold/50 px-3 py-1.5 text-sm font-medium text-gold hover:bg-gold/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Open PDF"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-md border border-gold/50 px-3 py-1.5 text-sm font-medium text-gold opacity-70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Locked"]
								})]
							})
						]
					})]
				}, book.id))
			})]
		})]
	});
}
//#endregion
export { Nightbloom as component };
