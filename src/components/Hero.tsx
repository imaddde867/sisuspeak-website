"use client";

import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/utils/paths';
import { useEffect } from 'react';

const Hero = () => {

  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      const sizes = ['star-tiny', 'star-tiny', 'star-small', 'star-small', 'star-medium', 'star-large'];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      
      star.className = `star ${size}`;
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDuration = (Math.random() * 6 + 6) + 's';
      star.style.animationDelay = '0s';
      
      const starsContainer = document.querySelector('.falling-stars');
      if (starsContainer) {
        starsContainer.appendChild(star);
        
        // Remove star after animation completes
        setTimeout(() => {
          if (star.parentNode) {
            star.parentNode.removeChild(star);
          }
        }, 15000);
      }
    };

    // Create immediate burst of stars
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createStar(), i * 50);
    }

    // Create continuous stars
    const interval = setInterval(createStar, 200);
    
    // Create additional bursts
    const burstInterval = setInterval(() => {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => createStar(), i * 100);
      }
    }, 1200);
    
    return () => {
      clearInterval(interval);
      clearInterval(burstInterval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center py-8 sm:py-12">
      {/* Static star field background */}
      <div className="star-field"></div>
      
      {/* Falling stars effect */}
      <div className="falling-stars z-0"></div>
      
      {/* Simplified background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-blue-50/20 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="px-4 sm:px-6 lg:px-8 lg:col-span-6 text-center lg:text-left">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Finally—Learn Finnish by <span className="gradient-text">Speaking It</span>, Not Memorizing It
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
                Speak naturally with AI tutors that adapt to you. No more boring grammar drills or dead-end apps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start px-4 sm:px-0">
                <Link
                  href="/signup"
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 button-press group overflow-hidden min-h-[56px] w-full sm:w-auto"
                  aria-label="Join our waitlist to get early access to Sisu Speak"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🎙️ Start Speaking Free
                    <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl text-blue-700 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 button-press group min-h-[56px] w-full sm:w-auto"
                  aria-label="Learn how Sisu Speak works"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="flex items-center gap-2">
                    Watch Demo
                    <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-slate-500 px-4 sm:px-0">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="whitespace-nowrap">Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="whitespace-nowrap">No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="whitespace-nowrap">Early access</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src={getAssetPath('/images/Family-Pose.png')}
                  alt="Meet the Sisu Family - Four deer characters representing our AI Finnish tutors"
                  width={400}
                  height={400}
                  className="max-w-[280px] sm:max-w-xs lg:max-w-sm w-full h-auto"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                  style={{
                    filter: 'none',
                    boxShadow: 'none'
                  }}
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
