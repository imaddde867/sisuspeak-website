"use client";

import { motion } from '@/utils/motion';
import { FaExclamationTriangle, FaClock, FaRobot, FaCommentSlash, FaChartLine } from 'react-icons/fa';

const ProblemSection = () => {
  const problems = [
    {
      icon: <FaRobot className="h-6 w-6" />,
      title: "Overly Formal & Unengaging",
      description: "Traditional Finnish learning methods often prioritize rigid grammar rules over practical, engaging conversation practice."
    },
    {
      icon: <FaCommentSlash className="h-6 w-6" />,
      title: "Lack of Real-time Feedback",
      description: "Most language apps don't provide immediate, constructive feedback on your spoken Finnish, hindering natural progression."
    },
    {
      icon: <FaClock className="h-6 w-6" />,
      title: "Slow Progress & Frustration",
      description: "Despite significant study time, many learners struggle to achieve conversational fluency in Finnish, leading to demotivation."
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: "Impersonal Learning Paths",
      description: "Generic language courses fail to adapt to individual learning styles, interests, or specific Finnish language goals."
    },
    {
      icon: <FaExclamationTriangle className="h-6 w-6" />,
      title: "Anxiety Around Speaking",
      description: "The fear of making mistakes or being judged often prevents learners from practicing spoken Finnish in real-world scenarios."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Static star field background */}
      <div className="star-field"></div>
      
      {/* Simplified background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-blue-50/20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-20px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            The Challenge
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Why is Learning Finnish <span className="gradient-text">Still So Hard?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Many traditional Finnish language learning methods fall short, treating the language like a complex puzzle rather than a living conversation. Does this sound familiar?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => (
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
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg border border-blue-100 hover:border-blue-200 flex flex-col h-full"
            >
              <motion.div 
                className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4"
                whileHover={{ backgroundColor: "#3b82f6", color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                {problem.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
