"use client";

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  MapPin,
  Mail,
  ArrowUp,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Phone,
} from 'lucide-react';

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('Footer');

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHi = locale === 'hi';

  return (
    <footer className="relative bg-[#F8F6EF] text-[#234638] overflow-hidden border-t border-[#DADDD3] shadow-sm">
      {/* Ambient Spiritual Lighting & Sacred Aura */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(120, 155, 128, 0.15), transparent 70%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(120, 155, 128, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Sacred Shloka Ribbon & Glowing Medallion */}
      <div className="relative z-10 border-b border-[#DADDD3] bg-[#E8EBDD] py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-margin flex flex-col items-center text-center">
          {/* Glowing Center Om Medallion */}
          <div className="flex items-center justify-center gap-4 w-full">
            <span className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#789B80]/30 to-[#789B80]/60" />
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#789B80]/20 via-[#789B80]/15 to-[#789B80]/20 border border-[#789B80]/40 shadow-[0_0_15px_rgba(120,155,128,0.20)]">
              <span className="text-[#234638] text-base font-serif select-none">ॐ</span>
              <span className={`text-xs sm:text-sm font-medium tracking-widest text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
                {t('shanti_mantra_label')}
              </span>
              <span className="text-[#234638] text-base font-serif select-none">ॐ</span>
            </div>
            <span className="hidden sm:block flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#789B80]/30 to-[#789B80]/60" />
          </div>

          {/* Maha Mantra */}
          <p className="font-devanagari text-base sm:text-lg md:text-xl font-medium tracking-wider text-[#234638] mt-3 max-w-4xl leading-relaxed">
            ॥ ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्माऽमृतं गमय ॥
          </p>
          <p className="text-xs sm:text-sm text-[#3D5447] tracking-wide mt-1 font-light italic">
            {t('shanti_mantra_trans')}
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-margin pt-14 pb-12">

        {/* 4-Column Grid: Identity, Sacred Links, Courses, Ashram Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#DADDD3]">
          
          {/* Col 1: Ashram Identity & Sacred Essence (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <div className="p-1.5 rounded-xl bg-white border border-[#789B80]/40 backdrop-blur-sm shadow-[0_0_20px_rgba(120,155,128,0.15)] flex-shrink-0">
                <img
                  alt="Shridhyan Ashram Sacred Emblem"
                  className="w-12 h-12 object-contain"
                  src="/images/two-removebg-preview.svg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#234638] leading-tight">
                  SHRIDHYAN
                </span>
                <span className={`text-xs text-[#789B80] tracking-widest font-medium ${isHi ? 'font-devanagari' : ''}`}>
                  {t('subbrand')}
                </span>
              </div>
            </div>

            {/* Sacred Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#789B80]/10 border border-[#789B80]/25 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#789B80]" />
              <span className={`text-xs font-medium text-[#3D5447] tracking-wider ${isHi ? 'font-devanagari' : ''}`}>
                {t('tagline')}
              </span>
            </div>

            {/* Ashram Description */}
            <p className="text-sm text-[#3D5447] leading-relaxed font-light">
              {t('description')}
            </p>

            {/* Consecration & Traditional Credentials */}
            <div className="space-y-2 pt-1 text-xs text-[#3D5447]">
              <div className="flex items-center gap-2 text-[#789B80]/90">
                <ShieldCheck className="w-4 h-4 text-[#789B80] flex-shrink-0" />
                <span className={isHi ? 'font-devanagari' : ''}>
                  {t('badge_tapobhoomi')}
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=30.821991,78.609482"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#789B80] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#789B80] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-dotted underline-offset-4">
                  {t('address_short')}
                </span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Sacred Chant Pill */}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className={`text-xs px-3 py-1 rounded-full bg-[#789B80]/15 border border-[#789B80]/30 text-[#234638] ${isHi ? 'font-devanagari' : ''}`}>
                {t('chant_pill')}
              </span>
            </div>
          </div>

          {/* Col 2: Ashram Portals • Links (2 cols) */}
          <div className="md:col-span-6 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-1 border-b border-[#DADDD3]">
              <span className="w-2 h-2 rounded-full bg-[#789B80]" />
              <h4 className={`text-sm font-semibold tracking-wider text-[#789B80] uppercase ${isHi ? 'font-devanagari' : ''}`}>
                {t('portals_title')}
              </h4>
            </div>

            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>{t('link_home')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>{t('link_about')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ashram-glimpse"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>{t('link_glimpse')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>{t('link_events')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#courses"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>{t('link_courses')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about/life-at-ashram"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>{t('link_silence')}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ashram-glimpse"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>{t('link_gallery')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses (2 cols) */}
          <div className="md:col-span-6 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-1 border-b border-[#DADDD3]">
              <span className="w-2 h-2 rounded-full bg-[#789B80]" />
              <h4 className={`text-sm font-semibold tracking-wider text-[#789B80] uppercase ${isHi ? 'font-devanagari' : ''}`}>
                {t('courses_title')}
              </h4>
            </div>

            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/courses/shri-vidya"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>Shri Vidya</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/vedic-bio-healing"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>Vedic Bio Healing</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/meditation-teacher-training"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>Meditation TTC</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-[#789B80] transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#789B80]/50 group-hover:text-[#789B80] group-hover:translate-x-0.5 transition-all" />
                  <span>{t('contact_btn')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ashram Contact Card (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-white border border-[#DADDD3] p-5 sm:p-6 backdrop-blur-md shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#DADDD3]">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#789B80]" />
                  <div>
                    <h4 className={`text-sm font-bold text-[#234638] tracking-wide leading-tight ${isHi ? 'font-devanagari' : ''}`}>
                      {t('contact_title')}
                    </h4>
                    <span className="text-[11px] text-[#3D5447] font-sans">
                      {t('contact_city')}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#789B80]/15 border border-[#789B80]/40 text-[#789B80]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#789B80] animate-pulse" />
                  Himalayas
                </span>
              </div>

              {/* Contact Details */}
              <div className="py-4 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 text-[#234638]">
                  <MapPin className="w-4 h-4 text-[#789B80] flex-shrink-0 mt-0.5" />
                  <span className={`text-xs leading-relaxed ${isHi ? 'font-devanagari' : ''}`}>
                    {t('address_short')}
                  </span>
                </div>

                <a
                  href="tel:+919301605957"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F6EF] hover:bg-[#E8EBDD] border border-[#DADDD3] hover:border-[#789B80]/40 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#789B80]/20 text-[#789B80] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className={`text-[11px] text-[#3D5447] leading-none ${isHi ? 'font-devanagari' : ''}`}>
                        {isHi ? "आश्रम संपर्क फोन" : "Ashram Contact Phone"}
                      </p>
                      <p className="text-xs font-semibold text-[#234638] mt-0.5 font-sans">
                        +91 93016 05957
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#789B80]/60 group-hover:text-[#789B80] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:shridhyan.com@gmail.com"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F6EF] hover:bg-[#E8EBDD] border border-[#DADDD3] hover:border-[#789B80]/40 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#789B80]/20 text-[#789B80] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className={`text-[11px] text-[#3D5447] leading-none ${isHi ? 'font-devanagari' : ''}`}>
                        {t('email_label')}
                      </p>
                      <p className="text-xs font-semibold text-[#234638] mt-0.5 font-sans">
                        shridhyan.com@gmail.com
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#789B80]/60 group-hover:text-[#789B80] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://maps.google.com/?q=30.821991,78.609482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F6EF] hover:bg-[#E8EBDD] border border-[#DADDD3] hover:border-[#789B80]/40 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#789B80]/20 text-[#789B80] flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className={`text-[11px] text-[#3D5447] leading-none ${isHi ? 'font-devanagari' : ''}`}>
                        {t('maps_label')}
                      </p>
                      <p className="text-xs font-semibold text-[#234638] mt-0.5 font-mono">
                        30.821991, 78.609482
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#789B80]/60 group-hover:text-[#789B80] group-hover:translate-x-1 transition-all" />
                </a>

                <Link
                  href="/contact"
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#789B80]/15 hover:bg-[#789B80]/25 text-[#234638] hover:text-[#234638] border border-[#789B80]/40 font-semibold text-xs tracking-wide transition-all duration-200"
                >
                  <span className={isHi ? 'font-devanagari' : ''}>
                    {t('contact_btn')}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Consecrated Sub-Footer / Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#3D5447]">
          {/* Copyright & Consecrated Notice */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-medium text-[#234638]">
              © {new Date().getFullYear()} {t('copyright')}
            </span>
            <span className="hidden sm:inline text-[#789B80]/40">•</span>
            <span className={isHi ? 'font-devanagari text-[#3D5447]' : 'text-[#3D5447]'}>
              {t('contact_city')}
            </span>
            <span className="hidden sm:inline text-[#789B80]/40">•</span>
            <span className="text-[#789B80]/80 italic">
              {t('shanti_path')}
            </span>
            <span className="hidden sm:inline text-[#789B80]/40">•</span>
            <Link href="/admin/login" className="text-[#789B80]/40 hover:text-[#789B80] transition-colors text-[11px]">
              प्रशासन
            </Link>
          </div>

          {/* Action Buttons & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="mailto:shridhyan.com@gmail.com"
                aria-label="Email Ashram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#789B80]/20 border border-white/10 hover:border-[#789B80]/50 text-surface-container-high hover:text-[#789B80] flex items-center justify-center transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://maps.google.com/?q=30.821991,78.609482"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#789B80]/20 border border-white/10 hover:border-[#789B80]/50 text-surface-container-high hover:text-[#789B80] flex items-center justify-center transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>

            <span className="text-[#789B80]/30">|</span>

            {/* Interactive Return to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#789B80]/10 hover:bg-[#789B80]/20 text-[#234638] hover:text-[#234638] border border-[#789B80]/30 hover:border-[#789B80]/60 font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Scroll back to top"
            >
              <span>{t('back_to_top')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
