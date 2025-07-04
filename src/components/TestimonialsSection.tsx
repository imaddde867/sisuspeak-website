"use client";

import { motion } from '@/utils/motion';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  

  const testimonials = [
    {
      name: "Maria S.",
      role: "International Student",
      location: "Helsinki",
      quote: "Finally! I can practice language without feeling embarrassed. Sisu Senior helped me ace my university interviews in just 3 months.",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "James K.",
      role: "Software Developer",
      location: "Tampere",
      quote: "I tried Duolingo for years but never could have a real conversation. With Sisu Speak, I'm actually talking to my language colleagues now!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Anna L.",
      role: "New Mother",
      location: "Turku",
      quote: "Sisu Äiti made learning language feel natural and stress-free. Perfect for busy parents who want to integrate into language society.",
      rating: 5,
      avatar: "👩‍👶"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6 border border-yellow-200">
            <FaStar className="h-4 w-4 mr-2" />
            Success Stories
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            What <span className="gradient-text">Learners Say</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Real stories from people who transformed their speaking skills with Sisu Speak
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200 relative"
            >
              <div className="absolute top-4 right-4 text-blue-100">
                <FaQuoteLeft className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Join thousands of successful language learners
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
