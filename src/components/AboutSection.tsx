"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Flower2, Heart, Trees, Sparkles, BookOpen } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export function AboutSection() {
  const t = useTranslations('About');
  const locale = useLocale();
  const isHi = locale === 'hi';

  const features = [
    { icon: Flower2, title: t('f1_title'), subtitle: t('f1_sub') },
    { icon: Sparkles, title: t('f2_title'), subtitle: t('f2_sub') },
    { icon: Trees, title: t('f3_title'), subtitle: t('f3_sub') },
    { icon: Heart, title: t('f4_title'), subtitle: t('f4_sub') },
    { icon: BookOpen, title: t('f5_title'), subtitle: t('f5_sub') },
  ];

  return (
    <section className="py-24 px-6 md:px-margin max-w-7xl mx-auto overflow-hidden" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-[2px] bg-tertiary rounded-full"></span>
            <span className={`text-tertiary text-sm font-semibold tracking-[0.2em] uppercase ${isHi ? 'font-devanagari' : ''}`}>
              {t('tagline')}
            </span>
          </div>
          
          <div className="space-y-6">
            <h2 className={`text-4xl md:text-5xl font-bold text-primary leading-tight tracking-tight ${isHi ? 'font-devanagari' : 'font-serif'}`}>
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              {t('description_1')}
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed opacity-90">
              {t('description_2')}
            </p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 md:p-8 bg-surface-container-lowest border border-tertiary/20 rounded-2xl flex flex-col sm:flex-row items-start gap-5 shadow-lg shadow-tertiary/5 relative overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0 shadow-inner">
              <Trees className="w-7 h-7" />
            </div>
            <div className="relative z-10">
              <span className={`text-sm md:text-base font-bold text-tertiary tracking-wide uppercase ${isHi ? 'font-devanagari' : ''}`}>
                {t('badge')}
              </span>
              <p className="text-sm md:text-base text-on-surface-variant mt-2 leading-relaxed">
                {t('badge_desc')}
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 pt-2"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-surface-container-lowest border border-outline-variant/30 p-4 rounded-xl text-center transition-all shadow-sm hover:shadow-md hover:border-tertiary/50 flex flex-col items-center justify-center gap-2 group cursor-pointer ${idx === features.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div className="p-2 bg-surface rounded-full group-hover:bg-tertiary/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-tertiary/70 group-hover:text-tertiary transition-colors" />
                </div>
                <div>
                  <span className={`text-sm font-bold text-primary block group-hover:text-tertiary transition-colors ${isHi ? 'font-devanagari' : ''}`}>
                    {feature.title}
                  </span>
                  <span className="text-[10px] text-outline font-semibold uppercase tracking-widest">
                    {feature.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-16 lg:mt-0"
        >
          <div className="relative rounded-3xl p-3 bg-surface-container-lowest border border-outline-variant/30 shadow-2xl before:absolute before:-inset-4 before:bg-gradient-to-br before:from-tertiary/20 before:to-transparent before:rounded-[2.5rem] before:-z-10">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group shadow-inner">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="A tranquil stone ashram courtyard in Himalayan quietude" 
                src="/images/ashram_courtyard.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -bottom-8 -left-4 sm:-left-12 bg-primary text-on-primary p-6 rounded-2xl shadow-2xl max-w-[280px] border border-tertiary/20 backdrop-blur-md z-10"
            >
              <Sparkles className="w-6 h-6 text-tertiary mb-3 opacity-90" />
              <p className={`text-[15px] leading-relaxed font-light italic ${isHi ? 'font-devanagari' : ''}`}>
                {t('quote')}
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
