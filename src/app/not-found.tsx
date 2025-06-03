"use client";

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from '@/utils/motion';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/images/sisu-deer.svg" 
            alt="Sisu Deer" 
            width={150} 
            height={150} 
            className="mb-8"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
          >
            Go back home
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
