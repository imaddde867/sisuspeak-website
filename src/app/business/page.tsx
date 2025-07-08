import React from 'react';

export default function BusinessPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">SisuSpeak for Companies & Institutions</h1>
        <p className="text-lg text-gray-700 mb-2">Empower your team, students, or organization with AI-powered Finnish language learning at scale.</p>
        <p className="text-md text-gray-600">SisuSpeak partners with businesses, schools, and organizations to deliver personalized, real-time Finnish language tutoring—anytime, anywhere.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Why Choose SisuSpeak for Your Organization?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Custom AI language solution tailored for expats, students, and immigrant workers.</li>
          <li>Scalable platform for teams, classes, or entire organizations.</li>
          <li>Real-time conversation practice with instant feedback and adaptive learning.</li>
          <li>Easy onboarding and progress tracking for administrators.</li>
          <li>Flexible deployment: web, mobile, and API integration options.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Contact us to discuss your organization’s needs and goals.</li>
          <li>We design a custom solution and onboarding plan for your team or students.</li>
          <li>Launch SisuSpeak and monitor progress with our admin dashboard.</li>
          <li>Enjoy ongoing support and updates as your organization learns Finnish together!</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Ready to Collaborate?</h2>
        <p className="text-gray-700 mb-4">Let’s build a Finnish-speaking future together. Reach out to explore partnership opportunities, request a demo, or discuss custom deployment.</p>
        <a
          href="mailto:contact@sisuspeak.live"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors text-lg"
        >
          Contact Us
        </a>
      </section>

      <section className="border-t pt-8 mt-8">
        <h3 className="text-xl font-semibold mb-2">Who We Work With</h3>
        <p className="text-gray-600 mb-2">Language schools, online education platforms, cultural integration programs, HR departments, and more.</p>
        <p className="text-gray-500 text-sm">Join leading organizations in empowering your people with real-world Finnish skills.</p>
      </section>
    </main>
  );
} 