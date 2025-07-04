import PageLayout from '@/components/PageLayout';

const TermsOfServicePage = () => {
  return (
    <PageLayout
      title="Terms of Service"
      description="Read our terms and conditions for using the Sisu Speak platform and services."
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
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  By accessing and using Sisu Speak, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Description of Service</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Sisu Speak is an AI-powered language language learning platform that provides interactive conversation practice, 
                  pronunciation training, and personalized learning experiences. Our service includes web-based applications, 
                  mobile applications, and related educational content.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">User Accounts</h2>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Account Creation</h3>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the security of your account credentials</li>
                  <li>You must be at least 13 years old to create an account</li>
                  <li>One person may not maintain more than one account</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Account Responsibilities</h3>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>You are responsible for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Keep your contact information up to date</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Acceptable Use</h2>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  You agree to use Sisu Speak only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                  <li>Upload or transmit malicious code, viruses, or harmful content</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Reverse engineer, decompile, or disassemble our software</li>
                  <li>Use automated systems to access the service without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Payment and Billing</h2>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Subscription fees are billed in advance on a recurring basis</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We reserve the right to change our pricing with 30 days notice</li>
                  <li>You are responsible for all taxes associated with your subscription</li>
                  <li>Failure to pay may result in suspension or termination of your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To the maximum extent permitted by law, Sisu Speak shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly 
                  or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Termination</h2>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  Either party may terminate this agreement at any time:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>You may cancel your account at any time through your account settings</li>
                  <li>We may terminate your account for violation of these terms</li>
                  <li>Upon termination, your right to use the service ceases immediately</li>
                  <li>We may retain certain information as required by law or for legitimate business purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Email:</strong> legal@sisuspeak.com<br />
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

export default TermsOfServicePage;
