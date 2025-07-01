"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from '@/utils/motion';
import { getAssetPath } from '@/utils/paths';

// Animation variants for a cleaner, staggered effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-100 to-indigo-100 relative overflow-hidden flex items-center justify-center p-4">
      {/* --- Sophisticated Background: "Aurora" --- */}
      <div className="absolute inset-0 opacity-50 mix-blend-multiply">
        {/* Aurora Layer 1 */}
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-300 rounded-full blur-3xl filter"
          animate={{
            transform: ['translateX(0px)', 'translateX(20px)', 'translateX(0px)'],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Aurora Layer 2 */}
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-sky-300 rounded-full blur-3xl filter"
          animate={{
            transform: ['translateY(0px)', 'translateY(-20px)', 'translateY(0px)'],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
         {/* Aurora Layer 3 - more central */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-1/3 h-1/3 -translate-x-1/2 -translate-y-1/2 bg-indigo-200 rounded-full blur-3xl filter"
           animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

       {/* --- Main Content --- */}
      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Logo as a Guiding Star/Compass */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Image
                    src={getAssetPath('/logo_24x24.svg')}
                    alt="Sisu Speak Logo"
                    width={56}
                    height={56}
                    className="w-14 h-14 opacity-90"
                />
            </motion.div>
        </motion.div>

        {/* 404 Number */}
        <motion.h1
          variants={itemVariants}
          className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-700 leading-none select-none mb-6"
          style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
        >
          404
        </motion.h1>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
            Lost in the Echoes
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
            This page seems to have drifted away into the vast Nordic sky.
          </p>
          <p className="text-md text-slate-500 italic mt-3">
            &quot;Ei löydy&quot; — not found
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Return to Home Base
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-600 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Join the Waitlist
          </Link>
        </motion.div>

        {/* Simple Navigation */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-sm text-slate-500 mb-3">Let us guide you back:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {[
              { href: "/#features", label: "Features" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-blue-600 hover:text-indigo-700 underline underline-offset-4 decoration-blue-300/70 hover:decoration-indigo-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}