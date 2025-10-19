export type Role = 'hr' | 'data-professional' | 'hiring-manager' | 'stalker';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  achievements: string[];
  duration: string;
  teamSize: number;
  liveUrl: string;
  repoUrl: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface Leadership {
  id: number;
  title:string;
  organization: string;
  year: string;
  description: string;
  type: 'Leadership' | 'Accolade';
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  url: string;
}

export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
}

export interface AnalyticsData {
    quarterlyImpact: { quarter: string; impact: number }[];
    techDistribution: { name: string; value: number }[];
    weeklyActivity: { day: string; commits: number }[];
    skillGrowth: { month: string; Python: number; SQL: number }[];
}

export interface CodeSample {
  id: string;
  title: string;
  code: string;
}

export interface PerformanceMetric {
    name: string;
    value: number;
}

export interface SkillOverview {
    subject: string;
    value: number;
}

export interface Testimonial {
    id: number;
    name: string;
    title: string;
    quote: string;
}
