import ServicePageTemplate from "../../components/ServicePageTemplate";

export const metadata = {
  title: "Workplace Preventive Wellness | Corporate Wellness | Harmony of Cells",
  description:
    "Practical workplace wellness education, stress resilience, sensory wellness experiences, and preventive health workshops for modern organisations.",
};

export default function CorporateWellnessPage() {
  return (
    <ServicePageTemplate
      hero={{
        eyebrow: "WORKPLACE PREVENTIVE WELLNESS",
        title: (
          <>
            Wellness at work starts with <em>people.</em>
          </>
        ),
        supporting:
          "Practical education and sensory wellness experiences designed around the realities of modern working life.",
        description:
          "Modern organisations demand energy, focus, adaptability and sustained resilience. Harmony of Cells introduces human-centred, preventive wellness programs that bridge decades of corporate leadership with nature-based sensory practices — helping teams perform sustainably without burning out.",
        primaryCta: {
          text: "Inquire for Your Workplace",
          type: "form",
          formItem: "Corporate Workplace Wellness Inquiry",
          formItemContext: {
            eyebrow: "WORKPLACE PREVENTIVE WELLNESS • ENQUIRY",
            title: "Enquire for Your Organisation",
            description:
              "Share your organisation's details, estimated team size, and wellness objectives. Richa will connect with you to discuss tailored workplace wellness experiences.",
            submitLabel: "Submit Workplace Enquiry",
            successTitle: "Your corporate enquiry has been submitted successfully.",
          },
        },
        secondaryCta: {
          text: "Explore Corporate Offerings",
          href: "#offerings",
        },
        microline: "HR Leaders • Founders • CXOs • Corporate Wellness Teams",
        badge: {
          tag: "WORKPLACE WELLNESS",
          title: "Sustainable team resilience.",
          sub: "Preventive Care • Sensory Micro-breaks",
        },
        image: "/assets/hero-image.jpg",
        imageAlt: "Calm, supportive workplace wellness atmosphere",
      }}
      intro={{
        eyebrow: "A HUMAN-CENTRED PERSPECTIVE",
        title: "High performance requires intentional recovery.",
        lead:
          "Corporate wellness is not a token gift basket or an app download. It is an intentional workplace culture that respects human biology and equips employees with practical tools for rest, recovery, and daily focus.",
        paragraphs: [
          "In today's fast-moving business climate, constant connectivity and back-to-back cognitive demands place chronic strain on employees. Without intentional tools to decompress, chronic workday stress leads to disengagement, cognitive fatigue, and diminished innovation.",
          "Our Workplace Preventive Wellness programs are designed specifically for corporate reality. We introduce bite-sized, accessible educational concepts and sensory micro-practices that employees can actually apply at their desks, during team transitions, and in their home lives.",
        ],
        highlightQuote:
          "We understand both sides of the equation: the relentless commercial demands of the workplace, and the deeply human need for sustainable daily rhythms.",
      }}
      offerings={{
        id: "offerings",
        eyebrow: "PROGRAM PILLARS",
        title: (
          <>
            Comprehensive corporate <em>wellness offerings.</em>
          </>
        ),
        description:
          "Customizable workshops, executive masterclasses, and hands-on sensory wellness experiences designed for modern teams.",
        items: [
          {
            step: "01",
            tagline: "Stress & Resilience",
            title: "Stress Awareness & Resilience Education",
            description:
              "Grounded education on nervous-system awareness, somatic pause techniques, and practical cognitive resets to prevent workplace burnout during high-pressure delivery cycles.",
            points: [
              "Recognizing burnout warning signs early",
              "Micro-pauses for intense workdays",
              "Building adaptive team resilience",
            ],
          },
          {
            step: "02",
            tagline: "Sustainable Energy",
            title: "Rest & Recovery for Professionals",
            description:
              "Teaching busy executives and team members how to establish psychological boundaries, transition from workday overdrive, and achieve restorative nighttime sleep.",
            points: [
              "Evening mental detachment routines",
              "Circadian sleep hygiene protocols",
              "Sustaining daytime focus without over-caffeination",
            ],
          },
          {
            step: "03",
            tagline: "Aromatic Calming",
            title: "Sensory Wellness Experiences",
            description:
              "Interactive experiential sessions introducing intentional botanical aromas, guided breathwork, and ambient space design for calm, focused meeting rooms.",
            points: [
              "Olfactory cues for mental clarity & calm",
              "Responsible botanical dilution standards",
              "Creating sensory pause corners in offices",
            ],
          },
          {
            step: "04",
            tagline: "Inclusive Culture",
            title: "Women's Wellbeing at Work",
            description:
              "Dedicated educational sessions addressing female leadership fatigue, hormonal lifecycle transitions, and supportive daily rhythms in competitive professional environments.",
            points: [
              "Lifecycle rhythm awareness",
              "Managing fatigue with self-care tools",
              "Fostering inclusive team support",
            ],
          },
          {
            step: "05",
            tagline: "Team Habits",
            title: "Healthy Workplace Rituals",
            description:
              "Practical team protocols: mindful meeting opening minutes, digital boundary agreements, screen-break habits, and hydration/movement check-ins.",
            points: [
              "Conscious 2-minute meeting transitions",
              "Combating digital and visual fatigue",
              "Sustainable collaborative rhythms",
            ],
          },
          {
            step: "06",
            tagline: "Custom Experiences",
            title: "Executive Retreats & Offsite Sessions",
            description:
              "Turnkey experiential wellness sessions for leadership offsites, annual conferences, and executive team retreats focused on deep renewal and strategic clarity.",
            points: [
              "Half-day and full-day experiential workshops",
              "Hands-on essential-oil blending experiences",
              "Executive resilience roundtables",
            ],
          },
        ],
      }}
      audiences={{
        id: "audiences",
        eyebrow: "ORGANISATIONAL BENEFICIARIES",
        title: (
          <>
            Value delivered across your <em>organisation.</em>
          </>
        ),
        description:
          "Targeted outcomes for executive leadership, people operations, and employee resource groups.",
        items: [
          {
            tag: "HR & PEOPLE LEADERS",
            title: "People & Culture Teams",
            description:
              "Implement wellness initiatives employees genuinely value, driving measurable improvements in retention, morale, and everyday workplace engagement.",
          },
          {
            tag: "FOUNDERS & CXOS",
            title: "Executive Leadership",
            description:
              "Build a high-performance culture that lasts by modeling sustainable work-rest balance and equipping leaders with stress-resilience tools.",
          },
          {
            tag: "WELLNESS COMMITTEES",
            title: "Employee Resource Groups",
            description:
              "Host memorable, interactive wellness workshops that give team members practical self-care knowledge they can immediately take home.",
          },
        ],
      }}
      founderCredibility={{
        eyebrow: "THE B2B DIFFERENTIATOR",
        title: "Backed by 28+ years of corporate leadership and HR experience.",
        paragraphs: [
          "Unlike generic wellness practitioners, Founder Richa Ramola spent nearly three decades in Human Resources and Business Operations across multinational corporations.",
          "She has managed large teams, navigated board-level deadlines, and dealt firsthand with the pressures of corporate restructuring and high-growth targets. She knows the language of business, respects company budgets, and understands what makes a wellness initiative succeed in a real workplace.",
          "Today, she bridges that extensive corporate background with specialized education in essential oils, aromatherapy, and lifestyle wellness education — providing organisations with authentic, sensible, and scientifically responsible programs.",
        ],
        quote:
          "When organisations treat rest and resilience as strategic business assets rather than afterthoughts, performance and human wellbeing rise together.",
        ctaText: "Schedule a Corporate Discovery Call",
        formItem: "Corporate Discovery Consultation",
        formItemContext: {
          eyebrow: "CORPORATE DISCOVERY CALL",
          title: "Connect with Richa Ramola",
          description:
            "Share your organisation details. Richa will connect with you directly to explore how custom workplace wellness workshops can support your team.",
          submitLabel: "Request Discovery Call",
        },
      }}
      disclaimer={{
        title: "Workplace Wellness Educational Scope",
        text:
          "Harmony of Cells corporate wellness programs provide educational workshops, experiential sensory sessions, and lifestyle learning intended to support employee self-care and preventive workplace habits. These sessions are not clinical psychological counseling, psychiatric therapy, or medical diagnosis. They are designed to complement, not replace, existing occupational healthcare and Employee Assistance Programs (EAPs).",
      }}
      ctaSection={{
        id: "corporate-inquiry",
        eyebrow: "BRING WELLNESS TO YOUR WORKPLACE",
        title: (
          <>
            Equip your team with <em>sustainable resilience.</em>
          </>
        ),
        description:
          "Connect with Richa Ramola to discuss your organisation's size, workplace dynamics, and wellness objectives.",
        points: [
          "Customized for on-site, hybrid, or remote workforces",
          "Interactive hands-on sensory wellness experiences",
          "Practical takeaway tools employees use immediately",
          "Flexible formats from 60-minute masterclasses to leadership offsites",
        ],
        primaryCta: {
          text: "Submit Workplace Enquiry",
          formItem: "Corporate Workplace Wellness Program",
          formItemContext: {
            eyebrow: "WORKPLACE PREVENTIVE WELLNESS • ENQUIRY",
            title: "Enquire for Your Workplace",
            description:
              "Share your details and team size. We will connect with you to review workshop options, timelines, and tailored corporate proposals.",
            submitLabel: "Submit Corporate Enquiry",
          },
        },
        secondaryCta: {
          text: "Explore Foundation Education",
          href: "/education",
        },
        showContactLinks: true,
      }}
    />
  );
}
