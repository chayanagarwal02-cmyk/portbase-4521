'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Film } from 'lucide-react';

const videoData = [
  {
    id: 'dQw4w9WgXcQ', // Rick Astley - Never Gonna Give You Up
    title: 'A Smooth Landing in a Cessna 172',
    description: 'Join me for a scenic approach and smooth touchdown during a sunset flight.',
  },
  {
    id: '3JZ_D3pSS4U', // Typing Cat
    title: 'Pre-Flight Checklist Walkthrough',
    description: 'A detailed walkthrough of the essential pre-flight checks every pilot should know.',
  },
  {
    id: 'V--m1l6y_xA', // Dramatic Chipmunk
    title: 'Cross-Country Flight Time-Lapse',
    description: 'Experience a full cross-country journey condensed into a stunning few minutes.',
  },
];

export function VideosSection() {
  return (
    <section id="videos" className="py-16">
      <h2 className="text-3xl font-bold text-center font-headline flex items-center justify-center gap-3">
        <Film className="w-8 h-8 text-primary" />
        Flight Videos
      </h2>
      <p className="mt-2 text-center text-muted-foreground mb-12">
        Recordings from the cockpit and beyond.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoData.map((video) => (
          <Card key={video.id} className="overflow-hidden bg-card/50 group">
            <div className="aspect-video relative overflow-hidden">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Youtube className="w-16 h-16 text-white" />
                </div>
              </a>
            </div>
            <CardContent className="p-6">
              <CardTitle className="mb-2 text-lg">{video.title}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

    