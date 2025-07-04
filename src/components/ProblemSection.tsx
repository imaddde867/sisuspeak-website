"use client";


import { FaExclamationTriangle, FaClock, FaRobot, FaCommentSlash, FaChartLine } from 'react-icons/fa';

const ProblemSection = () => {
  
  
  // Removed useEffect for creating stars in the problem section

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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Static star field background */}
      <div className="star-field"></div>
      
      {/* Simplified background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-blue-50/20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            The Challenge
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Why is language <span className="gradient-text">still so hard to learn?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Most language learning methods fail because they treat language like a puzzle to solve, 
            not a language to speak. Sound familiar?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-200 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="h-14 w-14 bg-blue-100 hover:bg-blue-500 rounded-xl flex items-center justify-center text-blue-600 hover:text-white mb-4 transition-colors duration-200">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
