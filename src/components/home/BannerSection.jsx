"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";

const MOCK_BANNER = [
  {
    id: 1,
    title: "banner-01",
    src: "/images/banner/demo-banner-01.png",
  },
  {
    id: 2,
    title: "banner-02",
    src: "/images/banner/demo-banner-02.png",
  },
  {
    id: 3,
    title: "banner-03",
    src: "/images/banner/demo-banner-03.png",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

function BannerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const total = MOCK_BANNER.length;

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % total);
  }, [currentIndex, total, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + total) % total);
  }, [currentIndex, total, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{ aspectRatio: "16 / 6" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {MOCK_BANNER.map((image) => (
          <div key={image.id} className="relative w-full h-full flex-shrink-0">
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Prev Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10
                   flex items-center justify-center w-10 h-10 rounded-full
                   border border-[#FAFAF8]/20 text-[#FAFAF8]
                   hover:border-[#C4663A] hover:text-[#C4663A]
                   transition-colors duration-300 cursor-pointer"
        style={{
          backdropFilter: "blur(4px)",
          background: "rgba(13,13,13,0.3)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10
                   flex items-center justify-center w-10 h-10 rounded-full
                   border border-[#FAFAF8]/20 text-[#FAFAF8]
                   hover:border-[#C4663A] hover:text-[#C4663A]
                   transition-colors duration-300 cursor-pointer"
        style={{
          backdropFilter: "blur(4px)",
          background: "rgba(13,13,13,0.3)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {MOCK_BANNER.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 cursor-pointer
              ${
                index === currentIndex
                  ? "w-8 bg-[#C4663A]"
                  : "w-3 bg-[#FAFAF8]/30 hover:bg-[#FAFAF8]/60"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerSection;
