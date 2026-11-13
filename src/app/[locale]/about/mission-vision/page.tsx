"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  Mountain,
  Eye,
  Quote,
  Sun,
  Wind,
  Trees,
  Compass,
  Heart,
  ArrowRight,
  Mail
} from 'lucide-react';

export default function MissionVisionPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tPhil = useTranslations('Philosophy');
  const tNav = useTranslations('Navbar');

  const otherAboutLinks = [
    {
      title: tNav('about_ashram'),
      desc: isHi ? "आश्रम का मूल परिचय एवं इतिहास" : isJa ? "アシュラムの歴史と紹介" : "Origin, hermitage & sacred atmosphere",
      href: '/about',
      icon: Mountain,
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
          {/* Tradition Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Eye className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {isHi
                ? "वैदिक संकल्प एवं ध्येय"
                : isJa
                ? "神聖な使命と霊的ビジョン"
                : "Vedic Purpose & Spiritual Vision"}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {isHi
              ? "हमारा ध्येय एवं दृष्टि"
              : isJa
              ? "私たちの使命とビジョン"
              : "Our Mission & Vision"}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {isHi
              ? "प्रकृति, स्वाध्याय और वैदिक जीवनशैली के माध्यम से चेतना के जागरण का पावन संकल्प।"
              : isJa
              ? "大自然との調和、ヴェーダのライフスタイル、そして真理の探求を通じて高次の意識を目覚めさせる。"
              : "Harmonizing life with nature, ancient Vedic wisdom, and the awakening of higher spiritual consciousness."}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE PHILOSOPHY HERO BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 px-6 md:px-margin max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#0d1c14] text-white p-8 sm:p-12 md:p-16 border border-stone-800 shadow-xl">
          <div
            className="absolute inset-0 opacity-25 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#092217] via-[#092217]/90 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-6">
              <Quote className="w-3.5 h-3.5" />
              <span>{isHi ? "आश्रम का मूल सूत्र" : isJa ? "アシュラムの信条" : "Guiding Philosophy"}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-200 mb-6 leading-tight ${isHi ? 'font-devanagari' : ''}`}>
              {tPhil('quote')}
            </h2>

            <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-sans">
              {tPhil('description')}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MISSION & VISION DETAIL CARDS */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 px-6 md:px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <div className="bg-[#faf7f0] border border-amber-400/30 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-6">
                <Mountain className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold block mb-2">
                {isHi ? "आश्रम का ध्येय" : isJa ? "私たちの使命" : "Our Mission"}
              </span>
              <h3 className={`text-2xl sm:text-3xl font-serif font-bold text-[#092217] mb-4 ${isHi ? 'font-devanagari' : ''}`}>
                {isHi ? "प्रकृति के तालमेल में अंतर्मुखी शांति" : isJa ? "自然の調べと内なる静けさ" : "Conscious Cadence with Nature"}
              </h3>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
                {tPhil('description')}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-900/10 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              <span className="text-xs sm:text-sm font-medium text-stone-600">
                {isHi ? "हिमालयी शांति • मौन साधना • प्राकृतिक जीवन" : "Himalayan Stillness • Silence • Natural Life"}
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#faf7f0] border border-amber-400/30 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-6">
                <Sun className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold block mb-2">
                {isHi ? "हमारी दृष्टि" : isJa ? "私たちのビジョン" : "Our Vision"}
              </span>
              <h3 className={`text-2xl sm:text-3xl font-serif font-bold text-[#092217] mb-4 ${isHi ? 'font-devanagari' : ''}`}>
                {isHi ? "वैदिक जीवनशैली एवं चेतना का जागरण" : isJa ? "ヴェーダの生活と意識の覚醒" : "Vedic Lifestyle & Awakening"}
              </h3>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
                {tPhil('description2')}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-900/10 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              <span className="text-xs sm:text-sm font-medium text-stone-600">
                {isHi ? "प्रकृति ही गुरु • वैदिक संसाधन • सरल जीवन" : "Nature as Guide • Vedic Resources • Simple Living"}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THREE GUIDING POSTULATES */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-y border-[#e8e2d4]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#fcfbf7] border border-stone-200">
              <Trees className="w-8 h-8 text-amber-700 mb-4" />
              <h4 className={`text-lg font-serif font-bold text-[#092217] mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                {isHi ? "कम आधुनिकता, अधिक प्रकृति" : "Less Modernity, More Nature"}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed font-sans">
                {isHi
                  ? "प्राकृतिक संसाधनों और शांत हिमालयी वातावरण को प्राथमिकता देकर जीवन को सहज और सरल बनाना।"
                  : "Prioritizing pure natural resources and the quiet Himalayan atmosphere to simplify life."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fcfbf7] border border-stone-200">
              <Wind className="w-8 h-8 text-amber-700 mb-4" />
              <h4 className={`text-lg font-serif font-bold text-[#092217] mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                {isHi ? "आंतरिक शांति का प्रवेश द्वार" : "Portal to Inner Quietude"}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed font-sans">
                {isHi
                  ? "पर्वतीय नीरवता और प्रभात व गोधूलि के प्राकृतिक चक्रों के साथ जीना आत्मिक शांति का मार्ग है।"
                  : "Mountain stillness, birdsong, and the natural cycles of dawn and dusk as portals to peace."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fcfbf7] border border-stone-200">
              <Sparkles className="w-8 h-8 text-amber-700 mb-4" />
              <h4 className={`text-lg font-serif font-bold text-[#092217] mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                {isHi ? "प्रकृति स्वयं प्राथमिक गुरु" : "Nature as Primary Guide"}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed font-sans">
                {isHi
                  ? "यहाँ प्रकृति ही जीवन की शिक्षक है, जो चेतना को अंतर्मुख कर सत्य का साक्षात्कार कराती है।"
                  : "Nature herself is the guiding light, directing awareness inward toward eternal truth."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPLORE OTHER ABOUT PAGES */}
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
      {/* 6. SPIRITUAL INVITATION */}
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

