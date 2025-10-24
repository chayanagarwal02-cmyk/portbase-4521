'use client';

import Link from 'next/link';
import { Briefcase, Database, Eye, UserCheck, ArrowRight, Plane, Quote, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { aviationQuotes } from '@/lib/quotes';
import { useEffect, useState } from 'react';

const roles = [
  { name: 'HR Professional', subtitle: 'Culture & Team Fit', icon: Briefcase, role: 'hr', color: 'bg-blue-600/80 hover:bg-blue-600' },
  { name: 'Data Professional', subtitle: 'Technical Deep Dive', icon: Database, role: 'data-professional', color: 'bg-green-600/80 hover:bg-green-600' },
  { name: 'Executive Briefing', subtitle: 'Strategic Impact', icon: TrendingUp, role: 'cxo', color: 'bg-red-600/80 hover:bg-red-600' },
  { name: 'Hiring Manager', subtitle: 'Business Impact Focus', icon: UserCheck, role: 'hiring-manager', color: 'bg-orange-600/80 hover:bg-orange-600' },
  { name: 'Just Curious', subtitle: 'General Overview', icon: Eye, role: 'stalker', color: 'bg-purple-600/80 hover:bg-purple-600' },
];

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.slice(0, 3).map((role, index) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <Link href={`/portfolio?role=${role.role}`} className={`group relative block p-8 rounded-lg border border-white/10 text-left transition-all duration-300 ${role.color} backdrop-blur-sm`}>
                <div className="absolute top-4 right-4 text-white/20">
                   <role.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{role.name}</h3>
                <p className="mt-1 text-white/70">{role.subtitle}</p>
                <div className="mt-4 flex items-center text-sm text-white/70 transition-all group-hover:text-white group-hover:gap-2">
                  Click to proceed <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/20 rounded-tl-md"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/20 rounded-br-md"></div>
              </Link>
            </motion.div>
          ))}
        </div>
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
           {roles.slice(3).map((role, index) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <Link href={`/portfolio?role=${role.role}`} className={`group relative block p-8 rounded-lg border border-white/10 text-left transition-all duration-300 ${role.color} backdrop-blur-sm`}>
                <div className="absolute top-4 right-4 text-white/20">
                   <role.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{role.name}</h3>
                <p className="mt-1 text-white/70">{role.subtitle}</p>
                <div className="mt-4 flex items-center text-sm text-white/70 transition-all group-hover:text-white group-hover:gap-2">
                  Click to proceed <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/20 rounded-tl-md"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/20 rounded-br-md"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
