"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from '@/utils/motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      {/* Simplified background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="px-4 sm:px-6 lg:px-8 lg:col-span-6">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                AI-Powered Finnish Learning
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight mb-6">
                <span className="block">Learn Finnish</span>
                <span className="block gradient-text">Through Conversation</span>
              </h1>

              <p className="text-lg text-slate-600 sm:text-xl lg:text-left text-center max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
                Meet the Sisu family, your AI language tutors who teach Finnish through natural conversations, not boring flashcards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="flex items-center gap-2">
                    Join Waitlist
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl text-blue-700 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="flex items-center gap-2">
                    How It Works
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/sisu-deer.svg"
                  alt="Sisu Speak mascot"
                  width={500}
                  height={500}
                  className="max-w-sm sm:max-w-md lg:max-w-lg drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
