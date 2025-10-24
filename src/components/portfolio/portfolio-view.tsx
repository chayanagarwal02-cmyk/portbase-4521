'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PortfolioHeader } from '@/components/portfolio/header';
import { HeroSection } from '@/components/portfolio/sections/hero-section';
import { AboutSection } from '@/components/portfolio/sections/about-section';
import { OverviewSection } from '@/components/portfolio/sections/overview-section';
import { LeadershipSection } from '@/components/portfolio/sections/leadership-section';
import { CertificatesSection } from '@/components/portfolio/sections/certificates-section';
import { ProjectsSection } from '@/components/portfolio/sections/projects-section';
import { ContactSection } from '@/components/portfolio/sections/contact-section';
import { Chatbot } from '@/components/portfolio/chatbot';
import { contentVisibility, type Role } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { CodeSection } from './sections/code-section';
import { AnalyticsSection } from './sections/analytics-section';
import { BlogSection } from './sections/blog-section';
import { GallerySection } from './sections/gallery-section';
import { VideosSection } from './sections/videos-section';
import { cn } from '@/lib/utils';
import { StrategicValueSection } from './sections/strategic-value-section';

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
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
  
    const bar = scrollProgress.querySelector('#scroll-progress-bar');
    if (!bar) return;
  
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      (bar as HTMLDivElement).style.width = `${progress}%`;
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TABS_CONTENT: { [key: string]: React.ReactNode } = {
    'About Me': <AboutSection />,
    'Overview': <OverviewSection />,
    'Team Projects': <ProjectsSection />,
    'Leadership': <LeadershipSection />,
    'Certifications': <CertificatesSection />,
    'Contact': <ContactSection />,
    'Projects': <ProjectsSection />,
    'Code': <CodeSection />,
    'Analytics': <AnalyticsSection />,
    'Blog': <BlogSection />,
    'Gallery': <GallerySection />,
    'Videos': <VideosSection />,
    'Strategic Value': <StrategicValueSection />,
  };
  
  const TAB_LABELS: { [key: string]: string } = {
    'Contact': 'Reach me out',
  }

  const gridColsClass = `grid-cols-${visibleTabs.length}`;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div id="scroll-progress" className="fixed top-[4rem] left-0 w-full h-[2px] bg-border/20 z-50"><div id="scroll-progress-bar" className="h-full bg-primary"></div></div>
      <PortfolioHeader />
      <main className="container mx-auto px-4 py-8 mt-16">
        <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Selection
        </Link>
        <HeroSection role={validRole} />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
          <TabsList className={cn('grid w-full', gridColsClass)}>
            {visibleTabs.map((tabName) => (
              <TabsTrigger key={tabName} value={tabName}>{TAB_LABELS[tabName] || tabName}</TabsTrigger>
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

    