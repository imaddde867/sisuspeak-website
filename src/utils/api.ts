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
  const FORMSPREE_URL = 'https://formspree.io/f/xdkogqpb';
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return true;
      }

      // If it's the last attempt, throw an error
      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries} attempts`);
      }

      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error);
      
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
    } catch (error) {
      console.error('Failed to queue form submission:', error);
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
      } catch (error) {
        console.error('Failed to process queued item:', error);
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
