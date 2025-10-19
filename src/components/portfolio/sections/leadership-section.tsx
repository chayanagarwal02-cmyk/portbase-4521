import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { leadershipData } from '@/lib/data';
import { Award, Star } from 'lucide-react';

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-16">
      <h2 className="text-3xl font-bold text-center font-headline">Leadership & Accolades</h2>
      <p className="mt-2 text-center text-muted-foreground mb-12">Leading teams and achieving excellence.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadershipData.map((item) => (
          <Card key={item.id} className="transform transition-all hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{item.title}</CardTitle>
                <Badge variant={item.type === 'Leadership' ? 'default' : 'secondary'} className="bg-primary/20 text-primary">
                  {item.type}
                </Badge>
              </div>
              <CardDescription>{item.organization} - {item.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex items-center gap-2">
                {item.type === 'Accolade' ? <Award className="h-5 w-5 text-amber-500" /> : <Star className="h-5 w-5 text-amber-500" />}
                <span className="text-sm font-medium">{item.type === 'Accolade' ? 'Award' : 'Key Role'}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
