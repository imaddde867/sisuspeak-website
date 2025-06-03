"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from '@/utils/motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-heading">
                <span className="block">Learn Finnish</span>
                <span className="block text-blue-500">Through Conversation</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Meet the Sisu family, your AI language tutors who teach Finnish through natural conversations, not boring flashcards.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <Link
                  href="/signup"
                  className="w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 md:px-10 md:py-4 md:text-lg"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="#how-it-works"
                  className="w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-xl text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors md:px-10 md:py-4 md:text-lg mt-3 sm:mt-0 sm:ml-4"
                >
                  How It Works
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full flex items-center justify-center"
        >
          <Image
            src="/images/sisu-deer.svg"
            alt="Sisu Speak mascot"
            width={500}
            height={500}
            className="max-w-md lg:max-w-lg"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
