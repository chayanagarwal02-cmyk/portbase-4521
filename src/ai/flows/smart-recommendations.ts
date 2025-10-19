// src/ai/flows/smart-recommendations.ts
'use server';

/**
 * @fileOverview An AI agent that provides smart content recommendations based on the viewer's identified role.
 *
 * - recommendContent - A function that returns content recommendations.
 * - RecommendContentInput - The input type for the recommendContent function.
 * - RecommendContentOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendContentInputSchema = z.object({
  userRole: z
    .string()
    .describe(
      'The identified role of the user viewing the portfolio (e.g., HR, Data Professional, Stalker, Hiring Manager).'
    ),
  userInterests: z
    .string()
    .optional()
    .describe('Optional string of user interests, extracted from the user.'),
});
export type RecommendContentInput = z.infer<typeof RecommendContentInputSchema>;

const RecommendContentOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe(
      'A list of content recommendations tailored to the user role and interests (e.g., project titles, blog post titles, certificate names).'
    ),
  relevanceScore: z
    .number()
    .optional()
    .describe('A numerical score (0-1) indicating the relevance of the recommendations.'),
});
export type RecommendContentOutput = z.infer<typeof RecommendContentOutputSchema>;

export async function recommendContent(input: RecommendContentInput): Promise<RecommendContentOutput> {
  return recommendContentFlow(input);
}

const recommendContentPrompt = ai.definePrompt({
  name: 'recommendContentPrompt',
  input: {schema: RecommendContentInputSchema},
  output: {schema: RecommendContentOutputSchema},
  prompt: `You are an AI assistant that recommends content from a portfolio based on the viewer's role and interests.

  The viewer is identified as a: {{{userRole}}}

  Relevant user interests: {{{userInterests}}}

  Based on this information, suggest the top 3 most relevant content items from the following categories: projects, skills, blog posts, and certificates. Return only the content names.
  Also include a relevance score (0-1) to indicate how well the recommendations match the user's profile. For example, if the user is HR, recommend certificates.
  The content items can be accessed via: Projects, Skills, Blog posts, and Certificates.

  Format your response as a JSON object with 'recommendations' (an array of strings) and 'relevanceScore' (a number between 0 and 1).
`,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: RecommendContentInputSchema,
    outputSchema: RecommendContentOutputSchema,
  },
  async input => {
    const {output} = await recommendContentPrompt(input);
    return output!;
  }
);
