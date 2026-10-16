import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata = {
  title: "Personal Nervous System & Lifestyle Wellness | For Individuals | Harmony of Cells",
  description:
    "Personalized wellness education, sleep-supportive routines, stress recovery, women's wellness, and 1-on-1 consultations for calmer, healthier daily rhythms.",
};

export default function IndividualsPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: "PERSONAL LIFESTYLE WELLNESS • FOR INDIVIDUALS",
        title: (
          <>
            Calmer, healthier daily rhythms for <em>everyday life.</em>
          </>
        ),
        supporting:
          "Supporting wellbeing through lifestyle routines, sensory practices and informed self-care.",
        description:
          "Modern life places continuous demands on the body and mind. Harmony of Cells helps individuals and families build intentional, sustainable daily rhythms that support natural rest, steady vitality, and personal calm — through education, nature-based practices, and personalized guidance.",
        primaryCta: {
          text: "Book a Personal Consultation",
          type: "form",
          formItem: "Personal Wellness Consultation",
          formItemContext: {
            eyebrow: "PERSONAL WELLNESS CONSULTATION • 1-ON-1",
            title: "Request a Personal Consultation",
            description:
              "Share your details and preferred timing. Richa will review your request and connect with you to confirm your one-on-one session.",
            submitLabel: "Submit Consultation Request",
            successTitle: "Your consultation request has been submitted successfully.",
          },
        },
        secondaryCta: {
          text: "Explore Daily Pillars",
          href: "#offerings",
        },
        microline: "Learn. Understand. Apply. • Personal educational guidance.",
        badge: {
          tag: "FOR INDIVIDUALS",
          title: "Calm daily rhythms.",
          sub: "Education • Sleep • Sensory Rituals",
        },
        image: "/assets/hero-image.jpg",
        imageAlt: "Calm botanical wellness environment for personal self-care",
      }}
      intro={{
        eyebrow: "OUR PHILOSOPHY FOR INDIVIDUALS",
        title: "Wellness is shaped by the small choices you repeat every day.",
        lead:
          "True wellbeing doesn't come from aggressive interventions or fleeting trends. It comes from understanding how your nervous system responds to the daily realities of your life.",
        paragraphs: [
          "Modern routines often keep us in perpetual states of sensory stimulation and mental urgency. Over time, without intentional pauses and supportive transitions, our capacity for restful sleep, steady emotional energy, and physical recovery becomes diminished.",
          "At Harmony of Cells, we focus on education before recommendation. We help you explore the fundamental relationship between your daily environment, circadian rhythms, sensory inputs, and mindful self-care — empowering you to build simple, enjoyable habits that fit your unique schedule.",
        ],
        highlightQuote:
          "When you understand how your body and mind respond to stress and rest, you can make self-care choices that are informed, sustainable, and truly your own.",
      }}
      offerings={{
        id: "offerings",
        eyebrow: "CORE LIFESTYLE PILLARS",
        title: (
          <>
            Six pillars of <em>everyday self-care.</em>
          </>
        ),
        description:
          "Our individual education programs focus on realistic, nature-based practices that fit seamlessly into busy modern schedules.",
        items: [
          {
            step: "01",
            tagline: "Pause & Awareness",
            title: "Stress & Relaxation Education",
            description:
              "Accessible somatic micro-practices, conscious breathing, and mindful daytime pauses that help prevent tension from compounding throughout the day.",
            points: [
              "Recognizing personal stress signals early",
              "2-minute workday reset protocols",
              "Aromatic cues for conscious calm",
            ],
          },
          {
            step: "02",
            tagline: "Nighttime Recovery",
            title: "Sleep-Supportive Routines",
            description:
              "Calming evening wind-down rituals, sensory transitions, gentle botanical cues, and environmental conditions that prepare your mind and body for restorative rest.",
            points: [
              "Creating an evening decompression rhythm",
              "Sensory space preparation for sleep",
              "Gentle botanical wind-down rituals",
            ],
          },
          {
            step: "03",
            tagline: "Circadian Balance",
            title: "Everyday Wellness & Daily Rhythms",
            description:
              "Structuring your day with supportive rhythms: morning light, intentional transition periods between work and home, hydration, and mindful rest.",
            points: [
              "Aligning daily routines with circadian biology",
              "Mindful transition rituals after work",
              "Sustainable daytime recovery pauses",
            ],
          },
          {
            step: "04",
            tagline: "Lifecycle Support",
            title: "Women's Wellness",
            description:
              "Supportive, evidence-informed lifestyle routines that honor changing rhythms and life transitions without unsupported medical claims.",
            points: [
              "Lifestyle practices for changing life stages",
              "Nourishing sensory grounding rituals",
              "Restorative practices for busy caregivers",
            ],
          },
          {
            step: "05",
            tagline: "Sustainable Vitality",
            title: "Healthy Ageing & Nature Practices",
            description:
              "Sustainable movement, recovery habits, grounding practices, and nature immersion designed to preserve vitality across the lifespan.",
            points: [
              "Nature-based sensory immersion",
              "Joint and mobility self-care habits",
              "Lifelong cognitive and sensory vitality",
            ],
          },
          {
            step: "06",
            tagline: "Tailored Guidance",
            title: "Personal 1-on-1 Consultations",
            description:
              "Dedicated educational sessions with Richa Ramola to review your current routines, clarify botanical aromatherapy safety, and design a realistic personal self-care rhythm.",
            points: [
              "Individual lifestyle and routine assessment",
              "Safe dilution and botanical selection",
              "Customized 7-day supportive rhythm",
            ],
          },
        ],
      }}
      audiences={{
        id: "audiences",
        eyebrow: "WHO THIS IS FOR",
        title: (
          <>
            Tailored for your <em>stage of life.</em>
          </>
        ),
        description:
          "Whether you are navigating career pressures, family responsibilities, or simply seeking more intentional living.",
        items: [
          {
            tag: "BUSY PROFESSIONALS",
            title: "High-Demand Working Adults",
            description:
              "Learn practical decompression habits to transition from workday intensity into deep, uninterrupted evening rest without burnout.",
          },
          {
            tag: "PARENTS & CAREGIVERS",
            title: "Nurturing Caregivers",
            description:
              "Create restorative 5-minute micro-rituals for personal replenishment while caring for loved ones, bringing calm to the entire household.",
          },
          {
            tag: "WELLNESS BEGINNERS",
            title: "Curious Explorers",
            description:
              "Learn the authentic science of botanical extracts, safe dilution ratios, and natural self-care without commercial hype or confusing jargon.",
          },
        ],
      }}
      founderCredibility={{
        eyebrow: "ABOUT YOUR EDUCATOR",
        title: "Compassionate, practical guidance from Richa Ramola.",
        paragraphs: [
          "With nearly three decades of experience in people development and corporate leadership, Richa Ramola understands firsthand how demanding everyday responsibilities can overwhelm personal self-care.",
          "Her approach combines grounded leadership empathy with specialized education in essential oils, aromatherapy, and sensory wellness. She helps you cut through wellness noise and build calming, sustainable rituals that genuinely fit your life.",
        ],
        quote:
          "Self-care is not an indulgence or a luxury. It is the conscious, informed maintenance of your everyday vitality.",
        ctaText: "Connect with Richa",
        formItem: "Personal Consultation with Richa",
        formItemContext: {
          eyebrow: "FOUNDER CONSULTATION • 1-ON-1",
          title: "Connect with Richa Ramola",
          description:
            "Share your details and wellness interests. Richa will connect with you to explore how personalized education and daily rhythms can support your wellbeing.",
          submitLabel: "Request Session with Richa",
        },
      }}
      disclaimer={{
        title: "Educational Wellness Guidance Notice",
        text:
          "Harmony of Cells provides lifestyle wellness education and educational consultations intended to support informed self-care and calmer daily rhythms. Our guidance is not intended to diagnose, treat, cure, or prevent any medical condition or nervous system disorder, nor is it a substitute for professional healthcare advice. Always consult a qualified physician for medical concerns.",
      }}
      ctaSection={{
        id: "consultation",
        eyebrow: "TAKE THE FIRST STEP",
        title: (
          <>
            Begin creating your <em>personalized daily rhythm.</em>
          </>
        ),
        description:
          "Connect with Richa for a one-to-one educational consultation or explore our foundation wellness education.",
        points: [
          "Understand your current daily rhythms and stressors",
          "Learn responsible essential-oil dilution and aromatic rituals",
          "Design tailored morning and evening wind-down practices",
          "Receive ongoing, supportive educational guidance",
        ],
        primaryCta: {
          text: "Book a Consultation",
          formItem: "Personal Wellness Consultation",
          formItemContext: {
            eyebrow: "PERSONAL WELLNESS CONSULTATION",
            title: "Request a Personal Consultation",
            description:
              "Share your details and preferred timing. Richa will review your request and connect with you to confirm your one-on-one session.",
            submitLabel: "Submit Consultation Request",
          },
        },
        secondaryCta: {
          text: "View Education Pathways",
          href: "/education",
        },
        showContactLinks: true,
      }}
    />
  );
}
