'use client';

import { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import Cookies from 'js-cookie';
import { AnimatePresence, motion } from 'framer-motion';

const loadingTexts = [
  'Initializing Flight Systems...',
  'Loading Navigation Data...',
  'Calibrating Instruments...',
  'Preparing Cockpit...',
  'Systems Ready!',
];

const sysStatus = ['NAV', 'COM', 'DATA', 'SYS'];
const LOADER_COOKIE = 'has_seen_loader';

export function GlobalLoader() {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [activeStatus, setActiveStatus] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if the cookie exists. If it does, we don't show the loader.
    if (Cookies.get(LOADER_COOKIE)) {
      setIsDone(true);
      return;
    }

    const totalDuration = 8000;
    const textInterval = totalDuration / loadingTexts.length;
    const statusInterval = totalDuration / sysStatus.length;

    const progressTimer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, totalDuration / 100);

    const textTimer = setInterval(() => {
      setCurrentTextIndex(oldIndex => {
        if (oldIndex >= loadingTexts.length - 1) {
          clearInterval(textTimer);
          return loadingTexts.length - 1;
        }
        return oldIndex + 1;
      });
    }, textInterval);

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

    // Set a timer to mark loading as done and set the cookie
    const doneTimer = setTimeout(() => {
      setIsDone(true);
      Cookies.set(LOADER_COOKIE, 'true', { expires: 1 }); // Expires in 1 day
    }, totalDuration);

    // Cleanup timers
    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
      clearInterval(statusTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
     <AnimatePresence>
      {!isDone && (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-screen-svh w-full flex flex-col items-center justify-center bg-background text-foreground fixed inset-0 z-[100]"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}