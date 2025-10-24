
import { LandingPageClient } from '@/components/landing-page-client';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex h-screen-svh flex-col items-center justify-center overflow-hidden p-4 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute top-4 right-4 z-20 flex gap-4">
        <Link href="https://github.com/Chayan-DSML" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
        <Link href="https://www.linkedin.com/in/chayan-agarwal01/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
      </div>

      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <LandingPageClient />

      <footer className="relative z-10 bottom-4 text-center text-sm text-muted-foreground mt-8">
        Aviation-Themed Portfolio System v1.0
      </footer>
    </main>
  );
}
