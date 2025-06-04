"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('sisu-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fi')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('sisu-language', language);
    // Update document language attribute
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return getTranslation(key, language);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation function
const getTranslation = (key: string, language: Language): string => {
  const translations = getTranslations();
  const keys = key.split('.');
  let value: Record<string, unknown> | string = translations[language];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k] as Record<string, unknown> | string;
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = (value as Record<string, unknown>)[fallbackKey] as Record<string, unknown> | string;
        } else {
          return key; // Return key if no translation found
        }
      }
      break;
    }
  }

  return typeof value === 'string' ? value : key;
};

// Import translations
const getTranslations = () => {
  return {
    en: {
      // Navigation
      nav: {
        features: "Features",
        howItWorks: "How It Works",
        about: "About",
        contact: "Contact",
        faq: "FAQ",
        signup: "Join Waitlist",
        admin: "Admin"
      },
      
      // Hero Section
      hero: {
        title: "Learn Finnish Through",
        titleHighlight: "AI Conversation",
        subtitle: "Master Finnish naturally with our AI tutors - the Sisu family. Practice real conversations, get instant feedback, and build confidence speaking Finnish.",
        cta: "Join the Waitlist",
        watchDemo: "Watch Demo",
        trustedBy: "Trusted by language learners worldwide"
      },
      
      // Stats Section
      stats: {
        users: "Active Learners",
        conversations: "Conversations Daily",
        accuracy: "Pronunciation Accuracy",
        satisfaction: "User Satisfaction"
      },
      
      // Features Section
      features: {
        title: "Why Choose Sisu Speak?",
        subtitle: "Our AI-powered approach makes learning Finnish effective, enjoyable, and tailored to you. Experience the future of language learning today.",
        conversational: {
          title: "Conversational Learning",
          description: "Learn Finnish naturally through engaging conversations with the Sisu family AI tutors, tailored to your level and interests."
        },
        pronunciation: {
          title: "Pronunciation Feedback",
          description: "Receive instant, personalized feedback on your pronunciation to sound more like a native Finnish speaker."
        },
        adaptive: {
          title: "Adaptive Curriculum",
          description: "Our AI adapts to your progress, focusing on areas where you need more practice while keeping you challenged."
        },
        progress: {
          title: "Progress Tracking",
          description: "Monitor your improvement with detailed analytics and celebrate milestones as you advance in your Finnish journey."
        }
      },

      // How It Works Section
      howItWorks: {
        title: "How Sisu Speak Works",
        subtitle: "Start your Finnish learning journey in three simple steps",
        step1: {
          title: "Speak naturally",
          description: "Practice Finnish by having natural conversations with our AI tutors. Speak into your device and get real-time feedback."
        },
        step2: {
          title: "Receive instant feedback",
          description: "Our AI analyzes your pronunciation, grammar, and conversational flow, providing specific guidance on how to improve."
        },
        step3: {
          title: "Track your progress",
          description: "Watch your Finnish skills develop over time with detailed progress tracking and personalized learning recommendations."
        }
      },

      // About Section
      about: {
        title: "Meet the Sisu Family",
        subtitle: "Your AI-powered Finnish tutors, each with their own personality and expertise",
        sisuSenior: {
          name: "Sisu Senior",
          role: "Professional & Academic Guide",
          description: "Teaches Finnish for work, studies, and formal settings, focusing on advanced vocabulary and structures."
        },
        sisuAiti: {
          name: "Sisu Äiti",
          role: "Everyday & Family Conversation Partner",
          description: "Specializes in conversational Finnish for daily life, partners, and family interactions, building practical fluency."
        },
        sisuNuori: {
          name: "Sisu Nuori",
          role: "Cultural & Social Companion",
          description: "Focuses on modern Finnish culture, slang, and social interactions, perfect for connecting with Finnish youth."
        },
        sisuLapsi: {
          name: "Sisu Lapsi",
          role: "Playful Learning Buddy",
          description: "Makes learning fun with games, stories, and child-friendly approaches, ideal for beginners and young learners."
        }
      },

      // CTA Section
      cta: {
        badge: "Join the Revolution",
        title: "Ready to learn Finnish",
        titleHighlight: "the natural way?",
        subtitle: "Join our waitlist to be among the first to experience Sisu Speak when we launch. Early subscribers will get exclusive access and special offers.",
        formTitle: "Join the Waitlist",
        emailLabel: "Email Address",
        emailPlaceholder: "you@example.com",
        submitButton: "Join Waitlist",
        submitting: "Joining",
        successTitle: "Welcome to the family!",
        successMessage: "We'll keep you updated on our progress and notify you when we launch.",
        anotherEmail: "Sign up with another email",
        privacy: "🔒 We respect your privacy. Unsubscribe at any time."
      }
    },
    fi: {
      // Navigation
      nav: {
        features: "Ominaisuudet",
        howItWorks: "Miten Se Toimii",
        about: "Tietoa Meistä",
        contact: "Ota Yhteyttä",
        faq: "UKK",
        signup: "Liity Jonoon",
        admin: "Ylläpito"
      },
      
      // Hero Section
      hero: {
        title: "Opi Suomea",
        titleHighlight: "AI-Keskustelulla",
        subtitle: "Hallitse suomi luonnollisesti AI-opettajiemme - Sisu-perheen - kanssa. Harjoittele oikeita keskusteluja, saa välitöntä palautetta ja rakenna itsevarmuutta suomen puhumisessa.",
        cta: "Liity Jonotuslistalle",
        watchDemo: "Katso Demo",
        trustedBy: "Kieltenoppijoiden luottama maailmanlaajuisesti"
      },
      
      // Stats Section
      stats: {
        users: "Aktiivista Oppijaa",
        conversations: "Keskustelua Päivässä",
        accuracy: "Ääntämisen Tarkkuus",
        satisfaction: "Käyttäjätyytyväisyys"
      },
      
      // Features Section
      features: {
        title: "Miksi Valita Sisu Speak?",
        subtitle: "AI-pohjainen lähestymistapamme tekee suomen oppimisesta tehokasta, nautinnollista ja sinulle räätälöityä. Koe kieltenoppimisen tulevaisuus tänään.",
        conversational: {
          title: "Keskusteleva Oppiminen",
          description: "Opi suomea luonnollisesti kiinnostavien keskustelujen kautta Sisu-perheen AI-opettajien kanssa, räätälöitynä tasollesi ja kiinnostuksen kohteillesi."
        },
        pronunciation: {
          title: "Ääntämispalaute",
          description: "Saa välitöntä, henkilökohtaista palautetta ääntämisestäsi kuulostaaksesi enemmän syntyperäiseltä suomen puhujalta."
        },
        adaptive: {
          title: "Mukautuva Opetussuunnitelma",
          description: "AI:mme mukautuu edistymiseesi, keskittyen alueisiin joissa tarvitset enemmän harjoitusta pitäen sinut samalla haasteellisena."
        },
        progress: {
          title: "Edistymisen Seuranta",
          description: "Seuraa kehittymistäsi yksityiskohtaisilla analyyseilla ja juhli virstanpylväitä edetessäsi suomen matkallasi."
        }
      },

      // How It Works Section
      howItWorks: {
        title: "Miten Sisu Speak Toimii",
        subtitle: "Aloita suomen oppimismatkasi kolmessa yksinkertaisessa vaiheessa",
        step1: {
          title: "Puhu luonnollisesti",
          description: "Harjoittele suomea käymällä luonnollisia keskusteluja AI-opettajiemme kanssa. Puhu laitteeseen ja saa reaaliaikaista palautetta."
        },
        step2: {
          title: "Saa välitöntä palautetta",
          description: "AI:mme analysoi ääntämistäsi, kielioppiasi ja keskustelun sujuvuutta, antaen tarkkoja ohjeita parantamiseen."
        },
        step3: {
          title: "Seuraa edistymistäsi",
          description: "Katso suomen taitojesi kehittyvän ajan myötä yksityiskohtaisen edistymisen seurannan ja henkilökohtaisten oppimissuositusten avulla."
        }
      },

      // About Section
      about: {
        title: "Tutustu Sisu-Perheeseen",
        subtitle: "AI-pohjaiset suomen opettajasi, joilla jokaisella on oma persoonallisuus ja asiantuntemus",
        sisuSenior: {
          name: "Sisu Senior",
          role: "Ammatillinen & Akateeminen Opas",
          description: "Opettaa suomea työhön, opintoihin ja virallisiin tilanteisiin, keskittyen edistyneeseen sanastoon ja rakenteisiin."
        },
        sisuAiti: {
          name: "Sisu Äiti",
          role: "Arkipäivän & Perheen Keskustelukumppani",
          description: "Erikoistunut arkipäivän suomeen, kumppani- ja perhevuorovaikutukseen, rakentaen käytännöllistä sujuvuutta."
        },
        sisuNuori: {
          name: "Sisu Nuori",
          role: "Kulttuurinen & Sosiaalinen Kumppani",
          description: "Keskittyy moderniin suomalaiseen kulttuuriin, slangiin ja sosiaalisiin vuorovaikutuksiin, täydellinen yhteyden luomiseen suomalaisten nuorten kanssa."
        },
        sisuLapsi: {
          name: "Sisu Lapsi",
          role: "Leikkisä Oppimiskaveri",
          description: "Tekee oppimisesta hauskaa pelien, tarinoiden ja lapsiystävällisten lähestymistapojen avulla, ihanteellinen aloittelijoille ja nuorille oppijoille."
        }
      },

      // CTA Section
      cta: {
        badge: "Liity Vallankumoukseen",
        title: "Valmis oppimaan suomea",
        titleHighlight: "luonnollisella tavalla?",
        subtitle: "Liity jonotuslistallemme ollaksesi ensimmäisten joukossa kokemassa Sisu Speak kun lanseeraamme. Varhaiset tilaajat saavat eksklusiivisen pääsyn ja erikoistarjouksia.",
        formTitle: "Liity Jonotuslistalle",
        emailLabel: "Sähköpostiosoite",
        emailPlaceholder: "sinun@sahkoposti.fi",
        submitButton: "Liity Jonoon",
        submitting: "Liitytään",
        successTitle: "Tervetuloa perheeseen!",
        successMessage: "Pidämme sinut ajan tasalla edistymisestämme ja ilmoitamme kun lanseeraamme.",
        anotherEmail: "Rekisteröidy toisella sähköpostilla",
        privacy: "🔒 Kunnioitamme yksityisyyttäsi. Peruuta tilaus milloin tahansa."
      }
    }
  };
};
