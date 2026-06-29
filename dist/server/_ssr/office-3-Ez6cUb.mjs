import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Bell, D as History, E as KeyRound, F as Command, G as ChartColumn, M as FileText, R as Briefcase, U as Activity, V as Ban, a as UserCog, d as ShieldOff, f as ShieldCheck, g as Package, h as Plus, i as Users, l as ShoppingBag, t as X, v as Minus, w as Link2, z as BookOpen } from "../_libs/lucide-react.mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/office-3-Ez6cUb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabDefs = [
	{
		id: "dashboard",
		label: "Dashboard",
		icon: ShieldCheck
	},
	{
		id: "products",
		label: "Products",
		icon: Package
	},
	{
		id: "orders",
		label: "Orders",
		icon: ShoppingBag
	},
	{
		id: "marketing",
		label: "Marketing",
		icon: Link2
	},
	{
		id: "users",
		label: "Users",
		icon: Users
	},
	{
		id: "access",
		label: "Access",
		icon: KeyRound
	},
	{
		id: "announcements",
		label: "Announcements",
		icon: Bell
	},
	{
		id: "nightbloom",
		label: "Night Bloom",
		icon: BookOpen
	},
	{
		id: "command",
		label: "Command",
		icon: Command
	},
	{
		id: "audit",
		label: "Audit",
		icon: UserCog
	},
	{
		id: "revenue",
		label: "Revenue",
		icon: ChartColumn
	},
	{
		id: "book_of_roots",
		label: "Book of Roots",
		icon: BookOpen
	},
	{
		id: "analytics",
		label: "Analytics",
		icon: Activity
	},
	{
		id: "guild",
		label: "Guild",
		icon: Briefcase
	}
];
var officeTabOptions = tabDefs.map((tab) => tab.id);
function Office() {
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [message, setMessage] = (0, import_react.useState)("");
	const visibleTabs = tabDefs.filter((tab) => data?.allowedTabs.includes(tab.id));
	const [tab, setTab] = (0, import_react.useState)("dashboard");
	async function refresh() {
		setLoading(true);
		try {
			const response = await fetch("/api/office");
			const next = await response.json();
			if (!response.ok) throw new Error(next.message || "Office access unavailable.");
			setData(next);
			setTab((current) => next.allowedTabs.includes(current) ? current : next.allowedTabs[0] || "dashboard");
			setMessage("");
		} catch (error) {
			setData(null);
			setMessage(error instanceof Error ? error.message : "Office access unavailable.");
		} finally {
			setLoading(false);
		}
	}
	(0, import_react.useEffect)(() => {
		refresh();
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {
		title: "Opening office",
		body: "Loading your role and permissions."
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {
		title: "Office access required",
		body: message || "Sign in with an account that has office permissions.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/signin",
			search: { redirectTo: "/office" },
			className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
			children: "Sign in"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "office-console mx-auto max-w-7xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-6 rounded-lg border border-gold/40 bg-forest p-6 text-parchment shadow-scroll",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-gold",
					children: data.me.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl text-gold",
					children: "Office Console"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-parchment",
					children: ["Signed in as ", data.me.email]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[230px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "parchment-card h-fit rounded-lg p-2",
				children: visibleTabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setTab(item.id),
					className: `flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm ${tab === item.id ? "bg-gold text-forest" : "text-forest hover:bg-parchment-dark/40"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.label]
				}, item.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					tab === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, { data }),
					tab === "products" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Products, {
						products: data.products,
						refresh,
						setMessage
					}),
					tab === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Orders, {
						orders: data.orders,
						products: data.products
					}),
					tab === "marketing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marketing, {
						data,
						refresh,
						setMessage
					}),
					tab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersTab, {
						users: data.users,
						bannedIps: data.bannedIps,
						refresh,
						setMessage
					}),
					tab === "access" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessTab, {
						access: data.tabAccess,
						refresh,
						setMessage
					}),
					tab === "announcements" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Announcements, {
						data,
						refresh,
						setMessage
					}),
					tab === "nightbloom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NightbloomManager, {
						rows: data.nightbloomPdfs,
						refresh,
						setMessage
					}),
					tab === "book_of_roots" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOfRootsAdmin, {
						entries: data.bookOfRoots,
						products: data.products,
						refresh,
						setMessage
					}),
					tab === "command" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandWindow, { setMessage }),
					tab === "audit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Audit, {
						rows: data.auditLog,
						documents: data.auditDocuments,
						orders: data.orders,
						refresh,
						setMessage
					}),
					tab === "revenue" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Revenue, { orders: data.orders }),
					tab === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analytics, { analytics: data.analytics }),
					tab === "guild" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guild, {
						applications: data.guildApplications,
						refresh,
						setMessage
					}),
					message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md border border-gold/40 bg-forest px-4 py-3 text-sm text-parchment",
						children: message
					})
				]
			})]
		})]
	});
}
function Gate({ title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid min-h-[60vh] max-w-lg place-items-center px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "parchment-card rounded-lg p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "mx-auto h-8 w-8 text-gold" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-3xl text-forest",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: body
				}),
				action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: action
				})
			]
		})
	});
}
function Dashboard({ data }) {
	const revenue = data.orders.reduce((sum, order) => sum + order.total_cents, 0) / 100;
	const manual = data.orders.filter((order) => order.fulfillment_status !== "sent_to_cj").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 md:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
				label: "Revenue",
				value: `$${revenue.toFixed(2)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
				label: "Orders",
				value: String(data.orders.length)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
				label: "Manual fulfillment",
				value: String(manual)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
				label: "Marketing links",
				value: String(data.marketingLinks.length)
			})
		]
	});
}
function Products({ products, refresh, setMessage }) {
	const PAGE = 8;
	const [query, setQuery] = (0, import_react.useState)("");
	const [visible, setVisible] = (0, import_react.useState)(PAGE);
	const sentinelRef = (0, import_react.useRef)(null);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return products;
		return products.filter((product) => product.name.toLowerCase().includes(q) || product.slug.toLowerCase().includes(q) || product.category.toLowerCase().includes(q));
	}, [products, query]);
	(0, import_react.useEffect)(() => {
		setVisible(PAGE);
	}, [query]);
	(0, import_react.useEffect)(() => {
		const node = sentinelRef.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) setVisible((current) => Math.min(current + PAGE, filtered.length));
		}, { rootMargin: "320px" });
		observer.observe(node);
		return () => observer.disconnect();
	}, [filtered.length]);
	const shown = filtered.slice(0, visible);
	async function save(product, form) {
		const formData = new FormData(form);
		const response = await fetch("/api/office/product", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				slug: product.slug,
				name: formData.get("name"),
				short: formData.get("short"),
				description: formData.get("description"),
				category: formData.get("category"),
				type: formData.get("type"),
				price: formData.get("price"),
				image_url: formData.get("image_url"),
				badge: formData.get("badge"),
				format: formData.get("format"),
				status: formData.get("status"),
				uses: formData.get("uses"),
				ingredients: formData.get("ingredients"),
				cj_product_id: formData.get("cj_product_id"),
				cj_variant_id: formData.get("cj_variant_id")
			})
		});
		setMessage((await response.json().catch(() => ({}))).message || (response.ok ? "Saved." : "Could not save product."));
		await refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Products",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "Search products by name, slug, or category",
				className: "min-w-0 flex-1 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: [
					"Showing ",
					Math.min(shown.length, filtered.length),
					" of ",
					filtered.length
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-h-[70vh] space-y-3 overflow-y-auto pr-1",
			children: [
				shown.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: (event) => {
						event.preventDefault();
						save(product, event.currentTarget);
					},
					className: "rounded-md border border-gold/25 bg-parchment/70 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-[160px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden rounded-md border border-gold/30 bg-parchment-dark/40",
							children: product.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image_url,
								alt: "",
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-full place-items-center px-3 text-center text-xs text-muted-foreground",
								children: "No custom image"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs text-muted-foreground",
							children: product.slug
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										defaultValue: product.name,
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Price", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "price",
										defaultValue: (product.price_cents / 100).toFixed(2),
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Category", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "category",
										defaultValue: product.category,
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Type", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										name: "type",
										defaultValue: product.type,
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest",
										children: [
											"ingredient",
											"blend",
											"kit",
											"book"
										].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: type }, type))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
									children: ["Product image URL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "image_url",
										defaultValue: product.image_url ?? "",
										placeholder: "https://...",
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
									children: ["Short description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "short",
										defaultValue: product.short,
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
									children: ["Full description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "description",
										defaultValue: product.description,
										className: "mt-1 h-24 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Uses", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "uses",
										defaultValue: (product.uses ?? []).join("\n"),
										className: "mt-1 h-24 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Ingredients", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "ingredients",
										defaultValue: (product.ingredients ?? []).join("\n"),
										className: "mt-1 h-24 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Badge", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "badge",
										defaultValue: product.badge ?? "",
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Format", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "format",
										defaultValue: product.format ?? "",
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["CJ Product ID", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "cj_product_id",
										defaultValue: product.cj_product_id ?? "",
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["CJ Variant ID", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "cj_variant_id",
										defaultValue: product.cj_variant_id ?? "",
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-forest",
									children: ["Status", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										name: "status",
										defaultValue: product.status,
										className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest",
										children: [
											"active",
											"draft",
											"archived"
										].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: status }, status))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-end justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
										children: "Save product"
									})
								})
							]
						})]
					})
				}, product.slug)),
				filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-md border border-gold/25 bg-parchment/70 p-4 text-sm text-muted-foreground",
					children: "No products match your search."
				}),
				shown.length < filtered.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: sentinelRef,
					className: "py-4 text-center text-xs uppercase tracking-widest text-muted-foreground",
					children: "Loading more products..."
				})
			]
		})]
	});
}
function Orders({ orders, products }) {
	const cjReady = new Map(products.map((product) => [product.slug, Boolean(product.cj_product_id && product.cj_variant_id)]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Orders",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-left text-xs uppercase tracking-widest text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2",
							children: "Order"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Customer" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Total" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Fulfillment Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-gold/20",
					children: orders.map((order) => {
						const fulfillment = order.order_items?.some((item) => !cjReady.get(item.product_slug)) ? "Manual" : order.cj_order_id ? order.cj_order_id : order.fulfillment_status === "sent_to_cj" ? "Sent to CJ" : "Manual";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-3 font-medium text-forest",
								children: ["#", order.id]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: order.user_email || "Guest" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: ["$", (order.total_cents / 100).toFixed(2)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: order.status }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-forest px-2 py-0.5 text-xs text-parchment",
								children: fulfillment
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: new Date(order.created_at).toLocaleDateString() })
						] }, order.id);
					})
				})]
			})
		})
	});
}
var guildStatuses = [
	"new",
	"reviewing",
	"contacted",
	"archived"
];
function Guild({ applications, refresh, setMessage }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	const counts = (0, import_react.useMemo)(() => {
		const map = { all: applications.length };
		for (const status of guildStatuses) map[status] = 0;
		for (const app of applications) map[app.status] = (map[app.status] ?? 0) + 1;
		return map;
	}, [applications]);
	const shown = (0, import_react.useMemo)(() => filter === "all" ? applications : applications.filter((app) => app.status === filter), [applications, filter]);
	async function updateStatus(id, status) {
		const response = await fetch("/api/office/guild", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				id,
				status
			})
		});
		setMessage((await response.json().catch(() => ({}))).message || (response.ok ? "Application updated." : "Could not update application."));
		await refresh();
	}
	async function remove(id) {
		if (!confirm("Remove this application permanently?")) return;
		const response = await fetch(`/api/office/guild?id=${id}`, { method: "DELETE" });
		setMessage((await response.json().catch(() => ({}))).message || (response.ok ? "Application removed." : "Could not remove application."));
		await refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Guild Applications",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex flex-wrap gap-2",
			children: ["all", ...guildStatuses].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setFilter(status),
				className: `rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${filter === status ? "bg-gold text-forest" : "bg-parchment-dark/40 text-forest hover:bg-parchment-dark/60"}`,
				children: [
					status,
					" (",
					counts[status] ?? 0,
					")"
				]
			}, status))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [shown.map((app) => {
				const open = expanded === app.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-gold/25 bg-parchment/70 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setExpanded(open ? null : app.id),
							className: "text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-forest",
									children: app.full_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [app.email, app.job_title ? ` · ${app.job_title}` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[11px] uppercase tracking-widest text-muted-foreground",
									children: new Date(app.created_at).toLocaleDateString()
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: app.status,
								onChange: (event) => void updateStatus(app.id, event.target.value),
								className: "rounded-md border border-gold/40 bg-parchment px-2 py-1 text-xs text-forest",
								children: guildStatuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: status,
									children: status
								}, status))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => void remove(app.id),
								className: "rounded-md border border-gold/40 p-1.5 text-forest hover:bg-parchment-dark/40",
								"aria-label": "Remove application",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						})]
					}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-2 border-t border-gold/20 pt-3 text-sm text-forest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-pre-wrap",
							children: app.message
						}), app.portfolio_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: app.portfolio_url,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1 text-sm font-semibold text-forest underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-4 w-4" }), " Portfolio"]
						})]
					})]
				}, app.id);
			}), shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md border border-gold/25 bg-parchment/70 p-4 text-sm text-muted-foreground",
				children: "No applications in this view."
			})]
		})]
	});
}
function Marketing({ data, refresh, setMessage }) {
	async function create(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		setMessage((await (await fetch("/api/office/marketing", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				employee_name: form.get("employee_name"),
				employee_email: form.get("employee_email")
			})
		})).json().catch(() => ({}))).message || "Marketing link updated.");
		await refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Marketing Analytics",
		children: [data.me.isPresident && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: create,
			className: "mb-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "employee_name",
					required: true,
					placeholder: "Employee name",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "employee_email",
					type: "email",
					placeholder: "Employee email (optional)",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
					children: "Generate"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
			headers: [
				"Employee",
				"Link",
				"Clicks",
				"Conversions",
				"Rate",
				"Revenue"
			],
			children: data.marketingLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-3 font-medium text-forest",
					children: link.employee_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: ["https://hyruleherb.xyz?src=", link.link_code] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: link.clicks }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: link.conversions }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [link.clicks ? (link.conversions / link.clicks * 100).toFixed(1) : "0.0", "%"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: ["$", Number(link.revenue_generated || 0).toFixed(2)] })
			] }, link.id))
		})]
	});
}
function UsersTab({ users, bannedIps, refresh, setMessage }) {
	const [amounts, setAmounts] = (0, import_react.useState)({});
	const [manualIp, setManualIp] = (0, import_react.useState)("");
	const [manualReason, setManualReason] = (0, import_react.useState)("");
	const bannedSet = (0, import_react.useMemo)(() => new Set(bannedIps.map((row) => row.ip_address)), [bannedIps]);
	async function banIp(ip, action, reason) {
		const response = await fetch("/api/office/ban-ip", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				ip_address: ip,
				action,
				reason
			})
		});
		setMessage((await response.json().catch(() => ({}))).message || (response.ok ? "IP updated." : "Could not update IP."));
		await refresh();
	}
	const [allAmount, setAllAmount] = (0, import_react.useState)("");
	const [historyUser, setHistoryUser] = (0, import_react.useState)(null);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [historyLoading, setHistoryLoading] = (0, import_react.useState)(false);
	async function update(user, payload) {
		setMessage((await (await fetch("/api/office/user", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				id: user.id,
				...payload
			})
		})).json().catch(() => ({}))).message || "User updated.");
		await refresh();
	}
	async function adjustRupees(user, action) {
		const amount = Number(amounts[user.id] || 0);
		const response = await fetch("/api/office/rupees", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				id: user.id,
				action,
				amount
			})
		});
		setMessage((await response.json().catch(() => ({}))).message || (response.ok ? "Rupees updated." : "Could not update rupees."));
		await refresh();
	}
	async function giveAll(event) {
		event.preventDefault();
		const response = await fetch("/api/office/rupees", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				action: "all",
				amount: Number(allAmount || 0)
			})
		});
		setMessage((await response.json().catch(() => ({}))).message || (response.ok ? "Rupees awarded." : "Could not award rupees."));
		if (response.ok) setAllAmount("");
		await refresh();
	}
	async function openHistory(user) {
		setHistoryUser(user);
		setHistory([]);
		setHistoryLoading(true);
		try {
			const response = await fetch(`/api/office/rupee-history?id=${encodeURIComponent(user.id)}`);
			const result = await response.json().catch(() => ({}));
			if (!response.ok) throw new Error(result.message || "Could not load rupee history.");
			setHistory(Array.isArray(result.events) ? result.events : []);
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Could not load rupee history.");
		} finally {
			setHistoryLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "User Management",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: giveAll,
				className: "mb-4 flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-xs font-semibold uppercase tracking-widest text-forest",
					children: ["Give rupees to all", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: "1",
						step: "1",
						required: true,
						value: allAmount,
						onChange: (event) => setAllAmount(event.target.value),
						className: "mt-1 w-36 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
					children: "Give Rupees to All"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"User",
					"Role",
					"Rupees",
					"Status",
					"Last IP",
					"Actions"
				],
				children: users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium text-forest",
							children: user.full_name || user.email
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: user.email
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: user.role,
						onChange: (event) => void update(user, { role: event.target.value }),
						className: "rounded-md border border-gold/40 bg-parchment px-2 py-1 text-sm text-forest",
						children: [
							"user",
							"marketing",
							"it_coordinator",
							"admin"
						].map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: role }, role))
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-[260px] flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-12 font-semibold text-forest",
								children: user.rupees
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void adjustRupees(user, "subtract"),
								"aria-label": `Subtract rupees from ${user.email}`,
								className: "grid h-8 w-8 place-items-center rounded-md border border-gold/40 text-forest",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void adjustRupees(user, "add"),
								"aria-label": `Add rupees to ${user.email}`,
								className: "grid h-8 w-8 place-items-center rounded-md border border-gold/40 text-forest",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "0",
								step: "1",
								value: amounts[user.id] ?? "",
								onChange: (event) => setAmounts((current) => ({
									...current,
									[user.id]: event.target.value
								})),
								placeholder: "Amount",
								className: "w-24 rounded-md border border-gold/40 bg-parchment px-2 py-1.5 text-sm text-forest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => void adjustRupees(user, "set"),
								className: "rounded-md border border-gold/40 px-3 py-1.5 text-xs font-semibold text-forest",
								children: "Set"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void openHistory(user),
								className: "inline-flex items-center gap-1 rounded-md border border-gold/40 px-3 py-1.5 text-xs font-semibold text-forest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-3.5 w-3.5" }), "Rupee History"]
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: user.blocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-ember px-2 py-0.5 text-xs font-semibold text-parchment",
						children: "Blocked"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: user.active ? "text-forest" : "text-muted-foreground",
						children: user.active ? "Active" : "Inactive"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-xs text-muted-foreground",
						children: user.last_ip ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: user.last_ip }), bannedSet.has(user.last_ip) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-widest text-ember",
								children: "banned"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void banIp(user.last_ip, "ban", `Banned via user ${user.email}`),
								className: "inline-flex items-center gap-1 rounded-md border border-gold/40 px-2 py-1 text-[11px] font-semibold text-forest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "h-3 w-3" }), " Ban IP"]
							})]
						}) : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => void update(user, { active: !user.active }),
							className: "rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest",
							children: user.active ? "Deactivate" : "Activate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => void update(user, { blocked: !user.blocked }),
							className: `inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold ${user.blocked ? "border border-gold/40 text-forest" : "bg-ember text-parchment"}`,
							children: user.blocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldOff, { className: "h-3.5 w-3.5" }), " Unblock"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "h-3.5 w-3.5" }), " Block / Kick"] })
						})]
					}) })
				] }, user.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-md border border-gold/25 bg-parchment/70 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl text-forest",
						children: "Banned IP Addresses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Banned visitors are blocked from the site on their next page load."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex flex-wrap items-end gap-2",
						onSubmit: (event) => {
							event.preventDefault();
							if (!manualIp.trim()) return;
							banIp(manualIp.trim(), "ban", manualReason.trim() || void 0);
							setManualIp("");
							setManualReason("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: manualIp,
								onChange: (event) => setManualIp(event.target.value),
								placeholder: "123.45.67.89",
								className: "w-44 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: manualReason,
								onChange: (event) => setManualReason(event.target.value),
								placeholder: "Reason (optional)",
								className: "min-w-0 flex-1 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-1 rounded-md bg-ember px-4 py-2 text-sm font-semibold text-parchment",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "h-4 w-4" }), " Ban IP"]
							})
						]
					}),
					bannedIps.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
						headers: [
							"IP Address",
							"Reason",
							"Banned By",
							"Actions"
						],
						children: bannedIps.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "text-forest",
									children: row.ip_address
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-sm text-muted-foreground",
								children: row.reason || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-xs text-muted-foreground",
								children: row.created_by || "system"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => void banIp(row.ip_address, "unban"),
								className: "rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest",
								children: "Unban"
							}) })
						] }, row.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "No IP addresses are banned."
					})
				]
			}),
			historyUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-center bg-forest/70 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 border-b border-gold/25 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-forest",
							children: "Rupee History"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: historyUser.full_name || historyUser.email
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setHistoryUser(null),
							"aria-label": "Close rupee history",
							className: "grid h-9 w-9 place-items-center rounded-md border border-gold/40 text-forest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-[60vh] overflow-auto p-5",
						children: historyLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Loading rupee history..."
						}) : history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No rupee transactions yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
							headers: [
								"Date",
								"Type",
								"Rupees",
								"From",
								"To"
							],
							children: history.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3",
									children: new Date(event.created_at).toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "font-medium text-forest",
									children: event.event_type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.rupees_awarded }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.referrer?.full_name || event.referrer?.email || "system" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: event.referred?.full_name || event.referred?.email || "unknown" })
							] }, event.id))
						})
					})]
				})
			})
		]
	});
}
function AccessTab({ access, refresh, setMessage }) {
	async function submit(form, action) {
		const formData = new FormData(form);
		setMessage((await (await fetch("/api/office/access", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				user_email: formData.get("user_email"),
				tab_id: formData.get("tab_id"),
				action
			})
		})).json().catch(() => ({}))).message || "Access updated.");
		await refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Access Control",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mb-4 grid gap-3 md:grid-cols-[1fr_220px_auto_auto]",
			onSubmit: (event) => {
				event.preventDefault();
				submit(event.currentTarget, "grant");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "user_email",
					type: "email",
					required: true,
					placeholder: "user@email.com",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					name: "tab_id",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest",
					children: officeTabOptions.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: tab }, tab))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
					children: "Grant"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (event) => event.currentTarget.form && void submit(event.currentTarget.form, "revoke"),
					className: "rounded-md border border-gold/40 px-4 py-2 text-sm font-semibold text-forest",
					children: "Revoke"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
			headers: ["Email", "Tab"],
			children: access.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-3 text-forest",
				children: row.user_email
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.tab_id })] }, row.id))
		})]
	});
}
function Announcements({ data, refresh, setMessage }) {
	async function save(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		setMessage((await (await fetch("/api/office/announcement", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				message: form.get("message"),
				active: form.get("active") === "on",
				audience: form.get("audience") || "site"
			})
		})).json().catch(() => ({}))).message || "Announcement saved.");
		await refresh();
	}
	const audience = data.announcement.audience === "employees" ? "employees" : "site";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Site Announcements",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: save,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "message",
					defaultValue: data.announcement.message,
					placeholder: "Announcement message shown in the site banner",
					className: "h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest",
							children: "Audience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-2 text-sm text-forest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "audience",
								value: "site",
								defaultChecked: audience === "site",
								className: "mt-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: "Site-wide"
							}), " — visible to every visitor."] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-2 text-sm text-forest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "audience",
								value: "employees",
								defaultChecked: audience === "employees",
								className: "mt-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: "Employees only"
							}), " — visible only to users with office access."] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm text-forest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						name: "active",
						defaultChecked: data.announcement.active
					}), " Active"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
					children: "Save banner"
				})
			]
		})
	});
}
function NightbloomManager({ rows, refresh, setMessage }) {
	const [editing, setEditing] = (0, import_react.useState)(null);
	async function save(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		setMessage((await (await fetch("/api/office/nightbloom", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				id: editing?.id,
				title: form.get("title"),
				blurb: form.get("blurb"),
				pdf_url: form.get("pdf_url"),
				cover_image_url: form.get("cover_image_url"),
				price: form.get("price"),
				status: form.get("status"),
				sort_order: form.get("sort_order")
			})
		})).json().catch(() => ({}))).message || "Night Bloom PDF saved.");
		setEditing(null);
		event.currentTarget.reset();
		await refresh();
	}
	async function remove(id) {
		setMessage((await (await fetch(`/api/office/nightbloom/${id}`, { method: "DELETE" })).json().catch(() => ({}))).message || "Night Bloom PDF deleted.");
		await refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Night Bloom PDFs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: save,
			className: "mb-6 grid gap-3 rounded-md border border-gold/25 bg-parchment/70 p-4 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "title",
					defaultValue: editing?.title ?? "",
					required: true,
					placeholder: "PDF title",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
				}, `title-${editing?.id ?? "new"}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "price",
					defaultValue: editing ? (editing.price_cents / 100).toFixed(2) : "0",
					placeholder: "Price",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
				}, `price-${editing?.id ?? "new"}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "pdf_url",
					defaultValue: editing?.pdf_url ?? "",
					required: true,
					placeholder: "PDF URL",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest md:col-span-2"
				}, `url-${editing?.id ?? "new"}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "cover_image_url",
					defaultValue: editing?.cover_image_url ?? "",
					placeholder: "Cover image URL",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest md:col-span-2"
				}, `cover-${editing?.id ?? "new"}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "blurb",
					defaultValue: editing?.blurb ?? "",
					placeholder: "Description",
					className: "h-24 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest md:col-span-2"
				}, `blurb-${editing?.id ?? "new"}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					name: "status",
					defaultValue: editing?.status ?? "active",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest",
					children: [
						"active",
						"draft",
						"archived"
					].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: status }, status))
				}, `status-${editing?.id ?? "new"}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "sort_order",
					defaultValue: editing?.sort_order ?? 0,
					placeholder: "Sort order",
					className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
				}, `sort-${editing?.id ?? "new"}`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
						children: editing ? "Save changes" : "Add PDF"
					}), editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setEditing(null),
						className: "rounded-md border border-gold/40 px-4 py-2 text-sm font-semibold text-forest",
						children: "Cancel"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
			headers: [
				"Title",
				"URL",
				"Status",
				"Actions"
			],
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-3 font-medium text-forest",
					children: row.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: row.pdf_url }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.status }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "space-x-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setEditing(row),
						className: "rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest",
						children: "Edit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => void remove(row.id),
						className: "rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest",
						children: "Delete"
					})]
				})
			] }, row.id))
		})]
	});
}
function CommandWindow({ setMessage }) {
	const [command, setCommand] = (0, import_react.useState)("");
	const [history, setHistory] = (0, import_react.useState)([]);
	async function run(event) {
		event.preventDefault();
		const response = await fetch("/api/office/command", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ command })
		});
		const result = await response.json().catch(() => ({}));
		const line = `> ${command}\n${result.message || "No response."}`;
		setHistory((current) => [line, ...current].slice(0, 8));
		setMessage(result.message || (response.ok ? "Command complete." : "Command failed."));
		setCommand("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "President Command Window",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 rounded-md border border-gold/40 bg-forest p-4 text-sm text-parchment",
				children: [
					"Safe commands only. Type ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "rounded bg-parchment/20 px-1.5 py-0.5 font-mono text-gold",
						children: "help"
					}),
					" for the current command list."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: run,
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: command,
					onChange: (event) => setCommand(event.target.value),
					placeholder: "announcement set message=\"Shipping delay today\" active=true",
					className: "min-w-0 flex-1 rounded-md border border-gold/50 bg-parchment px-3 py-2 font-mono text-sm text-forest placeholder:text-forest/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-md bg-gold px-4 py-2 text-sm font-semibold text-forest",
					children: "Run"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-2 rounded-md border border-gold/30 bg-forest p-3",
				children: history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-1 py-2 font-mono text-xs text-parchment/70",
					children: "Command output will appear here."
				}) : history.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "whitespace-pre-wrap rounded-md bg-parchment/10 p-3 font-mono text-xs leading-relaxed text-parchment",
					children: line
				}, line))
			})
		]
	});
}
function Audit({ rows, documents, orders, refresh, setMessage }) {
	const paid = orders.filter((order) => order.status === "paid");
	const grossRevenue = orders.reduce((sum, order) => sum + order.total_cents, 0) / 100;
	const paidRevenue = paid.reduce((sum, order) => sum + order.total_cents, 0) / 100;
	const avgOrder = orders.length ? grossRevenue / orders.length : 0;
	const ytd = orders.filter((order) => new Date(order.created_at).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear()).reduce((sum, order) => sum + order.total_cents, 0) / 100;
	async function uploadDoc(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const response = await fetch("/api/office/audit-doc", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				title: data.get("title"),
				description: data.get("description"),
				file_url: data.get("file_url")
			})
		});
		setMessage((await response.json().catch(() => ({}))).message || (response.ok ? "Audit document uploaded." : "Could not upload document."));
		if (response.ok) form.reset();
		await refresh();
	}
	async function removeDoc(id) {
		setMessage((await (await fetch(`/api/office/audit-doc?id=${id}`, { method: "DELETE" })).json().catch(() => ({}))).message || "Audit document removed.");
		await refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Gross revenue",
						value: `$${grossRevenue.toFixed(2)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Confirmed (paid)",
						value: `$${paidRevenue.toFixed(2)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Revenue YTD",
						value: `$${ytd.toFixed(2)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Avg order value",
						value: `$${avgOrder.toFixed(2)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Audit Documents",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: uploadDoc,
					className: "mb-5 grid gap-3 rounded-md border border-gold/25 bg-parchment/70 p-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "title",
							required: true,
							placeholder: "Document title (e.g. Q3 Financial Statement)",
							className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "file_url",
							required: true,
							type: "url",
							placeholder: "PDF URL (https://...)",
							className: "rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "description",
							placeholder: "Description (optional)",
							className: "h-20 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest md:col-span-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-1 rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), " Upload document"]
							})
						})
					]
				}), documents.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Title",
						"Description",
						"Uploaded By",
						"Document",
						"Actions"
					],
					children: documents.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 font-medium text-forest",
							children: doc.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "text-sm text-muted-foreground",
							children: doc.description || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "text-xs text-muted-foreground",
							children: doc.uploaded_by || "system"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: doc.file_url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm font-semibold text-forest underline",
							children: "Open PDF"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => void removeDoc(doc.id),
							className: "rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest",
							children: "Delete"
						}) })
					] }, doc.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No audit documents uploaded yet."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Audit Log",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
					headers: [
						"Time",
						"User",
						"Action",
						"Details"
					],
					children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3",
							children: new Date(row.created_at).toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row.user_email || "system" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "font-medium text-forest",
							children: row.action_type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "text-xs text-muted-foreground",
							children: JSON.stringify(row.details)
						}) })
					] }, row.id))
				})
			})
		]
	});
}
function Revenue({ orders }) {
	const byDay = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		orders.forEach((order) => {
			const key = new Date(order.created_at).toISOString().slice(0, 10);
			map.set(key, (map.get(key) ?? 0) + order.total_cents / 100);
		});
		return [...map.entries()].map(([date, revenue]) => ({
			date,
			revenue
		})).slice(0, 14).reverse();
	}, [orders]);
	const total = orders.reduce((sum, order) => sum + order.total_cents, 0) / 100;
	const average = orders.length ? total / orders.length : 0;
	const productCounts = /* @__PURE__ */ new Map();
	orders.flatMap((order) => order.order_items ?? []).forEach((item) => productCounts.set(item.product_slug, (productCounts.get(item.product_slug) ?? 0) + item.quantity));
	const topProducts = [...productCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Total revenue",
						value: `$${total.toFixed(2)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Average order value",
						value: `$${average.toFixed(2)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Orders",
						value: String(orders.length)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Revenue by day",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: byDay,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { strokeDasharray: "3 3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, { dataKey: "date" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "revenue",
									fill: "#d4af37"
								})
							]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Top selling products",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm",
					children: topProducts.map(([slug, count]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between border-b border-gold/20 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-forest",
							children: slug
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: count })]
					}, slug))
				})
			})
		]
	});
}
function Panel({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "parchment-card rounded-lg p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-4 font-display text-xl text-forest",
			children: title
		}), children]
	});
}
function Metric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "parchment-card rounded-lg p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs uppercase tracking-widest text-[#4a3728]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 font-display text-2xl text-[#1a1a1a]",
			children: value
		})]
	});
}
function Analytics({ analytics }) {
	if (!analytics) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Network Analytics",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "No analytics data available yet."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Views (24h)",
						value: String(analytics.views24h)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Views (7d)",
						value: String(analytics.views7d)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Unique visitors (7d)",
						value: String(analytics.uniqueVisitors7d)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Total views",
						value: String(analytics.totalViews)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Traffic (last 7 days)",
				children: analytics.daily.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: analytics.daily,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { strokeDasharray: "3 3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, { dataKey: "date" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { allowDecimals: false }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "views",
									fill: "#d4af37"
								})
							]
						})
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No visits recorded in the last 7 days."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Top pages",
					children: analytics.topPages.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: analytics.topPages.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between border-b border-gold/20 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-forest",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-forest",
								children: row.count
							})]
						}, row.label))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No page data yet."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Traffic sources",
					children: analytics.topSources.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: analytics.topSources.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between border-b border-gold/20 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-forest",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-forest",
								children: row.count
							})]
						}, row.label))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No source data yet."
					})
				})]
			})
		]
	});
}
function Table({ headers, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "text-left text-xs uppercase tracking-widest text-[#1a2e1a]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "py-2 pr-4",
					children: header
				}, header)) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
				className: "divide-y divide-gold/20",
				children
			})]
		})
	});
}
function BookOfRootsAdmin({ entries, products, refresh, setMessage }) {
	const [editing, setEditing] = (0, import_react.useState)(null);
	Array.from(/* @__PURE__ */ new Set([
		"Wicca",
		"Native American",
		"Santeria",
		"Voodoo",
		"Islamic Tibb",
		"Hoodoo",
		"Folk Christianity",
		"Rastafari",
		"Folk Medicine",
		"Ayurveda",
		"Egyptian",
		"Indigenous South American",
		"Wicca",
		"Folk Medicine"
	]));
	Array.from(/* @__PURE__ */ new Set([
		"Sleep",
		"Protection",
		"Spiritual Growth",
		"Cleansing",
		"Love & Attraction",
		"Healing",
		"Curse Breaking",
		"Protection",
		"Spiritual Growth",
		"Fertility"
	]));
	const ingredientTypeOptions = [
		"Herbs",
		"Roots",
		"Flowers",
		"Oils",
		"Resins",
		"Bark"
	];
	async function save(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const body = {
			id: editing?.id,
			name: String(form.get("name") ?? "").trim(),
			traditions: String(form.get("traditions") ?? "").split(/\r?\n|,/).map((s) => s.trim()).filter(Boolean),
			purposes: String(form.get("purposes") ?? "").split(/\r?\n|,/).map((s) => s.trim()).filter(Boolean),
			ingredient_type: String(form.get("ingredient_type") ?? ""),
			product_slug: String(form.get("product_slug") ?? "").trim() || null,
			image_url: String(form.get("image_url") ?? "").trim() || null,
			description: String(form.get("description") ?? "").trim(),
			how_to_use: String(form.get("how_to_use") ?? "").trim()
		};
		const response = await fetch("/api/admin/book-of-roots", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body)
		});
		setMessage((await response.json().catch(() => ({}))).message || (response.ok ? "Saved." : "Could not save entry."));
		setEditing(null);
		event.currentTarget.reset();
		await refresh();
	}
	async function remove(id) {
		setMessage((await (await fetch(`/api/admin/book-of-roots/${id}`, { method: "DELETE" })).json().catch(() => ({}))).message || "Entry deleted.");
		await refresh();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Book of Roots Admin",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: save,
				className: "space-y-4 rounded-md border border-gold/25 bg-parchment/70 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
							children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								defaultValue: editing?.name ?? "",
								required: true,
								className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
							children: ["Image URL (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "image_url",
								defaultValue: editing?.image_url ?? "",
								className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest",
							children: ["Ingredient Type", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "ingredient_type",
								defaultValue: editing?.ingredient_type ?? "Herbs",
								className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest",
								children: ingredientTypeOptions.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t,
									children: t
								}, t))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest",
							children: ["Shop product (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "product_slug",
								defaultValue: editing?.product_slug ?? "",
								className: "mt-1 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "— none —"
								}), products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p.slug,
									children: p.name
								}, p.slug))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
							children: ["Traditions (comma/newline separated)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "traditions",
								defaultValue: (editing?.traditions ?? []).join("\n"),
								className: "mt-1 h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
							children: ["Purposes (comma/newline separated)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "purposes",
								defaultValue: (editing?.purposes ?? []).join("\n"),
								className: "mt-1 h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
							children: ["Description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "description",
								defaultValue: editing?.description ?? "",
								required: true,
								className: "mt-1 h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-forest md:col-span-2",
							children: ["How to Use", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "how_to_use",
								defaultValue: editing?.how_to_use ?? "",
								required: true,
								className: "mt-1 h-28 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
						children: editing ? "Save changes" : "Add entry"
					}), editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setEditing(null),
						className: "rounded-md border border-gold/40 px-4 py-2 text-sm font-semibold text-forest",
						children: "Cancel"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
				headers: [
					"Name",
					"Ingredient",
					"Traditions",
					"Purposes",
					"Actions"
				],
				children: entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium text-forest",
							children: entry.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: entry.ingredient_type }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-xs text-muted-foreground",
						children: entry.traditions.join(", ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "text-xs text-muted-foreground",
						children: entry.purposes.join(", ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "space-x-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEditing(entry),
							className: "rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest",
							children: "Edit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void remove(entry.id),
							className: "rounded-md border border-gold/40 px-3 py-1.5 text-xs text-forest",
							children: "Delete"
						})]
					})
				] }, entry.id))
			})]
		})
	});
}
//#endregion
export { Office as component };
