"use client";

import React, { useState } from "react";

/* ───────────────────────────── Data ───────────────────────────── */

const FEATURES = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Modern Loft",
    desc: "Minimalism with warmth through natural textures",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    title: "Natural Light",
    desc: "Double-volume ceilings up to 6m high",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20" />
        <path d="M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    title: "Smart Layout",
    desc: "Every square meter optimized for living",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Private & Secure",
    desc: "Gated community, 24-hour security",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Work-from-Home",
    desc: "Flexible rooms for office or studio",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Urban Connected",
    desc: "Near transport routes & lifestyle hubs",
  },
];

const FULL_CONTENT = {
  intro: [
    "Designed for the rhythm of modern urban life, this townhome project brings together contemporary architecture, intelligent space planning, and a strong sense of community. Every detail has been carefully considered to create a home that is not only visually striking but also highly functional for daily living.",
    "The project features a collection of modern loft-style townhomes characterized by clean architectural lines, open-plan interiors, and double-volume living spaces that enhance natural light and ventilation. Large floor-to-ceiling windows connect indoor and outdoor environments, creating a bright, airy atmosphere throughout the home.",
    "Each residence is designed to maximize usable space, ensuring seamless transitions between living, dining, and kitchen areas. The layout supports both private family living and social gatherings, offering flexibility for different lifestyles.",
  ],
  highlights: [
    "3-storey contemporary townhome design",
    "Double-volume living area (up to 5.5–6 meters high)",
    "Floor-to-ceiling glass panels for maximum daylight",
    "Clean facade with modern materials (glass, steel, textured concrete)",
    "Private parking integrated into the building structure",
  ],
};

/* ───────────────────────────── Component ───────────────────────────── */

function ProjectOverview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ background: "#FAFAF8" }}
      id="overview"
    >
      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-10 py-20">
        {/* ─── Header ─── */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block w-8 h-px bg-[#C4663A]" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-[#C4663A]"
            >
              Project Overview
            </p>
            <span className="block w-8 h-px bg-[#C4663A]" />
          </div>

          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-[#1A1A1A] mb-3"
          >
            Smart design. Open space.
            <br />
            <span className="text-[#B8B0A8]">Modern living.</span>
          </h2>

          <div className="w-14 h-px mx-auto mb-5 bg-gradient-to-r from-transparent via-[#B87333] to-transparent" />

          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[#6B7280] leading-relaxed max-w-xl mx-auto text-base md:text-lg font-light italic"
          >
            A modern townhome featuring loft-style interiors, double-volume
            spaces, and flexible layouts — ideal for today's urban lifestyle.
          </p>
        </div>

        {/* ─── Feature Cards Grid ─── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl px-5 py-5 transition-all duration-300 cursor-default"
              style={{
                background: "#F5F0EB",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(196,102,58,0.3)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(196,102,58,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="text-[#B8B0A8] group-hover:text-[#C4663A] transition-colors duration-300 mb-3">
                {item.icon}
              </div>
              <h4
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-[#1A1A1A] text-sm font-semibold mb-1"
              >
                {item.title}
              </h4>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[#6B7280] text-xs leading-relaxed"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ─── Expanded Detail ─── */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-2xl mx-auto mb-10 space-y-4 pt-6">
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-[#C4663A] mb-2"
            >
              Design Philosophy
            </p>
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[#1A1A1A] text-lg italic mb-4"
            >
              "Form follows lifestyle."
            </p>
            {FULL_CONTENT.intro.map((p, i) => (
              <p
                key={i}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[#6B7280] text-sm leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mb-6">
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-[#C4663A] mb-4"
            >
              Architectural Highlights
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {FULL_CONTENT.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C4663A]/40 flex-shrink-0" />
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[#1A1A1A] text-sm leading-relaxed"
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Toggle Button ─── */}
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="inline-flex items-center gap-2 px-6 py-2.5
                       text-[10px] tracking-[0.2em] uppercase
                       text-[#6B7280] hover:text-[#C4663A]
                       transition-all duration-300 cursor-pointer"
          >
            {isExpanded ? "Show Less" : "Read More"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mt-1 mx-auto w-12 h-px bg-gradient-to-r from-[#C4663A] to-[#C9A96E]" />
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;
