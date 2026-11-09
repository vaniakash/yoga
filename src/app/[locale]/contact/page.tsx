"use client";

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  MapPin,
  Mail,
  Phone,
  PhoneCall,
  Compass,
  ChevronDown,
  AlertCircle,
  ExternalLink,
  Plane,
  Train,
  Car,
  Send,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const tCon = useTranslations('Contact');
  const tFAQ = useTranslations('FAQ');
  const tPositioning = useTranslations('Positioning');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '7-Day Vedic Bio Healing Foundation Course',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Failed to save inquiry:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }

    const mailtoSubject = encodeURIComponent(`Shridhyan Enrollment Inquiry: ${formData.course} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSelected Course/Subject: ${formData.course}\nMessage:\n${formData.message}`
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span className={isHi ? 'font-devanagari' : ''}>{tCon('label')}</span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#092217] tracking-tight leading-tight mb-4 ${
              isHi ? 'font-devanagari' : ''
            }`}
          >
            {tCon('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed">
            {tCon('description')}
          </p>
        </div>
      </section>

      {/* 2. CONTACT FORM & LOCATION GRID */}
      <section className="py-20 md:py-24 px-6 md:px-margin max-w-7xl mx-auto" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Location & Connectivity (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Ashram Location Card */}
            <div className="bg-[#faf7f0] border border-[#e8e2d4] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h2 className={`text-2xl font-serif font-bold text-[#092217] flex items-center gap-2.5 ${isHi ? 'font-devanagari' : ''}`}>
                  <MapPin className="w-5 h-5 text-amber-700" />
                  <span>{tCon('location_title')}</span>
                </h2>
                <span className="text-xs font-mono bg-white px-3 py-1 rounded-full border border-stone-200 text-stone-600">
                  📍 30.821991° N, 78.609482° E
                </span>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6 font-sans">
                {tCon('location_text')}
              </p>

              {/* Map Embed */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-stone-200 mb-6 bg-stone-100 shadow-inner">
                <iframe
                  title="Shridhyan Ashram Uttarkashi Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=30.821991,78.609482&hl=en&z=14&output=embed"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-stone-200">
                <a
                  className="inline-flex items-center justify-center gap-2 bg-[#092217] hover:bg-[#143a28] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm"
                  href="https://maps.google.com/?q=30.821991,78.609482"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 text-amber-300" />
                  <span>{tCon('view_map')}</span>
                </a>
                <span className="text-xs text-stone-600 font-sans">
                  उत्तरकाशी, उत्तराखण्ड 249135 • भारत
                </span>
              </div>
            </div>

            {/* Direct Phone & Calling Card */}
            <div className="bg-[#faf7f0] border border-amber-300/60 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#6b2a0c] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <PhoneCall className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <span className={`text-[11px] font-bold text-amber-800 tracking-wider uppercase block ${isHi ? 'font-devanagari' : ''}`}>
                    {isHi ? "प्रत्यक्ष आश्रम संपर्क फोन" : "Direct Ashram Helpline"}
                  </span>
                  <a
                    href="tel:+919301605957"
                    className="text-lg sm:text-xl font-bold text-[#092217] hover:text-amber-700 transition-colors font-sans"
                  >
                    +91 93016 05957
                  </a>
                </div>
              </div>
              <a
                href="tel:+919301605957"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6b2a0c] hover:bg-[#521f07] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span className={isHi ? 'font-devanagari' : ''}>{isHi ? "अभी कॉल करें" : "Call Now"}</span>
              </a>
            </div>

            {/* How to Reach Guide */}
            <div className="bg-[#faf7f0] border border-[#e8e2d4] rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className={`text-xl font-serif font-bold text-[#092217] mb-6 flex items-center gap-2.5 ${isHi ? 'font-devanagari' : ''}`}>
                <Compass className="w-5 h-5 text-amber-700" />
                <span>{tCon('how_to_reach')}</span>
              </h3>

              <div className="space-y-5">
                {/* Air */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-200">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#092217] text-sm font-semibold block mb-0.5">
                      {tCon('air_label')}
                    </strong>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      {tCon('air_desc')}
                    </p>
                  </div>
                </div>

                {/* Rail */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-200">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#092217] text-sm font-semibold block mb-0.5">
                      {tCon('rail_label')}
                    </strong>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      {tCon('rail_desc')}
                    </p>
                  </div>
                </div>

                {/* Road */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-stone-200">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#092217] text-sm font-semibold block mb-0.5">
                      {tCon('road_label')}
                    </strong>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      {tCon('road_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Application / Contact Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border-2 border-stone-200 rounded-3xl p-7 sm:p-9 shadow-lg">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold block mb-1">
                {isHi ? "प्रवेश एवं पूछताछ" : "Enrollment & Inquiry"}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-serif font-bold text-[#092217] ${isHi ? 'font-devanagari' : ''}`}>
                {tCon('form_title')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 font-sans leading-relaxed">
                {tCon('form_desc')}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                  {tCon('name_label')}
                </label>
                <input
                  className="w-full bg-[#fcfbf7] border border-stone-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none transition-colors"
                  placeholder={tCon('name_placeholder')}
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    {tCon('phone_label')}
                  </label>
                  <input
                    className="w-full bg-[#fcfbf7] border border-stone-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none transition-colors"
                    placeholder="+91 9XXXXXXXXX"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    {tCon('email_label')}
                  </label>
                  <input
                    className="w-full bg-[#fcfbf7] border border-stone-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none transition-colors"
                    placeholder="email@example.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                  {tCon('subject_label')}
                </label>
                <select
                  className="w-full bg-[#fcfbf7] border border-stone-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none transition-colors cursor-pointer"
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
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                  {tCon('message_label')}
                </label>
                <textarea
                  className="w-full bg-[#fcfbf7] border border-stone-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none transition-colors resize-none"
                  placeholder={tCon('message_placeholder')}
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-amber-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                <Send className="w-4 h-4" />
                <span>{tCon('submit')}</span>
              </button>
            </form>

            {formSubmitted && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{isHi ? "आपका संदेश ईमेल क्लाइंट में तैयार है।" : "Your message is ready in your email client."}</span>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
              <a
                className="flex items-center gap-1.5 text-stone-700 hover:text-amber-800 font-medium transition-colors"
                href="mailto:shridhyan.com@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 text-amber-700" />
                <span className="font-sans">shridhyan.com@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span className="text-stone-500">उत्तरकाशी, उत्तराखण्ड</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ETHICAL POSITIONING & TRADITIONAL WISDOM */}
      <section className="py-16 bg-[#faf7f0] border-y border-[#e8e2d4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-amber-800 mb-3 text-xs font-semibold tracking-widest uppercase">
            <AlertCircle className="w-4 h-4" />
            <span>{isHi ? "नैतिक उत्तरदायित्व एवं स्पष्टता" : "Ethical Responsibility & Clarity"}</span>
          </div>
          <h3 className={`text-2xl sm:text-3xl font-serif font-bold text-[#092217] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
            {tPositioning('title')}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl mx-auto font-sans">
            {tPositioning('text')}
          </p>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-margin" id="faq">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            <span className={isHi ? 'font-devanagari' : ''}>{tFAQ('label')}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-[#092217] mb-3 ${isHi ? 'font-devanagari' : ''}`}>
            {tFAQ('title')}
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-xs hover:border-amber-400/50 transition-all duration-200"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-[#092217] text-base hover:text-amber-800 transition-colors cursor-pointer"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-700 transition-transform duration-300 flex-shrink-0 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 font-sans">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

