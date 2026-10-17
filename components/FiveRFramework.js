"use client";

import { useState } from "react";
import Link from "next/link";

const CONCEPTS = [
  {
    step: "01",
    name: "REST",
    tagline: "Recovery & Calm",
    glyph: "✦",
    focus: "Nighttime recovery & deep decompression",
    description:
      "Creating supportive conditions for genuine rest, nighttime recovery, and gentle decompression after demanding days. Rest is not passive downtime—it is the biological foundation that allows the nervous system to recalibrate and repair.",
    ritual: "Circadian evening wind-down, dim amber light transitions, and calming botanical diffusion before sleep.",
    pillarLink: "/wellness#rest-and-sleep",
    pillarLabel: "Rest & Sleep Pillar",
  },
  {
    step: "02",
    name: "REGULATE",
    tagline: "Pause & Awareness",
    glyph: "◌",
    focus: "Conscious pauses & somatic calm",
    description:
      "Building intentional moments of pause, somatic awareness, and calming transitions throughout the workday. Regulate interrupts continuous low-grade stress before it compounds into chronic physical exhaustion.",
    ritual: "2-minute conscious breath breaks between meetings, seated grounding check-ins, and wrist pulse-point aroma cues.",
    pillarLink: "/wellness#stress-and-resilience",
    pillarLabel: "Stress & Resilience Pillar",
  },
  {
    step: "03",
    name: "RESTORE",
    tagline: "Daily Rhythms",
    glyph: "◈",
    focus: "Circadian alignment & restorative cadence",
    description:
      "Supporting healthy circadian rhythms and restorative routines through evidence-informed lifestyle practices. Aligning daily habits with biological pacing rebuilds sustainable daytime vitality.",
    ritual: "Early morning daylight exposure, rhythmic work-recovery pacing, and intentional hydration breaks.",
    pillarLink: "/wellness#daily-rhythms",
    pillarLabel: "Daily Rhythms Pillar",
  },
  {
    step: "04",
    name: "RESILIENCE",
    tagline: "Sustainable Capacity",
    glyph: "◇",
    focus: "Everyday adaptability & emotional calm",
    description:
      "Developing practical habits and adaptive routines for navigating the continuous demands of modern life. Resilience is the flexibility to respond to stressors without losing inner equilibrium.",
    ritual: "Establishing sustainable workday boundaries, recognizing early stress thresholds, and preserving family renewal time.",
    pillarLink: "/wellness#workplace-wellness",
    pillarLabel: "Workplace Wellness Pillar",
  },
  {
    step: "05",
    name: "RITUAL",
    tagline: "Repeatable Habits",
    glyph: "✺",
    focus: "Small, enjoyable self-care micro-habits",
    description:
      "Turning wellness knowledge into small, enjoyable, repeatable self-care practices that fit your everyday schedule. Transforming knowledge into simple sensory anchors makes lasting self-care effortless.",
    ritual: "Sensory aromatic anchors, mindful morning tea intentions, and evening transition rituals that signal safety to the body.",
    pillarLink: "/wellness#sensory-wellness",
    pillarLabel: "Sensory Wellness Pillar",
  },
];

export default function FiveRFramework() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CONCEPTS[activeIndex];

  const handleKeyDown = (event, index) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % CONCEPTS.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + CONCEPTS.length) % CONCEPTS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = CONCEPTS.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    setActiveIndex(nextIndex);
    const nextTab = document.getElementById(`fiver-tab-${CONCEPTS[nextIndex].step}`);
    nextTab?.focus();
  };

  return (
    <div className="fiver-interactive-wrapper">
      {/* 1. Accessible Tab Navigation Header */}
      <div
        className="fiver-tablist"
        role="tablist"
        aria-label="The 5R Wellness Methodology Stages"
      >
        {CONCEPTS.map((concept, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={concept.step}
              id={`fiver-tab-${concept.step}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`fiver-panel-${concept.step}`}
              tabIndex={isSelected ? 0 : -1}
              className={`fiver-tab-btn ${isSelected ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              <span className="fiver-tab-num">{concept.step}</span>
              <span className="fiver-tab-name">{concept.name}</span>
              <span className="fiver-tab-glyph" aria-hidden="true">{concept.glyph}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Featured Active Stage Editorial Showcase Card */}
      <div
        id={`fiver-panel-${active.step}`}
        role="tabpanel"
        aria-labelledby={`fiver-tab-${active.step}`}
        className="fiver-showcase-card"
      >
        <div className="fiver-showcase-grid">
          {/* Left Column: Concept Brand Identity */}
          <div className="fiver-showcase-left">
            <div className="fiver-stage-badge">
              <span>STAGE {active.step} OF 05</span>
              <span className="badge-sep">•</span>
              <span>THE 5R METHOD</span>
            </div>

            <div className="fiver-title-wrap">
              <span className="fiver-watermark-num" aria-hidden="true">
                {active.step}
              </span>
              <div className="fiver-title-content">
                <span className="fiver-glyph-large" aria-hidden="true">{active.glyph}</span>
                <h2>{active.name}</h2>
              </div>
            </div>

            <div className="fiver-tagline-pill">
              <span>{active.tagline}</span>
            </div>

            <p className="fiver-focus-lead">
              <em>{active.focus}</em>
            </p>

            <Link href={active.pillarLink} className="fiver-pillar-link">
              <span className="pillar-link-icon" aria-hidden="true">🌿</span>
              <span>Related: {active.pillarLabel}</span>
              <span className="pillar-link-arrow">→</span>
            </Link>
          </div>

          {/* Right Column: Deep Narrative & Concrete Daily Practice */}
          <div className="fiver-showcase-right">
            <div className="fiver-narrative-box">
              <h3 className="fiver-narrative-heading">Methodology & Everyday Science</h3>
              <p className="fiver-narrative-text">{active.description}</p>
            </div>

            <div className="fiver-practice-box">
              <div className="fiver-practice-header">
                <span className="fiver-practice-badge">SIGNATURE PRACTICE CUE</span>
                <span className="fiver-practice-dot" aria-hidden="true">✦</span>
              </div>
              <p className="fiver-practice-text">{active.ritual}</p>
            </div>

            <div className="fiver-showcase-footer-actions">
              <Link href="/approach" className="btn btn-primary fiver-explore-btn">
                Explore Complete 5R Approach <span>→</span>
              </Link>
              <Link href="/education" className="btn btn-outline fiver-edu-btn">
                View Related Curriculum <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Five-Stage Overview Track (Ensures complete visual visibility of all 5 concepts simultaneously) */}
      <div className="fiver-track-rail" role="list" aria-label="Quick jump across 5R steps">
        {CONCEPTS.map((concept, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={concept.step}
              type="button"
              className={`fiver-track-item ${isSelected ? "selected" : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to stage ${concept.step}: ${concept.name}`}
            >
              <div className="track-step-circle">
                <span>{concept.step}</span>
              </div>
              <div className="track-info">
                <strong>{concept.name}</strong>
                <small>{concept.tagline}</small>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
