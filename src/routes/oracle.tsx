import { createFileRoute } from "@tanstack/react-router";
import { RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";
import { shuffleDeck, tarotDeck, type TarotCard } from "@/lib/tarot";

type OracleResponse = {
  reading?: string;
  herb?: string | null;
  message?: string;
};

const positions = ["The Past", "The Present", "The Path"] as const;

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
    <div className="dark-page mx-auto max-w-7xl px-4 py-10 md:py-14">
      <section className="overflow-hidden rounded-lg border border-gold/40 bg-forest text-parchment shadow-scroll">
        <div className="grid gap-8 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-sm border border-gold/50 bg-parchment/10 px-2 py-1 text-[11px] uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Madame Writz presides
            </div>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">The Oracle's Table</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-parchment/80 md:text-base">
              Ask softly, draw three cards, and let the table answer through story, symbol, and
              herb.
            </p>
          </div>
          <div className="rounded-md border border-gold/40 bg-parchment/10 p-4 text-sm">
            <div className="text-gold">Deck</div>
            <div className="mt-1 font-semibold">78 cards / 3-card spread</div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="parchment-card h-fit rounded-lg p-5">
          <label className="text-sm font-semibold text-forest" htmlFor="oracle-question">
            Question for the table
          </label>
          <textarea
            id="oracle-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            rows={5}
            placeholder="Optional: What should I understand about this season of my life?"
            className="mt-2 w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-forest"
          />
          <button
            type="button"
            onClick={() => void drawCards()}
            disabled={status === "drawing"}
            className="mt-4 w-full rounded-md bg-forest px-4 py-3 text-sm font-semibold text-parchment rune-glow transition hover:bg-forest/90 disabled:opacity-60"
          >
            {status === "drawing" ? "Drawing..." : "Draw Your Cards"}
          </button>
          {(cards.length > 0 || question) && (
            <button
              type="button"
              onClick={reset}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/40 px-4 py-2.5 text-sm font-semibold text-forest transition hover:bg-parchment-dark/40"
            >
              <RotateCcw className="h-4 w-4" />
              Start a New Reading
            </button>
          )}
          {message && (
            <p
              className={`mt-4 rounded-md border px-3 py-2 text-sm ${
                status === "error"
                  ? "border-destructive/40 text-destructive"
                  : "border-gold/30 text-muted-foreground"
              }`}
              role="status"
            >
              {message}
            </p>
          )}
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {positions.map((position, index) => (
              <CardSlot key={position} position={position} card={cards[index]} />
            ))}
          </div>

          <div className="parchment-card rounded-lg p-5">
            <h2 className="font-display text-2xl text-forest">Madame Writz Reads</h2>
            {reading ? (
              <>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-muted-foreground">
                  {reading}
                </p>
                {herb && (
                  <div className="mt-5 inline-flex rounded-full border border-forest/30 bg-forest px-4 py-2 text-sm font-semibold text-parchment">
                    HERB: {herb}
                  </div>
                )}
              </>
            ) : (
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The table is still. Draw your cards to invite the oracle's voice.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function CardSlot({ position, card }: { position: string; card?: TarotCard }) {
  return (
    <article className="parchment-card grid min-h-72 rounded-lg p-4 text-center">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {position}
        </div>
      </div>
      <div className="grid place-items-center">
        {card ? (
          <div>
            <div className="text-6xl" aria-hidden="true">
              {card.emoji}
            </div>
            <h2 className="mt-4 font-display text-2xl text-forest">{card.name}</h2>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {card.arcana}
              {card.suit ? ` / ${card.suit}` : ""}
            </p>
          </div>
        ) : (
          <div>
            <div className="mx-auto grid h-20 w-14 place-items-center rounded-md border border-gold/50 bg-forest text-2xl text-gold shadow-scroll">
              ✦
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Awaiting the draw</p>
          </div>
        )}
      </div>
    </article>
  );
}
