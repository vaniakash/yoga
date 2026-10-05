import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="bg-surface/95 dark:bg-surface-container/95 backdrop-blur-md text-primary dark:text-inverse-primary docked full-width top-0 sticky z-50 shadow-sm border-b border-outline-variant/30 dark:border-outline-variant/10">
<div className="flex justify-between items-center w-full px-6 md:px-margin max-w-7xl mx-auto h-20">

<a className="flex items-center gap-3.5 group" href="#hero">
<img alt="Shridhyan Ashram Emblem Logo" className="w-11 h-11 object-contain rounded-sm border border-tertiary/30 p-0.5 bg-surface-container-lowest" src="/images/two-removebg-preview.svg"/>
<div className="flex flex-col">
<span className="text-headline-sm font-headline-sm text-primary dark:text-inverse-primary tracking-wide leading-tight">Shridhyan</span>
<span className="font-devanagari text-[11px] tracking-wider text-secondary">श्री माँ नर्मदा तपोभूमि • आश्रम</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-7">
<a className="text-primary dark:text-inverse-primary font-bold border-b border-tertiary dark:border-tertiary-fixed-dim pb-1 text-label-md font-label-md hover:text-tertiary dark:hover:text-tertiary-fixed-dim transition-colors duration-200" href="#hero">Home</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium tracking-wider text-label-md font-label-md hover:text-tertiary dark:hover:text-tertiary-fixed-dim transition-colors duration-200" href="#guru-parampara">Guru Parampara</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium tracking-wider text-label-md font-label-md hover:text-tertiary dark:hover:text-tertiary-fixed-dim transition-colors duration-200" href="#tapobhoomi">Tapobhoomi</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium tracking-wider text-label-md font-label-md hover:text-tertiary dark:hover:text-tertiary-fixed-dim transition-colors duration-200" href="#sadhana">Sadhana</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium tracking-wider text-label-md font-label-md hover:text-tertiary dark:hover:text-tertiary-fixed-dim transition-colors duration-200" href="#narmada">Narmada</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium tracking-wider text-label-md font-label-md hover:text-tertiary dark:hover:text-tertiary-fixed-dim transition-colors duration-200" href="#annakshetra">Seva</a>
</nav>

<div className="flex items-center gap-3 sm:gap-4">



<div className="relative group">
<button className="flex items-center gap-1 text-label-md font-label-md text-on-surface px-2.5 py-1.5 rounded-lg border border-outline-variant/40 hover:border-tertiary transition-colors">
<span>हिन्दी / EN</span>
</button>
<div className="absolute right-0 top-full mt-1.5 w-36 bg-surface-container-lowest border border-outline-variant/30 rounded-lg shadow-lg py-1.5 hidden group-hover:block z-50">
<a className="block px-3 py-1.5 text-body-sm font-body-sm hover:bg-surface-container font-medium text-primary" href="#">हिन्दी (India)</a>
<a className="block px-3 py-1.5 text-body-sm font-body-sm hover:bg-surface-container text-on-surface-variant" href="#">English (Global)</a>
<a className="block px-3 py-1.5 text-body-sm font-body-sm hover:bg-surface-container text-on-surface-variant" href="#">日本語 (Japan)</a>
<a className="block px-3 py-1.5 text-body-sm font-body-sm hover:bg-surface-container text-on-surface-variant" href="#">Deutsch (Germany)</a>
</div>
</div>

<a className="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary text-label-md font-label-md px-4 sm:px-5 py-2.5 rounded-sm gilded-inset transition-all duration-200 shadow-sm active:scale-95" href="#visit">
<span>Plan Pilgrimage</span>
</a>
</div>
</div>
</header>
  );
}
