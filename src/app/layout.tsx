import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sisu Speak | AI-Powered Finnish Language Learning",
  description: "Learn Finnish naturally through conversation with AI tutors. Sisu Speak uses advanced NLP to provide personalized language learning experiences.",
  keywords: ["Finnish language", "language learning", "AI tutor", "NLP", "pronunciation", "conversation practice"],
  openGraph: {
    title: "Sisu Speak | Learn Finnish Through AI Conversation",
    description: "Learn Finnish naturally through engaging conversations with AI tutors. More effective than traditional language learning methods.",
    url: "https://sisuspeak.com",
    siteName: "Sisu Speak",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sisuspeak.com/images/sisu-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sisu Speak - AI Finnish Language Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sisu Speak | AI-Powered Finnish Language Learning",
    description: "Learn Finnish naturally through conversation with AI tutors",
    creator: "@sisuspeak",
    images: ["https://sisuspeak.com/images/sisu-twitter-image.jpg"],
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
      <body
        className={`${inter.variable} ${poppins.variable} ${baloo.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
