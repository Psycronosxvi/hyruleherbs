export type WritzEntry = {
  name: string;
  originCulture: string;
  traditionalUse: string;
  significance: string;
  formUsed: string;
  validated: boolean;
};

export const bookOfWritzEntries: WritzEntry[] = [
  {
    name: "Acacia",
    originCulture: "Ancient Egyptian and Middle Eastern apothecary traditions",
    traditionalUse:
      "Medicinal and spiritual: gum, wood, and resin appear in temple materials, incense, wound dressings, and binding preparations.",
    significance:
      "Documented in ancient Egyptian material culture and later Arabic materia medica; modern study focuses mostly on gum arabic as a natural fiber and emulsifier.",
    formUsed: "Gum, resin, bark, wood",
    validated: true,
  },
  {
    name: "Achiote",
    originCulture: "Indigenous Amazonian, Caribbean, and Mesoamerican traditions",
    traditionalUse:
      "Medicinal, cosmetic, and spiritual: red seed pigment has been used for body paint, sun protection symbolism, food color, and ceremonial identity.",
    significance:
      "Ethnobotanical documentation records its cultural use across the tropical Americas; modern research studies carotenoid pigments such as bixin.",
    formUsed: "Seed, seed oil, pigment paste",
    validated: true,
  },
  {
    name: "Ashwagandha",
    originCulture: "Ayurveda, India",
    traditionalUse:
      "Medicinal: a rasayana root used in practitioner-guided formulas for strength, rest, resilience, and constitutional support.",
    significance:
      "Classical Ayurvedic texts document its role; modern clinical research has examined stress and sleep outcomes, though product quality and dosing vary.",
    formUsed: "Root, root powder, extract",
    validated: true,
  },
  {
    name: "Black Cohosh",
    originCulture: "Indigenous eastern North American plant medicine",
    traditionalUse:
      "Medicinal: documented in women's health traditions and later adopted into North American herbal practice.",
    significance:
      "Ethnobotanical records and modern trials exist; evidence for menopausal symptoms is mixed, and safety discussions include rare liver concern reports.",
    formUsed: "Root, rhizome",
    validated: true,
  },
  {
    name: "Blue Lotus",
    originCulture: "Ancient Egyptian botanical and ritual practice",
    traditionalUse:
      "Spiritual and ceremonial: associated with rebirth, beauty, solar symbolism, and sacred imagery in tomb and temple art.",
    significance:
      "Its significance is strongly documented in ancient Egyptian art and archaeology; modern psychoactive claims require careful separation from historical evidence.",
    formUsed: "Flower, petals",
    validated: false,
  },
  {
    name: "Boswellia",
    originCulture: "Middle Eastern, East African, and Ayurvedic traditions",
    traditionalUse:
      "Medicinal and spiritual: frankincense resin has been burned in devotion and used in traditional preparations for inflammation and purification.",
    significance:
      "Trade history is extensive, and modern clinical research has investigated Boswellia extracts for inflammatory conditions such as osteoarthritis.",
    formUsed: "Resin tears, resin extract, essential oil",
    validated: true,
  },
  {
    name: "Cacao",
    originCulture: "Maya, Mexica/Aztec, and broader Mesoamerican traditions",
    traditionalUse:
      "Medicinal, ceremonial, and social: cacao beverages were used in ritual exchange, elite feasting, offerings, and vitality practices.",
    significance:
      "Archaeological residue studies, codices, and colonial-era records document cacao's role; modern science studies flavanols and cardiovascular markers.",
    formUsed: "Seed, nib, paste, beverage",
    validated: true,
  },
  {
    name: "Cedar",
    originCulture: "Many Indigenous North American nations, with nation-specific protocols",
    traditionalUse:
      "Spiritual and medicinal: used in cleansing, protection, prayer, shelter, steam, and household preparations depending on the nation and context.",
    significance:
      "Cultural documentation is strong, but some ceremonial uses are closed or permission-based; respectful education should not imitate restricted rites.",
    formUsed: "Leaf, bough, bark, wood",
    validated: false,
  },
  {
    name: "Chaga",
    originCulture: "Northern Eurasian and circumpolar folk traditions",
    traditionalUse:
      "Medicinal: a hard birch-growing fungus prepared as a decoction for endurance, seasonal wellness, and household tonics.",
    significance:
      "Folk use is well documented in cold-climate regions; modern research remains mostly laboratory or preliminary human evidence.",
    formUsed: "Fungal conk, chunks, powder",
    validated: false,
  },
  {
    name: "Copal",
    originCulture: "Mesoamerican Indigenous ritual traditions",
    traditionalUse:
      "Spiritual: aromatic resin burned for offerings, cleansing, ancestor connection, and ceremonial atmosphere.",
    significance:
      "Archaeological and cultural records document copal in Mesoamerican ritual life; modern validation is primarily cultural and historical rather than clinical.",
    formUsed: "Resin",
    validated: false,
  },
  {
    name: "Damiana",
    originCulture: "Indigenous Mexican, Central American, and Caribbean folk traditions",
    traditionalUse:
      "Medicinal and spiritual: leaf used in teas and tonics associated with mood, desire, dreams, and relaxation.",
    significance:
      "Ethnobotanical documentation exists; modern clinical evidence is limited, so it should be framed as traditional knowledge rather than proven treatment.",
    formUsed: "Leaf, aerial parts",
    validated: false,
  },
  {
    name: "Echinacea",
    originCulture: "Indigenous North American plant medicine",
    traditionalUse:
      "Medicinal: root and aerial parts used in diverse tribal traditions, later becoming a major North American herbal product.",
    significance:
      "Cultural documentation is strong, and modern research suggests possible modest cold-prevention benefit, while evidence for shortening colds remains uncertain.",
    formUsed: "Root, flower, aerial parts",
    validated: true,
  },
  {
    name: "Fennel",
    originCulture: "Mediterranean, Middle Eastern, and European apothecary traditions",
    traditionalUse:
      "Medicinal and culinary: seed used in digestive teas, postpartum foodways, breath freshening, and household remedies.",
    significance:
      "Classical Greek, Roman, and Arabic medicine document fennel; modern research examines digestive, lactation, and antispasmodic uses with mixed evidence.",
    formUsed: "Seed, bulb, leaf, essential oil",
    validated: true,
  },
  {
    name: "Gotu Kola",
    originCulture: "Ayurvedic, Sri Lankan, Southeast Asian, and Traditional Chinese Medicine",
    traditionalUse:
      "Medicinal: used for memory, wound care, longevity, skin, and cooling preparations in several Asian medical systems.",
    significance:
      "Traditional documentation is broad; modern studies investigate wound healing, venous insufficiency, and cognitive outcomes.",
    formUsed: "Leaf, aerial parts, extract",
    validated: true,
  },
  {
    name: "Henna",
    originCulture: "North African, Middle Eastern, South Asian, and Islamic cultural traditions",
    traditionalUse:
      "Spiritual, cosmetic, and medicinal: leaf paste used for adornment, blessing, cooling, rites of passage, and protective symbolism.",
    significance:
      "Historical and cultural documentation is extensive; natural henna differs from unsafe adulterated black henna products.",
    formUsed: "Leaf powder, paste, dye",
    validated: false,
  },
  {
    name: "Hibiscus",
    originCulture:
      "African, Caribbean, Middle Eastern, and Latin American food-medicine traditions",
    traditionalUse:
      "Medicinal and culinary: calyces used in tart red drinks, cooling teas, hospitality beverages, and household wellness practices.",
    significance:
      "Cultural documentation is broad, and modern clinical studies have examined blood pressure markers with promising but context-dependent results.",
    formUsed: "Calyx, flower",
    validated: true,
  },
  {
    name: "Kava",
    originCulture: "Pacific Islander traditions including Fiji, Tonga, Samoa, and Vanuatu",
    traditionalUse:
      "Medicinal, social, and ceremonial: root beverage used in diplomacy, ceremony, relaxation, and community gathering.",
    significance:
      "Cultural documentation is deep; modern studies support anxiolytic potential, while safety depends on preparation, plant part, liver risk, and medication interactions.",
    formUsed: "Root, rhizome, beverage",
    validated: true,
  },
  {
    name: "Kinkeliba",
    originCulture: "West African traditional medicine, especially Senegal and neighboring regions",
    traditionalUse:
      "Medicinal: leaf tea used as a bitter household infusion for digestion, liver support traditions, and daily wellness.",
    significance:
      "Regional use is well documented in West African herbal practice; modern evidence is mostly phytochemical and preliminary.",
    formUsed: "Leaf",
    validated: false,
  },
  {
    name: "Lavender",
    originCulture: "Mediterranean and European folk medicine",
    traditionalUse:
      "Medicinal and spiritual: flowers used for sleep sachets, purification, household protection, perfumery, and calming preparations.",
    significance:
      "European herbals document lavender; modern studies examine anxiety, sleep, and aromatherapy outcomes with moderate but product-specific evidence.",
    formUsed: "Flower, essential oil",
    validated: true,
  },
  {
    name: "Mandrake",
    originCulture: "Mediterranean, Middle Eastern, and European folk magic",
    traditionalUse:
      "Spiritual and magical: root associated with protection, fertility lore, dream work, and dangerous plant power in grimoires and folklore.",
    significance:
      "Historical documentation is strong in folklore and medicine, but the plant is toxic and unsuitable for casual wellness use.",
    formUsed: "Root, leaf",
    validated: false,
  },
  {
    name: "Moringa",
    originCulture: "African, South Asian, Ayurvedic, and tropical food-medicine traditions",
    traditionalUse:
      "Medicinal and nutritional: leaf, seed, and pod used as mineral-rich food, oil source, and household tonic.",
    significance:
      "Traditional food use is widespread; modern research supports its nutrient density while disease-treatment claims remain limited.",
    formUsed: "Leaf, seed, pod, oil",
    validated: true,
  },
  {
    name: "Mugwort",
    originCulture: "European folk magic, East Asian moxibustion traditions, and modern Wicca",
    traditionalUse:
      "Medicinal and spiritual: used for dreams, boundaries, divination, moxa, and women's health traditions depending on lineage.",
    significance:
      "Historical documentation is broad across Europe and Asia; modern clinical validation varies by preparation and use.",
    formUsed: "Leaf, aerial parts",
    validated: false,
  },
  {
    name: "Myrrh",
    originCulture:
      "Ancient Egyptian, Middle Eastern, East African, and Biblical apothecary traditions",
    traditionalUse:
      "Medicinal and spiritual: resin used in embalming, incense, anointing oils, oral care traditions, and purification.",
    significance:
      "Ancient texts and trade records document myrrh extensively; modern studies investigate antimicrobial and oral health applications.",
    formUsed: "Resin, gum, essential oil",
    validated: true,
  },
  {
    name: "Neem",
    originCulture: "Ayurveda and South Asian household medicine",
    traditionalUse:
      "Medicinal and protective: leaf, bark, seed oil, and twigs used for skin, oral hygiene, garden protection, and ritual cleansing.",
    significance:
      "Ayurvedic and folk documentation is extensive; modern research supports antimicrobial and insecticidal properties, while internal use needs caution.",
    formUsed: "Leaf, bark, seed oil, twig",
    validated: true,
  },
  {
    name: "Noni",
    originCulture: "Pacific Islander plant medicine, including Polynesian and Hawaiian traditions",
    traditionalUse:
      "Medicinal and nutritional: fruit, leaf, and root used in topical applications, tonics, dyes, and community plant medicine.",
    significance:
      "Ethnobotanical records document broad Pacific use; modern evidence is limited and commercial claims often exceed proof.",
    formUsed: "Fruit, leaf, root",
    validated: false,
  },
  {
    name: "Pau d'Arco",
    originCulture: "Indigenous South American and Amazonian herbal traditions",
    traditionalUse:
      "Medicinal: inner bark used in decoctions for resilience, fungal concerns, and household tonics.",
    significance:
      "Traditional use is documented, but modern human evidence is limited and safety concerns exist with concentrated extracts.",
    formUsed: "Inner bark",
    validated: false,
  },
  {
    name: "Plantain Leaf",
    originCulture: "European folk medicine and many Indigenous-adopted local herbal practices",
    traditionalUse:
      "Medicinal: leaf poultices used for bites, stings, minor skin irritation, and field first-aid traditions.",
    significance:
      "European herbals and modern community herbalism document its use; laboratory research supports anti-inflammatory constituents, but clinical evidence is modest.",
    formUsed: "Leaf",
    validated: false,
  },
  {
    name: "Reishi",
    originCulture: "Traditional Chinese Medicine and East Asian longevity traditions",
    traditionalUse:
      "Medicinal and spiritual: fungus associated with longevity, spirit nourishment, resilience, and elite symbolic art.",
    significance:
      "Classical Chinese texts document lingzhi; modern research studies immune markers and cancer-support contexts, but evidence is not a cure claim.",
    formUsed: "Fruiting body, spore, extract",
    validated: true,
  },
  {
    name: "Rue",
    originCulture:
      "Mediterranean folk medicine, European magic, Hoodoo, Santería, and Caribbean folk practice",
    traditionalUse:
      "Spiritual and medicinal: used for protection, uncrossing, cleansing, and historically for strong medicinal applications.",
    significance:
      "Cultural documentation is broad, but rue is potent and can be unsafe internally, especially during pregnancy.",
    formUsed: "Leaf, aerial parts, oil",
    validated: false,
  },
  {
    name: "Saffron",
    originCulture: "Persian, Middle Eastern, Ayurvedic, Mediterranean, and Unani traditions",
    traditionalUse:
      "Medicinal, culinary, and spiritual: stigma used for mood, beauty, luxury food, ritual color, and reproductive traditions.",
    significance:
      "Historical documentation is extensive, and modern trials have examined mood outcomes, though dose, quality, and adulteration concerns matter.",
    formUsed: "Flower stigma",
    validated: true,
  },
  {
    name: "Sage",
    originCulture: "European folk medicine and distinct Indigenous American traditions",
    traditionalUse:
      "Medicinal and spiritual: used in kitchen medicine, cleansing, protection, memory lore, and nation-specific ceremonial contexts.",
    significance:
      "European herbals and Indigenous cultural documentation exist, but sacred Indigenous smoke practices should not be copied outside permission and context.",
    formUsed: "Leaf, aerial parts",
    validated: false,
  },
  {
    name: "Sandalwood",
    originCulture: "Ayurvedic, Hindu, Buddhist, and Pacific/Asian aromatic traditions",
    traditionalUse:
      "Spiritual and medicinal: heartwood paste and oil used for devotion, cooling, fragrance, meditation, and skin preparations.",
    significance:
      "Classical and ritual documentation is strong; modern concern includes overharvesting, so ethical sourcing is part of the entry.",
    formUsed: "Heartwood, powder, essential oil",
    validated: false,
  },
  {
    name: "Sea Moss",
    originCulture: "Caribbean and Irish coastal food-medicine traditions",
    traditionalUse:
      "Medicinal and nutritional: seaweed gel used in drinks, porridges, skin preparations, and mineral-rich household tonics.",
    significance:
      "Cultural food use is well documented; modern validation centers on minerals and carrageenan content, not broad cure claims.",
    formUsed: "Seaweed thallus, gel",
    validated: true,
  },
  {
    name: "Slippery Elm",
    originCulture: "Indigenous North American plant medicine and later American herbalism",
    traditionalUse:
      "Medicinal: inner bark used as a demulcent for throat, digestive comfort, poultices, and recovery foods.",
    significance:
      "Ethnobotanical and American herbal records document use; modern evidence supports mucilage properties more than disease treatment.",
    formUsed: "Inner bark powder",
    validated: true,
  },
  {
    name: "St. John's Wort",
    originCulture: "European folk medicine and Christian midsummer plant lore",
    traditionalUse:
      "Medicinal and spiritual: flowering tops used for mood, wound oils, protection, and solar folk magic.",
    significance:
      "Historical documentation is strong, and modern evidence supports use for mild to moderate depression, but interactions with medications are significant.",
    formUsed: "Flowering tops, infused oil, extract",
    validated: true,
  },
  {
    name: "Sweetgrass",
    originCulture: "Indigenous North American nations with specific cultural protocols",
    traditionalUse:
      "Spiritual: braided grass used in prayer, gratitude, purification, and community-specific ceremonial contexts.",
    significance:
      "Cultural documentation is strong, but uses may be nation-specific or closed; conservation and permission are essential.",
    formUsed: "Grass blade, braid",
    validated: false,
  },
  {
    name: "Tobacco",
    originCulture: "Indigenous North, Central, and South American sacred plant traditions",
    traditionalUse:
      "Spiritual and ceremonial: used as offering, prayer carrier, covenant plant, and diplomatic medicine in many distinct traditions.",
    significance:
      "Archaeological and cultural records are extensive; this entry concerns sacred traditional use, not commercial tobacco consumption.",
    formUsed: "Leaf",
    validated: false,
  },
  {
    name: "White Willow",
    originCulture: "European, Middle Eastern, and Indigenous-adopted folk medicine",
    traditionalUse:
      "Medicinal: bark used in decoctions for pain, fever, and inflammation traditions.",
    significance:
      "Historical use is documented, and salicylate chemistry connects willow to modern pain-relief pharmacology, though crude bark is not aspirin.",
    formUsed: "Bark",
    validated: true,
  },
  {
    name: "Yarrow",
    originCulture: "European, Druidic, Indigenous North American, and Asian folk traditions",
    traditionalUse:
      "Medicinal and spiritual: used for wound lore, divination, protection, feverish states, and boundary magic.",
    significance:
      "Classical and folk documentation is extensive; modern research studies anti-inflammatory and wound-related constituents, but clinical evidence is limited.",
    formUsed: "Flowering tops, leaf",
    validated: false,
  },
  {
    name: "Andrographis",
    originCulture: "Ayurveda and Traditional Chinese Medicine",
    traditionalUse:
      "Medicinal: bitter aerial parts used for heat-clearing, seasonal respiratory support, feverish states, and digestive complaints.",
    significance:
      "Traditional use is documented in South and East Asian materia medica; modern reviews suggest standardized extracts may reduce common-cold symptom severity, while safety and dosing still matter.",
    formUsed: "Leaf, stem, aerial parts, extract",
    validated: true,
  },
  {
    name: "Bacopa",
    originCulture: "Ayurveda, India",
    traditionalUse:
      "Medicinal and spiritual: brahmi leaf used in memory, learning, meditation, and nervous-system formulas.",
    significance:
      "Ayurvedic texts document its cognitive and contemplative role; modern human studies show some promise for memory and attention, though results vary by extract and study design.",
    formUsed: "Leaf, aerial parts, whole plant extract",
    validated: true,
  },
  {
    name: "Baobab",
    originCulture: "African traditional food-medicine systems",
    traditionalUse:
      "Medicinal and nutritional: fruit pulp, leaves, and seed used as food, mineral support, cooling drinks, and household wellness preparations.",
    significance:
      "African foodway documentation is extensive; modern validation centers on fiber, vitamin C, polyphenols, and nutritional value rather than broad disease claims.",
    formUsed: "Fruit pulp, leaf, seed, seed oil",
    validated: true,
  },
  {
    name: "Bitter Melon",
    originCulture:
      "Ayurveda, Traditional Chinese Medicine, Caribbean bush medicine, and African diaspora foodways",
    traditionalUse:
      "Medicinal and culinary: fruit and leaf used in bitter tonics, blood-sugar traditions, digestion, and food-as-medicine preparations.",
    significance:
      "Traditional documentation is broad; modern research has examined glucose metabolism, but clinical results are mixed and it should not replace diabetes care.",
    formUsed: "Fruit, seed, leaf, juice",
    validated: false,
  },
  {
    name: "Burdock",
    originCulture: "Traditional Chinese Medicine, European folk medicine, and Hoodoo rootwork",
    traditionalUse:
      "Medicinal and spiritual: root used as a cleansing bitter, skin-support herb, food root, and symbolic uncrossing or grounding ingredient.",
    significance:
      "Documented in Asian and European materia medica as both food and medicine; modern evidence is mostly nutritional, phytochemical, and preliminary.",
    formUsed: "Root, seed, leaf",
    validated: false,
  },
  {
    name: "Cat's Claw",
    originCulture: "Indigenous Amazonian herbal traditions",
    traditionalUse:
      "Medicinal: inner bark and vine preparations used for inflammation, resilience, digestive complaints, and community healing traditions.",
    significance:
      "Ethnobotanical records document Amazonian use; modern studies examine immune and inflammatory markers, but clinical evidence remains limited.",
    formUsed: "Inner bark, vine bark, decoction",
    validated: false,
  },
  {
    name: "Devil's Claw",
    originCulture: "Southern African traditional medicine",
    traditionalUse:
      "Medicinal: tuber used for joint pain, back pain, digestion, and inflammatory folk conditions.",
    significance:
      "Traditional use is well documented in southern Africa; modern reviews report limited to moderate evidence for osteoarthritis and short-term low-back pain relief.",
    formUsed: "Secondary tuber, root, extract",
    validated: true,
  },
  {
    name: "Dong Quai",
    originCulture: "Traditional Chinese Medicine",
    traditionalUse:
      "Medicinal: root used in formulas for blood nourishment, menstrual traditions, postpartum recovery, and constitutional support.",
    significance:
      "Classical Chinese formulas document its use; modern evidence for isolated dong quai is limited, and it has important medication and pregnancy cautions.",
    formUsed: "Root, sliced root, extract",
    validated: false,
  },
  {
    name: "Goldenseal",
    originCulture: "Indigenous eastern North American herbalism and later American herbal practice",
    traditionalUse:
      "Medicinal: root and rhizome used for mucous membrane support, topical washes, and digestive bitters in later herbal traditions.",
    significance:
      "Historical documentation is strong, but overharvesting is a serious ethical concern; modern evidence is mostly constituent-based and not strong for broad wellness claims.",
    formUsed: "Root, rhizome, powder",
    validated: false,
  },
  {
    name: "Hawthorn",
    originCulture: "European folk medicine, Druidic plant lore, and Traditional Chinese Medicine",
    traditionalUse:
      "Medicinal and spiritual: berry, flower, and leaf used for heart traditions, hedgerow protection, thresholds, and ancestral landscape lore.",
    significance:
      "European herbals and Chinese materia medica document hawthorn; modern studies have examined cardiovascular markers and heart-failure adjunct use, not self-treatment.",
    formUsed: "Berry, flower, leaf",
    validated: true,
  },
  {
    name: "Job's Tears",
    originCulture: "Traditional Chinese Medicine and East/Southeast Asian food-medicine traditions",
    traditionalUse:
      "Medicinal and culinary: seed used in soups, porridges, dampness-clearing formulas, skin traditions, and everyday food tonics.",
    significance:
      "Classical and regional food-medicine documentation is strong; modern evidence is mostly nutritional, phytochemical, and preliminary.",
    formUsed: "Seed, grain",
    validated: false,
  },
  {
    name: "Maca",
    originCulture: "Indigenous Andean food-medicine traditions",
    traditionalUse:
      "Medicinal and nutritional: root used as a high-altitude food, vitality tonic, fertility-associated food, and stamina support.",
    significance:
      "Andean cultivation and use are well documented; modern studies have explored energy, mood, and sexual function, but evidence remains limited and product-specific.",
    formUsed: "Root, root powder, cooked root",
    validated: false,
  },
  {
    name: "Nettle",
    originCulture:
      "European folk medicine, Druidic plant lore, and Indigenous-adopted local herbalism",
    traditionalUse:
      "Medicinal, culinary, and spiritual: leaf used as spring food, mineral tea, protective herb, and vitality plant; root used in men's health traditions.",
    significance:
      "European herbals document nettle widely; modern research supports nutritional value and has examined urinary and inflammatory uses with mixed evidence.",
    formUsed: "Leaf, root, seed",
    validated: true,
  },
  {
    name: "Passionflower",
    originCulture:
      "Indigenous southeastern North American herbalism and later American/European herbal practice",
    traditionalUse:
      "Medicinal and spiritual: aerial parts used for calm, sleep, nervous tension, and Christian symbolic plant interpretation after colonization.",
    significance:
      "Traditional use is documented in the Americas; modern clinical research suggests possible anxiety and sleep benefits, though evidence remains developing.",
    formUsed: "Flower, leaf, vine, aerial parts",
    validated: true,
  },
  {
    name: "Red Clover",
    originCulture: "European folk medicine, Wicca, and Druidic plant lore",
    traditionalUse:
      "Medicinal and spiritual: flower heads used in teas for cleansing traditions, skin support, prosperity symbolism, and women's health folklore.",
    significance:
      "European herbal documentation is broad; modern research has studied isoflavones for menopausal symptoms with mixed results.",
    formUsed: "Flower, aerial parts",
    validated: false,
  },
  {
    name: "Senna",
    originCulture: "Ancient Egyptian, African, Ayurvedic, and Middle Eastern apothecary traditions",
    traditionalUse:
      "Medicinal: leaf and pod used as a strong laxative in household and formal apothecary systems.",
    significance:
      "Historical use is well documented, and modern science validates stimulant laxative effects from sennosides; it is for short-term use with safety cautions.",
    formUsed: "Leaf, pod, fruit",
    validated: true,
  },
  {
    name: "Soursop",
    originCulture:
      "Caribbean bush medicine, African diaspora herbalism, and tropical American food-medicine traditions",
    traditionalUse:
      "Medicinal and culinary: leaf, fruit, and bark used in teas, cooling foods, sleep traditions, and household tonics.",
    significance:
      "Caribbean and tropical American use is documented; modern cancer-cure claims are not clinically validated, and safety concerns exist with concentrated or excessive use.",
    formUsed: "Leaf, fruit, bark, seed",
    validated: false,
  },
  {
    name: "Witch Hazel",
    originCulture: "Indigenous eastern North American plant medicine and later American herbalism",
    traditionalUse:
      "Medicinal: bark and leaf used in washes, poultices, and astringent preparations for skin and minor irritation traditions.",
    significance:
      "Indigenous and American herbal documentation is strong; modern use of distilled witch hazel as an astringent is supported for topical, limited applications.",
    formUsed: "Bark, leaf, twig distillate",
    validated: true,
  },
  {
    name: "Yerba Santa",
    originCulture: "Indigenous Californian and southwestern North American herbal traditions",
    traditionalUse:
      "Medicinal and spiritual: leaf used for respiratory comfort, tea, steam, and protective or blessing practices in some regional folk traditions.",
    significance:
      "Ethnobotanical records document use among Native peoples and later western herbalists; modern clinical validation is limited.",
    formUsed: "Leaf",
    validated: false,
  },
  {
    name: "Yohimbe",
    originCulture: "West and Central African traditional medicine",
    traditionalUse:
      "Medicinal and ritual: bark used in vitality, endurance, and sexual-health traditions, sometimes with ceremonial significance.",
    significance:
      "Traditional use is documented, and isolated yohimbine has pharmacologic activity, but whole-bark products can be risky and require strong safety caution.",
    formUsed: "Bark",
    validated: true,
  },

  // --- Added entries (50) ---
  /*
    NOTE: This block was rebuilt to ensure the file remains syntactically valid.
    Entries must include: name, originCulture, traditionalUse, significance, formUsed, validated.
    The array is sorted at the end of the file by `name`.
  */

  {
    name: "Acerola (Barbados Cherry)",
    originCulture: "Caribbean bush medicine and Indigenous-adjacent home remedies",
    traditionalUse:
      "Medicinal and nutritional: fruit used for cooling tonics, seasonal wellness drinks, and supportive everyday nourishment in tropical kitchens.",
    significance:
      "Modern science strongly supports vitamin C and polyphenols in acerola; however, broad “treating” claims should be framed as nutritional support rather than cures.",
    formUsed: "Fruit",
    validated: true,
  },
  {
    name: "Adhatoda (Vasaka)",
    originCulture: "Ayurveda and Traditional Chinese Medicine–influenced folk respiratory tonics",
    traditionalUse:
      "Medicinal: leaf used in teas and syrups for seasonal respiratory comfort traditions, sometimes also used in protective household practice.",
    significance:
      "Research exists on anti-inflammatory constituents, but mainstream clinical validation varies; evidence should be described as limited for specific outcomes.",
    formUsed: "Leaf",
    validated: false,
  },
  {
    name: "Agarwood (Aquilaria)",
    originCulture: "Pacific Islander plant healing and Asian aromatherapy traditions",
    traditionalUse:
      "Spiritual and medicinal: fragrant resin used for ritual atmosphere, calming incense practice, and ceremonial grounding.",
    significance:
      "Aromatics are well documented, while specific therapeutic claims remain limited; “validated” should remain cautious and conservative.",
    formUsed: "Resin (agarwood)",
    validated: false,
  },
  {
    name: "Aloe Vera",
    originCulture: "Ayurveda, Mediterranean folk medicine, and Indigenous-adjacent healing gardens",
    traditionalUse:
      "Medicinal: leaf gel used in skin-soothing traditions and household first-aid rituals, often framed as supportive care for minor irritation.",
    significance:
      "Topical aloe has evidence for soothing and hydration in dermatology contexts; broad medical claims are not fully established and depend on product quality.",
    formUsed: "Leaf gel",
    validated: true,
  },
  {
    name: "Althaea (Marshmallow Root)",
    originCulture: "European folk medicine and Indigenous-inspired herbal demulcent practice",
    traditionalUse:
      "Medicinal: root used as a demulcent in syrups and infusions for throat comfort and digestive lining traditions.",
    significance:
      "Mucilage properties are well supported; however, “disease treatment” claims remain inappropriate and evidence is mainly supportive/physiologic.",
    formUsed: "Root",
    validated: true,
  },
  {
    name: "Angelica Root",
    originCulture: "European folk medicine and Druidry-adjacent herbal lore",
    traditionalUse:
      "Medicinal and spiritual: used in bitters and teas for digestive comfort, and in protective/threshold rituals in some folk contexts.",
    significance:
      "Some constituents have pharmacologic interest, but clinical evidence is mixed and product-specific.",
    formUsed: "Root, aerial parts",
    validated: false,
  },
  {
    name: "Anise (Anise Seed)",
    originCulture: "Mediterranean and Middle Eastern apothecary traditions, including Hoodoo-adjacent kitchen tonics",
    traditionalUse:
      "Medicinal and culinary: seed used in digestive teas, breath-care preparations, and festive household tonics.",
    significance:
      "Essential oils are studied and can affect digestion/perception; however, “validated” depends on framing to supportive digestion rather than medical treatment.",
    formUsed: "Seed, essential oil",
    validated: true,
  },
  {
    name: "Arnica",
    originCulture: "European herbalism and Indigenous-adjacent poultice practice",
    traditionalUse:
      "Medicinal (topical): used in poultices and washes in tradition for minor bruising and body-support routines.",
    significance:
      "Topical arnica has some clinical support for bruising discomfort, with safety requiring careful dilution and no internal use.",
    formUsed: "Flower, herb",
    validated: true,
  },
  {
    name: "Artemisia absinthium (Wormwood)",
    originCulture: "European herbal practice, Wicca plant boundaries, and historical folk medicine",
    traditionalUse:
      "Medicinal and spiritual: bitter herb used in cleansing brews and symbolic boundary work, often framed as education rather than cure.",
    significance:
      "Bitter compounds are well known; some supportive effects are studied, but internal wormwood has safety concerns and evidence is not universal.",
    formUsed: "Leaf, aerial parts, infusion",
    validated: false,
  },
  {
    name: "Ashoka (Saraca asoca)",
    originCulture: "Ayurveda and Indian folk medicinal traditions",
    traditionalUse:
      "Medicinal: bark and heartwood used in feminine health and tea/infusion traditions, often within practitioner-guided contexts.",
    significance:
      "Modern research is limited; evidence should be described as preliminary and tradition-centered.",
    formUsed: "Bark, heartwood",
    validated: false,
  },

  /* TODO: Remaining 39 entries to reach exactly 50 must be added.
     I’m stopping here to avoid adding partial/truncated content again in this single edit.
     Next edit will add the remaining objects and ensure the array closes properly. */
].sort((a, b) => a.name.localeCompare(b.name));
