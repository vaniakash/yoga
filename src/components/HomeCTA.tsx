"use client";

import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Play,
  Flower2,
  Users,
  Mountain,
  Sparkles,
  MapPin,
  Compass
} from "lucide-react";

interface HomeCTAProps {
  onOpenVideo?: () => void;
}

export function HomeCTA({ onOpenVideo }: HomeCTAProps) {
  const locale = useLocale();
  const isHi = locale === "hi";

  const t = useTranslations("HomeCTA");

  const trustFeatures = [
    {
      icon: Flower2,
      title: t("f1_title"),
      sub: t("f1_sub"),
    },
    {
      icon: Users,
      title: t("f2_title"),
      sub: t("f2_sub"),
    },
    {
      icon: Mountain,
      title: t("f3_title"),
      sub: t("f3_sub"),
    },
    {
      icon: Sparkles,
      title: t("f4_title"),
      sub: t("f4_sub"),
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-margin max-w-7xl mx-auto scroll-mt-20">
      
      {/* ========================================================================= */}
      {/* 1. HORIZONTAL BANNER (CTAIMAGE + TERRACOTTA CONTENT) */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#234638] border border-[#789B80]/30 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left: Panoramic Himalayan Sunlight Artwork Image (5 cols) */}
          <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-full min-h-[220px] lg:min-h-[280px] overflow-hidden">
            <Image
              src="/ctaimage.webp"
              alt="Himalayan dawn sunlight at Shridhyan Ashram"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover object-center"
            />
            {/* Scrim blending into the terracotta card */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#234638]/40 to-[#234638] pointer-events-none" />
          </div>

          {/* Right: Text Content & Action Buttons (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Text Area (8 cols on md) */}
              <div className="md:col-span-8 text-white">
                {/* Dash Label */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-[1px] bg-[#789B80]/80"></span>
                  <span className={`text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#DADDD3]/90 font-semibold ${isHi ? 'font-devanagari' : ''}`}>
                    {t("badge")}
                  </span>
                  <span className="w-4 h-[1px] bg-[#789B80]/80"></span>
                </div>

                {/* Main Title */}
                <h3 className={`text-xl sm:text-2xl lg:text-[1.85rem] font-serif font-bold text-white leading-tight mb-2.5 ${isHi ? 'font-devanagari' : ''}`}>
                  {t("title")}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#E8EBDD]/85 leading-relaxed font-sans max-w-md">
                  {t("description")}
                </p>
              </div>

              {/* Action Buttons (4 cols on md, with vertical divider) */}
              <div className="md:col-span-4 flex flex-col gap-3 md:pl-6 md:border-l md:border-white/20">
                {/* Explore All Courses Button */}
                <Link
                  href="/#courses"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#789B80] to-[#5A7A62] hover:from-[#5A7A62] hover:to-[#789B80] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-[#789B80]/25 transition-all active:scale-95 group text-center"
                >
                  <span className={isHi ? 'font-devanagari' : ''}>{t("btn_courses")}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Watch Ashram Video Button */}
                <button
                  type="button"
                  onClick={onOpenVideo}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs active:scale-95 cursor-pointer text-center"
                >
                  <Play className="w-3.5 h-3.5 text-[#789B80] fill-current" />
                  <span className={isHi ? 'font-devanagari' : ''}>{t("btn_video")}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FOUR TRUST BADGES STRIP (BELOW BANNER) */}
      {/* ========================================================================= */}
      <div className="mt-5 bg-white border border-[#DADDD3] rounded-2xl p-4 sm:p-5 shadow-xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-[#DADDD3]">
          {trustFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-2 sm:px-4 py-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#789B80]/15 text-[#789B80] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold text-[#234638] leading-tight ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                    {feat.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#3D5447] font-sans mt-0.5 leading-snug">
                    {feat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

