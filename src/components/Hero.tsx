"use client";

import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, MapPin } from "lucide-react";

interface HeroProps {
  onOpenMasterclass?: () => void;
}

export function Hero({ onOpenMasterclass }: HeroProps) {
  const locale = useLocale();
  const isHi = locale === "hi";

  const tHero = useTranslations("Hero");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#f8f5ee] via-[#faf7f0] to-[#fcfbf7] pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-[#e8e2d4]"
      id="hero"
    >
      {/* Soft Ambient Golden Dawn Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[350px] bg-gradient-to-b from-amber-400/15 via-orange-300/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-margin">
        {/* Top Text Content: Compact, Elegant & Reverent */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-medium tracking-[0.2em] uppercase mb-2 sm:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            <span className={isHi ? "font-devanagari" : ""}>{tHero("label")}</span>
          </div>

          {/* Main Heading (H1) */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-bold text-[#092217] tracking-tight leading-[1.1] mb-2 sm:mb-2.5 ${
              isHi ? "font-devanagari" : ""
            }`}
          >
            {tHero("heading")}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xs sm:text-sm md:text-base text-amber-900/80 font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-5 ${
              isHi ? "font-devanagari" : ""
            }`}
          >
            {tHero("subtitle")}
          </p>

          {/* Top Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-8 sm:mb-10 w-full max-w-md mx-auto sm:max-w-none">
            {/* Primary Button */}
            <a
              href="#courses"
              onClick={(e) => handleScroll(e, "courses")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-[#092217] hover:bg-[#123624] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span className={isHi ? "font-devanagari" : ""}>{tHero("btn_courses")}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300 transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Button */}
            <a
              href="#guide"
              onClick={(e) => handleScroll(e, "guide")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-[#f6f2e8] text-[#092217] text-xs sm:text-sm font-semibold border border-[#d6cdb9] hover:border-amber-600/40 shadow-xs hover:shadow-sm transition-all duration-200 group"
            >
              <span className={isHi ? "font-devanagari" : ""}>{tHero("btn_about")}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-700 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HIMALAYAN SANCTUARY ARTWORK BANNER WITH EMBEDDED EDITORIAL OVERLAY */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-6xl">
          {/* Subtle Golden Glow behind the frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 bg-gradient-to-r from-amber-500/15 via-orange-400/10 to-amber-600/15 rounded-3xl blur-2xl opacity-60 -z-10"
          />

          {/* Panoramic Image Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e3dccf] bg-stone-900 shadow-xl sm:shadow-2xl">
            <div className="relative w-full aspect-[16/11] sm:aspect-[21/9] min-h-[500px] sm:min-h-[520px] max-h-[640px] overflow-hidden">
              <Image
                src="/images/shridhyan_hero.webp"
                alt="श्रीध्यान आश्रम — हिमालय, उत्तरकाशी"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient Scrims: Left-heavy for text legibility, right-open for peaks & temple */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 sm:via-black/45 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 z-10 pointer-events-none" />

              {/* ========================================================= */}
              {/* EDITORIAL TEXT CONTENT OVERLAY (LEFT-ALIGNED OVER BANNER) */}
              {/* ========================================================= */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-6 sm:p-10 md:p-12 lg:p-14 max-w-xl lg:max-w-2xl">
                
                {/* 1. Location Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white text-xs font-medium mb-3 sm:mb-4 shadow-sm select-none">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className={isHi ? "font-devanagari" : ""}>{tHero("banner_badge")}</span>
                </div>

                {/* 2. Sacred Golden Lotus Emblem */}
                <div className="text-amber-400 mb-2 sm:mb-3 drop-shadow-md">
                  <svg
                    className="w-9 h-9 sm:w-11 sm:h-11"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {/* Sacred Lotus Petals */}
                    <path
                      d="M24 6 C24 16, 18 24, 24 38 C30 24, 24 16, 24 6 Z"
                      fill="rgba(245, 158, 11, 0.2)"
                    />
                    <path
                      d="M24 18 C18 22, 9 27, 12 36 C18 36, 22 30, 24 26"
                      fill="rgba(245, 158, 11, 0.12)"
                    />
                    <path
                      d="M24 18 C30 22, 39 27, 36 36 C30 36, 26 30, 24 26"
                      fill="rgba(245, 158, 11, 0.12)"
                    />
                    <path d="M24 26 C15 28, 4 33, 8 40 C16 41, 21 34, 24 32" />
                    <path d="M24 26 C33 28, 44 33, 40 40 C32 41, 27 34, 24 32" />
                    <path d="M16 42 C20 44, 28 44, 32 42" strokeWidth="1.8" />
                  </svg>
                </div>

                {/* 3. Main Heading: हिमालय की गोद में / आत्मिक शांति की ओर */}
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-serif font-bold text-white tracking-tight leading-[1.18] mb-2.5 sm:mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] ${
                    isHi ? "font-devanagari" : ""
                  }`}
                >
                  <span>{tHero("banner_title_1")}</span>
                  <br />
                  <span>{tHero("banner_title_2")}</span>
                </h2>

                {/* 4. Sub-keywords line: साधना • ध्यान • योग • सत्संग • आत्मचिंतन */}
                <p
                  className={`text-xs sm:text-sm font-medium text-amber-200/95 tracking-[0.14em] sm:tracking-[0.18em] uppercase mb-4 sm:mb-5 drop-shadow-sm ${
                    isHi ? "font-devanagari" : ""
                  }`}
                >
                  {tHero("banner_keywords")}
                </p>

                {/* 5. Left Saffron Highlight Quote Block */}
                <div className="border-l-2 border-amber-500 pl-3.5 sm:pl-4 py-0.5 mb-5 sm:mb-6">
                  <p
                    className={`text-xs sm:text-sm text-stone-200/90 leading-relaxed font-sans max-w-md sm:max-w-lg drop-shadow-sm ${
                      isHi ? "font-devanagari" : ""
                    }`}
                  >
                    {tHero("banner_desc")}
                  </p>
                </div>

                {/* 6. Gold Pill CTA Button: आश्रम के बारे में जानें → */}
                <a
                  href="#guide"
                  onClick={(e) => handleScroll(e, "guide")}
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-lg hover:shadow-amber-500/30 transition-all duration-200 group active:scale-95"
                >
                  <span className={isHi ? "font-devanagari" : ""}>{tHero("banner_btn")}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
