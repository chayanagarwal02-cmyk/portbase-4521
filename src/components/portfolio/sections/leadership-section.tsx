import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { leadershipData } from '@/lib/data';
import { Award, Star } from 'lucide-react';

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-8">
        <h2 className="text-2xl font-bold font-headline mb-8 flex items-center gap-2"><Award/> Leadership & Accolades</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadershipData.map((item) => (
          <Card key={item.id} className="transform transition-all hover:scale-105 hover:shadow-xl bg-secondary/30 border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
                <Badge variant={item.type === 'Leadership' ? 'default' : 'secondary'} className="bg-primary/20 text-primary border-primary/40">
                  {item.type}
                </Badge>
              </div>
              <CardDescription>{item.organization} - {item.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex items-center gap-2">
                {item.type === 'Accolade' ? <Trophy className="h-5 w-5 text-amber-500" /> : <Star className="h-5 w-5 text-amber-500" />}
                <span className="text-sm font-medium text-muted-foreground">{item.type === 'Accolade' ? 'Award' : 'Key Role'}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import { Trophy } from 'lucide-react';
