export type BookOfRootsEntry = {
  id: number | string;
  name: string;
  image_url: string | null;
  traditions: string[];
  purposes: string[];
  ingredient_type: string;
  description: string;
  how_to_use: string;
  product_id: number | null;
  product_slug: string | null;
  created_at?: string;
};

export type BookOfRootsDraft = Omit<BookOfRootsEntry, "id" | "created_at"> & {
  id?: number | string;
};

export const traditionOptions = [
  "All",
  "Voodoo",
  "Hoodoo",
  "Wicca",
  "Ayurveda",
  "Santeria",
  "Native American",
  "Chinese Medicine",
  "Cajun",
  "African Herbalism",
  "Caribbean",
  "Appalachian",
  "Rastafari",
  "Folk Medicine",
] as const;

export const purposeOptions = [
  "All",
  "Healing",
  "Protection",
  "Love & Attraction",
  "Cleansing",
  "Spiritual Growth",
  "Curse Breaking",
  "Fertility",
  "Sleep",
  "Digestion",
  "Immunity",
  "Pain Relief",
  "Skin Care",
] as const;

export const ingredientTypeOptions = [
  "All",
  "Herbs",
  "Roots",
  "Flowers",
  "Oils",
  "Resins",
  "Bark",
  "Teas",
  "Tinctures",
] as const;

export const starterBookOfRoots: BookOfRootsEntry[] = [
  {
    id: "mugwort",
    name: "Mugwort",
    image_url: null,
    traditions: ["Wicca", "Native American"],
    purposes: ["Sleep", "Protection", "Spiritual Growth"],
    ingredient_type: "Herbs",
    description:
      "Mugwort has long appeared in European dream practices and in distinct Indigenous plant traditions. Its history is best approached with respect for the specific communities and lineages that preserve those teachings.",
    how_to_use:
      "For a non-ingestible dream ritual, place a small sachet of dried mugwort near—not inside—your pillow and record dreams on waking. Avoid during pregnancy and check medication interactions before internal use.",
    product_id: null,
    product_slug: "mugwort-dream-herb",
  },
  {
    id: "dragons-blood-resin",
    name: "Dragon's Blood Resin",
    image_url: null,
    traditions: ["Santeria", "Voodoo"],
    purposes: ["Protection", "Cleansing"],
    ingredient_type: "Resins",
    description:
      "Dragon's blood is the red resin of several plant species and has traveled through incense, dye, and protective folk practices. Meaning and preparation vary widely by region and spiritual house.",
    how_to_use:
      "Place a pinch on a heat-safe charcoal disc in a ventilated space as part of a cleansing practice. Never leave burning resin unattended, and keep smoke away from children, pets, and sensitive lungs.",
    product_id: null,
    product_slug: "dragons-blood-resin",
  },
  {
    id: "rose-petals",
    name: "Rose Petals",
    image_url: null,
    traditions: ["Islamic Tibb", "Wicca"],
    purposes: ["Love & Attraction", "Cleansing", "Healing"],
    ingredient_type: "Flowers",
    description:
      "Rose carries a rich history in perfumery, hospitality, devotional poetry, and traditional wellness systems. Across many practices it symbolizes tenderness, beauty, and an open heart.",
    how_to_use:
      "Steep food-grade petals in hot water for ten minutes, strain, cool, and add to a bath or linen spray. Patch-test topical preparations and use only culinary-grade petals for tea.",
    product_id: null,
    product_slug: "rose-petals",
  },
  {
    id: "rue",
    name: "Rue",
    image_url: null,
    traditions: ["Santeria", "Hoodoo"],
    purposes: ["Protection", "Curse Breaking", "Cleansing"],
    ingredient_type: "Herbs",
    description:
      "Rue is a strongly aromatic herb associated with protection in Mediterranean, African-diasporic, and Latin American folk practices. Its ritual uses are culturally specific and its plant chemistry calls for caution.",
    how_to_use:
      "Tie dried rue in a small protective bundle for an altar or doorway. Do not ingest; avoid during pregnancy, wear gloves when handling fresh rue, and keep it away from sunlight-exposed skin.",
    product_id: null,
    product_slug: "rue-protection-herb",
  },
  {
    id: "frankincense",
    name: "Frankincense",
    image_url: null,
    traditions: ["Islamic Tibb", "Folk Christianity", "Rastafari"],
    purposes: ["Spiritual Growth", "Cleansing", "Protection"],
    ingredient_type: "Resins",
    description:
      "Harvested from Boswellia trees, frankincense has moved through East African, Arabian, Islamic, and Christian trade and devotional life for millennia. It is valued as incense and as a symbol of prayer rising.",
    how_to_use:
      "Warm one or two tears on a charcoal disc in a fireproof burner during prayer or meditation. Ventilate well and source resin from suppliers who support responsible Boswellia harvesting.",
    product_id: null,
    product_slug: "frankincense-resin",
  },
  {
    id: "valerian-root",
    name: "Valerian Root",
    image_url: null,
    traditions: ["Folk Medicine", "Ayurveda"],
    purposes: ["Sleep", "Healing"],
    ingredient_type: "Roots",
    description:
      "Valerian has a long European folk history as a pungent nighttime herb, while related Valeriana species appear in South Asian traditions. Modern use commonly centers on rest and settling evening routines.",
    how_to_use:
      "Steep one teaspoon of cut root in a covered cup of hot water for ten to fifteen minutes. Do not combine with alcohol or sedatives, and ask a clinician about persistent sleep or anxiety concerns.",
    product_id: null,
    product_slug: "valerian-root",
  },
  {
    id: "john-the-conqueror-root",
    name: "John the Conqueror Root",
    image_url: null,
    traditions: ["Hoodoo"],
    purposes: ["Protection", "Spiritual Growth"],
    ingredient_type: "Roots",
    description:
      "High John the Conqueror root holds a celebrated place in Hoodoo, where it is associated with resilience, luck, personal power, and the trickster hero High John. Its story is inseparable from Black American history.",
    how_to_use:
      "Carry a whole root in a dedicated mojo bag as a symbolic reminder of courage and resourcefulness. Learn preparation and feeding customs from reputable Hoodoo educators rather than blending traditions casually.",
    product_id: null,
    product_slug: "john-the-conqueror-root",
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    image_url: null,
    traditions: ["Ayurveda"],
    purposes: ["Healing", "Spiritual Growth", "Sleep"],
    ingredient_type: "Roots",
    description:
      "Ashwagandha is a foundational rasayana in Ayurveda, traditionally used within individualized systems of diet, rest, and daily practice. Today it is widely sold as an adaptogen, sometimes without that deeper context.",
    how_to_use:
      "Stir a small amount of root powder into warm milk or a plant-based alternative with spices. Consult a qualified clinician first if pregnant, managing thyroid or autoimmune conditions, or taking medication.",
    product_id: null,
    product_slug: "ashwagandha-root",
  },
  {
    id: "blue-lotus",
    name: "Blue Lotus",
    image_url: null,
    traditions: ["Egyptian", "Rastafari"],
    purposes: ["Spiritual Growth", "Sleep"],
    ingredient_type: "Flowers",
    description:
      "The blue water lily appears throughout ancient Egyptian art and ceremonial imagery. Contemporary spiritual communities often use it for meditation, though historical claims should be separated from modern interpretations.",
    how_to_use:
      "Float a few petals in a bowl of water at a meditation space, or steep a mild tea only from a verified food-grade source. Check local rules and avoid combining it with sedating substances.",
    product_id: null,
    product_slug: "blue-lotus-flower",
  },
  {
    id: "palo-santo",
    name: "Palo Santo",
    image_url: null,
    traditions: ["Indigenous South American", "Folk Medicine"],
    purposes: ["Cleansing", "Protection"],
    ingredient_type: "Bark",
    description:
      "Palo santo refers to fragrant South American woods used in regional healing and ceremonial practices. Ethical use requires attention to species, legal harvest, ecology, and the living cultures connected to it.",
    how_to_use:
      "Use a responsibly sourced fallen-wood chip in a fireproof dish, extinguishing it after a brief aromatic cleanse. A smoke-free alternative is to place an unlit piece on an altar and work with its scent.",
    product_id: null,
    product_slug: "palo-santo-wood",
  },
  {
    id: "calendula",
    name: "Calendula",
    image_url: null,
    traditions: ["Folk Medicine", "Wicca"],
    purposes: ["Healing", "Love & Attraction"],
    ingredient_type: "Flowers",
    description:
      "Calendula's golden flower heads have a broad European folk history in skin preparations, seasonal observances, and household gardens. Their sunny color also lends them to joy and prosperity symbolism.",
    how_to_use:
      "Infuse fully dried petals in a skin-safe carrier oil, strain carefully, and patch-test before use. Do not apply homemade preparations to deep wounds, and avoid if sensitive to daisy-family plants.",
    product_id: null,
    product_slug: "calendula-flowers",
  },
  {
    id: "black-cohosh",
    name: "Black Cohosh",
    image_url: null,
    traditions: ["Native American"],
    purposes: ["Healing", "Fertility"],
    ingredient_type: "Roots",
    description:
      "Black cohosh is native to eastern North America and has histories of use among several Indigenous nations, followed by adoption into settler herbal practice. Its modern marketing often flattens those distinct origins.",
    how_to_use:
      "Treat black cohosh as a practitioner-guided herb rather than a casual home remedy. Ask a qualified clinician about product quality, liver concerns, pregnancy, hormone-sensitive conditions, and medication interactions.",
    product_id: null,
    product_slug: "black-cohosh-root",
  },
  {
    id: "ginger-root",
    name: "Ginger Root",
    image_url: null,
    traditions: ["Chinese Medicine", "Ayurveda", "Folk Medicine"],
    purposes: ["Digestion", "Healing", "Immunity"],
    ingredient_type: "Roots",
    description:
      "Ginger is a globally traveled kitchen root with strong roles in Chinese, Ayurvedic, Caribbean, and household traditions. It is often framed as warming, moving, and helpful in food-based comfort preparations.",
    how_to_use:
      "Slice fresh ginger into hot water for a simple tea or add dried ginger to food blends. Use caution with blood thinners, gallbladder concerns, reflux, or pregnancy-related dosing questions.",
    product_id: null,
    product_slug: "ginger-root",
  },
  {
    id: "turmeric-root",
    name: "Turmeric Root",
    image_url: null,
    traditions: ["Ayurveda", "Folk Medicine"],
    purposes: ["Healing", "Pain Relief", "Skin Care"],
    ingredient_type: "Roots",
    description:
      "Turmeric is a golden rhizome central to South Asian foodways, Ayurveda, and ritual life. Modern wellness interest should be balanced with respect for its culinary and cultural roots.",
    how_to_use:
      "Use in food, warm milk, or oil-based kitchen preparations with a pinch of black pepper. Ask a clinician before concentrated use with blood thinners, gallbladder disease, or surgery.",
    product_id: null,
    product_slug: "turmeric-root-powder",
  },
  {
    id: "tulsi",
    name: "Tulsi",
    image_url: null,
    traditions: ["Ayurveda"],
    purposes: ["Spiritual Growth", "Healing", "Immunity"],
    ingredient_type: "Herbs",
    description:
      "Tulsi, or holy basil, is honored in Indian devotional life and Ayurveda. It is commonly prepared as a tea and associated with clarity, resilience, and sacred household care.",
    how_to_use:
      "Steep dried tulsi leaf covered for five to ten minutes. Consult a qualified professional if pregnant, taking medication, or managing blood sugar or clotting concerns.",
    product_id: null,
    product_slug: "tulsi-holy-basil",
  },
  {
    id: "elderberry",
    name: "Elderberry",
    image_url: null,
    traditions: ["Appalachian", "Folk Medicine"],
    purposes: ["Immunity", "Healing"],
    ingredient_type: "Flowers",
    description:
      "Elderberry and elderflower are beloved in European and Appalachian household traditions for syrups, cordials, teas, and seasonal pantry preparations.",
    how_to_use:
      "Use only properly cooked ripe berries or prepared products. Raw berries, leaves, stems, and unripe parts can cause illness.",
    product_id: null,
    product_slug: "elderberry-whole-berries",
  },
  {
    id: "mullein",
    name: "Mullein Leaf",
    image_url: null,
    traditions: ["Appalachian", "Folk Medicine"],
    purposes: ["Healing", "Sleep"],
    ingredient_type: "Herbs",
    description:
      "Mullein is a soft, tall plant with a long place in European and Appalachian home traditions, especially as a gentle leaf for steam and tea rituals.",
    how_to_use:
      "Steep the leaf and strain through a fine cloth because the small hairs can irritate the throat. Use steam preparations cautiously to avoid burns.",
    product_id: null,
    product_slug: "mullein-leaf",
  },
  {
    id: "soursop-leaf",
    name: "Soursop Leaf",
    image_url: null,
    traditions: ["Caribbean", "Rastafari"],
    purposes: ["Sleep", "Healing"],
    ingredient_type: "Teas",
    description:
      "Soursop leaf is used in Caribbean bush tea traditions and household evening routines. It needs careful language because online disease-cure claims often outrun the evidence.",
    how_to_use:
      "Prepare as a mild tea from a verified source and avoid using it as a disease treatment. Consult a clinician if pregnant, taking blood pressure medicine, or managing neurological concerns.",
    product_id: null,
    product_slug: "soursop-leaf-tea",
  },
  {
    id: "hibiscus",
    name: "Hibiscus",
    image_url: null,
    traditions: ["Caribbean", "African Herbalism", "Folk Medicine"],
    purposes: ["Digestion", "Healing", "Love & Attraction"],
    ingredient_type: "Flowers",
    description:
      "Hibiscus calyces are used in tart red drinks across Africa, the Caribbean, Latin America, and beyond. They carry food, hospitality, color, and household remedy histories.",
    how_to_use:
      "Steep dried calyces for iced tea, syrup, or mocktails. Use moderation if managing low blood pressure, pregnancy, or medication interactions.",
    product_id: null,
    product_slug: "hibiscus-calypso-calyx",
  },
  {
    id: "sassafras-leaf",
    name: "Sassafras Leaf",
    image_url: null,
    traditions: ["Cajun", "Appalachian", "Folk Medicine"],
    purposes: ["Digestion", "Healing"],
    ingredient_type: "Herbs",
    description:
      "Sassafras leaf, especially as file powder, is tied to Gulf South foodways and folk practice. Root bark safety and legality differ from culinary leaf use, so specificity matters.",
    how_to_use:
      "Use culinary file powder as a seasoning after cooking. Do not use sassafras root bark preparations unless guided by current safety rules and a qualified professional.",
    product_id: null,
    product_slug: "sassafras-file-leaf",
  },
];

export function emptyBookOfRootsDraft(): BookOfRootsDraft {
  return {
    name: "",
    image_url: null,
    traditions: [],
    purposes: [],
    ingredient_type: "Herbs",
    description: "",
    how_to_use: "",
    product_id: null,
    product_slug: null,
  };
}
