import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import PageTracker from '@/components/PageTracker';
import Head from 'next/head';

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
      {
        url: process.env.NODE_ENV === 'production' ? '/sisuspeak-website/favicon.ico' : '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        url: process.env.NODE_ENV === 'production' ? '/sisuspeak-website/favicon.ico' : '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ],
    shortcut: process.env.NODE_ENV === 'production' ? '/sisuspeak-website/favicon.ico' : '/favicon.ico',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://sisuspeak.live/" />
        {/* JSON-LD Structured Data for Organization, Website, and FAQPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sisu Speak",
          "url": "https://sisuspeak.live/",
          "logo": "https://sisuspeak.live/logo_24x24.svg",
          "sameAs": [
            "https://twitter.com/sisuspeak",
            "https://linkedin.com/company/sisuspeak",
            "https://instagram.com/sisuspeak",
            "https://facebook.com/sisuspeak"
          ],
          "description": "Learn Finnish naturally through conversation with AI tutors. Sisu Speak uses advanced NLP to provide personalized Finnish learning experiences."
        }` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://sisuspeak.live/",
          "name": "Sisu Speak",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sisuspeak.live/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is this like Duolingo?",
              "acceptedAnswer": { "@type": "Answer", "text": "Not at all! While Duolingo focuses on vocabulary and grammar exercises, Sisu Speak is all about real conversations. You'll speak with AI tutors who respond naturally, give instant feedback, and adapt to your interests—like having a Finnish friend to practice with anytime." }
            },
            {
              "@type": "Question",
              "name": "Do I need to know Finnish already?",
              "acceptedAnswer": { "@type": "Answer", "text": "Absolutely not! Sisu Lapsi is perfect for complete beginners. Our AI tutors meet you exactly where you are—whether you're saying your first 'Hei' or preparing for advanced business meetings. Each tutor adapts to your level automatically." }
            },
            {
              "@type": "Question",
              "name": "Is it voice or text-based?",
              "acceptedAnswer": { "@type": "Answer", "text": "Primarily voice! We believe you learn to speak by speaking. You'll have natural voice conversations with our AI tutors, though you can also type if needed. Our advanced speech recognition understands your pronunciation and helps you improve." }
            },
            {
              "@type": "Question",
              "name": "How is this different from other Finnish apps?",
              "acceptedAnswer": { "@type": "Answer", "text": "Most apps teach Finnish like a textbook—lots of rules, little conversation. Sisu Speak teaches Finnish like you'd learn from a friend. Real conversations, instant feedback, personalized to your goals, and four unique personalities to keep it interesting." }
            },
            {
              "@type": "Question",
              "name": "Can I really learn Finnish just by talking?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes! Speaking is how children learn their first language, and it's the most natural way to learn Finnish too. Our AI tutors provide grammar guidance within conversations, so you learn structure naturally while building real communication skills." }
            },
            {
              "@type": "Question",
              "name": "What if I'm too shy to speak?",
              "acceptedAnswer": { "@type": "Answer", "text": "Perfect! That's exactly why we created Sisu Speak. Our AI tutors are endlessly patient, never judge you, and create a safe space to practice. Start with Sisu Lapsi for gentle encouragement, then build confidence at your own pace." }
            }
          ]
        }` }} />
        {/* Improved meta tags for SEO */}
        <meta name="author" content="Sisu Speak Team" />
        <meta name="copyright" content="Sisu Speak" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-title" content="Sisu Speak" />
        <meta name="application-name" content="Sisu Speak" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sisu Speak" />
        <meta property="og:url" content="https://sisuspeak.live/" />
        <meta property="og:image" content="https://sisuspeak.live/images/family.webp" />
        <meta property="og:image:alt" content="Sisu Speak - Meet the AI Finnish Learning Family" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sisuspeak" />
        <meta name="twitter:title" content="Sisu Speak | AI-Powered Finnish Learning" />
        <meta name="twitter:description" content="Learn Finnish naturally through conversation with AI tutors. Sisu Speak uses advanced NLP to provide personalized Finnish learning experiences." />
        <meta name="twitter:image" content="https://sisuspeak.live/images/family.webp" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body
        className={`${inter.variable} ${poppins.variable} ${baloo.variable} antialiased font-sans`}
      >
        <PageTracker>
          {children}
        </PageTracker>
      </body>
    </html>
  );
}
