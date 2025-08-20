/**
 * API utilities for form submissions with retry logic
 */

export interface FormSubmissionData {
  email: string;
  source: string;
  timestamp: string;
  page: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Submit form data with retry logic
 */
export const submitFormData = async (
  data: FormSubmissionData,
  maxRetries: number = 3
): Promise<boolean> => {
  // Now submit to Supabase instead of Formspree
  const { saveWaitlistSignup } = await import('./db');
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await saveWaitlistSignup({
        email: data.email,
        source: data.source,
        page: data.page,
        timestamp: data.timestamp,
        metadata: data,
      });
      return true;

      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));

    } catch (error) {
      // If it's the last attempt, throw the error
      if (attempt === maxRetries) {
        throw error;
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
  
  return false;
};

/**
 * Validate network connectivity
 */
export const checkNetworkConnectivity = async (): Promise<boolean> => {
  try {
    await fetch('https://httpbin.org/get', {
      method: 'HEAD',
      mode: 'no-cors'
    });
    return true;
  } catch {
    return navigator.onLine;
  }
};

/**
 * Queue form submissions for offline support
 */
export class FormSubmissionQueue {
  private static readonly STORAGE_KEY = 'sisu_form_queue';
  
  static add(data: FormSubmissionData): void {
    try {
      const queue = this.getQueue();
      queue.push({
        ...data,
        queuedAt: new Date().toISOString()
      });
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(queue));
    } catch {
      // Silently fail in production
    }
  }
  
  static getQueue(): FormSubmissionData[] {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }

  static async processQueue(): Promise<void> {
    const queue = this.getQueue();
    if (queue.length === 0) return;

    const processed: FormSubmissionData[] = [];
    
    for (const item of queue) {
      try {
        await submitFormData(item);
        processed.push(item);
      } catch {
        break; // Stop processing if one fails
      }
    }
    
    // Remove processed items from queue
    const remaining = queue.filter(item => !processed.includes(item));
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(remaining));
  }
  
  static clear(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
