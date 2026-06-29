import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as FileText, C as Leaf, F as ChevronDown, H as Sparkles, L as BookOpen, R as Bell, c as ShoppingBag, j as Download, x as Lock } from "../_libs/lucide-react.mjs";
import { a as cat_teas_default, c as cat_herbs_default, i as cat_oils_default, r as cat_kits_default, s as cat_flowers_default } from "./ssr.mjs";
import { n as useCart, r as useLiveProducts } from "./cart-B4zVWcXf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-of-roots-ZTj5BSvQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var bookOfWritzEntries = [
	{
		name: "Acacia",
		originCulture: "Ancient Egyptian and Middle Eastern apothecary traditions",
		traditionalUse: "Medicinal and spiritual: gum, wood, and resin appear in temple materials, incense, wound dressings, and binding preparations.",
		significance: "Documented in ancient Egyptian material culture and later Arabic materia medica; modern study focuses mostly on gum arabic as a natural fiber and emulsifier.",
		formUsed: "Gum, resin, bark, wood",
		validated: true
	},
	{
		name: "Achiote",
		originCulture: "Indigenous Amazonian, Caribbean, and Mesoamerican traditions",
		traditionalUse: "Medicinal, cosmetic, and spiritual: red seed pigment has been used for body paint, sun protection symbolism, food color, and ceremonial identity.",
		significance: "Ethnobotanical documentation records its cultural use across the tropical Americas; modern research studies carotenoid pigments such as bixin.",
		formUsed: "Seed, seed oil, pigment paste",
		validated: true
	},
	{
		name: "Ashwagandha",
		originCulture: "Ayurveda, India",
		traditionalUse: "Medicinal: a rasayana root used in practitioner-guided formulas for strength, rest, resilience, and constitutional support.",
		significance: "Classical Ayurvedic texts document its role; modern clinical research has examined stress and sleep outcomes, though product quality and dosing vary.",
		formUsed: "Root, root powder, extract",
		validated: true
	},
	{
		name: "Black Cohosh",
		originCulture: "Indigenous eastern North American plant medicine",
		traditionalUse: "Medicinal: documented in women's health traditions and later adopted into North American herbal practice.",
		significance: "Ethnobotanical records and modern trials exist; evidence for menopausal symptoms is mixed, and safety discussions include rare liver concern reports.",
		formUsed: "Root, rhizome",
		validated: true
	},
	{
		name: "Blue Lotus",
		originCulture: "Ancient Egyptian botanical and ritual practice",
		traditionalUse: "Spiritual and ceremonial: associated with rebirth, beauty, solar symbolism, and sacred imagery in tomb and temple art.",
		significance: "Its significance is strongly documented in ancient Egyptian art and archaeology; modern psychoactive claims require careful separation from historical evidence.",
		formUsed: "Flower, petals",
		validated: false
	},
	{
		name: "Boswellia",
		originCulture: "Middle Eastern, East African, and Ayurvedic traditions",
		traditionalUse: "Medicinal and spiritual: frankincense resin has been burned in devotion and used in traditional preparations for inflammation and purification.",
		significance: "Trade history is extensive, and modern clinical research has investigated Boswellia extracts for inflammatory conditions such as osteoarthritis.",
		formUsed: "Resin tears, resin extract, essential oil",
		validated: true
	},
	{
		name: "Cacao",
		originCulture: "Maya, Mexica/Aztec, and broader Mesoamerican traditions",
		traditionalUse: "Medicinal, ceremonial, and social: cacao beverages were used in ritual exchange, elite feasting, offerings, and vitality practices.",
		significance: "Archaeological residue studies, codices, and colonial-era records document cacao's role; modern science studies flavanols and cardiovascular markers.",
		formUsed: "Seed, nib, paste, beverage",
		validated: true
	},
	{
		name: "Cedar",
		originCulture: "Many Indigenous North American nations, with nation-specific protocols",
		traditionalUse: "Spiritual and medicinal: used in cleansing, protection, prayer, shelter, steam, and household preparations depending on the nation and context.",
		significance: "Cultural documentation is strong, but some ceremonial uses are closed or permission-based; respectful education should not imitate restricted rites.",
		formUsed: "Leaf, bough, bark, wood",
		validated: false
	},
	{
		name: "Chaga",
		originCulture: "Northern Eurasian and circumpolar folk traditions",
		traditionalUse: "Medicinal: a hard birch-growing fungus prepared as a decoction for endurance, seasonal wellness, and household tonics.",
		significance: "Folk use is well documented in cold-climate regions; modern research remains mostly laboratory or preliminary human evidence.",
		formUsed: "Fungal conk, chunks, powder",
		validated: false
	},
	{
		name: "Copal",
		originCulture: "Mesoamerican Indigenous ritual traditions",
		traditionalUse: "Spiritual: aromatic resin burned for offerings, cleansing, ancestor connection, and ceremonial atmosphere.",
		significance: "Archaeological and cultural records document copal in Mesoamerican ritual life; modern validation is primarily cultural and historical rather than clinical.",
		formUsed: "Resin",
		validated: false
	},
	{
		name: "Damiana",
		originCulture: "Indigenous Mexican, Central American, and Caribbean folk traditions",
		traditionalUse: "Medicinal and spiritual: leaf used in teas and tonics associated with mood, desire, dreams, and relaxation.",
		significance: "Ethnobotanical documentation exists; modern clinical evidence is limited, so it should be framed as traditional knowledge rather than proven treatment.",
		formUsed: "Leaf, aerial parts",
		validated: false
	},
	{
		name: "Echinacea",
		originCulture: "Indigenous North American plant medicine",
		traditionalUse: "Medicinal: root and aerial parts used in diverse tribal traditions, later becoming a major North American herbal product.",
		significance: "Cultural documentation is strong, and modern research suggests possible modest cold-prevention benefit, while evidence for shortening colds remains uncertain.",
		formUsed: "Root, flower, aerial parts",
		validated: true
	},
	{
		name: "Fennel",
		originCulture: "Mediterranean, Middle Eastern, and European apothecary traditions",
		traditionalUse: "Medicinal and culinary: seed used in digestive teas, postpartum foodways, breath freshening, and household remedies.",
		significance: "Classical Greek, Roman, and Arabic medicine document fennel; modern research examines digestive, lactation, and antispasmodic uses with mixed evidence.",
		formUsed: "Seed, bulb, leaf, essential oil",
		validated: true
	},
	{
		name: "Gotu Kola",
		originCulture: "Ayurvedic, Sri Lankan, Southeast Asian, and Traditional Chinese Medicine",
		traditionalUse: "Medicinal: used for memory, wound care, longevity, skin, and cooling preparations in several Asian medical systems.",
		significance: "Traditional documentation is broad; modern studies investigate wound healing, venous insufficiency, and cognitive outcomes.",
		formUsed: "Leaf, aerial parts, extract",
		validated: true
	},
	{
		name: "Henna",
		originCulture: "North African, Middle Eastern, South Asian, and Islamic cultural traditions",
		traditionalUse: "Spiritual, cosmetic, and medicinal: leaf paste used for adornment, blessing, cooling, rites of passage, and protective symbolism.",
		significance: "Historical and cultural documentation is extensive; natural henna differs from unsafe adulterated black henna products.",
		formUsed: "Leaf powder, paste, dye",
		validated: false
	},
	{
		name: "Hibiscus",
		originCulture: "African, Caribbean, Middle Eastern, and Latin American food-medicine traditions",
		traditionalUse: "Medicinal and culinary: calyces used in tart red drinks, cooling teas, hospitality beverages, and household wellness practices.",
		significance: "Cultural documentation is broad, and modern clinical studies have examined blood pressure markers with promising but context-dependent results.",
		formUsed: "Calyx, flower",
		validated: true
	},
	{
		name: "Kava",
		originCulture: "Pacific Islander traditions including Fiji, Tonga, Samoa, and Vanuatu",
		traditionalUse: "Medicinal, social, and ceremonial: root beverage used in diplomacy, ceremony, relaxation, and community gathering.",
		significance: "Cultural documentation is deep; modern studies support anxiolytic potential, while safety depends on preparation, plant part, liver risk, and medication interactions.",
		formUsed: "Root, rhizome, beverage",
		validated: true
	},
	{
		name: "Kinkeliba",
		originCulture: "West African traditional medicine, especially Senegal and neighboring regions",
		traditionalUse: "Medicinal: leaf tea used as a bitter household infusion for digestion, liver support traditions, and daily wellness.",
		significance: "Regional use is well documented in West African herbal practice; modern evidence is mostly phytochemical and preliminary.",
		formUsed: "Leaf",
		validated: false
	},
	{
		name: "Lavender",
		originCulture: "Mediterranean and European folk medicine",
		traditionalUse: "Medicinal and spiritual: flowers used for sleep sachets, purification, household protection, perfumery, and calming preparations.",
		significance: "European herbals document lavender; modern studies examine anxiety, sleep, and aromatherapy outcomes with moderate but product-specific evidence.",
		formUsed: "Flower, essential oil",
		validated: true
	},
	{
		name: "Mandrake",
		originCulture: "Mediterranean, Middle Eastern, and European folk magic",
		traditionalUse: "Spiritual and magical: root associated with protection, fertility lore, dream work, and dangerous plant power in grimoires and folklore.",
		significance: "Historical documentation is strong in folklore and medicine, but the plant is toxic and unsuitable for casual wellness use.",
		formUsed: "Root, leaf",
		validated: false
	},
	{
		name: "Moringa",
		originCulture: "African, South Asian, Ayurvedic, and tropical food-medicine traditions",
		traditionalUse: "Medicinal and nutritional: leaf, seed, and pod used as mineral-rich food, oil source, and household tonic.",
		significance: "Traditional food use is widespread; modern research supports its nutrient density while disease-treatment claims remain limited.",
		formUsed: "Leaf, seed, pod, oil",
		validated: true
	},
	{
		name: "Mugwort",
		originCulture: "European folk magic, East Asian moxibustion traditions, and modern Wicca",
		traditionalUse: "Medicinal and spiritual: used for dreams, boundaries, divination, moxa, and women's health traditions depending on lineage.",
		significance: "Historical documentation is broad across Europe and Asia; modern clinical validation varies by preparation and use.",
		formUsed: "Leaf, aerial parts",
		validated: false
	},
	{
		name: "Myrrh",
		originCulture: "Ancient Egyptian, Middle Eastern, East African, and Biblical apothecary traditions",
		traditionalUse: "Medicinal and spiritual: resin used in embalming, incense, anointing oils, oral care traditions, and purification.",
		significance: "Ancient texts and trade records document myrrh extensively; modern studies investigate antimicrobial and oral health applications.",
		formUsed: "Resin, gum, essential oil",
		validated: true
	},
	{
		name: "Neem",
		originCulture: "Ayurveda and South Asian household medicine",
		traditionalUse: "Medicinal and protective: leaf, bark, seed oil, and twigs used for skin, oral hygiene, garden protection, and ritual cleansing.",
		significance: "Ayurvedic and folk documentation is extensive; modern research supports antimicrobial and insecticidal properties, while internal use needs caution.",
		formUsed: "Leaf, bark, seed oil, twig",
		validated: true
	},
	{
		name: "Noni",
		originCulture: "Pacific Islander plant medicine, including Polynesian and Hawaiian traditions",
		traditionalUse: "Medicinal and nutritional: fruit, leaf, and root used in topical applications, tonics, dyes, and community plant medicine.",
		significance: "Ethnobotanical records document broad Pacific use; modern evidence is limited and commercial claims often exceed proof.",
		formUsed: "Fruit, leaf, root",
		validated: false
	},
	{
		name: "Pau d'Arco",
		originCulture: "Indigenous South American and Amazonian herbal traditions",
		traditionalUse: "Medicinal: inner bark used in decoctions for resilience, fungal concerns, and household tonics.",
		significance: "Traditional use is documented, but modern human evidence is limited and safety concerns exist with concentrated extracts.",
		formUsed: "Inner bark",
		validated: false
	},
	{
		name: "Plantain Leaf",
		originCulture: "European folk medicine and many Indigenous-adopted local herbal practices",
		traditionalUse: "Medicinal: leaf poultices used for bites, stings, minor skin irritation, and field first-aid traditions.",
		significance: "European herbals and modern community herbalism document its use; laboratory research supports anti-inflammatory constituents, but clinical evidence is modest.",
		formUsed: "Leaf",
		validated: false
	},
	{
		name: "Reishi",
		originCulture: "Traditional Chinese Medicine and East Asian longevity traditions",
		traditionalUse: "Medicinal and spiritual: fungus associated with longevity, spirit nourishment, resilience, and elite symbolic art.",
		significance: "Classical Chinese texts document lingzhi; modern research studies immune markers and cancer-support contexts, but evidence is not a cure claim.",
		formUsed: "Fruiting body, spore, extract",
		validated: true
	},
	{
		name: "Rue",
		originCulture: "Mediterranean folk medicine, European magic, Hoodoo, Santería, and Caribbean folk practice",
		traditionalUse: "Spiritual and medicinal: used for protection, uncrossing, cleansing, and historically for strong medicinal applications.",
		significance: "Cultural documentation is broad, but rue is potent and can be unsafe internally, especially during pregnancy.",
		formUsed: "Leaf, aerial parts, oil",
		validated: false
	},
	{
		name: "Saffron",
		originCulture: "Persian, Middle Eastern, Ayurvedic, Mediterranean, and Unani traditions",
		traditionalUse: "Medicinal, culinary, and spiritual: stigma used for mood, beauty, luxury food, ritual color, and reproductive traditions.",
		significance: "Historical documentation is extensive, and modern trials have examined mood outcomes, though dose, quality, and adulteration concerns matter.",
		formUsed: "Flower stigma",
		validated: true
	},
	{
		name: "Sage",
		originCulture: "European folk medicine and distinct Indigenous American traditions",
		traditionalUse: "Medicinal and spiritual: used in kitchen medicine, cleansing, protection, memory lore, and nation-specific ceremonial contexts.",
		significance: "European herbals and Indigenous cultural documentation exist, but sacred Indigenous smoke practices should not be copied outside permission and context.",
		formUsed: "Leaf, aerial parts",
		validated: false
	},
	{
		name: "Sandalwood",
		originCulture: "Ayurvedic, Hindu, Buddhist, and Pacific/Asian aromatic traditions",
		traditionalUse: "Spiritual and medicinal: heartwood paste and oil used for devotion, cooling, fragrance, meditation, and skin preparations.",
		significance: "Classical and ritual documentation is strong; modern concern includes overharvesting, so ethical sourcing is part of the entry.",
		formUsed: "Heartwood, powder, essential oil",
		validated: false
	},
	{
		name: "Sea Moss",
		originCulture: "Caribbean and Irish coastal food-medicine traditions",
		traditionalUse: "Medicinal and nutritional: seaweed gel used in drinks, porridges, skin preparations, and mineral-rich household tonics.",
		significance: "Cultural food use is well documented; modern validation centers on minerals and carrageenan content, not broad cure claims.",
		formUsed: "Seaweed thallus, gel",
		validated: true
	},
	{
		name: "Slippery Elm",
		originCulture: "Indigenous North American plant medicine and later American herbalism",
		traditionalUse: "Medicinal: inner bark used as a demulcent for throat, digestive comfort, poultices, and recovery foods.",
		significance: "Ethnobotanical and American herbal records document use; modern evidence supports mucilage properties more than disease treatment.",
		formUsed: "Inner bark powder",
		validated: true
	},
	{
		name: "St. John's Wort",
		originCulture: "European folk medicine and Christian midsummer plant lore",
		traditionalUse: "Medicinal and spiritual: flowering tops used for mood, wound oils, protection, and solar folk magic.",
		significance: "Historical documentation is strong, and modern evidence supports use for mild to moderate depression, but interactions with medications are significant.",
		formUsed: "Flowering tops, infused oil, extract",
		validated: true
	},
	{
		name: "Sweetgrass",
		originCulture: "Indigenous North American nations with specific cultural protocols",
		traditionalUse: "Spiritual: braided grass used in prayer, gratitude, purification, and community-specific ceremonial contexts.",
		significance: "Cultural documentation is strong, but uses may be nation-specific or closed; conservation and permission are essential.",
		formUsed: "Grass blade, braid",
		validated: false
	},
	{
		name: "Tobacco",
		originCulture: "Indigenous North, Central, and South American sacred plant traditions",
		traditionalUse: "Spiritual and ceremonial: used as offering, prayer carrier, covenant plant, and diplomatic medicine in many distinct traditions.",
		significance: "Archaeological and cultural records are extensive; this entry concerns sacred traditional use, not commercial tobacco consumption.",
		formUsed: "Leaf",
		validated: false
	},
	{
		name: "White Willow",
		originCulture: "European, Middle Eastern, and Indigenous-adopted folk medicine",
		traditionalUse: "Medicinal: bark used in decoctions for pain, fever, and inflammation traditions.",
		significance: "Historical use is documented, and salicylate chemistry connects willow to modern pain-relief pharmacology, though crude bark is not aspirin.",
		formUsed: "Bark",
		validated: true
	},
	{
		name: "Yarrow",
		originCulture: "European, Druidic, Indigenous North American, and Asian folk traditions",
		traditionalUse: "Medicinal and spiritual: used for wound lore, divination, protection, feverish states, and boundary magic.",
		significance: "Classical and folk documentation is extensive; modern research studies anti-inflammatory and wound-related constituents, but clinical evidence is limited.",
		formUsed: "Flowering tops, leaf",
		validated: false
	},
	{
		name: "Andrographis",
		originCulture: "Ayurveda and Traditional Chinese Medicine",
		traditionalUse: "Medicinal: bitter aerial parts used for heat-clearing, seasonal respiratory support, feverish states, and digestive complaints.",
		significance: "Traditional use is documented in South and East Asian materia medica; modern reviews suggest standardized extracts may reduce common-cold symptom severity, while safety and dosing still matter.",
		formUsed: "Leaf, stem, aerial parts, extract",
		validated: true
	},
	{
		name: "Bacopa",
		originCulture: "Ayurveda, India",
		traditionalUse: "Medicinal and spiritual: brahmi leaf used in memory, learning, meditation, and nervous-system formulas.",
		significance: "Ayurvedic texts document its cognitive and contemplative role; modern human studies show some promise for memory and attention, though results vary by extract and study design.",
		formUsed: "Leaf, aerial parts, whole plant extract",
		validated: true
	},
	{
		name: "Baobab",
		originCulture: "African traditional food-medicine systems",
		traditionalUse: "Medicinal and nutritional: fruit pulp, leaves, and seed used as food, mineral support, cooling drinks, and household wellness preparations.",
		significance: "African foodway documentation is extensive; modern validation centers on fiber, vitamin C, polyphenols, and nutritional value rather than broad disease claims.",
		formUsed: "Fruit pulp, leaf, seed, seed oil",
		validated: true
	},
	{
		name: "Bitter Melon",
		originCulture: "Ayurveda, Traditional Chinese Medicine, Caribbean bush medicine, and African diaspora foodways",
		traditionalUse: "Medicinal and culinary: fruit and leaf used in bitter tonics, blood-sugar traditions, digestion, and food-as-medicine preparations.",
		significance: "Traditional documentation is broad; modern research has examined glucose metabolism, but clinical results are mixed and it should not replace diabetes care.",
		formUsed: "Fruit, seed, leaf, juice",
		validated: false
	},
	{
		name: "Burdock",
		originCulture: "Traditional Chinese Medicine, European folk medicine, and Hoodoo rootwork",
		traditionalUse: "Medicinal and spiritual: root used as a cleansing bitter, skin-support herb, food root, and symbolic uncrossing or grounding ingredient.",
		significance: "Documented in Asian and European materia medica as both food and medicine; modern evidence is mostly nutritional, phytochemical, and preliminary.",
		formUsed: "Root, seed, leaf",
		validated: false
	},
	{
		name: "Cat's Claw",
		originCulture: "Indigenous Amazonian herbal traditions",
		traditionalUse: "Medicinal: inner bark and vine preparations used for inflammation, resilience, digestive complaints, and community healing traditions.",
		significance: "Ethnobotanical records document Amazonian use; modern studies examine immune and inflammatory markers, but clinical evidence remains limited.",
		formUsed: "Inner bark, vine bark, decoction",
		validated: false
	},
	{
		name: "Devil's Claw",
		originCulture: "Southern African traditional medicine",
		traditionalUse: "Medicinal: tuber used for joint pain, back pain, digestion, and inflammatory folk conditions.",
		significance: "Traditional use is well documented in southern Africa; modern reviews report limited to moderate evidence for osteoarthritis and short-term low-back pain relief.",
		formUsed: "Secondary tuber, root, extract",
		validated: true
	},
	{
		name: "Dong Quai",
		originCulture: "Traditional Chinese Medicine",
		traditionalUse: "Medicinal: root used in formulas for blood nourishment, menstrual traditions, postpartum recovery, and constitutional support.",
		significance: "Classical Chinese formulas document its use; modern evidence for isolated dong quai is limited, and it has important medication and pregnancy cautions.",
		formUsed: "Root, sliced root, extract",
		validated: false
	},
	{
		name: "Goldenseal",
		originCulture: "Indigenous eastern North American herbalism and later American herbal practice",
		traditionalUse: "Medicinal: root and rhizome used for mucous membrane support, topical washes, and digestive bitters in later herbal traditions.",
		significance: "Historical documentation is strong, but overharvesting is a serious ethical concern; modern evidence is mostly constituent-based and not strong for broad wellness claims.",
		formUsed: "Root, rhizome, powder",
		validated: false
	},
	{
		name: "Hawthorn",
		originCulture: "European folk medicine, Druidic plant lore, and Traditional Chinese Medicine",
		traditionalUse: "Medicinal and spiritual: berry, flower, and leaf used for heart traditions, hedgerow protection, thresholds, and ancestral landscape lore.",
		significance: "European herbals and Chinese materia medica document hawthorn; modern studies have examined cardiovascular markers and heart-failure adjunct use, not self-treatment.",
		formUsed: "Berry, flower, leaf",
		validated: true
	},
	{
		name: "Job's Tears",
		originCulture: "Traditional Chinese Medicine and East/Southeast Asian food-medicine traditions",
		traditionalUse: "Medicinal and culinary: seed used in soups, porridges, dampness-clearing formulas, skin traditions, and everyday food tonics.",
		significance: "Classical and regional food-medicine documentation is strong; modern evidence is mostly nutritional, phytochemical, and preliminary.",
		formUsed: "Seed, grain",
		validated: false
	},
	{
		name: "Maca",
		originCulture: "Indigenous Andean food-medicine traditions",
		traditionalUse: "Medicinal and nutritional: root used as a high-altitude food, vitality tonic, fertility-associated food, and stamina support.",
		significance: "Andean cultivation and use are well documented; modern studies have explored energy, mood, and sexual function, but evidence remains limited and product-specific.",
		formUsed: "Root, root powder, cooked root",
		validated: false
	},
	{
		name: "Nettle",
		originCulture: "European folk medicine, Druidic plant lore, and Indigenous-adopted local herbalism",
		traditionalUse: "Medicinal, culinary, and spiritual: leaf used as spring food, mineral tea, protective herb, and vitality plant; root used in men's health traditions.",
		significance: "European herbals document nettle widely; modern research supports nutritional value and has examined urinary and inflammatory uses with mixed evidence.",
		formUsed: "Leaf, root, seed",
		validated: true
	},
	{
		name: "Passionflower",
		originCulture: "Indigenous southeastern North American herbalism and later American/European herbal practice",
		traditionalUse: "Medicinal and spiritual: aerial parts used for calm, sleep, nervous tension, and Christian symbolic plant interpretation after colonization.",
		significance: "Traditional use is documented in the Americas; modern clinical research suggests possible anxiety and sleep benefits, though evidence remains developing.",
		formUsed: "Flower, leaf, vine, aerial parts",
		validated: true
	},
	{
		name: "Red Clover",
		originCulture: "European folk medicine, Wicca, and Druidic plant lore",
		traditionalUse: "Medicinal and spiritual: flower heads used in teas for cleansing traditions, skin support, prosperity symbolism, and women's health folklore.",
		significance: "European herbal documentation is broad; modern research has studied isoflavones for menopausal symptoms with mixed results.",
		formUsed: "Flower, aerial parts",
		validated: false
	},
	{
		name: "Senna",
		originCulture: "Ancient Egyptian, African, Ayurvedic, and Middle Eastern apothecary traditions",
		traditionalUse: "Medicinal: leaf and pod used as a strong laxative in household and formal apothecary systems.",
		significance: "Historical use is well documented, and modern science validates stimulant laxative effects from sennosides; it is for short-term use with safety cautions.",
		formUsed: "Leaf, pod, fruit",
		validated: true
	},
	{
		name: "Soursop",
		originCulture: "Caribbean bush medicine, African diaspora herbalism, and tropical American food-medicine traditions",
		traditionalUse: "Medicinal and culinary: leaf, fruit, and bark used in teas, cooling foods, sleep traditions, and household tonics.",
		significance: "Caribbean and tropical American use is documented; modern cancer-cure claims are not clinically validated, and safety concerns exist with concentrated or excessive use.",
		formUsed: "Leaf, fruit, bark, seed",
		validated: false
	},
	{
		name: "Witch Hazel",
		originCulture: "Indigenous eastern North American plant medicine and later American herbalism",
		traditionalUse: "Medicinal: bark and leaf used in washes, poultices, and astringent preparations for skin and minor irritation traditions.",
		significance: "Indigenous and American herbal documentation is strong; modern use of distilled witch hazel as an astringent is supported for topical, limited applications.",
		formUsed: "Bark, leaf, twig distillate",
		validated: true
	},
	{
		name: "Yerba Santa",
		originCulture: "Indigenous Californian and southwestern North American herbal traditions",
		traditionalUse: "Medicinal and spiritual: leaf used for respiratory comfort, tea, steam, and protective or blessing practices in some regional folk traditions.",
		significance: "Ethnobotanical records document use among Native peoples and later western herbalists; modern clinical validation is limited.",
		formUsed: "Leaf",
		validated: false
	},
	{
		name: "Yohimbe",
		originCulture: "West and Central African traditional medicine",
		traditionalUse: "Medicinal and ritual: bark used in vitality, endurance, and sexual-health traditions, sometimes with ceremonial significance.",
		significance: "Traditional use is documented, and isolated yohimbine has pharmacologic activity, but whole-bark products can be risky and require strong safety caution.",
		formUsed: "Bark",
		validated: true
	},
	{
		name: "Acerola (Barbados Cherry)",
		originCulture: "Caribbean bush medicine and Indigenous-adjacent home remedies",
		traditionalUse: "Medicinal and nutritional: fruit used for cooling tonics, seasonal wellness drinks, and supportive everyday nourishment in tropical kitchens.",
		significance: "Modern science strongly supports vitamin C and polyphenols in acerola; however, broad “treating” claims should be framed as nutritional support rather than cures.",
		formUsed: "Fruit",
		validated: true
	},
	{
		name: "Adhatoda (Vasaka)",
		originCulture: "Ayurveda and Traditional Chinese Medicine–influenced folk respiratory tonics",
		traditionalUse: "Medicinal: leaf used in teas and syrups for seasonal respiratory comfort traditions, sometimes also used in protective household practice.",
		significance: "Research exists on anti-inflammatory constituents, but mainstream clinical validation varies; evidence should be described as limited for specific outcomes.",
		formUsed: "Leaf",
		validated: false
	},
	{
		name: "Agarwood (Aquilaria)",
		originCulture: "Pacific Islander plant healing and Asian aromatherapy traditions",
		traditionalUse: "Spiritual and medicinal: fragrant resin used for ritual atmosphere, calming incense practice, and ceremonial grounding.",
		significance: "Aromatics are well documented, while specific therapeutic claims remain limited; “validated” should remain cautious and conservative.",
		formUsed: "Resin (agarwood)",
		validated: false
	},
	{
		name: "Aloe Vera",
		originCulture: "Ayurveda, Mediterranean folk medicine, and Indigenous-adjacent healing gardens",
		traditionalUse: "Medicinal: leaf gel used in skin-soothing traditions and household first-aid rituals, often framed as supportive care for minor irritation.",
		significance: "Topical aloe has evidence for soothing and hydration in dermatology contexts; broad medical claims are not fully established and depend on product quality.",
		formUsed: "Leaf gel",
		validated: true
	},
	{
		name: "Althaea (Marshmallow Root)",
		originCulture: "European folk medicine and Indigenous-inspired herbal demulcent practice",
		traditionalUse: "Medicinal: root used as a demulcent in syrups and infusions for throat comfort and digestive lining traditions.",
		significance: "Mucilage properties are well supported; however, “disease treatment” claims remain inappropriate and evidence is mainly supportive/physiologic.",
		formUsed: "Root",
		validated: true
	},
	{
		name: "Angelica Root",
		originCulture: "European folk medicine and Druidry-adjacent herbal lore",
		traditionalUse: "Medicinal and spiritual: used in bitters and teas for digestive comfort, and in protective/threshold rituals in some folk contexts.",
		significance: "Some constituents have pharmacologic interest, but clinical evidence is mixed and product-specific.",
		formUsed: "Root, aerial parts",
		validated: false
	},
	{
		name: "Anise (Anise Seed)",
		originCulture: "Mediterranean and Middle Eastern apothecary traditions, including Hoodoo-adjacent kitchen tonics",
		traditionalUse: "Medicinal and culinary: seed used in digestive teas, breath-care preparations, and festive household tonics.",
		significance: "Essential oils are studied and can affect digestion/perception; however, “validated” depends on framing to supportive digestion rather than medical treatment.",
		formUsed: "Seed, essential oil",
		validated: true
	},
	{
		name: "Arnica",
		originCulture: "European herbalism and Indigenous-adjacent poultice practice",
		traditionalUse: "Medicinal (topical): used in poultices and washes in tradition for minor bruising and body-support routines.",
		significance: "Topical arnica has some clinical support for bruising discomfort, with safety requiring careful dilution and no internal use.",
		formUsed: "Flower, herb",
		validated: true
	},
	{
		name: "Artemisia absinthium (Wormwood)",
		originCulture: "European herbal practice, Wicca plant boundaries, and historical folk medicine",
		traditionalUse: "Medicinal and spiritual: bitter herb used in cleansing brews and symbolic boundary work, often framed as education rather than cure.",
		significance: "Bitter compounds are well known; some supportive effects are studied, but internal wormwood has safety concerns and evidence is not universal.",
		formUsed: "Leaf, aerial parts, infusion",
		validated: false
	},
	{
		name: "Ashoka (Saraca asoca)",
		originCulture: "Ayurveda and Indian folk medicinal traditions",
		traditionalUse: "Medicinal: bark and heartwood used in feminine health and tea/infusion traditions, often within practitioner-guided contexts.",
		significance: "Modern research is limited; evidence should be described as preliminary and tradition-centered.",
		formUsed: "Bark, heartwood",
		validated: false
	}
].sort((a, b) => a.name.localeCompare(b.name));
var culturalBooks = [
	{
		slug: "chinese-traditional-medicine",
		title: "Chinese Traditional Medicine",
		tradition: "Chinese",
		origin: "China, with classical materia medica and lineage-based clinical practice.",
		overview: "A constitutional system that studies pattern, season, energetics, diet, and formula balance rather than single herbs in isolation.",
		herbs: [
			"Ginger",
			"Licorice root",
			"Astragalus",
			"Ginseng",
			"Goji berry"
		],
		conditions: [
			"Digestion",
			"Immunity",
			"Fatigue",
			"Seasonal resilience"
		],
		evidence: ["Classical texts document formula logic and preparation methods.", "Modern research commonly studies individual botanicals, quality control, and safety interactions."],
		pdfProductSlug: "chinese-traditional-medicine-pdf",
		coverImage: cat_teas_default,
		firstPagePreview: "Page 1 introduces qi, yin-yang, five phases, and why formulas require trained pattern assessment.",
		subscriberRecipe: {
			title: "Ginger-Goji Warming Tea",
			preview: "A gentle kitchen-style tea built around warmth, sweetness, and evening comfort.",
			full: "Simmer fresh ginger slices for 8 minutes, remove from heat, add goji berries, cover for 5 minutes, then sweeten lightly. Avoid if ginger is contraindicated for you."
		}
	},
	{
		slug: "cajun-folk-remedies",
		title: "Cajun Folk Remedies",
		tradition: "Cajun",
		origin: "South Louisiana, Acadian, Creole, Indigenous, African, French, and Spanish crossroads.",
		overview: "A practical household tradition shaped by wetland plants, kitchen remedies, poultices, teas, prayer, and community memory.",
		herbs: [
			"Sassafras leaf",
			"Elderflower",
			"Peppermint",
			"Yarrow",
			"Cayenne"
		],
		conditions: [
			"Digestion",
			"Colds",
			"Aches",
			"Skin comfort"
		],
		evidence: ["Folklife documentation preserves oral remedy patterns and foodways.", "Ingredient evidence varies, so labels should separate household tradition from medical claims."],
		pdfProductSlug: "cajun-folk-remedies-pdf",
		coverImage: cat_herbs_default,
		firstPagePreview: "Page 1 maps the bayou kitchen cabinet: teas, steam, rubs, soup, and careful plant identification.",
		subscriberRecipe: {
			title: "Bayou Mint Steam Bowl",
			preview: "A non-ingestible aromatic steam inspired by home comfort practices.",
			full: "Add peppermint and yarrow to hot water, let cool for one minute, then breathe nearby vapor without covering the head. Stop if irritated and keep away from children."
		}
	},
	{
		slug: "african-herbalism",
		title: "African Herbalism",
		tradition: "African",
		origin: "Continental African plant traditions, with regional systems across West, East, Central, North, and Southern Africa.",
		overview: "A wide family of local knowledge systems connected to food, ceremony, birth work, ecology, divination, and community healers.",
		herbs: [
			"Moringa",
			"Neem",
			"Kinkeliba",
			"Baobab",
			"Bitter leaf"
		],
		conditions: [
			"Nutrition",
			"Skin care",
			"Digestive support",
			"Everyday vitality"
		],
		evidence: ["Ethnobotanical records document regional use, preparation, and plant identity.", "Nutrient profiles and phytochemical studies support careful educational discussion for several foods and herbs."],
		pdfProductSlug: "african-herbalism-pdf",
		coverImage: cat_herbs_default,
		firstPagePreview: "Page 1 begins with respect: Africa is not one tradition, and every plant belongs to a place.",
		subscriberRecipe: {
			title: "Moringa Green Spoon Blend",
			preview: "A food-first green blend for soups, smoothies, or warm bowls.",
			full: "Whisk 1/2 teaspoon moringa powder into a small amount of warm broth, then stir into soup after cooking. Start small and avoid using it as a substitute for medical care."
		}
	},
	{
		slug: "wiccan-earth-based-healing",
		title: "Wiccan/Earth-Based Healing",
		tradition: "Wiccan",
		origin: "Modern Pagan and Wiccan practice, drawing from European folk magic, seasonal ritual, and earth-centered spirituality.",
		overview: "A symbolic and ritual approach to herbs using intention, moon timing, elements, protection, blessing, and seasonal observance.",
		herbs: [
			"Mugwort",
			"Rose",
			"Calendula",
			"Lavender",
			"Rue"
		],
		conditions: [
			"Ritual focus",
			"Rest",
			"Protection",
			"Heart work"
		],
		evidence: ["Documentation is strongest as contemporary religious and folk practice.", "Safety evidence matters most around ingestion, smoke, essential oils, pregnancy, and medication interactions."],
		pdfProductSlug: "wiccan-earth-based-healing-pdf",
		coverImage: cat_flowers_default,
		firstPagePreview: "Page 1 covers correspondence, consent, smoke-free ritual options, and when not to ingest herbs.",
		subscriberRecipe: {
			title: "Calendula-Rose Bath Sachet",
			preview: "A gentle botanical sachet for symbolic joy and tenderness.",
			full: "Fill a muslin bag with calendula and rose, tie firmly, and steep in bath water. Patch-test first and skip if irritated or sensitive to daisy-family plants."
		}
	},
	{
		slug: "ayurvedic-indian-medicine",
		title: "Ayurvedic (Indian) Medicine",
		tradition: "Ayurvedic",
		origin: "India, with classical Sanskrit medical texts and practitioner-guided constitutional care.",
		overview: "A whole-person system using dosha, digestion, daily rhythm, food, oil, herbs, and individualized preparation.",
		herbs: [
			"Ashwagandha",
			"Turmeric",
			"Tulsi",
			"Triphala",
			"Amla"
		],
		conditions: [
			"Stress resilience",
			"Digestion",
			"Sleep",
			"Joint comfort"
		],
		evidence: ["Classical Ayurvedic texts document formulation and constitutional use.", "Modern studies examine select botanicals, but results depend on dose, quality, and person-specific context."],
		pdfProductSlug: "ayurvedic-indian-medicine-pdf",
		coverImage: cat_oils_default,
		firstPagePreview: "Page 1 introduces dosha, agni, rasayana, and why practitioner guidance matters.",
		subscriberRecipe: {
			title: "Golden Evening Milk",
			preview: "A warming kitchen preparation inspired by turmeric and spice traditions.",
			full: "Warm milk or a plant milk with turmeric, ginger, black pepper, and honey after cooling slightly. Ask a clinician first if pregnant, on blood thinners, or managing gallbladder concerns."
		}
	},
	{
		slug: "native-american-plant-medicine",
		title: "Native American Plant Medicine",
		tradition: "Native American",
		origin: "Indigenous nations of North America, each with distinct sovereign plant knowledge and protocols.",
		overview: "A respectful educational overview that emphasizes specificity, permission, land, language, and avoiding pan-Indigenous flattening.",
		herbs: [
			"Black cohosh",
			"Cedar",
			"Yarrow",
			"Echinacea",
			"Sweetgrass"
		],
		conditions: [
			"Ceremony",
			"Skin care",
			"Seasonal support",
			"Women's health history"
		],
		evidence: ["Tribal and ethnobotanical sources document distinct plant relationships where communities choose to publish them.", "Commercial use must avoid extraction from closed ceremonies and endangered or overharvested plants."],
		pdfProductSlug: "native-american-plant-medicine-pdf",
		coverImage: cat_kits_default,
		firstPagePreview: "Page 1 explains sovereignty, closed knowledge, ethical sourcing, and why not every sacred plant is for sale.",
		subscriberRecipe: {
			title: "Respectful Cedar Room Bowl",
			preview: "A smoke-free aromatic room bowl centered on gratitude, not appropriation.",
			full: "Place a small sourced cedar sprig beside warm water for scent, then return spent plant matter respectfully. Do not imitate ceremonies you were not invited to practice."
		}
	},
	{
		slug: "caribbean-rastafarian-herbalism",
		title: "Caribbean/Rastafarian Herbalism",
		tradition: "Caribbean",
		origin: "Caribbean household bush medicine, African diaspora practice, and Rastafarian ital living.",
		overview: "A food, tea, garden, and spiritual care tradition that centers vitality, simplicity, roots tonics, bitters, and community knowledge.",
		herbs: [
			"Soursop leaf",
			"Hibiscus",
			"Guinea hen weed",
			"Cerasee",
			"Moringa"
		],
		conditions: [
			"Digestion",
			"Hydration",
			"Rest",
			"Everyday vitality"
		],
		evidence: ["Bush medicine is documented through oral history, ethnobotany, and food culture.", "Some plants have active compounds that require stronger safety notes than casual wellness marketing suggests."],
		pdfProductSlug: "caribbean-rastafarian-herbalism-pdf",
		coverImage: cat_teas_default,
		firstPagePreview: "Page 1 opens with ital, bush tea, bitters, and the difference between cultural use and disease claims.",
		subscriberRecipe: {
			title: "Hibiscus Island Cooler",
			preview: "A tart, crimson tea for hydration and kitchen joy.",
			full: "Steep hibiscus for 10 minutes, strain, chill, and add lime and ginger syrup. Avoid overuse if you are managing low blood pressure or medication interactions."
		}
	},
	{
		slug: "appalachian-folk-medicine",
		title: "Appalachian Folk Medicine",
		tradition: "Appalachian",
		origin: "Appalachian mountain communities shaped by Indigenous, African, Scots-Irish, German, and local ecological knowledge.",
		overview: "A practical home tradition of teas, poultices, tonics, garden plants, woodland roots, and seasonal self-reliance.",
		herbs: [
			"Black walnut",
			"Elderberry",
			"Mullein",
			"Yarrow",
			"Wild cherry bark"
		],
		conditions: [
			"Cough traditions",
			"Skin comfort",
			"Seasonal support",
			"Digestive bitters"
		],
		evidence: ["Folklife archives document household remedies, midwifery, and plant gathering customs.", "Several plants need identification safeguards, dosing caution, and conservation awareness."],
		pdfProductSlug: "appalachian-folk-medicine-pdf",
		coverImage: cat_herbs_default,
		firstPagePreview: "Page 1 covers mountain materia medica, garden medicine, and careful harvest ethics.",
		subscriberRecipe: {
			title: "Mullein Leaf Steam",
			preview: "A gentle non-ingestible steam inspired by mountain home care.",
			full: "Steep dried mullein leaf in hot water and breathe nearby vapor. Strain carefully if preparing tea because leaf hairs can irritate the throat."
		}
	}
];
var pdfStoreCategories = {
	tradition: [
		"Chinese",
		"Cajun",
		"African",
		"Wiccan",
		"Ayurvedic",
		"Native American",
		"Caribbean",
		"Appalachian"
	],
	purpose: [
		"Immunity",
		"Digestion",
		"Pain relief",
		"Sleep",
		"Protection",
		"Skin care"
	],
	ingredientType: [
		"Roots",
		"Flowers",
		"Teas",
		"Tinctures",
		"Oils"
	]
};
var traditionOptions = [
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
	"Folk Medicine"
];
var purposeOptions = [
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
	"Skin Care"
];
var ingredientTypeOptions = [
	"All",
	"Herbs",
	"Roots",
	"Flowers",
	"Oils",
	"Resins",
	"Bark",
	"Teas",
	"Tinctures"
];
function BookOfRootsPage() {
	const [entries, setEntries] = (0, import_react.useState)([]);
	const [entriesLoading, setEntriesLoading] = (0, import_react.useState)(true);
	const [tradition, setTradition] = (0, import_react.useState)("All");
	const [purpose, setPurpose] = (0, import_react.useState)("All");
	const [ingredientType, setIngredientType] = (0, import_react.useState)("All");
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		fetch("/api/book-of-roots", { signal: controller.signal }).then(async (response) => {
			if (!response.ok) throw new Error("Book of Roots API unavailable");
			return await response.json();
		}).then((data) => {
			setEntries(data.entries ?? []);
		}).catch((error) => {
			if (error instanceof DOMException && error.name === "AbortError") return;
			setEntries([]);
		}).finally(() => setEntriesLoading(false));
		return () => controller.abort();
	}, []);
	const filteredEntries = (0, import_react.useMemo)(() => entries.filter((entry) => (tradition === "All" || entry.traditions.includes(tradition)) && (purpose === "All" || entry.purposes.includes(purpose)) && (ingredientType === "All" || entry.ingredient_type === ingredientType)), [
		entries,
		ingredientType,
		purpose,
		tradition
	]);
	const clearFilters = () => {
		setTradition("All");
		setPurpose("All");
		setIngredientType("All");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "dark-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-forest text-parchment",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,var(--color-gold),transparent_35%),radial-gradient(circle_at_80%_70%,var(--color-gold),transparent_30%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-16 text-center md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-parchment/10 rune-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-7 w-7 text-gold" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.35em] text-gold",
						children: "A living plant archive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl md:text-6xl",
						children: "The Book of Roots"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-3xl text-sm leading-7 text-parchment/80 md:text-base",
						children: "An educational field guide to plants used across world spiritual and healing traditions, gathered with curiosity, cultural respect, and practical care."
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-10 md:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card rounded-lg p-4 md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
							label: "Tradition / Culture",
							options: traditionOptions,
							value: tradition,
							onChange: setTradition
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
							label: "Purpose",
							options: purposeOptions,
							value: purpose,
							onChange: setPurpose
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
							label: "Ingredient Type",
							options: ingredientTypeOptions,
							value: ingredientType,
							onChange: setIngredientType,
							last: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 mt-8 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"Showing ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-forest",
								children: filteredEntries.length
							}),
							" of",
							" ",
							entries.length,
							" entries"
						]
					}), (tradition !== "All" || purpose !== "All" || ingredientType !== "All") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: clearFilters,
						className: "text-sm font-semibold text-forest underline decoration-gold underline-offset-4",
						children: "Clear all filters"
					})]
				}),
				entriesLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card rounded-lg p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "mx-auto h-8 w-8 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl text-forest",
							children: "Gathering the root archive"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Fetching the latest entries from Supabase."
						})
					]
				}) : entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card rounded-lg p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "mx-auto h-8 w-8 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl text-forest",
							children: "No Book of Roots entries yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Add entries in Supabase to publish them here."
						})
					]
				}) : filteredEntries.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3",
					children: filteredEntries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootCard, { entry }, entry.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "parchment-card rounded-lg p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "mx-auto h-8 w-8 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl text-forest",
							children: "No leaves on this branch yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Try broadening one of the filters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: clearFilters,
							className: "mt-5 rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
							children: "Show every entry"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "mt-12 rounded-lg border border-gold/40 bg-forest px-5 py-6 text-parchment md:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mt-1 h-5 w-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Study with care"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-parchment/75",
							children: "These entries are cultural and historical education, not medical advice. Traditions are not interchangeable; learn from practitioners within each lineage, verify plant identity, and consult a qualified clinician before ingesting herbs or combining them with medication."
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CulturalBooksSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOfWritzSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubscriberRecipesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfStoreSection, {})
			]
		})]
	});
}
function CulturalBooksSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.25em] text-gold",
				children: "Cultural healing books"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl text-forest",
				children: "Tradition by tradition"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 lg:grid-cols-2",
			children: culturalBooks.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "parchment-card overflow-hidden rounded-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-[180px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: book.coverImage,
						alt: "",
						className: "h-full min-h-52 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-widest text-gold",
								children: book.tradition
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl text-forest",
								children: book.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: book.origin
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6",
								children: book.overview
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniList, {
								label: "Key herbs",
								items: book.herbs
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniList, {
								label: "Used for",
								items: book.conditions
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "mt-4 rounded-md border border-gold/35 bg-parchment/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "flex cursor-pointer list-none items-center justify-between px-3 py-2 text-sm font-semibold text-forest",
									children: ["Evidence / proof of concept", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 border-t border-gold/25 px-3 py-3 text-sm text-muted-foreground",
									children: book.evidence.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, note))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$slug",
								params: { slug: book.pdfProductSlug },
								className: "mt-4 inline-flex items-center gap-2 rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "PDF download option"]
							})
						]
					})]
				})
			}, book.slug))
		})]
	});
}
function MiniList({ label, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-semibold text-forest",
			children: [label, ": "]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: items.join(", ")
		})]
	});
}
function BookOfWritzSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.25em] text-gold",
					children: "Book of Writz"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl text-forest",
					children: "Natural medicine and sacred plant reference"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-sm leading-6 text-muted-foreground",
					children: "An alphabetized educational reference of natural medicines, healing plants, sacred herbs, ritual ingredients, fungi, resins, and minerals documented across human history. Entries preserve cultural origin, avoid synthetic compounds, and mark modern scientific validation where it exists."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: bookOfWritzEntries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "rounded-lg border border-gold/30 bg-parchment/70 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-20 w-20 flex-none overflow-hidden rounded-md border border-gold/30 bg-parchment/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: writzImageUrlFromName(entry.name),
							alt: entry.name,
							className: "h-full w-full object-cover",
							onError: (e) => {
								const img = e.currentTarget;
								img.src = fallbackImageForWritzEntryForm(entry.formUsed);
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold text-forest",
								children: entry.name
							}), entry.validated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-forest px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-parchment",
								children: "Modern validation"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 space-y-2 text-sm leading-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "inline font-semibold text-forest",
									children: "Origin culture: "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "inline text-muted-foreground",
									children: entry.originCulture
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "inline font-semibold text-forest",
									children: "Traditional use: "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "inline text-muted-foreground",
									children: entry.traditionalUse
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "inline font-semibold text-forest",
									children: ["Proven or documented significance:", " "]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "inline text-muted-foreground",
									children: entry.significance
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "inline font-semibold text-forest",
									children: "Form used: "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "inline text-muted-foreground",
									children: entry.formUsed
								})] })
							]
						})]
					})]
				})
			}, entry.name))
		})]
	});
}
function SubscriberRecipesSection() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setUnlocked(localStorage.getItem("ha_recipe_subscriber") === "1");
	}, []);
	async function unlock(event) {
		event.preventDefault();
		const response = await fetch("/api/newsletter", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				email,
				source: "subscriber-recipes"
			})
		});
		const data = await response.json().catch(() => ({}));
		if (response.ok) {
			localStorage.setItem("ha_recipe_subscriber", "1");
			setUnlocked(true);
			setMessage(data.message || "Subscriber recipes unlocked.");
			return;
		}
		setMessage(data.message || "Could not unlock recipes.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.25em] text-gold",
					children: "Subscriber recipes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl text-forest",
					children: "Cultural recipe archive"
				})] }), !unlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: unlock,
					className: "flex w-full gap-2 sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						value: email,
						onChange: (event) => setEmail(event.target.value),
						placeholder: "subscriber@email.com",
						className: "min-w-0 flex-1 rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-forest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-md bg-forest px-4 py-2 text-sm font-semibold text-parchment",
						children: "Unlock"
					})]
				})]
			}),
			message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm font-semibold text-forest",
				children: message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
				children: culturalBooks.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-gold/30 bg-parchment/70 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold",
							children: [!unlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), book.tradition]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-xl text-forest",
							children: book.subscriberRecipe.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: book.subscriberRecipe.preview
						}),
						unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6",
							children: book.subscriberRecipe.full
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 rounded-md border border-gold/30 bg-forest/5 p-3 text-sm text-muted-foreground",
							children: "Subscribe to unlock the full preparation notes."
						})
					]
				}, book.slug))
			})
		]
	});
}
function PdfStoreSection() {
	const { add } = useCart();
	const [addedSlug, setAddedSlug] = (0, import_react.useState)("");
	const { products, loading } = useLiveProducts();
	const books = culturalBooks.flatMap((book) => {
		const product = products.find((item) => item.slug === book.pdfProductSlug);
		return product ? [{
			book,
			product
		}] : [];
	});
	function buy(slug) {
		add(slug, 1);
		setAddedSlug(slug);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.25em] text-gold",
					children: "Booklet store"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl text-forest",
					children: "PDF shelves"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryShelf, {
						title: "By tradition",
						items: pdfStoreCategories.tradition
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryShelf, {
						title: "By purpose",
						items: pdfStoreCategories.purpose
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryShelf, {
						title: "By ingredient type",
						items: pdfStoreCategories.ingredientType
					})
				]
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parchment-card rounded-lg p-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-forest",
					children: "Loading PDF shelves..."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Fetching live book products from Supabase."
				})]
			}) : books.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parchment-card rounded-lg p-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-forest",
					children: "No PDF products are in stock."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Add active book products with stock to show them here."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4",
				children: books.map(({ book, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "parchment-card overflow-hidden rounded-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: book.coverImage,
						alt: "",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl leading-tight text-forest",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-forest",
									children: ["$", product.price]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: product.short
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 rounded-md border border-gold/30 bg-parchment/70 p-3 text-xs leading-5 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mb-2 h-4 w-4 text-gold" }),
									"Free first page: ",
									book.firstPagePreview
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 rounded-md bg-forest/5 p-3 text-xs text-muted-foreground",
								children: "Full content unlocks after purchase."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => buy(product.slug),
									className: "rounded-md bg-forest px-3 py-2 text-sm font-semibold text-parchment",
									children: "Buy PDF"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/cart",
									className: "rounded-md border border-gold/40 px-3 py-2 text-center text-sm font-semibold text-forest",
									children: "Satchel"
								})]
							}),
							addedSlug === product.slug && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-semibold text-forest",
								children: "Added to satchel."
							})
						]
					})]
				}, product.slug))
			})
		]
	});
}
function CategoryShelf({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-gold/30 bg-parchment/70 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-lg text-forest",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap gap-1.5",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full bg-forest/10 px-2.5 py-1 text-xs text-forest",
				children: item
			}, item))
		})]
	});
}
function FilterBar({ label, options, value, onChange, last = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: last ? "" : "mb-5 border-b border-gold/25 pb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": value === option,
				onClick: () => onChange(option),
				className: `rounded-full border px-3 py-1.5 text-xs transition ${value === option ? "border-forest bg-forest text-parchment shadow-sm" : "border-gold/40 bg-parchment/60 text-forest hover:border-gold hover:bg-parchment-dark/40"}`,
				children: option
			}, option))
		})]
	});
}
function RootCard({ entry }) {
	const [showNotify, setShowNotify] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "parchment-card overflow-hidden rounded-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden bg-forest/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: entry.image_url || fallbackImage(entry.ingredient_type),
				alt: entry.name,
				className: "h-full w-full object-cover transition duration-500 hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-full border border-gold/60 bg-forest/90 px-3 py-1 text-[11px] uppercase tracking-wider text-parchment",
				children: entry.ingredient_type
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-forest",
					children: entry.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagGroup, {
					items: entry.traditions,
					variant: "tradition"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagGroup, {
					items: entry.purposes,
					variant: "purpose"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: entry.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group mt-5 rounded-md border border-gold/35 bg-parchment/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-forest",
						children: ["How to Use", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 transition group-open:rotate-180" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border-t border-gold/25 px-4 py-3 text-sm leading-6 text-muted-foreground",
						children: entry.how_to_use
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: entry.product_slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: entry.product_slug },
						className: "flex w-full items-center justify-center gap-2 rounded-md bg-forest px-4 py-2.5 text-sm font-semibold text-parchment transition hover:bg-forest/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), "Shop This Ingredient"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowNotify((current) => !current),
						className: "flex w-full items-center justify-center gap-2 rounded-md border border-forest px-4 py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-parchment",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), "Notify Me When Available"]
					}), showNotify && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotifyForm, { ingredient: entry.name })] })
				})
			]
		})]
	});
}
function TagGroup({ items, variant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 flex flex-wrap gap-1.5",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${variant === "tradition" ? "bg-forest/10 text-forest" : "bg-gold/20 text-gold-foreground"}`,
			children: item
		}, item))
	});
}
function NotifyForm({ ingredient }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	async function submit(event) {
		event.preventDefault();
		setStatus("sending");
		try {
			const response = await fetch("/api/book-of-roots/notify", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					email,
					ingredient
				})
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.message || "Could not save your request.");
			setMessage(data.message || "You are on the list.");
			setStatus("sent");
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Could not save your request.");
			setStatus("error");
		}
	}
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-sm font-semibold text-forest",
		children: message
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "mt-3 space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: `notify-${ingredient}`,
				className: "sr-only",
				children: "Email address"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: `notify-${ingredient}`,
				type: "email",
				required: true,
				value: email,
				onChange: (event) => setEmail(event.target.value),
				placeholder: "you@example.com",
				className: "w-full rounded-md border border-gold/40 bg-parchment px-3 py-2 text-sm outline-none focus:border-forest"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				disabled: status === "sending",
				className: "w-full rounded-md bg-forest px-3 py-2 text-sm font-semibold text-parchment disabled:opacity-60",
				children: status === "sending" ? "Joining…" : "Join the waitlist"
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive",
				children: message
			})
		]
	});
}
function writzImageUrlFromName(name) {
	return `/images/ingredients/${kebabCase(name)}.jpg`;
}
function fallbackImageForWritzEntryForm(formUsed) {
	const f = formUsed.toLowerCase();
	if (f.includes("flower") || f.includes("petal")) return cat_flowers_default;
	if (f.includes("oil") || f.includes("essential")) return cat_oils_default;
	if (f.includes("tea")) return cat_oils_default;
	if (f.includes("resin") || f.includes("tincture") || f.includes("elixir")) return cat_oils_default;
	return cat_herbs_default;
}
function kebabCase(input) {
	return input.trim().toLowerCase().replace(/['"]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/(^-|-$)/g, "");
}
function fallbackImage(ingredientType) {
	if (ingredientType === "Flowers") return cat_flowers_default;
	if (ingredientType === "Oils") return cat_oils_default;
	return cat_herbs_default;
}
//#endregion
export { BookOfRootsPage as component };
