"use client";

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Users,
  Play,
  X,
  ChevronDown,
  Award,
  Wind,
  Hand,
  Heart,
  Flower2,
  ArrowRight,
  Calendar,
  AlertCircle,
  Quote,
  Flame,
  Check,
  ChevronRight,
  Clock,
  Compass,
  MapPin,
  Mail
} from 'lucide-react';

export default function VedicBioHealingPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const [masterclassOpen, setMasterclassOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Vedic Bio Healing Enrollment: ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Course: 7-Day Vedic Bio Healing Foundation Course\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:shridhyan.com@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const curriculumDays = [
    {
      day: isHi ? "दिवस 1" : isJa ? "1日目" : "Day 1",
      title: isHi ? "अथर्ववेद परिचय एवं पृष्ठभूमि" : isJa ? "アタルヴァ・ヴェーダの導入と歴史的背景" : "Introduction to Atharvaveda",
      desc: isHi
        ? "अथर्ववेद (काण्ड 4, सूक्त 13) का परिचय, ऐतिहासिक एवं आध्यात्मिक संदर्भ तथा वैदिक उपचार दर्शन का अवगाहन।"
        : isJa
        ? "関連する讃（第4巻第13讃）の導入、歴史的・精神的背景、およびヴェーダ治癒思想の基礎。"
        : "Introduction to the relevant Sukta (Kanda 4, Sukta 13), historical and spiritual context, and foundation of traditional healing thought."
    },
    {
      day: isHi ? "दिवस 2" : isJa ? "2日目" : "Day 2",
      title: isHi ? "मंत्रोच्चार एवं पावन ध्वनि विज्ञान" : isJa ? "マントラと聖なる音声の探求" : "Mantra and Sound",
      desc: isHi
        ? "पावन वैदिक मंत्रों का शुद्ध पारंपरिक उच्चारण, शब्द-ब्रह्म की ध्वनि-तरंगें और चयनित मंत्रों का आध्यात्मिक भावार्थ।"
        : isJa
        ? "指導による正確な伝統的発音、選ばれたマントラの深遠な意味と解釈。"
        : "Guided traditional pronunciation, vibrational resonance of sacred sound, and spiritual interpretation of selected mantras."
    },
    {
      day: isHi ? "दिवस 3" : isJa ? "3日目" : "Day 3",
      title: isHi ? "श्वास एवं प्राण-अपान चेतना" : isJa ? "呼吸の意識化とプラーナ・アパーナ" : "Breath Awareness",
      desc: isHi
        ? "पारंपरिक वैदिक शिक्षाओं में प्राण और अपान की भूमिका, श्वास की अंतर्यात्रा और निर्देशित प्राणायाम अभ्यास।"
        : isJa
        ? "伝統的な教えにおけるプラーナとアパーナの概念の導入、ガイド付きの呼吸意識化エクササイズ。"
        : "Introduction to Prana and Apana in traditional teachings and guided breath awareness exercises for nervous system balance."
    },
    {
      day: isHi ? "दिवस 4" : isJa ? "4日目" : "Day 4",
      title: isHi ? "हस्त संवेदनशीलता एवं ऊर्जा जागरण" : isJa ? "手への気づきと伝統的技法" : "Hand Awareness",
      desc: isHi
        ? "आध्यात्मिक साधना में हाथों की भूमिका, हथेलियों व अंगुलियों की संवेदनशीलता और 'अयं मे हस्तो भगवान्' का बोध।"
        : isJa
        ? "精神修練における手の伝統的解釈、手のひらと指の気づき、ガイド付きマインドフルネス実践。"
        : "Traditional interpretations of the hands in spiritual practice, palm awareness, and guided tactile mindfulness exercises ('Ayam Me Hasto Bhagavan')."
    },
    {
      day: isHi ? "दिवस 5" : isJa ? "5日目" : "Day 5",
      title: isHi ? "शिवाभिमर्शन (स्पर्श-आधारित साधना)" : isJa ? "タッチに基づく伝統的修法（シヴァビマルシャナ）" : "Touch-Based Practices",
      desc: isHi
        ? "पारंपरिक स्पर्श-आधारित वैदिक साधना, ऊर्जा की मर्यादाएं, संप्रभुता, शुचिता एवं सुरक्षित, आदरपूर्ण अभ्यास विधि।"
        : isJa
        ? "意識的なタッチに基づく伝統的修法の導入、エネルギーの倫理的境界線と安全で敬虔な実践。"
        : "Introduction to traditional touch-based spiritual practices (Shivabhimarshana), clear ethical boundaries, safety, and respectful application."
    },
    {
      day: isHi ? "दिवस 6" : isJa ? "6日目" : "Day 6",
      title: isHi ? "एकीकृत मार्गदर्शित अभ्यास" : isJa ? "統合されたガイド付き実践" : "Guided Practice",
      desc: isHi
        ? "मंत्र, श्वास जागरूकता, हस्त संवेदनशीलता और आत्म-चिंतन का समन्वित अभ्यास, शिक्षक के प्रत्यक्ष सान्निध्य में।"
        : isJa
        ? "マントラ、呼吸の気づき、手当の観想を融合させた指導者主導の実践セッション。"
        : "Combining mantra recitation, breath awareness, tactile reflection, and instructor-led contemplative practice."
    },
    {
      day: isHi ? "दिवस 7" : isJa ? "7日目" : "Day 7",
      title: isHi ? "समाकलन, नित्य साधना योजना एवं प्रश्नोत्तरी" : isJa ? "統合と次のステップ（修了計画）" : "Integration and Next Steps",
      desc: isHi
        ? "7 दिनों के अध्ययन की समीक्षा, व्यक्तिगत नित्य साधना योजना का निर्माण, प्रश्न-उत्तर और समापन।"
        : isJa
        ? "全体の振り返りと省察、家庭での日々の個人実践プランの確立、質疑応答セッション。"
        : "Comprehensive review, personalized home practice plan, Q&A session, and completion guidance."
    }
  ];

  const faqs = [
    {
      q: isHi ? "क्या मुझे इस पाठ्यक्रम के लिए पूर्व अनुभव की आवश्यकता है?" : isJa ? "受講に事前の経験は必要ですか？" : "Do I need prior experience?",
      a: isHi
        ? "नहीं। यह पाठ्यक्रम सभी जिज्ञासुओं, योग प्रेमियों और शुरुआती साधकों के लिए सुगम है। इसके लिए संस्कृत या हीलिंग के पूर्व ज्ञान की आवश्यकता नहीं है।"
        : isJa
        ? "いいえ。本コースは真摯な探求者、ヨガ実践者、初心者の方までどなたでも歓迎します。サンスクリット語の事前知識は不要です。"
        : "No. The course is structured clearly for beginners, yoga practitioners, and spiritual seekers. No prior knowledge of Sanskrit or healing techniques is required."
    },
    {
      q: isHi ? "क्या यह पाठ्यक्रम ऑनलाइन उपलब्ध है?" : isJa ? "コースはオンラインで受講できますか？" : "Is the course available online?",
      a: isHi
        ? "हाँ। 7-दिवसीय फाउंडेशन पाठ्यक्रम इंटरएक्टिव ऑनलाइन सत्रों और उत्तरकाशी आश्रम में प्रत्यक्ष आवासीय प्रशिक्षण दोनों विकल्पों में आयोजित किया जाता है।"
        : isJa
        ? "はい。インタラクティブなオンライン配信およびウッタラーカーシー・マタリのアシュラムでの対面滞在型リトリートの両方が用意されています。"
        : "Yes. The 7-Day Foundation Course is conducted through interactive live online sessions, as well as selective in-person retreats at Shridhyan Ashram in Uttarkashi."
    },
    {
      q: isHi ? "पाठ्यक्रम की समयावधि कितनी है?" : isJa ? "コースの期間はどのくらいですか？" : "What is the course duration?",
      a: isHi
        ? "यह 7 दिनों का गहन कार्यक्रम है, जिसमें प्रतिदिन 90 मिनट का प्रत्यक्ष शिक्षण, श्वास साधना और स्वाध्याय सम्मिलित है।"
        : isJa
        ? "7日間の集中プログラムで、日々のライブ指導、呼吸の修法、学習テキストによる自習で構成されます。"
        : "The foundation program is 7 consecutive days, featuring daily 90-minute live guided sessions, practical exercises, and self-study."
    },
    {
      q: isHi ? "क्या अध्ययन सामग्री प्रदान की जाएगी?" : isJa ? "教材やテキストは提供されますか？" : "Will study materials be provided?",
      a: isHi
        ? "हाँ। सभी प्रतिभागियों को अथर्ववेद सूक्त 13 का अध्ययन मैनुअल, पारंपरिक मंत्रोच्चार ऑडियो और श्वास अभ्यास गाइड प्रदान की जाती है।"
        : isJa
        ? "はい。アタルヴァ・ヴェーダ第13讃の学習テキスト、マントラ発音ガイド、家庭練習用誘導音源が提供されます。"
        : "Yes. Students receive the full Atharvaveda Sukta 13 study manual, accurate mantra pronunciation recordings, and audio tracks for home practice."
    },
    {
      q: isHi ? "क्या यह कोई मेडिकल उपचार कार्यक्रम है?" : isJa ? "これは医療的な治療プログラムですか？" : "Is this a medical treatment program?",
      a: isHi
        ? "नहीं। यह एक पारंपरिक आध्यात्मिक और शैक्षिक वेलनेस कार्यक्रम है। यह किसी एलोपैथिक या क्लिनिकल बीमारी के इलाज या निदान का दावा नहीं करता।"
        : isJa
        ? "いいえ。本プログラムは伝統的なヴェーダの精神的・教育的ウェルネスプログラムであり、医学的診断や治療の代わりとなるものではありません。"
        : "No. This is an educational and spiritual wellness program exploring traditional Vedic practices. It is not a substitute for professional medical diagnosis or clinical treatment."
    },
    {
      q: isHi ? "मैं इस पाठ्यक्रम में कैसे प्रवेश ले सकता हूँ?" : isJa ? "どのように申し込み・登録できますか？" : "How can I enroll?",
      a: isHi
        ? "आप नीचे दिए गए फॉर्म के माध्यम से अपना विवरण भेज सकते हैं। प्रत्येक बैच में केवल 25 स्थान होने के कारण प्राथमिकता क्रम में प्रवेश दिया जाता है।"
        : isJa
        ? "ページ下部のお問い合わせフォームよりお申し込みいただけます。各期25名限定のため、お早めにご登録ください。"
        : "You can submit an inquiry via the enrollment form below. As each cohort is strictly limited to 25 participants, registrations are reviewed on a rolling basis."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Breadcrumb Navigation */}
      <div className="bg-surface-container-low border-b border-outline-variant/20 py-3">
        <div className="max-w-7xl mx-auto px-6 md:px-margin flex items-center gap-2 text-xs text-on-surface-variant font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            {isHi ? "मुखपृष्ठ" : isJa ? "ホーム" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-outline" />
          <span className="text-on-surface-variant/70">
            {isHi ? "पाठ्यक्रम" : isJa ? "コース" : "Courses"}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-outline" />
          <span className="text-amber-700 dark:text-amber-300 font-semibold">
            {isHi ? "वैदिक बायो हीलिंग" : isJa ? "ヴェーダ・バイオヒーリング" : "Vedic Bio Healing"}
          </span>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Himalayan dawn spiritual sanctuary"
            className="w-full h-full object-cover object-center"
            src="/images/shridhyan_hero.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061910]/90 via-[#092217]/80 to-[#04120b]/95"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono uppercase tracking-widest mb-5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ANCIENT VEDIC WISDOM</span>
          </div>

          {/* Headline */}
          <h1 className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-5 max-w-4xl leading-tight ${isHi ? 'font-devanagari' : ''}`}>
            {isHi
              ? "प्राचीन अथर्ववेद परंपरा द्वारा वैदिक बायो हीलिंग सीखें"
              : isJa
              ? "古代アタルヴァ・ヴェーダの伝統を通じて学ぶヴェーダ・バイオヒーリング"
              : "Learn Vedic Bio Healing Through Ancient Atharvaveda Traditions"}
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 leading-relaxed">
            {isHi
              ? "अथर्ववेद से प्रेरित पारम्परिक उपचार पद्धतियों का अन्वेषण करें, जिसमें मंत्रोच्चार, श्वास जागरूकता, ध्यान और स्पर्श-आधारित आध्यात्मिक विधियाँ सम्मिलित हैं, जो दशकों के प्रत्यक्ष अनुभव पर आधारित हैं।"
              : isJa
              ? "アタルヴァ・ヴェーダに想を得た伝統的実践を探求します。マントラの唱誦、呼吸の気づき、瞑想、タッチに基づく精神修法を、半世紀に及ぶ経験に基づき学びます。"
              : "Explore traditional healing practices inspired by Atharvaveda, including mantra recitation, breath awareness, meditation, and touch-based spiritual practices, guided by decades of experience."}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#enrollment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#061910] font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base tracking-wide shadow-lg hover:shadow-amber-500/25 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#061910]" />
              <span>{isHi ? "7-दिवसीय फाउंडेशन पाठ्यक्रम देखें" : isJa ? "7日間の基礎コースを見る" : "Explore the 7-Day Foundation Course"}</span>
            </a>

            <button
              onClick={() => setMasterclassOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white border border-amber-400/50 px-6 py-3.5 rounded-xl text-sm sm:text-base font-medium backdrop-blur-md transition-colors"
            >
              <Play className="w-4 h-4 text-amber-300 fill-current" />
              <span>{isHi ? "निःशुल्क मास्टरक्लास देखें" : isJa ? "無料マスタークラスを見る" : "Watch the Free Masterclass"}</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-amber-200/80 font-medium">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>50 Years of Spiritual Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Atharvaveda-Inspired Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Guided Practical Sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-20 px-6 md:px-margin max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-tertiary text-xs font-semibold tracking-widest uppercase block mb-2">
            TRADITIONAL PHILOSOPHY
          </span>
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-primary mb-4 ${isHi ? 'font-devanagari' : ''}`}>
            {isHi ? "अथर्ववेद की प्राचीन प्रज्ञा का पुनरन्वेषण" : isJa ? "アタルヴァ・ヴェーダの英知の再発見" : "Rediscover the Wisdom of Atharvaveda"}
          </h2>
          <div className="w-16 h-[2px] bg-tertiary mx-auto mb-6"></div>
        </div>

        <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6 text-on-surface-variant leading-relaxed">
          <p className="text-base sm:text-lg">
            {isHi
              ? "अथर्ववेद भारतीय वैदिक वाङ्मय का वह अनूठा ग्रंथ है जो जीवन के व्यावहारिक, मानसिक और प्राकृतिक उपचार पक्षों को समर्पित है। इस कार्यक्रम के अंतर्गत मंत्र, श्वास, सजग जागरूकता और पारंपरिक स्पर्श-आधारित विधियों के पारस्परिक संबंध का गहन अध्ययन कराया जाता है।"
              : isJa
              ? "アタルヴァ・ヴェーダは、日常生活、心身の調和、自然療法の側面に深く根ざした古代インドの聖典です。本プログラムでは、マントラ、呼吸、マインドフルな気づき、そして伝統的なタッチに基づく実践の相互関係を探求します。"
              : "The Atharvaveda occupies a distinctive position in Vedic literature for its practical contemplation on life energy, breath, and natural balance. This program systematically explores the profound relationship between sacred sound, respiratory awareness, mindful presence, and traditional touch-based practices."}
          </p>
          <p className="text-base sm:text-lg">
            {isHi
              ? "विशेष रूप से, यह कार्यक्रम अथर्ववेद (काण्ड 4, सूक्त 13) की पारंपरिक अवधारणाओं को आधार बनाकर प्रस्तुत किया गया है, जो 'वात-भेषज' (प्राण-वायु की उपशामक शक्ति) और 'अयं मे हस्तो भगवान्' (हस्त संवेदनशीलता) के दार्शनिक सिद्धांतों पर प्रकाश डालता है।"
              : isJa
              ? "本プログラムは、アタルヴァ・ヴェーダ（第4巻第13讃）に関連する伝統的教義を探求します。生命の息吹（ヴァータ・ベーシャジャ）や手への意識化など、数千年にわたり継承されてきた概念を現代生活に生かすための学びです。"
              : "Specifically, the teachings explore concepts associated with Atharvaveda, Kanda 4, Sukta 13 — traditionally revered for its poetic and contemplative insights into Vata-Bheshaja (the restorative vitality of the breath) and the spiritual significance of the hands as instruments of conscious presence."}
          </p>
        </div>
      </section>

      {/* SECTION 3: MEET YOUR GUIDE */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-6xl mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl p-2 bg-black/40 border border-amber-400/40 shadow-xl max-w-sm w-full">
                <img
                  src="/images/maharaj/swami_ji.jpeg"
                  alt="Param Pujya Swami Ji Maharaj"
                  className="w-full h-auto rounded-xl object-cover aspect-[4/5]"
                />
                <div className="p-3 text-center">
                  <h4 className="font-bold text-white text-lg">Param Pujya Swami Ji Maharaj</h4>
                  <p className="text-xs text-amber-300 font-mono">Shridhyan Ashram • Uttarkashi</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-tertiary text-xs font-semibold tracking-widest uppercase block">
                AUTHORITY & LINEAGE
              </span>
              <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-primary ${isHi ? 'font-devanagari' : ''}`}>
                {isHi ? "दशकों के प्रत्यक्ष अनुभव से सीखें" : isJa ? "数十年の修練から学ぶ" : "Learn from Decades of Practice"}
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                {isHi
                  ? "परम पूज्य स्वामी जी महाराज ने हिमालय के पवित्र मथाली अंचल में पांच दशकों से अधिक समय तक अथर्ववेदीय सूक्तों और पारंपरिक ध्यान विधियों की अविरल साधना की है। उनका दृष्टिकोण पूर्णतः पारदर्शी, आदरपूर्ण और जिम्मेदार है।"
                  : isJa
                  ? "パラマ・プージャ・スワミ・ジ・マハラジは、ヒマラヤの聖地マタリにおいて半世紀以上にわたりアタルヴァ・ヴェーダの伝統的実践を修められてきました。誇大広告を排した真摯で責任ある指導を行っています。"
                  : "Param Pujya Swami Ji Maharaj's journey represents five decades of continuous contemplative practice, dedication to Vedic texts, and guiding sincere seekers in the sacred heights of Uttarkashi. His teaching philosophy emphasizes grounded ethics, patient practice, and genuine inner stillness over sensationalism."}
              </p>
              <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface-variant space-y-1">
                <div className="font-semibold text-primary">Ethical & Responsible Guidance</div>
                <div>Instruction is conducted responsibly without exaggerated claims or speculative guarantees. All practices are shared for educational and personal enrichment.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT YOU WILL EXPLORE (3 VISUAL CARDS) */}
      <section className="py-20 px-6 md:px-margin max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-tertiary text-xs font-semibold tracking-widest uppercase block mb-2">
            THREE DIMENSIONS OF LEARNING
          </span>
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
            {isHi ? "आप क्या सीखेंगे" : isJa ? "探求する3つの領域" : "What You Will Explore"}
          </h2>
          <p className="text-body-md text-on-surface-variant">
            A balanced synthesis of personal wellness, traditional hands-on practices, and spiritual depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Personal Wellbeing</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Breath awareness and relaxation protocols for daily calm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Mantra recitation and meditation for mental tranquility.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Mindfulness and grounded self-reflection.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
                <Hand className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Traditional Healing Practices</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Traditional touch-based spiritual practices (Shivabhimarshana).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Understanding the complementary flows of Prana and Apana.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Guided practical demonstrations and supervised reflection.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
                <Flower2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Spiritual Development</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Traditional Vedic concepts and the Guru-Shishya lineage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Developing an unshakeable, consistent personal daily practice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Understanding cultural and spiritual context responsibly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Clear Educational Disclaimer Banner */}
        <div className="mt-10 p-4 rounded-xl bg-surface-container border border-outline-variant/30 text-center text-xs text-on-surface-variant max-w-3xl mx-auto flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            This is an educational and spiritual self-care program, not a substitute for professional medical diagnosis or healthcare treatment.
          </span>
        </div>
      </section>

      {/* SECTION 5: 7-DAY FOUNDATION COURSE CURRICULUM */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/20" id="curriculum">
        <div className="max-w-4xl mx-auto px-6 md:px-margin">
          <div className="text-center mb-14">
            <span className="text-tertiary text-xs font-semibold tracking-widest uppercase block mb-2">
              DAY-BY-DAY PROGRESSION
            </span>
            <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
              {isHi ? "7-दिवसीय फाउंडेशन पाठ्यक्रम संरचना" : isJa ? "7日間の基礎コース・カリキュラム" : "7-Day Foundation Course Curriculum"}
            </h2>
            <p className="text-sm text-on-surface-variant">
              A structured progression from sacred sound fundamentals to integrated self-practice.
            </p>
          </div>

          <div className="space-y-4">
            {curriculumDays.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col sm:flex-row items-start gap-5 hover:border-amber-400/50 transition-colors"
              >
                <div className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-800 dark:text-amber-300 font-mono font-bold text-xs uppercase flex-shrink-0 border border-amber-400/30">
                  {item.day}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO IS THIS PROGRAM FOR? */}
      <section className="py-20 px-6 md:px-margin max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold text-primary mb-3 ${isHi ? 'font-devanagari' : ''}`}>
            {isHi ? "यह कार्यक्रम किसके लिए है?" : isJa ? "対象となる方" : "Who Is This Program For?"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-center">
            <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mx-auto mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-primary text-sm mb-1">Beginners</h4>
            <p className="text-xs text-on-surface-variant">Individuals interested in traditional Vedic practices and self-cultivation.</p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-center">
            <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mx-auto mb-3">
              <Flower2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-primary text-sm mb-1">Yoga & Meditation</h4>
            <p className="text-xs text-on-surface-variant">Practitioners looking to deepen their breathwork and energetic awareness.</p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-center">
            <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mx-auto mb-3">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-primary text-sm mb-1">Spiritual Seekers</h4>
            <p className="text-xs text-on-surface-variant">Those drawn to Himalayan lineage transmission and sacred silence.</p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-center">
            <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mx-auto mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-primary text-sm mb-1">Wellness Educators</h4>
            <p className="text-xs text-on-surface-variant">Therapists and coaches seeking to enrich their knowledge of Vedic origins.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: STUDENT EXPERIENCES */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center mb-12">
            <span className="text-tertiary text-xs font-semibold tracking-widest uppercase block mb-2">
              AUTHENTIC FEEDBACK
            </span>
            <h2 className={`text-3xl font-serif font-bold text-primary ${isHi ? 'font-devanagari' : ''}`}>
              {isHi ? "साधकों के प्रामाणिक संस्मरण" : isJa ? "受講者の体験談" : "Student Experiences"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm">
              <Quote className="w-8 h-8 text-amber-500/40 mb-3" />
              <p className="text-sm text-on-surface italic leading-relaxed mb-4">
                “Learning the Sukta recitation and the awareness of the hands under Swami Ji’s direct guidance gave my personal meditation practice a level of stillness that modern books never conveyed.”
              </p>
              <div className="text-xs font-semibold text-primary">Dr. Ananya Sharma</div>
              <div className="text-[11px] text-on-surface-variant">Ayurvedic Practitioner & Yoga Teacher</div>
            </div>

            <div className="p-7 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm">
              <Quote className="w-8 h-8 text-amber-500/40 mb-3" />
              <p className="text-sm text-on-surface italic leading-relaxed mb-4">
                “The clarity and ethics with which touch-based practices are taught here is exemplary. Completely grounded, peaceful, and respectful.”
              </p>
              <div className="text-xs font-semibold text-primary">Kenji Takahashi</div>
              <div className="text-[11px] text-on-surface-variant">Meditation Practitioner, Tokyo</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQS */}
      <section className="py-20 px-6 md:px-margin max-w-4xl mx-auto" id="faqs">
        <div className="text-center mb-12">
          <span className="text-tertiary text-xs font-semibold tracking-widest uppercase block mb-2">
            CLEAR ANSWERS
          </span>
          <h2 className={`text-3xl font-serif font-bold text-primary ${isHi ? 'font-devanagari' : ''}`}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-semibold text-primary text-sm hover:text-tertiary transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-tertiary transition-transform duration-200 flex-shrink-0 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: FINAL CTA & ENROLLMENT FORM */}
      <section className="py-20 bg-gradient-to-b from-[#061910] via-[#092217] to-[#04120b] text-[#fcf9f3]" id="enrollment">
        <div className="max-w-4xl mx-auto px-6 md:px-margin text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Limited to 25 Participants</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-serif font-bold text-white mb-3 ${isHi ? 'font-devanagari' : ''}`}>
            {isHi ? "वैदिक प्रज्ञा में अपनी यात्रा आरंभ करें" : isJa ? "ヴェーダの英知への旅を始めましょう" : "Begin Your Journey into Vedic Wisdom"}
          </h2>
          <p className="text-sm text-surface-container-high/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Reserve your seat in the next 7-Day Foundation Course or send an inquiry to the ashram.
          </p>

          {/* Quick Enrollment Card */}
          <div className="bg-black/50 border border-amber-400/40 rounded-2xl p-6 sm:p-8 text-left max-w-xl mx-auto shadow-2xl backdrop-blur-md">
            <h3 className="font-serif text-xl font-bold text-amber-200 mb-4 text-center">
              Course Enrollment & Inquiry
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-amber-100/90 mb-1 font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full name..."
                  className="w-full bg-surface-container-lowest/10 border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-amber-100/90 mb-1 font-medium">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91..."
                    className="w-full bg-surface-container-lowest/10 border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-amber-100/90 mb-1 font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full bg-surface-container-lowest/10 border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-100/90 mb-1 font-medium">Message / Questions</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your background or inquiry..."
                  className="w-full bg-surface-container-lowest/10 border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#061910] font-bold tracking-wide transition-all shadow-md active:scale-95"
              >
                Join the Foundation Course
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-amber-400/20 flex flex-wrap items-center justify-center gap-4 text-xs">
              <button
                onClick={() => setMasterclassOpen(true)}
                className="text-amber-300 hover:underline flex items-center gap-1"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Watch Free Masterclass</span>
              </button>
              <span className="text-amber-400/40">•</span>
              <Link href="/#contact" className="text-amber-300 hover:underline">
                Contact the Ashram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: OTHER COURSES NAVIGATION */}
      <section className="py-16 bg-surface border-t border-outline-variant/20">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-tertiary font-semibold">EXPLORE MORE PATHS</span>
            <h3 className="text-2xl font-serif font-bold text-primary mt-1">Other Ashram Courses</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/courses/meditation-teacher-training"
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-primary group-hover:text-amber-700 transition-colors">
                  Meditation Teacher Training
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  From personal practice to guiding others in meditation through traditional wisdom.
                </p>
              </div>
            </Link>

            <Link
              href="/courses/shri-vidya"
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <Flower2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-primary group-hover:text-amber-700 transition-colors">
                  Shri Vidya Tradition
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  Discover the sacred tradition of Sri Chakra, sacred geometry, and contemplation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FREE MASTERCLASS MODAL */}
      {masterclassOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#071f14] border border-amber-400/40 rounded-3xl p-6 sm:p-8 text-[#fcf9f3] shadow-2xl">
            <button
              onClick={() => setMasterclassOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold tracking-wider text-amber-300 uppercase mb-2">
              Free Masterclass Session
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              The Ancient Science of Atharvaveda Bio-Healing
            </h3>
            <p className="text-xs sm:text-sm text-surface-container-high/90 mb-5 leading-relaxed">
              Explore the 7 healing mantras of Kanda 4, Sukta 13, hand energy activation, and foundational breathwork with Param Pujya Swami Ji Maharaj.
            </p>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-amber-400/30 bg-black flex items-center justify-center group shadow-inner mb-5">
              <img
                src="/images/shridhyan_hero.webp"
                alt="Shridhyan Masterclass Preview"
                className="w-full h-full object-cover opacity-60"
              />
              <a
                href="#enrollment"
                onClick={() => setMasterclassOpen(false)}
                className="relative z-10 w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-[#061910] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </a>
              <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-200">
                Preview Session • 18 Minutes
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                onClick={() => setMasterclassOpen(false)}
                className="px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
