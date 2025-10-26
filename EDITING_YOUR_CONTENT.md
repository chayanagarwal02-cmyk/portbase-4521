# How to Edit Your Portfolio Content

This guide provides a detailed walkthrough of where and how to update the content for your aviation-themed portfolio. Most of the portfolio's content is managed in a few key files within the `src/lib/` directory, making it easy to change text, images, and data without needing to modify the React components directly.

---

## 1. Main Content File: `src/lib/data.ts`

This is the most important file for content management. It contains the data for almost every section of your portfolio pages. Let's break it down by section.

### Landing Page Roles (`landing-page-client.tsx`)

The five role-based cards on the initial landing page are managed by the `roles` array in `src/components/landing-page-client.tsx`.

- **To edit the title or description of a role card**, modify the `title` and `description` properties for the corresponding role object.

### Portfolio Page Content (`portfolio/page.tsx`)

The data for the various sections within the `/portfolio` route is controlled by exported constants in `src/lib/data.ts`.

- **Hero Section**: The `heroData` object controls the main title, subtitle, and badges for each role (`hr`, `data-professional`, etc.).
- **Projects Section**: The `projectsData` array powers the "Featured Projects". Each object in this array represents a project card and its detailed modal view. To add a new project, simply add a new object to this array.
- **Testimonials Section**: The `testimonialsData` array controls the "What People Say" carousel.
- **Leadership & Accolades**: The `leadershipData` array powers this section. You can add or remove leadership roles and awards here.
- **Certifications**: The `certificatesData` array contains all your certifications. Add a new object to this array to add a new certificate.
- **Analytics Dashboard**: The charts and graphs get their data from the `analyticsData` object.
- **Code Samples**: The code snippets for the "Code Samples" section are stored in the `codeSamples` array.
- **Performance Metrics & Skills**: The data for the various radar and radial charts comes from `hrPerformanceMetrics`, `dataProfessionalPerformanceMetrics`, and `skillsOverview`.

### Executive Briefing Content (`executive-briefing-view.tsx`)

The content for the executive view is mostly self-contained within the component file `src/components/portfolio/executive-briefing-view.tsx`, but it also uses some data from `src/lib/data.ts`.

- **Case Studies & Metrics**: The `caseStudies`, `topMetrics`, `technicalImpacts`, `devAdvocacyMetrics`, and `businessRoiMetrics` arrays are defined directly at the top of this file.
- **Advocacy Section**: The `speakingEvents`, `contentCreation`, and `openSourceContributions` arrays are located in `src/components/portfolio/advocacy-section.tsx`.
- **Contact Section**: The form fields and social links are managed in `src/components/portfolio/executive-contact-section.tsx`.

---

## 2. Aviation Quotes: `src/lib/quotes.ts`

The rotating quote displayed on the landing page is pulled from the `aviationQuotes` array in this file. You can add, remove, or edit any of the quotes and authors here.

```ts
export const aviationQuotes = [
  {
    "quote": "The cockpit was my office...",
    "author": "Murdock"
  },
  // ... more quotes
];
```

---

## 3. Images: `src/lib/placeholder-images.json`

All placeholder images used throughout the site are defined in this JSON file. This allows you to manage all images from one central location.

To change an image:
1.  Find the ID of the image you want to change (e.g., `"gallery-jet"` or `"blog-placeholder"`).
2.  Replace the `imageUrl` with a new URL from a service like Unsplash.
3.  Update the `imageHint` with one or two relevant keywords for the new image. This helps with accessibility and potential future AI features.

```json
{
  "placeholderImages": [
    {
      "id": "project-placeholder",
      "description": "A placeholder image for a project card.",
      "imageUrl": "https://images.unsplash.com/...",
      "imageHint": "technology project"
    },
    // ... more images
  ]
}
```

By centralizing the content in these files, you can easily keep your portfolio up-to-date with your latest achievements.
