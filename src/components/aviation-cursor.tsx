'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { PlaneIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AviationCursor({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isToggled, setIsToggled] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        setIsToggled(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={cn(!isToggled && 'cursor-default', isToggled && 'cursor-none')}>
      {isToggled && (
        <div
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          className={cn(
            'pointer-events-none fixed z-[9999] transition-transform duration-200 ease-in-out',
            {
              'opacity-0 scale-50': !isVisible,
              'opacity-100 scale-100': isVisible,
            }
          )}
        >
          <PlaneIcon
            className={cn(
              'h-8 w-8 -rotate-45 -translate-x-1/2 -translate-y-1/2 text-primary transition-transform duration-300',
              { 'scale-150': isPointer }
            )}
            strokeWidth={1.5}
          />
          <div
            className={cn(
              'absolute -top-1.5 -left-1.5 h-11 w-11 rounded-full border-2 border-primary/50 transition-all duration-300',
              {
                'scale-150 opacity-0': isPointer,
                'scale-100 opacity-100': !isPointer,
              }
            )}
          />
        </div>
      )}
      {children}
    </div>
  );
}
