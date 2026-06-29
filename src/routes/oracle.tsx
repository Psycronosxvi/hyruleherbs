import { createFileRoute } from "@tanstack/react-router";
import { Moon, RotateCcw, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { shuffleDeck, tarotDeck, type TarotCard } from "@/lib/tarot";
import madameWritzImg from "@/assets/oracle-madame-writz.png";

type OracleResponse = {
  reading?: string;
  herb?: string | null;
  message?: string;
};

const positions = ["The Past", "The Present", "The Path"] as const;

const suitTint: Record<string, string> = {
  Wands: "from-[oklch(0.30_0.10_55)] to-[oklch(0.16_0.05_50)]",
  Cups: "from-[oklch(0.30_0.08_220)] to-[oklch(0.15_0.05_215)]",
  Swords: "from-[oklch(0.32_0.04_260)] to-[oklch(0.16_0.03_260)]",
  Pentacles: "from-[oklch(0.30_0.09_150)] to-[oklch(0.15_0.05_150)]",
  Major: "from-[oklch(0.34_0.10_300)] to-[oklch(0.16_0.05_300)]",
};

export const Route = createFileRoute("/oracle")({
  head: () => ({
    meta: [
      { title: "The Oracle's Table — Hyrule Apothecary" },
      {
        name: "description",
        content: "Draw three tarot cards and receive a mystical herbal reading from Madame Writz.",
      },
    ],
  }),
  component: OraclePage,
});

function OraclePage() {
  const [question, setQuestion] = useState("");
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [reading, setReading] = useState("");
  const [herb, setHerb] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "drawing" | "error">("idle");
  const [message, setMessage] = useState("");

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
        body: JSON.stringify({ question, cards: drawnCards }),
      });
      const data = (await response.json()) as OracleResponse;
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[oklch(0.17_0.03_200)] via-[oklch(0.13_0.03_220)] to-[oklch(0.09_0.02_240)] text-parchment">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={madameWritzImg}
          alt="Madame Writz seated at her candlelit oracle table with a glowing crystal ball"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.02_240)] via-[oklch(0.10_0.02_240)/0.7] to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.02_240)] via-transparent to-transparent" aria-hidden />
        <StarField />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-gold backdrop-blur-sm">
              <Moon className="h-3.5 w-3.5" />
              Madame Writz presides
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-gold drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] md:text-7xl">
              The Oracle&apos;s Table
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-parchment/85 md:text-lg">
              Step into the candlelit tent. Ask softly, draw three cards, and let the seer answer
              through story, symbol, and the healing herb the spirits favor for you.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-parchment/70">
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-gold" /> 78-card deck
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" /> Three-card spread
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Question panel */}
          <div className="h-fit rounded-2xl border border-gold/30 bg-black/30 p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <label className="font-display text-lg text-gold" htmlFor="oracle-question">
              Whisper your question
            </label>
            <textarea
              id="oracle-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={5}
              placeholder="Optional: What should I understand about this season of my life?"
              className="mt-3 w-full rounded-lg border border-gold/30 bg-black/40 px-3 py-2 text-sm text-parchment outline-none transition focus:border-gold placeholder:text-parchment/40"
            />
            <button
              type="button"
              onClick={() => void drawCards()}
              disabled={status === "drawing"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3.5 text-sm font-semibold text-[oklch(0.15_0.02_240)] transition hover:opacity-90 disabled:opacity-60"
            >
              <Sparkles className="h-4 w-4" />
              {status === "drawing" ? "Reading the leaves..." : "Draw Your Cards"}
            </button>
            {(cards.length > 0 || question) && (
              <button
                type="button"
                onClick={reset}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold/40 px-4 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold/10"
              >
                <RotateCcw className="h-4 w-4" />
                Start a New Reading
              </button>
            )}
            {message && (
              <p
                className={`mt-4 rounded-lg border px-3 py-2 text-sm ${
                  status === "error"
                    ? "border-ember/50 text-ember"
                    : "border-gold/30 text-parchment/70"
                }`}
                role="status"
              >
                {message}
              </p>
            )}
          </div>

          {/* Cards + reading */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {positions.map((position, index) => (
                <CardSlot key={position} position={position} card={cards[index]} drawing={status === "drawing"} />
              ))}
            </div>

            <div className="rounded-2xl border border-gold/30 bg-black/30 p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-gold" />
                <h2 className="font-display text-2xl text-gold">Madame Writz Reads</h2>
              </div>
              {reading ? (
                <>
                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-parchment/85">{reading}</p>
                  {herb && (
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-5 py-2.5 text-sm font-semibold text-gold">
                      <Sparkles className="h-4 w-4" />
                      Favored herb: {herb}
                    </div>
                  )}
                </>
              ) : (
                <p className="mt-4 text-sm leading-7 text-parchment/60">
                  The table is still. Draw your cards to invite the oracle&apos;s voice.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CardSlot({ position, card, drawing }: { position: string; card?: TarotCard; drawing: boolean }) {
  const tint = card ? suitTint[card.suit ?? "Major"] : "";
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/80">{position}</div>
      <article
        className={`relative grid aspect-[2/3] w-full place-items-center overflow-hidden rounded-xl border text-center transition-all duration-500 ${
          card
            ? `border-gold/60 bg-gradient-to-b ${tint} shadow-[0_0_30px_rgba(212,175,55,0.25)]`
            : "border-gold/25 bg-black/40"
        }`}
      >
        {/* Ornate inner frame */}
        <div className="pointer-events-none absolute inset-2 rounded-lg border border-gold/30" aria-hidden />
        {card ? (
          <div className="px-3">
            <div className="text-6xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" aria-hidden="true">
              {card.emoji}
            </div>
            <h3 className="mt-4 font-display text-xl leading-tight text-parchment">{card.name}</h3>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gold/80">
              {card.arcana}
              {card.suit ? ` · ${card.suit}` : " Arcana"}
            </p>
          </div>
        ) : (
          <div className="grid place-items-center gap-3 text-gold/50">
            <Star className={`h-10 w-10 ${drawing ? "animate-pulse" : ""}`} />
            <p className="text-xs tracking-wide text-parchment/50">{drawing ? "Drawing..." : "Awaiting the draw"}</p>
          </div>
        )}
      </article>
    </div>
  );
}

function StarField() {
  const stars = [
    { top: "12%", left: "20%", size: 6, delay: "0s" },
    { top: "24%", left: "62%", size: 4, delay: "0.6s" },
    { top: "40%", left: "12%", size: 5, delay: "1.2s" },
    { top: "18%", left: "84%", size: 3, delay: "0.3s" },
    { top: "62%", left: "70%", size: 5, delay: "0.9s" },
    { top: "70%", left: "30%", size: 4, delay: "1.5s" },
    { top: "50%", left: "48%", size: 3, delay: "0.2s" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute animate-pulse rounded-full bg-gold/70 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
