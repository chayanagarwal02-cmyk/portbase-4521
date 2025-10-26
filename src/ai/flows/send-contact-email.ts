'use server';

/**
 * @fileOverview A Genkit flow for sending a contact form submission as an email.
 *
 * - sendContactEmail - A function that handles sending the email.
 * - ContactFormInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  company: z.string().optional().describe('The company of the person.'),
  businessProblem: z.string().optional().describe('The business problem or goal.'),
  subject: z.string().optional().describe('The subject of the message.'),
  message: z.string().optional().describe('The content of the message.'),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export async function sendContactEmail(input: ContactFormInput): Promise<{ success: boolean; message: string }> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
  },
  async (input) => {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set. Cannot send email.");
      return { success: false, message: 'Email service is not configured. RESEND_API_KEY is missing.' };
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, subject, message, company, businessProblem } = input;
    const toEmail = 'chayan.agarwal02@gmail.com';

    const finalSubject = subject || `New Portfolio Contact from ${name}`;
    const emailBody = `
      Heyy Chayan!

      Someone tried connecting you through your portfolio, here are their details:

      Name: ${name}
      Email: ${email}
      ${company ? `Company: ${company}` : ''}
      
      ${message ? `Message: ${message}` : ''}
      ${businessProblem ? `Business Problem: ${businessProblem}` : ''}

      Please do connect with them within 24 hrs.

      Thank-you!
      Yours First Officer
    `;

    try {
      await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: toEmail,
        subject: finalSubject,
        text: emailBody.trim(),
      });
      return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Error sending email:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return { success: false, message: `Failed to send email: ${errorMessage}` };
    }
  }
);
