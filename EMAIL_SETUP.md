# Email Setup Instructions for Sisu Speak Website

This document outlines the email configuration needed to complete the implementation of contact form routing and welcome emails.

## 1. Contact Form Email Routing

### Current Status ✅ CONFIGURED
- Contact form is configured to use Formspree endpoint `mwpbkgao`
- Form submissions include proper metadata and reply-to headers
- **READY TO USE** - No additional configuration needed

### Configuration Details
The Formspree form `mwpbkgao` is already configured to forward emails to `imadeddine200507@gmail.com`:
- Email notifications are enabled for new submissions
- All form fields are included in email notifications
- Reply-to headers are properly set to sender's email

### Form Data Structure
The contact form sends the following data:
- `name`: Sender's name
- `email`: Sender's email (used for reply-to)
- `subject`: Message subject
- `message`: Message content
- `company`: Optional company name
- `phone`: Optional phone number
- `source`: "Sisu Speak Contact Form"
- `timestamp`: Submission timestamp
- `page`: "contact"

## 2. Welcome Email Setup

### Current Implementation
- EmailJS integration is implemented with fallback to Formspree
- Welcome emails are triggered on waitlist signups
- Emails are sent from both the signup page and CTA section

### Configuration Status ✅ CONFIGURED

#### EmailJS Setup - COMPLETED
EmailJS is fully configured and ready to use:
- **Service ID**: `service_usc26od`
- **Template ID**: `template_9dxuoup`
- **Public Key**: `20_z-xj2NzRCRugP9`

The EmailJS configuration in `src/utils/emailService.ts` is set up with:
```typescript
const EMAILJS_SERVICE_ID = 'service_usc26od';
const EMAILJS_TEMPLATE_ID_WELCOME = 'template_9dxuoup';
const EMAILJS_PUBLIC_KEY = '20_z-xj2NzRCRugP9';
```

**READY TO USE** - Welcome emails will be sent automatically when users join the waitlist.

#### Formspree Fallback - CONFIGURED
The fallback system uses Formspree endpoint `mwpbkgao` and is ready to use if EmailJS fails.

### Welcome Email Content
The welcome email includes:
- Personalized greeting in Finnish and English
- Thank you message for joining the waitlist
- Information about what happens next
- Exclusive benefits for waitlist members
- Contact information and website link

## 3. Testing

### Contact Form Testing
1. Submit a test message through the contact form
2. Verify the email is received at `imadeddine200507@gmail.com`
3. Check that the reply-to address is set to the sender's email
4. Confirm all form fields are included in the email

### Welcome Email Testing
1. Sign up for the waitlist with a test email
2. Verify the welcome email is received
3. Check email formatting and content
4. Test both EmailJS and Formspree fallback methods

## 4. Environment Variables

For production deployment, you may want to set these environment variables:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mwpbkgao
```

## 5. Monitoring and Analytics

Consider setting up:
- Email delivery monitoring
- Open rate tracking
- Form submission analytics
- Error logging for failed email sends

## 6. Security Considerations

- EmailJS public key is safe to expose in client-side code
- Formspree endpoint is protected against spam
- Rate limiting is handled by both services
- No sensitive data is stored in the client application

## Next Steps

1. Complete the Formspree configuration for contact form routing
2. Set up EmailJS account and configure welcome email template
3. Test both email flows thoroughly
4. Monitor email delivery and engagement metrics
5. Consider implementing additional email automation features

For any questions or issues with the email setup, please refer to the respective service documentation or contact the development team.
