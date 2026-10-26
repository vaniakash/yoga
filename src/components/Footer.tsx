"use client";

import React from 'react';
import { useLocale } from 'next-intl';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Clock,
  HeartHandshake,
  Compass,
  Sun,
  Flame,
  Moon,
  UtensilsCrossed,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

export function Footer() {
  const locale = useLocale();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  return (
    <footer className="relative bg-gradient-to-b from-[#061910] via-[#092217] to-[#04120b] text-[#fcf9f3] overflow-hidden border-t border-amber-500/20 shadow-2xl">
      {/* Ambient Spiritual Lighting & Sacred Aura */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212, 175, 55, 0.22), transparent 70%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(252, 249, 243, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Sacred Shloka Ribbon & Glowing Medallion */}
      <div className="relative z-10 border-b border-amber-400/20 bg-black/25 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-margin flex flex-col items-center text-center">
          {/* Glowing Center Om Medallion */}
          <div className="flex items-center justify-center gap-4 w-full">
            <span className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/60" />
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/60 via-amber-900/40 to-amber-950/60 border border-amber-400/40 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <span className="text-amber-300 text-base font-serif select-none">ॐ</span>
              <span className="font-devanagari text-xs sm:text-sm font-medium tracking-widest text-amber-200">
                वैदिक शांति पाठ • Brihadaranyaka Upanishad
              </span>
              <span className="text-amber-300 text-base font-serif select-none">ॐ</span>
            </div>
            <span className="hidden sm:block flex-1 h-[1px] bg-gradient-to-l from-transparent via-amber-400/30 to-amber-400/60" />
          </div>

          {/* Maha Mantra */}
          <p className="font-devanagari text-base sm:text-lg md:text-xl font-medium tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-100 mt-3 max-w-4xl leading-relaxed">
            ॥ ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्माऽमृतं गमय ॥
          </p>
          <p className="text-xs sm:text-sm text-amber-200/70 tracking-wide mt-1 font-light italic">
            {isHi && "असत्य से सत्य की ओर ले चलें, अंधकार से प्रकाश की ओर ले चलें, मृत्यु से अमरत्व की ओर ले चलें।"}
            {isJa && "偽りから真理へ、暗闇から光へ、死から不死へと我らを導きたまえ。オーム・シャンティ・シャンティ・シャンティ。"}
            {!isHi && !isJa && "From untruth lead us to Truth, from darkness lead us to Light, from mortality to Immortality."}
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-margin pt-14 pb-12">

        {/* 4-Column Grid: Identity, Sacred Links, Courses, Ashram Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-amber-400/20">
          
          {/* Col 1: Ashram Identity & Sacred Essence (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <div className="p-1.5 rounded-xl bg-surface-container-lowest/10 border border-amber-400/40 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] flex-shrink-0">
                <img
                  alt="Shridhyan Ashram Sacred Emblem"
                  className="w-12 h-12 object-contain"
                  src="/images/two-removebg-preview.svg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-100 leading-tight">
                  SHRIDHYAN
                </span>
                <span className="font-devanagari text-xs text-amber-300/90 tracking-widest font-medium">
                  श्री ध्यान आश्रम • हिमालयी तपोभूमि
                </span>
              </div>
            </div>

            {/* Sacred Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-400/25 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-devanagari text-xs font-medium text-amber-200 tracking-wider">
                साधना • ध्यान • योग • गुरु-परंपरा
              </span>
            </div>

            {/* Ashram Description */}
            <p className="text-sm text-surface-container-high/85 leading-relaxed font-light">
              {isHi
                ? "उत्तरकाशी के पावन मथाली अंचल में स्थित एक शांत हिमालयी तपोभूमि। परम पूज्य स्वामी जी महाराज के मार्गदर्शन में प्रामाणिक ध्यान, मौन एवं योग-साधना को समर्पित।"
                : isJa
                ? "ヒマラヤの静寂に抱かれたウッタラーカーシー・マタリのアシュラム。スワミジの指導のもと、本格的な瞑想と沈黙の修行に捧げられています。"
                : "A sacred Himalayan retreat located in Mathali, Uttarkashi. Dedicated to authentic meditation, inner silence, yogic contemplation, and the timeless Guru-Shishya tradition under the guidance of Swami Ji Maharaj."}
            </p>

            {/* Consecration & Traditional Credentials */}
            <div className="space-y-2 pt-1 text-xs text-surface-container-high/80">
              <div className="flex items-center gap-2 text-amber-300/90">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  {isHi 
                    ? "हिमालयी तपोभूमि • मथाली (उत्तरकाशी)" 
                    : "Himalayan Tapobhoomi • Mathali, Uttarkashi"}
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=30.821991,78.609482"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-300 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-dotted underline-offset-4">
                  Mathali, Uttarkashi, Uttarakhand, Bharat
                </span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Sacred Chant Pill */}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="font-devanagari text-xs px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-200">
                🕉️ हरिओम् तत्सत् 🙏 जय गुरुदेव
              </span>
            </div>
          </div>

          {/* Col 2: आश्रम दर्शन • Sacred Links (2 cols) */}
          <div className="md:col-span-6 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-1 border-b border-amber-400/20">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <h4 className="font-devanagari text-sm font-semibold tracking-wider text-amber-300 uppercase">
                {isHi ? "आश्रम दर्शन" : isJa ? "アシュラム巡礼" : "Ashram Portals"}
              </h4>
            </div>

            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="#hero"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">मुखपृष्ठ</span>
                  <span className="text-xs text-amber-200/50 font-sans">(Home)</span>
                </a>
              </li>
              <li>
                <a
                  href="#guru-parampara"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">गुरु परंपरा</span>
                  <span className="text-xs text-amber-200/50 font-sans">(Parampara)</span>
                </a>
              </li>
              <li>
                <a
                  href="#tapobhoomi"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">तपोभूमि</span>
                  <span className="text-xs text-amber-200/50 font-sans">(Tapobhoomi)</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">पाठ्यक्रम</span>
                  <span className="text-xs text-amber-200/50 font-sans">(Courses)</span>
                </a>
              </li>
              <li>
                <a
                  href="#mauna"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">मौन साधना</span>
                  <span className="text-xs text-amber-200/50 font-sans">(Silence)</span>
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">चित्रावली</span>
                  <span className="text-xs text-amber-200/50 font-sans">(Gallery)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: पाठ्यक्रम • Courses (2 cols) */}
          <div className="md:col-span-6 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-1 border-b border-amber-400/20">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <h4 className="font-devanagari text-sm font-semibold tracking-wider text-amber-300 uppercase">
                {isHi ? "पाठ्यक्रम" : "Courses"}
              </h4>
            </div>

            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="#courses"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">Vedic Bio Healing</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">Meditation TTC</span>
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">Shri Vidya</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group flex items-center gap-2 text-surface-container-high/80 hover:text-amber-300 transition-colors duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                  <span className="font-devanagari">संपर्क एवं पूछताछ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: आश्रम संपर्क (Contact Ashram) Card (4 cols) */}
          <div className="md:col-span-12 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950/70 via-black/50 to-emerald-950/70 border border-amber-400/30 p-5 sm:p-6 backdrop-blur-md shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-amber-400/20">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <div>
                    <h4 className="font-devanagari text-sm font-bold text-amber-200 tracking-wide leading-tight">
                      {isHi ? "आश्रम संपर्क" : "Ashram Contact"}
                    </h4>
                    <span className="text-[11px] text-amber-200/60 font-sans">
                      मथाली, उत्तरकाशी, उत्तराखण्ड
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400/15 border border-amber-400/40 text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Himalayas
                </span>
              </div>

              {/* Contact Details */}
              <div className="py-4 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 text-surface-container-high/90">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="font-devanagari text-xs leading-relaxed">
                    मथाली, उत्तरकाशी, उत्तराखण्ड 249135, भारत
                  </span>
                </div>

                <a
                  href="mailto:shridhyan.com@gmail.com"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] text-amber-200/70 font-devanagari leading-none">
                        आश्रम कार्यालय ईमेल
                      </p>
                      <p className="text-xs font-semibold text-[#fcf9f3] mt-0.5 font-sans">
                        shridhyan.com@gmail.com
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://maps.google.com/?q=30.821991,78.609482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] text-amber-200/70 font-devanagari leading-none">
                        Google Maps लोकेशन
                      </p>
                      <p className="text-xs font-semibold text-[#fcf9f3] mt-0.5 font-mono">
                        30.821991, 78.609482
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="#contact"
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 hover:from-amber-500/30 to-amber-600/20 hover:to-amber-600/30 text-amber-200 hover:text-amber-100 border border-amber-400/40 font-semibold text-xs tracking-wide transition-all duration-200"
                >
                  <span className="font-devanagari">
                    {isHi ? "संपर्क करें (Contact Ashram)" : "Contact Ashram"}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Consecrated Sub-Footer / Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-surface-container-high/70">
          {/* Copyright & Consecrated Notice */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-medium text-amber-100/90">
              © {new Date().getFullYear()} Shridhyan Ashram.
            </span>
            <span className="hidden sm:inline text-amber-400/40">•</span>
            <span className="font-devanagari text-amber-200/80">
              मथाली, उत्तरकाशी, उत्तराखण्ड
            </span>
            <span className="hidden sm:inline text-amber-400/40">•</span>
            <span className="font-devanagari text-amber-300/80 italic">
              ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
            </span>
          </div>

          {/* Action Buttons & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="mailto:shridhyan.com@gmail.com"
                aria-label="Email Ashram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/50 text-surface-container-high hover:text-amber-300 flex items-center justify-center transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://maps.google.com/?q=30.821991,78.609482"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/50 text-surface-container-high hover:text-amber-300 flex items-center justify-center transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>

            <span className="text-amber-400/30">|</span>

            {/* Interactive Return to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 hover:text-amber-100 border border-amber-400/30 hover:border-amber-400/60 font-devanagari font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Scroll back to top"
            >
              <span>{isHi ? "शीर्ष पर जाएँ" : isJa ? "トップへ" : "Back to Top"}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
