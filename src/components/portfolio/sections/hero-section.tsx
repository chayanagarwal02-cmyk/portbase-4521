import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plane } from 'lucide-react';
import { heroData, type Role } from '@/lib/data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function HeroSection({ 
  role,
  activeProfile,
  onProfileChange
}: { 
  role: Role,
  activeProfile: string,
  onProfileChange: (profile: string) => void 
}) {
  const { title, subtitle, badges, profiles } = heroData[role];

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
        <div className="text-center md:text-left flex-grow">
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
        {profiles && profiles.length > 0 && (
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <Select value={activeProfile} onValueChange={onProfileChange}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Select a Profile" />
              </SelectTrigger>
              <SelectContent>
                {profiles.map(p => (
                  <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </section>
  );
}

    