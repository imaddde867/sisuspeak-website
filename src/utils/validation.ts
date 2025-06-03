/**
 * Enhanced validation utilities for forms
 */

/**
 * Comprehensive email validation
 */
export const validateEmail = (email: string): boolean => {
  if (!email || email.length === 0) return false;
  
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;
  
  // Additional checks
  if (email.length > 254) return false; // RFC 5321 limit
  if (email.includes('..')) return false; // No consecutive dots
  if (email.startsWith('.') || email.endsWith('.')) return false;
  if (email.includes('@.') || email.includes('.@')) return false;
  
  return true;
};

/**
 * Validate name (for contact forms)
 */
export const validateName = (name: string): string => {
  if (!name || name.trim().length === 0) {
    return 'Name is required';
  }
  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (name.trim().length > 100) {
    return 'Name must be less than 100 characters';
  }
  return '';
};

/**
 * Validate message (for contact forms)
 */
export const validateMessage = (message: string): string => {
  if (!message || message.trim().length === 0) {
    return 'Message is required';
  }
  if (message.trim().length < 10) {
    return 'Message must be at least 10 characters';
  }
  if (message.trim().length > 1000) {
    return 'Message must be less than 1000 characters';
  }
  return '';
};

/**
 * Validate phone number (optional field)
 */
export const validatePhone = (phone: string): string => {
  if (!phone || phone.trim().length === 0) {
    return ''; // Optional field
  }
  
  // Remove all non-digit characters for validation
  const digitsOnly = phone.replace(/\D/g, '');
  
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return 'Please enter a valid phone number';
  }
  
  return '';
};

/**
 * Sanitize input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};
