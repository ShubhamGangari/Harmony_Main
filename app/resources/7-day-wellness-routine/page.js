"use client";

import { useState } from "react";
import Link from "next/link";
import { sendWeb3FormsNotification } from "../../../lib/web3forms";

const DAYS_DATA = [
  {
    dayNumber: "Day 01",
    title: "Morning Light & Daily Rhythm",
    theme: "Circadian alignment & natural awakening",
    explanation:
      "Your body operates on an internal master circadian clock situated in the brain. Exposure to natural optical light early in the day provides a powerful biological signal that sets your daytime cortisol rhythm, promotes alertness, and establishes the timing for melatonin production later in the evening.",
    activity:
      "Within 30–60 minutes of waking, spend 5–10 minutes outside in natural daylight, or by an open window. Enjoy the natural morning light without staring directly at the sun.",
    reflection:
      "How does my morning typically feel, and what is one small window of pause I can protect before checking my phone or computer?",
    guidance:
      "Pair this with a glass of warm water. Even on cloudy or overcast days, outdoor lux levels are significantly higher than indoor artificial lighting.",
    sensoryTool:
      "Optional sensory touch: A bright, uplifting citrus aroma such as Wild Orange or Lemon diffused in your morning space can add a pleasant sensory cue for awakening.",
  },
  {
    dayNumber: "Day 02",
    title: "Breath & The Mindful Pause",
    theme: "Autonomic tone & intentional breathing",
    explanation:
      "The breath is one of the few autonomic processes that we can consciously influence. When we experience continuous cognitive demands, breathing often becomes shallow and rapid. Deliberately lengthening the exhalation supports the body's natural relaxation response, encouraging a calmer, more grounded experiential state.",
    activity:
      "Take 3 minutes for a gentle 4–6 breathing practice. Inhale smoothly through your nose for 4 counts, then exhale slowly and gently through your mouth or nose for 6 counts. Repeat for 10–12 cycles.",
    reflection:
      "Where in my day do I habitually hold my breath, tense my shoulders, or rush through tasks?",
    guidance:
      "Do not force or strain the breath. Keep the rhythm soft, gentle, and unforced. If counting causes tension, simply aim to make your exhale noticeably longer than your inhale.",
    sensoryTool:
      "Optional sensory touch: Rub 1 drop of diluted Lavender or Frankincense in carrier oil between your palms, cup them over your nose and mouth, and inhale deeply during your breath practice.",
  },
  {
    dayNumber: "Day 03",
    title: "Transitioning from Work to Rest",
    theme: "Boundary setting & work de-escalation",
    explanation:
      "In modern life, work demands and digital correspondence frequently spill over into evening hours. Without an intentional buffer or transitional ritual, the nervous system remains in a state of high vigilance, making it difficult to unwind at dinner or settle before bed.",
    activity:
      "Establish a physical 'close-of-day' ritual. Close all browser tabs, write down tomorrow's top 3 priorities on paper, shut your laptop, and wash your hands and face in warm water to physically mark the shift from work to home life.",
    reflection:
      "What thoughts or unfinished tasks do I typically carry from work into my personal evening hours?",
    guidance:
      "Give yourself 5–10 minutes of screen-free transition time before engaging with family, cooking, or social obligations. Protect this threshold as an act of personal recovery.",
    sensoryTool:
      "Optional sensory touch: Diffuse a warm, grounding blend such as Cedarwood or Bergamot in your living area to signal to your senses that the workday has concluded.",
  },
  {
    dayNumber: "Day 04",
    title: "Sensory Grounding",
    theme: "Present-moment awareness through sensory pathways",
    explanation:
      "When the mind is consumed by planning, worry, or analytical tasks, attention becomes trapped in cognitive loops. Engaging the five senses provides immediate, gentle anchors that bring attention back into the present physical environment.",
    activity:
      "Practice the gentle 5-4-3-2-1 sensory grounding exercise: Notice 5 things you can see around you, 4 textures you can touch, 3 sounds you can hear, 2 aromas you can detect, and 1 taste you can observe.",
    reflection:
      "When was the last time I felt fully present in my physical body, without multitasking or distraction?",
    guidance:
      "This practice can be done sitting at your desk, resting barefoot on a floor, or walking quietly outside. Take your time with each sense.",
    sensoryTool:
      "Optional sensory touch: A botanical aroma such as Copaiba, Frankincense, or Rosemary provides an evocative olfactory anchor for the '2 things you can smell' step.",
  },
  {
    dayNumber: "Day 05",
    title: "Restorative Movement",
    theme: "Releasing physical tension & gentle circulation",
    explanation:
      "Sedentary routines and prolonged desk posture accumulate tension in the neck, shoulders, and hips. Movement does not always need to be intense or strenuous to be beneficial; gentle, rhythmic mobility helps circulate lymph, releases muscular holding patterns, and calms the nervous system.",
    activity:
      "Dedicate 10–15 minutes to gentle, low-intensity movement. Perform slow neck rolls, shoulder shrugs, gentle seated spinal twists, and a relaxed 10-minute stroll outdoors without looking at your mobile device.",
    reflection:
      "Does my current movement routine feel like an obligation or an act of restorative nourishment?",
    guidance:
      "Focus entirely on ease, breath, and sensation. Let your body move at a pace that feels soothing rather than demanding.",
    sensoryTool:
      "Optional sensory touch: After your stroll or stretches, gently apply a cooling botanical lotion or diluted Peppermint in carrier oil to tired shoulders or legs.",
  },
  {
    dayNumber: "Day 06",
    title: "Digital Boundaries & Evening Rest",
    theme: "Melatonin protection & cognitive winding down",
    explanation:
      "Screen backlighting in the evening mimics daytime blue light, which can delay the natural release of melatonin. Furthermore, the stimulating nature of email, news, and social feeds maintains mental vigilance at the exact time the brain needs to transition toward sleep.",
    activity:
      "Set a 'digital curfew' 45–60 minutes before your target sleep time. Place your mobile phone on silent and charge it outside of arm's reach or in another room. Replace screen time with a book, gentle stretching, or peaceful conversation.",
    reflection:
      "What screen-free activity brings me the deepest sense of peace and comfort in the evening?",
    guidance:
      "If you use your phone as an alarm, consider switching to an analog bedside clock to remove the temptation to check messages in the middle of the night.",
    sensoryTool:
      "Optional sensory touch: Diffuse Roman Chamomile or Lavender in your bedroom 30 minutes before sleep to create a calming, ambient aromatic atmosphere.",
  },
  {
    dayNumber: "Day 07",
    title: "Creating Your Personal Wellness Ritual",
    theme: "Integration, simplicity & sustainable self-care",
    explanation:
      "True wellness is not about following rigid, complicated protocols that create additional stress. It is about understanding what practices genuinely serve your unique life, and integrating them as small, sustainable, repeatable daily rituals.",
    activity:
      "Review the practices from the past six days. Select the 1 or 2 practices that felt most restorative and practical for you. Write them down and commit to practicing them consistently over the coming week.",
    reflection:
      "What is my personal vision of a calm, supportive daily rhythm, and what is one simple thing I can honor every day?",
    guidance:
      "Keep it small. Practicing one simple 3-minute breath pause every day is far more transformative than attempting an overwhelming 10-step routine that falls apart after three days.",
    sensoryTool:
      "Optional sensory touch: Choose a signature botanical aroma that resonates with you to accompany your daily ritual of quiet reflection.",
  },
];

export default function SevenDayWellnessRoutinePage() {
  const [formData, setFormData] = useState({ name: "", email: "", consent: false });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus({ submitting: false, success: false, error: "Please confirm your consent to receive emails." });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        source: "7-Day Wellness Routine Guide Request",
        message: "User requested educational updates and guide access with explicit marketing consent.",
      };

      const result = await sendWeb3FormsNotification(payload);

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", consent: false });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: "Unable to submit your request at this time. The complete guide is already accessible above for free.",
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: "Network error. You can continue reading and printing the guide directly on this page.",
      });
    }
  };

  return (
    <main className="routine-guide-page">
      {/* Editorial Header */}
      <section className="routine-hero">
        <div className="container routine-hero-content">
          <div className="routine-hero-breadcrumb">
            <Link href="/resources">← Back to Resources</Link>
          </div>
          <span className="eyebrow">PRACTICAL LIFESTYLE GUIDE • FREE & OPEN ACCESS</span>
          <h1>The 7-Day Supportive <em>Wellness Routine.</em></h1>
          <p className="routine-hero-subtitle">
            Seven simple practices for rest, relaxation, sensory awareness and everyday wellbeing.
          </p>
          <p className="routine-hero-intro">
            Modern life places continuous demands on our attention and energy. This educational
            sequence was created by Harmony of Cells to help you cultivate calmer daily rhythms through small,
            sustainable practices. Each day offers an educational reflection, a simple low-risk activity,
            and an optional sensory botanical suggestion.
          </p>

          <div className="routine-action-strip" id="guide-print">
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-primary print-trigger-btn"
              title="Print or save this guide as PDF"
            >
              <span>🖨️</span> Print / Save Complete Guide as PDF
            </button>
            <span className="print-note">
              No download gate required • Complete 7-day text is fully accessible below
            </span>
          </div>
        </div>
      </section>

      {/* 7 Days Sequence */}
      <section className="section routine-content-section" id="routine-sequence">
        <div className="container">
          {/* Day Jump Navigation Bar */}
          <div className="day-nav-wrapper mb-10">
            <nav className="approach-quick-nav day-quick-nav" aria-label="7-day routine quick jump">
              <span className="quick-nav-label">JUMP TO DAY:</span>
              {DAYS_DATA.map((d, idx) => (
                <a
                  key={d.dayNumber}
                  href={`#day-${String(idx + 1).padStart(2, "0")}`}
                  className="quick-nav-pill"
                >
                  {d.dayNumber}: {d.title.split("&")[0].trim()}
                </a>
              ))}
            </nav>
          </div>

          <div className="routine-days-container">
            {DAYS_DATA.map((day, idx) => (
              <article key={day.dayNumber} className="routine-day-card" id={`day-${String(idx + 1).padStart(2, "0")}`}>
                <div className="day-card-header">
                  <div className="day-badge-wrap">
                    <span className="day-number-badge">{day.dayNumber}</span>
                    <span className="day-theme-label">{day.theme}</span>
                  </div>
                  <h2>{day.title}</h2>
                </div>

                <div className="day-card-body">
                  <div className="day-section-block">
                    <h3>The Understanding</h3>
                    <p>{day.explanation}</p>
                  </div>

                  <div className="day-activity-box">
                    <span className="activity-label">TODAY&apos;S PRACTICAL ACTIVITY</span>
                    <p className="activity-text">{day.activity}</p>
                  </div>

                  <div className="day-two-col">
                    <div className="day-reflection-box">
                      <strong>Reflection Question:</strong>
                      <p><em>&ldquo;{day.reflection}&rdquo;</em></p>
                    </div>

                    <div className="day-guidance-box">
                      <strong>Implementation Guidance:</strong>
                      <p>{day.guidance}</p>
                    </div>
                  </div>

                  <div className="day-sensory-box">
                    <span className="sensory-icon" aria-hidden="true">🌿</span>
                    <div>
                      <strong>Sensory Wellness Note:</strong>
                      <p>{day.sensoryTool}</p>
                    </div>
                  </div>

                  {/* Day-to-Day Flow Footer */}
                  <div className="day-card-nav-row">
                    {idx > 0 ? (
                      <a href={`#day-${String(idx).padStart(2, "0")}`} className="day-nav-link prev">
                        ← {DAYS_DATA[idx - 1].dayNumber}
                      </a>
                    ) : <span />}
                    <a href="#guide-print" className="day-nav-link top">
                      Top of Guide ↑
                    </a>
                    {idx < DAYS_DATA.length - 1 ? (
                      <a href={`#day-${String(idx + 2).padStart(2, "0")}`} className="day-nav-link next">
                        Next: {DAYS_DATA[idx + 1].dayNumber} →
                      </a>
                    ) : (
                      <a href="#lead-capture" className="day-nav-link next">
                        Complete Guide ✓
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent, Optional Email Updates Section (No Forced Gate) */}
      <section className="section bg-cream-soft lead-capture-section" id="lead-capture">
        <div className="container max-w-3xl">
          <div className="lead-capture-card">
            <div className="lead-capture-header text-center">
              <span className="eyebrow">EDUCATIONAL CORRESPONDENCE</span>
              <h2>Request Future Wellness Guides & Insights</h2>
              <p className="section-subhead">
                The 7-Day Guide above is completely free and open to everyone. If you would like to request occasional
                educational articles, seasonal wellness insights, or workshop announcements directly via email,
                you may submit your details below. Submissions are forwarded to our team for correspondence;
                we do not use automated marketing list managers.
              </p>
            </div>

            {status.success ? (
              <div className="lead-success-message" role="status">
                <h3>✓ Request Received</h3>
                <p>
                  Thank you for connecting with us. Your request to receive future educational materials has been
                  forwarded to our team. In the meantime, you can read, reference, or print the complete 7-day routine above anytime.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="lead-consent-form">
                <div className="lead-form-grid">
                  <div className="form-group">
                    <label htmlFor="lead-name">Your Full Name</label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Richa Ramola"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lead-email">Your Email Address</label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. connect@harmonyofcells.com"
                    />
                  </div>
                </div>

                {/* Explicit, Unchecked Consent Checkbox */}
                <div className="lead-consent-checkbox-wrap">
                  <label className="lead-consent-label">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <span>
                      I explicitly request to receive educational wellness updates and occasional workshop news from Harmony of Cells.
                      I understand this request is forwarded to the administrative team and I can opt out at any time. View our{" "}
                      <Link href="/privacy" className="underline font-bold">
                        Privacy Policy
                      </Link>.
                    </span>
                  </label>
                </div>

                <div className="lead-transparency-note">
                  <small>
                    🔒 <strong>Privacy Assurance:</strong> We collect your name and email strictly to deliver requested wellness correspondence.
                    We do not collect sensitive health information through this form, and we never sell your personal data.
                  </small>
                </div>

                {status.error ? (
                  <div className="form-error-alert" role="alert">
                    {status.error}
                  </div>
                ) : null}

                <div className="lead-form-actions">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="btn btn-primary"
                  >
                    {status.submitting ? "Submitting..." : "Request Educational Updates"}
                  </button>
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="btn btn-outline"
                  >
                    Print Current Guide
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Guided Next Steps */}
      <section className="section routine-footer-cta">
        <div className="container text-center">
          <span className="eyebrow">TAKE THE NEXT STEP</span>
          <h2>Deepen Your Wellness Journey</h2>
          <p className="section-subhead max-w-2xl mx-auto">
            Ready to explore nature-based practices tailored specifically to your daily life,
            or learn foundational essential oil education?
          </p>
          <div className="routine-cta-buttons">
            <Link href="/consultation" className="btn btn-primary">
              Book a Personal Consultation
            </Link>
            <Link href="/education" className="btn btn-outline">
              Explore Education Programs
            </Link>
            <Link href="/essential-oil-safety" className="btn btn-outline">
              Review Safety Standards
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
