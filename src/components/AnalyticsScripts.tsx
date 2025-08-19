"use client";

import Script from 'next/script';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export default function AnalyticsScripts() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const { categories } = useCookieConsent();
  if (!GA_ID || !categories.analytics) return null;
  return (
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
  );
}
