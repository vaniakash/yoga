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
  Compass
} from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

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
    };
  }, []);

  const courseItems = [
    {
      title: t('course_vedic'),
      desc: t('course_vedic_desc'),
      href: '/courses/vedic-bio-healing',
      icon: Sparkles,
      active: pathname.includes('/courses/vedic-bio-healing')
    },
    {
      title: t('course_mtt'),
      desc: t('course_mtt_desc'),
      href: '/courses/meditation-teacher-training',
      icon: Wind,
      active: pathname.includes('/courses/meditation-teacher-training')
    },
    {
      title: t('course_shrividya'),
      desc: t('course_shrividya_desc'),
      href: '/courses/shri-vidya',
      icon: Flower2,
      active: pathname.includes('/courses/shri-vidya')
    }
  ];

  const isAnyCourseActive = pathname.startsWith('/courses');

  const currentLangLabel = isHi ? 'हिन्दी' : isJa ? '日本語' : 'EN';
  const loginLabel = t('login');
  const logoutLabel = t('logout');
  const contactBtnLabel = t('contact_btn');

  return (
    <header className="bg-surface/95 dark:bg-[#061910]/95 backdrop-blur-md text-primary dark:text-[#fcf9f3] docked full-width top-0 sticky z-50 shadow-sm border-b border-amber-500/20">
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

          {/* Guru Parampara */}
          <Link
            className="text-on-surface-variant dark:text-[#e0dacd] font-medium tracking-wide text-sm hover:text-amber-600 dark:hover:text-amber-300 transition-colors py-1"
            href="/#guru-parampara"
          >
            {t('guru_parampara')}
          </Link>

          {/* Tapobhoomi */}
          <Link
            className="text-on-surface-variant dark:text-[#e0dacd] font-medium tracking-wide text-sm hover:text-amber-600 dark:hover:text-amber-300 transition-colors py-1"
            href="/#tapobhoomi"
          >
            {t('tapobhoomi')}
          </Link>

          {/* Courses Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setCoursesDropdownOpen(true)}
            onMouseLeave={() => setCoursesDropdownOpen(false)}
          >
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
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
              <div className="absolute top-full left-0 mt-2 w-80 bg-surface-container-lowest dark:bg-[#071f14] border border-amber-400/40 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl animate-fade-in">
                <div className="space-y-1">
                  {courseItems.map((course, idx) => (
                    <Link
                      key={idx}
                      href={course.href}
                      onClick={() => setCoursesDropdownOpen(false)}
                      className={`flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 group ${
                        course.active
                          ? 'bg-amber-500/15 border border-amber-400/40 text-amber-700 dark:text-amber-200'
                          : 'hover:bg-amber-500/10 text-on-surface dark:text-[#fcf9f3]'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        course.active
                          ? 'bg-amber-500 text-[#061910]'
                          : 'bg-amber-500/15 text-amber-600 dark:text-amber-300 group-hover:bg-amber-500 group-hover:text-[#061910]'
                      }`}>
                        <course.icon className="w-5 h-5" />
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
            )}
          </div>

          {/* Contact */}
          <Link
            className="text-on-surface-variant dark:text-[#e0dacd] font-medium tracking-wide text-sm hover:text-amber-600 dark:hover:text-amber-300 transition-colors py-1"
            href="/#contact"
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

          {/* Contact Ashram Button */}
          <Link
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all duration-200 active:scale-95"
            href="/#contact"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>{contactBtnLabel}</span>
          </Link>

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
            className="block text-on-surface-variant dark:text-[#e0dacd] font-medium text-base hover:text-amber-500 dark:hover:text-amber-300 py-1.5"
            href="/"
          >
            {t('home')}
          </Link>

          {/* Guru Parampara */}
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="block text-on-surface-variant dark:text-[#e0dacd] font-medium text-base hover:text-amber-500 dark:hover:text-amber-300 py-1.5"
            href="/#guru-parampara"
          >
            {t('guru_parampara')}
          </Link>

          {/* Tapobhoomi */}
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="block text-on-surface-variant dark:text-[#e0dacd] font-medium text-base hover:text-amber-500 dark:hover:text-amber-300 py-1.5"
            href="/#tapobhoomi"
          >
            {t('tapobhoomi')}
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
              <div className="pl-4 space-y-2 pt-1 pb-2">
                {courseItems.map((course, idx) => (
                  <Link
                    key={idx}
                    href={course.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block p-2.5 rounded-lg transition-colors ${
                      course.active
                        ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold border-l-2 border-amber-400'
                        : 'text-on-surface-variant dark:text-[#d0c9bc] hover:text-amber-500 dark:hover:text-amber-300'
                    }`}
                  >
                    <div className="text-sm font-medium flex items-center justify-between">
                      <span>{course.title}</span>
                      {course.active && <span className="text-[10px] uppercase font-bold text-amber-400">Active</span>}
                    </div>
                    <p className="text-xs text-on-surface-variant/70 dark:text-[#a09a8e] mt-0.5">
                      {course.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="block text-on-surface-variant dark:text-[#e0dacd] font-medium text-base hover:text-amber-500 dark:hover:text-amber-300 py-1.5"
            href="/#contact"
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

            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md transition-all"
              href="/#contact"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>{contactBtnLabel}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
