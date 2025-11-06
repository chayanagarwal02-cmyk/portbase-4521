
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
import { HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { ProfileCircle, ProfileMetric } from '@/lib/types';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';


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
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Consolidated Performance Metrics</CardTitle>
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
  );
}
