"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type Categories = {
  necessary: true; // always true
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

type ConsentState = {
  version: number;
  categories: Categories;
  timestamp: number;
};

const CONSENT_STORAGE_KEY = 'sisu_consent_v1';
const CURRENT_VERSION = 1;

const defaultCategories: Categories = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

type ConsentContextValue = {
  consent: ConsentState | null;
  categories: Categories;
  showBanner: boolean;
  showManager: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (cats: Omit<Categories, 'necessary'>) => void;
  openManager: () => void;
  closeManager: () => void;
};

const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showManager, setShowManager] = useState(false);

  // Load stored consent
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (raw) {
        const parsed: ConsentState = JSON.parse(raw);
        if (parsed.version === CURRENT_VERSION) {
          setConsent(parsed);
          setShowBanner(false);
          return;
        }
      }
      setShowBanner(true);
    } catch {
      setShowBanner(true);
    }
  }, []);

  const persist = useCallback((cats: Categories) => {
    const next: ConsentState = {
      version: CURRENT_VERSION,
      categories: { ...cats, necessary: true },
      timestamp: Date.now(),
    };
    setConsent(next);
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
  }, []);

  const acceptAll = useCallback(() => {
    persist({ necessary: true, analytics: true, marketing: true, preferences: true });
    setShowBanner(false);
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({ necessary: true, analytics: false, marketing: false, preferences: false });
    setShowBanner(false);
  }, [persist]);

  const save = useCallback((cats: Omit<Categories, 'necessary'>) => {
    persist({ necessary: true, ...cats });
    setShowBanner(false);
    setShowManager(false);
  }, [persist]);

  const openManager = useCallback(() => setShowManager(true), []);
  const closeManager = useCallback(() => setShowManager(false), []);

  const value: ConsentContextValue = useMemo(() => ({
    consent,
    categories: consent?.categories || defaultCategories,
    showBanner,
    showManager,
    acceptAll,
    rejectAll,
    save,
    openManager,
    closeManager,
  }), [consent, showBanner, showManager, acceptAll, rejectAll, save, openManager, closeManager]);

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return ctx;
}
