import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Gem, P as Copy, S as LogOut, W as Sparkles, f as ShieldCheck, l as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as useSession, t as refreshSession } from "./session-1jcq4G_V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-BJ04eF1z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccountPage() {
	const session = useSession();
	const [account, setAccount] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!session?.authenticated) return;
		fetch("/api/account").then((response) => response.ok ? response.json() : null).then((data) => setAccount(data)).catch(() => setAccount(null));
	}, [session?.authenticated]);
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "parchment-card rounded-lg p-10 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Reading your scroll…"
			})
		})
	});
	if (!session.authenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "parchment-card rounded-lg p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl text-forest",
					children: "Sign in required"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "Sign in with Google to view your account, purchases, and subscription."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signin",
					className: "mt-6 inline-flex items-center justify-center rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-parchment hover:bg-forest/90",
					children: "Sign in"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parchment-card rounded-xl p-8 md:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [
						session.picture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: session.picture,
							alt: "",
							className: "h-16 w-16 rounded-full border border-gold/60 object-cover",
							referrerPolicy: "no-referrer"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 place-items-center rounded-full bg-forest text-2xl font-bold text-parchment",
							children: (session.name || session.email || "?").slice(0, 1).toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-3xl text-forest flex items-center gap-2",
									children: [session.name || "Traveler", session.isPresident && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "h-6 w-6 text-gold",
										"aria-label": "President"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: session.email
								}),
								session.isPresident && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs uppercase tracking-[0.25em] text-gold",
									children: "President · Full Access"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
							action: "/api/auth/signout",
							method: "post",
							onSubmit: () => {
								setTimeout(() => refreshSession(), 250);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "inline-flex items-center gap-2 rounded-md border border-gold/50 px-3 py-2 text-sm font-medium text-forest hover:bg-parchment-dark/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign out"]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "parchment-card rounded-lg p-6 md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-xl text-forest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "h-5 w-5 text-gold" }), " Rupee referrals"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-4 md:grid-cols-[220px_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md border border-gold/30 bg-parchment/70 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Balance"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 font-display text-3xl text-forest",
										children: [account?.profile?.rupees ?? session.rupees ?? 0, " rupees"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Referral link"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "min-w-0 flex-1 rounded-md border border-gold/30 bg-parchment/70 px-3 py-2 text-sm text-forest",
										children: account?.referralLink ?? "Loading..."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => account?.referralLink && navigator.clipboard?.writeText(account.referralLink),
										className: "inline-flex items-center gap-2 rounded-md bg-forest px-3 py-2 text-sm font-semibold text-parchment",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), " Copy"]
									})]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "text-left text-xs uppercase tracking-widest text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-2",
												children: "Referred"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Event" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Rupees" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" })
										] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
										className: "divide-y divide-gold/20",
										children: [(account?.referrals ?? []).map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-3 text-forest",
												children: event.referred?.full_name || event.referred?.email || "New member"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "capitalize",
												children: event.event_type
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.rupees_awarded }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: new Date(event.created_at).toLocaleDateString() })
										] }, `${event.event_type}-${event.created_at}`)), account?.referrals?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 text-muted-foreground",
											colSpan: 4,
											children: "No referrals yet."
										}) })]
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "parchment-card rounded-lg p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-xl text-forest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), " Recent orders"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Your order history will appear here once your purchases are linked to this account."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "mt-4 inline-flex text-sm font-medium text-ember hover:underline",
								children: "Continue shopping →"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "parchment-card rounded-lg p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-xl text-forest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }), " Subscription"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "You are not currently subscribed. Subscribers unlock the Nightbloom vault and members-only PDFs."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/nightbloom",
								className: "mt-4 inline-flex text-sm font-medium text-ember hover:underline",
								children: "Visit the Nightbloom vault →"
							})
						]
					})
				]
			}),
			session.isPresident && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 parchment-card rounded-lg p-6 border-gold/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-xl text-forest flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-gold" }), " President's Tools"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "You have full access to manage the apothecary."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/office",
						className: "mt-4 inline-flex items-center gap-2 rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment hover:bg-forest/90",
						children: "Open the Office"
					})
				]
			})
		]
	});
}
//#endregion
export { AccountPage as component };
