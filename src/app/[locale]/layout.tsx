import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocial } from "@/components/FloatingSocial";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shridhyan Ashram | Himalayan Spiritual Retreat",
  description:
    "Shridhyan Ashram — a sacred spiritual retreat in Mathali, Uttarkashi, Himalayas, dedicated to authentic meditation, sadhana, and the Guru-Shishya tradition.",
  openGraph: {
    title: "Shridhyan Ashram",
    description: "A sacred spiritual retreat in Mathali, Uttarkashi, Himalayas.",
    type: "website",
    locale: "hi_IN",
  },
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{props.children}</main>
          <Footer />
          <FloatingSocial />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
