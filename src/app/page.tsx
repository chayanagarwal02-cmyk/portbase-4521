import { LandingPageClient } from '@/components/landing-page-client';
import { Plane } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative flex h-screen-svh flex-col items-center justify-center overflow-hidden p-4 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
       <div className="absolute top-1/4 left-1/4 opacity-20">
        <Plane className="w-8 h-8 text-blue-400 -rotate-45" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-20">
        <Plane className="w-6 h-6 text-blue-300 rotate-12" />
      </div>
      <LandingPageClient />
      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        Aviation-Themed Portfolio System v1.0
      </footer>
    </main>
  );
}
