import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { W as Sparkles, _ as Moon, m as RotateCcw, s as Star } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/oracle-Bs-LQla_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var majorArcana = [
	{
		name: "The Fool",
		arcana: "Major",
		emoji: "🌄"
	},
	{
		name: "The Magician",
		arcana: "Major",
		emoji: "✨"
	},
	{
		name: "The High Priestess",
		arcana: "Major",
		emoji: "🌙"
	},
	{
		name: "The Empress",
		arcana: "Major",
		emoji: "🌿"
	},
	{
		name: "The Emperor",
		arcana: "Major",
		emoji: "🛡️"
	},
	{
		name: "The Hierophant",
		arcana: "Major",
		emoji: "📜"
	},
	{
		name: "The Lovers",
		arcana: "Major",
		emoji: "💞"
	},
	{
		name: "The Chariot",
		arcana: "Major",
		emoji: "🐎"
	},
	{
		name: "Strength",
		arcana: "Major",
		emoji: "🦁"
	},
	{
		name: "The Hermit",
		arcana: "Major",
		emoji: "🕯️"
	},
	{
		name: "Wheel of Fortune",
		arcana: "Major",
		emoji: "☸️"
	},
	{
		name: "Justice",
		arcana: "Major",
		emoji: "⚖️"
	},
	{
		name: "The Hanged Man",
		arcana: "Major",
		emoji: "🪢"
	},
	{
		name: "Death",
		arcana: "Major",
		emoji: "🦋"
	},
	{
		name: "Temperance",
		arcana: "Major",
		emoji: "🏺"
	},
	{
		name: "The Devil",
		arcana: "Major",
		emoji: "⛓️"
	},
	{
		name: "The Tower",
		arcana: "Major",
		emoji: "⚡"
	},
	{
		name: "The Star",
		arcana: "Major",
		emoji: "⭐"
	},
	{
		name: "The Moon",
		arcana: "Major",
		emoji: "🌕"
	},
	{
		name: "The Sun",
		arcana: "Major",
		emoji: "☀️"
	},
	{
		name: "Judgement",
		arcana: "Major",
		emoji: "📯"
	},
	{
		name: "The World",
		arcana: "Major",
		emoji: "🌎"
	}
];
var minorRanks = [
	"Ace",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
	"Page",
	"Knight",
	"Queen",
	"King"
];
var minorArcana = [
	{
		name: "Wands",
		emoji: "🔥"
	},
	{
		name: "Cups",
		emoji: "💧"
	},
	{
		name: "Swords",
		emoji: "🗡️"
	},
	{
		name: "Pentacles",
		emoji: "🌱"
	}
].flatMap((suit) => minorRanks.map((rank) => ({
	name: `${rank} of ${suit.name}`,
	arcana: "Minor",
	suit: suit.name,
	emoji: suit.emoji
})));
var tarotDeck = [...majorArcana, ...minorArcana];
function shuffleDeck(deck) {
	const shuffled = [...deck];
	for (let index = shuffled.length - 1; index > 0; index -= 1) {
		const swapIndex = Math.floor(Math.random() * (index + 1));
		[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
	}
	return shuffled;
}
var oracle_madame_writz_default = "/assets/oracle-madame-writz-BNf0LYQI.png";
var positions = [
	"The Past",
	"The Present",
	"The Path"
];
var suitTint = {
	Wands: "from-[oklch(0.30_0.10_55)] to-[oklch(0.16_0.05_50)]",
	Cups: "from-[oklch(0.30_0.08_220)] to-[oklch(0.15_0.05_215)]",
	Swords: "from-[oklch(0.32_0.04_260)] to-[oklch(0.16_0.03_260)]",
	Pentacles: "from-[oklch(0.30_0.09_150)] to-[oklch(0.15_0.05_150)]",
	Major: "from-[oklch(0.34_0.10_300)] to-[oklch(0.16_0.05_300)]"
};
function OraclePage() {
	const [question, setQuestion] = (0, import_react.useState)("");
	const [cards, setCards] = (0, import_react.useState)([]);
	const [reading, setReading] = (0, import_react.useState)("");
	const [herb, setHerb] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	async function drawCards() {
		const drawnCards = shuffleDeck(tarotDeck).slice(0, 3);
		setCards(drawnCards);
		setReading("");
		setHerb(null);
		setStatus("drawing");
		setMessage("Madame Writz is reading the leaves...");
		try {
			const response = await fetch("/api/oracle", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					question,
					cards: drawnCards
				})
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.message || "The oracle table went quiet.");
			setReading(data.reading || "");
			setHerb(data.herb || null);
			setStatus("idle");
			setMessage("");
		} catch (error) {
			setStatus("error");
			setMessage(error instanceof Error ? error.message : "The oracle table went quiet.");
		}
	}
	function reset() {
		setQuestion("");
		setCards([]);
		setReading("");
		setHerb(null);
		setStatus("idle");
		setMessage("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-gradient-to-b from-[oklch(0.17_0.03_200)] via-[oklch(0.13_0.03_220)] to-[oklch(0.09_0.02_240)] text-parchment",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: oracle_madame_writz_default,
					alt: "Madame Writz seated at her candlelit oracle table with a glowing crystal ball",
					className: "absolute inset-0 h-full w-full object-cover object-center opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.02_240)] via-[oklch(0.10_0.02_240)/0.7] to-transparent",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.02_240)] via-transparent to-transparent",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarField, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-gold backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3.5 w-3.5" }), "Madame Writz presides"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-5xl leading-[1.05] text-gold drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] md:text-7xl",
								children: "The Oracle's Table"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-pretty text-base leading-7 text-parchment/85 md:text-lg",
								children: "Step into the candlelit tent. Ask softly, draw three cards, and let the seer answer through story, symbol, and the healing herb the spirits favor for you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap items-center gap-4 text-sm text-parchment/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 text-gold" }), " 78-card deck"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-gold" }), " Three-card spread"]
								})]
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-fit rounded-2xl border border-gold/30 bg-black/30 p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-display text-lg text-gold",
							htmlFor: "oracle-question",
							children: "Whisper your question"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "oracle-question",
							value: question,
							onChange: (event) => setQuestion(event.target.value),
							rows: 5,
							placeholder: "Optional: What should I understand about this season of my life?",
							className: "mt-3 w-full rounded-lg border border-gold/30 bg-black/40 px-3 py-2 text-sm text-parchment outline-none transition focus:border-gold placeholder:text-parchment/40"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void drawCards(),
							disabled: status === "drawing",
							className: "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3.5 text-sm font-semibold text-[oklch(0.15_0.02_240)] transition hover:opacity-90 disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), status === "drawing" ? "Reading the leaves..." : "Draw Your Cards"]
						}),
						(cards.length > 0 || question) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: reset,
							className: "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold/40 px-4 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Start a New Reading"]
						}),
						message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-4 rounded-lg border px-3 py-2 text-sm ${status === "error" ? "border-ember/50 text-ember" : "border-gold/30 text-parchment/70"}`,
							role: "status",
							children: message
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-3",
						children: positions.map((position, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSlot, {
							position,
							card: cards[index],
							drawing: status === "drawing"
						}, position))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-gold/30 bg-black/30 p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-gold",
								children: "Madame Writz Reads"
							})]
						}), reading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 whitespace-pre-line text-sm leading-7 text-parchment/85",
							children: reading
						}), herb && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-5 py-2.5 text-sm font-semibold text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
								"Favored herb: ",
								herb
							]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-7 text-parchment/60",
							children: "The table is still. Draw your cards to invite the oracle's voice."
						})]
					})]
				})]
			})
		})]
	});
}
function CardSlot({ position, card, drawing }) {
	const tint = card ? suitTint[card.suit ?? "Major"] : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/80",
			children: position
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: `relative grid aspect-[2/3] w-full place-items-center overflow-hidden rounded-xl border text-center transition-all duration-500 ${card ? `border-gold/60 bg-gradient-to-b ${tint} shadow-[0_0_30px_rgba(212,175,55,0.25)]` : "border-gold/25 bg-black/40"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-2 rounded-lg border border-gold/30",
				"aria-hidden": true
			}), card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-6xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
						"aria-hidden": "true",
						children: card.emoji
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-xl leading-tight text-parchment",
						children: card.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-[10px] uppercase tracking-[0.2em] text-gold/80",
						children: [card.arcana, card.suit ? ` · ${card.suit}` : " Arcana"]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid place-items-center gap-3 text-gold/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-10 w-10 ${drawing ? "animate-pulse" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-parchment/50",
					children: drawing ? "Drawing..." : "Awaiting the draw"
				})]
			})]
		})]
	});
}
function StarField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0",
		"aria-hidden": true,
		children: [
			{
				top: "12%",
				left: "20%",
				size: 6,
				delay: "0s"
			},
			{
				top: "24%",
				left: "62%",
				size: 4,
				delay: "0.6s"
			},
			{
				top: "40%",
				left: "12%",
				size: 5,
				delay: "1.2s"
			},
			{
				top: "18%",
				left: "84%",
				size: 3,
				delay: "0.3s"
			},
			{
				top: "62%",
				left: "70%",
				size: 5,
				delay: "0.9s"
			},
			{
				top: "70%",
				left: "30%",
				size: 4,
				delay: "1.5s"
			},
			{
				top: "50%",
				left: "48%",
				size: 3,
				delay: "0.2s"
			}
		].map((star, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute animate-pulse rounded-full bg-gold/70 shadow-[0_0_8px_rgba(212,175,55,0.8)]",
			style: {
				top: star.top,
				left: star.left,
				width: star.size,
				height: star.size,
				animationDelay: star.delay
			}
		}, index))
	});
}
//#endregion
export { OraclePage as component };
