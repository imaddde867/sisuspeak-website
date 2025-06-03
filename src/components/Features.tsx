"use client";

import { ReactNode } from 'react';

import { 
  FaMicrophone, 
  FaCommentDots, 
  FaChartLine, 
  FaGamepad 
} from 'react-icons/fa';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description }: Omit<FeatureProps, 'delay'>) => {
  return (
    <div
      className="group bg-white rounded-2xl p-6 sm:p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 min-h-[200px] sm:min-h-[180px] active:scale-95"
      tabIndex={0}
      role="article"
      aria-labelledby={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {/* Icon container */}
      <div className="h-14 w-14 sm:h-12 sm:w-12 bg-blue-100 group-hover:bg-blue-500 group-focus-within:bg-blue-500 rounded-xl flex items-center justify-center text-blue-600 group-hover:text-white group-focus-within:text-white mb-4 sm:mb-4 transition-all duration-200 mx-auto sm:mx-0">
        <div className="text-xl sm:text-lg" aria-hidden="true">
          {icon}
        </div>
      </div>

      <h3
        id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-lg sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-2 group-hover:text-blue-700 group-focus-within:text-blue-700 transition-colors duration-200 text-center sm:text-left"
      >
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm sm:text-base text-center sm:text-left">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FaCommentDots className="h-6 w-6" />,
      title: "Conversational Learning",
      description: "Learn Finnish naturally through engaging conversations with the Sisu family AI tutors, tailored to your level and interests.",
      delay: 0.1
    },
    {
      icon: <FaMicrophone className="h-6 w-6" />,
      title: "Pronunciation Feedback",
      description: "Receive instant, personalized feedback on your pronunciation to sound more like a native Finnish speaker.",
      delay: 0.2
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: "Adaptive Curriculum",
      description: "Our AI adapts to your progress, focusing on areas where you need more practice while keeping you challenged.",
      delay: 0.3
    },
    {
      icon: <FaGamepad className="h-6 w-6" />,
      title: "Engaging Scenarios",
      description: "Practice Finnish in realistic scenarios like ordering food, asking for directions, or having casual conversations.",
      delay: 0.4
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Why Choose Sisu Speak
          </div>

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl mb-4 px-4 sm:px-0" style={{ fontFamily: 'var(--font-poppins)' }}>
            <span className="block">AI-Powered Learning</span>
            <span className="block gradient-text">That Actually Works</span>
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed px-4 sm:px-0">
            Our AI-powered approach makes learning Finnish effective, enjoyable, and tailored to you.
            Experience the future of language learning today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
