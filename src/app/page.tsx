
import { LandingPageClient } from '@/components/landing-page-client';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { LiveATCMap } from '@/components/live-atc-map';

export default function Home() {
  return (
    <main className="relative flex h-screen-svh flex-col items-center justify-center overflow-hidden p-4 bg-background">
      <LiveATCMap />
      
      <div className="absolute top-4 right-4 z-20 flex gap-4">
        <Link href="https://github.com/Chayan-DSML" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <Link href="https://www.linkedin.com/in/chayan-agarwal01/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
      </div>

      <LandingPageClient />

      <footer className="relative z-10 bottom-4 text-center text-sm text-muted-foreground mt-8">
        Aviation-Themed Portfolio System v1.0
      </footer>
    </main>
  );
}
