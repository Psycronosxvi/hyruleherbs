import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { I as Briefcase, P as Clock, t as X, v as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-lCw2R5PX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var jobs = [
	{
		id: "head-herbalist",
		title: "Head Herbalist",
		department: "Apothecary",
		location: "Hyrule Town",
		type: "Full-time",
		description: "Lead our blending team in formulating new tinctures and teas, with deep knowledge of Western and Eastern herbal traditions.",
		responsibilities: [
			"Formulate small-batch tinctures and teas",
			"Mentor junior herbalists",
			"Source sustainable ingredients"
		]
	},
	{
		id: "warehouse-lead",
		title: "Warehouse & Fulfillment Lead",
		department: "Operations",
		location: "Hyrule Town",
		type: "Full-time",
		description: "Manage inbound stock, fulfillment workflows, and a small team. You keep the satchels of the realm packed and shipped.",
		responsibilities: [
			"Oversee daily fulfillment",
			"Manage inventory accuracy",
			"Lead a 4-person pack team"
		]
	},
	{
		id: "customer-care",
		title: "Customer Care Companion",
		department: "Support",
		location: "Remote",
		type: "Part-time",
		description: "Be the warm voice of the apothecary across email, chat, and the occasional handwritten note.",
		responsibilities: [
			"Reply within 24 hours",
			"Resolve order issues with grace",
			"Document common questions"
		]
	},
	{
		id: "ecom-designer",
		title: "Brand & Web Designer",
		department: "Marketing",
		location: "Remote",
		type: "Full-time",
		description: "Shape the visual storytelling of every label, page, and seasonal release.",
		responsibilities: [
			"Design seasonal campaigns",
			"Maintain brand system",
			"Collaborate with herbalists on packaging"
		]
	},
	{
		id: "field-forager",
		title: "Field Forager (Seasonal)",
		department: "Sourcing",
		location: "Faron / Akkala Region",
		type: "Seasonal",
		description: "Ethically wildcraft and document seasonal flora. Boots-on-the-ground role for the botanically obsessed.",
		responsibilities: [
			"Identify and harvest target species",
			"Maintain harvest logs",
			"Coordinate with the dry-room"
		]
	},
	{
		id: "office-manager",
		title: "Royal Office Manager",
		department: "Operations",
		location: "Hyrule Town",
		type: "Full-time",
		description: "Run the back-office: scheduling, hiring coordination, and keeping the entire guild moving in one direction.",
		responsibilities: [
			"Coordinate hiring pipelines",
			"Vendor management",
			"Support leadership team"
		]
	}
];
function Careers() {
	const [active, setActive] = (0, import_react.useState)(null);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark-page mx-auto max-w-5xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-gold mb-2",
						children: "— Now Recruiting —"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl text-forest",
						children: "Join the Guild"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-2xl mx-auto",
						children: "We're hiring across the apothecary, the warehouse, the office, and the field. Every role keeps the realm well-stocked."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-4 md:gap-6",
				children: jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card rounded-lg p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-gold mb-2",
							children: job.department
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-forest",
							children: job.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), job.location]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), job.type]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3 w-3" }), job.department]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-foreground/80 line-clamp-2",
							children: job.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setActive(job);
								setSubmitted(false);
							},
							className: "mt-4 inline-flex rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment hover:bg-forest/90",
							children: "Apply"
						})
					]
				}, job.id))
			}),
			active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-center bg-forest/40 backdrop-blur-sm p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card relative w-full max-w-lg rounded-lg p-7 md:p-9 max-h-[90vh] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(null),
						className: "absolute top-3 right-3 p-1.5 rounded-full hover:bg-parchment-dark/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					}), !submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-gold mb-1",
							children: active.department
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-forest",
							children: active.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: active.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xs uppercase tracking-widest text-gold",
							children: "What you'll do"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 space-y-1 text-sm",
							children: active.responsibilities.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "◆"
								}), r]
							}, r))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setSubmitted(true);
							},
							className: "mt-6 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									placeholder: "Full name",
									className: "w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									placeholder: "Email",
									className: "w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									placeholder: "Link to portfolio or resume",
									className: "w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									placeholder: "Why this role calls to you",
									rows: 4,
									className: "w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-gold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full rounded-md bg-forest px-4 py-2.5 font-semibold text-parchment hover:bg-forest/90",
									children: "Send application"
								})
							]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-forest",
								children: "Application received"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Thank you. We read every one and reply within two weeks."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActive(null),
								className: "mt-5 rounded-md bg-forest px-5 py-2 text-sm font-semibold text-parchment hover:bg-forest/90",
								children: "Close"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Careers as component };
