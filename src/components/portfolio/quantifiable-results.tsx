'use client';

import { DollarSign, Users, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const topMetrics = [
  {
    icon: DollarSign,
    value: '$2.3M+',
    label: 'Total Value Created',
  },
  {
    icon: TrendingUp,
    value: '25+',
    label: 'Presentations Delivered',
  },
  {
    icon: Users,
    value: '5,200+',
    label: 'Community Members Reached',
  },
  {
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <path d="M6 9v12" />
      </svg>
    ),
    value: '45+',
    label: 'Open Source Contributors',
  },
];

const technicalImpacts = [
    { label: "Data pipeline efficiency gain", value: "87%" },
    { label: "Cross-team data literacy workshops delivered", value: "12" },
    { label: "Teams actively using platform", value: "15" },
    { label: "Executive data-driven decisions increased", value: "+340%" }
]

export function QuantifiableResults() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-24 w-full max-w-7xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">03 — Quantifiable Results</h2>
        <h3 className="mt-2 text-3xl font-headline font-bold">Impact Across Code & Community</h3>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          Success metrics span technical delivery, business value, and community growth. Here's the concrete impact I've delivered—from production ML models to conference stages, from cost savings to GitHub stars.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {topMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="bg-card/50 border-border/50 text-center p-6">
              <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary">{metric.value}</p>
              <p className="mt-2 text-muted-foreground">{metric.label}</p>
            </Card>
          );
        })}
      </div>
      
      <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
          <div className="flex flex-col justify-center text-left">
            <Badge variant="outline" className="w-fit mb-4">Technical Impact</Badge>
            <p className="text-3xl font-bold text-primary">$1.2M</p>
            <p className="text-lg font-semibold text-foreground mt-1">End-to-end data platform + internal advocacy program</p>
            <p className="text-sm text-muted-foreground mt-2">Annual value delivered through platform + adoption</p>
            <div className="border-t border-border my-4"></div>
            <p className="text-sm font-semibold text-muted-foreground">10-month initiative</p>
          </div>
          <div className="space-y-4">
            {technicalImpacts.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                <p className="text-foreground">{item.label}</p>
                <p className="text-lg font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}