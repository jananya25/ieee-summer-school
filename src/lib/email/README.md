# Email System Documentation

This document describes the modular email system implemented for the R10 IEEE Computer Society Summer School 2025 project.

## Overview

The email system is built with Nodemailer and provides:
- Modular template system
- Email queue with priority handling
- Retry mechanism with exponential backoff
- Environment-specific configuration
- Comprehensive error handling

## Email Flow

The system follows this simplified email flow for the 5-day summer school:

1. **Welcome Email** - Sent after registration, informing users to wait for document review
2. **Registration Approved Email** - Sent after approval, includes registration confirmation, schedule PDF link, QR code, and payment amount
3. **Payment Confirmation Email** - Sent after manual payment verification

## Architecture

```
src/lib/email/
├── email.ts              # Main email functionality
├── config.ts             # Configuration management
├── queue.ts              # Email queue system
├── templates.ts          # Template renderer
├── templates/            # Individual email templates
│   ├── index.ts
│   ├── welcome.ts
│   ├── registration-approved.ts
│   ├── password-reset.ts
│   ├── payment-confirmation.ts
│   └── admin-notification.ts
└── README.md
```

## Configuration

### Environment Variables

Add these to your `.env.local` file:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_FROM_NAME=R10 IEEE Computer Society Summer School 2025

# Support Information
SUPPORT_EMAIL=support@ieeesummerschool.com
SUPPORT_PHONE=+1-555-0123

# Application URL
NEXTAUTH_URL=http://localhost:3000
```

### Gmail Setup

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password as `EMAIL_PASSWORD`

## Usage

### Basic Email Sending

```typescript
import { sendEmail } from '@/lib/email';

// Send a simple email
const success = await sendEmail({
  to: 'user@example.com',
  subject: 'Test Email',
  template: 'welcome',
  data: { userName: 'John Doe' }
});
```

### Convenience Functions

```typescript
import { 
  sendWelcomeEmail,
  sendRegistrationApproved,
  sendPasswordReset,
  sendPaymentConfirmation,
  sendAdminNotification
} from '@/lib/email';

// Send welcome email
await sendWelcomeEmail('user@example.com', 'John Doe');

// Send registration approved with payment request
await sendRegistrationApproved('user@example.com', 'John Doe', {
  registrationData: {
    id: 'REG123',
    status: 'Approved',
    registrationDate: new Date().toISOString()
  },
  paymentAmount: 299.99,
  schedulePdfLink: 'https://example.com/schedule.pdf',
  qrCodeImage: 'https://example.com/qr-code.png',
  paymentLink: 'https://example.com/pay'
});

// Send password reset
await sendPasswordReset('user@example.com', 'reset-token-123', 'John Doe');

// Send payment confirmation
await sendPaymentConfirmation('user@example.com', 'John Doe', {
  transactionId: 'TXN123',
  amount: '299.99',
  method: 'Credit Card'
});

// Send admin notification
await sendAdminNotification('admin@example.com', 'New Registration', {
  userId: '123',
  email: 'user@example.com'
});
```

### Using the Queue System

```typescript
import { 
  queueWelcomeEmail,
  queueRegistrationApproved,
  queuePasswordReset,
  emailQueue,
  getQueueStatus
} from '@/lib/email/queue';

// Queue an email (recommended for production)
const emailId = await queueWelcomeEmail('user@example.com', 'John Doe');

// Queue registration approved with payment request
const approvalId = await queueRegistrationApproved('user@example.com', 'John Doe', {
  registrationData: {
    id: 'REG123',
    status: 'Approved',
    registrationDate: new Date().toISOString()
  },
  paymentAmount: 299.99,
  schedulePdfLink: 'https://example.com/schedule.pdf',
  qrCodeImage: 'https://example.com/qr-code.png',
  paymentLink: 'https://example.com/pay'
});

// Check queue status
const status = getQueueStatus();
console.log(status);
// {
//   total: 5,
//   processing: true,
//   highPriority: 2,
//   normalPriority: 2,
//   lowPriority: 1
// }

// Add custom email to queue
const customEmailId = await emailQueue.addToQueue({
  to: 'user@example.com',
  subject: 'Custom Email',
  template: 'welcome',
  data: { userName: 'John Doe' }
}, 'high'); // Priority: 'high' | 'normal' | 'low'
```

## Email Templates

### Available Templates

1. **welcome** - Welcome email for new users (wait for document review)
2. **registration-approved** - Registration approval with payment request (merged template)
3. **password-reset** - Password reset request
4. **payment-confirmation** - Payment confirmation after manual verification
5. **admin-notification** - Admin notifications

### Template Data Structure

Each template expects specific data:

```typescript
// Welcome template
{ userName: string }

// Registration approved (merged template)
{ 
  userName: string;
  registrationData: {
    id: string;
    status: string;
    registrationDate: string;
  };
  paymentAmount: number;
  schedulePdfLink: string;
  qrCodeImage: string;
  paymentLink: string;
}

// Password reset
{
  userName: string;
  resetUrl: string; // Generated automatically
}

// Payment confirmation
{
  userName: string;
  paymentDetails: {
    transactionId: string;
    amount: string;
    method: string;
    // ... other payment details
  }
}

// Admin notification
{
  notificationType: string;
  data: any; // Flexible data structure
}
```

### Creating New Templates

1. Create a new template file in `src/lib/email/templates/`:

```typescript
// src/lib/email/templates/new-template.ts
import { createEmailWrapper } from '../templates';

export function newTemplateTemplate(data: { userName: string }): string {
  const content = `
    <h2>New Template</h2>
    <p>Hello ${data.userName}!</p>
    <p>This is a new email template.</p>
  `;
  
  return createEmailWrapper(content, 'New Template');
}
```

2. Add it to the template mapping in `src/lib/email/templates.ts`:

```typescript
import { newTemplateTemplate } from './templates/new-template';

const templates: Record<string, (data: any) => string> = {
  // ... existing templates
  'new-template': newTemplateTemplate,
};
```

3. Add it to the configuration in `src/lib/email/config.ts`:

```typescript
templates: {
  // ... existing templates
  newTemplate: 'new-template',
},
```

## Testing

### Test API Endpoint

Use the test endpoint at `/api/email/test`:

```bash
# Check system status
GET /api/email/test

# Send test email
POST /api/email/test
{
  "email": "test@example.com",
  "template": "welcome",
  "data": { "userName": "Test User" },
  "useQueue": false
}
```

### Test Page

Visit `/admin/email-test` for a web interface to test emails.

## Error Handling

The system includes comprehensive error handling:

- **Configuration validation** - Checks required environment variables
- **SMTP verification** - Validates email server connection
- **Retry mechanism** - Automatically retries failed emails with exponential backoff
- **Queue management** - Handles email queuing and processing
- **Template validation** - Ensures templates exist before sending

## Performance Considerations

- **Queue system** - Prevents blocking on email sending
- **Rate limiting** - Configurable delays between emails
- **Priority handling** - High-priority emails processed first
- **Retry limits** - Prevents infinite retry loops
- **Memory management** - Queue size monitoring

## Security

- **Environment variables** - Sensitive data stored in environment variables
- **Input validation** - Email addresses and data validated
- **Template sanitization** - HTML content properly escaped
- **Rate limiting** - Prevents email spam

## Monitoring

Monitor the email system through:

1. **Console logs** - Email sending status and errors
2. **Queue status** - Current queue state and processing status
3. **API endpoints** - System health checks
4. **Test page** - Manual testing interface

## Troubleshooting

### Common Issues

1. **"Email configuration is invalid"**
   - Check environment variables
   - Verify SMTP settings
   - Test with `verifyEmailConfig()`

2. **"Template not found"**
   - Ensure template exists in mapping
   - Check template file imports
   - Verify template name spelling

3. **"Failed to send email"**
   - Check SMTP credentials
   - Verify network connectivity
   - Review email server logs

4. **Queue not processing**
   - Check if queue is stuck
   - Restart application
   - Review error logs

### Debug Mode

Enable debug logging by setting:

```env
DEBUG=email:*
```

## Production Deployment

For production:

1. **Use queue system** - Always use `queue*` functions
2. **Configure proper SMTP** - Use production email service
3. **Set up monitoring** - Monitor queue status and errors
4. **Configure retries** - Adjust retry settings for production
5. **Set up logging** - Implement proper logging system

## Support

For issues or questions:
- Check this documentation
- Review console logs
- Test with the test page
- Contact the development team 