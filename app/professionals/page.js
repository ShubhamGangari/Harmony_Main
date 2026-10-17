import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata = {
  title: "Essential Oil Education for Wellness Professionals | Harmony of Cells",
  description:
    "Professional education in essential oils, responsible application, dilution safety, and aromatic wellness for yoga teachers, coaches, and spa professionals.",
};

export default function ProfessionalsPage() {
  return (
    <ServicePageTemplate
      theme="professionals"
      hero={{
        eyebrow: "FOR WELLNESS PROFESSIONALS",
        title: (
          <>
            Add knowledge. Expand your toolkit. <em>Stay responsible.</em>
          </>
        ),
        supporting:
          "Evidence-informed essential-oil education and aromatic practices for yoga teachers, coaches, therapists, and wellness facilitators.",
        description:
          "If you already work with people in a wellness setting, understanding botanical essential oils and sensory practices adds a powerful, grounded dimension to your client experiences. Harmony of Cells provides structured professional education focused on botanical science, safe dilution, sensory space design, and ethical client boundaries — without commercial hype or pseudoscientific claims.",
        primaryCta: {
          text: "Explore Professional Education",
          type: "form",
          formItem: "Wellness Professional Practitioner Pathway",
          formItemContext: {
            eyebrow: "PRACTITIONER PATHWAY • ENQUIRY",
            title: "Professional Education Enquiry",
            description:
              "Connect with Richa to discuss practitioner training, advanced essential-oil education, and aromatic rituals for your client practice.",
            submitLabel: "Submit Professional Enquiry",
            successTitle: "Your professional enquiry has been submitted successfully.",
          },
        },
        secondaryCta: {
          text: "View Practitioner Curriculum",
          href: "/education",
        },
        microline: "Yoga Teachers • Coaches • Therapists • Spa Professionals • Retreat Facilitators",
        announcement: "Botanical Chemistry • Dilution Safety • Scope of Practice • Space Ambience Design",
        badge: {
          tag: "PROFESSIONAL TOOLKIT",
          title: "Responsible application.",
          sub: "Dilution Standards • Client Ethics",
        },
        image: "/assets/hero-image.jpg",
        imageAlt: "Calm professional wellness studio setting with botanical essences",
      }}
      intro={{
        eyebrow: "ELEVATING PROFESSIONAL PRACTICE",
        title: "Integrity, science, and responsible boundaries in sensory wellness.",
        lead:
          "In a marketplace saturated with exaggerated claims and irresponsible advice, true professionalism is defined by evidence-informed knowledge, precision in dilution, and strict ethical boundaries.",
        paragraphs: [
          "Wellness practitioners frequently encounter clients seeking natural ways to decompress, ease tension, and establish evening calm. While botanical aromas offer extraordinary sensory anchoring, using them in a professional setting requires genuine botanical understanding, skin safety protocols, and clear client communication.",
          "Our professional education pathway is designed to give you rigorous, non-medical botanical knowledge you can incorporate into your existing practice with complete confidence. You will learn not just what oils to select, but why, when, how — and when not to use them.",
        ],
        highlightQuote:
          "Essential oils should complement responsible wellness practice — not replace qualified medical diagnosis or clinical treatment.",
      }}
      offerings={{
        id: "offerings",
        eyebrow: "PROFESSIONAL CURRICULUM",
        title: (
          <>
            Core competencies for <em>wellness practitioners.</em>
          </>
        ),
        description:
          "Designed to deepen your botanical understanding and seamlessly integrate into classes, private sessions, and treatment rooms.",
        items: [
          {
            step: "01",
            tagline: "Botanical Chemistry",
            title: "Essential Oil Science & Purity",
            description:
              "Understanding plant extraction methods, quality and botanical purity testing standards, aroma chemistry classifications, and the authentic science of olfactory pathways.",
            points: [
              "Botanical profiles and extraction methods",
              "Understanding GC/MS testing & purity",
              "How olfactory cues influence sensory wellbeing",
            ],
          },
          {
            step: "02",
            tagline: "Safety Protocols",
            title: "Responsible Application & Dilution",
            description:
              "Responsible dilution principles, carrier oil selection, skin patch testing, phototoxicity considerations, and precautions across diverse client populations.",
            points: [
              "Responsible dilution principles and safety protocols",
              "Carrier oil selection and skin considerations",
              "Precautions: pregnancy, sensitive skin & medical conditions",
            ],
          },
          {
            step: "03",
            tagline: "Studio Ambiance",
            title: "Aromatic Experiences & Space Design",
            description:
              "Integrating olfactory cues into yoga savasana, coaching check-ins, guided meditation, breathwork (pranayama), and massage therapy transitions.",
            points: [
              "Room-by-room aromatic profile selection",
              "Safe passive and ultrasonic diffusion",
              "Sensory anchoring for mindful movement",
            ],
          },
          {
            step: "04",
            tagline: "Somatic Application",
            title: "AromaTouch & Sensory Rituals",
            description:
              "Structured, step-by-step methods for gentle aromatic touch to promote deep relaxation and sensory grounding without claiming medical healing.",
            points: [
              "Sequential botanical layering technique",
              "Gentle, non-invasive tactile touch",
              "Pre- and post-session client grounding",
            ],
          },
          {
            step: "05",
            tagline: "Ethical Practice",
            title: "Client Communication & Boundaries",
            description:
              "Clear intake scripts, informed consent protocols, and ethical guardrails to ensure you communicate benefits accurately without crossing into clinical diagnosis.",
            points: [
              "Informed consent and client intake forms",
              "Compliant non-medical language guidelines",
              "Knowing when to refer to medical professionals",
            ],
          },
          {
            step: "06",
            tagline: "Structured Pathway",
            title: "Tiered Practitioner Training Pathways",
            description:
              "A progressive 3-tier education framework taking you from essential oil foundations to advanced practitioner application and bespoke workshop facilitation.",
            points: [
              "Foundations to advanced practitioner modules",
              "Hands-on blending and application labs",
              "Peer community and ongoing mentorship",
            ],
          },
        ],
      }}
      howItWorks={{
        id: "how-it-works",
        eyebrow: "PRACTITIONER CURRICULUM JOURNEY",
        title: (
          <>
            How the professional <em>learning pathway works.</em>
          </>
        ),
        description:
          "Rigorous, non-medical training designed to integrate safely into classes, clinics, and private client sessions.",
        steps: [
          {
            num: "01",
            title: "Modality Assessment & Scope Alignment",
            description:
              "We evaluate your current practice (yoga, coaching, bodywork) to identify appropriate sensory touchpoints within ethical non-medical boundaries.",
            highlight: "Scope Rigour",
          },
          {
            num: "02",
            title: "Botanical Chemistry & Dilution Standards",
            description:
              "Master essential oil constituent profiles, phototoxicity charts, carrier oil ratios, and strict skin patch testing protocols.",
            highlight: "Safety Mastery",
          },
          {
            num: "03",
            title: "Sensory Anchoring & Session Architecture",
            description:
              "Learn practical techniques to blend breath, ambient scent diffusion, and grounding rituals that enhance client presence.",
            highlight: "Client Experience",
          },
          {
            num: "04",
            title: "Informed Consent & Client Communication",
            description:
              "Receive intake questionnaires, contraindication checklists, and communication guidelines that protect your professional reputation.",
            highlight: "Professional Ethics",
          },
        ],
      }}
      founderCredibility={{
        eyebrow: "PRACTITIONER MENTORSHIP",
        title: "Mentored by Richa Ramola.",
        paragraphs: [
          "Richa Ramola guides wellness practitioners, corporate professionals, and educators in adopting responsible nature-based wellness practices.",
          "Her mentoring emphasizes rigorous compliance, botanical accuracy, and practical business ethics. She teaches practitioners how to build sustainable, high-integrity offerings without relying on exaggerated claims or unscientific fads.",
        ],
        quote:
          "When you operate from truth, deep botanical knowledge, and genuine client care, your professional credibility speaks for itself.",
        ctaText: "Inquire About Practitioner Mentoring",
        formItem: "Practitioner Mentoring with Richa",
        formItemContext: {
          eyebrow: "PRACTITIONER MENTORING",
          title: "Inquire with Richa Ramola",
          description:
            "Share your professional background and areas of interest. Richa will connect with you to discuss practitioner education pathways and mentoring.",
          submitLabel: "Request Mentoring Information",
        },
      }}
      disclaimer={{
        tag: "COMPLIANCE & CREDENTIAL NOTICE",
        title: "Professional Education & Scope of Practice",
        text:
          "Harmony of Cells education courses provide advanced educational enrichment, practical aromatherapy knowledge, and responsible application protocols to complement existing wellness disciplines. Our courses do not confer a licensed medical qualification, clinical healthcare license, or statutory board certification. Essential oils must always be used within your professional scope of practice and must never be represented as medical diagnosis, clinical treatment, or a replacement for medical care.",
      }}
      ctaSection={{
        id: "professional-inquiry",
        eyebrow: "EXPAND YOUR PROFESSIONAL TOOLKIT",
        title: (
          <>
            Elevate your client practice with <em>botanical integrity.</em>
          </>
        ),
        description:
          "Join our next professional cohort or connect with Richa Ramola to explore tailored practitioner training for your team or studio.",
        points: [
          "Comprehensive botanical chemistry and dilution protocols",
          "Ethical client communication scripts and consent templates",
          "Turnkey aromatic rituals for yoga, coaching, and bodywork",
          "Direct access to ongoing mentoring and educational updates",
        ],
        primaryCta: {
          text: "Inquire for Professional Pathway",
          formItem: "Professional Education Pathway",
          formItemContext: {
            eyebrow: "PRACTITIONER PATHWAY • ENQUIRY",
            title: "Professional Education Enquiry",
            description:
              "Share your professional practice details. We will share upcoming course dates, curriculum modules, and enrollment details.",
            submitLabel: "Submit Professional Enquiry",
          },
        },
        secondaryCta: {
          text: "View 3-Tier Curriculum",
          href: "/education",
        },
        showContactLinks: true,
      }}
    />
  );
}
