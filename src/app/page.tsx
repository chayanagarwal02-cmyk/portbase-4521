import { PlaneIcon } from 'lucide-react';
import { LandingPageClient } from '@/components/landing-page-client';

export default function Home() {
  return (
    <main className="relative flex h-screen-svh flex-col items-center justify-center overflow-hidden p-4">
      <div className="flight-path">
        <PlaneIcon className="plane plane-1" />
        <PlaneIcon className="plane plane-2" />
        <PlaneIcon className="plane plane-3" />
      </div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <LandingPageClient />
    </main>
  );
}
