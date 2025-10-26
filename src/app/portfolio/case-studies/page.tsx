
import { PortfolioHeader } from '@/components/portfolio/header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Goal, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const caseStudies = [
  {
    icon: Goal,
    category: 'Data Engineering + Analytics',
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

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PortfolioHeader />
      <main className="container mx-auto px-4 py-8 mt-16">
        <Link href="/portfolio?role=cxo" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Executive Briefing
        </Link>
        <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Case Studies</h2>
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
      </main>
    </div>
  );
}
