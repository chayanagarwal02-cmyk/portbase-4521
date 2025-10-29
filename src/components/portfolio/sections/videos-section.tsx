
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Film } from 'lucide-react';

const videoEntries = [
  {
    url: 'https://www.youtube.com/watch?v=40lRmEFFy5w',
    title: 'Introduction to Airline Industry',
    description: 'Understanding the airline industry and its regulatory bodies, Understanding the characteristics of the Airline Industry and its characteristics, Understanding the organizational structure of the airline industry, Understanding the security, navigation, and traffic control, and Understanding the importance of safety and security.',
  },
  {
    url: 'https://youtu.be/IyT0PlFVo5Y?si=jfHdAfM_kR9qHkRW',
    title: '10 AMAZING FOGGY TAKEOFFS | Bangalore Airport Plane Spotting [VOBL/BLR] | December 2020 Edition',
    description: 'The variety of Indian Airlines of different manufacturers, Bengaluru International Airport sees every day is a treat for any plane spotter or an avgeek. This video includes a variety of airplanes departing from Bengaluru during Foggy Day.',
  },
];

function extractYouTubeID(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

const videoData = videoEntries.map(video => ({
  ...video,
  id: extractYouTubeID(video.url)
}));


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
                href={video.url}
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
