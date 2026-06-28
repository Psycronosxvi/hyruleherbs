import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Lore — Hyrule Apothecary" },
      {
        name: "description",
        content:
          "The story of the Hyrule Apothecary — a small-batch herbal house rooted in old craft and quiet rituals.",
      },
      { property: "og:title", content: "Our Lore — Hyrule Apothecary" },
      {
        property: "og:description",
        content: "Small-batch herbal house rooted in old craft and quiet rituals.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="dark-page mx-auto max-w-3xl px-4 py-16">
      <div className="text-center mb-12">
        <Sparkles className="mx-auto h-7 w-7 text-gold mb-3" />
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">The Apothecary's Tale</p>
        <h1 className="font-display text-4xl md:text-5xl text-forest">
          A small house, a long road
        </h1>
      </div>
      <div className="parchment-card rounded-lg p-8 md:p-12 space-y-5 text-foreground/85 leading-relaxed">
        <p>
          Hyrule Apothecary began the way most quiet things do — with a cluttered kitchen table, a
          wall of jars, and a stubborn belief that the old remedies still know things the new ones
          have forgotten.
        </p>
        <p>
          We are foragers, blenders, and stewards. We gather where we are welcome, buy from farms we
          know by first name, and tincture in batches small enough to remember every jar. Our
          shelves carry hundreds of herbs, flowers, oils, and elixirs — each tied to a season, a
          place, a hand that grew it.
        </p>
        <p>
          The Zelda theme is our love letter. Like any good adventurer, we believe in pockets full
          of useful things: a tonic for the long road, a leaf for the sleepless night, a small
          bottle of courage tucked away for when it's needed.
        </p>
        <p className="font-display text-xl text-forest text-center pt-4">
          "Half plant, half patience, a little courage."
        </p>
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/shop"
          className="inline-flex rounded-md bg-forest px-6 py-3 font-semibold text-parchment hover:bg-forest/90"
        >
          Visit the shop
        </Link>
      </div>
    </div>
  );
}
