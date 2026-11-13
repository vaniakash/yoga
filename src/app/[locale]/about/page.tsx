"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  Mountain,
  Compass,
  ArrowRight,
  Wind,
  Eye,
  Quote,
  Heart,
  CalendarDays,
  Mail
} from 'lucide-react';

export default function AboutPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tAbout = useTranslations('About');
  const tNav = useTranslations('Navbar');

  const aboutNavLinks = [
    {
      title: tNav('about_mission_vision'),
      desc: isHi ? "ध्येय, दृष्टि एवं वैदिक संकल्प" : isJa ? "使命、ビジョン、霊的指針" : "Guiding purpose & spiritual vision",
      href: '/about/mission-vision',
      icon: Eye,
    },
    {
      title: tNav('about_guru'),
      desc: isHi ? "पूज्य स्वामी गोविंदानंद तीर्थ जी महाराज" : isJa ? "スワミ・ゴヴィンダナンダ・ティールタ師" : "Founder & Spiritual Guide",
      href: '/about/our-guru',
      icon: Heart,
    },
    {
      title: tNav('about_lineage'),
      desc: isHi ? "आदि शंकराचार्य एवं तीर्थ परंपरा" : isJa ? "ティールタ聖流・師弟の伝統" : "Tirtha stream & sacred masters",
      href: '/about/lineage',
      icon: Sparkles,
    },
    {
      title: tNav('about_life'),
      desc: isHi ? "दैनिक प्रवाह, मौन, यज्ञ एवं आश्रम जीवन" : isJa ? "日課、沈黙、ヤジュニャ、生活" : "Daily rhythm, silence & routine",
      href: '/about/life-at-ashram',
      icon: Wind,
    },
    {
      title: tNav('about_why'),
      desc: isHi ? "५ पावन स्तम्भ एवं तपोभूमि विशिष्टता" : isJa ? "5つの柱と聖なるタポブーミ" : "Five sacred pillars & atmosphere",
      href: '/about/why-shridhyan',
      icon: Mountain,
    },
  ];

  return (
    <div className="bg-[#fcfbf7] text-[#1c2e24] flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* ========================================================================= */}
      {/* 1. HERO / EDITORIAL HEADER */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f3ea] via-[#faf7f0] to-[#fcfbf7] pt-14 pb-20 border-b border-[#e8e2d4]">
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-amber-400/20 via-orange-300/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-margin text-center">
          {/* Tradition Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {isHi
                ? "हिमालयी तपोभूमि | आश्रम परिचय"
                : isJa
                ? "ヒマラヤのタポブーミ｜アシュラムについて"
                : "Himalayan Tapobhoomi | About Shridhyan Ashram"}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {isHi
              ? "श्रीध्यान आश्रम परिचय"
              : isJa
              ? "シュリディヤン・アシュラムについて"
              : "About Shridhyan Ashram"}
          </h1>

          {/* Description */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed mb-6">
            {isHi
              ? "पाँच दशकों की सतत हिमालयी तपस्या, अथर्ववेदीय प्राण-विज्ञान की साधना तथा सत्य व शांति के जिज्ञासुओं के लिए समर्पित एक पवित्र तपोभूमि।"
              : isJa
              ? "50年にわたるヒマラヤの継続的修行、アタルヴァ・ヴェーダのプラーナ科学、そして真理の探求者に捧げられた聖なるタポブーミ。"
              : "The sacred synthesis of five decades of Himalayan penance, authentic Vedic prana sadhana, and a secluded sanctuary of silence for sincere seekers of truth."}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN STORY & SANCTUM */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Story */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-amber-600 rounded-full"></span>
              <span className={`text-amber-800 text-xs font-bold tracking-[0.2em] uppercase ${isHi ? 'font-devanagari' : ''}`}>
                {tAbout('tagline')}
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] leading-tight ${isHi ? 'font-devanagari' : ''}`}>
              {tAbout('title')}
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              {tAbout('description_1')}
            </p>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              {tAbout('description_2')}
            </p>

            {/* Featured Seal */}
            <div className="p-6 bg-[#faf7f0] border border-amber-400/30 rounded-2xl flex items-start gap-4 shadow-2xs mt-2">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center flex-shrink-0">
                <Mountain className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-sm font-bold text-amber-900 tracking-wide uppercase block ${isHi ? 'font-devanagari' : ''}`}>
                  {tAbout('badge')}
                </span>
                <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed font-sans">
                  {tAbout('badge_desc')}
                </p>
              </div>
            </div>

            {/* Sacred Quote Card */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 mt-2">
              <Quote className="w-5 h-5 text-amber-700 mb-2" />
              <p className={`text-sm sm:text-base text-stone-800 font-serif italic ${isHi ? 'font-devanagari' : ''}`}>
                {tAbout('quote')}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Sanctum */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-stone-200/90 shadow-xl bg-stone-900 group">
              <div className="aspect-[4/5] relative">
                <img
                  src="/images/himalaya_misty_peaks.jpg"
                  alt="Shridhyan Ashram overlooking Himalayan valleys"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                    {isHi ? "पवित्र हिमालयी अंचल" : "Sacred Himalayan Hermitage"}
                  </span>
                  <h3 className={`text-xl font-serif font-bold text-white mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                    {isHi ? "जहाँ प्रकृति स्वयं गुरु है" : "Where Nature Herself is the Guru"}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    {isHi
                      ? "देवदार और चीड़ के वनों के बीच, पावन नदी की निर्मल ध्वनि और पर्वतराज हिमालय की अखंड शांति।"
                      : "Among pine and deodar forests, along the holy murmurs of sacred mountain rivers."}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPLORE MORE ABOUT US (PAGES GRID) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#faf7f0] border-t border-[#e8e2d4]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-2">
              {isHi ? "आश्रम परिचय के अन्य पृष्ठ" : "Explore About Us"}
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#092217] ${isHi ? 'font-devanagari' : ''}`}>
              {isHi ? "श्रीध्यान आश्रम के अन्य आयाम" : "Other Dimensions of Shridhyan Ashram"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {aboutNavLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-white border border-stone-200/90 hover:border-amber-400 p-6 rounded-2xl shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center text-amber-700 mb-4 group-hover:bg-amber-500/20 group-hover:scale-105 transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-serif font-bold text-[#092217] group-hover:text-amber-800 transition-colors mb-1 ${isHi ? 'font-devanagari' : ''}`}>
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-amber-800 group-hover:translate-x-1 transition-transform">
                  <span>{isHi ? "आगे पढ़ें" : "Learn More"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SPIRITUAL INVITATION */}
      {/* ========================================================================= */}
      <section className="py-16 bg-gradient-to-b from-[#faf7f0] to-[#f7f3ea] border-t border-[#e8e2d4] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses/shri-vidya"
              className="inline-flex items-center gap-2 bg-[#092217] hover:bg-[#143a28] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all group"
            >
              <span>{isHi ? "पाठ्यक्रम देखें" : isJa ? "コース案内を見る" : "Explore Courses"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{isHi ? "आश्रम से संपर्क करें" : isJa ? "お問い合わせ" : "Contact Ashram"}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
