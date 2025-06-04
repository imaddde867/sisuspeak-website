"use client";

import React, { useState } from 'react';
import { testFormspreeEndpoint, testEmailJSConfig } from '@/utils/formspreeTest';
import { sendWelcomeEmailWithFallback } from '@/utils/emailService';

export default function Debug() {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addResult = (message: string) => {
    const timestamp = new Date().toISOString();
    setTestResults(prev => [...prev, `${timestamp}: ${message}`]);
  };

  const testFormspree = async () => {
    setIsLoading(true);
    try {
      const result = await testFormspreeEndpoint();
      addResult(`Formspree Endpoint: ${JSON.stringify(result)}`);
    } catch (error) {
      addResult(`Formspree Endpoint Error: ${error}`);
    }
    setIsLoading(false);
  };

  const testEmailJS = async () => {
    setIsLoading(true);
    try {
      testEmailJSConfig();
      const result = await sendWelcomeEmailWithFallback('test@example.com', 'Test User');
      addResult(`EmailJS Welcome Email: Success = ${result}`);
    } catch (error) {
      addResult(`EmailJS Welcome Email Error: ${error}`);
    }
    setIsLoading(false);
  };

  const testContactForm = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mwpbkgao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          subject: 'Test Subject',
          message: 'This is a test message from the debug page.',
          source: 'Debug Test',
          timestamp: new Date().toISOString(),
          page: 'debug',
          _replyto: 'test@example.com',
          _subject: 'Debug Test Contact Form',
        }),
      });

      const responseText = await response.text();
      addResult(`Contact Form: Status ${response.status}, OK: ${response.ok}, Response: ${responseText}`);
    } catch (error) {
      addResult(`Contact Form Error: ${error}`);
    }
    setIsLoading(false);
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Debug Page</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Functions</h2>
          <div className="space-y-4">
            <button
              onClick={testFormspree}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Test Formspree Endpoint
            </button>
            
            <button
              onClick={testContactForm}
              disabled={isLoading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50 ml-4"
            >
              Test Contact Form
            </button>
            
            <button
              onClick={testEmailJS}
              disabled={isLoading}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50 ml-4"
            >
              Test EmailJS
            </button>
            
            <button
              onClick={clearResults}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-4"
            >
              Clear Results
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          {isLoading && (
            <div className="text-blue-600 mb-4">Running test...</div>
          )}
          
          <div className="space-y-4">
            {testResults.map((result, index) => (
              <div key={index} className="border border-gray-200 rounded p-4">
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
                  {result}
                </pre>
              </div>
            ))}
          </div>
          
          {testResults.length === 0 && (
            <div className="text-gray-500 text-center py-8">
              No test results yet. Click a test button above to run tests.
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Configuration Info</h2>
          <div className="space-y-2 text-sm">
            <div><strong>Formspree Endpoint:</strong> https://formspree.io/f/mwpbkgao</div>
            <div><strong>EmailJS Service ID:</strong> service_usc26od</div>
            <div><strong>EmailJS Template ID:</strong> template_9dxuoup</div>
            <div><strong>EmailJS Public Key:</strong> 20_z-xj2NzRCRugP9</div>
          </div>
        </div>
      </div>
    </div>
  );
}
