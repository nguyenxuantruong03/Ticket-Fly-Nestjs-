import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ValidateTurnstileService {
  private readonly VERIFY_URL =
    'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  async validateToken(token: string, remoteIp?: string): Promise<void> {
    const secret = process.env.TURNSTILE_SECRET_KEY!;

    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);
    if (remoteIp) {
      params.append('remoteip', remoteIp);
    }

    const response = await fetch(this.VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const result = await response.json();

    if (!result.success) {
      console.error('Turnstile failed:', result['error-codes']);
      throw new UnauthorizedException(
        `Turnstile verification failed: ${result['error-codes']?.join(', ')}`,
      );
    }
  }
}
