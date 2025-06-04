"use client";

import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string>('');

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
    setFocusedField('');
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocusedField(e.target.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all required fields
    const newErrors: Record<string, string> = {};
    newErrors.name = validateField('name', formData.name);
    newErrors.email = validateField('email', formData.email);
    newErrors.message = validateField('message', formData.message);

    const hasErrors = Object.values(newErrors).some(error => error !== '');

    if (hasErrors) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Submitting contact form...', formData);

      // Send contact form to Formspree (configured to send to imadeddine200507@gmail.com)
      const response = await fetch('https://formspree.io/f/mwpbkgao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'General Inquiry',
          message: formData.message,
          company: formData.company || '',
          phone: formData.phone || '',
          source: 'Sisu Speak Contact Form',
          timestamp: new Date().toISOString(),
          page: 'contact',
          _replyto: formData.email,
          _subject: `New Contact Form Submission: ${formData.subject || 'General Inquiry'}`,
        }),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          company: '',
          phone: ''
        });
        console.log('Contact form submitted successfully');
      } else {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`Failed to submit: ${response.status}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Have questions about Sisu Speak? We&apos;d love to hear from you and answer any questions about our AI-powered Finnish learning platform."
    >
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="lg:pr-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ready to start your Finnish learning journey? Have questions about our AI tutors?
                  We&apos;re here to help you every step of the way.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">hello@sisuspeak.com</p>
                      <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Turku, Finland</p>
                      <p className="text-sm text-gray-500 mt-1">The heart of Finnish innovation</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Help</h3>
                      <p className="text-gray-600">Check our FAQ</p>
                      <a href="/faq" className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
                        Browse common questions →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-6">
                      <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent! 🎉</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Thank you for reaching out! We&apos;ve received your message and our team will get back to you within 24 hours.
                    </p>
                    <div className="space-y-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Send Another Message
                      </button>
                      <a
                        href="/faq"
                        className="block w-full text-center bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-200"
                      >
                        Browse FAQ
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              required
                              className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-base min-h-[52px] text-gray-900 bg-white ${
                                errors.name
                                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                  : focusedField === 'name'
                                    ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-500'
                                    : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                              } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                              placeholder="Your full name"
                            />
                            {focusedField === 'name' && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                              </div>
                            )}
                          </div>
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              required
                              className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-base min-h-[52px] text-gray-900 bg-white ${
                                errors.email
                                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                  : focusedField === 'email'
                                    ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-500'
                                    : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                              } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                              placeholder="your@email.com"
                            />
                            {focusedField === 'email' && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                              </div>
                            )}
                          </div>
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Company and Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                            Company <span className="text-gray-400">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-base min-h-[52px] text-gray-900 bg-white ${
                              focusedField === 'company'
                                ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-500'
                                : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                            } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                            placeholder="Your company name"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone <span className="text-gray-400">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-base min-h-[52px] text-gray-900 bg-white ${
                              focusedField === 'phone'
                                ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-500'
                                : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                            } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                            placeholder="+358 XX XXX XXXX"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          id="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-all duration-200 text-base min-h-[52px] text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500"
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="demo">Request a Demo</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="support">Technical Support</option>
                          <option value="feedback">Feedback & Suggestions</option>
                          <option value="press">Press & Media</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            rows={5}
                            required
                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 text-base resize-none text-gray-900 bg-white ${
                              errors.message
                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                : focusedField === 'message'
                                  ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-500'
                                  : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                            } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                            placeholder="Tell us about your Finnish learning goals, questions about our AI tutors, or how we can help you..."
                          />
                          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                            {formData.message.length}/500
                          </div>
                        </div>
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full flex items-center justify-center py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            isSubmitting
                              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl active:scale-95'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Privacy Notice */}
                      <div className="text-center">
                        <p className="text-xs text-gray-500">
                          By submitting this form, you agree to our{' '}
                          <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                            Privacy Policy
                          </a>{' '}
                          and{' '}
                          <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                            Terms of Service
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
