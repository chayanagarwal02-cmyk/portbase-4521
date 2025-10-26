'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, Users, Award, Star, Rocket, Briefcase, Plane, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis, Tooltip } from 'recharts';
import { SkillsOverviewChart } from '@/components/portfolio/skills-overview-chart';
import { profileData } from '@/lib/profile-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const quickStats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' },
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

const achievements = [
    { icon: Award, color: 'text-yellow-400 bg-yellow-900/50' },
    { icon: Star, color: 'text-orange-400 bg-orange-900/50' },
    { icon: CultNinjaIcon, color: 'text-rose-400 bg-rose-900/50' },
    { icon: Rocket, color: 'text-blue-400 bg-blue-900/50' },
]

const careerJourney = [
    { year: '2024-Present', role: 'Senior Data Analyst', description: 'Leading data initiatives and mentoring junior analysts.'},
    { year: '2021-2024', role: 'Data Analyst', description: 'Developed predictive models and created analytics dashboards.'},
    { year: '2019-2021', role: 'Junior Analyst', description: 'Assisted in data cleaning, ETL processes, and reporting.'}
]

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 p-4 rounded-lg shadow-lg">
          <p className="font-bold text-lg text-foreground">{data.title}</p>
          <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside">
            {data.key_metrics.map((metric: string) => <li key={metric}>{metric}</li>)}
          </ul>
        </div>
      );
    }
    return null;
  };

export function AboutSection({ profile }: { profile: string }) {
  const profileTitle = profile.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const currentProfileData = profileData[profileTitle as keyof typeof profileData];
  
  const chartColors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];


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
                <p className="text-xs text-muted-foreground">Data Analyst & Aviation Enthusiast</p>
                </div>
            </div>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Performance Metrics</CardTitle>
                <CardDescription>Hover over a chart for key metrics</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {currentProfileData.circles.map((metric, index) => (
                    <div key={metric.title}>
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
                                fill={chartColors[index % chartColors.length]}
                             />
                             <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--accent) / 0.5)' }}/>
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
                        <p className="mt-2 font-semibold text-muted-foreground">{metric.title}</p>
                    </div>
                    ))}
                </div>
            </CardContent>
        </Card>
      
      <Card>
          <CardHeader>
              <CardTitle className="font-headline">Key Metrics Breakdown</CardTitle>
              <CardDescription>A detailed view of the metrics that drive performance.</CardDescription>
          </CardHeader>
          <CardContent>
              <Table>
                  <TableHeader>
                      <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead>Indicator</TableHead>
                          <TableHead>Example Value</TableHead>
                          <TableHead>Description</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {currentProfileData.metrics.map((metric, index) => (
                          <TableRow key={index}>
                              <TableCell className="font-medium">{metric.category}</TableCell>
                              <TableCell>{metric.indicator}</TableCell>
                              <TableCell><Badge variant="secondary">{metric.example_value}</Badge></TableCell>
                              <TableCell className="text-muted-foreground">{metric.description}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Skills Overview</CardTitle>
        </CardHeader>
        <CardContent className="h-96 relative">
          <SkillsOverviewChart />
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
                <p className="text-sm text-muted-foreground">Customized content for {profileTitle}</p>
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

      <div>
        <h3 className="text-center text-xl font-headline mb-6">Achievements &amp; Certifications</h3>
        <div className="flex justify-center gap-4">
            {achievements.map((ach, i) => {
                const Icon = ach.icon;
                return (
                    <button key={i} className={`flex items-center justify-center w-16 h-16 rounded-full ${ach.color} transition-transform hover:scale-110`}>
                        <Icon className="w-8 h-8" />
                    </button>
                )
            })}
        </div>
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
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}