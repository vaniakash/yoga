import type { Metadata } from 'next';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;

  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const title = isHi
    ? 'श्री विद्या परंपरा'
    : isJa
    ? 'シュリ・ヴィディヤ伝統プログラム'
    : 'Shri Vidya Program';

  const description = isHi
    ? 'ललिता त्रिपुरसुन्दरी, श्री चक्र एवं पवित्र ज्यामिति की पावन शाक्त परंपरा — दार्शनिक चिंतन, पवित्र ध्वनि एवं गुरु-शिष्य परंपरा के सान्निध्य में श्री विद्या का अध्ययन।'
    : isJa
    ? 'ラリター・トリプラスンダリー女神、シュリ・チャクラ（神聖幾何学）、マントラ哲学の深遠な探求。正統な師弟相承の導きによるシュリ・ヴィディヤ入門講座。'
    : 'Discover the sacred tradition of Shri Vidya, Lalita Tripurasundari, Sri Chakra sacred geometry, mantra, and contemplative philosophy at Shridhyan Ashram.';

  return {
    title,
    description,
    keywords: [
      'Shri Vidya',
      'Sri Chakra',
      'Sri Yantra',
      'Lalita Tripurasundari',
      'Shakta Tradition',
      'Sacred Geometry',
      'Shridhyan Ashram',
      'श्री विद्या',
      'श्री चक्र साधना'
    ],
    openGraph: {
      title,
      description,
      url: `https://shridhyan.com/${locale}/courses/shri-vidya`,
      images: [
        {
          url: '/images/sri_chakra.jpg',
          width: 1200,
          height: 630,
          alt: 'Sacred Sri Chakra - Shridhyan Ashram'
        }
      ]
    },
    alternates: {
      canonical: `https://shridhyan.com/${locale}/courses/shri-vidya`
    }
  };
}

export default function ShriVidyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
