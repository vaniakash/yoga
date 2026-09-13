import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary-container dark:bg-surface-container-lowest text-on-primary dark:text-on-surface full-width border-t border-tertiary/20 dark:border-outline-variant/20 flat no shadows">
<div className="w-full px-6 md:px-margin py-space-xl max-w-7xl mx-auto flex flex-col justify-between">

<div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-tertiary/20">

<div className="md:col-span-5 flex flex-col gap-4">
<div className="flex items-center gap-3">
<img alt="Kalap Gram Gurukulam Ashram Emblem Logo" className="w-10 h-10 object-contain rounded-sm bg-surface-container-lowest p-1" src="https://ui-avatars.com/api/?name=KG&background=1f382b&color=c4a865"/>
<span className="text-headline-md font-headline-md text-tertiary-fixed dark:text-tertiary tracking-widest leading-none">
              KALAP GRAM GURUKULAM
            </span>
</div>
<p className="font-devanagari text-tertiary-fixed-dim text-sm tracking-wider">
            साधना • सेवा • प्रकृति • गुरु-परंपरा
          </p>
<p className="text-body-sm font-body-sm text-on-primary-container/80 dark:text-on-surface-variant max-w-sm leading-relaxed">
            A sacred Vedic sanctuary sanctified on the serene banks of Maa Narmada. Dedicated to authentic meditation, Shaktipat parampara, and forest quietude since 1996.
          </p>
<div className="font-devanagari text-tertiary-fixed text-sm font-medium mt-2">
            🕉️ हरिओम् तत्सत् 🙏 जय गुरुदेव
          </div>
</div>

<div className="md:col-span-4 flex flex-col gap-3">
<span className="text-label-sm font-label-sm text-tertiary-fixed uppercase tracking-widest mb-1">पवित्र सूत्र (Sacred Links)</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-body-sm font-body-sm">
<a className="text-on-primary-container/80 dark:text-on-surface-variant hover:text-tertiary-fixed-dim dark:hover:text-tertiary transition-colors duration-200" href="#tapobhoomi">Sacred Tapobhoomi</a>
<a className="text-on-primary-container/80 dark:text-on-surface-variant hover:text-tertiary-fixed-dim dark:hover:text-tertiary transition-colors duration-200" href="#guru-parampara">Guru Parampara</a>
<a className="text-on-primary-container/80 dark:text-on-surface-variant hover:text-tertiary-fixed-dim dark:hover:text-tertiary transition-colors duration-200" href="#annakshetra">Annakshetra Seva</a>
<a className="text-on-primary-container/80 dark:text-on-surface-variant hover:text-tertiary-fixed-dim dark:hover:text-tertiary transition-colors duration-200" href="#sadhana">Vedic Sadhana</a>
<a className="text-on-primary-container/80 dark:text-on-surface-variant hover:text-tertiary-fixed-dim dark:hover:text-tertiary transition-colors duration-200" href="#visit">Visit Guidelines</a>
<a className="text-tertiary-fixed dark:text-tertiary font-medium hover:text-tertiary-fixed-dim transition-colors duration-200" href="#hero">Privacy &amp; Dharma</a>
</div>
</div>

<div className="md:col-span-3 flex flex-col gap-2 text-body-sm font-body-sm text-on-primary-container/80">
<span className="text-label-sm font-label-sm text-tertiary-fixed uppercase tracking-widest mb-1">आश्रम दिनचर्या (Dinacharya)</span>
<div className="flex justify-between border-b border-primary/40 pb-1">
<span>प्रातः ध्यान व आरती:</span>
<span className="text-surface">०५:०० AM</span>
</div>
<div className="flex justify-between border-b border-primary/40 pb-1">
<span>अन्नक्षेत्र महाप्रसाद:</span>
<span className="text-surface">१२:०० PM</span>
</div>
<div className="flex justify-between border-b border-primary/40 pb-1">
<span>नर्मदा महाआरती:</span>
<span className="text-surface">०६:३० PM</span>
</div>
<div className="flex justify-between pb-1">
<span>मौन एवं विश्राम:</span>
<span className="text-surface">०९:०० PM</span>
</div>
</div>
</div>

<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-label-sm font-label-sm text-on-primary-container/70">
<div>
          © 2024 Kalap Gram Gurukulam. Consecrated on the sacred banks of Narmada River.
        </div>
<div className="flex items-center gap-4">
<span className="font-devanagari">॥ नर्मदे हर हर ॥</span>
<span>•</span>
<a className="hover:text-tertiary-fixed transition-colors" href="#hero">शीर्ष पर जाएँ ↑</a>
</div>
</div>
</div>
</footer>
  );
}
