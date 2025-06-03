"use client";

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from '@/utils/motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="font-baloo text-3xl font-bold gradient-text tracking-tight select-none">
              sisu speak
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {[
                { href: "/#features", label: "Features" },
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/#about", label: "About" },
                { href: "/contact", label: "Contact" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="flex items-center gap-2">
                Join Waitlist
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <RiCloseLine className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <RiMenu4Line className="block h-6 w-6" aria-hidden="true" />
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
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {[
                { href: "/#features", label: "Features" },
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/#about", label: "About" },
                { href: "/contact", label: "Contact" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/signup"
                  className="block w-full text-center px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all duration-200"
                  onClick={toggleMenu}
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
