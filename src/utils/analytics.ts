/**
 * Enhanced analytics tracking for form submissions and user interactions
 */

export interface AnalyticsEvent {
  event: string;
  email?: string;
  source?: string;
  page?: string;
  timestamp?: string;
  sessionId?: string;
  userAgent?: string;
  referrer?: string;
  url?: string;
  data?: Record<string, unknown>;
}

// Generate a session ID for tracking user sessions
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('sisu_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('sisu_session_id', sessionId);
  }
  return sessionId;
};

// Get user info for tracking
const getUserInfo = () => {
  return {
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    url: typeof window !== 'undefined' ? window.location.href : '',
    sessionId: getSessionId()
  };
};

/**
 * Track form submissions and other events
 */
export const trackEvent = (eventData: AnalyticsEvent) => {
  try {
    // Only track in browser environment
    if (typeof window === 'undefined') return;

    const userInfo = getUserInfo();
    const events = JSON.parse(localStorage.getItem('sisu_analytics') || '[]');

    const enrichedEvent = {
      ...eventData,
      ...userInfo,
      timestamp: eventData.timestamp || new Date().toISOString(),
      id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    events.push(enrichedEvent);

    // Keep only last 500 events (increased from 100)
    if (events.length > 500) {
      events.splice(0, events.length - 500);
    }

    localStorage.setItem('sisu_analytics', JSON.stringify(events));

    // Track page views separately for better analytics
    if (eventData.event === 'page_view') {
      trackPageViewSession(eventData.page || 'unknown');
    }

  } catch {
    // Silently fail in production
  }
};

// Track page view sessions to avoid duplicate counting
const trackPageViewSession = (page: string) => {
  try {
    const sessionViews = JSON.parse(sessionStorage.getItem('sisu_session_views') || '[]');

    // Only track if not viewed in last 30 seconds
    const recentView = sessionViews.find((view: { page: string; timestamp: number }) =>
      view.page === page && (Date.now() - view.timestamp) < 30000
    );

    if (!recentView) {
      sessionViews.push({
        page,
        timestamp: Date.now(),
        sessionId: getSessionId()
      });

      // Keep only last 50 page views per session
      if (sessionViews.length > 50) {
        sessionViews.splice(0, sessionViews.length - 50);
      }

      sessionStorage.setItem('sisu_session_views', JSON.stringify(sessionViews));
    }
  } catch {
    // Silently fail
  }
};

/**
 * Track email signup
 */
export const trackEmailSignup = (email: string, source: string, page: string, additionalData?: Record<string, unknown>) => {
  trackEvent({
    event: 'email_signup',
    email,
    source,
    page,
    data: additionalData
  });
};

/**
 * Track contact form submission
 */
export const trackContactSubmission = (email: string, name: string, subject: string, additionalData?: Record<string, unknown>) => {
  trackEvent({
    event: 'contact_form_submit',
    email,
    source: subject,
    page: 'contact',
    data: {
      name,
      subject,
      ...additionalData
    }
  });
};

/**
 * Track page views
 */
export const trackPageView = (page: string, additionalData?: Record<string, unknown>) => {
  trackEvent({
    event: 'page_view',
    page,
    data: additionalData
  });
};

/**
 * Track button clicks and interactions
 */
export const trackInteraction = (action: string, element: string, page: string, additionalData?: Record<string, unknown>) => {
  trackEvent({
    event: 'user_interaction',
    source: action,
    page,
    data: {
      element,
      action,
      ...additionalData
    }
  });
};

/**
 * Track form starts (when user begins filling a form)
 */
export const trackFormStart = (formType: string, page: string) => {
  trackEvent({
    event: 'form_start',
    source: formType,
    page,
    data: { formType }
  });
};

/**
 * Track form abandonment (when user leaves without submitting)
 */
export const trackFormAbandon = (formType: string, page: string, fieldsCompleted: number) => {
  trackEvent({
    event: 'form_abandon',
    source: formType,
    page,
    data: {
      formType,
      fieldsCompleted
    }
  });
};

/**
 * Get analytics summary for dashboard
 */
export const getAnalyticsSummary = () => {
  try {
    if (typeof window === 'undefined') return null;

    const events = JSON.parse(localStorage.getItem('sisu_analytics') || '[]');
    const now = Date.now();
    const oneDayAgo = now - (24 * 60 * 60 * 1000);
    const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000);

    const recentEvents = events.filter((e: AnalyticsEvent) =>
      new Date(e.timestamp || '').getTime() > oneDayAgo
    );

    const weeklyEvents = events.filter((e: AnalyticsEvent) =>
      new Date(e.timestamp || '').getTime() > oneWeekAgo
    );

    return {
      total: {
        events: events.length,
        emailSignups: events.filter((e: AnalyticsEvent) => e.event === 'email_signup').length,
        contactForms: events.filter((e: AnalyticsEvent) => e.event === 'contact_form_submit').length,
        pageViews: events.filter((e: AnalyticsEvent) => e.event === 'page_view').length,
        interactions: events.filter((e: AnalyticsEvent) => e.event === 'user_interaction').length,
        uniqueSessions: new Set(events.map((e: AnalyticsEvent) => e.sessionId)).size
      },
      daily: {
        events: recentEvents.length,
        emailSignups: recentEvents.filter((e: AnalyticsEvent) => e.event === 'email_signup').length,
        contactForms: recentEvents.filter((e: AnalyticsEvent) => e.event === 'contact_form_submit').length,
        pageViews: recentEvents.filter((e: AnalyticsEvent) => e.event === 'page_view').length,
        interactions: recentEvents.filter((e: AnalyticsEvent) => e.event === 'user_interaction').length,
        uniqueSessions: new Set(recentEvents.map((e: AnalyticsEvent) => e.sessionId)).size
      },
      weekly: {
        events: weeklyEvents.length,
        emailSignups: weeklyEvents.filter((e: AnalyticsEvent) => e.event === 'email_signup').length,
        contactForms: weeklyEvents.filter((e: AnalyticsEvent) => e.event === 'contact_form_submit').length,
        pageViews: weeklyEvents.filter((e: AnalyticsEvent) => e.event === 'page_view').length,
        interactions: weeklyEvents.filter((e: AnalyticsEvent) => e.event === 'user_interaction').length,
        uniqueSessions: new Set(weeklyEvents.map((e: AnalyticsEvent) => e.sessionId)).size
      }
    };
  } catch {
    return null;
  }
};
