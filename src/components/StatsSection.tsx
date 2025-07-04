"use client";

import { useRef } from 'react';
import { motion, useInView } from '@/utils/motion';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { value: '90%', label: 'Improved Conversation Skills' },
    { value: '75%', label: 'Faster Learning Compared to Traditional Methods' },
    { value: '4x', label: 'More Speaking Practice' },
    { value: '12+', label: 'Real-Life Scenarios' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="bg-blue-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Proven Results
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                Learning Finnish with Sisu Speak
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
                Our AI-powered approach is revolutionizing how people learn Finnish,
                making it more effective and enjoyable than traditional methods.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors duration-200"
                >
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-blue-100 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
