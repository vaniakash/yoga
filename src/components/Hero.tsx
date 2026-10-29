"use client";

import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

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
      className="relative overflow-hidden bg-gradient-to-b from-[#f8f5ee] via-[#faf7f0] to-[#fcfbf7] pt-6 pb-10 sm:pt-8 sm:pb-14 border-b border-[#e8e2d4]"
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

          {/* Only Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-6 sm:mb-8 w-full max-w-md mx-auto sm:max-w-none">
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

        {/* Main Visual Focus: Panoramic Himalayan Sanctuary Artwork */}
        <div className="relative mx-auto max-w-6xl">
          {/* Subtle Golden Glow behind the frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 bg-gradient-to-r from-amber-500/15 via-orange-400/10 to-amber-600/15 rounded-3xl blur-2xl opacity-60 -z-10"
          />

          {/* Panoramic Image Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e3dccf] bg-stone-900 shadow-xl sm:shadow-2xl">
            <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] max-h-[560px] overflow-hidden">
              <Image
                src="/images/shridhyan_hero.webp"
                alt="श्रीध्यान आश्रम — हिमालय, उत्तरकाशी"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1280px"
                className="w-full h-full object-cover object-center"
              />
              {/* Soft Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
