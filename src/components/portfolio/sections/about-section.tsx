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
  RadialBar
} from 'recharts';
import { Target, MessageSquareQuote } from 'lucide-react';
import { performanceMetrics, skillsOverview, testimonialsData } from '@/lib/data';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AboutSection() {
    const avatarImage = placeholderImages.find(p => p.id === 'avatar-placeholder');
  return (
    <div className="space-y-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Target />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {performanceMetrics.map((metric) => (
              <div key={metric.name} className="flex flex-col items-center p-4 rounded-lg bg-secondary/50">
                 <div className="w-32 h-32">
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
                        </RadialBarChart>
                    </ResponsiveContainer>
                 </div>
                 <p className="text-2xl font-bold mt-[-2rem]">{metric.value}%</p>
                <p className="text-muted-foreground mt-2 font-body">{metric.name}</p>
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
            <RadarChart data={skillsOverview}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" className="font-body"/>
              <Radar
                name="Skills"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
              />
              <RechartsTooltip contentStyle={{
                background: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}/>
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
                <MessageSquareQuote />
                Testimonials
            </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="bg-secondary/50 p-6 rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                            {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint}/>}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground font-body italic">"{testimonial.quote}"</p>
                </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
