
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
    try {
      const urlStr = input.url;
      // Basic validation to ensure it's a plausible LinkedIn URL.
      if (!/https?:\/\/(www\.)?linkedin\.com\/in\//.test(urlStr)) {
        // Fallback for invalid formats
        return { name: 'Data Professional' };
      }

      // Remove query parameters and trailing slashes
      const cleanUrl = urlStr.split('?')[0].replace(/\/$/, '');
      
      // Find the name slug after "/in/"
      const slugIndex = cleanUrl.indexOf('/in/');
      if (slugIndex === -1) {
        return { name: 'Data Professional' };
      }

      let nameSlug = cleanUrl.substring(slugIndex + 4);
      
      if (!nameSlug) {
        return { name: 'Data Professional' };
      }
      
      // 1. Remove common noise like 'br' and trailing numbers
      nameSlug = nameSlug.replace(/-br\d*$/, '').replace(/\d+$/, '');

      // 2. Replace hyphens with spaces.
      const withSpaces = nameSlug.replace(/-/g, ' ');
      
      // 3. Trim any extra whitespace from the ends.
      const trimmed = withSpaces.trim();
      
      // 4. Capitalize each part of the name.
      const name = trimmed
        .split(/\s+/)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ')
        .trim();

      // Final fallback if the name is empty after cleaning
      return { name: name || 'Data Professional' };
    } catch (e) {
      console.error('Error parsing LinkedIn URL', e);
      // Fallback name for any unexpected errors during processing
      return { name: 'Data Professional' };
    }
  }
);
