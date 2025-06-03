import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-baloo text-3xl font-bold text-blue-600 tracking-tight select-none">sisu speak</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Sisu Speak uses AI-driven conversations to teach Finnish naturally and effectively. Practice with our virtual tutors anytime, anywhere.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Learn More</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#features" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {currentYear} Sisu Speak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
