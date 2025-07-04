'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { motion, AnimatePresence } from '@/utils/motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Getting Started",
    question: "What is Sisu Speak?",
    answer: "Sisu Speak is an AI-powered language language learning platform that teaches through natural conversations. Our virtual tutors help you learn language in a more engaging and effective way than traditional methods."
  },
  {
    category: "Getting Started",
    question: "How does the AI conversation system work?",
    answer: "Our AI tutors use advanced natural language processing to have realistic conversations with you in language. They adapt to your skill level, correct mistakes gently, and provide contextual learning opportunities."
  },
  {
    category: "Getting Started",
    question: "Do I need any prior language knowledge?",
    answer: "Not at all! Sisu Speak is designed for learners of all levels, from complete beginners to advanced speakers looking to improve their conversational skills."
  },
  {
    category: "Features",
    question: "What makes Sisu Speak different from other language apps?",
    answer: "Unlike traditional apps that focus on repetitive exercises, Sisu Speak emphasizes natural conversation practice. Our AI tutors provide personalized feedback and adapt to your learning style in real-time."
  },
  {
    category: "Features",
    question: "Can I practice pronunciation?",
    answer: "Yes! Our platform includes advanced speech recognition technology that helps you practice language pronunciation and provides instant feedback on your accent and clarity."
  },
  {
    category: "Features",
    question: "Are there different difficulty levels?",
    answer: "Absolutely. Our AI automatically adjusts the conversation complexity based on your progress, ensuring you're always challenged but never overwhelmed."
  },
  {
    category: "Pricing",
    question: "How much does Sisu Speak cost?",
    answer: "We're currently in development and building our waitlist. Early subscribers will receive special pricing and exclusive access when we launch. Join our waitlist to be notified!"
  },
  {
    category: "Pricing",
    question: "Will there be a free trial?",
    answer: "Yes! We plan to offer a free trial period so you can experience the power of AI-driven language learning before committing to a subscription."
  },
  {
    category: "Technical",
    question: "What devices can I use Sisu Speak on?",
    answer: "Sisu Speak will be available as a web application that works on all modern browsers, with mobile apps for iOS and Android coming soon after launch."
  },
  {
    category: "Technical",
    question: "Do I need an internet connection?",
    answer: "Yes, an internet connection is required for the AI conversations and real-time feedback. However, we're working on offline features for basic practice sessions."
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about Sisu Speak and our AI-powered language learning platform."
    >
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 px-2 sm:px-0">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 min-h-[48px] active:scale-95 ${
                  selectedCategory === 'All'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Questions
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 min-h-[48px] active:scale-95 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={`${item.question}-${selectedCategory}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl min-h-[64px] active:scale-[0.99]"
                  aria-expanded={openItems.includes(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base leading-relaxed">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Can&apos;t find the answer you&apos;re looking for? We&apos;d love to help you out.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[48px] active:scale-95"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQPage;
