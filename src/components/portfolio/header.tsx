'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plane, Moon, Sun, Wifi, Battery } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export function PortfolioHeader() {
  const { theme, setTheme } = useTheme();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold">
          <Plane className="h-6 w-6 text-primary" />
          <span>Altitude</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Wifi size={16} />
              <span>VFR</span>
            </div>
            <div className="flex items-center gap-1">
              <Battery size={16} />
              <span>98%</span>
            </div>
            <span>{time}</span>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
}
