'use client';

import { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const loadingTexts = [
  'Initializing Flight Systems...',
  'Loading Navigation Data...',
  'Calibrating Instruments...',
  'Preparing Cockpit...',
  'Systems Ready!',
];

const sysStatus = ['NAV', 'COM', 'DATA', 'SYS'];

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [activeStatus, setActiveStatus] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const totalDuration = 8000; // 8 seconds
  const textInterval = totalDuration / loadingTexts.length;
  const statusInterval = totalDuration / sysStatus.length;

  useEffect(() => {
    // Progress bar animation
    const progressTimer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, totalDuration / 100);

    // Text cycling
    const textTimer = setInterval(() => {
      setCurrentTextIndex(oldIndex => {
        if (oldIndex >= loadingTexts.length - 1) {
          clearInterval(textTimer);
          return loadingTexts.length - 1;
        }
        return oldIndex + 1;
      });
    }, textInterval);

    // System status activation
    const statusTimer = setInterval(() => {
      setActiveStatus(oldStatus => {
        const nextIndex = oldStatus.length;
        if (nextIndex >= sysStatus.length) {
          clearInterval(statusTimer);
          return oldStatus;
        }
        return [...oldStatus, sysStatus[nextIndex]];
      });
    }, statusInterval);

    // Cleanup timers
    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
      clearInterval(statusTimer);
    };
  }, [textInterval, statusInterval]);

  return (
    <div className="h-screen-svh w-full flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, hsl(var(--background)) 1px)',
          backgroundSize: '3rem 3rem',
          opacity: '0.1'
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 flex items-center justify-center mb-8">
            <div className="absolute w-24 h-24 rounded-full border-2 border-primary/20 animate-ping"></div>
            <div className="absolute w-20 h-20 rounded-full border border-primary/40"></div>
            <div className="p-3 bg-primary/10 rounded-full">
                <Plane className="w-8 h-8 text-primary" />
            </div>
        </div>

        <p className="text-xl font-headline text-foreground mb-4 w-64 text-center h-6">
            {loadingTexts[currentTextIndex]}
        </p>

        <div className="w-64">
            <Progress value={progress} className="h-2 bg-muted" />
            <p className="text-center text-primary font-mono text-sm mt-2">{Math.round(progress)}%</p>
        </div>

        <div className="flex space-x-6 mt-6 font-mono text-xs text-muted-foreground">
          {sysStatus.map((status) => (
            <div key={status} className="flex items-center gap-2">
              <span className={cn(
                  "h-2 w-2 rounded-full bg-muted transition-colors duration-500",
                  activeStatus.includes(status) && 'bg-green-500'
              )}></span>
              <span>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
