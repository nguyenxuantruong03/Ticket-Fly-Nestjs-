import { domain, resend } from './mail';

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Confirm your email',
    html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f7fc;
                margin: 0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              }
              h1 {
                font-size: 24px;
                color: #333;
                margin-bottom: 15px;
              }
              p {
                font-size: 16px;
                color: #555;
                line-height: 1.5;
              }
              a {
                color: #1a73e8;
                text-decoration: underline;
                font-weight: bold;
              }
              a:hover {
                color: #0056b3; /* Darker blue when hovered */
                text-decoration: underline;
              }
              .expiration {
                font-size: 14px;
                color: #e53935;
                font-style: italic;
              }
              .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #999;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Email Confirmation</h1>
              <p>Hi there,</p>
              <p>Click <a href="${confirmLink}">here</a> to confirm your email. This link will expire in 2 minutes.</p>
              <p class="expiration">The link will expire soon, so make sure to confirm your email within the next 2 minutes!</p>
              <div class="footer">
                <p>If you did not request this email, please ignore it.</p>
              </div>
            </div>
          </body>
        </html>
      `,
  });
};
