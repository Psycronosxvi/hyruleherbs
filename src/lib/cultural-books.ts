import chineseImg from "@/assets/books/chinese-traditional-medicine.png";
import cajunImg from "@/assets/books/cajun-folk-remedies.png";
import africanImg from "@/assets/books/african-herbalism.png";
import wiccanImg from "@/assets/books/wiccan-earth-based-healing.png";
import ayurvedicImg from "@/assets/books/ayurvedic-indian-medicine.png";
import nativeAmericanImg from "@/assets/books/native-american-plant-medicine.png";
import caribbeanImg from "@/assets/books/caribbean-rastafarian-herbalism.png";
import appalachianImg from "@/assets/books/appalachian-folk-medicine.png";

export type CulturalBook = {
  slug: string;
  title: string;
  tradition: string;
  origin: string;
  overview: string;
  herbs: string[];
  conditions: string[];
  evidence: string[];
  pdfProductSlug: string;
  coverImage: string;
  firstPagePreview: string;
  subscriberRecipe: {
    title: string;
    preview: string;
    full: string;
  };
};

export const culturalBooks: CulturalBook[] = [
  {
    slug: "chinese-traditional-medicine",
    title: "Chinese Traditional Medicine",
    tradition: "Chinese",
    origin: "China, with classical materia medica and lineage-based clinical practice.",
    overview:
      "A constitutional system that studies pattern, season, energetics, diet, and formula balance rather than single herbs in isolation.",
    herbs: ["Ginger", "Licorice root", "Astragalus", "Ginseng", "Goji berry"],
    conditions: ["Digestion", "Immunity", "Fatigue", "Seasonal resilience"],
    evidence: [
      "Classical texts document formula logic and preparation methods.",
      "Modern research commonly studies individual botanicals, quality control, and safety interactions.",
    ],
    pdfProductSlug: "chinese-traditional-medicine-pdf",
    coverImage: chineseImg,
    firstPagePreview:
      "Page 1 introduces qi, yin-yang, five phases, and why formulas require trained pattern assessment.",
    subscriberRecipe: {
      title: "Ginger-Goji Warming Tea",
      preview: "A gentle kitchen-style tea built around warmth, sweetness, and evening comfort.",
      full: "Simmer fresh ginger slices for 8 minutes, remove from heat, add goji berries, cover for 5 minutes, then sweeten lightly. Avoid if ginger is contraindicated for you.",
    },
  },
  {
    slug: "cajun-folk-remedies",
    title: "Cajun Folk Remedies",
    tradition: "Cajun",
    origin:
      "South Louisiana, Acadian, Creole, Indigenous, African, French, and Spanish crossroads.",
    overview:
      "A practical household tradition shaped by wetland plants, kitchen remedies, poultices, teas, prayer, and community memory.",
    herbs: ["Sassafras leaf", "Elderflower", "Peppermint", "Yarrow", "Cayenne"],
    conditions: ["Digestion", "Colds", "Aches", "Skin comfort"],
    evidence: [
      "Folklife documentation preserves oral remedy patterns and foodways.",
      "Ingredient evidence varies, so labels should separate household tradition from medical claims.",
    ],
    pdfProductSlug: "cajun-folk-remedies-pdf",
    coverImage: cajunImg,
    firstPagePreview:
      "Page 1 maps the bayou kitchen cabinet: teas, steam, rubs, soup, and careful plant identification.",
    subscriberRecipe: {
      title: "Bayou Mint Steam Bowl",
      preview: "A non-ingestible aromatic steam inspired by home comfort practices.",
      full: "Add peppermint and yarrow to hot water, let cool for one minute, then breathe nearby vapor without covering the head. Stop if irritated and keep away from children.",
    },
  },
  {
    slug: "african-herbalism",
    title: "African Herbalism",
    tradition: "African",
    origin:
      "Continental African plant traditions, with regional systems across West, East, Central, North, and Southern Africa.",
    overview:
      "A wide family of local knowledge systems connected to food, ceremony, birth work, ecology, divination, and community healers.",
    herbs: ["Moringa", "Neem", "Kinkeliba", "Baobab", "Bitter leaf"],
    conditions: ["Nutrition", "Skin care", "Digestive support", "Everyday vitality"],
    evidence: [
      "Ethnobotanical records document regional use, preparation, and plant identity.",
      "Nutrient profiles and phytochemical studies support careful educational discussion for several foods and herbs.",
    ],
    pdfProductSlug: "african-herbalism-pdf",
    coverImage: africanImg,
    firstPagePreview:
      "Page 1 begins with respect: Africa is not one tradition, and every plant belongs to a place.",
    subscriberRecipe: {
      title: "Moringa Green Spoon Blend",
      preview: "A food-first green blend for soups, smoothies, or warm bowls.",
      full: "Whisk 1/2 teaspoon moringa powder into a small amount of warm broth, then stir into soup after cooking. Start small and avoid using it as a substitute for medical care.",
    },
  },
  {
    slug: "wiccan-earth-based-healing",
    title: "Wiccan/Earth-Based Healing",
    tradition: "Wiccan",
    origin:
      "Modern Pagan and Wiccan practice, drawing from European folk magic, seasonal ritual, and earth-centered spirituality.",
    overview:
      "A symbolic and ritual approach to herbs using intention, moon timing, elements, protection, blessing, and seasonal observance.",
    herbs: ["Mugwort", "Rose", "Calendula", "Lavender", "Rue"],
    conditions: ["Ritual focus", "Rest", "Protection", "Heart work"],
    evidence: [
      "Documentation is strongest as contemporary religious and folk practice.",
      "Safety evidence matters most around ingestion, smoke, essential oils, pregnancy, and medication interactions.",
    ],
    pdfProductSlug: "wiccan-earth-based-healing-pdf",
    coverImage: wiccanImg,
    firstPagePreview:
      "Page 1 covers correspondence, consent, smoke-free ritual options, and when not to ingest herbs.",
    subscriberRecipe: {
      title: "Calendula-Rose Bath Sachet",
      preview: "A gentle botanical sachet for symbolic joy and tenderness.",
      full: "Fill a muslin bag with calendula and rose, tie firmly, and steep in bath water. Patch-test first and skip if irritated or sensitive to daisy-family plants.",
    },
  },
  {
    slug: "ayurvedic-indian-medicine",
    title: "Ayurvedic (Indian) Medicine",
    tradition: "Ayurvedic",
    origin:
      "India, with classical Sanskrit medical texts and practitioner-guided constitutional care.",
    overview:
      "A whole-person system using dosha, digestion, daily rhythm, food, oil, herbs, and individualized preparation.",
    herbs: ["Ashwagandha", "Turmeric", "Tulsi", "Triphala", "Amla"],
    conditions: ["Stress resilience", "Digestion", "Sleep", "Joint comfort"],
    evidence: [
      "Classical Ayurvedic texts document formulation and constitutional use.",
      "Modern studies examine select botanicals, but results depend on dose, quality, and person-specific context.",
    ],
    pdfProductSlug: "ayurvedic-indian-medicine-pdf",
    coverImage: ayurvedicImg,
    firstPagePreview:
      "Page 1 introduces dosha, agni, rasayana, and why practitioner guidance matters.",
    subscriberRecipe: {
      title: "Golden Evening Milk",
      preview: "A warming kitchen preparation inspired by turmeric and spice traditions.",
      full: "Warm milk or a plant milk with turmeric, ginger, black pepper, and honey after cooling slightly. Ask a clinician first if pregnant, on blood thinners, or managing gallbladder concerns.",
    },
  },
  {
    slug: "native-american-plant-medicine",
    title: "Native American Plant Medicine",
    tradition: "Native American",
    origin:
      "Indigenous nations of North America, each with distinct sovereign plant knowledge and protocols.",
    overview:
      "A respectful educational overview that emphasizes specificity, permission, land, language, and avoiding pan-Indigenous flattening.",
    herbs: ["Black cohosh", "Cedar", "Yarrow", "Echinacea", "Sweetgrass"],
    conditions: ["Ceremony", "Skin care", "Seasonal support", "Women's health history"],
    evidence: [
      "Tribal and ethnobotanical sources document distinct plant relationships where communities choose to publish them.",
      "Commercial use must avoid extraction from closed ceremonies and endangered or overharvested plants.",
    ],
    pdfProductSlug: "native-american-plant-medicine-pdf",
    coverImage: nativeAmericanImg,
    firstPagePreview:
      "Page 1 explains sovereignty, closed knowledge, ethical sourcing, and why not every sacred plant is for sale.",
    subscriberRecipe: {
      title: "Respectful Cedar Room Bowl",
      preview: "A smoke-free aromatic room bowl centered on gratitude, not appropriation.",
      full: "Place a small sourced cedar sprig beside warm water for scent, then return spent plant matter respectfully. Do not imitate ceremonies you were not invited to practice.",
    },
  },
  {
    slug: "caribbean-rastafarian-herbalism",
    title: "Caribbean/Rastafarian Herbalism",
    tradition: "Caribbean",
    origin:
      "Caribbean household bush medicine, African diaspora practice, and Rastafarian ital living.",
    overview:
      "A food, tea, garden, and spiritual care tradition that centers vitality, simplicity, roots tonics, bitters, and community knowledge.",
    herbs: ["Soursop leaf", "Hibiscus", "Guinea hen weed", "Cerasee", "Moringa"],
    conditions: ["Digestion", "Hydration", "Rest", "Everyday vitality"],
    evidence: [
      "Bush medicine is documented through oral history, ethnobotany, and food culture.",
      "Some plants have active compounds that require stronger safety notes than casual wellness marketing suggests.",
    ],
    pdfProductSlug: "caribbean-rastafarian-herbalism-pdf",
    coverImage: caribbeanImg,
    firstPagePreview:
      "Page 1 opens with ital, bush tea, bitters, and the difference between cultural use and disease claims.",
    subscriberRecipe: {
      title: "Hibiscus Island Cooler",
      preview: "A tart, crimson tea for hydration and kitchen joy.",
      full: "Steep hibiscus for 10 minutes, strain, chill, and add lime and ginger syrup. Avoid overuse if you are managing low blood pressure or medication interactions.",
    },
  },
  {
    slug: "appalachian-folk-medicine",
    title: "Appalachian Folk Medicine",
    tradition: "Appalachian",
    origin:
      "Appalachian mountain communities shaped by Indigenous, African, Scots-Irish, German, and local ecological knowledge.",
    overview:
      "A practical home tradition of teas, poultices, tonics, garden plants, woodland roots, and seasonal self-reliance.",
    herbs: ["Black walnut", "Elderberry", "Mullein", "Yarrow", "Wild cherry bark"],
    conditions: ["Cough traditions", "Skin comfort", "Seasonal support", "Digestive bitters"],
    evidence: [
      "Folklife archives document household remedies, midwifery, and plant gathering customs.",
      "Several plants need identification safeguards, dosing caution, and conservation awareness.",
    ],
    pdfProductSlug: "appalachian-folk-medicine-pdf",
    coverImage: appalachianImg,
    firstPagePreview:
      "Page 1 covers mountain materia medica, garden medicine, and careful harvest ethics.",
    subscriberRecipe: {
      title: "Mullein Leaf Steam",
      preview: "A gentle non-ingestible steam inspired by mountain home care.",
      full: "Steep dried mullein leaf in hot water and breathe nearby vapor. Strain carefully if preparing tea because leaf hairs can irritate the throat.",
    },
  },
];

export const pdfStoreCategories = {
  tradition: [
    "Chinese",
    "Cajun",
    "African",
    "Wiccan",
    "Ayurvedic",
    "Native American",
    "Caribbean",
    "Appalachian",
  ],
  purpose: ["Immunity", "Digestion", "Pain relief", "Sleep", "Protection", "Skin care"],
  ingredientType: ["Roots", "Flowers", "Teas", "Tinctures", "Oils"],
} as const;
