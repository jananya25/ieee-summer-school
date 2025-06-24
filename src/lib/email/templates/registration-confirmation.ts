import { createEmailWrapper } from '../templates';

export function registrationConfirmationTemplate(data: { 
  userName: string; 
  registrationData: any 
}): string {
  const content = `
    <h2>Registration Confirmed! ✅</h2>
    
    <p>Dear ${data.userName},</p>
    
    <div class="success-box">
      <h3>Your registration for R10 IEEE Computer Society Summer School 2025 has been successfully confirmed!</h3>
    </div>
    
    <div class="info-box">
      <h3>Registration Details</h3>
      <p><strong>Registration ID:</strong> ${data.registrationData.id || 'N/A'}</p>
      <p><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</p>
      <p><strong>Status:</strong> <span style="color: #28a745; font-weight: bold;">Confirmed</span></p>
    </div>
    
    <div class="highlight">
      <h3>Important Information</h3>
      <ul>
        <li>Please complete your payment to secure your spot</li>
        <li>Check your email for course schedules and materials</li>
        <li>Join our orientation session (details will be sent separately)</li>
        <li>Download the participant handbook from your dashboard</li>
      </ul>
    </div>
    
    <p><strong>Next Steps:</strong></p>
    <ol>
      <li>Complete payment within 48 hours</li>
      <li>Upload required documents</li>
      <li>Attend the orientation session</li>
      <li>Start your learning journey!</li>
    </ol>
    
    <p>If you have any questions about your registration or need to make changes, please contact our support team immediately.</p>
    
    <p>We look forward to seeing you at R10 IEEE Computer Society Summer School 2025!</p>
    
    <p>Best regards,<br>
    The R10 IEEE Computer Society Summer School 2025 Team</p>
  `;
  
  return createEmailWrapper(content, 'Registration Confirmed - R10 IEEE Computer Society Summer School 2025');
} 