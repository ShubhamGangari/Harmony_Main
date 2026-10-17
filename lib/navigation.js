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
 * Four Delivery Channels defined in Blueprint:
 * 1. Individuals & Families
 * 2. Corporate Wellness
 * 3. Wellness Professionals
 * 4. Hospitality & Spas
 */
export const DELIVERY_CHANNELS = [
  {
    id: "individuals",
    label: "Individuals & Families",
    subtitle: "Daily Rhythms & Self-Care",
    description:
      "Stress & relaxation education, sleep-supportive routines, daily rhythms, women's wellness, healthy ageing, and personal wellness consultations.",
    target: "Individuals, Families & Beginners",
    href: "/individuals",
    isLive: true,
  },
  {
    id: "corporates",
    label: "Corporate Wellness",
    subtitle: "Workplace Preventive Wellness",
    description:
      "Workplace wellbeing, stress awareness, resilience education, nervous-system-friendly practices, and sensory wellness workshops.",
    target: "HR Leaders, Founders, CXOs & Corporate Teams",
    href: "/corporate-wellness",
    isLive: true,
  },
  {
    id: "professionals",
    label: "Wellness Professionals",
    subtitle: "Practitioner Education",
    description:
      "Essential oil education, practitioner training, responsible application, aromatic experiences, and professional boundaries.",
    target: "Yoga Teachers, Coaches, Therapists, Bodyworkers & Spas",
    href: "/professionals",
    isLive: true,
  },
  {
    id: "hospitality",
    label: "Hospitality & Spas",
    subtitle: "Sensory Space Design",
    description:
      "Sensory wellness design, ambient aromatic concepts for spas, yoga & Pilates studios, guest experiences, and staff education.",
    target: "Spas, Retreats, Boutique Hotels & Wellness Spaces",
    href: "/hospitality",
    isLive: true,
  },
];

/**
 * Simplified Primary Navigation Architecture:
 * 1. Our Approach (/approach)
 * 2. Who We Help (Dropdown: Individuals, Corporate, Professionals, Hospitality)
 * 3. Education (/education)
 * 4. Essential Oils (/products)
 * 5. Resources (/resources)
 * 6. Book Consultation (/consultation)
 */
export const BLUEPRINT_NAVIGATION = [
  {
    id: "approach",
    label: "Our Approach",
    href: "/approach",
    description:
      "Nervous System Wellness, The 5R Method, Sensory Wellness, and the Six Pillars of Everyday Wellness.",
    isLive: true,
    subItems: [
      { label: "The 5R Method", href: "/approach#method" },
      { label: "Foundations", href: "/approach#foundations" },
      { label: "Six Everyday Pillars", href: "/approach#wellness-pillars" },
      { label: "Delivery Channels", href: "/approach#pathways" },
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
    id: "essential-oils",
    label: "Essential Oils",
    href: "/products",
    description:
      "Explore pure botanical oils, aromatic rituals, usage guidance, and responsible use.",
    isLive: true,
    subItems: [
      { label: "Explore Collection", href: "/products" },
      { label: "Safety & Responsible Use", href: "/essential-oil-safety" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    description:
      "Practical routines, 7-day guide, scientific evidence analysis, and answers to common questions.",
    isLive: true,
    subItems: [
      { label: "Resources Hub", href: "/resources" },
      { label: "7-Day Supportive Routine", href: "/resources/7-day-wellness-routine" },
      { label: "Evidence & Science", href: "/resources#evidence" },
      { label: "Frequently Asked Questions", href: "/resources#faq" },
    ],
  },
  {
    id: "consultation",
    label: "Book Consultation",
    href: "/consultation",
    description:
      "One-to-one educational guidance to build practical, personalized wellness rituals.",
    isLive: true,
    isCta: true,
  },
];

/**
 * Returns only the active navigation items
 */
export function getActiveNavigation() {
  return BLUEPRINT_NAVIGATION.filter((item) => item.isLive);
}
