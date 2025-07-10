"use client";

import { motion } from '@/utils/motion';
import Link from 'next/link';
import { FaBuilding, FaSchool, FaUsers, FaArrowRight } from 'react-icons/fa';

const businessTypes = [
	{
		icon: <FaSchool className="h-7 w-7 text-blue-600" />,
		title: 'Schools & Universities',
		description:
			'Empower students and staff with conversational Finnish. Group plans and teacher dashboards.',
	},
	{
		icon: <FaBuilding className="h-7 w-7 text-blue-600" />,
		title: 'Companies & Teams',
		description:
			'Boost workplace communication and onboarding for international employees. Flexible licenses.',
	},
	{
		icon: <FaUsers className="h-7 w-7 text-blue-600" />,
		title: 'Organizations & NGOs',
		description:
			'Support integration and language access. Special pricing for non-profits and public sector.',
	},
];

const BusinessSection = () => (
	<section className="py-16 bg-gray-50">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center mb-12"
			>
				<h2
					className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
					style={{ fontFamily: 'var(--font-poppins)' }}
				>
					Sisu Speak for{' '}
					<span className="gradient-text">Teams & Institutions</span>
				</h2>
				<p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
					Are you a school, company, or organization? Unlock group access,
					reporting, and onboarding support for your team.
				</p>
			</motion.div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
				{businessTypes.map((type, idx) => (
					<motion.div
						key={type.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: idx * 0.1 }}
						viewport={{ once: true }}
						className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center min-h-[200px]"
					>
						<div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
							{type.icon}
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							{type.title}
						</h3>
						<p className="text-gray-600 text-sm leading-relaxed">
							{type.description}
						</p>
					</motion.div>
				))}
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				viewport={{ once: true }}
				className="text-center"
			>
				<Link
					href="/contact"
					className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-base shadow hover:bg-blue-700 transition-colors"
				>
					Contact Us for Group Access{' '}
					<FaArrowRight className="ml-2 h-5 w-5" />
				</Link>
				<p className="mt-4 text-xs text-gray-500">
					Special pricing and onboarding for groups, schools, and organizations.
				</p>
			</motion.div>
		</div>
	</section>
);

export default BusinessSection;
