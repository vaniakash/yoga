"use client";

import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Users,
  ArrowRight,
  Flame,
  Sun,
  Bell,
  CheckCircle2,
  AlertCircle,
  Flower2
} from "lucide-react";

interface AshramEvent {
  _id: string;
  title: string;
  subtitle?: string;
  category: string;
  startDate?: string;
  endDate?: string;
  dateDisplay?: string;
  time?: string;
  location?: string;
  description?: string;
  capacity?: string;
  status: "active" | "draft" | "past" | "cancelled";
  registrationOpen: boolean;
  featured?: boolean;
}

export default function UpcomingEventsPage() {
  const locale = useLocale();
  const isHi = locale === "hi";
  const isJa = locale === "ja";

  const t = useTranslations("Events");

  const [events, setEvents] = useState<AshramEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        if (data.success && Array.isArray(data.events)) {
          setEvents(data.events);
        }
      } catch (err) {
        console.error("Failed to load events:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="bg-[#fcfbf7] text-[#1c2e24] flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* 1. HERO / SANCTUM HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f3ea] via-[#faf7f0] to-[#fcfbf7] pt-14 pb-20 border-b border-[#e8e2d4]">
        {/* Soft Ambient Golden Dawn Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-b from-amber-400/15 via-orange-300/10 to-transparent blur-3xl rounded-full pointer-events-none -z-0"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-margin text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? "font-devanagari" : ""}>{t("label")}</span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? "font-devanagari" : ""
            }`}
          >
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* 2. MAIN EVENTS SECTION */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 md:px-margin flex-1 w-full">
        
        {loading ? (
          // Loading Skeleton
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm animate-pulse flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-stone-200 mb-4" />
              <div className="h-6 w-3/4 bg-stone-200 rounded-md mb-3" />
              <div className="h-4 w-1/2 bg-stone-100 rounded-md mb-6" />
              <div className="h-24 w-full bg-stone-100 rounded-2xl" />
            </div>
          </div>
        ) : events.length === 0 ? (
          // =========================================================================
          // EMPTY STATE (CURRENT STATE: UNTIL ADMIN ADDS AN UPCOMING EVENT)
          // =========================================================================
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Main Peaceful Notice Card */}
            <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-white border-2 border-[#e8e2d4] shadow-xl text-center">
              {/* Subtle Ambient Gold Ring */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"
              />

              {/* Sacred Lotus / Calendar Emblem */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#faf7f0] border-2 border-amber-400/40 p-3 shadow-md flex items-center justify-center text-amber-700">
                <Calendar className="w-10 h-10" />
              </div>

              {/* Status Notice Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-400/30 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span className={isHi ? "font-devanagari" : ""}>{t("empty_badge")}</span>
              </div>

              {/* Empty Headline */}
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#092217] mb-4 leading-snug ${
                  isHi ? "font-devanagari" : ""
                }`}
              >
                {t("empty_title")}
              </h2>

              {/* Explanation Text */}
              <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
                {t("empty_desc")}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#092217] hover:bg-[#143a28] text-white text-xs sm:text-sm font-semibold shadow-md transition-all group"
                >
                  <span className={isHi ? "font-devanagari" : ""}>{t("btn_contact")}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/#courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#faf7f0] text-stone-900 text-xs sm:text-sm font-semibold border border-stone-300 shadow-xs transition-colors"
                >
                  <span className={isHi ? "font-devanagari" : ""}>{t("btn_courses")}</span>
                </Link>
              </div>
            </div>

            {/* Daily Ashram Routine Box (Nitya Sadhana Pravah) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#faf7f0] border border-[#e8e2d4] shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
                  <Sun className="w-4 h-4 text-amber-600" />
                  <span>अखंड साधना प्रवाह</span>
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-serif font-bold text-[#092217] mb-2 ${
                    isHi ? "font-devanagari" : ""
                  }`}
                >
                  {t("empty_daily_title")}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans">
                  {t("empty_daily_sub")}
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center mb-3">
                      <Flower2 className="w-4 h-4" />
                    </div>
                    <h4 className={`text-sm font-bold text-[#092217] mb-1 ${isHi ? "font-devanagari" : ""}`}>
                      {t("d1_title")}
                    </h4>
                  </div>
                  <span className="text-xs text-amber-800 font-mono font-semibold pt-2 border-t border-stone-100">
                    {t("d1_time")}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center mb-3">
                      <Flame className="w-4 h-4" />
                    </div>
                    <h4 className={`text-sm font-bold text-[#092217] mb-1 ${isHi ? "font-devanagari" : ""}`}>
                      {t("d2_title")}
                    </h4>
                  </div>
                  <span className="text-xs text-amber-800 font-mono font-semibold pt-2 border-t border-stone-100">
                    {t("d2_time")}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center mb-3">
                      <Sun className="w-4 h-4" />
                    </div>
                    <h4 className={`text-sm font-bold text-[#092217] mb-1 ${isHi ? "font-devanagari" : ""}`}>
                      {t("d3_title")}
                    </h4>
                  </div>
                  <span className="text-xs text-amber-800 font-mono font-semibold pt-2 border-t border-stone-100">
                    {t("d3_time")}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#e8e2d4] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center mb-3">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className={`text-sm font-bold text-[#092217] mb-1 ${isHi ? "font-devanagari" : ""}`}>
                      {t("d4_title")}
                    </h4>
                  </div>
                  <span className="text-xs text-amber-800 font-mono font-semibold pt-2 border-t border-stone-100">
                    {t("d4_time")}
                  </span>
                </div>

              </div>
            </div>

            {/* Notification / Stay in touch banner */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm sm:text-base font-bold text-[#092217] ${isHi ? "font-devanagari" : ""}`}>
                    {t("notify_title")}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 max-w-xl font-sans">
                    {t("notify_desc")}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#faf7f0] text-stone-900 text-xs font-bold border border-amber-400/40 shadow-xs whitespace-nowrap transition-colors"
              >
                {isHi ? "नाम दर्ज कराएं →" : "Register Interest →"}
              </Link>
            </div>

          </div>
        ) : (
          // =========================================================================
          // ACTIVE EVENTS GRID (WHEN ADMIN CREATES AN EVENT)
          // =========================================================================
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-3xl border-2 border-[#e8e2d4] hover:border-amber-400/60 shadow-md hover:shadow-xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Status Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-900 border border-amber-400/30">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>{event.category}</span>
                    </span>

                    {event.registrationOpen ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{t("badge_open")}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300">
                        <AlertCircle className="w-3 h-3 text-amber-600" />
                        <span>{t("badge_limited")}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`text-2xl font-serif font-bold text-[#092217] group-hover:text-amber-800 transition-colors mb-2 leading-snug ${
                      isHi ? "font-devanagari" : ""
                    }`}
                  >
                    {event.title}
                  </h3>

                  {event.subtitle && (
                    <p className="text-xs sm:text-sm font-medium text-amber-800 mb-4">
                      {event.subtitle}
                    </p>
                  )}

                  {/* Date, Time & Venue */}
                  <div className="space-y-2 p-3.5 rounded-2xl bg-[#faf7f0] border border-[#e8e2d4] text-xs text-stone-700 mb-5">
                    {event.dateDisplay && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                        <span className="font-semibold text-[#092217]">{event.dateDisplay}</span>
                      </div>
                    )}
                    {event.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                      <span>{event.location || "श्रीध्यान आश्रम, उत्तरकाशी"}</span>
                    </div>
                    {event.capacity && (
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                        <span>क्षमता: {event.capacity}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {event.description && (
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans mb-6">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-stone-100">
                  <Link
                    href={`/contact?course=${encodeURIComponent(event.title)}`}
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-[#092217] group-hover:bg-[#143a28] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
                  >
                    <span>{t("btn_register")}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-amber-300" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

    </div>
  );
}
