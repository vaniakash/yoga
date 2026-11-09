"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  Camera,
  Mountain,
  Flame,
  TreePine,
  Sun,
  Flower2,
  Clock,
  ArrowRight,
  Heart,
  CalendarDays,
  Mail,
  Compass,
  Eye,
  ShieldCheck
} from 'lucide-react';

export default function AshramGlimpsePage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const t = useTranslations('AshramGlimpse');

  // Planned Visual Archives / Collections
  const collections = [
    {
      title: t('c1_title'),
      desc: t('c1_desc'),
      icon: Flame,
      tag: isHi ? "वैदिक अनुष्ठान" : isJa ? "ヴェーダ儀式" : "Vedic Yajna",
    },
    {
      title: t('c2_title'),
      desc: t('c2_desc'),
      icon: Mountain,
      tag: isHi ? "मौन साधना" : isJa ? "静寂の瞑想" : "Meditation Sanctum",
    },
    {
      title: t('c3_title'),
      desc: t('c3_desc'),
      icon: TreePine,
      tag: isHi ? "पवित्र प्रकृति" : isJa ? "ヒマラヤ自然" : "Sacred Nature",
    },
    {
      title: t('c4_title'),
      desc: t('c4_desc'),
      icon: Sparkles,
      tag: isHi ? "गुरु-सान्निध्य" : isJa ? "グルの祝福" : "Guru Darshan",
    },
    {
      title: t('c5_title'),
      desc: t('c5_desc'),
      icon: Sun,
      tag: isHi ? "दीप आराधना" : isJa ? "夕べの祈り" : "Evening Aarti",
    },
    {
      title: t('c6_title'),
      desc: t('c6_desc'),
      icon: Flower2,
      tag: isHi ? "आश्रम जीवन" : isJa ? "アシュラム生活" : "Daily Rhythm",
    },
  ];

  return (
    <div className="bg-[#fcfbf7] text-[#1c2e24] flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* ========================================================================= */}
      {/* 1. HERO / BANNER HEADER */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f3ea] via-[#faf7f0] to-[#fcfbf7] pt-14 pb-20 border-b border-[#e8e2d4]">
        {/* Soft Ambient Warm Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-amber-400/20 via-orange-300/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-margin text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>{t('label')}</span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. COMING SOON SHOWCASE / CURATION IN PROGRESS CARD */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 px-6 md:px-margin max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#faf7f0] via-white to-[#f5efe2] border-2 border-amber-400/40 p-8 sm:p-12 md:p-16 text-center shadow-xl">
          
          {/* Subtle Golden Glow inside frame */}
          <div
            aria-hidden="true"
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Glowing Icon Emblem */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#6b2a0c] via-amber-700 to-amber-600 text-white flex items-center justify-center shadow-lg border border-amber-300/40">
                <Camera className="w-10 h-10 text-amber-200" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-amber-500 items-center justify-center text-white text-[10px] font-bold">✦</span>
              </span>
            </div>

            {/* In Preparation Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
              <span className={isHi ? 'font-devanagari' : ''}>{t('coming_soon_badge')}</span>
            </span>

            {/* Main Coming Soon Heading */}
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#092217] mb-4 leading-tight ${isHi ? 'font-devanagari' : ''}`}>
              {t('coming_soon_title')}
            </h2>

            {/* Description */}
            <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed font-sans mb-8">
              {t('coming_soon_desc')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#092217] hover:bg-[#143a28] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all group"
              >
                <span>{isHi ? "आश्रम परिचय एवं दर्शन पढ़ें" : isJa ? "アシュラムについて読む" : "Read About Ashram"}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#faf7f0] text-stone-900 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-stone-300 shadow-2xs hover:border-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                <span>{t('btn_contact')}</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PLANNED VISUAL COLLECTIONS (PREVIEW GRID) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#faf7f0] border-y border-[#e8e2d4]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <Eye className="w-3.5 h-3.5 text-amber-600" />
              <span className={isHi ? 'font-devanagari' : ''}>{t('cat_badge')}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-[#092217] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
              {t('cat_title')}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-sans">
              {isHi
                ? "शीघ्र ही इन विभिन्न खंडों में आश्रम के पावन छायाचित्र यहाँ उपलब्ध होंगे:"
                : isJa
                ? "まもなく以下のテーマで聖なる写真コレクションが公開されます："
                : "The following visual collections are being curated for publication:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e8e2d4] hover:border-amber-400/60 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-300/30">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-serif font-bold text-[#092217] mb-2 leading-snug ${isHi ? 'font-devanagari' : ''}`}>
                      {item.title}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Placeholder Visual Frame */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-amber-800 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{isHi ? "तैयारी जारी है" : isJa ? "写真準備中" : "Archive in Progress"}</span>
                    </span>
                    <span className="text-[11px] text-stone-400 uppercase tracking-widest font-mono">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SACRED INVITATION & VISIT IN PERSON */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Heart className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>{t('visit_badge')}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {t('visit_title')}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            {t('visit_desc')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#092217] hover:bg-[#143a28] text-white px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-md transition-all group"
            >
              <Mail className="w-4 h-4 text-amber-300" />
              <span>{t('btn_contact')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#faf7f0] text-stone-900 px-6 py-3.5 rounded-xl font-semibold text-sm border border-stone-300 shadow-2xs hover:border-amber-400 transition-colors"
            >
              <CalendarDays className="w-4 h-4 text-amber-600" />
              <span>{t('btn_events')}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
