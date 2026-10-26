"use client";
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { AboutSection } from '@/components/AboutSection';

export default function HomePage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Vedic Bio Healing',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Shridhyan Inquiry: ${formData.course} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `नाम (Name): ${formData.name}\nफोन (Phone): ${formData.phone}\nईमेल (Email): ${formData.email}\nविषय (Subject): ${formData.course}\nसंदेश (Message):\n${formData.message}`
    );
    window.location.href = `mailto:shridhyan.com@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section (Half-Screen) */}
      <section className="relative min-h-[50vh] md:min-h-[52vh] flex items-center justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0 z-0">
          <img
            alt="Shridhyan Ashram Himalayan sanctuary"
            className="w-full h-full object-cover object-center"
            src="/images/shridhyan_hero.webp"
          />
          {/* Subtle natural shade for text readability without any green tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 md:py-14 text-center flex flex-col items-center">
          <h1 className="text-white font-headline-lg md:text-display-lg font-display-lg tracking-tight mb-2 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            SHRIDHYAN
          </h1>

          <p className="font-devanagari text-amber-200 text-lg md:text-2xl font-medium tracking-wide mb-2.5 text-balance max-w-3xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            “50 वर्षों की हिमालयी तपस्या से उपजी प्रामाणिक साधना”
          </p>

          <p className="text-white/95 text-body-md md:text-body-lg font-body-lg font-light max-w-2xl mx-auto mb-6 text-balance drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            A sacred Himalayan sanctuary of meditation, silence, and authentic yogic wisdom in Mathali, Uttarkashi.
          </p>

          <div className="flex flex-row items-center justify-center gap-3 w-auto">
            <a
              className="inline-flex items-center justify-center gap-1.5 bg-tertiary hover:bg-tertiary-container text-on-tertiary px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm font-label-md text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95"
              href="#contact"
            >
              <span>{isHi ? 'संपर्क करें' : 'Contact Ashram'}</span>
              <span className="material-symbols-outlined text-[15px] sm:text-[16px]">calendar_today</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-1.5 bg-black/40 hover:bg-black/60 text-white border border-white/30 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm font-label-md text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-md active:scale-95"
              href="#courses"
            >
              <span>{isHi ? 'पाठ्यक्रम देखें' : 'Explore Courses'}</span>
              <span className="material-symbols-outlined text-[15px] sm:text-[16px]">arrow_downward</span>
            </a>
          </div>

          <div className="mt-5 inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs font-label-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
            <span>{isHi ? 'ध्वनि: हिमालयी शांति, वायु एवं मौन' : 'Silence: Himalayan Peace, Wind & Solitude'}</span>
            <span className="text-white/40">|</span>
            <span className="text-amber-200">Mathali, Uttarkashi</span>
          </div>
        </div>
      </section>

      {/* 2. Welcome / About Section */}
      <AboutSection />

      {/* 3. Philosophy Section */}
      <section className="bg-primary-container text-on-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
            <path d="M0,70 Q30,40 60,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.3"></path>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-4">nest_eco_leaf</span>
          <h2 className="font-devanagari text-3xl md:text-5xl font-semibold tracking-wide text-tertiary-fixed mb-8 leading-tight">
            “आधुनिकता कम, प्राकृतिकता ज्यादा।”
          </h2>
          <p className="text-surface-container-high text-body-lg font-body-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Living in conscious cadence with Himalayan serenity, mountain stillness, birdsong, and the natural cycles of dawn and dusk is not an ascetic austerity — it is the deepest portal to inner quietude.
          </p>
          <div className="w-24 h-[1px] bg-tertiary-fixed/40 mx-auto mb-8"></div>
          <p className="font-devanagari text-surface-container-lowest text-body-md font-body-md leading-relaxed text-balance">
            यहाँ जीवन को सरल और चेतना को जागृत करने के लिए प्राकृतिक संसाधनों, वैदिक जीवनशैली और हिमालयी शांत वातावरण को प्राथमिकता दी गई है। प्रकृति स्वयं यहाँ की मुख्य मार्गदर्शिका है।
          </p>
        </div>
      </section>

      {/* 4. Tapobhoomi Section */}
      <section className="py-space-xl px-6 md:px-margin max-w-7xl mx-auto" id="tapobhoomi">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">
            हिमालयी तपोभूमि • मथाली (उत्तरकाशी)
          </span>
          <h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
            प्राचीन तपोभूमि की आध्यात्मिक विरासत
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Rooted in authentic tradition, Shridhyan stands upon Himalayan ground revered for deep contemplation, silence, and communion with the eternal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-sm bg-secondary-container text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">landscape</span>
              </div>
              <span className="font-devanagari text-xs text-tertiary font-semibold tracking-wider block mb-1">
                पवित्र हिमालयी अंचल
              </span>
              <h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-3">
                मथाली तपोभूमि (Mathali)
              </h3>
              <p className="font-devanagari text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                उत्तरकाशी की पावन घाटी में स्थित मथाली अंचल ध्यान, मौन और आत्म-साधना के लिए परम शांत एवं आध्यात्मिक ऊर्जा से परिपूर्ण वातावरण प्रदान करता है।
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
              <span className="material-symbols-outlined text-sm">nature</span>
              <span>Sacred Himalayan Valley</span>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-sm bg-secondary-container text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">self_improvement</span>
              </div>
              <span className="font-devanagari text-xs text-tertiary font-semibold tracking-wider block mb-1">
                मौन एवं एकांत
              </span>
              <h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-3">
                साधना एवं आत्म-चिंतन
              </h3>
              <p className="font-devanagari text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                प्राकृतिक एकांत में अंतर्मुखी होकर आत्म-निरीक्षण, स्वाध्याय और ध्यान की गहन गहराइयों में उतरने के लिए आश्रम परिसर अत्यंत अनुकूल है।
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
              <span className="material-symbols-outlined text-sm">spa</span>
              <span>Deep Meditative Contemplation</span>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-sm bg-secondary-container text-secondary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">park</span>
              </div>
              <span className="font-devanagari text-xs text-tertiary font-semibold tracking-wider block mb-1">
                प्राकृतिक दिव्यता
              </span>
              <h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-3">
                शुद्ध वातावरण एवं शांति
              </h3>
              <p className="font-devanagari text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                हिमालयी वायु की निर्मलता, देवदार और चीड़ के वनों की शांत छाया मन की चंचलता को शांत कर चेतना को अंतर्मुखी बनाते हैं।
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
              <span className="material-symbols-outlined text-sm">filter_vintage</span>
              <span>Pristine Mountain Quietude</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Guru Parampara Section */}
      <section className="py-space-xl bg-surface-container-low border-y border-outline-variant/20" id="guru-parampara">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-tertiary"></span>
              <span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider">
                परंपरा और आत्मिक संचरण
              </span>
              <span className="w-8 h-[1px] bg-tertiary"></span>
            </div>
            <h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
              गुरु-परंपरा एवं दिव्य गुरु-कृपा
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Shridhyan functions as a living channel of sacred transmission, awakened through the subtle spiritual presence and guidance of the revered Guru lineage.
            </p>
          </div>

          {/* 3 Gurus in layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Yogananda Ji Maharaj (Rishikesh) */}
            <div className="bg-primary-container p-6 rounded-sm shadow-xl gilded-inset text-center flex flex-col justify-between">
              <div>
                <div className="w-48 h-48 mx-auto rounded-xl p-1.5 border-2 border-tertiary-fixed/60 mb-6 overflow-hidden bg-primary flex items-center justify-center relative group">
                  <div className="w-full h-full rounded-lg bg-gradient-to-b from-[#14261c] to-[#092217] flex flex-col items-center justify-center p-4 text-center border border-tertiary/20">
                    <span className="text-4xl text-amber-300 font-serif mb-2 select-none">ॐ</span>
                    <span className="font-devanagari text-xs text-amber-200/80 tracking-widest">
                      ऋषिकेश परंपरा
                    </span>
                  </div>
                </div>
                <span className="font-devanagari text-tertiary-fixed text-label-md font-label-md tracking-widest block mb-1">
                  ऋषिकेश (Rishikesh)
                </span>
                <h3 className="font-devanagari text-2xl font-semibold text-on-primary mb-2">
                  परम पूज्य योगानन्द जी महाराज
                </h3>
                <p className="text-surface-container-high text-body-sm font-body-sm max-w-xs mx-auto leading-relaxed">
                  Himalayan Yogi and revered spiritual inspiration in the lineage of authentic tapasya.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tertiary/30 text-tertiary-fixed-dim text-xs font-devanagari">
                ऋषिकेश की तपोनिष्ठ आध्यात्मिक परंपरा
              </div>
            </div>

            {/* 2. Swami Ji Maharaj */}
            <div className="bg-primary-container p-6 rounded-sm shadow-xl gilded-inset text-center flex flex-col justify-between border-2 border-tertiary/40">
              <div>
                <div className="w-48 h-48 mx-auto rounded-xl p-1.5 border-2 border-tertiary-fixed mb-6 overflow-hidden bg-primary shadow-lg">
                  <img
                    alt="Param Pujya Swami Ji Maharaj"
                    className="w-full h-full object-cover rounded-xl"
                    src="/images/maharaj/swami_ji.jpeg"
                  />
                </div>
                <span className="font-devanagari text-tertiary-fixed text-label-md font-label-md tracking-widest block mb-1">
                  पथप्रदर्शक एवं संस्थापक
                </span>
                <h3 className="font-devanagari text-2xl font-semibold text-on-primary mb-2">
                  परम पूज्य स्वामी जी महाराज
                </h3>
                <p className="text-surface-container-high text-body-sm font-body-sm max-w-xs mx-auto leading-relaxed">
                  Guide and inspiration behind Shridhyan Ashram, dedicated to authentic meditation and Himalayan tapasya.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tertiary/30 text-tertiary-fixed text-xs font-devanagari font-medium">
                “50 वर्षों की हिमालयी तपस्या से उपजी प्रामाणिक साधना”
              </div>
            </div>

            {/* 3. Sadhvi Radhika */}
            <div className="bg-primary-container p-6 rounded-sm shadow-xl gilded-inset text-center flex flex-col justify-between">
              <div>
                <div className="w-48 h-48 mx-auto rounded-xl p-1.5 border-2 border-tertiary-fixed/60 mb-6 overflow-hidden bg-primary flex items-center justify-center relative group">
                  <div className="w-full h-full rounded-lg bg-gradient-to-b from-[#14261c] to-[#092217] flex flex-col items-center justify-center p-4 text-center border border-tertiary/20">
                    <span className="text-4xl text-amber-300 font-serif mb-2 select-none">ॐ</span>
                    <span className="font-devanagari text-xs text-amber-200/80 tracking-widest">
                      साधना एवं मार्गदर्शन
                    </span>
                  </div>
                </div>
                <span className="font-devanagari text-tertiary-fixed text-label-md font-label-md tracking-widest block mb-1">
                  आध्यात्मिक मार्गदर्शिका
                </span>
                <h3 className="font-devanagari text-2xl font-semibold text-on-primary mb-2">
                  पूज्या साध्वी राधिका जी
                </h3>
                <p className="text-surface-container-high text-body-sm font-body-sm max-w-xs mx-auto leading-relaxed">
                  Guiding seekers on the inner path of meditation, yogic disciplines, and devotional contemplative life.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tertiary/30 text-tertiary-fixed-dim text-xs font-devanagari">
                समर्पण, मौन एवं साधना मार्गदर्शन
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto p-4 rounded bg-surface/50 border border-outline-variant/30 text-on-surface-variant font-devanagari text-sm">
            “गुरु-शिष्य परंपरा में साधना, अनुशासन और अनुभव का परम महत्व है। गुरु-कृपा ही आंतरिक यात्रा का मूल प्रकाश है।”
          </div>
        </div>
      </section>

      {/* 6. Mauna / Silence Section */}
      <section className="bg-primary text-on-primary py-28 relative" id="mauna">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-devanagari text-tertiary-fixed text-xs tracking-widest block mb-4">
            ॥ मौनं सर्वार्थ साधनम् ॥
          </span>
          <h2 className="font-devanagari text-3xl md:text-5xl lg:text-6xl font-normal text-surface mb-6 tracking-wide leading-tight">
            “यहाँ मौन भी एक साधना है”
          </h2>
          <p className="text-surface-container-high text-body-lg font-body-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Words cease where pure presence begins. In Shridhyan, silence is not merely the absence of speech, but the luminous awakening of internal awareness.
          </p>
          <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-tertiary-fixed-dim text-sm font-label-md">
            <span>वाक् मौन (Silence of Speech)</span>
            <span>•</span>
            <span>इन्द्रिय मौन (Silence of Senses)</span>
            <span>•</span>
            <span>मनो मौन (Silence of Mind)</span>
          </div>
        </div>
      </section>

      {/* 7. Courses Section (replaces Sadhana) */}
      <section className="py-space-xl px-6 md:px-margin max-w-7xl mx-auto" id="courses">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">
            प्रशिक्षण एवं साधना कार्यक्रम
          </span>
          <h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
            पाठ्यक्रम (Courses)
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Authentic courses and guided training systematically conducted in the sacred Himalayan atmosphere of Shridhyan.
          </p>
        </div>

        {/* 3 Courses in Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course 1: Vedic Bio Healing */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">
                  ०१
                </span>
                <span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant font-medium">
                  पाठ्यक्रम
                </span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-primary mb-1 group-hover:text-tertiary transition-colors">
                Vedic Bio Healing
              </h3>
              <h4 className="font-devanagari text-base font-semibold text-secondary mb-3">
                वैदिक बायो हीलिंग
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                वैदिक ऊर्जा, संतुलन एवं प्राकृतिक उपचार की पारम्परिक पद्धतियों पर आधारित विशेष पाठ्यक्रम।
              </p>
              <div className="text-xs text-outline font-sans italic">
                (Course details will be provided soon)
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
              <a href="#contact" className="hover:text-tertiary transition-colors">
                संपर्क करें (Inquire)
              </a>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Course 2: Meditation Teacher Training Course */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">
                  ०२
                </span>
                <span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant font-medium">
                  शिक्षक प्रशिक्षण
                </span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-primary mb-1 group-hover:text-tertiary transition-colors">
                Meditation Teacher Training Course
              </h3>
              <h4 className="font-devanagari text-base font-semibold text-secondary mb-3">
                ध्यान शिक्षक प्रशिक्षण पाठ्यक्रम
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                गहन ध्यान विधियों का विधिवत अभ्यास, योगिक अनुशासन एवं ध्यान शिक्षण कौशल का संपूर्ण प्रशिक्षण।
              </p>
              <div className="text-xs text-outline font-sans italic">
                (Course details will be provided soon)
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
              <a href="#contact" className="hover:text-tertiary transition-colors">
                संपर्क करें (Inquire)
              </a>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Course 3: Shri Vidya */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group shadow-sm hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">
                  ०३
                </span>
                <span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant font-medium">
                  साधना
                </span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-primary mb-1 group-hover:text-tertiary transition-colors">
                Shri Vidya
              </h3>
              <h4 className="font-devanagari text-base font-semibold text-secondary mb-3">
                श्री विद्या
              </h4>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                श्रीविद्या परंपरा की प्रामाणिक साधना, मंत्र, ध्यान एवं उपासना का मार्गदर्शन।
              </p>
              <div className="text-xs text-outline font-sans italic">
                (Course details will be provided soon)
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
              <a href="#contact" className="hover:text-tertiary transition-colors">
                संपर्क करें (Inquire)
              </a>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Gallery Section */}
      <section className="py-space-xl bg-surface-container-low border-y border-outline-variant/20" id="gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">
                चित्रावली एवं आश्रम दर्शन
              </span>
              <h2 className="font-devanagari text-headline-lg font-headline-lg text-primary">
                प्रकृति, परिवेश एवं अनुभव
              </h2>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md mt-4 md:mt-0">
              A glimpse into the daily rhythm of rustic stone courtyards, sacred fire offerings, and uncontaminated mountain quietude.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-8 group relative overflow-hidden rounded-sm h-80 md:h-[480px]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Golden dawn over misty Himalayan valley in Uttarkashi"
                src="/images/himalaya_misty_peaks.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-on-primary">
                <span className="text-xs text-tertiary-fixed font-label-sm uppercase tracking-wider">
                  हिमालयी प्रभात
                </span>
                <h4 className="font-devanagari text-lg font-semibold">
                  प्रातःकालीन मौन एवं ध्यान साधना
                </h4>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-5">
              <div className="group relative overflow-hidden rounded-sm h-56 md:h-[230px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Traditional sacred Vedic yajnashala sacrificial fire pavilion"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF0_RyvZM0TFhPyLMAZYADJ8mvLHmwLGTTvkIti29X_mc1GGvBOuTDMrVDM7KcAZL77jwaxIHmSwSLQMSYzWxDhQjn-c39171cCAA--plk41MhU649Jl1SysSlcqQtJgtHG_XAczWI-SD0MY80FR2sZi0dcs78reMqqYpdz3oaHvPaCLnyqoC84odzTM14EWn0bMhRh1OpY7XW-tZYd6wjXg4tV-U-NvtaiJgVRubjJaAC-7UCFIqP_Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-on-primary">
                  <h5 className="font-devanagari text-sm font-medium">पवित्र यज्ञशाला एवं अग्निहोत्र</h5>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-sm h-56 md:h-[230px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Serene stone courtyard in Himalayan ashram setting"
                  src="/images/ashram_courtyard.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-on-primary">
                  <h5 className="font-devanagari text-sm font-medium">आश्रम प्रांगण एवं परिवेश</h5>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-sm h-64">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Rustic meditation hall made with exposed stone overlooking lush forest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnDlBBkB5sePVffUXJQophgs3mRppPTlmw6RqGYezTRr69evIRowVw5mxl8evyRR9Rn9kt7fqQpEdl7NMeTHld_-BW0iV7ucUjqQNOkm9rv-3UKeNpzCzvoteVEdPFoMLJHQdUaLusrX08UQlrbmPXqNLFYZIPZS885oIFFLbAoxhv7_IU2BlDZGkQAytF6cZaG-7klOENC8wZh5GQXPcdmr_hrbGR6GiOMZ3AqAK5aT5X-KMJ8cs5ow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-on-primary">
                <h5 className="font-devanagari text-sm font-medium">प्रस्तर व काष्ठ निर्मित ध्यान कुटीर</h5>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-sm h-64">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Close up of traditional brass bell and flowers in peaceful sunlight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh09d1Qf8oV6A1qxRb--oEbgRWWI502vX43a_Q0B15lgKbDKO_Sfj0q0xZWGwscwKrj8bsh0snjHfHWLyRew18aoh48oAMLE8AknQA9lLcgpGgrF2fkOGW6VyS2G8hhOYBq_IQbSWDX61t5MXYOuid85WeS0U06uplGUodzRgRVn3ixYoijfNjrsZJLgXTBxvuUPQg4MONvgAwB7k9skCzXCGttLcJmST32ksPd1nP1A-ZjyOcx9XYKg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-on-primary">
                <h5 className="font-devanagari text-sm font-medium">सायंकालीन संध्या दीप आराधना</h5>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-sm h-64">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Sacred nature platform where spiritual seekers sit in deep meditation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYc-tIwG6YtPStorlxjoZe6XK9n9ybal_bxXQBI0LNXkubqWgG3o1mxdh0YcVjaskCtgKh4xLTEqaxGnY-vh-xtrMUNdNx9YjJZQTmuirD4QVJLLuIlMilsZCL36AeRl_rvoVMN4HFeFTi8eTdokpU4aIUMouA9cx6xfadUF-aNhl07DD1IZQ_w61JZiVRvXPVAJC12kBKcj9IwhPOQSSrgTtZC2ayqyPEheLu21qu7M4TcxOxBrBoJg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-on-primary">
                <h5 className="font-devanagari text-sm font-medium">आश्रम परिसर में मौन आत्म-चिंतन</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Spiritual Family Section */}
      <section className="py-20 bg-primary-container text-on-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-12 h-12 mx-auto rounded-full bg-tertiary/30 text-tertiary-fixed flex items-center justify-center mb-5">
            <span className="material-symbols-outlined text-2xl">diversity_1</span>
          </div>
          <h2 className="font-devanagari text-3xl md:text-4xl font-semibold text-surface mb-5">
            आपका अपना आध्यात्मिक परिवार
          </h2>
          <p className="font-devanagari text-surface-container-high text-body-lg font-body-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
            चाहे आप किसी भी देश, पंथ या पृष्ठभूमि से हों—यदि आपके हृदय में सत्य, शांति और आत्म-साधना के प्रति निष्ठा है, तो श्रीध्यान आश्रम आपका स्वागत करता है।
          </p>
          <a
            className="inline-flex items-center gap-2 bg-tertiary hover:bg-tertiary-container text-on-tertiary px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-all shadow-md hover:-translate-y-0.5 active:scale-95"
            href="#contact"
          >
            <span>{isHi ? 'संपर्क करें' : 'Contact Ashram'}</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* 10. Contact & Location Section (replaces Visit) */}
      <section className="py-space-xl px-6 md:px-margin max-w-7xl mx-auto" id="contact">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">
            स्थान एवं संपर्क
          </span>
          <h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
            आश्रम स्थान एवं संपर्क
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Reach out for course inquiries, spiritual guidance, and visiting information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location & Connectivity */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-devanagari text-headline-sm font-headline-sm text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">location_on</span>
                  <span>आश्रम स्थान (Ashram Location)</span>
                </h3>
              </div>

              <p className="text-body-sm font-body-sm text-on-surface leading-relaxed mb-4">
                Mathali (मथाली), located at <strong className="text-primary font-semibold">Mathali, Uttarkashi district, Uttarakhand 249135</strong>, India. The exact coordinates are <strong className="text-primary font-semibold">30.821991° N, 78.609482° E</strong>.
              </p>

              {/* Map Embed */}
              <div className="relative h-64 w-full rounded-sm overflow-hidden border border-outline-variant/40 mb-4 bg-surface-container">
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
                  className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary text-on-primary px-5 py-2.5 rounded-sm text-label-md font-label-md transition-all shadow-sm gilded-inset"
                  href="https://maps.google.com/?q=30.821991,78.609482"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-base">map</span>
                  <span>Google Maps पर देखें</span>
                </a>
                <span className="text-xs text-on-surface-variant font-mono bg-surface-container px-3 py-1.5 rounded-sm border border-outline-variant/20">
                  📍 30.821991° N, 78.609482° E • Mathali, Uttarkashi
                </span>
              </div>
            </div>

            {/* Connectivity Guide */}
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6">
              <h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">near_me</span>
                <span>कैसे पहुँचें (Connectivity Guide)</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">flight</span>
                  <div>
                    <strong className="text-on-surface text-body-sm font-semibold">हवाई मार्ग (By Air):</strong>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Jolly Grant Airport, Dehradun (DED) — Approx. 175 km. Road transport available towards Uttarkashi.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">train</span>
                  <div>
                    <strong className="text-on-surface text-body-sm font-semibold">रेल मार्ग (By Rail):</strong>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Rishikesh, Haridwar, or Dehradun Railway Stations, followed by road transport to Mathali (Uttarkashi).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">directions_car</span>
                  <div>
                    <strong className="text-on-surface text-body-sm font-semibold">सड़क मार्ग (By Road):</strong>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Located at Mathali, Uttarkashi along the scenic highway corridor (NH 34) in Uttarakhand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/40 rounded-sm p-8 shadow-sm gilded-inset">
            <h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-1">
              संपर्क एवं संदेश
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
              पाठ्यक्रम की जानकारी या आश्रम संपर्क हेतु संदेश भेजें:
            </p>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                  आपका नाम (Full Name) *
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                  placeholder="आपका पूरा नाम..."
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                    फोन / संपर्क नंबर
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                    placeholder="+91 9XXXXXXXXX"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                    ईमेल (Email) *
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
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
                  विषय / पाठ्यक्रम (Subject)
                </label>
                <select
                  className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="Vedic Bio Healing">Vedic Bio Healing</option>
                  <option value="Meditation Teacher Training Course">Meditation Teacher Training Course</option>
                  <option value="Shri Vidya">Shri Vidya</option>
                  <option value="ध्यान एवं साधना (Meditation & Sadhana)">ध्यान एवं साधना (Meditation & Sadhana)</option>
                  <option value="सामान्य संपर्क (General Inquiry)">सामान्य संपर्क (General Inquiry)</option>
                </select>
              </div>

              <div>
                <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                  संदेश (Message) *
                </label>
                <textarea
                  className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors"
                  placeholder="आपका संदेश..."
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                className="w-full bg-primary-container hover:bg-primary text-on-primary py-3 rounded-sm font-label-md text-label-md tracking-wider transition-all duration-200 gilded-inset"
                type="submit"
              >
                संदेश भेजें (Send to shridhyan.com@gmail.com)
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
                <span>Google Maps पर देखें</span>
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
    </div>
  );
}
