import { createEmailWrapper } from "../templates";

export function registrationsClosedTemplate(data: { userName: string }): string {
  const content = `
    <h2>Registrations Closed - R10 IEEE Computer Society Summer School 2025</h2>
    <p>Dear ${data.userName},</p>
    <div class="highlight">
      <p>Thank you for your interest in the R10 IEEE Computer Society Summer School 2025.</p>
      <p>We regret to inform you that registrations are now <strong>closed</strong>. Please consider applying next year!</p>
    </div>
    <p>We appreciate your enthusiasm and hope to see you in our future events.</p>
    <p>Best regards,<br>
    The R10 IEEE Computer Society Summer School 2025 Team</p>
  `;
  return createEmailWrapper(content, "Registrations Closed - R10 IEEE Computer Society Summer School 2025");
} 