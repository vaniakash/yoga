"use client";

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Hero } from '@/components/Hero';
import { HomeCTA } from '@/components/HomeCTA';
import {
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  Flame,
  MapPin,
  Quote,
  Users,
  CheckCircle2,
  Play,
  X
} from 'lucide-react';

export default function HomePage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tGuide = useTranslations('Guide');
  const tTeach = useTranslations('SpiritualTeachings');
  const tEnroll = useTranslations('Enrollment');
  const tTestimonials = useTranslations('Testimonials');

  // Masterclass Modal State
  const [masterclassOpen, setMasterclassOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const coursesData = [
    {
      title: tTeach('c1_title'),
      category: tTeach('c1_category'),
      desc: isHi
        ? "अथर्ववेद काण्ड 4, सूक्त 13 पर आधारित पारंपरिक वैदिक शिक्षाओं, पवित्र मंत्रों और प्राण साधना का प्रामाणिक अध्ययन।"
        : isJa
        ? "アタルヴァ・ヴェーダ第13讃に基づく伝統的なヴェーダの教え、聖なるマントラ、プラーナ修練の本格的な入門。"
        : "An authentic introduction to traditional Vedic teachings, sacred mantras, and prana sadhana based on Atharvaveda, Kanda 4, Sukta 13.",
      href: '/courses/vedic-bio-healing',
      image: '/images/ashram_courtyard.jpg',
      icon: '/images/maharaj/vedicbio_healing.svg',
      featured: false,
    },
    {
      title: tTeach('c2_title'),
      category: tTeach('c2_category'),
      desc: isHi
        ? "ध्यान की विभिन्न पद्धतियों, नियमित अभ्यास और ध्यान सत्रों के मार्गदर्शन से संबंधित आधारभूत अध्ययन कार्यक्रम।"
        : isJa
        ? "様々な瞑想技法、日々の修練、観想セッションの指導スキルを学ぶ基礎プログラム。"
        : "A foundational study program exploring various meditation methods, disciplined daily practice, and guidance skills for contemplative sessions.",
      href: '/courses/meditation-teacher-training',
      image: '/images/meditation_hall.jpg',
      icon: '/images/maharaj/maditation.svg',
      featured: true,
    },
    {
      title: tTeach('c3_title'),
      category: tTeach('c3_category'),
      desc: isHi
        ? "श्रीविद्या परंपरा, उसके दर्शन, मंत्र-उपासना और श्रीचक्र के पारंपरिक आध्यात्मिक महत्व का गूढ़ अध्ययन।"
        : isJa
        ? "聖なるシュリ・ヴィディヤの系譜、シャクタ哲学、マントラ・ウパーサナ、シュリ・チャクラの重要性の探求。"
        : "A deep study of the sacred Shri Vidya lineage, Shakta philosophy, mantra upasana, and the traditional spiritual significance of Shri Chakra.",
      href: '/courses/shri-vidya',
      image: '/images/sri_chakra.jpg',
      icon: '/images/maharaj/shreevidhya.svg',
      featured: false,
    },
  ];

  return (
    <div className="bg-[#fcfbf7] text-[#1c2e24] flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* 1. HERO SECTION */}
      <Hero onOpenMasterclass={() => setMasterclassOpen(true)} />

      {/* 2. MEET YOUR GUIDE: MINIMAL SPIRITUAL MASTER SANCTUM */}
      <section className="py-20 md:py-28 bg-[#faf7f0] border-y border-[#e8e2d4] relative overflow-hidden scroll-mt-24" id="guide">
        {/* Subtle Ambient Warm Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="max-w-6xl mx-auto px-6 md:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Monastic Portrait Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                {/* Soft Ambient Golden Ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-amber-300/10 to-orange-400/20 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity"
                />

                {/* The Framed Portrait */}
                <div className="relative rounded-[2rem] overflow-hidden bg-white p-3 shadow-xl border border-amber-400/30">
                  <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-stone-900 shadow-inner">
                    <img
                      alt={isHi ? "पूजनीय गोविंदानंद तीर्थ जी महाराज" : "Pujaniya Govindanand Teerth Ji Maharaj"}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      src="/images/maharaj/swami_ji.jpeg"
                    />
                    
                    {/* Subtle Gradient & Location Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                        {tGuide('subtitle')}
                      </span>
                      <h3 className={`text-xl font-serif font-bold text-white ${isHi ? 'font-devanagari' : ''}`}>
                        {tGuide('title')}
                      </h3>
                      <p className="text-xs text-amber-200/90 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-amber-400 inline" />
                        <span>{tGuide('location')}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 right-4 sm:-right-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-amber-400/40 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-stone-900 tracking-wide">
                    {tGuide('badge_exp')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean, Minimalist Typography & 3 Pillars (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-amber-600"></span>
                <span className={`text-amber-800 text-xs font-bold tracking-[0.2em] uppercase ${isHi ? 'font-devanagari' : ''}`}>
                  {tGuide('label')}
                </span>
              </div>

              {/* Master Name / Main Headline */}
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                {tGuide('title')}
              </h2>

              {/* Master Subtitle */}
              <p className={`text-amber-800 text-sm sm:text-base font-medium mb-5 ${isHi ? 'font-devanagari' : ''}`}>
                {tGuide('subtitle')}
              </p>

              {/* Lead Essence Description */}
              <p className="text-stone-700 text-base sm:text-lg font-sans leading-relaxed mb-8 max-w-xl text-balance">
                {tGuide('desc')}
              </p>

              {/* The 3 Pillars as Sleek, Elegant Hairline List */}
              <div className="space-y-4 pt-1">
                
                {/* Pillar 1 */}
                <div className="pt-4 border-t border-stone-200/90 flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500/20 transition-colors border border-amber-400/20">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold text-[#092217] ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                      {tGuide('pillar1_title')}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5 leading-relaxed">
                      {tGuide('pillar1_desc')}
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="pt-4 border-t border-stone-200/90 flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500/20 transition-colors border border-amber-400/20">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold text-[#092217] ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                      {tGuide('pillar2_title')}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5 leading-relaxed">
                      {tGuide('pillar2_desc')}
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="pt-4 border-t border-stone-200/90 flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500/20 transition-colors border border-amber-400/20">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-base font-bold text-[#092217] ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                      {tGuide('pillar3_title')}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5 leading-relaxed">
                      {tGuide('pillar3_desc')}
                    </p>
                  </div>
                </div>

              </div>

              {/* Minimal Footnote Assurance Bar */}
              <div className="mt-8 pt-5 border-t border-amber-500/20 flex flex-wrap items-center gap-4 text-xs text-stone-600">
                <span className="font-semibold text-amber-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>{tGuide('location')}</span>
                </span>
                <span className="text-stone-300">•</span>
                <span className="font-medium text-stone-700">
                  {tGuide('badge_exp')}
                </span>
                <span className="text-stone-300">•</span>
                <Link
                  href="/about#lineage"
                  className="text-amber-800 hover:text-amber-600 font-semibold underline underline-offset-4 flex items-center gap-1 transition-colors"
                >
                  <span>{isHi ? "गुरु परंपरा एवं आश्रम परिचय देखें" : "View Guru Lineage & Ashram About"}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR SPIRITUAL TEACHINGS / हमारे आध्यात्मिक पाठ्यक्रम */}
      <section className="py-20 md:py-28 bg-[#faf8f5] border-b border-[#e8e2d4] relative overflow-hidden scroll-mt-24" id="courses">
        {/* Soft Ambient Warm Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 right-0 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-0"
        />

        {/* Faded Mountain Silhouette at bottom behind CTA */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-44 sm:h-56 pointer-events-none opacity-20 mix-blend-multiply select-none overflow-hidden -z-0"
        >
          <img
            src="/images/himalaya_misty_peaks.jpg"
            alt=""
            className="w-full h-full object-cover object-bottom filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#faf8f5]/40 to-[#faf8f5]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-margin relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            {/* Top Om Symbol with Divider Lines */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 text-[#c2410c]">
              <span className="w-12 sm:w-16 h-px bg-[#c2410c]/30" />
              <span className="text-2xl sm:text-3xl font-serif">ॐ</span>
              <span className="w-12 sm:w-16 h-px bg-[#c2410c]/30" />
            </div>

            {/* Category Tag */}
            <p className={`text-xs sm:text-sm font-bold tracking-[0.25em] text-[#c2410c] uppercase mb-4 ${isHi ? 'font-devanagari' : ''}`}>
              {tTeach('label')}
            </p>
            
            {/* Main Headline */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c2e24] tracking-tight leading-tight mb-4 ${isHi ? 'font-devanagari' : ''}`}>
              {isHi ? (
                <>साधना, ध्यान और <span className="text-[#c2410c] italic font-serif">वैदिक ज्ञान</span> की यात्रा</>
              ) : isJa ? (
                <>修練・瞑想・<span className="text-[#c2410c] italic font-serif">ヴェーダの叡智</span>への旅</>
              ) : (
                <>A Journey of Sadhana,<br className="hidden sm:inline" /> Meditation & <span className="text-[#c2410c] italic font-serif">Vedic Wisdom</span></>
              )}
            </h2>
            
            {/* Subtitle */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {tTeach('description')}
            </p>
          </div>

          {/* Three Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {coursesData.map((course, idx) => {
              const isFeatured = !!course.featured;
              return (
                <div
                  key={idx}
                  className={`rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group ${
                    isFeatured
                      ? 'bg-[#faf6ee] border-2 border-amber-400/80 shadow-md hover:shadow-xl'
                      : 'bg-white border border-stone-200/90 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-stone-100">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Custom SVG Icon */}
                    <div className="mb-3.5 flex items-center">
                      <img
                        src={course.icon}
                        alt=""
                        className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                      />
                    </div>

                    {/* Card Title */}
                    <h3 className={`text-xl sm:text-2xl font-serif font-bold text-[#1c2e24] group-hover:text-[#c2410c] transition-colors mb-2.5 leading-snug ${isHi ? 'font-devanagari' : ''}`}>
                      {course.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                      {course.desc}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-2">
                    {isFeatured ? (
                      <Link
                        href={course.href}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all duration-200 group/btn"
                      >
                        <span className={isHi ? 'font-devanagari' : ''}>{tTeach('btn_view')}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <Link
                        href={course.href}
                        className="inline-flex items-center gap-1.5 text-[#c2410c] hover:text-[#9a3412] font-bold text-xs sm:text-sm transition-colors group/link"
                      >
                        <span className={isHi ? 'font-devanagari' : ''}>{tTeach('btn_view')}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="mt-14 sm:mt-16 text-center relative z-10">
            <a
              href="#enroll"
              onClick={(e) => handleScroll(e, "enroll")}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-[#faf7f0] text-[#c2410c] border border-amber-400/80 sm:border-2 shadow-xs hover:shadow font-semibold text-sm sm:text-base transition-all duration-200 group"
            >
              <span className={isHi ? 'font-devanagari' : ''}>{tTeach('view_all')}</span>
              <ArrowRight className="w-4 h-4 text-[#c2410c] transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* 4. DOCUMENTED TESTIMONIALS & CASE STUDIES */}
      <section className="py-24 bg-[#faf7f0] border-b border-[#e8e2d4] px-6 md:px-margin" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-800 text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              {tTestimonials('label')}
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] mb-4 ${isHi ? 'font-devanagari' : ''}`}>
              {tTestimonials('title')}
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              {tTestimonials('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-amber-600/40 mb-4" />
                <p className="text-sm text-stone-700 leading-relaxed italic mb-6 font-sans">
                  {tTestimonials('t1_text')}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-bold text-[#092217] text-sm">{tTestimonials('t1_name')}</h4>
                <p className="text-xs text-stone-500">{tTestimonials('t1_role')}</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-amber-600/40 mb-4" />
                <p className="text-sm text-stone-700 leading-relaxed italic mb-6 font-sans">
                  {tTestimonials('t2_text')}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-bold text-[#092217] text-sm">{tTestimonials('t2_name')}</h4>
                <p className="text-xs text-stone-500">{tTestimonials('t2_role')}</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-amber-600/40 mb-4" />
                <p className="text-sm text-stone-700 leading-relaxed italic mb-6 font-sans">
                  {tTestimonials('t3_text')}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-bold text-[#092217] text-sm">{tTestimonials('t3_name')}</h4>
                <p className="text-xs text-stone-500">{tTestimonials('t3_role')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COURSE ENROLLMENT SECTION (LIMITED 25 SEATS) */}
      <section className="py-20 bg-[#f7f3ea] border-b border-[#e8e2d4] text-[#1c2e24] relative scroll-mt-24" id="enroll">
        <div className="max-w-5xl mx-auto px-6 md:px-margin relative z-10">
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-white border-2 border-stone-200 shadow-xl">
            {/* Top Cohort Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>{tEnroll('cohort_badge')}</span>
              </div>
              <span className="text-xs text-stone-500 font-mono">
                {tEnroll('cohort_dates')}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#092217] leading-tight ${isHi ? 'font-devanagari' : ''}`}>
                  {tEnroll('title')}
                </h2>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
                  {tEnroll('card_sub')}
                </p>

                {/* Strict 25 Seat Limit Banner */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-900">
                  <Users className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <strong className="text-amber-800 font-semibold block">{tEnroll('limit_badge')}</strong>
                    {tEnroll('limit_text')}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{tEnroll('f1')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{tEnroll('f2')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{tEnroll('f3')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{tEnroll('f4')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{tEnroll('f5')}</span>
                  </div>
                </div>
              </div>

              {/* Action Box */}
              <div className="lg:col-span-5 flex flex-col gap-4 p-6 rounded-2xl bg-[#faf7f0] border border-amber-400/40 text-center shadow-sm">
                <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
                  Cohort Enrollment
                </span>
                <div className="text-xl sm:text-2xl font-bold text-[#092217] font-serif">
                  7-Day Foundation Course
                </div>
                <p className="text-xs text-stone-600 font-sans">
                  Includes live sessions, manual, practice audio & completion certificate.
                </p>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm tracking-wide shadow-md transition-all duration-200 active:scale-95"
                >
                  <span>{tEnroll('cta_enroll')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setMasterclassOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4 text-amber-700 fill-current" />
                  <span>{tEnroll('masterclass_btn')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOME CTA BANNER & TRUST STRIP (DIRECTLY ABOVE FOOTER) */}
      <HomeCTA onOpenVideo={() => setMasterclassOpen(true)} />

      {/* FREE MASTERCLASS MODAL */}
      {masterclassOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#071f14] border border-amber-400/40 rounded-3xl p-6 sm:p-8 text-[#fcf9f3] shadow-2xl">
            <button
              onClick={() => setMasterclassOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Free Masterclass Session</span>
            </div>

            <h3 className={`text-2xl sm:text-3xl font-serif font-bold text-white mb-2 ${isHi ? 'font-devanagari' : ''}`}>
              The Ancient Science of Atharvaveda Bio-Healing
            </h3>

            <p className="text-sm text-stone-300 mb-6 leading-relaxed font-sans">
              Explore the 7 healing mantras of Kanda 4, Sukta 13, hand energy activation, and foundational breathwork with Param Pujya Swami Ji Maharaj.
            </p>

            {/* Video Placeholder Container with Sacred Himalayan Visual */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-amber-400/30 bg-black flex items-center justify-center group shadow-inner mb-6">
              <img
                src="/images/shridhyan_hero.webp"
                alt="Shridhyan Masterclass Preview"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <Link
                href="/contact"
                onClick={() => setMasterclassOpen(false)}
                className="relative z-10 w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-[#061910] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:scale-110"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </Link>

              <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-200/90">
                Preview Session • 18 Minutes • Himalayan Tapasya
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-amber-200/70 font-sans">
                Ready to join the 7-day cohort? Only 25 seats per batch.
              </span>
              <Link
                href="/contact"
                onClick={() => setMasterclassOpen(false)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#061910] font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95"
              >
                <span>Enroll in 7-Day Course</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
