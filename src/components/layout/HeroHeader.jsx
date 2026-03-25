"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Location", href: "#location" },
  { label: "Facilities", href: "#facilities" },
  { label: "Residences", href: "#residences" },
  { label: "Contact", href: "#contact" },
];

function HeroHeader() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyNav(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-20% 0px -20% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu when sticky nav hides
  useEffect(() => {
    if (!showStickyNav) setIsMenuOpen(false);
  }, [showStickyNav]);

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ═══════════════════════════════════════════
          MAIN HEADER — transparent overlay on banner
          ═══════════════════════════════════════════ */}
      <header
        ref={headerRef}
        className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-gray-900/50 to-transparent"
      >
        <div className="flex items-center justify-between px-5 py-5 md:px-10">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer group"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 origin-center
                ${isMenuOpen ? "rotate-45 translate-y-[7px] bg-[#FAFAF8]" : "bg-[#FAFAF8] group-hover:w-5"}`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#FAFAF8] transition-all duration-300
                ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100"}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 origin-center
                ${isMenuOpen ? "-rotate-45 -translate-y-[7px] bg-[#FAFAF8]" : "bg-[#FAFAF8] group-hover:w-4"}`}
            />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-xl font-extrabold tracking-tight text-[#FAFAF8]"
            >
              LOFT<span className="text-[#C4663A]">HAUS</span>
            </span>
          </div>

          {/* Search Icon */}
          <button
            aria-label="Search"
            className="flex items-center justify-center w-10 h-10 cursor-pointer
                       text-[#FAFAF8] hover:text-[#B87333] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out
            ${isMenuOpen && !showStickyNav ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav
            className="px-5 pb-8 pt-4"
            style={{
              background: "rgba(13,13,13,0.85)",
              backdropFilter: "blur(12px)",
            }}
          >
            <ul className="flex flex-col gap-5">
              {/* {["Home", "Residences", "Gallery", "Location", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-[#FAFAF8] text-[11px] tracking-[0.2em] uppercase
                                 hover:text-[#C4663A] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )} */}
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className={`text-[#FAFAF8] text-[11px] tracking-[0.2em] uppercase
                                 hover:text-[#C4663A] transition-colors duration-300`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#C4663A] to-[#C9A96E]" />
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          STICKY SUB-HEADER — light/cream CI style
          appears when main header scrolls out of view
          ═══════════════════════════════════════════ */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${showStickyNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
        style={{
          background: "rgba(250,250,248,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-lg font-extrabold tracking-tight text-[#1A1A1A]"
            >
              LOFT<span className="text-[#C4663A]">HAUS</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300
    ${
      activeSection === link.href.replace("#", "")
        ? "text-[#C4663A]"
        : "text-[#6B7280] hover:text-[#C4663A]"
    }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[4px] cursor-pointer group"
          >
            <span
              className={`block h-[1.5px] transition-all duration-300 origin-center
                ${isMenuOpen ? "w-5 rotate-45 translate-y-[5.5px] bg-[#C4663A]" : "w-5 bg-[#1A1A1A] group-hover:bg-[#C4663A]"}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300
                ${isMenuOpen ? "opacity-0 scale-0" : "bg-[#1A1A1A] group-hover:bg-[#C4663A]"}`}
            />
            <span
              className={`block h-[1.5px] transition-all duration-300 origin-center
                ${isMenuOpen ? "w-5 -rotate-45 -translate-y-[5.5px] bg-[#C4663A]" : "w-3.5 bg-[#1A1A1A] group-hover:bg-[#C4663A]"}`}
            />
          </button>
        </div>

        {/* Sticky Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out
            ${isMenuOpen && showStickyNav ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
          style={{ background: "#F5F0EB" }}
        >
          <nav className="px-5 pb-5 pt-2">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-300
    ${
      activeSection === link.href.replace("#", "")
        ? "text-[#C4663A]"
        : "text-[#6B7280] hover:text-[#C4663A]"
    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#C4663A] to-[#C9A96E]" />
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeroHeader;
