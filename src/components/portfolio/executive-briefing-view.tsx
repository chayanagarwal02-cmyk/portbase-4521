'use client';

import { ArrowRight, Plane, Goal, TrendingUp, Zap, Users, Lightbulb, DollarSign, ExternalLink, View } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { StrategicAlignmentSection } from './strategic-alignment-section';
import { AdvocacySection } from './advocacy-section';
import { ExecutiveContactSection } from './executive-contact-section';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';


const topMetrics = [
  {
    value: '$2.3M+',
    label: 'Value Delivered',
  },
  {
    value: '25+',
    label: 'Presentations & Talks',
  },
  {
    value: '5,000+',
    label: 'Community Members Reached',
  },
];

const caseStudies = [
  {
    icon: Goal,
    category: 'Data Engineering + Analytics',
    title: 'E-commerce Analytics Platform',
    challenge: 'E-commerce company drowning in siloed data across 8 systems, unable to track customer journey or inventory in real-time.',
    solution: 'Built end-to-end data pipeline using Airflow and dbt, consolidating data into centralized warehouse. Designed analytics dashboard and presented insights to executive team, then evangelized the data-driven approach across 12 departments through internal workshops.',
    impacts: [
      'Unified data from 8 sources into single source of truth',
      'Real-time inventory visibility achieved',
      'Trained 45+ employees on data literacy through workshops',
    ],
    value: '$450K',
  },
  {
    icon: TrendingUp,
    category: 'ML Science + Advocacy',
    title: 'SaaS Churn Prediction Model',
    challenge: 'SaaS platform experiencing 22% churn but no predictive capabilities. Executive team skeptical about ML investment.',
    solution: 'Developed churn prediction model using gradient boosting (85% accuracy). Created compelling presentation with ROI projections that secured C-suite buy-in. Presented case study at 3 industry conferences, positioning company as ML-forward innovator.',
    impacts: [
      'Churn reduced to 14%, saving $650K ARR',
      'Secured $200K ML infrastructure budget',
      'Generated 150+ inbound leads from conference talks',
    ],
    value: '$650K',
  },
  {
    icon: Zap,
    category: 'Automation + Evangelism',
    title: 'NLP Support Ticket Automation',
    challenge: "Support team overwhelmed by manual ticket routing. Engineering team resistant to ML adoption due to 'black box' concerns.",
    solution: "Built NLP classification system with explainable AI features. Created technical deep-dive blog series demystifying the model. Delivered company-wide presentation on 'ML for Non-Technical Teams' that changed perception of AI from threat to tool.",
    impacts: [
      'Response time reduced from 18hrs to 4hrs',
      'Engineering team now advocates for ML projects',
      'Blog series reached 12K+ readers, 400+ GitHub stars',
    ],
    value: '$380K',
  },
];


const technicalImpacts = [
    { label: "Data pipeline efficiency gain", value: "87%" },
    { label: "Cross-team data literacy workshops delivered", value: "12" },
    { label: "Teams actively using platform", value: "15" },
    { label: "Executive data-driven decisions increased", value: "+340%" }
]

const devAdvocacyMetrics = [
    { label: "GitHub stars on open-source projects", value: "1,800+" },
    { label: "Conference presentations delivered", value: "8" },
    { label: "Blog post total readership", value: "35K+" },
    { label: "Qualified leads generated for business", value: "120+" }
]

const businessRoiMetrics = [
    { label: "ML models in production", value: "8" },
    { label: "Executive presentations delivered", value: "15+" },
    { label: "Budget secured for ML initiatives", value: "$550K" },
    { label: "Projects approved after initial rejection", value: "5" }
]

function CaseStudiesDialog() {
    return (
        <div className="space-y-8">
            {caseStudies.map((study, index) => (
                <Card key={index} className="bg-card/70 backdrop-blur-sm border-border/50 p-6 text-left overflow-hidden">
                    <div className={`grid md:grid-cols-2 gap-6 items-center`}>
                        <motion.div 
                          className={`relative aspect-video rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}
                          initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image src={`https://picsum.photos/seed/${index+1}/600/400`} alt={study.title} layout="fill" objectFit="cover" />
                        </motion.div>
                        <motion.div 
                          className="flex flex-col"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3 className="text-xl font-bold font-headline mb-2">{study.title}</h3>
                            <p className="text-muted-foreground mb-4 flex-grow">{study.challenge}</p>
                            <div className="flex items-center justify-between text-sm">
                                <p><span className="font-semibold text-foreground">Impact Created:</span> <span className="text-primary">{study.value}</span></p>
                                <Button variant="link" asChild>
                                    <Link href="#">Project Demo <ExternalLink className="w-4 h-4 ml-1" /></Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export function ExecutiveBriefingView() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 md:py-24">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <Plane className="h-12 w-12 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Badge variant="outline" className="mb-4 text-sm py-1 px-3">
            Machine Learning Advocate
          </Badge>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-headline font-bold tracking-tight text-foreground md:text-4xl"
        >
          Building Data Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 max-w-2xl text-lg text-muted-foreground mx-auto"
        >
          Technical storyteller combining data engineering, analytics, and ML science with developer advocacy. I build data solutions that drive business value, then take the stage to share insights, inspire teams, and grow communities around data-driven innovation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">
                <View className="mr-2 h-4 w-4" />
                View Case Studies
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline">Executive Case Studies</DialogTitle>
                <DialogDescription>
                  A showcase of projects demonstrating technical execution and business impact.
                </DialogDescription>
              </DialogHeader>
              <div className="overflow-y-auto flex-grow pr-4">
                <CaseStudiesDialog />
              </div>
            </DialogContent>
          </Dialog>

          <Button size="lg" variant="outline">
            Schedule a Conversation
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {topMetrics.map((metric, index) => (
            <Card key={index} className="bg-card/50 border-border/50 py-6 px-4">
              <p className="text-4xl font-bold text-primary">{metric.value}</p>
              <p className="mt-2 text-muted-foreground">{metric.label}</p>
            </Card>
          ))}
        </motion.div>
      </div>

       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-24 w-full max-w-7xl"
      >
        <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">01 — Technical Impact + Advocacy</h2>
            <h3 className="mt-2 text-3xl font-headline font-bold">Building Solutions & Telling the Story</h3>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                I don't just build data pipelines and ML models—I bridge the gap between technical execution and business value. Each project includes clear storytelling that drives adoption, secures buy-in, and inspires teams to embrace data-driven thinking.
            </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                    <Card key={index} className="bg-card/70 backdrop-blur-sm border-border/50 p-6 text-left flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-secondary rounded-full border border-border">
                                <Icon className="w-5 h-5 text-primary"/>
                            </div>
                            <Badge variant="outline">{study.category}</Badge>
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                            <p className="text-sm text-muted-foreground mb-6">{study.challenge}</p>

                            <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                            <p className="text-sm text-muted-foreground mb-6">{study.solution}</p>
                            
                            <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                {study.impacts.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="mt-auto pt-6">
                            <div className="border-t border-border my-4"></div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary">{study.value}</p>
                                <p className="text-xs text-muted-foreground">Annual Value Created</p>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
      </motion.div>


      <StrategicAlignmentSection />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-24 w-full max-w-7xl space-y-8"
      >
        <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">03 — Quantifiable Results</h2>
            <h3 className="mt-2 text-3xl font-headline font-bold">Impact Across Code & Community</h3>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Success metrics span technical delivery, business value, and community growth. Here's the concrete impact I've delivered—from production ML models to conference stages, from cost savings to GitHub stars.
            </p>
        </div>
        
        <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-8">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                <div className="flex flex-col justify-center text-left space-y-4 pr-8">
                    <Badge variant="outline" className="w-fit">Technical Impact</Badge>
                    <p className="text-4xl font-bold text-primary">$1.2M</p>
                    <h4 className="text-lg font-semibold text-foreground">End-to-end data platform + internal advocacy program</h4>
                    <p className="text-muted-foreground">Annual value delivered through platform + adoption</p>
                    <div className="border-t border-border my-2"></div>
                    <p className="text-sm text-muted-foreground">10-month initiative</p>
                </div>
                <div className="space-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-8">
                    {technicalImpacts.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                        <p className="text-foreground">{item.label}</p>
                        <p className="text-lg font-bold text-primary">{item.value}</p>
                    </div>
                    ))}
                </div>
            </div>
        </Card>

        <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-8 text-left">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 pr-8">
                    <Badge variant="outline">Developer Advocacy</Badge>
                    <p className="text-4xl font-bold text-primary">5,200+</p>
                    <h4 className="text-lg font-semibold text-foreground">Open-source ML toolkit + community building</h4>
                    <p className="text-muted-foreground">Community members reached through content & events</p>
                    <div className="border-t border-border my-4"></div>
                    <p className="text-sm text-muted-foreground">2-year advocacy journey</p>
                </div>
                <div className="space-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-8">
                    {devAdvocacyMetrics.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                            <p className="text-muted-foreground">{item.label}</p>
                            <p className="font-bold text-foreground">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>

        <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-8 text-left">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 pr-8">
                    <Badge variant="outline">Business ROI</Badge>
                    <p className="text-4xl font-bold text-primary">450%</p>
                    <h4 className="text-lg font-semibold text-foreground">ML models deployed with executive buy-in secured</h4>
                    <p className="text-muted-foreground">Average ROI on ML projects through compelling storytelling</p>
                    <div className="border-t border-border my-4"></div>
                    <p className="text-sm text-muted-foreground">Across all projects</p>
                </div>
                <div className="space-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-8">
                    {businessRoiMetrics.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                            <p className="text-muted-foreground">{item.label}</p>
                            <p className="font-bold text-foreground">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
      </motion.div>
      
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 w-full max-w-7xl"
      >
        <Card className="bg-primary/5 border border-primary/20 p-8 text-center">
            <h4 className="text-xl font-headline font-bold text-foreground">The Best Technical Talent Can Both Build & Inspire</h4>
            <p className="mt-4 max-w-4xl mx-auto text-muted-foreground">
                In my 2 years as a Machine Learning Advocate, I've proven that technical depth and communication skills aren't mutually exclusive—they're multiplicative. My work spans the full data stack (engineering, analytics, science) while reaching 5,200+ community members through presentations, content, and open source. The result: $2.3M+ in technical value delivered, 450% average project ROI, and a growing community that amplifies your brand.
            </p>
        </Card>
      </motion.div>

      <AdvocacySection />

      <ExecutiveContactSection />

    </div>
  );
}

    