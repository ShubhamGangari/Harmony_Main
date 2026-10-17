import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata = {
  title: "Sensory Wellness for Hospitality & Wellness Spaces | Harmony of Cells",
  description:
    "Thoughtfully designed aromatic concepts, sensory wellness design, and staff education for spas, yoga/Pilates studios, retreats, and wellness centres.",
};

export default function HospitalityPage() {
  return (
    <ServicePageTemplate
      theme="hospitality"
      hero={{
        eyebrow: "SENSORY WELLNESS FOR SPACES",
        title: (
          <>
            Sensory wellness for hospitality & <em>wellness spaces.</em>
          </>
        ),
        supporting:
          "Thoughtfully designed aromatic and sensory experiences for spas, yoga and Pilates studios, retreats and wellness centres.",
        description:
          "A guest's experience begins long before their session or stay starts: it begins with the sensory atmosphere of your space. Harmony of Cells partners with premium hospitality, movement, and wellness venues to design bespoke ambient aromatic concepts, guest relaxation rituals, and rigorous staff education — elevating guest perception through natural botanicals and thoughtful space design.",
        primaryCta: {
          text: "Inquire for Your Space",
          type: "form",
          formItem: "Hospitality Sensory Space Design Inquiry",
          formItemContext: {
            eyebrow: "HOSPITALITY SENSORY CONCEPTS • ENQUIRY",
            title: "Enquire for Your Space",
            description:
              "Share your venue details, space type, and sensory goals. Richa will review your inquiry and schedule a sensory discovery consultation.",
            submitLabel: "Submit Space Enquiry",
            successTitle: "Your hospitality enquiry has been submitted successfully.",
          },
        },
        secondaryCta: {
          text: "Explore Space Solutions",
          href: "#offerings",
        },
        microline: "Spas • Yoga & Pilates Studios • Retreats • Wellness Centres",
        announcement: "Bespoke Ambient Concepts • Multi-Sensory Guest Journeys • Staff Training • Non-Synthetic Integrity",
        badge: {
          tag: "SENSORY SPACE DESIGN",
          title: "Bespoke ambient concepts.",
          sub: "Room-by-Room • Staff Education",
        },
        image: "/assets/hero-image.jpg",
        imageAlt: "Serene, beautifully lit sensory wellness space in a boutique retreat",
      }}
      intro={{
        eyebrow: "THE POWER OF SENSORY ARCHITECTURE",
        title: "Spaces that calm the nervous system the moment guests walk in.",
        lead:
          "Olfaction is the only sense directly wired to the emotional and memory centres of the human brain. The scent of your space immediately communicates luxury, hygiene, tranquility, and care.",
        paragraphs: [
          "Too many modern hospitality and fitness spaces rely on synthetic fragrances, heavy artificial aerosols, or poorly ventilated diffusers that trigger headaches, allergic sensitivities, and sensory fatigue. Modern luxury consumers and wellness guests demand pure, authentic botanical environments.",
          "Harmony of Cells crafts signature, room-by-room aromatic concepts that harmoniously support each area's specific purpose — from energizing, clean citrus-herbaceous notes in reception and movement studios, to warm, grounding resinous notes in massage suites and quiet relaxation sanctuaries.",
        ],
        highlightQuote:
          "Sensory wellness design transforms physical architecture into an immersive, restorative sanctuary guests never forget.",
      }}
      offerings={{
        id: "offerings",
        eyebrow: "HOSPITALITY & VENUE SOLUTIONS",
        title: (
          <>
            Comprehensive sensory <em>wellness solutions.</em>
          </>
        ),
        description:
          "Turnkey ambient scent design, guest ritual development, and staff training protocols for luxury wellness spaces.",
        items: [
          {
            step: "01",
            tagline: "Atmospheric Mapping",
            title: "Sensory Wellness Space Design",
            description:
              "Holistic sensory audits of your venue, analyzing airflow, guest flow, lighting, acoustic ambiance, and natural botanical diffusion to create cohesive multi-sensory experiences.",
            points: [
              "Airflow and ventilation assessment",
              "Multi-sensory guest journey mapping",
              "Zero synthetic fragrance standards",
            ],
          },
          {
            step: "02",
            tagline: "Purposeful Aromas",
            title: "Room-by-Room Aromatic Concepts",
            description:
              "Calibrated botanical aroma profiles tailored to functional zones: uplifting citrus for arrival lobbies, focused herbal notes for movement studios, and soothing floral-resinous blends for relaxation suites.",
            points: [
              "Zone-specific botanical formulations",
              "Day-to-evening aromatic transitions",
              "Non-invasive ultrasonic diffusion protocols",
            ],
          },
          {
            step: "03",
            tagline: "Movement Sanctuaries",
            title: "Spa, Yoga & Pilates Aromatherapy",
            description:
              "Aromatic cues specifically engineered for reformer Pilates studios, yoga shalas, and hydrotherapy lounges to enhance deep respiration without respiratory irritation.",
            points: [
              "Fresh, clean respiratory botanical blends",
              "Pre-class grounding & savasana misting",
              "Studio mat and equipment natural aroma care",
            ],
          },
          {
            step: "04",
            tagline: "Memorable Touches",
            title: "Curated Guest Wellness Experiences",
            description:
              "Designing branded signature sensory rituals: custom cold/warm welcome towels infused with pure botanicals, arrival teas, and evening turndown sleep mist rituals.",
            points: [
              "Signature arrival towel infusions",
              "Evening wind-down pillow mists",
              "Turnkey guest self-care retail amenities",
            ],
          },
          {
            step: "05",
            tagline: "Operational Rigor",
            title: "Comprehensive Staff Education",
            description:
              "Empowering spa therapists, front-desk concierges, and housekeeping teams with rigorous knowledge of essential-oil safety, hygienic diffuser maintenance, and guest communication.",
            points: [
              "Diffuser cleaning, care, and safety guidance",
              "Safe botanical dilution standards",
              "Guest allergy screening and intake guidelines",
            ],
          },
          {
            step: "06",
            tagline: "Bespoke Programs",
            title: "Custom Sensory Wellness Programs",
            description:
              "Collaborating with retreat directors and spa managers to develop seasonal sensory packages, signature treatment room rituals, and exclusive private-label collections.",
            points: [
              "Seasonal botanical concept updates",
              "Signature spa treatment protocol design",
              "Custom guest amenity collections",
            ],
          },
        ],
      }}
      howItWorks={{
        id: "how-it-works",
        eyebrow: "VENUE INTEGRATION PROCESS",
        title: (
          <>
            How our hospitality sensory <em>partnerships unfold.</em>
          </>
        ),
        description:
          "Turnkey botanical architecture from architectural spatial audit to staff operational mastery.",
        steps: [
          {
            num: "01",
            title: "Spatial & Ventilation Audit",
            description:
              "We assess guest circulation, natural and HVAC airflow, room volume, and acoustic texture across each distinct zone of your venue.",
            highlight: "Spatial Analysis",
          },
          {
            num: "02",
            title: "Bespoke Aromatic Profile Design",
            description:
              "We curate tailored botanical aroma menus: welcoming citrus for reception, invigorating herbs for movement studios, and grounding resins for spa suites.",
            highlight: "Zone Calibration",
          },
          {
            num: "03",
            title: "Non-Synthetic Diffusion Implementation",
            description:
              "We deploy discreet, commercial-grade ultrasonic cold diffusion that distributes pure essential oils evenly without synthetic aerosol propellants.",
            highlight: "Clean Atmosphere",
          },
          {
            num: "04",
            title: "Staff Education & Ritual Training",
            description:
              "Your front-of-house, spa, and housekeeping teams receive hands-on training and operational guidelines to operate diffusers safely and answer guest questions with confidence.",
            highlight: "Operational Guidelines",
          },
        ],
      }}
      founderCredibility={{
        eyebrow: "FOUNDER EXPERTISE",
        title: "Strategic corporate leadership meets sensory botanical wellness.",
        paragraphs: [
          "Richa Ramola approaches hospitality spaces with both an artistic sensory sensibility and an operator's demand for commercial viability, safety compliance, and team executability.",
          "Her extensive multinational leadership background ensures that every concept is delivered with clear operational guidelines, staff training modules, and seamless operational integration.",
        ],
        quote:
          "In luxury hospitality, sensory ambiance is not decoration. It is the invisible signature of your brand's excellence.",
        ctaText: "Discuss Your Space with Richa",
        formItem: "Hospitality Concept Discovery Call",
        formItemContext: {
          eyebrow: "HOSPITALITY DISCOVERY CALL",
          title: "Connect with Richa Ramola",
          description:
            "Share your property details and vision. Richa will connect with you directly to explore custom sensory space design and staff training.",
          submitLabel: "Schedule Discovery Call",
        },
      }}
      disclaimer={{
        tag: "ATMOSPHERIC & USAGE NOTICE",
        title: "Sensory Space & Environmental Standards",
        text:
          "Harmony of Cells sensory space concepts utilize pure botanical essential oils for ambient diffusion, sensory space enhancement, and guest relaxation rituals. Ambient botanical diffusion is designed for aesthetic, atmospheric, and sensory enjoyment. It does not constitute medical air purification, antimicrobial sterilization, or clinical respiratory therapy. All systems adhere strictly to manufacturer safety guidelines and safe ventilation protocols.",
      }}
      ctaSection={{
        id: "hospitality-inquiry",
        eyebrow: "ELEVATE YOUR SPACE",
        title: (
          <>
            Transform your venue through <em>sensory wellness.</em>
          </>
        ),
        description:
          "Schedule a discovery consultation with Richa Ramola to explore bespoke ambient concepts, staff training, and signature guest experiences for your venue.",
        points: [
          "Comprehensive on-site or virtual sensory space evaluation",
          "Custom room-by-room botanical fragrance architecture",
          "Complete operational guidelines and staff training documentation",
          "Exclusive guest amenities and retail product opportunities",
        ],
        primaryCta: {
          text: "Inquire for Your Venue",
          formItem: "Hospitality & Wellness Centres Sensory Program",
          formItemContext: {
            eyebrow: "HOSPITALITY SENSORY CONCEPTS • ENQUIRY",
            title: "Enquire for Your Venue",
            description:
              "Share your venue type, location, and project timeline. We will connect with you to review sensory design options and proposals.",
            submitLabel: "Submit Venue Enquiry",
          },
        },
        secondaryCta: {
          text: "Explore Botanical Collection",
          href: "/products",
        },
        showContactLinks: true,
      }}
    />
  );
}
