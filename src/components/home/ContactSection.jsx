"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data/home/contactData";

/* ───────────────────────────── Component ───────────────────────────── */

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative py-16 bg-ci-white" id="contact">
      {/* Top divider */}
      <div
        className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: "rgba(0,0,0,0.06)" }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* ─── Header ─── */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-8 h-px bg-ci-accent" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] tracking-[0.35em] uppercase text-ci-accent"
            >
              Contact
            </p>
            <span className="block w-8 h-px bg-ci-accent" />
          </div>

          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-ci-charcoal mb-3"
          >
            Get in Touch
          </h2>

          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-ci-steel max-w-lg mx-auto text-base md:text-lg font-light italic"
          >
            Interested in LOFTHAUS? We'd love to hear from you.
          </p>
        </div>

        {/* ─── Dark Gradient Info Card ─── */}
        <div
          className="rounded-2xl px-8 py-10 md:px-12 md:py-12 mb-10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-ci-charcoal) 0%, var(--color-ci-slate) 100%)",
          }}
        >
          {/* Subtle grid texture */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.04,
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-2xl md:text-3xl font-bold text-ci-white tracking-tight leading-snug mb-3"
              >
                Schedule a Visit
              </p>
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-ci-concrete text-base italic font-light leading-relaxed mb-8"
              >
                Experience LOFTHAUS in person. Our team is ready to show you
                around and answer all your questions.
              </p>

              {/* Contact items */}
              <div className="space-y-5">
                {CONTACT_INFO.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4"
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center
                                 text-ci-accent group-hover:text-ci-white
                                 transition-colors duration-300"
                      style={{
                        background: "rgba(196,102,58,0.12)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-[9px] tracking-[0.25em] uppercase text-ci-steel mb-0.5"
                      >
                        {item.label}
                      </p>
                      <p
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-ci-sand text-sm group-hover:text-ci-white
                                   transition-colors duration-300"
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Quote + accent */}
            <div className="hidden md:flex flex-col items-end justify-end text-right">
              <div className="w-16 h-px bg-gradient-to-l from-ci-accent to-ci-gold mb-5" />
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-ci-steel text-lg italic leading-relaxed mb-2"
              >
                "Form follows lifestyle."
              </p>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[10px] tracking-[0.25em] uppercase text-ci-concrete"
              >
                LOFTHAUS Design Philosophy
              </p>

              <div className="mt-10">
                <span
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-4xl font-extrabold tracking-tight"
                >
                  <span className="text-ci-white/20">LOFT</span>
                  <span className="text-ci-accent/30">HAUS</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Contact Form ─── */}
        <div
          className="rounded-2xl px-6 py-8 md:px-10 md:py-10 bg-ci-cream"
          style={{
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <p
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-lg font-bold text-ci-charcoal mb-1"
            >
              Send us a message
            </p>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-ci-steel text-sm mb-8"
            >
              Fill in the form below and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="block text-[10px] tracking-[0.2em] uppercase text-ci-steel mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                  className="w-full px-4 py-3 rounded-lg text-sm text-ci-charcoal bg-ci-white
                             placeholder-ci-concrete outline-none
                             transition-all duration-300
                             focus:ring-2 focus:ring-ci-accent/20"
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--color-ci-accent)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(0,0,0,0.08)";
                  }}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="block text-[10px] tracking-[0.2em] uppercase text-ci-steel mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                    className="w-full px-4 py-3 rounded-lg text-sm text-ci-charcoal bg-ci-white
                               placeholder-ci-concrete outline-none transition-all duration-300
                               focus:ring-2 focus:ring-ci-accent/20"
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-ci-accent)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(0,0,0,0.08)";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="block text-[10px] tracking-[0.2em] uppercase text-ci-steel mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0XX-XXX-XXXX"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                    className="w-full px-4 py-3 rounded-lg text-sm text-ci-charcoal bg-ci-white
                               placeholder-ci-concrete outline-none transition-all duration-300
                               focus:ring-2 focus:ring-ci-accent/20"
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-ci-accent)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(0,0,0,0.08)";
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="block text-[10px] tracking-[0.2em] uppercase text-ci-steel mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us what you're looking for..."
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                  className="w-full px-4 py-3 rounded-lg text-sm text-ci-charcoal bg-ci-white
                             placeholder-ci-concrete outline-none resize-none
                             transition-all duration-300
                             focus:ring-2 focus:ring-ci-accent/20"
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--color-ci-accent)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(0,0,0,0.08)";
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5
                           text-[11px] tracking-[0.2em] uppercase rounded-lg
                           transition-all duration-300 cursor-pointer
                  ${
                    submitted
                      ? "bg-ci-moss text-ci-white"
                      : "bg-ci-accent text-ci-white hover:bg-ci-copper"
                  }
                  ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
              >
                {submitted ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Sent
                  </>
                ) : isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={14} strokeWidth={1.5} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
