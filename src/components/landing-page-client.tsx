'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase, Bot, User, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ConfettiCelebration } from '@/components/confetti-celebration';
import { motion } from 'framer-motion';

const roles = [
  { name: 'HR', icon: Briefcase, role: 'hr' },
  { name: 'Data Professional', icon: Bot, role: 'data-professional' },
  { name: 'Hiring Manager', icon: UserCheck, role: 'hiring-manager' },
  { name: 'Stalker', icon: User, role: 'stalker' },
];

export function LandingPageClient() {
  const [celebrate, setCelebrate] = useState(false);

  const handleRoleSelection = () => {
    setCelebrate(true);
  };

  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      {celebrate && <ConfettiCelebration />}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-headline font-bold tracking-tight text-foreground md:text-7xl"
      >
        Altitude Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-xl text-lg text-muted-foreground"
      >
        Welcome to my digital cockpit. Please identify your role to tailor your flight experience through my professional journey.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-xl font-semibold text-foreground">Who is viewing this portfolio?</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <Button
                asChild
                variant="outline"
                className="w-full h-24 flex-col justify-center gap-2 transform transition-all hover:scale-105 hover:bg-accent/50"
                onClick={handleRoleSelection}
              >
                <Link href={`/portfolio?role=${role.role}`}>
                  <role.icon className="h-8 w-8 text-primary" />
                  <span className="text-base font-medium">{role.name}</span>
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
