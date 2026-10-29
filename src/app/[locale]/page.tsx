"use client";

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Users,
  Play,
  X,
  ChevronDown,
  Award,
  Wind,
  Hand,
  Heart,
  Flower2,
  ArrowRight,
  Calendar,
  AlertCircle,
  Quote,
  Flame,
  Check,
  MapPin
} from 'lucide-react';

export default function HomePage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tGuide = useTranslations('Guide');
  const tTeach = useTranslations('SpiritualTeachings');
  const tBenefits = useTranslations('Benefits');
  const tCurriculum = useTranslations('Curriculum');
  const tEnroll = useTranslations('Enrollment');
  const tTestimonials = useTranslations('Testimonials');
  const tPositioning = useTranslations('Positioning');
  const tFAQ = useTranslations('FAQ');
  const tPhil = useTranslations('Philosophy');
  const tTap = useTranslations('Tapobhoomi');
  const tGuru = useTranslations('GuruParampara');
  const tSil = useTranslations('Silence');
  const tGal = useTranslations('Gallery');
  const tFam = useTranslations('SpiritualFamily');
  const tCon = useTranslations('Contact');

  // Masterclass Modal State
  const [masterclassOpen, setMasterclassOpen] = useState(false);

  // Benefits Tab State
  const [activeBenefitTab, setActiveBenefitTab] = useState<'personal' | 'practical' | 'professional'>('personal');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Contact / Enrollment Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '7-Day Vedic Bio Healing Foundation Course',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Shridhyan Enrollment Inquiry: ${formData.course} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSelected Course: ${formData.course}\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:shridhyan.com@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const faqItems = [
    { q: tFAQ('q1'), a: tFAQ('a1') },
    { q: tFAQ('q2'), a: tFAQ('a2') },
    { q: tFAQ('q3'), a: tFAQ('a3') },
    { q: tFAQ('q4'), a: tFAQ('a4') },
    { q: tFAQ('q5'), a: tFAQ('a5') }
  ];

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

  const coursesData = [
    {
      title: tTeach('c1_title'),
      category: tTeach('c1_category'),
      desc: tTeach('c1_desc'),
      href: '/courses/vedic-bio-healing',
      image: '/images/ashram_courtyard.jpg',
    },
    {
      title: tTeach('c2_title'),
      category: tTeach('c2_category'),
      desc: tTeach('c2_desc'),
      href: '/courses/meditation-teacher-training',
      image: '/images/meditation_hall.jpg',
    },
    {
      title: tTeach('c3_title'),
      category: tTeach('c3_category'),
      desc: tTeach('c3_desc'),
      href: '/courses/shri-vidya',
      image: '/images/sri_chakra.jpg',
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

              {/* The 3 Pillars as Sleek, Elegant Hairline List (Minimalist & Uncluttered) */}
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
                <a
                  href="#guru-parampara"
                  className="text-amber-800 hover:text-amber-600 font-semibold underline underline-offset-4 flex items-center gap-1 transition-colors"
                >
                  <span>{isHi ? "गुरु परंपरा देखें" : "View Guru Parampara"}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* OUR SPIRITUAL TEACHINGS / हमारे आध्यात्मिक पाठ्यक्रम */}
      <section className="py-20 md:py-28 bg-[#fcfbf7] border-b border-[#e8e2d4] relative overflow-hidden scroll-mt-24" id="courses">
        {/* Soft Ambient Warm Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-0 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-margin relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
              <span className={isHi ? 'font-devanagari' : ''}>{tTeach('label')}</span>
            </div>
            
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${isHi ? 'font-devanagari' : ''}`}>
              {tTeach('heading')}
            </h2>
            
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {tTeach('description')}
            </p>
          </div>

          {/* Three Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {coursesData.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8e2d4] hover:border-amber-400/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-900 border border-amber-400/30 shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span className={isHi ? 'font-devanagari' : ''}>{course.category}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className={`text-xl sm:text-2xl font-serif font-bold text-[#092217] group-hover:text-amber-800 transition-colors mb-3 leading-snug ${isHi ? 'font-devanagari' : ''}`}>
                      {course.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed font-sans">
                      {course.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2">
                  <div className="pt-4 border-t border-stone-100">
                    <Link
                      href={course.href}
                      className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-[#faf7f0] group-hover:bg-[#092217] text-[#092217] group-hover:text-white font-semibold text-sm transition-all duration-300 border border-[#e8e2d4] group-hover:border-[#092217]"
                    >
                      <span className={isHi ? 'font-devanagari' : ''}>{tTeach('btn_view')}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Link: View All Courses */}
          <div className="mt-14 text-center">
            <a
              href="#enroll"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#faf7f0] text-amber-900 border border-amber-300/60 shadow-sm hover:shadow font-semibold text-sm transition-all duration-200 group"
            >
              <span className={isHi ? 'font-devanagari' : ''}>{tTeach('view_all')}</span>
              <ArrowRight className="w-4 h-4 text-amber-700 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. KEY BENEFITS OF THE COURSE */}
      <section className="py-24 bg-surface px-6 md:px-margin max-w-7xl mx-auto" id="benefits">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-tertiary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
            {tBenefits('label')}
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {tBenefits('title')}
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            {tBenefits('subtitle')}
          </p>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 p-1.5 rounded-2xl bg-surface-container-low max-w-xl mx-auto border border-outline-variant/30">
            <button
              onClick={() => setActiveBenefitTab('personal')}
              className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeBenefitTab === 'personal'
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {tBenefits('tab_personal')}
            </button>
            <button
              onClick={() => setActiveBenefitTab('practical')}
              className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeBenefitTab === 'practical'
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {tBenefits('tab_practical')}
            </button>
            <button
              onClick={() => setActiveBenefitTab('professional')}
              className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeBenefitTab === 'professional'
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {tBenefits('tab_professional')}
            </button>
          </div>
        </div>

        {/* Tab Content Cards */}
        {activeBenefitTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wind className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tBenefits('cat1_b1_title')}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {tBenefits('cat1_b1_desc')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tBenefits('cat1_b2_title')}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {tBenefits('cat1_b2_desc')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Flower2 className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tBenefits('cat1_b3_title')}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {tBenefits('cat1_b3_desc')}
              </p>
            </div>
          </div>
        )}

        {activeBenefitTab === 'practical' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Hand className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tBenefits('cat2_b1_title')}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {tBenefits('cat2_b1_desc')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tBenefits('cat2_b2_title')}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {tBenefits('cat2_b2_desc')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tBenefits('cat2_b3_title')}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {tBenefits('cat2_b3_desc')}
              </p>
            </div>
          </div>
        )}

        {activeBenefitTab === 'professional' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tBenefits('cat3_b1_title')}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {tBenefits('cat3_b1_desc')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Flame className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tBenefits('cat3_b2_title')}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {tBenefits('cat3_b2_desc')}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 4. STEP-BY-STEP COURSE CURRICULUM */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20" id="curriculum">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tertiary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              {tCurriculum('label')}
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 ${isHi ? 'font-devanagari' : ''}`}>
              {tCurriculum('title')}
            </h2>
            <p className="text-body-md text-on-surface-variant">
              {tCurriculum('subtitle')}
            </p>
          </div>

          {/* 5 Sequential Module Cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Stage 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start gap-5">
              <div className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono font-bold text-xs uppercase flex-shrink-0 border border-amber-400/30">
                {tCurriculum('m1_badge')}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold text-primary mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                  {tCurriculum('m1_title')}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {tCurriculum('m1_desc')}
                </p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start gap-5">
              <div className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono font-bold text-xs uppercase flex-shrink-0 border border-amber-400/30">
                {tCurriculum('m2_badge')}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold text-primary mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                  {tCurriculum('m2_title')}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {tCurriculum('m2_desc')}
                </p>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start gap-5">
              <div className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono font-bold text-xs uppercase flex-shrink-0 border border-amber-400/30">
                {tCurriculum('m3_badge')}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold text-primary mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                  {tCurriculum('m3_title')}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {tCurriculum('m3_desc')}
                </p>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start gap-5">
              <div className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono font-bold text-xs uppercase flex-shrink-0 border border-amber-400/30">
                {tCurriculum('m4_badge')}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold text-primary mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                  {tCurriculum('m4_title')}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {tCurriculum('m4_desc')}
                </p>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start gap-5">
              <div className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-mono font-bold text-xs uppercase flex-shrink-0 border border-amber-400/30">
                {tCurriculum('m5_badge')}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold text-primary mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                  {tCurriculum('m5_title')}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {tCurriculum('m5_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COURSE ENROLLMENT SECTION (LIMITED 25 SEATS) */}
      <section className="py-20 bg-[#f7f3ea] border-t border-[#e8e2d4] text-[#1c2e24] relative" id="enroll">
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
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary leading-tight ${isHi ? 'font-devanagari' : ''}`}>
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
                <div className="text-xl sm:text-2xl font-bold text-primary font-serif">
                  7-Day Foundation Course
                </div>
                <p className="text-xs text-stone-600">
                  Includes live sessions, manual, practice audio & completion certificate.
                </p>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm tracking-wide shadow-md transition-all duration-200 active:scale-95"
                >
                  <span>{tEnroll('cta_enroll')}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setMasterclassOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs sm:text-sm font-medium transition-colors"
                >
                  <Play className="w-4 h-4 text-amber-700 fill-current" />
                  <span>{tEnroll('masterclass_btn')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCUMENTED TESTIMONIALS & CASE STUDIES */}
      <section className="py-24 bg-surface px-6 md:px-margin max-w-7xl mx-auto" id="testimonials">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-tertiary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
            {tTestimonials('label')}
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {tTestimonials('title')}
          </h2>
          <p className="text-body-md text-on-surface-variant">
            {tTestimonials('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-amber-500/40 mb-4" />
              <p className="text-body-sm text-on-surface leading-relaxed italic mb-6">
                {tTestimonials('t1_text')}
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20">
              <h4 className="font-bold text-primary text-sm">{tTestimonials('t1_name')}</h4>
              <p className="text-xs text-on-surface-variant">{tTestimonials('t1_role')}</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-amber-500/40 mb-4" />
              <p className="text-body-sm text-on-surface leading-relaxed italic mb-6">
                {tTestimonials('t2_text')}
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20">
              <h4 className="font-bold text-primary text-sm">{tTestimonials('t2_name')}</h4>
              <p className="text-xs text-on-surface-variant">{tTestimonials('t2_role')}</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <Quote className="w-8 h-8 text-amber-500/40 mb-4" />
              <p className="text-body-sm text-on-surface leading-relaxed italic mb-6">
                {tTestimonials('t3_text')}
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20">
              <h4 className="font-bold text-primary text-sm">{tTestimonials('t3_name')}</h4>
              <p className="text-xs text-on-surface-variant">{tTestimonials('t3_role')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLEAR POSITIONING: TRADITIONAL WISDOM FOR MODERN LIFE */}
      <section className="py-12 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-tertiary mb-3 text-xs font-semibold tracking-widest uppercase">
            <AlertCircle className="w-4 h-4" />
            <span>Ethical Responsibility & Clarity</span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-serif font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
            {tPositioning('title')}
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            {tPositioning('text')}
          </p>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-24 bg-surface px-6 md:px-margin max-w-4xl mx-auto" id="faq">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-tertiary text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
            {tFAQ('label')}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
            {tFAQ('title')}
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-primary text-base hover:text-tertiary transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-tertiary transition-transform duration-300 flex-shrink-0 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. SACRED TAPOBHOOMI & ASHRAM PHILOSOPHY */}
      <AboutSection />

      {/* 10. TAPOBHOOMI ENVIRONMENT & MATHALI */}
      <section className="py-24 px-6 md:px-margin max-w-7xl mx-auto" id="tapobhoomi">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-tertiary text-label-md font-label-md tracking-wider block mb-2 ${isHi ? 'font-devanagari' : ''}`}>
            {tTap('label')}
          </span>
          <h2 className={`text-headline-lg font-headline-lg text-primary mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {tTap('title')}
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            {tTap('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">landscape</span>
              </div>
              <span className={`text-xs text-tertiary font-semibold tracking-wider block mb-1 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card1_label')}
              </span>
              <h3 className={`text-headline-sm font-headline-sm text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card1_title')}
              </h3>
              <p className={`text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card1_desc')}
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
              <span className="material-symbols-outlined text-sm">nature</span>
              <span>{tTap('card1_footer')}</span>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">self_improvement</span>
              </div>
              <span className={`text-xs text-tertiary font-semibold tracking-wider block mb-1 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card2_label')}
              </span>
              <h3 className={`text-headline-sm font-headline-sm text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card2_title')}
              </h3>
              <p className={`text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card2_desc')}
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
              <span className="material-symbols-outlined text-sm">spa</span>
              <span>{tTap('card2_footer')}</span>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">park</span>
              </div>
              <span className={`text-xs text-tertiary font-semibold tracking-wider block mb-1 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card3_label')}
              </span>
              <h3 className={`text-headline-sm font-headline-sm text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card3_title')}
              </h3>
              <p className={`text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4 ${isHi ? 'font-devanagari' : ''}`}>
                {tTap('card3_desc')}
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
              <span className="material-symbols-outlined text-sm">filter_vintage</span>
              <span>{tTap('card3_footer')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. GURU PARAMPARA */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20" id="guru-parampara">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-tertiary"></span>
              <span className={`text-tertiary text-label-md font-label-md tracking-wider ${isHi ? 'font-devanagari' : ''}`}>
                {tGuru('label')}
              </span>
              <span className="w-8 h-[1px] bg-tertiary"></span>
            </div>
            <h2 className={`text-headline-lg font-headline-lg text-primary mb-4 ${isHi ? 'font-devanagari' : ''}`}>
              {tGuru('title')}
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              {tGuru('description')}
            </p>
          </div>

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
                  <h3 className={`text-base sm:text-lg font-serif font-bold text-primary mb-2 leading-snug ${isHi ? 'font-devanagari' : ''}`}>
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

          <div className="mt-12 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <Quote className="w-6 h-6 text-amber-700 mx-auto mb-2" />
            <p className={`text-sm text-stone-800 font-serif italic leading-relaxed ${isHi ? 'font-devanagari' : ''}`}>
              {tGuru('quote')}
            </p>
          </div>
        </div>
      </section>

      {/* 12. MAUNA / SILENCE */}
      <section className="bg-[#f4efe4] text-[#1c2e24] py-20 border-y border-[#e8e2d4] relative" id="mauna">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className={`text-amber-800 text-xs tracking-widest block mb-4 uppercase font-semibold ${isHi ? 'font-devanagari' : ''}`}>
            {tSil('label')}
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-wide leading-tight ${isHi ? 'font-devanagari' : 'font-serif'}`}>
            {tSil('title')}
          </h2>
          <p className="text-stone-700 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
            {tSil('description')}
          </p>
          <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-amber-900 text-sm font-medium">
            <span>{tSil('s1')}</span>
            <span>•</span>
            <span>{tSil('s2')}</span>
            <span>•</span>
            <span>{tSil('s3')}</span>
          </div>
        </div>
      </section>

      {/* 13. GALLERY & ASHRAM DARSHAN */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20" id="gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className={`text-tertiary text-label-md font-label-md tracking-wider block mb-2 ${isHi ? 'font-devanagari' : ''}`}>
                {tGal('label')}
              </span>
              <h2 className={`text-headline-lg font-headline-lg text-primary ${isHi ? 'font-devanagari' : ''}`}>
                {tGal('title')}
              </h2>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md mt-4 md:mt-0">
              {tGal('description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl h-80 md:h-[450px]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Golden dawn over misty Himalayan valley in Uttarkashi"
                src="/images/himalaya_misty_peaks.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-on-primary">
                <span className="text-xs text-tertiary-fixed font-label-sm uppercase tracking-wider">
                  {tGal('img1_label')}
                </span>
                <h4 className={`text-lg font-semibold ${isHi ? 'font-devanagari' : ''}`}>
                  {tGal('img1_title')}
                </h4>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-5">
              <div className="group relative overflow-hidden rounded-2xl h-56 md:h-[215px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Traditional sacred Vedic yajnashala sacrificial fire pavilion"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF0_RyvZM0TFhPyLMAZYADJ8mvLHmwLGTTvkIti29X_mc1GGvBOuTDMrVDM7KcAZL77jwaxIHmSwSLQMSYzWxDhQjn-c39171cCAA--plk41MhU649Jl1SysSlcqQtJgtHG_XAczWI-SD0MY80FR2sZi0dcs78reMqqYpdz3oaHvPaCLnyqoC84odzTM14EWn0bMhRh1OpY7XW-tZYd6wjXg4tV-U-NvtaiJgVRubjJaAC-7UCFIqP_Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-on-primary">
                  <h5 className={`text-sm font-medium ${isHi ? 'font-devanagari' : ''}`}>
                    {tGal('img2_title')}
                  </h5>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl h-56 md:h-[215px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Serene stone courtyard in Himalayan ashram setting"
                  src="/images/ashram_courtyard.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-on-primary">
                  <h5 className={`text-sm font-medium ${isHi ? 'font-devanagari' : ''}`}>
                    {tGal('img3_title')}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. ENROLLMENT & LOCATION CONTACT FORM */}
      <section className="py-24 px-6 md:px-margin max-w-7xl mx-auto" id="contact">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-tertiary text-label-md font-label-md tracking-wider block mb-2 ${isHi ? 'font-devanagari' : ''}`}>
            {tCon('label')}
          </span>
          <h2 className={`text-headline-lg font-headline-lg text-primary mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {tCon('title')}
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            {tCon('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location & Connectivity */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className={`text-headline-sm font-headline-sm text-primary flex items-center gap-2 ${isHi ? 'font-devanagari' : ''}`}>
                  <span className="material-symbols-outlined text-tertiary">location_on</span>
                  <span>{tCon('location_title')}</span>
                </h3>
              </div>

              <p className="text-body-sm font-body-sm text-on-surface leading-relaxed mb-4">
                {tCon('location_text')}
              </p>

              {/* Map Embed */}
              <div className="relative h-64 w-full rounded-xl overflow-hidden border border-outline-variant/40 mb-4 bg-surface-container">
                <iframe
                  title="Shridhyan Ashram Mathali Uttarkashi Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=30.821991,78.609482&hl=en&z=14&output=embed"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <a
                  className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary text-on-primary px-5 py-2.5 rounded-xl text-label-md font-label-md transition-all shadow-sm gilded-inset"
                  href="https://maps.google.com/?q=30.821991,78.609482"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-base">map</span>
                  <span>{tCon('view_map')}</span>
                </a>
                <span className="text-xs text-on-surface-variant font-mono bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">
                  📍 30.821991° N, 78.609482° E • Mathali, Uttarkashi
                </span>
              </div>
            </div>

            {/* Connectivity Guide */}
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6">
              <h3 className={`text-headline-sm font-headline-sm text-primary mb-4 flex items-center gap-2 ${isHi ? 'font-devanagari' : ''}`}>
                <span className="material-symbols-outlined text-tertiary">near_me</span>
                <span>{tCon('how_to_reach')}</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">flight</span>
                  <div>
                    <strong className="text-on-surface text-body-sm font-semibold">{tCon('air_label')}</strong>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      {tCon('air_desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">train</span>
                  <div>
                    <strong className="text-on-surface text-body-sm font-semibold">{tCon('rail_label')}</strong>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      {tCon('rail_desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">directions_car</span>
                  <div>
                    <strong className="text-on-surface text-body-sm font-semibold">{tCon('road_label')}</strong>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      {tCon('road_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Application Form */}
          <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-8 shadow-sm gilded-inset">
            <h3 className={`text-headline-sm font-headline-sm text-primary mb-1 ${isHi ? 'font-devanagari' : ''}`}>
              {tCon('form_title')}
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
              {tCon('form_desc')}
            </p>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                  {tCon('name_label')}
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-xl px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                  placeholder={tCon('name_placeholder')}
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                    {tCon('phone_label')}
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-xl px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                    placeholder="+91 9XXXXXXXXX"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                    {tCon('email_label')}
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-xl px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                    placeholder="email@example.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                  {tCon('subject_label')}
                </label>
                <select
                  className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-xl px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="7-Day Vedic Bio Healing Foundation Course">{tCon('opt1')}</option>
                  <option value="Meditation Teacher Training Course">{tCon('opt2')}</option>
                  <option value="Shri Vidya Sadhana">{tCon('opt3')}</option>
                  <option value="Meditation & Silence Retreat">{tCon('opt4')}</option>
                  <option value="General Ashram Inquiry">{tCon('opt5')}</option>
                </select>
              </div>

              <div>
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                  {tCon('message_label')}
                </label>
                <textarea
                  className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-xl px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                  placeholder={tCon('message_placeholder')}
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-amber-500/25 active:scale-95"
                type="submit"
              >
                {tCon('submit')}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <a
                className="flex items-center gap-1.5 text-primary hover:text-tertiary font-medium"
                href="https://maps.google.com/?q=30.821991,78.609482"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">map</span>
                <span>{tCon('view_map')}</span>
              </a>
              <span className="text-outline">|</span>
              <a
                className="flex items-center gap-1.5 text-secondary hover:text-primary font-medium"
                href="mailto:shridhyan.com@gmail.com"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                <span className="font-sans">shridhyan.com@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREE MASTERCLASS MODAL */}
      {masterclassOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#071f14] border border-amber-400/40 rounded-3xl p-6 sm:p-8 text-[#fcf9f3] shadow-2xl">
            <button
              onClick={() => setMasterclassOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
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

            <p className="text-sm text-surface-container-high/90 mb-6 leading-relaxed">
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
              
              <a
                href="#contact"
                onClick={() => setMasterclassOpen(false)}
                className="relative z-10 w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-[#061910] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:scale-110"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </a>

              <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-200/90">
                Preview Session • 18 Minutes • Himalayan Tapasya
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-amber-200/70">
                Ready to join the 7-day cohort? Only 25 seats per batch.
              </span>
              <a
                href="#enroll"
                onClick={() => setMasterclassOpen(false)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#061910] font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95"
              >
                <span>Enroll in 7-Day Course</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
