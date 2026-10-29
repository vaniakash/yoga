import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocial } from "@/components/FloatingSocial";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;

  const isHi = locale === "hi";
  const isJa = locale === "ja";

  const title = isHi
    ? "श्री ध्यान आश्रम | हिमालयी तपोभूमि एवं साधना केंद्र, उत्तरकाशी"
    : isJa
    ? "シュリディヤン・アシュラム | Shridhyan Ashram • ヒマラヤ瞑想リトリート"
    : "Shridhyan Ashram | Himalayan Spiritual Retreat & Tapobhoomi, Uttarkashi";

  const description = isHi
    ? "श्री ध्यान आश्रम — उत्तरकाशी (हिमालय) स्थित पावन तपोभूमि। परम पूज्य स्वामी जी महाराज के मार्गदर्शन में प्रामाणिक ध्यान, मौन एवं साधना को समर्पित।"
    : isJa
    ? "シュリディヤン・アシュラム — 北インド・ウッタラーカーシーに位置するヒマラヤの静寂な修行地。本格的な瞑想、サダナ、師弟相承の伝統を継承するアシュラム。"
    : "Shridhyan Ashram — a sacred spiritual retreat in Uttarkashi, Himalayas, dedicated to authentic meditation, sadhana, and the Guru-Shishya tradition.";

  return {
    title: {
      default: title,
      template: isHi
        ? "%s | श्री ध्यान आश्रम"
        : isJa
        ? "%s | シュリディヤン・アシュラム"
        : "%s | Shridhyan Ashram",
    },
    description,
    keywords: [
      "Shridhyan Ashram",
      "श्री ध्यान आश्रम",
      "Himalayan Spiritual Retreat",
      "Uttarkashi Ashram",
      "Meditation in Himalayas",
      "Tapobhoomi",
      "Swami Ji Maharaj",
      "Vedic Bio Healing",
      "Shri Vidya Sadhana",
      "Silent Meditation Retreat",
    ],
    authors: [{ name: "Shridhyan Ashram" }],
    creator: "Shridhyan Ashram",
    publisher: "Shridhyan Ashram",
    icons: {
      icon: [
        { url: "/images/two-removebg-preview.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      shortcut: "/images/two-removebg-preview.svg",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
      title,
      description,
      type: "website",
      locale: isHi ? "hi_IN" : isJa ? "ja_JP" : "en_US",
      siteName: isHi ? "श्री ध्यान आश्रम" : "Shridhyan Ashram",
      images: [
        {
          url: "/images/two-removebg-preview.svg",
          width: 500,
          height: 500,
          alt: "Shridhyan Ashram Sacred Emblem Logo",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/images/two-removebg-preview.svg"],
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Custom Favicon & Web App Icons */}
        <link rel="icon" type="image/svg+xml" href="/images/two-removebg-preview.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#061910" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <AuthProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="flex-1">{props.children}</main>
            <Footer />
            <FloatingSocial />
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
