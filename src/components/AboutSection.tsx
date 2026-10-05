"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Flower2, Heart, Trees, Sparkles, BookOpen } from 'lucide-react';

const features = [
  { icon: Flower2, title: "साधना", subtitle: "Sadhana" },
  { icon: Sparkles, title: "ध्यान", subtitle: "Dhyana" },
  { icon: Trees, title: "योग", subtitle: "Yoga" },
  { icon: Heart, title: "सेवा", subtitle: "Seva" },
  { icon: BookOpen, title: "गुरु-परंपरा", subtitle: "Parampara" },
];

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
            <span className="font-devanagari text-tertiary text-sm font-semibold tracking-[0.2em] uppercase">
              पावन उद्गम एवं दर्शन
            </span>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-devanagari font-bold text-primary leading-tight tracking-tight">
              एक प्राचीन तपोभूमि की ओर आपका स्वागत है
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              The consecrated grounds of <strong className="text-primary font-semibold">Shridhyan</strong> were sanctified in <span className="text-tertiary font-bold">1996</span> on the sacred northern banks of Maa Narmada under the direct divine sankalpa of <span className="font-devanagari text-primary font-medium">परम पूज्य स्वामी जी</span>.
            </p>
            <p className="text-lg font-devanagari text-on-surface-variant leading-relaxed opacity-90">
              यहाँ की भूमि सदियों से तपस्वी संतों, ऋषि-मुनियों और आत्म-जिज्ञासुओं की मौन साधना से अभिमंत्रित है। यहाँ कोई कृत्रिम कोलाहल नहीं, केवल माँ नर्मदा की कल-कल ध्वनि, प्राचीन वटवृक्षों की छाया और गुरु-कृपा की निरंतर बहती धारा है।
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
              <span className="text-sm md:text-base font-bold text-tertiary tracking-wide uppercase">1996 — स्थापना वर्ष (Consecration Year)</span>
              <p className="text-sm md:text-base text-on-surface-variant mt-2 leading-relaxed">
                Sanctified as an authentic forest gurukulam preserving Shankaracharya monastic sannyasa discipline, Vedic contemplation, and experiential Shaktipat transmission.
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
                  <span className="font-devanagari text-sm font-bold text-primary block group-hover:text-tertiary transition-colors">{feature.title}</span>
                  <span className="text-[10px] text-outline font-semibold uppercase tracking-widest">{feature.subtitle}</span>
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group shadow-inner">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt="A tranquil stone ashram courtyard courtyard beside sacred river Narmada" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhcDrGInrfZVpQQ-F9cJxItJ6qcx-MF_cT3xJmV0SbUgqIevwwVD1kqlPEnkxEGhus1qnkiu4X3BxGJocvfrs-sv5LNd4CQJfcrlsbqCLt2VDP9mPpdhpY-SsjGwSF_tshSgt2QVOF1sYeWQ2eARU0eatofj5r3l0m-70krw_wvKhNAxr3Wkn_LPLVTkkjT4NbsAWmlkS2KuhQrvkFbQSxlhn_sV2G9PsdGECJu5jQZ7nI6Hs85a4xWw"
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
              <p className="font-devanagari text-[15px] leading-relaxed font-light italic mb-3">
                "तपस्या और प्राकृतिक शांति की गोद में आत्मा का पुनर्जन्म होता है।"
              </p>
              <div className="w-12 h-[1px] bg-tertiary/50 mb-3"></div>
              <span className="block text-[11px] text-tertiary-fixed font-bold uppercase tracking-[0.2em]">— गुरु आश्रम संहिता</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
