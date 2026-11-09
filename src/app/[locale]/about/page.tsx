"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
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
  Eye,
  Quote,
  Flame,
  Clock,
  Heart,
  BookOpen,
  CalendarDays,
  Mail
} from 'lucide-react';

export default function AboutPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tAbout = useTranslations('About');
  const tGuide = useTranslations('Guide');
  const tGuru = useTranslations('GuruParampara');
  const tTap = useTranslations('Tapobhoomi');
  const tSil = useTranslations('Silence');
  const tGal = useTranslations('Gallery');
  const tFam = useTranslations('SpiritualFamily');

  const lineageGurus = [
    {
      name: isHi
        ? "परम पूज्य स्वामी योगानन्द जी महाराज"
        : isJa
        ? "パラム・プージャ・スワミ・ヨーガーナンダ・ジ・マハラジ"
        : "Param Pujya Swami Yogananda Ji Maharaj",
      role: isHi
        ? "ऋषिकेश तपोनिष्ठ परंपरा"
        : isJa
        ? "リシケシの聖なる伝統"
        : "Rishikesh Tapasya Lineage",
      image: "/images/yoganand_maharaj.jpeg",
      desc: isHi
        ? "हिमालयी महायोगी एवं प्रामाणिक तपस्या व साधना की अखंड प्रेरणा।"
        : isJa
        ? "ヒマラヤの偉大なヨーギであり、本格的な苦行と瞑想の不滅のインスピレーション。"
        : "Himalayan Mahayogi and divine source of unbroken tapasya and sadhana.",
      footer: isHi ? "ऋषिकेश की तपोनिष्ठ आध्यात्मिक परंपरा" : isJa ? "リシケシ伝統" : "Rishikesh Lineage",
    },
    {
      name: isHi
        ? "परम पूज्य स्वामी विष्णु तीर्थ जी महाराज"
        : isJa
        ? "パラム・プージャ・スワミ・ヴィシュヌ・ティールタ・ジ・マハラジ"
        : "Param Pujya Swami Vishnu Teerth Ji Maharaj",
      role: isHi
        ? "साधन-शिखर एवं शक्तिपात आचार्य"
        : isJa
        ? "シャクティパート・サダナの巨星"
        : "Master of Sadhana & Shaktipat",
      image: "/images/vishnu_theert.jpeg",
      desc: isHi
        ? "साधना शिखर के दिव्य स्तम्भ, जिन्होंने प्राण एवं शक्तिपात विज्ञान को आलोकित किया।"
        : isJa
        ? "プラーナとシャクティパートの神聖な科学を照らした偉大な覚者。"
        : "Pillar of divine sadhana who illuminated the science of prana and spiritual transmission.",
      footer: isHi ? "साधन-शिखर एवं शक्तिपात परंपरा" : isJa ? "シャクティパート伝承" : "Shaktipat Tradition",
    },
    {
      name: isHi
        ? "परम पूज्य स्वामी शिवोम तीर्थ जी महाराज"
        : isJa
        ? "パラム・プージャ・スワミ・シヴォーム・ティールタ・ジ・マハラジ"
        : "Param Pujya Swami Shivom Teerth Ji Maharaj",
      role: isHi
        ? "तीर्थ परंपरा के महान संवाहक"
        : isJa
        ? "ティールタ伝統の偉大なる導師"
        : "Revered Torchbearer of Tirtha Lineage",
      image: "/images/swami_shivom_teerth.jpeg",
      desc: isHi
        ? "उच्च कोटि के आत्मज्ञानी संत, जिन्होंने आंतरिक समर्पण और मौन का पथ प्रशस्त किया।"
        : isJa
        ? "内なる降伏と静寂の道を切り拓いた、崇高なる悟りの聖者。"
        : "Realized sage who illuminated the path of inner surrender, grace, and silence.",
      footer: isHi ? "तीर्थ परंपरा की पावन आध्यात्मिक धारा" : isJa ? "ティールタ聖流" : "Sacred Tirtha Stream",
    },
    {
      name: isHi
        ? "पूजनीय गोविंदानंद तीर्थ जी महाराज"
        : isJa
        ? "プージャ・ゴヴィンダナンダ・ティールタ・ジ・マハラジ"
        : "Pujaniya Govindanand Teerth Ji Maharaj",
      role: isHi
        ? "संस्थापक एवं आध्यात्मिक मार्गदर्शक"
        : isJa
        ? "シュリディヤン創設者・霊的指導者"
        : "Founder & Spiritual Guide",
      image: "/images/maharaj/swami_ji.jpeg",
      desc: isHi
        ? "श्रीध्यान आश्रम के संस्थापक, पांच दशकों की सतत हिमालयी तपस्या में प्रतिष्ठित।"
        : isJa
        ? "シュリディヤン創設者。50年にわたるヒマラヤの継続的修行に根ざす。"
        : "Founder of Shridhyan Ashram, rooted in 50 years of dedicated Himalayan penance.",
      footer: isHi ? "50 वर्षों की सतत हिमालयी तपस्या" : isJa ? "50年のヒマラヤ修行" : "50 Years Himalayan Sadhana",
    },
    {
      name: isHi
        ? "पूज्या साध्वी राधिका जी"
        : isJa
        ? "プージャ・サーディヴィ・ラーディカー・ジ"
        : "Pujya Sadhvi Radhika Ji",
      role: isHi
        ? "साधना एवं मौन मार्गदर्शिका"
        : isJa
        ? "瞑想と静寂の女性指導者"
        : "Spiritual Guide of Meditation & Silence",
      image: "/images/sadhvi_radhika.jpeg",
      desc: isHi
        ? "साधकों को ध्यान, योगिक अनुशासन एवं भक्तिमय अंतर्यात्रा के पथ पर मार्गदर्शन प्रदान करती हैं।"
        : isJa
        ? "探求者を瞑想、規律、そして献身的な内なる旅の道へと導く。"
        : "Guiding sincere seekers on the inner path of meditation, discipline, and devotional life.",
      footer: isHi ? "समर्पण, मौन एवं साधना मार्गदर्शन" : isJa ? "瞑想と沈黙の指導" : "Silence & Contemplation",
    },
  ];

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

  const dailyRhythm = [
    {
      time: isHi ? "प्रातः ०६:०० - ०७:३०" : isJa ? "午前 06:00 - 07:30" : "06:00 AM - 07:30 AM",
      title: isHi ? "प्रातःकालीन ध्यान एवं प्राणायाम" : isJa ? "早朝の瞑想とプラーナーヤーマ" : "Morning Dhyana & Pranayama",
      desc: isHi ? "सूर्योदय के समय हिमालयी प्राणवायु में गहरी अंतर्मुखी साधना।" : isJa ? "朝日に包まれるヒマラヤのプラーナの中で行う内省的瞑想。" : "Deep contemplative meditation in pure high-altitude Himalayan prana."
    },
    {
      time: isHi ? "प्रातः ०८:०० - ०९:३०" : isJa ? "午前 08:00 - 09:30" : "08:00 AM - 09:30 AM",
      title: isHi ? "वैदिक यज्ञ एवं अग्निहोत्र" : isJa ? "ヴェーダのヤジュニャとアグニホートラ" : "Vedic Yajna & Agnihotra",
      desc: isHi ? "पारंपरिक यज्ञशाला में अथर्ववेदीय मंत्रों द्वारा प्रकृति व चेतना की शुद्धि।" : isJa ? "伝統的なヤジュニャ・シャーラーで行われる神聖な火の儀式。" : "Sacred fire purification with Atharvavedic chanting in the traditional pavilion."
    },
    {
      time: isHi ? "अपराह्न ०३:३० - ०५:००" : isJa ? "午後 03:30 - 05:00" : "03:30 PM - 05:00 PM",
      title: isHi ? "स्वाध्याय एवं शास्त्र-चिंतन" : isJa ? "経典学習（スヴァディヤーヤ）と省察" : "Swadhyaya & Scriptural Study",
      desc: isHi ? "उपनिषदों, वेदान्त एवं गुरु-वचनों का मौन मनन एवं आध्यात्मिक जिज्ञासा।" : isJa ? "ウパニシャッドやヴェーダーンタの教えの静かな省察。" : "Contemplation of Upanishadic truths and Guru's wisdom in quietude."
    },
    {
      time: isHi ? "सायं ०६:३० - ०७:४५" : isJa ? "午後 06:30 - 07:45" : "06:30 PM - 07:45 PM",
      title: isHi ? "सायंकालीन दीप आराधना एवं मौन" : isJa ? "夕べの祈り（ディーパ・アーラティ）と沈黙" : "Evening Deepa Aradhana & Silence",
      desc: isHi ? "गोविंदानंद जी महाराज के सान्निध्य में संध्या आरती एवं पूर्ण मौन।" : isJa ? "夕暮れの光の礼拝と完全な沈黙による静寂の体験。" : "Vesper lamps offering followed by unbroken evening silence and absorption."
    },
  ];

  return (
    <div className="bg-[#fcfbf7] text-[#1c2e24] flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* ========================================================================= */}
      {/* 1. HERO / EDITORIAL HEADER */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f3ea] via-[#faf7f0] to-[#fcfbf7] pt-14 pb-20 border-b border-[#e8e2d4]">
        {/* Soft Ambient Warm Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-amber-400/20 via-orange-300/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-margin text-center">
          {/* Tradition Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {isHi
                ? "हिमालय • उत्तरकाशी | आश्रम एवं गुरु-परंपरा"
                : isJa
                ? "ヒマラヤ・ウッタラーカーシー｜アシュラムとグル・パランパラ"
                : "Himalayas • Uttarkashi | Ashram & Guru Parampara"}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {isHi
              ? "श्रीध्यान आश्रम एवं पावन गुरु-परंपरा"
              : isJa
              ? "シュリディヤン・アシュラムと聖なる師弟の伝統"
              : "Shridhyan Ashram & Sacred Guru Parampara"}
          </h1>

          {/* Description */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed mb-8">
            {isHi
              ? "पाँच दशकों की सतत हिमालयी तपस्या, अथर्ववेदीय प्राण-विज्ञान की साधना तथा सत्य व शांति के जिज्ञासुओं के लिए समर्पित एक पवित्र तपोभूमि।"
              : isJa
              ? "50年にわたるヒマラヤの継続的修行、アタルヴァ・ヴェーダのプラーナ科学、そして真理の探求者に捧げられた聖なるタポブーミ。"
              : "The sacred synthesis of five decades of Himalayan penance, authentic Vedic prana sadhana, and a secluded sanctuary of silence for sincere seekers of truth."}
          </p>

          {/* Quick Anchor Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <a
              href="#ashram"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "आश्रम दर्शन" : isJa ? "アシュラム理念" : "Ashram Philosophy"}</span>
            </a>
            <a
              href="#founder"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "पूज्य महाराज जी" : isJa ? "指導者について" : "Pujaniya Maharaj Ji"}</span>
            </a>
            <a
              href="#lineage"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "गुरु-परंपरा" : isJa ? "グル・パランパラ" : "Guru Lineage"}</span>
            </a>
            <a
              href="#environment"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-colors"
            >
              <TreePine className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "तपोभूमि परिवेश" : isJa ? "聖なる環境" : "Tapobhoomi Land"}</span>
            </a>
            <a
              href="#mauna"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-colors"
            >
              <Wind className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "मौन व नित्य साधना" : isJa ? "沈黙と日課" : "Silence & Routine"}</span>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#faf7f0] text-stone-800 text-xs sm:text-sm font-medium border border-stone-200/90 shadow-2xs hover:border-amber-400 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? "चित्रावली" : isJa ? "ギャラリー" : "Gallery"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE ASHRAM PHILOSOPHY & STORY (#ashram) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-margin max-w-7xl mx-auto scroll-mt-20" id="ashram">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text & Values (7 cols) */}
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

            {/* 5 Sacred Ashram Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4">
              {ashramValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-stone-200/90 hover:border-amber-400/60 shadow-2xs hover:shadow-sm transition-all"
                >
                  <val.icon className="w-5 h-5 text-amber-700 mb-2" />
                  <h4 className={`text-sm font-bold text-[#092217] ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                    {val.title}
                  </h4>
                  <span className="text-[11px] text-amber-800/80 font-medium block mb-1">
                    {val.sub}
                  </span>
                  <p className="text-[11px] text-stone-500 leading-normal font-sans">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Peaceful Visual Sanctum (5 cols) */}
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
                    {isHi ? "पवित्र हिमालयी अंचल • उत्तरकाशी" : "Sacred Himalayan Hermitage • Uttarkashi"}
                  </span>
                  <h3 className={`text-xl font-serif font-bold text-white mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                    {isHi ? "जहाँ प्रकृति स्वयं गुरु है" : "Where Nature Herself is the Guru"}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    {isHi
                      ? "देवदार और चीड़ के वनों के बीच, भागीरथी की पावन ध्वनि और पर्वतराज हिमालय की अखंड शांति।"
                      : "Among pine and deodar forests, along the holy murmurs of the Bhagirathi river."}
                  </p>
                </div>
              </div>
            </div>

            {/* Sacred Quote Card */}
            <div className="p-6 rounded-2xl bg-[#faf7f0] border border-amber-300/40 text-center">
              <Quote className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className={`text-sm sm:text-base text-stone-800 font-serif italic ${isHi ? 'font-devanagari' : ''}`}>
                {tAbout('quote')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE FOUNDER & SPIRITUAL GUIDE (#founder) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#faf7f0] border-y border-[#e8e2d4] relative scroll-mt-20" id="founder">
        {/* Soft Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="max-w-6xl mx-auto px-6 md:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Revered Portrait Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-amber-300/10 to-orange-400/20 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity"
                />

                <div className="relative rounded-[2rem] overflow-hidden bg-white p-3 shadow-xl border border-amber-400/40">
                  <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-stone-900 shadow-inner">
                    <img
                      alt={isHi ? "पूजनीय गोविंदानंद तीर्थ जी महाराज" : "Pujaniya Govindanand Teerth Ji Maharaj"}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      src="/images/maharaj/swami_ji.jpeg"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                        {tGuide('subtitle')}
                      </span>
                      <h3 className={`text-xl font-serif font-bold text-white ${isHi ? 'font-devanagari' : ''}`}>
                        {tGuide('title')}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtitle Under Image */}
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-900 text-xs font-bold tracking-wider uppercase">
                  <Flame className="w-3.5 h-3.5 text-amber-700" />
                  <span>{tGuide('badge_exp')}</span>
                </span>
              </div>
            </div>

            {/* Right: Master's Tapasya & Guidance (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-amber-600 rounded-full"></span>
                <span className={`text-amber-800 text-xs font-bold tracking-[0.2em] uppercase ${isHi ? 'font-devanagari' : ''}`}>
                  {tGuide('label')}
                </span>
              </div>

              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] leading-tight ${isHi ? 'font-devanagari' : ''}`}>
                {tGuide('title')}
              </h2>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
                {tGuide('desc')}
              </p>

              {/* 3 Core Pillars */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#e8e2d4] shadow-2xs">
                  <h4 className={`text-base font-bold text-[#092217] mb-1 flex items-center gap-2 ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                    <Flame className="w-4 h-4 text-amber-600" />
                    <span>{tGuide('pillar1_title')}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {tGuide('pillar1_desc')}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#e8e2d4] shadow-2xs">
                  <h4 className={`text-base font-bold text-[#092217] mb-1 flex items-center gap-2 ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>{tGuide('pillar2_title')}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {tGuide('pillar2_desc')}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#e8e2d4] shadow-2xs">
                  <h4 className={`text-base font-bold text-[#092217] mb-1 flex items-center gap-2 ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span>{tGuide('pillar3_title')}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {tGuide('pillar3_desc')}
                  </p>
                </div>
              </div>

              {/* Maharaj Ji's Words Quote Box */}
              <div className="mt-2 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                <p className={`text-sm sm:text-base text-amber-950 font-serif italic ${isHi ? 'font-devanagari' : ''}`}>
                  {isHi
                    ? "“साधना कोई बाहरी प्रदर्शन नहीं, अपितु अंतरात्मा का अपने मूल शांत स्वरूप में विश्राम है।”"
                    : isJa
                    ? "「修行は外に見せるものではなく、魂がその本来の静けさに安らぐことである。」"
                    : "“Sadhana is not an external display, but the effortless resting of the soul in its inherent peace.”"}
                </p>
                <span className="block mt-2 text-xs font-bold text-amber-800 uppercase tracking-widest">
                  — {tGuide('title')}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SACRED GURU PARAMPARA LINEAGE (#lineage) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-margin scroll-mt-20" id="lineage">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>{tGuru('label')}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {tGuru('title')}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            {tGuru('description')}
          </p>
        </div>

        {/* 5 Lineage Guru Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {lineageGurus.map((guru, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-stone-200/90 hover:border-amber-400 p-5 rounded-2xl shadow-2xs hover:shadow-lg transition-all duration-300 text-center flex flex-col justify-between group"
            >
              <div>
                <div className="w-full aspect-[4/5] mx-auto rounded-2xl p-1 border-2 border-amber-300/60 mb-4 overflow-hidden bg-stone-100 shadow-md relative">
                  <img
                    alt={guru.name}
                    className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                    src={guru.image}
                  />
                </div>
                <span className={`text-amber-800 text-[11px] font-bold tracking-widest block mb-1 uppercase ${isHi ? 'font-devanagari' : ''}`}>
                  {guru.role}
                </span>
                <h3 className={`text-base font-serif font-bold text-[#092217] mb-2 leading-snug ${isHi ? 'font-devanagari' : ''}`}>
                  {guru.name}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed font-sans">
                  {guru.desc}
                </p>
              </div>
              <div className={`mt-4 pt-3 border-t border-stone-100 text-amber-900 text-[11px] font-semibold tracking-wider ${isHi ? 'font-devanagari' : ''}`}>
                {guru.footer}
              </div>
            </div>
          ))}
        </div>

        {/* Sacred Lineage Banner Box */}
        <div className="mt-14 max-w-3xl mx-auto p-8 rounded-3xl bg-[#faf7f0] border border-amber-400/40 shadow-2xs text-center">
          <Quote className="w-8 h-8 text-amber-700 mx-auto mb-3" />
          <p className={`text-base sm:text-lg text-stone-800 font-serif italic leading-relaxed ${isHi ? 'font-devanagari' : ''}`}>
            {tGuru('quote')}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800">
            <span>॥ गुरु-कृपा ही केवलम् • तस्मै श्रीगुरवे नमः ॥</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TAPOBHOOMI ENVIRONMENT & SACRED NATURE (#environment) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#faf7f0] border-t border-[#e8e2d4] scroll-mt-20" id="environment">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <TreePine className="w-3.5 h-3.5 text-amber-600" />
              <span className={isHi ? 'font-devanagari' : ''}>{tTap('label')}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] mb-4 ${isHi ? 'font-devanagari' : ''}`}>
              {tTap('title')}
            </h2>
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              {tTap('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-[#e8e2d4] hover:border-amber-400/60 rounded-2xl p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Mountain className="w-6 h-6" />
                </div>
                <span className={`text-xs text-amber-800 font-semibold tracking-wider block mb-1 uppercase ${isHi ? 'font-devanagari' : ''}`}>
                  {tTap('card1_label')}
                </span>
                <h3 className={`text-xl font-serif font-bold text-[#092217] mb-2.5 ${isHi ? 'font-devanagari' : ''}`}>
                  {tTap('card1_title')}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                  {tTap('card1_desc')}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <Sun className="w-4 h-4 text-amber-600" />
                <span>{tTap('card1_footer')}</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#e8e2d4] hover:border-amber-400/60 rounded-2xl p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Wind className="w-6 h-6" />
                </div>
                <span className={`text-xs text-amber-800 font-semibold tracking-wider block mb-1 uppercase ${isHi ? 'font-devanagari' : ''}`}>
                  {tTap('card2_label')}
                </span>
                <h3 className={`text-xl font-serif font-bold text-[#092217] mb-2.5 ${isHi ? 'font-devanagari' : ''}`}>
                  {tTap('card2_title')}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                  {tTap('card2_desc')}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{tTap('card2_footer')}</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#e8e2d4] hover:border-amber-400/60 rounded-2xl p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <TreePine className="w-6 h-6" />
                </div>
                <span className={`text-xs text-amber-800 font-semibold tracking-wider block mb-1 uppercase ${isHi ? 'font-devanagari' : ''}`}>
                  {tTap('card3_label')}
                </span>
                <h3 className={`text-xl font-serif font-bold text-[#092217] mb-2.5 ${isHi ? 'font-devanagari' : ''}`}>
                  {tTap('card3_title')}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
                  {tTap('card3_desc')}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <Flower2 className="w-4 h-4 text-amber-600" />
                <span>{tTap('card3_footer')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. MAUNA (SILENCE) & DAILY SADHANA RHYTHM (#mauna) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#f4efe4] border-y border-[#e8e2d4] scroll-mt-20" id="mauna">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          
          {/* Top: Mauna Essence */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-amber-800 text-xs tracking-widest block mb-3 uppercase font-semibold ${isHi ? 'font-devanagari' : ''}`}>
              {tSil('label')}
            </span>
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-[#092217] mb-5 tracking-tight leading-tight ${isHi ? 'font-devanagari' : ''}`}>
              {tSil('title')}
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed mb-8">
              {tSil('description')}
            </p>
            <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-amber-900 text-xs sm:text-sm font-medium">
              <span className="px-4 py-1.5 rounded-full bg-white border border-amber-300/40 shadow-2xs">{tSil('s1')}</span>
              <span>•</span>
              <span className="px-4 py-1.5 rounded-full bg-white border border-amber-300/40 shadow-2xs">{tSil('s2')}</span>
              <span>•</span>
              <span className="px-4 py-1.5 rounded-full bg-white border border-amber-300/40 shadow-2xs">{tSil('s3')}</span>
            </div>
          </div>

          {/* Bottom: Daily Sadhana Rhythm */}
          <div className="bg-white/80 backdrop-blur-xs border border-amber-400/30 rounded-3xl p-8 sm:p-10 shadow-xs">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">
                {isHi ? "दैनिक प्रवाह" : "Ashram Sadhana Rhythm"}
              </span>
              <h3 className={`text-2xl font-serif font-bold text-[#092217] ${isHi ? 'font-devanagari' : ''}`}>
                {isHi ? "दैनिक आश्रम साधना क्रम (नित्य प्रवाह)" : "Daily Flow of Contemplation and Tapasya"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {dailyRhythm.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#faf7f0] border border-stone-200/80 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-700 block mb-1">
                      {item.time}
                    </span>
                    <h4 className={`text-base font-bold text-[#092217] mb-1 ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ASHRAM GALLERY & SACRED DARSHAN (#gallery) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-white border-b border-[#e8e2d4] scroll-mt-20" id="gallery">
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
                  alt="Sacred Yajnashala"
                  src="/images/ashram_courtyard.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className={`text-sm sm:text-base font-bold ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                    {tGal('img2_title')}
                  </h5>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl h-56 md:h-[215px] shadow-sm">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Meditation Hall"
                  src="/images/meditation_hall.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h5 className={`text-sm sm:text-base font-bold ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                    {tGal('img4_title')}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SPIRITUAL FAMILY & INVITATION CTAs */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#faf7f0] to-[#f7f3ea] border-t border-[#e8e2d4] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Heart className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {isHi ? "आध्यात्मिक आमंत्रण" : isJa ? "霊的なお招き" : "Sacred Invitation"}
            </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] mb-5 ${isHi ? 'font-devanagari' : ''}`}>
            {tFam('title')}
          </h2>

          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            {tFam('description')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses/vedic-bio-healing"
              className="inline-flex items-center gap-2 bg-[#092217] hover:bg-[#143a28] text-white px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-md transition-all group"
            >
              <span>{isHi ? "हमारे पाठ्यक्रम देखें" : isJa ? "コース案内を見る" : "Explore Courses"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#faf7f0] text-stone-900 px-6 py-3.5 rounded-xl font-semibold text-sm border border-stone-300 shadow-2xs hover:border-amber-400 transition-colors"
            >
              <CalendarDays className="w-4 h-4 text-amber-600" />
              <span>{isHi ? "आगामी कार्यक्रम देखें" : isJa ? "今後のイベント" : "Upcoming Events"}</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-colors"
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

