'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PortfolioHeader } from '@/components/portfolio/header';
import { HeroSection } from '@/components/portfolio/sections/hero-section';
import { LeadershipSection } from '@/components/portfolio/sections/leadership-section';
import { CertificatesSection } from '@/components/portfolio/sections/certificates-section';
import { BlogSection } from '@/components/portfolio/sections/blog-section';
import { AnalyticsSection } from '@/components/portfolio/sections/analytics-section';
import { CodeSection } from '@/components/portfolio/sections/code-section';
import { ProjectsSection } from '@/components/portfolio/sections/projects-section';
import { Chatbot } from '@/components/portfolio/chatbot';
import { contentVisibility, type Role } from '@/lib/data';

export function PortfolioView({ role }: { role: string }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('');
  const sectionsRef = useRef<Map<string, HTMLDivElement | null>>(new Map());

  const validRole = (role as Role) in contentVisibility ? (role as Role) : 'data-professional';
  const visibleTabs = contentVisibility[validRole];

  useEffect(() => {
    if (visibleTabs.length > 0) {
      setActiveTab(visibleTabs[0]);
    }
  }, [role]);

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
    Projects: <ProjectsSection />,
    Leadership: <LeadershipSection />,
    Certificates: <CertificatesSection />,
    Blog: <BlogSection />,
    Analytics: <AnalyticsSection />,
    Code: <CodeSection />,
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div id="scroll-progress"><div id="scroll-progress-bar"></div></div>
      <PortfolioHeader />
      <main className="container mx-auto px-4 py-8 mt-16">
        <HeroSection role={validRole} />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
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
