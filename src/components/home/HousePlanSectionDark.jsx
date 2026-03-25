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

/* ───────────────────────────── Data ───────────────────────────── */

const HOUSE_TYPES = [
  {
    id: 1,
    title: "Type Maple",
    type: "Townhome",
    gallery: [
      {
        id: 1,
        title: "Facade",
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        alt: "Facade",
      },
      {
        id: 2,
        title: "1st Floor",
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
        alt: "1st Floor",
      },
      {
        id: 3,
        title: "2nd Floor",
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
        alt: "2nd Floor",
      },
    ],
    description: "5.5-meter frontage, rear extension supported by piles",
    areaSquareMeters: 100,
    floor: 2,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
  },
  {
    id: 2,
    title: "Type Maple Plus",
    type: "Townhome",
    gallery: [
      {
        id: 1,
        title: "Facade",
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        alt: "Facade",
      },
      {
        id: 2,
        title: "1st Floor",
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        alt: "1st Floor",
      },
      {
        id: 3,
        title: "2nd Floor",
        src: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=600&fit=crop",
        alt: "2nd Floor",
      },
    ],
    description:
      "6-meter wide frontage with functional living space and piled rear area",
    areaSquareMeters: 120,
    floor: 2,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
  },
  {
    id: 3,
    title: "Type Oak",
    type: "Semi-Detached House",
    gallery: [
      {
        id: 1,
        title: "Facade",
        src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
        alt: "Facade",
      },
      {
        id: 2,
        title: "1st Floor",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        alt: "1st Floor",
      },
      {
        id: 3,
        title: "2nd Floor",
        src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&fit=crop",
        alt: "2nd Floor",
      },
    ],
    description:
      "Spacious semi-detached home with private garden and pile foundation",
    areaSquareMeters: 135,
    floor: 2,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
  },
  {
    id: 4,
    title: "Type Pine",
    type: "Detached House",
    gallery: [
      {
        id: 1,
        title: "Facade",
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        alt: "Facade",
      },
      {
        id: 2,
        title: "1st Floor",
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        alt: "1st Floor",
      },
      {
        id: 3,
        title: "2nd Floor",
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
        alt: "2nd Floor",
      },
    ],
    description:
      "Modern detached home with large living area and full pile foundation",
    areaSquareMeters: 180,
    floor: 2,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
  },
  {
    id: 5,
    title: "Type Cedar",
    type: "Townhome",
    gallery: [
      {
        id: 1,
        title: "Facade",
        src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
        alt: "Facade",
      },
      {
        id: 2,
        title: "1st Floor",
        src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop",
        alt: "1st Floor",
      },
      {
        id: 3,
        title: "2nd Floor",
        src: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&h=600&fit=crop",
        alt: "2nd Floor",
      },
    ],
    description: "Compact design with efficient layout and 5-meter frontage",
    areaSquareMeters: 95,
    floor: 2,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
  },
];

/* ───────────────────────────── Spec Item ───────────────────────────── */

function SpecItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[#B8B0A8]">{icon}</span>
      <span
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="text-[#FAFAF8] text-lg font-bold leading-none"
      >
        {value}
      </span>
      <span
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[#6B7280] text-[10px] tracking-wider uppercase"
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
      className="relative py-16 overflow-hidden"
      style={{ background: "#0D0D0D" }}
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
            <span className="block w-8 h-px bg-[#C4663A]" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-[#C4663A]"
            >
              Residences
            </p>
            <span className="block w-8 h-px bg-[#C4663A]" />
          </div>

          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-[#FAFAF8] mb-3"
          >
            House Plans
          </h2>

          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[#6B7280] max-w-md mx-auto text-base md:text-lg font-light italic"
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
                  className="text-[#FAFAF8] text-sm font-semibold"
                >
                  {activeHouse.title}
                </p>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[10px] tracking-wider uppercase text-[#B8B0A8]"
                >
                  {activeHouse.type}
                </p>
              </div>
              <ChevronDown
                size={18}
                className={`text-[#C4663A] transition-transform duration-300
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
                            ? "text-[#C4663A]"
                            : "text-[#FAFAF8]"
                        }`}
                      >
                        {house.title}
                      </p>
                      <p
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-[10px] tracking-wider uppercase text-[#B8B0A8]"
                      >
                        {house.type} · {house.areaSquareMeters} sq.m.
                      </p>
                    </div>
                    {activeTypeId === house.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C4663A]" />
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
                className="text-[10px] tracking-[0.15em] uppercase text-[#FAFAF8]"
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
                className="text-[11px] text-[#FAFAF8]"
              >
                {activeImageIndex + 1} <span className="text-[#6B7280]">/</span>{" "}
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
                      ? "ring-2 ring-[#C4663A] ring-offset-2"
                      : "opacity-50 hover:opacity-100"
                  }`}
                style={{
                  aspectRatio: "16 / 10",
                  ringOffsetColor: "#0D0D0D",
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
                    className="text-[8px] tracking-[0.15em] uppercase text-[#FAFAF8]"
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
              className="text-[10px] tracking-[0.3em] uppercase text-[#C4663A] mb-1"
            >
              {activeHouse.type}
            </p>
            <h3
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-xl font-bold text-[#FAFAF8] mb-2"
            >
              {activeHouse.title}
            </h3>
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[#6B7280] text-sm italic leading-relaxed"
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
            className="block text-center px-5 py-3 bg-[#C4663A] text-[#FAFAF8]
                       text-[10px] tracking-[0.2em] uppercase rounded-lg
                       hover:bg-[#B87333] transition-colors duration-300"
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
                    <div className="w-5 h-[2px] bg-[#C4663A] rounded-full mb-2" />
                  )}
                  <p
                    style={{ fontFamily: "'Syne', sans-serif" }}
                    className={`text-sm font-semibold mb-0.5 transition-colors duration-300
                      ${activeTypeId === house.id ? "text-[#FAFAF8]" : "text-[#6B7280]"}`}
                  >
                    {house.title}
                  </p>
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[10px] tracking-wider uppercase text-[#B8B0A8]"
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
                    className="text-[10px] tracking-[0.15em] uppercase text-[#FAFAF8]"
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
                    className="text-[11px] text-[#FAFAF8]"
                  >
                    {activeImageIndex + 1}{" "}
                    <span className="text-[#6B7280]">/</span>{" "}
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
                          ? "ring-2 ring-[#C4663A] ring-offset-2"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    style={{
                      aspectRatio: "16 / 10",
                      ringOffsetColor: "#0D0D0D",
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
                        className="text-[9px] tracking-[0.15em] uppercase text-[#FAFAF8]"
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
                  className="text-[10px] tracking-[0.3em] uppercase text-[#C4663A] mb-2"
                >
                  {activeHouse.type}
                </p>
                <h3
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-xl font-bold text-[#FAFAF8] mb-3"
                >
                  {activeHouse.title}
                </h3>
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-[#6B7280] text-sm italic leading-relaxed"
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
                className="mt-5 block text-center px-5 py-3 bg-[#C4663A] text-[#FAFAF8]
                           text-[10px] tracking-[0.2em] uppercase rounded-lg
                           hover:bg-[#B87333] transition-colors duration-300"
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
