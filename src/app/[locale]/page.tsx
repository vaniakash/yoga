"use client";
import React from 'react';
import { AboutSection } from '@/components/AboutSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0 z-0">
<img alt="Panoramic aerial view of ancient temples on the lush forest banks of river Narmada during golden sunrise mist" className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6rFfHwFge9fM71tVSQ8FIdAtPvOJKDFkvWSuT8dEGWN4PZlhjogGinp0hc2y1LYc3lS8Bxj8XaeoFRhDxUfgdQBYesy-l3TXReKUXMxBJ_6qCXWAkhzZsZG3EesaOfmzOZpLMxHsJZ_-LCLHqp99v4sn1PrnMnNNo_SKKHnvGLPRUrmDiqxb-lYisgcX-vzkE-cCRayBPoHDkvpAzZVTJ5-LOA_V2oetUfv7mkRtgixBa0OSJBqwPHA"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-radial from-transparent via-primary/20 to-primary/80"></div>
</div>

<div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">

<h1 className="text-surface font-headline-lg md:text-display-lg font-display-lg tracking-tight mb-4 text-balance drop-shadow-md">
        SHRIDHYAN
      </h1>

<p className="font-devanagari text-tertiary-fixed text-xl md:text-2xl font-medium tracking-wide mb-3 text-balance max-w-3xl leading-relaxed">
        “माँ नर्मदा के पावन तट पर एक प्राचीन तपोभूमि एवं साधना स्थल”
      </p>

<p className="text-surface-container-high text-body-lg font-body-lg font-light max-w-2xl mx-auto mb-10 text-balance opacity-95">
        A timeless sanctuary of meditation, silence, and authentic Gurukulam wisdom on the consecrated banks of sacred River Narmada.
      </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-tertiary hover:bg-tertiary-container text-on-tertiary px-8 py-3.5 rounded-sm font-label-lg text-label-lg tracking-wide transition-all duration-300 shadow-md hover:-translate-y-0.5" href="#visit">
<span className="font-devanagari">आश्रम में पधारें</span>
<span className="text-xs opacity-80">(Plan Pilgrimage)</span>
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-surface/10 hover:bg-surface/20 text-surface border border-surface/30 backdrop-blur-sm px-8 py-3.5 rounded-sm font-label-lg text-label-lg tracking-wide transition-all duration-300 hover:-translate-y-0.5" href="#about">
<span className="font-devanagari">आश्रम के बारे में जानें</span>
<span className="text-xs opacity-80">(Explore Ashram)</span>
<span className="material-symbols-outlined text-[18px]">arrow_downward</span>
</a>
</div>

<div className="mt-14 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/60 backdrop-blur-md border border-surface-container-highest/20 text-surface-container-high text-label-md font-label-md">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
<span className="font-devanagari">ध्वनि: नर्मदा प्रवाह, वायु एवं मौन</span>
<span className="text-surface-dim opacity-40">|</span>
<span className="text-tertiary-fixed-dim">Omkareshwar Foothills</span>
</div>

<div className="mt-10 flex flex-col items-center text-surface-variant/80 gap-1 animate-bounce">
<span className="font-devanagari text-[11px] tracking-widest text-surface-container">अधोमुख स्क्रॉल करें</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
</section>

<AboutSection />

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
        Living in conscious cadence with pristine water, raw river stones, birdsong, and the natural cycles of dawn and dusk is not an ascetic austerity — it is the deepest portal to inner quietude.
      </p>
<div className="w-24 h-[1px] bg-tertiary-fixed/40 mx-auto mb-8"></div>
<p className="font-devanagari text-surface-container-lowest text-body-md font-body-md leading-relaxed text-balance">
        यहाँ जीवन को सरल और चेतना को जागृत करने के लिए प्राकृतिक संसाधनों, वैदिक जीवनशैली और नदी-तटीय शांत वातावरण को प्राथमिकता दी गई है। प्रकृति स्वयं यहाँ की मुख्य मार्गदर्शिका है।
      </p>
</div>
</section><section className="py-space-xl px-6 md:px-margin max-w-7xl mx-auto" id="tapobhoomi">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">ऋषि परम्परा एवं ऐतिहासिक संदर्भ</span>
<h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
        प्राचीन तपोभूमि की आध्यात्मिक विरासत
      </h2>
<p className="text-body-md font-body-md text-on-surface-variant">
        Rooted in ancient Vedic history, Shridhyan stands upon ground revered through millennia for ascetic endurance, silence, and communion with the eternal.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-sm bg-secondary-container text-secondary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl">auto_stories</span>
</div>
<span className="font-devanagari text-xs text-tertiary font-semibold tracking-wider block mb-1">मान्यता है कि...</span>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-3">महर्षि शांडिल्य ऋषि की तपोस्थली</h3>
<p className="font-devanagari text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
            प्राचीन मान्यताओं एवं मौखिक इतिहास के अनुसार, इस पवित्र अंचल में महर्षि शांडिल्य ने कठोर अनुष्ठान किए थे। उनके भक्ति सूत्रों की शांत तरंगें आज भी आश्रम के वातावरण में स्पंदित हैं।
          </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
<span className="material-symbols-outlined text-sm">history_edu</span>
<span>Sandstone Hermitage Annals</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-sm bg-secondary-container text-secondary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl">park</span>
</div>
<span className="font-devanagari text-xs text-tertiary font-semibold tracking-wider block mb-1">परंपरा के अनुसार...</span>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-3">शताब्दी-पुरातन वटवृक्ष छाया</h3>
<p className="font-devanagari text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
            आश्रम परिसर में खड़े कई सौ वर्ष पुराने अक्षय वट एवं पीपल वृक्ष साधकों को प्राकृतिक ध्यान कक्ष प्रदान करते हैं, जहाँ मौन बैठते ही मन की चंचलता स्वतः शांत हो जाती है।
          </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
<span className="material-symbols-outlined text-sm">nature</span>
<span>Centuries of Living Chaitanya</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-sm bg-secondary-container text-secondary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-2xl">water</span>
</div>
<span className="font-devanagari text-xs text-tertiary font-semibold tracking-wider block mb-1">शास्त्रोक्त वचन...</span>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-3">“नर्मदा के कंकर सब शंकर”</h3>
<p className="font-devanagari text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
            नर्मदा के प्रत्येक प्राकृतिक पाषाण में स्वयं भगवान शिव का वास माना जाता है। आश्रम का यह घाट साधकों के लिए प्रत्यक्ष शिवलिंग अर्चन और जल-तर्पण की परम सिद्धिस्थली है।
          </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-secondary">
<span className="material-symbols-outlined text-sm">filter_vintage</span>
<span>Banalinga Consecrated Ghats</span>
</div>
</div>
</div>
</section><section className="py-space-xl bg-surface-container-low border-y border-outline-variant/20" id="guru-parampara">
<div className="max-w-7xl mx-auto px-6 md:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5">
<div className="relative bg-primary-container p-6 rounded-sm shadow-xl gilded-inset text-center">
<div className="w-56 h-56 mx-auto rounded-xl p-1.5 border-2 border-tertiary-fixed mb-6 overflow-hidden bg-primary">
<img alt="Param Pujya Swami Ji" className="w-full h-full object-cover rounded-xl" src="/images/maharaj/swami_ji.jpeg"/>
</div>
<span className="font-devanagari text-tertiary-fixed text-label-md font-label-md tracking-widest block mb-1">संस्थापक एवं पथप्रदर्शक</span>
<h3 className="font-devanagari text-2xl font-semibold text-on-primary mb-2">परम पूज्य स्वामी जी</h3>
<p className="text-surface-container-high text-body-sm font-body-sm max-w-xs mx-auto">
              Lineage Holder of Shaktipat Parampara and Monk of the Venerable Shankaracharya Order.
            </p>
<div className="mt-6 pt-4 border-t border-tertiary/30 text-tertiary-fixed-dim text-xs font-devanagari">
              “गुरु-कृपा ही साधना का मूल और अंतिम गंतव्य है।”
            </div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="inline-flex items-center gap-2">
<span className="w-8 h-[1px] bg-tertiary"></span>
<span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider">परंपरा और आत्मिक संचरण</span>
</div>
<h2 className="font-devanagari text-headline-lg font-headline-lg text-primary">
            गुरु-परंपरा एवं दिव्य गुरु-कृपा
          </h2>
<p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            Shridhyan functions not as an academic institution, but as a living channel of sacred transmission. Knowledge is awakened through the subtle spiritual presence of the Guru lineage, rooted in unbroken Guru-Shishya parampara.
          </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
<div className="p-4 bg-surface rounded border border-outline-variant/30">
<div className="flex items-center gap-2.5 mb-2">
<span className="material-symbols-outlined text-tertiary">bolt</span>
<h4 className="font-devanagari text-base font-semibold text-primary">शक्तिपात परंपरा (Shaktipat)</h4>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">
                Direct transmission of spiritual energy activating the seeker's dormant Kundalini without strain or forcible struggle.
              </p>
</div>
<div className="p-4 bg-surface rounded border border-outline-variant/30">
<div className="flex items-center gap-2.5 mb-2">
<span className="material-symbols-outlined text-tertiary">menu_book</span>
<h4 className="font-devanagari text-base font-semibold text-primary">शंकराचार्य परंपरा</h4>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">
                Grounded in pristine Advaita Vedanta non-dual philosophy, disciplined monastic tapas, and classical scriptures.
              </p>
</div>
<div className="p-4 bg-surface rounded border border-outline-variant/30 sm:col-span-2">
<div className="flex items-center gap-2.5 mb-2">
<span className="material-symbols-outlined text-tertiary">psychology</span>
<h4 className="font-devanagari text-base font-semibold text-primary">आत्मिक विकास एवं आत्मानुभूति</h4>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant">
                Guiding each sadhaka according to their unique spiritual disposition (Adhikara), fostering inner stillness, detachment, and permanent peace.
              </p>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-24 bg-surface relative overflow-hidden" id="narmada">
<div className="max-w-7xl mx-auto px-6 md:px-margin">

<div className="text-center max-w-2xl mx-auto mb-16 p-6 rounded-sm bg-surface-container-low border border-tertiary/20 gilded-inset">
<span className="text-tertiary text-xs tracking-widest uppercase block mb-2">॥ नर्मदा अष्टकम् ॥</span>
<h3 className="font-devanagari text-xl md:text-2xl font-medium text-primary leading-relaxed">
          “त्वदीय पाद पंकजं नमामि देवि नर्मदे...”
        </h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2 italic">
          "O Divine Mother Narmada, I bow forever at your sacred lotus feet, giver of liberation and tranquility."
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">नदी, प्रकृति एवं वन्यजीवन</span>
<h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-6">
            माँ नर्मदा की पावन उपस्थिति
          </h2>
<p className="font-devanagari text-body-md font-body-md text-on-surface-variant leading-relaxed mb-4">
            नर्मदा केवल एक नदी नहीं, साक्षात जीवनदायिनी चैतन्य धारा हैं। आश्रम का संपूर्ण दिनचर्या नर्मदा के प्रवाह और उसकी तरंगों के साथ सुरभित है।
          </p>
<p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
            Here on the pristine shores, the atmosphere is alive with natural sanctity: wild peacocks calling from teak and sal trees, herds of spotted deer drinking at dawn, fragrant medicinal plants healing the air, and serene sandstone ghats offering undisturbed communion with the holy waters.
          </p>

<div className="space-y-3">
<div className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface">
<span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
<span><strong>Pure Flowing Waters:</strong> Non-commercial, pristine river section ideal for silent snaan (sacred bath).</span>
</div>
<div className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface">
<span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
<span><strong>Wildlife Sanctuary:</strong> Peacocks, kingfishers, egrets, and river turtles coexisting in fearless peace.</span>
</div>
<div className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface">
<span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
<span><strong>Narmada Parikrama Halt:</strong> Traditional shelter and Annakshetra for sincere barefoot circumambulators.</span>
</div>
</div>
</div>

<div className="relative">
<img className="w-full h-[420px] object-cover rounded-sm border border-outline-variant/30 shadow-md" data-alt="A peaceful panoramic view of River Narmada at sunrise with morning mist rising over golden water, lush jungle shoreline, a lone wooden rowing boat anchored, and a peacock standing silently on warm sandstone riverbanks in deep contemplative Vedic ashram setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDA63r2m2Y9uY9n_eqfQDu-S6IBR603V-iS9qbsSBVE02xk4M09sOcowOSf90DI5JI8Rpcgqoydx_XREuDFbCv5-OQgOMXLPm1l-2OjPdmuEBNz2Ng1yKgSIgfxUjIgQ9sCnN8LHR4uhCSB0DW3wK90Y5c-A7uPqwXyuy3tQ-kW7xlgaiJ9Om9u-7yBpQF_E8DJ1tsv0aap5SJjIySBdQEO09zujdeb7f86V8RZkrUIULkiHffy2EqUg"/>
<div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-sm border border-outline-variant/40 text-xs font-devanagari text-primary font-medium">
            माँ नर्मदा उत्तरी तट • काल्प ग्राम घाट
          </div>
</div>
</div>
</div>
</section><section className="bg-primary text-on-primary py-28 relative" id="mauna">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="font-devanagari text-tertiary-fixed text-xs tracking-widest block mb-4">॥ मौनं सर्वार्थ साधनम् ॥</span>
<h2 className="font-devanagari text-3xl md:text-5xl lg:text-6xl font-normal text-surface mb-6 tracking-wide leading-tight">
        “यहाँ मौन भी एक साधना है”
      </h2>
<p className="text-surface-container-high text-body-lg font-body-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
        Words cease where pure presence begins. In Shridhyan, silence is not merely the absence of speech, but the luminous awakening of internal awareness.
      </p>
<div className="inline-flex items-center gap-6 text-tertiary-fixed-dim text-sm font-label-md">
<span>वाक् मौन (Silence of Speech)</span>
<span>•</span>
<span>इन्द्रिय मौन (Silence of Senses)</span>
<span>•</span>
<span>मनो मौन (Silence of Mind)</span>
</div>
</div>
</section><section className="py-space-xl px-6 md:px-margin max-w-7xl mx-auto" id="sadhana">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">वैदिक एवं तांत्रिक ध्यान पद्धतियाँ</span>
<h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
        साधना एवं आध्यात्मिक प्रशिक्षण
      </h2>
<p className="text-body-md font-body-md text-on-surface-variant">
        Authentic, guided spiritual disciplines systematically conducted in alignment with classical texts and individual seeker maturity.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group">
<div>
<div className="flex items-center justify-between mb-4">
<span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">०१</span>
<span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant">दीक्षा आवश्यक</span>
</div>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-2 group-hover:text-tertiary transition-colors">श्रीविद्या साधना</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
            Sri Vidya Upasana — Sacred geometric concentration upon Sri Chakra, Navavarana puja contemplation, and inner realization of Lalita Tripurasundari.
          </p>
<div className="text-xs text-outline font-devanagari">समय: प्रातः ०४:३० (ब्रह्म मुहूर्त) • अवधि: २१ दिवस</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
<span>विवरण देखें</span>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group">
<div>
<div className="flex items-center justify-between mb-4">
<span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">०२</span>
<span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant">गुरु अनुग्रह</span>
</div>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-2 group-hover:text-tertiary transition-colors">शक्तिपात साधना</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
            Awakening the primordial serpent power through direct descent of divine grace (Kripa). Effortless spontaneous kriyas and deep meditative absorption.
          </p>
<div className="text-xs text-outline font-devanagari">समय: सायं ०६:०० • व्यक्तिगत मार्गदर्शन</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
<span>विवरण देखें</span>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group">
<div>
<div className="flex items-center justify-between mb-4">
<span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">०३</span>
<span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant">सद्भाव साधना</span>
</div>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-2 group-hover:text-tertiary transition-colors">आशीर्वाद विद्या</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
            The esoteric art of radiating benevolent cosmic vibrations, healing prayer energy, and invoking Guru protection for the welfare of all living beings.
          </p>
<div className="text-xs text-outline font-devanagari">समय: मध्याह्न १२:०० • लोक कल्याण भाव</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
<span>विवरण देखें</span>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group">
<div>
<div className="flex items-center justify-between mb-4">
<span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">०४</span>
<span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant">तंत्र ध्यान</span>
</div>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-2 group-hover:text-tertiary transition-colors">विज्ञान भैरव तंत्र के ध्यान प्रयोग</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
            112 classical dharanas and meditation techniques taught by Lord Shiva to Devi, accessing the unconditioned pure space between breaths and thoughts.
          </p>
<div className="text-xs text-outline font-devanagari">समय: रात्रि ०८:३० • मौन सत्र</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
<span>विवरण देखें</span>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group">
<div>
<div className="flex items-center justify-between mb-4">
<span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">०५</span>
<span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant">नाद अनुसंधान</span>
</div>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-2 group-hover:text-tertiary transition-colors">प्राणायाम एवं नाद योग</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
            Systematic regulation of vital breath (Prana) and listening to the subtle internal Anahata sounds with the sacred water flow of Narmada as acoustic baseline.
          </p>
<div className="text-xs text-outline font-devanagari">समय: प्रातः ०६:०० • नदी तट पर</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
<span>विवरण देखें</span>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6 flex flex-col justify-between hover:border-tertiary transition-all duration-300 group">
<div>
<div className="flex items-center justify-between mb-4">
<span className="w-10 h-10 rounded-sm bg-tertiary-fixed/30 text-tertiary flex items-center justify-center font-bold">०६</span>
<span className="text-xs px-2.5 py-1 bg-surface rounded border border-outline-variant/30 text-on-surface-variant">गुह्य क्रिया</span>
</div>
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-2 group-hover:text-tertiary transition-colors">मुद्रा एवं कुंडलिनी साधना</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4 leading-relaxed">
            Classical Bandhas and Mudras (Kechari, Shambhavi, Ashwini) applied to redirect neuro-biological currents into the central Sushumna nadi channel.
          </p>
<div className="text-xs text-outline font-devanagari">समय: सायं ०५:०० • यग्नशाला परिसर</div>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-sm font-label-sm text-primary font-semibold">
<span>विवरण देखें</span>
<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</section><section className="py-space-xl bg-surface-container-low border-y border-outline-variant/20" id="gallery">
<div className="max-w-7xl mx-auto px-6 md:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">चित्रावली एवं आश्रम दर्शन</span>
<h2 className="font-devanagari text-headline-lg font-headline-lg text-primary">
            प्रकृति, परिवेश एवं अनुभव
          </h2>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant max-w-md mt-4 md:mt-0">
          A glimpse into the daily rhythm of rustic stone courtyards, sacred fire offerings, and uncontaminated river wilderness.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-5">

<div className="md:col-span-8 group relative overflow-hidden rounded-sm h-80 md:h-[480px]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Breathtaking golden dawn over river Narmada with sadhus meditating on natural river rocks, morning mist wrapping sacred jungle trees, and wooden oil lamps placed on ghat stairs in pure serene aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAItUM02H8ePYuuCrha1Q3uQhuW6YfZ0hyefoiTyKpMPek3c3S-WXjt17L8yoIc9Ul5JLIBIck5DPX0IVLgHhoRxw6KhoudKGVgZ1UcHlZowKrS8ql_bBj30O2TiTVf4z5QYWtTMNu1Os79uqUa_mTVawqP4QmBFck6g5rooUuJJPpm_QMplPDLV_Sl1DMUSTmMo1GOxXxChZ9AnSxy47UnimMicLA2vM6Pv1BNRbeDcdKrDG6ST0lPfQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
<div className="absolute bottom-5 left-5 text-on-primary">
<span className="text-xs text-tertiary-fixed font-label-sm uppercase tracking-wider">नर्मदा प्रभात</span>
<h4 className="font-devanagari text-lg font-semibold">प्रातःकालीन मौन पदयात्रा एवं सूर्य अर्घ्य</h4>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-5">
<div className="group relative overflow-hidden rounded-sm h-56 md:h-[230px]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Traditional sacred Vedic yajnashala sacrificial fire pavilion with natural wooden pillars, brass ritual utensils, holy sacrificial flames, and dried wood offerings in calm atmospheric morning light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF0_RyvZM0TFhPyLMAZYADJ8mvLHmwLGTTvkIti29X_mc1GGvBOuTDMrVDM7KcAZL77jwaxIHmSwSLQMSYzWxDhQjn-c39171cCAA--plk41MhU649Jl1SysSlcqQtJgtHG_XAczWI-SD0MY80FR2sZi0dcs78reMqqYpdz3oaHvPaCLnyqoC84odzTM14EWn0bMhRh1OpY7XW-tZYd6wjXg4tV-U-NvtaiJgVRubjJaAC-7UCFIqP_Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-on-primary">
<h5 className="font-devanagari text-sm font-medium">पवित्र यज्ञशाला एवं अग्निहोत्र</h5>
</div>
</div>
<div className="group relative overflow-hidden rounded-sm h-56 md:h-[230px]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Peaceful wild Indian peacock displaying iridescent feathers among ancient sandstone carvings and bamboo groves beside serene flowing water in soft natural dawn sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt13mmbahn7fkl-vvP415fWVFFb8a6rHHhsd_ceT3oHJcgzx7PX061csDCweAQNuIj9gjbt8t5EH7EnLtomUKd27vdlQ_akyXFAUUNvV3Ecx8bLWUat3TZ4Tf6nXn10Gt78PL-wRrtSo9p0UNGn92IShJZZ3t-MQbKIWeqESOqhyTLTdewF5i4Pjw3_POwhGP9-Lcro3A1bso-odcKr_H9ofIcQYb_9NtE1psQYKIZcHCF_7_dLs900A"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-on-primary">
<h5 className="font-devanagari text-sm font-medium">आश्रम प्रांगण में विचरते मयूर</h5>
</div>
</div>
</div>

<div className="md:col-span-4 group relative overflow-hidden rounded-sm h-64">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Rustic meditation hall made with exposed red sandstone and bamboo lattice screens overlooking dense green forest foliage with hand-woven organic jute sitting mats in peaceful silence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnDlBBkB5sePVffUXJQophgs3mRppPTlmw6RqGYezTRr69evIRowVw5mxl8evyRR9Rn9kt7fqQpEdl7NMeTHld_-BW0iV7ucUjqQNOkm9rv-3UKeNpzCzvoteVEdPFoMLJHQdUaLusrX08UQlrbmPXqNLFYZIPZS885oIFFLbAoxhv7_IU2BlDZGkQAytF6cZaG-7klOENC8wZh5GQXPcdmr_hrbGR6GiOMZ3AqAK5aT5X-KMJ8cs5ow"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-on-primary">
<h5 className="font-devanagari text-sm font-medium">बांस व प्रस्तर निर्मित ध्यान कुटीर</h5>
</div>
</div>
<div className="md:col-span-4 group relative overflow-hidden rounded-sm h-64">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close up of traditional brass bell and marigold garland hanging near river Narmada temple steps with sacred river water rippling in late afternoon golden hour sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh09d1Qf8oV6A1qxRb--oEbgRWWI502vX43a_Q0B15lgKbDKO_Sfj0q0xZWGwscwKrj8bsh0snjHfHWLyRew18aoh48oAMLE8AknQA9lLcgpGgrF2fkOGW6VyS2G8hhOYBq_IQbSWDX61t5MXYOuid85WeS0U06uplGUodzRgRVn3ixYoijfNjrsZJLgXTBxvuUPQg4MONvgAwB7k9skCzXCGttLcJmST32ksPd1nP1A-ZjyOcx9XYKg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-on-primary">
<h5 className="font-devanagari text-sm font-medium">सायंकालीन माँ नर्मदा महाआरती</h5>
</div>
</div>
<div className="md:col-span-4 group relative overflow-hidden rounded-sm h-64">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Ancient banyan tree roots intertwining around sacred granite river platform where spiritual seekers sit in padmasana posture absorbed in deep dhyana meditation during gentle dawn breeze." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYc-tIwG6YtPStorlxjoZe6XK9n9ybal_bxXQBI0LNXkubqWgG3o1mxdh0YcVjaskCtgKh4xLTEqaxGnY-vh-xtrMUNdNx9YjJZQTmuirD4QVJLLuIlMilsZCL36AeRl_rvoVMN4HFeFTi8eTdokpU4aIUMouA9cx6xfadUF-aNhl07DD1IZQ_w61JZiVRvXPVAJC12kBKcj9IwhPOQSSrgTtZC2ayqyPEheLu21qu7M4TcxOxBrBoJg"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-on-primary">
<h5 className="font-devanagari text-sm font-medium">वटवृक्ष तले मौन आत्म-चिंतन</h5>
</div>
</div>
</div>
</div>
</section><section className="py-space-xl px-6 md:px-margin max-w-7xl mx-auto" id="annakshetra">
<div className="bg-surface-container p-8 md:p-14 rounded-sm border border-outline-variant/30 relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 mb-3">
<span className="w-6 h-[1px] bg-tertiary"></span>
<span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider">निशुल्क महाप्रसाद एवं सेवा</span>
</div>
<h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
            अन्नक्षेत्र — सेवा की पवित्र परंपरा
          </h2>
<div className="font-devanagari text-lg text-secondary font-medium italic mb-6">
            “साधना के साथ सेवा और सेवा के साथ साधना”
          </div>
<p className="font-devanagari text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
            आश्रम का अन्नक्षेत्र ३६५ दिन माँ अन्नपूर्णा की कृपा से संचालित होता है। यहाँ आने वाले संतों, सन्यासियों, नर्मदा परिक्रमावासियों और दूर-दराज से आए आत्म-जिज्ञासुओं को प्रेमपूर्वक शुद्ध सात्विक, देशी गाय के घी और जैविक अन्नों से निर्मित भोजन प्रसाद परोसा जाता है।
          </p>

<div className="grid grid-cols-3 gap-4 pt-2">
<div className="border-l-2 border-tertiary pl-3">
<span className="text-2xl font-bold text-primary block">३६५</span>
<span className="text-xs text-on-surface-variant font-devanagari">दिन अनवरत सेवा</span>
</div>
<div className="border-l-2 border-tertiary pl-3">
<span className="text-2xl font-bold text-primary block">१००%</span>
<span className="text-xs text-on-surface-variant font-devanagari">सात्विक व देशी गौ-दुग्ध</span>
</div>
<div className="border-l-2 border-tertiary pl-3">
<span className="text-2xl font-bold text-primary block">परिक्रमा</span>
<span className="text-xs text-on-surface-variant font-devanagari">यात्रियों का आश्रय</span>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="bg-surface-container-lowest p-6 rounded-sm border border-outline-variant/30 shadow-sm flex flex-col gap-4">
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary">अन्नदान एवं सेवा सहभागिता</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
              Contributing to the Annakshetra is considered one of the highest karmic purifications in the Narmada pilgrimage region. Your donation directly feeds walking parikramavasis and meditating ascetics.
            </p>
<div className="p-4 bg-surface-container-low rounded text-xs space-y-1.5 text-on-surface border border-outline-variant/20 font-devanagari">
<div>• <strong>एक दिन का संपूर्ण अन्नदान:</strong> संतों व परिक्रमावासियों हेतु</div>
<div>• <strong>गौ-ग्रास सेवा:</strong> आश्रम की सुरभि गौशाला पोषण</div>
<div>• <strong>साधु वस्त्र एवं चिकित्सा सहायता:</strong> निरंतर सेवा प्रकल्प</div>
</div>
<a className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary px-5 py-2.5 rounded-sm text-label-md font-label-md hover:bg-primary transition-colors" href="#visit">
<span className="font-devanagari">सेवा में सहयोग करें</span>
<span className="material-symbols-outlined text-sm">favorite</span>
</a>
</div>
</div>
</div>
</div>
</section><section className="py-20 bg-primary-container text-on-primary relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="w-12 h-12 mx-auto rounded-full bg-tertiary/30 text-tertiary-fixed flex items-center justify-center mb-5">
<span className="material-symbols-outlined text-2xl">diversity_1</span>
</div>
<h2 className="font-devanagari text-3xl md:text-4xl font-semibold text-surface mb-5">
        आपका अपना आध्यात्मिक परिवार
      </h2>
<p className="font-devanagari text-surface-container-high text-body-lg font-body-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
        चाहे आप किसी भी देश, पंथ या पृष्ठभूमि से हों—यदि आपके हृदय में सत्य, शांति और माँ नर्मदा के प्रति आदर है, तो कालाप ग्राम गुरुकुल आश्रम आपका अपना घर है।
      </p>
<a className="inline-flex items-center gap-2 bg-tertiary hover:bg-tertiary-container text-on-tertiary px-8 py-3.5 rounded-sm font-label-lg text-label-lg tracking-wide transition-all shadow-md" href="#visit">
<span className="font-devanagari">आश्रम में पधारें</span>
<span className="text-xs opacity-90">(Join the Gurukulam Sangha)</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</section><section className="py-space-xl px-6 md:px-margin max-w-7xl mx-auto" id="visit">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="font-devanagari text-tertiary text-label-md font-label-md tracking-wider block mb-2">यात्रा मार्गदर्शन एवं संपर्क</span>
<h2 className="font-devanagari text-headline-lg font-headline-lg text-primary mb-4">
        माँ नर्मदा के पावन तट पर आपका स्वागत है
      </h2>
<p className="text-body-md font-body-md text-on-surface-variant">
        Plan your sacred stay, silent retreat, or darshan visit. Please review ashram discipline and reach out prior to arrival.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 flex flex-col gap-6">

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
<p className="text-body-sm font-body-sm text-on-surface-variant">Devi Ahilyabai Holkar Airport, Indore (IDR) — Approx. 85 km. Direct taxis and buses available towards Omkareshwar/Maheshwar.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-lg mt-0.5">train</span>
<div>
<strong className="text-on-surface text-body-sm font-semibold">रेल मार्ग (By Rail):</strong>
<p className="text-body-sm font-body-sm text-on-surface-variant">Indore Junction (80 km) or Khandwa Junction (70 km), well connected to major Indian cities.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-lg mt-0.5">directions_car</span>
<div>
<strong className="text-on-surface text-body-sm font-semibold">सड़क मार्ग (By Road):</strong>
<p className="text-body-sm font-body-sm text-on-surface-variant">Located on the picturesque northern banks along Omkareshwar - Barwaha - Maheshwar sacred pilgrimage highway corridor.</p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-6">
<h4 className="font-devanagari text-base font-semibold text-primary mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary">rule</span>
<span>आश्रम मर्यादा एवं दिशानिर्देश (Ashram Guidelines)</span>
</h4>
<ul className="text-body-sm font-body-sm text-on-surface-variant space-y-2 font-devanagari">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>आश्रम परिसर में पूर्णतः सात्विक, शाकाहारी एवं नशा-मुक्त वातावरण अनिवार्य है।</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>सादगीपूर्ण भारतीय पारंपरिक परिधान (धोती-कुर्ता / साड़ी / सलवार) धारण करें।</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span>ध्यान कक्षों और नदी घाटों पर मोबाइल फोन मौन (Silent) रखें।</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/40 rounded-sm p-8 shadow-sm gilded-inset">
<h3 className="font-devanagari text-headline-sm font-headline-sm text-primary mb-1">
          संपर्क एवं अग्रिम सूचना
        </h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
          For retreat stay arrangements, sadhana inquiries, or parikrama guidance:
        </p>
<form className="space-y-4" onSubmit={(event) => { event.preventDefault(); alert('हरिओम! आपका संदेश प्राप्त हुआ। आश्रम कार्यालय शीघ्र संपर्क करेगा।'); }}>
<div>
<label className="block text-label-md font-label-md text-on-surface-variant mb-1">आपका नाम (Full Name)</label>
<input className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors" placeholder="श्री / सुश्री..." required type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-label-md font-label-md text-on-surface-variant mb-1">फोन / WhatsApp</label>
<input className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors" placeholder="+91 98765 43210" required type="tel"/>
</div>
<div>
<label className="block text-label-md font-label-md text-on-surface-variant mb-1">ईमेल (Email)</label>
<input className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors" placeholder="sadhak@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-label-md font-label-md text-on-surface-variant mb-1">आगमन उद्देश्य (Purpose of Visit)</label>
<select className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors">
<option>मौन ध्यान एवं आत्म-साधना (Silent Sadhana)</option>
<option>दर्शन एवं अल्पकालिक प्रवास (Short Darshan Visit)</option>
<option>नर्मदा परिक्रमा विश्राम (Parikrama Halt)</option>
<option>अन्नक्षेत्र / गौशाला सेवा (Voluntary Seva)</option>
</select>
</div>
<div>
<label className="block text-label-md font-label-md text-on-surface-variant mb-1">संदेश (Optional Message)</label>
<textarea className="w-full bg-surface border border-outline-variant/50 focus:border-tertiary rounded-sm px-3.5 py-2.5 text-body-sm text-on-surface focus:outline-none focus:ring-0 transition-colors" placeholder="आपकी साधना पृष्ठभूमि या प्रवास की तिथि..." rows={3}></textarea>
</div>
<button className="w-full bg-primary-container hover:bg-primary text-on-primary py-3 rounded-sm font-label-md text-label-md tracking-wider transition-all duration-200 gilded-inset" type="submit">
            संपर्क करें (Contact Ashram)
          </button>
</form>

<div className="mt-6 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
<a className="flex items-center gap-1.5 text-primary hover:text-tertiary font-medium" href="https://maps.google.com" rel="noopener" target="_blank">
<span className="material-symbols-outlined text-sm">map</span>
<span>Google Maps पर देखें</span>
</a>
<span className="text-outline">|</span>
<a className="flex items-center gap-1.5 text-secondary hover:text-primary font-medium" href="tel:+919876543210">
<span className="material-symbols-outlined text-sm">call</span>
<span>आश्रम कार्यालय: +91 94250 XXXXX</span>
</a>
<span className="text-outline">|</span>
<a className="flex items-center gap-1.5 text-secondary hover:text-primary font-medium" href="mailto:shridhyan.com@gmail.com">
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
