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
      reply_to: 'hello@sisuspeak.com'
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
 * Fallback email service using Formspree for welcome emails
 * This is a backup method in case EmailJS fails
 */
export const sendWelcomeEmailFallback = async (email: string): Promise<boolean> => {
  try {
    const response = await fetch('https://formspree.io/f/mwpbkgao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        source: 'Sisu Speak Welcome Email',
        type: 'welcome_email',
        timestamp: new Date().toISOString(),
        _subject: 'Welcome to Sisu Speak Waitlist! 🇫🇮',
        _autoresponse: `
          Tervetuloa! Welcome to the Sisu Speak family!

          Thank you for joining our waitlist. You're now part of an exclusive group of language language enthusiasts who will be the first to experience our revolutionary AI-powered learning platform.

          What happens next?
          • You'll receive early access when we launch
          • Exclusive updates on our development progress
          • Special launch pricing just for waitlist members
          • Tips and resources for language language learning

          We're working hard to bring you the most effective and engaging way to learn language through AI conversation. Your journey to fluency starts here!

          Kiitos ja nähdään pian! (Thank you and see you soon!)

          The Sisu Speak Team
          https://sisuspeak.com
        `,
        _replyto: 'hello@sisuspeak.com'
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Fallback welcome email failed:', error);
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

  // Fallback to Formspree
  return await sendWelcomeEmailFallback(email);
};
