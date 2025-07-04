"use client";

import { useState } from 'react';
import { sendWelcomeEmailWithFallback } from '@/utils/emailService';
import { trackEmailSignup } from '@/utils/analytics';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError('');
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Send email to Formspree
      const response = await fetch('https://formspree.io/f/mwpbkgao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          source: 'Sisu Speak CTA',
          timestamp: new Date().toISOString(),
          page: 'homepage'
        }),
      });

      if (response.ok) {
        setSubmitted(true);

        // Track successful email signup
        trackEmailSignup(email, 'Sisu Speak CTA', 'homepage', {
          formType: 'cta_waitlist',
          location: 'homepage_cta_section'
        });

        // Send welcome email
        try {
          await sendWelcomeEmailWithFallback(email);
        } catch (emailError) {
          console.error('Failed to send welcome email:', emailError);
          // Don't fail the signup if email fails
        }

        setEmail('');
        setIsValidEmail(false);
      } else {
        const errorText = await response.text();
        console.error('CTA Response error:', errorText);
        throw new Error(`Failed to submit: ${response.status}`);
      }
    } catch (error) {
      console.error('CTA Submission error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Join Early Access
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
              <span className="block">Start Speaking Naturally</span>
              <span className="block text-yellow-300">With AI Conversations</span>
            </h2>

            <p className="text-lg text-blue-100 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Sign up to be among the first to experience our revolutionary AI-powered speaking practice
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
                  <h3 className="text-xl font-bold text-white mb-2">Thank you for joining!</h3>
                  <p className="text-blue-100 mb-4">You're now on our early access list. We'll notify you when Sisu Speak is ready.</p>
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
                    Get early access
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleEmailChange}
                          disabled={isLoading}
                          className={`w-full px-4 py-3 pr-10 bg-white/20 border rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                            error
                              ? 'border-red-400 focus:ring-red-400'
                              : isValidEmail
                                ? 'border-green-400 focus:ring-green-400'
                                : 'border-white/30 focus:ring-yellow-400'
                          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                          placeholder="your@email.com"
                          required
                        />
                        {/* Email validation indicator */}
                        {email && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {isValidEmail ? (
                              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                      {error && (
                        <p className="mt-2 text-sm text-red-300 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {error}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={!isValidEmail || isLoading}
                      className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-600 button-press ${
                        !isValidEmail || isLoading
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                          : 'bg-yellow-400 hover:bg-yellow-500 text-blue-900 hover:scale-105'
                      }`}
                    >                          {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Joining<span className="loading-dots"></span>
                        </span>
                      ) : (
                        "Join Waitlist"
                      )}
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
