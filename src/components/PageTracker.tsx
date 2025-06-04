"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/utils/analytics';

interface PageTrackerProps {
  children: React.ReactNode;
}

export default function PageTracker({ children }: PageTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when component mounts or pathname changes
    const pageName = pathname === '/' ? 'home' : pathname.replace('/', '');
    
    // Small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      trackPageView(pageName, {
        path: pathname,
        title: typeof document !== 'undefined' ? document.title : '',
        loadTime: Date.now()
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
