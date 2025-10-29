'use server';

/**
 * @fileOverview A Genkit flow for saving a profile view event to Firestore.
 *
 * - saveProfileView - A function that handles saving the profile view.
 * - ProfileViewInput - The input type for the saveProfileView function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import {getFirestore} from 'firebase-admin/firestore';
import {initializeApp, getApps, cert} from 'firebase-admin/app';

const ProfileViewInputSchema = z.object({
  url: z.string().url().describe("The LinkedIn profile URL of the visitor."),
  name: z.string().describe("The extracted name of the visitor."),
  role: z.string().describe("The role the visitor selected."),
  viewedAt: z.string().datetime().describe("The ISO 8601 timestamp of the view."),
});

export type ProfileViewInput = z.infer<typeof ProfileViewInputSchema>;

// Initialize Firebase Admin SDK
if (!getApps().length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);
    initializeApp({
        credential: cert(serviceAccount)
    });
}

const db = getFirestore();

export async function saveProfileView(input: ProfileViewInput): Promise<{ success: boolean; id?: string; message: string }> {
  return saveProfileViewFlow(input);
}

const saveProfileViewFlow = ai.defineFlow(
  {
    name: 'saveProfileViewFlow',
    inputSchema: ProfileViewInputSchema,
    outputSchema: z.object({ success: z.boolean(), id: z.string().optional(), message: z.string() }),
  },
  async (input) => {
    try {
      const docRef = await db.collection('profileViews').add(input);
      console.log('Profile view saved with ID: ', docRef.id);
      return { success: true, id: docRef.id, message: 'Profile view saved successfully.' };
    } catch (error) {
      console.error('Error saving profile view to Firestore:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return { success: false, message: `Failed to save profile view: ${errorMessage}` };
    }
  }
);
