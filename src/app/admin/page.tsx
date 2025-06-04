"use client";

import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { getAnalyticsSummary } from '@/utils/analytics';

interface AnalyticsEvent {
  event: string;
  email?: string;
  source?: string;
  page?: string;
  timestamp: string;
  sessionId?: string;
  userAgent?: string;
  referrer?: string;
  url?: string;
  data?: Record<string, unknown>;
  id?: string;
}

export default function AdminDashboard() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [summary, setSummary] = useState<{
    total: { events: number; emailSignups: number; contactForms: number; pageViews: number; interactions: number; uniqueSessions: number };
    daily: { events: number; emailSignups: number; contactForms: number; pageViews: number; interactions: number; uniqueSessions: number };
    weekly: { events: number; emailSignups: number; contactForms: number; pageViews: number; interactions: number; uniqueSessions: number };
  } | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const storedEvents = JSON.parse(localStorage.getItem('sisu_analytics') || '[]');
      setEvents(storedEvents.reverse()); // Show newest first

      // Get analytics summary
      const analyticsSummary = getAnalyticsSummary();
      setSummary(analyticsSummary);
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
        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Signups</h3>
            <p className="text-3xl font-bold text-[#7388a5]">{summary?.total.emailSignups || emailSignups.length}</p>
            <p className="text-sm text-gray-500">Total waitlist subscribers</p>
            {summary && (
              <p className="text-xs text-green-600 mt-1">+{summary.daily.emailSignups} today</p>
            )}
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Forms</h3>
            <p className="text-3xl font-bold text-[#a3c2c8]">{summary?.total.contactForms || contactForms.length}</p>
            <p className="text-sm text-gray-500">Contact submissions</p>
            {summary && (
              <p className="text-xs text-green-600 mt-1">+{summary.daily.contactForms} today</p>
            )}
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Page Views</h3>
            <p className="text-3xl font-bold text-[#7388a5]">{summary?.total.pageViews || pageViews.length}</p>
            <p className="text-sm text-gray-500">Total page views</p>
            {summary && (
              <p className="text-xs text-green-600 mt-1">+{summary.daily.pageViews} today</p>
            )}
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Unique Sessions</h3>
            <p className="text-3xl font-bold text-[#7388a5]">{summary?.total.uniqueSessions || 0}</p>
            <p className="text-sm text-gray-500">Unique visitors</p>
            {summary && (
              <p className="text-xs text-green-600 mt-1">+{summary.daily.uniqueSessions} today</p>
            )}
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
                  <th className="text-left py-2">Session</th>
                  <th className="text-left py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                {events.slice(0, 50).map((event, index) => (
                  <tr key={event.id || index} className="border-b hover:bg-gray-50">
                    <td className="py-2">{new Date(event.timestamp).toLocaleString()}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        event.event === 'email_signup' ? 'bg-[#7388a5]/20 text-[#7388a5]' :
                        event.event === 'contact_form_submit' ? 'bg-[#a3c2c8]/20 text-[#7388a5]' :
                        event.event === 'page_view' ? 'bg-blue-100 text-blue-800' :
                        event.event === 'user_interaction' ? 'bg-purple-100 text-purple-800' :
                        event.event === 'form_start' ? 'bg-yellow-100 text-yellow-800' :
                        event.event === 'form_abandon' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.event.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-2">{event.email || '-'}</td>
                    <td className="py-2">{event.source || '-'}</td>
                    <td className="py-2">{event.page || '-'}</td>
                    <td className="py-2">
                      <span className="text-xs text-gray-500">
                        {event.sessionId ? event.sessionId.slice(-8) : '-'}
                      </span>
                    </td>
                    <td className="py-2">
                      {event.data && Object.keys(event.data).length > 0 && (
                        <details className="text-xs">
                          <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                            View
                          </summary>
                          <pre className="mt-1 text-xs bg-gray-50 p-2 rounded max-w-xs overflow-auto">
                            {JSON.stringify(event.data, null, 2)}
                          </pre>
                        </details>
                      )}
                    </td>
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
