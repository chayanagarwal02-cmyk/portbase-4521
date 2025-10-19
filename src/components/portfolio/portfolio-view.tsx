'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PortfolioHeader } from '@/components/portfolio/header';
import { HeroSection } from '@/components/portfolio/sections/hero-section';
import { AboutSection } from '@/components/portfolio/sections/about-section';
import { LeadershipSection } from '@/components/portfolio/sections/leadership-section';
import { CertificatesSection } from '@/components/portfolio/sections/certificates-section';
import { ProjectsSection } from '@/components/portfolio/sections/projects-section';
import { Chatbot } from '@/components/portfolio/chatbot';
import { contentVisibility, type Role } from '@/lib/data';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function PortfolioView({ role }: { role: string }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('');
  const sectionsRef = useRef<Map<string, HTMLDivElement | null>>(new Map());

  const validRole = (role as Role) in contentVisibility ? (role as Role) : 'hr';
  const visibleTabs = contentVisibility[validRole];

  useEffect(() => {
    if (visibleTabs.length > 0) {
      setActiveTab(visibleTabs[0]);
    }
  }, [role, visibleTabs]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.push('/');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  useEffect(() => {
    const scrollProgress = document.getElementById('scroll-progress-bar');
    if (!scrollProgress) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      scrollProgress.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TABS_CONTENT: { [key: string]: React.ReactNode } = {
    'About Me': <AboutSection />,
    'Team Projects': <ProjectsSection />,
    'Certifications': <CertificatesSection />,
    'Contact': <div>Contact Content</div>,
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div id="scroll-progress"><div id="scroll-progress-bar"></div></div>
      <PortfolioHeader />
      <main className="container mx-auto px-4 py-8 mt-16">
        <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Selection
        </Link>
        <HeroSection role={validRole} />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {visibleTabs.map((tabName) => (
              <TabsTrigger key={tabName} value={tabName}>{tabName}</TabsTrigger>
            ))}
          </TabsList>

          {visibleTabs.map((tabName) => (
            <TabsContent key={tabName} value={tabName} className="mt-8">
              <div ref={(el) => sectionsRef.current.set(tabName, el)}>
                {TABS_CONTENT[tabName]}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <Chatbot role={validRole} />
    </div>
  );
}
