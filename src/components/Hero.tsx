"use client";

import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
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
      className="relative overflow-hidden bg-gradient-to-b from-[#f8f5ee] via-[#faf7f0] to-[#fcfbf7] pt-4 pb-12 sm:pt-6 sm:pb-16 border-b border-[#e8e2d4]"
      id="hero"
    >
      {/* Soft Ambient Golden Dawn Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[350px] bg-gradient-to-b from-amber-400/15 via-orange-300/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-margin">
        
        {/* ========================================================================= */}
        {/* 1. TOP PANORAMIC ARTWORK BANNER WITH EMBEDDED EDITORIAL OVERLAY */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-7xl">
          {/* Subtle Golden Glow behind the frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 bg-gradient-to-r from-amber-500/15 via-orange-400/10 to-amber-600/15 rounded-3xl blur-2xl opacity-60 -z-10"
          />

          {/* Panoramic Image Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e3dccf] bg-stone-900 shadow-xl sm:shadow-2xl">
            <div className="relative w-full aspect-[16/11] sm:aspect-[21/9] min-h-[480px] sm:min-h-[520px] max-h-[640px] overflow-hidden">
              <Image
                src="/images/shridhyan_hero.webp"
                alt="श्रीध्यान आश्रम — हिमालय, उत्तरकाशी"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient Scrims: Left-heavy for text legibility, right-open for peaks & temple */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/45 to-transparent dark:from-black/90 dark:via-black/60 dark:to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />

              {/* ========================================================= */}
              {/* EDITORIAL TEXT CONTENT OVERLAY (LEFT-ALIGNED OVER BANNER) */}
              {/* ========================================================= */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-6 sm:p-10 md:p-12 lg:p-14 max-w-xl lg:max-w-2xl">
                
                {/* 1. Location Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-white/90 dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-[11px] sm:text-xs font-semibold shadow-xs mb-3 backdrop-blur-xs">
                  <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  <span className={isHi ? "font-devanagari" : ""}>{tHero("banner_badge")}</span>
                </div>

                {/* 2. Sacred Knot / Lotus Emblem */}
                <div className="mb-3">
                  <img
                    src="/images/two-removebg-preview.svg"
                    alt="Shridhyan Sacred Emblem"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-xs"
                  />
                </div>

                {/* 3. Main Hero Heading */}
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#1c2e24] dark:text-white leading-[1.14] tracking-tight mb-2.5 sm:mb-3 drop-shadow-xs ${
                    isHi ? "font-devanagari" : ""
                  }`}
                >
                  <span className="block">{tHero("banner_title_1")}</span>
                  <span className="block text-[#c2410c] dark:text-amber-400 mt-1">
                    {tHero("banner_title_2")}
                  </span>
                </h2>

                {/* 4. Spiritual Keywords Row */}
                <p
                  className={`text-xs sm:text-sm font-semibold text-[#1c2e24]/90 dark:text-stone-200 tracking-[0.12em] sm:tracking-[0.16em] uppercase mb-4 sm:mb-5 drop-shadow-xs ${
                    isHi ? "font-devanagari" : ""
                  }`}
                >
                  {tHero("banner_keywords")}
                </p>

                {/* 5. Left Saffron Highlight Quote Block */}
                <div className="border-l-2 border-[#c2410c] dark:border-amber-400 pl-3.5 sm:pl-4 py-0.5 mb-5 sm:mb-6 max-w-md sm:max-w-lg">
                  <p
                    className={`text-xs sm:text-sm text-stone-800 dark:text-stone-300 leading-relaxed font-sans font-medium drop-shadow-xs ${
                      isHi ? "font-devanagari" : ""
                    }`}
                  >
                    {tHero("banner_desc")}
                  </p>
                </div>

                {/* 6. Gold Pill CTA Button: आश्रम के बारे में जानें → */}
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#c2410c] hover:bg-[#a63408] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-orange-500/25 transition-all duration-200 group active:scale-95"
                >
                  <span className={isHi ? "font-devanagari" : ""}>{tHero("banner_btn")}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. GRAND SHRIDHYAN ASHRAM TITLE & CALL TO ACTIONS (BELOW BANNER) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto pt-10 sm:pt-14 pb-2 sm:pb-4">
          
          {/* Small Dot Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            <span className="text-amber-600 font-bold">•</span>
            <span className={isHi ? "font-devanagari" : ""}>{tHero("label")}</span>
            <span className="text-amber-600 font-bold">•</span>
          </div>

          {/* Main Heading (H1) */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-[#092217] tracking-tight leading-[1.1] mb-2 sm:mb-2.5 ${
              isHi ? "font-devanagari" : ""
            }`}
          >
            {tHero("heading")}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xs sm:text-sm md:text-base text-stone-600 font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase mb-6 sm:mb-8 ${
              isHi ? "font-devanagari" : ""
            }`}
          >
            {tHero("subtitle")}
          </p>

          {/* Two Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
            {/* Primary Button */}
            <a
              href="#courses"
              onClick={(e) => handleScroll(e, "courses")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#092217] hover:bg-[#123624] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span className={isHi ? "font-devanagari" : ""}>{tHero("btn_courses")}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300 transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Button */}
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white hover:bg-[#f6f2e8] text-[#092217] text-xs sm:text-sm font-semibold border border-[#d6cdb9] hover:border-amber-600/40 shadow-xs hover:shadow-sm transition-all duration-200 group"
            >
              <span className={isHi ? "font-devanagari" : ""}>{tHero("btn_about")}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-700 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
