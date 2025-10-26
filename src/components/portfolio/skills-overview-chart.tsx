'use client';

import { useState } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { Plane } from 'lucide-react';
import { dataAnalystSkills } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { CategorizedSkills } from '@/lib/types';

type SkillCategory = keyof typeof dataAnalystSkills;

export function SkillsOverviewChart() {
  const skillCategories = Object.keys(dataAnalystSkills) as SkillCategory[];
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(skillCategories[0]);
  const activeSkills = dataAnalystSkills[activeCategory];

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {skillCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="transition-all"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="w-full h-80 sm:h-96 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={activeSkills} outerRadius="80%">
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
      </div>
    </div>
  );
}
