"use client";

import { ReactNode } from 'react';
import { motion } from '@/utils/motion';
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

const FeatureCard = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 hover:-translate-y-1"
    >
      {/* Icon container */}
      <div className="h-12 w-12 bg-blue-100 group-hover:bg-blue-500 rounded-xl flex items-center justify-center text-blue-600 group-hover:text-white mb-4 transition-all duration-200">
        <div className="text-lg">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
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
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Why Choose Sisu Speak
          </div>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl font-heading mb-4">
            <span className="block">AI-Powered Learning</span>
            <span className="block gradient-text">That Actually Works</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Our AI-powered approach makes learning Finnish effective, enjoyable, and tailored to you.
            Experience the future of language learning today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
