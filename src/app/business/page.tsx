"use client";

import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { motion, fadeInUp } from '@/utils/motion';

export default function BusinessPage() {
  return (
    <PageLayout
      title="SisuSpeak for Companies & Institutions"
      description="Empower your team, students, or organization with AI-powered Finnish language learning at scale. SisuSpeak partners with businesses, schools, and organizations to deliver personalized, real-time Finnish language tutoring—anytime, anywhere."
    >
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px -10% 0px' }}>
          <Card className="p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3">Why SisuSpeak?</h2>
            <ul className="text-gray-700 space-y-2 text-sm sm:text-base list-disc list-inside">
              <li>Custom AI language solution for expats, students, and immigrant workers</li>
              <li>Scalable for teams, classes, or entire organizations</li>
              <li>Real-time conversation practice with instant feedback</li>
              <li>Easy onboarding and progress tracking for admins</li>
              <li>Flexible deployment: web, mobile, and API</li>
            </ul>
          </Card>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px -10% 0px' }}>
          <Card className="p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3">How It Works</h2>
            <ol className="text-gray-700 space-y-2 text-sm sm:text-base list-decimal list-inside">
              <li>Contact us to discuss your needs</li>
              <li>We design a custom solution and onboarding plan</li>
              <li>Launch SisuSpeak and monitor progress</li>
              <li>Enjoy ongoing support and updates</li>
            </ol>
          </Card>
          </motion.div>
        </div>
        <div className="flex justify-center my-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-base shadow hover:bg-blue-700 transition-colors"
          >
            Contact Us for a Demo
          </Link>
        </div>
        <p className="text-center text-gray-700 text-sm sm:text-base mt-6">
          <span className="font-semibold text-blue-700">Who We Work With:</span> Language schools, online education platforms, cultural integration programs, HR departments, and more. Join leading organizations in empowering your people with real-world Finnish skills.
        </p>
      </Section>
    </PageLayout>
  );
}
