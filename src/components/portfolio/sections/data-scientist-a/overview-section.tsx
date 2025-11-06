
'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';
import { profileData } from '@/lib/profile-data';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle, Users, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { ProfileCircle, ProfileMetric } from '@/lib/types';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { SkillsOverviewChart } from '@/components/portfolio/skills-overview-chart';

const quickStats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Certifications', value: '6' },
    { label: 'Leadership Roles', value: '2' },
    { label: 'Accolades', value: '1' },
    { label: 'Tech Blogs Written', value: '3' },
    { label: 'Speaking Engagements', value: '3' },
];

export function OverviewSection() {
    const dataAnalystMetrics = profileData['Data Analyst'];
    const dataScientistMetrics = profileData['Data Scientist'];
    const dataEngineerMetrics = profileData['Data Engineer'];

    // Metric groups to be merged
    const businessImpact = dataAnalystMetrics.circles.find(c => c.title === "Business Impact & Insight Generation");
    const businessValue = dataScientistMetrics.circles.find(c => c.title === "Quantifiable Business Value");
    
    const analysisEfficiency = dataAnalystMetrics.circles.find(c => c.title === "Analysis & Reporting Efficiency");
    const engineerEfficiency = dataEngineerMetrics.circles.find(c => c.title === "Efficiency & Cost");

    const dataQualityAndAccuracy = dataAnalystMetrics.circles.find(c => c.title === "Data Quality & Accuracy");
    const dataQualityAndFreshness = dataEngineerMetrics.circles.find(c => c.title === "Data Quality & Freshness");

    const combinedCircles: ProfileCircle[] = [
        {
            title: "Overall Business Impact",
            value: Math.round(((businessImpact?.value || 0) + (businessValue?.value || 0)) / 2),
            key_metrics: [
                ...(businessImpact?.key_metrics || []),
                ...(businessValue?.key_metrics || []),
            ]
        },
        dataScientistMetrics.circles.find(c => c.title === "Model Performance")!,
        dataEngineerMetrics.circles.find(c => c.title === "Pipeline Health & Reliability")!,
        {
            title: "Unified Data Quality",
            value: Math.round(((dataQualityAndAccuracy?.value || 0) + (dataQualityAndFreshness?.value || 0)) / 2),
            key_metrics: [
                ...(dataQualityAndAccuracy?.key_metrics || []),
                ...(dataQualityAndFreshness?.key_metrics || []),
            ]
        },
        {
            title: "Operational Efficiency & Cost",
            value: Math.round(((analysisEfficiency?.value || 0) + (engineerEfficiency?.value || 0)) / 2),
            key_metrics: [
                ...(analysisEfficiency?.key_metrics || []),
                ...(engineerEfficiency?.key_metrics || []),
            ]
        },
        dataScientistMetrics.circles.find(c => c.title === "Production Readiness")!,
        dataAnalystMetrics.circles.find(c => c.title === "Team & Soft Skills")!,
    ].filter((c): c is ProfileCircle => !!c);


    const combinedMetrics: ProfileMetric[] = [
        ...dataAnalystMetrics.metrics,
        ...dataScientistMetrics.metrics,
        ...dataEngineerMetrics.metrics,
    ];
  
  const chartColors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))", "hsl(var(--chart-1))", "hsl(var(--chart-2))"];
  
  const renderCircle = (metric: ProfileCircle, index: number) => (
    <Dialog key={metric.title}>
        <DialogTrigger asChild>
            <div className="cursor-pointer group flex-shrink-0 w-48 text-center">
                <div className="h-40 w-40 mx-auto transition-transform group-hover:scale-110">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart 
                            innerRadius="70%" 
                            outerRadius="85%" 
                            data={[metric]} 
                            startAngle={90} 
                            endAngle={-270}
                        >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false}/>
                        <RadialBar background clockWise dataKey="value" cornerRadius={10} fill={chartColors[index % chartColors.length]} />
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-foreground text-2xl font-bold">
                            {`${metric.value}%`}
                        </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
                <p className="mt-2 font-semibold text-muted-foreground group-hover:text-primary transition-colors">{metric.title}</p>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='font-headline text-xl'>{metric.title}</DialogTitle>
                <DialogDescription>
                    Detailed breakdown of metrics contributing to this score. Hover over an item for its definition.
                </DialogDescription>
            </DialogHeader>
            <TooltipProvider>
                <ul className="space-y-4 pt-4">
                {metric.key_metrics.map(keyMetric => {
                    const metricDetail = combinedMetrics.find(m => m.indicator === keyMetric);
                    if (!metricDetail) return null;

                    return (
                    <li key={keyMetric}>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger className="w-full">
                                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-md">
                                    <div className='flex items-center gap-2'>
                                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-foreground">{keyMetric}</span>
                                    </div>
                                    <Badge variant="outline">{metricDetail.example_value}</Badge>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" align="start">
                                <p className="max-w-xs">{metricDetail.description}</p>
                            </TooltipContent>
                        </Tooltip>
                    </li>
                    )
                })}
                </ul>
            </TooltipProvider>
        </DialogContent>
    </Dialog>
  );


  return (
    <div className="space-y-12">
        <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row bg-card/50">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                    src="/images/avatar.png"
                    alt="Chayan Agarwal"
                    layout="fill"
                    objectFit="cover"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-headline font-bold mb-2">A Message for the Data Scientist - A Profile</h2>
                    <p className="text-muted-foreground mb-4">
                        Welcome to my career portfolio. This unified view combines my skills across data analysis, engineering, and science to give you a comprehensive look at my capabilities as a versatile data professional.
                    </p>
                    <p className="text-sm font-semibold">Chayan Agarwal</p>
                    <p className="text-xs text-muted-foreground">Data Professional & Aviation Enthusiast</p>
                </div>
            </div>
        </Card>
        
        <Card className="bg-card/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-xl">
                    <Users className="h-5 w-5 text-primary" />
                    About This View
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Customized content for Data Scientist - A</p>
                <p className="mt-2 text-muted-foreground">
                    This portfolio view consolidates key metrics from Data Analyst, Data Scientist, and Data Engineer profiles to provide a holistic overview. Explore the tabs to see how these skills combine in various projects.
                </p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Performance Metrics</CardTitle>
                <CardDescription>An aggregated view of performance indicators across Data Analyst, Data Scientist, and Data Engineer roles. Click any chart for a detailed breakdown.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea>
                <div className="flex space-x-8 pb-4">
                    {combinedCircles.map((metric, index) => renderCircle(metric, index))}
                </div>
                <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">General Skills Overview</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                    <SkillsOverviewChart />
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
