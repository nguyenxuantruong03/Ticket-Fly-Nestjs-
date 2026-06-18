import 'dotenv/config'; // Loads .env into process.env
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

export const resend = new Resend(apiKey);
export const domain = process.env.NEST_PUBLIC_FRONT_END;