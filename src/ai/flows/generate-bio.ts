// BioGenerator flow
'use server';
/**
 * @fileOverview An AI-powered bio generator for VLSI engineers.
 *
 * - generateBio - A function that generates a personalized bio based on portfolio content.
 * - GenerateBioInput - The input type for the generateBio function.
 * - GenerateBioOutput - The return type for the generateBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBioInputSchema = z.object({
  portfolioSummary: z
    .string()
    .describe(
      'A summary of the portfolio content, including skills, projects, experience, education, and certifications.'
    ),
});
export type GenerateBioInput = z.infer<typeof GenerateBioInputSchema>;

const GenerateBioOutputSchema = z.object({
  bio: z.string().describe('A personalized professional bio for the VLSI engineer.'),
});
export type GenerateBioOutput = z.infer<typeof GenerateBioOutputSchema>;

export async function generateBio(input: GenerateBioInput): Promise<GenerateBioOutput> {
  return generateBioFlow(input);
}

const generateBioPrompt = ai.definePrompt({
  name: 'generateBioPrompt',
  input: {schema: GenerateBioInputSchema},
  output: {schema: GenerateBioOutputSchema},
  prompt: `You are a professional bio writer specializing in creating compelling introductions for VLSI and digital design engineers.

  Based on the following summary of the engineer's portfolio, write a personalized bio that highlights their skills, experience, and achievements. The bio should be concise, engaging, and tailored to the VLSI and digital design field.

  Portfolio Summary:
  {{portfolioSummary}}`,
});

const generateBioFlow = ai.defineFlow(
  {
    name: 'generateBioFlow',
    inputSchema: GenerateBioInputSchema,
    outputSchema: GenerateBioOutputSchema,
  },
  async input => {
    const {output} = await generateBioPrompt(input);
    return output!;
  }
);
