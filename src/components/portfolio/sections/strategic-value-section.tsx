'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Zap, BrainCircuit, BarChart, Users, TrendingUp } from 'lucide-react';

const strengths = [
  "Strategic Thinking",
  "Data-Driven Decision Making",
  "Technical Leadership",
  "Business Acumen",
  "Agile Methodologies",
  "Stakeholder Communication"
];

const techImpacts = [
    {
        tech: "Python & Machine Learning",
        description: "Transformed raw data into predictive insights, enabling proactive maintenance that cut unscheduled downtime by 18% and saved an estimated $2M annually.",
        icon: BrainCircuit
    },
    {
        tech: "Cloud (AWS/Azure) & ETL",
        description: "Engineered scalable, serverless ETL pipelines to process over 1 million data points per minute, ensuring real-time data availability for critical dashboards.",
        icon: Zap
    },
    {
        tech: "Data Visualization (PowerBI/Tableau)",
        description: "Developed interactive dashboards that democratized data access, empowering leadership to track KPIs and identify a 40% increase in operational efficiency.",
        icon: BarChart
    }
];

const businessGrowth = [
    {
        title: "Drive Revenue Growth",
        description: "By identifying new market opportunities and optimizing pricing strategies through advanced data analysis, I can directly contribute to top-line growth.",
        icon: DollarSign
    },
    {
        title: "Enhance Operational Efficiency",
        description: "My expertise in process automation and performance optimization allows me to identify and eliminate bottlenecks, reducing operational costs and improving throughput.",
        icon: TrendingUp
    },
    {
        title: "Foster a Data-Driven Culture",
        description: "I excel at mentoring teams and building data literacy across an organization, creating a culture where data is a shared asset for decision-making.",
        icon: Users
    }
]

export function StrategicValueSection() {
  return (
    <section id="strategic-value" className="py-8 space-y-16">
      <div>
        <h2 className="text-3xl font-bold text-center font-headline">Strategic Value & Business Impact</h2>
        <p className="mt-2 text-center text-muted-foreground mb-12">Connecting technical expertise with executive-level goals to drive sustainable growth.</p>
      </div>

      <Card className="bg-secondary/30">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Core Strengths</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {strengths.map((strength) => (
              <Badge key={strength} variant="secondary" className="text-sm px-3 py-1 bg-background">
                {strength}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-2xl font-bold font-headline mb-8 text-center">Technology as a Business Enabler</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {techImpacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-card/50 flex flex-col">
                <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
                  <div className="p-3 rounded-md bg-primary/10 border border-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{item.tech}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold font-headline mb-8 text-center">How I Contribute to Business Growth</h3>
        <div className="space-y-6">
            {businessGrowth.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Card key={index} className="bg-card/50 hover:bg-accent/50 transition-colors">
                        <CardContent className="p-6 flex items-start gap-6">
                            <Icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-lg text-foreground">{item.title}</h4>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
      </div>
    </section>
  );
}
    