import type { Metadata } from "next";
import "../[locale]/globals.css";

export const metadata: Metadata = {
  title: "Admin Portal | Shridhyan Ashram",
  description: "Administrative control center for Shridhyan Ashram, Uttarkashi.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#234638] text-[#fcfbf7] min-h-screen font-sans selection:bg-[#789B80] selection:text-[#234638]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

