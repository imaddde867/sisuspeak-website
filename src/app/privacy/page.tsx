import PageLayout from '@/components/PageLayout';

const PrivacyPolicyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Learn how we collect, use, and protect your personal information at Sisu Speak."
    >
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm sm:prose-lg max-w-none">
            <div className="mb-6 sm:mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-800 mb-0">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  At Sisu Speak, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                  AI-powered language language learning platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Information We Collect</h2>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Personal Information</h3>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li>Email address (for account creation and communication)</li>
                  <li>Name and profile information (optional)</li>
                  <li>Learning preferences and progress data</li>
                  <li>Voice recordings (for pronunciation practice)</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Usage Information</h3>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Learning session data and conversation logs</li>
                  <li>Device information and browser type</li>
                  <li>IP address and location data (general location only)</li>
                  <li>Usage patterns and feature interactions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Provide and improve our AI language learning services</li>
                  <li>Personalize your learning experience and track progress</li>
                  <li>Send important updates about our service</li>
                  <li>Respond to your questions and provide customer support</li>
                  <li>Analyze usage patterns to enhance our platform</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 mt-3 sm:mt-4 text-sm sm:text-base">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure data centers with physical security controls</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Email:</strong> privacy@sisuspeak.com<br />
                    <strong>Address:</strong> Turku, our team
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;
