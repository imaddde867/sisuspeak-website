"use client";

import { useCookieConsent } from '@/contexts/CookieConsentContext';

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openManager } = useCookieConsent();
  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="md:max-w-3xl">
            <h2 className="text-slate-900 font-semibold text-lg">We use cookies</h2>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              We use necessary cookies to make our site work. With your consent, we also use analytics and marketing cookies to improve your experience. You can change your choices at any time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button onClick={rejectAll} className="px-4 py-2 rounded-lg border border-gray-300 text-slate-700 hover:bg-gray-50">
              Reject all
            </button>
            <button onClick={openManager} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200">
              Manage preferences
            </button>
            <button onClick={acceptAll} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
