"use client";

import { useState } from 'react';
import { motion } from '@/utils/motion';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setError('');
    
    // Reset form after showing success message
    setTimeout(() => {
      setEmail('');
    }, 100);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to learn Finnish</span>
              <span className="block text-blue-500">the natural way?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-lg">
              Join our waitlist to be among the first to experience Sisu Speak when we launch. 
              Early subscribers will get exclusive access and special offers.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0 lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Thank you for joining!</h3>
                  <p className="text-gray-600">We&apos;ll keep you updated on our progress.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Sign up with another email
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Join the Waitlist
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                        required
                      />
                      {error && (
                        <p className="mt-2 text-sm text-red-600">{error}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Join Waitlist
                    </button>
                  </form>
                  <p className="text-sm text-gray-500 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
