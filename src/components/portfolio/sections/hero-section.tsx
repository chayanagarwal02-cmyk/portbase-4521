import { Button } from '@/components/ui/button';
import { Download, Mouse } from 'lucide-react';
import { heroData, type Role } from '@/lib/data';

export function HeroSection({ role }: { role: Role }) {
  const { title, subtitle } = heroData[role];

  return (
    <section id="hero" className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
        {subtitle}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg">
          <Download className="mr-2 h-5 w-5" />
          Download Resume
        </Button>
        <Button size="lg" variant="outline">
          Contact Me
        </Button>
      </div>
      <div className="mt-16 flex justify-center items-center gap-2 text-muted-foreground animate-bounce">
        <Mouse className="h-5 w-5" />
        <span className="text-sm">Scroll to explore</span>
      </div>
    </section>
  );
}
