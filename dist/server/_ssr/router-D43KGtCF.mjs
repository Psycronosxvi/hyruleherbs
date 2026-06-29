import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as lazyRouteComponent, d as Link, i as HeadContent, l as createFileRoute, o as createRouter, p as useRouter, r as Scripts, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Sparkles, O as Gem, _ as Menu, d as ShieldCheck, n as VolumeX, r as Volume2, s as ShoppingBasket, t as X } from "../_libs/lucide-react.mjs";
import { n as useSession } from "./session-1jcq4G_V.mjs";
import { n as useCart, t as CartProvider } from "./cart-B4zVWcXf.mjs";
import { t as nightbloom_default } from "./nightbloom-Dz7VB34I.mjs";
import { t as Route$11 } from "./product._slug-W7sejUHe.mjs";
import { t as Route$12 } from "./signin-Ep_95Ryr.mjs";
import { t as Route$13 } from "./shop-To91PZs9.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D43KGtCF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-VthvloAO.css";
function readBrandLogo() {
	if (typeof window === "undefined") return "";
	return localStorage.getItem("ha_brand_logo_url_v1") ?? "";
}
var logo_crest_default = "/assets/logo-crest-DsdeJ21C.jpg";
function BrandMark() {
	const [logo, setLogo] = (0, import_react.useState)(logo_crest_default);
	(0, import_react.useEffect)(() => {
		const sync = () => setLogo(readBrandLogo() || "/assets/logo-crest-DsdeJ21C.jpg");
		sync();
		window.addEventListener("ha-brand-assets-updated", sync);
		window.addEventListener("storage", sync);
		return () => {
			window.removeEventListener("ha-brand-assets-updated", sync);
			window.removeEventListener("storage", sync);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-gold/70 bg-black/30 rune-glow",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo,
			alt: "Hyrule Apothecary logo",
			className: "h-full w-full object-cover"
		})
	});
}
var nav = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/nightbloom",
		label: "Nightbloom"
	},
	{
		to: "/book-of-roots",
		label: "Book of Roots"
	},
	{
		to: "/oracle",
		label: "Oracle"
	},
	{
		to: "/about",
		label: "Our Lore"
	},
	{
		to: "/careers",
		label: "Join the Guild"
	}
];
function SiteHeader() {
	const { count } = useCart();
	const [open, setOpen] = (0, import_react.useState)(false);
	const session = useSession();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-gold/40 backdrop-blur-md bg-[oklch(0.14_0.03_155)]/85",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg md:text-xl tracking-wide text-gold",
							children: "Hyrule Apothecary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.3em] text-parchment/95",
							children: "Herbs · Remedies · Lore"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-6 text-sm font-medium",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-parchment/95 hover:text-gold transition-colors",
						activeProps: { className: "text-gold" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionPill, {}),
						session?.authenticated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/account",
							className: "hidden lg:inline-flex items-center gap-1 rounded-md border border-gold/50 px-2.5 py-1.5 text-sm font-semibold text-gold",
							title: "Rupee balance",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "h-4 w-4" }), session.rupees ?? 0]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cart",
							className: "relative inline-flex items-center gap-2 rounded-md border border-gold/50 bg-gradient-to-br from-gold/20 to-transparent px-3 py-2 text-parchment hover:rune-glow transition-shadow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBasket, { className: "h-5 w-5 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline text-sm font-medium text-parchment",
									children: "Satchel"
								}),
								count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-2 -right-2 grid h-5 min-w-5 place-items-center rounded-full bg-ember px-1 text-[11px] font-bold text-parchment",
									children: count
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "md:hidden p-2 text-parchment/95",
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "md:hidden border-t border-gold/30 bg-parchment/95 px-4 py-3 flex flex-col gap-1",
			children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: n.to,
				onClick: () => setOpen(false),
				className: "py-2 text-forest/95 hover:text-ember",
				activeProps: { className: "text-forest font-semibold" },
				children: n.label
			}, n.to)), session?.authenticated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/account",
					onClick: () => setOpen(false),
					className: "py-2 text-forest/95 hover:text-ember",
					children: "My Account"
				}),
				(session.isPresident || (session.officeTabs?.length ?? 0) > 0 || session.role === "marketing" || session.role === "it_coordinator" || session.role === "admin") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/office",
					onClick: () => setOpen(false),
					className: "py-2 text-forest/95 hover:text-ember",
					children: "President's Office"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/api/auth/signout",
					className: "py-2 text-forest/95 hover:text-ember",
					children: "Sign out"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/signin",
				onClick: () => setOpen(false),
				className: "py-2 text-forest/95 hover:text-ember",
				children: "Sign in"
			})]
		})]
	});
}
function SessionPill() {
	const session = useSession();
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:inline-block w-24 h-9 rounded-md bg-parchment-dark/30 animate-pulse" });
	if (!session.authenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/signin",
		className: "hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium text-forest hover:text-ember transition-colors",
		children: "Sign in"
	});
	const initial = (session.name || session.email || "?").trim().slice(0, 1).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/account",
		className: "hidden sm:inline-flex items-center gap-2 rounded-md border border-gold/50 bg-parchment px-2.5 py-1.5 text-sm font-medium text-forest hover:bg-parchment-dark/40",
		title: session.email ?? void 0,
		children: [
			session.picture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: session.picture,
				alt: "",
				className: "h-6 w-6 rounded-full border border-gold/40 object-cover",
				referrerPolicy: "no-referrer"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-6 w-6 place-items-center rounded-full bg-forest text-[11px] font-bold text-parchment",
				children: initial
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "max-w-[10ch] truncate",
				children: session.name?.split(" ")[0] || session.email?.split("@")[0]
			}),
			session.isPresident && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
				className: "h-3.5 w-3.5 text-gold",
				"aria-label": "President"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "h-3.5 w-3.5" }), session.rupees ?? 0]
			})
		]
	});
}
function NewsletterForm({ source = "footer" }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	async function subscribe(event) {
		event.preventDefault();
		setState("loading");
		setMessage("");
		try {
			const response = await fetch("/api/newsletter", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					email,
					source
				})
			});
			const data = await response.json().catch(() => ({}));
			if (!response.ok) throw new Error(data.message || "The list is resting. Try again in a moment.");
			setState("success");
			setEmail("");
			setMessage(data.message || "You are on the list.");
		} catch (error) {
			setState("error");
			setMessage(error instanceof Error ? error.message : "The list is resting. Try again in a moment.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: subscribe,
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "email",
				required: true,
				value: email,
				onChange: (event) => setEmail(event.target.value),
				placeholder: "you@realm.com",
				className: "min-w-0 flex-1 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm text-forest placeholder:text-forest/70 outline-none focus:border-gold"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: state === "loading",
				className: "rounded-md bg-forest px-3 py-2 text-sm font-medium text-parchment hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-70",
				children: state === "loading" ? "Joining" : "Join"
			})]
		}), message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `text-xs ${state === "error" ? "text-ember" : "text-forest"}`,
			role: "status",
			children: message
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-gold/40 bg-forest",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-gold",
						children: "Hyrule Apothecary"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[#e8dcc8] max-w-xs",
					children: "Herbs, flowers, and remedies gathered from every corner of the realm. Brewed with care since the first age."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-sm uppercase tracking-widest text-gold mb-3",
					children: "Shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "text-[#e8dcc8] hover:text-gold",
							children: "All goods"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: { category: "tinctures" },
							className: "text-[#e8dcc8] hover:text-gold",
							children: "Tinctures"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: { category: "teas" },
							className: "text-[#e8dcc8] hover:text-gold",
							children: "Teas"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: { category: "kits" },
							className: "text-[#e8dcc8] hover:text-gold",
							children: "Kits"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-sm uppercase tracking-widest text-gold mb-3",
					children: "The Guild"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "text-[#e8dcc8] hover:text-gold",
						children: "Our lore"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/careers",
						className: "text-[#e8dcc8] hover:text-gold",
						children: "Careers"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm uppercase tracking-widest text-gold mb-3",
						children: "Stay in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#e8dcc8] mb-3",
						children: "Receive new batches, ingredient notes, and PDF book releases."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, { source: "footer" })
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-gold/30 py-5 text-center text-xs text-[#c8bfa8]",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Hyrule Apothecary. In remembrance of Perry Hernandez, The Prime Minister of Limbo from Trinidad and Tobago. Fan-themed and original. Not affiliated with Nintendo."
			]
		})]
	});
}
var KEY = "ha_signup_dismissed_v1";
function SignupPopup() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (localStorage.getItem(KEY)) return;
		const t = setTimeout(() => setOpen(true), 8e3);
		const onLeave = (e) => {
			if (e.clientY < 10 && !localStorage.getItem(KEY)) setOpen(true);
		};
		document.addEventListener("mouseleave", onLeave);
		return () => {
			clearTimeout(t);
			document.removeEventListener("mouseleave", onLeave);
		};
	}, []);
	const dismiss = () => {
		localStorage.setItem(KEY, "1");
		setOpen(false);
	};
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-forest/40 backdrop-blur-sm p-4 animate-in fade-in duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "parchment-card relative w-full max-w-md rounded-lg p-7 md:p-9 animate-in zoom-in-95 duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: dismiss,
				"aria-label": "Close",
				className: "absolute top-3 right-3 p-1.5 rounded-full hover:bg-parchment-dark/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-gradient-to-br from-gold/40 to-transparent rune-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-7 w-7 text-forest" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl md:text-3xl text-forest mb-2",
						children: "Open Your Adventurer's Pouch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mb-1",
						children: "Create a free account to save your favorite herbs, track every order, and unlock first access to small-batch releases."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-gold mt-3 mb-5",
						children: "— a gift from the apothecary —"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/signin",
							onClick: dismiss,
							className: "flex-1 rounded-md bg-forest px-4 py-2.5 text-sm font-semibold text-parchment hover:bg-forest/90 transition-colors",
							children: "Create free account"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: dismiss,
							className: "flex-1 rounded-md border border-gold/50 bg-transparent px-4 py-2.5 text-sm text-forest hover:bg-parchment-dark/40",
							children: "Maybe later"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[11px] text-muted-foreground",
						children: "No spells, no spam. Unsubscribe any time."
					})
				]
			})]
		})
	});
}
function GlobalSoundtrack({ tracks, volume = .35 }) {
	const audioRef = (0, import_react.useRef)(null);
	const lastIndexRef = (0, import_react.useRef)(-1);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [started, setStarted] = (0, import_react.useState)(false);
	function pickRandomTrack() {
		if (tracks.length === 0) return null;
		if (tracks.length === 1) {
			lastIndexRef.current = 0;
			return tracks[0];
		}
		let idx = Math.floor(Math.random() * tracks.length);
		if (idx === lastIndexRef.current) idx = (idx + 1) % tracks.length;
		lastIndexRef.current = idx;
		return tracks[idx];
	}
	function playRandom() {
		const audio = audioRef.current;
		if (!audio) return;
		const track = pickRandomTrack();
		if (!track) return;
		audio.src = track.src;
		audio.play().then(() => setStarted(true)).catch(() => {});
	}
	(0, import_react.useEffect)(() => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.volume = volume;
		audio.loop = false;
		const onEnded = () => playRandom();
		audio.addEventListener("ended", onEnded);
		playRandom();
		return () => {
			audio.removeEventListener("ended", onEnded);
		};
	}, [volume]);
	(0, import_react.useEffect)(() => {
		if (started) return;
		const onFirstGesture = () => {
			const audio = audioRef.current;
			if (audio && audio.paused) if (!audio.src) playRandom();
			else audio.play().then(() => setStarted(true)).catch(() => void 0);
			else if (audio) setStarted(true);
			cleanup();
		};
		const cleanup = () => {
			window.removeEventListener("pointerdown", onFirstGesture);
			window.removeEventListener("keydown", onFirstGesture);
			window.removeEventListener("touchstart", onFirstGesture);
		};
		window.addEventListener("pointerdown", onFirstGesture);
		window.addEventListener("keydown", onFirstGesture);
		window.addEventListener("touchstart", onFirstGesture);
		return cleanup;
	}, [started]);
	function toggleMute() {
		const audio = audioRef.current;
		if (!audio) return;
		const next = !muted;
		audio.muted = next;
		setMuted(next);
		if (!next && audio.paused) if (!audio.src) playRandom();
		else audio.play().then(() => setStarted(true)).catch(() => void 0);
	}
	if (tracks.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
		ref: audioRef,
		preload: "auto",
		"aria-hidden": "true",
		style: { display: "none" }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggleMute,
		"aria-label": muted ? "Unmute soundtrack" : "Mute soundtrack",
		title: muted ? "Unmute soundtrack" : "Mute soundtrack",
		className: "fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-forest/90 text-gold shadow-lg backdrop-blur transition hover:bg-forest",
		children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" })
	})] });
}
var Herb_Moon_Caravan_default = "/assets/Herb%20Moon%20Caravan-DQCwYu2J.mp3";
var Herb_Moon_Caravan__1__default = "/assets/Herb%20Moon%20Caravan%20(1)-DEpzGz1I.mp3";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "parchment-card max-w-md rounded-lg p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-6xl text-forest",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-xl text-forest",
					children: "This path is off the map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you seek has wandered into the Lost Woods."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center justify-center rounded-md bg-forest px-4 py-2 text-sm font-medium text-parchment hover:bg-forest/90",
					children: "Return home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "parchment-card max-w-md rounded-lg p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl text-forest",
					children: "A spell misfired"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try once more, traveler."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-forest px-4 py-2 text-sm font-medium text-parchment hover:bg-forest/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-gold/50 px-4 py-2 text-sm font-medium text-forest hover:bg-parchment-dark/40",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Hyrule Apothecary — Herbs, Flowers & Natural Remedies" },
			{
				name: "description",
				content: "A Zelda-inspired apothecary stocked with herbs, dried flowers, tinctures, teas, and essential oils. Small-batch remedies brewed with care."
			},
			{
				property: "og:title",
				content: "Hyrule Apothecary — Herbs, Flowers & Natural Remedies"
			},
			{
				property: "og:description",
				content: "A Zelda-inspired apothecary stocked with herbs, dried flowers, tinctures, teas, and essential oils. Small-batch remedies brewed with care."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Hyrule Apothecary — Herbs, Flowers & Natural Remedies"
			},
			{
				name: "twitter:description",
				content: "A Zelda-inspired apothecary stocked with herbs, dried flowers, tinctures, teas, and essential oils. Small-batch remedies brewed with care."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a1c46ba9-d792-46bb-a52c-723aec63384b"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a1c46ba9-d792-46bb-a52c-723aec63384b"
			},
			{
				name: "description",
				content: "A small-batch apothecary stocked with hundreds of dried herbs, wildflowers, hand-steeped tinctures, and ritual teas. Every batch hand-tied, every label hand-sta"
			},
			{
				property: "og:description",
				content: "A small-batch apothecary stocked with hundreds of dried herbs, wildflowers, hand-steeped tinctures, and ritual teas. Every batch hand-tied, every label hand-sta"
			},
			{
				name: "twitter:description",
				content: "A small-batch apothecary stocked with hundreds of dried herbs, wildflowers, hand-steeped tinctures, and ritual teas. Every batch hand-tied, every label hand-sta"
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/73180511-3a27-4f5f-bc68-395532092369"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/73180511-3a27-4f5f-bc68-395532092369"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	const [announcement, setAnnouncement] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const url = new URL(window.location.href);
		const src = url.searchParams.get("src");
		const ref = url.searchParams.get("ref");
		if (src) fetch("/api/marketing/click", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ code: src })
		});
		if (ref) fetch("/api/referral/capture", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ code: ref })
		});
		fetch("/api/announcement").then((response) => response.json()).then((data) => setAnnouncement(typeof data.message === "string" ? data.message : "")).catch(() => setAnnouncement(""));
		fetch("/api/analytics/track", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				path: url.pathname,
				referrer: document.referrer || null,
				source: src || null
			})
		}).catch(() => void 0);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-screen flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					announcement && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-gold/40 bg-forest px-4 py-2 text-center text-sm font-semibold text-parchment",
						children: announcement
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignupPopup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalSoundtrack, { tracks: [{
				src: Herb_Moon_Caravan_default,
				label: "Herb Moon Caravan"
			}, {
				src: Herb_Moon_Caravan__1__default,
				label: "Herb Moon Caravan II"
			}] })
		] })
	});
}
var $$splitComponentImporter$9 = () => import("./oracle-DxmaDZNf.mjs");
var Route$9 = createFileRoute("/oracle")({
	head: () => ({ meta: [{ title: "The Oracle's Table — Hyrule Apothecary" }, {
		name: "description",
		content: "Draw three tarot cards and receive a mystical herbal reading from Madame Writz."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./office-BUP-JmHT.mjs");
var Route$8 = createFileRoute("/office")({
	head: () => ({ meta: [{ title: "Office · Hyrule Apothecary" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./nightbloom-CZwxScaj.mjs");
var Route$7 = createFileRoute("/nightbloom")({
	head: () => ({ meta: [
		{ title: "Night Bloom Library · Hyrule Apothecary" },
		{
			name: "description",
			content: "Owner-created PDFs, guides, and member library releases from Hyrule Apothecary."
		},
		{
			property: "og:title",
			content: "Night Bloom Library"
		},
		{
			property: "og:image",
			content: nightbloom_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./join-hIMhXwPY.mjs");
var Route$6 = createFileRoute("/join")({
	head: () => ({ meta: [{ title: "Join Hyrule Apothecary · Referral" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./cart-DQKk3ThE.mjs");
var Route$5 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Your Satchel — Hyrule Apothecary" }, {
		name: "description",
		content: "Review the items in your satchel."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./careers-lCw2R5PX.mjs");
var Route$4 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: "Join the Guild — Careers at Hyrule Apothecary" },
		{
			name: "description",
			content: "Open roles at Hyrule Apothecary: herbalists, fulfillment leads, designers, foragers, and more."
		},
		{
			property: "og:title",
			content: "Join the Guild — Hyrule Apothecary Careers"
		},
		{
			property: "og:description",
			content: "Open roles across our apothecary, warehouse, and creative teams."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./book-of-roots-ZTj5BSvQ.mjs");
var Route$3 = createFileRoute("/book-of-roots")({
	head: () => ({ meta: [{ title: "The Book of Roots — Hyrule Apothecary" }, {
		name: "description",
		content: "Explore herbs, roots, flowers, oils, resins, and bark across spiritual and healing traditions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./account-BJ04eF1z.mjs");
var Route$2 = createFileRoute("/account")({
	head: () => ({ meta: [{ title: "My Account · Hyrule Apothecary" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-kyxXR9IK.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Our Lore — Hyrule Apothecary" },
		{
			name: "description",
			content: "The story of the Hyrule Apothecary — a small-batch herbal house rooted in old craft and quiet rituals."
		},
		{
			property: "og:title",
			content: "Our Lore — Hyrule Apothecary"
		},
		{
			property: "og:description",
			content: "Small-batch herbal house rooted in old craft and quiet rituals."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-CVCaunZ0.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Hyrule Apothecary — Herbs, Flowers & Natural Remedies" },
		{
			name: "description",
			content: "A Zelda-inspired apothecary stocked with small-batch herbs, dried flowers, tinctures, teas, and essential oils."
		},
		{
			property: "og:title",
			content: "Hyrule Apothecary — Herbs & Natural Remedies"
		},
		{
			property: "og:description",
			content: "Small-batch remedies brewed with care from every corner of the realm."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SigninRoute = Route$12.update({
	id: "/signin",
	path: "/signin",
	getParentRoute: () => Route$10
});
var ShopRoute = Route$13.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$10
});
var OracleRoute = Route$9.update({
	id: "/oracle",
	path: "/oracle",
	getParentRoute: () => Route$10
});
var OfficeRoute = Route$8.update({
	id: "/office",
	path: "/office",
	getParentRoute: () => Route$10
});
var NightbloomRoute = Route$7.update({
	id: "/nightbloom",
	path: "/nightbloom",
	getParentRoute: () => Route$10
});
var JoinRoute = Route$6.update({
	id: "/join",
	path: "/join",
	getParentRoute: () => Route$10
});
var CartRoute = Route$5.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$10
});
var CareersRoute = Route$4.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$10
});
var BookOfRootsRoute = Route$3.update({
	id: "/book-of-roots",
	path: "/book-of-roots",
	getParentRoute: () => Route$10
});
var AccountRoute = Route$2.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	AboutRoute,
	AccountRoute,
	BookOfRootsRoute,
	CareersRoute,
	CartRoute,
	JoinRoute,
	NightbloomRoute,
	OfficeRoute,
	OracleRoute,
	ShopRoute,
	SigninRoute,
	ProductSlugRoute: Route$11.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
