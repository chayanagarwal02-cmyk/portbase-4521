'use client';

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { Plane } from 'lucide-react';
import { skillsOverview } from '@/lib/data';

export function SkillsOverviewChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skillsOverview} outerRadius="80%">
          <PolarGrid stroke="hsl(var(--border) / 0.5)" />
          <PolarAngleAxis
            dataKey="subject"
            className="text-xs"
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
            dot={{ r: 4, fill: 'hsl(var(--primary))' }}
            activeDot={{ r: 6 }}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <Plane className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </>
  );
}
