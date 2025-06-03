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
        <div ref={ref} className="bg-blue-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:p-16 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="sm:flex sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Learning Finnish with Sisu Speak
                </h2>
                <p className="mt-2 max-w-xl text-blue-50">
                  Our AI-powered approach is revolutionizing how people learn Finnish, 
                  making it more effective and enjoyable than traditional methods.
                </p>
              </div>
            </motion.div>
            <div className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-blue-100 mt-1">{stat.label}</p>
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
