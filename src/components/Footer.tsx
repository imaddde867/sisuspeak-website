"use client";

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-baloo text-3xl font-bold gradient-text tracking-tight select-none">
                sisu speak
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-300 max-w-md">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex space-x-2 sm:space-x-4 justify-center md:justify-start">
              {[
                { icon: FaTwitter, href: "https://twitter.com/sisuspeak", label: "Twitter" },
                { icon: FaLinkedin, href: "https://linkedin.com/company/sisuspeak", label: "LinkedIn" },
                { icon: FaInstagram, href: "https://instagram.com/sisuspeak", label: "Instagram" },
                { icon: FaFacebook, href: "https://facebook.com/sisuspeak", label: "Facebook" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-400 hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-slate-800 min-h-[48px] min-w-[48px] flex items-center justify-center active:scale-95"
                  aria-label={`Follow us on ${label}`}
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Learn More</h3>
            <ul className="space-y-3">
              {[
                { href: "/#features", label: "Features" },
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/#about", label: "About Us" }
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-slate-800 inline-block min-h-[44px] flex items-center active:scale-95"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Contact Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" }
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-slate-800 inline-block min-h-[44px] flex items-center active:scale-95"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 text-center md:text-left">
              &copy; {currentYear} Sisu Speak. {t('footer.copyright')}
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <LanguageSwitcher variant="footer" />
              <span className="text-sm text-slate-400">{t('footer.madeWith')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
