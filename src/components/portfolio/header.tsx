'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plane, Wifi, Battery, ChevronLeft, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PortfolioHeader() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>SYSTEM ONLINE</span>
            </div>
            <div className='w-[1px] h-4 bg-border' />
            <div className="flex items-center gap-1">
              <Wifi size={16} />
              <span>CONNECTED</span>
            </div>
        </div>
        
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Plane className="h-7 w-7 text-primary" />
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground">
            <span>{time}</span>
            <div className="flex items-center gap-1">
              <Battery size={16} />
              <div className="w-6 h-3 border border-muted-foreground rounded-sm p-px"><div className="bg-green-500 h-full w-[90%] rounded-sm"></div></div>
            </div>
          </div>
           <Button variant="ghost" size="icon" aria-label="User Profile">
            <UserCircle className="h-[1.5rem] w-[1.5rem]" />
          </Button>
        </div>
      </div>
    </header>
  );
}
