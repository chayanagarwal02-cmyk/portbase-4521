'use client';

import { ArrowRight, Plane } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Value Delivered', value: '$2.3M+' },
  { label: 'Presentations & Talks', value: '25+' },
  { label: 'Community Members Reached', value: '5,000+' },
];

export function ExecutiveBriefingView() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <Plane className="h-12 w-12 text-primary" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Badge variant="outline" className="mb-4 text-sm py-1 px-3">
          Machine Learning Advocate
        </Badge>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl font-headline font-bold tracking-tight text-foreground md:text-4xl"
      >
        Building Data Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 max-w-2xl text-lg text-muted-foreground"
      >
        Technical storyteller combining data engineering, analytics, and ML science with developer advocacy. I build data solutions that drive business value, then take the stage to share insights, inspire teams, and grow communities around data-driven innovation.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Button size="lg">
          View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          Schedule a Conversation
        </Button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
      >
        {stats.map((stat, i) => (
          <Card key={i} className="bg-card/50 border-border/50 py-6 px-4">
            <p className="text-4xl font-bold text-primary">{stat.value}</p>
            <p className="mt-2 text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
