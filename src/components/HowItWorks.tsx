"use client";

import { motion } from '@/utils/motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Speak naturally',
      description:
        'Practice Finnish by having natural conversations with our AI tutors. Speak into your device and get real-time feedback.',
      delay: 0.1,
    },
    {
      number: '02',
      title: 'Receive instant feedback',
      description:
        'Our AI analyzes your pronunciation, grammar, and conversational flow, providing specific guidance on how to improve.',
      delay: 0.3,
    },
    {
      number: '03',
      title: 'Track your progress',
      description:
        'Watch your Finnish skills develop over time with detailed progress tracking and personalized learning recommendations.',
      delay: 0.5,
    },
    {
      number: '04',
      title: 'Master Finnish',
      description:
        'Gradually build your confidence and fluency through regular practice with different scenarios and difficulty levels.',
      delay: 0.7,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How Sisu Speak Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A simple process designed to make language learning effective and engaging.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: step.delay }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-100 relative"
            >
              <div className="text-5xl font-bold text-blue-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience a new way of learning Finnish?
          </p>
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
