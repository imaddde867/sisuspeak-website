import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import PageTracker from '@/components/PageTracker';
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
  preload: true,
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Sisu Speak | AI-Powered Finnish Learning",
  description: "Learn Finnish naturally through conversation with AI tutors. Sisu Speak uses advanced NLP to provide personalized Finnish learning experiences.",
  keywords: ["Finnish learning", "AI tutor", "NLP", "pronunciation", "conversation practice"],
  icons: {
    icon: [
      { url: '/logo.jpg', type: 'image/jpeg' }
    ],
    shortcut: '/logo.jpg',
    apple: [
      { url: '/logo.jpg', type: 'image/jpeg' }
    ],
  },
  openGraph: {
    title: "Sisu Speak | Learn Finnish Through AI Conversation",
    description: "Learn Finnish naturally through engaging conversations with AI tutors. More effective than traditional language learning methods.",
    url: "https://sisuspeak.live/",
    siteName: "Sisu Speak",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sisuspeak.live/images/family.webp",
        width: 1200,
        height: 630,
        alt: "Sisu Speak - Meet the AI Finnish Learning Family",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sisu Speak | AI-Powered Finnish Learning",
    description: "Learn Finnish naturally through conversation with AI tutors",
    creator: "@sisuspeak",
    images: ["https://sisuspeak.live/images/family.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className="scroll-smooth">
      {/* Google Analytics 4 (GA4) tag - only when GA_ID is provided */}
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <body className={`${inter.variable} ${poppins.variable} ${baloo.variable} antialiased font-sans`}>
        {/* Skip link for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-2 rounded">
          Skip to content
        </a>
        <PageTracker>
          <div id="main" role="main">{children}</div>
        </PageTracker>
      </body>
    </html>
  );
}
