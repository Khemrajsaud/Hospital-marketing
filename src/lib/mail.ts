import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Send password reset email to user
 */
export async function sendResetPasswordEmail(
  email: string,
  name: string,
  resetToken: string
): Promise<void> {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request - Hospital Management System",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 8px;
            }
            .header {
              background-color: #2563eb;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background-color: white;
              padding: 20px;
              border-bottom: 1px solid #ddd;
            }
            .footer {
              background-color: #f0f0f0;
              padding: 15px;
              border-radius: 0 0 8px 8px;
              font-size: 12px;
              color: #666;
              text-align: center;
            }
            .reset-button {
              display: inline-block;
              background-color: #2563eb;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 5px;
              margin: 20px 0;
            }
            .warning {
              background-color: #fff3cd;
              border: 1px solid #ffc107;
              color: #856404;
              padding: 12px;
              border-radius: 4px;
              margin: 15px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Password Reset</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>We received a request to reset your password. Click the button below to create a new password:</p>
              <center>
                <a href="${resetLink}" class="reset-button">Reset Password</a>
              </center>
              <p>Or copy this link in your browser:</p>
              <p style="word-break: break-all; color: #2563eb;">
                <a href="${resetLink}">${resetLink}</a>
              </p>
              <div class="warning">
                <strong>Important:</strong> This link will expire in 24 hours. If you didn't request a password reset, you can safely ignore this email.
              </div>
              <p>If the button doesn't work, you can also copy and paste the link above into your browser.</p>
              <p>Best regards,<br>Hospital Management Team</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Hospital Management System. All rights reserved.</p>
              <p>This is an automated message, please do not reply to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Reset password email sent to ${email}`);
  } catch (error) {
    console.error("Error sending reset password email:", error);
    throw error;
  }
}

/**
 * Send welcome email to new admin user
 */
export async function sendWelcomeEmail(
  email: string,
  name: string,
  role: string
): Promise<void> {
  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to Hospital Management System",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 8px;
            }
            .header {
              background-color: #10b981;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background-color: white;
              padding: 20px;
              border-bottom: 1px solid #ddd;
            }
            .footer {
              background-color: #f0f0f0;
              padding: 15px;
              border-radius: 0 0 8px 8px;
              font-size: 12px;
              color: #666;
              text-align: center;
            }
            .badge {
              display: inline-block;
              background-color: #10b981;
              color: white;
              padding: 5px 12px;
              border-radius: 20px;
              font-size: 12px;
              margin: 10px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome!</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Your admin account has been successfully created. Welcome to the Hospital Management System!</p>
              <p>Your role: <span class="badge">${role}</span></p>
              <p>You can now login with your credentials to access the administrative dashboard.</p>
              <p>If you have any questions or need assistance, please contact the system administrator.</p>
              <p>Best regards,<br>Hospital Management Team</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Hospital Management System. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
}
