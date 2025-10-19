import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plane } from 'lucide-react';
import { heroData, type Role } from '@/lib/data';

export function HeroSection({ role }: { role: Role }) {
  const { title, subtitle, badges } = heroData[role];

  return (
    <section id="hero" className="py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <Plane className="h-10 w-10 text-primary" />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold font-headline leading-tight">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-md text-muted-foreground">
            {subtitle}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
            {badges.map(badge => (
                <Badge key={badge.text} variant="secondary" className={badge.className}>{badge.text}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
