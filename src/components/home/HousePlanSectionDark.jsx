"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BedDouble,
  Bath,
  Car,
  Layers,
  Maximize,
  ChevronDown,
} from "lucide-react";
import { HOUSE_TYPES } from "@/lib/data/home/housePlanData";

/* ───────────────────────────── Spec Item ───────────────────────────── */

function SpecItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-ci-concrete">{icon}</span>
      <span
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="text-ci-white text-lg font-bold leading-none"
      >
        {value}
      </span>
      <span
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-ci-steel text-[10px] tracking-wider uppercase"
      >
        {label}
      </span>
    </div>
  );
}

/* ───────────────────────────── Component ───────────────────────────── */

function HousePlanSectionDark() {
  const [activeTypeId, setActiveTypeId] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeHouse = HOUSE_TYPES.find((h) => h.id === activeTypeId);

  const handleTypeChange = (id) => {
    setActiveTypeId(id);
    setActiveImageIndex(0);
    setIsDropdownOpen(false);
  };

  return (
    <section
      className="relative py-16 overflow-hidden bg-ci-warm-black"
      id="residences"
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.5) 59px, rgba(255,255,255,0.5) 60px), repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.5) 59px, rgba(255,255,255,0.5) 60px)",
        }}
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ─── Header ─── */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-8 h-px bg-ci-accent" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-ci-accent"
            >
              Residences
            </p>
            <span className="block w-8 h-px bg-ci-accent" />
          </div>

          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-ci-white mb-3"
          >
            House Plans
          </h2>

          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-ci-steel max-w-md mx-auto text-base md:text-lg font-light italic"
          >
            Explore our thoughtfully designed residences, each crafted for
            modern living.
          </p>
        </div>

        {/* ═══════════════════════════════════════
            MOBILE LAYOUT
            ═══════════════════════════════════════ */}
        <div className="lg:hidden">
          {/* Mobile Type Selector — Dropdown */}
          <div className="relative mb-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer
                         transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(196,102,58,0.2)",
              }}
            >
              <div>
                <p
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-ci-white text-sm font-semibold"
                >
                  {activeHouse.title}
                </p>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[10px] tracking-wider uppercase text-ci-concrete"
                >
                  {activeHouse.type}
                </p>
              </div>
              <ChevronDown
                size={18}
                className={`text-ci-accent transition-transform duration-300
                  ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown menu */}
            <div
              className={`absolute top-full left-0 right-0 z-30 mt-1 rounded-xl overflow-hidden
                         transition-all duration-300
                ${isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
              style={{
                background: "rgba(26,26,26,0.98)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
              }}
            >
              {HOUSE_TYPES.map((house) => (
                <button
                  key={house.id}
                  onClick={() => handleTypeChange(house.id)}
                  className={`w-full text-left px-5 py-3.5 cursor-pointer transition-colors duration-200
                    ${activeTypeId === house.id ? "bg-white/5" : "hover:bg-white/[0.03]"}`}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        style={{ fontFamily: "'Syne', sans-serif" }}
                        className={`text-sm font-semibold ${
                          activeTypeId === house.id
                            ? "text-ci-accent"
                            : "text-ci-white"
                        }`}
                      >
                        {house.title}
                      </p>
                      <p
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-[10px] tracking-wider uppercase text-ci-concrete"
                      >
                        {house.type} · {house.areaSquareMeters} sq.m.
                      </p>
                    </div>
                    {activeTypeId === house.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-ci-accent" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Main Image */}
          <div
            className="relative w-full rounded-2xl overflow-hidden mb-3"
            style={{
              aspectRatio: "4 / 3",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <Image
              key={`m-${activeHouse.id}-${activeImageIndex}`}
              src={activeHouse.gallery[activeImageIndex].src}
              alt={activeHouse.gallery[activeImageIndex].alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div
              className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-md"
              style={{
                background: "rgba(26,26,26,0.75)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[10px] tracking-[0.15em] uppercase text-ci-white"
              >
                {activeHouse.gallery[activeImageIndex].title}
              </span>
            </div>
            <div
              className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-md"
              style={{
                background: "rgba(26,26,26,0.75)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[11px] text-ci-white"
              >
                {activeImageIndex + 1} <span className="text-ci-steel">/</span>{" "}
                {activeHouse.gallery.length}
              </span>
            </div>
          </div>

          {/* Mobile Gallery Thumbnails — right below image */}
          <div className="flex gap-2 mb-6">
            {activeHouse.gallery.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setActiveImageIndex(i)}
                className={`relative flex-1 rounded-lg overflow-hidden cursor-pointer
                           transition-all duration-300
                  ${
                    activeImageIndex === i
                      ? "ring-2 ring-ci-accent ring-offset-2"
                      : "opacity-50 hover:opacity-100"
                  }`}
                style={{
                  aspectRatio: "16 / 10",
                  ringOffsetColor: "var(--color-ci-warm-black)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 py-1 text-center"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                >
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[8px] tracking-[0.15em] uppercase text-ci-white"
                  >
                    {img.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Details */}
          <div className="mb-5">
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.3em] uppercase text-ci-accent mb-1"
            >
              {activeHouse.type}
            </p>
            <h3
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-xl font-bold text-ci-white mb-2"
            >
              {activeHouse.title}
            </h3>
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-ci-steel text-sm italic leading-relaxed"
            >
              {activeHouse.description}
            </p>
          </div>

          {/* Mobile Specs */}
          <div
            className="rounded-xl p-5 mb-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="grid grid-cols-5 gap-2">
              <SpecItem
                icon={<BedDouble size={18} strokeWidth={1.5} />}
                value={activeHouse.bedrooms}
                label="Bed"
              />
              <SpecItem
                icon={<Bath size={18} strokeWidth={1.5} />}
                value={activeHouse.bathrooms}
                label="Bath"
              />
              <SpecItem
                icon={<Car size={18} strokeWidth={1.5} />}
                value={activeHouse.parking}
                label="Park"
              />
              <SpecItem
                icon={<Layers size={18} strokeWidth={1.5} />}
                value={activeHouse.floor}
                label="Floor"
              />
              <SpecItem
                icon={<Maximize size={18} strokeWidth={1.5} />}
                value={activeHouse.areaSquareMeters}
                label="sq.m."
              />
            </div>
          </div>

          <a
            href="#contact"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="block text-center px-5 py-3 bg-ci-accent text-ci-white
                       text-[10px] tracking-[0.2em] uppercase rounded-lg
                       hover:bg-ci-copper transition-colors duration-300"
          >
            Request Info
          </a>
        </div>

        {/* ═══════════════════════════════════════
            DESKTOP LAYOUT
            ═══════════════════════════════════════ */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-10 gap-5">
            {/* ── Left Panel: Type Selector ── */}
            <div className="col-span-2 flex flex-col gap-2">
              {HOUSE_TYPES.map((house) => (
                <button
                  key={house.id}
                  onClick={() => handleTypeChange(house.id)}
                  className="text-left rounded-xl px-4 py-3.5 cursor-pointer
                             transition-all duration-300 w-full"
                  style={{
                    background:
                      activeTypeId === house.id
                        ? "rgba(255,255,255,0.05)"
                        : "transparent",
                    border:
                      activeTypeId === house.id
                        ? "1px solid rgba(196,102,58,0.2)"
                        : "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTypeId !== house.id) {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.12)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTypeId !== house.id) {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.06)";
                    }
                  }}
                >
                  {activeTypeId === house.id && (
                    <div className="w-5 h-[2px] bg-ci-accent rounded-full mb-2" />
                  )}
                  <p
                    style={{ fontFamily: "'Syne', sans-serif" }}
                    className={`text-sm font-semibold mb-0.5 transition-colors duration-300
                      ${activeTypeId === house.id ? "text-ci-white" : "text-ci-steel"}`}
                  >
                    {house.title}
                  </p>
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[10px] tracking-wider uppercase text-ci-concrete"
                  >
                    {house.type}
                  </p>
                </button>
              ))}
            </div>

            {/* ── Center: Main Image ── */}
            <div className="col-span-6">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "4 / 3",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <Image
                  key={`d-${activeHouse.id}-${activeImageIndex}`}
                  src={activeHouse.gallery[activeImageIndex].src}
                  alt={activeHouse.gallery[activeImageIndex].alt}
                  fill
                  className="object-cover"
                  sizes="60vw"
                  priority
                />
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md"
                  style={{
                    background: "rgba(26,26,26,0.75)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[10px] tracking-[0.15em] uppercase text-ci-white"
                  >
                    {activeHouse.gallery[activeImageIndex].title}
                  </span>
                </div>
                <div
                  className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-md"
                  style={{
                    background: "rgba(26,26,26,0.75)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[11px] text-ci-white"
                  >
                    {activeImageIndex + 1}{" "}
                    <span className="text-ci-steel">/</span>{" "}
                    {activeHouse.gallery.length}
                  </span>
                </div>
              </div>

              {/* Desktop Gallery Thumbnails */}
              <div className="flex gap-3 mt-4">
                {activeHouse.gallery.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative flex-1 rounded-xl overflow-hidden cursor-pointer
                               transition-all duration-300
                      ${
                        activeImageIndex === i
                          ? "ring-2 ring-ci-accent ring-offset-2"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    style={{
                      aspectRatio: "16 / 10",
                      ringOffsetColor: "var(--color-ci-warm-black)",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="20vw"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 py-1.5 text-center"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                      }}
                    >
                      <span
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-[9px] tracking-[0.15em] uppercase text-ci-white"
                      >
                        {img.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Right Panel: Details ── */}
            <div className="col-span-2 flex flex-col justify-between">
              <div className="mb-6">
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[10px] tracking-[0.3em] uppercase text-ci-accent mb-2"
                >
                  {activeHouse.type}
                </p>
                <h3
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-xl font-bold text-ci-white mb-3"
                >
                  {activeHouse.title}
                </h3>
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-ci-steel text-sm italic leading-relaxed"
                >
                  {activeHouse.description}
                </p>
              </div>

              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <SpecItem
                    icon={<BedDouble size={18} strokeWidth={1.5} />}
                    value={activeHouse.bedrooms}
                    label="Bed"
                  />
                  <SpecItem
                    icon={<Bath size={18} strokeWidth={1.5} />}
                    value={activeHouse.bathrooms}
                    label="Bath"
                  />
                  <SpecItem
                    icon={<Car size={18} strokeWidth={1.5} />}
                    value={activeHouse.parking}
                    label="Park"
                  />
                </div>
                <div
                  className="h-px w-full mb-4"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <div className="grid grid-cols-2 gap-4">
                  <SpecItem
                    icon={<Layers size={18} strokeWidth={1.5} />}
                    value={activeHouse.floor}
                    label="Floor"
                  />
                  <SpecItem
                    icon={<Maximize size={18} strokeWidth={1.5} />}
                    value={activeHouse.areaSquareMeters}
                    label="sq.m."
                  />
                </div>
              </div>

              <a
                href="#contact"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="mt-5 block text-center px-5 py-3 bg-ci-accent text-ci-white
                           text-[10px] tracking-[0.2em] uppercase rounded-lg
                           hover:bg-ci-copper transition-colors duration-300"
              >
                Request Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HousePlanSectionDark;
