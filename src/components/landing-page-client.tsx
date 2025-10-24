'use client';

import Link from 'next/link';
import { Briefcase, Database, Eye, UserCheck, ArrowRight, Plane, Quote, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { aviationQuotes } from '@/lib/quotes';
import { useEffect, useState } from 'react';
import { Sphere } from '@/components/sphere';

export function LandingPageClient() {
  const [dailyQuote, setDailyQuote] = useState<{ quote: string; author: string } | null>(null);

  useEffect(() => {
    const getDayOfYear = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }
    const dayIndex = getDayOfYear();
    const quoteIndex = dayIndex % aviationQuotes.length;
    setDailyQuote(aviationQuotes[quoteIndex]);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Plane className="h-12 w-12 text-primary" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-headline font-bold tracking-tight text-foreground md:text-6xl"
      >
        Welcome to Chayan's
        <br />
        <span className="text-5xl md:text-7xl text-primary">Flight Management System</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-xl text-lg text-muted-foreground"
      >
        Who's viewing this portfolio?
      </motion.p>
      
      {dailyQuote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-2xl"
        >
            <div className="flex items-center justify-center gap-2">
                <Quote className="h-5 w-5 text-primary/50 -scale-x-100" />
                <p className="italic text-center text-muted-foreground">{dailyQuote.quote}</p>
                <Quote className="h-5 w-5 text-primary/50" />
            </div>
            <p className="mt-2 text-right text-sm text-foreground/80 font-semibold">- {dailyQuote.author}</p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2 flex items-center gap-2 text-sm text-green-400"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        System Ready - Awaiting Selection
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16"
      >
        <Sphere />
      </motion.div>
    </div>
  );
}
