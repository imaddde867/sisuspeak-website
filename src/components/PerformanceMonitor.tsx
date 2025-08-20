"use client";

import { useEffect } from 'react';

interface LayoutShift extends PerformanceEntry {
  value: number;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          
          // Track page load time
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          if (loadTime > 0) {
            // Send to analytics if available
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'page_load_time', {
                value: Math.round(loadTime),
                custom_parameter: 'performance_monitoring'
              });
            }
          }
        }

        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry.startTime;
          if (lcp > 2500) {
            // LCP is poor (>2.5s)
            console.warn('Poor LCP detected:', lcp);
          }
        }

        if (entry.entryType === 'first-input') {
          const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
          if (fid > 100) {
            // FID is poor (>100ms)
            console.warn('Poor FID detected:', fid);
          }
        }

        if (entry.entryType === 'layout-shift') {
          const cls = (entry as LayoutShift).value;
          if (cls > 0.1) {
            // CLS is poor (>0.1)
            console.warn('Poor CLS detected:', cls);
          }
        }
      }
    });

    // Observe performance metrics
    try {
      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['navigation'] });
    }

    return () => observer.disconnect();
  }, []);

  return null;
};

export default PerformanceMonitor;