"use client";

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from '@/utils/motion';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';
import { FaChevronLeft, FaChevronRight, FaBriefcase, FaHeart, FaCommentDots, FaStar } from 'react-icons/fa';

const TutorsCarousel = () => {
  const [currentTutor, setCurrentTutor] = useState(0);

  const tutors = [
    {
      name: "Sisu Senior",
      role: "Professional & Academic Guide",
      description: "Teaches for work, studies, and formal settings, focusing on advanced vocabulary and structures.",
      icon: <FaBriefcase className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      image: "/images/Sisu_Senior.PNG",
      specialties: ["Business Finnish", "Academic Writing", "Professional Meetings", "Formal Presentations"],
      personality: "Experienced, patient, and detail-oriented"
    },
    {
      name: "Sisu Äiti",
      role: "Everyday & Family Conversation Partner",
      description: "Specializes in conversational Finnish for daily life, partners, and family interactions, building practical fluency.",
      icon: <FaHeart className="h-6 w-6 text-white" />,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      image: "/images/Sisu_Äiti.PNG",
      specialties: ["Daily Conversations", "Family Topics", "Shopping & Errands", "Social Situations"],
      personality: "Warm, encouraging, and practical"
    },
    {
      name: "Sisu Nuori",
      role: "Cultural & Social Companion",
      description: "Focuses on modern culture, slang, and social interactions, perfect for connecting with young people.",
      icon: <FaCommentDots className="h-6 w-6 text-white" />,
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      image: "/images/Sisu_Nuori.PNG",
      specialties: ["Modern Slang", "Youth Culture", "Social Media", "Casual Conversations"],
      personality: "Fun, trendy, and relatable"
    },
    {
      name: "Sisu Lapsi",
      role: "Playful Learning Buddy",
      description: "Makes learning fun with games, stories, and child-friendly approaches, ideal for beginners and young learners.",
      icon: <FaStar className="h-6 w-6 text-white" />,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      image: "/images/Sisu_Lapsi.PNG",
      specialties: ["Basic Vocabulary", "Playful Learning", "Simple Phrases", "Beginner Confidence"],
      personality: "Playful, patient, and encouraging"
    },
  ];

  const nextTutor = useCallback(() => {
    setCurrentTutor((prev) => (prev + 1) % tutors.length);
  }, [tutors.length]);

  const prevTutor = useCallback(() => {
    setCurrentTutor((prev) => (prev - 1 + tutors.length) % tutors.length);
  }, [tutors.length]);

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
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTutor}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className={`bg-white ${tutors[currentTutor].borderColor} border-2 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className={`${tutors[currentTutor].bgColor} p-8 lg:p-10`}>
                  {/* Header */}
                  <div className="flex items-start mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${tutors[currentTutor].color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      {tutors[currentTutor].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {tutors[currentTutor].name}
                      </h3>
                      <p className="text-gray-600 font-medium text-sm">
                        {tutors[currentTutor].role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {tutors[currentTutor].description}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tutors[currentTutor].specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-700 shadow-sm border border-gray-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Personality */}
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                    <span className="font-medium">Personality:</span>
                    <span className="ml-2">{tutors[currentTutor].personality}</span>
                  </div>
                </div>
                
                {/* Right Side - Image */}
                <div className="relative flex items-center justify-center p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl"></div>
                    <Image
                      src={getAssetPath(tutors[currentTutor].image)}
                      alt={`${tutors[currentTutor].name} - AI Finnish tutor`}
                      width={300}
                      height={300}
                      className="relative w-72 h-72 object-contain rounded-2xl"
                      priority={currentTutor === 0}
                    />
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                      <span className="text-2xl">🇫🇮</span>
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