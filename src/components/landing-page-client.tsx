'use client';

import Link from 'next/link';
import {
  Briefcase,
  Database,
  Eye,
  UserCheck,
  ArrowRight,
  Plane,
  Quote,
  TrendingUp,
  UserSearch,
  BrainCircuit,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { aviationQuotes } from '@/lib/quotes';
import { useEffect, useState } from 'react';
import { LinkedinDialog } from './linkedin-dialog';
import type { Role } from '@/lib/data';

const roles = [
  {
    role: 'hiring-manager' as Role,
    title: 'Hiring Manager',
    description: 'Assess practical skills, project impact, and leadership.',
    icon: UserSearch,
    href: '/portfolio?role=hiring-manager',
    isDialog: false,
  },
  {
    role: 'data-professional' as Role,
    title: 'Data Professional',
    description: 'A technical deep-dive into projects, code, and analytics.',
    icon: Database,
    href: '/portfolio?role=data-professional',
    isDialog: false,
  },
  {
    role: 'hr' as Role,
    title: 'HR Professional',
    description: 'View culture fit, team skills, and professional growth.',
    icon: UserCheck,
    href: '/portfolio?role=hr',
    isDialog: false,
  },
  {
    role: 'cxo' as Role,
    title: 'Executive Briefing',
    description: 'High-level overview of business impact and strategy.',
    icon: TrendingUp,
    href: '/portfolio?role=cxo',
  },
  {
    role: 'stalker' as Role,
    title: 'Just Curious',
    description: 'A general overview and blog for the casual visitor.',
    icon: Eye,
    href: '/portfolio?role=stalker',
  },
  {
    role: 'ai-universe' as Role,
    title: 'AI Universe',
    description: 'Explore AI-powered features and generative content.',
    icon: BrainCircuit,
    href: '/portfolio?role=ai-universe',
  },
];

const cardColors = [
  'hover:bg-gradient-to-br from-background to-blue-900/40',
  'hover:bg-gradient-to-br from-background to-purple-900/40',
  'hover:bg-gradient-to-br from-background to-green-900/40',
  'hover:bg-gradient-to-br from-background to-red-900/40',
  'hover:bg-gradient-to-br from-background to-gray-800/40',
  'hover:bg-gradient-to-br from-background to-teal-900/40',
];

export function LandingPageClient() {
  const [dailyQuote, setDailyQuote] = useState<{ quote: string; author: string } | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  useEffect(() => {
    const getDayOfYear = () => {
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0);
      const diff =
        now.getTime() -
        start.getTime() +
        (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.floor(diff / oneDay);
    };
    const dayIndex = getDayOfYear();
    const quoteIndex = dayIndex % aviationQuotes.length;
    setDailyQuote(aviationQuotes[quoteIndex]);
  }, []);

  const handleCardClick = (role: Role) => {
    setSelectedRole(role);
    setDialogOpen(true);
  }

  const renderCard = (card: (typeof roles)[0], i: number) => {
    const Icon = card.icon;
    const cardContent = (
      <div
        className={`h-full rounded-lg border bg-card/50 text-card-foreground shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 p-6 flex flex-col items-start ${cardColors[i]}`}
      >
        <div className="mb-4 rounded-full bg-primary/10 p-3 border border-primary/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-headline font-semibold text-left">{card.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground text-left">
          {card.description}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity gap-1">
          Proceed to View <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    );
  
    if (card.isDialog) {
      return (
        <button onClick={() => handleCardClick(card.role)} className="group w-full text-left">
          {cardContent}
        </button>
      );
    }
  
    return (
      <Link href={card.href} className="group">
        {cardContent}
      </Link>
    );
  };

  return (
    <>
      <LinkedinDialog open={dialogOpen} onOpenChange={setDialogOpen} role={selectedRole} />
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
            <p className="mt-2 text-right text-sm text-foreground/80 font-semibold">
              - {dailyQuote.author}
            </p>
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

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {roles.map((card, i) => {
            return (
              <motion.div
                key={card.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className={
                  card.role === 'stalker' || card.role === 'cxo' || card.role === 'ai-universe'
                    ? 'lg:col-span-1 sm:col-span-2 lg:col-start-auto sm:col-start-auto'
                    : ''
                }
              >
                {renderCard(card, i)}
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
