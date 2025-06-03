"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { trackEmailSignup } from '@/utils/analytics';
import { validateEmail, sanitizeInput } from '@/utils/validation';
import { submitFormData, FormSubmissionQueue } from '@/utils/api';
import { sendWelcomeEmailWithFallback } from '@/utils/emailService';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = sanitizeInput(e.target.value);
    setEmail(value);
    setErrors({});
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Submit form data with retry logic
      const formData = {
        email: email,
        source: 'Sisu Speak Waitlist',
        timestamp: new Date().toISOString(),
        page: 'signup'
      };

      const success = await submitFormData(formData);

      if (success) {
        setSubmitted(true);

        // Track successful signup
        trackEmailSignup(email, 'Sisu Speak Waitlist', 'signup');

        // Send welcome email
        try {
          await sendWelcomeEmailWithFallback(email);
          console.log('Welcome email sent to:', email);
        } catch (emailError) {
          console.error('Failed to send welcome email:', emailError);
          // Don't fail the signup if email fails
        }

        setEmail('');
        setIsValidEmail(false);

        console.log('Waitlist signup successful:', email);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Signup error:', error);

      // Queue for later if offline
      FormSubmissionQueue.add({
        email: email,
        source: 'Sisu Speak Waitlist',
        timestamp: new Date().toISOString(),
        page: 'signup'
      });

      setErrors({ submit: 'Something went wrong. We\'ve saved your email and will try again automatically.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-16 sm:py-20">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Early Access Available
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Join the <span className="text-yellow-300">Sisu</span> Waitlist
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Be among the first to experience AI-powered Finnish learning. Get notified when we launch.
          </p>
        </div>
      </div>

      {/* Main Form Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center border border-gray-100">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-500 mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">You&apos;re on the list! 🎉</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Thank you for joining our waitlist. We&apos;ll notify you as soon as Sisu Speak is ready for early access.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s next?</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>We&apos;ll send you exclusive updates</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Early access before public launch</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Special launch pricing</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add Another Email
                </button>
                <Link
                  href="/"
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Get Early Access</h2>
                <p className="text-gray-600 leading-relaxed">
                  Join thousands of language learners waiting for the future of Finnish education.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl text-lg transition-all duration-200 min-h-[56px] text-gray-900 bg-white ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                          : isValidEmail
                            ? 'border-green-400 focus:border-green-500 focus:ring-green-500'
                            : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-20 placeholder-gray-400`}
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />

                    {/* Email validation indicator */}
                    {email && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        {isValidEmail ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </p>
                  )}

                  {errors.submit && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.submit}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!isValidEmail || isSubmitting}
                  className={`w-full font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[56px] ${
                    !isValidEmail || isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining Waitlist...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Join Waitlist
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Trust indicators */}
                <div className="text-center pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">
                    🔒 We respect your privacy. No spam, unsubscribe anytime.
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Free to join</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Early access</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Special pricing</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
