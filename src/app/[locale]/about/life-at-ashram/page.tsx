"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  Mountain,
  Heart,
  Wind,
  Clock,
  Compass,
  Eye,
  ArrowRight,
  Flame,
  Sun,
  Mail
} from 'lucide-react';

export default function LifeAtAshramPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tSil = useTranslations('Silence');
  const tGal = useTranslations('Gallery');
  const tNav = useTranslations('Navbar');

  const dailyRhythm = [
    {
      time: isHi ? "प्रातः ०६:०० - ०७:३०" : isJa ? "午前 06:00 - 07:30" : "06:00 AM - 07:30 AM",
      title: isHi ? "प्रातःकालीन ध्यान एवं प्राणायाम" : isJa ? "早朝の瞑想とプラーナーヤーマ" : "Morning Dhyana & Pranayama",
      desc: isHi ? "सूर्योदय के समय हिमालयी प्राणवायु में गहरी अंतर्मुखी साधना।" : isJa ? "朝日に包まれるヒマラヤのプラーナの中で行う内省的瞑想。" : "Deep contemplative meditation in pure high-altitude Himalayan prana.",
      icon: Sun,
    },
    {
      time: isHi ? "प्रातः ०८:०० - ०९:३०" : isJa ? "午前 08:00 - 09:30" : "08:00 AM - 09:30 AM",
      title: isHi ? "वैदिक यज्ञ एवं अग्निहोत्र" : isJa ? "ヴェーダのヤジュニャとアグニホートラ" : "Vedic Yajna & Agnihotra",
      desc: isHi ? "पारंपरिक यज्ञशाला में अथर्ववेदीय मंत्रों द्वारा प्रकृति व चेतना की शुद्धि।" : isJa ? "伝統的なヤジュニャ・シャーラーで行われる神聖な火の儀式。" : "Sacred fire purification with Atharvavedic chanting in the traditional pavilion.",
      icon: Flame,
    },
    {
      time: isHi ? "अपराह्न ०३:३० - ०५:००" : isJa ? "午後 03:30 - 05:00" : "03:30 PM - 05:00 PM",
      title: isHi ? "स्वाध्याय एवं शास्त्र-चिंतन" : isJa ? "経典学習（スヴァディヤーヤ）と省察" : "Swadhyaya & Scriptural Study",
      desc: isHi ? "उपनिषदों, वेदान्त एवं गुरु-वचनों का मौन मनन एवं आध्यात्मिक जिज्ञासा।" : isJa ? "ウパニシャッドやヴェーダーンタの教えの静かな省察。" : "Contemplation of Upanishadic truths and Guru's wisdom in quietude.",
      icon: Wind,
    },
    {
      time: isHi ? "सायं ०६:३० - ०७:४५" : isJa ? "午後 06:30 - 07:45" : "06:30 PM - 07:45 PM",
      title: isHi ? "सायंकालीन दीप आराधना एवं मौन" : isJa ? "夕べの祈り（ディーパ・アーラティ）と沈黙" : "Evening Deepa Aradhana & Silence",
      desc: isHi ? "गोविंदानंद जी महाराज के सान्निध्य में संध्या आरती एवं पूर्ण मौन।" : isJa ? "夕暮れの光の礼拝と完全な沈黙による静寂の体験。" : "Vesper lamps offering followed by unbroken evening silence and absorption.",
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#789B80]/10 border border-[#789B80]/25 text-[#234638] text-xs font-semibold tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <Wind className="w-3.5 h-3.5 text-[#789B80]" />
            <span className={isHi ? 'font-devanagari' : ''}>
              {tSil('label')}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#234638] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {isHi
              ? "श्रीध्यान आश्रम में जीवन एवं साधना"
              : isJa
              ? "シュリディヤン・アシュラムの生活と修行"
              : "Life at Shridhyan Ashram"}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {tSil('description')}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THREE PILLARS OF SILENCE */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 px-6 md:px-margin max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#234638] uppercase tracking-widest block mb-2">
            {isHi ? "मौन साधना के तीन सोपान" : "Three Portals of Silence"}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
            {tSil('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#F8F6EF] border border-[#789B80]/25 text-center flex flex-col items-center shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#789B80]/15 text-[#234638] flex items-center justify-center mb-6">
              <Wind className="w-7 h-7" />
            </div>
            <h3 className={`text-xl font-serif font-bold text-[#234638] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
              {tSil('s1')}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-sans">
              {isHi
                ? "वाणी का संयम और अनावश्यक शब्दों का त्याग, जिससे अंतर्मुखी ऊर्जा संचित होती है।"
                : "Restraining speech and letting words dissolve into presence to conserve spiritual energy."}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F6EF] border border-[#789B80]/25 text-center flex flex-col items-center shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#789B80]/15 text-[#234638] flex items-center justify-center mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className={`text-xl font-serif font-bold text-[#234638] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
              {tSil('s2')}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-sans">
              {isHi
                ? "इन्द्रियों को बाह्य आकर्षणों से हटाकर आत्मा की ओर मोड़ना ही वास्तविक शांति है।"
                : "Turning sensory perception away from worldly noise toward the inner center."}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F8F6EF] border border-[#789B80]/25 text-center flex flex-col items-center shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#789B80]/15 text-[#234638] flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className={`text-xl font-serif font-bold text-[#234638] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
              {tSil('s3')}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-sans">
              {isHi
                ? "विचारों के शांत होते ही चेतना अपने शुद्ध, प्रकाशमान स्वरूप में जाग उठती है।"
                : "As mental agitation stills, awareness awakens to its pure luminous essence."}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DAILY SADHANA RHYTHM */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-y border-[#DADDD3]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#234638] uppercase tracking-widest block mb-2">
              {isHi ? "दैनिक दिनचर्या" : "Daily Rhythm"}
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
              {isHi ? "आश्रम का दैनिक साधना प्रवाह" : "The Daily Sadhana Schedule"}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-sans">
              {isHi
                ? "प्रभात की ब्रह्म-बेला से लेकर रात्रि के मौन तक, प्रत्येक क्षण साधना और शांति को समर्पित है।"
                : "From early Brahma Muhurta to evening silence, each hour flows naturally with yogic contemplation."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {dailyRhythm.map((slot, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F8F6EF] border border-stone-200 hover:border-[#789B80] transition-colors shadow-2xs flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#789B80]/10 text-[#789B80] flex items-center justify-center flex-shrink-0">
                  <slot.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#234638] mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot.time}</span>
                  </div>
                  <h3 className={`text-base sm:text-lg font-serif font-bold text-[#234638] mb-1.5 ${isHi ? 'font-devanagari' : ''}`}>
                    {slot.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {slot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. VISUAL SANCTUM GLIMPSE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F8F6EF]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#234638] uppercase tracking-widest block mb-2">
              {isHi ? "पवित्र स्थल" : "Sacred Grounds"}
            </span>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
              {tGal('title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl h-72 sm:h-80 shadow-md">
              <img
                src="/images/yajna_shala.jpg"
                alt="Yajna Shala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#789B80] font-semibold mb-1">
                  {isHi ? "अथर्ववेदीय यज्ञशाला" : "Vedic Pavilion"}
                </span>
                <h4 className={`text-lg sm:text-xl font-serif font-bold ${isHi ? 'font-devanagari' : ''}`}>
                  {tGal('img1_title')}
                </h4>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl h-72 sm:h-80 shadow-md">
              <img
                src="/images/meditation_hall.jpg"
                alt="Meditation Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#789B80] font-semibold mb-1">
                  {isHi ? "ध्यान कक्ष" : "Contemplation Hall"}
                </span>
                <h4 className={`text-lg sm:text-xl font-serif font-bold ${isHi ? 'font-devanagari' : ''}`}>
                  {tGal('img4_title')}
                </h4>
              </div>
            </div>
          </div>
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

