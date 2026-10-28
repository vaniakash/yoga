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
  Sun,
  Lock,
  Layers,
  CircleDot
} from 'lucide-react';

export default function ShriVidyaPage() {
  const locale = useLocale();
  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeModule, setActiveModule] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Philosophy & Symbolism',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Shri Vidya Study Inquiry: ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Course: Shri Vidya Sacred Tradition Program\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPrimary Area of Interest: ${formData.interest}\nMessage / Inquiry:\n${formData.message}`
    );
    window.location.href = `mailto:shridhyan.com@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const coreThemes = [
    {
      title: isHi ? "देवी एवं दिव्य शक्ति की चेतना" : isJa ? "女神と神聖なる女性性（チティ・シャクティ）" : "Devi & Divine Feminine Consciousness",
      desc: isHi
        ? "परम चेतना को जगन्माता के रूप में देखना — सृष्टि, स्थिति और संहार की अधिष्ठात्री शक्ति का दार्शनिक अवगाहन।"
        : isJa
        ? "最高意識を宇宙の母（ジャガンマーター）として捉え、創造・維持・解消を司る神聖な根源的エネルギーを省察します。"
        : "Understanding Supreme Consciousness as the Divine Mother — exploring the metaphysical nature of cosmic power, compassion, and awareness."
    },
    {
      title: isHi ? "श्री चक्र: ब्रह्मांडीय ज्यामिति" : isJa ? "シュリ・チャクラ：聖なる宇宙幾何学" : "Sri Chakra as Sacred Geometry",
      desc: isHi
        ? "नौ परस्पर जुड़े त्रिकोणों से निर्मित श्री चक्र, जो सूक्ष्म शरीर और वृहद् ब्रह्मांड का समरूप ज्यामितीय मानचित्र है।"
        : isJa
        ? "9つの重なり合う三角形によって構成されるシュリ・チャクラ。小宇宙（人間）と大宇宙が完全に照応する聖なる幾何学的象徴です。"
        : "The nine interlocking triangles of the Sri Chakra as a precise metaphysical map representing the macrocosm and the human subtle body."
    },
    {
      title: isHi ? "मंत्र एवं अंतर्ध्वनि विज्ञान" : isJa ? "マントラと内なる響きの観想" : "Mantra & Contemplative Sound",
      desc: isHi
        ? "शब्द-ब्रह्म एवं नाद की परंपरा। सार्वजनिक अध्ययन में केवल सैद्धांतिक ध्वनि-विज्ञान व एकाग्रता का विचार होता है; गुप्त मंत्र गोपनीय रहते हैं।"
        : isJa
        ? "聖なる音声（シャブダ・ブラフマン）と微細なナーダ（内なる響き）の探求。一般講座では哲学的基礎のみを扱い、秘伝のマントラは公表されません。"
        : "The vibratory nature of consciousness. Introductory public study covers philosophical fundamentals; secret initiation mantras are strictly protected."
    },
    {
      title: isHi ? "अनुष्ठान एवं अंतर्मुखी चिंतन" : isJa ? "儀礼と内面的観照の調和" : "Ritual, Philosophy & Inner Reflection",
      desc: isHi
        ? "बाह्य पूजा और प्रतीकों को अंतर्मुखी ध्यान में रूपांतरित करने का विज्ञान — अंतर्याग (इनर वर्शिप) की महत्ता।"
        : isJa
        ? "外的な象徴や儀礼の真意を理解し、それを内面的な瞑想（アンタルヤーガ）へと昇華させる伝統的アプローチ。"
        : "The profound transition from external ritual symbology into silent, internalized contemplative communion (Antaryaga)."
    },
    {
      title: isHi ? "गुरु-शिष्य परंपरा की अनिवार्यता" : isJa ? "師弟相承（グル・シシャ・パランパラ）の重要性" : "Lineage & Qualified Guidance",
      desc: isHi
        ? "श्री विद्या का सच्चा मर्म पुस्तकों से नहीं, अपितु योग्य व सिद्ध गुरु के मार्गदर्शन और आध्यात्मिक सान्निध्य में ही संभव है।"
        : isJa
        ? "シュリ・ヴィディヤの本質は書籍のみから得ることはできず、正統な系譜を受け継ぐ資格ある指導者のもとで敬虔に学ばれます。"
        : "The foundational principle that Shri Vidya cannot be mastered through casual reading alone, requiring reverent guidance within traditional lineage."
    }
  ];

  const coreAreasOfStudy = [
    {
      icon: Sun,
      title: isHi ? "ललिता त्रिपुरसुन्दरी" : isJa ? "ラリター・トリプラスンダリー" : "Lalita Tripurasundari",
      desc: isHi
        ? "देवी के तीन रूपों (त्रिपुरा) — जाग्रत, स्वप्न, सुषुप्ति तथा महाकारण चेतना में उनकी सत्ता का दार्शनिक अध्ययन।"
        : isJa
        ? "目覚め、夢、深層睡眠の3つの状態を超越する至高の意識としてのラリター女神の象徴性と哲学的意義。"
        : "Introduction to the presiding deity of Shri Vidya, embodying transcendent beauty, pure consciousness, and the three states of awareness."
    },
    {
      icon: CircleDot,
      title: isHi ? "श्री चक्र संरचना एवं प्रतीक" : isJa ? "シュリ・チャクラの象徴構造" : "Sri Chakra Structure",
      desc: isHi
        ? "बिन्दु, त्रिकोण, अष्टकोण, अन्तर्दशार, बहिर्दशार, चतुर्दशार, अष्टदल, षोडशदल एवं भूपुर का क्रमबद्ध प्रतीकात्मक बोध।"
        : isJa
        ? "ビンドゥ（中心点）から外側のブープラに至る9つの重層構造（アーヴァラナ）の象徴的意味の入門解説。"
        : "A structured overview of the nine circuits (Avaranas) from the outer Bhupura enclosure to the central Bindu of supreme oneness."
    },
    {
      icon: Lock,
      title: isHi ? "मंत्र एवं पावन ध्वनि (सार्वजनिक मर्यादा)" : isJa ? "マントラと聖なる音声（公開倫理）" : "Mantra & Sacred Sound Ethics",
      desc: isHi
        ? "मंत्र विज्ञान के दार्शनिक सिद्धांत। सार्वजनिक पाठ्यक्रम में कोई गोपनीय या दीक्षा-सापेक्ष मंत्र प्रकट नहीं किया जाता।"
        : isJa
        ? "マントラが意識に及ぼす影響の哲学的概論。伝授（イニシエーション）を要する秘伝マントラは一切公開されません。"
        : "Philosophical exploration of vibrational resonance. Restricted initiation-dependent mantras are respectfully protected from public disclosure."
    },
    {
      icon: BookOpen,
      title: isHi ? "दार्शनिक आधार एवं शास्त्र" : isJa ? "哲学的文献と古典の基盤" : "Philosophy & Contemplation",
      desc: isHi
        ? "शाक्त अद्वैत, ललिता सहस्रनाम के दार्शनिक सूत्र, भावनोपनिषद् एवं कश्मीर शैव दर्शन के साथ तात्विक साम्य।"
        : isJa
        ? "シャークタ・アドヴァイタ（不二一元論）、バーヴァノーパニシャッド、および伝統的瞑想テキストの概説。"
        : "Foundations in Shakta Advaita non-dual philosophy, contemplative insights from Bhavanopanishad, and classical commentaries."
    },
    {
      icon: Users,
      title: isHi ? "गुरु-शिष्य परंपरा का परिप्रेक्ष्य" : isJa ? "系譜の伝統と学びの姿勢" : "Guru-Shishya Parampara",
      desc: isHi
        ? "पारंपरिक मर्यादा, साधना का अधिकार, गुरु कृपा की महत्ता तथा गंभीर साधक के लिए पात्रता के मानदंड।"
        : isJa
        ? "伝統の継承、修練の倫理的境界、資格ある指導者との信頼関係および段階的な学びの心得。"
        : "The sacred protocol of lineage transmission, student readiness (Adhikara), and preserving traditional sanctity."
    }
  ];

  const learningModules = [
    {
      num: 1,
      name: isHi ? "मॉड्यूल 1" : isJa ? "モジュール 1" : "Module 1",
      title: isHi ? "शाक्त परंपराओं का परिचय" : isJa ? "シャークタ伝統の概説と歴史的背景" : "Introduction to Shakta Traditions",
      summary: isHi
        ? "भारतीय दर्शन में शाक्त धारा का उद्भव, इतिहास एवं व्यापक परिदृश्य में श्री विद्या का विशेष स्थान।"
        : isJa
        ? "インド思想史におけるシャークタ伝統の潮流、その歴史的変遷とシュリ・ヴィディヤの特筆すべき位置づけ。"
        : "Historical and philosophical overview of Shakta traditions in Indian spiritual thought and the unique position of Shri Vidya."
    },
    {
      num: 2,
      name: isHi ? "मॉड्यूल 2" : isJa ? "モジュール 2" : "Module 2",
      title: isHi ? "ललिता त्रिपुरसुन्दरी का रहस्य" : isJa ? "ラリター・トリプラスンダリーの象徴性" : "Lalita Tripurasundari Symbolism",
      summary: isHi
        ? "देवी के पारंपरिक स्वरूप, अंकुश, पाश, धनुष और बाण के आध्यात्मिक अर्थ तथा भक्ति व ज्ञान का समन्वय।"
        : isJa
        ? "伝統的な図像学における持物（弓、矢、手綱、鉤）の内面的象徴性と、信仰と知性の統合。"
        : "Traditional iconography and contemplative symbology of the Divine Mother, integrating refined devotion with non-dual philosophy."
    },
    {
      num: 3,
      name: isHi ? "मॉड्यूल 3" : isJa ? "モジュール 3" : "Module 3",
      title: isHi ? "श्री चक्र ज्यामिति एवं नौ आवरण" : isJa ? "シュリ・チャクラの幾何学と9つの領域" : "Sri Chakra Geometry & Symbolism",
      summary: isHi
        ? "श्री चक्र की गणितीय व ज्यामितीय संरचना, शिव-शक्ति त्रिकोणों का मिलन और नौ आवरणों का प्रारंभिक परिचय।"
        : isJa
        ? "シヴァ（上向き）とシャクティ（下向き）の三角形の調和、幾何学的構造の解説、および9つの領域の象徴的理解。"
        : "Geometric construction, interlocking upward Shiva and downward Shakti triangles, and symbolic meaning of the nine concentric layers."
    },
    {
      num: 4,
      name: isHi ? "मॉड्यूल 4" : isJa ? "モジュール 4" : "Module 4",
      title: isHi ? "शास्त्रीय ग्रंथ एवं दार्शनिक आधार" : isJa ? "古典文献と哲学的基盤の講読" : "Textual & Philosophical Foundations",
      summary: isHi
        ? "सौंदर्य लहरी, भावनोपनिषद्, ललिता त्रिशती एवं परशुराम कल्पसूत्र के सार्वजनिक अंशों का अध्ययन।"
        : isJa
        ? "サウンダリヤ・ラハリー、バーヴァノーパニシャッドなど古典テキストの公開可能な教説の紹介と解説。"
        : "Introduction to classical scriptures such as Saundarya Lahari and Bhavanopanishad, distinguishing historical facts from living lore."
    },
    {
      num: 5,
      name: isHi ? "मॉड्यूल 5" : isJa ? "モジュール 5" : "Module 5",
      title: isHi ? "मंत्र, नाद एवं अंतर्मुखी धारणा" : isJa ? "マントラ・ナーダと内面化された観想" : "Mantra & Contemplative Principles",
      summary: isHi
        ? "ध्वनि का चेतना पर प्रभाव, गायत्री एवं मातृकाओं का दार्शनिक संदर्भ, तथा योग्य मार्गदर्शन में दीक्षा का महत्व।"
        : isJa
        ? "音霊が心身に及ぼす影響、母音・子音の聖なる象徴、そして正式な伝授（ディークシャー）が必要となる段階についての説明。"
        : "Publicly accessible concepts of sacred sound resonance, seed syllables, and understanding when formal initiation (Diksha) is required."
    },
    {
      num: 6,
      name: isHi ? "मॉड्यूल 6" : isJa ? "モジュール 6" : "Module 6",
      title: isHi ? "साधना मर्यादा, आचार एवं सतत मार्गदर्शन" : isJa ? "修練の倫理・規律と継続的指導" : "Practice, Ethics & Continued Guidance",
      summary: isHi
        ? "पारंपरिक सीमाओं का सम्मान, अनधिकृत प्रयोग से बचाव, जीवन में शुचिता तथा आश्रम के सानिध्य में अग्रिम अध्ययन की रूपरेखा।"
        : isJa
        ? "伝統の節度を守る倫理、無資格な実践の戒め、日常生活における調和、および本格的な探求を続けるための指針。"
        : "Respecting sacred boundaries, ethical integrity, daily contemplative mindfulness, and prospective pathways for sincere seekers."
    }
  ];

  const faqs = [
    {
      q: isHi ? "श्री विद्या क्या है?" : isJa ? "シュリ・ヴィディヤとは何ですか？" : "What is Shri Vidya?",
      a: isHi
        ? "श्री विद्या सनातन धर्म की प्राचीन शाक्त परंपरा का अत्यंत सम्मानित, दार्शनिक एवं ध्यान-प्रधान मार्ग है। इसमें परम चेतना को ललिता त्रिपुरसुन्दरी के रूप में और सृष्टि की सूक्ष्म रचना को श्री चक्र (पवित्र ज्यामिति) के रूप में अनुभव किया जाता है।"
        : isJa
        ? "シュリ・ヴィディヤは、インドの伝統的なシャークタ（女神信仰・エネルギー哲学）において最も崇高とされる探求体系です。至高の意識を宇宙の母（ラリター女神）とし、神聖幾何学シュリ・チャクラを通じて宇宙と自己の合一を観想します。"
        : "Shri Vidya is one of the most revered, contemplative, and philosophically sophisticated traditions within Shakta spiritual heritage. It venerates Supreme Consciousness as Lalita Tripurasundari through the sacred geometric matrix of the Sri Chakra."
    },
    {
      q: isHi ? "क्या इस अध्ययन के लिए पूर्व ज्ञान आवश्यक है?" : isJa ? "事前の専門知識は必要ですか？" : "Do I need prior knowledge?",
      a: isHi
        ? "नहीं, इस परिचयात्मक कार्यक्रम के लिए किसी पूर्व ज्ञान की आवश्यकता नहीं है। भारतीय दर्शन, ध्यान या पवित्र प्रतीकों में गहरी रुचि एवं आदर भाव रखने वाले सभी साधक इसमें भाग ले सकते हैं।"
        : isJa
        ? "いいえ、事前の高度な知識は必須ではありません。インド哲学、瞑想、あるいは神聖幾何学の象徴性に真摯な関心と敬意を持つすべての方にご参加いただけます。"
        : "No prior technical background is required for this foundational program. A sincere interest in Indian philosophy, meditation, and a respectful attitude toward traditional sacred arts is sufficient."
    },
    {
      q: isHi ? "क्या यह प्रारंभिक या उन्नत पाठ्यक्रम है?" : isJa ? "これは初級向けですか、それとも上級者向けですか？" : "Is this an introductory or advanced program?",
      a: isHi
        ? "यह एक सुव्यवस्थित परिचयात्मक एवं दार्शनिक आधारभूत कार्यक्रम है। यह विषय की गंभीर समझ प्रदान करता है ताकि साधक बिना किसी भ्रांति या अंधविश्वास के श्री विद्या के शास्त्रीय रूप को समझ सकें।"
        : isJa
        ? "体系的な「基礎・導入プログラム」です。神秘主義的な誤解を排し、歴史的・哲学的・観照的側面から正統な理解を得るための強固な土台を築きます。"
        : "This is a structured foundational and philosophical study designed to demystify the tradition, grounding students in authentic textual, geometric, and contemplative clarity."
    },
    {
      q: isHi ? "क्या इस कार्यक्रम में दीक्षा शामिल है?" : isJa ? "このプログラムに正式なイニシエーション（伝授）は含まれますか？" : "Does the program include initiation?",
      a: isHi
        ? "नहीं। यह एक शैक्षणिक एवं दार्शनिक अध्ययन कार्यक्रम है। औपचारिक दीक्षा (दीक्षा संस्कार) केवल योग्य गुरु द्वारा व्यक्तिगत पात्रता, दीर्घकालिक सान्निध्य और निष्ठा की परीक्षा के उपरांत ही दी जाती है।"
        : isJa
        ? "含まれません。本講座は学問的・観照的な教育プログラムです。正式な秘伝伝授（ディークシャー）は、長期的な実践と指導者による個別の適性確認を経てのみ行われます。"
        : "No. This program is educational and contemplative in scope. Formal initiation (Diksha) is never conducted casually online; it is a sacred, private sacrament granted solely by the Guru after in-person evaluation."
    },
    {
      q: isHi ? "क्या इसमें गोपनीय मंत्र और कर्मकांडीय निर्देश शामिल हैं?" : isJa ? "秘伝マントラや複雑な儀礼の手順は教えられますか？" : "Are mantras and ritual instructions included?",
      a: isHi
        ? "नहीं। पारंपरिक मर्यादा के अनुसार, सार्वजनिक रूप से कोई भी गोपनीय मंत्र या तांत्रिक अनुष्ठान प्रकट नहीं किया जाता। यह पाठ्यक्रम केवल सार्वजनिक रूप से मान्य दार्शनिक, ज्यामितीय एवं ध्यान सिद्धांतों पर केंद्रित है।"
        : isJa
        ? "いいえ。伝統的な戒律に基づき、秘伝のマントラや密教的儀式の手順は一般公開されません。本コースでは公開が許可されている哲学的概念、幾何学の理解、内面的観照に焦点を当てます。"
        : "No. In strict accordance with tradition, secret initiation mantras and complex ritual procedures are protected. The program focuses entirely on publicly accessible philosophical, geometric, and inner meditative principles."
    },
    {
      q: isHi ? "यह पाठ्यक्रम ऑनलाइन है या प्रत्यक्ष रूप से?" : isJa ? "講座はオンラインですか、それとも対面ですか？" : "Is the course online or in person?",
      a: isHi
        ? "दार्शनिक व्याख्यान एवं परिचर्चाएं ऑनलाइन आयोजित की जाती हैं। इसके अतिरिक्त आश्रम में विशेष सान्निध्य सत्र व दर्शन उत्तरकाशी में आयोजित होते हैं।"
        : isJa
        ? "理論・哲学の講義はオンラインで開催されます。さらに希望者には、ウッタラーカーシーのアシュラム現地での参拝や直接のガイダンスの機会も案内されます。"
        : "The theoretical and philosophical lectures are conducted via interactive online seminars, accompanied by occasional guided retreats at our Ashram in Uttarkashi."
    },
    {
      q: isHi ? "मैं अध्ययन के लिए कैसे संपर्क या नामांकन कर सकता हूँ?" : isJa ? "受講申し込みや相談はどのように行いますか？" : "How do I enquire about enrollment?",
      a: isHi
        ? "आप नीचे दिए गए फॉर्म को भरकर अपनी जिज्ञासा एवं पृष्ठभूमि साझा कर सकते हैं। आश्रम प्रतिनिधि आपके प्रश्नों के साथ संपर्क करेंगे।"
        : isJa
        ? "ページ下部のお問い合わせフォームに必要事項とご関心をご記入の上送信してください。担当者より詳細なご案内を返信いたします。"
        : "You can submit an inquiry through the form below with your background and motivation. Our ashram coordinators will review your submission and reply with schedule details."
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
            {isHi ? "श्री विद्या परंपरा" : isJa ? "シュリ・ヴィディヤ伝統" : "Shri Vidya"}
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
                    ? "पारंपरिक शाक्त ज्ञान"
                    : isJa
                    ? "伝統的シャークタの叡智"
                    : "TRADITIONAL SHAKTA WISDOM"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight leading-[1.15] mb-5">
                {isHi
                  ? "श्री विद्या की पावन परंपरा का अन्वेषण करें"
                  : isJa
                  ? "シュリ・ヴィディヤの神聖なる伝統を探求する"
                  : "Explore the Sacred Tradition of Shri Vidya"}
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans mb-8 max-w-2xl">
                {isHi
                  ? "ललिता त्रिपुरसुन्दरी, श्री चक्र, मंत्र और चेतना तथा पवित्र ज्यामिति के संबंध से जुड़ी दार्शनिक एवं आध्यात्मिक परंपराओं का सुव्यवस्थित अध्ययन।"
                  : isJa
                  ? "ラリター・トリプラスンダリー女神、シュリ・チャクラ、マントラ、そして意識と神聖幾何学の結びつきを探る、体系的なシュリ・ヴィディヤ入門プログラム。"
                  : "Discover the philosophical and spiritual traditions associated with Lalita Tripurasundari, the Sri Chakra, mantra, and the relationship between consciousness and sacred geometry through a structured introduction to Shri Vidya."}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#structure"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>
                    {isHi ? "पाठ्यक्रम संरचना देखें" : isJa ? "プログラムの構成を見る" : "Explore the Program"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#inquiry"
                  className="px-6 py-3.5 rounded-xl bg-surface-container-highest/60 hover:bg-surface-container-highest border border-outline-variant text-primary font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-amber-600" />
                  <span>
                    {isHi ? "सीखने के लिए पूछताछ करें" : isJa ? "受講に関するお問い合わせ" : "Enquire About Learning"}
                  </span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-stone-700 leading-snug">
                    {isHi ? "शास्त्रीय शाक्त दर्शन" : isJa ? "正統なシャークタ哲学" : "Classical Shakta Philosophy"}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-stone-700 leading-snug">
                    {isHi ? "श्री चक्र पवित्र ज्यामिति" : isJa ? "シュリ・チャクラ神聖幾何学" : "Sri Chakra Sacred Geometry"}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-stone-700 leading-snug">
                    {isHi ? "गुरु-परंपरा का आदर" : isJa ? "師弟相承の伝統への敬意" : "Reverence for Lineage"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-stone-900 group">
                <img
                  src="/images/sri_chakra.jpg"
                  alt="Sacred Sri Chakra Yantra in Golden Light"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                    {isHi ? "ब्रह्मांडीय महायंत्र" : isJa ? "至高の宇宙ヤントラ" : "Cosmic Mahayantra"}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {isHi ? "पवित्र श्री चक्र एवं नाद चेतना" : isJa ? "神聖なるシュリ・チャクラと音響意識" : "Sacred Sri Chakra & Sound Vibrations"}
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    {isHi
                      ? "शिव और शक्ति के दिव्य संयोग तथा नौ आवरणों का सूक्ष्म दार्शनिक मानचित्र।"
                      : isJa
                      ? "シヴァとシャクティの調和、意識と物質が融合する深遠なる幾何学の象徴。"
                      : "The non-dual union of Shiva and Shakti mapped across nine concentric sacred circuits."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION TO SHRI VIDYA */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "परंपरा परिचय" : isJa ? "伝統の紹介" : "INTRODUCTION TO SHRI VIDYA"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-4">
              {isHi
                ? "भक्ति, दर्शन एवं अंतर्मुखी चिंतन की परंपरा"
                : isJa
                ? "信仰、哲学、そして観照の伝統"
                : "A Tradition of Devotion, Philosophy, and Contemplation"}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
              {isHi
                ? "श्री विद्या भारतीय साधना जगत की अत्यंत परिष्कृत और गुह्य परंपरा है, जो ललिता त्रिपुरसुन्दरी की आराधना से जुड़ी है। यह मात्र अनुष्ठान नहीं, बल्कि चेतना, ज्यामिति, और शब्द-ब्रह्म का अद्वितीय समन्वय है।"
                : isJa
                ? "シュリ・ヴィディヤは、最高美と至高意識を体現するラリター女神に捧げられた、深遠なるシャークタ精神の頂点です。単なる儀式主義を超え、幾何学、マントラ、そして内面的観想が美しく調和した探求体系です。"
                : "Shri Vidya stands as one of the most refined traditions within Shakta spiritual practice, associated with Lalita Tripurasundari. It represents a sublime synthesis of devotion, non-dual metaphysics, sacred geometry, and silent inner contemplation."}
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {coreThemes.map((th, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-base mb-1">
                    {th.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {th.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Restraint & Respect Box */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300/50 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>
                {isHi ? "पारंपरिक मर्यादा एवं सार्वजनिक मर्यादा: " : isJa ? "伝統的守秘義務と公開倫理: " : "Traditional Boundary & Public Disclosure: "}
              </strong>
              {isHi
                ? "श्री विद्या परंपरा में कुछ विशिष्ट मंत्र, दीक्षा विधान और तांत्रिक क्रियाएं गोपनीय मानी गई हैं, जिनका प्रकाश केवल गुरु-शिष्य सान्निध्य में ही संभव है। हमारा सार्वजनिक कार्यक्रम केवल दार्शनिक, ऐतिहासिक एवं प्रतीकात्मक समझ प्रदान करता है, ताकि कोई भ्रांति न रहे।"
                : isJa
                ? "シュリ・ヴィディヤの伝統において、特定の秘伝マントラや直伝の儀式は機密とされ、公の場や書籍で明かされることはありません。本公開講座は学術的・哲学的理解および象徴解釈に徹し、伝統の尊厳を守ります。"
                : "In Shri Vidya, restricted mantra content and initiation-specific sacraments are strictly protected by tradition. This introductory program focuses exclusively on philosophical foundations, geometry, and symbolism, maintaining complete fidelity to traditional ethics."}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE AREAS OF STUDY */}
      <section className="py-20 bg-[#f7f3ea] border-y border-[#e8e2d4]">
        <div className="max-w-6xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "अध्ययन के मुख्य क्षेत्र" : isJa ? "主要な探求領域" : "CORE AREAS OF STUDY"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
              {isHi
                ? "श्री विद्या के पांच मौलिक आयाम"
                : isJa
                ? "シュリ・ヴィディヤの5つの核心領域"
                : "Five Pillars of Study"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreAreasOfStudy.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold font-serif text-primary text-lg mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: SUGGESTED LEARNING STRUCTURE (MODULES 1 TO 6) */}
      <section id="structure" className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "पाठ्यक्रम संरचना" : isJa ? "学習カリキュラム" : "SUGGESTED LEARNING STRUCTURE"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-3">
              {isHi
                ? "6 मॉड्यूल्स की सुव्यवस्थित अध्ययन यात्रा"
                : isJa
                ? "全6モジュールの体系的学習構成"
                : "The 6-Module Learning Pathway"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              {isHi
                ? "शाक्त परंपरा के ऐतिहासिक संदर्भ से लेकर श्री चक्र ज्यामिति, दर्शन और साधना मर्यादा तक।"
                : isJa
                ? "シャークタの歴史的背景から神聖幾何学の読解、古典哲学、そして修練の倫理に至る探求。"
                : "From historical context and Lalita Tripurasundari symbolism to Sri Chakra geometry and lineage ethics."}
            </p>
          </div>

          <div className="space-y-4">
            {learningModules.map((m, idx) => {
              const isOpen = activeModule === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 bg-surface-container-low overflow-hidden transition-all shadow-sm"
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
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                        {m.summary}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-500 text-center">
            {isHi
              ? "* गुरुजी द्वारा संपुष्ट किया जाता है कि कौन से विषय सार्वजनिक शिक्षण हेतु उपयुक्त हैं और कौन से व्यक्तिगत मार्गदर्शन या दीक्षा पर निर्भर हैं।"
              : isJa
              ? "※ どの講義項目が一般公開に適しており、どれが個別のガイダンスや伝授（イニシエーション）を要するかは、指導者が事前に確定・確認します。"
              : "* The instructor strictly confirms which topics are suitable for public intellectual teaching and which require personal initiation or direct guidance."}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO IS THIS PROGRAM FOR? */}
      <section className="py-20 bg-[#f6f2e8] border-t border-[#e8e2d4]">
        <div className="max-w-5xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "प्रतिभागी एवं पात्रता" : isJa ? "受講対象者" : "WHO IS THIS PROGRAM FOR?"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
              {isHi
                ? "यह कार्यक्रम किनके लिए उपयुक्त है?"
                : isJa
                ? "このプログラムが適している方"
                : "Who Should Explore This Program?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "भारतीय दर्शन के अध्येता" : isJa ? "インド哲学の研究者・学生" : "Students of Indian Philosophy"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "शाक्त अद्वैत, तांत्रिक दर्शन और परा-चेतना के सैद्धांतिक आधार को समझने के इच्छुक।"
                    : isJa
                    ? "シャークタの不二一元論やタントラ哲学の真髄を学問的・理論的に学びたい方。"
                    : "Scholars and seekers interested in Shakta non-dualism, metaphysics, and texts."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "शाक्त परंपरा के साधक" : isJa ? "シャークタ伝統の実践者" : "Shakta Practitioners"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "जो देवी आराधना और श्री विद्या के शास्त्रीय स्वरूप को गहराई से जानना चाहते हैं।"
                    : isJa
                    ? "女神崇拝や伝統的サダナを実践しており、より正統な教義を深めたい方。"
                    : "Devotees wishing to understand the authentic textual foundations of Devi worship."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "पवित्र ज्यामिति के प्रेमी" : isJa ? "神聖幾何学に関心のある方" : "Sacred Geometry Enthusiasts"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "श्री चक्र की गणितीय संरचना और ब्रह्मांडीय प्रतीकों के गूढ़ अर्थ में रुचि रखने वाले।"
                    : isJa
                    ? "シュリ・チャクラの幾何学的精緻さと宇宙論的シンボリズムを探求したい方。"
                    : "Those captivated by the mathematics, cosmic symbolism, and fractals of the Sri Chakra."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "गंभीर आध्यात्मिक जिज्ञासु" : isJa ? "真摯な精神的探求者" : "Sincere Spiritual Seekers"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "जो अंधविश्वासों और भ्रांतियों से दूर रहकर प्रामाणिक परंपरा से जुड़ना चाहते हैं।"
                    : isJa
                    ? "俗説や誇張された神秘主義を排し、本質的な霊的伝統に触れたい方。"
                    : "Seekers seeking genuine spiritual truth stripped of commercialized sensationalism."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "वर्तमान अभ्यासी" : isJa ? "既存の瞑想・修行者" : "Existing Practitioners"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "जिन्होंने मंत्र या ध्यान का अभ्यास किया है और सुव्यवस्थित शास्त्रीय समझ चाहते हैं।"
                    : isJa
                    ? "既に瞑想やマントラの実践があり、体系的な哲学的裏付けを得たい方。"
                    : "Meditators wishing to ground their intuitive practice in structured classical wisdom."}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-primary text-sm mb-1">
                  {isHi ? "कला एवं संस्कृति प्रेमी" : isJa ? "伝統文化・芸術の研究者" : "Cultural Heritage Explorers"}
                </h3>
                <p className="text-xs text-stone-600">
                  {isHi
                    ? "भारत की पावन मंदिर स्थापत्य, यन्त्र विज्ञान एवं गूढ़ कला परंपरा के प्रशंसक।"
                    : isJa
                    ? "寺院建築、ヤントラ図像、およびインドの深遠な伝統文化を深く知りたい方。"
                    : "Appreciators of traditional temple architecture, yantras, and cultural iconography."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LEARNING WITH GUIDANCE */}
      <section className="py-20 bg-surface">
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
                  {isHi ? "प्रामाणिक तपोनिष्ठ सानिध्य" : isJa ? "正統な導き" : "Authentic Himalayan Guidance"}
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-widest text-tertiary font-semibold">
                {isHi ? "मार्गदर्शन एवं मर्यादा" : isJa ? "指導体制と伝統の遵守" : "LEARNING WITH GUIDANCE"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1 mb-4">
                {isHi
                  ? "पारंपरिक मर्यादा के सान्निध्य में अध्ययन"
                  : isJa
                  ? "伝統への敬意と資格ある指導のもとで学ぶ"
                  : "Respecting Tradition Through Qualified Guidance"}
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-4">
                {isHi
                  ? "श्री ध्यान आश्रम में श्री विद्या का अध्ययन किसी व्यवसायिक पाठ्यक्रम की तरह नहीं, बल्कि पारंपरिक आदर और पात्रता (अधिकार) के अनुसार प्रस्तुत किया जाता है। गुरुजी का दृष्टिकोण अंधविश्वास से परे, विशुद्ध दार्शनिक चिंतन और मानसिक शुचिता पर आधारित है।"
                  : isJa
                  ? "シュリディヤン・アシュラムにおけるシュリ・ヴィディヤの探求は、安易な商業的講座とは一線を画します。受講生の精神的適性（アディカーラ）を重んじ、伝統的な敬虔さと学問的厳密さをもって指導されます。"
                  : "At Shridhyan Ashram, the study of Shri Vidya is approached not as a commercial offering, but as a sacred heritage requiring reverent intellectual preparation and mental purity under seasoned guidance."}
              </p>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong>{isHi ? "महत्वपूर्ण स्पष्टीकरण: " : isJa ? "ご留意事項: " : "Important Clarification: "}</strong>
                {isHi
                  ? "यह कार्यक्रम किसी स्वतः दीक्षा, गुरु पदवी या संप्रदाय प्रमाणन का दावा नहीं करता। वास्तविक दीक्षा और अधिकार केवल व्यक्तिगत साधना और गुरु के प्रत्यक्ष निर्णय पर ही निर्भर है।"
                  : isJa
                  ? "本プログラムの受講により、自動的に秘伝の受法資格や指導者認定が付与されるわけではありません。正式なディークシャーは師弟間の直接の信頼においてのみ授与されます。"
                  : "Enrollment in this course does not imply automatic lineage authorization, formal initiation, or certification unless individually confirmed in person by Guruji."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQS */}
      <section className="py-20 bg-[#f7f3ea] border-t border-[#e8e2d4]">
        <div className="max-w-4xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-tertiary uppercase">
              {isHi ? "प्रश्नोत्तरी" : isJa ? "よくある質問" : "FREQUENTLY ASKED QUESTIONS"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
              {isHi
                ? "श्री विद्या अध्ययन संबंधी प्रश्न"
                : isJa
                ? "シュリ・ヴィディヤ探求に関するQ&A"
                : "Questions & Clarifications"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-primary text-base sm:text-lg hover:bg-stone-50 transition-colors"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed border-t border-stone-100 bg-[#fdfbf7]">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA & INQUIRY FORM */}
      <section id="inquiry" className="py-20 bg-gradient-to-br from-[#0c2619] via-[#091f14] to-[#04120b] text-[#fcf9f3]">
        <div className="max-w-4xl mx-auto px-6 md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
              {isHi ? "पवित्र विद्या का आरंभ" : isJa ? "聖なる探求の第一歩" : "BEGIN YOUR EXPLORATION"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 mb-4">
              {isHi
                ? "श्री विद्या के पावन ज्ञान की ओर अग्रसर हों"
                : isJa
                ? "シュリ・ヴィディヤの深遠なる叡智に触れる"
                : "Begin Exploring the Wisdom of Shri Vidya"}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {isHi
                ? "आगामी परिचर्चा सत्रों, अध्ययन सामग्री अथवा आश्रम से संपर्क के लिए नीचे दिए गए फॉर्म के माध्यम से अपनी रुचि साझा करें।"
                : isJa
                ? "今後のセミナー日程、受講資格、または学習に関するご質問は、下記フォームよりお気軽にお問い合わせください。"
                : "Inquire about upcoming study cohorts, philosophical symposiums, or consult with the Ashram."}
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
                    {isHi ? "रुचि का मुख्य क्षेत्र" : isJa ? "ご関心のある主な領域" : "Primary Area of Interest"}
                  </label>
                  <select
                    className="w-full bg-[#0a2116] border border-amber-400/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="Philosophy & Symbolism">
                      {isHi ? "दर्शन एवं प्रतीक विज्ञान" : isJa ? "哲学とシンボリズム" : "Philosophy & Symbolism"}
                    </option>
                    <option value="Sri Chakra Geometry">
                      {isHi ? "श्री चक्र पवित्र ज्यामिति" : isJa ? "シュリ・チャクラ神聖幾何学" : "Sri Chakra Sacred Geometry"}
                    </option>
                    <option value="Textual Studies">
                      {isHi ? "शास्त्रीय ग्रंथ अध्ययन" : isJa ? "古典文献の研究" : "Classical Scriptural Studies"}
                    </option>
                    <option value="General Spiritual Inquiry">
                      {isHi ? "सामान्य आध्यात्मिक जिज्ञासा" : isJa ? "一般的な霊的探求" : "General Contemplative Inquiry"}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-amber-100/90 mb-1 font-medium">
                  {isHi ? "संदेश / जिज्ञासा" : isJa ? "メッセージ・ご質問" : "Message / Inquiry"}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    isHi
                      ? "श्री विद्या परंपरा में आपकी रुचि का कारण अथवा कोई विशिष्ट प्रश्न..."
                      : isJa
                      ? "シュリ・ヴィディヤに関心を持たれた動機やご質問をお書きください..."
                      : "Share your background, motivation, or questions about the study..."
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
                {isHi ? "पूछताछ एवं अध्ययन आवेदन भेजें" : isJa ? "お問い合わせ・学習申請を送信" : "Submit Study Inquiry"}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-amber-400/20 flex flex-wrap items-center justify-center gap-4 text-xs">
              <a href="#structure" className="text-amber-300 hover:underline">
                {isHi ? "पाठ्यक्रम संरचना" : isJa ? "カリキュラムを見る" : "Explore the Program"}
              </a>
              <span className="text-amber-400/40">•</span>
              <Link href="/#contact" className="text-amber-300 hover:underline">
                {isHi ? "आश्रम से सीधा संपर्क" : isJa ? "アシュラムへのお問い合わせ" : "Contact the Ashram"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: OTHER COURSES NAVIGATION */}
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
              href="/courses/meditation-teacher-training"
              className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-amber-400/60 transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-primary group-hover:text-amber-700 transition-colors">
                  {isHi ? "ध्यान शिक्षक प्रशिक्षण" : isJa ? "瞑想指導者育成トレーニング" : "Meditation Teacher Training"}
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  {isHi
                    ? "व्यक्तिगत साधना से दूसरों को ध्यान में मार्गदर्शन देने तक की 8-मॉड्यूल यात्रा।"
                    : isJa
                    ? "個人の瞑想修練から他者を導く指導者へ。全8モジュールの体系的プログラム。"
                    : "From personal practice to guiding others in meditation through traditional wisdom."}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
