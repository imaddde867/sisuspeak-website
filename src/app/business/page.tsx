"use client";

import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { motion } from '@/utils/motion';

export default function BusinessPage() {
  return (
    <PageLayout
      title="SisuSpeak for Companies & Institutions"
      description="Empower your team, students, or organization with AI-powered Finnish language learning at scale."
    >
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            SisuSpeak for Companies & Institutions
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Empower your team, students, or organization with AI-powered Finnish language learning at scale.<br />
            SisuSpeak partners with businesses, schools, and organizations to deliver personalized, real-time Finnish language tutoring—anytime, anywhere.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Choose SisuSpeak for Your Organization?</h2>
            <ul className="text-gray-700 mb-2 space-y-3 text-base list-disc list-inside">
              <li>Custom AI language solution tailored for expats, students, and immigrant workers.</li>
              <li>Scalable platform for teams, classes, or entire organizations.</li>
              <li>Real-time conversation practice with instant feedback and adaptive learning.</li>
              <li>Easy onboarding and progress tracking for administrators.</li>
              <li>Flexible deployment: web, mobile, and API integration options.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">How It Works</h2>
            <ol className="text-gray-700 mb-2 space-y-3 text-base list-decimal list-inside">
              <li>Contact us to discuss your organization’s needs and goals.</li>
              <li>We design a custom solution and onboarding plan for your team or students.</li>
              <li>Launch SisuSpeak and monitor progress with our admin dashboard.</li>
              <li>Enjoy ongoing support and updates as your organization learns Finnish together!</li>
            </ol>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Ready to Collaborate?</h2>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">Let’s build a Finnish-speaking future together. Reach out to explore partnership opportunities, request a demo, or discuss custom deployment.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-base shadow hover:bg-blue-700 transition-colors">
            Contact Us
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Who We Work With</h2>
          <p className="text-gray-700 mb-2">Language schools, online education platforms, cultural integration programs, HR departments, and more.</p>
          <p className="text-gray-700">Join leading organizations in empowering your people with real-world Finnish skills.</p>
        </motion.div>
      </div>
    </section>
    </PageLayout>
  );
}
