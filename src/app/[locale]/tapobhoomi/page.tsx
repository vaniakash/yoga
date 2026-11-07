"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { AboutSection } from '@/components/AboutSection';
import {
  MapPin,
  Sparkles,
  Mountain,
  Compass,
  ArrowRight,
  Wind,
  Flower2,
  TreePine,
  Sun,
  Eye
} from 'lucide-react';

export default function TapobhoomiPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tTap = useTranslations('Tapobhoomi');
  const tSil = useTranslations('Silence');
  const tGal = useTranslations('Gallery');
  const tFam = useTranslations('SpiritualFamily');

  return (
    <div className="bg-[#fcfbf7] text-[#1c2e24] flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* 1. PAGE HERO / SANCTUM HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f3ea] via-[#faf7f0] to-[#fcfbf7] pt-14 pb-20 border-b border-[#e8e2d4]">
        {/* Soft Ambient Warm Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-amber-400/15 via-orange-300/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-margin text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>{tTap('label')}</span>
          </div>

          {/* Main Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {tTap('title')}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed mb-8">
            {tTap('description')}
          </p>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200 shadow-xs transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "आश्रम दर्शन" : isJa ? "修道院の理念" : "Ashram Philosophy"}</span>
            </a>
            <a
              href="#environment"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200 shadow-xs transition-colors"
            >
              <TreePine className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "तपोभूमि परिवेश" : isJa ? "聖なる環境" : "Sacred Land"}</span>
            </a>
            <a
              href="#mauna"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200 shadow-xs transition-colors"
            >
              <Wind className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "मौन साधना" : isJa ? "沈黙の行" : "Mauna & Silence"}</span>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200 shadow-xs transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "चित्रावली" : isJa ? "ギャラリー" : "Gallery"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SACRED ASHRAM PHILOSOPHY */}
      <AboutSection />

      {/* 3. TAPOBHOOMI ENVIRONMENT & NATURE */}
      <section className="py-24 px-6 md:px-margin max-w-7xl mx-auto scroll-mt-20" id="environment">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
            <span className={isHi ? 'font-devanagari' : ''}>{tTap('label')}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {tTap('title')}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {tTap('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#faf7f0] border border-[#e8e2d4] hover:border-amber-400/50 rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mountain className="w-6 h-6" />
              </div>
              <span className={`text-xs text-amber-800 font-semibold tracking-wider block mb-1 uppercase ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card1_label')}
              </span>
              <h3 className={`text-xl sm:text-2xl font-serif font-bold text-[#092217] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card1_title')}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                {tTap('card1_desc')}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-semibold text-amber-800">
              <Sun className="w-4 h-4 text-amber-600" />
              <span>{tTap('card1_footer')}</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#faf7f0] border border-[#e8e2d4] hover:border-amber-400/50 rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wind className="w-6 h-6" />
              </div>
              <span className={`text-xs text-amber-800 font-semibold tracking-wider block mb-1 uppercase ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card2_label')}
              </span>
              <h3 className={`text-xl sm:text-2xl font-serif font-bold text-[#092217] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card2_title')}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                {tTap('card2_desc')}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-semibold text-amber-800">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{tTap('card2_footer')}</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#faf7f0] border border-[#e8e2d4] hover:border-amber-400/50 rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TreePine className="w-6 h-6" />
              </div>
              <span className={`text-xs text-amber-800 font-semibold tracking-wider block mb-1 uppercase ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card3_label')}
              </span>
              <h3 className={`text-xl sm:text-2xl font-serif font-bold text-[#092217] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card3_title')}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                {tTap('card3_desc')}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs font-semibold text-amber-800">
              <Flower2 className="w-4 h-4 text-amber-600" />
              <span>{tTap('card3_footer')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAUNA / SILENCE */}
      <section className="bg-[#f4efe4] text-[#1c2e24] py-20 border-y border-[#e8e2d4] relative scroll-mt-20" id="mauna">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className={`text-amber-800 text-xs tracking-widest block mb-4 uppercase font-semibold ${isHi ? 'font-devanagari' : ''}`}>
            {tSil('label')}
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-[#092217] mb-6 tracking-wide leading-tight ${isHi ? 'font-devanagari' : 'font-serif'}`}>
            {tSil('title')}
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
            {tSil('description')}
          </p>
          <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-amber-900 text-sm font-medium">
            <span className="px-3.5 py-1 rounded-full bg-white/70 border border-amber-300/40 shadow-xs">{tSil('s1')}</span>
            <span>•</span>
            <span className="px-3.5 py-1 rounded-full bg-white/70 border border-amber-300/40 shadow-xs">{tSil('s2')}</span>
            <span>•</span>
            <span className="px-3.5 py-1 rounded-full bg-white/70 border border-amber-300/40 shadow-xs">{tSil('s3')}</span>
          </div>
        </div>
      </section>

      {/* 5. GALLERY & ASHRAM DARSHAN */}
      <section className="py-24 bg-white border-b border-[#e8e2d4] scroll-mt-20" id="gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                <span className={isHi ? 'font-devanagari' : ''}>{tGal('label')}</span>
              </div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] ${isHi ? 'font-devanagari' : ''}`}>
                {tGal('title')}
              </h2>
            </div>
            <p className="text-stone-600 text-sm sm:text-base max-w-md mt-4 md:mt-0 font-sans leading-relaxed">
              {tGal('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large Feature Image */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl h-80 md:h-[450px] shadow-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Golden dawn over misty Himalayan valley in Uttarkashi"
                src="/images/himalaya_misty_peaks.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white max-w-md">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1 block">
                  {tGal('img1_label')}
                </span>
                <h4 className={`text-xl sm:text-2xl font-serif font-bold ${isHi ? 'font-devanagari' : ''}`}>
                  {tGal('img1_title')}
                </h4>
              </div>
            </div>

            {/* Right Stack Images */}
            <div className="md:col-span-4 flex flex-col gap-5">
              <div className="group relative overflow-hidden rounded-2xl h-56 md:h-[215px] shadow-sm">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Traditional sacred Vedic yajnashala sacrificial fire pavilion"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF0_RyvZM0TFhPyLMAZYADJ8mvLHmwLGTTvkIti29X_mc1GGvBOuTDMrVDM7KcAZL77jwaxIHmSwSLQMSYzWxDhQjn-c39171cCAA--plk41MhU649Jl1SysSlcqQtJgtHG_XAczWI-SD0MY80FR2sZi0dcs78reMqqYpdz3oaHvPaCLnyqoC84odzTM14EWn0bMhRh1OpY7XW-tZYd6wjXg4tV-U-NvtaiJgVRubjJaAC-7UCFIqP_Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className={`text-sm sm:text-base font-serif font-semibold ${isHi ? 'font-devanagari' : ''}`}>
                    {tGal('img2_title')}
                  </h5>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl h-56 md:h-[215px] shadow-sm">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Serene stone courtyard in Himalayan ashram setting"
                  src="/images/ashram_courtyard.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className={`text-sm sm:text-base font-serif font-semibold ${isHi ? 'font-devanagari' : ''}`}>
                    {tGal('img3_title')}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPIRITUAL FAMILY INVITATION CTA */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f0] to-[#f4efe4] text-center border-b border-[#e8e2d4]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-[#092217] mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {tFam('title')}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
            {tFam('description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#092217] hover:bg-[#143a28] text-white px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-md transition-all duration-200 group"
            >
              <span className={isHi ? 'font-devanagari' : ''}>{tFam('cta')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/guru-parampara"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#f6f2e8] text-stone-900 px-6 py-3.5 rounded-xl font-semibold text-sm border border-stone-300 transition-colors"
            >
              <span>{isHi ? "गुरु परंपरा जानें" : isJa ? "師資相承の系譜" : "Learn Guru Lineage"}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

