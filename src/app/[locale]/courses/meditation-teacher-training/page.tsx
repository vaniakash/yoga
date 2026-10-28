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
  Mail,
  Video,
  GraduationCap
} from 'lucide-react';

export default function MeditationTeacherTrainingPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const [introModalOpen, setIntroModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeModule, setActiveModule] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: 'Intermediate',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Meditation Teacher Training Application: ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Course: Meditation Teacher Training Program\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nExperience Level: ${formData.experience}\nMessage / Inquiry:\n${formData.message}`
    );
    window.location.href = `mailto:shridhyan.com@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const curriculumModules = [
    {
      num: 1,
      name: isHi ? "मॉड्यूल 1" : isJa ? "モジュール 1" : "Module 1",
      title: isHi ? "ध्यान की नींव एवं साधना स्थापना" : isJa ? "瞑想の基礎と日々の修練の確立" : "Foundations of Meditation",
      summary: isHi
        ? "ध्यान क्या है और क्या नहीं, नित्य साधना का नियम, आसन शुद्धि एवं मानसिक स्थिरता का निर्माण।"
        : isJa
        ? "瞑想の本質、日々の定期的な修練の確立、座法と身体の安定性の基礎。"
        : "Introduction to authentic meditation, establishing a consistent personal practice, and cultivating physical and mental stillness.",
      topics: isHi
        ? ["ध्यान की प्राचीन परिभाषा एवं भ्रांतियां", "नित्य अभ्यास का अनुशासन एवं समय निर्धारण", "आसन, मेरुदंड संरेखण और शरीर शुद्धि"]
        : isJa
        ? ["瞑想の伝統的定義と一般的な誤解の解消", "日々の継続的な修練のリズムの構築", "座法、背骨のアライメント、リラクゼーション"]
        : [
            "Classical definitions of Dhyana vs. modern misconceptions",
            "Establishing the discipline of daily practice (Abhyasa)",
            "Posture, spinal alignment, and settling physical restlessness"
          ]
    },
    {
      num: 2,
      name: isHi ? "मॉड्यूल 2" : isJa ? "モジュール 2" : "Module 2",
      title: isHi ? "श्वास एवं सजगता का विज्ञान" : isJa ? "呼吸と身体への意識化" : "Breath and Awareness",
      summary: isHi
        ? "श्वास का अवलोकन (प्राण संवेदन), कायिक चेतना (बॉडी अवेयरनेस) एवं ध्यान में श्वास की केंद्रीय भूमिका।"
        : isJa
        ? "呼吸の客観的観察（プラーナの自覚）、全身の気づき、マインドフルネス演習。"
        : "Breath observation techniques, somatic body awareness, and mindfulness practices to anchor wandering attention.",
      topics: isHi
        ? ["आनापान-स्मृति एवं श्वास अवलोकन", "नाड़ी तंत्र पर श्वास का प्रभाव", "कायिक संवेदनशीलता एवं विश्राम अभ्यास"]
        : isJa
        ? ["呼吸の出入りへの微細な観察技法", "自律神経系と呼吸の生理学的関係", "ボディスキャンと全身の感覚の覚醒"]
        : [
            "Systematic breath observation (Prana-samvedana)",
            "Nervous system regulation through conscious breathing",
            "Whole-body somatic presence and tension release"
          ]
    },
    {
      num: 3,
      name: isHi ? "मॉड्यूल 3" : isJa ? "モジュール 3" : "Module 3",
      title: isHi ? "धारणा एवं विचार द्रष्टा भाव" : isJa ? "集中力と観照（サークシー・バーヴァ）" : "Concentration and Contemplation",
      summary: isHi
        ? "धारणा (एकाग्रता), विचारों का साक्षी भाव (ऑब्जर्वेशन विदाउट जजमेंट), और निर्देशित चिंतन साधना।"
        : isJa
        ? "対象への一点集中（ダーラナー）、思考の客観的観察（証人意識）、ガイド付き観想。"
        : "Focused attention (Dharana), non-judgmental observation of thoughts (Sakshi Bhava), and guided contemplative inquiries.",
      topics: isHi
        ? ["धारणा के विभिन्न केंद्र (नासाग्र, हृदय, भ्रूमध्य)", "विचारों के प्रति अनासक्ति व दृष्टा भाव", "निर्देशित चिंतन अभ्यास की प्रणालियाँ"]
        : isJa
        ? ["集中の対象（呼吸、眉間、胸の中心）の選定法", "思考に巻き込まれず見守る観照の技法", "伝統的な観想・思索のガイド法"]
        : [
            "Focal anchors of Dharana (breath, heart center, third eye)",
            "The art of detachment and witnessing the mental stream",
            "Structured contemplation on timeless spiritual principles"
          ]
    },
    {
      num: 4,
      name: isHi ? "मॉड्यूल 4" : isJa ? "モジュール 4" : "Module 4",
      title: isHi ? "पारंपरिक यौगिक परिप्रेक्ष्य" : isJa ? "伝統的ヨーガ哲学の視点" : "Traditional Yogic Perspectives",
      summary: isHi
        ? "महर्षि पतंजलि के अष्टांग योग में ध्यान की स्थिति, पारंपरिक ग्रंथों का अध्ययन और आत्म-अनुशासन।"
        : isJa
        ? "パタンジャリのヨーガ・スートラにおける瞑想の位置づけ、古典文献の概説。"
        : "Introduction to meditation within classical traditions including Patanjali's Yoga Sutras and Himalayan contemplative lineages.",
      topics: isHi
        ? ["यम-नियम और चित्त वृत्तियों का निरोध", "धारणा, ध्यान और समाधि (संयम) का रहस्य", "शास्त्रों में ध्यान की दिशा और मर्यादा"]
        : isJa
        ? ["心の働きを静める8支則（アシュターンガ）の構造", "集中・瞑想・三昧（サンヤマ）の伝統的理解", "古典テキストにみる修練の心構え"]
        : [
            "Patanjali's Ashtanga Yoga and stilling the mental fluctuations",
            "The continuum from Dharana to Dhyana and Samadhi",
            "Philosophical foundations of contemplative stillness"
          ]
    },
    {
      num: 5,
      name: isHi ? "मॉड्यूल 5" : isJa ? "モジュール 5" : "Module 5",
      title: isHi ? "शिक्षण पद्धति एवं सत्र संरचना" : isJa ? "指導法とセッションの組み立て" : "Teaching Methodology",
      summary: isHi
        ? "ध्यान सत्र की पूर्व तैयारी, वाणी का स्वर व गति, स्पष्ट निर्देश देना एवं नव-अभ्यासियों की सहायता।"
        : isJa
        ? "瞑想クラスの構成法、声のトーンとペース配分、初心者を導く適切なキューイング。"
        : "Designing and structuring guided sessions, voice modulation, pacing, and guiding beginners with precision and clarity.",
      topics: isHi
        ? ["सत्र का आरंभ, ग्राउंडिंग, मध्य ध्यान एवं समापन", "ध्वनि, वाणी की गति और मौन (साइलेंस) का सदुपयोग", "शुरुआती साधकों के अवरोधों का समाधान"]
        : isJa
        ? ["セッションの開始・グラウンディング・深化・終了の構成", "声のトーン、話すリズム、静寂（沈黙）の適切な配置", "初心者が陥りやすい集中困難へのサポート法"]
        : [
            "Architecture of a session: opening, settling, deepening, and closing",
            "Vocal tone, pacing, precision of language, and the power of silence",
            "Troubleshooting common beginner challenges (restlessness, drowsiness)"
          ]
    },
    {
      num: 6,
      name: isHi ? "मॉड्यूल 6" : isJa ? "モジュール 6" : "Module 6",
      title: isHi ? "प्रायोगिक शिक्षण एवं प्रतिपुष्टि" : isJa ? "指導実践（ティーチング）とフィードバック" : "Practice Teaching",
      summary: isHi
        ? "प्रत्यक्ष निर्देशित सत्र संचालित करना, सहपाठियों व गुरुजी से प्रतिपुष्टि (फीडबैक) प्राप्त करना।"
        : isJa
        ? "模擬指導セッションの実施、指導者および受講生からのフィードバックと自己探求。"
        : "Conducting guided meditation sessions, receiving direct instructor and peer feedback, and refining personal teaching presence.",
      topics: isHi
        ? ["लाइव निर्देशित सत्र का संचालन", "प्रशिक्षक एवं सहपाठियों से विस्तृत प्रतिपुष्टि", "अपनी प्रामाणिक शिक्षण शैली का विकास"]
        : isJa
        ? ["実践的なライブ模擬クラスの指導", "指導者によるきめ細かなフィードバックと修正点", "自分らしい本質的な指導スタイルの確立"]
        : [
            "Conducting live guided meditation practicums",
            "Receiving constructive instructor feedback and self-evaluation",
            "Refining an authentic, calm, and grounded teaching presence"
          ]
    },
    {
      num: 7,
      name: isHi ? "मॉड्यूल 7" : isJa ? "モジュール 7" : "Module 7",
      title: isHi ? "नैतिकता एवं साधक सुरक्षा" : isJa ? "倫理観と生徒への適切なサポート" : "Ethics and Student Support",
      summary: isHi
        ? "शिक्षक-शिष्य मर्यादा, मानसिक संवेदनशीलता की पहचान एवं पेशेवर चिकित्सकीय रेफरल की समझ।"
        : isJa
        ? "指導者と生徒の適切な境界線、心理的サポートの限界と専門医療への紹介判断。"
        : "Teacher-student boundaries, holding safe non-dogmatic space, and recognizing when professional psychological support is needed.",
      topics: isHi
        ? ["आध्यात्मिक मर्यादा और नैतिक सीमाएं", "भावनात्मक उत्तेजना या चिंता की स्थिति में दायित्व", "चिकित्सकीय परामर्श की आवश्यकता की पहचान"]
        : isJa
        ? ["指導者の倫理規定と健全な境界線の維持", "感情の噴出や不安が生じた際の適切な対処法", "専門医や心理療法士へ委ねるべき判断基準"]
        : [
            "Ethical boundaries and non-coercive teaching principles",
            "Safely handling emotional releases or trauma triggers",
            "Recognizing when to refer students to medical professionals"
          ]
    },
    {
      num: 8,
      name: isHi ? "मॉड्यूल 8" : isJa ? "モジュール 8" : "Module 8",
      title: isHi ? "अंतिम मूल्यांकन एवं सतत साधना" : isJa ? "最終実践評価と今後の継続学習" : "Final Practice and Assessment",
      summary: isHi
        ? "अंतिम शिक्षण प्रदर्शन, व्यापक समीक्षा, सतत स्वाध्याय योजना एवं आश्रम से निरंतर जुड़ाव।"
        : isJa
        ? "修了デモンストレーション、総合レビュー、生涯にわたる自己修練計画の策定。"
        : "Demonstration session, comprehensive mentor review, ongoing practice blueprint, and continuing education pathway.",
      topics: isHi
        ? ["स्वतंत्र ध्यान सत्र का अंतिम प्रदर्शन", "समग्र समीक्षा एवं व्यक्तिगत परामर्श", "आश्रम साधना संघ से सतत जुड़ाव"]
        : isJa
        ? ["独立したフルセッションの修了デモ指導", "指導陣による総合評価と個人アドバイス", "アシュラムコミュニティとの継続的なつながり"]
        : [
            "Capstone guided meditation demonstration",
            "Comprehensive personal review and mentorship feedback",
            "Long-term sadhana commitment and ongoing peer learning"
          ]
    }
  ];

  const highlights = [
    {
      icon: Wind,
      title: isHi ? "ध्यान की नींव" : isJa ? "瞑想の基礎確立" : "Meditation Foundations",
      points: isHi
        ? ["श्वास संवेदन और तनावमुक्ति", "एकाग्रता और मानसिक स्थिरता", "निर्देशित ध्यान की विविध विधियां"]
        : isJa
        ? ["呼吸の気づきとリラクゼーション", "集中力とマインドフルネスの養成", "ガイド付き瞑想の体系的実践"]
        : [
            "Breath awareness & conscious somatic settling",
            "Focus, concentration, and stilling mental waves",
            "Diverse classical guided meditation approaches"
          ]
    },
    {
      icon: BookOpen,
      title: isHi ? "पारंपरिक ज्ञान" : isJa ? "伝統的ヨーガの叡智" : "Traditional Wisdom",
      points: isHi
        ? ["शास्त्रीय योग व ध्यान परंपराओं का परिचय", "अभ्यास और वैराग्य का अनुशासन", "पारंपरिक ग्रंथों के मूल विचार"]
        : isJa
        ? ["伝統的なヨーガおよび瞑想伝統の導入", "修練（アビヤーサ）と離欲（ヴァイラーギャ）の規律", "古典文献に記された本質的知見"]
        : [
            "Immersion in classical yogic and contemplative roots",
            "The discipline of regular practice (Abhyasa & Vairagya)",
            "Grounded philosophical clarity without dogma"
          ]
    },
    {
      icon: GraduationCap,
      title: isHi ? "शिक्षण कौशल" : isJa ? "指導者としての技量" : "Teaching Skills",
      points: isHi
        ? ["संतुलित ध्यान सत्र की रूपरेखा तैयार करना", "स्पष्ट, शांत और प्रभावी वाणी शैली", "नव-अभ्यासियों की समस्याओं का निवारण"]
        : isJa
        ? ["調和のとれた瞑想セッションの構造化", "声のトーン、間の取り方、的確なインストラクション", "初心者のつまずきや疑問への寄り添い"]
        : [
            "Structuring purposeful, transformative sessions",
            "Clear voice, pacing, and guiding presence",
            "Supporting beginners through common challenges"
          ]
    },
    {
      icon: Users,
      title: isHi ? "अभ्यास एवं प्रतिपुष्टि" : isJa ? "実践とフィードバック" : "Practice and Feedback",
      points: isHi
        ? ["प्रत्यक्ष शिक्षण प्रदर्शन के अवसर", "प्रशिक्षक द्वारा व्यक्तिगत मार्गदर्शन", "नैतिक मर्यादाओं और सुरक्षा का ज्ञान"]
        : isJa
        ? ["模擬クラスでのライブ実践機会", "熟練の指導者による建設的なフィードバック", "指導者としての倫理とセーフティの担保"]
        : [
            "Live student-led practice teaching opportunities",
            "Personalized mentor feedback and refinement",
            "Ethical boundaries and student care protocols"
          ]
    }
  ];

  const faqs = [
    {
      q: isHi ? "क्या मुझे पूर्व ध्यान अनुभव की आवश्यकता है?" : isJa ? "事前の瞑想経験は必要ですか？" : "Do I need prior meditation experience?",
      a: isHi
        ? "हाँ, कम से कम 6 महीने का नियमित व्यक्तिगत ध्यान या योग अभ्यास लाभकारी रहता है। हालांकि, गंभीर एवं समर्पित जिज्ञासुओं का भी स्वागत है जो नियमित साधना के लिए प्रतिबद्ध हैं।"
        : isJa
        ? "はい、最低でも数ヶ月の定期的な個人瞑想またはヨガの実践経験があることが推奨されます。ただし、真摯に毎日の修練に取り組む熱意のある初心者の方も受講可能です。"
        : "A personal meditation or yoga practice of at least a few months is highly recommended. However, sincere practitioners committed to establishing a serious daily discipline are welcome to apply."
    },
    {
      q: isHi ? "प्रशिक्षण कार्यक्रम की अवधि कितनी है?" : isJa ? "トレーニングの期間はどのくらいですか？" : "How long is the training?",
      a: isHi
        ? "यह कार्यक्रम 8 मॉड्यूल्स में संरचित है, जिसे सप्ताहांत लाइव कक्षाओं अथवा गहन आवासीय प्रारूप में पूरा किया जाता है। प्रवेश परामर्श के समय निश्चित तिथियां एवं घंटे साझा किए जाते हैं।"
        : isJa
        ? "このプログラムは全8モジュールで構成されており、週末のオンライン集中講義または現地での集中リトリート形式で実施されます。確定日程と総時間数は登録時にご案内します。"
        : "The course is structured across 8 comprehensive modules, delivered through structured online weekend cohorts or intensive residential formats. Exact schedule hours and dates are confirmed during enrollment consultation."
    },
    {
      q: isHi ? "क्या यह पाठ्यक्रम ऑनलाइन है या आवासीय?" : isJa ? "講座はオンラインですか、それとも滞在型ですか？" : "Is the course online or residential?",
      a: isHi
        ? "यह दोनों प्रारूपों में उपलब्ध है: (1) इंटरैक्टिव लाइव ऑनलाइन सेशंस, और (2) उत्तरकाशी की पावन तपोभूमि मथाली में आयोजित होने वाले विशेष आवासीय रिट्रीट्स।"
        : isJa
        ? "両方の形式に対応しています。(1) 自宅から受講できるインタラクティブなライブオンライン講義、および (2) 北インド・ウッタラーカーシーの修道院（アシュラム）での滞在型集中研修です。"
        : "Both formats are offered: (1) Interactive live online sessions with real-time feedback, and (2) Periodic residential intensive retreats at our sacred Tapobhoomi in Mathali, Uttarkashi."
    },
    {
      q: isHi ? "क्या समापन पर प्रमाण पत्र प्रदान किया जाता है?" : isJa ? "修了証（サーティフィケート）は発行されますか？" : "Is a certificate included?",
      a: isHi
        ? "सभी मॉड्यूल्स, असाइनमेंट्स और अंतिम शिक्षण प्रदर्शन को सफलतापूर्वक पूरा करने पर श्री ध्यान आश्रम द्वारा 'सर्टिफिकेट ऑफ कम्प्लीशन' प्रदान किया जाता है।"
        : isJa
        ? "全8モジュールの受講、課題の提出、および最終模擬指導を修了した受講生に対し、シュリディヤン・アシュラムより正式な修了証が授与されます。"
        : "Upon successful completion of all 8 modules, practice assignments, and the capstone demonstration session, participants receive a formal Certificate of Completion from Shridhyan Ashram."
    },
    {
      q: isHi ? "क्या मैं पाठ्यक्रम पूरा करने के बाद ध्यान सिखा सकता हूँ?" : isJa ? "修了後、すぐに瞑想クラスを教えることができますか？" : "Can I teach meditation after completing the program?",
      a: isHi
        ? "हाँ, आप सामुदायिक केंद्रों, योग स्टूडियो, कार्यस्थलों में सामान्य मार्गदर्शित ध्यान सत्र आयोजित करने तथा शुरुआती साधकों का मार्गदर्शन करने में सक्षम होंगे।"
        : isJa
        ? "はい。基礎的な呼吸観察、リラクゼーション、マインドフルネスの誘導セッションを、コミュニティ、ヨガスタジオ、職場で自信を持って教える基礎が身につきます。"
        : "Yes, you will have the practical tools, methodology, and ethical grounding to lead introductory meditation sessions, workplace mindfulness, and studio classes responsibly."
    },
    {
      q: isHi ? "पाठ्यक्रम समाप्ति के बाद क्या सहायता उपलब्ध है?" : isJa ? "修了後のフォローアップサポートはありますか？" : "What support is available after completion?",
      a: isHi
        ? "आश्रम के पूर्व छात्र समुदाय से सतत जुड़ाव, मासिक प्रश्नोत्तर सत्र, साधना मार्गदर्शन तथा उन्नत कार्यशालाओं में प्राथमिकता प्रदान की जाती है।"
        : isJa
        ? "アシュラムの修了生ネットワークへの参加、定期的な質疑応答ミーティング、継続的なサダナ指導へのアクセスが提供されます。"
        : "Graduates gain access to ongoing alumni sangha gatherings, monthly Q&A sessions with senior instructors, and continued sadhana mentorship."
    }
  ];

  return (
    <div className="bg-[#fcfbf7] text-[#1c2e24] min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* BREADCRUMB NAVIGATION */}
      <nav aria-label="Breadcrumb" className="bg-[#f5f2e9] border-b border-[#e6dfd1] py-3 text-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-margin flex items-center gap-2 text-stone-600">
          <Link href="/" className="hover:text-primary transition-colors">
            {isHi ? "होम" : isJa ? "ホーム" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-500">
            {isHi ? "पाठ्यक्रम" : isJa ? "コース" : "Courses"}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-primary font-semibold">
            {isHi ? "ध्यान शिक्षक प्रशिक्षण" : isJa ? "瞑想指導者育成トレーニング" : "Meditation Teacher Training"}
          </span>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f3eee2] via-[#faf7f0] to-[#fcfbf7] pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#e8e2d4]">
        <div className="max-w-7xl mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isHi
                    ? "ध्यान एवं आन्तरिक रूपांतरण"
                    : isJa
                    ? "瞑想と内なる変容"
                    : "MEDITATION & INNER TRANSFORMATION"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight leading-[1.15] mb-5">
                {isHi
                  ? "व्यक्तिगत साधना से दूसरों को ध्यान में मार्गदर्शन देने तक"
                  : isJa
                  ? "個人の修練から、他者を瞑想へ導く指導者へ"
                  : "From Personal Practice to Guiding Others in Meditation"}
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans mb-8 max-w-2xl">
                {isHi
                  ? "पारंपरिक हिमालयी ज्ञान में निहित सुव्यवस्थित शिक्षण के माध्यम से ध्यान, श्वास चेतना, एकाग्रता और चिंतनशील अभ्यासों की गहन समझ विकसित करें।"
                  : isJa
                  ? "ヒマラヤの伝統的叡智に根ざした体系的な学びを通じて、瞑想、呼吸の気づき、集中力、および観照的修練の深遠な理解を深めます。"
                  : "Develop a deeper understanding of meditation, breath awareness, concentration, and contemplative practices through structured learning and guidance rooted in traditional wisdom."}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#curriculum"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>
                    {isHi ? "प्रशिक्षण कार्यक्रम देखें" : isJa ? "プログラムの詳細を見る" : "Explore the Training Program"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIntroModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-surface-container-highest/60 hover:bg-surface-container-highest border border-outline-variant text-primary font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-amber-600 fill-current" />
                  <span>
                    {isHi ? "निःशुल्क परिचय सत्र में भाग लें" : isJa ? "無料ガイダンスセッションに参加" : "Attend a Free Introduction Session"}
                  </span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-stone-700 leading-snug">
                    {isHi ? "पारंपरिक हिमालयी परंपरा" : isJa ? "正統なヒマラヤの伝統" : "Classical Himalayan Tradition"}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-stone-700 leading-snug">
                    {isHi ? "8 विस्तृत मॉड्यूल्स" : isJa ? "全8モジュールの体系的構成" : "8 Structured Modules"}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-stone-700 leading-snug">
                    {isHi ? "उत्तरदायी शिक्षण कौशल" : isJa ? "責任ある指導スキルの育成" : "Responsible Teaching Skills"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-stone-900 group">
                <img
                  src="/images/meditation_hall.jpg"
                  alt="Shridhyan Ashram Himalayan Meditation Hall"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                    {isHi ? "मथाली तपोभूमि, उत्तरकाशी" : isJa ? "マタリ・タポブーミ（北インド・ウッタラーカーシー）" : "Mathali Tapobhoomi, Uttarkashi"}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {isHi ? "पवित्र ध्यान साधना कक्ष" : isJa ? "ヒマラヤの静寂に包まれた瞑想堂" : "Sacred Himalayan Meditation Hall"}
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    {isHi
                      ? "गंगा तट पर स्थित प्राकृतिक शांति जहां दशकों से साधक अंतर्यात्रा का अभ्यास करते हैं।"
                      : isJa
                      ? "ガンジス川の聖流を望む静寂の地で、何世代にもわたり瞑想の修練が受け継がれてきました。"
                      : "A tranquil sanctuary beside the Bhagirathi Ganga where authentic contemplative practice has flourished for generations."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY THIS PROGRAM? */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "कार्यक्रम की सार्थकता" : isJa ? "プログラムの意義" : "WHY THIS PROGRAM?"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-4">
              {isHi
                ? "साधारण ध्यान तकनीकों से आगे बढ़ें"
                : isJa
                ? "基本的な瞑想テクニックの先へ"
                : "Go Beyond Basic Meditation Techniques"}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
              {isHi
                ? "यह कार्यक्रम केवल सतही विश्राम तकनीकों तक सीमित नहीं है। इसका उद्देश्य आपके व्यक्तिगत अभ्यास को गहरा करना और दूसरों को सुरक्षित, प्रामाणिक और उत्तरदायी तरीके से मार्गदर्शन देने के लिए आवश्यक कौशल विकसित करना है।"
                : isJa
                ? "このプログラムの目的は、単なる表面的なリラクゼーションにとどまりません。あなた自身の確固たる瞑想修練を深め、生徒に対して安全かつ倫理的に指導するための本質的な技量を養うことです。"
                : "This program aims to develop a consistent personal practice and the essential pedagogical skills needed to guide meditation sessions responsibly, safely, and authentically."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                01
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1">
                  {isHi ? "विविध ध्यान शैलियों की गहरी समझ" : isJa ? "多様な瞑想アプローチの体系的理解" : "Understanding Different Approaches"}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isHi
                    ? "शमथ, विपश्यना, धारणा और साक्षी भाव जैसी शास्त्रीय पद्धतियों के मूल अंतर और संयोजन को समझें।"
                    : isJa
                    ? "呼吸瞑想、ヴィパッサナー、ダーラナー（集中）、サークシー・バーヴァ（観照）の各特徴と融合を学びます。"
                    : "Comprehend the structural nuances of Shamatha, Vipassana, Dharana, and Sakshi Bhava without dogma or confusion."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                02
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1">
                  {isHi ? "एकाग्रता एवं सजगता का विकास" : isJa ? "集中力と明晰な気づきの深化" : "Developing Concentration & Awareness"}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isHi
                    ? "चंचल मन को स्थिर करने, इंद्रिय संकोच (प्रत्याहार) और अंतःचेतना के विस्तार की वैज्ञानिक प्रणालियाँ।"
                    : isJa
                    ? "散漫になりがちな思考を一点に集約し、感覚の制御と内的明晰さを引き出す技法を習得します。"
                    : "Techniques for anchoring active minds, sensory quietude (Pratyahara), and steady contemplative focus."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                03
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1">
                  {isHi ? "निर्देशित सत्र की संरचना करना" : isJa ? "ガイド付きセッションの構成・演出" : "Structuring Guided Sessions"}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isHi
                    ? "सत्र की शुरुआत से लेकर विश्राम, गहराई और मौन में लयबद्ध प्रवेश कराने की संपूर्ण कला।"
                    : isJa
                    ? "導入、グラウンディング、集中、静寂、そして現実への統合に至るセッション全体の設計法を学びます。"
                    : "Learn to design seamless class journeys: grounding, verbal pacing, conscious silence, and gentle re-entry."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                04
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1">
                  {isHi ? "साधकों की कठिनाइयों का समाधान" : isJa ? "生徒の課題やつまずきへの対応" : "Understanding Student Difficulties"}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isHi
                    ? "शारीरिक बेचैनी, उबासी, विचारों की बाढ़ अथवा भावनात्मक उतार-चढ़ाव से जूझ रहे विद्यार्थियों की सहायता।"
                    : isJa
                    ? "身体の痛み、眠気、雑念、感情の揺らぎなど、初心者が直面する典型的な障害に的確に対処します。"
                    : "Compassionately address restlessness, sleepiness, physical discomfort, and emotional surges in students."}
                </p>
              </div>
            </div>
          </div>

          {/* Ethical Disclaimer Callout */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300/50 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>
                {isHi ? "पारंपरिक एवं शैक्षणिक स्पष्टीकरण: " : isJa ? "伝統的・倫理的方針: " : "Contemplative & Ethical Scope: "}
              </strong>
              {isHi
                ? "यह कार्यक्रम ध्यान की शास्त्रीय पद्धतियों के अध्ययन एवं उत्तरदायी मार्गदर्शन का शैक्षणिक पाठ्यक्रम है। हम समाधि, चक्र जागरण या मानसिक स्वास्थ्य विकारों के चमत्कारी उपचार का कोई भ्रामक दावा नहीं करते। ध्यान को जीवन में संतुलन और आत्म-जागरूकता का साधन माना गया है।"
                : isJa
                ? "本講座は瞑想の伝統的技法と責任ある指導法を学ぶ教育プログラムです。三昧（サマディ）の即時達成、チャクラの覚醒、または精神疾患の治療を保証・約束するものではありません。瞑想は内省と心の調和を育む日々の修練です。"
                : "This program is an educational and spiritual training in traditional contemplative practices and responsible facilitation. We make no unsubstantiated claims of instant Samadhi, esoteric awakening, or cures for psychological conditions."}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MEET YOUR GUIDE */}
      <section className="py-20 bg-[#f7f3ea] border-y border-[#e8e2d4]">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 text-center md:text-left">
              <div className="relative inline-block mx-auto md:mx-0">
                <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-800">
                  <img
                    src="/images/maharaj/swami_ji.jpeg"
                    alt="Param Pujya Swami Ji Maharaj"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs shadow-lg">
                  {isHi ? "दशकों की निरंतर साधना" : isJa ? "数十年におよぶ修練" : "Decades of Continuous Sadhana"}
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-widest text-tertiary font-semibold">
                {isHi ? "मार्गदर्शक परिचय" : isJa ? "指導者の紹介" : "MEET YOUR GUIDE"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1 mb-4">
                {isHi
                  ? "अनुभव एवं मार्गदर्शन के सान्निध्य में सीखें"
                  : isJa
                  ? "長年の修練と指導の導きのもとで学ぶ"
                  : "Learn Through Experience and Guidance"}
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                {isHi
                  ? "परम पूज्य स्वामी जी महाराज ने उत्तरकाशी की पावन भूमि पर दशकों तक कठोर तपस्या, मौन और शास्त्रों का गहन चिंतन किया है। उनका दृष्टिकोण शास्त्रीय राजयोग की परंपरा से ओतप्रोत है, जहां ध्यान को बिना किसी आडंबर के सीधा, सरल और जीवन-रूपांतरणकारी बनाया गया है।"
                  : isJa
                  ? "シュリ・スワミジ・マハラジは、北インド・ウッタラーカーシーの聖地にて長年にわたり沈黙と厳格なタパス（瞑想的苦行）を重ねてこられました。伝統的なラージャ・ヨーガの真髄に基づき、誇張のない誠実で地に足のついた指導を行っています。"
                  : "Param Pujya Swami Ji Maharaj brings decades of silent meditation, contemplative sadhana, and classical textual study rooted in the Himalayan Tapobhoomi of Uttarkashi. His teaching approach is grounded, disciplined, and focused on genuine inner transformation rather than superficial techniques."}
              </p>

              <div className="space-y-2 mb-6 text-xs sm:text-sm text-stone-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>
                    {isHi
                      ? "पतंजलि योग सूत्र एवं हिमालयी परंपरा पर आधारित प्रामाणिक शिक्षा"
                      : isJa
                      ? "パタンジャリ・ヨーガ・スートラとヒマラヤ伝統に基づく正統な教授法"
                      : "Rooted in Patanjali's Yoga Sutras & classical contemplative lineages"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>
                    {isHi
                      ? "प्रत्येक साधक की मानसिक प्रकृति के अनुकूल व्यक्तिगत सानिध्य"
                      : isJa
                      ? "受講生一人ひとりの気質に応じた丁寧な個人アドバイス"
                      : "Individualized attention tailored to each student's mental temperament"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>
                    {isHi
                      ? "उत्तरदायी, नैतिक और आडंबरहीन शिक्षण की प्रेरणा"
                      : isJa
                      ? "誠実で誇張のない、責任ある指導態度の伝授"
                      : "Emphasis on responsible, ethical, and non-dogmatic facilitation"}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-stone-200 text-xs text-stone-600 italic flex items-start gap-3">
                <Quote className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  {isHi
                    ? '"ध्यान कोई थोपी हुई क्रिया नहीं, अपितु जब मन शांत होता है तो आत्मा का वास्तविक स्वरूप स्वतः प्रकाशित हो उठता है।"'
                    : isJa
                    ? '"瞑想とは無理に何かを行うことではなく、心が静まったときに自己本来の静寂が自ずと顕れることです。"'
                    : '"Meditation is not forced mental suppression; when the turbulent ripples of mind subside, our authentic stillness shines on its own."'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COURSE HIGHLIGHTS */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "प्रमुख शिक्षण आयाम" : isJa ? "プログラムの柱" : "COURSE HIGHLIGHTS"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
              {isHi
                ? "प्रशिक्षण के चार आधार स्तम्भ"
                : isJa
                ? "4つの主要な学習ピラー"
                : "Four Foundational Pillars"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-amber-400/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold font-serif text-primary text-lg mb-3">
                      {h.title}
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                      {h.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-1" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: SUGGESTED CURRICULUM (8 MODULES) */}
      <section id="curriculum" className="py-20 bg-[#f7f4ec] border-t border-[#e8e2d4]">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "विस्तृत पाठ्यक्रम" : isJa ? "カリキュラム構成" : "SUGGESTED CURRICULUM"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-3">
              {isHi
                ? "8 मॉड्यूल्स की संपूर्ण शिक्षण यात्रा"
                : isJa
                ? "全8モジュールの体系的カリキュラム"
                : "The 8-Module Training Pathway"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              {isHi
                ? "व्यक्तिगत अभ्यास की स्थापना से लेकर विद्यार्थियों को मार्गदर्शित करने के अंतिम मूल्यांकन तक।"
                : isJa
                ? "自己の瞑想修練の深化から、実際のクラス指導と総合評価に至る包括的なステップ。"
                : "From personal foundation and textual grounding to live teaching demonstrations and mentor evaluations."}
            </p>
          </div>

          <div className="space-y-4">
            {curriculumModules.map((m, idx) => {
              const isOpen = activeModule === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveModule(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-800 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                        {m.num}
                      </div>
                      <div>
                        <div className="text-xs text-amber-700 font-medium tracking-wide">
                          {m.name}
                        </div>
                        <h3 className="font-bold text-primary text-base sm:text-lg">
                          {m.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-stone-100 bg-[#fdfbf7]">
                      <p className="text-xs sm:text-sm text-stone-700 mb-4 leading-relaxed font-sans">
                        {m.summary}
                      </p>
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                        <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block mb-2">
                          {isHi ? "मुख्य अध्ययन बिंदु:" : isJa ? "学習内容の要点:" : "Core Learning Topics:"}
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-600">
                          {m.topics.map((t, tidx) => (
                            <li key={tidx} className="flex items-start gap-1.5">
                              <span className="text-amber-600 font-bold">•</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-500 text-center">
            {isHi
              ? "* पाठ्यक्रम की वास्तविक अवधि, घंटों की संख्या, मूल्यांकन आवश्यकताएं एवं प्रमाणन विवरण प्रवेश पूर्व परामर्श में संपुष्ट किए जाते हैं।"
              : isJa
              ? "※ 実際の講義時間数、対面リトリートの日程、修了要件は受講申請時のガイダンスにて確定・ご案内いたします。"
              : "* Actual course duration, total training hours, evaluation criteria, and certification details are confirmed during the admissions process."}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO SHOULD JOIN? */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "पात्रता एवं प्रतिभागी" : isJa ? "対象者" : "WHO SHOULD JOIN?"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
              {isHi
                ? "यह कार्यक्रम किनके लिए उपयुक्त है?"
                : isJa
                ? "このプログラムが適している方"
                : "Who Is This Program For?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "ध्यान साधक" : isJa ? "瞑想の実践者" : "Meditation Practitioners"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "जो अपने व्यक्तिगत अभ्यास को नियमित, गंभीर और गहरी शांति में स्थापित करना चाहते हैं।"
                    : isJa
                    ? "個人の瞑想修練を深め、確固たる基盤を築きたい方。"
                    : "Seekers wanting to deepen and ground their existing daily contemplative discipline."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "योग शिक्षक" : isJa ? "ヨガインストラクター" : "Yoga Teachers"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "जो अपनी कक्षाओं में आसन व प्राणायाम के साथ प्रामाणिक ध्यान सत्र जोड़ना चाहते हैं।"
                    : isJa
                    ? "アサナの指導に加えて、本格的な瞑想セッションをクラスに導入したい方。"
                    : "Yoga instructors wishing to integrate authentic meditation into their classes with confidence."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "वेलनेस व स्वास्थ्य पेशेवर" : isJa ? "ウェルネス指導者・セラピスト" : "Wellness Professionals"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "थेरेपिस्ट, परामर्शदाता और शिक्षक जो तनाव प्रबंधन में ध्यान का उपयोग करना चाहते हैं।"
                    : isJa
                    ? "ストレスマネジメントやマインドフルネスの観点を支援活動に取り入れたい方。"
                    : "Therapists, counselors, and educators seeking grounded mindfulness tools for clients."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "सत्संग व ध्यान मंडली आयोजक" : isJa ? "瞑想サークルの主催者" : "Meditation Circle Facilitators"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "जो सामुदायिक केंद्रों या रिट्रीट्स में सामूहिक ध्यान का मार्गदर्शन करना चाहते हैं।"
                    : isJa
                    ? "地域や職場で瞑想グループやワークショップを主宰したい方。"
                    : "Spiritual seekers interested in holding space for group meditation and community retreats."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "समर्पित शुरुआती जिज्ञासु" : isJa ? "真摯な初学者" : "Committed Beginners"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "जो किसी प्रामाणिक हिमालयी गुरु परंपरा के मार्गदर्शन में शून्य से शुरुआत करना चाहते हैं।"
                    : isJa
                    ? "伝統的なヒマラヤの正統な教えのもとで、基礎から着実に学びたい方。"
                    : "Sincere beginners willing to embrace the commitment of regular daily personal meditation."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "आध्यात्मिक अन्वेषक" : isJa ? "精神的探求者" : "Spiritual Seekers"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "जो आंतरिक शांति, साक्षी भाव और आत्म-बोध के मार्ग पर अग्रसर हैं।"
                    : isJa
                    ? "内なる静寂と自己の本質を探求する旅路にあるすべての方。"
                    : "Individuals committed to self-inquiry, mental quietude, and lifelong inner growth."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEARNING FORMAT */}
      <section className="py-20 bg-[#f6f2e8] border-t border-[#e8e2d4]">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "शिक्षण प्रारूप" : isJa ? "受講形式" : "LEARNING FORMAT"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
              {isHi
                ? "सीखने की लचीली एवं प्रामाणिक संरचना"
                : isJa
                ? "柔軟かつ本格的な学習スタイル"
                : "Flexible and Immersive Learning Structure"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-4">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-primary text-base mb-2">
                  {isHi ? "लाइव इंटरैक्टिव कक्षाएं" : isJa ? "ライブ・オンライン講義" : "Interactive Live Sessions"}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHi
                    ? "सप्ताहांत ऑनलाइन सत्र जहां आप शिक्षक के साथ सीधे संवाद, प्रश्नोत्तर और अभ्यास कर सकते हैं।"
                    : isJa
                    ? "リアルタイムでの講義と質疑応答。遠方からでも指導陣と直接つながり学べます。"
                    : "Real-time online cohorts featuring direct instruction, real-time feedback, and group discussion."}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-amber-800 font-medium">
                {isHi ? "रिकॉर्डिंग उपलब्ध" : isJa ? "録画アーカイブ付き" : "Recordings provided for review"}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-primary text-base mb-2">
                  {isHi ? "आवासीय तपोभूमि रिट्रीट" : isJa ? "現地滞在型リトリート（任意）" : "In-Person Tapobhoomi Retreats"}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHi
                    ? "मथाली (उत्तरकाशी) आश्रम में आयोजित गहन आवासीय साधना जहां हिमालय की ऊर्जा में प्रत्यक्ष अभ्यास होता है।"
                    : isJa
                    ? "北インド・ウッタラーカーシーの聖なるアシュラムにて、ヒマラヤの静寂に浸る集中合宿。"
                    : "Optional residential training intensives at our sacred retreat in Mathali, Uttarkashi beside the Ganga."}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-amber-800 font-medium">
                {isHi ? "मथाली, उत्तरकाशी" : isJa ? "ウッタラーカーシー現地" : "Mathali, Uttarkashi"}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-primary text-base mb-2">
                  {isHi ? "मार्गदर्शित शिक्षण प्रदर्शन" : isJa ? "指導実習と個別フィードバック" : "Teaching Practicum & Review"}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHi
                    ? "सहपाठियों को लाइव सत्र निर्देशित करना, स्वाध्याय डायरी और मार्गदर्शक से सूक्ष्म प्रतिपुष्टि।"
                    : isJa
                    ? "模擬クラスでの実践指導、日々のサダナ日誌の確認、講師による個別講評。"
                    : "Live supervised practice teaching clinics, reflective journaling, and detailed mentor critiques."}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-amber-800 font-medium">
                {isHi ? "व्यावहारिक मूल्यांकन" : isJa ? "実践的スキル定着" : "Actionable feedback"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQS */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "सामान्य प्रश्नोत्तर" : isJa ? "よくある質問" : "FREQUENTLY ASKED QUESTIONS"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
              {isHi
                ? "पाठ्यक्रम संबंधी जिज्ञासाएं"
                : isJa
                ? "よくあるご質問と回答"
                : "Questions & Answers"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-stone-200 bg-surface-container-low overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-primary text-base sm:text-lg"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed border-t border-stone-100">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-stone-500">
            {isHi
              ? "नोट: आश्रम किसी अंतरराष्ट्रीय मान्यता या पेशेवर एक्रेडिटेशन का अनावश्यक दावा नहीं करता; यह कार्यक्रम पारंपरिक ज्ञान और प्रामाणिक योग्यता पर केंद्रित है।"
              : isJa
              ? "※ 国際団体等の公的資格付与を誇張するものではなく、伝統的な精神修練に基づく実質的な指導力を培うプログラムです。"
              : "Note: We do not claim arbitrary external accreditations; the program focuses on genuine personal mastery, traditional methodology, and ethical competence."}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA & ENROLLMENT FORM */}
      <section id="enrollment" className="py-20 bg-gradient-to-br from-[#0c2619] via-[#091f14] to-[#04120b] text-[#fcf9f3]">
        <div className="max-w-4xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
              {isHi ? "साधना की अगली सीढ़ी" : isJa ? "次の一歩へ" : "TAKE THE NEXT STEP"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 mb-4">
              {isHi
                ? "अपनी ध्यान यात्रा में अगला कदम उठाएं"
                : isJa
                ? "瞑想の旅を次の段階へと進める"
                : "Take the Next Step in Your Meditation Journey"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {isHi
                ? "प्रशिक्षण बैच की जानकारी, तिथियां अथवा निःशुल्क परिचय सत्र के लिए नीचे दिए गए फॉर्म के माध्यम से आश्रम से संपर्क करें।"
                : isJa
                ? "今後の募集日程、受講詳細、または無料ガイダンスセッションのご予約は、下記フォームよりお気軽にお問い合わせください。"
                : "Inquire about upcoming cohorts, schedule details, or attend our free introduction guidance session."}
            </p>
          </div>

          <div className="bg-[#0f2e1e]/90 border border-amber-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-100/90 mb-1 font-medium">
                    {isHi ? "पूरा नाम *" : isJa ? "お名前 *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white/10 border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-amber-100/90 mb-1 font-medium">
                    {isHi ? "फोन / व्हाट्सएप *" : isJa ? "電話番号 *" : "Phone / WhatsApp *"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    className="w-full bg-white/10 border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-100/90 mb-1 font-medium">
                    {isHi ? "ईमेल *" : isJa ? "メールアドレス *" : "Email Address *"}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full bg-white/10 border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-amber-100/90 mb-1 font-medium">
                    {isHi ? "ध्यान का पूर्व अनुभव" : isJa ? "瞑想の経験" : "Meditation Experience"}
                  </label>
                  <select
                    className="w-full bg-[#0a2116] border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  >
                    <option value="Beginner">{isHi ? "शुरुआती (0-6 माह)" : isJa ? "初級（0〜6ヶ月）" : "Beginner (0-6 months)"}</option>
                    <option value="Intermediate">{isHi ? "मध्यम (6 माह - 2 वर्ष)" : isJa ? "中級（6ヶ月〜2年）" : "Intermediate (6m - 2y)"}</option>
                    <option value="Advanced">{isHi ? "अनुभवी साधक / योग शिक्षक" : isJa ? "上級者 / ヨガ講師" : "Advanced / Yoga Teacher"}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-amber-100/90 mb-1 font-medium">
                  {isHi ? "संदेश / जिज्ञासा" : isJa ? "メッセージ・ご質問" : "Message / Questions"}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    isHi
                      ? "आप ध्यान क्यों सीखना या सिखाना चाहते हैं..."
                      : isJa
                      ? "瞑想指導に興味を持ったきっかけやご希望をお書きください..."
                      : "Tell us about your background or aspirations in meditation..."
                  }
                  className="w-full bg-white/10 border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#061910] font-bold tracking-wide transition-all shadow-md active:scale-95"
              >
                {isHi ? "आवेदन / नामांकन पूछताछ भेजें" : isJa ? "受講申し込み・問い合わせを送信" : "Submit Application / Inquiry"}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-amber-400/20 flex flex-wrap items-center justify-center gap-4 text-xs">
              <button
                type="button"
                onClick={() => setIntroModalOpen(true)}
                className="text-amber-300 hover:underline flex items-center gap-1"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>
                  {isHi ? "परिचय सत्र का विवरण देखें" : isJa ? "ガイダンス詳細を見る" : "Attend Intro Session"}
                </span>
              </button>
              <span className="text-amber-400/40">•</span>
              <Link href="/#contact" className="text-amber-300 hover:underline">
                {isHi ? "आश्रम से सीधा संपर्क" : isJa ? "アシュラムへのお問い合わせ" : "Contact the Ashram"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: OTHER COURSES NAVIGATION */}
      <section className="py-16 bg-surface border-t border-outline-variant/20">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-tertiary font-semibold">
              {isHi ? "अन्य साधना मार्ग" : isJa ? "他のコースを見る" : "EXPLORE MORE PATHS"}
            </span>
            <h3 className="text-2xl font-serif font-bold text-primary mt-1">
              {isHi ? "आश्रम के अन्य पाठ्यक्रम" : isJa ? "アシュラムの他コース" : "Other Ashram Courses"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/courses/vedic-bio-healing"
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <Hand className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-primary group-hover:text-amber-700 transition-colors">
                  {isHi ? "वैदिक बायो हीलिंग" : isJa ? "ヴェーダ・バイオヒーリング" : "Vedic Bio Healing"}
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  {isHi
                    ? "अथर्ववेद (काण्ड 4, सूक्त 13) पर आधारित पारंपरिक हस्त एवं प्राण साधना।"
                    : isJa
                    ? "アタルヴァ・ヴェーダに基づく伝統的な手当とプラーナ治癒の修練。"
                    : "Traditional healing practices inspired by Atharvaveda, mantra, breath, and touch-based spiritual traditions."}
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
                  {isHi ? "श्री विद्या परंपरा" : isJa ? "シュリ・ヴィディヤ伝統" : "Shri Vidya Tradition"}
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  {isHi
                    ? "ललिता त्रिपुरसुन्दरी, श्री चक्र एवं पवित्र ज्यामिति की शाक्त साधना।"
                    : isJa
                    ? "シュリ・チャクラと神聖幾何学、観照的哲学に基づくシャークタの聖なる伝統。"
                    : "Discover the sacred tradition of Sri Chakra, Lalita Tripurasundari, and contemplative philosophy."}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FREE INTRO SESSION MODAL */}
      {introModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#071f14] border border-amber-400/40 rounded-3xl p-6 sm:p-8 text-[#fcf9f3] shadow-2xl">
            <button
              onClick={() => setIntroModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold tracking-wider text-amber-300 uppercase mb-2">
              {isHi ? "निःशुल्क परिचय सत्र" : isJa ? "無料ガイダンスセッション" : "Free Introduction Session"}
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              {isHi
                ? "ध्यान शिक्षक प्रशिक्षण: परिचय एवं मार्गदर्शन"
                : isJa
                ? "瞑想指導者養成プログラム：ガイダンス＆オリエンテーション"
                : "Meditation Teacher Training: Overview & Guidance"}
            </h3>
            <p className="text-xs sm:text-sm text-surface-container-high/90 mb-5 leading-relaxed">
              {isHi
                ? "8 मॉड्यूल्स की संरचना, व्यक्तिगत अभ्यास की गहराई, एवं सत्र संचालन के सिद्धांतों की संक्षिप्त झलक।"
                : isJa
                ? "全8モジュールの概要、自己のサダナの深め方、および安全な瞑想指導法のポイントを解説します。"
                : "A 20-minute orientation on the 8 modules, establishing daily practice discipline, and holding ethical contemplative space."}
            </p>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-amber-400/30 bg-black flex items-center justify-center group shadow-inner mb-5">
              <img
                src="/images/meditation_hall.jpg"
                alt="Meditation Session Preview"
                className="w-full h-full object-cover opacity-60"
              />
              <a
                href="#enrollment"
                onClick={() => setIntroModalOpen(false)}
                className="relative z-10 w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-[#061910] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </a>
              <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-200">
                Orientation Preview • 20 Minutes
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-amber-200/80">
                {isHi ? "नियमित लाइव वेबिनार आयोजित किए जाते हैं" : isJa ? "定期的にライブウェビナーを開催中" : "Live interactive webinars scheduled monthly"}
              </span>
              <button
                type="button"
                onClick={() => setIntroModalOpen(false)}
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
