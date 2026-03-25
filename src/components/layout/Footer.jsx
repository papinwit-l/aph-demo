"use client";

import React from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Location", href: "#location" },
  { label: "Facilities", href: "#facilities" },
  { label: "Residences", href: "#residences" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer style={{ background: "#FAFAF8" }}>
      {/* Top divider — copper gradient */}
      <div className="px-6 md:px-10">
        <div
          className="h-px max-w-5xl mx-auto"
          style={{
            background:
              "linear-gradient(90deg, transparent, #B87333, transparent)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* ── Logo + Tagline ── */}
          <div>
            <Link href="/">
              <span
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-xl font-extrabold tracking-tight text-[#1A1A1A]"
              >
                LOFT<span className="text-[#C4663A]">HAUS</span>
              </span>
            </Link>
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[#6B7280] text-sm italic mt-3 leading-relaxed"
            >
              Modern Townhome Living
            </p>
            <div className="w-10 h-px bg-gradient-to-r from-[#C4663A] to-[#C9A96E] mt-4" />
          </div>

          {/* ── Navigation ── */}
          <div>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#C4663A] mb-4"
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[#6B7280] text-sm hover:text-[#C4663A]
                             transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#C4663A] mb-4"
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:02XXXXXXX"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[#6B7280] text-sm hover:text-[#C4663A]
                           transition-colors duration-300 w-fit"
              >
                02-XXX-XXXX
              </a>
              <a
                href="mailto:info@lofthaus.co.th"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[#6B7280] text-sm hover:text-[#C4663A]
                           transition-colors duration-300 w-fit"
              >
                info@lofthaus.co.th
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-6 md:px-10">
        <div
          className="max-w-5xl mx-auto h-px"
          style={{ background: "rgba(0,0,0,0.06)" }}
        />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[#B8B0A8] text-[11px] tracking-wider"
        >
          © {new Date().getFullYear()} LOFTHAUS. All rights reserved.
        </p>
        <p
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-[#B8B0A8] text-xs italic"
        >
          Smart design. Open space. Modern living.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
