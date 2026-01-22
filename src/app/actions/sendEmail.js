"use server";
import { Resend } from "resend";
import { ContactEmail } from '../components/contact-message'
import {react} from "react"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function send(formData) {
  console.log("Action triggered with:", Object.fromEntries(formData)); // Log 1
  
  if (!process.env.RESEND_API_KEY) {
    console.error("MISSING API KEY");
    return { error: "Server configuration error" };
  }
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!email || !subject || !message) {
    return { error: "All fields are required." };
  }

  try {
    const { data, error } = await resend.emails.send({
      // Change this to "onboarding@resend.dev" if your domain isn't verified
      from: "Portfolio <onboarding@resend.dev>", 
      to: [process.env.FROM_EMAIL], 
      reply_to: email, 
      subject: subject,
      react: <ContactEmail email={email} subject={subject} message={message} />,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: error.message };
    }

    return { success: true };
  } catch (e) {
    console.error("FULL ERROR DETAILS:", e); // This will tell you exactly what failed
    return { error: e.message };
  }
}