import { LandingPageClient } from '@/components/landing-page-client';
import { Plane } from 'lucide-react';

const AnimatedPlane = ({
  className,
  pathClassName,
  duration,
}: {
  className?: string;
  pathClassName?: string;
  duration: number;
}) => {
  const animationStyle = {
    animationDuration: `${duration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  };

  return (
    <div
      className={`absolute w-full h-full animate-fly-path ${className}`}
      style={animationStyle}
    >
      <div className={`absolute w-px h-full bg-repeat-y bg-[length:1px_8px] ${pathClassName}`}></div>
      <Plane className="absolute w-4 h-4 text-primary/80 -rotate-45 top-0 left-1/2 -translate-x-1/2" />
    </div>
  );
};

export default function Home() {
  return (
    <main className="relative flex h-screen-svh flex-col items-center justify-center overflow-hidden p-4 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="absolute inset-0 perspective-1000 transform-style-3d">
        <AnimatedPlane
          className="rotate-x-60"
          pathClassName="bg-gradient-to-b from-primary/50 to-transparent"
          duration={20}
        />
        <AnimatedPlane
          className="rotate-x-60 -rotate-z-30"
          pathClassName="bg-gradient-to-b from-primary/50 to-transparent"
          duration={15}
        />
        <AnimatedPlane
          className="rotate-x-60 rotate-z-30"
          pathClassName="bg-gradient-to-b from-primary/50 to-transparent"
          duration={18}
        />
         <AnimatedPlane
          className="rotate-x-60 rotate-z-60"
          pathClassName="bg-gradient-to-b from-primary/50 to-transparent"
          duration={22}
        />
         <AnimatedPlane
          className="rotate-x-60 -rotate-z-60"
          pathClassName="bg-gradient-to-b from-primary/50 to-transparent"
          duration={25}
        />
      </div>
      
      <LandingPageClient />

      <footer className="relative z-10 bottom-4 text-center text-sm text-muted-foreground mt-8">
        Aviation-Themed Portfolio System v1.0
      </footer>
    </main>
  );
}
