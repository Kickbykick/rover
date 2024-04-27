import { env } from '@/env.mjs';
import { Resend } from 'resend';
import { NewsletterTemplate } from '../../../components/EmailTemplate';

import { type NextRequest } from 'next/server'

const resend = new Resend(env.RESEND_API_KEY);

export async function POST (req: NextRequest) {
  try {
    const { email } = await req.json()

    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['roverclothing1984@gmail.com'],
        subject: 'Waitlist',
        text: 'Blessed Cleaners',
        react: NewsletterTemplate({ email: email, type: "Waitlist" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}