/**
 * Simple analytics tracking for form submissions and user interactions
 */

export interface AnalyticsEvent {
  event: string;
  email?: string;
  source?: string;
  page?: string;
  timestamp?: string;
}

/**
 * Track form submissions and other events
 */
export const trackEvent = (eventData: AnalyticsEvent) => {
  try {
    // Log to console for development
    console.log('Analytics Event:', eventData);
    
    // Store in localStorage for basic tracking
    const events = JSON.parse(localStorage.getItem('sisu_analytics') || '[]');
    events.push({
      ...eventData,
      timestamp: eventData.timestamp || new Date().toISOString()
    });
    
    // Keep only last 100 events
    if (events.length > 100) {
      events.splice(0, events.length - 100);
    }
    
    localStorage.setItem('sisu_analytics', JSON.stringify(events));
    
    // In production, you could send to Google Analytics, Mixpanel, etc.
    // Example: gtag('event', eventData.event, { ...eventData });
    
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

/**
 * Track email signup
 */
export const trackEmailSignup = (email: string, source: string, page: string) => {
  trackEvent({
    event: 'email_signup',
    email,
    source,
    page
  });
};

/**
 * Track contact form submission
 */
export const trackContactSubmission = (email: string, subject: string) => {
  trackEvent({
    event: 'contact_form_submit',
    email,
    source: subject,
    page: 'contact'
  });
};

/**
 * Track page views
 */
export const trackPageView = (page: string) => {
  trackEvent({
    event: 'page_view',
    page
  });
};
