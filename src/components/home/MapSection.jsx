"use client";

import { GOOGLE_MAPS_EMBED_URL } from "@/lib/data/home/locationData";
import React, { useState } from "react";

function MapSection() {
  const [isSatellite, setIsSatellite] = useState(false);

  const mapSrc = isSatellite
    ? GOOGLE_MAPS_EMBED_URL + "&maptype=satellite"
    : GOOGLE_MAPS_EMBED_URL;

  return (
    <section className="relative py-16 bg-ci-white" id="location">
      {/* Top divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: "rgba(0,0,0,0.06)" }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* ─── Header ─── */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-8 h-px bg-ci-accent" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-ci-accent"
            >
              Location
            </p>
            <span className="block w-8 h-px bg-ci-accent" />
          </div>

          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-ci-charcoal mb-3"
          >
            Find Us
          </h2>

          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-ci-steel max-w-lg mx-auto text-base md:text-lg font-light italic"
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
                    ? "bg-ci-accent text-ci-white"
                    : "text-ci-concrete hover:text-ci-white"
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
                    ? "bg-ci-accent text-ci-white"
                    : "text-ci-concrete hover:text-ci-white"
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
