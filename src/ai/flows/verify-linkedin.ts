'use server';

/**
 * @fileOverview A Genkit flow for "verifying" a LinkedIn profile by extracting the name.
 *
 * - verifyLinkedin - A function that simulates LinkedIn profile verification.
 * - LinkedinVerificationInput - The input type for the function.
 * - LinkedinVerificationOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const LinkedinVerificationInputSchema = z.object({
  url: z.string().url().describe('The LinkedIn profile URL.'),
});
export type LinkedinVerificationInput = z.infer<typeof LinkedinVerificationInputSchema>;

const LinkedinVerificationOutputSchema = z.object({
  name: z.string().describe('The extracted full name from the LinkedIn profile URL.'),
});
export type LinkedinVerificationOutput = z.infer<typeof LinkedinVerificationOutputSchema>;

export async function verifyLinkedin(input: LinkedinVerificationInput): Promise<LinkedinVerificationOutput> {
  return verifyLinkedinFlow(input);
}

const verifyLinkedinFlow = ai.defineFlow(
  {
    name: 'verifyLinkedinFlow',
    inputSchema: LinkedinVerificationInputSchema,
    outputSchema: LinkedinVerificationOutputSchema,
  },
  async (input) => {
    // This is a simulation. In a real-world scenario, you might use an API.
    // Here, we extract the name from the URL slug.
    try {
      const url = new URL(input.url);
      const path = url.pathname;
      // expecting /in/first-last-numbers/
      const nameSlug = path.split('/')[2];
      if (!nameSlug) {
        return { name: 'Data Professional' };
      }

      const name = nameSlug
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .filter(part => isNaN(parseInt(part))) // Remove numeric parts
        .join(' ');

      return { name: name || 'Data Professional' };
    } catch (e) {
      console.error('Error parsing LinkedIn URL', e);
      // Fallback name
      return { name: 'Data Professional' };
    }
  }
);
