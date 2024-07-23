import { ClothItemSelected } from '@/lib/store';
import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  type: string;
}

interface ContactTemplateProps {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

interface OrderTemplateProps {
  first_name: string;
  last_name: string;
  phoneNumber: string;
  email: string;
  deliveryAddress: string;
  city: string;
  province: string;
  order: ClothItemSelected[];
}

export const OrderTemplate: React.FC<Readonly<OrderTemplateProps>> = ({
  first_name, last_name, email, phoneNumber, deliveryAddress, city, province, order
}) => (
  <div>
      <p>{first_name}, {" "}, {last_name},</p>
      <p>Email{" - "}, {email},</p>
      <p>PhoneNumber{" - "}, {phoneNumber},</p>
      <p>DeliveryAddress{" - "}, {deliveryAddress},</p>
      <p>City{" - "}, {city},</p>
      <p>Province{" - "}, {province},</p>
      <p>Order{" - "}, {order.toString()},</p>

      {order.map((item, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Amount:</strong> {"$"} {item.amount.toFixed(2)}</p>
          <p><strong>Size:</strong> {item.size}</p>
          <p><strong>Quantity:</strong> {item.quantity}</p>
        </div>
      ))}
  </div>
);

export const NewsletterTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  type
}) => (
  <div>
    <p>{email} has signed up to our {type}</p>
  </div>
);

export const ContactPageTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  first_name, last_name, email, message
}) => (
  <div>
    <p>{first_name} {last_name} from {email} sent us this message: <br/>{message}</p>
  </div>
);