"use client";

import { useState, useEffect, memo, useCallback } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from '@/utils/motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-lg'
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14 md:h-14' : 'h-16 md:h-16'
        } px-2 sm:px-0`}>
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center group"
            aria-label="Sisu Speak - Home"
          >
            <span className="font-baloo text-3xl font-bold gradient-text tracking-tight select-none group-hover:scale-105 transition-transform duration-200">
              sisu speak
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {[
                { href: "/#features", label: t('nav.features'), description: "See what makes us special" },
                { href: "/#how-it-works", label: t('nav.howItWorks'), description: "Learn our process" },
                { href: "/#about", label: t('nav.about'), description: "Our story and mission" },
                { href: "/contact", label: t('nav.contact'), description: "Get in touch with us" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-slate-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                  aria-label={item.description}
                  onClick={() => {
                    // Smooth scroll for anchor links
                    if (item.href.startsWith('/#')) {
                      const element = document.querySelector(item.href.substring(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                  {/* Hover indicator */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher variant="navbar" />
          </div>

          <div className="hidden md:block">
            <Link
              href="/signup"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 button-press group overflow-hidden"
              aria-label="Join our waitlist to get early access"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('nav.signup')}
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 min-h-[48px] min-w-[48px]"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">{isOpen ? "Close" : "Open"} main menu</span>
              {isOpen ? (
                <RiCloseLine className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <RiMenu4Line className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
          >
            <div className="px-6 pt-6 pb-8 space-y-3 max-h-[80vh] overflow-y-auto">
              {[
                { href: "/#features", label: t('nav.features'), icon: "⭐" },
                { href: "/#how-it-works", label: t('nav.howItWorks'), icon: "🔧" },
                { href: "/#about", label: t('nav.about'), icon: "ℹ️" },
                { href: "/contact", label: t('nav.contact'), icon: "📧" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-4 rounded-xl text-lg font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 min-h-[56px] active:scale-95"
                    onClick={toggleMenu}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-6 border-t border-gray-200"
              >
                <Link
                  href="/signup"
                  className="flex items-center justify-center w-full px-6 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 transition-all duration-200 min-h-[56px] active:scale-95"
                  onClick={toggleMenu}
                >
                  <span className="mr-2">🚀</span>
                  {t('nav.signup')}
                </Link>
              </motion.div>

              {/* Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="pt-4 flex justify-center"
              >
                <LanguageSwitcher variant="mobile" />
              </motion.div>

              {/* Mobile-only quick links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="pt-4 flex justify-center space-x-6"
              >
                <Link
                  href="/faq"
                  className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {t('nav.faq')}
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Terms
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
