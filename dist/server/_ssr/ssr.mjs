//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var cat_herbs_default = "/assets/cat-herbs-BfWvkTIP.jpg";
var cat_flowers_default = "/assets/cat-flowers-BsrzwQRG.jpg";
var cat_tinctures_default = "/assets/cat-tinctures-nu5luYGH.jpg";
var cat_teas_default = "/assets/cat-teas-CisC-6TL.jpg";
var cat_oils_default = "/assets/cat-oils-DtJMbh37.jpg";
var cat_kits_default = "/assets/cat-kits-DzYLH2Zf.jpg";
var categories = [
	{
		slug: "herbs",
		name: "Dried Herbs",
		blurb: "Sun-dried leaves and roots harvested at peak vitality.",
		image: cat_herbs_default
	},
	{
		slug: "flowers",
		name: "Wild Flowers",
		blurb: "Pressed petals and full blooms for teas, baths, and rituals.",
		image: cat_flowers_default
	},
	{
		slug: "tinctures",
		name: "Tinctures & Elixirs",
		blurb: "Small-batch potions, slow-steeped in pure spirits.",
		image: cat_tinctures_default
	},
	{
		slug: "teas",
		name: "Herbal Teas",
		blurb: "Hand-blended brews for rest, focus, and warmth.",
		image: cat_teas_default
	},
	{
		slug: "oils",
		name: "Essential Oils",
		blurb: "Cold-pressed aromatics in apothecary amber glass.",
		image: cat_oils_default
	},
	{
		slug: "kits",
		name: "Apothecary Kits",
		blurb: "Adventurer's chests stocked for any quest.",
		image: cat_kits_default
	},
	{
		slug: "books",
		name: "PDF Field Guides",
		blurb: "Digital ingredient books with preparation notes and citations.",
		image: cat_kits_default
	}
];
var products = [
	{
		slug: "mugwort-dream-herb",
		name: "Mugwort Dream Herb",
		category: "herbs",
		type: "ingredient",
		price: 12,
		short: "Aromatic dried mugwort for dream and altar work.",
		description: "Carefully dried mugwort leaf for non-ingestible dream sachets, altar bundles, and ingredient study. Includes clear safety guidance for respectful home practice.",
		uses: [
			"Dream sachets",
			"Altar work",
			"Ingredient study"
		],
		ingredients: ["Artemisia vulgaris leaf"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "dragons-blood-resin",
		name: "Dragon's Blood Resin",
		category: "herbs",
		type: "ingredient",
		price: 18,
		short: "Deep red resin traditionally used in protective incense.",
		description: "Small resin pieces selected for incense and ritual study, with notes on ventilation, fire safety, and the varied plants sold under the dragon's blood name.",
		uses: [
			"Incense",
			"Protection work",
			"Cleansing"
		],
		ingredients: ["Dragon's blood resin"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "rose-petals",
		name: "Dried Rose Petals",
		category: "flowers",
		type: "ingredient",
		price: 11,
		short: "Fragrant petals for baths, teas, and heart-centered rituals.",
		description: "Food-grade dried rose petals with a soft floral aroma, packed for tea blending, botanical baths, and devotional craft.",
		uses: [
			"Tea blends",
			"Baths",
			"Floral water"
		],
		ingredients: ["Rosa species petals"],
		image: cat_flowers_default,
		badge: "Book of Roots"
	},
	{
		slug: "rue-protection-herb",
		name: "Rue Protection Herb",
		category: "herbs",
		type: "ingredient",
		price: 10,
		short: "A potent aromatic herb for protected altar use.",
		description: "Dried rue intended for symbolic bundles and altar work only. The package foregrounds pregnancy, skin, and ingestion cautions.",
		uses: [
			"Altar bundles",
			"Protective craft",
			"Ingredient study"
		],
		ingredients: ["Ruta graveolens herb"],
		image: cat_herbs_default,
		badge: "Handle with care"
	},
	{
		slug: "frankincense-resin",
		name: "Frankincense Resin Tears",
		category: "herbs",
		type: "ingredient",
		price: 16,
		short: "Bright Boswellia resin for incense and contemplation.",
		description: "Responsibly sourced frankincense tears for prayer, meditation, and aromatic study, accompanied by safe-burning instructions.",
		uses: [
			"Incense",
			"Meditation",
			"Devotional practice"
		],
		ingredients: ["Boswellia resin"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "valerian-root",
		name: "Cut Valerian Root",
		category: "herbs",
		type: "ingredient",
		price: 14,
		short: "Earthy cut root for traditional evening preparations.",
		description: "Cut and sifted valerian root with preparation notes and cautions around sedatives, alcohol, pregnancy, and persistent sleep concerns.",
		uses: ["Evening infusion", "Ingredient study"],
		ingredients: ["Valeriana officinalis root"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "john-the-conqueror-root",
		name: "John the Conqueror Root",
		category: "herbs",
		type: "ingredient",
		price: 21,
		short: "A whole root honored in Black American Hoodoo tradition.",
		description: "A whole High John root offered with historical context and guidance that centers reputable Hoodoo educators and lineage-specific practice.",
		uses: [
			"Mojo bag",
			"Altar work",
			"Cultural study"
		],
		ingredients: ["Ipomoea jalapa root"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "ashwagandha-root",
		name: "Ashwagandha Root Powder",
		category: "herbs",
		type: "ingredient",
		price: 17,
		short: "Ground Ayurvedic root for warm, grounding preparations.",
		description: "Fine ashwagandha root powder with preparation ideas and prominent guidance for thyroid, autoimmune, pregnancy, and medication considerations.",
		uses: ["Warm milk blend", "Ingredient study"],
		ingredients: ["Withania somnifera root powder"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "blue-lotus-flower",
		name: "Blue Lotus Flowers",
		category: "flowers",
		type: "ingredient",
		price: 22,
		short: "Dried blue water lily flowers for contemplative practice.",
		description: "Verified dried blue water lily flowers presented with a clear distinction between ancient Egyptian evidence and contemporary spiritual use.",
		uses: [
			"Meditation bowl",
			"Altar work",
			"Ingredient study"
		],
		ingredients: ["Nymphaea caerulea flowers"],
		image: cat_flowers_default,
		badge: "Book of Roots"
	},
	{
		slug: "palo-santo-wood",
		name: "Ethically Sourced Palo Santo",
		category: "herbs",
		type: "ingredient",
		price: 15,
		short: "Naturally fallen aromatic wood with sourcing notes.",
		description: "Traceable palo santo wood sourced from naturally fallen material, with species, origin, and harvest documentation included.",
		uses: [
			"Aromatic altar work",
			"Cleansing",
			"Ingredient study"
		],
		ingredients: ["Bursera graveolens wood"],
		image: cat_herbs_default,
		badge: "Sourcing verified"
	},
	{
		slug: "calendula-flowers",
		name: "Calendula Flowers",
		category: "flowers",
		type: "ingredient",
		price: 12,
		short: "Golden whole flowers for oil infusions and botanical craft.",
		description: "Fully dried calendula flowers for skin-safe oil infusions, bath blends, and cheerful seasonal craft.",
		uses: [
			"Oil infusion",
			"Bath blend",
			"Botanical craft"
		],
		ingredients: ["Calendula officinalis flowers"],
		image: cat_flowers_default,
		badge: "Book of Roots"
	},
	{
		slug: "black-cohosh-root",
		name: "Black Cohosh Root",
		category: "herbs",
		type: "ingredient",
		price: 19,
		short: "Practitioner-guided root with detailed safety notes.",
		description: "Cut black cohosh root sold for informed ingredient study and practitioner-guided use, with sourcing and safety documentation.",
		uses: ["Ingredient study", "Practitioner-guided preparation"],
		ingredients: ["Actaea racemosa root"],
		image: cat_herbs_default,
		badge: "Guided use"
	},
	{
		slug: "deku-leaf-bundle",
		name: "Deku Leaf Bundle",
		category: "herbs",
		type: "ingredient",
		price: 14,
		short: "Energizing green leaves, gathered at dawn.",
		description: "A hand-tied bundle of sun-dried deku leaves, prized for centuries by woodland herbalists. Steep, smolder, or steep into a tonic.",
		uses: [
			"Smoke cleansing",
			"Energizing tea",
			"Salve base"
		],
		ingredients: ["Wildcrafted deku leaf"],
		image: cat_herbs_default,
		badge: "Bestseller",
		proofNotes: ["Batch notes include harvest date, drying method, and supplier lot."]
	},
	{
		slug: "korok-mint",
		name: "Korok Mint Sprigs",
		category: "herbs",
		type: "ingredient",
		price: 9,
		short: "Bright, cooling, and a little mischievous.",
		description: "Refreshing mint with a hint of forest pine. Excellent for after-meal teas or muddled into spring water.",
		uses: ["Digestive tea", "Cooling balm"],
		ingredients: ["Organic korok mint"],
		image: cat_herbs_default
	},
	{
		slug: "moringa-leaf-powder",
		name: "Moringa Leaf Powder",
		category: "herbs",
		type: "ingredient",
		price: 15,
		short: "A mineral-rich green powder for daily blends.",
		description: "Fine-ground moringa leaf with a grassy, earthy profile. Blend into smoothies, capsules, soups, or tea mixes for everyday nourishment.",
		uses: [
			"Smoothies",
			"Capsules",
			"Green tea blends"
		],
		ingredients: ["Moringa oleifera leaf powder"],
		image: cat_herbs_default,
		badge: "New",
		proofNotes: ["Research notes track traditional food uses and published nutrient profiles.", "Sourced with certificate of analysis before sale."]
	},
	{
		slug: "hibiscus-calypso-calyx",
		name: "Hibiscus Calypso Calyx",
		category: "flowers",
		type: "ingredient",
		price: 12,
		short: "Tart crimson petals for tea, syrups, and color.",
		description: "Deep red hibiscus calyces with bright berry-like acidity. A beautiful anchor for iced teas, oxymels, syrups, and botanical mocktails.",
		uses: [
			"Iced tea",
			"Syrup",
			"Oxymel",
			"Natural color"
		],
		ingredients: ["Hibiscus sabdariffa calyces"],
		image: cat_flowers_default,
		badge: "Caribbean shelf",
		proofNotes: ["Reference notes include food history, acidity, and preparation guidance."]
	},
	{
		slug: "silent-princess",
		name: "Silent Princess Petals",
		category: "flowers",
		type: "ingredient",
		price: 24,
		short: "Rare blue petals, pressed and preserved.",
		description: "These famously elusive blossoms are pressed within hours of harvest to retain their delicate sapphire color and faintly floral aroma.",
		uses: [
			"Ceremonial baths",
			"Tea blend top note",
			"Floral water"
		],
		ingredients: ["Silent princess petals"],
		image: cat_flowers_default,
		badge: "Rare"
	},
	{
		slug: "hyrule-wildflower-mix",
		name: "Hyrule Wildflower Mix",
		category: "flowers",
		type: "blend",
		price: 16,
		short: "A meadow in a jar.",
		description: "A vivid medley of pressed wildflowers, chamomile, cornflower, marigold, and rose, blended for color and gentle fragrance.",
		uses: [
			"Bath soak",
			"Tea garnish",
			"Potpourri"
		],
		ingredients: [
			"Chamomile",
			"Cornflower",
			"Calendula",
			"Rose petals"
		],
		image: cat_flowers_default
	},
	{
		slug: "elixir-of-stamina",
		name: "Elixir of Stamina",
		category: "tinctures",
		type: "blend",
		price: 32,
		short: "A slow-steeped green tonic for long roads.",
		description: "Our flagship tincture, drawn from rhodiola, ginseng, and forest-foraged adaptogens. A few drops under the tongue before any quest.",
		uses: ["Energy support", "Endurance"],
		ingredients: [
			"Rhodiola",
			"Korean ginseng",
			"Schisandra",
			"Cane spirit"
		],
		image: cat_tinctures_default,
		badge: "Bestseller"
	},
	{
		slug: "elixir-of-courage",
		name: "Elixir of Courage",
		category: "tinctures",
		type: "blend",
		price: 32,
		short: "Warming red tincture for steady nerves.",
		description: "Hawthorn and motherwort steeped with rose hip and a whisper of cayenne, a heart-strengthening classic.",
		uses: ["Heart support", "Calm focus"],
		ingredients: [
			"Hawthorn berry",
			"Motherwort",
			"Rose hip",
			"Cane spirit"
		],
		image: cat_tinctures_default
	},
	{
		slug: "elixir-of-wisdom",
		name: "Elixir of Wisdom",
		category: "tinctures",
		type: "blend",
		price: 32,
		short: "A clarifying blue elixir for thinkers.",
		description: "Bacopa, gotu kola, and butterfly pea slow-extracted into a midnight-blue tincture for memory and clarity.",
		uses: ["Mental clarity", "Focus"],
		ingredients: [
			"Bacopa",
			"Gotu kola",
			"Butterfly pea",
			"Cane spirit"
		],
		image: cat_tinctures_default
	},
	{
		slug: "lullaby-tea-blend",
		name: "Lullaby Tea Blend",
		category: "teas",
		type: "blend",
		price: 18,
		short: "Soft notes of chamomile, lavender, and oat.",
		description: "A bedtime ritual in a tin. Loose-leaf, hand-blended in small batches, for the quietest hour of the night.",
		uses: ["Sleep", "Wind-down ritual"],
		ingredients: [
			"Chamomile",
			"Lavender",
			"Oat straw",
			"Passionflower"
		],
		image: cat_teas_default,
		badge: "Bestseller"
	},
	{
		slug: "lon-lon-chai",
		name: "Lon Lon Chai",
		category: "teas",
		type: "blend",
		price: 16,
		short: "Spiced black tea fit for ranch hands.",
		description: "Robust Assam steeped with cinnamon, cardamom, clove, and a touch of vanilla. Drinks beautifully with milk.",
		uses: ["Morning tea", "Cozy afternoons"],
		ingredients: [
			"Assam black tea",
			"Cinnamon",
			"Cardamom",
			"Clove",
			"Vanilla"
		],
		image: cat_teas_default
	},
	{
		slug: "soursop-leaf-tea",
		name: "Soursop Leaf Tea",
		category: "teas",
		type: "ingredient",
		price: 14,
		short: "Whole leaves for a gentle island steep.",
		description: "Carefully dried soursop leaves prepared for simple infusions. Earthy, mellow, and rooted in Caribbean home traditions.",
		uses: [
			"Simple infusion",
			"Evening tea",
			"Ingredient study"
		],
		ingredients: ["Annona muricata leaf"],
		image: cat_teas_default,
		badge: "New",
		proofNotes: ["Educational notes separate traditional use from medical claims.", "Future book download will collect citations and preparation history."]
	},
	{
		slug: "ginger-root",
		name: "Cut Ginger Root",
		category: "herbs",
		type: "ingredient",
		price: 10,
		short: "Warming cut root for teas, syrups, and kitchen blends.",
		description: "Dried ginger root pieces for food-first preparations, with clear cautions for medication interactions and sensitive digestion.",
		uses: [
			"Tea",
			"Syrup",
			"Digestive kitchen blends"
		],
		ingredients: ["Zingiber officinale root"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "turmeric-root-powder",
		name: "Turmeric Root Powder",
		category: "herbs",
		type: "ingredient",
		price: 13,
		short: "Golden rhizome powder for warm milk, food, and study.",
		description: "Fine turmeric powder for culinary preparations and ingredient education, packaged with stain, gallbladder, and blood-thinner cautions.",
		uses: [
			"Golden milk",
			"Food blends",
			"Ingredient study"
		],
		ingredients: ["Curcuma longa rhizome powder"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "tulsi-holy-basil",
		name: "Tulsi Holy Basil",
		category: "teas",
		type: "ingredient",
		price: 13,
		short: "A fragrant Ayurvedic leaf for devotional tea rituals.",
		description: "Dried tulsi leaf for simple infusions, with notes on Indian cultural context, medication cautions, and respectful everyday use.",
		uses: [
			"Tea",
			"Devotional practice",
			"Ingredient study"
		],
		ingredients: ["Ocimum tenuiflorum leaf"],
		image: cat_teas_default,
		badge: "Book of Roots"
	},
	{
		slug: "elderberry-whole-berries",
		name: "Whole Elderberries",
		category: "herbs",
		type: "ingredient",
		price: 15,
		short: "Dried berries for cooked syrups and seasonal pantry craft.",
		description: "Whole dried elderberries intended for properly cooked preparations only, with strong raw-plant safety notes and straining guidance.",
		uses: [
			"Cooked syrup",
			"Seasonal pantry",
			"Ingredient study"
		],
		ingredients: ["Sambucus nigra berries"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "mullein-leaf",
		name: "Mullein Leaf",
		category: "herbs",
		type: "ingredient",
		price: 12,
		short: "Soft dried leaf for mountain-style tea and steam study.",
		description: "Dried mullein leaf with fine-straining instructions, steam safety notes, and Appalachian folk context.",
		uses: [
			"Steam bowl",
			"Tea study",
			"Folk medicine notes"
		],
		ingredients: ["Verbascum thapsus leaf"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "sassafras-file-leaf",
		name: "Sassafras File Leaf",
		category: "herbs",
		type: "ingredient",
		price: 11,
		short: "Culinary file-style leaf powder for Gulf South flavor notes.",
		description: "A food-focused sassafras leaf product for seasoning and cultural study, clearly separated from root bark preparations.",
		uses: [
			"Seasoning",
			"Cajun foodways",
			"Ingredient study"
		],
		ingredients: ["Sassafras albidum leaf"],
		image: cat_herbs_default,
		badge: "Book of Roots"
	},
	{
		slug: "lavender-oil",
		name: "Field Lavender Oil",
		category: "oils",
		type: "ingredient",
		price: 22,
		short: "Steam-distilled French lavender.",
		description: "Single-origin Provence lavender, gently distilled and bottled in amber glass to preserve its calming aromatic profile.",
		uses: [
			"Aromatherapy",
			"Pillow mist base",
			"Massage blend"
		],
		ingredients: ["Lavandula angustifolia essential oil"],
		image: cat_oils_default
	},
	{
		slug: "cedarwood-oil",
		name: "Lost Woods Cedarwood",
		category: "oils",
		type: "ingredient",
		price: 20,
		short: "Grounding, woody, ancient.",
		description: "Atlas cedarwood oil with a deep, balsamic aroma. Diffuse for focus or blend into beard and skin oils.",
		uses: [
			"Diffuser",
			"Grounding",
			"Skin oil"
		],
		ingredients: ["Cedrus atlantica essential oil"],
		image: cat_oils_default
	},
	{
		slug: "traveler-apothecary-kit",
		name: "Traveler's Apothecary Kit",
		category: "kits",
		type: "kit",
		price: 84,
		short: "Everything an adventurer needs in one chest.",
		description: "A wooden chest with five tinctures, three teas, a mortar and pestle, and a hand-bound guide of remedies. The perfect gift for the curious herbalist.",
		uses: [
			"Gift",
			"Starter set",
			"Travel"
		],
		ingredients: ["Assorted tinctures, teas, and tools"],
		image: cat_kits_default,
		badge: "Gift"
	},
	{
		slug: "healers-starter-kit",
		name: "Healer's Starter Kit",
		category: "kits",
		type: "kit",
		price: 58,
		short: "A first apothecary for new herbalists.",
		description: "Includes our top three teas, two essential oils, a recipe scroll, and a small mortar and pestle.",
		uses: ["Beginner", "Gift"],
		ingredients: ["Assorted teas, oils, and tools"],
		image: cat_kits_default
	},
	{
		slug: "hibiscus-field-guide-pdf",
		name: "Hibiscus Field Guide PDF",
		category: "books",
		type: "book",
		price: 11,
		short: "A printable study guide for hibiscus history, prep, and evidence.",
		description: "A digital field guide for learning hibiscus as food, color, tea, and cultural ingredient. Built for curious herbalists who want the magic and the receipts in one place.",
		uses: [
			"Ingredient study",
			"Kitchen reference",
			"Printable notes"
		],
		ingredients: [
			"PDF download",
			"Preparation charts",
			"Research bibliography"
		],
		image: cat_kits_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Designed for Cloudflare R2 protected delivery after checkout.", "Includes space for citations, source notes, and batch references."]
	},
	{
		slug: "island-green-remedies-pdf",
		name: "Island Green Remedies PDF",
		category: "books",
		type: "book",
		price: 13,
		short: "A Caribbean-inspired guide to greens, roots, and flower remedies.",
		description: "A digital book concept honoring island plant knowledge with modern citation notes, preparation boundaries, and ingredient profiles.",
		uses: [
			"Ingredient education",
			"Recipe planning",
			"Subscriber release"
		],
		ingredients: [
			"PDF download",
			"Ingredient profiles",
			"Evidence notes"
		],
		image: cat_kits_default,
		badge: "Coming soon",
		format: "PDF download",
		proofNotes: ["Prepared as a sellable digital product once rights and references are verified."]
	},
	{
		slug: "chinese-traditional-medicine-pdf",
		name: "Chinese Traditional Medicine PDF",
		category: "books",
		type: "book",
		price: 18,
		short: "A cultural field guide to TCM herbs, formula thinking, and preparation cautions.",
		description: "A downloadable booklet introducing Chinese Traditional Medicine through origin, key herbs, kitchen-safe examples, proof notes, and respectful boundaries.",
		uses: [
			"Chinese tradition",
			"Digestion",
			"Immunity",
			"Teas"
		],
		ingredients: [
			"PDF download",
			"First-page preview",
			"Evidence notes"
		],
		image: cat_teas_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Full content unlocks after Stripe checkout and later protected delivery setup."]
	},
	{
		slug: "cajun-folk-remedies-pdf",
		name: "Cajun Folk Remedies PDF",
		category: "books",
		type: "book",
		price: 16,
		short: "Bayou household remedy notes organized with safety, folklore, and plant ID care.",
		description: "A digital guide to Cajun and Louisiana folk remedy context, featuring kitchen remedies, steam bowls, teas, and clear non-medical education language.",
		uses: [
			"Cajun tradition",
			"Digestion",
			"Skin care",
			"Teas"
		],
		ingredients: [
			"PDF download",
			"First-page preview",
			"Recipe archive"
		],
		image: cat_herbs_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Includes space for oral-history notes and folklife references."]
	},
	{
		slug: "african-herbalism-pdf",
		name: "African Herbalism PDF",
		category: "books",
		type: "book",
		price: 18,
		short: "A region-aware introduction to African food herbs, tree medicines, and ethics.",
		description: "An educational booklet that avoids treating Africa as one tradition and instead frames herbs through regional specificity, foodways, and source notes.",
		uses: [
			"African tradition",
			"Nutrition",
			"Skin care",
			"Roots"
		],
		ingredients: [
			"PDF download",
			"Ingredient profiles",
			"Evidence notes"
		],
		image: cat_herbs_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Prepared for future citation expansion and protected delivery."]
	},
	{
		slug: "wiccan-earth-based-healing-pdf",
		name: "Wiccan Earth-Based Healing PDF",
		category: "books",
		type: "book",
		price: 15,
		short: "Herbal correspondences, ritual safety, and earth-based recipe notes.",
		description: "A digital ritual field guide for Wiccan and earth-based botanical work with smoke-free options, plant cautions, and seasonal recipe pages.",
		uses: [
			"Wiccan tradition",
			"Protection",
			"Sleep",
			"Flowers"
		],
		ingredients: [
			"PDF download",
			"Ritual notes",
			"Recipe archive"
		],
		image: cat_flowers_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Separates spiritual practice from medical claims."]
	},
	{
		slug: "ayurvedic-indian-medicine-pdf",
		name: "Ayurvedic Indian Medicine PDF",
		category: "books",
		type: "book",
		price: 18,
		short: "Dosha, digestion, rasayana herbs, and kitchen preparations in one booklet.",
		description: "A cultural guide to Ayurvedic herb education, with practitioner boundaries, warm preparation ideas, and careful notes for medications and pregnancy.",
		uses: [
			"Ayurvedic tradition",
			"Sleep",
			"Digestion",
			"Oils"
		],
		ingredients: [
			"PDF download",
			"Preparation charts",
			"Evidence notes"
		],
		image: cat_oils_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Designed as educational content, not individualized Ayurvedic care."]
	},
	{
		slug: "native-american-plant-medicine-pdf",
		name: "Native American Plant Medicine PDF",
		category: "books",
		type: "book",
		price: 18,
		short: "An ethics-first guide to Native plant medicine history and sourcing boundaries.",
		description: "A respectful overview centered on sovereignty, closed knowledge, plant conservation, and only publicly shared educational material.",
		uses: [
			"Native American tradition",
			"Ethical sourcing",
			"Roots",
			"Teas"
		],
		ingredients: [
			"PDF download",
			"Ethics notes",
			"First-page preview"
		],
		image: cat_kits_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Content is intentionally limited to public, permission-safe education."]
	},
	{
		slug: "caribbean-rastafarian-herbalism-pdf",
		name: "Caribbean Rastafarian Herbalism PDF",
		category: "books",
		type: "book",
		price: 17,
		short: "Bush tea, ital living, bitters, roots tonics, and island plant notes.",
		description: "A digital booklet for Caribbean and Rastafarian herbal education, featuring hibiscus, soursop, moringa, bitters, and safety boundaries.",
		uses: [
			"Caribbean tradition",
			"Digestion",
			"Immunity",
			"Teas"
		],
		ingredients: [
			"PDF download",
			"Recipe archive",
			"Ingredient profiles"
		],
		image: cat_teas_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Documents traditional use without disease-treatment claims."]
	},
	{
		slug: "appalachian-folk-medicine-pdf",
		name: "Appalachian Folk Medicine PDF",
		category: "books",
		type: "book",
		price: 16,
		short: "Mountain remedy traditions, harvest ethics, teas, poultices, and garden medicine.",
		description: "A digital Appalachian folk medicine booklet covering home remedy history, plant identification caution, conservation, and preparation notes.",
		uses: [
			"Appalachian tradition",
			"Sleep",
			"Pain relief",
			"Roots"
		],
		ingredients: [
			"PDF download",
			"First-page preview",
			"Folklife notes"
		],
		image: cat_herbs_default,
		badge: "Digital",
		format: "PDF download",
		proofNotes: ["Built for future bibliography and protected PDF delivery."]
	}
];
var DEFAULT_PRODUCT_IMAGE_URL = "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=800&q=80";
var DEFAULT_PRESIDENT_EMAIL = "blackhatterxvi@gmail.com";
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-BuHf8DU7.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!body.includes("\"unhandled\":true") || !body.includes("\"message\":\"HTTPError\"")) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function json(data, init) {
	return new Response(JSON.stringify(data), {
		...init,
		headers: {
			"content-type": "application/json; charset=utf-8",
			...init?.headers
		}
	});
}
function isEmail(value) {
	return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
function readCookie(request, name) {
	const match = (request.headers.get("cookie") ?? "").split(";").map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
	return match ? decodeURIComponent(match.slice(name.length + 1)) : void 0;
}
function encodeBase64Url(value) {
	const bytes = typeof value === "string" ? new TextEncoder().encode(value) : new Uint8Array(value);
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
async function signSession(payload, secret) {
	const encodedPayload = encodeBase64Url(JSON.stringify(payload));
	const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign"]);
	return `${encodedPayload}.${encodeBase64Url(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(encodedPayload)))}`;
}
function decodeBase64Url(value) {
	const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
	const padded = normalized.padEnd(normalized.length + (4 - normalized.length % 4) % 4, "=");
	const binary = atob(padded);
	const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
	return new TextDecoder().decode(bytes);
}
function base64UrlToBytes(value) {
	const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
	const padded = normalized.padEnd(normalized.length + (4 - normalized.length % 4) % 4, "=");
	return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}
async function verifySessionCookie(request, secret) {
	const session = readCookie(request, "ha_session");
	if (!session || !secret) return void 0;
	const [payload, signature] = session.split(".");
	if (!payload || !signature) return void 0;
	const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["verify"]);
	const signatureBytes = base64UrlToBytes(signature);
	if (!await crypto.subtle.verify("HMAC", key, signatureBytes, new TextEncoder().encode(payload))) return void 0;
	const parsed = JSON.parse(decodeBase64Url(payload));
	if (!parsed.exp || parsed.exp < Math.floor(Date.now() / 1e3)) return void 0;
	return parsed;
}
function createCookie(name, value, maxAgeSeconds) {
	return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAgeSeconds}`;
}
function presidentEmail(env) {
	return (env.PRESIDENT_EMAIL || DEFAULT_PRESIDENT_EMAIL).trim().toLowerCase();
}
function getSupabaseUrl(env) {
	return (env.SUPABASE_URL || env.VITE_SUPABASE_URL)?.replace(/\/$/, "");
}
function getSupabaseServerKey(env) {
	return env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_PUBLISHABLE_KEY;
}
function getSupabasePublicKey(env) {
	return env.SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_PUBLISHABLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
}
function supabaseHeaders(key, prefer) {
	const headers = {
		apikey: key,
		authorization: `Bearer ${key}`,
		"content-type": "application/json"
	};
	if (prefer) headers.prefer = prefer;
	return headers;
}
function getSupabaseAdmin(env) {
	const url = getSupabaseUrl(env);
	const key = env.SUPABASE_SERVICE_ROLE_KEY;
	return url && key ? {
		url,
		key
	} : void 0;
}
function eq(value) {
	return encodeURIComponent(value);
}
function profileIdFromGoogleSub(sub) {
	return `00000000-0000-4000-8000-${sub.slice(-12).padStart(12, "0").replace(/[^0-9]/g, "0")}`.replace(/0{12}$/, "000000000001");
}
function referralCodeFromId(id) {
	return `HH${id.replace(/-/g, "").slice(0, 10).toUpperCase()}`;
}
async function supabaseJson(env, path, init = {}) {
	const admin = getSupabaseAdmin(env);
	if (!admin) throw new Error("Supabase service role is not configured.");
	const response = await fetch(`${admin.url}${path}`, {
		...init,
		headers: {
			...supabaseHeaders(admin.key, init.prefer),
			...init.headers
		}
	});
	if (!response.ok) {
		const detail = await response.text().catch(() => "");
		throw new Error(`Supabase ${path} failed: ${response.status} ${detail}`);
	}
	if (response.status === 204) return void 0;
	return await response.json().catch(() => void 0);
}
async function audit(env, userEmail, action, details) {
	try {
		await supabaseJson(env, "/rest/v1/audit_log", {
			method: "POST",
			body: JSON.stringify({
				user_email: userEmail ?? null,
				action_type: action,
				details
			})
		});
	} catch (error) {
		console.warn(error);
	}
}
async function getProfileByEmail(env, email) {
	return (await supabaseJson(env, `/rest/v1/profiles?select=*&email=eq.${eq(email.trim().toLowerCase())}&limit=1`).catch(() => []))[0];
}
async function getProfileByReferralCode(env, code) {
	return (await supabaseJson(env, `/rest/v1/profiles?select=*&referral_code=eq.${eq(code.trim().toUpperCase())}&limit=1`).catch(() => []))[0];
}
async function ensureProfile(env, user, referralCode) {
	const email = user.email.trim().toLowerCase();
	const existing = await getProfileByEmail(env, email);
	if (existing) {
		await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(existing.id)}`, {
			method: "PATCH",
			body: JSON.stringify({
				full_name: user.name ?? existing.full_name ?? null,
				avatar_url: user.picture ?? null,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			})
		}).catch(() => void 0);
		return existing;
	}
	const id = profileIdFromGoogleSub(user.sub);
	const referrer = referralCode && referralCode.trim() ? await getProfileByReferralCode(env, referralCode).catch(() => void 0) : void 0;
	const role = email === presidentEmail(env) ? "president" : "user";
	const profile = {
		id,
		email,
		full_name: user.name ?? null,
		avatar_url: user.picture ?? null,
		role,
		referral_code: referralCodeFromId(id),
		referred_by: referrer?.id ?? null
	};
	await supabaseJson(env, "/rest/v1/profiles", {
		method: "POST",
		prefer: "return=representation",
		body: JSON.stringify(profile)
	});
	if (referrer?.id && referrer.id !== id) await supabaseJson(env, "/rest/v1/referral_events?on_conflict=referrer_id,referred_id,event_type", {
		method: "POST",
		headers: { prefer: "resolution=ignore-duplicates" },
		body: JSON.stringify({
			referrer_id: referrer.id,
			referred_id: id,
			event_type: "signup",
			rupees_awarded: 0
		})
	}).catch(() => void 0);
	return profile;
}
async function getCurrentUser(request, env) {
	const session = await verifySessionCookie(request, env.AUTH_SESSION_SECRET);
	const email = session?.email?.trim().toLowerCase();
	const profile = email ? await getProfileByEmail(env, email).catch(() => void 0) : void 0;
	const role = email === presidentEmail(env) ? "president" : profile?.role || "user";
	return {
		session,
		email,
		profile,
		role,
		isPresident: role === "president" || email === presidentEmail(env)
	};
}
function getClientIp(request) {
	const headers = request.headers;
	return headers.get("cf-connecting-ip") || headers.get("x-real-ip") || (headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || null;
}
function cleanSecret(value) {
	const trimmed = value?.trim();
	if (!trimmed) return void 0;
	return trimmed.replace(/^["']|["']$/g, "");
}
function isStringArray(value) {
	return Array.isArray(value) && value.every((item) => typeof item === "string");
}
function listFromInput(value) {
	if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
	if (typeof value !== "string") return [];
	return value.split(/\r?\n|,/).map((item) => item.trim()).filter(Boolean);
}
function nullableString(value) {
	return typeof value === "string" && value.trim() ? value.trim() : null;
}
function centsFromDollars(value) {
	const number = typeof value === "number" ? value : Number(String(value ?? "").replace(/[^0-9.]/g, ""));
	if (!Number.isFinite(number) || number < 0) return 0;
	return Math.round(number * 100);
}
function mapBookOfRootsEntry(value) {
	if (!value || typeof value !== "object") return void 0;
	const row = value;
	const joinedProduct = row.products;
	const productSlug = joinedProduct && typeof joinedProduct === "object" && "slug" in joinedProduct ? joinedProduct.slug : void 0;
	if (typeof row.id !== "number" && typeof row.id !== "string" || typeof row.name !== "string" || !isStringArray(row.traditions) || !isStringArray(row.purposes) || typeof row.ingredient_type !== "string" || typeof row.description !== "string" || typeof row.how_to_use !== "string") return;
	return {
		id: row.id,
		name: row.name,
		image_url: typeof row.image_url === "string" ? row.image_url : null,
		traditions: row.traditions,
		purposes: row.purposes,
		ingredient_type: row.ingredient_type,
		description: row.description,
		how_to_use: row.how_to_use,
		product_id: typeof row.product_id === "number" ? row.product_id : null,
		product_slug: typeof productSlug === "string" ? productSlug : null,
		created_at: typeof row.created_at === "string" ? row.created_at : void 0
	};
}
async function requirePresident(request, env) {
	return (await verifySessionCookie(request, env.AUTH_SESSION_SECRET))?.email?.trim().toLowerCase() === presidentEmail(env);
}
async function handleBookOfRootsList(request, env) {
	if (request.method !== "GET") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "GET" }
	});
	const supabaseUrl = getSupabaseUrl(env);
	const supabaseKey = getSupabasePublicKey(env);
	if (!supabaseUrl || !supabaseKey) return json({
		entries: [],
		backend: "supabase"
	});
	const response = await fetch(`${supabaseUrl}/rest/v1/book_of_roots?select=*,products(slug)&order=name.asc`, { headers: supabaseHeaders(supabaseKey) });
	if (!response.ok) {
		console.error(JSON.stringify({
			message: "Book of Roots list failed",
			status: response.status
		}));
		return json({
			entries: [],
			backend: "supabase"
		});
	}
	const rows = await response.json().catch(() => []);
	return json({
		entries: Array.isArray(rows) ? rows.map(mapBookOfRootsEntry).filter((entry) => Boolean(entry)) : [],
		backend: "supabase"
	});
}
async function resolveProductId(productSlug, env) {
	if (typeof productSlug !== "string" || !productSlug.trim()) return null;
	const supabaseUrl = getSupabaseUrl(env);
	const key = env.SUPABASE_SERVICE_ROLE_KEY;
	if (!supabaseUrl || !key) return null;
	const response = await fetch(`${supabaseUrl}/rest/v1/products?select=id&slug=eq.${encodeURIComponent(productSlug.trim())}&limit=1`, { headers: supabaseHeaders(key) });
	if (!response.ok) return null;
	const rows = await response.json().catch(() => []);
	return typeof rows[0]?.id === "number" ? rows[0].id : null;
}
async function handleBookOfRootsUpsert(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	if (!await requirePresident(request, env)) return json({ message: "President access required." }, { status: 403 });
	const supabaseUrl = getSupabaseUrl(env);
	const key = env.SUPABASE_SERVICE_ROLE_KEY;
	if (!supabaseUrl || !key) return json({ message: "Supabase service role is not configured." }, { status: 503 });
	const body = await request.json().catch(() => null);
	if (!body || typeof body.name !== "string" || !body.name.trim() || !isStringArray(body.traditions) || !isStringArray(body.purposes) || typeof body.ingredient_type !== "string" || typeof body.description !== "string" || typeof body.how_to_use !== "string") return json({ message: "Complete all required Book of Roots fields." }, { status: 400 });
	const productId = await resolveProductId(body.product_slug, env);
	const payload = {
		name: body.name.trim(),
		image_url: typeof body.image_url === "string" && body.image_url.trim() ? body.image_url.trim() : null,
		traditions: body.traditions,
		purposes: body.purposes,
		ingredient_type: body.ingredient_type,
		description: body.description.trim(),
		how_to_use: body.how_to_use.trim(),
		product_id: productId
	};
	const id = typeof body.id === "number" ? body.id : void 0;
	const endpoint = id ? `${supabaseUrl}/rest/v1/book_of_roots?id=eq.${id}` : `${supabaseUrl}/rest/v1/book_of_roots`;
	const response = await fetch(endpoint, {
		method: id ? "PATCH" : "POST",
		headers: supabaseHeaders(key, "return=representation"),
		body: JSON.stringify(payload)
	});
	if (!response.ok) {
		const detail = await response.text().catch(() => "");
		console.error(JSON.stringify({
			message: "Book of Roots upsert failed",
			status: response.status,
			detail
		}));
		return json({ message: "Could not save this entry." }, { status: 502 });
	}
	return json({ message: id ? "Entry updated." : "Entry created." });
}
async function handleBookOfRootsDelete(request, env, id) {
	if (request.method !== "DELETE") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "DELETE" }
	});
	if (!await requirePresident(request, env)) return json({ message: "President access required." }, { status: 403 });
	if (!/^\d+$/.test(id)) return json({ message: "Invalid entry id." }, { status: 400 });
	const supabaseUrl = getSupabaseUrl(env);
	const key = env.SUPABASE_SERVICE_ROLE_KEY;
	if (!supabaseUrl || !key) return json({ message: "Supabase service role is not configured." }, { status: 503 });
	if (!(await fetch(`${supabaseUrl}/rest/v1/book_of_roots?id=eq.${id}`, {
		method: "DELETE",
		headers: supabaseHeaders(key)
	})).ok) return json({ message: "Could not delete this entry." }, { status: 502 });
	return json({ message: "Entry deleted." });
}
async function handleBookOfRootsNotify(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	const body = await request.json().catch(() => null);
	const email = body?.email;
	const ingredient = typeof body?.ingredient === "string" ? body.ingredient.trim().slice(0, 80) : "ingredient";
	if (!isEmail(email)) return json({ message: "Enter a valid email address." }, { status: 400 });
	const normalizedEmail = email.trim().toLowerCase();
	const source = `book-of-roots:${ingredient.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
	if (await upsertSupabaseSubscriber(normalizedEmail, source, env)) return json({ message: `We'll write when ${ingredient} is available.` });
	if (env.DB) {
		await env.DB.prepare(`insert into subscribers (email, source, status, created_at, updated_at)
       values (?, ?, 'active', datetime('now'), datetime('now'))
       on conflict(email) do update set source = excluded.source, status = 'active', updated_at = datetime('now')`).bind(normalizedEmail, source).run();
		return json({ message: `We'll write when ${ingredient} is available.` });
	}
	return json({ message: "The waitlist is not configured yet." }, { status: 503 });
}
async function upsertSupabaseSubscriber(email, source, env) {
	const supabaseUrl = getSupabaseUrl(env);
	const supabaseKey = getSupabaseServerKey(env);
	if (!supabaseUrl || !supabaseKey) return false;
	const response = await fetch(`${supabaseUrl}/rest/v1/subscribers?on_conflict=email`, {
		method: "POST",
		headers: {
			apikey: supabaseKey,
			authorization: `Bearer ${supabaseKey}`,
			"content-type": "application/json",
			prefer: "resolution=merge-duplicates"
		},
		body: JSON.stringify({
			email,
			source,
			status: "active",
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		})
	});
	if (!response.ok) {
		const detail = await response.text().catch(() => "");
		console.error(`Supabase subscriber upsert failed: ${response.status} ${detail}`);
		return false;
	}
	return true;
}
async function handleNewsletter(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	const body = await request.json().catch(() => null);
	const email = body && typeof body === "object" && "email" in body ? body.email : void 0;
	const source = body && typeof body === "object" && "source" in body && typeof body.source === "string" ? body.source : "site";
	if (!isEmail(email)) return json({ message: "Enter a valid email address." }, { status: 400 });
	const normalizedEmail = email.trim().toLowerCase();
	if (await upsertSupabaseSubscriber(normalizedEmail, source, env)) return json({
		message: "You are on the list.",
		stored: true,
		backend: "supabase"
	});
	if (!env.DB) {
		console.warn("Newsletter signup accepted without Supabase or DB binding. Add Supabase env vars or DB in wrangler.toml to persist subscribers.");
		return json({
			message: "You are on the list. Connect Supabase or Cloudflare D1 to persist signups.",
			stored: false
		}, { status: 202 });
	}
	await env.DB.prepare(`insert into subscribers (email, source, status, created_at, updated_at)
       values (?, ?, 'active', datetime('now'), datetime('now'))
       on conflict(email) do update set
         source = excluded.source,
         status = 'active',
         updated_at = datetime('now')`).bind(normalizedEmail, source).run();
	return json({
		message: "You are on the list.",
		stored: true
	});
}
async function handleSession(request, env) {
	const { session, email, profile, role, isPresident } = await getCurrentUser(request, env);
	const delegatedTabs = email ? await supabaseJson(env, `/rest/v1/office_tab_access?select=tab_id&user_email=eq.${eq(email)}`).catch(() => []) : [];
	return json({
		authenticated: Boolean(email),
		email: email ?? null,
		name: session?.name ?? null,
		picture: session?.picture ?? null,
		isPresident,
		role,
		rupees: profile?.rupees ?? 0,
		referralCode: profile?.referral_code ?? null,
		officeTabs: delegatedTabs.map((row) => row.tab_id)
	});
}
async function handleProductsList(env) {
	const supabaseUrl = getSupabaseUrl(env);
	const supabaseKey = getSupabasePublicKey(env);
	if (!supabaseUrl || !supabaseKey) return json({
		products: [],
		backend: "supabase"
	});
	async function fetchProducts(path) {
		const response = await fetch(`${supabaseUrl}${path}`, { headers: supabaseHeaders(supabaseKey) });
		if (!response.ok) {
			const detail = await response.text().catch(() => "");
			throw new Error(`Supabase products list failed: ${response.status} ${detail}`);
		}
		return await response.json().catch(() => []);
	}
	let rows = [];
	try {
		rows = await fetchProducts("/rest/v1/products?select=slug,name,category,type,price_cents,short,description,image_url,status,stock,uses,ingredients,badge,format&status=eq.active&order=name.asc");
	} catch (error) {
		console.warn(error);
		rows = await fetchProducts("/rest/v1/products?select=slug,name,category,type,price_cents,short,description,image_url,status,uses,ingredients,badge,format&status=eq.active&order=name.asc").catch(() => []);
	}
	return json({
		products: rows.map((row) => {
			const imageUrl = typeof row.image_url === "string" && row.image_url.trim() ? row.image_url.trim() : DEFAULT_PRODUCT_IMAGE_URL;
			return {
				...row,
				image_url: imageUrl
			};
		}),
		backend: "supabase"
	});
}
async function handleNightbloomList(request, env) {
	const rows = await supabaseJson(env, `/rest/v1/nightbloom_pdfs?select=*&order=sort_order.asc,created_at.desc&status=eq.active`).catch(() => []);
	const user = await getCurrentUser(request, env);
	const purchasedIds = user.email ? await getPurchasedPdfIds(env, user.email) : /* @__PURE__ */ new Set();
	return json({
		pdfs: rows.map((row) => {
			const unlocked = (row.price_cents ?? 0) === 0 ? Boolean(user.email) : purchasedIds.has(row.id);
			return {
				id: row.id,
				title: row.title,
				blurb: row.blurb,
				cover_image_url: row.cover_image_url ?? null,
				price_cents: row.price_cents ?? 0,
				status: row.status,
				unlocked
			};
		}),
		authenticated: Boolean(user.email)
	});
}
async function getPurchasedPdfIds(env, email) {
	const rows = await supabaseJson(env, `/rest/v1/pdf_purchases?select=pdf_id&buyer_email=eq.${eq(email.trim().toLowerCase())}`).catch(() => []);
	return new Set(rows.map((row) => row.pdf_id));
}
async function handleNightbloomDownload(request, env) {
	const id = Number(new URL(request.url).searchParams.get("id"));
	if (!Number.isInteger(id) || id < 1) return json({ message: "Invalid PDF id." }, { status: 400 });
	const user = await getCurrentUser(request, env);
	if (!user.email) return json({ message: "Please sign in to access this PDF." }, { status: 401 });
	const pdf = (await supabaseJson(env, `/rest/v1/nightbloom_pdfs?select=id,pdf_url,price_cents,status&id=eq.${id}&limit=1`).catch(() => []))[0];
	if (!pdf || pdf.status !== "active") return json({ message: "PDF not found." }, { status: 404 });
	if (!((pdf.price_cents ?? 0) === 0)) {
		if (!(await getPurchasedPdfIds(env, user.email)).has(pdf.id) && !user.isPresident) return json({ message: "Purchase this PDF to download it." }, { status: 403 });
	}
	return json({ url: pdf.pdf_url });
}
async function handleNightbloomCheckout(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	const stripeSecretKey = cleanSecret(env.STRIPE_SECRET_KEY);
	if (!stripeSecretKey || !stripeSecretKey.startsWith("sk_") && !stripeSecretKey.startsWith("rk_")) return json({ message: "Stripe is not configured yet." }, { status: 503 });
	const body = await request.json().catch(() => null);
	const id = Number(body?.id);
	if (!Number.isInteger(id) || id < 1) return json({ message: "Invalid PDF id." }, { status: 400 });
	const pdf = (await supabaseJson(env, `/rest/v1/nightbloom_pdfs?select=*&id=eq.${id}&limit=1`).catch(() => []))[0];
	if (!pdf || pdf.status !== "active") return json({ message: "PDF not found." }, { status: 404 });
	if ((pdf.price_cents ?? 0) < 1) return json({ message: "This PDF is free for members." }, { status: 400 });
	const user = await getCurrentUser(request, env);
	if (!user.email) return json({ message: "Please sign in before purchasing." }, { status: 401 });
	if ((await getPurchasedPdfIds(env, user.email)).has(id)) return json({ message: "You already own this PDF." }, { status: 400 });
	const origin = new URL(request.url).origin;
	const params = new URLSearchParams({
		mode: "payment",
		success_url: `${origin}/nightbloom?purchase=success`,
		cancel_url: `${origin}/nightbloom?purchase=cancelled`,
		customer_email: user.email,
		"metadata[kind]": "nightbloom_pdf",
		"metadata[pdf_id]": String(id),
		"metadata[user_email]": user.email,
		"line_items[0][quantity]": "1",
		"line_items[0][price_data][currency]": "usd",
		"line_items[0][price_data][unit_amount]": String(pdf.price_cents),
		"line_items[0][price_data][product_data][name]": pdf.title.slice(0, 255),
		"line_items[0][price_data][product_data][description]": (pdf.blurb || "Night Bloom Library PDF").slice(0, 255),
		"line_items[0][price_data][product_data][metadata][pdf_id]": String(id)
	});
	const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
		method: "POST",
		headers: {
			authorization: `Bearer ${stripeSecretKey}`,
			"content-type": "application/x-www-form-urlencoded"
		},
		body: params
	}).catch(() => null);
	const stripeData = await stripeResponse?.json().catch(() => null);
	if (!stripeResponse?.ok || !stripeData?.url) return json({ message: stripeData?.error?.message || "Stripe could not create checkout." }, { status: 502 });
	return json({ url: stripeData.url });
}
async function handleGuildApply(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	const body = await request.json().catch(() => null);
	const fullName = body?.full_name?.trim();
	const email = body?.email?.trim().toLowerCase();
	if (!fullName) return json({ message: "Your name is required." }, { status: 400 });
	if (!email || !isEmail(email)) return json({ message: "A valid email is required." }, { status: 400 });
	if (!body?.message?.trim()) return json({ message: "Please tell us why this role calls to you." }, { status: 400 });
	try {
		await supabaseJson(env, "/rest/v1/guild_applications", {
			method: "POST",
			body: JSON.stringify({
				full_name: fullName,
				email,
				job_id: nullableString(body.job_id),
				job_title: nullableString(body.job_title),
				portfolio_url: nullableString(body.portfolio_url),
				message: body.message.trim(),
				status: "new"
			})
		});
	} catch (error) {
		console.error(JSON.stringify({
			message: "Guild application save failed",
			detail: error instanceof Error ? error.message : String(error)
		}));
		return json({ message: "We could not record your application. Please try again." }, { status: 502 });
	}
	await audit(env, email, "guild.apply", { job_title: body.job_title ?? null });
	return json({ message: "Application received." });
}
async function handleStripeCheckout(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	const stripeSecretKey = cleanSecret(env.STRIPE_SECRET_KEY);
	if (!stripeSecretKey) {
		console.error(JSON.stringify({
			message: "Stripe checkout unavailable: STRIPE_SECRET_KEY binding is missing",
			route: "/api/checkout"
		}));
		return json({ message: "Stripe is not configured yet. Add STRIPE_SECRET_KEY in Cloudflare." }, { status: 503 });
	}
	if (!stripeSecretKey.startsWith("sk_") && !stripeSecretKey.startsWith("rk_")) {
		console.error(JSON.stringify({
			message: "Stripe checkout unavailable: STRIPE_SECRET_KEY does not look like a Stripe secret key",
			route: "/api/checkout"
		}));
		return json({ message: "Stripe secret key is not valid." }, { status: 503 });
	}
	const body = await request.json().catch(() => null);
	const rawItems = body && typeof body === "object" && "items" in body ? body.items : void 0;
	if (!Array.isArray(rawItems) || rawItems.length === 0) return json({ message: "Your satchel is empty." }, { status: 400 });
	const items = rawItems.map((item) => {
		if (!item || typeof item !== "object") return void 0;
		const slug = "slug" in item && typeof item.slug === "string" ? item.slug : "";
		const qty = "qty" in item && typeof item.qty === "number" ? Math.floor(item.qty) : 0;
		const product = products.find((p) => p.slug === slug);
		if (!product || qty < 1) return void 0;
		return {
			product,
			qty: Math.min(qty, 99)
		};
	}).filter(Boolean);
	if (items.length === 0) return json({ message: "No checkout-ready products were found." }, { status: 400 });
	const url = new URL(request.url);
	const shipping = items.reduce((sum, item) => sum + item.product.price * item.qty, 0) > 50 ? 0 : 6;
	const currentUser = await getCurrentUser(request, env);
	const marketingCode = readCookie(request, "ha_marketing_src");
	const params = new URLSearchParams({
		mode: "payment",
		success_url: `${url.origin}/cart?checkout=success`,
		cancel_url: `${url.origin}/cart?checkout=cancelled`,
		"automatic_tax[enabled]": "true",
		billing_address_collection: "auto",
		"shipping_address_collection[allowed_countries][0]": "US",
		"metadata[source]": "hyrule-herb-apothecary",
		"metadata[items]": JSON.stringify(items.map(({ product, qty }) => ({
			slug: product.slug,
			qty
		}))).slice(0, 500),
		"metadata[user_email]": currentUser.email ?? "",
		"metadata[marketing_link_code]": marketingCode ?? ""
	});
	if (currentUser.email) params.set("customer_email", currentUser.email);
	items.forEach(({ product, qty }, index) => {
		params.set(`line_items[${index}][quantity]`, String(qty));
		params.set(`line_items[${index}][price_data][currency]`, "usd");
		params.set(`line_items[${index}][price_data][unit_amount]`, String(Math.round(product.price * 100)));
		params.set(`line_items[${index}][price_data][product_data][name]`, product.name);
		params.set(`line_items[${index}][price_data][product_data][description]`, product.short.slice(0, 255));
		params.set(`line_items[${index}][price_data][product_data][metadata][slug]`, product.slug);
	});
	if (shipping > 0) {
		const index = items.length;
		params.set(`line_items[${index}][quantity]`, "1");
		params.set(`line_items[${index}][price_data][currency]`, "usd");
		params.set(`line_items[${index}][price_data][unit_amount]`, String(shipping * 100));
		params.set(`line_items[${index}][price_data][product_data][name]`, "Standard shipping");
	}
	let stripeResponse;
	try {
		stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
			method: "POST",
			headers: {
				authorization: `Bearer ${stripeSecretKey}`,
				"content-type": "application/x-www-form-urlencoded"
			},
			body: params
		});
	} catch (error) {
		console.error(JSON.stringify({
			message: "Stripe checkout request failed before receiving a response",
			detail: error instanceof Error ? error.message : String(error)
		}));
		return json({ message: "Stripe could not be reached." }, { status: 502 });
	}
	const stripeData = await stripeResponse.json().catch(() => null);
	if (!stripeResponse.ok || !stripeData?.url) {
		console.error(JSON.stringify({
			message: "Stripe checkout session creation failed",
			status: stripeResponse.status,
			detail: stripeData?.error?.message ?? "Stripe response did not include a checkout URL"
		}));
		return json({ message: stripeData?.error?.message || "Stripe could not create checkout." }, { status: 502 });
	}
	return json({ url: stripeData.url });
}
async function verifyStripeWebhook(rawBody, signatureHeader, secret) {
	const webhookSecret = cleanSecret(secret);
	if (!webhookSecret) return true;
	if (!signatureHeader) return false;
	const timestamp = signatureHeader.match(/(?:^|,)t=([^,]+)/)?.[1];
	const signature = signatureHeader.match(/(?:^|,)v1=([^,]+)/)?.[1];
	if (!timestamp || !signature) return false;
	const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(webhookSecret), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign"]);
	const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${timestamp}.${rawBody}`));
	return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("") === signature;
}
async function getCjAccessToken(env) {
	const key = cleanSecret(env.CJ_API_KEY);
	if (!key) throw new Error("CJ_API_KEY is not configured.");
	const response = await fetch("https://developers.cjdropshipping.com/api2.0/v1/authentication/getAccessToken", {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({
			email: key,
			password: key,
			accessToken: key,
			cjApiKey: key
		})
	});
	const data = await response.json().catch(() => ({}));
	const token = data.data?.accessToken;
	if (!response.ok || !token) throw new Error(data.message || "Could not get CJ access token.");
	return token;
}
async function createCjOrder(env, order, items) {
	const token = await getCjAccessToken(env);
	const address = order.shippingAddress ?? {};
	const payload = {
		orderNumber: String(order.id),
		shippingZip: address.postal_code ?? "",
		shippingCountry: address.country ?? "US",
		shippingProvince: address.state ?? "",
		shippingCity: address.city ?? "",
		shippingAddress: [address.line1, address.line2].filter(Boolean).join(" "),
		shippingCustomerName: order.shippingName ?? "Hyrule Herb customer",
		products: items.map((item) => ({
			vid: item.cj_variant_id,
			pid: item.cj_product_id,
			quantity: item.qty
		}))
	};
	const response = await fetch("https://developers.cjdropshipping.com/api2.0/v1/shopping/order/createOrder", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"CJ-Access-Token": token
		},
		body: JSON.stringify(payload)
	});
	const data = await response.json().catch(() => ({}));
	const cjOrderId = data.data?.orderId || data.data?.id;
	if (!response.ok || !cjOrderId) throw new Error(data.message || "CJ order creation failed.");
	return cjOrderId;
}
async function maybeAwardReferral(env, email) {
	if (!email) return;
	const profile = await getProfileByEmail(env, email).catch(() => void 0);
	if (!profile?.id || !profile.referred_by) return;
	if ((await supabaseJson(env, `/rest/v1/referral_events?select=id&referred_id=eq.${eq(profile.id)}&event_type=eq.purchase&limit=1`).catch(() => [])).length) return;
	await supabaseJson(env, "/rest/v1/referral_events", {
		method: "POST",
		body: JSON.stringify({
			referrer_id: profile.referred_by,
			referred_id: profile.id,
			event_type: "purchase",
			rupees_awarded: 50
		})
	});
	const current = (await supabaseJson(env, `/rest/v1/profiles?select=rupees&id=eq.${eq(profile.referred_by)}&limit=1`).catch(() => []))[0]?.rupees ?? 0;
	await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(profile.referred_by)}`, {
		method: "PATCH",
		body: JSON.stringify({
			rupees: current + 50,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		})
	});
}
async function incrementMarketingConversion(env, code, totalCents) {
	if (!code) return;
	const link = (await supabaseJson(env, `/rest/v1/marketing_links?select=id,conversions,revenue_generated&link_code=eq.${eq(code)}&limit=1`).catch(() => []))[0];
	if (!link) return;
	await supabaseJson(env, `/rest/v1/marketing_links?id=eq.${link.id}`, {
		method: "PATCH",
		body: JSON.stringify({
			conversions: (link.conversions ?? 0) + 1,
			revenue_generated: Number(link.revenue_generated ?? 0) + totalCents / 100
		})
	});
}
async function handleStripeWebhook(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	const rawBody = await request.text();
	if (!await verifyStripeWebhook(rawBody, request.headers.get("stripe-signature"), env.STRIPE_WEBHOOK_SECRET)) return json({ message: "Invalid Stripe signature." }, { status: 400 });
	const event = JSON.parse(rawBody);
	if (event.type !== "checkout.session.completed") return json({ received: true });
	const session = event.data?.object ?? {};
	const metadata = session.metadata && typeof session.metadata === "object" ? session.metadata : {};
	const sessionId = String(session.id ?? "");
	if (!sessionId) return json({ message: "Missing checkout session id." }, { status: 400 });
	const itemRefs = JSON.parse(metadata.items || "[]");
	const email = typeof session.customer_details === "object" && session.customer_details ? String(session.customer_details.email ?? metadata.user_email ?? "") : metadata.user_email || null;
	if (metadata.kind === "nightbloom_pdf") {
		const pdfId = Number(metadata.pdf_id);
		if (Number.isInteger(pdfId) && email) {
			await supabaseJson(env, "/rest/v1/pdf_purchases?on_conflict=pdf_id,buyer_email", {
				method: "POST",
				prefer: "resolution=merge-duplicates",
				body: JSON.stringify({
					pdf_id: pdfId,
					buyer_email: email.trim().toLowerCase(),
					stripe_checkout_session_id: sessionId,
					amount_cents: Number(session.amount_total ?? 0)
				})
			}).catch(() => void 0);
			await maybeAwardReferral(env, email);
		}
		return json({
			received: true,
			pdfId
		});
	}
	const shippingDetails = typeof session.shipping_details === "object" && session.shipping_details ? session.shipping_details : {};
	const shippingAddress = typeof shippingDetails.address === "object" && shippingDetails.address ? shippingDetails.address : null;
	const totalCents = Number(session.amount_total ?? 0);
	const subtotalCents = Number(session.amount_subtotal ?? totalCents);
	const orderId = (await supabaseJson(env, "/rest/v1/orders?on_conflict=stripe_checkout_session_id", {
		method: "POST",
		prefer: "resolution=merge-duplicates,return=representation",
		body: JSON.stringify({
			user_email: email || null,
			stripe_checkout_session_id: sessionId,
			status: "paid",
			subtotal_cents: subtotalCents,
			total_cents: totalCents,
			marketing_link_code: metadata.marketing_link_code || null,
			shipping_name: typeof shippingDetails.name === "string" ? shippingDetails.name : null,
			shipping_address: shippingAddress,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		})
	}))[0]?.id;
	if (!orderId) return json({ message: "Order could not be recorded." }, { status: 502 });
	const productRows = await supabaseJson(env, `/rest/v1/products?select=slug,cj_product_id,cj_variant_id,price_cents&slug=in.(${itemRefs.map((item) => `"${item.slug}"`).join(",")})`).catch(() => []);
	const bySlug = new Map(productRows.map((row) => [row.slug, row]));
	await Promise.all(itemRefs.map((item) => supabaseJson(env, "/rest/v1/order_items", {
		method: "POST",
		body: JSON.stringify({
			order_id: orderId,
			product_slug: item.slug,
			quantity: item.qty,
			unit_price_cents: bySlug.get(item.slug)?.price_cents ?? 0
		})
	}).catch(() => void 0)));
	const fulfillable = itemRefs.map((item) => ({
		...item,
		...bySlug.get(item.slug)
	}));
	if (fulfillable.length > 0 && fulfillable.every((item) => item.cj_product_id && item.cj_variant_id)) try {
		const cjOrderId = await createCjOrder(env, {
			id: orderId,
			shippingName: typeof shippingDetails.name === "string" ? shippingDetails.name : null,
			shippingAddress
		}, fulfillable);
		await supabaseJson(env, `/rest/v1/orders?id=eq.${orderId}`, {
			method: "PATCH",
			body: JSON.stringify({
				cj_order_id: cjOrderId,
				fulfillment_status: "sent_to_cj",
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			})
		});
	} catch (error) {
		console.error(error);
		await supabaseJson(env, `/rest/v1/orders?id=eq.${orderId}`, {
			method: "PATCH",
			body: JSON.stringify({
				fulfillment_status: "manual",
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			})
		}).catch(() => void 0);
	}
	await maybeAwardReferral(env, email);
	await incrementMarketingConversion(env, metadata.marketing_link_code, totalCents);
	return json({
		received: true,
		orderId
	});
}
var roleTabs = {
	president: [
		"dashboard",
		"products",
		"orders",
		"marketing",
		"users",
		"access",
		"announcements",
		"audit",
		"revenue",
		"nightbloom",
		"command",
		"book_of_roots",
		"analytics",
		"guild"
	],
	admin: [
		"dashboard",
		"products",
		"orders",
		"marketing",
		"users",
		"access",
		"announcements",
		"audit",
		"revenue",
		"nightbloom",
		"command",
		"book_of_roots",
		"analytics",
		"guild"
	]
};
async function allowedTabsForUser(env, email, role) {
	const tabs = new Set(roleTabs[role] ?? []);
	if (email) (await supabaseJson(env, `/rest/v1/office_tab_access?select=tab_id&user_email=eq.${eq(email)}`).catch(() => [])).forEach((row) => tabs.add(row.tab_id));
	return [...tabs];
}
async function requireOfficeAccess(request, env, tab) {
	const user = await getCurrentUser(request, env);
	if (!user.email) return {
		ok: false,
		response: json({ message: "Sign in required." }, { status: 401 }),
		user
	};
	if (user.profile?.active === false) return {
		ok: false,
		response: json({ message: "Account is inactive." }, { status: 403 }),
		user
	};
	const tabs = await allowedTabsForUser(env, user.email, user.role);
	if (tab && !tabs.includes(tab)) return {
		ok: false,
		response: json({ message: "Office tab access required." }, { status: 403 }),
		user
	};
	if (!tab && tabs.length === 0) return {
		ok: false,
		response: json({ message: "Office access required." }, { status: 403 }),
		user
	};
	return {
		ok: true,
		user,
		tabs
	};
}
async function handleMarketingClick(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, { status: 405 });
	const code = (await request.json().catch(() => null))?.code?.trim();
	if (!code) return json({ tracked: false });
	const link = (await supabaseJson(env, `/rest/v1/marketing_links?select=id,clicks&link_code=eq.${eq(code)}&limit=1`).catch(() => []))[0];
	if (link) await supabaseJson(env, `/rest/v1/marketing_links?id=eq.${link.id}`, {
		method: "PATCH",
		body: JSON.stringify({ clicks: (link.clicks ?? 0) + 1 })
	}).catch(() => void 0);
	return json({ tracked: Boolean(link) }, { headers: { "set-cookie": `ha_marketing_src=${encodeURIComponent(code)}; Path=/; Secure; SameSite=Lax; Max-Age=${3600 * 24 * 30}` } });
}
async function handleReferralCapture(request) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, { status: 405 });
	const code = (await request.json().catch(() => null))?.code?.trim().toUpperCase();
	return json({ captured: Boolean(code) }, code ? { headers: { "set-cookie": `ha_ref=${encodeURIComponent(code)}; Path=/; Secure; SameSite=Lax; Max-Age=${3600 * 24 * 30}` } } : void 0);
}
async function handleAnnouncement(request, env) {
	const announcement = (await supabaseJson(env, "/rest/v1/site_announcements?select=message,active,audience&id=eq.1&limit=1").catch(() => []))[0];
	if (!announcement?.active || !announcement.message) return json({
		message: "",
		audience: "site"
	});
	const audience = announcement.audience === "employees" ? "employees" : "site";
	if (audience === "employees") {
		const user = await getCurrentUser(request, env);
		if ((user.email ? await allowedTabsForUser(env, user.email, user.role) : []).length === 0) return json({
			message: "",
			audience
		});
	}
	return json({
		message: announcement.message,
		audience
	});
}
async function handleOfficeData(request, env) {
	if (request.method !== "GET") return json({ message: "Method not allowed" }, { status: 405 });
	const access = await requireOfficeAccess(request, env);
	if (!access.ok) return access.response;
	const [productsRows, orders, marketingLinks, users, tabAccess, announcement, auditRows, nightbloomPdfs, bookOfRoots, bannedIps, auditDocuments, pageViews, guildApplications] = await Promise.all([
		supabaseJson(env, "/rest/v1/products?select=slug,name,type,category,price_cents,short,description,image_url,cj_product_id,cj_variant_id,status,uses,ingredients,badge,format&order=name.asc").catch(() => []),
		supabaseJson(env, "/rest/v1/orders?select=*,order_items(*)&order=created_at.desc&limit=100").catch(() => []),
		supabaseJson(env, "/rest/v1/marketing_links?select=*&order=created_at.desc").catch(() => []),
		supabaseJson(env, "/rest/v1/profiles?select=id,email,full_name,role,rupees,active,blocked,last_ip,created_at&order=created_at.desc").catch(() => []),
		supabaseJson(env, "/rest/v1/office_tab_access?select=*").catch(() => []),
		supabaseJson(env, "/rest/v1/site_announcements?select=message,active,audience&id=eq.1&limit=1").catch(() => []),
		supabaseJson(env, "/rest/v1/audit_log?select=*&order=created_at.desc&limit=100").catch(() => []),
		supabaseJson(env, "/rest/v1/nightbloom_pdfs?select=*&order=sort_order.asc,created_at.desc").catch(() => []),
		supabaseJson(env, "/rest/v1/book_of_roots?select=id,name,image_url,traditions,purposes,ingredient_type,description,how_to_use,product_id,products:product_id(slug)&order=created_at.desc").catch(() => []),
		supabaseJson(env, "/rest/v1/banned_ips?select=*&order=created_at.desc").catch(() => []),
		supabaseJson(env, "/rest/v1/audit_documents?select=*&order=created_at.desc").catch(() => []),
		supabaseJson(env, "/rest/v1/page_views?select=path,source,referrer,user_email,created_at&order=created_at.desc&limit=1000").catch(() => []),
		supabaseJson(env, "/rest/v1/guild_applications?select=*&order=created_at.desc&limit=200").catch(() => [])
	]);
	return json({
		me: {
			email: access.user.email,
			role: access.user.role,
			isPresident: access.user.isPresident
		},
		allowedTabs: access.tabs,
		products: productsRows,
		orders,
		marketingLinks,
		users,
		tabAccess,
		announcement: Array.isArray(announcement) ? announcement[0] ?? {
			message: "",
			active: false,
			audience: "site"
		} : {
			message: "",
			active: false,
			audience: "site"
		},
		auditLog: auditRows,
		nightbloomPdfs,
		bookOfRoots,
		bannedIps,
		auditDocuments,
		analytics: buildAnalytics(Array.isArray(pageViews) ? pageViews : []),
		guildApplications
	});
}
function buildAnalytics(rows) {
	const now = Date.now();
	const last24h = rows.filter((row) => row.created_at && now - new Date(row.created_at).getTime() <= 864e5);
	const last7d = rows.filter((row) => row.created_at && now - new Date(row.created_at).getTime() <= 7 * 864e5);
	const tally = (items) => {
		const map = /* @__PURE__ */ new Map();
		items.forEach((item) => map.set(item, (map.get(item) ?? 0) + 1));
		return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([label, count]) => ({
			label,
			count
		}));
	};
	const byDay = /* @__PURE__ */ new Map();
	last7d.forEach((row) => {
		const key = new Date(row.created_at).toISOString().slice(0, 10);
		byDay.set(key, (byDay.get(key) ?? 0) + 1);
	});
	return {
		totalViews: rows.length,
		views24h: last24h.length,
		views7d: last7d.length,
		uniqueVisitors7d: new Set(last7d.map((row) => row.user_email || "anon")).size,
		topPages: tally(last7d.map((row) => row.path || "/")),
		topSources: tally(last7d.map((row) => row.source || row.referrer || "direct")),
		daily: [...byDay.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([date, views]) => ({
			date,
			views
		}))
	};
}
async function handleOfficeProduct(request, env) {
	const access = await requireOfficeAccess(request, env, "products");
	if (!access.ok) return access.response;
	const body = await request.json().catch(() => null);
	if (!body?.slug) return json({ message: "Product slug is required." }, { status: 400 });
	const priceCents = "price" in body ? centsFromDollars(body.price) : void 0;
	const payload = { updated_at: (/* @__PURE__ */ new Date()).toISOString() };
	if (typeof body.name === "string") payload.name = body.name.trim();
	if (typeof body.short === "string") payload.short = body.short.trim();
	if (typeof body.description === "string") payload.description = body.description.trim();
	if (typeof body.category === "string") payload.category = body.category.trim();
	if (typeof body.type === "string") payload.type = body.type.trim();
	if (typeof body.status === "string") payload.status = body.status.trim();
	if (priceCents !== void 0) payload.price_cents = priceCents;
	if ("image_url" in body) payload.image_url = nullableString(body.image_url);
	if ("badge" in body) payload.badge = nullableString(body.badge);
	if ("format" in body) payload.format = nullableString(body.format);
	if ("uses" in body) payload.uses = listFromInput(body.uses);
	if ("ingredients" in body) payload.ingredients = listFromInput(body.ingredients);
	if ("cj_product_id" in body) payload.cj_product_id = nullableString(body.cj_product_id);
	if ("cj_variant_id" in body) payload.cj_variant_id = nullableString(body.cj_variant_id);
	await supabaseJson(env, `/rest/v1/products?slug=eq.${eq(body.slug)}`, {
		method: "PATCH",
		body: JSON.stringify(payload)
	});
	await audit(env, access.user.email, "product.cj_update", { slug: body.slug });
	return json({ message: "Product saved." });
}
function makeLinkCode(name) {
	return `${name.toUpperCase().replace(/[^A-Z0-9]+/g, "").slice(0, 10) || "MARKET"}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
async function handleOfficeMarketing(request, env) {
	const access = await requireOfficeAccess(request, env, "marketing");
	if (!access.ok) return access.response;
	const body = await request.json().catch(() => null);
	if (!body?.employee_name?.trim()) return json({ message: "Employee name is required." }, { status: 400 });
	const employeeName = body.employee_name.trim();
	const employeeEmail = body.employee_email?.trim().toLowerCase();
	let employee = employeeEmail ? await getProfileByEmail(env, employeeEmail).catch(() => void 0) : void 0;
	if (employeeEmail && isEmail(employeeEmail) && !employee) {
		const id = crypto.randomUUID();
		employee = (await supabaseJson(env, "/rest/v1/profiles?on_conflict=email", {
			method: "POST",
			prefer: "resolution=merge-duplicates,return=representation",
			body: JSON.stringify({
				id,
				email: employeeEmail,
				full_name: employeeName,
				role: "marketing",
				referral_code: referralCodeFromId(id)
			})
		}).catch(() => []))[0] ?? await getProfileByEmail(env, employeeEmail).catch(() => void 0);
	} else if (employee && employee.role === "user") await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(employee.id)}`, {
		method: "PATCH",
		body: JSON.stringify({
			role: "marketing",
			full_name: employee.full_name || employeeName,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		})
	}).catch(() => void 0);
	const linkCode = makeLinkCode(employeeName);
	await supabaseJson(env, "/rest/v1/marketing_links", {
		method: "POST",
		body: JSON.stringify({
			employee_id: employee?.id ?? null,
			employee_name: employeeName,
			link_code: linkCode
		})
	});
	await audit(env, access.user.email, "marketing_link.create", {
		employee_name: employeeName,
		employee_email: employeeEmail ?? null,
		link_code: linkCode
	});
	return json({
		message: "Marketing link created.",
		linkCode
	});
}
async function handleOfficeUser(request, env) {
	const access = await requireOfficeAccess(request, env, "users");
	if (!access.ok) return access.response;
	const body = await request.json().catch(() => null);
	if (!body?.id) return json({ message: "User id is required." }, { status: 400 });
	const payload = { updated_at: (/* @__PURE__ */ new Date()).toISOString() };
	if (body.role && [
		"user",
		"marketing",
		"it_coordinator",
		"admin",
		"president"
	].includes(body.role)) payload.role = body.role;
	if (typeof body.active === "boolean") payload.active = body.active;
	if (typeof body.blocked === "boolean") {
		payload.blocked = body.blocked;
		if (body.blocked) payload.active = false;
	}
	await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(body.id)}`, {
		method: "PATCH",
		body: JSON.stringify(payload)
	});
	await audit(env, access.user.email, "user.update", {
		id: body.id,
		...payload
	});
	return json({ message: "User updated." });
}
async function handleOfficeBanIp(request, env) {
	const access = await requireOfficeAccess(request, env, "users");
	if (!access.ok) return access.response;
	const body = await request.json().catch(() => null);
	const ip = body?.ip_address?.trim();
	if (!ip) return json({ message: "IP address is required." }, { status: 400 });
	if (body?.action === "unban") {
		await supabaseJson(env, `/rest/v1/banned_ips?ip_address=eq.${eq(ip)}`, { method: "DELETE" });
		await audit(env, access.user.email, "ip.unban", { ip_address: ip });
		return json({ message: "IP address unbanned." });
	}
	await supabaseJson(env, "/rest/v1/banned_ips?on_conflict=ip_address", {
		method: "POST",
		prefer: "resolution=merge-duplicates",
		body: JSON.stringify({
			ip_address: ip,
			reason: nullableString(body?.reason),
			created_by: access.user.email
		})
	});
	await audit(env, access.user.email, "ip.ban", {
		ip_address: ip,
		reason: body?.reason ?? null
	});
	return json({ message: "IP address banned." });
}
async function handleOfficeAuditDoc(request, env) {
	const access = await requireOfficeAccess(request, env, "audit");
	if (!access.ok) return access.response;
	if (request.method === "DELETE") {
		const id = new URL(request.url).searchParams.get("id");
		if (!id || !/^\d+$/.test(id)) return json({ message: "Invalid document id." }, { status: 400 });
		await supabaseJson(env, `/rest/v1/audit_documents?id=eq.${id}`, { method: "DELETE" });
		await audit(env, access.user.email, "audit_document.delete", { id });
		return json({ message: "Audit document removed." });
	}
	const body = await request.json().catch(() => null);
	if (!body?.title?.trim() || !body.file_url?.trim()) return json({ message: "Title and file URL are required." }, { status: 400 });
	await supabaseJson(env, "/rest/v1/audit_documents", {
		method: "POST",
		body: JSON.stringify({
			title: body.title.trim(),
			description: nullableString(body.description),
			file_url: body.file_url.trim(),
			uploaded_by: access.user.email
		})
	});
	await audit(env, access.user.email, "audit_document.upload", { title: body.title.trim() });
	return json({ message: "Audit document uploaded." });
}
async function handleAnalyticsTrack(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, { status: 405 });
	const ip = getClientIp(request);
	if (ip) {
		if ((await supabaseJson(env, `/rest/v1/banned_ips?select=id&ip_address=eq.${eq(ip)}&limit=1`).catch(() => [])).length) return json({ banned: true }, { status: 403 });
	}
	const body = await request.json().catch(() => null);
	const path = typeof body?.path === "string" ? body.path.slice(0, 300) : "/";
	const user = await getCurrentUser(request, env);
	await supabaseJson(env, "/rest/v1/page_views", {
		method: "POST",
		body: JSON.stringify({
			path,
			referrer: nullableString(body?.referrer),
			source: nullableString(body?.source),
			ip_address: ip,
			user_email: user.email ?? null,
			user_agent: request.headers.get("user-agent")?.slice(0, 400) ?? null
		})
	}).catch(() => void 0);
	if (user.profile?.id && ip) await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(user.profile.id)}`, {
		method: "PATCH",
		body: JSON.stringify({ last_ip: ip })
	}).catch(() => void 0);
	return json({ ok: true });
}
function integerFromInput(value) {
	const number = typeof value === "number" ? value : Number(String(value ?? "").trim());
	if (!Number.isFinite(number)) return void 0;
	return Math.trunc(number);
}
async function logRupeeAdjustment(env, actorId, targetId, amount) {
	await supabaseJson(env, "/rest/v1/referral_events", {
		method: "POST",
		body: JSON.stringify({
			referrer_id: actorId,
			referred_id: targetId,
			event_type: "admin_adjustment",
			rupees_awarded: amount
		})
	});
}
async function handleOfficeRupees(request, env) {
	const access = await requireOfficeAccess(request, env, "users");
	if (!access.ok) return access.response;
	if (!access.user.isPresident || !access.user.profile?.id) return json({ message: "President access is required for rupee controls." }, { status: 403 });
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	const body = await request.json().catch(() => null);
	const amount = integerFromInput(body?.amount);
	if (!body?.action || ![
		"add",
		"subtract",
		"set",
		"all"
	].includes(body.action) || amount === void 0 || amount < 0) return json({ message: "Enter a non-negative rupee amount." }, { status: 400 });
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const actorId = access.user.profile.id;
	if (body.action === "all") {
		if (amount === 0) return json({ message: "Enter an amount greater than zero." }, { status: 400 });
		const users = await supabaseJson(env, "/rest/v1/profiles?select=id,rupees");
		await Promise.all(users.map(async (user) => {
			const next = Math.max(0, (user.rupees ?? 0) + amount);
			await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(user.id)}`, {
				method: "PATCH",
				body: JSON.stringify({
					rupees: next,
					updated_at: now
				})
			});
			await logRupeeAdjustment(env, actorId, user.id, amount);
		}));
		await audit(env, access.user.email, "rupees.award_all", {
			amount,
			count: users.length
		});
		return json({ message: `Gave ${amount} rupees to ${users.length} users.` });
	}
	if (!body.id) return json({ message: "User id is required." }, { status: 400 });
	const user = (await supabaseJson(env, `/rest/v1/profiles?select=id,rupees&id=eq.${eq(body.id)}&limit=1`))[0];
	if (!user) return json({ message: "User not found." }, { status: 404 });
	const current = user.rupees ?? 0;
	const next = body.action === "set" ? amount : body.action === "subtract" ? Math.max(0, current - amount) : current + amount;
	const delta = next - current;
	await supabaseJson(env, `/rest/v1/profiles?id=eq.${eq(user.id)}`, {
		method: "PATCH",
		body: JSON.stringify({
			rupees: next,
			updated_at: now
		})
	});
	if (delta !== 0) await logRupeeAdjustment(env, actorId, user.id, delta);
	await audit(env, access.user.email, "rupees.adjust", {
		id: user.id,
		action: body.action,
		amount,
		previous: current,
		next,
		delta
	});
	return json({
		message: `Rupees updated to ${next}.`,
		rupees: next
	});
}
async function handleOfficeRupeeHistory(request, env) {
	const access = await requireOfficeAccess(request, env, "users");
	if (!access.ok) return access.response;
	if (!access.user.isPresident) return json({ message: "President access is required for rupee history." }, { status: 403 });
	if (request.method !== "GET") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "GET" }
	});
	const id = new URL(request.url).searchParams.get("id");
	if (!id) return json({ message: "User id is required." }, { status: 400 });
	return json({ events: await supabaseJson(env, `/rest/v1/referral_events?select=id,event_type,rupees_awarded,created_at,referrer:referrer_id(email,full_name),referred:referred_id(email,full_name)&or=(referrer_id.eq.${eq(id)},referred_id.eq.${eq(id)})&order=created_at.desc`) });
}
async function handleOfficeAccess(request, env) {
	const access = await requireOfficeAccess(request, env, "access");
	if (!access.ok) return access.response;
	const body = await request.json().catch(() => null);
	if (!body?.user_email || !body.tab_id) return json({ message: "Email and tab are required." }, { status: 400 });
	if (body.action === "revoke") await supabaseJson(env, `/rest/v1/office_tab_access?user_email=eq.${eq(body.user_email)}&tab_id=eq.${eq(body.tab_id)}`, { method: "DELETE" });
	else await supabaseJson(env, "/rest/v1/office_tab_access?on_conflict=user_email,tab_id", {
		method: "POST",
		prefer: "resolution=merge-duplicates",
		body: JSON.stringify({
			user_email: body.user_email.trim().toLowerCase(),
			tab_id: body.tab_id,
			granted_by: access.user.email
		})
	});
	await audit(env, access.user.email, `access.${body.action === "revoke" ? "revoke" : "grant"}`, body);
	return json({ message: "Access updated." });
}
async function handleOfficeAnnouncementSave(request, env) {
	const access = await requireOfficeAccess(request, env, "announcements");
	if (!access.ok) return access.response;
	const body = await request.json().catch(() => null);
	const audience = body?.audience === "employees" ? "employees" : "site";
	await supabaseJson(env, "/rest/v1/site_announcements?id=eq.1", {
		method: "PATCH",
		body: JSON.stringify({
			message: body?.message ?? "",
			active: Boolean(body?.active),
			audience,
			updated_by: access.user.email,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		})
	});
	await audit(env, access.user.email, "announcement.update", body ?? {});
	return json({ message: "Announcement saved." });
}
async function handleOfficeNightbloom(request, env) {
	const access = await requireOfficeAccess(request, env, "nightbloom");
	if (!access.ok) return access.response;
	const body = await request.json().catch(() => null);
	if (!body?.title || !body.pdf_url) return json({ message: "Title and PDF URL are required." }, { status: 400 });
	const id = typeof body.id === "number" ? body.id : void 0;
	const payload = {
		title: String(body.title).trim(),
		blurb: String(body.blurb ?? "").trim(),
		pdf_url: String(body.pdf_url).trim(),
		cover_image_url: nullableString(body.cover_image_url),
		price_cents: centsFromDollars(body.price ?? 0),
		status: typeof body.status === "string" ? body.status : "active",
		sort_order: Number(body.sort_order ?? 0) || 0,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	await supabaseJson(env, id ? `/rest/v1/nightbloom_pdfs?id=eq.${id}` : "/rest/v1/nightbloom_pdfs", {
		method: id ? "PATCH" : "POST",
		body: JSON.stringify(payload)
	});
	await audit(env, access.user.email, id ? "nightbloom.update" : "nightbloom.create", {
		id,
		title: payload.title
	});
	return json({ message: "Night Bloom PDF saved." });
}
async function handleOfficeNightbloomDelete(request, env, id) {
	const access = await requireOfficeAccess(request, env, "nightbloom");
	if (!access.ok) return access.response;
	if (!/^\d+$/.test(id)) return json({ message: "Invalid PDF id." }, { status: 400 });
	await supabaseJson(env, `/rest/v1/nightbloom_pdfs?id=eq.${id}`, { method: "DELETE" });
	await audit(env, access.user.email, "nightbloom.delete", { id });
	return json({ message: "Night Bloom PDF deleted." });
}
async function handleOfficeGuild(request, env) {
	const access = await requireOfficeAccess(request, env, "guild");
	if (!access.ok) return access.response;
	if (request.method === "DELETE") {
		const id = new URL(request.url).searchParams.get("id");
		if (!id || !/^\d+$/.test(id)) return json({ message: "Invalid application id." }, { status: 400 });
		await supabaseJson(env, `/rest/v1/guild_applications?id=eq.${id}`, { method: "DELETE" });
		await audit(env, access.user.email, "guild.delete", { id });
		return json({ message: "Application removed." });
	}
	const body = await request.json().catch(() => null);
	if (!body?.id) return json({ message: "Application id is required." }, { status: 400 });
	const status = [
		"new",
		"reviewing",
		"contacted",
		"archived"
	].includes(body.status ?? "") ? body.status : "new";
	await supabaseJson(env, `/rest/v1/guild_applications?id=eq.${body.id}`, {
		method: "PATCH",
		body: JSON.stringify({
			status,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		})
	});
	await audit(env, access.user.email, "guild.update", {
		id: body.id,
		status
	});
	return json({ message: "Application updated." });
}
function parseCommand(input) {
	const [command, ...rest] = input.trim().split(/\s+/);
	return {
		command: command?.toLowerCase(),
		rest: rest.join(" ")
	};
}
function parseKeyValueArgs(input) {
	const args = {};
	const pattern = /(\w+)=("[^"]*"|'[^']*'|[^\s]+)/g;
	let match;
	while (match = pattern.exec(input)) args[match[1]] = match[2].replace(/^["']|["']$/g, "");
	return args;
}
async function handleOfficeCommand(request, env) {
	const access = await requireOfficeAccess(request, env, "command");
	if (!access.ok) return access.response;
	if (!access.user.isPresident) return json({ message: "President access is required for the command window." }, { status: 403 });
	const raw = (await request.json().catch(() => null))?.command?.trim() ?? "";
	if (!raw) return json({ message: "Type a command first." }, { status: 400 });
	const { command, rest } = parseCommand(raw);
	const args = parseKeyValueArgs(rest);
	if (command === "help") return json({ message: "Commands: announcement set message=\"...\" active=true | announcement clear | product image slug=... url=... | product status slug=... status=active|draft|archived | nightbloom add title=\"...\" url=https://... price=19" });
	if (command === "announcement" && rest.startsWith("clear")) {
		await supabaseJson(env, "/rest/v1/site_announcements?id=eq.1", {
			method: "PATCH",
			body: JSON.stringify({
				message: "",
				active: false,
				updated_by: access.user.email,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			})
		});
		await audit(env, access.user.email, "command.announcement_clear", {});
		return json({ message: "Announcement cleared." });
	}
	if (command === "announcement" && rest.startsWith("set")) {
		await supabaseJson(env, "/rest/v1/site_announcements?id=eq.1", {
			method: "PATCH",
			body: JSON.stringify({
				message: args.message ?? "",
				active: args.active !== "false",
				updated_by: access.user.email,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			})
		});
		await audit(env, access.user.email, "command.announcement_set", args);
		return json({ message: "Announcement updated." });
	}
	if (command === "product" && rest.startsWith("image") && args.slug && args.url) {
		await supabaseJson(env, `/rest/v1/products?slug=eq.${eq(args.slug)}`, {
			method: "PATCH",
			body: JSON.stringify({
				image_url: args.url,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			})
		});
		await audit(env, access.user.email, "command.product_image", args);
		return json({ message: `Product image updated for ${args.slug}.` });
	}
	if (command === "product" && rest.startsWith("status") && args.slug && args.status) {
		await supabaseJson(env, `/rest/v1/products?slug=eq.${eq(args.slug)}`, {
			method: "PATCH",
			body: JSON.stringify({
				status: args.status,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			})
		});
		await audit(env, access.user.email, "command.product_status", args);
		return json({ message: `Product status updated for ${args.slug}.` });
	}
	if (command === "nightbloom" && rest.startsWith("add") && args.title && args.url) {
		await supabaseJson(env, "/rest/v1/nightbloom_pdfs", {
			method: "POST",
			body: JSON.stringify({
				title: args.title,
				blurb: args.blurb ?? "",
				pdf_url: args.url,
				cover_image_url: args.cover ?? null,
				price_cents: centsFromDollars(args.price ?? 0),
				status: "active"
			})
		});
		await audit(env, access.user.email, "command.nightbloom_add", args);
		return json({ message: `Night Bloom PDF added: ${args.title}.` });
	}
	await audit(env, access.user.email, "command.rejected", { raw });
	return json({ message: "Command not recognized. Type help for the safe command list." }, { status: 400 });
}
async function handleAccountData(request, env) {
	const { email, profile } = await getCurrentUser(request, env);
	if (!email || !profile) return json({ message: "Sign in required." }, { status: 401 });
	const referrals = await supabaseJson(env, `/rest/v1/referral_events?select=event_type,rupees_awarded,created_at,referred:referred_id(email,full_name)&referrer_id=eq.${eq(profile.id)}&order=created_at.desc`).catch(() => []);
	return json({
		profile,
		referralLink: `https://hyruleherb.xyz/join?ref=${profile.referral_code}`,
		referrals
	});
}
function safeRedirectPath(value, origin) {
	if (!value) return "/";
	try {
		const target = new URL(value, origin);
		if (target.origin !== origin) return "/";
		if (target.pathname.startsWith("/api/auth/")) return "/";
		return `${target.pathname}${target.search}${target.hash}`;
	} catch {
		return "/";
	}
}
function authRedirect(origin, status, redirectTo = "/signin") {
	const target = new URL(redirectTo, origin);
	target.searchParams.set("auth", status);
	return target;
}
function readOauthStateCookie(request) {
	const storedState = readCookie(request, "ha_oauth_state");
	if (!storedState) return void 0;
	try {
		const parsed = JSON.parse(decodeBase64Url(storedState));
		if (typeof parsed.nonce !== "string") return void 0;
		return {
			nonce: parsed.nonce,
			redirectTo: typeof parsed.redirectTo === "string" ? parsed.redirectTo : "/"
		};
	} catch {
		return {
			nonce: storedState,
			redirectTo: "/"
		};
	}
}
function parseOracleHerb(text) {
	const herb = text.match(/^\s*HERB:\s*(.+)$/im)?.[1]?.trim() || null;
	return {
		reading: text.replace(/^\s*HERB:\s*.+$/im, "").trim().replace(/\n{3,}/g, "\n\n"),
		herb
	};
}
async function handleOracle(request, env) {
	if (request.method !== "POST") return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "POST" }
	});
	if (!env.ANTHROPIC_API_KEY) return json({ message: "The oracle is not configured yet." }, { status: 503 });
	const body = await request.json().catch(() => null);
	const question = typeof body?.question === "string" ? body.question.trim().slice(0, 500) : "";
	const cardNames = (Array.isArray(body?.cards) ? body.cards : []).map((card) => card && typeof card === "object" && "name" in card && typeof card.name === "string" ? card.name.trim() : "").filter(Boolean).slice(0, 3);
	if (cardNames.length !== 3) return json({ message: "Draw exactly three cards before asking the oracle." }, { status: 400 });
	const prompt = [
		question ? `Question: ${question}` : "Question: The seeker did not speak a question aloud.",
		`The Past: ${cardNames[0]}`,
		`The Present: ${cardNames[1]}`,
		`The Path: ${cardNames[2]}`
	].join("\n");
	const response = await fetch("https://api.anthropic.com/v1/messages", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"x-api-key": env.ANTHROPIC_API_KEY,
			"anthropic-version": "2023-06-01"
		},
		body: JSON.stringify({
			model: "claude-sonnet-4-6",
			max_tokens: 520,
			temperature: .8,
			system: "You are Madame Writz, the mystical oracle reader of Hyrule Herb Apothecary. Respond in a warm, wise, nature-based tone. Weave all three tarot cards into one flowing 200 to 300 word narrative. Do not provide medical, legal, or financial advice. End with a final separate line formatted exactly as HERB: [name] — [reason].",
			messages: [{
				role: "user",
				content: prompt
			}]
		})
	});
	const data = await response.json().catch(() => null);
	if (!response.ok) {
		console.error(JSON.stringify({
			message: "Oracle Anthropic request failed",
			status: response.status,
			detail: data?.error?.message
		}));
		return json({ message: "Madame Writz could not complete the reading." }, { status: 502 });
	}
	const text = data?.content?.map((part) => part.type === "text" && typeof part.text === "string" ? part.text : "").join("").trim() || "";
	if (!text) return json({ message: "Madame Writz returned no reading." }, { status: 502 });
	return json(parseOracleHerb(text));
}
function handleGoogleAuth(request, env) {
	const url = new URL(request.url);
	const clientId = env.AUTH_GOOGLE_ID;
	const redirectUri = env.AUTH_GOOGLE_REDIRECT_URI || `${url.origin}/api/auth/google/callback`;
	const redirectTo = safeRedirectPath(url.searchParams.get("redirectTo") || request.headers.get("referer"), url.origin);
	if (!clientId) {
		console.error(JSON.stringify({
			message: "Google OAuth unavailable: AUTH_GOOGLE_ID binding is missing",
			redirectUri
		}));
		return Response.redirect(authRedirect(url.origin, "google-not-configured", "/signin"), 302);
	}
	const google = new URL("https://accounts.google.com/o/oauth2/v2/auth");
	google.searchParams.set("client_id", clientId);
	google.searchParams.set("redirect_uri", redirectUri);
	google.searchParams.set("response_type", "code");
	google.searchParams.set("scope", env.AUTH_GOOGLE_SCOPE || "openid email profile");
	google.searchParams.set("access_type", "offline");
	google.searchParams.set("prompt", "select_account");
	const nonce = crypto.randomUUID();
	google.searchParams.set("state", nonce);
	return new Response(null, {
		status: 302,
		headers: {
			location: google.toString(),
			"set-cookie": createCookie("ha_oauth_state", encodeBase64Url(JSON.stringify({
				nonce,
				redirectTo
			})), 600)
		}
	});
}
async function handleGoogleCallback(request, env) {
	const url = new URL(request.url);
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");
	const storedState = readOauthStateCookie(request);
	const redirectTo = safeRedirectPath(storedState?.redirectTo, url.origin);
	const fallbackTarget = "/signin";
	const clientId = env.AUTH_GOOGLE_ID;
	const clientSecret = env.AUTH_GOOGLE_SECRET;
	const redirectUri = env.AUTH_GOOGLE_REDIRECT_URI || `${url.origin}/api/auth/google/callback`;
	if (!code) {
		console.error(JSON.stringify({ message: "Google OAuth callback missing code" }));
		return Response.redirect(authRedirect(url.origin, "google-cancelled", fallbackTarget).toString(), 302);
	}
	if (!state || !storedState?.nonce || state !== storedState.nonce) {
		console.error(JSON.stringify({
			message: "Google OAuth state mismatch",
			hasState: Boolean(state),
			hasStoredState: Boolean(storedState?.nonce)
		}));
		return Response.redirect(authRedirect(url.origin, "google-state-mismatch", fallbackTarget).toString(), 302);
	}
	if (!clientId || !clientSecret) {
		console.error(JSON.stringify({
			message: "Google OAuth unavailable: client ID or secret binding is missing",
			hasClientId: Boolean(clientId),
			hasClientSecret: Boolean(clientSecret),
			redirectUri
		}));
		return Response.redirect(authRedirect(url.origin, "google-not-configured", fallbackTarget).toString(), 302);
	}
	const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
		method: "POST",
		headers: { "content-type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			client_id: clientId,
			client_secret: clientSecret,
			code,
			grant_type: "authorization_code",
			redirect_uri: redirectUri
		})
	});
	if (!tokenResponse.ok) {
		const detail = await tokenResponse.text().catch(() => "");
		console.error(JSON.stringify({
			message: "Google OAuth token exchange failed",
			status: tokenResponse.status,
			detail,
			redirectUri
		}));
		return Response.redirect(authRedirect(url.origin, "google-token-failed", fallbackTarget).toString(), 302);
	}
	const tokenData = await tokenResponse.json();
	if (!tokenData.access_token) {
		console.error(JSON.stringify({ message: "Google OAuth token response missing access token" }));
		return Response.redirect(authRedirect(url.origin, "google-token-failed", fallbackTarget).toString(), 302);
	}
	const profileResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", { headers: { authorization: `Bearer ${tokenData.access_token}` } });
	if (!profileResponse.ok) {
		const detail = await profileResponse.text().catch(() => "");
		console.error(JSON.stringify({
			message: "Google OAuth profile request failed",
			status: profileResponse.status,
			detail
		}));
		return Response.redirect(authRedirect(url.origin, "google-profile-failed", fallbackTarget).toString(), 302);
	}
	const profile = await profileResponse.json();
	if (!profile.sub || !profile.email) {
		console.error(JSON.stringify({
			message: "Google OAuth profile missing required identity fields",
			hasSub: Boolean(profile.sub),
			hasEmail: Boolean(profile.email)
		}));
		return Response.redirect(authRedirect(url.origin, "google-profile-failed", fallbackTarget).toString(), 302);
	}
	await ensureProfile(env, {
		sub: profile.sub,
		email: profile.email,
		name: profile.name,
		picture: profile.picture
	}, readCookie(request, "ha_ref")).catch((error) => {
		console.error(JSON.stringify({
			message: "Supabase profile upsert failed",
			detail: String(error)
		}));
	});
	if (env.DB) await env.DB.prepare(`insert into users (provider, provider_id, email, name, avatar_url, created_at, updated_at)
       values ('google', ?, ?, ?, ?, datetime('now'), datetime('now'))
       on conflict(provider, provider_id) do update set
         email = excluded.email,
         name = excluded.name,
         avatar_url = excluded.avatar_url,
         updated_at = datetime('now')`).bind(profile.sub, profile.email, profile.name ?? "", profile.picture ?? "").run();
	const headers = new Headers();
	headers.append("set-cookie", createCookie("ha_oauth_state", "", 0));
	headers.append("set-cookie", createCookie("ha_ref", "", 0));
	if (env.AUTH_SESSION_SECRET) {
		const session = await signSession({
			provider: "google",
			sub: profile.sub,
			email: profile.email,
			name: profile.name ?? "",
			picture: profile.picture ?? "",
			exp: Math.floor(Date.now() / 1e3) + 3600 * 24 * 14
		}, env.AUTH_SESSION_SECRET);
		headers.append("set-cookie", createCookie("ha_session", session, 3600 * 24 * 14));
	} else console.error(JSON.stringify({ message: "Google OAuth completed but AUTH_SESSION_SECRET is missing; session cookie was not set" }));
	headers.set("location", authRedirect(url.origin, "google-signed-in", redirectTo).toString());
	return new Response(null, {
		status: 302,
		headers
	});
}
function handleSignout(request) {
	if (!["GET", "POST"].includes(request.method)) return json({ message: "Method not allowed" }, {
		status: 405,
		headers: { allow: "GET, POST" }
	});
	const origin = new URL(request.url).origin;
	return new Response(null, {
		status: 302,
		headers: {
			location: `${origin}/signin?auth=signed-out`,
			"set-cookie": createCookie("ha_session", "", 0)
		}
	});
}
async function handleApi(request, env) {
	const url = new URL(request.url);
	if (url.pathname === "/api/book-of-roots") return handleBookOfRootsList(request, env);
	if (url.pathname === "/api/book-of-roots/notify") return handleBookOfRootsNotify(request, env);
	if (url.pathname === "/api/admin/book-of-roots") return handleBookOfRootsUpsert(request, env);
	if (url.pathname.startsWith("/api/admin/book-of-roots/")) return handleBookOfRootsDelete(request, env, url.pathname.slice(25));
	if (url.pathname === "/api/session") return handleSession(request, env);
	if (url.pathname === "/api/products") return handleProductsList(env);
	if (url.pathname === "/api/careers/apply") return handleGuildApply(request, env);
	if (url.pathname === "/api/office/guild") return handleOfficeGuild(request, env);
	if (url.pathname === "/api/nightbloom") return handleNightbloomList(request, env);
	if (url.pathname === "/api/nightbloom/checkout") return handleNightbloomCheckout(request, env);
	if (url.pathname === "/api/nightbloom/download") return handleNightbloomDownload(request, env);
	if (url.pathname === "/api/account") return handleAccountData(request, env);
	if (url.pathname === "/api/announcement") return handleAnnouncement(request, env);
	if (url.pathname === "/api/analytics/track") return handleAnalyticsTrack(request, env);
	if (url.pathname === "/api/referral/capture") return handleReferralCapture(request);
	if (url.pathname === "/api/marketing/click") return handleMarketingClick(request, env);
	if (url.pathname === "/api/newsletter") return handleNewsletter(request, env);
	if (url.pathname === "/api/checkout") return handleStripeCheckout(request, env);
	if (url.pathname === "/api/stripe/webhook") return handleStripeWebhook(request, env);
	if (url.pathname === "/api/office") return handleOfficeData(request, env);
	if (url.pathname === "/api/office/product") return handleOfficeProduct(request, env);
	if (url.pathname === "/api/office/marketing") return handleOfficeMarketing(request, env);
	if (url.pathname === "/api/office/user") return handleOfficeUser(request, env);
	if (url.pathname === "/api/office/ban-ip") return handleOfficeBanIp(request, env);
	if (url.pathname === "/api/office/audit-doc") return handleOfficeAuditDoc(request, env);
	if (url.pathname === "/api/office/rupees") return handleOfficeRupees(request, env);
	if (url.pathname === "/api/office/rupee-history") return handleOfficeRupeeHistory(request, env);
	if (url.pathname === "/api/office/access") return handleOfficeAccess(request, env);
	if (url.pathname === "/api/office/announcement") return handleOfficeAnnouncementSave(request, env);
	if (url.pathname === "/api/office/nightbloom") return handleOfficeNightbloom(request, env);
	if (url.pathname.startsWith("/api/office/nightbloom/")) return handleOfficeNightbloomDelete(request, env, url.pathname.slice(23));
	if (url.pathname === "/api/office/command") return handleOfficeCommand(request, env);
	if (url.pathname === "/api/oracle") return handleOracle(request, env);
	if (url.pathname === "/api/auth/google") return handleGoogleAuth(request, env);
	if (url.pathname === "/api/auth/google/callback") return handleGoogleCallback(request, env);
	if (url.pathname === "/api/auth/signout") return handleSignout(request);
}
function getRuntimeEnv(request, env) {
	return env ?? request.runtime?.cloudflare?.env ?? globalThis.__env__ ?? {};
}
function getRuntimeContext(request, ctx) {
	return ctx ?? request.runtime?.cloudflare?.context;
}
var server_default = { async fetch(request, env, ctx) {
	try {
		const runtimeEnv = getRuntimeEnv(request, env);
		const runtimeCtx = getRuntimeContext(request, ctx);
		const apiResponse = await handleApi(request, runtimeEnv);
		if (apiResponse) return apiResponse;
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, runtimeEnv, runtimeCtx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { cat_teas_default as a, cat_herbs_default as c, server_default as default, cat_oils_default as i, renderErrorPage as l, products as n, cat_tinctures_default as o, cat_kits_default as r, cat_flowers_default as s, categories as t };
