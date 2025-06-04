"use client";

import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

interface AnalyticsEvent {
  event: string;
  email?: string;
  source?: string;
  page?: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      const storedEvents = JSON.parse(localStorage.getItem('sisu_analytics') || '[]');
      setEvents(storedEvents.reverse()); // Show newest first
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection (in production, use proper authentication)
    if (password === 'sisuspeak2024') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const emailSignups = events.filter(e => e.event === 'email_signup');
  const contactForms = events.filter(e => e.event === 'contact_form_submit');
  const pageViews = events.filter(e => e.event === 'page_view');

  const exportData = () => {
    const dataStr = JSON.stringify(events, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sisu-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  if (!isAuthenticated) {
    return (
      <PageLayout title="Admin Dashboard" description="Analytics and signup tracking">
        <div className="max-w-md mx-auto mt-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Access</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7388a5] focus:border-[#7388a5] bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7388a5] text-white py-3 px-4 rounded-lg hover:bg-[#7388a5]/90 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Analytics Dashboard" description="Sisu Speak signup and engagement tracking">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Signups</h3>
            <p className="text-3xl font-bold text-[#7388a5]">{emailSignups.length}</p>
            <p className="text-sm text-gray-500">Total waitlist subscribers</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Forms</h3>
            <p className="text-3xl font-bold text-[#a3c2c8]">{contactForms.length}</p>
            <p className="text-sm text-gray-500">Contact submissions</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Page Views</h3>
            <p className="text-3xl font-bold text-[#7388a5]">{pageViews.length}</p>
            <p className="text-sm text-gray-500">Total page views</p>
          </div>
        </div>

        {/* Export Button */}
        <div className="mb-6">
          <button
            onClick={exportData}
            className="bg-[#7388a5] text-white px-6 py-3 rounded-lg hover:bg-[#7388a5]/90 transition-colors"
          >
            Export Data (JSON)
          </button>
        </div>

        {/* Recent Events */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Timestamp</th>
                  <th className="text-left py-2">Event</th>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left py-2">Source</th>
                  <th className="text-left py-2">Page</th>
                </tr>
              </thead>
              <tbody>
                {events.slice(0, 50).map((event, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2">{new Date(event.timestamp).toLocaleString()}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        event.event === 'email_signup' ? 'bg-[#7388a5]/20 text-[#7388a5]' :
                        event.event === 'contact_form_submit' ? 'bg-[#a3c2c8]/20 text-[#7388a5]' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.event}
                      </span>
                    </td>
                    <td className="py-2">{event.email || '-'}</td>
                    <td className="py-2">{event.source || '-'}</td>
                    <td className="py-2">{event.page || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
