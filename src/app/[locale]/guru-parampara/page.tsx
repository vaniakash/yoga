"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Quote,
  Sparkles,
  ArrowRight,
  Flame,
  Award,
  Flower2,
  Compass,
  Heart
} from 'lucide-react';

export default function GuruParamparaPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tGuru = useTranslations('GuruParampara');

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

  return (
    <div className="bg-[#fcfbf7] text-[#1c2e24] flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* 1. HERO / HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f3ea] via-[#faf7f0] to-[#fcfbf7] pt-14 pb-20 border-b border-[#e8e2d4]">
        {/* Soft Ambient Warm Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-b from-amber-400/15 via-orange-300/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-margin text-center">
          {/* Tradition Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>{tGuru('label')}</span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {tGuru('title')}
          </h1>

          {/* Description */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {tGuru('description')}
          </p>
        </div>
      </section>

      {/* 2. FIVE LINEAGE GURUS GRID */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-margin">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {lineageGurus.map((guru, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-stone-200/90 hover:border-amber-400 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between group"
            >
              <div>
                <div className="w-full aspect-[4/5] mx-auto rounded-2xl p-1 border-2 border-amber-300/60 mb-5 overflow-hidden bg-stone-100 shadow-md relative">
                  <img
                    alt={guru.name}
                    className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                    src={guru.image}
                  />
                </div>
                <span className={`text-amber-800 text-[11px] font-bold tracking-widest block mb-1 uppercase ${isHi ? 'font-devanagari' : ''}`}>
                  {guru.role}
                </span>
                <h3 className={`text-base sm:text-lg font-serif font-bold text-[#092217] mb-2 leading-snug ${isHi ? 'font-devanagari' : ''}`}>
                  {guru.name}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed font-sans">
                  {guru.desc}
                </p>
              </div>
              <div className={`mt-5 pt-3 border-t border-stone-100 text-amber-900 text-[11px] font-semibold tracking-wider ${isHi ? 'font-devanagari' : ''}`}>
                {guru.footer}
              </div>
            </div>
          ))}
        </div>

        {/* Sacred Lineage Quote Box */}
        <div className="mt-14 max-w-3xl mx-auto p-8 rounded-3xl bg-[#faf7f0] border border-amber-400/40 shadow-sm text-center">
          <Quote className="w-8 h-8 text-amber-700 mx-auto mb-3" />
          <p className={`text-base sm:text-lg text-stone-800 font-serif italic leading-relaxed ${isHi ? 'font-devanagari' : ''}`}>
            {tGuru('quote')}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-800">
            <span>गुरु-कृपा ही केवलम्</span>
          </div>
        </div>
      </section>

      {/* 3. SPIRITUAL HERITAGE & PHILOSOPHICAL ESSENCE */}
      <section className="py-20 bg-[#faf7f0] border-t border-[#e8e2d4]">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className={`text-lg font-bold text-[#092217] mb-2 ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                {isHi ? "तपोनिष्ठ साधना" : isJa ? "本格的な苦行" : "Dedicated Tapasya"}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {isHi
                  ? "हिमालय की एकांत गुफाओं और वनों में दशकों तक अखंड स्वाध्याय और आत्म-साधना से उपजी प्रामाणिक आध्यात्मिक ऊर्जा।"
                  : isJa
                  ? "ヒマラヤの静寂の中で数十年にわたり培われた本格的な霊的修行のエネルギー。"
                  : "Authentic spiritual depth cultivated over decades of unbroken sadhana and scriptural contemplation in Himalayan seclusion."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className={`text-lg font-bold text-[#092217] mb-2 ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                {isHi ? "शक्तिपात एवं प्राण-विज्ञान" : isJa ? "シャクティパート" : "Shaktipat & Prana"}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {isHi
                  ? "गुरु-परंपरा की दिव्य कृपा से साधक में सुप्त आध्यात्मिक चेतना एवं प्राण-ऊर्जा का सहज और पवित्र संचरण।"
                  : isJa
                  ? "グルの神聖な恩寵により、探求者の内なる霊的覚醒とプラーナの流れが促される伝統。"
                  : "Transmission of divine grace that awakens latent spiritual consciousness through traditional guru-shishya lineages."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center mb-4">
                <Flower2 className="w-5 h-5" />
              </div>
              <h4 className={`text-lg font-bold text-[#092217] mb-2 ${isHi ? 'font-devanagari' : 'font-serif'}`}>
                {isHi ? "आंतरिक समर्पण एवं मौन" : isJa ? "内なる静寂" : "Inner Surrender"}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {isHi
                  ? "अहंकार से परे होकर आत्म-चिंतन, मौन और गुरु-चरणों में आंतरिक समर्पण द्वारा शांति का साक्षात्कार।"
                  : isJa
                  ? "エゴを超え、静寂と献身によって真の心の平和を体験する道。"
                  : "Transcending superficial distractions through inner quietude, contemplation, and dedicated reverence."}
              </p>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#guide"
              className="inline-flex items-center gap-2 bg-[#092217] hover:bg-[#143a28] text-white px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-md transition-all duration-200 group"
            >
              <span>{isHi ? "पूज्य महाराज जी के बारे में जानें" : isJa ? "指導者について" : "Meet Pujaniya Maharaj Ji"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tapobhoomi"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#faf7f0] text-stone-900 px-6 py-3.5 rounded-xl font-semibold text-sm border border-stone-300 transition-colors"
            >
              <span>{isHi ? "तपोभूमि आश्रम देखें" : isJa ? "タポーブーミを見る" : "Explore Tapobhoomi Ashram"}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
