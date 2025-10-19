'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { Target } from 'lucide-react';
import { performanceMetrics, skillsOverview } from '@/lib/data';
import { ChartContainer } from '@/components/ui/chart';
import { RadialBarChart, RadialBar, Tooltip } from 'recharts';

export function AboutSection() {
  return (
    <div className="space-y-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {performanceMetrics.map((metric) => (
              <div key={metric.name} className="flex flex-col items-center">
                <div className="w-40 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      innerRadius="70%"
                      outerRadius="100%"
                      data={[{ ...metric, fill: 'hsl(var(--primary))' }]}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <RadialBar
                        background
                        dataKey="value"
                        cornerRadius={10}
                      />
                      <Tooltip
                        cursor={false}
                        content={({ payload }) => {
                          if (payload && payload.length > 0) {
                            return (
                              <div className="bg-popover p-2 rounded-md">
                                <p className="text-popover-foreground">{`${payload[0].value}%`}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                 <p className="text-2xl font-bold mt-[-2.5rem]">{metric.value}%</p>
                <p className="text-muted-foreground mt-2">{metric.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills Overview</CardTitle>
        </CardHeader>
        <CardContent className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skillsOverview}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <Radar
                name="Skills"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
