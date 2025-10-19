'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart, Area, AreaChart } from 'recharts';
import { analyticsData } from '@/lib/data';

const { quarterlyImpact, techDistribution, weeklyActivity, skillGrowth } = analyticsData;

export function AnalyticsSection() {
  return (
    <section id="analytics" className="py-16">
      <h2 className="text-3xl font-bold text-center font-headline">Analytics Dashboard</h2>
      <p className="mt-2 text-center text-muted-foreground mb-12">Visualizing my professional impact and growth.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Quarterly Impact</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quarterlyImpact}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impact" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Technology Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={techDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="hsl(var(--primary))" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Skill Growth Over Time</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={skillGrowth}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Python" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="SQL" stroke="hsl(var(--accent))" fillOpacity={0.3} fill="hsl(var(--accent))" />
                </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
