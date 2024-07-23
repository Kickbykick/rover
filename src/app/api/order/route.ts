import { env } from '@/env.mjs';
import { Resend } from 'resend';
import { type NextRequest } from 'next/server'
import { OrderTemplate } from '@/components/EmailTemplate';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST (req: NextRequest) {
  try {
    const { first_name, last_name, email, phoneNumber, deliveryAddress, city, province, order } = await req.json()

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['roverclothing1984@gmail.com'],
      subject: 'Customer Order',
      text: 'Customer Order',
      react: OrderTemplate({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phoneNumber: phoneNumber,
        deliveryAddress: deliveryAddress,
        city: city,
        province: province,
        order: order
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}