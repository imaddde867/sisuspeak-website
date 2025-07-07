"use client";

import { motion } from '@/utils/motion';
import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/utils/paths';
import { FaArrowRight, FaHeart } from 'react-icons/fa';

const FinalCTASection = () => {

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-800/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              Ready to Start Speaking?
            </div>
            
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6 leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
              Ready to Speak <span className="text-yellow-300">With Confidence?</span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join thousands of learners who chose conversation over memorization. 
              Start speaking naturally from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl text-blue-900 bg-yellow-400 hover:bg-yellow-300 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-700 group"
              >
                <span className="mr-2">🗣️</span>
                Start Speaking Now
                <FaArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                No pressure. Just progress.
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="h-4 w-4 text-pink-400" />
                Built for Finnish learners worldwide
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8">
                <Image
                  src={getAssetPath('/images/Family-Pose.webp')}
                  alt="The Sisu Speak AI tutor family, representing personalized Finnish language learning"
                  width={300}
                  height={300}
                  className="max-w-xs w-full h-auto"
                  style={{
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2))',
                  }}
                />
                <div className="absolute -top-2 -right-2">
                  <div className="bg-white text-blue-900 rounded-full p-2 animate-bounce">
                    <span className="text-xl">💙</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Start speaking immediately
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
