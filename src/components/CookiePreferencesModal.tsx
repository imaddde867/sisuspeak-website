"use client";

import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useEffect, useState } from 'react';

export default function CookiePreferencesModal() {
  const { showManager, closeManager, categories, save } = useCookieConsent();
  const [analytics, setAnalytics] = useState(categories.analytics);
  const [marketing, setMarketing] = useState(categories.marketing);
  const [prefs, setPrefs] = useState(categories.preferences);

  useEffect(() => {
    setAnalytics(categories.analytics);
    setMarketing(categories.marketing);
    setPrefs(categories.preferences);
  }, [categories]);

  if (!showManager) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-slate-900">Cookie preferences</h3>
          <p className="text-slate-600 text-sm mt-1">Enable categories to personalize your experience. Necessary cookies are always on.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200">
            <input type="checkbox" checked disabled className="mt-1" />
            <div>
              <h4 className="font-semibold text-slate-900">Necessary</h4>
              <p className="text-sm text-slate-600">Required for core site functionality.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200">
            <input id="analytics" type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} className="mt-1" />
            <div>
              <label htmlFor="analytics" className="font-semibold text-slate-900">Analytics</label>
              <p className="text-sm text-slate-600">Helps us understand site usage and improve content.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200">
            <input id="preferences" type="checkbox" checked={prefs} onChange={e => setPrefs(e.target.checked)} className="mt-1" />
            <div>
              <label htmlFor="preferences" className="font-semibold text-slate-900">Preferences</label>
              <p className="text-sm text-slate-600">Saves your settings like language and theme.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200">
            <input id="marketing" type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} className="mt-1" />
            <div>
              <label htmlFor="marketing" className="font-semibold text-slate-900">Marketing</label>
              <p className="text-sm text-slate-600">Used to deliver personalized ads or content.</p>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <button onClick={closeManager} className="px-4 py-2 rounded-lg border border-gray-300 text-slate-700 hover:bg-gray-50">Cancel</button>
          <button onClick={() => save({ analytics, marketing, preferences: prefs })} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Save preferences</button>
        </div>
      </div>
    </div>
  );
}
