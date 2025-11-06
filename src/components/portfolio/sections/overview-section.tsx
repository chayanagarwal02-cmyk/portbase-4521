
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
import { TrendingUp, Users, Award, Star, Zap, Rocket, Briefcase, Plane, CheckCircle, HelpCircle, GraduationCap } from 'lucide-react';
import { profileData } from '@/lib/profile-data';
import { SkillsOverviewChart } from '@/components/portfolio/skills-overview-chart';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


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

const CultNinjaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path id="top" d="M 20, 50 a 30,30 0 1,1 60,0" fill="none" />
      <text>
        <textPath href="#top" startOffset="50%" textAnchor="middle" fontSize="10" fill="currentColor">
          EARNED NOT BOUGHT
        </textPath>
      </text>
      <path id="bottom" d="M 20, 50 a 30,30 0 0,0 60,0" fill="none" />
      <text>
        <textPath href="#bottom" startOffset="50%" textAnchor="middle" fontSize="10" fill="currentColor">
          CULT NINJA
        </textPath>
      </text>
      <g transform="translate(50 50) scale(0.4)">
        <circle cx="0" cy="-15" r="5" fill="currentColor" />
        <path d="M -20 0 L 20 0" stroke="currentColor" strokeWidth="4" />
        <path d="M -15 15 L 0 5 L 15 15 Z" fill="currentColor" />
      </g>
    </svg>
  );

const CaptainIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
        <circle cx="50" cy="50" r="45" fill="#1E3A8A" stroke="#FBBF24" strokeWidth="4" />
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="8" className="font-headline">ACHIEVEMENT</text>
        <g transform="translate(50 55) scale(0.3)">
            <path d="M0-25 l5,10 h15 l-10,15 l5,20 l-15-10 l-15,10 l5-20 l-10-15 h15 z" fill="none" stroke="#FBBF24" strokeWidth="3" />
            <circle cx="0" cy="0" r="10" fill="none" stroke="#FBBF24" strokeWidth="3"/>
            <path d="M0-10 V10 M-10,0 H10" stroke="#FBBF24" strokeWidth="3"/>
        </g>
        <text x="50" y="80" textAnchor="middle" fill="white" fontSize="6">CAPTAIN OF THE MONTH</text>
    </svg>
);


const achievements = [
    { icon: Award, color: 'text-yellow-400 bg-yellow-900/50', tooltip: 'Innovator of the Year' },
    { icon: Star, color: 'text-orange-400 bg-orange-900/50', tooltip: 'Top Performer Award' },
    { icon: CultNinjaIcon, color: 'text-rose-400 bg-rose-900/50', tooltip: 'Cult Ninja Award' },
    { icon: Rocket, color: 'text-blue-400 bg-blue-900/50', tooltip: 'Project Launch Excellence' },
    { icon: CaptainIcon, color: 'text-amber-400 bg-amber-900/50', tooltip: "Captain of the Month - Scaler CC x BLR Community (Sept' 25)" },
]

const careerJourney = [
    { year: '2023 - 2024', role: 'Data Operations Analyst', company: 'Amazon Development Center (India) Pvt. Ltd.', description: 'Analyzed large-scale data to enhance operational efficiency and support strategic decisions.'},
    { year: '2022 - 2023', role: 'Operations Analyst', company: 'Highway Delite', description: 'Monitored operational metrics and provided data-driven recommendations for process improvements.'},
]

const virtualInternships = [
    { year: 'June 2025 - August 2025', role: 'Data Analytics Consultant', company: 'Quantium (via The Forage)', description: 'Completed a simulated project involving data analysis and strategic recommendations for a retail client.'}
]


export function OverviewSection({ profile }: { profile: string }) {
  const profileTitle = profile.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const currentProfileData = profileData[profileTitle as keyof typeof profileData] || profileData['Data Analyst'];
  const chartColors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];

  if (!currentProfileData) {
    return <div>Loading profile...</div>; // Or some other fallback UI
  }

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
                <h2 className="text-2xl font-headline font-bold mb-2">A Message for the {profileTitle} Profile</h2>
                <p className="text-muted-foreground mb-4">
                    {currentProfileData.about}
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
                <p className="text-sm text-muted-foreground">Customized content for {profileTitle}</p>
                <p className="mt-2 text-muted-foreground">
                    This portfolio is tailored specifically to show you the most relevant information based on your role. Explore the tabs above to discover projects, achievements, and insights that matter most to you.
                </p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Performance Metrics for {profileTitle}</CardTitle>
                <CardDescription>Click on a chart for a detailed breakdown of key metrics.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {currentProfileData.circles.map((metric, index) => (
                     <Dialog key={metric.title}>
                        <DialogTrigger asChild>
                            <div className="cursor-pointer group">
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
                                    const metricDetail = currentProfileData.metrics.find(m => m.indicator === keyMetric);
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
                    ))}
                </div>
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
      
      <div>
        <h3 className="text-center text-xl font-headline mb-6">Achievements &amp; Certifications</h3>
        <TooltipProvider>
            <div className="flex justify-center gap-4">
                {achievements.map((ach, i) => {
                    const Icon = ach.icon;
                    return (
                        <Tooltip key={i}>
                            <TooltipTrigger asChild>
                                <button className={`flex items-center justify-center w-16 h-16 rounded-full ${ach.color} transition-transform hover:scale-110`}>
                                    <Icon className="w-8 h-8" />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{ach.tooltip}</p>
                            </TooltipContent>
                        </Tooltip>
                    )
                })}
            </div>
        </TooltipProvider>
      </div>

      <Card className="bg-card/50">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl">
                <Briefcase className="h-5 w-5 text-primary" />
                Career Journey
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="relative pl-6">
                <div className="absolute left-[30px] h-full w-0.5 bg-border -translate-x-1/2"></div>
                {careerJourney.map((item, index) => (
                    <div key={index} className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-1.5 flex items-center">
                            <div className="w-4 h-4 rounded-full bg-primary z-10"></div>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.year}</p>
                        <h4 className="font-semibold text-foreground">{item.role}</h4>
                        <p className="text-sm text-muted-foreground font-semibold">{item.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/50">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl">
                <GraduationCap className="h-5 w-5 text-primary" />
                Virtual Internships
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="relative pl-6">
                <div className="absolute left-[30px] h-full w-0.5 bg-border -translate-x-1/2"></div>
                {virtualInternships.map((item, index) => (
                    <div key={index} className="relative pl-8 pb-8 last:pb-0">
                        <div className="absolute left-0 top-1.5 flex items-center">
                            <div className="w-4 h-4 rounded-full bg-primary z-10"></div>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.year}</p>
                        <h4 className="font-semibold text-foreground">{item.role}</h4>
                         <p className="text-sm text-muted-foreground font-semibold">{item.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}



    