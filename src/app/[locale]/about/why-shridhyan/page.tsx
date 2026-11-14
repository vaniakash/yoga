"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  Mountain,
  Heart,
  Wind,
  Flower2,
  TreePine,
  Compass,
  Eye,
  ArrowRight,
  ShieldCheck,
  Mail
} from 'lucide-react';

export default function WhyShridhyanPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tTap = useTranslations('Tapobhoomi');
  const tAbout = useTranslations('About');
  const tFam = useTranslations('SpiritualFamily');
  const tNav = useTranslations('Navbar');

  const ashramValues = [
    {
      icon: Flower2,
      title: tAbout('f1_title'),
      sub: tAbout('f1_sub'),
      desc: isHi
        ? "दैनिक वैदिक स्वाध्याय, जप और अंतर्मुखी अभ्यास का अखंड अनुशीलन।"
        : isJa
        ? "日々のヴェーダ学習と瞑想修練の実践。"
        : "Daily scriptural swadhyaya, sacred chanting, and inward contemplation."
    },
    {
      icon: Sparkles,
      title: tAbout('f2_title'),
      sub: tAbout('f2_sub'),
      desc: isHi
        ? "मन की चंचलता को शांत कर अंतरात्मा में स्थिर होने का प्रत्यक्ष अनुभव।"
        : isJa
        ? "心のざわめきを静め、内なる真我へと至る直接体験。"
        : "Transcending mental fluctuations to abide in pure, luminous presence."
    },
    {
      icon: Mountain,
      title: tAbout('f3_title'),
      sub: tAbout('f3_sub'),
      desc: isHi
        ? "चित्त, प्राण और प्रकृति के साथ एकात्मता का वैदिक व यौगिक मार्ग।"
        : isJa
        ? "意識、プラーナ、そして大自然との調和を築くヨガの道。"
        : "Union of consciousness, prana, and sacred mountain nature."
    },
    {
      icon: Wind,
      title: tAbout('f4_title'),
      sub: tAbout('f4_sub'),
      desc: isHi
        ? "वाणी और इन्द्रियों का मौन, जहाँ से सच्ची आत्मिक शांति का साक्षात्कार होता है।"
        : isJa
        ? "言葉と五感の沈黙により、真の霊的静寂を体験する。"
        : "Profound silence of speech and senses, awakening true inner peace."
    },
    {
      icon: TreePine,
      title: tAbout('f5_title'),
      sub: tAbout('f5_sub'),
      desc: isHi
        ? "आदि शंकराचार्य एवं तीर्थ परंपरा की पावन गुरु-कृपा की निरंतर बहती धारा।"
        : isJa
        ? "シャンカラチャリヤとティールタ伝統の不滅のグルの恩寵流。"
        : "The eternal, living stream of divine Guru-kripa and Himalayan tapasya."
    },
  ];

  const tapobhoomiCards = [
    {
      title: tTap('card1_title'),
      desc: tTap('card1_desc'),
      footer: tTap('card1_footer'),
      icon: Mountain,
    },
    {
      title: tTap('card2_title'),
      desc: tTap('card2_desc'),
      footer: tTap('card2_footer'),
      icon: Wind,
    },
    {
      title: tTap('card3_title'),
      desc: tTap('card3_desc'),
      footer: tTap('card3_footer'),
      icon: Sparkles,
    },
  ];

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
  ];

  return (
    <div className="bg-[#F8F6EF] text-[#234638] flex flex-col min-h-screen font-sans selection:bg-[#789B80]/30 selection:text-[#234638]">
      
      {/* ========================================================================= */}
      {/* 1. HERO / EDITORIAL HEADER */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F6EF] via-[#F0F2EA] to-[#F8F6EF] pt-14 pb-20 border-b border-[#DADDD3]">
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-[#789B80]/15 via-[#789B80]/08 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-margin text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#789B80]/10 border border-[#789B80]/25 text-[#234638] text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#789B80]" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {tTap('label')}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#234638] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {isHi
              ? "श्रीध्यान आश्रम क्यों? (Why Shridhyan?)"
              : isJa
              ? "なぜシュリディヤンなのか？"
              : "Why Shridhyan Ashram?"}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {tTap('description')}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FIVE SACRED PILLARS OF ASHRAM LIFE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-margin max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#234638] uppercase tracking-widest block mb-2">
            {isHi ? "आश्रम के ५ मूल स्तम्भ" : "Five Sacred Pillars"}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
            {isHi ? "प्रामाणिक साधना एवं तपोभूमि के आधार" : "The Core Foundations of Sadhana"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ashramValues.map((val, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl bg-[#F8F6EF] border border-[#789B80]/25 shadow-2xs hover:shadow-md hover:border-[#789B80] transition-all flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#789B80]/15 text-[#234638] flex items-center justify-center mb-5">
                  <val.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#234638] uppercase tracking-wider block mb-1">
                  {val.sub}
                </span>
                <h3 className={`text-lg sm:text-xl font-serif font-bold text-[#234638] mb-2.5 ${isHi ? 'font-devanagari' : ''}`}>
                  {val.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  {val.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DADDD3] flex items-center gap-2 text-xs font-medium text-[#234638]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#789B80]" />
                <span>{isHi ? "प्रामाणिक वैदिक परंपरा" : "Authentic Tradition"}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THREE TAPOBHOOMI ENVIRONMENT DIMENSIONS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-y border-[#DADDD3]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#234638] uppercase tracking-widest block mb-2">
              {isHi ? "तपोभूमि की विशेषता" : "Spiritual Environment"}
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
              {tTap('title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tapobhoomiCards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F8F6EF] border border-stone-200 hover:border-[#789B80] transition-all shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#789B80]/10 text-[#789B80] flex items-center justify-center mb-5">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-serif font-bold text-[#234638] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                    {card.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 text-xs font-semibold text-[#234638]">
                  {card.footer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SPIRITUAL FAMILY WELCOME */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F8F6EF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#789B80]/10 border border-[#789B80]/20 text-[#234638] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Heart className="w-3.5 h-3.5 text-[#789B80]" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {isHi ? "आध्यात्मिक परिवार" : "Spiritual Family"}
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#234638] mb-5 ${isHi ? 'font-devanagari' : ''}`}>
            {tFam('title')}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
            {tFam('description')}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#234638] hover:bg-[#2D5444] text-white px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-md transition-all group"
          >
            <span>{isHi ? "आश्रम से जुड़ें" : "Join the Ashram"}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPLORE OTHER ABOUT PAGES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-t border-[#DADDD3]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#234638] uppercase tracking-widest block mb-2">
              {isHi ? "आश्रम परिचय के अन्य पृष्ठ" : "Explore About Us"}
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
              {isHi ? "श्रीध्यान आश्रम के अन्य आयाम" : "Other Dimensions of Shridhyan Ashram"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {otherAboutLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-[#F8F6EF] border border-stone-200/90 hover:border-[#789B80] p-6 rounded-2xl shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#789B80]/10 border border-[#789B80]/25 flex items-center justify-center text-[#789B80] mb-4 group-hover:bg-[#789B80]/20 group-hover:scale-105 transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-serif font-bold text-[#234638] group-hover:text-[#234638] transition-colors mb-1 ${isHi ? 'font-devanagari' : ''}`}>
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#234638] group-hover:translate-x-1 transition-transform">
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
      <section className="py-16 bg-gradient-to-b from-[#faf7f0] to-[#f7f3ea] border-t border-[#DADDD3] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses/shri-vidya"
              className="inline-flex items-center gap-2 bg-[#234638] hover:bg-[#2D5444] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all group"
            >
              <span>{isHi ? "पाठ्यक्रम देखें" : isJa ? "コース案内を見る" : "Explore Courses"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#234638] hover:bg-[#1a3329] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-colors"
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

