"use client";

import React, { useState } from "react";
import {
  TrainFront,
  ShoppingBag,
  Hospital,
  GraduationCap,
  TrainIcon,
} from "lucide-react";

/* ───────────────────────────── Data ───────────────────────────── */

const NEARBY_DATA = [
  {
    id: "transport",
    category: "การเดินทาง",
    categoryEn: "Transportation",
    icon: <TrainIcon />,
    highlight: { name: "Rangsit–Nakhon Nayok Road", distance: "0" },
    places: [
      { name: "Rangsit–Nakhon Nayok Road", distance: "0" },
      { name: "SRT Rangsit Station (Red Line)", distance: "4" },
      { name: "Phahonyothin Road", distance: "4" },
      { name: "Vibhavadi Rangsit Road", distance: "4" },
      {
        name: "Uttaraphimuk Elevated Tollway (Don Mueang Tollway)",
        distance: "6",
      },
    ],
  },
  {
    id: "lifestyle",
    category: "ไลฟ์สไตล์",
    categoryEn: "Lifestyle",
    icon: <ShoppingBag />,
    highlight: { name: "Future Park Rangsit", distance: "2.5" },
    places: [
      { name: "Future Park Rangsit", distance: "2.5" },
      { name: "Major Cineplex Rangsit", distance: "2.8" },
      { name: "Rangsit Market", distance: "3.1" },
      { name: "Zeer Rangsit", distance: "5.5" },
      { name: "Si Mum Mueang Market", distance: "9" },
    ],
  },
  {
    id: "hospital",
    category: "โรงพยาบาล",
    categoryEn: "Hospital",
    icon: <Hospital />,
    highlight: { name: "Paolo Hospital Rangsit", distance: "3" },
    places: [
      { name: "Paolo Hospital Rangsit", distance: "3" },
      { name: "Rajavithi Hospital 2 (Rangsit)", distance: "3.3" },
      {
        name: "PatRangsit Hospital (Rangsit Medical Hospital)",
        distance: "4.8",
      },
      { name: "Pathumvech Hospital", distance: "5.3" },
      { name: "Patara-Thonburi Hospital", distance: "10.8" },
    ],
  },
  {
    id: "education",
    category: "สถานศึกษา",
    categoryEn: "Education",
    icon: <GraduationCap />,
    highlight: { name: "Udom Wittaya School", distance: "1.7" },
    places: [
      { name: "Udom Wittaya School", distance: "1.7" },
      { name: "Chokchai Rangsit School", distance: "3.3" },
      { name: "Siam International School", distance: "4.1" },
      { name: "Saipanya Rangsit School", distance: "9" },
      { name: "Thammasat University (Rangsit Campus)", distance: "12" },
    ],
  },
];

/* ───────────────────────────── Component ───────────────────────────── */

function NearbyFacilities() {
  const [activeTab, setActiveTab] = useState("transport");

  const activeData = NEARBY_DATA.find((d) => d.id === activeTab);

  return (
    <section id="facilities" className="relative py-16 bg-ci-white">
      {/* Top divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: "rgba(0,0,0,0.06)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        {/* ─── Header ─── */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-8 h-px bg-ci-accent" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-ci-accent"
            >
              Nearby Facilities
            </p>
            <span className="block w-8 h-px bg-ci-accent" />
          </div>

          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-ci-charcoal mb-3"
          >
            Nearby Facilities
          </h2>

          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-ci-steel max-w-lg mx-auto text-base md:text-lg font-light italic"
          >
            Everything you need, just minutes away.
          </p>
        </div>

        {/* ─── Category Tabs ─── */}
        <div className="flex justify-center gap-2 md:gap-3 mb-8 flex-wrap">
          {NEARBY_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[11px] tracking-[0.1em] uppercase
                         cursor-pointer transition-all duration-300
                ${
                  activeTab === item.id
                    ? "bg-ci-accent text-ci-white"
                    : "text-ci-steel hover:text-ci-charcoal border border-transparent hover:border-[rgba(0,0,0,0.08)]"
                }`}
            >
              <span
                className={`transition-colors duration-300 ${
                  activeTab === item.id ? "text-ci-white" : "text-ci-concrete"
                }`}
              >
                {React.cloneElement(item.icon, { size: 16 })}
              </span>
              {item.categoryEn}
            </button>
          ))}
        </div>

        {/* ─── Active Category Content ─── */}
        {activeData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Highlight Card */}
            <div
              className="md:col-span-1 rounded-2xl p-6 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-ci-accent), var(--color-ci-copper))",
              }}
            >
              <div>
                <div className="text-ci-white/60 mb-3">{activeData.icon}</div>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[10px] tracking-[0.3em] uppercase text-ci-white/60 mb-1"
                >
                  {activeData.categoryEn}
                </p>
                <h3
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-ci-white text-lg font-bold mb-1"
                >
                  {activeData.highlight.name}
                </h3>
              </div>
              <div className="mt-6">
                <span
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-4xl font-bold text-ci-white"
                >
                  {activeData.highlight.distance}
                </span>
                <span
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-ci-white/70 text-sm ml-1.5"
                >
                  km
                </span>
              </div>
            </div>

            {/* Places List */}
            <div
              className="md:col-span-2 rounded-2xl overflow-hidden bg-ci-cream"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {activeData.places.map((place, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-4 transition-colors duration-200"
                  style={{
                    borderBottom:
                      i < activeData.places.length - 1
                        ? "1px solid rgba(0,0,0,0.06)"
                        : "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(196,102,58,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ci-accent/40 flex-shrink-0" />
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-ci-charcoal text-sm"
                    >
                      {place.name}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 flex-shrink-0 ml-4">
                    <span
                      style={{ fontFamily: "'Syne', sans-serif" }}
                      className="text-ci-accent text-sm font-semibold"
                    >
                      {place.distance}
                    </span>
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-ci-concrete text-[11px]"
                    >
                      km
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default NearbyFacilities;
