"use client";

import { motion } from '@/utils/motion';

import { FaCommentDots, FaBolt, FaHeart, FaStar } from 'react-icons/fa';

const SolutionSection = () => {
  

  const benefits = [
    {
      icon: <FaCommentDots className="h-6 w-6" />,
      title: "Real Conversations",
      description: "Practice with AI tutors that respond naturally, just like talking to a Finnish friend"
    },
    {
      icon: <FaBolt className="h-6 w-6" />,
      title: "Instant Feedback",
      description: "Get immediate corrections on pronunciation, grammar, and natural flow"
    },
    {
      icon: <FaHeart className="h-6 w-6" />,
      title: "Personalized Learning",
      description: "Each tutor adapts to your interests, goals, and learning pace"
    },
    {
      icon: <FaStar className="h-6 w-6" />,
      title: "Safe Practice Space",
      description: "Build confidence without fear of judgment in a supportive environment"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-20px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            The Solution
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Meet Sisu-Speak: <span className="gradient-text">Finnish Tutors That Talk Back</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Instead of memorizing grammar rules, you&apos;ll have natural conversations with AI tutors 
            who understand context, provide instant feedback, and adapt to your unique learning style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-20px" }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50 text-center hover:shadow-lg hover:border-blue-200"
            >
              <motion.div 
                className="w-14 h-14 bg-blue-100 rounded-2xl mb-4 flex items-center justify-center text-blue-600 mx-auto"
                whileHover={{ backgroundColor: "#3b82f6", color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-20px" }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Learning Finnish has never been this natural
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
