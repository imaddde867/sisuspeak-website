/**
 * Email service utilities for sending automated emails
 */

import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_usc26od';
const EMAILJS_TEMPLATE_ID_WELCOME = 'template_9dxuoup';
const EMAILJS_PUBLIC_KEY = '20_z-xj2NzRCRugP9';

/**
 * Initialize EmailJS
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

/**
 * Send welcome email to new waitlist subscribers
 */
export const sendWelcomeEmail = async (email: string, name?: string): Promise<boolean> => {
  try {
    // Initialize EmailJS if not already done
    initEmailJS();

    const templateParams = {
      user_email: email,
      user_name: name || 'Friend',
      to_email: email,
      to_name: name || 'Friend',
      from_name: 'Sisu Speak Team',
      reply_to: 'contact@sisuspeak.live'
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_WELCOME,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return false;
  }
};

/**
 * Fallback email service: log the intent to Supabase for later processing
 */
export const sendWelcomeEmailFallback = async (email: string): Promise<boolean> => {
  try {
    const { supabase } = await import('./supabaseClient');
    const { error } = await supabase.from('email_events').insert({
      type: 'welcome_email',
      email,
      status: 'queued',
      created_at: new Date().toISOString(),
      metadata: { source: 'emailjs_fallback' },
    });
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Fallback welcome email log failed:', error);
    return false;
  }
};

/**
 * Send welcome email with fallback
 */
export const sendWelcomeEmailWithFallback = async (email: string, name?: string): Promise<boolean> => {
  // Try EmailJS first
  const emailJSSuccess = await sendWelcomeEmail(email, name);
  
  if (emailJSSuccess) {
    return true;
  }

  // Fallback to Supabase event log
  return await sendWelcomeEmailFallback(email);
};
