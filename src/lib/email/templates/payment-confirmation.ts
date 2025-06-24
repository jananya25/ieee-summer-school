import { createEmailWrapper } from '../templates';

export function paymentConfirmationTemplate(data: { 
  userName: string; 
  paymentDetails: any 
}): string {
  const content = `
    <h2>Payment Confirmed! 💳✅</h2>
    
    <p>Dear ${data.userName},</p>
    
    <div class="success-box">
      <h3>Your payment has been successfully processed!</h3>
      <p>Thank you for completing your payment for R10 IEEE Computer Society Summer School 2025.</p>
    </div>
    
    <div class="info-box">
      <h3>Payment Details</h3>
      <p><strong>Transaction ID:</strong> ${data.paymentDetails.transactionId || 'N/A'}</p>
      <p><strong>Amount Paid:</strong> $${data.paymentDetails.amount || 'N/A'}</p>
      <p><strong>Payment Method:</strong> ${data.paymentDetails.method || 'N/A'}</p>
      <p><strong>Payment Date:</strong> ${new Date().toLocaleDateString()}</p>
      <p><strong>Status:</strong> <span style="color: #28a745; font-weight: bold;">Completed</span></p>
    </div>
    
    <div class="highlight">
      <h3>What's Next?</h3>
      <ul>
        <li>Your registration is now fully confirmed</li>
        <li>You'll receive course materials within 24 hours</li>
        <li>Join our orientation session (details coming soon)</li>
        <li>Access your learning dashboard</li>
      </ul>
    </div>
    
    <p><strong>Important Reminders:</strong></p>
    <ol>
      <li>Save this email for your records</li>
      <li>Check your spam folder for course materials</li>
      <li>Complete your profile setup if not done already</li>
      <li>Join our community forum to connect with other participants</li>
    </ol>
    
    <p>If you have any questions about your payment or need assistance, please contact our support team.</p>
    
    <p>We're excited to have you join us for an amazing learning experience!</p>
    
    <p>Best regards,<br>
    The R10 IEEE Computer Society Summer School 2025 Team</p>
  `;
  
  return createEmailWrapper(content, 'Payment Confirmed - R10 IEEE Computer Society Summer School 2025');
} 