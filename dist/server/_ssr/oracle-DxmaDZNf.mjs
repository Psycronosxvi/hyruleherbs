import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { H as Sparkles, p as RotateCcw } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/oracle-DxmaDZNf.js
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
var positions = [
	"The Past",
	"The Present",
	"The Path"
];
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
		className: "dark-page mx-auto max-w-7xl px-4 py-10 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden rounded-lg border border-gold/40 bg-forest text-parchment shadow-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 inline-flex items-center gap-2 rounded-sm border border-gold/50 bg-parchment/10 px-2 py-1 text-[11px] uppercase tracking-[0.22em] text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Madame Writz presides"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl leading-tight md:text-6xl",
						children: "The Oracle's Table"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-7 text-parchment/80 md:text-base",
						children: "Ask softly, draw three cards, and let the table answer through story, symbol, and herb."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-gold/40 bg-parchment/10 p-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-gold",
						children: "Deck"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-semibold",
						children: "78 cards / 3-card spread"
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parchment-card h-fit rounded-lg p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-semibold text-forest",
						htmlFor: "oracle-question",
						children: "Question for the table"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "oracle-question",
						value: question,
						onChange: (event) => setQuestion(event.target.value),
						rows: 5,
						placeholder: "Optional: What should I understand about this season of my life?",
						className: "mt-2 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-forest"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void drawCards(),
						disabled: status === "drawing",
						className: "mt-4 w-full rounded-md bg-forest px-4 py-3 text-sm font-semibold text-parchment rune-glow transition hover:bg-forest/90 disabled:opacity-60",
						children: status === "drawing" ? "Drawing..." : "Draw Your Cards"
					}),
					(cards.length > 0 || question) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: reset,
						className: "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/40 px-4 py-2.5 text-sm font-semibold text-forest transition hover:bg-parchment-dark/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Start a New Reading"]
					}),
					message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-4 rounded-md border px-3 py-2 text-sm ${status === "error" ? "border-destructive/40 text-destructive" : "border-gold/30 text-muted-foreground"}`,
						role: "status",
						children: message
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: positions.map((position, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSlot, {
						position,
						card: cards[index]
					}, position))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card rounded-lg p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-forest",
						children: "Madame Writz Reads"
					}), reading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 whitespace-pre-line text-sm leading-7 text-muted-foreground",
						children: reading
					}), herb && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 inline-flex rounded-full border border-forest/30 bg-forest px-4 py-2 text-sm font-semibold text-parchment",
						children: ["HERB: ", herb]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-7 text-muted-foreground",
						children: "The table is still. Draw your cards to invite the oracle's voice."
					})]
				})]
			})]
		})]
	});
}
function CardSlot({ position, card }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "parchment-card grid min-h-72 rounded-lg p-4 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-semibold uppercase tracking-[0.25em] text-gold",
			children: position
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid place-items-center",
			children: card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-6xl",
					"aria-hidden": "true",
					children: card.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl text-forest",
					children: card.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs uppercase tracking-widest text-muted-foreground",
					children: [card.arcana, card.suit ? ` / ${card.suit}` : ""]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid h-20 w-14 place-items-center rounded-md border border-gold/50 bg-forest text-2xl text-gold shadow-scroll",
				children: "✦"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: "Awaiting the draw"
			})] })
		})]
	});
}
//#endregion
export { OraclePage as component };
