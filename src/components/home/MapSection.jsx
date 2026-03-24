"use client";

import React, { useState } from "react";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4592.378174229905!2d100.63236257573415!3d13.987692691787103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7f7d696d622f%3A0xaccfcbfba4adc095!2zUGxlbm8gfCDguJ7guKXguLXguYLguJnguYgg4Lif4Li04Lin4LmA4LiI4Lit4Lij4LmMLeC4o-C4seC4h-C4quC4tOC4lQ!5e1!3m2!1sen!2sth!4v1774340454416!5m2!1sen!2sth";

function MapSection() {
  const [isSatellite, setIsSatellite] = useState(false);

  const mapSrc = isSatellite
    ? GOOGLE_MAPS_EMBED_URL + "&maptype=satellite"
    : GOOGLE_MAPS_EMBED_URL;

  return (
    <section
      //   style={{ background: "#FAFAF8" }}
      className="relative py-16 bg-white"
      id="location"
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: "rgba(0,0,0,0.06)" }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* ─── Header ─── */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[#C4663A]" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-[#C4663A]"
            >
              Location
            </p>
            <span className="block w-8 h-px bg-[#C4663A]" />
          </div>

          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-[#1A1A1A] mb-3"
          >
            Find Us
          </h2>

          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[#6B7280] max-w-lg mx-auto text-base md:text-lg font-light italic"
          >
            Perfectly situated for urban convenience with easy access to
            transport, shopping, and lifestyle destinations.
          </p>
        </div>

        {/* ─── Map Container ─── */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            height: 500,
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          }}
        >
          <iframe
            key={isSatellite ? "satellite" : "roadmap"}
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LOFTHAUS Location"
          />

          {/* Map / Satellite Toggle */}
          <div
            className="absolute top-4 right-4 z-10 flex rounded-lg overflow-hidden"
            style={{
              background: "rgba(26,26,26,0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <button
              onClick={() => setIsSatellite(false)}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase cursor-pointer transition-all duration-300
                ${
                  !isSatellite
                    ? "bg-[#C4663A] text-[#FAFAF8]"
                    : "text-[#B8B0A8] hover:text-[#FAFAF8]"
                }`}
            >
              Map
            </button>
            <button
              onClick={() => setIsSatellite(true)}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase cursor-pointer transition-all duration-300
                ${
                  isSatellite
                    ? "bg-[#C4663A] text-[#FAFAF8]"
                    : "text-[#B8B0A8] hover:text-[#FAFAF8]"
                }`}
            >
              Satellite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
