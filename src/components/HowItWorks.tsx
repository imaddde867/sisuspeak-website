"use client";

import { motion } from '@/utils/motion';


const HowItWorks = () => {
  

  const steps = [
    {
      number: '01',
      title: 'Choose your tutor',
      description: 'Pick from our Sisu family based on your goals—Senior for business, Äiti for daily life, Nuori for culture, or Lapsi for beginners.',
      delay: 0.1,
    },
    {
      number: '02',
      title: 'Start talking',
      description: 'Jump right into natural conversations. No scripts, no awkward exercises—just real Finnish speaking practice.',
      delay: 0.3,
    },
    {
      number: '03',
      title: 'Improve naturally',
      description: 'Get instant feedback on pronunciation and grammar while building confidence through real conversation.',
      delay: 0.5,
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
            How Sisu Speak <span className="gradient-text">Transforms Finnish Learning</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience a revolutionary way to master Finnish in three simple steps:
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
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
            🎙️ Start Speaking Free →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
