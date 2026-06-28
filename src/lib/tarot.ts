export type TarotCard = {
  name: string;
  arcana: "Major" | "Minor";
  suit?: "Wands" | "Cups" | "Swords" | "Pentacles";
  emoji: string;
};

const majorArcana: TarotCard[] = [
  { name: "The Fool", arcana: "Major", emoji: "🌄" },
  { name: "The Magician", arcana: "Major", emoji: "✨" },
  { name: "The High Priestess", arcana: "Major", emoji: "🌙" },
  { name: "The Empress", arcana: "Major", emoji: "🌿" },
  { name: "The Emperor", arcana: "Major", emoji: "🛡️" },
  { name: "The Hierophant", arcana: "Major", emoji: "📜" },
  { name: "The Lovers", arcana: "Major", emoji: "💞" },
  { name: "The Chariot", arcana: "Major", emoji: "🐎" },
  { name: "Strength", arcana: "Major", emoji: "🦁" },
  { name: "The Hermit", arcana: "Major", emoji: "🕯️" },
  { name: "Wheel of Fortune", arcana: "Major", emoji: "☸️" },
  { name: "Justice", arcana: "Major", emoji: "⚖️" },
  { name: "The Hanged Man", arcana: "Major", emoji: "🪢" },
  { name: "Death", arcana: "Major", emoji: "🦋" },
  { name: "Temperance", arcana: "Major", emoji: "🏺" },
  { name: "The Devil", arcana: "Major", emoji: "⛓️" },
  { name: "The Tower", arcana: "Major", emoji: "⚡" },
  { name: "The Star", arcana: "Major", emoji: "⭐" },
  { name: "The Moon", arcana: "Major", emoji: "🌕" },
  { name: "The Sun", arcana: "Major", emoji: "☀️" },
  { name: "Judgement", arcana: "Major", emoji: "📯" },
  { name: "The World", arcana: "Major", emoji: "🌎" },
];

const minorRanks = [
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
  "King",
];

const suits = [
  { name: "Wands", emoji: "🔥" },
  { name: "Cups", emoji: "💧" },
  { name: "Swords", emoji: "🗡️" },
  { name: "Pentacles", emoji: "🌱" },
] as const;

const minorArcana: TarotCard[] = suits.flatMap((suit) =>
  minorRanks.map((rank) => ({
    name: `${rank} of ${suit.name}`,
    arcana: "Minor" as const,
    suit: suit.name,
    emoji: suit.emoji,
  })),
);

export const tarotDeck: TarotCard[] = [...majorArcana, ...minorArcana];

export function shuffleDeck(deck: TarotCard[]) {
  const shuffled = [...deck];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}
