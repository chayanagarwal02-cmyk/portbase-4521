
import type { ProfileDataMap } from './types';

export const profileData: ProfileDataMap = {
  "Ai Universe": {
    "about": "This space is dedicated to showcasing the generative AI capabilities integrated into this portfolio. Explore how Large Language Models (LLMs) and other AI tools create interactive and dynamic experiences.",
    "circles": [
        { "title": "AI Interaction", "value": 95, "key_metrics": ["Response Accuracy", "Flow Efficiency"] },
        { "title": "Content Generation", "value": 92, "key_metrics": ["Relevance Score", "Creative Quality"] },
        { "title": "Tool Integration", "value": 88, "key_metrics": ["Tool Usefulness", "API Calls"] }
    ],
    "metrics": [
        { "category": "AI Interaction", "indicator": "Response Accuracy", "format": "%", "example_value": "95%", "description": "Percentage of AI assistant responses that are accurate and relevant." },
        { "category": "AI Interaction", "indicator": "Flow Efficiency", "format": "Seconds", "example_value": "1.2s", "description": "Average end-to-end latency for a Genkit flow execution." },
        { "category": "Content Generation", "indicator": "Relevance Score", "format": "Score (0-1)", "example_value": "0.91", "description": "Average relevance score of AI-recommended content." },
        { "category": "Content Generation", "indicator": "Creative Quality", "format": "Subjective", "example_value": "High", "description": "Qualitative measure of generated text and images." },
        { "category": "Tool Integration", "indicator": "Tool Usefulness", "format": "Count", "example_value": "4 Tools", "description": "Number of Genkit tools actively used by AI agents." },
        { "category": "Tool Integration", "indicator": "API Calls", "format": "Count", "example_value": "120/day", "description": "Number of daily calls to external AI model APIs." }
    ]
  },
  "Data Scientist - A": {
    "about": "This is the placeholder content for the Data Scientist - A profile.",
    "circles": [],
    "metrics": []
  },
  "AI Data Scientist": {
    "about": "This is the placeholder content for the AI Data Scientist profile.",
    "circles": [],
    "metrics": []
  }
}
