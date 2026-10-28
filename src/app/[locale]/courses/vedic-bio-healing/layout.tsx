import type { Metadata } from 'next';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;

  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const title = isHi
    ? 'वैदिक बायो हीलिंग'
    : isJa
    ? 'ヴェーダ・バイオヒーリング'
    : 'Vedic Bio Healing';

  const description = isHi
    ? 'अथर्ववेद (काण्ड 4, सूक्त 13) की प्राचीन परंपराओं पर आधारित वैदिक बायो हीलिंग — मंत्रोच्चार, श्वास चेतना, ध्यान एवं स्पर्श-आधारित पारंपरिक साधना।'
    : isJa
    ? 'アタルヴァ・ヴェーダ（第4巻第13讃）の伝統に基づくヴェーダ・バイオヒーリング。マントラ、呼吸の気づき、手のエネルギー修練を学ぶ7日間の基礎講座。'
    : 'Explore traditional healing practices inspired by Atharvaveda, including mantra recitation, breath awareness, meditation, and touch-based spiritual practices, guided by decades of experience.';

  return {
    title,
    description,
    keywords: [
      'Vedic Bio Healing',
      'Atharvaveda Healing',
      'Kanda 4 Sukta 13',
      'Shivabhimarshana',
      'Prana Apana',
      'Shridhyan Ashram',
      'वैदिक बायो हीलिंग',
      'अथर्ववेद हीलिंग'
    ],
    openGraph: {
      title,
      description,
      url: `https://shridhyan.com/${locale}/courses/vedic-bio-healing`,
      images: [
        {
          url: '/images/shridhyan_hero.webp',
          width: 1200,
          height: 630,
          alt: 'Vedic Bio Healing - Shridhyan Ashram'
        }
      ]
    },
    alternates: {
      canonical: `https://shridhyan.com/${locale}/courses/vedic-bio-healing`
    }
  };
}

export default function VedicBioHealingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
