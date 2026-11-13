"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  Mountain,
  Heart,
  Quote,
  Flame,
  Award,
  BookOpen,
  ArrowRight,
  Wind,
  Compass,
  Eye,
  Mail
} from 'lucide-react';

export default function OurGuruPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tGuide = useTranslations('Guide');
  const tGuru = useTranslations('GuruParampara');
  const tNav = useTranslations('Navbar');

  const otherAboutLinks = [
    {
      title: tNav('about_ashram'),
      desc: isHi ? "आश्रम का मूल परिचय एवं इतिहास" : isJa ? "アシュラムの歴史と紹介" : "Origin, hermitage & sacred atmosphere",
      href: '/about',
      icon: Mountain,
    },
    {
      title: tNav('about_mission_vision'),
      desc: isHi ? "ध्येय, दृष्टि एवं वैदिक संकल्प" : isJa ? "使命、ビジョン、霊的指針" : "Guiding purpose & spiritual vision",
      href: '/about/mission-vision',
      icon: Eye,
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
      icon: Compass,
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {isHi
                ? "आध्यात्मिक मार्गदर्शक एवं गुरु-तत्व"
                : isJa
                ? "霊的指導者と師の教え"
                : "Spiritual Guide & Teacher"}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {isHi
              ? "हमारे पूज्य गुरु एवं शिक्षक"
              : isJa
              ? "私たちの導師・師"
              : "Our Guru / Our Teacher"}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {isHi
              ? "पांच दशकों की अनवरत हिमालयी तपस्या, अथर्ववेदीय प्राण-विज्ञान और पारंपरिक गुरु-शिष्य परंपरा के जीवंत प्रकाशस्तम्भ।"
              : isJa
              ? "50年にわたるヒマラヤの継続的修行とヴェーダの叡智を体現する、精神の導き手。"
              : "Under the divine guidance of authentic Himalayan masters, Shridhyan Ashram leads sincere seekers on the path of inner realization."}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PUJANIYA GOVINDANAND TEERTH JI MAHARAJ */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-stone-900 group">
              <div className="aspect-[4/5] relative">
                <img
                  src="/images/maharaj/swami_ji.jpeg"
                  alt={tGuide('title')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                    {tGuide('label')}
                  </span>
                  <h3 className={`text-2xl font-serif font-bold text-white mb-1 ${isHi ? 'font-devanagari' : ''}`}>
                    {tGuide('title')}
                  </h3>
                  <p className="text-xs text-stone-300 font-sans">
                    {tGuide('subtitle')}
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-amber-200">
                    <span className="inline-flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      {tGuide('badge_exp')}
                    </span>
                    <span>{tGuide('location')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Details Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs uppercase tracking-widest font-bold w-fit">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>{tGuide('label')}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] leading-tight ${isHi ? 'font-devanagari' : ''}`}>
              {tGuide('title')}
            </h2>

            <p className="text-amber-800 font-medium text-base sm:text-lg">
              {tGuide('subtitle')}
            </p>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              {tGuide('desc')}
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#faf7f0] border border-amber-400/25">
                <Flame className="w-6 h-6 text-amber-700 mb-3" />
                <h4 className={`text-sm font-bold text-[#092217] mb-1.5 ${isHi ? 'font-devanagari' : ''}`}>
                  {tGuide('pillar1_title')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {tGuide('pillar1_desc')}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf7f0] border border-amber-400/25">
                <Heart className="w-6 h-6 text-amber-700 mb-3" />
                <h4 className={`text-sm font-bold text-[#092217] mb-1.5 ${isHi ? 'font-devanagari' : ''}`}>
                  {tGuide('pillar2_title')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {tGuide('pillar2_desc')}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf7f0] border border-amber-400/25">
                <BookOpen className="w-6 h-6 text-amber-700 mb-3" />
                <h4 className={`text-sm font-bold text-[#092217] mb-1.5 ${isHi ? 'font-devanagari' : ''}`}>
                  {tGuide('pillar3_title')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {tGuide('pillar3_desc')}
                </p>
              </div>
            </div>

            {/* Guru Parampara Quote Banner */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 mt-2">
              <Quote className="w-5 h-5 text-amber-700 mb-2" />
              <p className={`text-sm sm:text-base text-stone-800 font-serif italic ${isHi ? 'font-devanagari' : ''}`}>
                {tGuru('quote')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PUJYA SADHVI RADHIKA JI */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-y border-[#e8e2d4]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sadhvi Radhika Ji Details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs uppercase tracking-widest font-bold w-fit">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{isHi ? "साधना एवं मौन मार्गदर्शिका" : "Spiritual Guide"}</span>
              </div>

              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] leading-tight ${isHi ? 'font-devanagari' : ''}`}>
                {isHi ? "पूज्या साध्वी राधिका जी" : isJa ? "プージャ・サーディヴィ・ラーディカー・ジ" : "Pujya Sadhvi Radhika Ji"}
              </h2>

              <p className="text-amber-800 font-medium text-base sm:text-lg">
                {isHi ? "साधना, मौन एवं अंतर्मुखी अनुशासन" : "Meditation, Silence & Devotional Contemplation"}
              </p>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
                {isHi
                  ? "साधकों को ध्यान, योगिक अनुशासन एवं भक्तिमय अंतर्यात्रा के पथ पर मार्गदर्शन प्रदान करती हैं। मौन एवं समर्पण की साधना में प्रतिष्ठित होकर आश्रम के साधकों को आध्यात्मिक जीवन का सहज पथ दिखाती हैं।"
                  : isJa
                  ? "探求者を瞑想、規律、そして献身的な内なる旅の道へと導く。沈黙と明け渡しの修行を通じて、アシュラムの修練者に真摯な精神的歩みを示す。"
                  : "Guiding sincere seekers on the inner path of meditation, yogic discipline, and devotional contemplative life with profound dedication to silence and surrender."}
              </p>

              <div className="p-5 rounded-2xl bg-[#fcfbf7] border border-stone-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold text-[#092217] ${isHi ? 'font-devanagari' : ''}`}>
                    {isHi ? "समर्पण, मौन एवं साधना मार्गदर्शन" : "Surrender, Silence & Sadhana Guidance"}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 font-sans">
                    {isHi ? "आश्रम में दैनिक साधना एवं ध्यान सत्रों का स्नेहमयी संचालन" : "Personal presence and contemplative guidance in daily ashram meditation"}
                  </p>
                </div>
              </div>
            </div>

            {/* Sadhvi Radhika Ji Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-200/90 shadow-xl bg-stone-900 group max-w-md mx-auto">
                <div className="aspect-[4/5] relative">
                  <img
                    src="/images/sadhvi_radhika.jpeg"
                    alt="Pujya Sadhvi Radhika Ji"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                      {isHi ? "मार्गदर्शिका" : "Spiritual Guide"}
                    </span>
                    <h3 className={`text-xl font-serif font-bold text-white ${isHi ? 'font-devanagari' : ''}`}>
                      {isHi ? "पूज्या साध्वी राधिका जी" : "Pujya Sadhvi Radhika Ji"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXPLORE OTHER ABOUT PAGES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#faf7f0]">
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
            {otherAboutLinks.map((item, idx) => (
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
      {/* 5. SPIRITUAL INVITATION */}
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

