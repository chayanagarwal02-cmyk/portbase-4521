'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Mic, Users, TrendingUp, FileText, GitFork } from 'lucide-react';

const speakingEvents = [
  {
    title: 'Data Engineering Summit 2024',
    description: "Keynote: 'Building Scalable ML Pipelines on a Budget' - Shared how we reduced infrastructure costs by 60% while improving model training speed",
    metric: '500+',
    metricLabel: 'Attendees'
  },
  {
    title: 'ML in Production Conference',
    description: "Workshop: 'From Jupyter Notebook to Production' - 3-hour hands-on session teaching deployment best practices",
    metric: '120',
    metricLabel: 'Participants'
  },
  {
    title: 'Local Data Science Meetup (Monthly)',
    description: 'Founded and host monthly meetup covering real-world ML case studies. Built community of 250+ data practitioners',
    metric: '250+',
    metricLabel: 'Members'
  }
];

const contentCreation = [
    {
        icon: FileText,
        title: "Technical Blog Series: 'Data Engineering Fundamentals'",
        description: "8-part deep dive on building production data pipelines. Covers architecture, testing, monitoring, and cost optimization",
        metric: "25K+",
        metricLabel: "Readers"
    },
    {
        icon: FileText,
        title: "ML Case Studies & Post-Mortems",
        description: "Honest breakdowns of ML projects—what worked, what failed, and lessons learned. Readers appreciate the transparency",
        metric: "12K+",
        metricLabel: "Readers"
    },
    {
        icon: FileText,
        title: "YouTube: 'ML Explained Simply'",
        description: "Video series demystifying complex ML concepts for business stakeholders and aspiring data scientists",
        metric: "3,500+",
        metricLabel: "Subscribers"
    }
];

const openSourceContributions = [
  {
    title: 'ml-pipeline-toolkit',
    description: 'Python library for building reproducible ML pipelines with built-in versioning, monitoring, and testing utilities',
    metric: '1,800+',
    metricLabel: 'GitHub Stars'
  },
  {
    title: 'data-quality-framework',
    description: 'Lightweight data validation framework that integrates with dbt and Airflow for automated quality checks',
    metric: '650+',
    metricLabel: 'GitHub Stars'
  },
  {
    title: 'Contributions to Popular Projects',
    description: 'Regular contributor to scikit-learn, pandas, and dbt. Merged PRs include bug fixes and documentation improvements',
    metric: '15+',
    metricLabel: 'Merged PRs'
  }
];


const summaryMetrics = [
  {
    icon: Calendar,
    value: '25+',
    label: 'Total Presentations'
  },
  {
    icon: Users,
    value: '5,200+',
    label: 'Community Reach'
  },
  {
    icon: TrendingUp,
    value: '120+',
    label: 'Qualified Leads Generated'
  }
];

export function AdvocacySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-24 w-full max-w-7xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">04 — Advocacy & Thought Leadership</h2>
        <h3 className="mt-2 text-3xl font-headline font-bold">Sharing Knowledge, Growing Communities</h3>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          Technical expertise is amplified when shared. Through speaking, writing, and open source contributions, I help teams adopt data-driven practices while building brand awareness and community trust.
        </p>
      </div>

      <Tabs defaultValue="speaking" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
          <TabsTrigger value="speaking">Speaking</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="open-source">Open Source</TabsTrigger>
        </TabsList>
        <TabsContent value="speaking" className="mt-8">
          <div className="space-y-6">
            {speakingEvents.map((event, index) => (
              <Card key={index} className="bg-card/70 backdrop-blur-sm border-border/50 p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-start gap-4">
                    <Mic className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">{event.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xl font-bold text-primary">{event.metric}</p>
                    <p className="text-xs text-muted-foreground">{event.metricLabel}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="content" className="mt-8">
            <div className="space-y-6">
                {contentCreation.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Card key={index} className="bg-card/70 backdrop-blur-sm border-border/50 p-6">
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex items-start gap-4">
                                    <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div className="text-left">
                                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0 min-w-[80px]">
                                    <p className="text-xl font-bold text-primary">{item.metric}</p>
                                    <p className="text-xs text-muted-foreground">{item.metricLabel}</p>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </TabsContent>
        <TabsContent value="open-source" className="mt-8">
            <div className="space-y-6">
            {openSourceContributions.map((item, index) => (
              <Card key={index} className="bg-card/70 backdrop-blur-sm border-border/50 p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-start gap-4">
                    <GitFork className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 min-w-[80px]">
                    <p className="text-xl font-bold text-primary">{item.metric}</p>
                    <p className="text-xs text-muted-foreground">{item.metricLabel}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {summaryMetrics.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="bg-card/50 border-border/50 py-6 px-4">
                <div className="flex justify-center mb-2">
                    <Icon className="w-6 h-6 text-muted-foreground"/>
                </div>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </Card>
          )
        })}
      </div>

    </motion.div>
  );
}
