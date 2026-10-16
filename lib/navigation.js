/**
 * Harmony of Cells — Navigation Architecture & Brand Positioning
 * Source of truth: docs/Harmony_of_Cells_Developer_Handoff_Blueprint_v2_Nervous_System_Lifestyle.docx
 *
 * Core Speciality: Nervous System & Lifestyle Wellness
 * Primary Descriptor: Nervous System Wellness for Everyday Life
 * Philosophy: Nature. Knowledge. Informed Wellness.
 * Signature Principle: Learn. Understand. Apply.
 */

export const BRAND_POSITIONING = {
  name: "Harmony of Cells",
  speciality: "Nervous System & Lifestyle Wellness",
  descriptor: "Nervous System Wellness for Everyday Life",
  philosophy: "Nature. Knowledge. Informed Wellness.",
  principle: "Learn. Understand. Apply.",
  mission:
    "Helping individuals, families and organisations build calmer, healthier daily rhythms through nature-based wellness education, lifestyle practices and sensory wellness.",
};

/**
 * Four Delivery Channels defined in Blueprint Addendum Section 3:
 * 1. For Individuals
 * 2. For Corporates
 * 3. For Wellness Professionals
 * 4. For Hospitality & Wellness Centres
 */
export const DELIVERY_CHANNELS = [
  {
    id: "individuals",
    label: "For Individuals",
    subtitle: "Daily Rhythms & Self-Care",
    description:
      "Stress & relaxation education, sleep-supportive routines, daily rhythms, women's wellness, healthy ageing, and personal wellness consultations.",
    target: "Individuals, Families & Beginners",
    href: "/individuals",
    isLive: true,
  },
  {
    id: "corporates",
    label: "For Corporates",
    subtitle: "Workplace Preventive Wellness",
    description:
      "Workplace wellbeing, stress awareness, resilience education, nervous-system-friendly practices, and sensory wellness workshops.",
    target: "HR Leaders, Founders, CXOs & Corporate Teams",
    href: "/corporate-wellness",
    isLive: true,
  },
  {
    id: "professionals",
    label: "For Wellness Professionals",
    subtitle: "Practitioner Education",
    description:
      "Essential oil education, practitioner training, responsible application, aromatic experiences, and professional boundaries.",
    target: "Yoga Teachers, Coaches, Therapists, Bodyworkers & Spas",
    href: "/professionals",
    isLive: true,
  },
  {
    id: "hospitality",
    label: "For Hospitality & Wellness Centres",
    subtitle: "Sensory Space Design",
    description:
      "Sensory wellness design, ambient aromatic concepts for spas, yoga & Pilates studios, guest experiences, and staff education.",
    target: "Spas, Retreats, Boutique Hotels & Wellness Spaces",
    href: "/hospitality",
    isLive: true,
  },
];

/**
 * 9 Primary Blueprint Sections (Blueprint Addendum Section 7):
 * 1. The Approach
 * 2. Wellness
 * 3. Essential Oils
 * 4. Education
 * 5. Corporate Wellness
 * 6. Hospitality & Wellness Centres
 * 7. Consultation
 * 8. Resources
 * 9. Shop
 */
export const BLUEPRINT_NAVIGATION = [
  {
    id: "approach",
    label: "The Approach",
    href: "/approach",
    description:
      "Nervous System Wellness, Lifestyle & Daily Rhythms, Sensory Wellness, and the Harmony of Cells Method.",
    isLive: true,
    subItems: [
      { label: "Nervous System Wellness", href: "/approach#philosophy" },
      { label: "The 5R Method", href: "/approach#method" },
      { label: "Sensory & Lifestyle", href: "/approach#foundations" },
      { label: "Delivery Channels", href: "/approach#pathways" },
    ],
  },
  {
    id: "wellness",
    label: "Wellness",
    href: "/wellness",
    description:
      "Rest & Sleep, Stress & Resilience, Women's Wellness, Healthy Ageing, Everyday Wellness.",
    isLive: true,
    subItems: [
      { label: "Rest & Sleep", href: "/wellness#rest-and-sleep" },
      { label: "Stress & Resilience", href: "/wellness#stress-and-resilience" },
      { label: "Women's Wellness", href: "/wellness#womens-wellness" },
      { label: "Healthy Ageing", href: "/wellness#healthy-ageing" },
      { label: "Everyday & Sensory", href: "/wellness#everyday-wellness" },
    ],
  },
  {
    id: "essential-oils",
    label: "Essential Oils",
    href: "/products",
    description:
      "Explore pure botanical oils, aromatic rituals, usage guidance, and responsible use.",
    isLive: true,
    subItems: [
      { label: "Explore Collection", href: "/products" },
      { label: "Safety & Responsible Use", href: "/essential-oil-safety" },
      { label: "Dilution & Guidelines", href: "/essential-oil-safety" },
    ],
  },
  {
    id: "education",
    label: "Education",
    href: "/education",
    description:
      "Structured education programs for individuals and wellness professionals.",
    isLive: true,
    subItems: [
      { label: "Foundations (Tier 01)", href: "/education" },
      { label: "Everyday Application (Tier 02)", href: "/education" },
      { label: "Practitioner Pathway (Tier 03)", href: "/education" },
    ],
  },
  {
    id: "corporate",
    label: "Corporate Wellness",
    href: "/corporate-wellness",
    description:
      "Workplace preventive wellness and sensory experiences for modern organizations.",
    isLive: true,
  },
  {
    id: "hospitality",
    label: "Hospitality & Wellness Centres",
    href: "/hospitality",
    description:
      "Sensory wellness design, ambient concepts, and staff education.",
    isLive: true,
  },
  {
    id: "consultation",
    label: "Consultation",
    href: "/consultation",
    description:
      "One-to-one educational guidance to build practical, personalized wellness rituals.",
    isLive: true,
    isModal: false,
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    description:
      "Beginner guides, safety protocols, and evidence-informed educational insights.",
    isLive: true,
    subItems: [
      { label: "Resources Hub", href: "/resources" },
      { label: "7-Day Wellness Routine", href: "/resources/7-day-wellness-routine" },
      { label: "Research & Evidence", href: "/research-evidence" },
      { label: "Frequently Asked Questions", href: "/faq" },
    ],
  },
  {
    id: "shop",
    label: "Shop",
    href: "/products",
    description:
      "Pure botanical essential oils, wellness blends, diffusers, and kits.",
    isLive: true,
  },
];

/**
 * Returns only the navigation items whose routes currently exist in the Next.js app,
 * preventing any broken links or 404 errors.
 */
export function getActiveNavigation() {
  return BLUEPRINT_NAVIGATION.filter((item) => item.isLive);
}
