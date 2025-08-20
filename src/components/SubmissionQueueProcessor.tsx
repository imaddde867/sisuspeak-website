"use client";

import { useEffect } from 'react';
import { FormSubmissionQueue } from '@/utils/api';

export default function SubmissionQueueProcessor() {
  useEffect(() => {
    let isMounted = true;

    const process = async () => {
      try {
        await FormSubmissionQueue.processQueue();
      } catch {
        // Silent fail; will retry on next trigger
      }
    };

    // Initial attempt
    process();

    // Retry when network comes back
    const handleOnline = () => process();
    window.addEventListener('online', handleOnline);

    // Optional periodic retry (e.g., every 60s)
    const interval = window.setInterval(() => {
      if (!isMounted) return;
      if (navigator.onLine) process();
    }, 60000);

    return () => {
      isMounted = false;
      window.removeEventListener('online', handleOnline);
      window.clearInterval(interval);
    };
  }, []);

  return null;
}
