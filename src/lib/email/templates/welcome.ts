import { createEmailWrapper } from '../templates';

export function welcomeTemplate(data: { userName: string }): string {
  const content = `
    <h2>Welcome to R10 IEEE Computer Society Summer School 2025, ${data.userName}! 🎉</h2>
    
    <p>We're thrilled to have you join our community of future engineers and innovators!</p>
    
    <div class="info-box">
      <h3>What's Next?</h3>
      <ul>
        <li>Complete your profile setup</li>
        <li>Explore our course catalog</li>
        <li>Connect with fellow participants</li>
        <li>Stay updated with our latest announcements</li>
      </ul>
    </div>
    
    <div class="highlight">
      <h3>Getting Started</h3>
      <p>To make the most of your R10 IEEE Computer Society Summer School 2025 experience:</p>
      <ol>
        <li>Verify your email address</li>
        <li>Complete your registration</li>
        <li>Browse available courses and workshops</li>
        <li>Join our community discussions</li>
      </ol>
    </div>
    
    <p>If you have any questions or need assistance, don't hesitate to reach out to our support team.</p>
    
    <p>Best regards,<br>
    The R10 IEEE Computer Society Summer School 2025 Team</p>
  `;
  
  return createEmailWrapper(content, 'Welcome to R10 IEEE Computer Society Summer School 2025');
} 