'use client';

import { useState, useRef, type MouseEvent } from 'react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function TiltCard({ project, onOpenModal }: { project: typeof projectsData[0]; onOpenModal: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)`;
    }
  };

  const image = placeholderImages.find(p => p.id === 'project-placeholder');

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onOpenModal}
      className="transform-style-3d transition-transform duration-200 ease-out cursor-pointer"
    >
      <Card className="h-full overflow-hidden">
        <CardHeader className="p-0 relative">
          {image && (
            <Image
                src={image.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">{project.title}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {projectsData.map((project) => (
          <TiltCard key={project.id} project={project} onOpenModal={() => setSelectedProject(project)} />
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <AnimatePresence>
          {selectedProject && (
              <DialogContent className="max-w-2xl">
                 <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-headline">{selectedProject.title}</DialogTitle>
                  <DialogDescription>{selectedProject.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold">Key Achievements</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm mt-1">
                      {selectedProject.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                       {selectedProject.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="font-semibold">Duration:</span> {selectedProject.duration}</div>
                    <div><span className="font-semibold">Team Size:</span> {selectedProject.teamSize}</div>
                  </div>
                  <div className="flex gap-4 mt-6">
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
                </div>
                </motion.div>
              </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </section>
  );
}
