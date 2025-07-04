"use client";

import Image from 'next/image';
import { motion } from '@/utils/motion';
import { FaBriefcase, FaHeart, FaCommentDots, FaStar } from 'react-icons/fa';

import { getAssetPath } from '@/utils/paths';

const About = () => {
  

  const sisuFamily = [
    {
      name: "Sisu Senior",
      role: "Professional & Academic Guide",
      description: "Teaches for work, studies, and formal settings, focusing on advanced vocabulary and structures.",
      icon: <FaBriefcase className="h-6 w-6 text-blue-600" />,
      image: "/images/Sisu_Senior.PNG",
    },
    {
      name: "Sisu Äiti",
      role: "Everyday & Family Conversation Partner",
      description: "Specializes in conversational language for daily life, partners, and family interactions, building practical fluency.",
      icon: <FaHeart className="h-6 w-6 text-pink-600" />,
      image: "/images/Sisu_Äiti.PNG",
    },
    {
      name: "Sisu Nuori",
      role: "Cultural & Social Companion",
      description: "Focuses on modern culture, slang, and social interactions, perfect for connecting with young people.",
      icon: <FaCommentDots className="h-6 w-6 text-purple-600" />,
      image: "/images/Sisu_Nuori.PNG",
    },
    {
      name: "Sisu Lapsi",
      role: "Playful Learning Buddy",
      description: "Makes learning fun with games, stories, and child-friendly approaches, ideal for beginners and young learners.",
      icon: <FaStar className="h-6 w-6 text-yellow-600" />,
      image: "/images/Sisu_ Lapsi.PNG",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={getAssetPath('/images/Family-Pose.png')}
              alt="Meet the Sisu Family - Four deer characters representing our AI language language tutors"
              width={400}
              height={400}
              className="max-w-sm sm:max-w-md"
            />
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sisuFamily.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">
                <Image
                  src={getAssetPath(member.image)}
                  alt={`${member.name} - AI language tutor`}
                  width={180}
                  height={180}
                  className="rounded-lg"
                />
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full mb-3 flex items-center justify-center">
                {member.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
