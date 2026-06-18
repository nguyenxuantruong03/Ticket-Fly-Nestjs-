import { domain, resend } from './mail';

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h1 style="color: #333; text-align: center;">Reset Your Password</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.5;">
          Hello,
        </p>
        <p style="font-size: 16px; color: #555; line-height: 1.5;">
          We received a request to reset your password. Click the button below to reset your password:
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <a 
            href="${resetLink}" 
            style="display: inline-block; padding: 12px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 5px;">
            Reset Password
          </a>
        </div>
        <p style="font-size: 16px; color: #555; line-height: 1.5;">
          Please note: The link is valid for only 2 minutes.
        </p>
        <p style="font-size: 16px; color: #555; line-height: 1.5;">
          If you did not request a password reset, you can safely ignore this email.
        </p>
        <p style="font-size: 16px; color: #555; line-height: 1.5;">
          Best regards,<br />
          The Team
        </p>
      </div>
    `,
  });
};
