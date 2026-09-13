import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Serif_Devanagari } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "700"],
  variable: "--font-noto-devanagari",
});

export const metadata: Metadata = {
  title: "Kalap Gram Gurukulam Ashram | Narmada Spiritual Retreat",
  description:
    "Kalap Gram Gurukulam Ashram — a sacred spiritual retreat on the banks of Maa Narmada, dedicated to sadhana, meditation, yoga, seva and the Guru-Shishya tradition.",
  openGraph: {
    title: "Kalap Gram Gurukulam Ashram",
    description: "A sacred spiritual retreat on the banks of Maa Narmada.",
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
      className={`${playfair.variable} ${plusJakarta.variable} ${notoDevanagari.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{props.children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
