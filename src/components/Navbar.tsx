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
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-xl shadow-gray-900/5'
        : 'bg-white/90 backdrop-blur-lg border-b border-gray-200/60 shadow-lg shadow-gray-900/5'
    }`}>
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-indigo-50/30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16 md:h-18' : 'h-18 md:h-20'
        } px-2 sm:px-0`}>
          {/* Enhanced Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center group"
            aria-label="Sisu Speak - Home"
          >
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-lg">🇫🇮</span>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-baloo text-2xl md:text-3xl font-bold gradient-text tracking-tight select-none leading-none">
                  sisu speak
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wide hidden sm:block">
                  AI Finnish Learning
                </span>
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {[
                { href: "/#features", label: t('nav.features'), description: "See what makes us special", icon: "✨" },
                { href: "/#how-it-works", label: t('nav.howItWorks'), description: "Learn our process", icon: "⚡" },
                { href: "/#about", label: t('nav.about'), description: "Our story and mission", icon: "👥" },
                { href: "/contact", label: t('nav.contact'), description: "Get in touch with us", icon: "💬" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-md hover:scale-105"
                  aria-label={item.description}
                  onClick={() => {
                    // Smooth scroll for anchor links
                    if (item.href.startsWith('/#')) {
                      const element = document.querySelector(item.href.substring(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </span>

                  {/* Modern hover indicator */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-6 transform -translate-x-1/2 rounded-full"></div>
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
              className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-2xl text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group overflow-hidden border border-blue-500/20"
              aria-label="Join our waitlist to get early access"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"></div>

              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">🚀</span>
                {t('nav.signup')}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Enhanced shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>

              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`relative inline-flex items-center justify-center p-3 rounded-2xl transition-all duration-300 min-h-[48px] min-w-[48px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isOpen
                  ? 'text-blue-600 bg-blue-50 shadow-lg shadow-blue-500/20'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 hover:shadow-md'
              }`}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">{isOpen ? "Close" : "Open"} main menu</span>
              <div className="relative">
                {isOpen ? (
                  <RiCloseLine className="block h-7 w-7 transition-transform duration-300 rotate-90" aria-hidden="true" />
                ) : (
                  <RiMenu4Line className="block h-7 w-7 transition-transform duration-300 hover:scale-110" aria-hidden="true" />
                )}
              </div>

              {/* Pulse effect for mobile button */}
              {!isOpen && (
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/80 shadow-2xl shadow-gray-900/10"
          >
            {/* Mobile menu gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-indigo-50/40 pointer-events-none"></div>

            <div className="relative px-6 pt-8 pb-10 space-y-4 max-h-[85vh] overflow-y-auto">
              {[
                { href: "/#features", label: t('nav.features'), icon: "✨", color: "from-blue-500 to-cyan-500" },
                { href: "/#how-it-works", label: t('nav.howItWorks'), icon: "⚡", color: "from-purple-500 to-pink-500" },
                { href: "/#about", label: t('nav.about'), icon: "👥", color: "from-green-500 to-emerald-500" },
                { href: "/contact", label: t('nav.contact'), icon: "💬", color: "from-orange-500 to-red-500" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  <Link
                    href={item.href}
                    className="group relative flex items-center px-6 py-5 rounded-2xl text-lg font-medium text-slate-700 hover:text-white transition-all duration-300 min-h-[64px] active:scale-95 hover:shadow-lg overflow-hidden"
                    onClick={toggleMenu}
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl`}></div>

                    {/* Default background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 group-hover:opacity-0 transition-opacity duration-300 rounded-2xl"></div>

                    <span className="relative z-10 mr-4 text-2xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className="relative z-10 font-semibold">
                      {item.label}
                    </span>

                    {/* Arrow indicator */}
                    <svg className="relative z-10 ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}
                className="pt-8 border-t border-gray-200/60"
              >
                <Link
                  href="/signup"
                  className="group relative flex items-center justify-center w-full px-8 py-6 rounded-3xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 min-h-[64px] active:scale-95 overflow-hidden"
                  onClick={toggleMenu}
                >
                  {/* Background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>

                  <span className="relative z-10 mr-3 text-2xl animate-bounce">🚀</span>
                  <span className="relative z-10">{t('nav.signup')}</span>

                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
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
