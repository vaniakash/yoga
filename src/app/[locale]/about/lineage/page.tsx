"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  Mountain,
  Heart,
  Quote,
  Eye,
  Wind,
  Compass,
  ArrowRight,
  Mail
} from 'lucide-react';

export default function LineagePage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tGuru = useTranslations('GuruParampara');
  const tNav = useTranslations('Navbar');

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
          {/* Tradition Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#789B80]/10 border border-[#789B80]/25 text-[#234638] text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#789B80]" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {tGuru('label')}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#234638] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {isHi
              ? "हमारी गुरु परंपरा (Guru Parampara)"
              : isJa
              ? "グル・パランパラ（師弟の系譜）"
              : "Our Lineage (Guru Parampara)"}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {tGuru('description')}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SACRED REVERED MASTERS GRID */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-margin max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#234638] uppercase tracking-widest block mb-2">
            {isHi ? "पावन संत परंपरा" : "Sacred Lineage Stream"}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
            {tGuru('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lineageGurus.map((guru, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-[#789B80] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <img
                  src={guru.image}
                  alt={guru.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs uppercase tracking-wider text-[#789B80] font-semibold">
                    {guru.role}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-lg sm:text-xl font-serif font-bold text-[#234638] mb-2 group-hover:text-[#234638] transition-colors ${isHi ? 'font-devanagari' : ''}`}>
                    {guru.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    {guru.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#234638]">
                  <Sparkles className="w-3.5 h-3.5 text-[#789B80]" />
                  <span>{guru.footer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SACRED LINEAGE SEAL / BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F8F6EF] border-y border-[#DADDD3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-2xl sm:text-3xl text-[#234638] font-serif font-bold block mb-4">
            ॥ गुरु-कृपा ही केवलम् ॥
          </span>
          <p className={`text-base sm:text-lg text-stone-700 italic font-serif leading-relaxed max-w-2xl mx-auto ${isHi ? 'font-devanagari' : ''}`}>
            {tGuru('quote')}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXPLORE OTHER ABOUT PAGES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
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
      {/* 5. SPIRITUAL INVITATION */}
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

