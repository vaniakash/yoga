import type { Metadata } from 'next';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;

  const isHi = locale === 'hi';
  const isJa = locale === 'ja';

  const title = isHi
    ? 'ध्यान शिक्षक प्रशिक्षण'
    : isJa
    ? '瞑想指導者育成トレーニング'
    : 'Meditation Teacher Training';

  const description = isHi
    ? 'व्यक्तिगत साधना से दूसरों को ध्यान में मार्गदर्शन देने तक — पारंपरिक हिमालयी ज्ञान, श्वास चेतना और एकाग्रता पर आधारित प्रामाणिक ध्यान शिक्षक प्रशिक्षण कार्यक्रम।'
    : isJa
    ? '個人の瞑想修練から指導者へ。伝統的なヒマラヤの叡智、呼吸の意識化、集中法に基づき、責任ある瞑想指導法を体系的に学ぶトレーニングプログラム。'
    : 'Develop a deeper understanding of meditation, breath awareness, concentration, and contemplative practices through structured learning and guidance rooted in traditional wisdom.';

  return {
    title,
    description,
    keywords: [
      'Meditation Teacher Training',
      'Learn to Teach Meditation',
      'Himalayan Meditation',
      'Dhyana Yoga',
      'Mindfulness Teacher Certification',
      'Shridhyan Ashram Uttarkashi',
      'ध्यान शिक्षक प्रशिक्षण',
      '瞑想指導者養成'
    ],
    openGraph: {
      title,
      description,
      url: `https://shridhyan.com/${locale}/courses/meditation-teacher-training`,
      images: [
        {
          url: '/images/meditation_hall.jpg',
          width: 1200,
          height: 630,
          alt: 'Shridhyan Ashram Meditation Teacher Training'
        }
      ]
    },
    alternates: {
      canonical: `https://shridhyan.com/${locale}/courses/meditation-teacher-training`
    }
  };
}

export default function MeditationTeacherTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
