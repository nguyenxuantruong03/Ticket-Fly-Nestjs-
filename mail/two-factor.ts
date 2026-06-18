import { resend } from './mail';

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Xác thực 2 yếu tố!',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #007BFF;">Xác thực 2 yếu tố</h2>
        <p>Xin chào,</p>
        <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Mã xác thực 2 yếu tố của bạn là:</p>
        <div style="font-size: 18px; font-weight: bold; color: #FF5722; margin: 10px 0;">
          ${token}
        </div>
        <p>Vui lòng nhập mã này để hoàn tất xác thực. Mã có hiệu lực trong vòng 2 phút.</p>
        <p>Nếu bạn không yêu cầu mã này, vui lòng bỏ qua email này hoặc liên hệ với đội ngũ hỗ trợ của chúng tôi.</p>
        <p>Trân trọng,<br />Đội ngũ Hỗ trợ</p>
      </div>
    `,
  });
};
