"use client";

import Image from 'next/image';
import { motion } from '@/utils/motion';
import { FaBriefcase, FaHeart, FaCommentDots, FaStar } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/paths';

const About = () => {
  const { t } = useLanguage();

  const sisuFamily = [
    {
      name: t('about.sisuSenior.name'),
      role: t('about.sisuSenior.role'),
      description: t('about.sisuSenior.description'),
      icon: <FaBriefcase className="h-6 w-6 text-blue-600" />,
    },
    {
      name: t('about.sisuAiti.name'),
      role: t('about.sisuAiti.role'),
      description: t('about.sisuAiti.description'),
      icon: <FaHeart className="h-6 w-6 text-blue-600" />,
    },
    {
      name: t('about.sisuNuori.name'),
      role: t('about.sisuNuori.role'),
      description: t('about.sisuNuori.description'),
      icon: <FaCommentDots className="h-6 w-6 text-blue-600" />,
    },
    {
      name: t('about.sisuLapsi.name'),
      role: t('about.sisuLapsi.role'),
      description: t('about.sisuLapsi.description'),
      icon: <FaStar className="h-6 w-6 text-blue-600" />,
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
            {t('about.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('about.subtitle')}
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
              src={getAssetPath('/images/family.PNG')}
              alt="Meet the Sisu Family - Four deer characters representing our AI Finnish language tutors"
              width={300}
              height={300}
              className="max-w-xs sm:max-w-sm"
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
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                {member.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
