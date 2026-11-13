"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import {
  Globe,
  Menu,
  X,
  Sparkles,
  LogIn,
  LogOut,
  User,
  ChevronDown,
  Wind,
  Flower2,
  BookOpen,
  Compass,
  Phone,
  PhoneCall,
  MapPin,
  Heart,
  Eye,
  Mountain
} from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(true);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const coursesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCoursesMouseEnter = () => {
    if (coursesTimeoutRef.current) {
      clearTimeout(coursesTimeoutRef.current);
      coursesTimeoutRef.current = null;
    }
    setCoursesDropdownOpen(true);
  };

  const handleCoursesMouseLeave = () => {
    if (coursesTimeoutRef.current) {
      clearTimeout(coursesTimeoutRef.current);
    }
    coursesTimeoutRef.current = setTimeout(() => {
      setCoursesDropdownOpen(false);
    }, 200);
  };

  const handleCoursesClick = () => {
    if (coursesTimeoutRef.current) {
      clearTimeout(coursesTimeoutRef.current);
      coursesTimeoutRef.current = null;
    }
    setCoursesDropdownOpen((prev) => !prev);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
      aboutTimeoutRef.current = null;
    }
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 200);
  };

  const handleAboutClick = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
      aboutTimeoutRef.current = null;
    }
    setAboutDropdownOpen((prev) => !prev);
  };

  const { data: session, status } = useSession();

  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  // Close dropdowns on click or touch outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setCoursesDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(target)) {
        setAboutDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      if (coursesTimeoutRef.current) {
        clearTimeout(coursesTimeoutRef.current);
      }
      if (aboutTimeoutRef.current) {
        clearTimeout(aboutTimeoutRef.current);
      }
    };
  }, []);

  const aboutItems = [
    {
      title: t('about_shridhyan'),
      desc: isHi ? "आश्रम का पावन उद्गम एवं दर्शन" : isJa ? "アシュラムの起源と哲学" : "Sacred origin & hermitage philosophy",
      href: '/about',
      icon: Compass,
      active: pathname === '/about'
    },
    {
      title: t('about_mission_vision'),
      desc: isHi ? "ध्येय, दृष्टि एवं वैदिक संकल्प" : isJa ? "使命、ビジョン、霊的指針" : "Guiding purpose & spiritual vision",
      href: '/about/mission-vision',
      icon: Eye,
      active: pathname === '/about/mission-vision'
    },
    {
      title: t('about_guru'),
      desc: isHi ? "पूज्य स्वामी गोविंदानंद तीर्थ जी महाराज" : isJa ? "スワミ・ゴヴィンダナンダ・ティールタ師" : "Founder & Spiritual Guide",
      href: '/about/our-guru',
      icon: Heart,
      active: pathname === '/about/our-guru'
    },
    {
      title: t('about_lineage'),
      desc: isHi ? "आदि शंकराचार्य एवं तीर्थ परंपरा" : isJa ? "ティールタ聖流・師弟の伝統" : "Tirtha stream & sacred masters",
      href: '/about/lineage',
      icon: Sparkles,
      active: pathname === '/about/lineage' || pathname === '/guru-parampara'
    },
    {
      title: t('about_life'),
      desc: isHi ? "दैनिक प्रवाह, मौन, यज्ञ एवं आश्रम जीवन" : isJa ? "日課、沈黙、ヤジュニャ、生活" : "Daily rhythm, silence & routine",
      href: '/about/life-at-ashram',
      icon: Wind,
      active: pathname === '/about/life-at-ashram'
    },
    {
      title: t('about_why'),
      desc: isHi ? "५ पावन स्तम्भ एवं तपोभूमि विशिष्टता" : isJa ? "5つの柱と聖なるタポブーミ" : "Five sacred pillars & atmosphere",
      href: '/about/why-shridhyan',
      icon: Mountain,
      active: pathname === '/about/why-shridhyan' || pathname === '/tapobhoomi'
    },
  ];

  const isAnyAboutActive = pathname.startsWith('/about') || pathname === '/guru-parampara' || pathname === '/tapobhoomi';

  const courseItems = [
    {
      title: t('course_shrividya'),
      desc: t('course_shrividya_desc'),
      href: '/courses/shri-vidya',
      icon: '/images/maharaj/shreevidhya.svg',
      active: pathname.includes('/courses/shri-vidya')
    },
    {
      title: t('course_vedic'),
      desc: t('course_vedic_desc'),
      href: '/courses/vedic-bio-healing',
      icon: '/images/maharaj/vedicbio_healing.svg',
      active: pathname.includes('/courses/vedic-bio-healing')
    },
    {
      title: t('course_mtt'),
      desc: t('course_mtt_desc'),
      href: '/courses/meditation-teacher-training',
      icon: '/images/maharaj/maditation.svg',
      active: pathname.includes('/courses/meditation-teacher-training')
    }
  ];

  const isAnyCourseActive = pathname.startsWith('/courses');

  const currentLangLabel = isHi ? 'हिन्दी' : isJa ? '日本語' : 'EN';
  const loginLabel = t('login');
  const logoutLabel = t('logout');

  return (
    <header className="bg-surface/95 dark:bg-[#061910]/95 backdrop-blur-md text-primary dark:text-[#fcf9f3] docked full-width top-0 sticky z-50 shadow-sm border-b border-amber-500/20">
      {/* ========================================================================= */}
      {/* TOP UTILITY & INFO BAR (Shridhyan Ashram • Phone, Location & Call Button) */}
      {/* ========================================================================= */}
      <div className="bg-[#526B55] text-white border-b border-[#435846] text-xs py-1.5 sm:py-2 px-4 sm:px-6 md:px-margin">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3">
          
          {/* Left: General Name / Title Text */}
          <div className="flex items-center gap-2">
            <span className={`font-serif tracking-wide text-xs sm:text-[13px] text-white font-semibold truncate ${isHi ? 'font-devanagari' : ''}`}>
              {t('top_bar_title')}
            </span>
          </div>

          {/* Right: Phone, Location & Call Button */}
          <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5 flex-shrink-0">
            {/* Phone Number */}
            <a
              href="tel:+919301605957"
              className="flex items-center gap-1.5 text-white hover:text-white/80 transition-colors font-medium text-xs sm:text-[13px] group"
              title="Call Shridhyan Ashram"
            >
              <Phone className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
              <span className="tracking-wide font-sans">+91 93016 05957</span>
            </a>

            {/* Separator */}
            <span className="text-white/35 hidden md:inline">|</span>

            {/* Location Link */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-1.5 text-white hover:text-white/80 transition-colors text-xs sm:text-[13px] group"
            >
              <MapPin className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
              <span className={isHi ? 'font-devanagari' : ''}>{t('top_bar_location')}</span>
            </Link>

            {/* Dedicated Call Button */}
            <a
              href="tel:+919301605957"
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-md bg-[#405443] hover:bg-[#354637] border border-white/30 hover:border-white/60 text-white font-semibold text-[11px] sm:text-xs tracking-wider transition-all shadow-2xs active:scale-95 group"
            >
              <PhoneCall className="w-3 h-3 text-white group-hover:animate-pulse" />
              <span className={isHi ? 'font-devanagari' : ''}>{t('top_bar_call_btn')}</span>
            </a>
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center w-full px-6 md:px-margin max-w-7xl mx-auto h-20">
        
        {/* Brand Logo & Name */}
        <Link className="flex items-center gap-3.5 group cursor-pointer" href="/">
          <div className="p-1.5 rounded-xl bg-surface-container-lowest/20 dark:bg-black/30 border border-amber-400/40 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.18)] flex-shrink-0 group-hover:border-amber-400/80 group-hover:scale-105 transition-all duration-300">
            <img
              alt="Shridhyan Ashram Sacred Emblem Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
              src="/images/two-removebg-preview.svg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-amber-100 dark:via-amber-200 dark:to-yellow-100 leading-tight">
              SHRIDHYAN
            </span>
            <span className={`text-[11px] sm:text-xs tracking-wider text-secondary dark:text-amber-300/90 font-medium ${isHi ? 'font-devanagari' : ''}`}>
              {t('subbrand')}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Home */}
          <Link
            className={`font-medium tracking-wide text-sm py-1 transition-colors ${
              pathname === '/' || pathname === ''
                ? 'text-amber-600 dark:text-amber-300 font-semibold'
                : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-600 dark:hover:text-amber-300'
            }`}
            href="/"
          >
            {t('home')}
          </Link>

          {/* About Us Dropdown */}
          <div
            ref={aboutDropdownRef}
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/about"
                className={`font-medium tracking-wide text-sm py-1 transition-colors ${
                  isAnyAboutActive
                    ? 'text-amber-600 dark:text-amber-300 font-semibold'
                    : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-600 dark:hover:text-amber-300'
                }`}
              >
                {t('about')}
              </Link>
              <button
                type="button"
                onClick={handleAboutClick}
                className="p-1 text-on-surface-variant hover:text-amber-600 dark:text-[#e0dacd] dark:hover:text-amber-300 transition-colors cursor-pointer"
                aria-expanded={aboutDropdownOpen}
                aria-label="Toggle About Us Menu"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-amber-500' : ''}`} />
              </button>
            </div>

            {/* Dropdown Menu */}
            {aboutDropdownOpen && (
              <div
                className="absolute top-full left-0 pt-2 w-80 z-50 animate-fade-in"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <div className="absolute -top-3 left-0 right-0 h-4 pointer-events-auto" />
                <div className="bg-surface-container-lowest dark:bg-[#071f14] border border-amber-400/40 rounded-2xl shadow-2xl p-2 backdrop-blur-xl">
                  <div className="space-y-1">
                    {aboutItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => {
                          if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
                          setAboutDropdownOpen(false);
                        }}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group ${
                          item.active
                            ? 'bg-amber-500/15 border border-amber-400/40 text-amber-700 dark:text-amber-200'
                            : 'hover:bg-amber-500/10 text-on-surface dark:text-[#fcf9f3]'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                          item.active
                            ? 'bg-amber-500/25 border border-amber-400 text-amber-700 dark:text-amber-300 shadow-2xs'
                            : 'bg-amber-500/10 border border-amber-400/25 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-400/50'
                        }`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className={`text-xs sm:text-sm font-semibold leading-tight ${item.active ? 'text-amber-700 dark:text-amber-300' : 'group-hover:text-amber-700 dark:group-hover:text-amber-300'}`}>
                              {item.title}
                            </span>
                            {item.active && (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse ml-2" />
                            )}
                          </div>
                          <p className="text-[11px] text-on-surface-variant dark:text-surface-container-high/70 mt-0.5 line-clamp-1 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Ashram Glimpse */}
          <Link
            className={`font-medium tracking-wide text-sm py-1 transition-colors ${
              pathname === '/ashram-glimpse' || pathname === '/ashram-glimps'
                ? 'text-amber-600 dark:text-amber-300 font-semibold'
                : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-600 dark:hover:text-amber-300'
            }`}
            href="/ashram-glimpse"
          >
            {t('ashram_glimpse')}
          </Link>

          {/* Upcoming Events */}
          <Link
            className={`font-medium tracking-wide text-sm py-1 transition-colors ${
              pathname === '/events' || pathname === '/upcoming'
                ? 'text-amber-600 dark:text-amber-300 font-semibold'
                : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-600 dark:hover:text-amber-300'
            }`}
            href="/events"
          >
            {t('events')}
          </Link>

          {/* Courses Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleCoursesMouseEnter}
            onMouseLeave={handleCoursesMouseLeave}
          >
            <button
              onClick={handleCoursesClick}
              className={`flex items-center gap-1.5 font-medium tracking-wide text-sm py-1 transition-colors ${
                isAnyCourseActive
                  ? 'text-amber-600 dark:text-amber-300 font-semibold'
                  : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-600 dark:hover:text-amber-300'
              }`}
              aria-expanded={coursesDropdownOpen}
              aria-haspopup="true"
            >
              <span>{t('courses')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {coursesDropdownOpen && (
              <div
                className="absolute top-full left-0 pt-2 w-80 z-50 animate-fade-in"
                onMouseEnter={handleCoursesMouseEnter}
                onMouseLeave={handleCoursesMouseLeave}
              >
                {/* Invisible hover bridge to eliminate pointer-event dead zones */}
                <div className="absolute -top-3 left-0 right-0 h-4 pointer-events-auto" />
                <div className="bg-surface-container-lowest dark:bg-[#071f14] border border-amber-400/40 rounded-2xl shadow-2xl p-2 backdrop-blur-xl">
                  <div className="space-y-1">
                    {courseItems.map((course, idx) => (
                      <Link
                        key={idx}
                        href={course.href}
                        onClick={() => {
                          if (coursesTimeoutRef.current) clearTimeout(coursesTimeoutRef.current);
                          setCoursesDropdownOpen(false);
                        }}
                        className={`flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 group ${
                          course.active
                            ? 'bg-amber-500/15 border border-amber-400/40 text-amber-700 dark:text-amber-200'
                            : 'hover:bg-amber-500/10 text-on-surface dark:text-[#fcf9f3]'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all p-1.5 border overflow-hidden ${
                          course.active
                            ? 'bg-amber-500/20 border-amber-400 shadow-xs'
                            : 'bg-amber-500/10 border-amber-400/25 group-hover:bg-amber-500/20 group-hover:border-amber-400/60'
                        }`}>
                          <img
                            src={course.icon}
                            alt={course.title}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-semibold leading-tight ${course.active ? 'text-amber-700 dark:text-amber-300' : 'group-hover:text-amber-600 dark:group-hover:text-amber-300'}`}>
                              {course.title}
                            </span>
                            {course.active && (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            )}
                          </div>
                          <p className="text-xs text-on-surface-variant dark:text-surface-container-high/70 mt-0.5 line-clamp-1 leading-snug">
                            {course.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            className={`font-medium tracking-wide text-sm py-1 transition-colors ${
              pathname === '/contact'
                ? 'text-amber-600 dark:text-amber-300 font-semibold'
                : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-600 dark:hover:text-amber-300'
            }`}
            href="/contact"
          >
            {t('contact')}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Selector */}
          <div ref={langDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setLangDropdownOpen((prev) => !prev);
                setCoursesDropdownOpen(false);
                setUserMenuOpen(false);
              }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg border transition-colors select-none ${
                langDropdownOpen
                  ? 'border-amber-400 bg-amber-500/15 text-amber-800 dark:text-amber-300'
                  : 'border-amber-400/30 hover:border-amber-400 text-on-surface dark:text-[#fcf9f3] bg-surface-container-lowest/40 dark:bg-black/20'
              }`}
              aria-label="Select Language"
              aria-expanded={langDropdownOpen}
              aria-haspopup="true"
            >
              <Globe className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300 flex-shrink-0" />
              <span>{currentLangLabel}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180 text-amber-500' : 'text-stone-400'
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-surface-container-lowest dark:bg-[#0c2419] border border-amber-400/40 rounded-xl shadow-2xl py-1.5 z-50 animate-fade-in backdrop-blur-xl">
                <Link
                  className={`flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm hover:bg-amber-500/10 font-medium transition-colors ${
                    isHi
                      ? 'text-amber-700 dark:text-amber-300 font-bold bg-amber-500/10'
                      : 'text-on-surface dark:text-[#d0c9bc]'
                  }`}
                  href={pathname}
                  locale="hi"
                  onClick={() => setLangDropdownOpen(false)}
                >
                  <span>हिन्दी (Hindi)</span>
                  {isHi && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                </Link>
                <Link
                  className={`flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm hover:bg-amber-500/10 font-medium transition-colors ${
                    locale === 'en'
                      ? 'text-amber-700 dark:text-amber-300 font-bold bg-amber-500/10'
                      : 'text-on-surface dark:text-[#d0c9bc]'
                  }`}
                  href={pathname}
                  locale="en"
                  onClick={() => setLangDropdownOpen(false)}
                >
                  <span>English (EN)</span>
                  {locale === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                </Link>
                <Link
                  className={`flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm hover:bg-amber-500/10 font-medium transition-colors ${
                    isJa
                      ? 'text-amber-700 dark:text-amber-300 font-bold bg-amber-500/10'
                      : 'text-on-surface dark:text-[#d0c9bc]'
                  }`}
                  href={pathname}
                  locale="ja"
                  onClick={() => setLangDropdownOpen(false)}
                >
                  <span>日本語 (Japanese)</span>
                  {isJa && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                </Link>
              </div>
            )}
          </div>

          {/* Auth Button */}
          {status === 'loading' ? (
            <div className="w-24 h-9 rounded-lg bg-amber-400/10 animate-pulse hidden sm:block" />
          ) : session ? (
            <div ref={userMenuRef} className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-lg border border-amber-400/40 hover:border-amber-400 transition-colors bg-surface-container-lowest/40 dark:bg-black/20"
                aria-label="User Account Menu"
              >
                {session.user?.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-amber-400/60"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                )}
                <span className="hidden md:inline text-xs font-semibold text-on-surface dark:text-[#fcf9f3] max-w-[100px] truncate">
                  {session.user?.name?.split(' ')[0] || 'Seeker'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-400 hidden sm:block" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-surface-container-lowest dark:bg-[#071f14] border border-amber-400/30 rounded-xl shadow-2xl py-2 z-50">
                  <div className="px-3.5 py-2 border-b border-outline-variant/20">
                    <p className="text-xs font-semibold text-on-surface dark:text-white truncate">
                      {session.user?.name}
                    </p>
                    <p className="text-[11px] text-on-surface-variant dark:text-[#a09a8e] truncate">
                      {session.user?.email}
                    </p>
                  </div>
                  {session.user?.email === "shridhyan108@gmail.com" && (
                    <Link
                      href="/admin"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 w-full px-3.5 py-2 text-xs text-amber-700 dark:text-amber-300 hover:bg-surface-container dark:hover:bg-[#143a28] transition-colors border-b border-outline-variant/10 font-semibold"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>प्रशासनिक पैनल (Admin)</span>
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      signOut({ callbackUrl: '/' });
                    }}
                    className="flex items-center gap-2 w-full px-3.5 py-2 text-xs text-red-600 dark:text-red-400 hover:bg-surface-container dark:hover:bg-[#143a28] transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{logoutLabel}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a
              href="/login"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-100 px-3.5 py-2 rounded-lg border border-amber-400/40 hover:border-amber-400 transition-colors bg-amber-500/10"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{loginLabel}</span>
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-amber-400/30 text-on-surface dark:text-[#fcf9f3] hover:border-amber-400 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface dark:bg-[#071f14] border-b border-amber-500/20 px-6 py-5 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Home */}
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-medium text-base py-1.5 ${
              pathname === '/' || pathname === ''
                ? 'text-amber-600 dark:text-amber-300 font-semibold'
                : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-500 dark:hover:text-amber-300'
            }`}
            href="/"
          >
            {t('home')}
          </Link>

          {/* Expandable About Us Accordion on Mobile */}
          <div className="py-1 border-t border-outline-variant/20 dark:border-amber-400/20">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium text-base py-1.5 ${
                  pathname === '/about'
                    ? 'text-amber-600 dark:text-amber-300 font-semibold'
                    : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-500 dark:hover:text-amber-300'
                }`}
              >
                {t('about')}
              </Link>
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="p-1.5 text-primary dark:text-amber-200"
                aria-label="Toggle About Submenu"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {mobileAboutOpen && (
              <div className="pl-2 space-y-1 pt-1 pb-2">
                {aboutItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-2 rounded-lg text-sm transition-colors ${
                      item.active
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold border-l-2 border-amber-400'
                        : 'text-on-surface-variant dark:text-[#d0c9bc] hover:bg-amber-500/10 hover:text-amber-600'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <item.icon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    {item.active && (
                      <span className="text-[10px] uppercase font-bold text-amber-500">Active</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Ashram Glimpse */}
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-medium text-base py-1.5 ${
              pathname === '/ashram-glimpse' || pathname === '/ashram-glimps'
                ? 'text-amber-600 dark:text-amber-300 font-semibold'
                : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-500 dark:hover:text-amber-300'
            }`}
            href="/ashram-glimpse"
          >
            {t('ashram_glimpse')}
          </Link>

          {/* Upcoming Events */}
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-medium text-base py-1.5 ${
              pathname === '/events' || pathname === '/upcoming'
                ? 'text-amber-600 dark:text-amber-300 font-semibold'
                : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-500 dark:hover:text-amber-300'
            }`}
            href="/events"
          >
            {t('events')}
          </Link>

          {/* Expandable Courses Accordion on Mobile */}
          <div className="py-1 border-y border-outline-variant/20 dark:border-amber-400/20">
            <button
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              className="flex items-center justify-between w-full text-base font-semibold text-primary dark:text-amber-200 py-2"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-500" />
                <span>{t('courses')}</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileCoursesOpen && (
              <div className="pl-2 space-y-2 pt-1 pb-2">
                {courseItems.map((course, idx) => (
                  <Link
                    key={idx}
                    href={course.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                      course.active
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold border-l-2 border-amber-400'
                        : 'text-on-surface-variant dark:text-[#d0c9bc] hover:text-amber-500 dark:hover:text-amber-300'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center flex-shrink-0 p-1 mt-0.5 overflow-hidden">
                      <img
                        src={course.icon}
                        alt={course.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium flex items-center justify-between">
                        <span>{course.title}</span>
                        {course.active && <span className="text-[10px] uppercase font-bold text-amber-400">Active</span>}
                      </div>
                      <p className="text-xs text-on-surface-variant/70 dark:text-[#a09a8e] mt-0.5">
                        {course.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className={`block font-medium text-base py-1.5 ${
              pathname === '/contact'
                ? 'text-amber-600 dark:text-amber-300 font-semibold'
                : 'text-on-surface-variant dark:text-[#e0dacd] hover:text-amber-500 dark:hover:text-amber-300'
            }`}
            href="/contact"
          >
            {t('contact')}
          </Link>

          {/* Mobile Language Switcher */}
          <div className="py-2.5 border-t border-outline-variant/20 dark:border-amber-400/20">
            <span className="text-xs font-semibold text-secondary dark:text-amber-300 uppercase tracking-wider block mb-2">
              भाषा / Language
            </span>
            <div className="grid grid-cols-3 gap-2">
              <Link
                href={pathname}
                locale="hi"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                  isHi
                    ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-400 shadow-xs'
                    : 'bg-surface-container-lowest/40 dark:bg-black/20 text-on-surface dark:text-[#d0c9bc] border-outline-variant/30 hover:border-amber-400/40'
                }`}
              >
                हिन्दी
              </Link>
              <Link
                href={pathname}
                locale="en"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                  locale === 'en'
                    ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-400 shadow-xs'
                    : 'bg-surface-container-lowest/40 dark:bg-black/20 text-on-surface dark:text-[#d0c9bc] border-outline-variant/30 hover:border-amber-400/40'
                }`}
              >
                English
              </Link>
              <Link
                href={pathname}
                locale="ja"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                  isJa
                    ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-400 shadow-xs'
                    : 'bg-surface-container-lowest/40 dark:bg-black/20 text-on-surface dark:text-[#d0c9bc] border-outline-variant/30 hover:border-amber-400/40'
                }`}
              >
                日本語
              </Link>
            </div>
          </div>

          {/* Mobile Auth & CTA Buttons */}
          <div className="pt-3 space-y-2.5">
            {session ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  signOut({ callbackUrl: '/' });
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-red-400/40 text-red-600 dark:text-red-400 text-sm font-medium transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <LogOut className="w-4 h-4" />
                <span>{logoutLabel} ({session.user?.name?.split(' ')[0]})</span>
              </button>
            ) : (
              <a
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-amber-400/50 text-amber-700 dark:text-amber-300 text-sm font-semibold transition-colors hover:bg-amber-50/10"
              >
                <LogIn className="w-4 h-4" />
                <span>{loginLabel}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
