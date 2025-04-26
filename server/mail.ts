import nodemailer from 'nodemailer';

// Configuration types
export interface EmailConfig {
  from: string;
  to: string[];
  subject: string;
  html: string;
  text?: string;
}

// Define environment variables for email configuration
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
const CONTACT_EMAIL_RECIPIENTS = process.env.CONTACT_EMAIL_RECIPIENTS?.split(',') || ['hi@mquotient.net'];
const CAREERS_EMAIL_RECIPIENTS = process.env.CAREERS_EMAIL_RECIPIENTS?.split(',') || ['hi@mquotient.net'];

// Create a mock transporter for development if credentials aren't available
const createTransporter = () => {
  if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
    console.warn('Email credentials not set. Using mock email service.');
    
    // Create a mock transporter that logs emails instead of sending them
    return {
      sendMail: async (mailOptions: any) => {
        console.log('MOCK EMAIL SENT:');
        console.log('From:', mailOptions.from);
        console.log('To:', mailOptions.to);
        console.log('Subject:', mailOptions.subject);
        console.log('Content:', mailOptions.text || 'HTML Email');
        return { messageId: 'mock-email-id-' + Date.now() };
      }
    };
  }

  // Use real transporter if credentials are available
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_APP_PASSWORD,
    },
  });
};

let transporter = createTransporter();

export const mailService = {
  /**
   * Sends an email using the configured transporter
   */
  sendEmail: async (config: EmailConfig): Promise<boolean> => {
    if (!transporter) {
      console.warn('Email transporter not configured. Email not sent.');
      return false;
    }

    try {
      await transporter.sendMail({
        from: config.from,
        to: config.to.join(','),
        subject: config.subject,
        html: config.html,
        text: config.text || config.html.replace(/<[^>]*>/g, ''),
      });
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  },

  /**
   * Sends a notification email for contact form submissions
   */
  sendContactNotification: async (data: {
    name: string;
    email: string;
    company?: string;
    subject: string;
    message: string;
  }): Promise<boolean> => {
    if (CONTACT_EMAIL_RECIPIENTS.length === 0) {
      console.warn('No contact email recipients configured. Notification not sent.');
      return false;
    }

    const html = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <h2>Message:</h2>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `;

    return mailService.sendEmail({
      from: `"mquotient" <${EMAIL_USER}>`,
      to: CONTACT_EMAIL_RECIPIENTS,
      subject: `New Contact Form: ${data.subject}`,
      html,
    });
  },

  /**
   * Sends a notification email for career applications
   */
  sendCareerApplicationNotification: async (data: {
    name: string;
    email: string;
    phone: string;
    position: string;
    message: string;
    resumeFilename?: string;
  }): Promise<boolean> => {
    if (CAREERS_EMAIL_RECIPIENTS.length === 0) {
      console.warn('No career email recipients configured. Notification not sent.');
      return false;
    }

    const html = `
      <h1>New Career Application</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Position:</strong> ${data.position}</p>
      <h2>Message:</h2>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      ${data.resumeFilename ? `<p><strong>Resume Attached:</strong> ${data.resumeFilename}</p>` : ''}
    `;

    return mailService.sendEmail({
      from: `"mquotient Careers" <${EMAIL_USER}>`,
      to: CAREERS_EMAIL_RECIPIENTS,
      subject: `New Job Application: ${data.position}`,
      html,
    });
  },

  /**
   * Reset the email transporter with new credentials
   */
  resetTransporter: () => {
    transporter = createTransporter();
    return !!transporter;
  }
};