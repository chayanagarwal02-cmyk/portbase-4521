import { config } from 'dotenv';
config();

import '@/ai/flows/smart-recommendations.ts';
import '@/ai/flows/ai-portfolio-assistant.ts';
import '@/ai/flows/send-contact-email.ts';
import '@/ai/flows/verify-linkedin.ts';
import '@/ai/flows/save-profile-view.ts';
