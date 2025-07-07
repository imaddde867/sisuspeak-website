"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from '@/utils/motion';

import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const FAQSection = () => {
  
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this like Duolingo?",
      answer: "Not at all! While Duolingo focuses on vocabulary and grammar exercises, Sisu Speak is all about real conversations. You'll speak with AI tutors who respond naturally, give instant feedback, and adapt to your interests—like having a Finnish friend to practice with anytime."
    },
    {
      question: "Do I need to know Finnish already?",
      answer: "Absolutely not! Sisu Lapsi is perfect for complete beginners. Our AI tutors meet you exactly where you are—whether you're saying your first 'Hei' or preparing for advanced business meetings. Each tutor adapts to your level automatically."
    },
    {
      question: "Is it voice or text-based?",
      answer: "Primarily voice! We believe you learn to speak by speaking. You'll have natural voice conversations with our AI tutors, though you can also type if needed. Our advanced speech recognition understands your pronunciation and helps you improve."
    },
    {
      question: "How is this different from other Finnish apps?",
      answer: "Most apps teach Finnish like a textbook—lots of rules, little conversation. Sisu Speak teaches Finnish like you'd learn from a friend. Real conversations, instant feedback, personalized to your goals, and four unique personalities to keep it interesting."
    },
    {
      question: "Can I really learn Finnish just by talking?",
      answer: "Yes! Speaking is how children learn their first language, and it's the most natural way to learn Finnish too. Our AI tutors provide grammar guidance within conversations, so you learn structure naturally while building real communication skills."
    },
    {
      question: "What if I'm too shy to speak?",
      answer: "Perfect! Sisu Speak was designed precisely for this. Our AI tutors are infinitely patient, completely non-judgmental, and provide a safe, private space for you to practice Finnish. Start with Sisu Lapsi for gentle encouragement and gradually build your confidence at your own pace."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
            <FaQuestionCircle className="h-4 w-4 mr-2" />
            Questions & Answers
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Everything you need to know about learning Finnish with Sisu Speak
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openFAQ === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FaChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-blue-800 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Have more questions? <a href="/contact" className="ml-1 underline hover:no-underline">Get in touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
