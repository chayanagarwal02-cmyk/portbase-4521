'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type AlignmentCategory = 'health' | 'retail' | 'finance';

const alignmentData = {
  health: {
    challenge: 'Build AI diagnostics capabilities AND grow developer community around healthcare ML',
    marketContext: 'Healthcare AI market at $188B by 2030; companies with strong developer communities capture 60% more market share',
    strategicAlignment: 'Support CEO’s vision to become leading AI-driven platform while building vibrant community of healthcare data practitioners',
    myApproach: 'Your Q2 2024 report emphasized both technical innovation and developer relations as key growth drivers. You’re seeking talent who can build AND evangelize',
    contribution: 'TECHNICAL: Built ML model for early disease detection (87% accuracy, 2-week earlier intervention). ADVOCACY: Launched ‘Healthcare ML Practitioners’ monthly meetup (250+ members), spoke at 2 medical AI conferences, created open-source toolkit with 800+ GitHub stars. This dual approach accelerates both product development and market awareness.',
  },
  retail: {
    challenge: 'Reduce supply chain inefficiencies AND position the company as a leader in sustainable retail technology',
    marketContext: 'Retailers lose $1T+ annually to supply chain issues. 75% of Gen-Z consumers prefer sustainable brands.',
    strategicAlignment: "Align with the company's new ‘Green Logistics’ initiative while driving tangible cost savings through AI-powered inventory management.",
    myApproach: 'Your annual report highlights a commitment to reducing carbon footprint. You need a solution that is both economically and environmentally impactful.',
    contribution: 'TECHNICAL: Developed an inventory prediction model that reduced overstock by 30% and stockouts by 22%. ADVOCACY: Authored a whitepaper on "AI in Sustainable Retail" featured in Forbes, and presented at the National Retail Federation conference.',
  },
  finance: {
    challenge: 'Enhance fraud detection systems AND build trust with customers through transparent AI',
    marketContext: 'Financial institutions face rising threats from sophisticated fraud schemes. 80% of customers demand more transparency in how AI is used.',
    strategicAlignment: 'Solidify your position as the most secure and transparent fintech platform by leveraging explainable AI (XAI) in fraud detection.',
    myApproach: 'Your latest shareholder letter stressed the importance of customer trust. You require a technical solution that also serves as a powerful marketing and trust-building tool.',
    contribution: 'TECHNICAL: Implemented a real-time fraud detection system using an XAI framework, reducing false positives by 40%. ADVOCACY: Created a public-facing blog series and interactive demo explaining how our AI protects customers, which was praised by industry regulators.',
  },
};

const tabs: { id: AlignmentCategory, icon: React.ElementType, title: string, subtitle: string }[] = [
    { id: 'health', icon: Rocket, title: 'HealthTech Solutions', subtitle: 'Healthcare Technology' },
    { id: 'retail', icon: Users, title: 'RetailTech Inc.', subtitle: 'E-commerce & Retail' },
    { id: 'finance', icon: Lightbulb, title: 'FinServe Digital', subtitle: 'Financial Services' },
]

export function StrategicAlignmentSection() {
  const [activeTab, setActiveTab] = useState<AlignmentCategory>('health');
  const activeData = alignmentData[activeTab];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-24 w-full max-w-7xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">02 — Strategic Alignment</h2>
        <h3 className="mt-2 text-3xl font-headline font-bold">Technical Excellence Meets Market Presence</h3>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          Companies need both cutting-edge ML capabilities AND the ability to tell compelling stories about their innovation. I deliver both—building robust data solutions while establishing thought leadership that drives brand awareness and customer trust.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                        'flex items-center justify-center gap-4 p-4 rounded-lg border-2 transition-all',
                        activeTab === tab.id
                        ? 'bg-primary/10 border-primary shadow-lg'
                        : 'bg-card/50 border-border hover:bg-accent hover:border-primary/50'
                    )}
                >
                    <Icon className={cn('w-6 h-6', activeTab === tab.id ? 'text-primary' : 'text-muted-foreground')} />
                    <div className="text-left">
                        <p className="font-semibold text-foreground">{tab.title}</p>
                        <p className="text-sm text-muted-foreground">{tab.subtitle}</p>
                    </div>
                </button>
            )
        })}
      </div>

      <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-8 text-left">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
                <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                <p className="text-muted-foreground">{activeData.challenge}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-2">Strategic Alignment</h4>
                <p className="text-muted-foreground">{activeData.strategicAlignment}</p>
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-2">Market Context</h4>
                <p className="text-muted-foreground">{activeData.marketContext}</p>
            </div>
             <div>
                <h4 className="font-semibold text-foreground mb-2">My Approach</h4>
                <p className="text-muted-foreground">{activeData.myApproach}</p>
            </div>
        </div>
        <div className="border-t border-border my-6"></div>
        <div>
            <h4 className="font-semibold text-foreground mb-2">Your Contribution</h4>
            <div className="p-4 rounded-md border border-dashed border-primary/30 bg-primary/10">
              <p className="text-muted-foreground">
                <span className="font-bold text-foreground">TECHNICAL:</span> {activeData.contribution.split('ADVOCACY:')[0]}
                <br /><br />
                <span className="font-bold text-foreground">ADVOCACY:</span> {activeData.contribution.split('ADVOCACY:')[1]}
              </p>
            </div>
        </div>
      </Card>
    </motion.div>
  );
}
