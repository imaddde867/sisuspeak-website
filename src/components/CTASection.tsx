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
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Join the Revolution
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-heading leading-tight mb-6">
              <span className="block">Ready to learn Finnish</span>
              <span className="block text-yellow-300">the natural way?</span>
            </h2>

            <p className="text-lg text-blue-100 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Join our waitlist to be among the first to experience Sisu Speak when we launch.
              Early subscribers will get exclusive access and special offers.
            </p>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Welcome to the family!</h3>
                  <p className="text-blue-100 mb-4">We'll keep you updated on our progress and notify you when we launch.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-yellow-300 hover:text-yellow-200 font-medium transition-colors duration-200 underline"
                  >
                    Sign up with another email
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Join the Waitlist
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                        placeholder="you@example.com"
                        required
                      />
                      {error && (
                        <p className="mt-2 text-sm text-red-300">{error}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600"
                    >
                      Join Waitlist
                    </button>
                  </form>
                  <p className="text-sm text-blue-200 mt-4 text-center">
                    🔒 We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
