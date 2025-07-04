"use client";

import { useState, useEffect, memo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from '@/utils/motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

import { getAssetPath } from '@/utils/paths';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

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
        ? 'bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm'
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-18'
        }`}>
          {/* Clean Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center group"
            aria-label="Sisu Speak - Home"
          >
            <div className="flex items-center space-x-2">
              <Image
                src={getAssetPath('/logo_24x24.svg')}
                alt="Sisu Speak Logo"
                width={24}
                height={24}
                className="w-6 h-6"
                priority
              />
              <span className="font-baloo text-2xl font-bold gradient-text tracking-tight select-none">
                sisu speak
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {[
                { href: "/#features", label: "Features" },
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200"
                  onClick={() => {
                    // Smooth scroll for anchor links
                    if (item.href.startsWith('/#')) {
                      const element = document.querySelector(item.href.substring(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/signup"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Join our waitlist to get early access"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Clean Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">{isOpen ? "Close" : "Open"} main menu</span>
              {isOpen ? (
                <RiCloseLine className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <RiMenu4Line className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 pt-6 pb-6 space-y-4">
              {[
                { href: "/#features", label: "Features" },
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4 border-t border-gray-200"
              >
                <Link
                  href="/signup"
                  className="block w-full px-4 py-3 text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Join Waitlist
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
