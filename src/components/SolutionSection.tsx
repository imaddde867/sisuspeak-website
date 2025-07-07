"use client";

import { motion } from '@/utils/motion';

import { FaCommentDots, FaBolt, FaHeart, FaStar } from 'react-icons/fa';

const SolutionSection = () => {
  

  const benefits = [
    {
      icon: <FaCommentDots className="h-6 w-6" />,
      title: "Authentic Finnish Conversations",
      description: "Engage in dynamic, natural conversations with AI Finnish tutors that mimic real-life interactions, fostering true fluency."
    },
    {
      icon: <FaBolt className="h-6 w-6" />,
      title: "Immediate, Actionable Feedback",
      description: "Receive instant, precise corrections on your Finnish pronunciation, grammar, and conversational flow, accelerating your learning."
    },
    {
      icon: <FaHeart className="h-6 w-6" />,
      title: "Tailored Learning Experience",
      description: "Our AI tutors personalize lessons to your interests, proficiency level, and learning pace, making Finnish acquisition highly effective."
    },
    {
      icon: <FaStar className="h-6 w-6" />,
      title: "Judgment-Free Practice Environment",
      description: "Build confidence in speaking Finnish within a supportive, private space where mistakes are learning opportunities, not sources of embarrassment."
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
            Introducing Sisu Speak: <span className="gradient-text">Your AI Finnish Conversation Partner</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Forget rote memorization. Sisu Speak offers natural, AI-driven conversations that adapt to your unique learning journey, providing instant feedback and building genuine fluency in Finnish.
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
