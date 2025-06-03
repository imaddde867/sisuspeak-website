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
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Why Choose Sisu Speak?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Our AI-powered approach makes learning Finnish effective, enjoyable, and tailored to you.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
