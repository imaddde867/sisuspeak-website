"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from '@/utils/motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';
import { FaChevronLeft, FaChevronRight, FaBriefcase, FaHeart, FaCommentDots, FaStar } from 'react-icons/fa';

const TutorsCarousel = () => {
  const { t } = useLanguage();
  const [currentTutor, setCurrentTutor] = useState(0);

  const tutors = [
    {
      name: t('about.sisuSenior.name'),
      role: t('about.sisuSenior.role'),
      description: t('about.sisuSenior.description'),
      icon: <FaBriefcase className="h-8 w-8 text-blue-600" />,
      color: "from-blue-500 to-blue-600",
      image: "/images/Sisu_Senior.PNG",
      specialties: ["Business Finnish", "Academic Writing", "Professional Meetings", "Formal Presentations"],
      personality: "Experienced, patient, and detail-oriented"
    },
    {
      name: t('about.sisuAiti.name'),
      role: t('about.sisuAiti.role'),
      description: t('about.sisuAiti.description'),
      icon: <FaHeart className="h-8 w-8 text-pink-600" />,
      color: "from-pink-500 to-pink-600",
      image: "/images/Sisu_Äiti.PNG",
      specialties: ["Daily Conversations", "Family Topics", "Shopping & Errands", "Social Situations"],
      personality: "Warm, encouraging, and practical"
    },
    {
      name: t('about.sisuNuori.name'),
      role: t('about.sisuNuori.role'),
      description: t('about.sisuNuori.description'),
      icon: <FaCommentDots className="h-8 w-8 text-green-700" />,
      color: "from-green-600 to-green-800",
      image: "/images/Sisu_Nuori.PNG",
      specialties: ["Modern Slang", "Youth Culture", "Social Media", "Casual Conversations"],
      personality: "Fun, trendy, and relatable"
    },
    {
      name: t('about.sisuLapsi.name'),
      role: t('about.sisuLapsi.role'),
      description: t('about.sisuLapsi.description'),
      icon: <FaStar className="h-8 w-8 text-yellow-600" />,
      color: "from-yellow-500 to-yellow-600",
      image: "/images/Sisu_Lapsi.PNG",
      specialties: ["Basic Vocabulary", "Playful Learning", "Simple Phrases", "Beginner Confidence"],
      personality: "Playful, patient, and encouraging"
    },
  ];

  const nextTutor = () => {
    setCurrentTutor((prev) => (prev + 1) % tutors.length);
  };

  const prevTutor = () => {
    setCurrentTutor((prev) => (prev - 1 + tutors.length) % tutors.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Your AI Tutors
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Meet the <span className="gradient-text">Sisu Tutor Family</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Four unique AI tutors, each with their own personality and expertise. 
            Choose the perfect conversation partner for your learning goals.
          </p>
        </motion.div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center mb-8">
          <button
            onClick={prevTutor}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 mr-4"
            aria-label="Previous tutor"
          >
            <FaChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="flex space-x-2">
            {tutors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTutor(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTutor ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Select tutor ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTutor}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ml-4"
            aria-label="Next tutor"
          >
            <FaChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Tutor Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTutor}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-br ${tutors[currentTutor].color} rounded-3xl p-8 text-white shadow-2xl`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      {tutors[currentTutor].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {tutors[currentTutor].name}
                      </h3>
                      <p className="text-white/80 font-medium">
                        {tutors[currentTutor].role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    {tutors[currentTutor].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Specialties:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tutors[currentTutor].specialties.map((specialty, index) => (
                        <div
                          key={index}
                          className="bg-white/20 rounded-lg px-3 py-2 text-sm font-medium"
                        >
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-white/80">
                    <strong>Personality:</strong> {tutors[currentTutor].personality}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <Image
                      src={getAssetPath(tutors[currentTutor].image)}
                      alt={`${tutors[currentTutor].name} - AI Finnish tutor`}
                      width={350}
                      height={350}
                      className="w-80 h-80 object-contain rounded-2xl"
                    />
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xl">🇫🇮</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-blue-800 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Four personalities, unlimited conversations
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TutorsCarousel;
