"use client";

import { motion } from '@/utils/motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaExclamationTriangle, FaClock, FaRobot, FaCommentSlash, FaChartLine } from 'react-icons/fa';

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: <FaRobot className="h-6 w-6" />,
      title: "Too Formal & Boring",
      description: "Traditional methods focus on grammar rules instead of real conversation"
    },
    {
      icon: <FaCommentSlash className="h-6 w-6" />,
      title: "No Real Feedback",
      description: "Apps can't tell you if you're actually speaking correctly or naturally"
    },
    {
      icon: <FaClock className="h-6 w-6" />,
      title: "Progress Too Slow",
      description: "Months of studying but still can't have a basic conversation"
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: "Not Personalized",
      description: "One-size-fits-all approach doesn't match your learning style or goals"
    },
    {
      icon: <FaExclamationTriangle className="h-6 w-6" />,
      title: "Fear of Speaking",
      description: "No safe space to practice without judgment or embarrassment"
    }
  ];

  return (
    <section className="py-16 bg-red-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Why is Finnish <span className="text-red-600">still so hard to learn?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Most language learning methods fail because they treat Finnish like a puzzle to solve, 
            not a language to speak. Sound familiar?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg mb-4 flex items-center justify-center text-red-600">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-100 text-red-800 text-sm font-medium">
            <FaExclamationTriangle className="h-4 w-4 mr-2" />
            There has to be a better way...
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
