//src/app/components/contact-message.jsx
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const ContactEmail = ({ email, subject, message }) => {
  const previewText = `New Message from ${email}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white border border-gray-200 rounded-lg p-10 my-10 mx-auto max-w-[600px]">
            <Heading className="text-2xl font-bold text-gray-800 text-center">
              New Portfolio Message
            </Heading>
            <Hr className="my-6 border-gray-300" />
            <Section>
              <Text className="text-lg font-semibold text-gray-700">Subject: {subject}</Text>
              <Text className="text-md text-gray-600">From: {email}</Text>
              <Hr className="my-4 border-gray-200" />
              <Text className="text-gray-800 leading-relaxed italic">
                "{message}"
              </Text>
            </Section>
            <Hr className="my-6 border-gray-300" />
            <Text className="text-xs text-gray-500 text-center">
              This email was sent via your portfolio contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;