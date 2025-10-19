'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  RadialBarChart,
  RadialBar,
} from 'recharts';
import { TrendingUp, Users, Award, Star, Zap, Rocket, Briefcase } from 'lucide-react';
import { skillsOverview, performanceMetrics } from '@/lib/data';

const quickStats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' },
];

export function OverviewSection() {
  return (
    <div className="space-y-12">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {performanceMetrics.map((metric) => (
                    <div key={metric.name}>
                        <div className="h-40 w-40 mx-auto">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart 
                                innerRadius="70%" 
                                outerRadius="85%" 
                                data={[metric]} 
                                startAngle={90} 
                                endAngle={-270}
                            >
                            <PolarAngleAxis
                                type="number"
                                domain={[0, 100]}
                                angleAxisId={0}
                                tick={false}
                            />
                            <RadialBar
                                background
                                clockWise
                                dataKey="value"
                                cornerRadius={10}
                                fill={metric.color}
                                className="fill-primary"
                             />
                            <text 
                                x="50%" 
                                y="50%" 
                                textAnchor="middle" 
                                dominantBaseline="middle" 
                                className="fill-foreground text-2xl font-bold"
                            >
                                {`${metric.value}%`}
                            </text>
                            </RadialBarChart>
                        </ResponsiveContainer>
                        </div>
                        <p className="mt-2 font-semibold text-muted-foreground">{metric.name}</p>
                    </div>
                    ))}
                </div>
            </CardContent>
        </Card>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Skills Overview</CardTitle>
        </CardHeader>
        <CardContent className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skillsOverview} outerRadius="80%">
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="subject" className="font-body text-xs fill-muted-foreground" />
              <Radar
                name="Skills"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
              />
              <RechartsTooltip contentStyle={{
                background: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}/>
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-card/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-xl">
                    <Users className="h-5 w-5 text-primary" />
                    About This View
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Customized content for data professionals</p>
                <p className="mt-2 text-muted-foreground">
                    This portfolio is tailored specifically to show you the most relevant information based on your role. Explore the tabs above to discover projects, achievements, and insights that matter most to you.
                </p>
            </CardContent>
        </Card>
        <Card className="bg-card/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-xl">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Quick Stats
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {quickStats.map(stat => (
                    <div key={stat.label} className="flex justify-between items-center bg-secondary/30 p-3 rounded-md">
                        <p className="text-muted-foreground">{stat.label}</p>
                        <p className="font-bold text-foreground">{stat.value}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
