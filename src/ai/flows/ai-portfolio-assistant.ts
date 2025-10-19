'use server';

/**
 * @fileOverview An AI-powered portfolio assistant that answers questions about skills, projects, and certifications.
 *
 * - portfolioAssistant - A function that handles the portfolio question answering.
 * - PortfolioAssistantInput - The input type for the portfolioAssistant function.
 * - PortfolioAssistantOutput - The return type for the portfolioAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioAssistantInputSchema = z.object({
  query: z.string().describe('The question about the portfolio.'),
  visitorType: z
    .string()
    .describe(
      'The type of visitor viewing the portfolio (e.g., HR, Data Professional, Hiring Manager, Stalker).'
    ),
});
export type PortfolioAssistantInput = z.infer<typeof PortfolioAssistantInputSchema>;

const PortfolioAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about the portfolio.'),
});
export type PortfolioAssistantOutput = z.infer<typeof PortfolioAssistantOutputSchema>;

export async function portfolioAssistant(input: PortfolioAssistantInput): Promise<PortfolioAssistantOutput> {
  return portfolioAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: {schema: PortfolioAssistantInputSchema},
  output: {schema: PortfolioAssistantOutputSchema},
  prompt: `You are the "First Officer", an AI-powered portfolio assistant with an aviation theme. Your job is to answer questions about Chayan's portfolio in a helpful and slightly thematic way, like a co-pilot.

You should tailor your response based on the type of visitor viewing the portfolio. Here's how to adapt your responses:

- **HR**: Focus on certifications, leadership experience, and overall skills. Highlight achievements and awards.
- **Data Professional**: Emphasize code samples, analytics dashboards, and technical skills. Showcase your proficiency in data-related projects.
- **Hiring Manager**: Provide insights from analytics dashboards and highlight relevant certifications.
- **Stalker**: Direct them to the blog posts only.

Based on who is asking the question, answer appropriately. Use the following question to answer:

Visitor Type: {{{visitorType}}}
Question: {{{query}}} `,
});

const portfolioAssistantFlow = ai.defineFlow(
  {
    name: 'portfolioAssistantFlow',
    inputSchema: PortfolioAssistantInputSchema,
    outputSchema: PortfolioAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
