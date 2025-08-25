"use client";

import Script from 'next/script';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export default function AnalyticsScripts() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const GA_DEBUG = process.env.NEXT_PUBLIC_GA_DEBUG === 'true';
  const { categories } = useCookieConsent();
  if (!GA_ID || !categories.analytics) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { debug_mode: ${GA_DEBUG ? 'true' : 'false'} });
        `}
      </Script>
    </>
  );
}
