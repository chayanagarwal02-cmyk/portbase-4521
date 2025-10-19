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
              <div key={metric.name} className="flex flex-col items-center p-4 rounded-lg bg-card">
                 <div className="w-32 h-32 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            innerRadius="70%"
                            outerRadius="100%"
                            data={[{ ...metric, fill: 'hsl(var(--primary))' }]}
                            startAngle={90}
                            endAngle={-270}
                        >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                        <RadialBar
                            background
                            dataKey="value"
                            cornerRadius={10}
                            className="fill-primary"
                        />
                        </RadialBarChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                        <span className="text-sm text-muted-foreground">%</span>
                    </div>
                 </div>
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

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
                <MessageSquareQuote />
                Testimonials
            </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((testimonial) => {
                 const testimonialAvatar = placeholderImages.find(p => p.id === 'testimonial-avatar-placeholder') || avatarImage;
                return(
                <div key={testimonial.id} className="bg-secondary/30 p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                            {testimonialAvatar && <AvatarImage src={testimonialAvatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonialAvatar.imageHint}/>}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground font-body italic">"{testimonial.quote}"</p>
                </div>
            )})}
        </CardContent>
      </Card>
    </div>
  );
}
