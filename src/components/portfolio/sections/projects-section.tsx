'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projectsData, testimonialsData } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageSquareQuote, Folder, TrendingUp, Code, Database, Cloud, Cpu, BarChart2, Zap, Star, Plane, ChevronLeft, ChevronRight, Briefcase, FileCode, BarChart, Rocket } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ResponsiveContainer, BarChart as RechartsBarChart, XAxis, YAxis, Tooltip, Bar as RechartsBar } from 'recharts';
import { techStackData } from '@/lib/data';


const iconMap: { [key: string]: React.ElementType } = {
  Python: Code,
  'SQL/PostgreSQL': Database,
  'AWS/Azure': Cloud,
  'Machine Learning': Cpu,
  'Data Visualization': BarChart2,
  'ETL Pipelines': Zap,
  Briefcase: Briefcase,
  FileCode: FileCode,
  BarChart: BarChart,
  Rocket: Rocket,
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData[0]) | null>(null);
  const avatarImage = placeholderImages.find(p => p.id === 'avatar-placeholder');

  return (
    <section id="projects" className="py-8 space-y-16">
      <div>
        <h2 className="text-2xl font-bold font-headline mb-8 flex items-center gap-2"><Briefcase/> Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStackData.map((tech) => {
            const Icon = iconMap[tech.name] || Code;
            return (
              <Card key={tech.name} className="bg-secondary/30 text-center p-4 flex flex-col items-center justify-center">
                <Icon className="w-8 h-8 text-primary mb-2" />
                <p className="font-semibold text-sm mb-2">{tech.name}</p>
                <Progress value={tech.proficiency} className="h-1" />
              </Card>
            )
          })}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold font-headline mb-8 flex items-center gap-2"><Folder /> Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="bg-secondary/30 flex flex-col overflow-hidden group hover:border-primary/50 transition-all cursor-pointer" onClick={() => setSelectedProject(project)}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="mb-1 text-lg">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <TrendingUp className="w-4 h-4"/>
                  <span>{project.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-8 text-center flex items-center justify-center gap-2">What People Say <Plane className="w-6 h-6 text-primary"/></h2>
        <Carousel className="w-full max-w-3xl mx-auto" opts={{loop: true}}>
          <CarouselContent>
            {testimonialsData.map((testimonial) => {
              const testimonialAvatar = placeholderImages.find(p => p.id === 'testimonial-avatar-placeholder') || avatarImage;
              return(
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="bg-secondary/30 border-border/50 p-8 relative">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                      </div>
                      <p className="text-center text-lg italic text-foreground/80 mb-6">"{testimonial.quote}"</p>
                       <div className="flex items-center justify-center gap-4">
                        <Avatar>
                            {testimonialAvatar && <AvatarImage src={testimonialAvatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonialAvatar.imageHint}/>}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 text-8xl font-bold text-foreground/5 opacity-50 select-none">”</div>
                    </Card>
                  </div>
                </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]"/>
          <CarouselNext className="right-[-50px]"/>
        </Carousel>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <AnimatePresence>
          {selectedProject && (
              <DialogContent className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                 <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="space-y-6 py-6 pr-6 border-r border-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-headline">{selectedProject.title}</DialogTitle>
                    <DialogDescription>{selectedProject.description}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements</h4>
                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                          {selectedProject.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                        </div>
                      </div>
                      <div className="text-sm space-y-2">
                          <div><span className="font-semibold">Duration:</span> {selectedProject.duration}</div>
                          <div><span className="font-semibold">Team Size:</span> {selectedProject.teamSize}</div>
                      </div>
                  </div>
                  <div className="flex gap-4 pt-6 border-t border-border">
                      <Button asChild>
                          <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                      </Button>
                      <Button asChild variant="secondary">
                          <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" /> Source Code
                          </a>
                      </Button>
                  </div>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="space-y-6 py-6">
                   {selectedProject.visuals && (
                      <Card className="bg-secondary/50">
                         <CardHeader>
                            <CardTitle className="text-base">Project Impact</CardTitle>
                         </CardHeader>
                         <CardContent>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">{selectedProject.visuals.kpi.label}</p>
                              <p className="text-4xl font-bold text-primary">{selectedProject.visuals.kpi.value}</p>
                            </div>
                            <div className="h-40 mt-4">
                              <ResponsiveContainer width="100%" height="100%">
                                <RechartsBarChart data={selectedProject.visuals.chartData}>
                                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                  <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                                  <RechartsBar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                </RechartsBarChart>
                              </ResponsiveContainer>
                            </div>
                             <p className="text-center text-xs text-muted-foreground mt-2">{selectedProject.visuals.chartDescription}</p>
                         </CardContent>
                      </Card>
                   )}
                   {selectedProject.testimonials && (
                     <div>
                      <h4 className="font-semibold mb-4 text-center">Stakeholder Feedback</h4>
                       <Carousel className="w-full max-w-md mx-auto" opts={{loop: true}}>
                          <CarouselContent>
                            {selectedProject.testimonials.map((testimonial) => {
                              const testimonialAvatar = placeholderImages.find(p => p.id === 'testimonial-avatar-placeholder') || avatarImage;
                              return(
                                <CarouselItem key={testimonial.id}>
                                  <div className="p-1">
                                    <Card className="bg-secondary/50 border-border/50 p-6 text-center">
                                      <p className="italic text-foreground/80 mb-4">"{testimonial.quote}"</p>
                                      <div className="flex items-center justify-center gap-3">
                                        <Avatar className="w-8 h-8">
                                            {testimonialAvatar && <AvatarImage src={testimonialAvatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonialAvatar.imageHint}/>}
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                                            <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                                        </div>
                                    </div>
                                    </Card>
                                  </div>
                                </CarouselItem>
                              )})}
                          </CarouselContent>
                          {selectedProject.testimonials.length > 1 && <>
                            <CarouselPrevious className="left-[-20px] top-1/2 -translate-y-1/2 scale-75"/>
                            <CarouselNext className="right-[-20px] top-1/2 -translate-y-1/2 scale-75"/>
                          </>}
                        </Carousel>
                      </div>
                   )}
                </motion.div>
              </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </section>
  );
}
