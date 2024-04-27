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