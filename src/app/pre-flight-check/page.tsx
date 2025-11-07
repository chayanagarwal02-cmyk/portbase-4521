
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { AnimatePresence, motion } from 'framer-motion';

const loadingSteps = [
  { text: (name: string) => `Captain, all systems check green. Loading manifest... (${name}). Ready for pushback.`, duration: 3000 },
  { text: () => "Good to go, Cap! Just waiting on the fuel truck (Backend Server). This website is cleared for takeoff.", duration: 3000 },
  { text: () => "Downloading Assets... Please Wait", duration: 2000 },
  { text: () => "Captain, the runway is clear! Initiating sequence to load Website Name", duration: 2500 },
  { text: () => "L-O-A-D-I-N-G", duration: 1500, isTyping: true },
  { text: () => "Welcome aboard, Captain. Let's get this site loaded smoothly.", duration: 2000 },
  { text: () => "Connecting...", duration: 1500 },
];

export default function LoadingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get('name') || 'Captain';
  const role = searchParams.get('role') || 'data-professional';

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;
    
    let currentProgress = 0;
    const totalDuration = loadingSteps.reduce((acc, step) => acc + step.duration, 0);

    const progressInterval = setInterval(() => {
        currentProgress += 100 / (totalDuration / 100);
        setProgress(Math.min(currentProgress, 100));
    }, 100);

    let stepTimeout: NodeJS.Timeout;
    const runStep = (stepIndex: number) => {
      if (stepIndex >= loadingSteps.length) {
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => {
            setIsDone(true);
            router.push(`/portfolio?role=${role}&name=${encodeURIComponent(name)}`);
        }, 500);
        return;
      }
      setCurrentStep(stepIndex);
      stepTimeout = setTimeout(() => {
        runStep(stepIndex + 1);
      }, loadingSteps[stepIndex].duration);
    };

    runStep(0);

    return () => {
      clearTimeout(stepTimeout);
      clearInterval(progressInterval);
    };
  }, [name, router, isDone, role]);
  
  const currentText = loadingSteps[currentStep].text(name);
  const isTyping = loadingSteps[currentStep].isTyping;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-screen-svh w-full flex flex-col items-center justify-center bg-background text-foreground fixed inset-0 z-[100]"
        >
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, hsl(var(--background)) 1px)',
              backgroundSize: '3rem 3rem',
              opacity: '0.1'
            }}
          />
          
          <div className="relative z-10 flex flex-col items-center justify-center w-[90%] max-w-lg">
             <AnimatePresence mode="wait">
                <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-xl font-headline text-foreground mb-8 text-center h-12 ${isTyping ? 'font-mono' : ''}`}
                >
                    {currentText}
                </motion.p>
             </AnimatePresence>

            <div className="w-full">
                <Progress value={progress} className="h-2 bg-muted" />
                <p className="text-center text-primary font-mono text-sm mt-2">{Math.round(progress)}%</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
