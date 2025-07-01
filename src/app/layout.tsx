import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import PageTracker from '@/components/PageTracker';
import { LanguageProvider } from '@/contexts/LanguageContext';

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
  title: "Sisu Speak | AI-Powered Finnish Language Learning",
  description: "Learn Finnish naturally through conversation with AI tutors. Sisu Speak uses advanced NLP to provide personalized language learning experiences.",
  keywords: ["Finnish language", "language learning", "AI tutor", "NLP", "pronunciation", "conversation practice"],
  icons: {
    icon: [
      {
        url: process.env.NODE_ENV === 'production' ? '/sisuspeak-website/favicon.ico' : '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ],
    apple: [
      {
        url: process.env.NODE_ENV === 'production' ? '/sisuspeak-website/favicon.ico' : '/favicon.ico',
        sizes: '180x180',
        type: 'image/x-icon',
      }
    ],
  },
  openGraph: {
    title: "Sisu Speak | Learn Finnish Through AI Conversation",
    description: "Learn Finnish naturally through engaging conversations with AI tutors. More effective than traditional language learning methods.",
    url: "https://imadlab.me/sisuspeak-website",
    siteName: "Sisu Speak",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://imadlab.me/sisuspeak-website/images/family.PNG",
        width: 1200,
        height: 630,
        alt: "Sisu Speak - Meet the AI Finnish Language Learning Family",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sisu Speak | AI-Powered Finnish Language Learning",
    description: "Learn Finnish naturally through conversation with AI tutors",
    creator: "@sisuspeak",
    images: ["https://imadlab.me/sisuspeak-website/images/family.PNG"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${baloo.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <PageTracker>
            {children}
          </PageTracker>
        </LanguageProvider>
      </body>
    </html>
  );
}
