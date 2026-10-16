/**
 * Compliance Review Status Hierarchy:
 * - developer_reviewed: Content aligned with Blueprint v2 Section 10 claims matrix by dev; NOT yet client signed-off.
 * - client_approved: Formally reviewed & approved by Harmony of Cells founder / client leadership.
 * - legally_approved: Formally reviewed & approved by qualified legal / regulatory counsel.
 * - pending_review: Remote Google Sheet row or unvetted draft copy.
 */
export const COMPLIANCE_REVIEW_LEVELS = {
  DEVELOPER_REVIEWED: 'developer_reviewed',
  CLIENT_APPROVED: 'client_approved',
  LEGALLY_APPROVED: 'legally_approved',
  PENDING_REVIEW: 'pending_review'
};

/**
 * Harmony of Cells — Curated Product Catalog
 * Source of truth: docs/Harmony_of_Cells_Developer_Handoff_Blueprint_v2_Nervous_System_Lifestyle.docx
 *
 * Compliance: All product descriptions adhere strictly to Section 10 (Product Claims Replacement Matrix)
 * and Section 9 (Essential Oil Product Page Template).
 *
 * Rules:
 * - No therapeutic/disease prevention claims (immune defense, cellular repair, hormone balance, pain cure).
 * - Focused on aroma profile, sensory rituals, responsible dilution and usage.
 * - All products flagged with `reviewed: true`.
 */

export const DEFAULT_PRODUCTS = [
  {
    name: "On Guard 5ml",
    category: "Blend",
    size: "5ml",
    price: "CLIENT TO PROVIDE",
    description: "A distinctive warm, spicy-citrus aromatic blend for everyday sensory and home wellness rituals.",
    aroma_profile: "Warm • Spicy • Citrus",
    why_choose: "Valued for its warm, welcoming spice notes and versatility in creating uplifting, comforting sensory environments.",
    rituals: "Ambient diffusion; welcoming spaces; autumn and winter home rituals; gentle hand-care.",
    usage: "Diffuse 3–4 drops in an ultrasonic diffuser, or dilute 1 drop in carrier oil for aromatic touch.",
    safety: "Dilute thoroughly before topical use. Contains citrus oils; avoid sunlight and UV rays for 12 hours after topical application.",
    brand: "dōTERRA / Pure Botanical Blend",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Petal Diffuser, product:Fractionated Coconut Oil"
  },
  {
    name: "On Guard 15ml",
    category: "Blend",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A distinctive warm, spicy-citrus aromatic blend for everyday sensory and home wellness rituals.",
    aroma_profile: "Warm • Spicy • Citrus",
    why_choose: "A signature blend of Wild Orange, Clove, Cinnamon, Eucalyptus, and Rosemary designed for comforting aromatic atmospheres.",
    rituals: "Living room diffusion; cozy workspace atmosphere; seasonal home refreshment.",
    usage: "Diffuse 3–5 drops in an ultrasonic diffuser. Follow recommended dilution guidance for skin contact.",
    safety: "Always dilute with carrier oil. Phototoxic; avoid UV exposure for 12 hours after skin contact. Keep out of reach of children.",
    brand: "dōTERRA / Pure Botanical Blend",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Pebble Diffuser, product:Tea Tree 15ml"
  },
  {
    name: "Lavender 5ml",
    category: "Single Oil",
    size: "5ml",
    price: "CLIENT TO PROVIDE",
    description: "A soft floral aroma often chosen for evening wind-down, mindful breathing and personal wellness rituals.",
    aroma_profile: "Soft • Floral • Herbaceous",
    why_choose: "One of the most versatile botanicals, cherished globally for its gentle aromatic character and peaceful ambiance.",
    rituals: "Evening wind-down; mindful breathing; personal care; nighttime diffusion.",
    usage: "Diffuse 3–4 drops in your bedroom or dilute with Fractionated Coconut Oil for gentle temple or foot massage.",
    safety: "For topical use, dilute with a carrier oil. Avoid contact with eyes, inner ears, and sensitive areas. Keep out of reach of children.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Peppermint 5ml, product:Petal Diffuser"
  },
  {
    name: "Lavender 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "₹399",
    description: "A soft floral aroma often chosen for evening wind-down, mindful breathing and personal wellness rituals.",
    aroma_profile: "Soft • Floral • Herbaceous",
    why_choose: "Distilled from high-altitude French lavender, cherished for its gentle, serene aromatic qualities.",
    rituals: "Evening decompression; bedroom diffusion; bath and personal-care rituals; calming meditation.",
    usage: "Diffuse 3–5 drops before sleep, or dilute with carrier oil for a relaxing evening body massage.",
    safety: "Dilute appropriately for topical application. Avoid contact with eyes and sensitive areas. Keep away from small children.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Peppermint 15ml, course:Preliminary Consultation"
  },
  {
    name: "MetaPWR Blend 15ml",
    category: "Blend",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A vibrant citrus-spice aromatic blend created to complement an active lifestyle and energising routines.",
    aroma_profile: "Vibrant • Citrus • Warm Spice",
    why_choose: "Combining Grapefruit, Lemon, Peppermint, Ginger, and Cinnamon Bark for an invigorating, bright sensory lift.",
    rituals: "Morning movement; active lifestyle routines; refreshing daytime diffusion; workout motivation.",
    usage: "Diffuse during morning exercise or dilute 1–2 drops with a carrier oil for an energising aromatic touch.",
    safety: "Contains citrus oils; avoid direct sunlight or UV rays for up to 12 hours after skin application. Always dilute.",
    brand: "dōTERRA / Pure Botanical Blend",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Lemon 15ml, product:Healthy Experience Kit"
  },
  {
    name: "Peppermint 5ml",
    category: "Single Oil",
    size: "5ml",
    price: "CLIENT TO PROVIDE",
    description: "A fresh, cooling aroma often used for refreshing sensory experiences, movement and daytime rituals.",
    aroma_profile: "Fresh • Cooling • Minty",
    why_choose: "Renowned for its crisp, invigorating scent that revitalizes the senses during study, work, or midday slumps.",
    rituals: "Midday reset; post-movement cooling touch; morning clarity; active workspaces.",
    usage: "Diffuse for an uplifting environment, or dilute with carrier oil and apply lightly to wrists or back of neck.",
    safety: "Strong cooling sensation; keep well away from eyes and sensitive mucous membranes. Dilute appropriately. Avoid use on infants.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Lavender 5ml, product:Lemon 15ml"
  },
  {
    name: "Peppermint 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "₹599",
    description: "A fresh, cooling aroma often used for refreshing sensory experiences, movement and daytime rituals.",
    aroma_profile: "Fresh • Cooling • Minty",
    why_choose: "Full-size bottle of pure botanical Peppermint, prized for its energising, refreshing and clarifying olfactory qualities.",
    rituals: "Afternoon work slumps; post-exercise cooling massage; morning movement; desk diffusion.",
    usage: "Diffuse 3–4 drops for a refreshing atmosphere, or dilute 1 drop with carrier oil for a cooling neck rub.",
    safety: "Concentrated menthol. Avoid contact with eyes and sensitive areas. Always dilute before topical application.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Lavender 15ml, product:Wild Orange 15ml"
  },
  {
    name: "Breathe 5ml",
    category: "Blend",
    size: "5ml",
    price: "CLIENT TO PROVIDE",
    description: "A fresh aromatic blend designed to create a clean, refreshing sensory experience.",
    aroma_profile: "Clean • Minty • Airy",
    why_choose: "Combines Laurel Leaf, Peppermint, Eucalyptus, Melaleuca, Lemon, and Cardamom for an expansive, crisp ambiance.",
    rituals: "Morning breathwork; mindful yoga savasana; nighttime room mist; sensory space refreshing.",
    usage: "Add 3–5 drops to an ultrasonic diffuser or blend with carrier oil and massage gently onto the chest.",
    safety: "Topical and aromatic use only. Always dilute with carrier oil. Avoid contact with eyes and sensitive areas.",
    brand: "dōTERRA / Pure Botanical Blend",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Pebble Diffuser, product:On Guard 5ml"
  },
  {
    name: "Breathe 15ml",
    category: "Blend",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A fresh aromatic blend designed to create a clean, refreshing sensory experience.",
    aroma_profile: "Clean • Minty • Airy",
    why_choose: "An essential aromatic blend designed for diffusion in bedrooms or work spaces to create a refreshing botanical atmosphere.",
    rituals: "Evening bedroom diffusion; conscious deep breathing; seasonal atmospheric refreshing.",
    usage: "Diffuse 3–5 drops in bedrooms before rest or during yoga and stretching sessions.",
    safety: "Not for internal use. Dilute with carrier oil before applying to skin. Avoid sensitive areas.",
    brand: "dōTERRA / Pure Botanical Blend",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Bubble Diffuser, product:Frankincense 15ml"
  },
  {
    name: "Lemongrass 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A bright citrus-herbaceous aroma for refreshing spaces and sensory wellness rituals.",
    aroma_profile: "Bright • Smoky • Citrus-Herbaceous",
    why_choose: "Distilled from tropical lemongrass leaves, loved for its pungent, earthy-citrus aroma that clears stagnant spaces.",
    rituals: "Refreshing room mist; post-walk foot soak ritual; daytime focus; kitchen diffusion.",
    usage: "Diffuse for an uplifting environment or dilute with a carrier oil for grounding bodywork.",
    safety: "A concentrated, potent oil; always dilute thoroughly with a carrier oil before skin application to prevent skin sensitivity.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Fractionated Coconut Oil, product:Tea Tree 15ml"
  },
  {
    name: "Lemon 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "₹999",
    description: "A bright, clean citrus aroma that brings a fresh and uplifting character to spaces.",
    aroma_profile: "Bright • Clean • Zesty Citrus",
    why_choose: "Cold-pressed from lemon rinds, delivering an energizing and cheerful burst to home and office spaces.",
    rituals: "Morning awakening; home refreshing; desk diffusion; uplifting aromatic spaces.",
    usage: "Diffuse 3–4 drops for an inspiring room ambiance. Add to homemade cleaning sprays for fresh fragrance.",
    safety: "Phototoxic. Avoid sunlight or UV rays for at least 12 hours after topical application. Never apply undiluted.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Lavender 15ml, product:Peppermint 15ml"
  },
  {
    name: "Wild Orange 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A bright citrus aroma ideal for uplifting sensory and everyday wellness rituals.",
    aroma_profile: "Bright • Sweet Citrus • Uplifting",
    why_choose: "One of the most beloved citrus botanicals, celebrated for its warm, joyous aroma that brightens any room.",
    rituals: "Daytime aromatic uplift; creative working spaces; gentle sensory grounding; afternoon wind-down.",
    usage: "Diffuse alone or combined with Peppermint for a refreshing blend. Dilute with carrier oil for pleasant topical touch.",
    safety: "Phototoxic. Avoid sunlight and UV exposure for at least 12 hours following skin application.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Peppermint 15ml, product:Pebble Diffuser"
  },
  {
    name: "DigestZen 5ml",
    category: "Blend",
    size: "5ml",
    price: "CLIENT TO PROVIDE",
    description: "A warm aromatic blend that can complement a mindful post-meal wellness ritual.",
    aroma_profile: "Warm • Sweet Anise • Spicy Herbal",
    why_choose: "Harmoniously brings together Anise, Peppermint, Ginger, Caraway, Coriander, Tarragon, and Fennel.",
    rituals: "Mindful post-meal pause; evening relaxation ritual; gentle abdominal massage with carrier oil.",
    usage: "Dilute 1–2 drops in Fractionated Coconut Oil and gently massage onto abdomen in circular clockwise motions.",
    safety: "For topical and aromatic application. Keep out of reach of children. Perform a patch test before first use.",
    brand: "dōTERRA / Pure Botanical Blend",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Peppermint 5ml, product:Fractionated Coconut Oil"
  },
  {
    name: "DigestZen 15ml",
    category: "Blend",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A warm aromatic blend that can complement a mindful post-meal wellness ritual.",
    aroma_profile: "Warm • Sweet Anise • Spicy Herbal",
    why_choose: "Appreciated for its distinctive licorice-spice aroma of anise, ginger, and fennel that grounds the senses after dining.",
    rituals: "Post-meal mindful relaxation; evening unwinding; soothing topical abdominal rituals.",
    usage: "Dilute with carrier oil and massage gently over abdomen, or diffuse for a warm, settling kitchen atmosphere.",
    safety: "Always dilute before topical use. Avoid contact with eyes and sensitive areas. Keep away from children.",
    brand: "dōTERRA / Pure Botanical Blend",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Ginger 15ml, product:Fennel 15ml"
  },
  {
    name: "Tea Tree 5ml",
    category: "Single Oil",
    size: "5ml",
    price: "CLIENT TO PROVIDE",
    description: "A distinctive fresh botanical aroma commonly incorporated into personal-care and home wellness routines.",
    aroma_profile: "Crisp • Herbaceous • Camphorous",
    why_choose: "Valued globally as a staple botanical for clarifying personal-care rituals and cleansing ambient spaces.",
    rituals: "Targeted personal-care rituals; natural foot soaks; freshening laundry; scalp self-care.",
    usage: "Dilute 1 drop with a carrier oil or add to your favorite gentle cleanser or shampoo.",
    safety: "Do not ingest. Always dilute before applying to skin. Avoid sensitive areas around the eyes and mucous membranes.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Lavender 5ml, product:Oregano 5ml"
  },
  {
    name: "Tea Tree 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A distinctive fresh botanical aroma commonly incorporated into personal-care and home wellness routines.",
    aroma_profile: "Crisp • Herbaceous • Camphorous",
    why_choose: "Full-size purifying Melaleuca oil, steam-distilled from the leaves of Australian tea tree plants.",
    rituals: "Daily skin-cleansing touch; scalp nourishing blends; bathroom and linen refreshing.",
    usage: "Dilute with carrier oil for topical self-care, or diffuse with Lemon for clean indoor air.",
    safety: "External and aromatic use only. Always perform a patch test. Keep away from eyes and pets.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Lavender 15ml, product:Lemongrass 15ml"
  },
  {
    name: "Rosemary 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A fresh herbaceous aroma often chosen for study, work and mindful daytime rituals.",
    aroma_profile: "Fresh • Green • Herbaceous",
    why_choose: "Celebrated in traditional herbalism for its clarifying, stimulating scent that encourages sustained daytime alertness.",
    rituals: "Morning study and work sessions; mindful scalp massage rituals; daytime home diffusion.",
    usage: "Diffuse in study areas or blend a few drops into a carrier oil for an aromatic scalp and hair ritual.",
    safety: "Dilute with carrier oil. Avoid contact with eyes. Consult professional guidance if managing specific health conditions.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Frankincense 15ml, product:Lemon 15ml"
  },
  {
    name: "Clove 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A rich, warm and spicy botanical aroma with a distinctive character.",
    aroma_profile: "Rich • Warm • Spicy",
    why_choose: "Cherished for centuries for its comforting, intensely warm aromatic character and autumn-winter appeal.",
    rituals: "Seasonal aromatic diffusion; warming sensory rituals; creating welcoming hospitality atmospheres.",
    usage: "Diffuse 1–2 drops blended with Wild Orange or Cinnamon. Always use very high dilution (e.g. 1 drop per tablespoon of carrier oil).",
    safety: "A hot oil. Extremely concentrated; never use undiluted. Keep away from sensitive skin, eyes, and children.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:On Guard 15ml, product:Fractionated Coconut Oil"
  },
  {
    name: "Turmeric 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A warm, earthy botanical oil with a rich, distinctive aromatic profile.",
    aroma_profile: "Warm • Earthy • Spicy-Woody",
    why_choose: "Esteemed in Ayurvedic traditions for its grounding, golden botanical essence and comforting aroma.",
    rituals: "Evening grounding rituals; post-movement massage touch; meditative space diffusion.",
    usage: "Blend with Frankincense and carrier oil for an evening grounding body rub, or diffuse in reflective spaces.",
    safety: "May stain clothing and light surfaces. Always dilute with carrier oil. Perform a skin patch test before topical use.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Frankincense 15ml, product:Deep Blue Rub"
  },
  {
    name: "Frankincense 5ml",
    category: "Single Oil",
    size: "5ml",
    price: "CLIENT TO PROVIDE",
    description: "A rich resinous aroma traditionally associated with contemplative, grounding and personal-care rituals.",
    aroma_profile: "Rich • Resinous • Woody-Grounding",
    why_choose: "Known as one of the most sacred and revered botanical resins in history, ideal for meditation and peaceful contemplation.",
    rituals: "Mindful meditation and breathwork; evening grounding; mindful facial massage rituals.",
    usage: "Diffuse during yoga, meditation, or quiet reading. Dilute with carrier oil and apply gently to pulse points.",
    safety: "Mild and gentle, but still requires carrier oil dilution for topical use. Avoid eyes and sensitive areas.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Lavender 5ml, product:Petal Diffuser"
  },
  {
    name: "Frankincense 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A rich resinous aroma traditionally associated with contemplative, grounding and personal-care rituals.",
    aroma_profile: "Rich • Resinous • Woody-Grounding",
    why_choose: "Harvested from Boswellia trees, revered across ancient civilizations for grounding spiritual and sensory rituals.",
    rituals: "Deep breathwork; evening reflection; premium botanical skin-care rituals; silent retreat spaces.",
    usage: "Diffuse 3–5 drops during mindfulness practices, or dilute 1–2 drops in facial moisturizer or carrier oil.",
    safety: "Dilute before applying topically. Keep out of reach of children. Consult healthcare provider if pregnant.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Rosemary 15ml, product:Turmeric 15ml"
  },
  {
    name: "Deep Blue Rub",
    category: "Topical",
    size: "120ml",
    price: "CLIENT TO PROVIDE",
    description: "A cooling and comforting topical experience for post-activity self-care.",
    aroma_profile: "Cooling • Minty • Camphorous",
    why_choose: "A favorite among athletes, desk workers, and active individuals seeking refreshing topical sensations after exertion.",
    rituals: "Post-workout self-care; evening neck and shoulder relaxation; post-gardening or walking relief.",
    usage: "Apply a small pea-sized amount to tired neck, shoulders, legs, or lower back and massage gently.",
    safety: "For external topical use only. Do not apply to broken skin. Avoid eyes and face. Wash hands thoroughly after application.",
    brand: "dōTERRA / Proprietary Botanical Formula",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Athletes Kit, product:Turmeric 15ml"
  },
  {
    name: "Fennel 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A sweet, anise-like botanical aroma with a long history of traditional use.",
    aroma_profile: "Sweet • Anise-like • Licorice Herbal",
    why_choose: "Prized since antiquity for its sweet herbal scent that fosters an atmosphere of balance and clarity.",
    rituals: "Post-meal mindful diffusion; centering meditation sessions; gentle abdominal topical rituals.",
    usage: "Diffuse in kitchen or dining spaces, or dilute 1 drop with carrier oil for a gentle abdominal massage.",
    safety: "Avoid during pregnancy and breastfeeding. Always dilute with carrier oil before applying to skin.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:DigestZen 15ml, product:Ginger 15ml"
  },
  {
    name: "Ginger 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A warm, spicy botanical aroma that complements grounding and self-care rituals.",
    aroma_profile: "Warm • Pungent • Spicy Roots",
    why_choose: "Distilled from pure ginger rhizomes, valued for its comforting warmth during cool seasons and travel.",
    rituals: "Travel self-care rituals; seasonal warming foot massage; evening grounding diffusion.",
    usage: "Diffuse 2–3 drops or dilute in Fractionated Coconut Oil and massage into hands and feet for a warming sensation.",
    safety: "Concentrated and warming. Always dilute before applying topically. Avoid eyes and sensitive areas.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:DigestZen 15ml, product:MetaPWR Blend 15ml"
  },
  {
    name: "Oregano 5ml",
    category: "Single Oil",
    size: "5ml",
    price: "CLIENT TO PROVIDE",
    description: "A highly concentrated, intensely herbaceous oil requiring particular care and appropriate dilution.",
    aroma_profile: "Intense • Herbaceous • Pungent",
    why_choose: "One of the most concentrated botanical oils known, held in high respect for its powerful purifying character.",
    rituals: "Atmospheric cleansing diffusion; household botanical care; advanced practitioner blending.",
    usage: "Diffuse sparingly (1–2 drops maximum). For topical use, strictly dilute at a ratio of 1 drop to at least 15–20 drops carrier oil.",
    safety: "HOT OIL. Causes skin irritation if used undiluted. Never apply undiluted. Keep strictly out of reach of children.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Fractionated Coconut Oil, product:Tea Tree 5ml"
  },
  {
    name: "Oregano 15ml",
    category: "Single Oil",
    size: "15ml",
    price: "CLIENT TO PROVIDE",
    description: "A highly concentrated, intensely herbaceous oil requiring particular care and appropriate dilution.",
    aroma_profile: "Intense • Herbaceous • Pungent",
    why_choose: "Full-size bottle of potent Oregano oil for experienced aromatherapy practitioners and mindful home use.",
    rituals: "Seasonal atmospheric cleansing; household botanical care rituals.",
    usage: "Diffuse sparingly with lemon or orange. Always dilute heavily with carrier oil before any topical touch.",
    safety: "HOT OIL. Must always be heavily diluted with carrier oil. Never apply undiluted. Avoid eyes, inner ears, and mucous membranes.",
    brand: "dōTERRA / Pure Botanical Extract",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Fractionated Coconut Oil, product:On Guard 15ml"
  },
  {
    name: "Introductory Kit (3 oils)",
    category: "Kit",
    size: "3 × 5ml",
    price: "CLIENT TO PROVIDE",
    description: "The ideal foundational trio: includes 5ml bottles of pure Lavender, Lemon, and Peppermint with comprehensive usage guidance.",
    aroma_profile: "Lavender, Lemon, Peppermint Trio",
    why_choose: "The quintessential introductory set for beginners looking to discover calming, uplifting, and refreshing aromatic rituals.",
    rituals: "Morning awakening (Lemon), daytime focus (Peppermint), and evening wind-down (Lavender).",
    usage: "Explore single oils or blend pairs in your diffuser according to your daily energy rhythm.",
    safety: "Follow individual safety guidelines for each oil. Always dilute with carrier oil for topical use.",
    brand: "dōTERRA / Introductory Collection",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Petal Diffuser, course:Preliminary Consultation"
  },
  {
    name: "Athletes Kit",
    category: "Kit",
    size: "Kit Box",
    price: "CLIENT TO PROVIDE",
    description: "A curated collection designed to complement an active lifestyle, exercise recovery routines and daily self-care rituals.",
    aroma_profile: "Cooling • Fresh • Invigorating",
    why_choose: "Specifically assembled for movement practitioners, gym enthusiasts, and runners who prioritize daily body care.",
    rituals: "Pre-workout breathwork, post-exercise cool down, muscle comfort, and evening recovery.",
    usage: "Use Deep Blue Rub for topical massage; diffuse Breathe or Peppermint during movement and stretching.",
    safety: "Follow usage and dilution guidelines for each component. Wash hands after applying Deep Blue Rub.",
    brand: "dōTERRA / Specialized Wellness Kit",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Fractionated Coconut Oil, product:Bubble Diffuser"
  },
  {
    name: "Fractionated Coconut Oil",
    category: "Carrier Oil",
    size: "115ml",
    price: "CLIENT TO PROVIDE",
    description: "A light, gentle botanical carrier oil ideal for diluting concentrated essential oils for topical and massage rituals.",
    aroma_profile: "Virtually Odorless • Neutral",
    why_choose: "Completely liquid, non-greasy, and feather-light. Absorbs effortlessly while preserving essential-oil aromas.",
    rituals: "Daily essential oil dilution; gentle massage bodywork; rollerball blend preparation.",
    usage: "Dispense 1 teaspoon in palm, add 1–2 drops of chosen essential oil, mix gently, and apply to skin.",
    safety: "For external topical use only. Perform a skin patch test if you have specific nut/seed sensitivities.",
    brand: "dōTERRA / Pure Botanical Carrier",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Oregano 15ml, product:Deep Blue Rub"
  },
  {
    name: "Family Essential Kit",
    category: "Kit",
    size: "10 × 5ml",
    price: "CLIENT TO PROVIDE",
    description: "A versatile introductory collection for exploring essential oils as part of everyday family wellness rituals.",
    aroma_profile: "10-Oil Comprehensive Botanical Suite",
    why_choose: "Contains 10 foundational single oils and blends (5ml each) covering daytime focus, household ambiance, and evening rest.",
    rituals: "Comprehensive daily family rhythms: morning rise, study focus, evening wind-down, and home freshness.",
    usage: "Refer to the included usage guide for safe dilution and diffusion recommendations for each oil.",
    safety: "Keep out of reach of children. Dilute all oils appropriately for family members and children.",
    brand: "dōTERRA / Essential Family Kit",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Petal Diffuser, product:Fractionated Coconut Oil"
  },
  {
    name: "Healthy Experience Kit",
    category: "Kit",
    size: "Comprehensive Kit",
    price: "CLIENT TO PROVIDE",
    description: "A curated collection designed to introduce a range of essential oils and everyday wellness practices.",
    aroma_profile: "Curated Master Botanical Selection",
    why_choose: "Designed for individuals and households seeking a comprehensive, high-quality immersion into nature-based living.",
    rituals: "Transforming everyday living spaces with aromatic diffusion, self-care routines, and evening calm.",
    usage: "Integrate into morning, afternoon, and evening routines as outlined in our educational guides.",
    safety: "Always review specific safety instructions for each individual bottle in the collection.",
    brand: "dōTERRA / Curated Experience Kit",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Pebble Diffuser, course:Initiating & Primary Training"
  },
  {
    name: "Pebble Diffuser",
    category: "Diffuser",
    size: "Ultrasonic",
    price: "CLIENT TO PROVIDE",
    description: "Sleek, modern ultrasonic diffuser with handcrafted slate-look aesthetic, continuous or intermittent mist modes, and soothing warm light.",
    aroma_profile: "Ultrasonic Ambient Diffuser",
    why_choose: "Compact, quiet, and aesthetically refined. Blends beautifully into bedrooms, executive desks, and reading nooks.",
    rituals: "Bedside evening wind-down; focused office ambiance; meditation and quiet time.",
    usage: "Fill water tank up to max line, add 3–5 drops of pure essential oil, replace lid, and select mist duration.",
    safety: "Use clean tap water. Unplug before cleaning. Clean regularly with white vinegar to prevent mineral buildup.",
    brand: "dōTERRA / Ultrasonic Device",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Breathe 15ml, product:Lavender 15ml"
  },
  {
    name: "Petal Diffuser",
    category: "Diffuser",
    size: "Ultrasonic",
    price: "CLIENT TO PROVIDE",
    description: "Convenient, high-output ultrasonic diffuser dispersing fine aromatic mist with customizable 2, 6, and 12-hour run times.",
    aroma_profile: "High-Output Ultrasonic Diffuser",
    why_choose: "Reliable, robust, and capable of filling medium-to-large living areas, yoga spaces, or classrooms with gentle aroma.",
    rituals: "All-day living room diffusion; evening sleep support; workshop and studio ambiance.",
    usage: "Fill with room-temperature water, add 4–6 drops of essential oil, and select your preferred timer setting.",
    safety: "Do not exceed maximum water level. Unplug device before refilling or cleaning.",
    brand: "dōTERRA / Ultrasonic Device",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:On Guard 15ml, product:Family Essential Kit"
  },
  {
    name: "Bubble Diffuser",
    category: "Diffuser",
    size: "Motion-Activated",
    price: "CLIENT TO PROVIDE",
    description: "Waterless, motion-sensor activated ambient diffuser designed to automatically mist aromatic bursts whenever presence is detected.",
    aroma_profile: "Motion-Activated Ambient Device",
    why_choose: "Requires no water and no daily refilling. Perfect for entryways, hallways, guest powder rooms, and reception areas.",
    rituals: "Arrival sensory welcoming; hallway botanical refreshment; boutique bathroom ambiance.",
    usage: "Attach directly to a 5ml or 15ml essential oil bottle, insert batteries, and place in a pathway or arrival zone.",
    safety: "Ensure sensor is positioned safely away from direct eye level. Keep out of reach of pets and small children.",
    brand: "dōTERRA / Motion Device",
    reviewed: true,
    review_status: "developer_reviewed",
    image_url: "",
    recommended_with: "product:Wild Orange 15ml, product:Breathe 15ml"
  }
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Single Oils",
  "Blends",
  "Kits",
  "Diffusers & Care"
];

export function getBaseProductName(name = "") {
  return String(name || "")
    .replace(/\s*\d+\s*(?:ml|l)\b/i, "")
    .trim();
}

export function groupProducts(products = []) {
  if (!Array.isArray(products) || !products.length) return [];
  if (products[0] && Array.isArray(products[0].variants)) return products;

  const groups = new Map();

  products.forEach((product) => {
    if (!product || !product.name) return;
    const baseName = getBaseProductName(product.name);
    const category = product.category || "Single Oil";
    const groupKey = `${category.toLowerCase()}:::${baseName.toLowerCase()}`;

    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        baseName,
        category,
        variants: [],
      });
    }

    groups.get(groupKey).variants.push(product);
  });

  return Array.from(groups.values()).map((group) => {
    // Sort variants: smaller sizes first (e.g. 5ml before 15ml)
    const sortedVariants = [...group.variants].sort((a, b) => {
      const numA = parseInt(String(a.size || a.name || "").replace(/[^\d]/g, ""), 10) || 0;
      const numB = parseInt(String(b.size || b.name || "").replace(/[^\d]/g, ""), 10) || 0;
      return numA - numB;
    });

    // Default to the first variant with a valid price or image, or 15ml standard, or first variant
    let defaultIndex = sortedVariants.findIndex(
      (v) => v.price && v.price !== "CLIENT TO PROVIDE"
    );
    if (defaultIndex === -1) {
      defaultIndex = sortedVariants.findIndex((v) =>
        String(v.size || v.name).toLowerCase().includes("15ml")
      );
    }
    if (defaultIndex === -1) {
      defaultIndex = 0;
    }

    return {
      baseName: group.baseName,
      category: group.category,
      variants: sortedVariants,
      defaultIndex: defaultIndex >= 0 ? defaultIndex : 0,
      featured: sortedVariants.some(
        (v) => String(v.featured).toLowerCase() === "true"
      ),
    };
  });
}

export function getProductDefaultImage(name = "") {
  return "";
}
